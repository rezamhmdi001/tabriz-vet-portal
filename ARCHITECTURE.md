# Faculty of Veterinary Medicine Portal — Operational Architecture

**Repository:** `IAU-TBZ-VET-PORTAL-2026`  
**Status:** Foundation for implementation. Gate G0 is open.  
**Product source:** [`docs/Faculty of Veterinary Medicine website architecture-v3.0 .md`](docs/Faculty%20of%20Veterinary%20Medicine%20website%20architecture-v3.0%20.md) (version 3.0, 17 October 2026 / 25 Mehr 1405).  
**Agent operating guide:** [`docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md`](docs/.architecture_rule/راهنمای_جامع_ساخت_وب_سایت_با_Cursor_Pro_و_Hermes_Agent.md).

This file is the English operational source of truth for Cursor and Hermes. It follows the Persian v3.0 document. If a change revises a locked decision, update both files in the same change. Section 4 of the Persian document stays open until the product owner closes it in both files.

The slug `dr-reza-mohammadi`, the address `user@iaut.ac.ir`, and the ORCID `0000-0002-1825-0097` appear only as format examples from the data model. They are not records to seed.

---

## 1. System overview and risk boundary

The product is the official academic, research, and informational website of the Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch. The organization tree can later represent university-wide units through `organization_units.parent_id` without a new platform.

**Risk level A.** Visitors only talk to Next.js. Editors reach Directus on a separate admin host. The public site has no accounts.

**In scope:** structured public content, bilingual reading, on-site search, institutional contact, and an informational presentation of the teaching hospital and diagnostic services (what the service is, visit conditions, hours, location, phone).

**Out of scope for this version:** electronic clinical records, online appointment booking, a visitor login portal, and payment. No animal or patient records in the database, application code, tests, fixtures, or agent prompts. Development and test data is synthetic. Phase 3 is when real faculty content is entered by editors.

**Content is structured data.** Directus stores fields. Next.js owns layout. There is no page builder.

**Shape:** one modular monolith. This version does not add microservices, Kubernetes, message queues, Redis, or an external search or analytics service.

**Network independence:** the production entry point is a self-hosted server (an Iran VPS or a university-approved datacenter). Vercel or Cloudflare Pages must not be the only public entry. Runtime and build must not depend on the Google Fonts CDN or on an external CAPTCHA.

---

## 2. Mandatory quality bar

| Area | Standard | Acceptance |
| :--- | :--- | :--- |
| Accessibility | WCAG 2.2 Level AA | Skip link to main content, full keyboard use, visible `:focus-visible`, 24×24px minimum target size, contrast 4.5:1 for normal text and 3:1 for large text, Playwright + `@axe-core/playwright` clean on the critical journeys |
| Performance | Core Web Vitals | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse Performance ≥ 90 on mobile and desktop |
| Academic SEO | Schema.org JSON-LD + technical SEO | JSON-LD from `web/lib/schema-org.ts`, dynamic `sitemap.xml`, `robots.txt`, canonical, `hreflang` |
| Language | `/fa` RTL and `/en` LTR | `lang` and `dir` follow the locale; Tailwind logical properties; directional icons mirror on `/fa` |
| Responsive | Mobile-first | Layout, tables, menus, faculty cards, and forms work from 320px through wide desktop |
| Security | OWASP ASVS baseline + TLS 1.3 | Read-only server access to Directus, separate admin host, server-side validation, EXIF removed from uploaded images |

---

## 3. Stack

