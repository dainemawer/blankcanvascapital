# Changelog

Newest first. Link each entry to its request file and PR where applicable.

## 2026-10-15
- PR #11 opened with all client round 1 work done so far (see entries below). Waiting on required review/merge.
- Portfolio modal: max width 1024px (`lg:max-w-5xl`) and side-by-side layout from `md` instead of `lg`, to reduce banner cropping and scrolling. Overflow at 1280x800 dropped from 177-298px to 0-173px. Round 1, uncommitted.
- The Lab / Good Basics modal now shows both logos stacked with their own website links (`brands` field in the portfolio data). Part of round 1, still uncommitted.

## 2026-10-14
- Client round 1 ([request](client-requests/2026-10-14-round-1.md)), branch `feat/client-round-1-changes`, not yet committed: home 03 and 04 layouts, Investment Approach left-aligned, modal scrollbar hidden, MG Health and NuPET removed, Sneaker LAB renamed The Lab, contact page addresses (GPS and map removed, Cape Town added). Client attachments applied: new modal heroes for 7 investments, Gloot added, The Lab picture and logo, modal height cap so it scrolls. Still pending: hero and 04 options, scroll transitions.
- Created `.context/` and logged client round 1.

## 2026-10-13
- PR #10: fixed the contact form (success detection, server-side validation, honeypot, rate limit), fixed the OG image, pruned 54 unused files from `public/`, narrowed Tailwind `content`, tidied `package.json`, removed `browserconfig.xml`, added `CLAUDE.md`.
