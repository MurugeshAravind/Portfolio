# AGENTS.md — Workspace Context Blueprint for Antigravity & Claude Code

This codebase is a premium portfolio built with Next.js 16, React 19, Tailwind CSS v4, Vitest, and Playwright. This document outlines strict rules, architectural boundaries, and known execution friction points to ensure deterministic execution and prevent regressions.

---

## 🛠️ Architectural Landmines & Warnings

### 1. Tailwind CSS v4 (Alpha) Dependency
* **Location:** `package.json`, `app/global.css`
* **Warning:** The project uses `@tailwindcss/postcss` and `tailwindcss` v4 (exact version pinned in `package.json`).
* **Constraint:** Tailwind v4 is wired up through `@tailwindcss/postcss` (`postcss.config.js`) with `@import "tailwindcss"` in `app/global.css`; a leftover `tailwind.config.js` exists at the repo root but is not referenced. Do not add plugin files or restyle via Tailwind v3 configuration patterns, as this will break compilation or cause silent style regressions.

### 2. Strict Separation of Data & Presentation
* **Location:** `app/data/` vs `app/components/`
* **Warning:** All copy, metrics, skills lists, and links must reside in the `app/data/` files (e.g., `app/data/projects.js`, `app/data/experience.js`, `app/data/certifications.js`).
* **Constraint:** Components under `app/components/` must remain purely presentational. Do not hardcode portfolio data or copy directly into JSX code.

### 3. Mobile Menu Scroll Lock & iOS Stacking Rules
* **Location:** `tests/e2e/hamburger-menu.spec.ts`, `app/components/Nav.jsx`
* **Warning:** WebKit (iOS Safari) requires specific overflow controls and stacking contexts.
* **Constraint:** 
  1. The mobile menu scroll lock must apply `overflow: hidden` to **both** `document.body` and `document.documentElement` simultaneously.
  2. The z-index hierarchy must be strictly maintained: Hamburger Button (`1001`) > Navigation Bar (`1000`) > Mobile Menu Overlay (`999`). 
  3. The mobile menu overlay must have `isolation: isolate` and GPU-layer promotion (`transform: translateZ(0)`).

### 4. No Stand-Alone Skill Clouds
* **Warning:** Floating badge/tag clouds are banned to maintain an impact-focused design.
* **Constraint:** Skill badges (e.g., React, TypeScript) must *only* appear inside the specific cards/rows under `Projects` or `Certifications` where they show direct evidence of work. Do not create a separate "Skills" section.

### 5. Edge Runtime Constraints
* **Location:** `app/opengraph-image.jsx`
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
