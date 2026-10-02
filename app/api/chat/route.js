/**
 * Production Next.js Route Handler for Resume Assistant RAG
 * 
 * End-to-End Pipeline:
 * 1. IP extraction & sliding-window rate limiting (429 defense).
 * 2. Input validation & sanitization (400 validation).
 * 3. Intent classification & prompt injection shield.
 * 4. Hybrid retrieval (BM25 + Dense Cosine with RRF).
 * 5. DeepSeek API streaming (with deterministic grounded fallback for CI/offline).
 * 6. Server-Sent Events (SSE) streaming with citations payload.
 */

import { defaultEngine } from "../../../lib/rag/retrieval.js";
import {
  classifyIntent,
  buildGroundedSystemPrompt,
  SlidingWindowRateLimiter
} from "../../../lib/rag/guardrails.js";

export const runtime = "nodejs";

// Production rate limiter: 10 requests per minute per IP
const rateLimiter = new SlidingWindowRateLimiter(10, 60 * 1000);

/**
 * Format a server-sent event (SSE) payload
 * @param {any} data 
 * @returns {string}
 */
function sseChunk(data) {
  return `data: ${JSON.stringify(data)}\n\n`;
}

/**
 * Fallback grounded generator for offline mode, local dev, or missing API keys.
 * Produces deterministic, accurate, hallucination-free answers directly from retrieved chunks.
 * @param {string} userMessage 
 * @param {Array<{chunk: any}>} retrievedResults 
 * @returns {string}
 */
function generateOfflineGroundedResponse(userMessage, retrievedResults) {
  if (!retrievedResults || retrievedResults.length === 0) {
    return "Murugesh's portfolio records do not contain specific information about that topic. You can ask about his retail banking onboarding platform (OAO at Cognizant), the Red Hat Angular-to-React migration at Infosys, his AI projects, or his frontend architecture approach.";
  }

  const primary = retrievedResults[0].chunk;
  const metricsList = (primary.verifiedMetrics || []).map((m) => `• ${m}`).join("\n");

  let summary = `Regarding **${primary.title}** (${primary.contextHeader.replace(/[\[\]]/g, "")}):\n\n`;
  summary += `${primary.content}\n\n`;

  if (metricsList) {
    summary += `**Verified Impact Metrics:**\n${metricsList}\n\n`;
  }

  if (retrievedResults.length > 1) {
    const secondary = retrievedResults[1].chunk;
    summary += `Additionally, in **${secondary.title}**:\n${secondary.content}\n\n`;
  }

  summary += `*(Referenced from: [${primary.title}](${primary.sourceUrl}))*`;
  return summary;
}

