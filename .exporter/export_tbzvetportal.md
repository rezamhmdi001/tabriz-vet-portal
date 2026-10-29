# Project Export for AI Evaluation: `tabriz-vet-portal`

This document is a self-contained snapshot of the repository for external AI review and technical evaluation. It includes project context, documentation, configuration, and source files. Secrets and local runtime data are not embedded; they are summarized in the Local Runtime Inventory section.

## Evaluator Brief

Please evaluate the project using only the evidence in this export. Distinguish verified facts from assumptions. Record unknowns explicitly. Do not invent institutional statistics, credentials, or unimplemented features.

Suggested evaluation focus:

1. Product stage, goals, and open decisions
2. Architecture and technology choices actually present in the files
3. Completeness of documentation versus implementation
4. Maintainability, security posture, and operational readiness
5. Recommended next steps with evidence-based confidence levels

## Project Snapshot

- **Generated On:** 2026-10-29 11:55:48 UTC
- **Project Root:** `C:\Projects\tabriz-vet-portal`
- **Export Source:** working tree only
- **Files Included:** 70
- **Total Text Size:** 323.48 KB
- **By Category:** documentation=17, config=13, source=40
- **Secrets Redacted:** 4
- **Local Runtime Inventory:** `.env`=absent, `cms/data/`=absent, `cms/uploads/`=absent (metadata only; contents not exported)
- **Git:** not available / not a git worktree

## Detected Stack Signals

- Next.js (16.4.2)
- React (19.3.0)
- TypeScript
- Directus CMS (Docker Compose)
- PostgreSQL
- Python tooling/scripts
- Project documentation set

## Git Branches

_No git branches were discovered for this export._

## Local Runtime Inventory

These entities exist (or are expected) on the developer machine but are **not** embedded as content in this export. The AI should treat them as known local runtime assets and evaluate setup/operations accordingly.

### `.env` (secrets file)

- **Present locally:** no
- **`.env.example` present:** yes
- **Export policy:** No local `.env` file found. Values are never exported even when present.

Keys in `.env.example` but missing from `.env`:

- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `DIRECTUS_KEY`
- `DIRECTUS_SECRET`
- `DIRECTUS_ADMIN_EMAIL`
- `DIRECTUS_ADMIN_PASSWORD`
- `DIRECTUS_URL`
- `DIRECTUS_READ_TOKEN`
- `REVALIDATE_SECRET`
- `NEXT_PUBLIC_SITE_URL`

### `cms/data/` (local database persistence)

- **Present locally:** no
- **Export policy:** Local PostgreSQL/Directus persistence. File contents are not exported.

### `cms/uploads/` (local media uploads)

- **Present locally:** no
- **Export policy:** Local CMS media uploads. File contents are not exported.

## High-Level Project Context

### From `README.md`

Official academic and informational website for the Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch (`IAU-TBZ-VET-PORTAL-2026`).

### From `AGENTS.md`

Cursor and Hermes both follow this file, then [`ARCHITECTURE.md`](ARCHITECTURE.md), then the Persian product source [`docs/Faculty of Veterinary Medicine website architecture-v3.0 .md`](docs/Faculty%20of%20Veterinary%20Medicine%20website%20architecture-v3.0%20.md).

### From `docs/evaluation/prototype-evaluation.md`

This document defines a structured process for evaluating an independently developed software prototype before deciding whether to reuse, adapt, migrate, or replace it.

## Documentation Index

- `.cursor/rules/directus-data.mdc` (2,677 bytes)
- `.cursor/rules/nextjs-rtl-i18n.mdc` (2,496 bytes)
- `.cursor/rules/security-privacy.mdc` (2,049 bytes)
- `.cursor/skills/design-qa-rtl/SKILL.md` (2,430 bytes)
- `.cursor/skills/directus-schema-change/SKILL.md` (2,480 bytes)
- `.cursor/skills/release-readiness/SKILL.md` (2,435 bytes)
- `AGENTS.md` (5,586 bytes)
- `ARCHITECTURE.md` (29,708 bytes)
- `docs/decisions/0001-local-nextjs-directus.md` (1,453 bytes)
- `docs/decisions/0002-faculty-site-governance.md` (3,216 bytes)
- `docs/decisions/0003-cache-media-search.md` (2,045 bytes)
- `docs/evaluation/.gitkeep` (107 bytes)
- `docs/evaluation/prototype-evaluation.md` (5,953 bytes)
- `docs/Faculty of Veterinary Medicine website architecture-v3.0 .md` (44,645 bytes)
- `docs/operations/cache-revalidation.md` (2,574 bytes)
- `README.md` (2,990 bytes)
- `web/AGENTS.md` (679 bytes)

## Configuration Index

- `.env.example` (1,631 bytes)
- `.gitignore` (157 bytes)
- `cms/extensions/.gitkeep` (102 bytes)
- `cms/extensions/site-reader-published/package.json` (357 bytes)
- `cms/schema/.gitkeep` (84 bytes)
- `docker-compose.yml` (2,719 bytes)
- `web/.dockerignore` (40 bytes)
- `web/.gitignore` (536 bytes)
- `web/eslint.config.mjs` (483 bytes)
- `web/next.config.ts` (337 bytes)
- `web/package.json` (637 bytes)
- `web/public/fonts/.gitkeep` (75 bytes)
- `web/tsconfig.json` (780 bytes)

## Source Index

- `.exporter/export_tbzvetportal.py` (python, 2,672 bytes)
- `cms/extensions/site-reader-published/index.js` (javascript, 1,728 bytes)
- `desktop.ini` (ini, 114 bytes)
- `export_project.py` (python, 62,609 bytes)
- `scripts/backup-loop.sh` (bash, 390 bytes)
- `scripts/init-directus-schema.mjs` (javascript, 34,205 bytes)
- `web/app/[locale]/departments/[slug]/page.tsx` (tsx, 3,287 bytes)
- `web/app/[locale]/events/[slug]/page.tsx` (tsx, 3,913 bytes)
- `web/app/[locale]/events/page.tsx` (tsx, 2,033 bytes)
- `web/app/[locale]/layout.tsx` (tsx, 2,463 bytes)
- `web/app/[locale]/news/[slug]/page.tsx` (tsx, 3,280 bytes)
- `web/app/[locale]/news/page.tsx` (tsx, 1,954 bytes)
- `web/app/[locale]/not-found.tsx` (tsx, 141 bytes)
- `web/app/[locale]/page.tsx` (tsx, 4,493 bytes)
- `web/app/[locale]/people/[slug]/page.tsx` (tsx, 3,512 bytes)
- `web/app/[locale]/people/page.tsx` (tsx, 1,623 bytes)
- `web/app/[locale]/programs/[slug]/page.tsx` (tsx, 3,371 bytes)
- `web/app/[locale]/search/page.tsx` (tsx, 6,129 bytes)
- `web/app/[locale]/services/[slug]/page.tsx` (tsx, 3,044 bytes)
- `web/app/api/revalidate/route.ts` (typescript, 1,667 bytes)
- `web/app/assets/[id]/route.ts` (typescript, 1,818 bytes)
- `web/app/globals.css` (css, 3,798 bytes)
- `web/components/catalog-list.tsx` (tsx, 1,814 bytes)
- `web/components/content-blocks.tsx` (tsx, 1,829 bytes)
- `web/components/directional-arrow.tsx` (tsx, 312 bytes)
- `web/components/language-switch.tsx` (tsx, 1,136 bytes)
- `web/components/not-found-message.tsx` (tsx, 1,002 bytes)
- `web/components/page-frame.tsx` (tsx, 2,420 bytes)
- `web/components/page-mast.tsx` (tsx, 1,941 bytes)
- `web/components/site-footer.tsx` (tsx, 1,342 bytes)
- `web/components/site-header.tsx` (tsx, 4,391 bytes)
- `web/components/translation-unavailable.tsx` (tsx, 1,355 bytes)
- `web/Dockerfile` (dockerfile, 711 bytes)
- `web/lib/directus.ts` (typescript, 18,103 bytes)
- `web/lib/i18n.ts` (typescript, 10,376 bytes)
- `web/lib/schema-org.ts` (typescript, 8,501 bytes)
- `web/lib/shell-links.ts` (typescript, 911 bytes)
- `web/lib/view.ts` (typescript, 4,151 bytes)
- `web/middleware.ts` (typescript, 940 bytes)
- `web/next-env.d.ts` (typescript, 303 bytes)

## Language Breakdown

- tsx: 23
- markdown: 16
- typescript: 10
- plain text: 4
- text: 4
- javascript: 3
- json: 3
- python: 2
- bash: 1
- css: 1
- dockerfile: 1
- ini: 1
- yaml: 1

## Project Structure

```text
tabriz-vet-portal/
├── .cursor
│   ├── rules
│   │   ├── directus-data.mdc
│   │   ├── nextjs-rtl-i18n.mdc
│   │   └── security-privacy.mdc
│   └── skills
│       ├── design-qa-rtl
│       │   └── SKILL.md
│       ├── directus-schema-change
│       │   └── SKILL.md
│       └── release-readiness
│           └── SKILL.md
├── .env.example
├── .exporter
│   └── export_tbzvetportal.py
├── .gitignore
├── AGENTS.md
├── ARCHITECTURE.md
├── cms
│   ├── extensions
│   │   ├── .gitkeep
│   │   └── site-reader-published
│   │       ├── index.js
│   │       └── package.json
│   └── schema
│       └── .gitkeep
├── desktop.ini
├── docker-compose.yml
├── docs
│   ├── decisions
│   │   ├── 0001-local-nextjs-directus.md
│   │   ├── 0002-faculty-site-governance.md
│   │   └── 0003-cache-media-search.md
│   ├── evaluation
│   │   ├── .gitkeep
│   │   └── prototype-evaluation.md
│   ├── Faculty of Veterinary Medicine website architecture-v3.0 .md
│   └── operations
│       └── cache-revalidation.md
├── export_project.py
├── README.md
├── scripts
│   ├── backup-loop.sh
│   └── init-directus-schema.mjs
└── web
    ├── .dockerignore
    ├── .gitignore
    ├── AGENTS.md
    ├── app
    │   ├── [locale]
    │   │   ├── departments
    │   │   │   └── [slug]
    │   │   │       └── page.tsx
    │   │   ├── events
    │   │   │   ├── [slug]
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── news
    │   │   │   ├── [slug]
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── not-found.tsx
    │   │   ├── page.tsx
    │   │   ├── people
    │   │   │   ├── [slug]
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── programs
    │   │   │   └── [slug]
    │   │   │       └── page.tsx
    │   │   ├── search
    │   │   │   └── page.tsx
    │   │   └── services
    │   │       └── [slug]
    │   │           └── page.tsx
    │   ├── api
    │   │   └── revalidate
    │   │       └── route.ts
    │   ├── assets
    │   │   └── [id]
    │   │       └── route.ts
    │   └── globals.css
    ├── components
    │   ├── catalog-list.tsx
    │   ├── content-blocks.tsx
    │   ├── directional-arrow.tsx
    │   ├── language-switch.tsx
    │   ├── not-found-message.tsx
    │   ├── page-frame.tsx
    │   ├── page-mast.tsx
    │   ├── site-footer.tsx
    │   ├── site-header.tsx
    │   └── translation-unavailable.tsx
    ├── Dockerfile
    ├── eslint.config.mjs
    ├── lib
    │   ├── directus.ts
    │   ├── i18n.ts
    │   ├── schema-org.ts
    │   ├── shell-links.ts
    │   └── view.ts
    ├── middleware.ts
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── public
    │   └── fonts
    │       └── .gitkeep
    └── tsconfig.json
```

## Documentation Contents

### File: `.cursor/rules/directus-data.mdc`

> **Path:** `.cursor/rules/directus-data.mdc` | **Size:** 2,677 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
---
description: Directus reads go through web/lib/directus.ts, published rows only, with the three-tier academic identity.
globs: ["web/**/*.ts", "web/**/*.tsx", "cms/**/*"]
alwaysApply: true
---

# Directus data access

Public content is read only from `web/lib/directus.ts`. That module starts with `import "server-only"`. Pages and server actions call its exports. Client components receive DTOs and do not fetch Directus.

`web/lib/schema-org.ts` may format JSON-LD from those DTOs. It does not open its own Directus client.

## Required filters

- Every public query includes `status = "published"`.
- `academic_profiles` has no status. Show a profile only with a published person.
- Show a `role_assignments` row only when that row, its person, and its unit are published.
- On `/en`, drop rows whose locale name is null or empty: `name_en` (units), `full_name_en` (people), `title_en` (programs, news, events, services, pages).
- `/en` search uses `_icontains` on English fields only.

```ts
// Forbidden: token or URL in the client, draft rows included
fetch(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/people`)

// Required: server module, published filter, collection tag
directusFetch("/items/people", {
  tags: ["directus", "people"],
  filter: { status: { _eq: "published" } },
})
```

## Tags and assets

Every `directusFetch` sets `revalidate: 3600`, the tag `directus`, and one of: `organization-units`, `people`, `programs`, `news`, `events`, `services`, `pages`.

`getAssetUrl(fileId, preset)` returns a same-origin URL with no token. Presets: `avatar` 400px WebP q80 without enlargement, `card` 800px WebP q80, `hero` 1600px WebP q82, `document` original PDF.

`searchSiteContent(query, locale)` searches only `people`, `organization_units`, `programs`, and `news_articles`, after Zod limits the query to 2–80 characters.

## Identity

Keep the three tiers: `people`, `academic_profiles` (1:1), `role_assignments` (M:N). Rank, membership, degree, role category, and title prefix use the closed keys in `ARCHITECTURE.md`. Do not store Persian labels as the enum value.

Do not hardcode people, departments, news, phones, or services. The department names in the architecture doc are examples, not a menu.

## Schema.org

Build `Person` from the three tiers. `sameAs` includes only non-empty ORCID (`https://orcid.org/{orcid_id}`), Google Scholar, Scopus, and ResearchGate. Do not invent identifiers.

## Schema changes

Do not add a collection or extra fields while Gate G0 is open. Snapshot to `cms/schema/snapshot.yaml` and update the types in the same change. The Public role stays with no access.
````

### File: `.cursor/rules/nextjs-rtl-i18n.mdc`

> **Path:** `.cursor/rules/nextjs-rtl-i18n.mdc` | **Size:** 2,496 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
---
description: Bilingual /fa and /en routing, TranslationUnavailable, logical CSS, local Vazirmatn, and WCAG 2.2 AA.
globs: ["web/**/*.tsx", "web/**/*.css"]
alwaysApply: true
---

# Locale, RTL, and accessibility

Public routes live under `web/app/[locale]/` with `fa` (default, `dir="rtl"`, `lang="fa"`) and `en` (`dir="ltr"`, `lang="en"`). Unprefixed pages redirect to `/fa`. API routes stay outside `[locale]`.

Load Vazirmatn from `web/public/fonts/Vazirmatn-Variable.woff2` with `@font-face`. `next/font/google` and any Google Fonts stylesheet are forbidden. `/fa` enables font feature `ss01` for ordinary UI numerals. Phones, emails, ORCID, and slugs stay Western digits inside `<bdi dir="ltr">`.

## TranslationUnavailable

`/en` never uses Persian as fallback copy. Lists, cards, menus, and search omit rows with an empty English name.

If the slug exists, is `published`, and has no English name, render `TranslationUnavailable` with `robots: { index: false, follow: true }`. Explain in English that the page is available in Persian only. Buttons go to the `/fa/...` URL and to `/en`.

Call `notFound()` only when the slug is missing or not `published`.

```tsx
// Forbidden on /en
<p>{page.title_fa}</p>

// Required when title_en is empty and the row is published
<TranslationUnavailable persianHref={`/fa/news/${slug}`} />
```

## Logical CSS

Use `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`, `border-s-*`, `border-e-*`.

Reject `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, `text-right`, `border-l-*`, `border-r-*`, `float-left`, `float-right`, and `space-x-*`. Prefer `gap`. Mirror directional icons on `/fa` (arrows, chevrons). Do not mirror logos or portraits.

```tsx
// Forbidden
<div className="ml-4 text-left" />
// Required
<div className="ms-4 text-start" />
```

## WCAG 2.2 AA

- First focusable control is a skip link to `#content`. The label is Persian on `/fa` and "Skip to main content" on `/en`. `<main id="content" tabIndex={-1}>`.
- `:focus-visible` is clearly visible against the surface behind it. Sticky bars must not cover the focused element.
- Interactive targets are at least 24×24px. Inline text links are exempt.
- Normal text contrast is at least 4.5:1. Large text is at least 3:1.
- Layouts work from 320px upward: tables, menus, faculty cards, and forms.
- Decorative icons have an empty accessible name. Informative icons have a text alternative.
````

### File: `.cursor/rules/security-privacy.mdc`

> **Path:** `.cursor/rules/security-privacy.mdc` | **Size:** 2,049 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
---
description: Server-only secrets, no clinical data, Zod validation, honeypot and IP rate limits, schema snapshots in Git.
alwaysApply: true
---

# Security and privacy

Risk level A: a public academic site. Out of scope: electronic clinical records, online booking, visitor accounts, and payments. Teaching-hospital pages describe services, hours, location, and phone.

## Secrets

`web/lib/directus.ts` and `web/lib/schema-org.ts` start with `import "server-only"`.

Server-only: `DIRECTUS_URL`, `DIRECTUS_READ_TOKEN`, `REVALIDATE_SECRET`, Postgres credentials, Directus admin credentials, backup credentials.

`NEXT_PUBLIC_SITE_URL` is the only public variable. Never create `NEXT_PUBLIC_DIRECTUS_READ_TOKEN`, `NEXT_PUBLIC_REVALIDATE_SECRET`, or `NEXT_PUBLIC_DIRECTUS_URL`.

```ts
// Forbidden
const token = process.env.NEXT_PUBLIC_DIRECTUS_READ_TOKEN
<img src={`${directusUrl}/assets/${id}?[REDACTED_SECRET] />

// Required
const token = process.env.DIRECTUS_READ_TOKEN
const src = getAssetUrl(id, "card") // same-origin, no token in the URL
```

The Next.js service does not receive `POSTGRES_*` or `DIRECTUS_ADMIN_*`. Compare `x-revalidate-secret` in constant time and do not log it.

## Data

No patient, client, or animal clinical records in the database, source, tests, fixtures, or prompts. Dev and test content is synthetic. Do not invent ORCID, Scholar, phone, or email values.

The contact handler validates with Zod, rejects a filled honeypot with the same response as success, and rate-limits by IP (429). Do not add an external CAPTCHA. Do not add clinical fields to the form.

Image delivery uses the WebP presets so EXIF, including GPS, is stripped. PDFs are not transcoded.

## Schema in Git

Snapshot Directus to `cms/schema/snapshot.yaml` and commit it with the type update. `cms/data/` and `cms/uploads/` stay gitignored. The Public Directus role has no permissions. Site Reader reads `published` rows only.

Do not add collections while Gate G0 in `ARCHITECTURE.md` is open.
````

### File: `.cursor/skills/design-qa-rtl/SKILL.md`

> **Path:** `.cursor/skills/design-qa-rtl/SKILL.md` | **Size:** 2,430 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
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
````

### File: `.cursor/skills/directus-schema-change/SKILL.md`

> **Path:** `.cursor/skills/directus-schema-change/SKILL.md` | **Size:** 2,480 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
---
name: directus-schema-change
description: Updates the Directus schema for the veterinary faculty portal and keeps the snapshot, TypeScript types, published-only filters, and cache tags aligned. Use when changing Directus collections, fields, relations, permissions, or cms/schema/snapshot.yaml.
---

# Directus schema change

Follow `ARCHITECTURE.md` sections 6 and 7. Section 5.2 of the Persian v3.0 document (people, academic profiles, role assignments) is final. Gate G0 is open.

## Steps

1. Classify the change.
   - Edits inside the nine collections and the fields already listed: continue.
   - A new collection, or equipment / downloads / admissions fields: stop. Decision 6.1 is open. Ask the product owner and update both architecture files before modeling it.
2. If a locked field changes, edit the Persian v3.0 document and `ARCHITECTURE.md` in the same change.
3. On a shared or staging database, take a backup before applying anything.
4. Change the local Directus project. Keep `status` as `draft` | `published` | `archived` on collections that already have it. Do not add `status` to `academic_profiles`.
5. Snapshot from the repository root:

```bash
npx directus schema snapshot ./cms/schema/snapshot.yaml
```

6. Update the types in `web/lib/directus.ts` to match the snapshot. Keep:
   - `import "server-only"`
   - `status = "published"` on public reads
   - the `/en` empty-name filter (`full_name_en`, `name_en`, or `title_en`)
   - tags `directus` plus `organization-units` | `people` | `programs` | `news` | `events` | `services` | `pages`
   - `revalidate: 3600`
7. Leave `getAssetUrl` presets unchanged unless the task is specifically the media contract.
8. Permissions after the change:
   - Public role: no access
   - Site Reader: read `published` only
   - Content Editor: no schema or role administration
9. Apply a snapshot to a shared database only after the backup in step 3:

```bash
npx directus schema apply ./cms/schema/snapshot.yaml
```

10. When the user asks to commit, commit `cms/schema/snapshot.yaml` together with the type changes. Do not commit `cms/data/` or `cms/uploads/`.

## Example

Adding `subtitle_en` to `news_articles` is rejected until `ARCHITECTURE.md` lists it. Adding a `lab_equipment` collection is rejected while decision 6.1 is open. Renaming an `academic_rank` key requires both architecture files, the snapshot, the UI dictionary, and JSON-LD job titles together.
````

### File: `.cursor/skills/release-readiness/SKILL.md`

> **Path:** `.cursor/skills/release-readiness/SKILL.md` | **Size:** 2,435 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
---
name: release-readiness
description: Runs the pre-release checklist for the veterinary faculty portal before staging sign-off or a public deploy. Use when preparing a release, tagging a rollback point, or verifying lint, types, build, schema snapshot, secrets, WCAG, JSON-LD, sitemap, Directus permissions, and backup restore.
---

# Release readiness

Run this before a public deploy. The checklist matches `ARCHITECTURE.md` section 12. Performance budgets in section 2 stay in force: Lighthouse Performance ≥ 90 on mobile and desktop, LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

Work in `web/` for the Node commands. Do not print secret values.

## Checklist

1. **Lint, types, and build** exit 0:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

2. **Snapshot.** `cms/schema/snapshot.yaml` exists and is committed with the types that match it. `git status` does not show an uncommitted schema drift.
3. **Secrets.** `git check-ignore -v .env` shows `.env` ignored. Search the tracked tree for `NEXT_PUBLIC_` combined with `TOKEN`, `SECRET`, `KEY`, or `PASSWORD`. Search client components for `DIRECTUS_READ_TOKEN`. Confirm image URLs do not carry `access_token`.
4. **WCAG 2.2 AA.** `/fa` and `/en` on a 320px viewport and on desktop. Evidence includes the skip link, keyboard travel, visible focus, contrast, and a Playwright + `@axe-core/playwright` run of the six journeys in `ARCHITECTURE.md` section 11.1.
5. **SEO.** Validate JSON-LD for `CollegeOrUniversity`, `EducationalOrganization`, `Person` (ORCID and Google Scholar in `sameAs` only when the CMS has them), and `Course`. Confirm `sitemap.xml` has no `/en` URL whose English title is empty, and no `TranslationUnavailable` URL.
6. **Permissions.** With no token, Directus denies reads. With `DIRECTUS_READ_TOKEN`, a draft row is absent and a published row is present.
7. **Restore.** Restore the latest encrypted backup onto staging (or a scratch database), not onto production. Confirm a known published row. Record the date and the dump identity.
8. **Rollback.** Create an annotated git tag and a Docker image tagged with the same revision. Faculty approval of staging is recorded. Rollback is that tag and image, plus the matching database restore if the schema changed.

## Stop

If any item fails, do not tag a production release. Fix the failed item and run that item again. Do not close Gate G0 from this checklist.
````

### File: `AGENTS.md`

> **Path:** `AGENTS.md` | **Size:** 5,586 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
# Agent instructions — IAU-TBZ-VET-PORTAL-2026

Cursor and Hermes both follow this file, then [`ARCHITECTURE.md`](ARCHITECTURE.md), then the Persian product source [`docs/Faculty of Veterinary Medicine website architecture-v3.0 .md`](docs/Faculty%20of%20Veterinary%20Medicine%20website%20architecture-v3.0%20.md).

The operating guide for model choice is [`docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md`](docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md). That guide does not override the product architecture. Ignore its generic options (commerce, Redis, a second database, Vercel as the only origin).

## Authority

1. Locked product behavior comes from `ARCHITECTURE.md`, which tracks v3.0.
2. Gate G0 is open. Do not add collections, navigation, or detailed fields that section 6 of `ARCHITECTURE.md` leaves undecided.
3. A behavior change and the architecture docs land together. Do not let code drift ahead of the docs.
4. Enum labels for rank, membership, degree, and role category are a closed dictionary. People, units, news, programs, events, services, and pages come from Directus.

## Who does what

| Agent | Model | Work |
| :--- | :--- | :--- |
| Cursor, daily coding | Composer 2.5 | UI, routes, forms, Tailwind, ordinary CRUD, multi-file edits. About 80% of IDE time. Stay on Standard unless a short spike needs Fast |
| Cursor, architecture and hard bugs | Grok 4.7 | Data model, security, cross-cutting bugs, visual QA in the browser. Use Grok 4.6 for medium refactors that need more reasoning than Composer and less than a full architecture pass |
| Hermes, background | DeepSeek V4.1 Flash via OpenRouter | Docker and Compose, synthetic seed, JSON-LD and sitemap work, Playwright + axe, CI scripts, long terminal runs |
| Hermes, fallback | DeepSeek V4 Flash | Rate-limit or outage fallback only. Do not switch models mid-task for taste |

If Composer 2.5 fails the same bug or piece of logic twice, stop and hand it to Grok 4.7 at high effort with the two failures and the relevant files.

Application source is written in Cursor. Hermes may prepare Docker, seed, tests, and SEO artifacts. Hermes does not close G0, does not widen Directus permissions, and does not introduce clinical, booking, or payment behavior. Review Hermes diffs in Cursor before they merge to `main`.

During a Hermes run, do not rewrite `ARCHITECTURE.md` unless the task itself is an approved architecture change.

Hermes host caching (`HERMES_OPENROUTER_CACHE`, sticky provider routing) belongs to the Hermes environment. Do not put those variables in the Next.js service.

## Non-negotiables

- Public data access goes through `web/lib/directus.ts` (`import "server-only"`). Filter `status = "published"`.
- `DIRECTUS_READ_TOKEN` and `REVALIDATE_SECRET` never use a `NEXT_PUBLIC_` prefix. The browser never sees the Directus token, including inside image URLs.
- `/en` does not fall back to Persian. Empty English names are filtered in lists. Direct visits use `TranslationUnavailable` with `robots: { index: false, follow: true }`. `notFound()` only when the slug is missing or not published.
- Tailwind uses logical direction (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `text-end`). Physical `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, and `text-right` are rejected.
- Fonts are local Vazirmatn. `next/font/google` is rejected.
- WCAG 2.2 AA: skip link, keyboard, `:focus-visible`, 24×24px targets, contrast 4.5:1 body and 3:1 large text.
- Server boundaries validate with Zod. The contact form uses a honeypot and IP rate limiting, not an external CAPTCHA.
- No electronic clinical records, appointment booking, visitor accounts, or payments. Tests and prompts use synthetic data.
- No microservices, Kubernetes, Redis, message queues, or external search in this version.
- Schema edits update `cms/schema/snapshot.yaml` and the TypeScript types together.

## Reversible operations

- Commit schema snapshots with the code that depends on them. History is the previous snapshot; do not keep a pile of dated snapshot copies.
- Take a backup before applying a snapshot to a shared or staging database.
- `docker compose down` does not use `-v` unless the user explicitly orders volume deletion.
- Prefer `status = "archived"` over deleting published rows. Revisions stay on.
- Do not force-push, and do not hard-reset shared branches.
- A release rollback is the previous git tag and its Docker image. If the schema changed, restore the matching backup. Do not hand-edit production rows to imitate a rollback.
- Production deploys require the release checklist in `ARCHITECTURE.md` section 12, including one successful staging restore.

## Handoff

When moving work between Cursor and Hermes, include:

- Goal and phase (0–3) and whether G0/G1/G2/G3 is involved
- Files and collections touched
- The architecture section that authorizes the change
- Verification already run
- How to undo it

## Completion report

End a task with:

```
## Result
What changed and which architecture section it follows.

## Files
Paths touched.

## Verification
Commands, routes, or checks actually run. Say what was not run.

## Decisions
State whether Gate G0 was touched. Default is "not touched".

## Rollback
How to revert the change.
```

Do not start the next phase until the user asks. Foundation work does not run `create-next-app`, package installs, or Docker.
````

### File: `ARCHITECTURE.md`

> **Path:** `ARCHITECTURE.md` | **Size:** 29,708 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
# Faculty of Veterinary Medicine Portal — Operational Architecture

**Repository:** `IAU-TBZ-VET-PORTAL-2026`  
**Status:** Foundation for implementation. Gate G0 is open.  
**Product source:** [`docs/Faculty of Veterinary Medicine website architecture-v3.0 .md`](docs/Faculty%20of%20Veterinary%20Medicine%20website%20architecture-v3.0%20.md) (version 3.0, 17 October 2026 / 25 Mehr 1405).  
**Agent operating guide:** [`docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md`](docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md).

This file is the English operational source of truth for Cursor and Hermes. It follows the Persian v3.0 document. If a change revises a locked decision, update both files in the same change. Section 4 of the Persian document stays open until the product owner closes it in both files.

The slug `dr-reza-mohammadi`, the address `user@iaut.ac.ir`, and the ORCID `0000-0002-1825-0097` appear only as format examples from the data model. They are not records to seed.

---

## 1. System overview and risk boundary

The product is the official academic, research, and informational website of the Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch. The organization tree can later represent university-wide units through `organization_units.parent_id` without a new platform.

**Risk level A.** Visitors only talk to Next.js. Editors reach Directus on a separate admin host. The public site has no accounts.

**In scope:** structured public content, bilingual reading, on-site search, institutional contact, and an informational presentation of the teaching hospital and diagnostic services (what the service is, visit conditions, hours, location, phone).

**Out of scope for this version:** electronic clinical records, online appointment booking, a visitor login portal, and payment. No animal or patient records in the database, application code, tests, fixtures, or agent prompts. Development and test data is synthetic. Phase 3 is when real faculty content is entered by editors.

**Content is structured data.** Directus stores fields. Next.js owns layout. There is no page builder.

**Shape:** one modular monolith. This version does not add microservices, Kubernetes, message queues, Redis, or an external search or analytics service.

**Network independence:** the production entry point is a self-hosted server (an Iran VPS or a university-approved datacenter). Vercel or Cloudflare Pages must not be the only public entry. Runtime and build must not depend on the Google Fonts CDN or on an external CAPTCHA.

---

## 2. Mandatory quality bar

| Area | Standard | Acceptance |
| :--- | :--- | :--- |
| Accessibility | WCAG 2.2 Level AA | Skip link to main content, full keyboard use, visible `:focus-visible`, 24×24px minimum target size, contrast 4.5:1 for normal text and 3:1 for large text, Playwright + `@axe-core/playwright` clean on the critical journeys |
| Performance | Core Web Vitals | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse Performance ≥ 90 on mobile and desktop |
| Academic SEO | Schema.org JSON-LD + technical SEO | JSON-LD from `web/lib/schema-org.ts`, dynamic `sitemap.xml`, `robots.txt`, canonical, `hreflang` |
| Language | `/fa` RTL and `/en` LTR | `lang` and `dir` follow the locale; Tailwind logical properties; directional icons mirror on `/fa` |
| Responsive | Mobile-first | Layout, tables, menus, faculty cards, and forms work from 320px through wide desktop |
| Security | OWASP ASVS baseline + TLS 1.3 | Read-only server access to Directus, separate admin host, server-side validation, EXIF removed from uploaded images |

---

## 3. Stack

| Layer | Choice |
| :--- | :--- |
| `web/` | Next.js 16.4+ App Router, React 19.3+, TypeScript 5 (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), Tailwind CSS v4, RTL-ready shadcn/ui primitives, Lucide icons |
| `cms/` | Directus `directus/directus:12.5.0`, self-hosted. Revisions on. Webhook on publish and on later edits |
| Database | PostgreSQL `postgres:17`, Docker, internal network only |
| Proxy | Nginx or Caddy, TLS 1.3, ports 80 and 443 |
| Quality | ESLint 9, `tsc --noEmit`, `npm run build`, Playwright, `@axe-core/playwright` |
| Font | Self-hosted `web/public/fonts/Vazirmatn-Variable.woff2` for both locales |

`next/font/google` is forbidden. `/fa` sets Vazirmatn feature `ss01` for Persian digits in ordinary UI text. Phone numbers, ORCID, email, postal data, and slugs stay in Western digits so they can be copied. `/en` uses the same local Vazirmatn files. No second font is loaded from a CDN.

The Next.js process does not receive Postgres credentials and does not open a database connection. All public reads go through Directus with `DIRECTUS_READ_TOKEN`.

---

## 4. Repository tree

```
.
├── ARCHITECTURE.md
├── AGENTS.md
├── README.md
├── .env.example
├── .gitignore
├── docker-compose.yml                 # phase 3 runtime; not part of foundation
├── docs/
│   ├── Faculty of Veterinary Medicine website architecture-v3.0 .md
│   ├── .architecture_rule/            # Cursor + Hermes operating guide
│   └── evaluation/                    # later: docs/evaluation/prototype-evaluation.md
├── cms/
│   ├── schema/                        # committed snapshot.yaml
│   ├── extensions/
│   ├── uploads/                       # gitignored
│   └── data/database/                 # gitignored Postgres volume
└── web/
    ├── app/[locale]/                  # fa | en
    ├── app/api/revalidate/route.ts
    ├── lib/directus.ts
    ├── lib/schema-org.ts
    └── public/fonts/Vazirmatn-Variable.woff2
```

Foundation creates the governance files and empty reserved directories. It does not scaffold Next.js, install packages, or start Docker.

`export_project.py` is named in v3.0 section 9.1. It is not part of this foundation step.

---

## 5. Docker Compose topology

Five services on one Compose project. Only `proxy` publishes ports.

| Service | Image / runtime | Responsibility | Network and data |
| :--- | :--- | :--- | :--- |
| `proxy` | Nginx or Caddy | TLS termination. Public site host routes to `web`. Admin host routes to `cms`. Admin host is limited to an allowlist or VPN | Published `80` and `443` |
| `web` | Next.js production | Public SSG/ISR and the search SSR, sitemap, JSON-LD, contact handler, revalidation handler | No persistent store. Calls `cms` with the server read token |
| `cms` | `directus/directus:12.5.0` | Admin UI, REST, image transforms, webhooks | Bind mounts `./cms/uploads` and `./cms/extensions` |
| `database` | `postgres:17` | Structured content, translations, Directus activity | Internal only. No host port. Bind mount `./cms/data/database` |
| `backup` | Cron + `pg_dump` + `tar` | Daily database dump and uploads archive, compressed and encrypted, copied to storage off the primary server | No published ports. Read access to the database and uploads |

Directus upload policy, set in Compose on `cms`:

- `FILES_MAX_UPLOAD_SIZE=10MB`
- `FILES_MIME_TYPE_ALLOW_LIST=image/jpeg,image/png,image/webp,application/pdf`

Image presets re-encode through Directus `sharp`, which drops EXIF, including GPS. PDF files are stored as uploaded and are not transcoded.

