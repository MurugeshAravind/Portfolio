/**
 * Lab projects — the open-source and experiment work.
 *
 * These are not the day job. The day job is `work.js` — the banking platform
 * and the migration; `genai.js` is learning work rather than delivery, and is
 * labelled as such. Anything in here is something built for its own sake. Only
 * the two marked `home` appear on the homepage — the full set lives at /lab.
 *
 * Every claim below was checked against the actual repository on 2026-09-27 by
 * downloading each one and reading it, because a specific number that fails
 * when someone clicks through is worse than a vague one. Four claims did not
 * survive that check and were corrected:
 *   - FundScope's test count was 42; the suite has 49 cases.
 *   - Tic-Tac-Toe was described as multiplayer and DynamoDB-backed. It has no
 *     multiplayer code, and no DynamoDB client — it authenticates with Cognito
 *     and talks to an API Gateway endpoint.
 *   - Inbox Janitor named a single Gemini version that is not the one it runs.
 * Re-verify before editing these descriptions, and do not add a figure that
 * has not been read out of the repository.
 *
 * @typedef {Object} LabProject
 * @property {string} id
 * @property {string} name
 * @property {string} kicker Short descriptor: domain and shape.
 * @property {string} description A paragraph. Figures go in the sentence.
 * @property {string} stack Named in running text, not as badges.
 * @property {boolean} [home] Show in the homepage grid as well as /lab.
 * @property {string} [live] Live demo, preferred over source when present.
 * @property {string} [repo] Omitted where the source is not public — an
 *   unlinked project is honest, a dead link is not.
 */

/** @type {LabProject[]} */
export const labProjects = [
  {
    id: "smartleave-ai",
    name: "SmartLeave AI",
    kicker: "Workforce analytics · Full stack",
    description:
      "Event-based leave impact intelligence for Indian organizations, built around a real problem: a single blanket leave decision lands differently depending on how people commute, where they are, and which regional calendar is in play. It replaces that with targeted recommendations.",
    stack: "React 19, TypeScript, Zustand, Recharts, Express",
    home: true,
    live: "https://smartleave-ai.vercel.app/",
    // No repo link: the source is not public, and the link that used to be here
    // 404'd for every visitor. Publish the repo or leave this absent.
  },
  {
    id: "inbox-janitor-agent",
    name: "Inbox Janitor Agent",
    kicker: "AI email agent · Open source",
    description:
      "A deliberately defensive Gmail cleaner. Deletion is off unless DRY_RUN is explicitly disabled, and every classification has to satisfy a strict Zod schema before anything is acted on, so a misclassified newsletter cannot become a deleted invoice. When a model starts rate-limiting mid-run it fails over through a pool of Gemini models rather than dropping the batch.",
    stack: "TypeScript, LangChain, Gemini, Gmail API, Zod",
    home: true,
    repo: "https://github.com/MurugeshAravind/inbox-janitor-agent",
  },
  {
    id: "fundscope",
    name: "FundScope",
    kicker: "State management · Open source",
    description:
      "A mutual fund tracker for searching, comparing NAV, and exploring fund detail, built to work through Zustand's global state story properly. Dark mode, skeleton loading, and a 49-case suite with Playwright E2E coverage on top.",
    stack: "React 19, TypeScript, Zustand, Tailwind, Vite",
    live: "https://fundscope.netlify.app",
    repo: "https://github.com/MurugeshAravind/zustand-demo",
  },
  {
    id: "tic-tac-toe",
    name: "Advanced Tic-Tac-Toe",
    kicker: "AWS architecture · Open source",
    description:
      "Tic-tac-toe with Cognito authentication, where match history and a global leaderboard sit behind an API Gateway endpoint that verifies the caller's ID token. Mostly an excuse to build a real CI/CD pipeline onto AWS Amplify and see where the architecture strains.",
    stack: "React 19, TypeScript, AWS Amplify, Cognito, Vite",
    repo: "https://github.com/MurugeshAravind/advanced-tic-tac-toe",
  },
];
