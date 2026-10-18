import { describe, it, expect } from "vitest";
import { knowledgeChunks } from "../lib/rag/knowledge-base.js";
import { certifications } from "../app/data/certifications.js";
import { awards } from "../app/data/awards.js";
import { defaultEngine } from "../lib/rag/retrieval.js";

describe("Production RAG - Data & Knowledge Base Synchronization", () => {
  const certChunk = knowledgeChunks.find((c) => c.id === "certs-credentials-registry");

  it("contains the certs-credentials-registry chunk", () => {
    expect(certChunk).toBeDefined();
    expect(certChunk.category).toBe("awards_certs");
    expect(certChunk.sourceUrl).toBe("/credentials");
  });

  it("dynamically syncs all certifications from app/data/certifications.js without data drift", () => {
    expect(certChunk).toBeDefined();

    // Verify every single certification is represented in the chunk's content
    for (const cert of certifications) {
      expect(certChunk.content).toContain(cert.name);
      expect(certChunk.keywords).toContain(cert.name);
    }
  });

  it("dynamically syncs all awards from app/data/awards.js without data drift", () => {
    expect(certChunk).toBeDefined();

    // Verify every award is represented in the chunk's content
    for (const award of awards) {
      expect(certChunk.content).toContain(award.name);
    }
  });

  it("surfaces all featured certifications in verifiedMetrics", () => {
    expect(certChunk).toBeDefined();

    const featuredCerts = certifications.filter((c) => c.featured);
    for (const featured of featuredCerts) {
      const hasMetric = certChunk.verifiedMetrics.some(
        (m) => m.includes(featured.name) && m.includes(featured.issuer)
      );
      expect(hasMetric).toBe(true);
    }
  });

  it("retrieves the credentials chunk when querying for Claude Certified Architect", () => {
    const result = defaultEngine.search("What are his Claude and Anthropic certifications?");
    expect(result.isRelevant).toBe(true);
    expect(result.chunks.length).toBeGreaterThan(0);

    const matchesCertRegistry = result.chunks.some((c) => c.chunk.id === "certs-credentials-registry");
    expect(matchesCertRegistry).toBe(true);
  });
});