Backup encryption keys and the off-server destination are server-only. They are added when the destination is chosen. They are not `NEXT_PUBLIC_` variables.

---

## 6. Open decisions — Gate G0

Do not close these in code, schema, or navigation.

### 6.1 Domain modules

The baseline is the nine collections in section 7. Still undecided:

1. Whether **laboratories and specialized equipment**, the **downloads / regulations / academic calendar** library, and the **admissions guide** become their own collections, or live inside `organization_units`, `programs`, and `pages`.
2. Detailed fields for every module except `people`, `academic_profiles`, and `role_assignments`. Section 5.2 of the Persian document is final. Section 5.1 key fields below are the baseline for the other six collections. Do not add further columns until this decision is written into both architecture files.

### 6.2 Audience journeys

Navigation, home-page guide cards, and menus are not a copy of the org chart. They are not locked. The four audiences to design for are:

1. **Prospective students** — DVM, specialty programs, laboratories, admission conditions, faculty facilities.
2. **Current students** — teaching announcements, curriculum, faculty pages, internship and thesis forms, academic calendar.
3. **Researchers and faculty** — profiles, publications, research laboratories, collaboration paths.
4. **Teaching-hospital visitors** — services (small animal, large animal, poultry, laboratory diagnostics), hours, address, direct phone numbers. No online booking.

Until G0 is recorded, implement only the routes in section 8.1 and the nine baseline collections.

---

## 7. Directus data model

Three tiers stay separate so one person can be a faculty member of a department and hold one or more executive posts:

1. `people` — public identity and contact.
2. `academic_profiles` — one-to-one academic rank, degrees, scientometrics.
3. `role_assignments` — many-to-many posts on organization units.

### 7.1 Shared publication rules

Collections that include `status` use exactly `draft`, `published`, and `archived`. Default is `draft`. The public site reads `published` only. `archived` is the logical hide; it does not delete history. Revisions stay enabled.

There is no per-unit approval chain and no automatic expiry field.

| Role | Access |
| :--- | :--- |
| Public (no token) | No permissions on any collection |
| Site Reader | Static token in `DIRECTUS_READ_TOKEN`. Read rows with `status = "published"` only. This is the only Directus credential on `web` |
| Content Editor | Create and edit content, upload allowed files, set `published` or `archived` |
| System Admin | Schema, roles, settings, backup. At most two people |

### 7.2 `organization_units`

Faculty, deputy office, department, laboratory, or clinic. Tree via `parent_id`.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `slug` | string | Unique Latin slug |
| `unit_type` | enum | `faculty` \| `deputy` \| `department` \| `laboratory` \| `clinic` |
| `parent_id` | uuid, null | Self-relation. No cycles. Restrict delete while children or assignments exist |
| `sort_order` | integer | Display order |
| `phone` | string, null | |
| `email` | string, null | |
| `location_fa` | string, null | Address text |
| `location_en` | string, null | Address text |
| `name_fa` | string | Required for a published row |
| `name_en` | string, null | Empty means no English unit page |
| `intro_fa` | text, null | Introduction |
| `intro_en` | text, null | Introduction |

`primary_department_id` examples in the people model are illustrative only: علوم پایه، پاتوبیولوژی، علوم درمانگاهی، بهداشت و کنترل کیفی مواد غذایی. They are not a hardcoded menu and not an approved seed list.

Equipment, galleries, and extra laboratory fields wait on decision 6.1.

### 7.3 `people`

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `slug` | string | Unique Latin slug |
| `avatar` | file uuid, null | Official portrait |
| `academic_title_prefix_fa` | enum, null | `دکتر` \| `مهندس` \| `استاد` |
| `academic_title_prefix_en` | enum, null | `Dr.` \| `Prof.` |
| `first_name_fa` | string | Required |
| `last_name_fa` | string | Required |
| `full_name_fa` | string | Required. Public Persian display name |
| `first_name_en` | string, null | |
| `last_name_en` | string, null | |
| `full_name_en` | string, null | Required for the English profile to be active |
| `public_email` | string, null | Public university mailbox |
| `office_phone` | string, null | Office extension |
| `office_location_fa` | string, null | |
| `office_location_en` | string, null | |
| `office_hours_fa` | string, null | |
| `office_hours_en` | string, null | |

The prefix `استاد` is not the rank `full_professor`. Do not derive one from the other. Do not compose the heading by guessing; render `full_name_fa` or `full_name_en`.

### 7.4 `academic_profiles` (1:1 with `people`)

No `status` column. A profile is public only when its person is `published`. `person_id` is unique.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `person_id` | uuid | Unique foreign key to `people.id` |
| `academic_rank` | enum | Closed list below |
| `faculty_membership_type` | enum | Closed list below |
| `highest_degree` | enum | `dvm` \| `phd` \| `dvsc` \| `msc` |
| `primary_department_id` | uuid | Foreign key to `organization_units.id` |
| `specialty_fa` / `specialty_en` | string, null | |
| `bio_fa` / `bio_en` | text, null | |
| `research_interests_fa` / `research_interests_en` | json, null | `string[]` |
| `education_history_fa` / `education_history_en` | json, null | `{ degree, field, institution, country, year }[]` |
| `courses_taught_fa` / `courses_taught_en` | json, null | `{ title, delivery: "theoretical" \| "practical" }[]` |
| `selected_publications` | json, null | `{ kind: "article" \| "book", title, year?, venue? }[]`. Titles stay in the publication's own language |
| `veterinary_council_number` | string, null | Optional. Clinical faculty |
| `orcid_id` | string, null | `^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$` |
| `google_scholar_url` | string, null | Absolute profile URL |
| `scopus_author_id` | string, null | |
| `wos_researcher_id` | string, null | Web of Science ResearcherID |
| `researchgate_url` | string, null | |
| `institutional_cv_url` | string, null | Azad scientometric system or Pajooheshyar page |
| `cv_file` | file uuid, null | Full CV PDF |

**`academic_rank`**

| Key | Persian | English |
| :--- | :--- | :--- |
| `instructor` | مربی | Instructor / Lecturer |
| `assistant_professor` | استادیار | Assistant Professor |
| `associate_professor` | دانشیار | Associate Professor |
| `full_professor` | استاد (استاد تمام) | Professor (Full Professor) |
| `distinguished_professor` | استاد ممتاز | Distinguished Professor |
| `clinical_instructor` | مدرس بالینی / کارشناس ارشد آموزشی | Clinical Instructor |

**`faculty_membership_type`**

| Key | Persian | English |
| :--- | :--- | :--- |
| `official_tenured` | هیئت علمی تمام‌وقت (رسمی قطعی / آزمایشی) | Full-Time Tenured / Tenure-Track Faculty |
| `contractual` | هیئت علمی پیمانی / طرح هیئت علمی | Full-Time Contractual Faculty |
| `adjunct` | استاد مدعو / وابسته / حق‌التدریس | Adjunct / Visiting Lecturer |
| `emeritus` | استاد پیشکسوت / بازنشسته | Professor Emeritus |

**`highest_degree`:** `dvm` دکترای حرفه‌ای دامپزشکی (D.V.M.); `phd` دکترای تخصصی (Ph.D.); `dvsc` دکترای تخصصی بالینی دامپزشکی / دستیاری (D.V.Sc.); `msc` کارشناسی ارشد (M.Sc.).

These labels are a closed UI dictionary. People, units, news, and services are not.

### 7.5 `role_assignments`

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `person_id` | uuid | Foreign key to `people.id` |
| `unit_id` | uuid | Foreign key to `organization_units.id` |
| `role_category` | enum | Closed list below |
| `role_title_fa` | string | Specific display title. Required when published |
| `role_title_en` | string, null | Specific display title |
| `is_primary_role` | boolean | When true, this title is the subtitle on faculty cards |
| `sort_order` | integer | Order on the unit page |

| Key | Persian meaning | English category label |
| :--- | :--- | :--- |
| `faculty_dean` | رئیس دانشکده | Dean |
| `vice_dean` | معاون دانشکده (آموزشی و تحصیلات تکمیلی، پژوهش و فناوری، دانشجویی و فرهنگی، دامپزشکی/بیمارستان) | Vice Dean |
| `department_head` | مدیر گروه آموزشی | Department Head |
| `hospital_director` | رئیس بیمارستان آموزشی / کلینیک تخصصی | Teaching Hospital Director |
| `lab_supervisor` | سرپرست آزمایشگاه تخصصی | Laboratory Supervisor |
| `faculty_member` | عضو هیئت علمی گروه | Faculty Member |
| `staff` | کارشناس مسئول / کادر اداری و آزمایشگاهی | Staff |

The specific post is `role_title_*`. Several deputy offices share `vice_dean` and differ in `role_title_*`. On `/en`, use `role_title_en` when it is non-empty; otherwise use the English category label. Never render `role_title_fa` on `/en`.

A public card shows a published assignment only when the person and the unit are also published. At most one published primary role per person. If data breaks that rule, display the lowest `sort_order`.

### 7.6 Other baseline collections

Further columns wait on decision 6.1. Do not add an attachments library or an equipment table until then.

**`programs`** — `id`, `status`, `slug`, `degree_level` (`dvm` \| `msc` \| `phd` \| `dvsc`), `department_id` → `organization_units`, `curriculum_pdf` (file), `title_fa` / `title_en`, `duration_fa` / `duration_en`, `admission_fa` / `admission_en`, `courses_intro_fa` / `courses_intro_en`.

**`news_articles`** — `id`, `status`, `slug`, `category` (`news` \| `announcement`), `published_at`, `cover_image` (file), `unit_id` → `organization_units` nullable, `title_fa` / `title_en`, `summary_fa` / `summary_en`, `body_fa` / `body_en`.

**`events`** — `id`, `status`, `slug`, `start_at`, `end_at`, `organizer_unit_id` → `organization_units`, `cover_image` (file), `title_fa` / `title_en`, `location_fa` / `location_en`, `description_fa` / `description_en`.

**`service_items`** — informational hospital and diagnostic-lab services. `id`, `status`, `slug`, `unit_id` → `organization_units`, `working_hours_fa` / `working_hours_en`, `contact_phone`, `title_fa` / `title_en`, `visit_conditions_fa` / `visit_conditions_en`, `description_fa` / `description_en`. No booking URL, queue, or patient fields.

**`pages`** — fixed institutional pages such as about, history, and contact. `id`, `status`, `slug`, `show_in_nav`, `sort_order`, `title_fa` / `title_en`, `seo_title_fa` / `seo_title_en`, `seo_description_fa` / `seo_description_en`, `sections_fa` / `sections_en` (JSON `{ heading, body, sort }[]`). Regulations, forms, and the admissions guide are not a locked attachment model yet (decision 6.1). Their public URLs are part of decision 6.2.

Slugs are unique per collection and match `^[a-z0-9]+(?:-[a-z0-9]+)*$`. One slug is shared by `/fa` and `/en`.

---

## 8. Frontend, language, and SEO

### 8.1 Route map

`[locale]` is `fa` or `en`. Unprefixed public pages redirect to `/fa`. API routes stay outside `[locale]`.

| Route | Rendering | Cache tags |
| :--- | :--- | :--- |
| `/fa`, `/en` | SSG/ISR | `directus`, `organization-units`, `news`, `events` |
| `/[locale]/departments/[slug]` | SSG/ISR. Any organization unit (department, laboratory, or other unit) | `organization-units`, `people` |
| `/[locale]/people`, `/[locale]/people/[slug]` | SSG/ISR | `people` |
| `/[locale]/programs/[slug]` | SSG/ISR | `programs` |
| `/[locale]/news`, `/[locale]/news/[slug]` | ISR, news index paginated | `news` |
| `/[locale]/events`, `/[locale]/events/[slug]` | SSG/ISR | `events` |
| `/[locale]/services/[slug]` | SSG/ISR. Teaching-hospital and clinic services | `services` |
| `/[locale]/search?q=` | SSR. No durable cache | none |

Any extra collection read on a route adds that collection's tag. Home does not query a collection without tagging it.

Tag names used by `revalidateTag`:

| Collection | Tag |
| :--- | :--- |
| `organization_units` | `organization-units` |
| `people` (and profiles / assignments shown with them) | `people` |
| `programs` | `programs` |
| `news_articles` | `news` |
| `events` | `events` |
| `service_items` | `services` |
| `pages` | `pages` |

Every `directusFetch` also sets the umbrella tag `directus` and `revalidate: 3600`.

### 8.2 Missing English translation

1. `/en` never renders Persian as a fallback for a translated field. `selected_publications` keep their original bibliographic titles.
2. English lists, cards, menus, and search results are filtered inside `web/lib/directus.ts`. Drop the row when the locale name is null or `""`: `name_en` for units, `full_name_en` for people, `title_en` for programs, news, events, services, and pages.
3. A published row opened directly on `/en`, or reached by the language switch, with an empty English name renders `TranslationUnavailable`. Metadata is `robots: { index: false, follow: true }`. The English copy says the page is currently available in Persian only. Buttons: view the Persian URL (`/fa/...`) and back to English home (`/en`).
4. `notFound()` runs only when the slug does not exist or the row is not `published`. Draft and archived are not found. They are not `TranslationUnavailable`.

English list queries must not link to `TranslationUnavailable` pages. Sitemap entries for `/en` include only rows that pass the English-name filter. `hreflang` alternates are emitted only when both locales exist. A `TranslationUnavailable` URL is omitted from the sitemap.

Embedded phone numbers, emails, and ORCIDs inside Persian text use `<bdi dir="ltr">`.

### 8.3 `web/lib/schema-org.ts`

Server-only JSON-LD:

| Type | Where |
| :--- | :--- |
| `CollegeOrUniversity`, `EducationalOrganization` | Home and organization-unit pages |
| `Person` | Faculty profile. `jobTitle` is rank plus executive title. `affiliation` is the faculty. `sameAs` includes only non-empty ORCID (`https://orcid.org/{orcid_id}`), Google Scholar, Scopus, and ResearchGate |
| `Course`, `EducationalOccupationalProgram` | Program pages |
| `BreadcrumbList` | Hierarchical pages |
| `Event` | Event pages |
| `FAQPage` | Admissions FAQ, once that content exists |

Persian pages use the Persian organization name دانشکده دامپزشکی دانشگاه آزاد اسلامی واحد تبریز. English pages use Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch. JSON-LD is omitted on `TranslationUnavailable` and on `notFound`.

Identifiers that are empty are omitted. Agents do not invent ORCID or Scholar URLs.

### 8.4 Contact form

The contact form is an institutional inquiry. It is not an appointment form and has no clinical fields. Its URL is part of decision 6.2. The handler behavior is locked now: a server Route Handler, Zod validation, a honeypot field that must stay empty, and per-IP rate limiting. Honeypot failures return the same response as success and do not store the message. Rate-limit failures return 429. No external CAPTCHA. The delivery mailbox or store is chosen before the form is built; it is not a new public Directus collection by default.

---

## 9. Cache, media, and search

### 9.1 Revalidation

`web/app/api/revalidate/route.ts` accepts `POST`. It compares header `x-revalidate-secret` with `REVALIDATE_SECRET` in constant time. The JSON body carries the tag to refresh. The tag must be one of `directus`, `organization-units`, `people`, `programs`, `news`, `events`, `services`, `pages`. The handler calls the Next.js 16.4 tag revalidation API (`revalidateTag` unless that version has renamed it) and does not log the secret. Unknown tag or bad secret does not reveal which check failed beyond 401 for a bad secret and 400 for a bad tag.

Directus sends the webhook when published content changes. The webhook uses the tag name, not an ad-hoc string.

### 9.2 `getAssetUrl(fileId, preset)`

Defined only in `web/lib/directus.ts`. The returned URL is same-origin and contains no Directus token. A server path attaches `Authorization: Bearer ${DIRECTUS_READ_TOKEN}` when calling Directus. The public Directus role cannot read files.

| Preset | Contract |
| :--- | :--- |
| `avatar` | Width 400, WebP, quality 80, `withoutEnlargement=true` |
| `card` | Width 800, WebP, quality 80 |
| `hero` | Width 1600, WebP, quality 82 |
| `document` | Original PDF bytes, no image transform |

Confirm the exact Directus 12.5 asset query names when the proxy is implemented. The output contract above stays fixed.

### 9.3 `searchSiteContent(query, locale)`

Lives in `web/lib/directus.ts`. The page `/[locale]/search` is a server render with no durable cache.

- Validate and trim `q` with Zod. Minimum 2 characters, maximum 80.
- `Promise.all` over `people`, `organization_units`, `programs`, and `news_articles` only.
- Every query includes `status = "published"`.
- Use Directus `_icontains` on the active locale's fields only. `/en` does not search Persian columns.
- Apply the empty-translation filter before returning `/en` hits.
- Group the results by collection on the search page.

Events and services are not in this search set.

---

## 10. Security and privacy

- `web/lib/directus.ts` and `web/lib/schema-org.ts` start with `import "server-only"`.
- `DIRECTUS_URL`, `DIRECTUS_READ_TOKEN`, and `REVALIDATE_SECRET` are read on the server only. They never gain a `NEXT_PUBLIC_` prefix. `NEXT_PUBLIC_SITE_URL` is the only public variable, and it is an origin.
- Client components receive prepared DTOs. They do not call Directus.
- `.env` is gitignored. `cms/data/` and `cms/uploads/` are gitignored.
- Schema changes are snapshotted to `cms/schema/snapshot.yaml` and committed with the matching types.
- Uploaded images go through the WebP presets so EXIF does not ship to browsers.
- Synthetic fixtures only, until editors enter real academic content in phase 3. Real clinical material is out of scope even then.

---

## 11. Quality gates and phases

### 11.1 Required end-to-end journeys

1. `/fa` (RTL) and `/en` (LTR) at mobile and desktop, with no console errors and no broken layout.
2. Open a department, filter faculty by academic rank, open a profile, and validate its JSON-LD.
3. Search a faculty name or a news title on `/fa/search`.
4. Language switch on a translated row and on a row with no English: lists stay free of broken links; the direct English URL shows `TranslationUnavailable`.
5. Submit the contact form and confirm the honeypot and the rate limit.
6. Confirm Directus denies anonymous reads, then publish an item and confirm the webhook refreshes the public page.

### 11.2 Phases

| Phase | Work | Gate |
| :--- | :--- | :--- |
| 0. Domain and foundation | Governance files and the v3.0 architecture. Runtime is not started in this step | **G0 — open.** Product owner decides section 6 |
| 1. Data model and prototype evaluation | Local Directus tables, first `cms/schema/snapshot.yaml`, evaluation against `docs/evaluation/prototype-evaluation.md`, decision on carrying prototype UI forward | G1. Schema and visual shell approved |
| 2. Module pages, SEO, search | Units, faculty, programs, news, events, services, search, contact, synthetic data | G2. Build, WCAG 2.2 AA, faculty sign-off on staging |
| 3. Production host and real content | Compose, HTTPS, backup restore test, initial faculty content, public launch | G3. Handover and support |

### 11.3 Risks

| Risk | Mitigation |
| :--- | :--- |
| Iran network blocks fonts, CDNs, or CAPTCHA | Self-host the site and Vazirmatn. No external CAPTCHA |
| Directus BSL 1.1 | Product owner checks the license ceiling before any large commercial contract. Academic self-hosting is the current use |
| English translations arrive late | English lists omit unfinished rows. Direct visits render `TranslationUnavailable` |
| Clinical features leak into the hospital section | Services stay descriptive. No booking and no clinical records |
| Server loss or bad deletes | Directus revisions, daily encrypted off-server backup, restore proven on staging |

---

## 12. Release checklist

Before a public deploy, all of the following are true:

1. In `web/`: `npm run lint`, `npx tsc --noEmit`, and `npm run build` exit 0.
2. The latest Directus snapshot is in `cms/schema/` and committed.
3. `.env` is untracked, and no secret sits in a `NEXT_PUBLIC_` variable.
4. `/fa` and `/en` are checked on mobile and desktop against WCAG 2.2 AA, including skip link, keyboard, and contrast.
5. JSON-LD (`CollegeOrUniversity`, `EducationalOrganization`, `Person` with ORCID and Google Scholar, `Course`) and `sitemap.xml` are checked.
6. The anonymous Directus role has no access. The Site Reader token reads `published` rows only.
7. A backup restore has succeeded at least once on staging.
8. A git tag and the matching Docker image exist for rollback, and the faculty has approved staging.

Section 2 performance budgets remain in force for that launch even though they are not a separate checkbox above.
````

### File: `docs/decisions/0001-local-nextjs-directus.md`

> **Path:** `docs/decisions/0001-local-nextjs-directus.md` | **Size:** 1,453 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
# 0001 — Local Next.js and Directus stack

**Status:** Accepted  
**Date:** 2026-10-16

## Context

The veterinary faculty website needs a local development stack that matches the decided product architecture: Next.js frontend and Directus CMS on PostgreSQL.

## Decision

- Frontend lives in `web/`, using the App Router, TypeScript, Tailwind CSS, and ESLint.
- `docker-compose.yml` defines five services: `proxy`, `web`, `cms` (`directus/directus:12.5.0`), `database` (`postgres:17`), and `backup`.
- Only `proxy` publishes ports `80` and `443`. Directus is not published on the host. The public site is `http://localhost`. The admin host is `http://cms.localhost`.
- Secrets and credentials are supplied through the root `.env` file (gitignored). Variable names match `.env.example`: `DIRECTUS_KEY`, `DIRECTUS_SECRET`, `DIRECTUS_ADMIN_EMAIL`, and `DIRECTUS_ADMIN_PASSWORD`. The Next.js service receives `DIRECTUS_URL`, `DIRECTUS_READ_TOKEN`, `REVALIDATE_SECRET`, and `NEXT_PUBLIC_SITE_URL` only.
- Persistent local data is stored under `cms/` (`cms/data/` for PostgreSQL, `cms/uploads/` for media, `cms/extensions/` for Directus extensions). Those data directories stay gitignored.

## Consequences

- `scripts/init-directus-schema.mjs` talks to Directus through `http://cms.localhost` when `DIRECTUS_URL` is the in-Compose address `http://cms:8055`.
- Redis, PostGIS, and a published Directus port are not part of this stack.
```

### File: `docs/decisions/0002-faculty-site-governance.md`

> **Path:** `docs/decisions/0002-faculty-site-governance.md` | **Size:** 3,216 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
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
```

### File: `docs/decisions/0003-cache-media-search.md`

> **Path:** `docs/decisions/0003-cache-media-search.md` | **Size:** 2,045 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
# 0003 — Cache revalidation, media transforms, and server-side search

**Status:** Accepted  
**Date:** 2026-10-17

## Context

Published Directus content should update without a separate cache service, an image CDN, or a search engine. The faculty site is a single Next.js app and a local Directus instance. Redis and Elasticsearch are not justified.

## Decision

1. **Cache.** Public Directus reads use `fetch` with a one-hour `revalidate` and the tags `directus` plus one of `organization-units`, `people`, `programs`, `news`, `events`, `services`, or `pages`. `POST /api/revalidate` expires a tag when the JSON body is `{ "tag": "<tag>" }` and the header `x-revalidate-secret` matches `REVALIDATE_SECRET`. The route fails closed when the secret is missing. Setup steps are in `docs/operations/cache-revalidation.md`.
2. **Media.** `getAssetUrl` returns a same-origin `/assets/:id?preset=` path and never includes `DIRECTUS_URL` or the read token. `web/app/assets/[id]/route.ts` fetches the file from Directus with `DIRECTUS_READ_TOKEN`. Presets are `avatar` (400px WebP, quality 80, `withoutEnlargement`), `card` (800px WebP, quality 80), `hero` (1600px WebP, quality 82), and `document` (original bytes, for PDFs).
3. **Search.** `searchSiteContent` trims the query with Zod, rejects queries shorter than 2 or longer than 80 characters, and queries `organization_units`, `people`, `programs`, and `news_articles` in parallel with Directus `_icontains` on the active locale’s fields only. Only `published` items are requested. English results drop items with an empty English name or title. `/[locale]/search` renders a labeled GET form and grouped text results. There are no item detail routes yet, so results are not links.

## Consequences

- A missed webhook still refreshes content within an hour.
- Editors need the Flow from the operations guide before publish is instant.
- The browser does not contact Directus for images.
- Search does not cover `service_items` or `events`, and it does not rank results.
```

### File: `docs/evaluation/.gitkeep`

> **Path:** `docs/evaluation/.gitkeep` | **Size:** 107 bytes | **Language:** text | **Category:** documentation | **Source:** `worktree`

```text
# Reserved for WCAG and browser-evaluation notes.
# playwright-report/ and test-results/ stay untracked.
```

### File: `docs/evaluation/prototype-evaluation.md`

> **Path:** `docs/evaluation/prototype-evaluation.md` | **Size:** 5,953 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
# Prototype Technical Evaluation

## 1. Purpose

This document defines a structured process for evaluating an independently developed software prototype before deciding whether to reuse, adapt, migrate, or replace it.

The prototype is not part of this repository unless an explicit decision is made. No source code should be copied or merged during the initial evaluation.

## 2. Evaluation Rules

- Evaluate the prototype based on observable evidence, not appearance or assumptions.
- Do not assume that a feature is functional merely because it appears in the user interface.
- Do not expose secrets, credentials, real patient data, or other sensitive information to AI tools.
- Do not run unknown code on a production system or a machine containing sensitive data.
- Record missing information as unknown rather than guessing.
- Do not choose a technology stack solely because the prototype already uses it.
- Keep the evaluation report separate from the prototype source code.

## 3. Information to Collect

### 3.1 Product and Requirements

- Intended users and their primary tasks.
- Features currently implemented.
- Features demonstrated only through mock data or static interfaces.
- Known limitations and unfinished functionality.
- Intended first-release scope.
- Available requirements, designs, and acceptance criteria.

### 3.2 Technical Structure

- Programming languages and frameworks.
- Repository structure and application entry points.
- Frontend and backend architecture.
- Database and data model, if present.
- External services and integrations.
- Dependency manifests and lockfiles.
- Configuration and environment-variable requirements.
- Build, test, and deployment instructions.

### 3.3 Operational Status

- Can the application be installed and started from a clean environment?
- Does the documented build process succeed?
- Are the primary user flows functional?
- Are errors visible and diagnosable?
- Are setup instructions reproducible?
- Are backup, recovery, and deployment procedures documented, if applicable?

### 3.4 Code Quality and Maintainability

- Separation of responsibilities.
- Duplication and unnecessary complexity.
- Naming, consistency, and readability.
- Error handling and input validation.
- Test coverage and quality.
- Documentation quality.
- Presence of abandoned, placeholder, or incomplete code.

### 3.5 Security and Privacy

- Authentication and authorization, where applicable.
- Secret and credential handling.
- Input validation and output encoding.
- Dependency and configuration risks.
- Logging of sensitive information.
- Data access boundaries and permissions.
- Use of synthetic versus real personal or clinical data.

Do not claim that an application is secure merely because no obvious issue was found. A full security assessment may require specialist review.

### 3.6 User Interface and Accessibility

- Responsive behavior across screen sizes.
- Accessibility and keyboard navigation.
- Persian and right-to-left (RTL) support, if required.
- Loading, empty, error, and success states.
- Consistency and usability of navigation.
- Search engine optimization requirements for public-facing websites.

## 4. Evaluation Method

For each relevant criterion, record one status:

- **Pass:** Supported by observable evidence.
- **Partial:** Implemented incompletely or with limitations.
- **Fail:** A demonstrated requirement is not met.
- **Unknown:** Insufficient evidence to make a determination.
- **Not applicable:** The criterion does not apply to the prototype's intended scope.

Record the evidence and any follow-up action for every significant finding.

## 5. Findings Register

Use the following fields for each finding:

| Field | Description |
|---|---|
| ID | Unique finding identifier |
| Area | Product, architecture, quality, security, operations, or UI |
| Finding | Concise description of the observed condition |
| Evidence | File, test result, reproducible behavior, or documented limitation |
| Severity | Critical, High, Medium, or Low |
| Confidence | High, Medium, or Low |
| Recommended action | Fix, investigate, retain, replace, or defer |
| Effort | Rough estimate after sufficient inspection |

Severity must reflect actual impact and plausible risk. Do not classify an unverified concern as a confirmed vulnerability.

## 6. Decision Framework

After the evaluation, select one of the following outcomes:

1. **Reuse:** The prototype meets the relevant requirements and can be adopted with acceptable risk.
2. **Adapt:** The existing implementation is suitable after bounded modifications.
3. **Migrate selectively:** Specific components or ideas are useful, but the codebase should not be adopted as a whole.
4. **Rewrite:** The implementation is unsuitable for the intended product, and replacement is justified by documented evidence.
5. **Defer:** There is insufficient evidence to make a responsible decision.

The decision must consider functional suitability, maintainability, security, operational reproducibility, migration cost, and future requirements.

## 7. Required Deliverables

The evaluation is complete when the following outputs are available:

- A concise description of the prototype and its actual capabilities.
- A repository and dependency overview.
- A reproducible build or execution result, if feasible.
- A findings register with evidence and severity.
- A list of unknowns and unresolved risks.
- A recommendation with explicit reasoning.
- An estimated effort and risk summary for the recommended path.

## 8. Scope Limitations

This document defines the evaluation process; it does not assert that any prototype has already been inspected, tested, or approved.

No production deployment, code migration, or architectural commitment is authorized by this evaluation document alone.
```

### File: `docs/Faculty of Veterinary Medicine website architecture-v3.0 .md`

> **Path:** `docs/Faculty of Veterinary Medicine website architecture-v3.0 .md` | **Size:** 44,645 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
# سند جامع و نهایی معماری وب‌سایت دانشکده دامپزشکی (مقیاس‌پذیر به سطح دانشگاه)

**نسخه:** ۳.۰ (نهایی، یکپارچه و پیراسته)  
**تاریخ به‌روزرسانی:** ۲۵ مهر ۱۴۰۵ (۱۷ اکتبر ۲۰۲۶)  
**تیم هدف:** تیم توسعه ۳ نفره با بهره‌گیری ساختاریافته از **Cursor**  
**محدوده استقرار:** وب‌سایت رسمی، اطلاع‌رسانی و آکادمیک دانشکده دامپزشکی دانشگاه آزاد اسلامی واحد تبریز (با قابلیت ارتقای طبیعی ساختار درختی به سطح کل دانشگاه)

---

## ۱. خلاصه اجرایی و اصول غیرقابل‌مذاکره معماری

این سند، مرجع قطعی تصمیمات فنی، مدل داده، استانداردها، امنیت و استقرار وب‌سایت دانشکده دامپزشکی است. هدف این معماری، تحویل یک وب‌سایت آکادمیک در تراز استانداردهای بین‌المللی، کاملاً پایدار در شرایط شبکه داخلی ایران و با کمترین بار نگهداری عملیاتی برای یک تیم کوچک ۳ نفره است.

### ۱.۱. تصمیم‌های کلیدی تثبیت‌شده
1. **معماری Modular Monolith (تک‌سنگی ماژولار):** پرهیز کامل از Microservices، Kubernetes، صف‌های پیام (Message Queues)، Redis و سرویس‌های تحلیلی یا جستجوی خارجی در فاز نخست.
2. **حذف انتزاعات زودهنگام (Purge of Health Software Factory Bloat):** تمام پیچیدگی‌های مربوط به «کارخانه نرم‌افزاری سلامت چندمستأجره»، کلینیک‌های خصوصی، داروخانه‌ها، بیمارستان‌ها و پکیج‌بندی‌های سنگین Monorepo کنار گذاشته شده‌اند تا تمرکز تیم ۱۰۰٪ بر کیفیت وب‌سایت دانشگاهی باشد.
3. **مرز قاطع محصول (سطح ریسک A — وب‌سایت عمومی و اطلاع‌رسانی):** این سامانه صرفاً یک وب‌سایت عمومی، آموزشی و پژوهشی است. قابلیت‌های عملیاتی و بالینی سطح B و C (شامل پرونده الکترونیک دامپزشکی VHIS/HIS، نوبت‌دهی آنلاین، پورتال ورود مراجعین و درگاه پرداخت) خارج از دامنه نسخه نخست هستند.
4. **محتوا داده ساختاریافته است، نه چیدمان صفحه (No Page Builder):** سامانه مدیریت محتوا (Directus) صرفاً فیلدهای داده ساختاریافته را مدیریت می‌کند و طراحی و چیدمان بصری منحصراً در کدهای Next.js انجام می‌شود تا یکپارچگی بصری صفحات حفظ شود.
5. **ابزار توسعه هوش مصنوعی:** محیط توسعه، بازبینی و تولید کد به‌طور انحصاری **Cursor** است که تحت قوانین مسیرمحور (`.cursor/rules/*.mdc`)، مهارت‌های تکرارپذیر (`.cursor/skills/*/SKILL.md`) و فایل مرجع `AGENTS.md` هدایت می‌شود.
6. **عملیات قابل بازگشت (Reversible Operations):** هر تغییر کد و تغییر اسکیمای دیتابیس باید در Git ثبت شود، استقرارها دارای تگ نسخه مشخص باشند و بازیابی نسخه پشتیبان پیش از انتشار نهایی روی محیط آزمایشی (Staging) تست شود.

---

## ۲. استانداردهای اجباری فنی، کیفی و دسترس‌پذیری

| حوزه | استاندارد مصوب | سطح الزام | معیار پذیرش فنی و عملیاتی |
| :--- | :--- | :---: | :--- |
| **دسترس‌پذیری (Accessibility)** | **WCAG 2.2 Level AA** | اجباری | وجود لینک پرش به محتوا (`Skip to main content`)، ناوبری کامل صفحه‌کلید، فوکوس آشکار (`focus-visible`)، حداقل ابعاد هدف لمسی/کلیکی `24x24px`، نسبت کنتراست حداقل `4.5:1` برای متن عادی و `3:1` برای متن بزرگ، و پاس شدن تست خودکار `axe` در Playwright. |
| **عملکرد (Performance)** | **Core Web Vitals** | اجباری | شاخص‌های `LCP ≤ 2.5s`، `INP ≤ 200ms`، `CLS ≤ 0.1` و کسب امتیاز Lighthouse Performance حداقل ۹۰ در موبایل و دسکتاپ. |
| **سئوی معنایی و آکادمیک** | **Schema.org JSON-LD** + Technical SEO | اجباری | تولید خودکار JSON-LD برای `CollegeOrUniversity`، `EducationalOrganization`، `Course`، `Person` (همراه با لینک‌های Google Scholar و ORCID در فیلد `sameAs`)، `BreadcrumbList`، `Event` و `FAQPage` به همراه `sitemap.xml` پویا، `robots.txt`، تگ‌های Canonical و `hreflang`. |
| **پشتیبانی دو زبانه (i18n)** | **Bilingual RTL/LTR** (`/fa` و `/en`) | اجباری | مسیرهای URL مستقل، تنظیم پویا برای `lang` و `dir` (`rtl` و `ltr`)، استفاده از کلاس‌های منطقی Tailwind (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `text-end`) و آینه‌سازی آیکون‌های جهت‌دار در فارسی. |
| **استقلال شبکه (ایران)** | **Zero External SPOF** | اجباری | استقرار خودمیزبان (Self-hosted) روی سرور مستقل؛ عدم وابستگی زمان اجرا یا بیلد به Google Fonts CDN، کپچاهای تحریمی یا سرویس‌های ابری مسدودشونده در ایران. |
| **طراحی واکنش‌گرا** | **Mobile-First Responsive** | اجباری | نمایش و کارکرد بی‌نقص تمام جداول، منوها، کارت‌های اساتید و فرم‌ها از عرض موبایل (`320px`) تا نمایشگرهای عریض دسکتاپ. |
| **امنیت کاربردی** | **OWASP ASVS (سطح پایه)** + TLS 1.3 | اجباری | دسترسی فقط‌خواندنی سرور فرانت‌اند به CMS، جداسازی دامنه ادمین، اعتبارسنجی ورودی‌ها در مرز سرور و حذف متادیتای مکان (EXIF) از تصاویر آپلودی. |

