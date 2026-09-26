/**
 * Single source of truth for every impact figure that appears in more than one
 * place on the site. AGENTS.md §2 requires copy and metrics to live under
 * app/data/ rather than in components; this module is what the presentational
 * layer reads from.
 *
 * The figures are declared once in `figures` and the display strings are
 * derived from them, so a number can never drift between its long form
 * ("50,000+", used in prose and metadata) and its compact form ("50k+", used in
 * stat cards and social cards) — the two used to be hand-written separately in
 * six files.
 *
 * Figures that appear in exactly one place (the 25% Core Web Vitals gain, the
 * 15% DAU growth, the per-project test counts) stay inline at their call site.
 * Routing a number through here when nothing shares it adds indirection
 * without removing any duplication.
 */

/** @type {Record<string, number>} */
const figures = {
  yearsExperience: 8,
  usersServed: 50000,
  loadTimeReductionPct: 40,
  testCoveragePct: 85,
  teamsAdopted: 6,
};

/**
 * 50000 -> "50,000". Written out rather than using Intl because
 * `opengraph-image.jsx` runs on the Edge runtime and renders this string into a
 * PNG; a locale-data surprise there would change the image silently.
 */
const withThousandsSeparator = (n) =>
  String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * @typedef {Object} Metric
 * @property {string} text Long form, for prose, list items, and metadata.
 * @property {string} [compact] Short form for stat cards and social cards,
 *   present only where the design uses a narrower variant.
 */

/** @type {Record<string, Metric>} */
export const metrics = {
  yearsExperience: {
    text: `${figures.yearsExperience}+ years`,
    compact: `${figures.yearsExperience}+`,
  },
  usersServed: {
    text: `${withThousandsSeparator(figures.usersServed)}+`,
    compact: `${Math.round(figures.usersServed / 1000)}k+`,
  },
  loadTimeReduction: {
    text: `${figures.loadTimeReductionPct}%`,
  },
  testCoverage: {
    text: `${figures.testCoveragePct}%+`,
  },
  teamsAdopted: {
    text: `${figures.teamsAdopted}`,
  },
};
