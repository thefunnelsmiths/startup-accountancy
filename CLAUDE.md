# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static VSL landing page for Startup Accountancy — a UK accountancy firm targeting startup founders. The page is a video-first conversion funnel: VSL hero → social proof → problem/mechanism → how it works → objections → founders → booking CTA → footer.

## How to run

No build step. Open `index.html` directly in a browser, or serve it locally:

```bash
npx serve .
# or
python -m http.server 8080
```

Requires an internet connection — fonts (Google Fonts), React 18, Babel standalone, and Lucide icons all load from CDN.

## Deployment

- **GitHub → Cloudflare Pages** (auto-deploys on push to `main`)
- Build command: *(none — leave blank)*
- Build output directory: `/` (root)
- Node version: not required

## Architecture

This is a **prototype-style page**: React components are written as `.jsx` files loaded via `<script type="text/babel">` tags in `index.html`. Babel transpiles them in the browser at runtime. There is no bundler, no `package.json`, no node_modules.

Each component file attaches itself to `window` (e.g. `window.Button = Button`) so later-loaded components can reference earlier ones. Load order in `index.html` matters — `Button.jsx` must come before any component that uses `<Button>`.

**Design tokens** all live in `colors_and_type.css` as CSS custom properties. Every color, font, spacing value, shadow, and easing curve is defined there. Components reference tokens via inline styles using `var(--token-name)` — no Tailwind, no CSS modules.

**Lucide icons** are rendered via `data-lucide="icon-name"` attributes and activated by a `MutationObserver` in `App` that calls `lucide.createIcons()` whenever the DOM changes.

## Design system

- **Fonts**: Questrial (headings/display) · Lexend (body/UI)
- **Primary**: `#7d33c3` violet · **Accent**: `#dded2e` lime (used sparingly)
- **Surfaces**: layered `--surface-container-*` tokens (lowest → highest)
- **Shadows**: tinted violet, never black — `--shadow-lift`, `--shadow-float`, `--shadow-ambient`
- The `.overline` class is the standard section label (uppercase, tracked, violet)

## Intended future stack (from project brief)

The project brief specifies migrating to **Next.js static export + Tailwind CSS** with this structure:

- `pages/index.tsx` — main page
- `components/` — typed React components (VideoEmbed, LeadForm, HeroSection, ProofBlock, UrgencyBar)
- Forms POST to a **GHL (GoHighLevel) webhook** via fetch — never use GHL iframes
- Video hosted on **Vimeo Pro** with lazy-load (thumbnail + play button; inject iframe only on click)
- `NEXT_PUBLIC_GHL_WEBHOOK` and `NEXT_PUBLIC_VIMEO_ID` as env vars
- Build output: `/out` · Build command: `npm run build` · Node 18

When migrating, preserve all copy, colors, and layout from the current implementation exactly.
