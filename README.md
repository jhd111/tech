# H-Tech Supports Website

A Next.js (App Router, JavaScript) + Tailwind CSS site with:

- Sticky/fixed header that switches from transparent-on-hero to a solid
  background once you scroll (smooth color transition, no flash).
- A hero image carousel that cross-fades between slides (no abrupt jumps).
- Two animated, seamlessly looping wave layers at the bottom of the hero,
  each at a different speed for a parallax feel.
- Full routing for every header link: Company, Services, Sectors, Resources,
  Careers, Contact, and Enter the Hub — each with its own page and dropdown
  sub-sections (Services/Sectors/Resources) linked via anchors.
- SEO: per-page metadata, Open Graph/Twitter tags, `sitemap.xml`, and
  `robots.txt` via Next's built-in metadata APIs.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` – routes (App Router), one folder per page, each with its own
  `page.js` and SEO `metadata` export.
- `components/` – `Header.js`, `Hero.js`, `Waves.js`, `Footer.js`,
  `PageHeader.js`.
- `lib/nav-data.js` – single source of truth for header navigation and
  dropdown items; add a new entry here and it appears in both desktop and
  mobile menus automatically.

## Customizing

- Swap the hero images in `components/Hero.js` (`slides` array) for your own.
- Update colors in `tailwind.config.js` under `theme.extend.colors.brand`.
- Adjust wave speed in `tailwind.config.js` (`wave-slow` / `wave-fast`
  animation durations) or the wave shapes in `components/Waves.js`.

## Contact form → email inbox

The Contact page form (`components/ContactForm.js`) sends submissions to
your inbox via [Formspree](https://formspree.io) — no backend code, no API
keys, nothing to deploy.

1. Sign up free at https://formspree.io and create a new form pointed at
   whatever inbox you want submissions delivered to.
2. Copy the endpoint it gives you (looks like
   `https://formspree.io/f/abcdwxyz`).
3. Copy `.env.local.example` to `.env.local` and paste your endpoint into
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
4. Restart `npm run dev` (or redeploy). Submit the form once — Formspree
   will send you a one-time verification email. After you confirm it, every
   future submission arrives straight in your inbox.

Free plan covers 50 submissions/month, which is plenty for most contact
forms; upgrade on Formspree's side any time if you need more.
