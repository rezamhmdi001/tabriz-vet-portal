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
