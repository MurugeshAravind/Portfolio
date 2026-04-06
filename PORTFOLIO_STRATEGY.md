# Portfolio Overhaul Strategy — Murugesh Aravind
## Instructions for Claude Code

This document is the single source of truth for rebuilding `aravind.is-a.dev`.
Read this entirely before touching any file. Every decision here is intentional.

---

## The Core Problem to Solve

The current site is **a resume rendered in a browser**. It has:
- A two-column CV layout (sidebar + content)
- Floating skill badges with no context
- Section order mirroring a Word document (About → Experience → Projects)
- Text-heavy content with no demonstration of actual work
- A photo + name + title stacked like a LinkedIn card

The goal is a **portfolio that shows craft**, not a page that describes it.
A hiring manager should feel your engineering quality *from the UI itself* — the
layout, the interactions, the performance, the code structure — before reading
a single word about your experience.

**The test**: If you removed all the text, would the site still communicate
"senior engineer"? It should. Right now it would look like an empty resume template.

---

## Identity & Aesthetic Direction

**Owner**: Murugesh Aravind — Senior Frontend Engineer, 8 years, banking/fintech domain  
**Audience**: Hiring managers, tech leads, recruiters at product companies  
**Tone**: Refined dark editorial — confident, precise, slightly technical  
**One thing they must remember**: The impact numbers. 50k users. 40% faster. 95% coverage.

### Design System

```css
/* Commit to these. Do not deviate. */
--bg:        #0a0a0a;
--surface:   #111111;
--card:      #141414;
--border:    rgba(255, 255, 255, 0.08);
--accent:    #c8f545;   /* acid green — the signature color */
--accent2:   #3b82f6;   /* blue — secondary accent */
--text:      #f0ede6;   /* warm white — not pure #fff */
--muted:     #6b6b6b;

/* Typography */
--font-display: 'Syne', sans-serif;   /* headings — geometric, 800 weight */
--font-body:    'DM Sans', sans-serif; /* body — clean, 300–500 weight */
```

**Font loading** — add to `app/layout.js`:
```js
import { Syne, DM_Sans } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '700', '800'], variable: '--font-display' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-body' })
```

---

## File Structure to Build

```
app/
├── layout.js            — fonts, metadata, global CSS vars
├── page.js              — composes all sections
├── globals.css          — CSS variables, resets, base styles
│
├── components/
│   ├── Nav.jsx          — sticky top bar
│   ├── Hero.jsx         — full-width two-column hero
│   ├── ProjectCard.jsx  — reusable project card
│   ├── Projects.jsx     — projects section with featured card
│   ├── Experience.jsx   — timeline table layout
│   ├── About.jsx        — minimal, single paragraph + photo
│   ├── Contact.jsx      — form, no raw email exposed
│   └── Footer.jsx
│
├── data/
│   ├── projects.js      — all project data as JS objects
│   └── experience.js    — work history as JS objects
│
└── hooks/
    └── useSpotlight.js  — LERP cursor spotlight (already exists, keep it)
```

**Rule**: Every section is a separate component. `page.js` only composes them.
**Rule**: All content lives in `data/`. Components are purely presentational.

---

## Section-by-Section Implementation

### 1. Nav — Replace the sidebar entirely

**Current**: Vertical list inside the page ("ABOUT / EXPERIENCE / PROJECTS")  
**Target**: Sticky horizontal top bar, 60px tall, blur backdrop

