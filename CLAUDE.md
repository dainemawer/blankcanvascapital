# Blank Canvas Capital: Agent Guide

Marketing site for Blank Canvas Capital, a South African investment firm (https://blankcanvascapital.co.za). Small, content-driven site: no database, no CMS, no auth. Owner/author: Daine Mawer.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict), Node 22 (`.nvmrc`; engines `>=20.9`)
- Tailwind CSS **3.4** (not v4) + one global stylesheet, `src/styles/globals.css`
- shadcn/ui (Radix Dialog/Sheet in `src/components/ui`), `cva`, `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`
- framer-motion (page transitions in `Layout`), SWR (client fetching), react-hook-form (contact form)
- Resend for email, Google Analytics via `@next/third-parties`
- npm (`package-lock.json`); don't introduce yarn/pnpm

## Commands

| Task | Command |
| --- | --- |
| Dev server | `npm run dev` (http://localhost:3000) |
| Type check | `npm run type-check` |
| Lint | `npm run lint` |
| Build | `npm run build` |

Type-check and lint are both clean at baseline. Run both after any code change, and `npm run build` for anything touching routing, config or API routes. There is **no test suite**.

Storybook scripts exist in `package.json` and three `*.stories.ts(x)` files exist, but there is no `.storybook/` config. Storybook was removed in an earlier refactor, so treat it as dead. Don't write new stories unless asked.

## Layout

```
src/
  app/                 Routes: / , about-us, investment-approach, portfolio, team, contact
    api/send           POST: emails the contact form via Resend
    api/portfolio      GET: hardcoded portfolio company list (the content source)
    api/team           GET: hardcoded team list
    layout.tsx         Fonts, site metadata, GA, wraps children in <Layout>
    sitemap.ts, robots.txt, error.tsx, not-found.tsx
  components/<Name>/   index.tsx (+ <Name>.types.ts for props)
  components/ui/       shadcn primitives (dialog, sheet)
  hooks/ lib/          useDialog, useScrollPosition; fetcher, submit, gtag, utils
  styles/globals.css   CSS variables (fluid font sizes, --radius) + utilities
public/                Images: logos/, heros/, team/, icons/, real-estate/
```

Path aliases (tsconfig): `@/*` → `src/*`, plus `@components/*`, `@lib/*`, `@hooks/*`, `@styles/*`. Both styles are in use; match the file you're editing.

## Conventions

- **Indentation: tabs** (`.editorconfig`), except JSON/YAML at 2 spaces. A few older files (e.g. `api/send/route.ts`, `useDialog.ts`) use spaces; keep whatever the file already uses and don't reformat unrelated lines.
- **Components**: one folder per component, `index.tsx` with a **named export** (`export const Button: FC<ButtonProps>`), props in a sibling `Name.types.ts`. Several use default exports instead (`Footer`, `Form`, `Sidebar`, `SubHeading`, `Quote`, `ArticleHeader`, `CallToAction`, `ErrorBoundary`, `SkipLink`); check how existing imports reference a component before changing its export style.
- **JSX prop order** is enforced by ESLint (`react/jsx-sort-props`: alphabetical, multiline props first, shorthand last). `npm run lint` will catch it.
- **Styling**: Tailwind utility classes inline. Use the project tokens in `tailwind.config.js`, not raw hex: colors `gold #c5a880`, `copper`, `tin`, `aluminum`, `dove`, `mineShaft`, `silverChalice`, `silver`, `grey`; fonts `font-primary` (Work Sans) and `font-secondary` (Roboto); custom breakpoints `xs 490 / sm 768 / md 1024 / lg 1290 / xl 1440` (these differ from Tailwind defaults); fluid type via `text-heading`, `text-subheading`, etc. Merge conditional classes with `cn()`.
- CSS files are linted by stylelint (alphabetical property order). Lint-staged runs it on `*.css`.
- **Client vs server**: many components are `"use client"` (31 files), including ones that don't need it. Don't add `"use client"` to new components unless they use state, effects, browser APIs or framer-motion.
- **Commits**: Conventional Commits, enforced by commitlint via a husky `commit-msg` hook (`feat:`, `fix:`, `chore:`, ...). Never bypass with `--no-verify`. Work happens on feature branches merged by PR (`main` is the PR base).
- Env files are git-ignored. Never commit `.env*`.

## Environment variables

- `RESEND_API_KEY`: required at runtime for `/api/send` (Resend client is created lazily inside the handler so builds don't need it)
- `NEXT_PUBLIC_GA_ID`: Google Analytics id (falls back to the placeholder `"default-ga-id"`)

I can't see real values; don't ask for or print them.

## Where content lives

Most copy changes are code edits, not CMS edits:

- **Portfolio companies**: array in `src/app/api/portfolio/route.ts` (fields: `id`, `title`, `logo`, `hero`, `region`, `sector`, `date`, `status` (`current`/`realised`), `category`, `description`, `url`, `position`). Images go in `public/logos` and `public/heros`. Keep `id` unique.
- **Team**: array in `src/app/api/team/route.ts`; photos in `public/team`.
- **Page copy**: inline in each `src/app/<route>/page.tsx`.
- Site metadata/OG: `src/app/layout.tsx`. Sitemap: `src/app/sitemap.ts`.

Portfolio and Team data are fetched client-side from these routes with SWR, so they are not in the initial HTML.

## Known issues and gotchas (check before "fixing" or relying on them)

1. **Contact form**: `src/lib/submit.ts` posts to `/api/send` and shows Success/Error from the real response. `/api/send` validates fields, checks the honeypot server-side, applies a best-effort in-memory rate limit (per serverless instance, so not a hard guarantee), and returns `{ message: 'success' }` or an error status. The recipient is hardcoded to `info@blankcanvascapital.co.za`. A real send can only be tested with a live `RESEND_API_KEY`.
2. `tailwind.config.js` content globs include `./app`, `./components`, `./pages` (non-existent at the root); `./src/**/*` is what actually matches. Harmless, but don't "fix" by narrowing without checking.
3. OG image comes from the `src/app/opengraph-image.png` file convention. Don't re-add an explicit `openGraph.images` entry in `layout.tsx` unless it points at a real file.
4. `package.json` still has placeholder metadata (`main`, `author`, `license`).
5. `public/` contains several unused or duplicate images (`hero-about*.jpg`, etc.). Don't delete assets without grepping for references first.
6. `productionBrowserSourceMaps: true` is deliberate in `next.config.js`.

## How I should work here

- Read the surrounding component and its `.types.ts` before editing; mirror its patterns rather than introducing new abstractions. This is a small site; prefer small, targeted diffs.
- Content updates (portfolio/team/copy) are the most common task: edit the data/page directly, keep existing formatting and quote style of that file, and watch for typographic quotes and `’` in descriptions.
- Visual changes: verify with `npm run dev` and look at the page where possible; type-check passing doesn't prove the layout is right. Check responsive behaviour across the custom breakpoints.
- Accessibility matters (there's a `SkipLink`, `main#main-content`, focus styles on buttons): preserve semantic HTML, alt text, and keyboard focus behaviour on any UI change.
- Use `next/image` and `next/link` as the existing code does; images live in `public/`.
- Don't commit, push or open PRs unless asked. When asked: branch off `main`, conventional commit messages, PR description per the session's attribution rules.
- Dependency changes: ask first. The stack was just upgraded (PR #9), and Tailwind is intentionally still on v3.
- If a request touches a "Known issues" item, tell the user what you found rather than silently changing behaviour.
