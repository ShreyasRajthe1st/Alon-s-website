# SimpliiGood Spirulina — Website (client: Alon Yardeni)

Marketing site for **SimpliiGood** ("Simplii Green" division) — fresh-frozen spirulina cubes.
Single-page, scroll-based, brand-led. Launch target: week of 15 Jun 2026.

## Stack
- Static HTML + inline CSS + vanilla JS + **GSAP/ScrollTrigger via CDN**. No framework on the page.
- Built with **Vite** (multi-page config, but only `index.html` is an input now).
- Deployed on **Vercel** from GitHub (`ShreyasRajthe1st/Alon-s-website`), config in `vercel.json`
  (`buildCommand: npm run build`, `outputDirectory: dist`). Vercel serves `dist/`.

## Structure
- `index.html` — THE site. Self-contained: brand tokens + all sections + scripts inline.
- `public/images/` — chosen, clean-named product/lifestyle photography (copied as-is into `dist/images/`).
- `public/fonts/` — Franklin Gothic URW `.otf` (the real brand typeface), `@font-face` in index.html.
- `Fonts/` — original brand font drop from the client (source of the public/fonts copies).
- `_index.linoxa.bak.html` — the ORIGINAL Webflow "Linoxa" real-estate template build (residue-ridden).
  Kept only as reference. Do NOT deploy or copy from it.
- `about/service/technology/pricing.html` + loose root images — legacy Linoxa pages, NOT built/deployed.

## Brand system (from the client's SimpliiGood Brand Guidelines — non-negotiable)
- **Simplii Yellow `#FEE62D`** = PRIMARY. **Spirulina Green `#154048`** = lead dark.
  **Starburst Green `#31B278`** = secondary. Fruit colors (raspberry `#EF467B`, blueberry, strawberry,
  lime, cherry) = ACCENTS only (CTAs/illustration), never section fills.
- Type: **Franklin Gothic URW** — Heavy for display, Demi for body, Condensed for labels/marquee.
- Voice: hopeful, honest, easy. Tagline **REAL. SUPER. FOOD.** "Sunshine in a cube." Brand name is
  always titlecase **SimpliiGood**.
- Hard rules: yellow + dark green must lead. No black template footers. No "design/spaces" copy.
  No third-party build watermark. Keep packaging shots a single consistent scale (no mismatched composites).

## Page sections (in order)
nav → hero (yellow) → marquee → benefits/stats (yellow) → fresh-vs-dried (green) →
"Drop it. Done." use cases (green) → shop/D2C (cream) → sustainability (starburst) →
testimonials (cream) → B2B/food-service form (green) → store locator (yellow) → footer (green).

## Conventions / gotchas
- Reveal animations are **progressive enhancement**: content is visible by default; `.js-on .reveal`
  hides then GSAP/IO adds `.in`. There is a load-time safety net so nothing is ever stuck at opacity 0.
- Counter numbers live in `.count` spans INSIDE `.stat b` / `.bigstat b`. Scope generic description
  rules to `.stat>span` / `.bigstat>span` so they don't shrink the counters.
- The footer watermark is `.footer-wm-wrap .wm` (it's a sibling of `.footer-bottom`, not a child).
- Image guard swaps any failed `<img>` to a brand-gradient SVG data-URI — never ships a broken image.
- B2B form has no backend yet — it prevents default and shows an inline confirmation. Wire to a real
  endpoint (or Formspree/Netlify/Shopify) before relying on leads.

## Dev / build / test
- `npm install && npm run dev` → http://localhost:8085
- `npm run build` → emits `dist/`. Test the **built** `dist/` (that's what deploys):
  `cd dist && python3 -m http.server 8091` then drive it with Playwright (desktop + mobile).
- Before declaring done: 0 console errors, 0 broken images, no `.reveal` stuck at opacity 0,
  and grep `dist/index.html` for residue: `shape your next space`, `Fascreek`, `1430 Broadway`,
  `Disccover`, `purposeful spaces` → all must be 0.