---

## ۳. معماری کلان و پشته فناوری (Tech Stack)

وب‌سایت از یک مخزن کد واحد و دو مرز امنیتی مجزا تشکیل می‌شود: **مرز عمومی** (بازدیدکنندگان سایت که فقط با Next.js در ارتباط‌اند) و **مرز مدیریتی** (ویرایشگران محتوا که از مسیر محدودشده به پنل Directus دسترسی دارند).

### ۳.۱. اجزای پشته فنی
* **فرانت‌اند (Frontend):** `Next.js 16.4+` (App Router) + `React 19.3+` + `TypeScript 5` (در حالت `strict`) + `Tailwind CSS v4` + الگوی کامپوننت‌های دسترس‌پذیر و سبک (بر پایه معماری `shadcn/ui` سازگار با RTL).
* **سامانه مدیریت محتوا (CMS):** `Directus 12.5` (Self-hosted via Docker) — مدیریت مدل داده رابطه‌ای، ترجمه‌ها، فایل‌ها، تاریخچه تغییرات (`Revisions`) و ارسال Webhook هنگام انتشار.
* **پایگاه داده (Database):** `PostgreSQL 17` (Self-hosted via Docker).
* **زیرساخت و استقرار (Infrastructure):** `Docker Compose` روی یک سرور مستقل (VPS داخل ایران یا دیتاسنتر مورد تأیید دانشگاه) به همراه پروکسی معکوس (HTTPS) و پشتیبان‌گیری خودکار روزانه به فضای ذخیره‌سازی خارج از سرور اصلی.
  * *نکته مهم معماری شبکه ایران:* استقرار اصلی نباید به Vercel یا Cloudflare Pages به‌عنوان تنها نقطه ورودی (Single Point of Failure) وابسته باشد تا پایداری سایت رسمی دانشکده در شبکه ملی اطلاعات و اینترنت ایران ۱۰۰٪ تضمین شود.

### ۳.۲. توپولوژی سرویس‌ها در `docker-compose.yml`
| سرویس | ایمیج / فناوری | مسئولیت اصلی | دسترسی شبکه و داده |
| :--- | :--- | :--- | :--- |
| **`proxy`** | Nginx / Caddy | مدیریت گواهی TLS/HTTPS، هدایت ترافیک دامنه عمومی به `web` و زیر دامنه مدیریتی به `cms` | پورت‌های `80` و `443` عمومی؛ اعمال محدودیت IP/VPN برای دسترسی به دامنه `cms` |
| **`web`** | Next.js Production | رندر ایستا (SSG/ISR) و سروری صفحات عمومی، اجرای جستجو، تولید Sitemap و JSON-LD | بدون ذخیره داده دائمی؛ ارتباط داخلی با `cms` از طریق توکن فقط‌خواندنی سمت سرور |
| **`cms`** | `directus/directus:12.5.0` | پنل مدیریت محتوا، REST API، پردازش تصویر و فراخوانی Webhook بازسازی کش | متصل به Volume فایل‌ها (`./cms/uploads`) و افزونه‌ها (`./cms/extensions`) |
| **`database`** | `postgres:17` | ذخیره‌سازی داده‌های ساختاریافته، جداول ترجمه و لاگ تغییرات | کاملاً ایزوله در شبکه داخلی؛ متصل به Volume دیتابیس (`./cms/data/database`) |
| **`backup`** | Cron + `pg_dump` + `tar` | تهیه نسخه پشتیبان روزانه از دیتابیس و پوشه آپلودها | ارسال خروجی فشرده و رمزنگاری‌شده به فضای ذخیره‌سازی خارج از سرور اصلی |

---

## ۴. تصمیم‌های باز محصولی (Open Decisions)

این دو مورد به‌طور آگاهانه به‌عنوان **«تصمیم باز»** ثبت شده‌اند تا پیش از قفل شدن نهایی اسکیمای دیتابیس و طراحی صفحات، توسط تیم و دانشکده دقیق‌تر شوند:

### ۴.۱. تصمیم باز شماره ۱: تعداد و محتوای دقیق ماژول‌های دامنه
* **وضعیت پایه فعلی:** در حال حاضر ۵ حوزه اصلی شامل **سازمان** (`organization_units`)، **افراد و اعضای هیئت علمی** (`people` + `academic_profiles`)، **برنامه‌های آموزشی** (`programs`)، **اخبار و رویدادها** (`news_articles` + `events`) و **معرفی خدمات بیمارستان آموزشی** (`service_items`) در نظر گرفته شده است.
* **موارد در انتظار تصمیم‌گیری نهایی شما:**
  1. آیا بخش‌های **«آزمایشگاه‌ها و تجهیزات تخصصی»**، **«مخزن فرم‌ها، آیین‌نامه‌ها و تقویم آموزشی (Downloads & Regulations)»** و **«راهنمای پذیرش و متقاضیان»** به‌عنوان ماژول‌ها/مجموعه‌های مستقل ساخته شوند یا در دل ماژول‌های `organization_units`، `programs` و `pages` قرار گیرند؟
  2. تعیین دقیق فیلدهای جزئی هر یک از این ماژول‌ها (به‌جز ماژول افراد و رتبه علمی که در بخش ۵.۲ کاملاً نهایی شده است).

### ۴.۲. تصمیم باز شماره ۲: طراحی مسیرهای مخاطب (Audience Journeys)
* **مسئله:** ساختار ناوبری و صفحه اصلی سایت نباید صرفاً کپیِ چارت اداری دانشکده باشد، بلکه باید بر اساس نیاز واقعی کاربران طراحی شود.
* **موارد در انتظار تصمیم‌گیری نهایی شما:** تعیین مسیرهای دسترسی سریع، کارت‌های راهنما و معماری منوها برای ۴ گروه مخاطب اصلی:
  1. **متقاضیان و داوطلبان تحصیل (Prospective Students):** آشنایی با دکترای عمومی دامپزشکی (DVM)، دوره‌های تخصصی، آزمایشگاه‌ها، شرایط پذیرش و امکانات دانشکده.
  2. **دانشجویان فعلی (Current Students):** دسترسی سریع به اطلاعیه‌های آموزشی، چارت درسی، صفحات اساتید، فرم‌های کارورزی/پایان‌نامه و تقویم آموزشی.
  3. **پژوهشگران و اعضای هیئت علمی (Researchers & Faculty):** دسترسی به پروفایل علمی و انتشارات اساتید، آزمایشگاه‌های تحقیقاتی و همکاری‌های علمی.
  4. **مراجعین بیمارستان آموزشی و کلینیک‌ها (Hospital Visitors):** مشاهده خدمات درمانی (دام کوچک، دام بزرگ، طیور، تشخیص آزمایشگاهی)، ساعات کاری، آدرس روی نقشه و شماره‌های تماس مستقیم بدون ورود به نوبت‌دهی آنلاین.

---

## ۵. مدل داده در Directus و ساختار هویت آکادمیک ایران

طبق اصل تفکیک وظایف در مدل داده، **هویت پایه فرد** (`people`)، **پروفایل علمی و مرتبه دانشگاهی** (`academic_profiles`) و **سمت‌های اجرایی در واحدها** (`role_assignments`) در سه مجموعه مستقل اما مرتبط مدل‌سازی می‌شوند. این طراحی اجازه می‌دهد یک استاد هم‌زمان عضو هیئت علمی یک گروه آموزشی باشد و یک یا چند سمت اجرایی (مانند ریاست دانشکده، مدیریت گروه یا سرپرستی آزمایشگاه) داشته باشد.

### ۵.۱. فهرست مجموعه‌های اصلی (Core Collections)
| مجموعه (Collection) | کاربرد | فیلدهای کلیدی پایه |
| :--- | :--- | :--- |
| **`organization_units`** | دانشکده، معاونت، گروه آموزشی، آزمایشگاه، بیمارستان/کلینیک | `id`, `status`, `slug`, `unit_type` (`faculty`, `deputy`, `department`, `laboratory`, `clinic`), `parent_id` (رابطه درختی با واحد بالاتر), `sort_order`, `phone`, `email`, `location_fa`, `location_en`, ترجمه‌های نام و معرفی |
| **`people`** | هویت پایه اعضای هیئت علمی و کادر کلیدی | تشریح کامل در بخش ۵.۲ |
| **`academic_profiles`** | رتبه علمی، تحصیلات، شناسه‌های علم‌سنجی و رزومه | تشریح کامل در بخش ۵.۲ |
| **`role_assignments`** | سمت‌های اجرایی و انتصاب افراد در واحدهای سازمانی | تشریح کامل در بخش ۵.۲ |
| **`programs`** | مقاطع و رشته‌های تحصیلی (دکترای عمومی، ارشد، PhD، دستیاری) | `id`, `status`, `slug`, `degree_level` (`dvm`, `msc`, `phd`, `dvsc`), `department_id`, `curriculum_pdf`, ترجمه‌های عنوان، طول دوره، شرایط ورود و معرفی دروس |
| **`news_articles`** | اخبار و اطلاعیه‌های رسمی دانشکده | `id`, `status`, `slug`, `category` (`news`, `announcement`), `published_at`, `cover_image`, `unit_id`, ترجمه‌های تیتر، خلاصه و متن کامل |
| **`events`** | رویدادها، کارگاه‌ها، جلسات دفاع و همایش‌ها | `id`, `status`, `slug`, `start_at`, `end_at`, `organizer_unit_id`, `cover_image`, ترجمه‌های عنوان، مکان برگزاری و شرح رویداد |
| **`service_items`** | خدمات بیمارستان آموزشی و آزمایشگاه‌های تشخیصی | `id`, `status`, `slug`, `unit_id`, `working_hours_fa`, `working_hours_en`, `contact_phone`, ترجمه‌های عنوان، شرایط مراجعه و شرح خدمت |
| **`pages`** | صفحات محتوایی ثابت (درباره دانشکده، تاریخچه، تماس با ما) | `id`, `status`, `slug`, `show_in_nav`, `sort_order`, ترجمه‌های عنوان، متادیتای سئو و بخش‌های محتوایی ساختاریافته |

---

### ۵.۲. مدل داده دقیق رتبه علمی و هویت آکادمیک (سازگار با نظام دانشگاهی ایران)

این مدل دقیقاً منطبق بر آیین‌نامه استخدامی و ارتقای مرتبه اعضای هیئت علمی در دانشگاه‌های ایران (وزارت علوم، وزارت بهداشت و دانشگاه آزاد اسلامی) و استانداردهای بین‌المللی علم‌سنجی طراحی شده است:

#### الف) مجموعه `people` (هویت پایه و اطلاعات ارتباطی عمومی)
* `id` (`uuid`, کلید اصلی)
* `status` (`"draft" | "published" | "archived"`)
* `slug` (`string`, یکتا و لاتین — مثال: `dr-reza-mohammadi`)
* `avatar` (`uuid` -> `directus_files`، عکس پرسنلی رسمی استاد)
* `academic_title_prefix_fa` (`"دکتر" | "مهندس" | "استاد"`) / `academic_title_prefix_en` (`"Dr." | "Prof."`)
* `first_name_fa` (`string`, الزامی)، `last_name_fa` (`string`, الزامی)، `full_name_fa` (`string`, الزامی)
* `first_name_en` (`string`, اختیاری)، `last_name_en` (`string`, اختیاری)، `full_name_en` (`string`, اختیاری — وجود مقدار در `full_name_en` شرط فعال بودن پروفایل انگلیسی استاد است)
* `public_email` (`string`, ایمیل رسمی دانشگاهی — مثال: `user@iaut.ac.ir`)
* `office_phone` (`string`, شماره تلفن و داخلی دفتر کار در دانشکده)
* `office_location_fa` / `office_location_en` (`string`, نشانی اتاق یا بخش در دانشکده)
* `office_hours_fa` / `office_hours_en` (`string`, ساعات حضور و پاسخگویی به دانشجویان)

#### ب) مجموعه `academic_profiles` (رتبه علمی، تحصیلات و شناسه‌های علم‌سنجی — رابطه `1:1` با `people`)
* `id` (`uuid`, کلید اصلی)
* `person_id` (`uuid`, کلید خارجی یکتا به `people.id`)
* **`academic_rank` (مرتبه علمی رسمی در دانشگاه‌های ایران — Enum):**
  | کلید دیتابیس (`Enum`) | عنوان رسمی فارسی (`fa`) | معادل رسمی بین‌المللی (`en`) |
  | :--- | :--- | :--- |
  | `instructor` | **مربی** | Instructor / Lecturer |
  | `assistant_professor` | **استادیار** | Assistant Professor |
  | `associate_professor` | **دانشیار** | Associate Professor |
  | `full_professor` | **استاد (استاد تمام)** | Professor (Full Professor) |
  | `distinguished_professor` | **استاد ممتاز** | Distinguished Professor |
  | `clinical_instructor` | **مدرس بالینی / کارشناس ارشد آموزشی** | Clinical Instructor |
* **`faculty_membership_type` (نوع عضویت در دانشگاه — Enum):**
  | کلید دیتابیس (`Enum`) | عنوان فارسی (`fa`) | معادل انگلیسی (`en`) |
  | :--- | :--- | :--- |
  | `official_tenured` | **هیئت علمی تمام‌وقت (رسمی قطعی / آزمایشی)** | Full-Time Tenured / Tenure-Track Faculty |
  | `contractual` | **هیئت علمی پیمانی / طرح هیئت علمی** | Full-Time Contractual Faculty |
  | `adjunct` | **استاد مدعو / وابسته / حق‌التدریس** | Adjunct / Visiting Lecturer |
  | `emeritus` | **استاد پیشکسوت / بازنشسته** | Professor Emeritus |
* **`highest_degree` (بالاترین مقطع تحصیلی — Enum):**
  * `dvm`: دکترای حرفه‌ای دامپزشکی (D.V.M.)
  * `phd`: دکترای تخصصی (Ph.D.)
  * `dvsc`: دکترای تخصصی بالینی دامپزشکی / دستیاری (D.V.Sc.)
  * `msc`: کارشناسی ارشد (M.Sc.)
* `primary_department_id` (`uuid`, کلید خارجی به `organization_units.id` — گروه آموزشی اصلی استاد؛ مانند: علوم پایه، پاتوبیولوژی، علوم درمانگاهی، بهداشت و کنترل کیفی مواد غذایی)
* `specialty_fa` / `specialty_en` (`string` — تخصص و گرایش علمی؛ مثال: *«جراحی دامپزشکی»* / *«Veterinary Surgery»*)
* `bio_fa` / `bio_en` (`text` — زندگینامه علمی و خلاصه فعالیت‌های آموزشی و پژوهشی)
* `research_interests_fa` / `research_interests_en` (`json` — آرایه‌ای از حوزه‌های پژوهشی مورد علاقه)
* `education_history_fa` / `education_history_en` (`json` — فهرست مقاطع تحصیلی شامل مقطع، رشته، نام دانشگاه، کشور و سال فارغ‌التحصیلی)
* `courses_taught_fa` / `courses_taught_en` (`json` — فهرست دروس نظری و عملی تدریس‌شده)
* `selected_publications` (`json` — فهرست مقالات و کتب برگزیده استاد برای نمایش سریع در پروفایل)
* **شناسه‌های علم‌سنجی، صنفی و پیوندهای رسمی (Academic & Scientometric Identifiers):**
  * `veterinary_council_number` (`string`, اختیاری — شماره نظام دامپزشکی جمهوری اسلامی ایران برای اساتید بالینی)
  * `orcid_id` (`string`, با الگوی اعتبارسنجی `^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$` — مثال: `0000-0002-1825-0097`)
  * `google_scholar_url` (`string`, پیوند کامل به پروفایل Google Scholar استاد)
  * `scopus_author_id` (`string`, شناسه نویسنده در پایگاه Scopus)
  * `wos_researcher_id` (`string`, شناسه Web of Science / ResearcherID)
  * `researchgate_url` (`string`, پیوند به پروفایل ResearchGate)
  * `institutional_cv_url` (`string`, پیوند به صفحه استاد در سامانه علم‌سنجی دانشگاه آزاد یا پژوهشیار)
  * `cv_file` (`uuid` -> `directus_files`, فایل PDF رزومه کامل علمی استاد برای دانلود)

#### ج) مجموعه `role_assignments` (سمت‌های اجرایی و انتصاب در واحدها — رابطه `M:N` بین `people` و `organization_units`)
* `id` (`uuid`, کلید اصلی)
* `status` (`"draft" | "published" | "archived"`)
* `person_id` (`uuid`, کلید خارجی به `people.id`)
* `unit_id` (`uuid`, کلید خارجی به `organization_units.id`)
* `role_category` (`Enum`):
  * `faculty_dean`: رئیس دانشکده
  * `vice_dean`: معاون دانشکده (آموزشی و تحصیلات تکمیلی، پژوهش و فناوری، دانشجویی و فرهنگی، دامپزشکی/بیمارستان)
  * `department_head`: مدیر گروه آموزشی
  * `hospital_director`: رئیس بیمارستان آموزشی / کلینیک تخصصی
  * `lab_supervisor`: سرپرست آزمایشگاه تخصصی
  * `faculty_member`: عضو هیئت علمی گروه
  * `staff`: کارشناس مسئول / کادر اداری و آزمایشگاهی
* `role_title_fa` / `role_title_en` (`string` — عنوان دقیق نمایشی سمت؛ مثال: *«مدیر گروه علوم درمانگاهی»* / *«Head of Department of Clinical Sciences»*)
* `is_primary_role` (`boolean` — مشخص می‌کند آیا این سمت به‌عنوان عنوان اصلی زیر نام فرد در کارت‌های فهرست اساتید نمایش داده شود یا خیر)
* `sort_order` (`integer` — عدد ترتیب نمایش برای مرتب‌سازی سلسله‌مراتبی در صفحه هر واحد)

---

### ۵.۳. چرخه حیات محتوا و نقش‌های دسترسی (ساده‌سازی‌شده و بدون بروکراسی زائد)

متناسب با واقعیت اجرایی دانشکده‌ها در ایران، بروکراسی چندلایه بازبین‌های هر واحد و فیلدهای انقضای خودکار حذف شده‌اند:

* **وضعیت‌های انتشار (۳ وضعیت استاندارد):**
  1. `draft`: پیش‌نویس در حال نگارش (در وب‌سایت عمومی نمایش داده نمی‌شود).
  2. `published`: منتشرشده و قابل مشاهده در وب‌سایت عمومی.
  3. `archived`: بایگانی‌شده (حذف منطقی از سایت عمومی بدون پاک شدن سابقه از پایگاه داده).
* **نقش‌های دسترسی در Directus (۳ نقش):**
  1. **`Site Reader` (توکن سرور فرانت‌اند):** توکن استاتیک فقط‌خواندنی (`READ`) در متغیر محیطی سرور Next.js که تنها مجاز به خواندن رکوردهای دارای `status = "published"` است. نقش `Public` بدون توکن در Directus هیچ دسترسی‌ای ندارد.
  2. **`Content Editor` (ویرایشگر محتوا — کارشناس دانشکده):** دسترسی ایجاد، ویرایش، آپلود فایل و تغییر وضعیت رکوردها به `published` یا `archived` در مجموعه‌های محتوایی.
  3. **`System Admin` (مدیر فنی سیستم — حداکثر ۲ نفر):** دسترسی کامل به تنظیمات اسکیمای دیتابیس، نقش‌ها، متغیرها و پشتیبان‌گیری.

---

## ۶. معماری فرانت‌اند، دوزبانگی و سئوی معنایی

### ۶.۱. ساختار مسیریابی و تایپوگرافی محلی
| مسیر نمونه در Next.js App Router | محتوا | شیوه رندر | تگ کش برای بازسازی (Revalidation Tag) |
| :--- | :--- | :--- | :--- |
| `/fa` و `/en` | صفحه اصلی دانشکده | ایستا (SSG/ISR) | `directus`, `organization-units`, `news`, `events` |
| `/[locale]/departments/[slug]` | صفحه گروه آموزشی، آزمایشگاه یا واحد | ایستا (SSG/ISR) | `organization-units`, `people` |
| `/[locale]/people` و `/[locale]/people/[slug]` | فهرست و پروفایل علمی اعضای هیئت علمی | ایستا (SSG/ISR) | `people` |
| `/[locale]/programs/[slug]` | معرفی مقطع یا رشته تحصیلی | ایستا (SSG/ISR) | `programs` |
| `/[locale]/news` و `/[locale]/news/[slug]` | فهرست و متن کامل اخبار و اطلاعیه‌ها | ایستا با صفحه‌بندی | `news` |
| `/[locale]/events` و `/[locale]/events/[slug]` | تقویم و جزئیات رویدادها و کارگاه‌ها | ایستا (SSG/ISR) | `events` |
| `/[locale]/services/[slug]` | معرفی خدمات بیمارستان آموزشی و کلینیک‌ها | ایستا (SSG/ISR) | `services` |
| `/[locale]/search` | صفحه جستجوی سراسری سمت سرور | رندر سروری (SSR) | بدون کش دائمی (وابسته به پارامتر `?q=`) |

* **تایپوگرافی محلی مستقل از تحریم:** استفاده از `next/font/google` در کدها ممنوع است. فونت استاندارد **Vazirmatn** (نسخه Variable `.woff2`) به‌صورت محلی از پوشه `web/public/fonts/` بارگذاری می‌شود تا در صورت قطع ارتباط با سرورهای گوگل، بیلد و نمایش سایت دچار هیچ‌گونه اختلالی نشود.

### ۶.۲. منطق اصلاح‌شده در نبود ترجمه انگلیسی (جلوگیری از لینک شکسته و خطای ۴۰۴ ناگهانی)
1. **ممنوعیت اختلاط زبان:** هرگز متن فارسی به‌عنوان جایگزین (Fallback) در قالب انگلیسی (`/en/...`) رندر نمی‌شود.
2. **فیلتر در لیست‌های انگلیسی:** در صفحات فهرست، کارت‌ها، منوها و نتایج جستجوی نسخه انگلیسی (`/en/...`)، رکوردهایی که فیلد عنوان یا نام انگلیسی آن‌ها خالی است (`name_en` یا `title_en` برابر با `null` یا رشته خالی) در سطح توابع `web/lib/directus.ts` فیلتر می‌شوند تا هیچ لینک شکسته‌ای در رابط کاربری انگلیسی تولید نشود.
3. **رفتار در بازدید مستقیم یا تغییر زبان (`TranslationUnavailable`):** اگر کاربری روی دکمه تغییر زبان کلیک کند یا مستقیماً آدرس انگلیسی یک محتوا (مانند `/en/news/[slug]`) را باز کند که در سیستم وجود دارد و `published` است اما هنوز ترجمه انگلیسی ندارد:
   * به جای پرتاب کردن کاربر به صفحه خطای ۴۰۴ خام، کامپوننت راهنمای `TranslationUnavailable` همراه با متاتگ `robots: { index: false, follow: true }` رندر می‌شود.
   * این کامپوننت به زبان انگلیسی توضیح می‌دهد که این صفحه در حال حاضر فقط به زبان فارسی در دسترس است و دو دکمه استاندارد **«مشاهده نسخه فارسی / View in Persian (`/fa/...`)»** و **«بازگشت به صفحه اصلی انگلیسی / Back to English Home (`/en`)»** را نمایش می‌دهد.
4. **خطای ۴۰۴ واقعی (`notFound()`):** تنها زمانی فراخوانی می‌شود که `slug` درخواستی اصلاً در دیتابیس وجود نداشته باشد یا وضعیت آن `published` نباشد.

### ۶.۳. سئوی معنایی آکادمیک (`Schema.org` JSON-LD)
ماژول `web/lib/schema-org.ts` در سمت سرور داده‌های ساختاریافته زیر را در تگ `<script type="application/ld+json">` تولید می‌کند:
* **`CollegeOrUniversity` و `EducationalOrganization`:** در صفحه اصلی و صفحات واحدهای سازمانی/گروه‌های آموزشی.
* **`Person`:** در صفحه پروفایل هر استاد؛ شامل نام، `jobTitle` (مرتبه علمی + سمت اجرایی)، `affiliation` (دانشکده دامپزشکی دانشگاه آزاد تبریز)، ایمیل، تصویر و آرایه `sameAs` حاوی لینک‌های معتبر **ORCID** (`https://orcid.org/...`)، **Google Scholar**، **Scopus** و **ResearchGate**.
* **`Course` / `EducationalOccupationalProgram`:** در صفحات مقاطع و رشته‌های تحصیلی.
* **`BreadcrumbList`، `Event` و `FAQPage`:** در مسیرهای ناوبری بالای صفحات، رویدادهای علمی و سوالات متداول پذیرش.

---

## ۷. سه راهکار بهینه عملیاتی: کش، رسانه و جستجو

### ۷.۱. استراتژی کش و بازسازی خودکار (Cache & Webhook Invalidation)
* **تگ‌گذاری در سطح مجموعه (Collection-Tag Revalidation):** تمام درخواست‌های `directusFetch` در `web/lib/directus.ts` دارای تگ عمومی `"directus"` و تگ اختصاصی همان مجموعه (`"organization-units"`, `"people"`, `"programs"`, `"news"`, `"events"`, `"services"`) به همراه زمان بازبینی چتر نجات (`revalidate: 3600` ثانیه / ۱ ساعت) هستند.
* **مسیر امن `/api/revalidate`:** یک Route Handler از نوع `POST` در `web/app/api/revalidate/route.ts` که هدر امنیتی `x-revalidate-secret` را با متغیر محیطی سرور `REVALIDATE_SECRET` تطبیق می‌دهد. با دریافت نام مجموعه تغییریافته از Webhook در Directus، دستور `revalidateTag(collection)` اجرا می‌شود تا صفحات مرتبط در لحظه و بدون نیاز به بیلد مجدد کل سایت به‌روزرسانی شوند.

### ۷.۲. استراتژی بهینه‌سازی رسانه‌ها و تصاویر (Media & Image Optimization)
* **محدودیت در مبدا (`docker-compose.yml`):** تنظیم متغیرهای بومی Directus شامل `FILES_MAX_UPLOAD_SIZE: "10MB"` و `FILES_MIME_TYPE_ALLOW_LIST: "image/jpeg,image/png,image/webp,application/pdf"` جهت جلوگیری از آپلود فایل‌های حجیم یا غیرمجاز توسط اپراتور محتوا.
* **تبدیل خودکار به WebP و حذف EXIF (`getAssetUrl`):** استفاده از موتور پردازش تصویر داخلی Directus (مبتنی بر `sharp`) از طریق تابع متمرکز `getAssetUrl(fileId, preset)` در `web/lib/directus.ts`:
  * `avatar`: عرض `400px`، فرمت `webp`، کیفیت `80`، بدون بزرگ‌نمایی (`withoutEnlargement=true`) — برای عکس اساتید.
  * `card`: عرض `800px`، فرمت `webp`، کیفیت `80` — برای کارت‌های اخبار، آزمایشگاه‌ها و رویدادها.
  * `hero`: عرض `1600px`، فرمت `webp`، کیفیت `82` — برای بنرهای صفحه اصلی و معرفی دانشکده.
  * `document`: لینک مستقیم دانلود فایل PDF — برای چارت درسی، آیین‌نامه‌ها و فایل رزومه اساتید.

### ۷.۳. موتور جستجوی موازی سمت سرور (Server-Side Search)
* بدون نیاز به نصب سرویس‌های سنگین خارجی (مانند Elasticsearch یا Meilisearch)، تابع `searchSiteContent(query, locale)` در `web/lib/directus.ts` عبارت جستجوشده را اعتبارسنجی و تمیزسازی می‌کند (حداقل ۲ و حداکثر ۸۰ کاراکتر).
* با استفاده از `Promise.all`، کوئری‌های موازی با فیلتر `status = "published"` و عملگر بومی `_icontains` در PostgreSQL/Directus روی مجموعه‌های اصلی (`people`, `organization_units`, `programs`, `news_articles`) در زبان فعلی اجرا شده و نتایج به تفکیک دسته‌بندی در صفحه سروری و دسترس‌پذیر `/[locale]/search` رندر می‌شوند.

---

## ۸. امنیت، حریم خصوصی و حفاظت از فرم‌ها

1. **ممنوعیت مطلق داده بالینی و بیمار:** هیچ‌گونه اطلاعات واقعی بیمار، دام یا پرونده کلینیکی در دیتابیس، کدها، تست‌ها یا پرامپت‌های هوش مصنوعی قرار نمی‌گیرد؛ تمام داده‌های محیط توسعه و تست ساختگی (Synthetic) هستند.
2. **محافظت از Secretها (`server-only`):** فایل `web/lib/directus.ts` با `import "server-only"` محافظت می‌شود. متغیرهای `DIRECTUS_URL`، `DIRECTUS_READ_TOKEN` و `REVALIDATE_SECRET` صرفاً در محیط سرور قرار دارند و هرگز با پیشوند `NEXT_PUBLIC_` به مرورگر ارسال نمی‌شوند.
3. **فرم تماس مقاوم در برابر اسپم (بدون کپچای تحریمی):** فرم تماس در یک Route Handler سمت سرور اعتبارسنجی می‌شود و به جای استفاده از کپچاهای خارجی که در ایران مسدود یا کند می‌شوند، از ترکیب **فیلد مخفی Honeypot** + **محدودیت نرخ درخواست (Rate Limiting بر اساس IP)** استفاده می‌کند.
4. **نسخه‌بندی اسکیمای دیتابیس در Git:** هرگونه تغییر در جداول Directus در محیط توسعه باید با دستور `npx directus schema snapshot ./cms/schema/snapshot.yaml` استخراج شده و فایل اسنپ‌شات آن همراه با کدهای فرانت‌اند در Git ثبت (Commit) شود. پوشه‌های داده محلی (`cms/data/` و `cms/uploads/`) هرگز وارد Git نمی‌شوند.

---

## ۹. گردش‌کار مهندسی با Cursor، تست، فازبندی و ریسک‌ها

### ۹.۱. ساختار فایل‌های راهبری هوش مصنوعی در مخزن
* **`AGENTS.md`:** قوانین کلان مخزن، مرز تغییرات، اولویت امنیت و صحت، و چارچوب گزارش‌دهی پایانی.
* **`.cursor/rules/directus-data.mdc`:** الزام استفاده انحصاری از `web/lib/directus.ts`، فیلتر `status = "published"`، ممنوعیت هاردکد کردن داده‌های سازمانی و رعایت ساختار رتبه‌های علمی و Schema.org.
* **`.cursor/rules/nextjs-rtl-i18n.mdc`:** قواعد `/fa` و `/en`، منطق `TranslationUnavailable` در نبود ترجمه، استفاده از ویژگی‌های منطقی CSS/Tailwind، فونت محلی `Vazirmatn` و الزامات **WCAG 2.2 AA**.
* **`.cursor/rules/security-privacy.mdc`:** ممنوعیت افشای توکن‌ها در کلاینت، اعتبارسنجی ورودی‌ها و استفاده از داده‌های ساختگی.
* **`.cursor/skills/`:** شامل ۳ دستورالعمل گام‌به‌گام `directus-schema-change`، `design-qa-rtl` و `release-readiness`.
* **`export_project.py`:** ابزار تجمیع خودکار کدها، مستندات، وضعیت شاخه‌های Git و فهرست متادیتای محیط محلی در فایل `project_code_export.md` برای ممیزی و بازبینی معماری.

### ۹.۲. خط لوله کیفیت و تست‌های E2E حیاتی
| لایه بررسی | ابزار | زمان اجرا |
| :--- | :--- | :--- |
| **سبک کد و تایپ** | ESLint 9 + TypeScript (`tsc --noEmit` در حالت `strict`) | پیش از هر Commit و در هر Pull Request |
| **بیلد تولیدی** | `npm run build` در پوشه `web/` | پیش از هر ادغام در `main` |
| **اسکیمای Directus** | بررسی تطابق Snapshot در `cms/schema/` و تست اعمال روی دیتابیس آزمایشی | در هر تغییر مدل داده |
| **دسترس‌پذیری و E2E** | Playwright + `@axe-core/playwright` (بررسی WCAG 2.2 AA) | پیش از انتشار نسخه |

**سناریوهای الزامی تست E2E پیش از تحویل:**
1. بارگذاری صفحه اصلی `/fa` (RTL) و `/en` (LTR) در ابعاد موبایل و دسکتاپ بدون خطای کنسول یا شکستگی چیدمان.
2. باز شدن صفحه گروه آموزشی، فیلتر اعضای هیئت علمی بر اساس مرتبه علمی و مشاهده پروفایل استاد همراه با تگ JSON-LD معتبر.
3. جستجوی نام یک استاد یا خبر در `/fa/search` و دریافت نتایج صحیح.
4. بررسی رفتار تغییر زبان روی محتوای دارای ترجمه و محتوای فاقد ترجمه انگلیسی (نمایش صحیح `TranslationUnavailable` بدون تولید لینک شکسته در لیست‌ها).
5. ارسال فرم تماس آزمایشی و بررسی عملکرد محافظ اسپم (Honeypot / Rate Limit).
6. اطمینان از مسدود بودن دسترسی بدون توکن در Directus و ظاهر شدن خبر پس از انتشار و فراخوانی Webhook.

### ۹.۳. نقشه اجرای فازبندی‌شده و گیت‌های تصمیم (Execution Gates)
1. **فاز صفر (تثبیت دامنه و زیرساخت پایه — انجام‌شده):** یکپارچه‌سازی مخزن در `main`، راه‌اندازی محلی Next.js + Directus + PostgreSQL، ثبت قواعد Cursor و تدوین سند معماری نهایی. *(گیت G0: تأیید نهایی ۲ تصمیم باز بخش ۴).*
2. **فاز اول (مدل‌سازی دیتابیس و ارزیابی پروتوتایپ):** ساخت جداول مصوب در Directus محلی، ثبت اولین Snapshot در `cms/schema/`، ارزیابی فنی کد پروتوتایپ موجود طبق `docs/evaluation/prototype-evaluation.md` و تصمیم‌گیری درباره انتقال کامپوننت‌های UI آن. *(گیت G1: تأیید اسکیمای دیتابیس و پوسته بصری).*
3. **فاز دوم (توسعه صفحات ماژول‌ها، سئوی معنایی و جستجو):** پیاده‌سازی صفحات واحدها، اساتید، رشته‌ها، اخبار، خدمات، جستجو و فرم تماس با داده نمونه ساختگی. *(گیت G2: پاس شدن بیلد، تست‌های WCAG 2.2 AA و تأیید دانشکده روی محیط Staging).*
4. **فاز سوم (استقرار سرور، ورود محتوای واقعی و انتشار):** راه‌اندازی Docker Compose و HTTPS روی سرور اصلی، تست بازیابی بک‌آپ (`Restore Test`)، ورود محتوای اولیه دانشکده و انتشار رسمی. *(گیت G3: تحویل نهایی و شروع دوره پشتیبانی).*

