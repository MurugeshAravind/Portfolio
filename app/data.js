import profile from "../profile.jpg";

export const DATA = {
  name: "Murugesh Aravind",
  title: "Senior Frontend Engineer",
  avatarUrl: profile,
  location: "Bengaluru, India",
  email: "arvindh.balasubramaniam@gmail.com",
  phone: "+91-9443763344",
  about:
    "I'm a reliability-focused engineer currently building high-performance banking platforms. With over 8 years of experience, I specialize in simplifying complex legacy systems into clean, modern React architectures. I care deeply about accessibility, comprehensive testing, and creating pixel-perfect user interfaces that are as robust behind the scenes as they are beautiful on the screen.",
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
      description: [
        "Leading frontend architecture for banking platforms, building accessible component libraries and implementing security-first UI patterns.",
      ],
    },
    {
      company: "Infosys",
      role: "Senior Associate Consultant",
      period: "2020 – 2022",
      description: [
        "Modernized enterprise workflow systems by migrating legacy Angular applications to React, improving performance and user experience.",
      ],
    },
    {
      company: "Amazecodes",
      role: "Software Engineer",
      period: "2018 – 2020",
      description: [
        "Built responsive enterprise dashboards with a focus on cross-browser compatibility and component-level testing.",
      ],
    },
  ],
  projects: [
    {
      name: "Banking Onboarding Platform",
      description:
        "High-security customer onboarding flow handling sensitive PII data with real-time validation and localized content delivery. Built a reusable React/TypeScript component library that reduced development time by 30%.",
      link: "#",
      tech: ["React", "TypeScript", "Redux", "Jest"],
    },
    {
      name: "Workflow Migration Tool",
      description:
        "Enterprise dashboard transformation project that improved load times by 40% and updated the UX for 500+ daily internal users. Migrated from Angular to React with code-splitting and asset optimization.",
      link: "#",
      tech: ["React", "Angular", "Webpack"],
    },
  ],
};
