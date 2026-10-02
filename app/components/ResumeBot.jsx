"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { botConfig } from "../data/bot";

export default function ResumeBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeCitationMessageId, setActiveCitationMessageId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);
  const titleId = useId();

  // Scroll messages to bottom as tokens stream in
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus management and ESC key listener
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  async function handleSend(textToSend) {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setInput("");
    const userMsgId = `user-${Date.now()}`;
    const botMsgId = `bot-${Date.now()}`;

    const newMessages = [
      ...messages,
      { id: userMsgId, role: "user", text: query },
      { id: botMsgId, role: "assistant", text: "", citations: [], isStreaming: true }
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-4).map((m) => ({ role: m.role, content: m.text }))
        })
      });

      if (!response.ok) {
        let errText = "Unable to process query right now.";
        try {
          const errData = await response.json();
          if (errData.error) errText = errData.error;
        } catch {
          // fallback to generic error
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId
              ? { ...msg, text: errText, isStreaming: false }
              : msg
          )
        );
        setIsLoading(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulatedText = "";
      let accumulatedCitations = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const block of lines) {
          const line = block.trim();
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === "citations") {
                accumulatedCitations = data.citations || [];
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMsgId
                      ? { ...msg, citations: accumulatedCitations }
                      : msg
                  )
                );
              } else if (data.type === "token") {
                accumulatedText += data.text || "";
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMsgId
                      ? { ...msg, text: accumulatedText }
                      : msg
                  )
                );
              } else if (data.type === "done") {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMsgId
                      ? { ...msg, isStreaming: false }
                      : msg
                  )
                );
              }
            } catch {
              // skip parse errors
            }
          }
        }
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId
            ? {
                ...msg,
                text: "Network or connection error. Please check your connectivity and try again.",
                isStreaming: false
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Floating Trigger Dock Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleDrawer}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="resume-bot-drawer"
        className="resume-bot-trigger"
        title="Ask Murugesh's Resume Assistant"
      >
        <span className="bot-trigger-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </span>
        <span className="bot-trigger-text">{botConfig.triggerLabel}</span>
        <span className="bot-trigger-dot" aria-hidden="true"></span>
      </button>

      {/* Backdrop overlay (z-index: 999 strictly adheres to AGENTS.md stacking rules) */}
      {isOpen && (
        <div
          className="resume-bot-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer Panel */}
      <section
        id="resume-bot-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        className={`resume-bot-drawer ${isOpen ? "is-open" : ""}`}
      >
        {/* Header */}
        <header className="bot-header">
          <div>
            <div className="bot-header-meta">
              <span className="bot-status-indicator"></span>
              <span className="bot-badge">RAG Grounded</span>
            </div>
            <h2 id={titleId} className="bot-title">
              {botConfig.title}
            </h2>
            <p className="bot-subtitle">{botConfig.subtitle}</p>
          </div>

          <div className="bot-header-actions">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => setMessages([])}
                className="bot-action-btn"
                title={botConfig.labels.clearConversation}
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bot-close-btn"
              aria-label={botConfig.labels.closeDrawer}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        {/* Message History & Conversation */}
        <div className="bot-messages" aria-live="polite">
          {messages.length === 0 ? (
            <div className="bot-empty-state">
              <h3 className="empty-title">{botConfig.emptyStateTitle}</h3>
              <p className="empty-intro">{botConfig.emptyStateIntro}</p>

              <div className="bot-starters">
                {botConfig.starterPrompts.map((starter, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(starter.prompt)}
                    className="bot-starter-card"
                  >
                    <span className="starter-label">{starter.label}</span>
                    <span className="starter-prompt">{starter.prompt}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`bot-message-row ${msg.role === "user" ? "user-row" : "bot-row"}`}
              >
                <div className={`bot-bubble ${msg.role === "user" ? "user-bubble" : "assistant-bubble"}`}>
                  <div className="bot-bubble-meta">
                    {msg.role === "user" ? "Recruiter / Hiring Lead" : "Murugesh Assistant"}
                  </div>

                  <div className="bot-bubble-text">
                    {msg.text ? (
                      <p style={{ whiteSpace: "pre-wrap" }}>{msg.text}</p>
                    ) : (
                      <div className="bot-typing-indicator" aria-label={botConfig.labels.thinking}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    )}
                  </div>

                  {/* Grounded Inspectable Citations */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="bot-citations-section">
                      <div className="citations-header">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span>{botConfig.labels.sourcesHeader}</span>
                      </div>

                      <div className="citations-chips">
                        {msg.citations.map((cite, cIdx) => (
                          <div key={cIdx} className="citation-chip-container">
                            <button
                              type="button"
                              onClick={() =>
                                setActiveCitationMessageId(
                                  activeCitationMessageId === `${msg.id}-${cIdx}`
                                    ? null
                                    : `${msg.id}-${cIdx}`
                                )
                              }
                              className="citation-chip"
                            >
                              <span>{cite.title}</span>
                              {cite.confidence && (
                                <span className="citation-confidence">
                                  {cite.confidence}%
                                </span>
                              )}
                            </button>

                            {/* Dropdown details of the citation */}
                            {activeCitationMessageId === `${msg.id}-${cIdx}` && (
                              <div className="citation-drawer-details">
                                <a
                                  href={cite.sourceUrl}
                                  onClick={() => setIsOpen(false)}
                                  className="citation-view-source"
                                >
                                  View on page ({cite.sourceUrl}) →
                                </a>
                                {cite.verifiedMetrics && cite.verifiedMetrics.length > 0 && (
                                  <ul className="citation-metrics-list">
                                    {cite.verifiedMetrics.map((met, mIdx) => (
                                      <li key={mIdx}>{met}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <footer className="bot-footer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="bot-input-form"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={botConfig.inputPlaceholder}
              disabled={isLoading}
              className="bot-input-field"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bot-send-button"
              aria-label={botConfig.labels.sendButton}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>

          <p className="bot-disclaimer">{botConfig.disclaimer}</p>
        </footer>
      </section>
    </>
  );
}
