/**
 * Production BM25 (Best Matching 25) Sparse Search Engine
 * 
 * Why BM25 in RAG?
 * Dense vectors (embeddings) are great for concepts ("how do you lead teams?"),
 * but notoriously weak at exact technical keywords ("WCAG 2.1 AA", "Next.js 16", "PII").
 * BM25 calculates probabilistic term frequency with length normalization.
 * 
 * Formula:
 * IDF(q) = ln((N - n(q) + 0.5) / (n(q) + 0.5) + 1)
 * Score(D, Q) = sum( IDF(q) * (f(q, D) * (k1 + 1)) / (f(q, D) + k1 * (1 - b + b * (|D| / avgdl))) )
 */

const STOP_WORDS = new Set([
  "a", "about", "above", "after", "again", "against", "all", "am", "an", "and",
  "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being",
  "below", "between", "both", "but", "by", "can", "can't", "cannot", "could",
  "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down",
  "during", "each", "few", "for", "from", "further", "had", "hadn't", "has",
  "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her",
  "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's",
  "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it",
  "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my",
  "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other",
  "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't",
  "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such",
  "than", "that", "that's", "the", "their", "theirs", "them", "themselves",
  "then", "there", "there's", "these", "they", "they'd", "they'll", "they're",
  "they've", "this", "those", "through", "to", "too", "under", "until", "up",
  "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were",
  "weren't", "what", "what's", "when", "when's", "where", "where's", "which",
  "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would",
  "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours",
  "yourself", "yourselves"
]);

/**
 * Tokenize string into normalized lowercase terms, removing punctuation and stopwords
 * @param {string} text 
 * @returns {string[]}
 */
export function tokenize(text) {
  if (!text || typeof text !== "string") return [];
  
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.-]/g, " ") // preserves C++, C#, .NET, v4, etc.
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

export class BM25Index {
  /**
   * @param {number} k1 Term frequency saturation parameter (standard: 1.2 - 2.0)
   * @param {number} b Document length normalization parameter (standard: 0.75)
   */
  constructor(k1 = 1.2, b = 0.75) {
    this.k1 = k1;
    this.b = b;
    this.documents = [];
    this.docLengths = [];
    this.avgDocLength = 0;
    this.docFreqs = new Map(); // term -> number of documents containing term
    this.termFreqs = [];       // array of Map(term -> count) per document
    this.totalDocs = 0;
  }

  /**
   * Index knowledge chunks
   * @param {Array<{id: string, content: string, keywords?: string[], title?: string}>} chunks 
   */
  index(chunks) {
    this.documents = chunks;
    this.totalDocs = chunks.length;
    this.docLengths = [];
    this.termFreqs = [];
    this.docFreqs.clear();

    let totalLength = 0;

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      // Boost title and keywords by including them with higher frequency
      const enrichedText = [
        chunk.title || "",
        chunk.title || "",
        ...(chunk.keywords || []),
        ...(chunk.keywords || []),
        chunk.content || ""
      ].join(" ");

      const tokens = tokenize(enrichedText);
      const length = tokens.length;
      this.docLengths.push(length);
      totalLength += length;

      const tf = new Map();
      const uniqueTerms = new Set();

      for (const token of tokens) {
        tf.set(token, (tf.get(token) || 0) + 1);
        uniqueTerms.add(token);
      }

      this.termFreqs.push(tf);

      for (const term of uniqueTerms) {
        this.docFreqs.set(term, (this.docFreqs.get(term) || 0) + 1);
      }
    }

    this.avgDocLength = this.totalDocs > 0 ? totalLength / this.totalDocs : 0;
  }

  /**
   * Calculate Inverse Document Frequency (IDF) with Robertson-Spärck Jones smoothing
   * @param {string} term 
   * @returns {number}
   */
  idf(term) {
    const n = this.docFreqs.get(term) || 0;
    return Math.log((this.totalDocs - n + 0.5) / (n + 0.5) + 1);
  }

  /**
   * Search and score chunks for a query
   * @param {string} query 
   * @param {number} topK 
   * @returns {Array<{chunk: any, score: number, rank: number}>}
   */
  search(query, topK = 5) {
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0 || this.totalDocs === 0) return [];

    const scores = new Array(this.totalDocs).fill(0);

    for (const token of queryTokens) {
      const idfWeight = this.idf(token);
      if (idfWeight <= 0) continue;

      for (let i = 0; i < this.totalDocs; i++) {
        const tf = this.termFreqs[i].get(token) || 0;
        if (tf === 0) continue;

        const docLen = this.docLengths[i];
        const numerator = tf * (this.k1 + 1);
        const denominator = tf + this.k1 * (1 - this.b + this.b * (docLen / this.avgDocLength));
        
        scores[i] += idfWeight * (numerator / denominator);
      }
    }

    const results = scores
      .map((score, index) => ({
        chunk: this.documents[index],
        score,
        index
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map((item, rank) => ({
        chunk: item.chunk,
        score: item.score,
        rank: rank + 1
      }));

    return results;
  }
}