| Layer | Choice |
| :--- | :--- |
| `web/` | Next.js 16.4+ App Router, React 19.3+, TypeScript 5 (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`), Tailwind CSS v4, RTL-ready shadcn/ui primitives, Lucide icons |
| `cms/` | Directus `directus/directus:12.5.0`, self-hosted. Revisions on. Webhook on publish and on later edits |
| Database | PostgreSQL `postgres:17`, Docker, internal network only |
| Proxy | Nginx or Caddy, TLS 1.3, ports 80 and 443 |
| Quality | ESLint 9, `tsc --noEmit`, `npm run build`, Playwright, `@axe-core/playwright` |
| Font | Self-hosted `web/public/fonts/Vazirmatn-Variable.woff2` for both locales |

`next/font/google` is forbidden. `/fa` sets Vazirmatn feature `ss01` for Persian digits in ordinary UI text. Phone numbers, ORCID, email, postal data, and slugs stay in Western digits so they can be copied. `/en` uses the same local Vazirmatn files. No second font is loaded from a CDN.

The Next.js process does not receive Postgres credentials and does not open a database connection. All public reads go through Directus with `DIRECTUS_READ_TOKEN`.

---

## 4. Repository tree

```
.
├── ARCHITECTURE.md
├── AGENTS.md
├── README.md
├── .env.example
├── .gitignore
├── docker-compose.yml                 # phase 3 runtime; not part of foundation
├── docs/
│   ├── Faculty of Veterinary Medicine website architecture-v3.0 .md
│   ├── .architecture_rule/            # Cursor + Hermes operating guide
│   └── evaluation/                    # later: docs/evaluation/prototype-evaluation.md
├── cms/
│   ├── schema/                        # committed snapshot.yaml
│   ├── extensions/
│   ├── uploads/                       # gitignored
│   └── data/database/                 # gitignored Postgres volume
└── web/
    ├── app/[locale]/                  # fa | en
    ├── app/api/revalidate/route.ts
    ├── lib/directus.ts
    ├── lib/schema-org.ts
    └── public/fonts/Vazirmatn-Variable.woff2
```

The public Next.js app, Directus initializer, and Compose file are in this tree. Gate G0 in section 6 stays open. The backup service writes a local unencrypted dump until an off-server destination is chosen.

`export_project.py` is named in v3.0 section 9.1. It is not part of this foundation step.

---

## 5. Docker Compose topology

Five services on one Compose project. Only `proxy` publishes ports.

| Service | Image / runtime | Responsibility | Network and data |
| :--- | :--- | :--- | :--- |
| `proxy` | Nginx or Caddy | TLS termination. Public site host routes to `web`. Admin host routes to `cms`. Admin host is limited to an allowlist or VPN | Published `80` and `443` |
| `web` | Next.js production | Public SSG/ISR and the search SSR, sitemap, JSON-LD, contact handler, revalidation handler | No persistent store. Calls `cms` with the server read token |
| `cms` | `directus/directus:12.5.0` | Admin UI, REST, image transforms, webhooks | Bind mounts `./cms/uploads` and `./cms/extensions` |
| `database` | `postgres:17` | Structured content, translations, Directus activity | Internal only. No host port. Bind mount `./cms/data/database` |
| `backup` | Cron + `pg_dump` + `tar` | Daily database dump and uploads archive, compressed and encrypted, copied to storage off the primary server | No published ports. Read access to the database and uploads |

Directus upload policy, set in Compose on `cms`:

- `FILES_MAX_UPLOAD_SIZE=10MB`
- `FILES_MIME_TYPE_ALLOW_LIST=image/jpeg,image/png,image/webp,application/pdf`

Image presets re-encode through Directus `sharp`, which drops EXIF, including GPS. PDF files are stored as uploaded and are not transcoded.

Backup encryption keys and the off-server destination are server-only. They are added when the destination is chosen. They are not `NEXT_PUBLIC_` variables.

---

## 6. Open decisions — Gate G0

Do not close these in code, schema, or navigation.

### 6.1 Domain modules

The baseline is the nine collections in section 7. Still undecided:

1. Whether **laboratories and specialized equipment**, the **downloads / regulations / academic calendar** library, and the **admissions guide** become their own collections, or live inside `organization_units`, `programs`, and `pages`.
2. Detailed fields for every module except `people`, `academic_profiles`, and `role_assignments`. Section 5.2 of the Persian document is final. Section 5.1 key fields below are the baseline for the other six collections. Do not add further columns until this decision is written into both architecture files.

### 6.2 Audience journeys

Navigation, home-page guide cards, and menus are not a copy of the org chart. They are not locked. The four audiences to design for are:

1. **Prospective students** — DVM, specialty programs, laboratories, admission conditions, faculty facilities.
2. **Current students** — teaching announcements, curriculum, faculty pages, internship and thesis forms, academic calendar.
3. **Researchers and faculty** — profiles, publications, research laboratories, collaboration paths.
4. **Teaching-hospital visitors** — services (small animal, large animal, poultry, laboratory diagnostics), hours, address, direct phone numbers. No online booking.

Until G0 is recorded, implement only the routes in section 8.1 and the nine baseline collections.

---

## 7. Directus data model

Three tiers stay separate so one person can be a faculty member of a department and hold one or more executive posts:

1. `people` — public identity and contact.
2. `academic_profiles` — one-to-one academic rank, degrees, scientometrics.
3. `role_assignments` — many-to-many posts on organization units.

### 7.1 Shared publication rules

Collections that include `status` use exactly `draft`, `published`, and `archived`. Default is `draft`. The public site reads `published` only. `archived` is the logical hide; it does not delete history. Revisions stay enabled.

There is no per-unit approval chain and no automatic expiry field.

| Role | Access |
| :--- | :--- |
| Public (no token) | No permissions on any collection |
| Site Reader | Static token in `DIRECTUS_READ_TOKEN`. Read rows with `status = "published"` only. This is the only Directus credential on `web` |
| Content Editor | Create and edit content, upload allowed files, set `published` or `archived` |
| System Admin | Schema, roles, settings, backup. At most two people |

### 7.2 `organization_units`

Faculty, deputy office, department, laboratory, or clinic. Tree via `parent_id`.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `slug` | string | Unique Latin slug |
| `unit_type` | enum | `faculty` \| `deputy` \| `department` \| `laboratory` \| `clinic` |
| `parent_id` | uuid, null | Self-relation. No cycles. Restrict delete while children or assignments exist |
| `sort_order` | integer | Display order |
| `phone` | string, null | |
| `email` | string, null | |
| `location_fa` | string, null | Address text |
| `location_en` | string, null | Address text |
| `name_fa` | string | Required for a published row |
| `name_en` | string, null | Empty means no English unit page |
| `intro_fa` | text, null | Introduction |
| `intro_en` | text, null | Introduction |

`primary_department_id` examples in the people model are illustrative only: علوم پایه، پاتوبیولوژی، علوم درمانگاهی، بهداشت و کنترل کیفی مواد غذایی. They are not a hardcoded menu and not an approved seed list.

Equipment, galleries, and extra laboratory fields wait on decision 6.1.

### 7.3 `people`

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `slug` | string | Unique Latin slug |
| `avatar` | file uuid, null | Official portrait |
| `academic_title_prefix_fa` | enum, null | `دکتر` \| `مهندس` \| `استاد` |
| `academic_title_prefix_en` | enum, null | `Dr.` \| `Prof.` |
| `first_name_fa` | string | Required |
| `last_name_fa` | string | Required |
| `full_name_fa` | string | Required. Public Persian display name |
| `first_name_en` | string, null | |
| `last_name_en` | string, null | |
| `full_name_en` | string, null | Required for the English profile to be active |
| `public_email` | string, null | Public university mailbox |
| `office_phone` | string, null | Office extension |
| `office_location_fa` | string, null | |
| `office_location_en` | string, null | |
| `office_hours_fa` | string, null | |
| `office_hours_en` | string, null | |

The prefix `استاد` is not the rank `full_professor`. Do not derive one from the other. Do not compose the heading by guessing; render `full_name_fa` or `full_name_en`.

### 7.4 `academic_profiles` (1:1 with `people`)

No `status` column. A profile is public only when its person is `published`. `person_id` is unique.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `person_id` | uuid | Unique foreign key to `people.id` |
| `academic_rank` | enum | Closed list below |
| `faculty_membership_type` | enum | Closed list below |
| `highest_degree` | enum | `dvm` \| `phd` \| `dvsc` \| `msc` |
| `primary_department_id` | uuid | Foreign key to `organization_units.id` |
| `specialty_fa` / `specialty_en` | string, null | |
| `bio_fa` / `bio_en` | text, null | |
| `research_interests_fa` / `research_interests_en` | json, null | `string[]` |
| `education_history_fa` / `education_history_en` | json, null | `{ degree, field, institution, country, year }[]` |
| `courses_taught_fa` / `courses_taught_en` | json, null | `{ title, delivery: "theoretical" \| "practical" }[]` |
| `selected_publications` | json, null | `{ kind: "article" \| "book", title, year?, venue? }[]`. Titles stay in the publication's own language |
| `veterinary_council_number` | string, null | Optional. Clinical faculty |
| `orcid_id` | string, null | `^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$` |
| `google_scholar_url` | string, null | Absolute profile URL |
| `scopus_author_id` | string, null | |
| `wos_researcher_id` | string, null | Web of Science ResearcherID |
| `researchgate_url` | string, null | |
| `institutional_cv_url` | string, null | Azad scientometric system or Pajooheshyar page |
| `cv_file` | file uuid, null | Full CV PDF |

**`academic_rank`**

| Key | Persian | English |
| :--- | :--- | :--- |
| `instructor` | مربی | Instructor / Lecturer |
| `assistant_professor` | استادیار | Assistant Professor |
| `associate_professor` | دانشیار | Associate Professor |
| `full_professor` | استاد (استاد تمام) | Professor (Full Professor) |
| `distinguished_professor` | استاد ممتاز | Distinguished Professor |
| `clinical_instructor` | مدرس بالینی / کارشناس ارشد آموزشی | Clinical Instructor |

**`faculty_membership_type`**

| Key | Persian | English |
| :--- | :--- | :--- |
| `official_tenured` | هیئت علمی تمام‌وقت (رسمی قطعی / آزمایشی) | Full-Time Tenured / Tenure-Track Faculty |
| `contractual` | هیئت علمی پیمانی / طرح هیئت علمی | Full-Time Contractual Faculty |
| `adjunct` | استاد مدعو / وابسته / حق‌التدریس | Adjunct / Visiting Lecturer |
| `emeritus` | استاد پیشکسوت / بازنشسته | Professor Emeritus |

**`highest_degree`:** `dvm` دکترای حرفه‌ای دامپزشکی (D.V.M.); `phd` دکترای تخصصی (Ph.D.); `dvsc` دکترای تخصصی بالینی دامپزشکی / دستیاری (D.V.Sc.); `msc` کارشناسی ارشد (M.Sc.).

These labels are a closed UI dictionary. People, units, news, and services are not.

### 7.5 `role_assignments`

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary key |
| `status` | enum | `draft` \| `published` \| `archived` |
| `person_id` | uuid | Foreign key to `people.id` |
| `unit_id` | uuid | Foreign key to `organization_units.id` |
| `role_category` | enum | Closed list below |
| `role_title_fa` | string | Specific display title. Required when published |
| `role_title_en` | string, null | Specific display title |
| `is_primary_role` | boolean | When true, this title is the subtitle on faculty cards |
| `sort_order` | integer | Order on the unit page |

| Key | Persian meaning | English category label |
| :--- | :--- | :--- |
| `faculty_dean` | رئیس دانشکده | Dean |
| `vice_dean` | معاون دانشکده (آموزشی و تحصیلات تکمیلی، پژوهش و فناوری، دانشجویی و فرهنگی، دامپزشکی/بیمارستان) | Vice Dean |
| `department_head` | مدیر گروه آموزشی | Department Head |
| `hospital_director` | رئیس بیمارستان آموزشی / کلینیک تخصصی | Teaching Hospital Director |
| `lab_supervisor` | سرپرست آزمایشگاه تخصصی | Laboratory Supervisor |
| `faculty_member` | عضو هیئت علمی گروه | Faculty Member |
| `staff` | کارشناس مسئول / کادر اداری و آزمایشگاهی | Staff |

The specific post is `role_title_*`. Several deputy offices share `vice_dean` and differ in `role_title_*`. On `/en`, use `role_title_en` when it is non-empty; otherwise use the English category label. Never render `role_title_fa` on `/en`.

A public card shows a published assignment only when the person and the unit are also published. At most one published primary role per person. If data breaks that rule, display the lowest `sort_order`.

### 7.6 Other baseline collections

Further columns wait on decision 6.1. Do not add an attachments library or an equipment table until then.

**`programs`** — `id`, `status`, `slug`, `degree_level` (`dvm` \| `msc` \| `phd` \| `dvsc`), `department_id` → `organization_units`, `curriculum_pdf` (file), `title_fa` / `title_en`, `duration_fa` / `duration_en`, `admission_fa` / `admission_en`, `courses_intro_fa` / `courses_intro_en`.

**`news_articles`** — `id`, `status`, `slug`, `category` (`news` \| `announcement`), `published_at`, `cover_image` (file), `unit_id` → `organization_units` nullable, `title_fa` / `title_en`, `summary_fa` / `summary_en`, `body_fa` / `body_en`.

**`events`** — `id`, `status`, `slug`, `start_at`, `end_at`, `organizer_unit_id` → `organization_units`, `cover_image` (file), `title_fa` / `title_en`, `location_fa` / `location_en`, `description_fa` / `description_en`.

**`service_items`** — informational hospital and diagnostic-lab services. `id`, `status`, `slug`, `unit_id` → `organization_units`, `working_hours_fa` / `working_hours_en`, `contact_phone`, `title_fa` / `title_en`, `visit_conditions_fa` / `visit_conditions_en`, `description_fa` / `description_en`. No booking URL, queue, or patient fields.

**`pages`** — fixed institutional pages such as about, history, and contact. `id`, `status`, `slug`, `show_in_nav`, `sort_order`, `title_fa` / `title_en`, `seo_title_fa` / `seo_title_en`, `seo_description_fa` / `seo_description_en`, `sections_fa` / `sections_en` (JSON `{ heading, body, sort }[]`). Regulations, forms, and the admissions guide are not a locked attachment model yet (decision 6.1). Their public URLs are part of decision 6.2.

Slugs are unique per collection and match `^[a-z0-9]+(?:-[a-z0-9]+)*$`. One slug is shared by `/fa` and `/en`.

---

## 8. Frontend, language, and SEO

### 8.1 Route map

`[locale]` is `fa` or `en`. Unprefixed public pages redirect to `/fa`. API routes stay outside `[locale]`.

| Route | Rendering | Cache tags |
| :--- | :--- | :--- |
| `/fa`, `/en` | SSG/ISR | `directus`, `organization-units`, `news`, `events` |
| `/[locale]/departments/[slug]` | SSG/ISR. Any organization unit (department, laboratory, or other unit) | `organization-units`, `people` |
| `/[locale]/people`, `/[locale]/people/[slug]` | SSG/ISR | `people` |
| `/[locale]/programs/[slug]` | SSG/ISR | `programs` |
| `/[locale]/news`, `/[locale]/news/[slug]` | ISR, news index paginated | `news` |
| `/[locale]/events`, `/[locale]/events/[slug]` | SSG/ISR | `events` |
| `/[locale]/services/[slug]` | SSG/ISR. Teaching-hospital and clinic services | `services` |
| `/[locale]/search?q=` | SSR. No durable cache | none |

Any extra collection read on a route adds that collection's tag. Home does not query a collection without tagging it.

Tag names used by `revalidateTag`:

| Collection | Tag |
| :--- | :--- |
| `organization_units` | `organization-units` |
| `people` (and profiles / assignments shown with them) | `people` |
| `programs` | `programs` |
| `news_articles` | `news` |
| `events` | `events` |
| `service_items` | `services` |
| `pages` | `pages` |

Every `directusFetch` also sets the umbrella tag `directus` and `revalidate: 3600`.

### 8.2 Missing English translation

1. `/en` never renders Persian as a fallback for a translated field. `selected_publications` keep their original bibliographic titles.
2. English lists, cards, menus, and search results are filtered inside `web/lib/directus.ts`. Drop the row when the locale name is null or `""`: `name_en` for units, `full_name_en` for people, `title_en` for programs, news, events, services, and pages.
3. A published row opened directly on `/en`, or reached by the language switch, with an empty English name renders `TranslationUnavailable`. Metadata is `robots: { index: false, follow: true }`. The English copy says the page is currently available in Persian only. Buttons: view the Persian URL (`/fa/...`) and back to English home (`/en`).
4. `notFound()` runs only when the slug does not exist or the row is not `published`. Draft and archived are not found. They are not `TranslationUnavailable`.

English list queries must not link to `TranslationUnavailable` pages. Sitemap entries for `/en` include only rows that pass the English-name filter. `hreflang` alternates are emitted only when both locales exist. A `TranslationUnavailable` URL is omitted from the sitemap.

Embedded phone numbers, emails, and ORCIDs inside Persian text use `<bdi dir="ltr">`.

### 8.3 `web/lib/schema-org.ts`

Server-only JSON-LD:

| Type | Where |
| :--- | :--- |
| `CollegeOrUniversity`, `EducationalOrganization` | Home and organization-unit pages |
| `Person` | Faculty profile. `jobTitle` is rank plus executive title. `affiliation` is the faculty. `sameAs` includes only non-empty ORCID (`https://orcid.org/{orcid_id}`), Google Scholar, Scopus, and ResearchGate |
| `Course`, `EducationalOccupationalProgram` | Program pages |
| `BreadcrumbList` | Hierarchical pages |
| `Event` | Event pages |
| `FAQPage` | Admissions FAQ, once that content exists |

Persian pages use the Persian organization name دانشکده دامپزشکی دانشگاه آزاد اسلامی واحد تبریز. English pages use Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch. JSON-LD is omitted on `TranslationUnavailable` and on `notFound`.

Identifiers that are empty are omitted. Agents do not invent ORCID or Scholar URLs.

### 8.4 Contact form

The contact form is an institutional inquiry. It is not an appointment form and has no clinical fields. Its URL is part of decision 6.2. The handler behavior is locked now: a server Route Handler, Zod validation, a honeypot field that must stay empty, and per-IP rate limiting. Honeypot failures return the same response as success and do not store the message. Rate-limit failures return 429. No external CAPTCHA. The delivery mailbox or store is chosen before the form is built; it is not a new public Directus collection by default.

---

## 9. Cache, media, and search

### 9.1 Revalidation

`web/app/api/revalidate/route.ts` accepts `POST`. It compares header `x-revalidate-secret` with `REVALIDATE_SECRET` in constant time. The JSON body carries the tag to refresh. The tag must be one of `directus`, `organization-units`, `people`, `programs`, `news`, `events`, `services`, `pages`. The handler calls the Next.js 16.4 tag revalidation API (`revalidateTag` unless that version has renamed it) and does not log the secret. Unknown tag or bad secret does not reveal which check failed beyond 401 for a bad secret and 400 for a bad tag.

Directus sends the webhook when published content changes. The webhook uses the tag name, not an ad-hoc string.

### 9.2 `getAssetUrl(fileId, preset)`

Defined only in `web/lib/directus.ts`. The returned URL is same-origin and contains no Directus token. A server path attaches `Authorization: Bearer ${DIRECTUS_READ_TOKEN}` when calling Directus. The public Directus role cannot read files.

| Preset | Contract |
| :--- | :--- |
| `avatar` | Width 400, WebP, quality 80, `withoutEnlargement=true` |
| `card` | Width 800, WebP, quality 80 |
| `hero` | Width 1600, WebP, quality 82 |
| `document` | Original PDF bytes, no image transform |

Confirm the exact Directus 12.5 asset query names when the proxy is implemented. The output contract above stays fixed.

### 9.3 `searchSiteContent(query, locale)`

Lives in `web/lib/directus.ts`. The page `/[locale]/search` is a server render with no durable cache.

- Validate and trim `q` with Zod. Minimum 2 characters, maximum 80.
- `Promise.all` over `people`, `organization_units`, `programs`, and `news_articles` only.
- Every query includes `status = "published"`.
- Use Directus `_icontains` on the active locale's fields only. `/en` does not search Persian columns.
- Apply the empty-translation filter before returning `/en` hits.
- Group the results by collection on the search page.

Events and services are not in this search set.

---

## 10. Security and privacy

- `web/lib/directus.ts` and `web/lib/schema-org.ts` start with `import "server-only"`.
- `DIRECTUS_URL`, `DIRECTUS_READ_TOKEN`, and `REVALIDATE_SECRET` are read on the server only. They never gain a `NEXT_PUBLIC_` prefix. `NEXT_PUBLIC_SITE_URL` is the only public variable, and it is an origin.
- Client components receive prepared DTOs. They do not call Directus.
- `.env` is gitignored. `cms/data/` and `cms/uploads/` are gitignored.
- Schema changes are snapshotted to `cms/schema/snapshot.yaml` and committed with the matching types.
- Uploaded images go through the WebP presets so EXIF does not ship to browsers.
- Synthetic fixtures only, until editors enter real academic content in phase 3. Real clinical material is out of scope even then.

---

## 11. Quality gates and phases

### 11.1 Required end-to-end journeys

1. `/fa` (RTL) and `/en` (LTR) at mobile and desktop, with no console errors and no broken layout.
2. Open a department, filter faculty by academic rank, open a profile, and validate its JSON-LD.
3. Search a faculty name or a news title on `/fa/search`.
4. Language switch on a translated row and on a row with no English: lists stay free of broken links; the direct English URL shows `TranslationUnavailable`.
5. Submit the contact form and confirm the honeypot and the rate limit.
6. Confirm Directus denies anonymous reads, then publish an item and confirm the webhook refreshes the public page.

### 11.2 Phases

| Phase | Work | Gate |
| :--- | :--- | :--- |
| 0. Domain and foundation | Governance files and the v3.0 architecture. Runtime is not started in this step | **G0 — open.** Product owner decides section 6 |
| 1. Data model and prototype evaluation | Local Directus tables, first `cms/schema/snapshot.yaml`, evaluation against `docs/evaluation/prototype-evaluation.md`, decision on carrying prototype UI forward | G1. Schema and visual shell approved |
| 2. Module pages, SEO, search | Units, faculty, programs, news, events, services, search, contact, synthetic data | G2. Build, WCAG 2.2 AA, faculty sign-off on staging |
| 3. Production host and real content | Compose, HTTPS, backup restore test, initial faculty content, public launch | G3. Handover and support |

### 11.3 Risks

| Risk | Mitigation |
| :--- | :--- |
| Iran network blocks fonts, CDNs, or CAPTCHA | Self-host the site and Vazirmatn. No external CAPTCHA |
| Directus BSL 1.1 | Product owner checks the license ceiling before any large commercial contract. Academic self-hosting is the current use |
| English translations arrive late | English lists omit unfinished rows. Direct visits render `TranslationUnavailable` |
| Clinical features leak into the hospital section | Services stay descriptive. No booking and no clinical records |
| Server loss or bad deletes | Directus revisions, daily encrypted off-server backup, restore proven on staging |

---

## 12. Release checklist

Before a public deploy, all of the following are true:

1. In `web/`: `npm run lint`, `npx tsc --noEmit`, and `npm run build` exit 0.
2. The latest Directus snapshot is in `cms/schema/` and committed.
3. `.env` is untracked, and no secret sits in a `NEXT_PUBLIC_` variable.
4. `/fa` and `/en` are checked on mobile and desktop against WCAG 2.2 AA, including skip link, keyboard, and contrast.
5. JSON-LD (`CollegeOrUniversity`, `EducationalOrganization`, `Person` with ORCID and Google Scholar, `Course`) and `sitemap.xml` are checked.
6. The anonymous Directus role has no access. The Site Reader token reads `published` rows only.
7. A backup restore has succeeded at least once on staging.
8. A git tag and the matching Docker image exist for rollback, and the faculty has approved staging.

Section 2 performance budgets remain in force for that launch even though they are not a separate checkbox above.
