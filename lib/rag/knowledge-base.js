/**
 * Production RAG Knowledge Base for Murugesh Aravind
 * 
 * Strict Schema:
 * Every chunk is an atomic, self-contained unit of truth with:
 * - `contextHeader`: Injected into the retrieval context to eliminate context amnesia.
 * - `verifiedMetrics`: Explicit ground-truth numbers to prevent metric hallucination.
 * - `keywords`: Domain-specific tokens for sparse BM25 lexical matching.
 * - `sourceUrl`: Direct UI anchor link for transparent source inspection.
 */

/**
 * @typedef {Object} RagChunk
 * @property {string} id Unique identifier for the chunk
 * @property {"case_study"|"experience"|"skills"|"education"|"genai_learning"|"awards_certs"|"about"|"contact_policy"} category
 * @property {string} title Human-readable title
 * @property {string} contextHeader Context anchor prepended to content during retrieval
 * @property {string} content Core factual text
 * @property {string[]} verifiedMetrics Immutable numbers verified by code & portfolio
 * @property {string[]} keywords Exact tokens for BM25 keyword matching
 * @property {string} sourceUrl UI section anchor link
 */

/** @type {RagChunk[]} */
export const knowledgeChunks = [
  // ─── 1. PRODUCTION CASE STUDIES (Work Section) ──────────────────────
  {
    id: "work-oao-banking",
    category: "case_study",
    title: "Open Account Online (OAO) - Retail Banking Onboarding",
    contextHeader: "[Cognizant | Aug 2022 – Present | Role: Senior Associate, Projects (Frontend Tech Lead) | Domain: Retail Banking]",
    content: "Designed and delivered the customer onboarding frontend for a major retail bank in React and TypeScript, leading this initiative since August 2022. Architected PII data-masking, secure rendering patterns, and Role-Based Access Control (RBAC) to satisfy rigorous banking compliance standards; this implementation became the internal security reference across engineering teams. Improved page load times and Core Web Vitals by 25% through lazy loading, memoization, custom React Hooks, and Redux Toolkit state management. Established the team's testing strategy with Jest and React Testing Library, achieving 85%+ code coverage and setting the internal engineering quality benchmark. Mentored junior developers and introduced Cursor and GitHub Copilot to accelerate sprint velocity and code review turnarounds.",
    verifiedMetrics: [
      "25% Core Web Vitals and page load improvement",
      "85%+ code test coverage",
      "Thousands of daily customer onboardings"
    ],
    keywords: [
      "Open Account Online", "OAO", "Cognizant", "Retail Banking", "React", "TypeScript",
      "Redux Toolkit", "PII masking", "RBAC", "Core Web Vitals", "Jest", "React Testing Library",
      "Cursor", "GitHub Copilot", "Tech Lead"
    ],
    sourceUrl: "#work"
  },
  {
    id: "work-redhat-migration",
    category: "case_study",
    title: "Red Hat Process Automation Manager - Angular to React Migration",
    contextHeader: "[Infosys | Jun 2020 – Apr 2022 | Role: Senior Associate Consultant (Frontend Engineering) | Domain: Enterprise Workflow Platform]",
    content: "Led the end-to-end Angular-to-React platform migration for the Red Hat Process Automation Manager workflow platform serving 50,000+ active enterprise users. Re-architected the SPA for scalability, maintainability, and developer velocity. Reduced application load times by 40% and raised Lighthouse performance scores by 20 points using Webpack bundle optimization, tree-shaking, code-splitting, and lazy loading. Achieved zero production rollbacks throughout the migration cycle. Contributed to a 15% increase in Daily Active Users (DAU) within six months post-release through UX enhancements and optimistic REST API integrations. Designed a reusable component library adopted across 6 product teams. Spearheaded the WCAG 2.1 AA accessibility initiative, implementing ARIA landmarks, semantic HTML, and keyboard navigation.",
    verifiedMetrics: [
      "50,000+ active enterprise users served",
      "40% reduction in application load times",
      "20-point increase in Lighthouse score",
      "0 production rollbacks during migration",
      "15% increase in Daily Active Users (DAU)",
      "6 product teams adopted reusable component library"
    ],
    keywords: [
      "Infosys", "Red Hat", "Angular to React", "Migration", "SPA", "50,000 users",
      "40% load time reduction", "Lighthouse", "Webpack", "Bundle optimization", "Tree-shaking",
      "WCAG 2.1 AA", "Accessibility", "ARIA", "Zero rollbacks"
    ],
    sourceUrl: "#work"
  },

  // ─── 2. CAREER HISTORY & TENURE (Experience Section) ─────────────────
  {
    id: "exp-cognizant-lead",
    category: "experience",
    title: "Cognizant - Frontend Tech Lead & Senior Associate",
    contextHeader: "[Career History | Cognizant Technology Solutions | Aug 2022 – Present | Bengaluru, India (Hybrid)]",
    content: "Serves as Senior Associate, Projects (Frontend Tech Lead) leading frontend architecture for the OAO retail banking platform. Responsible for platform architecture, security-critical engineering (PII masking, RBAC), code review standards, and testing governance across the wider frontend organization. Recognised with Cognizant's 'Doing The Right Thing' award in 2025 for exceptional delivery quality and engineering standards.",
    verifiedMetrics: ["Aug 2022 to Present (Current Role)", "85%+ test coverage benchmark"],
    keywords: ["Cognizant", "Frontend Tech Lead", "Senior Associate", "Doing The Right Thing Award", "Architecture", "Bengaluru"],
    sourceUrl: "#experience"
  },
  {
    id: "exp-infosys-consultant",
    category: "experience",
    title: "Infosys - Senior Associate Consultant",
    contextHeader: "[Career History | Infosys Limited | Jun 2020 – Apr 2022 | Bengaluru, India (Remote)]",
    content: "Served as Senior Associate Consultant focusing on modern frontend architecture, enterprise UI modernization, and accessibility. Led the Angular-to-React migration of Red Hat Process Automation Manager, designed component libraries adopted by 6 teams, and earned the Infosys Insta Award in 2021 for migration excellence.",
    verifiedMetrics: ["Jun 2020 to Apr 2022", "6 product teams adopted library", "Insta Award 2021"],
    keywords: ["Infosys", "Senior Associate Consultant", "Insta Award", "Red Hat", "Component Library"],
    sourceUrl: "#experience"
  },
  {
    id: "exp-amazecodes-engineer",
    category: "experience",
    title: "Amazecodes Solutions - Software Engineer (Frontend)",
    contextHeader: "[Career History | Amazecodes Solutions Pvt. Ltd | Jun 2018 – Mar 2020 | Bengaluru, India (On-site)]",
    content: "Built responsive React UIs for enterprise SaaS platforms, including an HR workflow platform and a financial solution for Wipro (Project Quantum) using component-driven architecture and SCSS modules. Developed cross-browser compatible React component libraries for Chrome, Firefox, Safari, and Edge that reduced UI defects by 30% and shortened feature delivery cycles. Managed application state using Redux and integrated REST APIs.",
    verifiedMetrics: ["Jun 2018 to Mar 2020", "30% reduction in UI defects"],
    keywords: ["Amazecodes Solutions", "Software Engineer", "Wipro", "Project Quantum", "Redux", "SCSS modules", "Cross-browser"],
    sourceUrl: "#experience"
  },
  {
    id: "exp-nokia-telecom",
    category: "experience",
    title: "Nokia Networks / Altran - Configuration Management Engineer",
    contextHeader: "[Career History | Altran Technologies / Nokia Networks | Dec 2014 – May 2018 | Chennai & Bengaluru, India]",
    content: "Configured and optimized telecom infrastructure for Tier-1 telecom operators including Vodafone and Turk Telekom, adhering to stringent 99.999% uptime and reliability requirements. Cultivated a root-cause and failure-first engineering mindset where configuration blast radiuses are measured in millions of subscribers. Also gained initial web experience as a Digital Vendor Marketing Publisher for Target, developing e-commerce page layouts in Web Commerce Sphere.",
    verifiedMetrics: ["Dec 2014 to May 2018 (3.5 years in telecom infrastructure)", "Tier-1 carriers Vodafone & Turk Telekom"],
    keywords: ["Nokia Networks", "Altran", "Vodafone", "Turk Telekom", "Target", "Configuration Management", "High Availability"],
    sourceUrl: "#experience"
  },

  // ─── 3. GENAI & AGENTIC ARCHITECTURE (AI Section & Lab) ─────────────
  {
    id: "genai-craft-architecture",
    category: "genai_learning",
    title: "Generative AI & Agent Development Capabilities",
    contextHeader: "[AI Engineering & Exploration | Practical Implementation & Certification Path]",
    content: "Hands-on engineering exploration across production GenAI patterns: (1) Agent Orchestration: Designed and deployed multi-agent workflows using Google's Agent Development Kit (ADK) as part of official Google Cloud certification. (2) LLM-Driven Product Logic: Explored replacing rigid business-rule engines with batched LLM-generated recommendations using the Anthropic Claude API, incorporating human-in-the-loop confirmation and strict inference cost budgeting. (3) Context Engineering: Implemented structured prompt and chunking pipelines that minimize hallucination and enforce output schemas. (4) AI-Assisted Tooling: Integrated Cursor and GitHub Copilot into enterprise frontend workflows; earned Runner-Up honors at the Cognizant OpenAI Codex Hackathon (2026).",
    verifiedMetrics: [
      "Certified Partner Specialist - Gemini Enterprise Agent Development (Google Cloud)",
      "Runner-Up - Cognizant OpenAI Codex Hackathon 2026"
    ],
    keywords: [
      "Agent Development Kit", "ADK", "Google Cloud", "Gemini", "Anthropic Claude API",
      "Context Engineering", "Multi-Agent Orchestration", "GitHub Copilot", "Cursor",
      "Prompt Engineering", "OpenAI Codex Hackathon"
    ],
    sourceUrl: "#genai"
  },
  {
    id: "project-inbox-janitor",
    category: "genai_learning",
    title: "Inbox Janitor Agent - Defensive AI Email Assistant",
    contextHeader: "[Open Source Lab Project | Architecture: TypeScript, LangChain, Gemini, Gmail API, Zod]",
    content: "An open-source defensive AI email cleaning agent. Architected with safety-first guardrails: deletion operations are strictly disabled unless DRY_RUN is explicitly toggled off. Every AI email classification is enforced through strict Zod runtime schema validation so ambiguous emails cannot cause accidental data loss. Built resilient multi-model failover across Gemini model pools to gracefully recover from mid-batch rate-limiting without dropping emails.",
    verifiedMetrics: ["Failover pool resilience", "Zod runtime schema enforcement", "DRY_RUN safeguard"],
    keywords: ["Inbox Janitor", "AI Agent", "LangChain", "Gemini", "Zod", "Gmail API", "TypeScript", "Defensive AI"],
    sourceUrl: "/lab"
  },
  {
    id: "project-smartleave-ai",
    category: "genai_learning",
    title: "SmartLeave AI - Workforce Leave Analytics",
    contextHeader: "[Open Source Lab Project | Architecture: React 19, TypeScript, Zustand, Recharts, Express]",
    content: "Event-based leave impact analytics platform designed for Indian organizations. Evaluates regional holiday calendars, commute disruptions, and team dependencies to replace blanket holiday policies with data-driven workforce planning recommendations. Built with React 19, Zustand for lightweight state management, Recharts for dynamic visual modeling, and Express.",
    verifiedMetrics: ["React 19 implementation", "Live production deployment on Vercel"],
    keywords: ["SmartLeave AI", "React 19", "Zustand", "Recharts", "Workforce Analytics", "TypeScript"],
    sourceUrl: "/lab"
  },

  // ─── 4. CORE SKILLS & TECHNICAL TAXONOMY ─────────────────────────────
  {
    id: "skills-core-stack",
    category: "skills",
    title: "Frontend Engineering Core Stack & Architecture Depth",
    contextHeader: "[Technical Skills & Engineering Competencies | 8+ Years Experience]",
    content: "Expertise spans: (1) Core Frontend: JavaScript (ES6+), TypeScript, React 19, Next.js 16, HTML5, CSS3, Tailwind CSS v4, SCSS modules. (2) Architecture & Performance: Micro-Frontends, Single-Page Applications (SPA), Core Web Vitals optimization, code-splitting, tree-shaking, lazy loading, Webpack & PostCSS bundle optimization. (3) State Management: Redux Toolkit, Zustand, Context API. (4) Testing & Quality: Jest, React Testing Library, Playwright, Vitest, Test-Driven Development (TDD), setting 85%+ coverage benchmarks. (5) Accessibility: WCAG 2.1 AA, ARIA landmarks, semantic HTML, keyboard navigation. (6) Cloud & DevOps: AWS (Lambda, API Gateway, DynamoDB, Cognito, Amplify), CI/CD pipelines, Git, GitHub Actions, Jenkins.",
    verifiedMetrics: ["8+ years professional experience", "85%+ testing coverage standard"],
    keywords: [
      "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Micro-Frontends",
      "Redux Toolkit", "Zustand", "Playwright", "Vitest", "Jest", "WCAG 2.1 AA", "AWS Lambda",
      "CI/CD", "Webpack", "Performance Optimization"
    ],
    sourceUrl: "#skills"
  },

  // ─── 5. FORMAL EDUCATION & BACKGROUND ────────────────────────────────
  {
    id: "edu-btech-it",
    category: "education",
    title: "Bachelor of Technology in Information Technology (B.Tech IT)",
    contextHeader: "[Formal Education | K.S. Rangasamy College of Technology | Aug 2010 – Jun 2014]",
    content: "Earned a Bachelor of Technology (B.Tech) in Information Technology from K.S. Rangasamy College of Technology (Anna University affiliate), Tamil Nadu, India, graduating in June 2014 with a CGPA of 7.19/10. Formal coursework established strong foundations in algorithms, data structures, operating systems, computer networking, and software engineering principles.",
    verifiedMetrics: ["B.Tech IT (2010 – 2014)", "CGPA: 7.19 / 10"],
    keywords: ["Education", "B.Tech", "Information Technology", "K.S. Rangasamy College of Technology", "Anna University", "Degree", "College"],
    sourceUrl: "#about"
  },

  // ─── 6. CERTIFICATIONS & RECOGNITION ────────────────────────────────
  {
    id: "certs-credentials-registry",
    category: "awards_certs",
    title: "Professional Certifications & Industry Recognition",
    contextHeader: "[Credentials & Certifications | Verified on Credly / Issuers]",
    content: "Holds formal industry certifications: (1) Google Cloud: Certified Partner Specialist - Gemini Enterprise Agent Development (Aug 2026), Add Agents to Gemini Enterprise / ADK (Jun 2026). (2) Developer Tooling: GitHub Copilot Foundations (GitHub, Jun 2025), Oracle Certified Foundations Associate (Jun 2025). (3) Cloud: AWS Certified Developer Associate (Aug 2026), AWS Certified Cloud Practitioner (Mar 2026). (4) AI & OpenAI: Codex Solutions Practitioner (OpenAI, Sep 2026), Codex Deployment Practitioner (OpenAI, Sep 2026), Context Engineering Foundation (Cognizant, Apr 2026). Awards include: Cognizant 'Doing The Right Thing' Award (2025), Infosys Insta Award (2021), and Cognizant OpenAI Codex Hackathon Runner-Up (2026).",
    verifiedMetrics: [
      "Google Cloud Certified Gemini Partner Specialist",
      "AWS Certified Developer Associate",
      "GitHub Copilot Foundations Certified",
      "3 Formal Corporate Delivery Awards"
    ],
    keywords: [
      "Certifications", "Credly", "Google Cloud", "Gemini Enterprise", "GitHub Copilot",
      "AWS Certified Developer", "AWS Cloud Practitioner", "OpenAI Codex", "Oracle Certified",
      "Awards", "Doing The Right Thing"
    ],
    sourceUrl: "/credentials"
  },

  // ─── 7. ENGINEERING PHILOSOPHY & MINDSET ─────────────────────────────
  {
    id: "about-philosophy",
    category: "about",
    title: "Engineering Mindset: High-Availability & Failure-First Design",
    contextHeader: "[Engineering Mindset & Professional Philosophy | Murugesh Aravind]",
    content: "Originating in high-reliability telecom infrastructure at Nokia Networks—where misconfigurations directly impacted telecom subscribers—shaped an engineering philosophy centred on resilience: design for failure, always maintain an automated rollback path, and never ship code you cannot verify with a test. Believes frontend engineering is core distributed systems architecture rather than superficial UI styling. Seeks senior and technical lead roles where performance, accessibility, security, and developer velocity are treated as primary product criteria.",
    verifiedMetrics: ["Zero production rollbacks track record", "8+ years engineering tenure"],
    keywords: ["Philosophy", "Mindset", "Telecom origin", "Design for failure", "Rollback path", "Architecture", "Leadership"],
    sourceUrl: "#about"
  },

  // ─── 8. CONTACT & ROUTING POLICY (AGENTS.md Compliance) ─────────────
  {
    id: "policy-contact-channels",
    category: "contact_policy",
    title: "Official Contact Channels & Interview Inquiries",
    contextHeader: "[Contact Policy & Candidate Availability | Bengaluru, India (Hybrid/Remote)]",
    content: "Murugesh is open to Senior Frontend Engineer, Frontend Tech Lead, and UI Architecture roles (Hybrid in Bengaluru or Remote). In strict compliance with privacy standards and anti-scraping guidelines (AGENTS.md), direct contact is managed through his LinkedIn profile (https://linkedin.com/in/murugesh-aravind-0ab64847) and the interactive contact form on this portfolio. Recruiters and engineering managers are invited to reach out directly via LinkedIn or submit an inquiry through the site form to schedule a discussion.",
    verifiedMetrics: ["Location: Bengaluru, India", "Open to Hybrid & Remote Senior/Lead Roles"],
    keywords: ["Contact", "Hire", "Interview", "Email", "Phone", "LinkedIn", "Location", "Bengaluru", "Remote", "Availability"],
    sourceUrl: "#contact"
  }
];
