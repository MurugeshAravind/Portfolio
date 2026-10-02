/**
 * Production Vector Math & Dense Similarity Engine
 * 
 * Includes:
 * 1. Dot product & L2 normalization.
 * 2. Cosine similarity: cos(theta) = (A . B) / (||A|| * ||B||)
 * 3. High-performance deterministic feature hash embedder (256-D):
 *    Produces dense semantic vectors using character n-grams and token hashing.
 *    Enables instant, zero-cost, offline vector similarity in serverless/edge environments
 *    without network hops or external embedding API latency.
 */

import { tokenize } from "./bm25.js";

/**
 * Compute dot product of two equal-length arrays
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {number}
 */
export function dotProduct(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

/**
 * Compute Euclidean (L2) norm of a vector
 * @param {number[]} vec 
 * @returns {number}
 */
export function l2Norm(vec) {
  let sum = 0;
  for (let i = 0; i < vec.length; i++) {
    sum += vec[i] * vec[i];
  }
  return Math.sqrt(sum);
}

/**
 * Normalize vector to unit length (L2 norm = 1.0)
 * When vectors are normalized, dotProduct(a, b) === cosineSimilarity(a, b)
 * @param {number[]} vec 
 * @returns {number[]}
 */
export function l2Normalize(vec) {
  const norm = l2Norm(vec);
  if (norm === 0) return vec;
  return vec.map((val) => val / norm);
}

/**
 * Compute cosine similarity between two vectors
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {number} Value in range [-1.0, 1.0]
 */
export function cosineSimilarity(a, b) {
  if (a.length !== b.length || a.length === 0) return 0;
  const normA = l2Norm(a);
  const normB = l2Norm(b);
  if (normA === 0 || normB === 0) return 0;
  return dotProduct(a, b) / (normA * normB);
}

/**
 * 32-bit Murmur-inspired fast string hash
 * @param {string} str 
 * @returns {number}
 */
function hashString(str) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * Generate a dense normalized vector for text using subword character n-grams
 * and semantic token hashing.
 * 
 * Why this is valuable for production portfolio RAG:
 * - Subword n-grams capture morphology ("migrating", "migration", "migrated" all share trigrams).
 * - Zero external API dependency, zero cost, 0ms latency.
 * - Perfectly deterministic for continuous integration (CI) and edge functions.
 * 
 * @param {string} text 
 * @param {number} dimensions 
 * @returns {number[]} Normalized float vector of length `dimensions`
 */
export function embedText(text, dimensions = 512) {
  const vector = new Array(dimensions).fill(0);
  if (!text || typeof text !== "string") return vector;

  const tokens = tokenize(text);
  if (tokens.length === 0) return vector;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // 1. Whole word embedding
    const tokenHash = hashString(token);
    const index = tokenHash % dimensions;
    const sign = (tokenHash & 1) === 0 ? 1 : -1;
    vector[index] += sign * 2.0;

    // 2. Word bi-grams (captures phrases like "banking onboarding", "react migration")
    if (i < tokens.length - 1) {
      const bigram = `${token}_${tokens[i + 1]}`;
      const biHash = hashString(bigram);
      const biIndex = biHash % dimensions;
      const biSign = (biHash & 1) === 0 ? 1 : -1;
      vector[biIndex] += biSign * 1.5;
    }

    // 3. Subwords for longer technical words (length >= 5) to capture morphological roots
    if (token.length >= 5) {
      for (let len = 4; len <= 5 && len <= token.length; len++) {
        for (let j = 0; j <= token.length - len; j++) {
          const sub = token.slice(j, j + len);
          const subHash = hashString(sub);
          const subIndex = subHash % dimensions;
          const subSign = (subHash & 1) === 0 ? 0.5 : -0.5;
          vector[subIndex] += subSign;
        }
      }
    }
  }

  return l2Normalize(vector);
}

export class VectorIndex {
  constructor(dimensions = 256) {
    this.dimensions = dimensions;
    this.documents = [];
    this.vectors = [];
  }

  /**
   * Index knowledge chunks with pre-computed or generated vectors
   * @param {Array<{id: string, content: string, title?: string, keywords?: string[]}>} chunks 
   * @param {number[][]} [precomputedVectors] Optional pre-calculated embeddings
   */
  index(chunks, precomputedVectors = null) {
    this.documents = chunks;
    this.vectors = [];

    for (let i = 0; i < chunks.length; i++) {
      if (precomputedVectors && precomputedVectors[i]) {
        this.vectors.push(l2Normalize(precomputedVectors[i]));
      } else {
        const enriched = [
          chunks[i].title || "",
          (chunks[i].keywords || []).join(" "),
          chunks[i].content || ""
        ].join(" ");
        this.vectors.push(embedText(enriched, this.dimensions));
      }
    }
  }

  /**
   * Retrieve top-k nearest neighbors by cosine similarity
   * @param {string|number[]} queryTextOrVector 
   * @param {number} topK 
   * @param {number} minSimilarity Floor threshold to eliminate random noise
   * @returns {Array<{chunk: any, score: number, rank: number}>}
   */
  search(queryTextOrVector, topK = 5, minSimilarity = 0.22) {
    if (this.vectors.length === 0) return [];

    const queryVec = typeof queryTextOrVector === "string"
      ? embedText(queryTextOrVector, this.dimensions)
      : l2Normalize(queryTextOrVector);

    const scores = this.vectors.map((vec, index) => ({
      chunk: this.documents[index],
      score: dotProduct(queryVec, vec), // both are normalized, so dot product == cosine similarity
      index
    }));

    return scores
      .filter((item) => item.score >= minSimilarity)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map((item, rank) => ({
        chunk: item.chunk,
        score: item.score,
        rank: rank + 1
      }));
  }
}
