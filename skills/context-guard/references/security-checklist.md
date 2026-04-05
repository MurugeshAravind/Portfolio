# Security Checklist

## Credential Safety
- Never check in `.env` files.
- Use `process.env` to access secrets in code.
- Ensure `.gitignore` contains `node_modules`, `.env`, and sensitive build artifacts.

## Input Validation
- Sanitize all user-provided data to prevent XSS.
- Use parameterized queries or ORMs to prevent SQL injection.

## Context Efficiency
- Avoid reading files larger than 50KB in their entirety.
- Use `grep_search` to find relevant code snippets first.
- Consolidate multi-step changes into a single turn where possible (respecting safety rules).
