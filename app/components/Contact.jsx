"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2>Let&apos;s talk</h2>
      </div>

      <p className="contact-intro">
        Have a project in mind, or just want to say hello? I&apos;d love to hear from you.
      </p>

      {submitted ? (
        <p style={{ color: "var(--accent)", fontSize: "16px" }}>
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              autoComplete="name"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              autoComplete="email"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="What are you working on?"
            required
          />
          {error && (
            <p style={{ color: "#ef4444", fontSize: "14px", margin: "0 0 8px" }}>
              {error}
            </p>
          )}
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
}
