"use client";

import { useState, useEffect, useRef } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
];

const SECTION_IDS = ["work", "experience", "certifications", "about"];

export default function Nav() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) menuRef.current?.querySelector("a")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

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
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        {...(menuOpen && { "aria-controls": "mobile-menu" })}
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu" ref={menuRef}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`mobile-menu-link ${activeSection === href.slice(1) ? "active" : ""}`}
              onClick={() => {
                setMenuOpen(false);
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-menu-link mobile-menu-cta"
            onClick={() => {
              setMenuOpen(false);
              document.body.style.overflow = "";
              document.documentElement.style.overflow = "";
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}