export async function POST(request) {
  try {
    // 1. IP Extraction & Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const rateStatus = rateLimiter.check(clientIp);
    if (!rateStatus.allowed) {
      return new Response(
        JSON.stringify({
          error: "Rate limit exceeded. Please wait a minute before asking another question.",
          resetMs: rateStatus.resetMs
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(Math.ceil(rateStatus.resetMs / 1000))
          }
        }
      );
    }

    // 2. Body Parsing & Validation
    const body = await request.json().catch(() => ({}));
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Query message is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (message.length > 500) {
      return new Response(
        JSON.stringify({ error: "Message exceeds maximum allowed length of 500 characters." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Guardrail Intent Classification
    const intentResult = classifyIntent(message);

    // Case A: Prompt Injection Attempt -> Deflect immediately
    if (intentResult.intent === "PROMPT_INJECTION") {
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(
            new TextEncoder().encode(
              sseChunk({ type: "citations", citations: [] }) +
              sseChunk({
                type: "token",
                text: "I am Murugesh Aravind's official technical resume assistant. I am configured to strictly answer questions regarding his frontend architecture experience, enterprise projects, and technical leadership. I cannot modify my system instructions, bypass safety constraints, or reveal internal configurations."
              }) +
              sseChunk({ type: "done" })
            )
          );
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive"
        }
      });
    }

    // Case B: Contact / Hiring Request -> Direct to official privacy channels (AGENTS.md)
    if (intentResult.intent === "CONTACT_REQUEST") {
      const contactCitation = {
        id: "policy-contact-channels",
        title: "Official Contact & LinkedIn",
        sourceUrl: "#contact"
      };

      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(
            new TextEncoder().encode(
              sseChunk({ type: "citations", citations: [contactCitation] }) +
              sseChunk({
                type: "token",
                text: "Murugesh is open to Senior Frontend Engineer, Frontend Tech Lead, and UI Architecture roles (Hybrid in Bengaluru, India or Remote).\n\nTo prevent web scrapers from harvesting personal contact details (per site privacy policy), direct outreach is handled through:\n\n• **LinkedIn Profile**: [linkedin.com/in/murugesh-aravind-0ab64847](https://linkedin.com/in/murugesh-aravind-0ab64847)\n• **Portfolio Contact Form**: Submit a message directly through the contact section on this page.\n\nRecruiters and hiring managers are encouraged to connect on LinkedIn or send a message to schedule an initial interview."
              }) +
              sseChunk({ type: "done" })
            )
          );
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive"
        }
      });
    }

    // 4. Hybrid Retrieval (BM25 + Cosine with RRF)
    const searchResult = defaultEngine.search(message, { topK: 3 });

    // Case C: Off-Topic / Out of Scope -> Deflect with 0 token waste
    if (!searchResult.isRelevant) {
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(
            new TextEncoder().encode(
              sseChunk({ type: "citations", citations: [] }) +
              sseChunk({
                type: "token",
                text: "I don't have records regarding that topic in Murugesh's portfolio. You can ask about his retail banking onboarding platform (OAO at Cognizant), the Red Hat Angular-to-React migration at Infosys, his AI projects, or his frontend architecture approach."
              }) +
              sseChunk({ type: "done" })
            )
          );
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive"
        }
      });
    }

    // 5. Build Context and Citations Payload
    const citations = searchResult.chunks.map(({ chunk, rrfScore }) => ({
      id: chunk.id,
      title: chunk.title,
      sourceUrl: chunk.sourceUrl,
      verifiedMetrics: chunk.verifiedMetrics || [],
      confidence: Math.round(rrfScore * 3000) / 100 // representative confidence score
    }));

    const formattedContext = defaultEngine.formatContextForPrompt(searchResult.chunks);
    const systemPrompt = buildGroundedSystemPrompt(formattedContext);

    const apiKey = process.env.DEEPSEEK_API_KEY;

    // 6A. Live DeepSeek Streaming API Call
    if (apiKey) {
      try {
        const deepseekMessages = [
          { role: "system", content: systemPrompt },
          ...history
            .filter((h) => h.role === "user" || h.role === "assistant")
            .slice(-4), // keep last 2 conversation turns for token budget
          { role: "user", content: message }
        ];

        const dsResponse = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: deepseekMessages,
            temperature: 0.2, // low temperature for strictly grounded deterministic output
            max_tokens: 600,
            stream: true
          })
        });

        if (!dsResponse.ok || !dsResponse.body) {
          throw new Error(`DeepSeek API error: ${dsResponse.status}`);
        }

        const encoder = new TextEncoder();
        const reader = dsResponse.body.getReader();
        const decoder = new TextDecoder();

        const stream = new ReadableStream({
          async start(controller) {
            // Send citations first
            controller.enqueue(encoder.encode(sseChunk({ type: "citations", citations })));

            let buffer = "";

            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                  const trimmed = line.trim();
                  if (!trimmed || trimmed === "data: [DONE]") continue;

                  if (trimmed.startsWith("data: ")) {
                    try {
                      const parsed = JSON.parse(trimmed.slice(6));
                      const deltaText = parsed.choices?.[0]?.delta?.content;
                      if (deltaText) {
                        controller.enqueue(
                          encoder.encode(sseChunk({ type: "token", text: deltaText }))
                        );
                      }
                    } catch {
                      // skip malformed chunks
                    }
                  }
                }
              }
              controller.enqueue(encoder.encode(sseChunk({ type: "done" })));
            } catch (streamErr) {
              controller.error(streamErr);
            } finally {
              controller.close();
            }
          }
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive"
          }
        });
      } catch (liveApiErr) {
        console.warn("DeepSeek API connection fallback to offline grounded response:", liveApiErr.message);
        // Gracefully fall through to deterministic offline mode below
      }
    }

    // 6B. Deterministic Grounded Fallback (CI / Local dev without API key)
    const fallbackResponse = generateOfflineGroundedResponse(message, searchResult.chunks);

    const stream = new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        controller.enqueue(encoder.encode(sseChunk({ type: "citations", citations })));

        // Stream tokens in natural conversational chunks
        const words = fallbackResponse.split(" ");
        let i = 0;

        function pushWord() {
          if (i < words.length) {
            const wordSlice = words.slice(i, i + 3).join(" ") + (i + 3 < words.length ? " " : "");
            controller.enqueue(encoder.encode(sseChunk({ type: "token", text: wordSlice })));
            i += 3;
            pushWord();
          } else {
            controller.enqueue(encoder.encode(sseChunk({ type: "done" })));
            controller.close();
          }
        }

        pushWord();
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive"
      }
    });

  } catch (error) {
    console.error("Unhandled error in /api/chat route:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error processing resume query." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
