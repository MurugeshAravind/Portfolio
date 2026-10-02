/**
 * Production Guardrails, Safety Shield & Intent Classifier
 * 
 * Safeguards:
 * 1. Prompt Injection & Jailbreak Detection (heuristic & pattern-based).
 * 2. Contact & Privacy Interceptor (adheres strictly to AGENTS.md: no raw emails exposed).
 * 3. Sliding-Window Rate Limiter (in-memory, serverless-safe, zero external DB dependencies).
 * 4. Grounded System Prompt Builder (negative constraints against metric hallucination).
 */

// Heuristic signatures for prompt injection, jailbreaks, and prompt exfiltration
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous\s+|prior\s+|above\s+)?(instructions|prompts|rules)/i,
  /disregard\s+(all\s+)?(previous\s+|prior\s+|above\s+)?(instructions|prompts|rules)/i,
  /you\s+are\s+now\s+(a|an|in|the)\s+(dan|unrestricted|unfiltered|jailbroken|pirate|developer\s+mode)/i,
  /system\s+prompt/i,
  /repeat\s+(everything|the\s+text)\s+(above|from\s+the\s+beginning)/i,
  /what\s+are\s+your\s+(instructions|rules|system\s+directives)/i,
  /print\s+(your\s+)?(system|initial)\s+prompt/i,
  /bypass\s+(safety|content\s+filter|guardrails)/i,
  /act\s+as\s+an\s+unfiltered/i
];

// Contact and outreach intent keywords
const CONTACT_KEYWORDS = [
  "contact", "email", "phone", "reach", "hire", "interview", "call",
  "get in touch", "connect", "meeting", "availability", "schedule", "talk to"
];

/**
 * Detect adversarial prompt injection or jailbreak attempts
 * @param {string} query 
 * @returns {boolean}
 */
export function detectPromptInjection(query) {
  if (!query || typeof query !== "string") return false;
  return INJECTION_PATTERNS.some((pattern) => pattern.test(query));
}

/**
 * Detect if query is asking for contact or interview scheduling
 * @param {string} query 
 * @returns {boolean}
 */
export function isContactRequest(query) {
  if (!query || typeof query !== "string") return false;
  const lower = query.toLowerCase();
  return CONTACT_KEYWORDS.some((kw) => lower.includes(kw));
}

/**
 * Classify user intent before spending LLM tokens
 * @param {string} query 
 * @returns {{
 *   intent: "PROMPT_INJECTION" | "CONTACT_REQUEST" | "RESUME_QUERY",
 *   reason?: string
 * }}
 */
export function classifyIntent(query) {
  if (detectPromptInjection(query)) {
    return {
      intent: "PROMPT_INJECTION",
      reason: "Potential prompt injection or override attempt detected."
    };
  }

  if (isContactRequest(query)) {
    return {
      intent: "CONTACT_REQUEST",
      reason: "Recruiter inquiry regarding contact, hiring, or interview."
    };
  }

  return { intent: "RESUME_QUERY" };
}

/**
 * Production Sliding-Window Rate Limiter
 * Tracks requests per IP/fingerprint across a rolling time window.
 */
export class SlidingWindowRateLimiter {
  /**
   * @param {number} maxRequests Maximum allowed requests per window (default: 10)
   * @param {number} windowMs Window duration in milliseconds (default: 60,000ms = 1 min)
   */
  constructor(maxRequests = 10, windowMs = 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.clients = new Map(); // ip -> Array<timestamp>
  }

  /**
   * Check if a request from this client is allowed
   * @param {string} clientKey IP address or identifier
   * @returns {{ allowed: boolean, remaining: number, resetMs: number }}
   */
  check(clientKey = "anonymous") {
    const now = Date.now();
    const timestamps = this.clients.get(clientKey) || [];

    // Filter out timestamps outside the active rolling window
    const validTimestamps = timestamps.filter((ts) => now - ts < this.windowMs);

    if (validTimestamps.length >= this.maxRequests) {
      const oldest = validTimestamps[0];
      const resetMs = Math.max(0, this.windowMs - (now - oldest));
      return {
        allowed: false,
        remaining: 0,
        resetMs
      };
    }

    validTimestamps.push(now);
    this.clients.set(clientKey, validTimestamps);

    return {
      allowed: true,
      remaining: this.maxRequests - validTimestamps.length,
      resetMs: this.windowMs
    };
  }

  /**
   * Memory management: prune stale entries
   */
  cleanup() {
    const now = Date.now();
    for (const [key, timestamps] of this.clients.entries()) {
      const valid = timestamps.filter((ts) => now - ts < this.windowMs);
      if (valid.length === 0) {
        this.clients.delete(key);
      } else {
        this.clients.set(key, valid);
      }
    }
  }
}

/**
 * Build a strictly grounded system prompt for the generation model (e.g. DeepSeek)
 * @param {string} formattedContext Retrieved source chunks
 * @returns {string}
 */
export function buildGroundedSystemPrompt(formattedContext) {
  return `You are Murugesh Aravind's official Resume & Technical Assistant.
Murugesh is a Senior Frontend Engineer with 8+ years of experience in React, TypeScript, micro-frontends, and enterprise platform delivery (Cognizant, Infosys, Nokia).

Your role is to answer questions from hiring managers, recruiters, and engineering leaders accurately, concisely, and professionally.

---
STRICT GROUNDING RULES & NEGATIVE CONSTRAINTS:
1. Grounding: Answer ONLY based on the facts provided in the RETRIEVED CONTEXT below.
2. Anti-Hallucination: Do NOT assume, extrapolate, or invent metrics, companies, titles, or dates that are not explicitly stated.
3. Verified Metrics: You must ONLY cite numbers present in the "Verified Metrics" list of each chunk (e.g., 50,000+ users, 40% load time reduction, 85%+ test coverage, 8+ years). If asked for a metric not in the records, state clearly that it is not documented.
4. Citations: When making a factual claim, cite the source using its tag, e.g. [Source 1] or [Source 2].
5. Privacy & Contact (AGENTS.md Policy): Never disclose raw email addresses or phone numbers. If asked how to contact Murugesh, direct the user to his LinkedIn profile (https://linkedin.com/in/murugesh-aravind-0ab64847) or the contact form on this portfolio.
6. Tone: Confident, precise, technical, and executive. Avoid buzzwords, filler phrases ("In conclusion", "As an AI"), or sycophancy.

---
RETRIEVED CONTEXT:
${formattedContext}
`;
}
