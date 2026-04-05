# JS/TS Best Practices

## General Guidelines
- **Immutability**: Prefer `const` and use `map`/`filter`/`reduce` instead of `for` loops where possible.
- **Explicit Types**: Use TypeScript interfaces and types for all external-facing functions.
- **Naming**: Use camelCase for variables and PascalCase for components/classes.

## React Patterns
- **Functional Components**: Use hooks (`useState`, `useEffect`, `useMemo`) for state and side effects.
- **Prop Drilling**: Avoid prop drilling by using Context API or state management libraries.
- **Keyed Lists**: Always provide a unique `key` when rendering lists.

## Performance
- **Debouncing**: Debounce high-frequency events like `scroll` or `resize`.
- **Memoization**: Use `React.memo` and `useMemo` sparingly to prevent unnecessary re-renders.
