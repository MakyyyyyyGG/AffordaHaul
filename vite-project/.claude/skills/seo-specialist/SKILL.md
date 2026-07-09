---
name: seo-specialist
description: Use this skill for any SEO work on AffordaHaul — writing or reviewing page titles, meta descriptions, Open Graph/Twitter tags, structured data (JSON-LD), heading hierarchy, canonical URLs, sitemaps/robots, image alt text, or Core Web Vitals concerns. Triggers on "SEO", "meta tags", "search ranking", "structured data", "Open Graph", "social preview", "sitemap", "why isn't this page indexed", or any audit of a page's discoverability/shareability.
---

# SEO Specialist Skill

Playbook for search-engine and social discoverability work on AffordaHaul (an e-commerce/marketplace app on React Router framework mode + Vite + Tailwind). See `CLAUDE.md` for the project-wide rules this skill enforces.

## How metadata works in this codebase

- Per-route metadata lives in the route module's `meta()` export (see `app/routes/home.tsx`) — **not** in a static `index.html`. Add titles, descriptions, and OG tags there.
- Global tags (`charset`, `viewport`) live in `app/root.tsx`. Don't duplicate per-page tags globally.
- New routes are registered in `app/routes.ts`; every new route gets its own `meta()` export before it ships.

## Per-page requirements (from CLAUDE.md — non-negotiable)

- Unique, descriptive `<title>` (~50–60 chars, brand suffixed: `Page Name — AffordaHaul`).
- Unique `meta description` (~140–160 chars, written for the searcher, not keyword-stuffed).
- Open Graph tags for shareable pages: `og:title`, `og:description`, `og:image` (1200×630 with absolute URL), `og:url`, `og:type`; plus `twitter:card`.
- One `h1` per page containing the page's primary topic; heading levels never skip (h2 → h3, not h2 → h4).
- Meaningful `alt` text on every content image (`alt=""` only for pure decoration).

## Structured data (JSON-LD)

- E-commerce pages: use `Product` schema (name, image, description, `offers` with `price`/`priceCurrency`/`availability`) sourced from `app/data/products.ts` — never hardcode values that exist in data files.
- Site-level: `Organization` (or `LocalBusiness` if a physical store — see the visit/contact sections) with name, logo, URL, `sameAs` for the social links.
- Reviews/testimonials: only mark up with `Review`/`AggregateRating` if they are genuine customer reviews shown on the page.
- Validate shapes against schema.org; put JSON-LD in a `<script type="application/ld+json">` rendered by the route.

## Technical SEO checklist

- Canonical URL on every indexable page; `noindex` on utility pages (cart, checkout, auth) rather than blocking them in robots.txt.
- `robots.txt` and an XML sitemap in `public/` (or a route) once there is more than one page; sitemap lists canonical URLs only.
- Descriptive, kebab-case URL paths; no query-string-only navigation for indexable content.
- Internal links use real `<a>`/`<Link>` elements with descriptive anchor text — never click handlers on `div`s (also an a11y rule).
- Core Web Vitals guardrails (overlaps CLAUDE.md performance rules): explicit `width`/`height` on images to avoid CLS, `loading="lazy"` below the fold only (never on the LCP/hero image), defer non-critical scripts, prefer CSS over JS for interactions.

## Before calling it done

- Every touched route has a unique title + description; no two pages share either.
- Paste-check social preview: OG image is an absolute URL and exists; title/description render sensibly when truncated.
- Heading outline reads like a table of contents (one h1, no skips).
- Any JSON-LD added parses as valid JSON and matches visible page content (mismatches risk manual penalties).

## When auditing existing pages

Flag: missing/duplicate titles or descriptions, missing OG image or relative OG URLs, multiple h1s or skipped heading levels, images without dimensions or alt text, lazy-loaded hero/LCP images, indexable pages without canonical URLs, structured data that disagrees with on-page content, and prices/availability hardcoded in markup instead of sourced from `app/data/products.ts`.
