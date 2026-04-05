# Styling Guide

## Core CSS Patterns

### Flexbox Layouts
```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Grid Layouts
```css
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### Visual Polish
- **Glassmorphism**:
  ```css
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  ```
- **Soft Shadows**: `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);`

## Accessibility Checklist
- Ensure all images have `alt` text.
- Use semantic elements (`<header>`, `<main>`, `<footer>`, `<nav>`).
- Maintain a contrast ratio of at least 4.5:1 for normal text.
