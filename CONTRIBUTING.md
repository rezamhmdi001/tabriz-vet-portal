# Contributing

Thank you for helping build the Faculty of Veterinary Medicine portal (`IAU-TBZ-VET-PORTAL-2026`).

## Before you code

1. Read [ARCHITECTURE.md](ARCHITECTURE.md) for product scope, gates, and non-negotiables.
2. Read [AGENTS.md](AGENTS.md) if you use Cursor or Hermes automation.
3. Gate **G0** is open: do not add Directus collections or undecided navigation without an approved architecture change.

## Local setup

1. Copy [.env.example](.env.example) to `.env` at the repository root and fill values locally. Never commit `.env`.
2. Install and run the web app:

   ```bash
   cd web
   npm ci
   npm run dev
   ```

3. For the full stack (proxy, web, Directus, Postgres, backup), use [docker-compose.yml](docker-compose.yml) once `.env` is configured.

## Quality bar

From `web/`:

```bash
npm run lint
npm test
npm run build
```

Public pages must stay **published-only**, **server-side Directus access** via `web/lib/directus.ts`, bilingual rules on `/fa` and `/en`, logical Tailwind (`ms-*`, `text-start`, …), local Vazirmatn only, and WCAG 2.2 AA patterns documented in `.cursor/rules/`.

## Pull requests

Use the PR template. Keep schema changes paired with `cms/schema/snapshot.yaml` and TypeScript types in the same change.

## Security

Report suspected vulnerabilities privately to the project maintainers. Do not open public issues with exploit details or production credentials.
