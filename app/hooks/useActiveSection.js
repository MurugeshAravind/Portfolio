"use client";

import { useState, useEffect } from "react";

const DEFAULT_OBSERVER_OPTIONS = { rootMargin: "-30% 0px -60% 0px" };

export function useActiveSection(sectionIds, options = DEFAULT_OBSERVER_OPTIONS) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const sectionKey = sectionIds.join("|");
  const {
    root = null,
    rootMargin = DEFAULT_OBSERVER_OPTIONS.rootMargin,
    threshold = 0,
  } = options;
  const thresholdKey = Array.isArray(threshold) ? threshold.join("|") : threshold;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { root, rootMargin, threshold });

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, sectionKey, thresholdKey]);

  return activeSection;
}