```jsx
// components/Nav.jsx
export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">MA<span className="accent">.</span></span>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Let's talk</a>
    </nav>
  )
}
```

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 60px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
```

**Do not** put name/photo/location in the nav. It is navigation only.

---

### 2. Hero — Full viewport, two-column grid

**Current**: Left column = photo + name + title + location + email + social icons  
**Target**: Left = statement headline + tagline + CTAs. Right = impact stat cards + stack pills.

**Critical rule**: The hero must answer "why should I care?" in 3 seconds without scrolling.

```jsx
// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>Open to senior / lead roles</span>
        </div>

        <h1 className="hero-title">
          Frontend engineer<br />
          who ships <em>at scale.</em>
        </h1>

        <p className="hero-sub">
          8 years building banking platforms and React architectures
          for 50,000+ users. I turn complex legacy systems into fast,
          accessible, rigorously tested products.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">See my work</a>
          <a href="/Murugesh_Aravind_CV.pdf" className="btn-secondary" target="_blank">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="stat-row">
          {[
            { num: '8+', label: 'Years experience' },
            { num: '50k', label: 'Users served' },
            { num: '40%', label: 'Load time cut' },
          ].map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="stack-card">
          <span className="stack-label">Core stack</span>
          <div className="stack-pills">
            {['React', 'TypeScript', 'Next.js', 'Redux Toolkit',
              'Zustand', 'Jest', 'Playwright', 'AWS DVA-C02'].map(s => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Layout rules**:
- `display: grid; grid-template-columns: 1fr 1fr; min-height: 88vh; align-items: center;`
- Stat cards: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;`
- Stat numbers: Syne 800, 40px, accent color
- No profile photo in the hero. Photo goes in the About section only.
- No location, no email, no social icons in the hero.

---

### 3. Projects — The centrepiece, not the third section

**Current**: Buried after About and Experience, likely a simple list  
**Target**: First content section after hero (`id="work"`), featured project spans full width

**Section order in `page.js`**:
```
Nav → Hero → Projects → Experience → About → Contact → Footer
```
This is the most important structural change. Projects come FIRST.

#### Data shape — `data/projects.js`

```js
export const projects = [
  {
    id: 'open-account',
    featured: true,
    tag: 'Banking · Enterprise',
    name: 'Open Account Online Platform',
    description:
      'End-to-end account opening platform for a major retail bank. ' +
      'Built PII masking, role-based access control, and a test suite ' +
      'that became the internal coverage benchmark across 3 teams.',
    impact: [
      { num: '50k+', label: 'Daily users' },
      { num: '95%',  label: 'Test coverage' },
      { num: '0',    label: 'PII breaches' },
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Playwright', 'RBAC'],
    company: 'Cognizant',
  },
  {
    id: 'angular-react-migration',
    featured: false,
    tag: 'Migration · Platform',
    name: 'Angular → React Migration',
    description:
      'Led full migration of a 50k+ user enterprise platform. ' +
      'Reduced load time by 40%, zero rollbacks, component library ' +
      'adopted by 6 product teams.',
    impact: [
      { num: '40%', label: 'Faster load' },
      { num: '0',   label: 'Rollbacks' },
      { num: '6',   label: 'Teams adopted' },
    ],
    stack: ['React', 'Angular', 'Jest', 'Webpack'],
    company: 'Infosys',
  },
  {
    id: 'portfolio',
    featured: false,
    tag: 'Side project · Open source',
    name: 'This Portfolio',
    description:
      'Next.js 16 + React 19 with App Router, JSON-LD structured data, ' +
      'LERP cursor spotlight, Vitest unit tests, and custom domain via is-a.dev.',
    impact: [],
    stack: ['Next.js', 'React 19', 'Tailwind', 'Vitest', 'Vercel'],
    repo: 'https://github.com/MurugeshAravind/Portfolio',
  },
]
```

#### ProjectCard component

```jsx
// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-visual" data-id={project.id} />

      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        {project.impact.length > 0 && (
          <div className="project-impact">
            {project.impact.map(i => (
              <div key={i.label} className="impact-stat">
                <span className="impact-num">{i.num}</span>
                <span className="impact-label">{i.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-stack">
          {project.stack.map(s => (
            <span key={s} className="pill pill-sm">{s}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
```

#### Layout rules for Projects section

```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Featured card spans full width */
.project-card.featured {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* Impact numbers */
.impact-num {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--accent);
  display: block;
}

/* Stack pills inside cards — not floating globally */
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}
```

**Critical rule**: Skill badges ONLY appear inside project cards. Never as a
standalone "Skills" section. Skills shown in context are proof. Skills shown
alone are just a list.

---

### 4. Experience — Timeline table, not bullet blocks

**Current**: Resume-style section headers with bullet points  
**Target**: Two-column timeline. Date column left (140px), content right.

```jsx
// data/experience.js
export const experience = [
  {
    period: '2022 — Present',
    company: 'Cognizant',
    role: 'Senior Frontend Engineer',
    bullets: [
      'Built Open Account Online platform handling 50k+ daily users with full PII masking and role-based access control',
      'Established test coverage standard (95%+) adopted across 3 product teams as internal benchmark',
      'Mentored 4 junior engineers; reduced PR review cycle time by 35%',
      'Driving AWS DVA-C02 certification; personal AWS account for hands-on architecture practice',
    ],
  },
  {
    period: '2018 — 2022',
    company: 'Infosys',
    role: 'Frontend Engineer',
    bullets: [
      'Led Angular-to-React migration of enterprise platform serving 50k+ users — 40% load time reduction, zero rollbacks',
      'Designed reusable component library adopted across 6 product teams',
      'Reduced onboarding time for new engineers by documenting component API contracts',
    ],
  },
]
```

```css
.exp-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 40px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
}

.exp-period {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-top: 4px;
}

/* Bullet style — use → not • */
.exp-bullets li::before {
  content: '→';
  color: var(--accent);
  margin-right: 8px;
}
```

**Rule**: Every bullet must start with an action verb and end with a measurable
outcome. Remove any bullet that doesn't have a number, percentage, or named
product outcome.

---

### 5. About — One paragraph, one photo, no badge cloud

**Current**: "ABOUT" section at the top with skills badges below paragraph  
**Target**: Minimal section near the bottom. One confident paragraph. Photo as
a full-height editorial block, not a small circle avatar.

```jsx
// components/About.jsx
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <img src="/profile.webp" alt="Murugesh Aravind" className="about-photo" />
          </div>
        </div>

        <div className="about-content">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>About</h2>
          </div>

          <p className="about-text">
            I'm a Senior Frontend Engineer based in Chennai, India, with 8 years
            building banking and enterprise platforms where performance, security,
            and accessibility are non-negotiable. My strength is taking tangled
            legacy codebases and making them fast, tested, and maintainable —
            without burning the team in the process.
          </p>

          <p className="about-text">
            Outside of client work I'm pursuing AWS DVA-C02 and building side
            projects that let me explore the full stack. I care deeply about
            code that future engineers can actually understand.
          </p>

          <div className="about-links">
            <a href="https://github.com/MurugeshAravind" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com/in/murugesh-aravind-0ab64847" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

```css
.about-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 64px;
  align-items: start;
}

.about-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(20%);
}
```

**No skill badges here.** Skills live in project cards only.  
**No email address exposed.** Use the Contact section with a form.

---

### 6. Contact — Form, not a raw email address

The current site exposes `arvindh.balasubramaniam@gmail.com` as plain text.
This will get scraped immediately. Replace with a form.

Use **Formspree** (free tier, no backend needed):

```jsx
// components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2>Let's talk</h2>
      </div>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="contact-form"
      >
        <div className="form-row">
          <input name="name"    type="text"  placeholder="Your name"  required />
          <input name="email"   type="email" placeholder="Your email" required />
        </div>
        <textarea name="message" rows={5} placeholder="What are you working on?" required />
        <button type="submit" className="btn-primary">Send message</button>
      </form>
    </section>
  )
}
```

Sign up at formspree.io, create a form, paste the endpoint. Done.

---

## Global CSS Rules

```css
/* globals.css */

:root {
  --bg:      #0a0a0a;
  --surface: #111111;
  --card:    #141414;
  --border:  rgba(255, 255, 255, 0.08);
  --accent:  #c8f545;
  --accent2: #3b82f6;
  --text:    #f0ede6;
  --muted:   #6b6b6b;
  --font-display: var(--syne);
  --font-body:    var(--dm-sans);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* Section rhythm */
section {
  padding: 96px 48px;
  border-top: 1px solid var(--border);
}

/* Section header pattern — used on every section */
.section-header {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 56px;
}

.section-num {
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.section-header h2 {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

/* Horizontal rule after section title */
.section-header::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* Cards */
.project-card, .stat-card, .stack-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.project-card:hover, .stat-card:hover {
  border-color: rgba(200, 245, 69, 0.3);
  transform: translateY(-3px);
}

/* Buttons */
.btn-primary {
  display: inline-block;
  padding: 12px 28px;
  background: var(--accent);
  color: #000;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(200, 245, 69, 0.25);
}

.btn-secondary {
  display: inline-block;
  padding: 12px 28px;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: border-color 0.2s;
}

.btn-secondary:hover { border-color: rgba(255, 255, 255, 0.3); }

/* Pills */
.pill {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: rgba(200, 245, 69, 0.1);
  color: var(--accent);
}

.pill-blue { background: rgba(59, 130, 246, 0.12); color: #60a5fa; }
.pill-gray { background: rgba(255, 255, 255, 0.06); color: var(--muted); }
```

---

## Explicit "Do Not Do" List

These are the resume-ification patterns to eliminate. Claude Code must refuse
to re-introduce any of these:

| ❌ Resume pattern | ✅ Portfolio replacement |
|---|---|
| Sidebar with photo + name + nav list | Sticky top nav bar |
| "ABOUT / EXPERIENCE / PROJECTS" vertical nav | `<nav>` with horizontal links |
| Floating skill badge cloud | Pills inside project cards only |
| About section as first content section | Projects section first |
| Experience as the dominant section | Experience is secondary to projects |
| Raw email address in the open | Formspree contact form |
| Small circle avatar | Editorial 3:4 ratio photo in About |
| Section headers in ALL CAPS small font | Section headers with number prefix (01, 02…) |
| Bullet points starting with "Responsible for…" | Bullets starting with action verb + outcome metric |
| Progress bar skill meters (e.g. React ████░ 80%) | Never. These are meaningless. Delete on sight. |
| "References available on request" | Not needed. Remove. |

---

## Performance & SEO Checklist

These must not regress during the rebuild:

- [ ] `next/image` for all images (already using `profile.webp` — keep this)
- [ ] JSON-LD structured data in `<head>` (already present — preserve it)
- [ ] Sitemap generation — confirm `app/sitemap.js` exists
- [ ] `robots.txt` — confirm it exists in `public/`
- [ ] `poweredByHeader: false` in `next.config.mjs` (already done — keep it)
- [ ] `compress: true` in `next.config.mjs` (already done — keep it)
- [ ] No email address in HTML source — use Formspree
- [ ] Page title: `"Murugesh Aravind — Senior Frontend Engineer"`
- [ ] OG image: create `app/opengraph-image.jsx` using `next/og ImageResponse`
- [ ] Canonical URL set to `https://aravind.is-a.dev`

---

## OG Image (Quick Win)

Create `app/opengraph-image.jsx`:

```jsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div style={{
      width: '100%', height: '100%',
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px',
    }}>
      <p style={{ color: '#c8f545', fontSize: 20, marginBottom: 16 }}>
        aravind.is-a.dev
      </p>
      <h1 style={{ color: '#f0ede6', fontSize: 72, fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
        Murugesh Aravind
      </h1>
      <p style={{ color: '#6b6b6b', fontSize: 28, marginTop: 16 }}>
        Senior Frontend Engineer · 8 years · Banking & Fintech
      </p>
    </div>
  )
}
```

---

## Page Metadata

In `app/layout.js`:

```js
export const metadata = {
  title: 'Murugesh Aravind — Senior Frontend Engineer',
  description:
    '8 years building banking platforms and React architectures. ' +
    'Based in Chennai. Open to senior and lead frontend roles.',
  metadataBase: new URL('https://aravind.is-a.dev'),
  openGraph: {
    title: 'Murugesh Aravind — Senior Frontend Engineer',
    description: '8 years · React · TypeScript · Banking · 50k+ users',
    url: 'https://aravind.is-a.dev',
    siteName: 'Murugesh Aravind',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murugesh Aravind — Senior Frontend Engineer',
  },
}
```

---

## Execution Order for Claude Code

Execute in this exact order. Complete and verify each step before the next.

1. **Update `app/layout.js`** — add Syne + DM Sans fonts, CSS variables, updated metadata
2. **Rewrite `app/globals.css`** — replace with the CSS defined in this doc
3. **Create `app/data/projects.js`** and `app/data/experience.js`
4. **Build `Nav.jsx`** — sticky horizontal bar, no sidebar
5. **Build `Hero.jsx`** — two-column, stat cards, no profile photo here
6. **Build `ProjectCard.jsx`** + **`Projects.jsx`** — featured layout, impact numbers
7. **Build `Experience.jsx`** — timeline grid layout
8. **Build `About.jsx`** — editorial photo, one paragraph, no badge cloud
9. **Build `Contact.jsx`** — Formspree form, no raw email
10. **Update `app/page.js`** — compose in order: Nav → Hero → Projects → Experience → About → Contact → Footer
11. **Create `app/opengraph-image.jsx`** — branded OG image
12. **Audit** — run through the "Do Not Do" list and confirm zero violations
13. **Run existing Vitest tests** — fix any that break due to restructuring
14. **Deploy** — `git push` to main, Vercel auto-deploys to `aravind.is-a.dev`

---

## Definition of Done

The rebuild is complete when a person who has never met Murugesh Aravind can:

1. Land on the site and understand **what he does and how good he is** in under 5 seconds
2. See **proof of impact** (numbers, outcomes) before reading a single bullet point
3. Find **no floating skill badges** disconnected from actual work
4. Feel the site itself demonstrates **engineering quality** through its layout, performance, and interactions
5. Contact Murugesh **without his email being exposed** in the HTML source

If any of these five are not true, the rebuild is not done.
