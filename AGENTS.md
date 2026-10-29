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
