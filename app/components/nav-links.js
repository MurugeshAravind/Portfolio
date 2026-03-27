"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["About", "Experience", "Projects"];

export function MobileNav() {
  return (
    <nav
      className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-white/70 dark:bg-neutral-950/70 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-sm"
      aria-label="In-page jump links"
    >
      <ul className="flex gap-6 justify-center py-4 px-6">
        {SECTIONS.map((item) => (
          <li key={item}>
            <a className="group flex items-center" href={`#${item.toLowerCase()}`}>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DesktopNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="animate-fade-up animate-fade-up-4 nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {SECTIONS.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <li key={item}>
              <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                <span
                  className={`nav-indicator mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-neutral-900 dark:bg-neutral-100"
                      : "w-8 bg-neutral-400 dark:bg-neutral-600 group-hover:w-16 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-200"
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-200"
                  }`}
                >
                  {item}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
