# Testing Patterns

## Mocking
- **Function Mocks**: `vi.fn()` (Vitest) or `jest.fn()` (Jest).
- **Module Mocks**: `vi.mock('./module')` to isolate the unit under test.

## Async Testing
- Always `await` promises.
- Use `waitFor` for UI changes that happen asynchronously.

## Reproduction Script Example
```javascript
import { test, expect } from 'vitest';
import { fixMe } from './logic';

test('reproduces the reported bug', () => {
  const input = { /* edge case */ };
  expect(() => fixMe(input)).not.toThrow();
});
```
