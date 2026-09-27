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
 *   browser. The figures that matter are kept, in the sentences.
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    period: "Aug 2022 to Present",
    company: "Cognizant",
    role: "Senior Associate, Projects (Frontend Tech Lead)",
    location: "Bengaluru, India (Hybrid)",
    current: true,
    body: `I lead the frontend for OAO, a high-security banking onboarding platform whose PII masking, secure rendering, and role-based access control became the internal security reference. Page loads and Core Web Vitals improved by 25%, and the testing strategy I set became the team's quality benchmark at ${metrics.testCoverage.text} coverage. I brought Cursor and GitHub Copilot into the team's workflow, set the review standards, and mentored the junior engineers on the team.`,
  },
  {
    period: "Jun 2020 to Apr 2022",
    company: "Infosys",
    role: "Senior Associate Consultant, Frontend Engineering",
    location: "Bengaluru, India (Remote)",
    body: `I led the end-to-end Angular-to-React migration of a Red Hat Process Automation Manager platform serving ${metrics.usersServed.text} active users, cutting load times ${metrics.loadTimeReduction.text} with zero production rollbacks. I drove the WCAG 2.1 AA accessibility initiative across critical enterprise workflows and designed a reusable component library that ${metrics.teamsAdopted.text} product teams adopted.`,
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