### ۹.۴. جدول مدیریت ریسک‌ها
| ریسک یا ابهام | اثر در صورت عدم مدیریت | راهکار مهار و اقدام مصوب | مسئول |
| :--- | :--- | :--- | :--- |
| **محدودیت‌های شبکه ایران (فونت، CDN، کپچا)** | کندی شدید یا از کار افتادن ظاهر و فرم‌های سایت | میزبانی خودگردان روی سرور مستقل، فونت محلی `Vazirmatn` و حذف کپچاهای تحریمی | تیم فنی |
| **مجوز BSL 1.1 در Directus** | ابهام حقوقی در صورت فروش تجاری گسترده در خارج از کشور | بررسی شرایط سقف مالی لایسنس برای استفاده خودمیزبان دانشگاهی پیش از عقد قراردادهای تجاری بزرگ | مدیر پروژه |
| **تأخیر دانشکده در ارائه ترجمه انگلیسی** | خالی ماندن صفحات انگلیسی یا ایجاد لینک‌های شکسته | فیلتر خودکار موارد ترجمه‌نشده در لیست‌های `/en` و نمایش کامپوننت راهنمای `TranslationUnavailable` | تیم فنی و محتوا |
| **ورود ناخواسته قابلیت‌های بالینی بیمارستان** | افزایش ریسک امنیتی و حقوقی به سطح C | ثبت صریح «معرفی خدمات بدون نوبت‌دهی و بدون پرونده بالینی» در پیوست قرارداد نسخه اول | مدیر پروژه و دانشکده |
| **خرابی سرور یا حذف ناخواسته داده** | از دست رفتن اطلاعات اساتید و اخبار | فعال‌سازی `Revisions` در Directus، بک‌آپ روزانه به فضای خارج از سرور و تست عملی بازیابی روی Staging | مدیر سیستم |

---

## ۱۰. چک‌لیست نهایی پیش از انتشار (Release Readiness Checklist)

پیش از هر انتشار عمومی روی سرور عملیاتی، تمام موارد زیر باید اجرا و با شواهد واقعی تأیید شوند:
- [ ] دستورات `npm run lint`، `npx tsc --noEmit` و `npm run build` در پوشه `web/` بدون هیچ خطایی اجرا شده‌اند.
- [ ] آخرین Snapshot اسکیمای Directus در مسیر `cms/schema/` ثبت و در Git کامیت شده است.
- [ ] فایل `.env` در Git ردیابی نشده و هیچ کلید محرمانه‌ای در متغیرهای `NEXT_PUBLIC_*` قرار ندارد.
- [ ] مسیرهای `/fa` (RTL) و `/en` (LTR) در موبایل و دسکتاپ بررسی شده‌اند و معیارهای **WCAG 2.2 AA** (از جمله Skip Link، ناوبری صفحه‌کلید و کنتراست) رعایت شده‌اند.
- [ ] خروجی JSON-LD (`CollegeOrUniversity`, `EducationalOrganization`, `Person` با ORCID و Google Scholar، و `Course`) و `sitemap.xml` بررسی شده‌اند.
- [ ] دسترسی نقش عمومی بدون توکن در Directus کاملاً بسته است و توکن `Site Reader` فقط رکوردهای `published` را می‌خواند.
- [ ] بازیابی نسخه پشتیبان (`Backup Restore`) حداقل یک بار روی محیط Staging آزمایش و تأیید شده است.
- [ ] تگ نسخه Git و ایمیج Docker برای بازگشت سریع (`Rollback`) ثبت شده و دانشکده نسخه Staging را تأیید کرده است.
```

### File: `docs/operations/cache-revalidation.md`

> **Path:** `docs/operations/cache-revalidation.md` | **Size:** 2,574 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

````markdown
# Directus cache revalidation

The public site caches Directus reads for one hour. A Directus Flow can expire that cache when an editor changes content. This guide configures the Flow. It does not change the database files under `cms/data/` or the uploads under `cms/uploads/`.

## Secret

1. Choose a long random value for `REVALIDATE_SECRET` in the root `.env`.
2. The Next.js process reads that variable. Inside Compose it is passed to the `web` service. For `npm run dev`, copy it into `web/.env.local`.
3. Do not commit either file, and do not put the value in a `NEXT_PUBLIC_` variable.

If `REVALIDATE_SECRET` is unset, `POST /api/revalidate` returns 503 and does not clear the cache. A missing or wrong `x-revalidate-secret` header returns 401. An unknown tag returns 400. The route does not log the secret.

## Tags

The JSON body is `{ "tag": "<tag>" }`. The tag is one of:

| Collection | Tag |
| :--- | :--- |
| any published read | `directus` |
| `organization_units` | `organization-units` |
| `people`, `academic_profiles`, `role_assignments` | `people` |
| `programs` | `programs` |
| `news_articles` | `news` |
| `events` | `events` |
| `service_items` | `services` |
| `pages` | `pages` |

Create one Flow per collection, or one Flow whose request body sends the matching tag. Do not send the raw collection name.

## Flow

In the Directus admin (`http://cms.localhost`):

1. Open **Settings → Flows → Create Flow**.
2. Trigger: **Event Hook**.
3. Type: **Action (Non-Blocking)**.
4. Scope: `items.create`, `items.update`, and `items.delete`.
5. Collections: the collection whose tag you are expiring.
6. Add a **Webhook / Request URL** operation:
   - Method: `POST`
   - URL: `http://web:3000/api/revalidate` from inside Compose. From Directus on the host network during local `npm run dev`, use `http://host.docker.internal:3000/api/revalidate`.
   - Header: `x-revalidate-secret` set to `REVALIDATE_SECRET`.
   - Body: `{ "tag": "news" }` (use the tag for that collection).
7. Save the flow and publish it.

The one-hour cache still refreshes published pages if the Flow is paused or the webhook fails.

## Check

With the Next.js server running and `REVALIDATE_SECRET` unset, this returns 503:

```bash
curl -i -X POST http://localhost:3000/api/revalidate -H "Content-Type: application/json" -d "{\"tag\":\"news\"}"
```

After the secret is set, the same request without that header returns 401. The same request with `x-revalidate-secret` set to the configured value returns `{"ok":true}`.
````

### File: `README.md`

> **Path:** `README.md` | **Size:** 2,990 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
# Faculty of Veterinary Medicine Portal

Official academic and informational website for the Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch (`IAU-TBZ-VET-PORTAL-2026`).

The public site is a bilingual Next.js app (`/fa` RTL, `/en` LTR). Editors work in self-hosted Directus 12.5. PostgreSQL 17 stays on the internal Docker network. Production is a five-service Compose stack (`proxy`, `web`, `cms`, `database`, `backup`) on a university-controlled server, with TLS at the proxy and a daily encrypted off-server backup.

This version is a public website (risk level A). It presents the teaching hospital and diagnostic services as information: description, visit conditions, hours, location, and phone. It does not book appointments, store clinical records, offer a visitor login, or take payments.

## Source of truth

| Document | Role |
| :--- | :--- |
| [Persian architecture v3.0](docs/Faculty%20of%20Veterinary%20Medicine%20website%20architecture-v3.0%20.md) | Product source (17 October 2026) |
| [ARCHITECTURE.md](ARCHITECTURE.md) | English operational spec for implementation |
| [AGENTS.md](AGENTS.md) | Cursor and Hermes working rules |
| [Cursor + Hermes guide](docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md) | Model choice and background-agent workflow |

Cursor rules live in `.cursor/rules/`. Repeatable procedures live in `.cursor/skills/`.

## Open decisions (Gate G0)

The architecture leaves two product decisions open. Implementation does not guess them.

1. Whether laboratories and equipment, the regulations and downloads library, and the admissions guide are separate Directus collections or part of `organization_units`, `programs`, and `pages`.
2. Home-page and menu journeys for prospective students, current students, researchers, and teaching-hospital visitors.

People, academic rank, and role assignments are fully specified. The other collections have a baseline field set only.

## What is in the repository now

Governance, the environment template, and empty reserved directories (`web/public/fonts/`, `cms/schema/`, `cms/extensions/`, `docs/evaluation/`). There is no Next.js app, no installed dependencies, and no running containers yet.

Copy `.env.example` to `.env` when runtime work starts. `.env` stays untracked. `DIRECTUS_READ_TOKEN` and `REVALIDATE_SECRET` stay server-only.

## Phases

| Phase | Outcome | Gate |
| :--- | :--- | :--- |
| 0. Foundation | Architecture and agent rules | G0. The two decisions above |
| 1. Model and prototype | Directus schema, snapshot, prototype evaluation | G1. Schema and visual shell |
| 2. Public modules | Pages, search, SEO, contact, synthetic data | G2. Build, WCAG 2.2 AA, staging sign-off |
| 3. Production | HTTPS, restore test, real faculty content, launch | G3. Handover |

Each phase starts when it is explicitly requested. The release checklist is in `ARCHITECTURE.md`.
```

### File: `web/AGENTS.md`

> **Path:** `web/AGENTS.md` | **Size:** 679 bytes | **Language:** markdown | **Category:** documentation | **Source:** `worktree`

```markdown
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
```

## Configuration Contents

### File: `.env.example`

> **Path:** `.env.example` | **Size:** 1,631 bytes | **Language:** plain text | **Category:** config | **Source:** `worktree`

```
# Copy this file to .env at the repository root.
# .env is gitignored. Never commit real values.
#
# DIRECTUS_READ_TOKEN and REVALIDATE_SECRET are server-only.
# They must NEVER be renamed or duplicated with a NEXT_PUBLIC_ prefix.
# NEXT_PUBLIC_SITE_URL is the only public variable. It is an origin, not a secret.
# Do not put tokens, keys, or passwords in any NEXT_PUBLIC_ variable.
#
# The Next.js service receives DIRECTUS_URL, DIRECTUS_READ_TOKEN,
# REVALIDATE_SECRET, and NEXT_PUBLIC_SITE_URL.
# It does not receive POSTGRES_* or DIRECTUS_ADMIN_*.
# Postgres credentials stay on the database, cms, and backup services.

# --- database, cms, backup ---
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=iau_tbz_vet

# --- cms bootstrap (Directus). Generate KEY and SECRET as long random strings. ---
DIRECTUS_KEY=
DIRECTUS_SECRET=
DIRECTUS_ADMIN_EMAIL=
DIRECTUS_ADMIN_PASSWORD=

# Server-side Directus origin for the Next.js server.
# Inside Compose this is the internal service URL, not a public browser URL.
DIRECTUS_URL=http://cms:8055

# Static token for the Site Reader role. Read published content only.
# Server-only. Never NEXT_PUBLIC_DIRECTUS_READ_TOKEN.
DIRECTUS_READ_TOKEN=

# Shared secret for the Directus webhook that calls /api/revalidate.
# Server-only. Never NEXT_PUBLIC_REVALIDATE_SECRET.
REVALIDATE_SECRET=

# Public site origin used for canonical URLs, sitemap, and the webhook target.
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Daily off-server backup credentials are not part of this template.
# Add them only after the backup target exists. They stay server-only.
```

### File: `.gitignore`

> **Path:** `.gitignore` | **Size:** 157 bytes | **Language:** plain text | **Category:** config | **Source:** `worktree`

```
node_modules/
.next/
out/
dist/
.env
.env.*
!.env.example
cms/data/
cms/uploads/
cms/backups/
playwright-report/
test-results/
.DS_Store
*.log
```

### File: `cms/extensions/.gitkeep`

> **Path:** `cms/extensions/.gitkeep` | **Size:** 102 bytes | **Language:** text | **Category:** config | **Source:** `worktree`

```text
# Reserved for Directus extensions source.
# Runtime uploads and database files do not belong here.
```

### File: `cms/extensions/site-reader-published/package.json`

> **Path:** `cms/extensions/site-reader-published/package.json` | **Size:** 357 bytes | **Language:** json | **Category:** config | **Source:** `worktree`

```json
{
  "name": "directus-extension-site-reader-published",
  "version": "1.0.0",
  "type": "module",
  "description": "Limits the Site Reader role to published items. Directus 12 Core cannot store custom permission rules.",
  "directus:extension": {
    "type": "hook",
    "path": "index.js",
    "source": "index.js",
    "host": "^12.5.0"
  }
}
```

### File: `cms/schema/.gitkeep`

> **Path:** `cms/schema/.gitkeep` | **Size:** 84 bytes | **Language:** text | **Category:** config | **Source:** `worktree`

```text
# Reserved for the committed Directus schema snapshot:
# cms/schema/snapshot.yaml
```

### File: `docker-compose.yml`

> **Path:** `docker-compose.yml` | **Size:** 2,719 bytes | **Language:** yaml | **Category:** config | **Source:** `worktree`

```yaml
# Five services. Only proxy publishes ports.
# Variable names match .env.example. The web service does not receive
# POSTGRES_* or DIRECTUS_ADMIN_*.

services:
  proxy:
    image: caddy:2.10
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./proxy/Caddyfile:/etc/caddy/Caddyfile:ro
    depends_on:
      - web
      - cms
    networks:
      - edge

  web:
    build:
      context: ./web
      dockerfile: Dockerfile
    environment:
      DIRECTUS_URL: http://cms:8055
      DIRECTUS_READ_TOKEN: ${DIRECTUS_READ_TOKEN}
      REVALIDATE_SECRET: ${REVALIDATE_SECRET}
      NEXT_PUBLIC_SITE_URL: ${NEXT_PUBLIC_SITE_URL}
    depends_on:
      cms:
        condition: service_healthy
    networks:
      - edge

  cms:
    image: directus/directus:12.5.0
    volumes:
      - ./cms/uploads:/directus/uploads
      - ./cms/extensions:/directus/extensions
    environment:
      KEY: ${DIRECTUS_KEY}
      SECRET: ${DIRECTUS_SECRET}
      DB_CLIENT: pg
      DB_HOST: database
      DB_PORT: "5432"
      DB_DATABASE: ${POSTGRES_DB}
      DB_USER: ${POSTGRES_USER}
      DB_PASSWORD: ${POSTGRES_PASSWORD}
      ADMIN_EMAIL: ${DIRECTUS_ADMIN_EMAIL}
      ADMIN_PASSWORD: ${DIRECTUS_ADMIN_PASSWORD}
      PUBLIC_URL: http://cms.localhost
      FILES_MAX_UPLOAD_SIZE: "10MB"
      FILES_MIME_TYPE_ALLOW_LIST: "image/jpeg,image/png,image/webp,application/pdf"
    depends_on:
      database:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "wget --spider -q http://127.0.0.1:8055/server/ping || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 40s
    networks:
      - edge
      - data

  database:
    image: postgres:17
    volumes:
      - ./cms/data/database:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready --host=localhost --username=$$POSTGRES_USER"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s
    networks:
      - data

  backup:
    image: postgres:17
    entrypoint: ["/bin/sh", "/scripts/backup-loop.sh"]
    environment:
      PGHOST: database
      PGUSER: ${POSTGRES_USER}
      PGPASSWORD: ${POSTGRES_PASSWORD}
      PGDATABASE: ${POSTGRES_DB}
    volumes:
      - ./cms/backups:/backups
      - ./cms/uploads:/uploads:ro
      - ./scripts/backup-loop.sh:/scripts/backup-loop.sh:ro
    depends_on:
      database:
        condition: service_healthy
    networks:
      - data

networks:
  edge:
  data:
    internal: true
```

### File: `web/.dockerignore`

> **Path:** `web/.dockerignore` | **Size:** 40 bytes | **Language:** plain text | **Category:** config | **Source:** `worktree`

```
node_modules
.next
.git
.env*
*.md
```

### File: `web/.gitignore`

> **Path:** `web/.gitignore` | **Size:** 536 bytes | **Language:** plain text | **Category:** config | **Source:** `worktree`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### File: `web/eslint.config.mjs`

> **Path:** `web/eslint.config.mjs` | **Size:** 483 bytes | **Language:** javascript | **Category:** config | **Source:** `worktree`

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### File: `web/next.config.ts`

> **Path:** `web/next.config.ts` | **Size:** 337 bytes | **Language:** typescript | **Category:** config | **Source:** `worktree`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_STANDALONE === "1" ? { output: "standalone" as const } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```

### File: `web/package.json`

> **Path:** `web/package.json` | **Size:** 637 bytes | **Language:** json | **Category:** config | **Source:** `worktree`

```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.64.0",
    "next": "16.4.2",
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "server-only": "^0.0.1",
    "zod": "^4.6.7"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### File: `web/public/fonts/.gitkeep`

> **Path:** `web/public/fonts/.gitkeep` | **Size:** 75 bytes | **Language:** text | **Category:** config | **Source:** `worktree`

```text
# Reserved for the self-hosted variable font:
# Vazirmatn-Variable.woff2
```

### File: `web/tsconfig.json`

> **Path:** `web/tsconfig.json` | **Size:** 780 bytes | **Language:** json | **Category:** config | **Source:** `worktree`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## Source Contents

### File: `.exporter/export_tbzvetportal.py`

> **Path:** `.exporter/export_tbzvetportal.py` | **Size:** 2,672 bytes | **Language:** python | **Category:** source | **Source:** `worktree`

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Export the Tabriz Vet Portal repository into one Markdown file for LLM review.

Default output (this folder):
  export_tbzvetportal.md

Usage:
  python export_tbzvetportal.py
  python export_tbzvetportal.py --include-locks
  python export_tbzvetportal.py --ref main
  python export_tbzvetportal.py --worktree-only
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

EXPORTER_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = EXPORTER_DIR.parent
DEFAULT_OUTPUT = EXPORTER_DIR / "export_tbzvetportal.md"

sys.path.insert(0, str(PROJECT_ROOT))

from export_project import export_project  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Export tabriz-vet-portal into export_tbzvetportal.md for Gemini or other LLMs. "
            "Default: full working tree (current files on disk)."
        )
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output Markdown path (default: {DEFAULT_OUTPUT.name} in .exporter/)",
    )
    parser.add_argument(
        "--include-locks",
        action="store_true",
        help="Include lockfiles (package-lock.json, etc.)",
    )
    parser.add_argument(
        "--ref",
        default=None,
        help="Export a git ref/branch instead of the working tree",
    )
    parser.add_argument(
        "--git-union",
        action="store_true",
        help="Union all local git branches instead of the working tree",
    )
    parser.add_argument(
        "--no-overlay-worktree",
        action="store_true",
        help="With --ref or --git-union, do not overlay dirty/untracked worktree files",
    )
    parser.add_argument(
        "--include-absent-from-head",
        action="store_true",
        help="With --git-union, include files that exist only on non-HEAD branches",
    )

    args = parser.parse_args()

    worktree_only = not args.git_union and not args.ref
    if args.git_union and args.ref:
        print("Error: --git-union and --ref cannot be used together.", file=sys.stderr)
        return 2

    return export_project(
        project_root=PROJECT_ROOT,
        output_path=args.output.resolve(),
        include_locks=args.include_locks,
        git_ref=args.ref,
        overlay_worktree=not args.no_overlay_worktree,
        worktree_only=worktree_only,
        include_absent_from_head=args.include_absent_from_head,
    )


if __name__ == "__main__":
    raise SystemExit(main())
```

### File: `cms/extensions/site-reader-published/index.js`

> **Path:** `cms/extensions/site-reader-published/index.js` | **Size:** 1,728 bytes | **Language:** javascript | **Category:** source | **Source:** `worktree`

```javascript
const STATUS_COLLECTIONS = new Set([
  "organization_units",
  "people",
  "role_assignments",
  "programs",
  "news_articles",
  "events",
  "service_items",
  "pages",
]);

/**
 * Directus 12 Core rejects item filters on policies. This hook applies the
 * published-only rule for the Site Reader role when a query is built.
 */
export default ({ filter }, { database }) => {
  let readerRoleId;

  async function siteReaderRoleId() {
    if (readerRoleId) {
      return readerRoleId;
    }
    const row = await database("directus_roles").select("id").where({ name: "Site Reader" }).first();
    readerRoleId = row?.id ?? null;
    return readerRoleId;
  }

  filter("items.query", async (query, meta, context) => {
    const accountability = context?.accountability ?? meta?.accountability;
    if (!accountability || accountability.admin) {
      return query;
    }
    const roleId = await siteReaderRoleId();
    if (!roleId || accountability.role !== roleId) {
      return query;
    }

    let rule = null;
    if (meta.collection === "role_assignments") {
      rule = {
        _and: [
          { status: { _eq: "published" } },
          { person_id: { status: { _eq: "published" } } },
          { unit_id: { status: { _eq: "published" } } },
        ],
      };
    } else if (STATUS_COLLECTIONS.has(meta.collection)) {
      rule = { status: { _eq: "published" } };
    } else if (meta.collection === "academic_profiles") {
      rule = { person_id: { status: { _eq: "published" } } };
    }
    if (!rule) {
      return query;
    }

    return {
      ...query,
      filter: query.filter ? { _and: [query.filter, rule] } : rule,
    };
  });
};
```

### File: `desktop.ini`

> **Path:** `desktop.ini` | **Size:** 114 bytes | **Language:** ini | **Category:** source | **Source:** `worktree`

```ini
[.ShellClassInfo]
IconResource=C:\WINDOWS\System32\SHELL32.dll,14
[ViewState]
Mode=
Vid=
FolderType=Generic
```

### File: `export_project.py`

> **Path:** `export_project.py` | **Size:** 62,609 bytes | **Language:** python | **Category:** source | **Source:** `worktree`

````python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Project exporter for AI evaluation
==================================
Collects project documentation, source code, structure, and metadata into a
single Markdown file that can be shared with other AI tools for review.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------
# Limits and classification
# ---------------------------------------------------------

MAX_SINGLE_FILE_BYTES = 3 * 1024 * 1024
MAX_TOTAL_SOURCE_BYTES = 200 * 1024 * 1024
MAX_DOC_PREVIEW_CHARS = 1200

LANGUAGE_MAP = {
    ".py": "python",
    ".pyi": "python",
    ".js": "javascript",
    ".jsx": "jsx",
    ".mjs": "javascript",
    ".cjs": "javascript",
    ".ts": "typescript",
    ".tsx": "tsx",
    ".html": "html",
    ".htm": "html",
    ".css": "css",
    ".scss": "scss",
    ".sass": "sass",
    ".vue": "vue",
    ".svelte": "svelte",
    ".java": "java",
    ".kt": "kotlin",
    ".kts": "kotlin",
    ".go": "go",
    ".rs": "rust",
    ".c": "c",
    ".h": "c",
    ".cpp": "cpp",
    ".hpp": "cpp",
    ".cc": "cpp",
    ".cs": "csharp",
    ".php": "php",
    ".rb": "ruby",
    ".swift": "swift",
    ".dart": "dart",
    ".scala": "scala",
    ".r": "r",
    ".sql": "sql",
    ".sh": "bash",
    ".bash": "bash",
    ".zsh": "bash",
    ".ps1": "powershell",
    ".toml": "toml",
    ".ini": "ini",
    ".cfg": "ini",
    ".conf": "conf",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".json": "json",
    ".jsonc": "json",
    ".xml": "xml",
    ".md": "markdown",
    ".mdc": "markdown",
    ".rst": "rst",
    ".txt": "text",
    ".prisma": "prisma",
    ".graphql": "graphql",
    ".gql": "graphql",
    ".proto": "protobuf",
    "Dockerfile": "dockerfile",
    "Makefile": "makefile",
    ".gitkeep": "text",
}

SAFE_CONFIG_FILENAMES = {
    "Dockerfile",
    "Makefile",
    "Procfile",
    "requirements.txt",
    "Pipfile",
    "pyproject.toml",
    "setup.py",
    "setup.cfg",
    ".gitignore",
    ".gitkeep",
    ".dockerignore",
    ".editorconfig",
    ".env.example",
    "package.json",
    "tsconfig.json",
    "jsconfig.json",
    "vite.config.ts",
    "vite.config.js",
    "next.config.ts",
    "next.config.js",
    "next.config.mjs",
    "eslint.config.js",
    "eslint.config.mjs",
    "eslint.config.ts",
    "postcss.config.js",
    "postcss.config.mjs",
    "tailwind.config.js",
    "tailwind.config.ts",
    "docker-compose.yml",
    "docker-compose.yaml",
    "compose.yml",
    "compose.yaml",
    "Cargo.toml",
    "go.mod",
    "go.sum",
    "composer.json",
    "pubspec.yaml",
    "CMakeLists.txt",
}

LOCK_FILENAMES = {
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lockb",
    "Cargo.lock",
    "Pipfile.lock",
    "poetry.lock",
    "uv.lock",
    "composer.lock",
}

EXCLUDED_DIRS = {
    ".git",
    ".hg",
    ".svn",
    ".venv",
    "venv",
    "env",
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    ".tox",
    "node_modules",
    ".next",
    ".nuxt",
    ".output",
    ".turbo",
    ".cache",
    "dist",
    "build",
    "target",
    "out",
    "bin",
    "obj",
    ".dart_tool",
    "Pods",
    ".gradle",
    "vendor",
    ".idea",
    ".vscode",
    "logs",
    "log",
    "coverage",
    "htmlcov",
    "uploads",
    "downloads",
    "playwright-report",
    "test-results",
}

EXPORT_OUTPUT_FILENAMES = {
    "export_tbzvetportal.md",
    "project_code_export.md",
}

# Runtime / local persistence paths that must never be exported
EXCLUDED_PATH_PREFIXES = (
    "cms/data/",
    "cms/uploads/",
    "cms/backups/",
)

EXCLUDED_SUFFIXES = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".svg",
    ".bmp",
    ".mp3",
    ".mp4",
    ".wav",
    ".avi",
    ".mov",
    ".mkv",
    ".zip",
    ".rar",
    ".7z",
    ".tar",
    ".gz",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ".wasm",
    ".db",
    ".sqlite",
    ".sqlite3",
    ".pyc",
    ".pyo",
    ".class",
    ".jar",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".tsbuildinfo",
}

SENSITIVE_FILENAMES = {
    ".env",
    "credentials.json",
    "service-account.json",
    "secrets.json",
    "id_rsa",
    "id_ed25519",
    "known_hosts",
    "authorized_keys",
}

SECRET_PATTERNS = [
    re.compile(
        r"""(?i)\b(?:api[_-]?key|access[_-]?token|client[_-]?secret|password|passwd|secret[_-]?key)\b\s*[:=]\s*(["']?)[^\s"'<>]{8,}"""
    ),
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    re.compile(r"(?i)\bAIza[0-9A-Za-z_-]{35,}\b"),
    re.compile(r"\bsk-[A-Za-z0-9_-]{20,}\b"),
]

DOC_FILENAMES = {
    "readme.md",
    "agents.md",
    "product-vision.md",
    "development-workflow.md",
    "changelog.md",
    "contributing.md",
    "license",
    "license.md",
}

DOC_DIR_PREFIXES = (
    "docs/",
    ".cursor/",
)


# ---------------------------------------------------------
# Models
# ---------------------------------------------------------

@dataclass
class FileRecord:
    rel_path: str
    content: str
    size_bytes: int
    language: str
    category: str  # documentation | source | config
    source_ref: str = ""
    variants: list[str] = field(default_factory=list)


@dataclass
class GitInfo:
    available: bool
    branch: str = "unknown"
    commit: str = "unknown"
    commit_subject: str = ""
    remotes: list[str] = field(default_factory=list)
    status_summary: str = ""
    tracked_count: int | None = None
    dirty: bool | None = None


@dataclass
class BranchInfo:
    name: str
    commit: str
    subject: str
    date: str
    file_count: int
    is_head: bool = False
    kind: str = "local"  # local | remote-diverged | remote-only
    remote_name: str | None = None
    ahead: int | None = None
    behind: int | None = None
    note: str = ""


@dataclass
class EnvKeyInfo:
    name: str
    has_value: bool
    in_example: bool | None = None


@dataclass
class EnvInventory:
    path: str
    present: bool
    size_bytes: int = 0
    key_count: int = 0
    keys: list[EnvKeyInfo] = field(default_factory=list)
    example_path: str | None = None
    example_present: bool = False
    missing_from_example: list[str] = field(default_factory=list)
    missing_from_env: list[str] = field(default_factory=list)
    note: str = ""


@dataclass
class DirInventory:
    path: str
    present: bool
    file_count: int = 0
    dir_count: int = 0
    total_bytes: int = 0
    top_level: list[str] = field(default_factory=list)
    shallow_tree: str = ""
    note: str = ""


@dataclass
class LocalRuntimeInventory:
    env: EnvInventory
    data_dir: DirInventory
    uploads_dir: DirInventory


# ---------------------------------------------------------
# Helpers
# ---------------------------------------------------------

def format_bytes(num: int) -> str:
    value = float(num)
    for unit in ("B", "KB", "MB", "GB"):
        if value < 1024 or unit == "GB":
            if unit == "B":
                return f"{int(value)} {unit}"
            return f"{value:.2f} {unit}"
        value /= 1024
    return f"{num} B"

def get_markdown_fence(content: str) -> str:
    backticks = re.findall(r"`+", content)
    max_len = max((len(b) for b in backticks), default=0)
    return "`" * max(3, max_len + 1)


def detect_language(path: Path | str) -> str:
    name = Path(path).name
    if name in LANGUAGE_MAP:
        return LANGUAGE_MAP[name]
    return LANGUAGE_MAP.get(Path(path).suffix.lower(), "")


def posix_rel(path: str | Path) -> str:
    return str(path).replace("\\", "/")


def is_sensitive(path: Path | str) -> bool:
    name = Path(path).name.lower()
    if name in SENSITIVE_FILENAMES:
        return True
    if name.startswith(".env") and name != ".env.example":
        return True
    if name.endswith((".pem", ".key", ".p12", ".pfx")):
        return True
    if any(k in name for k in ("credential", "secret", "private_key")):
        return True
    return False


def is_excluded_path(rel_path: str) -> bool:
    rel = posix_rel(rel_path)
    return any(rel == prefix.rstrip("/") or rel.startswith(prefix) for prefix in EXCLUDED_PATH_PREFIXES)


def classify_file(rel_path: str) -> str:
    rel = posix_rel(rel_path)
    name = Path(rel).name.lower()
    if name in DOC_FILENAMES or any(rel.startswith(prefix) for prefix in DOC_DIR_PREFIXES):
        return "documentation"
    if name in SAFE_CONFIG_FILENAMES or name in LOCK_FILENAMES:
        return "config"
    if Path(rel).suffix.lower() in {".md", ".rst", ".txt"}:
        return "documentation"
    return "source"


def is_candidate_file(rel_path: str, include_locks: bool) -> tuple[bool, str]:
    rel = posix_rel(rel_path)
    name = Path(rel).name

    if rel.endswith(".tmp") or name.startswith(".export_"):
        return False, "Temporary file"
    if is_sensitive(rel):
        return False, "Sensitive file"
    if is_excluded_path(rel):
        return False, "Excluded local/runtime path"
    if not include_locks and name in LOCK_FILENAMES:
        return False, "Lockfile excluded by default"
    if Path(rel).suffix.lower() in EXCLUDED_SUFFIXES:
        return False, "Binary or non-text suffix"
    if name in SAFE_CONFIG_FILENAMES or name == ".env.example":
        return True, ""
    if Path(rel).suffix.lower() in LANGUAGE_MAP or name in LANGUAGE_MAP:
        return True, ""
    return False, "Ignored by file policy"


def redact_secrets(text: str) -> tuple[str, int]:
    count = 0
    for pattern in SECRET_PATTERNS:
        text, n = pattern.subn("[REDACTED_SECRET]", text)
        count += n
    return text, count


def build_tree_str(paths: list[str], root_name: str) -> str:
    tree: dict = {}
    for rel in paths:
        curr = tree
        for part in Path(rel).parts:
            curr = curr.setdefault(part, {})

    lines: list[str] = [f"{root_name}/"]

    def _render(node: dict, prefix: str = "") -> None:
        items = sorted(node.keys(), key=str.casefold)
        for idx, key in enumerate(items):
            is_last = idx == len(items) - 1
            connector = "└── " if is_last else "├── "
            lines.append(f"{prefix}{connector}{key}")
            extension = "    " if is_last else "│   "
            _render(node[key], prefix + extension)

    _render(tree)
    return "\n".join(lines)


def run_git(args: list[str], cwd: Path, *, strip_output: bool = True) -> tuple[int, str]:
    try:
        completed = subprocess.run(
            ["git", *args],
            cwd=cwd,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            check=False,
        )
        stdout = completed.stdout or ""
        if strip_output:
            stdout = stdout.strip()
        return completed.returncode, stdout
    except OSError:
        return 1, ""


def collect_git_info(project_root: Path) -> GitInfo:
    code, inside = run_git(["rev-parse", "--is-inside-work-tree"], project_root)
    if code != 0 or inside != "true":
        return GitInfo(available=False)

    _, branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    _, commit = run_git(["rev-parse", "--short", "HEAD"], project_root)
    _, subject = run_git(["log", "-1", "--pretty=%s"], project_root)
    _, remotes_raw = run_git(["remote", "-v"], project_root)
    remotes = sorted({line.split()[0] for line in remotes_raw.splitlines() if line.strip()})
    _, porcelain = run_git(["status", "--porcelain"], project_root)
    dirty = bool(porcelain)
    _, tracked_raw = run_git(["ls-files"], project_root)
    tracked_count = len([line for line in tracked_raw.splitlines() if line.strip()])

    if dirty:
        changed = len(porcelain.splitlines())
        status_summary = f"Working tree dirty ({changed} changed/untracked paths)"
    else:
        status_summary = "Working tree clean"

    return GitInfo(
        available=True,
        branch=branch or "unknown",
        commit=commit or "unknown",
        commit_subject=subject,
        remotes=remotes,
        status_summary=status_summary,
        tracked_count=tracked_count,
        dirty=dirty,
    )


