# Faculty of Veterinary Medicine Portal

Official academic and informational website for the Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch (`IAU-TBZ-VET-PORTAL-2026`).

The public site is a bilingual Next.js app (`/fa` RTL, `/en` LTR). Editors work in self-hosted Directus 12.5. PostgreSQL 17 stays on the internal Docker network. Production is a five-service Compose stack (`proxy`, `web`, `cms`, `database`, `backup`) on a university-controlled server. TLS at the proxy, and an encrypted off-server backup, are added when a certificate and a destination exist. Until then the backup script writes a local unencrypted database dump and uploads archive, and deletes files older than 14 days.

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

- `web/` — the Next.js 16 public app (`/fa`, `/en`), including search, JSON-LD, and the same-origin asset route.
- `cms/` — Directus extensions and the schema snapshot directory. `cms/data/` and `cms/uploads/` stay untracked.
- `scripts/init-directus-schema.mjs` — local schema, roles, and revalidation Flows.
- `docker-compose.yml` — the five services. It is not started by documentation alone.
- `proxy/Caddyfile` — local HTTP in front of the app. Production TLS is still a later step.

Gate G0 in `ARCHITECTURE.md` section 6 stays open: laboratories and the downloads library, detailed fields outside the people model, audience menus, the contact URL, and public URLs for `pages` are not decided here.

Copy `.env.example` to `.env` when runtime work starts. `.env` stays untracked. `DIRECTUS_READ_TOKEN` and `REVALIDATE_SECRET` stay server-only.

## Phases

| Phase | Outcome | Gate |
| :--- | :--- | :--- |
| 0. Foundation | Architecture and agent rules | G0. The two decisions above |
| 1. Model and prototype | Directus schema, snapshot, prototype evaluation | G1. Schema and visual shell |
| 2. Public modules | Pages, search, SEO, contact, synthetic data | G2. Build, WCAG 2.2 AA, staging sign-off |
| 3. Production | HTTPS, restore test, real faculty content, launch | G3. Handover |

Each phase starts when it is explicitly requested. The release checklist is in `ARCHITECTURE.md`.

## Tech stack

| Layer | Choice |
| :--- | :--- |
| Public site | Next.js 16, React 19, Tailwind CSS 4, TypeScript |
| CMS | Directus 12.5 (self-hosted) |
| Database | PostgreSQL 17 (Docker, internal network) |
| Edge | Caddy 2.10 reverse proxy in Compose |
| i18n | `/fa` (RTL, default) and `/en` (LTR) |

## Quick start (web only)

Prerequisites: Node.js 20+, npm.

```bash
git clone https://github.com/rezamhmdi001/tabriz-vet-portal.git
cd tabriz-vet-portal
cp .env.example .env   # fill DIRECTUS_* and NEXT_PUBLIC_SITE_URL for your environment
cd web
npm ci
npm run dev
```

Open [http://localhost:3000/fa](http://localhost:3000/fa). Unprefixed URLs redirect to `/fa`.

Quality checks from `web/`:

```bash
npm run lint
npm test
npm run build
```

## Full stack (Docker)

With a completed root `.env`, start the five-service Compose stack documented in [docker-compose.yml](docker-compose.yml): `proxy`, `web`, `cms`, `database`, and `backup`. Directus uploads and local database files stay out of git (`cms/uploads/`, `cms/data/`).

Initialize or refresh the Directus schema locally with [scripts/init-directus-schema.mjs](scripts/init-directus-schema.mjs) when CMS work is in scope.

## Repository layout

| Path | Purpose |
| :--- | :--- |
| `web/` | Public Next.js application and API routes |
| `cms/` | Directus extensions and `schema/snapshot.yaml` |
| `proxy/` | Caddy configuration |
| `scripts/` | Schema bootstrap and operational scripts |
| `docs/` | Product architecture (Persian v3.0) and agent guides |
| `.cursor/` | Cursor rules and skills for contributors using the IDE |

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md). Pull requests use the template under `.github/`. Do not commit secrets; follow server-only tokens described in `.env.example`.
