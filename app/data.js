import profile from "../profile.jpg";

export const DATA = {
  name: "Murugesh Aravind",
  title: "Senior Frontend Engineer",
  avatarUrl: profile,
  location: "Bengaluru, India",
  email: "arvindh.balasubramaniam@gmail.com",
  about:
    "I’m a frontend engineer with 8+ years of experience working on large-scale banking platforms, where reliability, performance, and security matter. My strength lies in simplifying complex legacy systems into modern React architectures, with a strong emphasis on accessibility, testing, and performance optimization. I enjoy building pixel-perfect interfaces that balance great user experience with solid engineering foundations.",
  skills: [
    "React",
    "TypeScript",
    "Zustand",
    "Playwright",
    "Jest",
    "Frontend Architecture",
    "Accessibility (WCAG)",
  ],
  experience: [
    {
      company: "Cognizant",
      role: "Senior Associate",
      period: "2022 – Present",
      description:
        "Leading frontend architecture for banking platforms, building accessible component libraries and implementing security-first UI patterns.",
    },
    {
      company: "Infosys",
      role: "Senior Associate Consultant",
      period: "2020 – 2022",
      description:
        "Modernized enterprise workflow systems by migrating legacy Angular applications to React, improving performance and user experience.",
    },
    {
      company: "Amazecodes",
      role: "Software Engineer",
      period: "2018 – 2020",
      description:
        "Built responsive enterprise dashboards with a focus on cross-browser compatibility and component-level testing.",
    },
  ],
  projects: [
    {
      name: "Secure Online Account Opening Platform (Banking Domain)",
      description:
        "React-based customer onboarding flow, ensuring secure and compliant handling of sensitive PII data with real-time validation and localized content. Improved CI efficiency by optimizing Playwright configuration and Jenkins pipelines, reducing build time from ~30 minutes to ~7 minutes",
      link: "#",
      tech: [
        "React",
        "TypeScript",
        "React Testing Library",
        "Jest",
        "Playwright",
        "Webpack",
      ],
    },
    {
      name: "RHPAM",
      description:
        "Enterprise dashboard transformation project that improved load times by 40% and updated the UX for 500+ daily internal users. Migrated from Angular to React with code-splitting and asset optimization.",
      link: "#",
      tech: ["React", "Javascript"],
    },
    {
      name: "Quantum",
      description:
        "A high-performance finance platform built as a Progressive Web App, designed to handle secure customer workflows at scale. Focused on performance optimization, offline readiness, and responsive UX for critical financial operations.",
      tech: ["Angular", "TypeScript", "PWA", "Performance Optimization"],
    },
    {
      name: "HR Management System",
      description:
        "An internal HR platform built to streamline employee lifecycle management, focusing on usability, maintainability, and long-term scalability.",
      tech: ["Angular", "TypeScript", "Responsive Design"],
    },
  ],
};