def content_sha(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8", errors="replace")).hexdigest()[:12]


def parse_porcelain_z(output: str) -> set[str]:
    """Repo-relative paths from `git status --porcelain -z` that are dirty or untracked."""
    paths: set[str] = set()
    tokens = output.split("\0")
    index = 0
    while index < len(tokens):
        entry = tokens[index]
        index += 1
        if len(entry) < 3:
            continue
        status = entry[:2]
        if "!" in status:
            continue
        path = entry[3:] if entry[2] == " " else entry[2:]
        if status[0] in {"R", "C"} or status[1] in {"R", "C"}:
            if index < len(tokens):
                path = tokens[index]
            index += 1
        path = posix_rel(path)
        if path and not path.endswith("/"):
            paths.add(path)
    return paths


def list_dirty_worktree_paths(project_root: Path) -> set[str]:
    """Modified, added, renamed, unmerged, or untracked paths. Clean tracked files are omitted."""
    code, output = run_git(
        ["status", "--porcelain", "-z", "--untracked-files=all"],
        project_root,
        strip_output=False,
    )
    if code != 0 or not output:
        return set()
    return parse_porcelain_z(output)


def git_path_skip_reason(rel_path: str) -> str | None:
    parts = Path(rel_path).parts
    for idx, part in enumerate(parts[:-1]):
        prefix = "/".join(parts[: idx + 1]) + "/"
        if part.lower() in {x.lower() for x in EXCLUDED_DIRS}:
            return "Excluded directory pattern"
        if is_excluded_path(prefix):
            return "Excluded local/runtime path"
        if part.startswith(".") and part.lower() not in {
            ".github",
            ".husky",
            ".cursor",
            ".exporter",
        }:
            return "Hidden system directory"
    return None


def list_local_branch_names(project_root: Path) -> list[str]:
    code, raw = run_git(
        ["for-each-ref", "--format=%(refname:short)", "refs/heads"],
        project_root,
    )
    if code != 0 or not raw:
        return []
    return [line.strip() for line in raw.splitlines() if line.strip()]


def collect_branch_catalog(project_root: Path) -> list[BranchInfo]:
    code, inside = run_git(["rev-parse", "--is-inside-work-tree"], project_root)
    if code != 0 or inside != "true":
        return []

    _, head_branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    local_names = list_local_branch_names(project_root)
    catalog: list[BranchInfo] = []
    local_tips: dict[str, str] = {}

    for name in local_names:
        _, commit = run_git(["rev-parse", "--short", name], project_root)
        _, subject = run_git(["log", "-1", "--pretty=%s", name], project_root)
        _, date = run_git(["log", "-1", "--pretty=%cs", name], project_root)
        _, listing = run_git(["ls-tree", "-r", "--name-only", name], project_root)
        file_count = len([line for line in listing.splitlines() if line.strip()])

        remote_name = f"origin/{name}"
        ahead: int | None = None
        behind: int | None = None
        code_remote, remote_commit = run_git(["rev-parse", "--short", remote_name], project_root)
        if code_remote == 0 and remote_commit:
            _, counts = run_git(
                ["rev-list", "--left-right", "--count", f"{name}...{remote_name}"],
                project_root,
            )
            if counts:
                parts = counts.split()
                if len(parts) == 2 and parts[0].isdigit() and parts[1].isdigit():
                    ahead, behind = int(parts[0]), int(parts[1])
            if ahead or behind:
                note = f"tracks `{remote_name}` (ahead {ahead or 0}, behind {behind or 0})"
            else:
                note = f"tracks `{remote_name}` (in sync)"
        else:
            note = "no matching origin/* remote-tracking branch"

        catalog.append(
            BranchInfo(
                name=name,
                commit=commit or "unknown",
                subject=subject,
                date=date,
                file_count=file_count,
                is_head=(name == head_branch),
                kind="local",
                remote_name=remote_name if code_remote == 0 else None,
                ahead=ahead,
                behind=behind,
                note=note,
            )
        )
        if commit:
            local_tips[name] = commit

    code_remotes, remotes_raw = run_git(
        ["for-each-ref", "--format=%(refname:short)", "refs/remotes"],
        project_root,
    )
    if code_remotes == 0 and remotes_raw:
        for remote_ref in remotes_raw.splitlines():
            remote_ref = remote_ref.strip()
            if not remote_ref or remote_ref.endswith("/HEAD"):
                continue
            if "/" not in remote_ref:
                continue
            remote_prefix, local_name = remote_ref.split("/", 1)
            if remote_prefix != "origin":
                continue

            _, remote_commit = run_git(["rev-parse", "--short", remote_ref], project_root)
            if not remote_commit:
                continue
            if local_name in local_tips and local_tips[local_name] == remote_commit:
                continue

            _, subject = run_git(["log", "-1", "--pretty=%s", remote_ref], project_root)
            _, date = run_git(["log", "-1", "--pretty=%cs", remote_ref], project_root)
            _, listing = run_git(["ls-tree", "-r", "--name-only", remote_ref], project_root)
            file_count = len([line for line in listing.splitlines() if line.strip()])

            if local_name in local_tips:
                kind = "remote-diverged"
                note = f"differs from local `{local_name}` ({local_tips[local_name]})"
            else:
                kind = "remote-only"
                note = "no local branch with this name"

            catalog.append(
                BranchInfo(
                    name=remote_ref,
                    commit=remote_commit,
                    subject=subject,
                    date=date,
                    file_count=file_count,
                    is_head=False,
                    kind=kind,
                    remote_name=remote_ref,
                    note=note,
                )
            )

    catalog.sort(key=lambda item: (0 if item.kind == "local" else 1, item.name.casefold()))
    return catalog


def detect_stack(files: dict[str, str]) -> list[str]:
    signals: list[str] = []

    if "web/package.json" in files or "package.json" in files:
        pkg_raw = files.get("web/package.json") or files.get("package.json") or "{}"
        try:
            pkg = json.loads(pkg_raw)
        except json.JSONDecodeError:
            pkg = {}
        deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
        if "next" in deps:
            signals.append(f"Next.js ({deps.get('next', '?')})")
        if "react" in deps:
            signals.append(f"React ({deps.get('react', '?')})")
        if "typescript" in deps or "web/tsconfig.json" in files or "tsconfig.json" in files:
            signals.append("TypeScript")
        if any(k.startswith("@directus") for k in deps):
            signals.append("Directus client libraries")

    compose = files.get("docker-compose.yml") or files.get("docker-compose.yaml") or ""
    if "directus" in compose.lower():
        signals.append("Directus CMS (Docker Compose)")
    if "postgres" in compose.lower() or "postgresql" in compose.lower():
        signals.append("PostgreSQL")

    if any(name.endswith(".py") for name in files):
        signals.append("Python tooling/scripts")

    if any(name.startswith("docs/") for name in files):
        signals.append("Project documentation set")

    return signals or ["Not confidently detected from available manifests"]


def first_meaningful_paragraph(text: str, limit: int = MAX_DOC_PREVIEW_CHARS) -> str:
    lines = []
    for line in text.splitlines():
        stripped = line.strip()
        if not stripped:
            if lines:
                break
            continue
        if stripped.startswith("#"):
            continue
        lines.append(stripped)
    preview = " ".join(lines).strip()
    if len(preview) > limit:
        return preview[: limit - 1].rstrip() + "…"
    return preview


def parse_env_key_names(text: str) -> list[tuple[str, bool]]:
    """Return (key_name, has_nonempty_value) pairs. Values themselves are discarded."""
    keys: list[tuple[str, bool]] = []
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if line.startswith("\ufeff"):
            line = line.lstrip("\ufeff").strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, value = line.split("=", 1)
        name = name.strip()
        if not name:
            continue
        cleaned = value.strip()
        if len(cleaned) >= 2 and cleaned[0] == cleaned[-1] and cleaned[0] in {"'", '"'}:
            cleaned = cleaned[1:-1]
        keys.append((name, bool(cleaned)))
    return keys


def build_shallow_dir_tree(
    root: Path,
    *,
    max_depth: int = 2,
    max_entries_per_dir: int = 12,
) -> str:
    lines: list[str] = [f"{root.name}/"]

    def _immediate_counts(path: Path) -> tuple[int, int]:
        files = 0
        dirs = 0
        try:
            for child in path.iterdir():
                if child.is_dir():
                    dirs += 1
                elif child.is_file():
                    files += 1
        except OSError:
            return 0, 0
        return files, dirs

    def _walk(current: Path, prefix: str, depth: int) -> None:
        if depth > max_depth:
            return
        try:
            children = sorted(current.iterdir(), key=lambda p: (not p.is_dir(), p.name.casefold()))
        except OSError:
            lines.append(f"{prefix}└── [unreadable]")
            return

        visible = children[:max_entries_per_dir]
        hidden = len(children) - len(visible)
        for idx, child in enumerate(visible):
            is_last = idx == len(visible) - 1 and hidden <= 0
            connector = "└── " if is_last else "├── "
            if child.is_dir():
                files, dirs = _immediate_counts(child)
                summary = f" ({files} files, {dirs} dirs immediately inside)"
                lines.append(f"{prefix}{connector}{child.name}/{summary}")
                extension = "    " if is_last else "│   "
                _walk(child, prefix + extension, depth + 1)
            else:
                try:
                    size = format_bytes(child.stat().st_size)
                except OSError:
                    size = "?"
                lines.append(f"{prefix}{connector}{child.name} ({size})")

        if hidden > 0:
            lines.append(f"{prefix}└── ... +{hidden} more entries (omitted)")

    _walk(root, "", 1)
    return "\n".join(lines)


def inventory_directory(project_root: Path, rel_path: str, note: str = "") -> DirInventory:
    path = project_root / rel_path
    if not path.exists():
        return DirInventory(path=rel_path, present=False, note=note or "Not present in the local worktree.")
    if not path.is_dir():
        return DirInventory(
            path=rel_path,
            present=True,
            note="Path exists but is not a directory.",
        )

    file_count = 0
    dir_count = 0
    total_bytes = 0
    try:
        for item in path.rglob("*"):
            try:
                if item.is_file():
                    file_count += 1
                    total_bytes += item.stat().st_size
                elif item.is_dir():
                    dir_count += 1
            except OSError:
                continue
        top_level = sorted(
            (
                f"{child.name}/" if child.is_dir() else child.name
                for child in path.iterdir()
            ),
            key=str.casefold,
        )
        shallow_tree = build_shallow_dir_tree(path)
    except OSError as exc:
        return DirInventory(
            path=rel_path,
            present=True,
            note=f"Present but inventory failed: {exc}",
        )

    return DirInventory(
        path=rel_path,
        present=True,
        file_count=file_count,
        dir_count=dir_count,
        total_bytes=total_bytes,
        top_level=top_level,
        shallow_tree=shallow_tree,
        note=note
        or "Content intentionally omitted from export; only metadata is reported.",
    )


def inventory_env_file(
    project_root: Path,
    *,
    example_text: str | None = None,
) -> EnvInventory:
    env_path = project_root / ".env"
    example_path = project_root / ".env.example"
    example_present = example_path.is_file() or bool(example_text)

    example_keys: list[str] = []
    if example_path.is_file():
        try:
            example_keys = [name for name, _ in parse_env_key_names(example_path.read_text(encoding="utf-8-sig"))]
        except OSError:
            example_keys = []
    elif example_text:
        example_keys = [name for name, _ in parse_env_key_names(example_text)]

    if not env_path.is_file():
        return EnvInventory(
            path=".env",
            present=False,
            example_path=".env.example",
            example_present=example_present,
            missing_from_env=example_keys,
            note="No local `.env` file found. Values are never exported even when present.",
        )

    try:
        raw = env_path.read_text(encoding="utf-8-sig")
        size_bytes = env_path.stat().st_size
    except OSError as exc:
        return EnvInventory(
            path=".env",
            present=True,
            example_path=".env.example",
            example_present=example_present,
            note=f"Present but unreadable: {exc}",
        )

    parsed = parse_env_key_names(raw)
    example_set = set(example_keys)
    keys = [
        EnvKeyInfo(
            name=name,
            has_value=has_value,
            in_example=(name in example_set) if example_keys else None,
        )
        for name, has_value in parsed
    ]
    env_names = [name for name, _ in parsed]
    missing_from_example = sorted(set(env_names) - example_set) if example_keys else []
    missing_from_env = sorted(example_set - set(env_names)) if example_keys else []

    return EnvInventory(
        path=".env",
        present=True,
        size_bytes=size_bytes,
        key_count=len(keys),
        keys=keys,
        example_path=".env.example",
        example_present=example_present,
        missing_from_example=missing_from_example,
        missing_from_env=missing_from_env,
        note=(
            "Key names and presence flags only. Secret values are never written into the export."
        ),
    )


def collect_local_runtime_inventory(
    project_root: Path,
    *,
    example_text: str | None = None,
) -> LocalRuntimeInventory:
    return LocalRuntimeInventory(
        env=inventory_env_file(project_root, example_text=example_text),
        data_dir=inventory_directory(
            project_root,
            "cms/data",
            note="Local PostgreSQL/Directus persistence. File contents are not exported.",
        ),
        uploads_dir=inventory_directory(
            project_root,
            "cms/uploads",
            note="Local CMS media uploads. File contents are not exported.",
        ),
    )


def render_local_runtime_inventory(inventory: LocalRuntimeInventory) -> str:
    parts: list[str] = []
    parts.append("## Local Runtime Inventory\n\n")
    parts.append(
        "These entities exist (or are expected) on the developer machine but are **not** "
        "embedded as content in this export. The AI should treat them as known local "
        "runtime assets and evaluate setup/operations accordingly.\n\n"
    )

    env = inventory.env
    parts.append("### `.env` (secrets file)\n\n")
    parts.append(f"- **Present locally:** {'yes' if env.present else 'no'}\n")
    if env.present:
        parts.append(f"- **File size:** {format_bytes(env.size_bytes)}\n")
        parts.append(f"- **Keys found:** {env.key_count}\n")
    parts.append(f"- **`.env.example` present:** {'yes' if env.example_present else 'no'}\n")
    parts.append(f"- **Export policy:** {env.note}\n")
    if env.keys:
        parts.append("\n| Key | Value present | In `.env.example` |\n")
        parts.append("|---|---|---|\n")
        for key in env.keys:
            if key.in_example is None:
                example_cell = "n/a"
            else:
                example_cell = "yes" if key.in_example else "no"
            parts.append(
                f"| `{key.name}` | {'yes' if key.has_value else 'no'} | {example_cell} |\n"
            )
    if env.missing_from_env:
        parts.append("\nKeys in `.env.example` but missing from `.env`:\n\n")
        for name in env.missing_from_env:
            parts.append(f"- `{name}`\n")
    if env.missing_from_example:
        parts.append("\nKeys in `.env` but missing from `.env.example`:\n\n")
        for name in env.missing_from_example:
            parts.append(f"- `{name}`\n")
    parts.append("\n")

    for label, directory in (
        ("`cms/data/` (local database persistence)", inventory.data_dir),
        ("`cms/uploads/` (local media uploads)", inventory.uploads_dir),
    ):
        parts.append(f"### {label}\n\n")
        parts.append(f"- **Present locally:** {'yes' if directory.present else 'no'}\n")
        if directory.present:
            parts.append(f"- **Files:** {directory.file_count:,}\n")
            parts.append(f"- **Directories:** {directory.dir_count:,}\n")
            parts.append(f"- **Total size:** {format_bytes(directory.total_bytes)}\n")
            if directory.top_level:
                listed = ", ".join(f"`{name}`" for name in directory.top_level[:20])
                extra = len(directory.top_level) - min(len(directory.top_level), 20)
                if extra > 0:
                    listed += f", … (+{extra} more)"
                parts.append(f"- **Top-level entries:** {listed}\n")
            if directory.shallow_tree:
                parts.append("\nShallow structure (content omitted):\n\n")
                parts.append("```text\n")
                parts.append(directory.shallow_tree)
                parts.append("\n```\n")
        parts.append(f"- **Export policy:** {directory.note}\n\n")

    return "".join(parts)


# ---------------------------------------------------------
# File gathering
# ---------------------------------------------------------

def gather_from_workdir(
    project_root: Path,
    output_path: Path,
    include_locks: bool,
    *,
    path_filter: set[str] | None = None,
) -> tuple[list[FileRecord], list[tuple[str, str]], int]:
    included: list[FileRecord] = []
    excluded: list[tuple[str, str]] = []
    redacted_total = 0
    output_resolved = output_path.resolve()

    for current, dirs, files in os.walk(project_root, followlinks=False):
        curr_path = Path(current)
        retained: list[str] = []
        for d in dirs:
            dir_path = curr_path / d
            rel_dir = posix_rel(dir_path.relative_to(project_root))
            if d.lower() in {x.lower() for x in EXCLUDED_DIRS}:
                excluded.append((rel_dir + "/", "Excluded directory pattern"))
            elif is_excluded_path(rel_dir + "/"):
                excluded.append((rel_dir + "/", "Excluded local/runtime path"))
            elif d.startswith(".") and d.lower() not in {
                ".github",
                ".husky",
                ".cursor",
                ".exporter",
            }:
                excluded.append((rel_dir + "/", "Hidden system directory"))
            elif dir_path.is_symlink():
                excluded.append((rel_dir + "/", "Symbolic link ignored"))
            else:
                retained.append(d)
        dirs[:] = retained

        for f in files:
            p = curr_path / f
            rel = posix_rel(p.relative_to(project_root))
            try:
                if p.resolve() == output_resolved:
                    excluded.append((rel, "Export output file"))
                    continue
            except OSError:
                pass

            if f in EXPORT_OUTPUT_FILENAMES:
                excluded.append((rel, "Export output file"))
                continue

            if p.is_symlink():
                excluded.append((rel, "Symbolic link"))
                continue

            if path_filter is not None and rel not in path_filter:
                continue

            ok, reason = is_candidate_file(rel, include_locks)
            if not ok:
                excluded.append((rel, reason))
                continue

            try:
                size = p.stat().st_size
            except OSError as exc:
                excluded.append((rel, f"Stat failed: {exc}"))
                continue

            if size > MAX_SINGLE_FILE_BYTES:
                excluded.append((rel, f"Exceeds single-file size limit ({MAX_SINGLE_FILE_BYTES / 1024 / 1024:.1f} MB)"))
                continue

            try:
                raw = p.read_bytes()
                if b"\x00" in raw:
                    excluded.append((rel, "Binary content detected"))
                    continue
                text = raw.decode("utf-8-sig")
            except (OSError, UnicodeDecodeError) as exc:
                excluded.append((rel, f"Read/decode failed: {exc}"))
                continue

            text, count = redact_secrets(text)
            redacted_total += count
            included.append(
                FileRecord(
                    rel_path=rel,
                    content=text,
                    size_bytes=size,
                    language=detect_language(rel),
                    category=classify_file(rel),
                    source_ref="worktree",
                )
            )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total


def _read_git_text_file(
    project_root: Path,
    git_ref: str,
    rel: str,
) -> tuple[str | None, str | None]:
    """Return (text, error_reason)."""
    show_code, content = run_git(
        ["show", f"{git_ref}:{rel}"],
        project_root,
        strip_output=False,
    )
    if show_code != 0:
        return None, "git show failed"
    if content.startswith("\ufeff"):
        content = content.lstrip("\ufeff")
    raw = content.encode("utf-8", errors="replace")
    if b"\x00" in raw:
        return None, "Binary content detected"
    if len(raw) > MAX_SINGLE_FILE_BYTES:
        return None, f"Exceeds single-file size limit ({MAX_SINGLE_FILE_BYTES / 1024 / 1024:.1f} MB)"
    return content, None


def gather_from_git_ref(
    project_root: Path,
    git_ref: str,
    include_locks: bool,
) -> tuple[list[FileRecord], list[tuple[str, str]], int]:
    code, listing = run_git(["ls-tree", "-r", "--name-only", git_ref], project_root)
    if code != 0 or not listing:
        raise RuntimeError(f"Unable to list files for git ref '{git_ref}'. Is the ref valid?")

    included: list[FileRecord] = []
    excluded: list[tuple[str, str]] = []
    redacted_total = 0

    for rel in listing.splitlines():
        rel = posix_rel(rel.strip())
        if not rel:
            continue

        skip_reason = git_path_skip_reason(rel)
        if skip_reason:
            excluded.append((rel, skip_reason))
            continue

        ok, reason = is_candidate_file(rel, include_locks)
        if not ok:
            excluded.append((rel, reason))
            continue

        content, err = _read_git_text_file(project_root, git_ref, rel)
        if err or content is None:
            excluded.append((rel, err or "git show failed"))
            continue

        text, count = redact_secrets(content)
        redacted_total += count
        included.append(
            FileRecord(
                rel_path=rel,
                content=text,
                size_bytes=len(text.encode("utf-8", errors="replace")),
                language=detect_language(rel),
                category=classify_file(rel),
                source_ref=git_ref,
            )
        )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total


def gather_union_from_branches(
    project_root: Path,
    include_locks: bool,
    include_absent_from_head: bool = False,
) -> tuple[list[FileRecord], list[tuple[str, str]], int, list[str]]:
    """
    Union candidate files across all local branches.
    Newest branch tip commit wins; differing branch variants are noted.
    Paths missing from HEAD are omitted unless include_absent_from_head is set.
    """
    branches = list_local_branch_names(project_root)
    if not branches:
        raise RuntimeError("No local git branches found for union export.")

    branch_meta: dict[str, tuple[int, str]] = {}
    for name in branches:
        _, ts_raw = run_git(["log", "-1", "--pretty=%ct", name], project_root)
        _, short = run_git(["rev-parse", "--short", name], project_root)
        try:
            ts = int(ts_raw) if ts_raw else 0
        except ValueError:
            ts = 0
        branch_meta[name] = (ts, short or "unknown")

    # path -> list of (timestamp, branch, commit, sha, text)
    versions: dict[str, list[tuple[int, str, str, str, str]]] = defaultdict(list)
    excluded: list[tuple[str, str]] = []
    seen_excluded: set[tuple[str, str]] = set()

    def add_excluded(rel: str, reason: str) -> None:
        item = (rel, reason)
        if item not in seen_excluded:
            seen_excluded.add(item)
            excluded.append(item)

    for branch in branches:
        code, listing = run_git(["ls-tree", "-r", "--name-only", branch], project_root)
        if code != 0:
            add_excluded(branch, "Unable to list branch files")
            continue
        ts, short = branch_meta[branch]
        for rel in listing.splitlines():
            rel = posix_rel(rel.strip())
            if not rel:
                continue
            skip_reason = git_path_skip_reason(rel)
            if skip_reason:
                add_excluded(rel, skip_reason)
                continue
            ok, reason = is_candidate_file(rel, include_locks)
            if not ok:
                add_excluded(rel, reason)
                continue
            content, err = _read_git_text_file(project_root, branch, rel)
            if err or content is None:
                add_excluded(rel, err or "git show failed")
                continue
            text, _ = redact_secrets(content)
            versions[rel].append((ts, branch, short, content_sha(text), text))

    _, head_branch = run_git(["rev-parse", "--abbrev-ref", "HEAD"], project_root)
    head_branch = head_branch or ""

    included: list[FileRecord] = []
    redacted_total = 0
    for rel, entries in versions.items():
        # Newest commit timestamp wins; tie-break by branch name
        entries_sorted = sorted(entries, key=lambda item: (-item[0], item[1].casefold()))
        on_head = any(branch == head_branch for _, branch, _, _, _ in entries_sorted)
        if not on_head:
            only_on = ", ".join(
                sorted({branch for _, branch, _, _, _ in entries_sorted})
            )
            if not include_absent_from_head:
                add_excluded(rel, f"absent from HEAD; only on {only_on}")
                continue
        winner = entries_sorted[0]
        _, win_branch, win_commit, win_sha, win_text = winner
        win_text, count = redact_secrets(win_text)
        redacted_total += count
        source_ref = f"{win_branch}@{win_commit}"
        if not on_head:
            source_ref = f"{source_ref} (absent from HEAD)"

        variants: list[str] = []
        seen_variant_keys: set[str] = set()
        for _, branch, commit, sha, _text in entries_sorted[1:]:
            if sha == win_sha:
                continue
            key = f"{branch}:{sha}"
            if key in seen_variant_keys:
                continue
            seen_variant_keys.add(key)
            variants.append(f"{branch} ({commit}, content {sha})")

        included.append(
            FileRecord(
                rel_path=rel,
                content=win_text,
                size_bytes=len(win_text.encode("utf-8", errors="replace")),
                language=detect_language(rel),
                category=classify_file(rel),
                source_ref=source_ref,
                variants=variants,
            )
        )

    included.sort(key=lambda item: item.rel_path.casefold())
    return included, excluded, redacted_total, branches


# ---------------------------------------------------------
# Markdown rendering
# ---------------------------------------------------------

def render_branch_catalog(branches: list[BranchInfo]) -> str:
    parts: list[str] = []
    parts.append("## Git Branches\n\n")
    if not branches:
        parts.append("_No git branches were discovered for this export._\n\n")
        return "".join(parts)

    parts.append(
        "Local branches are the primary export sources. Matching `origin/*` refs are "
        "listed only when they diverge from the local tip or have no local counterpart. "
        "File contents below are a **union** of local branches (newest tip wins). "
        "Paths that exist only on older branches, and not on HEAD, are omitted unless "
        "`--include-absent-from-head` is set. The export is not a full duplicate of every branch.\n\n"
    )
    parts.append("| Branch | Kind | HEAD | Commit | Date | Files | Notes |\n")
    parts.append("|---|---|---|---|---|---:|---|\n")
    for item in branches:
        head = "yes" if item.is_head else ""
        subject = item.subject.replace("|", "\\|") if item.subject else ""
        note = item.note.replace("|", "\\|") if item.note else ""
        if subject and note:
            sep = " " if subject.endswith((".", "!", "?")) else ". "
            note = f"{subject}{sep}{note}"
        elif subject:
            note = subject
        parts.append(
            f"| `{item.name}` | {item.kind} | {head} | `{item.commit}` | "
            f"{item.date or '-'} | {item.file_count} | {note or '-'} |\n"
        )
    parts.append("\n")
    return "".join(parts)


def render_file_section(record: FileRecord) -> str:
    fence = get_markdown_fence(record.content)
    lang = record.language
    body = record.content if record.content.endswith("\n") else record.content + "\n"
    meta = (
        f"> **Path:** `{record.rel_path}` | **Size:** {record.size_bytes:,} bytes | "
        f"**Language:** {lang or 'plain text'} | **Category:** {record.category}"
    )
    if record.source_ref:
        meta += f" | **Source:** `{record.source_ref}`"
    meta += "\n"
    if record.variants:
        meta += "> **Also differs on:** " + "; ".join(f"`{v}`" for v in record.variants) + "\n"
    meta += "\n"
    return (
        f"### File: `{record.rel_path}`\n\n"
        f"{meta}"
        f"{fence}{lang}\n"
        f"{body}"
        f"{fence}\n\n"
    )


def build_markdown(
    project_name: str,
    project_root: Path,
    records: list[FileRecord],
    excluded: list[tuple[str, str]],
    git_info: GitInfo,
    source_label: str,
    redacted_total: int,
    local_runtime: LocalRuntimeInventory,
    branch_catalog: list[BranchInfo] | None = None,
) -> str:
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    total_bytes = sum(item.size_bytes for item in records)
    by_category = Counter(item.category for item in records)
    by_language = Counter(item.language or "plain text" for item in records)
    content_map = {item.rel_path: item.content for item in records}
    stack = detect_stack(content_map)

    docs = [item for item in records if item.category == "documentation"]
    configs = [item for item in records if item.category == "config"]
    sources = [item for item in records if item.category == "source"]

    parts: list[str] = []
    parts.append(f"# Project Export for AI Evaluation: `{project_name}`\n\n")
    parts.append(
        "This document is a self-contained snapshot of the repository for external AI "
        "review and technical evaluation. It includes project context, documentation, "
        "configuration, and source files. Secrets and local runtime data are not embedded; "
        "they are summarized in the Local Runtime Inventory section.\n\n"
    )

    parts.append("## Evaluator Brief\n\n")
    parts.append(
        "Please evaluate the project using only the evidence in this export. "
        "Distinguish verified facts from assumptions. Record unknowns explicitly. "
        "Do not invent institutional statistics, credentials, or unimplemented features.\n\n"
    )
    parts.append("Suggested evaluation focus:\n\n")
    parts.append("1. Product stage, goals, and open decisions\n")
    parts.append("2. Architecture and technology choices actually present in the files\n")
    parts.append("3. Completeness of documentation versus implementation\n")
    parts.append("4. Maintainability, security posture, and operational readiness\n")
    parts.append("5. Recommended next steps with evidence-based confidence levels\n\n")

    parts.append("## Project Snapshot\n\n")
    parts.append(f"- **Generated On:** {timestamp}\n")
    parts.append(f"- **Project Root:** `{project_root}`\n")
    parts.append(f"- **Export Source:** {source_label}\n")
    parts.append(f"- **Files Included:** {len(records)}\n")
    parts.append(f"- **Total Text Size:** {total_bytes / 1024:.2f} KB\n")
    parts.append(
        f"- **By Category:** documentation={by_category.get('documentation', 0)}, "
        f"config={by_category.get('config', 0)}, source={by_category.get('source', 0)}\n"
    )
    parts.append(f"- **Secrets Redacted:** {redacted_total}\n")
    parts.append(
        "- **Local Runtime Inventory:** "
        f"`.env`={'present' if local_runtime.env.present else 'absent'}, "
        f"`cms/data/`={'present' if local_runtime.data_dir.present else 'absent'}, "
        f"`cms/uploads/`={'present' if local_runtime.uploads_dir.present else 'absent'} "
        "(metadata only; contents not exported)\n"
    )

    if git_info.available:
        parts.append(f"- **Git Branch:** `{git_info.branch}`\n")
        parts.append(f"- **Git Commit:** `{git_info.commit}`")
        if git_info.commit_subject:
            parts.append(f" — {git_info.commit_subject}")
        parts.append("\n")
        if git_info.remotes:
            parts.append(f"- **Git Remotes:** {', '.join(f'`{r}`' for r in git_info.remotes)}\n")
        if git_info.tracked_count is not None:
            parts.append(f"- **Tracked Files (worktree):** {git_info.tracked_count}\n")
        parts.append(f"- **Worktree Status:** {git_info.status_summary}\n")
    else:
        parts.append("- **Git:** not available / not a git worktree\n")
    parts.append("\n")

    parts.append("## Detected Stack Signals\n\n")
    for signal in stack:
        parts.append(f"- {signal}\n")
    parts.append("\n")

    parts.append(render_branch_catalog(branch_catalog or []))

    parts.append(render_local_runtime_inventory(local_runtime))

    overview_sources = [
        "README.md",
        "product-vision.md",
        "AGENTS.md",
        "development-workflow.md",
        "docs/evaluation/prototype-evaluation.md",
    ]
    parts.append("## High-Level Project Context\n\n")
    any_overview = False
    for rel in overview_sources:
        if rel in content_map:
            any_overview = True
            preview = first_meaningful_paragraph(content_map[rel])
            parts.append(f"### From `{rel}`\n\n")
            parts.append(f"{preview}\n\n" if preview else "_No extractable summary text._\n\n")
    if not any_overview:
        parts.append("_No primary documentation files were found in this export._\n\n")

    parts.append("## Documentation Index\n\n")
    if docs:
        for item in docs:
            parts.append(f"- `{item.rel_path}` ({item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No documentation files included._\n")
    parts.append("\n")

    parts.append("## Configuration Index\n\n")
    if configs:
        for item in configs:
            parts.append(f"- `{item.rel_path}` ({item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No configuration files included._\n")
    parts.append("\n")

    parts.append("## Source Index\n\n")
    if sources:
        for item in sources:
            parts.append(f"- `{item.rel_path}` ({item.language or 'plain text'}, {item.size_bytes:,} bytes)\n")
    else:
        parts.append("_No source files included._\n")
    parts.append("\n")

    parts.append("## Language Breakdown\n\n")
    for lang, count in sorted(by_language.items(), key=lambda pair: (-pair[1], pair[0])):
        parts.append(f"- {lang}: {count}\n")
    parts.append("\n")

    parts.append("## Project Structure\n\n")
    parts.append("```text\n")
    parts.append(build_tree_str([item.rel_path for item in records], project_name))
    parts.append("\n```\n\n")

    if docs:
        parts.append("## Documentation Contents\n\n")
        for item in docs:
            parts.append(render_file_section(item))

    if configs:
        parts.append("## Configuration Contents\n\n")
        for item in configs:
            parts.append(render_file_section(item))

    if sources:
        parts.append("## Source Contents\n\n")
        for item in sources:
            parts.append(render_file_section(item))

    parts.append("## Diagnostics & Exclusions\n\n")
    parts.append("<details>\n<summary>Excluded paths and policy notes</summary>\n\n")
    if excluded:
        for path, reason in sorted(excluded, key=lambda pair: pair[0].casefold()):
            parts.append(f"- `{path}` — *{reason}*\n")
    else:
        parts.append("_No exclusions recorded._\n")
    parts.append("\n</details>\n")

    return "".join(parts)


def atomic_write(output_path: Path, content: str) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    temp_file: Path | None = None
    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            newline="\n",
            dir=output_path.parent,
            prefix=".export_",
            suffix=".tmp",
            delete=False,
        ) as tmp:
            temp_file = Path(tmp.name)
            tmp.write(content)
            tmp.flush()
            os.fsync(tmp.fileno())
        os.replace(temp_file, output_path)
    except Exception:
        if temp_file and temp_file.exists():
            temp_file.unlink(missing_ok=True)
        raise


# ---------------------------------------------------------
# Worktree overlay
# ---------------------------------------------------------

def overlay_dirty_worktree(
    project_root: Path,
    output_path: Path,
    include_locks: bool,
    records: list[FileRecord],
    excluded: list[tuple[str, str]],
    redacted_total: int,
    source_label: str,
) -> tuple[list[FileRecord], list[tuple[str, str]], int, str]:
    """Overlay only modified or untracked worktree files onto a git-based export."""
    dirty_paths = list_dirty_worktree_paths(project_root)
    worktree_records, worktree_excluded, worktree_redacted = gather_from_workdir(
        project_root,
        output_path,
        include_locks,
        path_filter=dirty_paths,
    )
    before = {item.rel_path for item in records}
    records = merge_records(records, worktree_records)
    overlay_paths = {item.rel_path for item in worktree_records}
    added = sorted(overlay_paths - before)
    updated = sorted(overlay_paths & before)
    excluded.extend(worktree_excluded)
    excluded = _dedupe_excluded(excluded)
    redacted_total += worktree_redacted
    extra_bits = []
    if added:
        extra_bits.append(f"{len(added)} worktree-only files")
    if updated:
        extra_bits.append(f"{len(updated)} worktree overlays")
    if extra_bits:
        source_label += " + " + ", ".join(extra_bits)
    return records, excluded, redacted_total, source_label


def merge_records(
    base: list[FileRecord],
    overlay: list[FileRecord],
) -> list[FileRecord]:
    merged = {item.rel_path: item for item in base}
    for item in overlay:
        previous = merged.get(item.rel_path)
        variants = list(previous.variants) if previous else []
        if previous and previous.content != item.content and previous.source_ref:
            note = f"{previous.source_ref} (overlaid by worktree)"
            if note not in variants:
                variants.append(note)
        merged[item.rel_path] = FileRecord(
            rel_path=item.rel_path,
            content=item.content,
            size_bytes=item.size_bytes,
            language=item.language,
            category=item.category,
            source_ref=item.source_ref or "worktree",
            variants=variants,
        )
    return sorted(merged.values(), key=lambda item: item.rel_path.casefold())


def _dedupe_excluded(excluded: list[tuple[str, str]]) -> list[tuple[str, str]]:
    seen: set[tuple[str, str]] = set()
    out: list[tuple[str, str]] = []
    for item in excluded:
        if item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def export_project(
    project_root: Path,
    output_path: Path,
    include_locks: bool = False,
    git_ref: str | None = None,
    overlay_worktree: bool = True,
    worktree_only: bool = False,
    include_absent_from_head: bool = False,
) -> int:
    if not project_root.is_dir():
        print(f"Error: Directory not found: {project_root}", file=sys.stderr)
        return 1

    git_info = collect_git_info(project_root)
    branch_catalog = collect_branch_catalog(project_root) if git_info.available else []

    try:
        if worktree_only:
            records, excluded, redacted_total = gather_from_workdir(
                project_root, output_path, include_locks
            )
            for item in records:
                if not item.source_ref:
                    item.source_ref = "worktree"
            source_label = "working tree only"
        elif git_ref:
            records, excluded, redacted_total = gather_from_git_ref(
                project_root, git_ref, include_locks
            )
            source_label = f"git ref `{git_ref}`"
            if overlay_worktree:
                records, excluded, redacted_total, source_label = overlay_dirty_worktree(
                    project_root,
                    output_path,
                    include_locks,
                    records,
                    excluded,
                    redacted_total,
                    source_label,
                )
        else:
            records, excluded, redacted_total, union_branches = gather_union_from_branches(
                project_root, include_locks, include_absent_from_head
            )
            source_label = f"union of {len(union_branches)} local branches"
            if overlay_worktree:
                records, excluded, redacted_total, source_label = overlay_dirty_worktree(
                    project_root,
                    output_path,
                    include_locks,
                    records,
                    excluded,
                    redacted_total,
                    source_label,
                )
    except RuntimeError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    total_bytes = sum(item.size_bytes for item in records)
    if total_bytes > MAX_TOTAL_SOURCE_BYTES:
        print(
            f"Error: Total export size exceeds safety limit "
            f"({total_bytes / 1024 / 1024:.1f} MB)",
            file=sys.stderr,
        )
        return 1

    example_text = next(
        (item.content for item in records if item.rel_path == ".env.example"),
        None,
    )
    local_runtime = collect_local_runtime_inventory(
        project_root,
        example_text=example_text,
    )

    markdown = build_markdown(
        project_name=project_root.resolve().name,
        project_root=project_root.resolve(),
        records=records,
        excluded=excluded,
        git_info=git_info,
        source_label=source_label,
        redacted_total=redacted_total,
        local_runtime=local_runtime,
        branch_catalog=branch_catalog,
    )

    try:
        atomic_write(output_path, markdown)
    except OSError as err:
        print(f"Error writing export file: {err}", file=sys.stderr)
        return 1

    variant_files = sum(1 for item in records if item.variants)
    print("\n[OK] Project exported for AI evaluation.")
    print(f"  Output File:      {output_path.resolve()}")
    print(f"  Export Source:    {source_label}")
    print(f"  Files Exported:   {len(records)}")
    print(f"  Branch Catalog:   {len(branch_catalog)} refs")
    print(f"  Variant Files:    {variant_files}")
    print(f"  Secrets Redacted: {redacted_total}")
    print(
        "  Local Inventory:  "
        f".env={'yes' if local_runtime.env.present else 'no'}, "
        f"cms/data={'yes' if local_runtime.data_dir.present else 'no'} "
        f"({local_runtime.data_dir.file_count} files), "
        f"cms/uploads={'yes' if local_runtime.uploads_dir.present else 'no'} "
        f"({local_runtime.uploads_dir.file_count} files)"
    )
    if git_info.available:
        print(f"  Git Branch:       {git_info.branch} @ {git_info.commit}")
    return 0


