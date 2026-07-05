# AGENTS.md — Workspace Context Blueprint for Antigravity & Claude Code

This codebase is a premium portfolio built with Next.js 16, React 19, Tailwind CSS v4, Vitest, and Playwright. This document outlines strict rules, architectural boundaries, and known execution friction points to ensure deterministic execution and prevent regressions.

---

## 🛠️ Architectural Landmines & Warnings

### 1. Tailwind CSS v4 (Alpha) Dependency
* **Location:** `package.json`, `app/globals.css`
* **Warning:** The project uses `@tailwindcss/postcss` and `tailwindcss` version `4.0.0-alpha.13`.
* **Constraint:** Tailwind v4 handles configuration primarily in the CSS file via `@theme` directives rather than a traditional `tailwind.config.js`. Do not attempt to refactor style values or add plugin files using Tailwind v3 configuration patterns, as this will break compilation or cause silent style regressions.

### 2. Strict Separation of Data & Presentation
* **Location:** `app/data/` vs `app/components/`
* **Warning:** All copy, metrics, skills lists, and links must reside in the `app/data/` files (e.g., [projects.js](file:///E:/Project/Portfolio/app/data/projects.js), [experience.js](file:///E:/Project/Portfolio/app/data/experience.js), [certifications.js](file:///E:/Project/Portfolio/app/data/certifications.js)).
* **Constraint:** Components under `app/components/` must remain purely presentational. Do not hardcode portfolio data or copy directly into JSX code.

### 3. Mobile Menu Scroll Lock & iOS Stacking Rules
* **Location:** [hamburger-menu.spec.ts](file:///E:/Project/Portfolio/tests/e2e/hamburger-menu.spec.ts), `app/components/Nav.jsx`
* **Warning:** WebKit (iOS Safari) requires specific overflow controls and stacking contexts.
* **Constraint:** 
  1. The mobile menu scroll lock must apply `overflow: hidden` to **both** `document.body` and `document.documentElement` simultaneously.
  2. The z-index hierarchy must be strictly maintained: Hamburger Button (`1001`) > Navigation Bar (`1000`) > Mobile Menu Overlay (`999`). 
  3. The mobile menu overlay must have `isolation: isolate` and GPU-layer promotion (`transform: translateZ(0)`).

### 4. No Stand-Alone Skill Clouds
* **Warning:** Floating badge/tag clouds are banned to maintain an impact-focused design.
* **Constraint:** Skill badges (e.g., React, TypeScript) must *only* appear inside the specific cards/rows under `Projects` or `Certifications` where they show direct evidence of work. Do not create a separate "Skills" section.

### 5. Edge Runtime Constraints
* **Location:** [app/opengraph-image.jsx](file:///E:/Project/Portfolio/app/opengraph-image.jsx)
* **Warning:** The OpenGraph image generator runs on the Next.js Edge Runtime.
* **Constraint:** Do not import any Node.js native packages (like `fs` or `path`) inside this file.

---

## 📐 Strict Implementation Rules

1. **Test-First Verification:** Before completing any layout or functional task, you must run unit tests via `npx vitest run` and e2e tests via `npx playwright test`.
2. **DOM Identifier Integrity:** Do not remove, rename, or modify IDs or class selectors used in Playwright tests (e.g., `#mobile-menu`, `button.nav-hamburger`, `a.mobile-menu-link`).
3. **No Raw Emails:** Never expose raw emails in HTML. Contact details must route through the Formspree action endpoint.

---

## 🚫 Safe CLI / Command Gateways
* To run unit tests: `npx vitest run`
* To run E2E tests: `npx playwright test`
* To build project: `pnpm build`
