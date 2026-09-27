/**
 * Hero copy.
 *
 * AGENTS.md §2 requires copy to live here rather than inside the component, and
 * this is the section where ignoring that rule did real damage: the old hero
 * hardcoded, directly in the JSX, one of the stock phrasings this rewrite set
 * out to remove — where a sweep of the data files would never have found it.
 *
 * That list of phrasings is deliberately written down nowhere in this
 * repository, this file included, so that grepping for them stays a clean
 * signal: a hit means live copy slipped through, never that a comment quoted
 * one. Look them up outside the repo before editing this copy.
 *
 * The h1 states a fact about the career rather than a claim about the person —
 * the telecom years, then the first React component. The lede carries the
 * evidence and opens on "Now I build banking frontends…", so the two read as a
 * then/now pair. No career totals ("8+ years"), no superlatives: the case study
 * immediately below has the figures, and repeating them here would read as
 * padding.
 *
 * "React component" is load-bearing and must not be widened to "frontend code".
 * The Nokia entry in experience.js says the first web work came alongside those
 * years, so an absolute claim here would be contradicted one screen further
 * down. Naming Vodafone is fine — the Experience section names the client
 * already, and it is on the resume.
 */

export const heroTitle =
  "Two and a half years keeping Vodafone's networks up before my first React component.";

export const heroLede =
  "Now I build banking frontends where a bad deploy is a compliance incident — where the PII masking, secure rendering, and role-based access control have to be right before anything ships.";

export const heroMeta =
  "Senior Frontend Engineer · React, TypeScript, AWS, GenAI";

/** The single call to action. There used to be two (See my work, Download CV);
 *  the CV now lives in the footer, where a download belongs. */
export const heroCta = { label: "See the work →", href: "#work" };
