# Testing

## Stack

- **Vitest 5** as the runner, **@testing-library/react** and **user-event** for rendering and interaction, **jsdom** as the DOM environment, and **@testing-library/jest-dom** for the matchers.

## Running

```bash
npm run test            # vitest (watch mode in a TTY)
npm run test -- --run   # single run, the way CI runs it
npm run test:watch
```

CI (`.github/workflows/deploy.yml`) runs `npm run test -- --run` before it builds and deploys.

## Where tests live

Tests sit next to the code they cover, as `*.test.tsx`:

| File | What it covers |
|---|---|
| `src/hooks/qrcode/useStylingQRCode/index.test.tsx` | Renders a small `Harness` that uses the hook, then rerenders with `""`, `"first"` and `"second"`. Checks for 0, then 1, then 1 `:scope > svg` child, so a QR code is never appended twice. It uses the real `qr-code-styling` (no mocks) and no Mantine provider. |
| `src/App.test.tsx` | Placeholder tests only (`expect(true)` / `expect(false)`). They don't test the app. |

## Configuration caveats

- `vite.config.ts` has **no `test` section**: no `environment`, no `setupFiles`, no `globals`. Every test file that needs a DOM must declare it with a pragma:
  ```ts
  // @vitest-environment jsdom
  ```
- `vitest.setup.mjs` exists, but **nothing loads it**. It imports the jest-dom matchers and mocks `getComputedStyle`, `scrollIntoView`, `matchMedia`, `document.fonts` and `ResizeObserver`, which Mantine components need under jsdom. To use it, add this to `vite.config.ts`:
  ```ts
  test: { environment: 'jsdom', setupFiles: ['./vitest.setup.mjs'] }
  ```
  Also remove the stray `export default defineConfig(...)` from the setup file. Do this before writing tests that render Mantine components.

## Coverage

No coverage is configured. Only the hook has a real test. The form, the per-type encoding (`getDataForType`) and `isWebUrl` have no tests yet, and they are the easiest to add (pure functions).
