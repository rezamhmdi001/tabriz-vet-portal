# 0003 — Cache revalidation, media transforms, and server-side search

**Status:** Accepted  
**Date:** 2026-10-17

## Context

Published Directus content should update without a separate cache service, an image CDN, or a search engine. The faculty site is a single Next.js app and a local Directus instance. Redis and Elasticsearch are not justified.

## Decision

1. **Cache.** Catalog Directus reads use `fetch` with a one-hour `revalidate` and the tags `directus` plus one of `organization-units`, `people`, `programs`, `news`, `events`, `services`, or `pages`. Search does not. `POST /api/revalidate` expires a tag when the JSON body is `{ "tag": "<tag>" }` and the header `x-revalidate-secret` matches `REVALIDATE_SECRET`. The route fails closed when the secret is missing. Setup steps are in `docs/operations/cache-revalidation.md`. The initializer creates one Flow per content collection when `REVALIDATE_SECRET` is set.
2. **Media.** `getAssetUrl` returns a same-origin `/assets/:id?preset=` path and never includes `DIRECTUS_URL` or the read token. `web/app/assets/[id]/route.ts` fetches the file from Directus with `DIRECTUS_READ_TOKEN` only after a published row references that file. Image presets stream `image/webp` for a published avatar or cover. `document` streams `application/pdf` for a published curriculum or a CV whose person is published. Any other id or content type is 404 and is not forwarded. Presets are `avatar` (400px WebP, quality 80, `withoutEnlargement`), `card` (800px WebP, quality 80), `hero` (1600px WebP, quality 82), and `document` (original PDF bytes).
3. **Search.** `searchSiteContent` trims the query with Zod, rejects queries shorter than 2 or longer than 80 characters, and queries `organization_units`, `people`, `programs`, and `news_articles` in parallel with Directus `_icontains` on the active locale’s fields only. Only `published` items are requested. English results drop items with an empty English name or title. The search fetch uses `cache: "no-store"` and no cache tag. Each collection returns at most 20 hits; when `filter_count` is higher, the page says the first 20 are shown. `/[locale]/search` renders a labeled GET form and links each hit to its published detail route. The language switch keeps the query string.

## Consequences

- A missed webhook still refreshes content within an hour.
- Editors need the Flow from the operations guide before publish is instant.
- The browser does not contact Directus for images.
- Search does not cover `service_items` or `events`, and it does not rank results.
