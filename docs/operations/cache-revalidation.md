# Directus cache revalidation

The public site caches catalog Directus reads for one hour. Search is not cached. A Directus Flow expires the catalog cache when an editor changes content. `scripts/init-directus-schema.mjs` creates one Flow per content collection when `REVALIDATE_SECRET` is set, and skips them with a log line when it is unset. This guide is the same Flow, written out for a manual check. It does not change the database files under `cms/data/` or the uploads under `cms/uploads/`.

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
