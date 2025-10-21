# Repository Guidelines

## Project Structure & Module Organization
App Router keeps layout and routing in `app/` (`layout.tsx`, `page.tsx`). Feature sections in `components/` compose smaller primitives from `components/ui`. Domain data, types, and helpers live in `lib/` (`properties.ts`, `types.ts`, `utils.ts`). Add static assets to `public/` and reference them with `/asset.ext`.

## Build, Test, and Development Commands
- `npm install`: install dependencies before any workflow.
- `npm run dev`: launch the local dev server at `http://localhost:3000`.
- `npm run build`: create the optimized production bundle used for deployments.
- `npm start`: serve the last build locally (mirrors the Render production command).
- `npm run lint`: apply Next.js + TypeScript ESLint rules; pass `-- --fix` to auto-fix safe issues.

## Coding Style & Naming Conventions
Use TypeScript and favor small functional components. Name React components with PascalCase (`AboutSection`, `PropertyCard`) and utilities with camelCase (`utils.ts`). Keep Tailwind utilities inside `className` strings; reuse patterns with the `cn` helper. Follow the repo defaults (2-space indent, double quotes) and run `npm run lint -- --fix` before committing. Comment only when behavior is non-obvious.

## Testing Guidelines
No automated suite exists yet, so manually verify form validation, property filtering, and responsive breakpoints before review. When adding tests, prefer Jest with React Testing Library or Playwright; name files `*.test.ts(x)` alongside the module or in `__tests__/`. Add an `npm test` script and document setup. Always run `npm run lint` plus any new tests before pushing.

## Commit & Pull Request Guidelines
Write concise, imperative commit subjects (e.g., `Add property filter chips`) and group related work together. In pull requests, summarize scope, note env changes, and attach desktop/mobile screenshots for UI updates. Reference issues when relevant and flag areas needing review. Sync with `main` and ensure lint—and any new tests—pass before requesting approval.

## Environment & Deployment Notes
Local development works without env vars, but production builds expect `NEXT_PUBLIC_SITE_URL` (see `README.md`). Render deploys run `npm run build` then `npm start`; mirror that locally before shipping. Keep secrets out of git—store overrides in `.env.local` and share values through the team secret manager.
