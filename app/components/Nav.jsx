"use client";

import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const SECTION_IDS = ["work", "experience", "about"];

export default function Nav() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="#" className="nav-logo">
        MA<span className="accent">.</span>
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        {LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta nav-cta-desktop">
        Let&apos;s talk
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`mobile-menu-link ${activeSection === href.slice(1) ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-menu-link mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}
