# Repository Guidelines

## Purpose
This brief keeps GPT Codex and Claude Code aligned on the Mount Sterling redevelopment site—a Next.js App Router proof of concept spotlighting mixed-use inventory and seeding the future Payload CMS.

## Tech Stack & Structure
Active frontend tooling: Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui, React Hook Form, Zod, Lucide. Roadmap services: Payload CMS 2.0, PostgreSQL, Resend/SendGrid, Cloudinary. Layout and routing live in `app/`; feature sections in `components/` and `components/ui/`; typed data and helpers in `lib/`. Place static assets in `public/` and reference them with `/asset.ext`.

## Key Commands
- `npm install`: install dependencies.
- `npm run dev`: serve the app at `http://localhost:3000`.
- `npm run build`: produce the optimized bundle used by Render.
- `npm start`: run the latest build locally.
- `npm run lint`: apply ESLint (append `-- --fix` to auto-fix).

## Coding Style & Workflow
Write TypeScript, keep components small, and compose Tailwind utilities inside `className` with `cn` from `lib/utils.ts`. Name React files and components in PascalCase, utilities in camelCase, and follow 2-space indent with double quotes. Use imperative commit subjects such as `Add property filter chips`. Pull requests must summarize scope, flag environment changes, attach desktop/mobile screenshots for UI tweaks, highlight review hotspots, and link issues when available.

## Testing & Quality
No automated suite exists yet—manually validate property filtering, contact form success and error states, and responsive breakpoints. When adding coverage, use Jest with React Testing Library or Playwright; store specs as `*.test.ts(x)` beside the module or in `__tests__/`, wire an `npm test` script, and document setup. Always run `npm run lint` plus any new tests before pushing.

## Deployment & Environment
Local development runs without env vars, but production expects:
```env
NEXT_PUBLIC_SITE_URL=https://downtownmountsterling.com
RESEND_API_KEY=...
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=...
CLOUDINARY_URL=cloudinary://...
```
Keep secrets in `.env.local` (git ignored) and share through the team manager. Render deploys call `npm run build` then `npm start`; mirror that flow locally prior to shipping.

## Roadmap & Collaboration
Phase 0 delivers the landing page with hero, property grid (3 commercial suites, 6 residential units, theater space), and contact form. Phase 1 adds admin listings, lead capture, and newsletter signup. Phase 2 targets floor plans, virtual tours, event calendar, analytics, and SEO. Maintain the “historic meets modern” aesthetic with high-quality imagery, community storytelling, and clear CTAs. Coordinate GPT Codex and Claude through this brief, log open tasks in PRs, and cross-check each contribution with linting and manual QA before merge.
