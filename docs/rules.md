# Rules and Conventions

## Tooling

- **ESLint** (`eslint.config.js`, flat config). Run `npm run lint` / `npm run lint:fix`.
  - `@stylistic` customize: 2-space indent, **single quotes**, **no semicolons**, plus the JSX stylistic rules.
  - Extends `js.recommended`, `typescript-eslint` recommended, `react-hooks` (flat recommended) and `react-refresh` (vite).
  - `simple-import-sort` sorts imports and exports (warn).
  - `unused-imports/no-unused-imports` (warn). `no-unused-vars` is a warning, and names that start with `_` are ignored.
- **EditorConfig**: spaces, indent size 2.
- **TypeScript** (`tsconfig.app.json`): `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `erasableSyntaxOnly`, `verbatimModuleSyntax`, `allowImportingTsExtensions`, and the path alias `@/*`. `strict` is **not** enabled.
- CI runs lint and tests before every deploy, so both must pass on `main`.

## Code conventions

- **Imports**: use the `@/` alias and include the file extension (`@/components/qrcode/QRCodeForm.tsx`). Keep import groups separated by a blank line and let `simple-import-sort` order them. Type-only imports need `import type` or an inline `type` (`verbatimModuleSyntax`).
- **Constructs**: `erasableSyntaxOnly` rules out `enum`, `namespace` and parameter properties. Use union types and `as const` objects.
- **Components**: named function exports in PascalCase files. Domain components get a `QRCode*` prefix. Default exports are only for `App` and the `i18n` module.
- **Props**: a local `type XProps = { ... }`, destructured in the signature with defaults.
- **Hooks**: one folder per hook (`hooks/<domain>/useXxx/index.tsx`) with its test next to it (`index.test.tsx`).
- **Module `index.ts`** files hold domain types and helpers (e.g. `getDataForType`). They are not re-export barrels. Import components by their direct path.
- **Styling**: prefer Mantine style props (`p`, `mt`, responsive objects). Use a `*.module.css` file only when props are not enough, with `rem()` and the Mantine breakpoint variables from the PostCSS preset.
- **i18n**: every user-facing string goes through `const { t } = useTranslation()` with flat snake_case keys (`qrcode_form_wifi_ssid_description`). Add each key to `en.json`, which is the typed source of truth, and to `pt.json`.
- **Error handling**: keep it minimal and local. Validation functions return a translated message string. Use try/catch only around parsing that can throw (`isWebUrl`).
- **Comments**: sparse. Write short notes that explain *why*, not what.
- **React Compiler** is on. Don't add `useMemo`/`useCallback` by hand for performance unless profiling shows a need.

## Development constraints

- Node.js 24+ (README, Dockerfile, CI).
- The app must work both at `/` (Docker) and at `/qrcode/` (GitHub Pages). Don't hardcode absolute asset paths; import assets or use `import.meta.env.BASE_URL`.
- Keep `QR_SIZE` as the intrinsic resolution and control the display size with CSS.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, ...).
