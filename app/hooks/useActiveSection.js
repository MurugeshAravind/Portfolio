"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, options = { rootMargin: "-30% 0px -60% 0px" }) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
}
