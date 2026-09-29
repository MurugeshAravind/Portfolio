import { metrics } from "./metrics";

/**
 * @typedef {Object} ExperienceEntry
 * @property {string} period
 * @property {string} company
 * @property {string} role Official job title, followed by the functional title
 *   where the two differ. Mirrors the dual-title format used on the resume.
 * @property {string} location City and working mode, as listed on the resume.
 *   Hybrid vs Remote vs On-site is a real signal here, so it is carried in the
 *   data rather than dropped.
 * @property {string} [via] Staffing agency, for contract engagements performed
 *   on-site at `company` rather than as a direct employee. Rendered next to the
 *   role.
 * @property {boolean} [current] Role still held. Drives the "Current" marker.
 *   Set explicitly rather than inferred from the period string.
 * @property {string} body One paragraph of prose. This was a list of bullets;
 *   the bullets were the reason the section read like a resume pasted into a
 *   browser.
 *
 *   Delivery figures are deliberately not repeated here. Both entries used to
 *   restate the case study's numbers, the coverage figure and the phrase about
 *   the quality benchmark among them, in the same words, one section apart.
 *   `work.js` owns the delivery story and its figures; these entries own the
 *   things a case study cannot state, which are the scope of the role, how long
 *   it has been held, and what it covers beyond the code. The exception is
 *   `teamsAdopted`, which appears nowhere else.
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    period: "Aug 2022 to Present",
    company: "Cognizant",
    role: "Senior Associate, Projects (Frontend Tech Lead)",
    location: "Bengaluru, India (Hybrid)",
    current: true,
    body: "I lead the frontend for OAO, and have since I joined in 2022. The role covers the platform's architecture and delivery, its security-critical work, and the review and testing practice the wider frontend group works to.",
  },
  {
    period: "Jun 2020 to Apr 2022",
    company: "Infosys",
    role: "Senior Associate Consultant, Frontend Engineering",
    location: "Bengaluru, India (Remote)",
    body: `I led the end-to-end Angular-to-React migration of the Red Hat Process Automation Manager platform, and drove the WCAG 2.1 AA accessibility initiative across its critical enterprise workflows. The reusable component library I designed was adopted by ${metrics.teamsAdopted.text} product teams.`,
  },
  {
    period: "Jun 2018 to Mar 2020",
    company: "Amazecodes Solutions",
    role: "Software Engineer, Frontend",
    location: "Bengaluru, India (On-site)",
    body: "I built responsive React UIs for enterprise SaaS products: an HR workflow platform and a financial solution for Wipro (Project Quantum), using component-driven architecture and SCSS modules. The cross-browser component libraries I developed cut UI defects by 30% and shortened feature delivery cycles.",
  },
  {
    period: "Dec 2015 to May 2018",
    company: "Nokia Networks",
    role: "Configuration Management Engineer",
    location: "Chennai & Bengaluru, India",
    via: "Altran Technologies",
    body: "Two and a half years configuring and optimising telecom infrastructure for Vodafone and Turk Telekom, working to strict reliability and uptime requirements. The first web work came alongside it, building vendor product page layouts at Target as a Digital Vendor Marketing Publisher.",
  },
];
