# Murugesh Aravind — Portfolio

Senior Frontend Engineer with 8+ years of experience building banking platforms and React architectures.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) — configured CSS-first in `app/global.css`; there is no Tailwind v3-style JS config in use
- **Fonts**: IBM Plex Serif / Sans / Mono via `next/font` — one superfamily, three roles
- **Deployment**: Custom domain (Next.js)

## Structure

- `app/` — App Router pages and components
- `app/data/` — all copy, metrics, links, and lists. Components are presentational and read from here (AGENTS.md §2)
- `app/components/` — presentational components
- `__tests__/` — Vitest unit tests
- `tests/e2e/` — Playwright end-to-end tests
- `skills/` — custom Gemini CLI skills for the development workflow

## Routes

| Route | Contents |
| --- | --- |
| `/` | Hero, Work (case study, GenAI, migration, lab projects), Experience, Certifications, Awards, About |
| `/credentials` | All 11 certifications and 3 awards |
| `/lab` | All 4 lab projects |

## Features

- **Performance**: Optimized images and minimal client-side JavaScript — the only interactive component is the navigation.
- **Accessibility**: Semantic landmarks, a skip link, visible focus states, and a reduced-motion path.
- **SEO**: Static metadata, JSON-LD structured data, Open Graph image, and sitemap.
- **Testing**: Vitest for units, Playwright for the responsive navigation contract.

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the development server:

   ```bash
   pnpm dev
   ```

3. Build for production:

   ```bash
   pnpm build
   ```

> If `pnpm` is not installed: `npx next dev`, `npx next build`.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm test` | Vitest unit tests |
| `pnpm test:e2e` | Playwright end-to-end tests |
| `pnpm lint` | ESLint |
| `pnpm build` | Production build |
