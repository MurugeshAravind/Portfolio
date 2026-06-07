# Portfolio certification and optimization

- [x] Add Claude Certified Architect - Foundations certification.
- [x] Add Claude/Anthropic certification icon support.
- [x] Optimize scroll progress rendering.
- [x] Stabilize active-section observer inputs.
- [x] Align E2E CTA expectations with current copy.
- [x] Run verification and record results.

## Review

- Added Claude Certified Architect - Foundations with the Skilljar credential URL and Anthropic icon support.
- Optimized scroll progress updates with requestAnimationFrame and stabilized active-section observer dependencies.
- Updated the tracked hamburger E2E expectation from the old "Let's talk" CTA text to the current "Connect" copy.
- `git diff --check` passed; Git only reported CRLF conversion warnings.
- `npm run build`, Vitest, and Playwright verification are blocked in this shell because `node`/`node.exe` is not available on PATH.
