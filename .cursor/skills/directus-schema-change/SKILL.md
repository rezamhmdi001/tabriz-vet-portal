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
