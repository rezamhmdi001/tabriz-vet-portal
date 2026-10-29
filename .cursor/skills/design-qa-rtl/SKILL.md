---
name: design-qa-rtl
description: Audits RTL/LTR parity, Tailwind logical properties, local Vazirmatn, TranslationUnavailable, and WCAG 2.2 AA for the veterinary faculty portal. Use when changing web layout, CSS, locale routing, or before accepting a UI change.
---

# Design QA for `/fa` and `/en`

Audit against `ARCHITECTURE.md` sections 2 and 8 and `.cursor/rules/nextjs-rtl-i18n.mdc`. Do not introduce a second font or a CDN stylesheet.

## Steps

1. Open `/fa` and `/en` at 320px and at a desktop width. Repeat for a department, a person, a news article, an event, and a service.
2. Confirm `<html lang>` and `dir` (`fa`/`rtl`, `en`/`ltr`).
3. Confirm Vazirmatn is loaded from `/fonts/Vazirmatn-Variable.woff2`. Search the web app for `next/font/google` and `fonts.googleapis.com`. Both must be absent.
4. Search `web/**/*.tsx` and `web/**/*.css` for physical utilities. Reject `ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`, `text-left`, `text-right`, `border-l-`, `border-r-`, `float-left`, `float-right`, and `space-x-`. Allow logical `ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`. Do not flag color names such as `border-lime`.
5. Directional icons flip on `/fa`. Logos and portraits do not.
6. Translation behavior:
   - An `/en` list does not contain a card whose `title_en`, `name_en`, or `full_name_en` is empty.
   - A published Persian-only slug opened at `/en/...` renders `TranslationUnavailable` in English, with links to `/fa/...` and `/en`, and `robots` `index: false`.
   - An unknown slug or a non-published row calls `notFound()`.
   - No Persian sentence appears as the English fallback.
7. Accessibility:
   - Skip link is first in the tab order and moves focus to `#content`.
   - The page is usable by keyboard. `:focus-visible` is visible and not covered.
   - Targets are at least 24×24px, except inline text links.
   - Normal text meets 4.5:1 and large text meets 3:1.
8. When the app is running, ask Hermes to run Playwright with `@axe-core/playwright` on the journeys in `ARCHITECTURE.md` section 11.1. Performance budgets for a release are LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, and Lighthouse Performance ≥ 90.

## Report

List each route, the viewport, pass or fail, and the file to change. Quote the forbidden class when RTL fails.

```tsx
// Fail
<article className="ml-4 text-left" />
// Pass
<article className="ms-4 text-start" />
```
