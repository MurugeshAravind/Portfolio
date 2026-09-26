/**
 * @typedef {Object} ExperienceEntry
 * @property {string} period
 * @property {string} company
 * @property {string} role Official job title, followed by the functional title
 *   where the two differ. Mirrors the dual-title format used on the resume.
 * @property {string} [via] Staffing agency, for contract engagements performed
 *   on-site at `company` rather than as a direct employee. Rendered as a
 *   "Contract via X" label next to the role.
 * @property {string[]} bullets
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    period: "Aug 2022 — Present",
    company: "Cognizant",
    role: "Senior Associate, Projects — Frontend Tech Lead",
    bullets: [
      "Architected React + TypeScript frontend for the Open Account Online (OAO) banking platform, supporting secure customer onboarding for thousands of customers daily",
      "Implemented PII data-masking, secure rendering, and role-based access control (RBAC) to meet enterprise banking compliance requirements",
      "Improved page load times and Core Web Vitals by 25% through lazy loading, memoization, React Hooks, and Redux Toolkit state management",
      "Established testing strategy with Jest and React Testing Library, reaching 85%+ code coverage and setting the internal quality benchmark",
      "Introduced AI-assisted development tooling (Cursor, GitHub Copilot) into team workflows, improving sprint velocity and review turnaround",
      "Led code reviews, set engineering standards, and mentored junior frontend developers in React, TypeScript, and component-driven development",
    ],
  },
  {
    period: "Jun 2020 — Apr 2022",
    company: "Infosys",
    role: "Senior Associate Consultant — Frontend Engineering",
    bullets: [
      "Led the end-to-end Angular-to-React migration of a Red Hat Process Automation Manager workflow platform serving 50,000+ active users, re-architecting the SPA for scalability and developer velocity",
      "Reduced application load times by 40% and improved Lighthouse scores by 20 points via code-splitting, lazy loading, tree-shaking, and Webpack bundle optimization, with zero production rollbacks",
      "Contributed to 15% growth in Daily Active Users within six months of release through UX improvements and REST API integration optimizations",
      "Drove the WCAG 2.1 AA accessibility initiative across critical enterprise workflows, implementing ARIA landmarks, semantic HTML, and full keyboard navigation",
      "Designed a reusable component library adopted across 6 product teams, improving UI consistency and speed-to-market",
    ],
  },
  {
    period: "Jun 2018 — Mar 2020",
    company: "Amazecodes Solutions",
    role: "Software Engineer — Frontend",
    bullets: [
      "Built responsive React UIs for enterprise SaaS products, including an HR workflow platform and a financial solution for Wipro (Project Quantum), using component-driven architecture and SCSS modules",
      "Developed reusable, cross-browser React component libraries (Chrome, Firefox, Safari, Edge), reducing UI defects by 30% and shortening feature delivery cycles",
      "Integrated REST APIs and managed application state with Redux to deliver data-driven UIs for B2B SaaS clients",
    ],
  },
  {
    period: "Dec 2015 — May 2018",
    company: "Nokia",
    role: "Configuration Management Engineer",
    via: "Altran",
    bullets: [
      "Managed configuration and optimization of telecom infrastructure for Vodafone and Turk Telekom, working to strict reliability and uptime requirements",
    ],
  },
  {
    period: "Dec 2014 — May 2015",
    company: "Target",
    role: "Digital Vendor Marketing Publisher",
    via: "Manpower Consultancy",
    bullets: [
      "Built vendor product page layouts and product content in Web Commerce Sphere, the first entry point into web development",
    ],
  },
];
