/**
 * Recognition, kept separate from `certifications.js`.
 *
 * Awards used to be mixed into the certifications list, which flattened three
 * named internal awards into the same visual rhythm as a badge exam — and one
 * of them (the Codex Hackathon) was the only one that made it onto the site at
 * all. They are listed as their own record here, and all three are on the
 * resume's "Certifications & Recognition" block.
 *
 * @typedef {Object} Award
 * @property {string} name
 * @property {string} issuer
 * @property {string} year
 * @property {string} context What the award was actually given for, so it reads
 *   as evidence rather than as a trophy.
 */

/** @type {Award[]} */
export const awards = [
  {
    name: "AI Builder, Runner-Up",
    issuer: "Cognizant",
    year: "2026",
    context:
      "OpenAI Codex Hackathon — shipped a working AI feature end to end against the clock, judged on the build rather than a slide deck.",
  },
  {
    name: "Doing The Right Thing",
    issuer: "Cognizant",
    year: "2025",
    context:
      "Delivery quality on the Open Account Online banking platform — the PII masking and RBAC work that became the internal security reference.",
  },
  {
    name: "Insta Award",
    issuer: "Infosys",
    year: "2021",
    context:
      "Leading the Angular-to-React migration of the Red Hat Process Automation Manager platform through to zero production rollbacks.",
  },
];
