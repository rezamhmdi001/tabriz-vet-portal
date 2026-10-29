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
