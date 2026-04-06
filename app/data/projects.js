export const projects = [
  {
    id: "open-account",
    featured: true,
    tag: "Banking · Enterprise",
    name: "Open Account Online Platform",
    description:
      "End-to-end account opening platform for a major retail bank. " +
      "Built PII masking, role-based access control, and a test suite " +
      "that became the internal coverage benchmark across 3 teams.",
    impact: [
      { num: "50k+", label: "Daily users" },
      { num: "95%", label: "Test coverage" },
      { num: "0", label: "PII breaches" },
    ],
    stack: ["React", "TypeScript", "Redux", "Playwright", "RBAC"],
    company: "Cognizant",
  },
  {
    id: "angular-react-migration",
    featured: false,
    tag: "Migration · Platform",
    name: "Angular to React Migration",
    description:
      "Led full migration of a 50k+ user enterprise platform. " +
      "Reduced load time by 40%, zero rollbacks, component library " +
      "adopted by 6 product teams.",
    impact: [
      { num: "40%", label: "Faster load" },
      { num: "0", label: "Rollbacks" },
      { num: "6", label: "Teams adopted" },
    ],
    stack: ["React", "Angular", "Jest", "Webpack"],
    company: "Infosys",
  },
  {
    id: "portfolio",
    featured: false,
    tag: "Side project · Open source",
    name: "This Portfolio",
    description:
      "Next.js 16 + React 19 with App Router, JSON-LD structured data, " +
      "LERP cursor spotlight, Vitest unit tests, and custom domain via is-a.dev.",
    impact: [],
    stack: ["Next.js", "React 19", "Tailwind", "Vitest", "Vercel"],
    repo: "https://github.com/MurugeshAravind/Portfolio",
  },
];