# ---------------------------------------------------------
# Entrypoint
# ---------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Export the full project into one Markdown file for external AI evaluation. "
            "Default: union of all local git branches, overlay of modified or untracked "
            "worktree files, and a local runtime inventory."
        )
    )
    parser.add_argument(
        "project_path",
        nargs="?",
        default=".",
        help="Path to project directory (default: current working directory)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default=None,
        help="Output Markdown path (default: <project_dir>/project_code_export.md)",
    )
    parser.add_argument(
        "--include-locks",
        action="store_true",
        help="Include lockfiles such as package-lock.json",
    )
    parser.add_argument(
        "--ref",
        default=None,
        help=(
            "Export files from a single git ref/branch/commit instead of the branch union "
            "(example: cursor/prototype-evaluation-process). "
            "Only modified or untracked worktree files are overlaid by default."
        ),
    )
    parser.add_argument(
        "--worktree-only",
        action="store_true",
        help="Export only the current working tree (skip branch union)",
    )
    parser.add_argument(
        "--no-overlay-worktree",
        action="store_true",
        help="Do not overlay modified or untracked worktree files on git-based exports",
    )
    parser.add_argument(
        "--include-absent-from-head",
        action="store_true",
        help=(
            "Include files that exist only on older local branches and not on HEAD. "
            "Those files are marked absent from HEAD. Default is to omit them."
        ),
    )

    args = parser.parse_args()
    if args.worktree_only and args.ref:
        print("Error: --worktree-only and --ref cannot be used together.", file=sys.stderr)
        return 2

    project_root = Path(args.project_path).resolve()
    output_path = (
        Path(args.output).resolve()
        if args.output
        else project_root / "project_code_export.md"
    )
    return export_project(
        project_root=project_root,
        output_path=output_path,
        include_locks=args.include_locks,
        git_ref=args.ref,
        overlay_worktree=not args.no_overlay_worktree,
        worktree_only=args.worktree_only,
        include_absent_from_head=args.include_absent_from_head,
    )


if __name__ == "__main__":
    raise SystemExit(main())
    
````

### File: `scripts/backup-loop.sh`

> **Path:** `scripts/backup-loop.sh` | **Size:** 390 bytes | **Language:** bash | **Category:** source | **Source:** `worktree`

```bash
#!/bin/sh
# Daily database dump and uploads archive.
# Encryption and the off-server copy are added when that destination is chosen.
set -eu

mkdir -p /backups

while true; do
  stamp=$(date -u +%Y%m%dT%H%M%SZ)
  pg_dump --format=custom --file="/backups/db-${stamp}.dump"
  tar -cf "/backups/uploads-${stamp}.tar" -C /uploads .
  find /backups -type f -mtime +14 -delete
  sleep 86400
done
```

### File: `scripts/init-directus-schema.mjs`

> **Path:** `scripts/init-directus-schema.mjs` | **Size:** 34,205 bytes | **Language:** javascript | **Category:** source | **Source:** `worktree`

```javascript
/**
 * Create the local faculty Directus schema, roles, and permissions.
 * Reads DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD from the root .env.
 * Never prints those values. Refuses any Directus URL that is not local.
 */
import { randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const STATUS_COLLECTIONS = [
  "organization_units",
  "people",
  "role_assignments",
  "programs",
  "news_articles",
  "events",
  "service_items",
  "pages",
];

const CONTENT_COLLECTIONS = [...STATUS_COLLECTIONS, "academic_profiles"];

const STATUS_CHOICES = [
  { text: "Draft", value: "draft" },
  { text: "Published", value: "published" },
  { text: "Archived", value: "archived" },
];

const UNIT_TYPE_CHOICES = [
  { text: "Faculty", value: "faculty" },
  { text: "Deputy", value: "deputy" },
  { text: "Department", value: "department" },
  { text: "Laboratory", value: "laboratory" },
  { text: "Clinic", value: "clinic" },
];

const PREFIX_FA_CHOICES = [
  { text: "دکتر", value: "دکتر" },
  { text: "مهندس", value: "مهندس" },
  { text: "استاد", value: "استاد" },
];

const PREFIX_EN_CHOICES = [
  { text: "Dr.", value: "Dr." },
  { text: "Prof.", value: "Prof." },
];

const RANK_CHOICES = [
  { text: "مربی (Instructor / Lecturer)", value: "instructor" },
  { text: "استادیار (Assistant Professor)", value: "assistant_professor" },
  { text: "دانشیار (Associate Professor)", value: "associate_professor" },
  { text: "استاد (Professor)", value: "full_professor" },
  { text: "استاد ممتاز (Distinguished Professor)", value: "distinguished_professor" },
  { text: "مدرس بالینی (Clinical Instructor)", value: "clinical_instructor" },
];

const MEMBERSHIP_CHOICES = [
  { text: "هیئت علمی تمام‌وقت (Full-Time Tenured / Tenure-Track)", value: "official_tenured" },
  { text: "هیئت علمی پیمانی (Full-Time Contractual)", value: "contractual" },
  { text: "استاد مدعو (Adjunct / Visiting)", value: "adjunct" },
  { text: "استاد پیشکسوت (Professor Emeritus)", value: "emeritus" },
];

const DEGREE_CHOICES = [
  { text: "دکترای حرفه‌ای دامپزشکی (D.V.M.)", value: "dvm" },
  { text: "دکترای تخصصی (Ph.D.)", value: "phd" },
  { text: "دکترای تخصصی بالینی (D.V.Sc.)", value: "dvsc" },
  { text: "کارشناسی ارشد (M.Sc.)", value: "msc" },
];

const PROGRAM_DEGREE_CHOICES = [
  { text: "دکترای عمومی دامپزشکی (DVM)", value: "dvm" },
  { text: "کارشناسی ارشد (M.Sc.)", value: "msc" },
  { text: "دکترای تخصصی (Ph.D.)", value: "phd" },
  { text: "دستیاری (D.V.Sc.)", value: "dvsc" },
];

const ROLE_CHOICES = [
  { text: "رئیس دانشکده", value: "faculty_dean" },
  { text: "معاون دانشکده", value: "vice_dean" },
  { text: "مدیر گروه آموزشی", value: "department_head" },
  { text: "رئیس بیمارستان آموزشی", value: "hospital_director" },
  { text: "سرپرست آزمایشگاه", value: "lab_supervisor" },
  { text: "عضو هیئت علمی", value: "faculty_member" },
  { text: "کارشناس", value: "staff" },
];

const NEWS_CATEGORY_CHOICES = [
  { text: "News", value: "news" },
  { text: "Announcement", value: "announcement" },
];

function readEnvFile(filePath) {
  const values = {};
  const text = readFileSync(filePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      continue;
    }
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function assertLocalUrl(raw) {
  const fallback = "http://cms.localhost";
  if (!raw) {
    return fallback;
  }
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("DIRECTUS_URL is not a valid URL. Refusing to continue.");
  }
  // Compose keeps Directus off the host network. The schema script runs on the
  // host and reaches it through the proxy admin host.
  if (url.hostname === "cms") {
    return fallback;
  }
  if (
    url.hostname !== "127.0.0.1" &&
    url.hostname !== "localhost" &&
    url.hostname !== "cms.localhost"
  ) {
    throw new Error("Refusing to change a non-local Directus instance.");
  }
  return raw.replace(/\/$/, "");
}

function uuidPrimaryKey() {
  return {
    field: "id",
    type: "uuid",
    schema: {
      is_primary_key: true,
      has_auto_increment: false,
      is_nullable: false,
    },
    meta: {
      hidden: true,
      readonly: true,
      interface: "input",
      special: ["uuid"],
    },
  };
}

function statusField() {
  return {
    field: "status",
    type: "string",
    schema: {
      is_nullable: false,
      default_value: "draft",
      max_length: 255,
    },
    meta: {
      interface: "select-dropdown",
      display: "labels",
      width: "full",
      options: { choices: STATUS_CHOICES },
    },
  };
}

function stringField(field, { unique = false, required = false } = {}) {
  return {
    field,
    type: "string",
    schema: {
      is_nullable: !required,
      is_unique: unique,
      max_length: 255,
    },
    meta: {
      interface: "input",
      width: "half",
      required,
    },
  };
}

function textField(field) {
  return {
    field,
    type: "text",
    schema: { is_nullable: true },
    meta: { interface: "input-multiline", width: "full" },
  };
}

function enumField(field, choices) {
  return {
    field,
    type: "string",
    schema: { is_nullable: true, max_length: 255 },
    meta: {
      interface: "select-dropdown",
      width: "half",
      options: { choices },
    },
  };
}

function integerField(field, defaultValue = null) {
  return {
    field,
    type: "integer",
    schema: {
      is_nullable: true,
      ...(defaultValue === null ? {} : { default_value: defaultValue }),
    },
    meta: { interface: "input", width: "half" },
  };
}

function booleanField(field, defaultValue = false) {
  return {
    field,
    type: "boolean",
    schema: { is_nullable: true, default_value: defaultValue },
    meta: {
      interface: "boolean",
      special: ["cast-boolean"],
      width: "half",
    },
  };
}

function jsonField(field) {
  return {
    field,
    type: "json",
    schema: { is_nullable: true },
    meta: {
      interface: "input-code",
      options: { language: "JSON" },
      width: "full",
    },
  };
}

function timestampField(field) {
  return {
    field,
    type: "timestamp",
    schema: { is_nullable: true },
    meta: { interface: "datetime", width: "half" },
  };
}

function collectionMeta(icon, template, { archived = true, sortField = null } = {}) {
  return {
    icon,
    display_template: template,
    accountability: "all",
    ...(archived
      ? {
          archive_field: "status",
          archive_value: "archived",
          unarchive_value: "draft",
          archive_app_filter: true,
        }
      : {}),
    ...(sortField ? { sort_field: sortField } : {}),
  };
}

const COLLECTIONS = [
  {
    collection: "organization_units",
    meta: collectionMeta("account_tree", "{{name_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      integerField("sort_order", 0),
      enumField("unit_type", UNIT_TYPE_CHOICES),
      stringField("phone"),
      stringField("email"),
      stringField("location_fa"),
      stringField("location_en"),
      stringField("name_fa"),
      stringField("name_en"),
      textField("intro_fa"),
      textField("intro_en"),
    ],
  },
  {
    collection: "people",
    meta: collectionMeta("person", "{{full_name_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("academic_title_prefix_fa", PREFIX_FA_CHOICES),
      enumField("academic_title_prefix_en", PREFIX_EN_CHOICES),
      stringField("first_name_fa", { required: true }),
      stringField("last_name_fa", { required: true }),
      stringField("full_name_fa", { required: true }),
      stringField("first_name_en"),
      stringField("last_name_en"),
      stringField("full_name_en"),
      stringField("public_email"),
      stringField("office_phone"),
      stringField("office_location_fa"),
      stringField("office_location_en"),
      stringField("office_hours_fa"),
      stringField("office_hours_en"),
    ],
  },
  {
    collection: "academic_profiles",
    meta: collectionMeta("school", "{{academic_rank}}", { archived: false }),
    fields: [
      enumField("academic_rank", RANK_CHOICES),
      enumField("faculty_membership_type", MEMBERSHIP_CHOICES),
      enumField("highest_degree", DEGREE_CHOICES),
      stringField("specialty_fa"),
      stringField("specialty_en"),
      textField("bio_fa"),
      textField("bio_en"),
      jsonField("research_interests_fa"),
      jsonField("research_interests_en"),
      jsonField("education_history_fa"),
      jsonField("education_history_en"),
      jsonField("courses_taught_fa"),
      jsonField("courses_taught_en"),
      jsonField("selected_publications"),
      stringField("veterinary_council_number"),
      stringField("orcid_id"),
      stringField("google_scholar_url"),
      stringField("scopus_author_id"),
      stringField("wos_researcher_id"),
      stringField("researchgate_url"),
      stringField("institutional_cv_url"),
    ],
  },
  {
    collection: "role_assignments",
    meta: collectionMeta("badge", "{{role_title_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      enumField("role_category", ROLE_CHOICES),
      stringField("role_title_fa"),
      stringField("role_title_en"),
      booleanField("is_primary_role", false),
      integerField("sort_order", 0),
    ],
  },
  {
    collection: "programs",
    meta: collectionMeta("menu_book", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("degree_level", PROGRAM_DEGREE_CHOICES),
      stringField("title_fa"),
      stringField("title_en"),
      textField("duration_fa"),
      textField("duration_en"),
      textField("admission_fa"),
      textField("admission_en"),
      textField("courses_intro_fa"),
      textField("courses_intro_en"),
    ],
  },
  {
    collection: "news_articles",
    meta: collectionMeta("newspaper", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("category", NEWS_CATEGORY_CHOICES),
      timestampField("published_at"),
      stringField("title_fa"),
      stringField("title_en"),
      textField("summary_fa"),
      textField("summary_en"),
      textField("body_fa"),
      textField("body_en"),
    ],
  },
  {
    collection: "events",
    meta: collectionMeta("event", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      timestampField("start_at"),
      timestampField("end_at"),
      stringField("title_fa"),
      stringField("title_en"),
      stringField("location_fa"),
      stringField("location_en"),
      textField("description_fa"),
      textField("description_en"),
    ],
  },
  {
    collection: "service_items",
    meta: collectionMeta("medical_services", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      stringField("working_hours_fa"),
      stringField("working_hours_en"),
      stringField("contact_phone"),
      stringField("title_fa"),
      stringField("title_en"),
      textField("visit_conditions_fa"),
      textField("visit_conditions_en"),
      textField("description_fa"),
      textField("description_en"),
    ],
  },
  {
    collection: "pages",
    meta: collectionMeta("description", "{{title_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      booleanField("show_in_nav", false),
      integerField("sort_order", 0),
      stringField("title_fa"),
      stringField("title_en"),
      stringField("seo_title_fa"),
      stringField("seo_title_en"),
      textField("seo_description_fa"),
      textField("seo_description_en"),
      jsonField("sections_fa"),
      jsonField("sections_en"),
    ],
  },
];

const RELATIONS = [
  ["organization_units", "parent_id", "organization_units", "SET NULL", false],
  ["people", "avatar", "directus_files", "SET NULL", false],
  ["academic_profiles", "person_id", "people", "RESTRICT", true],
  ["academic_profiles", "primary_department_id", "organization_units", "SET NULL", false],
  ["academic_profiles", "cv_file", "directus_files", "SET NULL", false],
  ["role_assignments", "person_id", "people", "SET NULL", false],
  ["role_assignments", "unit_id", "organization_units", "SET NULL", false],
  ["programs", "department_id", "organization_units", "SET NULL", false],
  ["programs", "curriculum_pdf", "directus_files", "SET NULL", false],
  ["news_articles", "cover_image", "directus_files", "SET NULL", false],
  ["news_articles", "unit_id", "organization_units", "SET NULL", false],
  ["events", "organizer_unit_id", "organization_units", "SET NULL", false],
  ["events", "cover_image", "directus_files", "SET NULL", false],
  ["service_items", "unit_id", "organization_units", "SET NULL", false],
];

function envToken(filePath) {
  if (!readFileSync(filePath, "utf8")) {
    return "";
  }
  return readEnvFile(filePath).DIRECTUS_READ_TOKEN?.trim() ?? "";
}

function writeToken(filePath, token) {
  const original = readFileSync(filePath, "utf8");
  const next = /^DIRECTUS_READ_TOKEN=.*$/m.test(original)
    ? original.replace(/^DIRECTUS_READ_TOKEN=.*$/m, `DIRECTUS_READ_TOKEN=${token}`)
    : `${original.replace(/\s*$/, "\n")}DIRECTUS_READ_TOKEN=${token}\n`;
  writeFileSync(filePath, next);
}

function readerTokenFor(env, envPath) {
  const current = envToken(envPath);
  const secret = env.DIRECTUS_SECRET?.trim();
  if (current && current !== secret) {
    return { token: current, replace: false };
  }
  return { token: randomBytes(32).toString("hex"), replace: true };
}

async function request(base, token, method, pathname, body) {
  const response = await fetch(`${base}${pathname}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }
  }
  return { status: response.status, payload };
}

function errorMessage(payload, status) {
  const messages = payload?.errors?.map((error) => error.message).filter(Boolean);
  const text = messages?.length ? messages.join("; ") : `HTTP ${status}`;
  return text.replace(/Value "[^"]*" for field "(token|password|secret)"/gi, 'Value for field "$1"');
}

async function send(base, token, method, pathname, body) {
  const result = await request(base, token, method, pathname, body);
  if (result.status < 200 || result.status >= 300) {
    throw new Error(`${method} ${pathname} failed: ${errorMessage(result.payload, result.status)}`);
  }
  return result.payload;
}

async function ensureCollection(base, token, definition, existing) {
  if (!existing.has(definition.collection)) {
    await send(base, token, "POST", "/collections", {
      collection: definition.collection,
      meta: definition.meta,
      schema: {},
      fields: [uuidPrimaryKey(), ...definition.fields],
    });
    existing.add(definition.collection);
    console.log(`created collection ${definition.collection}`);
    return;
  }
  const current = await send(base, token, "GET", `/fields/${definition.collection}`);
  const have = new Set((current?.data ?? []).map((field) => field.field));
  for (const field of definition.fields) {
    if (have.has(field.field)) {
      continue;
    }
    await send(base, token, "POST", `/fields/${definition.collection}`, field);
    console.log(`added field ${definition.collection}.${field.field}`);
  }
}

async function ensureRelation(base, token, relation, existing) {
  const [collection, field, related, onDelete, unique] = relation;
  const key = `${collection}.${field}`;
  const current = await send(base, token, "GET", `/fields/${collection}`);
  const have = new Set((current?.data ?? []).map((item) => item.field));
  if (!have.has(field)) {
    await send(base, token, "POST", `/fields/${collection}`, {
      field,
      type: "uuid",
      schema: {
        is_nullable: !unique,
        is_unique: unique,
      },
      meta: {
        interface: "select-dropdown-m2o",
        special: ["m2o"],
        width: "half",
        required: unique,
      },
    });
    console.log(`added field ${key}`);
  }
  if (!existing.has(key)) {
    await send(base, token, "POST", "/relations", {
      collection,
      field,
      related_collection: related,
      meta: {
        many_collection: collection,
        many_field: field,
        one_collection: related,
        one_field: null,
        one_deselect_action: "nullify",
      },
      schema: { on_delete: onDelete },
    });
    existing.add(key);
    console.log(`created relation ${key}`);
  }
  await send(base, token, "PATCH", `/fields/${collection}/${field}`, {
    meta: {
      interface: "select-dropdown-m2o",
      special: ["m2o"],
      width: "half",
      required: unique,
    },
    schema: {
      is_unique: unique,
      is_nullable: !unique,
    },
  });
}

async function ensureRole(base, token, name, description, icon) {
  const found = await send(
    base,
    token,
    "GET",
    `/roles?filter[name][_eq]=${encodeURIComponent(name)}&fields=id,name&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    return existing.id;
  }
  const created = await send(base, token, "POST", "/roles", { name, description, icon });
  console.log(`created role ${name}`);
  return created.data.id;
}

async function ensurePolicy(base, token, name, description, icon, appAccess) {
  const found = await send(
    base,
    token,
    "GET",
    `/policies?filter[name][_eq]=${encodeURIComponent(name)}&fields=id,name&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    return existing.id;
  }
  const created = await send(base, token, "POST", "/policies", {
    name,
    description,
    icon,
    admin_access: false,
    app_access: appAccess,
    enforce_tfa: false,
  });
  console.log(`created policy ${name}`);
  return created.data.id;
}

async function ensureAccess(base, token, roleId, policyId) {
  const found = await send(
    base,
    token,
    "GET",
    `/access?filter[role][_eq]=${roleId}&filter[policy][_eq]=${policyId}&fields=id&limit=1`,
  );
  if (found?.data?.length) {
    return;
  }
  await send(base, token, "POST", "/access", { role: roleId, policy: policyId });
}

async function ensurePermission(base, token, policyId, collection, action) {
  const found = await send(
    base,
    token,
    "GET",
    `/permissions?filter[policy][_eq]=${policyId}&filter[collection][_eq]=${collection}&filter[action][_eq]=${action}&fields=id&limit=-1`,
  );
  const rows = found?.data ?? [];
  for (const extra of rows.slice(1)) {
    await send(base, token, "DELETE", `/permissions/${extra.id}`);
  }
  if (rows.length > 0) {
    return;
  }
  // Directus 12 Core rejects item filters (custom permission rules). Full read is
  // stored here; cms/extensions/site-reader-published narrows Site Reader queries.
  await send(base, token, "POST", "/permissions", {
    policy: policyId,
    collection,
    action,
    permissions: null,
    fields: ["*"],
  });
}

async function ensureUser(base, token, { email, roleId, staticToken, firstName, lastName, updateToken }) {
  const found = await send(
    base,
    token,
    "GET",
    `/users?filter[email][_eq]=${encodeURIComponent(email)}&fields=id,token&limit=1`,
  );
  const existing = found?.data?.[0];
  if (!existing) {
    const created = await send(base, token, "POST", "/users", {
      email,
      [REDACTED_SECRET]"hex"),
      role: roleId,
      status: "active",
      token: staticToken,
      first_name: firstName,
      last_name: lastName,
    });
    console.log(`created user ${email}`);
    return created.data.id;
  }
  if (updateToken) {
    await send(base, token, "PATCH", `/users/${existing.id}`, { token: staticToken, role: roleId });
    console.log(`updated token for ${email}`);
  }
  return existing.id;
}

async function deleteUserByEmail(base, token, email) {
  const found = await send(
    base,
    token,
    "GET",
    `/users?filter[email][_eq]=${encodeURIComponent(email)}&fields=id&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    await send(base, token, "DELETE", `/users/${existing.id}`);
  }
}

async function cleanupProbes(base, token) {
  const assignments = await send(
    base,
    token,
    "GET",
    "/items/role_assignments?fields=id,person_id.slug,unit_id.slug&limit=-1",
  );
  for (const assignment of assignments?.data ?? []) {
    const personSlug = assignment.person_id?.slug ?? "";
    const unitSlug = assignment.unit_id?.slug ?? "";
    if (personSlug.startsWith("schema-probe") || unitSlug.startsWith("schema-probe")) {
      await send(base, token, "DELETE", `/items/role_assignments/${assignment.id}`);
    }
  }
  const people = await send(
    base,
    token,
    "GET",
    "/items/people?filter[slug][_starts_with]=schema-probe&fields=id&limit=-1",
  );
  for (const person of people?.data ?? []) {
    const profiles = await send(
      base,
      token,
      "GET",
      `/items/academic_profiles?filter[person_id][_eq]=${person.id}&fields=id&limit=-1`,
    );
    for (const profile of profiles?.data ?? []) {
      await send(base, token, "DELETE", `/items/academic_profiles/${profile.id}`);
    }
    await send(base, token, "DELETE", `/items/people/${person.id}`);
  }
  const units = await send(
    base,
    token,
    "GET",
    "/items/organization_units?filter[slug][_starts_with]=schema-probe&fields=id&limit=-1",
  );
  for (const unit of units?.data ?? []) {
    await send(base, token, "DELETE", `/items/organization_units/${unit.id}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function provePermissions(base, adminToken, readerToken) {
  await cleanupProbes(base, adminToken);
  await deleteUserByEmail(base, adminToken, "schema-probe-editor@example.com");

  const editorRole = await send(
    base,
    adminToken,
    "GET",
    "/roles?filter[name][_eq]=Content%20Editor&fields=id&limit=1",
  );
  const editorToken = randomBytes(24).toString("hex");
  await send(base, adminToken, "POST", "/users", {
    email: "schema-probe-editor@example.com",
    [REDACTED_SECRET]"hex"),
    role: editorRole.data[0].id,
    status: "active",
    token: editorToken,
    first_name: "Schema",
    last_name: "Probe",
  });

  try {
    await send(base, adminToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-draft",
      name_fa: "Synthetic probe draft",
    });
    await send(base, adminToken, "POST", "/items/organization_units", {
      status: "published",
      slug: "schema-probe-published",
      name_fa: "Synthetic probe published",
    });

    const draftPerson = await send(base, adminToken, "POST", "/items/people", {
      status: "draft",
      slug: "schema-probe-person-draft",
      first_name_fa: "آزمایشی",
      last_name_fa: "پیش‌نویس",
      full_name_fa: "آزمایشی پیش‌نویس",
    });
    const publishedPerson = await send(base, adminToken, "POST", "/items/people", {
      status: "published",
      slug: "schema-probe-person-published",
      first_name_fa: "آزمایشی",
      last_name_fa: "منتشر",
      full_name_fa: "آزمایشی منتشر",
      full_name_en: "Synthetic Published Probe",
    });
    await send(base, adminToken, "POST", "/items/academic_profiles", {
      person_id: draftPerson.data.id,
      academic_rank: "instructor",
    });
    await send(base, adminToken, "POST", "/items/academic_profiles", {
      person_id: publishedPerson.data.id,
      academic_rank: "assistant_professor",
    });

    const readerUnits = await send(
      base,
      readerToken,
      "GET",
      "/items/organization_units?filter[slug][_starts_with]=schema-probe&fields=slug,status&limit=-1",
    );
    const readerSlugs = (readerUnits?.data ?? []).map((item) => item.slug).sort();
    assert(
      readerSlugs.length === 1 && readerSlugs[0] === "schema-probe-published",
      "Site Reader did not return only the published probe.",
    );

    const readerDenied = await request(base, readerToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-reader-denied",
      name_fa: "Denied",
    });
    assert(readerDenied.status === 403, "Site Reader create was not rejected.");

    const publishedUnit = await send(base, adminToken, "POST", "/items/organization_units", {
      status: "published",
      slug: "schema-probe-unit-published",
      name_fa: "واحد آزمایشی",
    });
    await send(base, adminToken, "POST", "/items/role_assignments", {
      status: "published",
      person_id: draftPerson.data.id,
      unit_id: publishedUnit.data.id,
      role_category: "staff",
      role_title_fa: "کارشناس آزمایشی",
    });
    await send(base, adminToken, "POST", "/items/role_assignments", {
      status: "published",
      person_id: publishedPerson.data.id,
      unit_id: publishedUnit.data.id,
      role_category: "faculty_member",
      role_title_fa: "عضو آزمایشی",
    });

    const readerProfiles = await send(
      base,
      readerToken,
      "GET",
      "/items/academic_profiles?fields=person_id.status,person_id.slug&limit=-1",
    );
    const profileSlugs = (readerProfiles?.data ?? []).map((item) => item.person_id?.slug);
    assert(
      profileSlugs.includes("schema-probe-person-published") &&
        !profileSlugs.includes("schema-probe-person-draft"),
      "Site Reader academic profile filter did not follow the person's status.",
    );

    const readerAssignments = await send(
      base,
      readerToken,
      "GET",
      "/items/role_assignments?fields=person_id.slug,unit_id.slug&limit=-1",
    );
    const assignmentPeople = (readerAssignments?.data ?? []).map((item) => item.person_id?.slug);
    assert(
      assignmentPeople.includes("schema-probe-person-published") &&
        !assignmentPeople.includes("schema-probe-person-draft"),
      "Site Reader role assignment filter did not require a published person and unit.",
    );

    const editorCreated = await send(base, editorToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-editor",
      name_fa: "Synthetic editor probe",
    });
    assert(editorCreated?.data?.id, "Content Editor could not create a probe item.");

    const editorSchema = await request(base, editorToken, "POST", "/collections", {
      collection: "schema_probe_forbidden",
      schema: {},
    });
    assert(
      editorSchema.status === 403 || editorSchema.status === 401,
      "Content Editor schema change was not rejected.",
    );

    const publicRead = await request(
      base,
      null,
      "GET",
      "/items/organization_units?filter[slug][_eq]=schema-probe-published",
    );
    assert(
      publicRead.status === 401 || publicRead.status === 403,
      "Public read without a token was not rejected.",
    );
    console.log("permission checks passed");
  } finally {
    await cleanupProbes(base, adminToken);
    await deleteUserByEmail(base, adminToken, "schema-probe-editor@example.com");
  }
}

async function assertPublicUntouched(base, token) {
  const policies = await send(base, token, "GET", "/policies?fields=id,name&limit=-1");
  const publicPolicy = (policies?.data ?? []).find(
    (policy) => policy.name === "Public" || policy.name === "$t:public_label",
  );
  if (!publicPolicy) {
    console.log("no Public policy found; unauthenticated read is still checked directly");
    return;
  }
  const permissions = await send(
    base,
    token,
    "GET",
    `/permissions?filter[policy][_eq]=${publicPolicy.id}&fields=collection,action&limit=-1`,
  );
  const contentHit = (permissions?.data ?? []).filter((permission) =>
    CONTENT_COLLECTIONS.includes(permission.collection) || permission.collection === "directus_files",
  );
  assert(contentHit.length === 0, "Public policy has permissions on content or files.");
  console.log("public policy has no content permissions");
}

async function main() {
  const env = readEnvFile(path.join(root, ".env"));
  const email = env.DIRECTUS_ADMIN_EMAIL?.trim();
  const [REDACTED_SECRET]
  const base = assertLocalUrl(env.DIRECTUS_URL?.trim() || "");
  if (!email || !password) {
    throw new Error("DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD are required in the root .env.");
  }

  const login = await request(base, null, "POST", "/auth/login", { email, password });
  if (login.status < 200 || login.status >= 300) {
    throw new Error(`Admin login failed (${login.status}).`);
  }
  const adminToken = login.payload?.data?.access_token;
  if (!adminToken) {
    throw new Error("Admin login did not return an access token.");
  }

  const collectionList = await send(base, adminToken, "GET", "/collections?limit=-1");
  const existing = new Set((collectionList?.data ?? []).map((item) => item.collection));
  for (const definition of COLLECTIONS) {
    await ensureCollection(base, adminToken, definition, existing);
  }

  const relationList = await send(base, adminToken, "GET", "/relations?limit=-1");
  const relations = new Set(
    (relationList?.data ?? []).map((relation) => `${relation.collection}.${relation.field}`),
  );
  for (const relation of RELATIONS) {
    await ensureRelation(base, adminToken, relation, relations);
  }

  const readerRoleId = await ensureRole(
    base,
    adminToken,
    "Site Reader",
    "Server-only read of published items.",
    "visibility",
  );
  const readerPolicyId = await ensurePolicy(
    base,
    adminToken,
    "Site Reader",
    "Read published faculty content only.",
    "visibility",
    false,
  );
  await ensureAccess(base, adminToken, readerRoleId, readerPolicyId);
  for (const collection of STATUS_COLLECTIONS) {
    await ensurePermission(base, adminToken, readerPolicyId, collection, "read");
  }
  await ensurePermission(base, adminToken, readerPolicyId, "academic_profiles", "read");
  await ensurePermission(base, adminToken, readerPolicyId, "directus_files", "read");

  const editorRoleId = await ensureRole(
    base,
    adminToken,
    "Content Editor",
    "Faculty staff who create, edit, and publish. No schema access and no delete.",
    "edit",
  );
  const editorPolicyId = await ensurePolicy(
    base,
    adminToken,
    "Content Editor",
    "Create, read, and update content and files. No delete and no schema access.",
    "edit",
    true,
  );
  await ensureAccess(base, adminToken, editorRoleId, editorPolicyId);
  for (const collection of [...CONTENT_COLLECTIONS, "directus_files"]) {
    for (const action of ["create", "read", "update"]) {
      await ensurePermission(base, adminToken, editorPolicyId, collection, action);
    }
  }

  const envPath = path.join(root, "web", ".env.local");
  const rootEnvPath = path.join(root, ".env");
  const chosen = readerTokenFor(env, envPath);
  await ensureUser(base, adminToken, {
    email: "site-reader@example.com",
    roleId: readerRoleId,
    staticToken: chosen.token,
    firstName: "Site",
    lastName: "Reader",
    updateToken: chosen.replace,
  });
  if (chosen.replace) {
    writeToken(envPath, chosen.token);
    if (envToken(rootEnvPath) === env.DIRECTUS_SECRET?.trim() || !envToken(rootEnvPath)) {
      writeToken(rootEnvPath, chosen.token);
    }
    console.log("wrote a new DIRECTUS_READ_TOKEN to the local env files");
  } else {
    console.log("DIRECTUS_READ_TOKEN already set; attached it to Site Reader");
  }
  const readerToken = chosen.token;

  await assertPublicUntouched(base, adminToken);
  await provePermissions(base, adminToken, readerToken);
  console.log("local Directus schema is ready");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Schema setup failed.");
  process.exitCode = 1;
});
```

### File: `web/app/[locale]/departments/[slug]/page.tsx`

> **Path:** `web/app/[locale]/departments/[slug]/page.tsx` | **Size:** 3,287 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactList, ProseBlock } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getOrganizationUnitBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildCollegeJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getOrganizationUnitBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.name_fa, result.item.name_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getOrganizationUnitBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/departments/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const name = localeText(locale, item.name_fa, item.name_en);
  const heading = name || slug;
  const intro = localeText(locale, item.intro_fa, item.intro_en);
  const home = `/${locale}`;
  const path = `${home}/departments/${slug}`;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(name
      ? [
          {
            id: "college",
            json: serializeJsonLd(
              buildCollegeJsonLd(
                intro ? { name, description: intro } : { name },
              ),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.departments}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      <FactList
        items={[
          {
            term: copy.fields.phone,
            value: item.phone?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.email,
            value: item.email?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.location,
            value: localeText(locale, item.location_fa, item.location_en),
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.description} text={intro} />
    </DetailPage>
  );
}
```

### File: `web/app/[locale]/events/[slug]/page.tsx`

