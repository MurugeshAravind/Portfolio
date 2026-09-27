"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { site } from "../data/site";

/**
 * Section links resolve against the current route: on the homepage they are
 * plain fragments, on /lab and /credentials they are prefixed with "/" so the
 * browser navigates home and then scrolls. Hardcoding "#work" everywhere (as
 * this did) meant every nav link was dead on a subpage.
 *
 * The count of links is fixed at four plus the Connect CTA: the mobile menu
 * renders exactly five anchors, which tests/e2e/hamburger-menu.spec.ts asserts.
 */
const SECTIONS = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "About", id: "about" },
];

const SECTION_IDS = SECTIONS.map((section) => section.id);

export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const connect = site.links.find((link) => link.label === "LinkedIn");

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) menuRef.current?.querySelector("a")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu with the Escape key and return focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <nav className="nav" aria-label="Main navigation">
      <Link href="/" className="nav-logo">
        MA<span className="accent">.</span>
      </Link>

      <ul className="nav-links">
        {SECTIONS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={hrefFor(id)}
              className={onHome && activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={connect?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta nav-cta-desktop"
      >
        Connect
      </a>

      <button
        ref={hamburgerRef}
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

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu" ref={menuRef}>
          {SECTIONS.map(({ label, id }) => (
            <a
              key={id}
              href={hrefFor(id)}
              className={`mobile-menu-link ${onHome && activeSection === id ? "active" : ""}`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={connect?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-link mobile-menu-cta"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
