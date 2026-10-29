# 0002 — Faculty site scope, workflow, translations, accessibility, and structured data

**Status:** Accepted  
**Date:** 2026-10-17

## Context

Early repository documents described a multi-industry software workspace and a four-step content workflow (`draft`, `pending_review`, `published`, `archived`). The product is the Faculty of Veterinary Medicine website. A review queue and a package extracted for other organizations add process the faculty does not need.

English URLs previously called `notFound()` whenever English copy was missing. That hides a published Persian page from someone who opens a direct English link, and listing those links on English pages creates dead ends.

The public site also needs an accessibility target and academic structured data that does not invent institutional facts.

## Decision

1. **Scope.** This repository is the Faculty of Veterinary Medicine website. Modules may later represent other university units. Do not document or build a multi-industry clinic, pharmacy, or hospital product line, and do not extract a multi-client package from this repository.
2. **Content workflow.** Statuses are `draft`, `published`, and `archived`. Public pages read `published` only. There is no `pending_review` status, review-due date, or verification timestamp.
3. **Roles.**
   - **Site Reader** — server-only credential that reads `published` items. It is not sent to the browser.
   - **Content Editor** — faculty staff who create, edit, and publish.
   - **System Admin** — schema and infrastructure.
4. **Missing translations.** Never render Persian body copy under an `/en` URL as if it were English. English lists and navigation include an item only when its English title or name is non-empty. A direct `/en/...` request for a published item that lacks English copy renders `TranslationUnavailable` with `robots: noindex`, a link to the `/fa/...` counterpart, and a link to `/en`. `notFound()` is reserved for items that do not exist or are not published.
5. **Accessibility.** The UI targets WCAG 2.2 Level AA: a localized skip link to `#content`, a semantic `<main id="content">`, a visible focus indicator, and a minimum 24×24px target on buttons and navigation links.
6. **Structured data.** Domain types carry academic rank, `orcid_id`, and `google_scholar_url`. JSON-LD builders emit `CollegeOrUniversity` / `EducationalOrganization`, `Course`, and `Person`. `Person.sameAs` includes ORCID and Google Scholar only when the values are valid URLs or ORCID iDs. Do not invent a public origin, address, phone number, ranking, or statistic.

The TypeScript types in `web/lib/directus.ts` are the application contract. Applying these fields and the three statuses in the live Directus schema is a later change under `.cursor/skills/directus-schema-change/`.

## Consequences

- Editors publish without a separate reviewer role.
- English navigation does not link to untranslated items. Direct visits still explain that the Persian page exists.
- Search engines are asked not to index translation-gap pages.
- JSON-LD on the home page names the faculty from the locale shell copy and omits `url` until a public site origin exists.