> **Path:** `web/app/[locale]/events/[slug]/page.tsx` | **Size:** 3,913 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage, FactList, ProseBlock } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getAssetUrl, getEventBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildEventJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  formatTimestamp,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getEventBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.title_fa, result.item.title_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getEventBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/events/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const description = localeText(locale, item.description_fa, item.description_en);
  const location = localeText(locale, item.location_fa, item.location_en);
  const start = item.start_at?.trim() ?? "";
  const end = item.end_at?.trim() ?? "";
  const home = `/${locale}`;
  const path = `${home}/events/${slug}`;
  const cover = item.cover_image ? getAssetUrl(item.cover_image, "card") : null;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.events, `${home}/events`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(title && start
      ? [
          {
            id: "event",
            json: serializeJsonLd(
              buildEventJsonLd({
                name: title,
                startDate: start,
                ...(end ? { endDate: end } : {}),
                ...(description ? { description } : {}),
                ...(location ? { locationName: location } : {}),
              }),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.events}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/events`, label: copy.catalog.events },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {cover ? <CoverImage src={cover} alt={heading} /> : null}
      <FactList
        items={[
          {
            term: copy.fields.starts,
            value: formatTimestamp(locale, item.start_at),
            latin: false,
          },
          {
            term: copy.fields.ends,
            value: formatTimestamp(locale, item.end_at),
            latin: false,
          },
          {
            term: copy.fields.location,
            value: location,
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.description} text={description} />
    </DetailPage>
  );
}
```

### File: `web/app/[locale]/events/page.tsx`

> **Path:** `web/app/[locale]/events/page.tsx` | **Size:** 2,033 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { IndexPage } from "@/components/page-frame";
import { getDirectusStatus, listEvents, type EventItem } from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  formatTimestamp,
  joinParts,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  timestamp,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return { title: getShellCopy(locale).catalog.events };
}

function bySoonest(a: EventItem, b: EventItem): number {
  const aTime = timestamp(a.start_at);
  const bTime = timestamp(b.start_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return aTime - bTime;
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const [events, status] = await Promise.all([
    listEvents(locale),
    getDirectusStatus(),
  ]);
  const items = [...events].sort(bySoonest).flatMap((event) => {
    const card = namedCard(
      event.id,
      publishedPath(locale, "events", event.slug),
      localeText(locale, event.title_fa, event.title_en),
      joinParts([
        formatTimestamp(locale, event.start_at),
        localeText(locale, event.location_fa, event.location_en),
      ]),
    );
    return card ? [card] : [];
  });

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.events}
      deck={copy.blurb}
      empty={copy.catalog.eventsEmpty}
      items={items}
      direction={getDirection(locale)}
      status={cmsStatusLabel(locale, status)}
    />
  );
}
```

### File: `web/app/[locale]/layout.tsx`

> **Path:** `web/app/[locale]/layout.tsx` | **Size:** 2,463 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDirection, getShellCopy, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getShellCopy(locale);
  return {
    title: {
      default: copy.title,
      template: `%s — ${copy.title}`,
    },
    description: copy.blurb,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getShellCopy(locale);

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body
        className={
          locale === "fa"
            ? "fa-digits flex min-h-full flex-col antialiased"
            : "flex min-h-full flex-col antialiased"
        }
      >
        <a href="#content" className="skip-link">
          {copy.skipToContent}
        </a>
        <SiteHeader
          locale={locale}
          copy={{
            title: copy.title,
            primary: copy.nav.primary,
            menuOpen: copy.nav.menuOpen,
            menuClose: copy.nav.menuClose,
            home: copy.nav.home,
            people: copy.nav.people,
            news: copy.nav.news,
            events: copy.nav.events,
            search: copy.nav.search,
            language: copy.nav.language,
            switchToFa: copy.switchToFa,
            switchToEn: copy.switchToEn,
          }}
        />
        {children}
        <SiteFooter
          locale={locale}
          copy={{
            title: copy.title,
            blurb: copy.blurb,
            primary: copy.nav.primary,
            home: copy.nav.home,
            people: copy.nav.people,
            news: copy.nav.news,
            events: copy.nav.events,
            search: copy.nav.search,
          }}
        />
      </body>
    </html>
  );
}
```

### File: `web/app/[locale]/news/[slug]/page.tsx`

> **Path:** `web/app/[locale]/news/[slug]/page.tsx` | **Size:** 3,280 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage, FactList, ProseBlock } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getAssetUrl, getNewsArticleBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import { buildBreadcrumbJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  breadcrumbItem,
  formatTimestamp,
  labelFor,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getNewsArticleBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.title_fa, result.item.title_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getNewsArticleBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/news/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const summary = localeText(locale, item.summary_fa, item.summary_en);
  const body = localeText(locale, item.body_fa, item.body_en);
  const home = `/${locale}`;
  const path = `${home}/news/${slug}`;
  const cover = item.cover_image ? getAssetUrl(item.cover_image, "card") : null;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.news, `${home}/news`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
  ];

  return (
    <DetailPage
      label={copy.catalog.news}
      title={heading}
      deck={summary}
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/news`, label: copy.catalog.news },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {cover ? <CoverImage src={cover} alt={heading} /> : null}
      <FactList
        items={[
          {
            term: copy.fields.category,
            value: labelFor(copy.newsCategories, item.category),
            latin: false,
          },
          {
            term: copy.fields.published,
            value: formatTimestamp(locale, item.published_at),
            latin: false,
          },
        ]}
      />
      <ProseBlock
        heading={copy.fields.description}
        text={body === summary ? "" : body}
      />
    </DetailPage>
  );
}
```

### File: `web/app/[locale]/news/page.tsx`

> **Path:** `web/app/[locale]/news/page.tsx` | **Size:** 1,954 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { IndexPage } from "@/components/page-frame";
import { getDirectusStatus, listNewsArticles, type NewsArticle } from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  formatTimestamp,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  timestamp,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return { title: getShellCopy(locale).catalog.news };
}

function byNewest(a: NewsArticle, b: NewsArticle): number {
  const aTime = timestamp(a.published_at);
  const bTime = timestamp(b.published_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return bTime - aTime;
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const [articles, status] = await Promise.all([
    listNewsArticles(locale),
    getDirectusStatus(),
  ]);
  const items = [...articles].sort(byNewest).flatMap((article) => {
    const card = namedCard(
      article.id,
      publishedPath(locale, "news", article.slug),
      localeText(locale, article.title_fa, article.title_en),
      formatTimestamp(locale, article.published_at),
    );
    return card ? [card] : [];
  });

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.news}
      deck={copy.blurb}
      empty={copy.catalog.newsEmpty}
      items={items}
      direction={getDirection(locale)}
      status={cmsStatusLabel(locale, status)}
    />
  );
}
```

### File: `web/app/[locale]/not-found.tsx`

> **Path:** `web/app/[locale]/not-found.tsx` | **Size:** 141 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import { NotFoundMessage } from "@/components/not-found-message";

export default function NotFound() {
  return <NotFoundMessage />;
}
```

### File: `web/app/[locale]/page.tsx`

> **Path:** `web/app/[locale]/page.tsx` | **Size:** 4,493 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import { CatalogList } from "@/components/catalog-list";
import { PageMast } from "@/components/page-mast";
import {
  getDirectusStatus,
  listEvents,
  listNewsArticles,
  listOrganizationUnits,
  type EventItem,
  type NewsArticle,
} from "@/lib/directus";
import { getDirection, getShellCopy } from "@/lib/i18n";
import { buildCollegeJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  cmsStatusLabel,
  formatTimestamp,
  joinParts,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  timestamp,
} from "@/lib/view";

export const revalidate = 3600;

function byNewest(a: NewsArticle, b: NewsArticle): number {
  const aTime = timestamp(a.published_at);
  const bTime = timestamp(b.published_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return bTime - aTime;
}

function bySoonest(a: EventItem, b: EventItem): number {
  const aTime = timestamp(a.start_at);
  const bTime = timestamp(b.start_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return aTime - bTime;
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const direction = getDirection(locale);
  const [units, news, events, status] = await Promise.all([
    listOrganizationUnits(locale),
    listNewsArticles(locale),
    listEvents(locale),
    getDirectusStatus(),
  ]);

  const unitItems = [...units]
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .flatMap((unit) => {
      const card = namedCard(
        unit.id,
        publishedPath(locale, "departments", unit.slug),
        localeText(locale, unit.name_fa, unit.name_en),
        localeText(locale, unit.location_fa, unit.location_en),
      );
      return card ? [card] : [];
    })
    .slice(0, 6);

  const newsItems = [...news]
    .sort(byNewest)
    .flatMap((article) => {
      const card = namedCard(
        article.id,
        publishedPath(locale, "news", article.slug),
        localeText(locale, article.title_fa, article.title_en),
        formatTimestamp(locale, article.published_at),
      );
      return card ? [card] : [];
    })
    .slice(0, 6);

  const eventItems = [...events]
    .sort(bySoonest)
    .flatMap((event) => {
      const card = namedCard(
        event.id,
        publishedPath(locale, "events", event.slug),
        localeText(locale, event.title_fa, event.title_en),
        joinParts([
          formatTimestamp(locale, event.start_at),
          localeText(locale, event.location_fa, event.location_en),
        ]),
      );
      return card ? [card] : [];
    })
    .slice(0, 6);

  const collegeJsonLd = serializeJsonLd(
    buildCollegeJsonLd({ name: copy.title, description: copy.blurb }),
  );

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collegeJsonLd }}
      />
      <PageMast
        label={copy.homeKicker}
        title={copy.title}
        deck={copy.blurb}
        breadcrumbLabel={copy.breadcrumb}
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10">
        <CatalogList
          id="home-units"
          title={copy.catalog.units}
          titleHref={null}
          empty={copy.catalog.unitsEmpty}
          items={unitItems}
          direction={direction}
          withHeading
        />
        <CatalogList
          id="home-news"
          title={copy.catalog.news}
          titleHref={`/${locale}/news`}
          empty={copy.catalog.newsEmpty}
          items={newsItems}
          direction={direction}
          withHeading
        />
        <CatalogList
          id="home-events"
          title={copy.catalog.events}
          titleHref={`/${locale}/events`}
          empty={copy.catalog.eventsEmpty}
          items={eventItems}
          direction={direction}
          withHeading
        />
        <p className="text-sm text-muted-foreground">
          {cmsStatusLabel(locale, status)}
        </p>
      </div>
    </main>
  );
}
```

### File: `web/app/[locale]/people/[slug]/page.tsx`

> **Path:** `web/app/[locale]/people/[slug]/page.tsx` | **Size:** 3,512 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AvatarImage, FactList } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getAssetUrl, getPersonBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildPersonJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getPersonBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.full_name_fa, result.item.full_name_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getPersonBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/people/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const name = localeText(locale, item.full_name_fa, item.full_name_en);
  const heading = name || slug;
  const home = `/${locale}`;
  const path = `${home}/people/${slug}`;
  const avatar = item.avatar ? getAssetUrl(item.avatar, "avatar") : null;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.people, `${home}/people`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(name
      ? [
          {
            id: "person",
            json: serializeJsonLd(buildPersonJsonLd({ name })),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.people}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/people`, label: copy.catalog.people },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {avatar ? <AvatarImage src={avatar} alt={heading} /> : null}
      <FactList
        items={[
          {
            term: copy.fields.email,
            value: item.public_email?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.phone,
            value: item.office_phone?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.location,
            value: localeText(locale, item.office_location_fa, item.office_location_en),
            latin: false,
          },
          {
            term: copy.fields.officeHours,
            value: localeText(locale, item.office_hours_fa, item.office_hours_en),
            latin: false,
          },
        ]}
      />
    </DetailPage>
  );
}
```

### File: `web/app/[locale]/people/page.tsx`

> **Path:** `web/app/[locale]/people/page.tsx` | **Size:** 1,623 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { IndexPage } from "@/components/page-frame";
import { getDirectusStatus, listPeople } from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return { title: getShellCopy(locale).catalog.people };
}

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const [people, status] = await Promise.all([
    listPeople(locale),
    getDirectusStatus(),
  ]);
  const items = people
    .flatMap((person) => {
      const card = namedCard(
        person.id,
        publishedPath(locale, "people", person.slug),
        localeText(locale, person.full_name_fa, person.full_name_en),
        "",
      );
      return card ? [card] : [];
    })
    .sort((a, b) =>
      a.label.localeCompare(b.label, locale === "fa" ? "fa" : "en"),
    );

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.people}
      deck={copy.blurb}
      empty={copy.catalog.peopleEmpty}
      items={items}
      direction={getDirection(locale)}
      status={cmsStatusLabel(locale, status)}
    />
  );
}
```

### File: `web/app/[locale]/programs/[slug]/page.tsx`

> **Path:** `web/app/[locale]/programs/[slug]/page.tsx` | **Size:** 3,371 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactList, ProseBlock } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getProgramBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  labelFor,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getProgramBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.title_fa, result.item.title_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getProgramBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/programs/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const courses = localeText(locale, item.courses_intro_fa, item.courses_intro_en);
  const admission = localeText(locale, item.admission_fa, item.admission_en);
  const home = `/${locale}`;
  const path = `${home}/programs/${slug}`;
  const description = courses || admission;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(title
      ? [
          {
            id: "course",
            json: serializeJsonLd(
              buildCourseJsonLd(
                description ? { name: title, description } : { name: title },
              ),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.programs}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      <FactList
        items={[
          {
            term: copy.fields.degree,
            value: labelFor(copy.degrees, item.degree_level),
            latin: false,
          },
          {
            term: copy.fields.duration,
            value: localeText(locale, item.duration_fa, item.duration_en),
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.admission} text={admission} />
      <ProseBlock heading={copy.fields.courses} text={courses} />
    </DetailPage>
  );
}
```

### File: `web/app/[locale]/search/page.tsx`

> **Path:** `web/app/[locale]/search/page.tsx` | **Size:** 6,129 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageMast } from "@/components/page-mast";
import {
  searchSiteContent,
  type LocalizedName,
  type LocalizedTitle,
  type Person,
  type SearchOutcome,
} from "@/lib/directus";
import {
  formatSearchSummary,
  getShellCopy,
  isLocale,
  type Locale,
  type SearchCopy,
} from "@/lib/i18n";
import { localeText, publishedPath, type ContentSection } from "@/lib/view";

function firstQueryValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

function statusMessage(
  locale: Locale,
  copy: SearchCopy,
  outcome: SearchOutcome,
  count: number,
): string {
  switch (outcome.status) {
    case "empty-query":
      return copy.emptyQuery;
    case "too-short":
      return copy.tooShort;
    case "too-long":
      return copy.tooLong;
    case "unconfigured":
      return copy.unconfigured;
    case "unreachable":
      return copy.unavailable;
    case "ready":
      return count === 0 ? copy.noResults : formatSearchSummary(locale, count);
  }
}

function linkedHits<T extends { id: string; slug: string | null }>(
  locale: Locale,
  section: ContentSection,
  rows: readonly T[],
  labelOf: (item: T) => string,
): { id: string; label: string; href: string | null }[] {
  return rows.flatMap((item) => {
    const label = labelOf(item);
    if (!label) {
      return [];
    }
    return [{ id: item.id, label, href: publishedPath(locale, section, item.slug) }];
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getShellCopy(locale);
  return {
    title: copy.search.title,
    description: copy.search.intro,
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw;
  const { q } = await searchParams;
  const outcome = await searchSiteContent(firstQueryValue(q), locale);
  const shell = getShellCopy(locale);
  const copy = shell.search;
  const { results } = outcome;
  const groups = [
    {
      id: "search-units",
      title: copy.groups.units,
      items: linkedHits(
        locale,
        "departments",
        results.organizationUnits,
        (item: LocalizedName) => localeText(locale, item.name_fa, item.name_en),
      ),
    },
    {
      id: "search-people",
      title: copy.groups.people,
      items: linkedHits(locale, "people", results.people, (item: Person) =>
        localeText(locale, item.full_name_fa, item.full_name_en),
      ),
    },
    {
      id: "search-programs",
      title: copy.groups.programs,
      items: linkedHits(
        locale,
        "programs",
        results.programs,
        (item: LocalizedTitle) => localeText(locale, item.title_fa, item.title_en),
      ),
    },
    {
      id: "search-news",
      title: copy.groups.news,
      items: linkedHits(
        locale,
        "news",
        results.newsArticles,
        (item: LocalizedTitle) => localeText(locale, item.title_fa, item.title_en),
      ),
    },
  ];
  const count = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={shell.title}
        title={copy.title}
        deck={copy.intro}
        breadcrumbLabel={shell.breadcrumb}
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-10 text-start">
        <form
          method="get"
          action={`/${locale}/search`}
          className="flex flex-col gap-4"
          role="search"
        >
          <label htmlFor="search-query" className="text-sm font-semibold">
            {copy.label}
          </label>
          <input
            id="search-query"
            name="q"
            type="search"
            defaultValue={outcome.query}
            className="min-h-12 w-full border border-border bg-card px-3 text-base text-start"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center self-start bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            {copy.submit}
          </button>
        </form>
        <p aria-live="polite">{statusMessage(locale, copy, outcome, count)}</p>
        {outcome.status === "ready"
          ? groups
              .filter((group) => group.items.length > 0)
              .map((group) => (
                <section
                  key={group.id}
                  aria-labelledby={group.id}
                  className="flex flex-col gap-3"
                >
                  <h2 id={group.id} className="text-2xl font-semibold">
                    {group.title}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))
          : null}
      </div>
    </main>
  );
}
```

### File: `web/app/[locale]/services/[slug]/page.tsx`

> **Path:** `web/app/[locale]/services/[slug]/page.tsx` | **Size:** 3,044 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactList, ProseBlock } from "@/components/content-blocks";
import { DetailPage, UnavailablePage } from "@/components/page-frame";
import { getServiceItemBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import { buildBreadcrumbJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  breadcrumbItem,
  localeText,
  metadataForStatus,
  PUBLIC_SLUG,
  requireLocaleSlug,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getServiceItemBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.title_fa, result.item.title_en)
      : "";
  return metadataForStatus(result.status, title);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getServiceItemBySlug(slug, locale);
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/services/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const description = localeText(locale, item.description_fa, item.description_en);
  const visit = localeText(
    locale,
    item.visit_conditions_fa,
    item.visit_conditions_en,
  );
  const home = `/${locale}`;
  const path = `${home}/services/${slug}`;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
  ];

  return (
    <DetailPage
      label={copy.catalog.services}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      <FactList
        items={[
          {
            term: copy.fields.hours,
            value: localeText(locale, item.working_hours_fa, item.working_hours_en),
            latin: false,
          },
          {
            term: copy.fields.phone,
            value: item.contact_phone?.trim() ?? "",
            latin: true,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.visitConditions} text={visit} />
      <ProseBlock heading={copy.fields.description} text={description} />
    </DetailPage>
  );
}
```

### File: `web/app/api/revalidate/route.ts`

> **Path:** `web/app/api/revalidate/route.ts` | **Size:** 1,667 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const REVALIDATABLE_TAGS = new Set([
  "directus",
  "organization-units",
  "people",
  "programs",
  "news",
  "events",
  "services",
  "pages",
]);

/** Compare secrets without throwing on unequal lengths or leaking the expected value. */
function secretsMatch(provided: string, expected: string): boolean {
  const providedDigest = createHash("sha256").update(provided).digest();
  const expectedDigest = createHash("sha256").update(expected).digest();
  return timingSafeEqual(providedDigest, expectedDigest);
}

export async function POST(request: Request) {
  const expected = process.env.REVALIDATE_SECRET?.trim();
  if (!expected) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const provided = request.headers.get("x-revalidate-secret")?.trim();
  if (!provided || !secretsMatch(provided, expected)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const tag =
    body &&
    typeof body === "object" &&
    "tag" in body &&
    typeof body.tag === "string"
      ? body.tag
      : null;

  if (!tag || !REVALIDATABLE_TAGS.has(tag)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  revalidateTag(tag, { expire: 0 });
  if (tag !== "directus") {
    revalidateTag("directus", { expire: 0 });
  }
  return NextResponse.json({ ok: true });
}
```

### File: `web/app/assets/[id]/route.ts`

> **Path:** `web/app/assets/[id]/route.ts` | **Size:** 1,818 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import { directusAssetPath, type AssetPreset } from "@/lib/directus";
import { NextResponse } from "next/server";

const PRESETS = new Set<AssetPreset>(["avatar", "card", "hero", "document"]);

function isPreset(value: string | null): value is AssetPreset {
  return value !== null && PRESETS.has(value as AssetPreset);
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const presetValue = new URL(request.url).searchParams.get("preset");
  if (!isPreset(presetValue)) {
    return new NextResponse(null, { status: 404 });
  }

  const assetPath = directusAssetPath(id, presetValue);
  if (!assetPath) {
    return new NextResponse(null, { status: 404 });
  }

  const base = process.env.DIRECTUS_URL?.trim().replace(/\/$/, "");
  const token = process.env.DIRECTUS_READ_TOKEN?.trim();
  if (!base || !token) {
    return new NextResponse(null, { status: 503 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${base}${assetPath}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new NextResponse(null, { status: upstream.status === 404 ? 404 : 502 });
  }

  const headers = new Headers();
  const contentType = upstream.headers.get("content-type");
  if (contentType) {
    headers.set("content-type", contentType);
  }
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) {
    headers.set("content-length", contentLength);
  }
  headers.set("cache-control", "public, max-age=3600");
  return new NextResponse(upstream.body, { status: 200, headers });
}
```

### File: `web/app/globals.css`

> **Path:** `web/app/globals.css` | **Size:** 3,798 bytes | **Language:** css | **Category:** source | **Source:** `worktree`

```css
@import "tailwindcss";

@font-face {
  font-family: "Vazirmatn";
  src: url("/fonts/Vazirmatn-Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

:root {
  --radius: 0.5rem;
  --background: #faf8f5;
  --ivory: #faf8f5;
  --foreground: #0b0f17;
  --card: #ffffff;
  --card-foreground: #0b0f17;
  --primary: #7a1c24;
  --primary-hover: #581218;
  --primary-foreground: #ffffff;
  --secondary: #f3eee6;
  --secondary-foreground: #0b0f17;
  --muted: #f3eee6;
  --muted-foreground: #57534e;
  --border: #e7e5e4;
  --ring: #7a1c24;
  --navy: #0b0f17;
  --navy-foreground: #faf8f5;
  --gold: #c59b27;
  --emerald: #0d5c54;
  --emerald-hover: #09423c;
  --emerald-foreground: #ffffff;
  --font-sans: "Vazirmatn", "Tahoma", "Segoe UI", system-ui, sans-serif;
  --font-mono: ui-monospace, "Cascadia Code", "Segoe UI Mono", monospace;
}

@theme inline {
  --color-background: var(--background);
  --color-ivory: var(--ivory);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-navy: var(--navy);
  --color-navy-foreground: var(--navy-foreground);
  --color-gold: var(--gold);
  --color-emerald: var(--emerald);
  --color-emerald-hover: var(--emerald-hover);
  --color-emerald-foreground: var(--emerald-foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}

html {
  scroll-padding-top: 5.5rem;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  line-height: 1.7;
}

:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

::selection {
  background: var(--primary);
  color: var(--primary-foreground);
}

a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 180ms;
}

@media (prefers-reduced-motion: reduce) {
  a,
  button {
    transition: none;
  }
}

.fa-digits {
  font-feature-settings: "ss01";
}

.latin-digits {
  font-feature-settings: "ss01" 0;
}

@utility folio-rule {
  display: block;
  height: 1px;
  width: 2.25rem;
  flex-shrink: 0;
  background: var(--gold);
}

@utility folio-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: var(--foreground);
}

@utility folio-title {
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-size: clamp(1.875rem, 3.2vw, 2.75rem);
}

@utility folio-prose {
  max-width: 42rem;
  line-height: 1.85;
}

@utility surface-card {
  background: #ffffff;
  border: 1px solid rgb(231 229 228 / 0.9);
  box-shadow: 0 8px 30px rgb(0 0 0 / 0.04);
}

.skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link:focus {
  position: fixed;
  inset-block-start: 1rem;
  inset-inline-start: 1rem;
  z-index: 60;
  width: auto;
  height: auto;
  min-width: 1.5rem;
  min-height: 1.5rem;
  margin: 0;
  padding: 0.5rem 1rem;
  overflow: visible;
  clip: auto;
  white-space: normal;
  background: var(--card);
  color: var(--foreground);
}
```

### File: `web/components/catalog-list.tsx`

> **Path:** `web/components/catalog-list.tsx` | **Size:** 1,814 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import Link from "next/link";
import { DirectionalArrow } from "@/components/directional-arrow";
import type { Direction } from "@/lib/i18n";
import type { CatalogItem } from "@/lib/view";

export function CatalogList({
  id,
  title,
  titleHref,
  empty,
  items,
  direction,
  withHeading,
}: {
  id: string;
  title: string;
  titleHref: string | null;
  empty: string;
  items: readonly CatalogItem[];
  direction: Direction;
  withHeading: boolean;
}) {
  const list =
    items.length === 0 ? (
      <p className="text-muted-foreground">{empty}</p>
    ) : (
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="surface-card flex min-h-11 items-center justify-between gap-4 p-4 hover:border-primary"
            >
              <span className="flex min-w-0 flex-col gap-1 text-start">
                <span className="font-semibold">{item.label}</span>
                {item.detail ? (
                  <span className="text-sm text-muted-foreground">{item.detail}</span>
                ) : null}
              </span>
              <DirectionalArrow direction={direction} />
            </Link>
          </li>
        ))}
      </ul>
    );

  if (!withHeading) {
    return list;
  }

  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <h2 id={id} className="text-2xl font-semibold">
        {titleHref ? (
          <Link
            href={titleHref}
            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      {list}
    </section>
  );
}
```

### File: `web/components/content-blocks.tsx`

> **Path:** `web/components/content-blocks.tsx` | **Size:** 1,829 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
export function FactList({
  items,
}: {
  items: readonly { term: string; value: string; latin: boolean }[];
}) {
  const visible = items.filter((item) => item.value.trim().length > 0);
  if (visible.length === 0) {
    return null;
  }

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {visible.map((item) => (
        <div key={item.term} className="surface-card flex flex-col gap-1 p-4">
          <dt className="text-sm font-semibold">{item.term}</dt>
          <dd>
            {item.latin ? (
              <bdi dir="ltr" className="latin-digits">
                {item.value}
              </bdi>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProseBlock({ heading, text }: { heading: string; text: string }) {
  const body = text.trim();
  if (!body) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="folio-prose whitespace-pre-wrap">{body}</p>
    </section>
  );
}

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- the asset route already serves a sized WebP preset
    <img
      src={src}
      alt={alt}
      width={800}
      height={450}
      className="h-auto w-full max-w-3xl object-cover"
    />
  );
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- the asset route already serves a sized WebP preset
    <img
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="size-40 object-cover"
    />
  );
}
```

### File: `web/components/directional-arrow.tsx`

> **Path:** `web/components/directional-arrow.tsx` | **Size:** 312 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Direction } from "@/lib/i18n";

export function DirectionalArrow({ direction }: { direction: Direction }) {
  const Icon = direction === "rtl" ? ArrowLeft : ArrowRight;
  return <Icon className="size-4 shrink-0" aria-hidden="true" />;
}
```

### File: `web/components/language-switch.tsx`

> **Path:** `web/components/language-switch.tsx` | **Size:** 1,136 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitch({
  locale,
  label,
  switchToFa,
  switchToEn,
}: {
  locale: Locale;
  label: string;
  switchToFa: string;
  switchToEn: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(/^\/(fa|en)(?=\/|$)/, "");
  const faHref = `/fa${rest}`;
  const enHref = `/en${rest}`;
  const linkClass = "inline-flex min-h-11 items-center px-2 text-sm font-semibold";

  return (
    <nav aria-label={label} className="flex items-center">
      <Link
        href={faHref}
        hrefLang="fa"
        lang="fa"
        className={linkClass}
        {...(locale === "fa" ? { "aria-current": "true" as const } : {})}
      >
        {switchToFa}
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        className={linkClass}
        {...(locale === "en" ? { "aria-current": "true" as const } : {})}
      >
        {switchToEn}
      </Link>
    </nav>
  );
}
```

### File: `web/components/not-found-message.tsx`

> **Path:** `web/components/not-found-message.tsx` | **Size:** 1,002 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageMast } from "@/components/page-mast";
import { getShellCopy, type Locale } from "@/lib/i18n";

export function NotFoundMessage() {
  const pathname = usePathname() ?? "/fa";
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fa";
  const copy = getShellCopy(locale);

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={copy.notFound.label}
        title={copy.notFound.title}
        deck={copy.notFound.body}
        breadcrumbLabel=""
        crumbs={[]}
      />
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
        >
          {copy.notFound.home}
        </Link>
      </div>
    </main>
  );
}
```

### File: `web/components/page-frame.tsx`

> **Path:** `web/components/page-frame.tsx` | **Size:** 2,420 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import { CatalogList } from "@/components/catalog-list";
import { PageMast } from "@/components/page-mast";
import { TranslationUnavailable } from "@/components/translation-unavailable";
import type { Direction } from "@/lib/i18n";
import type { CatalogItem } from "@/lib/view";

export function IndexPage({
  label,
  title,
  deck,
  empty,
  items,
  direction,
  status,
}: {
  label: string;
  title: string;
  deck: string;
  empty: string;
  items: readonly CatalogItem[];
  direction: Direction;
  status: string;
}) {
  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={label}
        title={title}
        deck={deck}
        breadcrumbLabel=""
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <CatalogList
          id="catalog"
          title={title}
          titleHref={null}
          empty={empty}
          items={items}
          direction={direction}
          withHeading={false}
        />
        <p className="text-sm text-muted-foreground">{status}</p>
      </div>
    </main>
  );
}

export function DetailPage({
  label,
  title,
  deck,
  breadcrumbLabel,
  crumbs,
  scripts,
  children,
}: {
  label: string;
  title: string;
  deck: string;
  breadcrumbLabel: string;
  crumbs: readonly { href: string; label: string }[];
  scripts: readonly { id: string; json: string }[];
  children: React.ReactNode;
}) {
  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      {scripts.map((script) => (
        <script
          key={script.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script.json }}
        />
      ))}
      <PageMast
        label={label}
        title={title}
        deck={deck}
        breadcrumbLabel={breadcrumbLabel}
        crumbs={crumbs}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        {children}
      </div>
    </main>
  );
}

export function UnavailablePage({ faHref }: { faHref: string }) {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16"
    >
      <TranslationUnavailable faHref={faHref} />
    </main>
  );
}
```

### File: `web/components/page-mast.tsx`

> **Path:** `web/components/page-mast.tsx` | **Size:** 1,941 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import Link from "next/link";

export function PageMast({
  label,
  title,
  deck,
  breadcrumbLabel,
  crumbs,
}: {
  label: string;
  title: string;
  deck: string;
  breadcrumbLabel: string;
  crumbs: readonly { href: string; label: string }[];
}) {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 pb-12 pt-10 md:pb-16 md:pt-14">
        {crumbs.length > 0 ? (
          <nav aria-label={breadcrumbLabel}>
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={`${crumb.href}-${crumb.label}`} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-muted-foreground">
                        /
                      </span>
                    ) : null}
                    {last ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}
        <p className="folio-label">
          <span className="folio-rule" aria-hidden="true" />
          {label}
        </p>
        <h1 className="folio-title max-w-4xl text-balance">{title}</h1>
        {deck.trim() ? (
          <p className="folio-prose text-muted-foreground">{deck}</p>
        ) : null}
      </div>
    </header>
  );
}
```

### File: `web/components/site-footer.tsx`

> **Path:** `web/components/site-footer.tsx` | **Size:** 1,342 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { shellLinks } from "@/lib/shell-links";

export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: {
    title: string;
    blurb: string;
    primary: string;
    home: string;
    people: string;
    news: string;
    events: string;
    search: string;
  };
}) {
  const items = shellLinks(locale, copy);

  return (
    <footer className="mt-auto border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{copy.title}</p>
          <p className="max-w-xl text-sm leading-6">{copy.blurb}</p>
        </div>
        <nav aria-label={copy.primary}>
          <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
```

### File: `web/components/site-header.tsx`

> **Path:** `web/components/site-header.tsx` | **Size:** 4,391 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import type { Locale } from "@/lib/i18n";
import { isCurrentPath, shellLinks } from "@/lib/shell-links";

export interface SiteHeaderCopy {
  title: string;
  primary: string;
  menuOpen: string;
  menuClose: string;
  home: string;
  people: string;
  news: string;
  events: string;
  search: string;
  language: string;
  switchToFa: string;
  switchToEn: string;
}

const itemClass =
  "inline-flex min-h-11 items-center px-3 text-sm font-semibold text-foreground";
const currentClass = "underline decoration-2 decoration-primary underline-offset-4";

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteHeaderCopy;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const items = shellLinks(locale, copy);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-11 min-w-11 items-center gap-3"
        >
          <Image
            src="/brand/iau-logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="size-10 object-contain"
          />
          <span className="max-w-32 truncate text-start text-sm font-semibold sm:max-w-xs md:max-w-none">
            {copy.title}
          </span>
        </Link>
        <div className="ms-auto flex items-center gap-1">
          <nav aria-label={copy.primary} className="hidden items-center md:flex">
            {items.map((item) => {
              const current = isCurrentPath(pathname, item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={current ? `${itemClass} ${currentClass}` : itemClass}
                  {...(current ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitch
            locale={locale}
            label={copy.language}
            switchToFa={copy.switchToFa}
            switchToEn={copy.switchToEn}
          />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span className="sr-only">{open ? copy.menuClose : copy.menuOpen}</span>
          </button>
        </div>
      </div>
      <nav
        id="site-menu"
        aria-label={copy.primary}
        className={open ? "border-t border-border px-4 py-3 md:hidden" : "hidden"}
      >
        <ul className="flex flex-col">
          {items.map((item) => {
            const current = isCurrentPath(pathname, item.href, item.exact);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={current ? `${itemClass} ${currentClass}` : itemClass}
                  {...(current ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
```

### File: `web/components/translation-unavailable.tsx`

> **Path:** `web/components/translation-unavailable.tsx` | **Size:** 1,355 bytes | **Language:** tsx | **Category:** source | **Source:** `worktree`

```tsx
import Link from "next/link";
import type { Metadata } from "next";
import { getShellCopy } from "@/lib/i18n";

const controlClassName =
  "inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline";

/** Pages that render TranslationUnavailable must spread this into their metadata. */
export function translationUnavailableMetadata(): Metadata {
  return {
    robots: { index: false, follow: true },
  };
}

export function TranslationUnavailable({ faHref }: { faHref: string }) {
  const copy = getShellCopy("en").translationUnavailable;

  return (
    <section
      aria-labelledby="translation-unavailable-title"
      className="flex flex-col gap-4 text-start"
    >
      <h1
        id="translation-unavailable-title"
        className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl"
      >
        {copy.title}
      </h1>
      <p className="max-w-xl text-lg leading-8 text-muted-foreground">{copy.body}</p>
      <nav aria-label={copy.title} className="flex flex-wrap gap-4">
        <Link href={faHref} hrefLang="fa" className={controlClassName}>
          {copy.viewInPersian}
        </Link>
        <Link href="/en" hrefLang="en" className={controlClassName}>
          {copy.englishHome}
        </Link>
      </nav>
    </section>
  );
}
```

### File: `web/Dockerfile`

> **Path:** `web/Dockerfile` | **Size:** 711 bytes | **Language:** dockerfile | **Category:** source | **Source:** `worktree`

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_STANDALONE=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

### File: `web/lib/directus.ts`

> **Path:** `web/lib/directus.ts` | **Size:** 18,103 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import "server-only";
import { z } from "zod";
import type { Locale } from "@/lib/i18n";
import { PUBLIC_SLUG } from "@/lib/view";

export type ContentStatus = "draft" | "published" | "archived";

export type AcademicRank =
  | "instructor"
  | "assistant_professor"
  | "associate_professor"
  | "full_professor"
  | "distinguished_professor"
  | "clinical_instructor";

export type FacultyMembershipType =
  | "official_tenured"
  | "contractual"
  | "adjunct"
  | "emeritus";

export type HighestDegree = "dvm" | "phd" | "dvsc" | "msc";

export type UnitType =
  | "faculty"
  | "deputy"
  | "department"
  | "laboratory"
  | "clinic";

export type RoleCategory =
  | "faculty_dean"
  | "vice_dean"
  | "department_head"
  | "hospital_director"
  | "lab_supervisor"
  | "faculty_member"
  | "staff";

export type DegreeLevel = "dvm" | "msc" | "phd" | "dvsc";

export type NewsCategory = "news" | "announcement";

export type AcademicTitlePrefixFa = "دکتر" | "مهندس" | "استاد";

export type AcademicTitlePrefixEn = "Dr." | "Prof.";

export interface LocalizedName {
  name_fa: string | null;
  name_en: string | null;
}

export interface LocalizedTitle {
  title_fa: string | null;
  title_en: string | null;
}

export interface OrganizationUnit extends LocalizedName {
  id: string;
  status: ContentStatus;
  slug: string | null;
  unit_type: UnitType | null;
  parent_id: string | null;
  sort_order: number | null;
  phone: string | null;
  email: string | null;
  location_fa: string | null;
  location_en: string | null;
  intro_fa: string | null;
  intro_en: string | null;
}

export interface Person {
  id: string;
  status: ContentStatus;
  slug: string | null;
  avatar: string | null;
  academic_title_prefix_fa: AcademicTitlePrefixFa | null;
  academic_title_prefix_en: AcademicTitlePrefixEn | null;
  first_name_fa: string | null;
  last_name_fa: string | null;
  full_name_fa: string | null;
  first_name_en: string | null;
  last_name_en: string | null;
  full_name_en: string | null;
  public_email: string | null;
  office_phone: string | null;
  office_location_fa: string | null;
  office_location_en: string | null;
  office_hours_fa: string | null;
  office_hours_en: string | null;
}

export interface AcademicProfile {
  id: string;
  person_id: string | null;
  academic_rank: AcademicRank | null;
  faculty_membership_type: FacultyMembershipType | null;
  highest_degree: HighestDegree | null;
  primary_department_id: string | null;
  specialty_fa: string | null;
  specialty_en: string | null;
  bio_fa: string | null;
  bio_en: string | null;
  research_interests_fa: unknown;
  research_interests_en: unknown;
  education_history_fa: unknown;
  education_history_en: unknown;
  courses_taught_fa: unknown;
  courses_taught_en: unknown;
  selected_publications: unknown;
  veterinary_council_number: string | null;
  orcid_id: string | null;
  google_scholar_url: string | null;
  scopus_author_id: string | null;
  wos_researcher_id: string | null;
  researchgate_url: string | null;
  institutional_cv_url: string | null;
  cv_file: string | null;
}

export interface RoleAssignment {
  id: string;
  status: ContentStatus;
  person_id: string | null;
  unit_id: string | null;
  role_category: RoleCategory | null;
  role_title_fa: string | null;
  role_title_en: string | null;
  is_primary_role: boolean | null;
  sort_order: number | null;
}

export interface Program extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  degree_level: DegreeLevel | null;
  department_id: string | null;
  curriculum_pdf: string | null;
  duration_fa: string | null;
  duration_en: string | null;
  admission_fa: string | null;
  admission_en: string | null;
  courses_intro_fa: string | null;
  courses_intro_en: string | null;
}

export interface NewsArticle extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  category: NewsCategory | null;
  published_at: string | null;
  cover_image: string | null;
  unit_id: string | null;
  summary_fa: string | null;
  summary_en: string | null;
  body_fa: string | null;
  body_en: string | null;
}

export interface EventItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  start_at: string | null;
  end_at: string | null;
  organizer_unit_id: string | null;
  cover_image: string | null;
  location_fa: string | null;
  location_en: string | null;
  description_fa: string | null;
  description_en: string | null;
}

export interface ServiceItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  unit_id: string | null;
  working_hours_fa: string | null;
  working_hours_en: string | null;
  contact_phone: string | null;
  visit_conditions_fa: string | null;
  visit_conditions_en: string | null;
  description_fa: string | null;
  description_en: string | null;
}

