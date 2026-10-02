import { describe, it, expect, beforeEach } from "vitest";
import { tokenize, BM25Index } from "../lib/rag/bm25.js";
import { dotProduct, l2Normalize, cosineSimilarity, embedText, VectorIndex } from "../lib/rag/vector.js";
import { HybridRetrievalEngine } from "../lib/rag/retrieval.js";
import { knowledgeChunks } from "../lib/rag/knowledge-base.js";

describe("Production RAG - BM25 Tokenizer & Index", () => {
  it("tokenizes and cleans text removing stopwords", () => {
    const tokens = tokenize("The quick brown fox is building React 19 apps with Next.js!");
    expect(tokens).toContain("quick");
    expect(tokens).toContain("brown");
    expect(tokens).toContain("react");
    expect(tokens).toContain("19");
    expect(tokens).toContain("next.js");
    expect(tokens).not.toContain("the");
    expect(tokens).not.toContain("is");
    expect(tokens).not.toContain("with");
  });

  it("calculates BM25 scores and ranks matching documents", () => {
    const bm25 = new BM25Index();
    bm25.index(knowledgeChunks);

    const results = bm25.search("PII masking and banking compliance", 3);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].chunk.id).toBe("work-oao-banking");
  });

  it("finds exact technology keywords like WCAG 2.1 AA", () => {
    const bm25 = new BM25Index();
    bm25.index(knowledgeChunks);

    const results = bm25.search("WCAG accessibility", 2);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].chunk.id).toBe("work-redhat-migration");
  });
});

describe("Production RAG - Vector Math & Dense Similarity", () => {
  it("computes cosine similarity accurately", () => {
    const v1 = [1, 0, 0];
    const v2 = [1, 0, 0];
    const v3 = [0, 1, 0];

    expect(cosineSimilarity(v1, v2)).toBeCloseTo(1.0, 4);
    expect(cosineSimilarity(v1, v3)).toBeCloseTo(0.0, 4);
  });

  it("produces deterministic L2 normalized embeddings", () => {
    const emb1 = embedText("Frontend Tech Lead at Cognizant", 256);
    const emb2 = embedText("Frontend Tech Lead at Cognizant", 256);
    expect(emb1).toEqual(emb2);

    // Vector length should be unit normalized (approx 1.0)
    const norm = Math.sqrt(dotProduct(emb1, emb1));
    expect(norm).toBeCloseTo(1.0, 4);
  });
});

describe("Production RAG - Hybrid Retrieval Engine (RRF)", () => {
  let engine;

  beforeEach(() => {
    engine = new HybridRetrievalEngine(knowledgeChunks);
  });

  it("retrieves retail banking case study for banking inquiries", () => {
    const result = engine.search("What did Murugesh do on the banking onboarding platform?");
    expect(result.isRelevant).toBe(true);
    expect(result.chunks.length).toBeGreaterThan(0);
    expect(result.chunks[0].chunk.id).toBe("work-oao-banking");
    expect(result.chunks[0].chunk.verifiedMetrics).toContain("85%+ code test coverage");
  });

  it("retrieves Red Hat migration for Angular to React query", () => {
    const result = engine.search("Tell me about the Angular to React migration");
    expect(result.isRelevant).toBe(true);
    expect(result.chunks[0].chunk.id).toBe("work-redhat-migration");
  });

  it("retrieves education details for college / degree questions", () => {
    const result = engine.search("Where did he go to college and what is his degree?");
    expect(result.isRelevant).toBe(true);
    const hasEducationChunk = result.chunks.some((c) => c.chunk.id === "edu-btech-it");
    expect(hasEducationChunk).toBe(true);
  });

  it("retrieves defensive AI email agent for inbox janitor inquiries", () => {
    const result = engine.search("How does his Inbox Janitor AI agent work?");
    expect(result.isRelevant).toBe(true);
    expect(result.chunks[0].chunk.id).toBe("project-inbox-janitor");
  });

  it("correctly identifies and deflects out-of-scope queries (0 wasted tokens)", () => {
    const result = engine.search("Can you give me a recipe for chocolate chip cookies?");
    // Out-of-scope query should have low score or not meet relevance threshold
    expect(result.isRelevant).toBe(false);
  });

  it("formats retrieved context cleanly for the LLM system prompt", () => {
    const searchResult = engine.search("Retail banking OAO at Cognizant");
    const formattedContext = engine.formatContextForPrompt(searchResult.chunks);

    expect(formattedContext).toContain("[Source 1:");
    expect(formattedContext).toContain("Context Header:");
    expect(formattedContext).toContain("Verified Metrics:");
    expect(formattedContext).toContain("85%+ code test coverage");
  });
});
