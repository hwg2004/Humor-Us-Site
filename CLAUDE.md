# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/informational site for **HumorUs!**, Cornell's sketch comedy group. Static content site — no database, no API routes, no backend, no auth. "Tickets" and donations are just external Venmo links. Deployed on Vercel.

## Commands

- `npm run dev` — dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (Turbopack)
- `npm start` — serve the production build
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test framework in this project.

## Stack

- **Next.js 15 App Router** + **React 19**, TypeScript (strict)
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `app/globals.css`; there is **no `tailwind.config.js`**. PostCSS uses `@tailwindcss/postcss`.
- Path alias `@/*` maps to the repo root.

## Architecture

Every route is a folder under `app/` with a `page.tsx`. `app/layout.tsx` wraps all pages with the shared header (logo + nav + "Get Tickets"), a `max-w-6xl` content container, and the footer.

**Content lives in the components, not in data files.** Page content (cast, past shows, alumni, FAQs) is hardcoded as typed `const` arrays at the top of each `page.tsx` (e.g. `people[]` in `app/people/page.tsx`, `pastShows[]` in `app/shows/page.tsx`). To update content, edit these arrays directly — there is no CMS or JSON data source. Images referenced by those arrays live in `public/images/<section>/`.

Pages are Server Components by default. Only the few needing interactivity are marked `"use client"`: `app/page.tsx` (home), `app/join/page.tsx` (FAQ accordion), and both shared components. Reusable components live in `app/components/` (`Gallery.tsx`, `NavLinks.tsx`).

### Theming

All colors are CSS custom properties defined in `app/globals.css` under `:root`, with a full dark-mode override via `@media (prefers-color-scheme: dark)`. Consume them through Tailwind arbitrary values — e.g. `bg-[var(--color-accent)]`, `text-[var(--color-text-muted)]`. **Do not hardcode hex colors or use Tailwind's default palette** (`bg-red-600` etc.); use the `--color-*` tokens so dark mode keeps working. `h1/h2/h3` automatically get the serif display font (`--font-display`, Playfair Display, loaded in `layout.tsx`).

### SEO

- `app/layout.tsx` exports the site-wide `metadata` (OpenGraph, Twitter, canonical, icons).
- `app/sitemap.ts` and `app/robots.ts` are the **live** sitemap/robots (Next.js route handlers). `robots.ts` disallows all crawling unless `VERCEL_ENV === "production"`.
- `next-sitemap` is a dependency and `next-sitemap.config.js` exists, but **no script invokes it** (no `postbuild`), so `public/sitemap.xml` / `public/robots.txt` are stale committed files — ignore them and edit the `app/` route handlers instead.

## Gotchas

- **Nav links are duplicated.** The header nav is in `app/components/NavLinks.tsx`; the footer "Quick Links" nav (plus an extra external link) is in `app/layout.tsx`. Adding or renaming a page means updating **both** lists.
- The default/fallback site URL is inconsistent across files (`humorussketchcomedy.com` in most places, an outdated `humoruscomedy.com` in a comment). `NEXT_PUBLIC_SITE_URL` (`.env`) is the intended source of truth.
