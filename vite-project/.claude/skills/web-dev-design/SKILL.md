---
name: web-dev-design
description: Use this skill whenever building, reviewing, or editing web UI — HTML/CSS/JS/React/Vue/etc pages, components, layouts, or styles. Also use when making visual/design decisions (color, spacing, typography, layout) for a website or web app. Triggers on "build a page/site", "component", "layout", "styling", "responsive", "landing page", "design this", "make it look better", or any review of front-end code.
---

# Web Development & Design Skill

Checklist to apply when writing or reviewing front-end code and visual design for this project. See `CLAUDE.md` for the full project-wide rules this skill enforces; this file is the actionable playbook.

## Before writing UI code
1. Identify the breakpoints you're designing for (mobile-first: 375px baseline, then 768px, 1280px+).
2. Reuse existing design tokens (spacing scale, type scale, color palette) if the project already defines them — don't invent new one-off values.
3. Plan semantic structure first (what's a `nav`, `main`, `section`, heading hierarchy) before reaching for `div`s.

## While writing
- **Semantics & a11y**: semantic tags, one `h1`, no heading-level skips, `alt` text on images, labeled form inputs, visible focus states, ≥4.5:1 text contrast.
- **Responsive**: mobile-first CSS, relative units (`rem`/`%`/`clamp()`), Grid/Flexbox over floats/absolute hacks.
- **Consistency**: pull spacing/type/color from the shared scale/tokens; keep radius/shadow treatments uniform across components.
- **Performance**: `loading="lazy"` + explicit `width`/`height` on below-fold images; defer non-critical JS; avoid layout shift.
- **Interaction**: keyboard-operable, respects `prefers-reduced-motion`, no color-only signaling.

## Before calling it done
- Check the page/component at 375px, 768px, and 1280px widths.
- Verify tab order and focus visibility with keyboard only.
- Verify contrast on text/icons against their background.
- Confirm no arbitrary/duplicate spacing or color values crept in that bypass the shared scale.
- Verify `<title>` and meta description are set for any new page.

## When reviewing existing code
Flag: missing `alt`/labels, heading-level skips, hardcoded one-off colors/spacing outside the token scale, non-keyboard-operable interactive elements, missing lazy-loading on large images, and inline styles that should be classes/tokens.
