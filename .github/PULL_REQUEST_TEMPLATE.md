## Summary

What changed and why (link `ARCHITECTURE.md` section if behavior shifted).

## Scope

- [ ] UI / routes (`web/`)
- [ ] Directus schema or snapshot (`cms/schema/`)
- [ ] Docker / ops
- [ ] Docs only

## Checks

- [ ] `npm run lint`, `npm test`, and `npm run build` pass in `web/` (or CI green)
- [ ] No secrets or `.env` files in the diff
- [ ] `/en` does not fall back to Persian copy
- [ ] Gate G0 unchanged unless this PR explicitly closes an architecture decision

## Screenshots / routes

List URLs or attach screenshots for visible changes (`/fa/...`, `/en/...`).
