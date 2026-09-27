/**
 * GenAI engineering, modelled as production work rather than as lab projects.
 *
 * Everything here is lifted from the "Generative AI & Agent Development" block
 * of the resume. It lives in its own module rendered inside the Work section:
 * the site previously represented this work only as a lab card (Inbox Janitor)
 * and a single line about Cursor and Copilot, which made production AI
 * architecture read as a hobby.
 *
 * There is no framing line above the items. A one-sentence framing for this
 * block was drafted and then dropped: it rested on a rhetorical figure that
 * generated landing pages reach for reflexively, and the heading below states
 * the scope well enough when four items of evidence sit directly under it. The
 * draft sentence is not reproduced here — or anywhere in this repository — so
 * that a grep for that figure stays a clean signal.
 *
 * @typedef {Object} GenAiWorkItem
 * @property {string} title
 * @property {string} body
 */

/** The heading for the AI block. */
export const genaiHeading = "AI and agent work in production";

/** @type {GenAiWorkItem[]} */
export const genaiWork = [
  {
    title: "LLM-driven product logic",
    body: "Replaced hardcoded business-rule engines with batched LLM-generated suggestions behind a human confirmation layer, using the Anthropic Claude API. The batching strategy keeps per-run inference cost predictable as volume grows — the constraint was cost and reliability, not whether a model could produce the output.",
  },
  {
    title: "Multi-agent orchestration",
    body: "Designed and deployed multi-agent workflows with Google's Agent Development Kit, certified through the official Google enterprise program.",
  },
  {
    title: "Context engineering",
    body: "Built the structured context and prompt pipelines that production web features run on, reducing hallucination and making model output consistent enough to put in front of a user.",
  },
  {
    title: "AI-assisted delivery",
    body: "Brought Cursor and GitHub Copilot into the team's delivery workflow, improving sprint velocity and review turnaround, and set the review standards that came with them.",
  },
];
