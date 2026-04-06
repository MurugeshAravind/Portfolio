"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xyzgkpba", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // Silently fail — form still has mailto fallback
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2>Let&apos;s talk</h2>
      </div>

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
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
