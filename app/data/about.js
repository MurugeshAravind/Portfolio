import { metrics } from "./metrics";

/**
 * The About section is prose only — no bullet lists, no subheadings, no
 * "engineering principles" cards. Four paragraphs, in this order: where he came
 * from, what that background gave him, what he does now, and what he is looking
 * for next.
 *
 * The copy is written against a list of stock phrasings this project set out to
 * avoid — the ones that make a portfolio read as generated template copy. That
 * list is not arbitrary: an earlier draft of this section shipped nearly every
 * phrase on it, which is what made the section read as machine-written. The
 * list itself lives outside the repository: the phrases are written down
 * nowhere in the code, so a grep for them stays a clean signal. A hit means
 * live copy slipped through, not that a comment quoted one.
 *
 * Contact details are deliberately absent: AGENTS.md forbids raw emails in
 * HTML, so the reachable links live in the footer.
 */

/** @type {string[]} */
export const aboutParagraphs = [
  "I didn't start in software. I spent two and a half years at Nokia configuring and optimising telecom infrastructure for Vodafone and Turk Telekom, where the requirement was uptime rather than engagement and a misconfiguration had a blast radius measured in subscribers. I wrote my first React component after that.",
  "Infrastructure engineers don't get to fix things after they break in front of a customer. That shaped how I work: design for failure, keep a rollback path, and don't ship anything you can't prove with a test. It is the mindset I brought into every frontend role since.",
  `Now I build banking platforms: customer onboarding for a major retail bank, and an Angular-to-React migration serving ${metrics.usersServed.text} users. The through-line is the same in both. These are systems where correctness isn't optional. I have also been building AI capability (agents, context engineering, LLM-backed business logic) as organizational learning rather than as shipped systems.`,
  "I'm looking for senior or lead roles where frontend is treated as architecture rather than UI implementation, and where the quality of the interface layer is understood to be part of the product, not a coat of paint on it.",
];
