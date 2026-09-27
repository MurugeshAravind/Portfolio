import { metrics } from "./metrics";

/**
 * The two pieces of work that get written as prose rather than as cards.
 *
 * The case study structure is deliberate: what it was, what was actually hard
 * about it, what shipped, and the award. Numbers live inside the sentences —
 * there are no metric badges anywhere on this site by design, because a row of
 * three stat tiles under a heading is the most reliable tell that a portfolio
 * was generated rather than written.
 */

export const caseStudy = {
  id: "open-account-online",
  title: "Open Account Online",
  meta: "Cognizant · Aug 2022 — present · Banking onboarding",
  paragraphs: [
    "OAO is the customer onboarding platform for a major retail bank. Thousands of customers open accounts through it every day, and I designed and built its frontend in React and TypeScript, leading that work since August 2022.",
    "Banking compliance is not a checklist you bolt on at the end. PII masking, secure rendering, and role-based access control all had to be correct before a single line reached production — a different kind of pressure from shipping a feature and watching the graphs. The implementation ended up as the reference other engineering teams were pointed at.",
    `What shipped: page loads and Core Web Vitals improved by 25% through lazy loading, memoization, and Redux Toolkit state management; a testing strategy that reached ${metrics.testCoverage.text} coverage and became the team's quality benchmark; and a codebase other engineers could pick up without me in the room.`,
  ],
  quote: {
    text: "Recognised with the 'Doing The Right Thing' award for delivery quality on the OAO platform.",
    attribution: "Cognizant, 2025",
  },
  note: "I brought Cursor and GitHub Copilot into the team's workflow, which improved sprint velocity and review turnaround, and set the code review standards and mentoring practice for the frontend group.",
};

export const migration = {
  id: "angular-react-migration",
  title: "Red Hat Process Automation Manager",
  subtitle: "Angular to React migration",
  meta: "Infosys · Jun 2020 — Apr 2022",
  body: `I led the end-to-end migration of a ${metrics.usersServed.text}-user workflow platform, re-architecting the single-page app for scalability and developer velocity. Load times came down ${metrics.loadTimeReduction.text} and Lighthouse scores rose 20 points through code-splitting, lazy loading, tree-shaking, and Webpack bundle optimization. Daily active users grew 15% in the six months after release, and nothing rolled back in production. Insta Award, Infosys 2021.`,
};