export interface PageItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  show_in_nav: boolean | null;
  sort_order: number | null;
  seo_title_fa: string | null;
  seo_title_en: string | null;
  seo_description_fa: string | null;
  seo_description_en: string | null;
  sections_fa: unknown;
  sections_en: unknown;
}

export type LocaleItemResult<T> =
  | { status: "available"; item: T }
  | { status: "translation-unavailable"; item: T }
  | { status: "not-found" };

export interface DirectusStatus {
  ok: boolean;
  detail: "connected" | "unreachable" | "unconfigured";
}

interface DirectusListResponse<T> {
  data?: T[];
}

const COLLECTIONS = {
  organizationUnits: "organization_units",
  people: "people",
  academicProfiles: "academic_profiles",
  roleAssignments: "role_assignments",
  programs: "programs",
  newsArticles: "news_articles",
  events: "events",
  serviceItems: "service_items",
  pages: "pages",
} as const;

function hasText(value: string | null | undefined): boolean {
  return Boolean(value?.trim());
}

/** English lists require a non-empty English field. Persian lists keep every published item. */
export function hasLocaleName(item: LocalizedName, locale: Locale): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.name_en);
}

/** English profiles are available when `full_name_en` is set. */
export function hasLocalePersonName(item: Person, locale: Locale): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.full_name_en);
}

/** English lists require a non-empty English field. Persian lists keep every published item. */
export function hasLocaleTitle(item: LocalizedTitle, locale: Locale): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.title_en);
}

export function resolveLocaleItem<T extends { status: ContentStatus }>(
  item: T | null | undefined,
  locale: Locale,
  hasTranslation: (item: T, locale: Locale) => boolean,
): LocaleItemResult<T> {
  if (!item || item.status !== "published") {
    return { status: "not-found" };
  }
  if (!hasTranslation(item, locale)) {
    return { status: "translation-unavailable", item };
  }
  return { status: "available", item };
}

function directusBaseUrl(): string | null {
  const raw = process.env.DIRECTUS_URL?.trim();
  if (!raw) {
    return null;
  }
  return raw.replace(/\/$/, "");
}

const ASSET_ID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type AssetPreset = "avatar" | "card" | "hero" | "document";

const IMAGE_PRESETS: Record<
  Exclude<AssetPreset, "document">,
  Record<string, string>
> = {
  avatar: {
    width: "400",
    format: "webp",
    quality: "80",
    withoutEnlargement: "true",
  },
  card: {
    width: "800",
    format: "webp",
    quality: "80",
  },
  hero: {
    width: "1600",
    format: "webp",
    quality: "82",
  },
};

/** Same-origin asset path. The browser never sees DIRECTUS_URL or the read token. */
export function getAssetUrl(
  fileId: string,
  preset: AssetPreset = "card",
): string | null {
  if (!ASSET_ID.test(fileId)) {
    return null;
  }
  const params = new URLSearchParams({ preset });
  return `/assets/${fileId}?${params.toString()}`;
}

/** Directus asset path for the server proxy. Never send this URL to the browser. */
export function directusAssetPath(
  fileId: string,
  preset: AssetPreset,
): string | null {
  if (!ASSET_ID.test(fileId)) {
    return null;
  }
  if (preset === "document") {
    return `/assets/${fileId}`;
  }
  const params = new URLSearchParams(IMAGE_PRESETS[preset]);
  return `/assets/${fileId}?${params.toString()}`;
}

function authHeaders(): HeadersInit {
  const token = process.env.DIRECTUS_READ_TOKEN?.trim();
  if (!token) {
    return {};
  }
  return { Authorization: `Bearer ${token}` };
}

async function directusFetch<T>(
  path: string,
  tags: string[],
): Promise<T | null> {
  const base = directusBaseUrl();
  if (!base) {
    return null;
  }

  try {
    const response = await fetch(`${base}${path}`, {
      headers: {
        Accept: "application/json",
        ...authHeaders(),
      },
      next: { revalidate: 3600, tags: ["directus", ...tags] },
    });
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function publishedItemsPath(collection: string): string {
  const params = new URLSearchParams();
  params.set("filter[status][_eq]", "published");
  params.set("fields", "*");
  return `/items/${collection}?${params.toString()}`;
}

async function listPublished<T>(collection: string, tag: string): Promise<T[]> {
  const payload = await directusFetch<DirectusListResponse<T>>(
    publishedItemsPath(collection),
    [tag],
  );
  return payload?.data ?? [];
}

async function listPublishedForLocale<T>(
  collection: string,
  tag: string,
  locale: Locale,
  isAvailable: (item: T, locale: Locale) => boolean,
): Promise<T[]> {
  const items = await listPublished<T>(collection, tag);
  return items.filter((item) => isAvailable(item, locale));
}

export async function getDirectusStatus(): Promise<DirectusStatus> {
  const base = directusBaseUrl();
  if (!base) {
    return { ok: false, detail: "unconfigured" };
  }

  try {
    const response = await fetch(`${base}/server/ping`, {
      cache: "no-store",
      headers: { Accept: "text/plain" },
    });
    if (!response.ok) {
      return { ok: false, detail: "unreachable" };
    }
    return { ok: true, detail: "connected" };
  } catch {
    return { ok: false, detail: "unreachable" };
  }
}

export function listOrganizationUnits(
  locale: Locale,
): Promise<OrganizationUnit[]> {
  return listPublishedForLocale<OrganizationUnit>(
    COLLECTIONS.organizationUnits,
    "organization-units",
    locale,
    hasLocaleName,
  );
}

export function listPeople(locale: Locale): Promise<Person[]> {
  return listPublishedForLocale<Person>(
    COLLECTIONS.people,
    "people",
    locale,
    hasLocalePersonName,
  );
}

export function listPrograms(locale: Locale): Promise<Program[]> {
  return listPublishedForLocale<Program>(
    COLLECTIONS.programs,
    "programs",
    locale,
    hasLocaleTitle,
  );
}

export function listNewsArticles(locale: Locale): Promise<NewsArticle[]> {
  return listPublishedForLocale<NewsArticle>(
    COLLECTIONS.newsArticles,
    "news",
    locale,
    hasLocaleTitle,
  );
}

export function listEvents(locale: Locale): Promise<EventItem[]> {
  return listPublishedForLocale<EventItem>(
    COLLECTIONS.events,
    "events",
    locale,
    hasLocaleTitle,
  );
}

export function listServiceItems(locale: Locale): Promise<ServiceItem[]> {
  return listPublishedForLocale<ServiceItem>(
    COLLECTIONS.serviceItems,
    "services",
    locale,
    hasLocaleTitle,
  );
}

async function getPublishedBySlug<T extends { status: ContentStatus }>(
  collection: string,
  tag: string,
  slug: string,
): Promise<T | null> {
  if (!PUBLIC_SLUG.test(slug)) {
    return null;
  }
  const params = new URLSearchParams();
  params.set("filter[status][_eq]", "published");
  params.set("filter[slug][_eq]", slug);
  params.set("fields", "*");
  params.set("limit", "1");
  const payload = await directusFetch<DirectusListResponse<T>>(
    `/items/${collection}?${params.toString()}`,
    [tag],
  );
  return payload?.data?.[0] ?? null;
}

export async function getOrganizationUnitBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<OrganizationUnit>(
    COLLECTIONS.organizationUnits,
    "organization-units",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocaleName);
}

export async function getPersonBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<Person>(
    COLLECTIONS.people,
    "people",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocalePersonName);
}

export async function getProgramBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<Program>(
    COLLECTIONS.programs,
    "programs",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocaleTitle);
}

export async function getNewsArticleBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<NewsArticle>(
    COLLECTIONS.newsArticles,
    "news",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocaleTitle);
}

export async function getEventBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<EventItem>(
    COLLECTIONS.events,
    "events",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocaleTitle);
}

export async function getServiceItemBySlug(slug: string, locale: Locale) {
  const item = await getPublishedBySlug<ServiceItem>(
    COLLECTIONS.serviceItems,
    "services",
    slug,
  );
  return resolveLocaleItem(item, locale, hasLocaleTitle);
}

export interface SearchGroups {
  organizationUnits: OrganizationUnit[];
  people: Person[];
  programs: Program[];
  newsArticles: NewsArticle[];
}

export type SearchStatus =
  | "ready"
  | "empty-query"
  | "too-short"
  | "too-long"
  | "unconfigured"
  | "unreachable";

export interface SearchOutcome {
  status: SearchStatus;
  query: string;
  results: SearchGroups;
}

function emptySearch(): SearchGroups {
  return {
    organizationUnits: [],
    people: [],
    programs: [],
    newsArticles: [],
  };
}

const UNIT_SEARCH_BASES = ["name"] as const;
const PERSON_SEARCH_BASES = ["full_name", "first_name", "last_name"] as const;
const TITLE_SEARCH_BASES = ["title"] as const;

function searchItemsPath(
  collection: string,
  fieldBases: readonly string[],
  query: string,
  locale: Locale,
): string {
  const suffix = locale === "en" ? "en" : "fa";
  const params = new URLSearchParams();
  params.set("filter[_and][0][status][_eq]", "published");
  fieldBases.forEach((base, index) => {
    params.set(
      `filter[_and][1][_or][${index}][${base}_${suffix}][_icontains]`,
      query,
    );
  });
  params.set("fields", "*");
  params.set("limit", "20");
  return `/items/${collection}?${params.toString()}`;
}

const SEARCH_TAGS: Record<string, string> = {
  organization_units: "organization-units",
  people: "people",
  programs: "programs",
  news_articles: "news",
};

const searchQuerySchema = z.string().trim().min(2).max(80);

async function searchPublished<T>(
  collection: string,
  fieldBases: readonly string[],
  query: string,
  locale: Locale,
): Promise<T[] | null> {
  const payload = await directusFetch<DirectusListResponse<T>>(
    searchItemsPath(collection, fieldBases, query, locale),
    [SEARCH_TAGS[collection] ?? "directus"],
  );
  if (!payload) {
    return null;
  }
  return payload.data ?? [];
}

export async function searchSiteContent(
  query: string,
  locale: Locale,
): Promise<SearchOutcome> {
  const trimmed = z.string().trim().parse(query);
  if (!trimmed) {
    return { status: "empty-query", query: "", results: emptySearch() };
  }
  const parsed = searchQuerySchema.safeParse(query);
  if (!parsed.success) {
    const tooLong = trimmed.length > 80;
    return {
      status: tooLong ? "too-long" : "too-short",
      query: trimmed,
      results: emptySearch(),
    };
  }
  if (!directusBaseUrl()) {
    return { status: "unconfigured", query: trimmed, results: emptySearch() };
  }

  const [organizationUnits, people, programs, newsArticles] = await Promise.all([
    searchPublished<OrganizationUnit>(
      COLLECTIONS.organizationUnits,
      UNIT_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<Person>(
      COLLECTIONS.people,
      PERSON_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<Program>(
      COLLECTIONS.programs,
      TITLE_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<NewsArticle>(
      COLLECTIONS.newsArticles,
      TITLE_SEARCH_BASES,
      trimmed,
      locale,
    ),
  ]);

  if (!organizationUnits || !people || !programs || !newsArticles) {
    return { status: "unreachable", query: trimmed, results: emptySearch() };
  }

  return {
    status: "ready",
    query: trimmed,
    results: {
      organizationUnits: organizationUnits.filter((item) =>
        hasLocaleName(item, locale),
      ),
      people: people.filter((item) => hasLocalePersonName(item, locale)),
      programs: programs.filter((item) => hasLocaleTitle(item, locale)),
      newsArticles: newsArticles.filter((item) => hasLocaleTitle(item, locale)),
    },
  };
}
```

### File: `web/lib/i18n.ts`

> **Path:** `web/lib/i18n.ts` | **Size:** 10,376 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export type Direction = "rtl" | "ltr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): Direction {
  return locale === "fa" ? "rtl" : "ltr";
}

export interface TranslationUnavailableCopy {
  title: string;
  body: string;
  viewInPersian: string;
  englishHome: string;
}

export interface SearchCopy {
  title: string;
  intro: string;
  label: string;
  submit: string;
  emptyQuery: string;
  tooShort: string;
  tooLong: string;
  noResults: string;
  unavailable: string;
  unconfigured: string;
  groups: {
    units: string;
    people: string;
    programs: string;
    news: string;
  };
}

export interface NavCopy {
  primary: string;
  menuOpen: string;
  menuClose: string;
  home: string;
  people: string;
  news: string;
  events: string;
  search: string;
  language: string;
}

export interface CatalogCopy {
  units: string;
  unitsEmpty: string;
  people: string;
  peopleEmpty: string;
  news: string;
  newsEmpty: string;
  events: string;
  eventsEmpty: string;
  programs: string;
  services: string;
  departments: string;
}

export interface FieldCopy {
  phone: string;
  email: string;
  location: string;
  hours: string;
  officeHours: string;
  duration: string;
  degree: string;
  admission: string;
  courses: string;
  category: string;
  published: string;
  starts: string;
  ends: string;
  visitConditions: string;
  description: string;
}

export interface NotFoundCopy {
  label: string;
  title: string;
  body: string;
  home: string;
}

export interface DegreeLabels {
  dvm: string;
  msc: string;
  phd: string;
  dvsc: string;
}

export interface NewsCategoryLabels {
  news: string;
  announcement: string;
}

export interface ShellCopy {
  title: string;
  blurb: string;
  homeKicker: string;
  breadcrumb: string;
  switchToFa: string;
  switchToEn: string;
  cmsConnected: string;
  cmsUnreachable: string;
  cmsUnconfigured: string;
  skipToContent: string;
  nav: NavCopy;
  catalog: CatalogCopy;
  fields: FieldCopy;
  notFound: NotFoundCopy;
  degrees: DegreeLabels;
  newsCategories: NewsCategoryLabels;
  translationUnavailable: TranslationUnavailableCopy;
  search: SearchCopy;
}

const shellCopy: Record<Locale, ShellCopy> = {
  fa: {
    title: "دانشکده دامپزشکی",
    blurb:
      "وب‌سایت اطلاع‌رسانی دانشکده. محتوای منتشرشده پس از اتصال سامانه مدیریت محتوا در اینجا نمایش داده می‌شود.",
    homeKicker: "وب‌سایت اطلاع‌رسانی",
    breadcrumb: "مسیر صفحه",
    switchToFa: "فارسی",
    switchToEn: "English",
    cmsConnected: "اتصال به سامانه مدیریت محتوا برقرار است.",
    cmsUnreachable: "سامانه مدیریت محتوا در حال حاضر در دسترس نیست.",
    cmsUnconfigured: "نشانی سامانه مدیریت محتوا پیکربندی نشده است.",
    skipToContent: "پرش به محتوای اصلی",
    nav: {
      primary: "ناوبری اصلی",
      menuOpen: "باز کردن منو",
      menuClose: "بستن منو",
      home: "خانه",
      people: "افراد",
      news: "اخبار",
      events: "رویدادها",
      search: "جستجو",
      language: "زبان",
    },
    catalog: {
      units: "واحدهای سازمانی",
      unitsEmpty: "واحد سازمانی منتشرشده‌ای برای نمایش وجود ندارد.",
      people: "افراد",
      peopleEmpty: "فرد منتشرشده‌ای برای نمایش وجود ندارد.",
      news: "اخبار",
      newsEmpty: "خبر منتشرشده‌ای برای نمایش وجود ندارد.",
      events: "رویدادها",
      eventsEmpty: "رویداد منتشرشده‌ای برای نمایش وجود ندارد.",
      programs: "برنامه‌ها",
      services: "خدمات",
      departments: "واحد سازمانی",
    },
    fields: {
      phone: "تلفن",
      email: "رایانامه",
      location: "مکان",
      hours: "ساعات",
      officeHours: "ساعات مراجعه",
      duration: "مدت",
      degree: "مقطع",
      admission: "پذیرش",
      courses: "درس‌ها",
      category: "دسته",
      published: "انتشار",
      starts: "آغاز",
      ends: "پایان",
      visitConditions: "شرایط مراجعه",
      description: "توضیح",
    },
    notFound: {
      label: "خطا",
      title: "صفحه پیدا نشد",
      body: "این نشانی منتشر نشده است یا وجود ندارد.",
      home: "بازگشت به خانه",
    },
    degrees: {
      dvm: "دکترای حرفه‌ای دامپزشکی (D.V.M.)",
      phd: "دکترای تخصصی (Ph.D.)",
      dvsc: "دکترای تخصصی بالینی دامپزشکی / دستیاری (D.V.Sc.)",
      msc: "کارشناسی ارشد (M.Sc.)",
    },
    newsCategories: {
      news: "خبر",
      announcement: "اطلاعیه",
    },
    translationUnavailable: {
      title: "این صفحه فقط به فارسی در دسترس است",
      body: "ترجمه انگلیسی این مورد منتشر نشده است. می‌توانید نسخه فارسی را بخوانید یا به صفحه اصلی انگلیسی برگردید.",
      viewInPersian: "مشاهده نسخه فارسی",
      englishHome: "صفحه اصلی انگلیسی",
    },
    search: {
      title: "جستجو",
      intro: "جستجو در واحدها، افراد، برنامه‌ها و اخبار منتشرشده.",
      label: "عبارت جستجو",
      submit: "جستجو",
      emptyQuery: "برای شروع، یک عبارت وارد کنید.",
      tooShort: "حداقل دو نویسه وارد کنید.",
      tooLong: "عبارت جستجو بلندتر از حد مجاز است.",
      noResults: "نتیجه‌ای برای این عبارت پیدا نشد.",
      unavailable: "سامانه مدیریت محتوا در حال حاضر در دسترس نیست.",
      unconfigured: "نشانی سامانه مدیریت محتوا پیکربندی نشده است.",
      groups: {
        units: "واحدهای سازمانی",
        people: "افراد",
        programs: "برنامه‌ها",
        news: "اخبار",
      },
    },
  },
  en: {
    title: "Faculty of Veterinary Medicine",
    blurb:
      "Public information site for the faculty. Published content will appear here once the content system is connected.",
    homeKicker: "Public site",
    breadcrumb: "Breadcrumb",
    switchToFa: "فارسی",
    switchToEn: "English",
    cmsConnected: "The content system is reachable.",
    cmsUnreachable: "The content system is not reachable right now.",
    cmsUnconfigured: "The content system address is not configured.",
    skipToContent: "Skip to main content",
    nav: {
      primary: "Primary navigation",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      home: "Home",
      people: "People",
      news: "News",
      events: "Events",
      search: "Search",
      language: "Language",
    },
    catalog: {
      units: "Organization units",
      unitsEmpty: "No published organization units to show.",
      people: "People",
      peopleEmpty: "No published people to show.",
      news: "News",
      newsEmpty: "No published news to show.",
      events: "Events",
      eventsEmpty: "No published events to show.",
      programs: "Programs",
      services: "Services",
      departments: "Organization unit",
    },
    fields: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      hours: "Hours",
      officeHours: "Office hours",
      duration: "Duration",
      degree: "Degree",
      admission: "Admission",
      courses: "Courses",
      category: "Category",
      published: "Published",
      starts: "Starts",
      ends: "Ends",
      visitConditions: "Visit conditions",
      description: "Description",
    },
    notFound: {
      label: "Error",
      title: "Page not found",
      body: "This address is not published, or it does not exist.",
      home: "Back to home",
    },
    degrees: {
      dvm: "Doctor of Veterinary Medicine (D.V.M.)",
      phd: "Doctor of Philosophy (Ph.D.)",
      dvsc: "Doctor of Veterinary Science (D.V.Sc.)",
      msc: "Master of Science (M.Sc.)",
    },
    newsCategories: {
      news: "News",
      announcement: "Announcement",
    },
    translationUnavailable: {
      title: "This page is available in Persian only",
      body: "An English translation of this item has not been published. You can read the Persian page or return to the English home page.",
      viewInPersian: "Read in Persian",
      englishHome: "English home",
    },
    search: {
      title: "Search",
      intro: "Search published units, people, programs, and news.",
      label: "Search terms",
      submit: "Search",
      emptyQuery: "Enter a term to start.",
      tooShort: "Enter at least two characters.",
      tooLong: "That search is longer than the allowed length.",
      noResults: "No published items match that search.",
      unavailable: "The content system is not reachable right now.",
      unconfigured: "The content system address is not configured.",
      groups: {
        units: "Organization units",
        people: "People",
        programs: "Programs",
        news: "News",
      },
    },
  },
};

export function getShellCopy(locale: Locale): ShellCopy {
  return shellCopy[locale];
}

export function formatSearchSummary(locale: Locale, count: number): string {
  if (locale === "fa") {
    return `${count.toLocaleString("fa-IR")} نتیجه`;
  }
  return count === 1 ? "1 result" : `${count} results`;
}
```

### File: `web/lib/schema-org.ts`

> **Path:** `web/lib/schema-org.ts` | **Size:** 8,501 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import "server-only";

/**
 * Schema.org JSON-LD builders. Callers pass already-loaded copy.
 * These functions do not read Directus or invent address, phone, or ranking data.
 */

export interface CollegeJsonLdInput {
  name: string;
  description?: string;
}

export interface CollegeJsonLd {
  "@context": "https://schema.org";
  "@type": ["CollegeOrUniversity", "EducationalOrganization"];
  name: string;
  description?: string;
}

export interface PersonJsonLdInput {
  name: string;
  jobTitle?: string | null;
  orcidId?: string | null;
  googleScholarUrl?: string | null;
  scopusUrl?: string | null;
  researchGateUrl?: string | null;
}

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle?: string;
  sameAs?: string[];
}

export interface CourseJsonLdInput {
  name: string;
  description?: string | null;
}

export interface CourseJsonLd {
  "@context": "https://schema.org";
  "@type": "Course";
  name: string;
  description?: string;
}

export interface BreadcrumbItemInput {
  name: string;
  url?: string | null;
}

export interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item?: string;
}

export interface BreadcrumbJsonLd {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

export interface EventJsonLdInput {
  name: string;
  startDate: string;
  endDate?: string | null;
  locationName?: string | null;
  description?: string | null;
}

export interface EventJsonLd {
  "@context": "https://schema.org";
  "@type": "Event";
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: {
    "@type": "Place";
    name: string;
  };
}

export interface FaqItemInput {
  question: string;
  answer: string;
}

export interface FaqJsonLd {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export type JsonLdNode =
  | CollegeJsonLd
  | PersonJsonLd
  | CourseJsonLd
  | BreadcrumbJsonLd
  | EventJsonLd
  | FaqJsonLd;

const ORCID_ID = /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/;

function orcidCheckDigit(baseDigits: string): string {
  let total = 0;
  for (const character of baseDigits) {
    total = (total + Number(character)) * 2;
  }
  const result = (12 - (total % 11)) % 11;
  return result === 10 ? "X" : String(result);
}

function canonicalOrcid(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let identifier = trimmed;
  if (trimmed.includes("://")) {
    let url: URL;
    try {
      url = new URL(trimmed);
    } catch {
      return null;
    }
    if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "orcid.org") {
      return null;
    }
    if (url.username || url.password || (url.port && url.port !== "443")) {
      return null;
    }
    identifier = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
  }

  const normalized = identifier.toUpperCase();
  if (!ORCID_ID.test(normalized)) {
    return null;
  }
  const compact = normalized.replace(/-/g, "");
  if (orcidCheckDigit(compact.slice(0, 15)) !== compact[15]) {
    return null;
  }
  return `https://orcid.org/${normalized}`;
}

function canonicalGoogleScholar(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (url.username || url.password || (url.port && url.port !== "443")) {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const allowedHost =
    host === "scholar.google.com" ||
    /^scholar\.google\.co\.[a-z]{2}$/.test(host) ||
    /^scholar\.google\.com\.[a-z]{2}$/.test(host) ||
    /^scholar\.google\.[a-z]{2}$/.test(host);
  if (!allowedHost) {
    return null;
  }
  return url.toString();
}

function canonicalHttpsHost(
  value: string | null | undefined,
  allowedHosts: ReadonlySet<string>,
): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (url.username || url.password || (url.port && url.port !== "443")) {
    return null;
  }
  if (!allowedHosts.has(url.hostname.toLowerCase())) {
    return null;
  }
  return url.toString();
}

const SCOPUS_HOSTS = new Set(["scopus.com", "www.scopus.com"]);
const RESEARCHGATE_HOSTS = new Set(["researchgate.net", "www.researchgate.net"]);

export function personSameAs(
  orcidId: string | null | undefined,
  googleScholarUrl: string | null | undefined,
  scopusUrl?: string | null,
  researchGateUrl?: string | null,
): string[] {
  const links = [
    canonicalOrcid(orcidId),
    canonicalGoogleScholar(googleScholarUrl),
    canonicalHttpsHost(scopusUrl, SCOPUS_HOSTS),
    canonicalHttpsHost(researchGateUrl, RESEARCHGATE_HOSTS),
  ];
  return links.filter((link): link is string => link !== null);
}

export function buildCollegeJsonLd(input: CollegeJsonLdInput): CollegeJsonLd {
  const description = input.description?.trim();
  return {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    name: input.name,
    ...(description ? { description } : {}),
  };
}

export function buildPersonJsonLd(input: PersonJsonLdInput): PersonJsonLd {
  const jobTitle = input.jobTitle?.trim();
  const sameAs = personSameAs(
    input.orcidId,
    input.googleScholarUrl,
    input.scopusUrl,
    input.researchGateUrl,
  );
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    ...(jobTitle ? { jobTitle } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildCourseJsonLd(input: CourseJsonLdInput): CourseJsonLd {
  const description = input.description?.trim();
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    ...(description ? { description } : {}),
  };
}

export function buildBreadcrumbJsonLd(
  items: readonly BreadcrumbItemInput[],
): BreadcrumbJsonLd {
  const named = items.flatMap((item) => {
    const name = item.name.trim();
    if (!name) {
      return [];
    }
    const url = item.url?.trim();
    return [{ name, ...(url ? { url } : {}) }];
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: named.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function buildEventJsonLd(input: EventJsonLdInput): EventJsonLd {
  const endDate = input.endDate?.trim();
  const description = input.description?.trim();
  const locationName = input.locationName?.trim();
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    startDate: input.startDate,
    ...(endDate ? { endDate } : {}),
    ...(description ? { description } : {}),
    ...(locationName
      ? { location: { "@type": "Place" as const, name: locationName } }
      : {}),
  };
}

export function buildFaqJsonLd(items: readonly FaqItemInput[]): FaqJsonLd {
  const mainEntity = items.flatMap((item) => {
    const question = item.question.trim();
    const answer = item.answer.trim();
    if (!question || !answer) {
      return [];
    }
    return [
      {
        "@type": "Question" as const,
        name: question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: answer,
        },
      },
    ];
  });
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

/** JSON for a script tag. Escapes `<` so a value cannot close the script element. */
export function serializeJsonLd(data: JsonLdNode): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
```

### File: `web/lib/shell-links.ts`

> **Path:** `web/lib/shell-links.ts` | **Size:** 911 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import type { Locale } from "@/lib/i18n";

export interface ShellLink {
  href: string;
  label: string;
  exact: boolean;
}

export function shellLinks(
  locale: Locale,
  labels: {
    home: string;
    people: string;
    news: string;
    events: string;
    search: string;
  },
): ShellLink[] {
  return [
    { href: `/${locale}`, label: labels.home, exact: true },
    { href: `/${locale}/people`, label: labels.people, exact: false },
    { href: `/${locale}/news`, label: labels.news, exact: false },
    { href: `/${locale}/events`, label: labels.events, exact: false },
    { href: `/${locale}/search`, label: labels.search, exact: false },
  ];
}

export function isCurrentPath(
  pathname: string,
  href: string,
  exact: boolean,
): boolean {
  if (exact) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
```

### File: `web/lib/view.ts`

> **Path:** `web/lib/view.ts` | **Size:** 4,151 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translationUnavailableMetadata } from "@/components/translation-unavailable";
import { getShellCopy, isLocale, type Locale } from "@/lib/i18n";

export const PUBLIC_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

export type ContentSection =
  | "departments"
  | "people"
  | "programs"
  | "news"
  | "events"
  | "services";

export interface CatalogItem {
  id: string;
  href: string;
  label: string;
  detail?: string;
}

export async function requireLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return locale;
}

export async function requireLocaleSlug(
  params: Promise<{ locale: string; slug: string }>,
): Promise<{ locale: Locale; slug: string }> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    notFound();
  }
  return { locale, slug };
}

export function localeText(
  locale: Locale,
  fa: string | null | undefined,
  en: string | null | undefined,
): string {
  const value = locale === "en" ? en : fa;
  return value?.trim() ?? "";
}

export function publishedPath(
  locale: Locale,
  section: ContentSection,
  slug: string | null | undefined,
): string | null {
  const value = slug?.trim() ?? "";
  if (!PUBLIC_SLUG.test(value)) {
    return null;
  }
  return `/${locale}/${section}/${value}`;
}

export function namedCard(
  id: string,
  href: string | null,
  label: string,
  detail: string,
): CatalogItem | null {
  if (!href) {
    return null;
  }
  const name = label.trim();
  if (!name) {
    return null;
  }
  const extra = detail.trim();
  if (extra) {
    return { id, href, label: name, detail: extra };
  }
  return { id, href, label: name };
}

export function formatTimestamp(
  locale: Locale,
  value: string | null | undefined,
): string {
  if (!value?.trim()) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function joinParts(parts: readonly string[]): string {
  return parts
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .join(" — ");
}

export function labelFor<K extends string>(
  labels: Record<K, string>,
  key: string | null,
): string {
  if (!key || !Object.prototype.hasOwnProperty.call(labels, key)) {
    return "";
  }
  return labels[key as K];
}

export function cmsStatusLabel(
  locale: Locale,
  status: { ok: boolean; detail: "connected" | "unreachable" | "unconfigured" },
): string {
  const copy = getShellCopy(locale);
  if (status.ok) {
    return copy.cmsConnected;
  }
  if (status.detail === "unconfigured") {
    return copy.cmsUnconfigured;
  }
  return copy.cmsUnreachable;
}

export function absoluteUrl(path: string): string | null {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!origin) {
    return null;
  }
  return `${origin}${path}`;
}

export function breadcrumbItem(
  name: string,
  path: string,
): { name: string; url?: string } {
  const url = absoluteUrl(path);
  if (!url) {
    return { name };
  }
  return { name, url };
}

export function metadataForStatus(
  status: "available" | "not-found" | "translation-unavailable",
  title: string,
): Metadata {
  if (status === "translation-unavailable") {
    return {
      ...translationUnavailableMetadata(),
      title: getShellCopy("en").translationUnavailable.title,
    };
  }
  if (status !== "available" || !title.trim()) {
    return {};
  }
  return { title };
}

export function timestamp(value: string | null | undefined): number | null {
  if (!value?.trim()) {
    return null;
  }
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? null : time;
}
```

### File: `web/middleware.ts`

> **Path:** `web/middleware.ts` | **Size:** 940 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url, 308);
  }

  if (
    pathname === "/api" ||
    pathname.startsWith("/api/") ||
    pathname === "/assets" ||
    pathname.startsWith("/assets/")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && !isLocale(segment)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2)$).*)",
  ],
};
```

### File: `web/next-env.d.ts`

> **Path:** `web/next-env.d.ts` | **Size:** 303 bytes | **Language:** typescript | **Category:** source | **Source:** `worktree`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";
import "./.next/dev/types/root-params.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## Diagnostics & Exclusions

<details>
<summary>Excluded paths and policy notes</summary>

- `.exporter/export_tbzvetportal.md` — *Export output file*
- `__pycache__/` — *Excluded directory pattern*
- `proxy/Caddyfile` — *Ignored by file policy*
- `web/.next/` — *Excluded directory pattern*
- `web/app/favicon.ico` — *Binary or non-text suffix*
- `web/node_modules/` — *Excluded directory pattern*
- `web/package-lock.json` — *Lockfile excluded by default*
- `web/public/brand/iau-logo.png` — *Binary or non-text suffix*
- `web/tsconfig.tsbuildinfo` — *Binary or non-text suffix*

</details>
