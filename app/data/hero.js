import { metrics } from "./metrics";

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
 * The h1 leads with the role, the years, and the domain. This is the one screen
 * a visitor is guaranteed to read, and an earlier revision spent it on the
 * telecom years instead, which left level and stack below the fold in the
 * smallest type on the page and said nothing about what the work is. Career
 * totals used to be kept out of the h1 on the grounds that the case study below
 * repeats them; the total is the first thing a recruiter scans for, so it is
 * carried here, read from `metrics` so the h1 cannot drift from the metadata
 * and the social card.
 *
 * The lede then carries the specialisation, regulated systems where PII
 * handling and access control are requirements rather than features, and names
 * the kind of work the role actually is: standards and architecture that
 * outlive any one feature. Those are what a hiring lead reads for.
 *
 * The telecom origin is deliberately absent here. About opens with it and
 * experience.js records it, so a third telling would spend the most valuable
 * line on the page on a job left in 2018.
 *
 * The meta line no longer repeats the job title, since the h1 carries it. It
 * states availability instead, which used to appear only in About's last
 * paragraph and in the page metadata, leaving a recruiter no signal above the
 * fold that the site is a job search.
 */

export const heroTitle = `Senior frontend engineer, ${metrics.yearsExperience.text} in, building banking platforms.`;

export const heroLede =
  "I lead the frontend for a retail bank's account-opening platform, where PII masking, secure rendering, and role-based access control are compliance requirements rather than a checklist. A lot of that job is the part that outlives the feature: review standards, test strategy, and architecture the rest of the team builds on.";

export const heroMeta =
  "React, TypeScript, AWS, GenAI · Open to senior and lead roles";

/** The single call to action. There used to be two (See my work, Download CV);
 *  the CV now lives in the footer, where a download belongs. */
export const heroCta = { label: "See the work →", href: "#work" };
