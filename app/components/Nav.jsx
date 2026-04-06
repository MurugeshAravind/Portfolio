"use client";

import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const SECTION_IDS = ["work", "experience", "about"];

export default function Nav() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="#" className="nav-logo">
        MA<span className="accent">.</span>
      </a>
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
      <a href="#contact" className="nav-cta">
        Let&apos;s talk
      </a>
    </nav>
  );
}
