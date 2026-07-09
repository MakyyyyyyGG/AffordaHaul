# AffordaHaul — Project Conventions

Web development and design rules for this project. Follow these unless a specific task explicitly overrides them.

## HTML
- Use semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) over generic `div`/`span`.
- One `h1` per page; heading levels must not skip (h2 → h3, never h2 → h4).
- Every `img` has meaningful `alt` text (empty `alt=""` only for purely decorative images).
- Forms: every input has an associated `label`; use correct `type`/`inputmode`/`autocomplete` attributes.

## Accessibility (WCAG 2.1 AA baseline)
- Text contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text/icons.
- All interactive elements are reachable and operable via keyboard (visible focus states, logical tab order).
- Don't convey information by color alone.
- Respect `prefers-reduced-motion` for animations.

## Responsive / Layout
- Mobile-first: base styles target small screens, then enhance with `min-width` media queries.
- Use relative units (`rem`, `%`, `fr`, `clamp()`) over fixed `px` for type and layout where it aids scaling.
- Prefer CSS Grid/Flexbox over floats or absolute positioning for layout.
- Test at minimum: 375px, 768px, 1280px viewport widths.

## Design System Consistency
- Reuse a single spacing scale (e.g. 4/8px base) — no arbitrary one-off margins/padding.
- Reuse a single type scale and a small set of font weights (2–3 max).
- Limit the color palette to defined tokens (primary, neutral, semantic success/warning/error) — no ad hoc hex values scattered in components.
- Keep corner radius, shadow, and border treatments consistent across components.

## Performance
- Optimize and lazy-load below-the-fold images (`loading="lazy"`, correct `width`/`height` to avoid layout shift).
- Minimize custom JS on marketing/content pages; prefer CSS for interactions/animations where possible.
- Avoid render-blocking resources; defer non-critical scripts.

## SEO / Metadata
- Every page has a unique, descriptive `<title>` and `meta description`.
- Use structured data / Open Graph tags where relevant for shareable pages.

## Code Style
- Consistent component/file naming (pick one convention — e.g. kebab-case files, PascalCase components — and stick to it project-wide).
- No inline styles except for values computed at runtime (e.g. dynamic width from JS).
