/**
 * Production Hybrid Retrieval Engine (BM25 + Dense Vector + Reciprocal Rank Fusion)
 * 
 * Why Reciprocal Rank Fusion (RRF)?
 * - BM25 scores are unbounded positive numbers (e.g. 2.5 to 45.0).
 * - Cosine scores are bounded between -1.0 and 1.0.
 * Directly adding them requires arbitrary normalization weights that break easily.
 * RRF operates on ranks: RRF(d) = sum( 1 / (k + rank(d)) ), where k = 60.
 * It reliably boosts documents that perform well across both lexical and semantic methods.
 */

import { BM25Index } from "./bm25.js";
import { VectorIndex } from "./vector.js";
import { knowledgeChunks } from "./knowledge-base.js";

export class HybridRetrievalEngine {
  /**
   * @param {Array<any>} [chunks] Knowledge base chunks
   * @param {number} [kParam] RRF smoothing constant (default: 60)
   */
  constructor(chunks = knowledgeChunks, kParam = 60) {
    this.chunks = chunks;
    this.kParam = kParam;
    this.bm25 = new BM25Index();
    this.vectorIndex = new VectorIndex(256);

    this.init();
  }

  init() {
    this.bm25.index(this.chunks);
    this.vectorIndex.index(this.chunks);
  }

  /**
   * Perform hybrid search using Reciprocal Rank Fusion
   * @param {string} query User query
   * @param {Object} options
   * @param {number} [options.topK=3] Number of final chunks to return
   * @param {number} [options.bm25Limit=5] Candidates from BM25
   * @param {number} [options.vectorLimit=5] Candidates from Vector
   * @param {number} [options.minScoreThreshold=0.012] Minimum RRF score to consider relevant
   * @returns {{
   *   isRelevant: boolean,
   *   chunks: Array<{
   *     chunk: any,
   *     rrfScore: number,
   *     bm25Rank: number|null,
   *     vectorRank: number|null,
   *     bm25Score: number,
   *     vectorScore: number
   *   }>,
   *   confidence: number
   * }}
   */
  search(query, options = {}) {
    const {
      topK = 3,
      bm25Limit = 5,
      vectorLimit = 5,
      minScoreThreshold = 0.012
    } = options;

    if (!query || typeof query !== "string" || query.trim() === "") {
      return { isRelevant: false, chunks: [], confidence: 0 };
    }

    const bm25Results = this.bm25.search(query, bm25Limit);
    const vectorResults = this.vectorIndex.search(query, vectorLimit);

    // If neither search engine found anything above noise floor
    if (bm25Results.length === 0 && vectorResults.length === 0) {
      return { isRelevant: false, chunks: [], confidence: 0 };
    }

    // Map: chunk.id -> metadata and combined score
    const fusedMap = new Map();

    // 1. Process BM25 ranks
    for (const res of bm25Results) {
      const id = res.chunk.id;
      const rrfContribution = 1 / (this.kParam + res.rank);
      fusedMap.set(id, {
        chunk: res.chunk,
        rrfScore: rrfContribution,
        bm25Rank: res.rank,
        vectorRank: null,
        bm25Score: res.score,
        vectorScore: 0
      });
    }

    // 2. Process Vector ranks and fuse
    for (const res of vectorResults) {
      const id = res.chunk.id;
      const rrfContribution = 1 / (this.kParam + res.rank);
      if (fusedMap.has(id)) {
        const existing = fusedMap.get(id);
        existing.rrfScore += rrfContribution;
        existing.vectorRank = res.rank;
        existing.vectorScore = res.score;
      } else {
        fusedMap.set(id, {
          chunk: res.chunk,
          rrfScore: rrfContribution,
          bm25Rank: null,
          vectorRank: res.rank,
          bm25Score: 0,
          vectorScore: res.score
        });
      }
    }

    // Sort descending by RRF score
    const sorted = Array.from(fusedMap.values())
      .sort((a, b) => b.rrfScore - a.rrfScore);

    const topResults = sorted.slice(0, topK);
    const topScore = topResults.length > 0 ? topResults[0].rrfScore : 0;

    // Production Relevance Gate:
    // A query is only grounded if:
    // 1. It matched exact domain terminology in BM25 (hasLexicalEvidence), OR
    // 2. It achieved confident semantic vector similarity (best vectorScore >= 0.35), OR
    // 3. Both methods agreed!
    const hasLexicalEvidence = bm25Results.length > 0;
    const hasStrongSemanticEvidence = vectorResults.length > 0 && vectorResults[0].score >= 0.35;
    const isRelevant = (hasLexicalEvidence || hasStrongSemanticEvidence) && topScore >= minScoreThreshold;

    return {
      isRelevant,
      chunks: isRelevant ? topResults : [],
      confidence: isRelevant ? Math.min(1.0, topScore * 30) : 0
    };
  }

  /**
   * Format retrieved chunks into grounded system context for LLM prompt
   * @param {Array<{chunk: any}>} retrievedResults 
   * @returns {string}
   */
  formatContextForPrompt(retrievedResults) {
    if (!retrievedResults || retrievedResults.length === 0) {
      return "No relevant context found in Murugesh's portfolio records.";
    }

    return retrievedResults
      .map(({ chunk }, index) => {
        const metricsStr = (chunk.verifiedMetrics || []).map((m) => `  - ${m}`).join("\n");
        return [
          `[Source ${index + 1}: ${chunk.title}]`,
          `Context Header: ${chunk.contextHeader}`,
          `URL Anchor: ${chunk.sourceUrl}`,
          `Content: ${chunk.content}`,
          `Verified Metrics:\n${metricsStr}`
        ].join("\n");
      })
      .join("\n\n---\n\n");
  }
}

// Singleton instance for serverless reuse
export const defaultEngine = new HybridRetrievalEngine();
