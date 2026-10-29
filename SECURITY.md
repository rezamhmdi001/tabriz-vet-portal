# Security policy

## Supported versions

Only the `main` branch and tagged releases deployed for the faculty are supported.

## Reporting a vulnerability

Please report security issues **privately** to the repository maintainers (faculty IT or the lead developer). Do not file a public GitHub issue with exploit steps or live credentials.

## Secrets in this repository

- `.env` and real tokens must never be committed.
- `DIRECTUS_READ_TOKEN`, `REVALIDATE_SECRET`, Postgres credentials, and Directus admin credentials are **server-only**.
- The browser must not receive the Directus token, including inside image URLs. Use same-origin asset routes documented in `ARCHITECTURE.md`.

## Public site scope (risk level A)

This project is an academic information site. It does not store clinical records, offer visitor accounts, online booking, or payments.
