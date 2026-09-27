/**
 * AI learning work: exercises, proofs of concept, and a certification path.
 * None of it ran against live traffic, and the heading says so.
 *
 * Two temptations to resist when editing, both of which an earlier revision of
 * this block gave in to. One is the word "production", or its cousins
 * "deployed" and "replaced" — the items here explore how something could work,
 * they do not report a system that served users. The other is register: this
 * block sits beside the banking platform and the migration, where everything
 * genuinely did ship, and copy drifts up to match its neighbours. A technical
 * reader checks the delivery claim first, and the whole block collapses on the
 * question of what it served.
 *
 * Everything is lifted from the "Generative AI & Agent Development" block of the
 * resume. It is grouped with the Work section because AI capability is the third
 * thing worth knowing about the engineering — but it is a different kind of
 * thing from the other three blocks, and the heading is what draws that line.
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
export const genaiHeading = "Learning AI by building it";

/** @type {GenAiWorkItem[]} */
export const genaiWork = [
  {
    title: "LLM-driven business logic",
    body: "Explored whether hardcoded business-rule engines could be replaced by batched LLM-generated suggestions, using the Anthropic Claude API, with a human confirmation layer in front of every suggestion. The constraint that emerged was per-run inference cost and reliability, not whether a model could produce usable output.",
  },
  {
    title: "Multi-agent orchestration",
    body: "Multi-agent workflow design with Google's Agent Development Kit, worked through as part of the official Google enterprise certification programme.",
  },
  {
    title: "Context engineering",
    body: "Structured context and prompt pipelines — chunking, retrieval, and output shaping — built to understand what makes a model's output consistent enough to rely on rather than merely plausible.",
  },
  {
    title: "AI-assisted delivery",
    body: "Brought Cursor and GitHub Copilot into the team's delivery workflow, improving sprint velocity and review turnaround, and set the review standards that came with them.",
  },
];
