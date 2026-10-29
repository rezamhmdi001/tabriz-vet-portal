import "server-only";
import { z } from "zod";
import {
  hasLocaleName,
  hasLocalePersonName,
  hasLocaleTitle,
  isAssetId,
} from "@/lib/content-rules";
import type { Locale } from "@/lib/i18n";
import { PUBLIC_SLUG } from "@/lib/view";

export {
  hasLocaleName,
  hasLocalePersonName,
  hasLocaleTitle,
} from "@/lib/content-rules";

export type ContentStatus = "draft" | "published" | "archived";

export type AcademicRank =
  | "instructor"
  | "assistant_professor"
  | "associate_professor"
  | "full_professor"
  | "distinguished_professor"
  | "clinical_instructor";

export type FacultyMembershipType =
  | "official_tenured"
  | "contractual"
  | "adjunct"
  | "emeritus";

export type HighestDegree = "dvm" | "phd" | "dvsc" | "msc";

export type UnitType =
  | "faculty"
  | "deputy"
  | "department"
  | "laboratory"
  | "clinic";

export type RoleCategory =
  | "faculty_dean"
  | "vice_dean"
  | "department_head"
  | "hospital_director"
  | "lab_supervisor"
  | "faculty_member"
  | "staff";

export type DegreeLevel = "dvm" | "msc" | "phd" | "dvsc";

export type NewsCategory = "news" | "announcement";

export type AcademicTitlePrefixFa = "Ø¯Ú©ØªØ±" | "Ù…Ù‡Ù†Ø¯Ø³" | "Ø§Ø³ØªØ§Ø¯";

export type AcademicTitlePrefixEn = "Dr." | "Prof.";

export interface LocalizedName {
  name_fa: string | null;
  name_en: string | null;
}

export interface LocalizedTitle {
  title_fa: string | null;
  title_en: string | null;
}

export interface OrganizationUnit extends LocalizedName {
  id: string;
  status: ContentStatus;
  slug: string | null;
  unit_type: UnitType | null;
  parent_id: string | null;
  sort_order: number | null;
  phone: string | null;
  email: string | null;
  location_fa: string | null;
  location_en: string | null;
  intro_fa: string | null;
  intro_en: string | null;
}

export interface Person {
  id: string;
  status: ContentStatus;
  slug: string | null;
  avatar: string | null;
  academic_title_prefix_fa: AcademicTitlePrefixFa | null;
  academic_title_prefix_en: AcademicTitlePrefixEn | null;
  first_name_fa: string | null;
  last_name_fa: string | null;
  full_name_fa: string | null;
  first_name_en: string | null;
  last_name_en: string | null;
  full_name_en: string | null;
  public_email: string | null;
  office_phone: string | null;
  office_location_fa: string | null;
  office_location_en: string | null;
  office_hours_fa: string | null;
  office_hours_en: string | null;
}

export interface AcademicProfile {
  id: string;
  person_id: string | null;
  academic_rank: AcademicRank | null;
  faculty_membership_type: FacultyMembershipType | null;
  highest_degree: HighestDegree | null;
  primary_department_id: string | null;
  specialty_fa: string | null;
  specialty_en: string | null;
  bio_fa: string | null;
  bio_en: string | null;
  research_interests_fa: unknown;
  research_interests_en: unknown;
  education_history_fa: unknown;
  education_history_en: unknown;
  courses_taught_fa: unknown;
  courses_taught_en: unknown;
  selected_publications: unknown;
  veterinary_council_number: string | null;
  orcid_id: string | null;
  google_scholar_url: string | null;
  scopus_author_id: string | null;
  wos_researcher_id: string | null;
  researchgate_url: string | null;
  institutional_cv_url: string | null;
  cv_file: string | null;
}

export interface RoleAssignment {
  id: string;
  status: ContentStatus;
  person_id: string | null;
  unit_id: string | null;
  role_category: RoleCategory | null;
  role_title_fa: string | null;
  role_title_en: string | null;
  is_primary_role: boolean | null;
  sort_order: number | null;
}

export interface Program extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  degree_level: DegreeLevel | null;
  department_id: string | null;
  curriculum_pdf: string | null;
  duration_fa: string | null;
  duration_en: string | null;
  admission_fa: string | null;
  admission_en: string | null;
  courses_intro_fa: string | null;
  courses_intro_en: string | null;
}

export interface NewsArticle extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  category: NewsCategory | null;
  published_at: string | null;
  cover_image: string | null;
  unit_id: string | null;
  summary_fa: string | null;
  summary_en: string | null;
  body_fa: string | null;
  body_en: string | null;
}

export interface EventItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  start_at: string | null;
  end_at: string | null;
  organizer_unit_id: string | null;
  cover_image: string | null;
  location_fa: string | null;
  location_en: string | null;
  description_fa: string | null;
  description_en: string | null;
}

export interface ServiceItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  unit_id: string | null;
  working_hours_fa: string | null;
  working_hours_en: string | null;
  contact_phone: string | null;
  visit_conditions_fa: string | null;
  visit_conditions_en: string | null;
  description_fa: string | null;
  description_en: string | null;
}

export interface PageItem extends LocalizedTitle {
  id: string;
  status: ContentStatus;
  slug: string | null;
  show_in_nav: boolean | null;
  sort_order: number | null;
  seo_title_fa: string | null;
  seo_title_en: string | null;
  seo_description_fa: string | null;
  seo_description_en: string | null;
  sections_fa: unknown;
  sections_en: unknown;
}

export type ReadFailure = "unconfigured" | "unreachable";

export type CatalogResult<T> =
  | { ok: true; items: T[] }
  | { ok: false; detail: ReadFailure };

export type ReadResult<T> =
  | { ok: true; data: T }
  | { ok: false; detail: ReadFailure };

export type LocaleItemResult<T> =
  | { status: "available"; item: T }
  | { status: "translation-unavailable"; item: T }
  | { status: "not-found" }
  | { status: "unavailable"; detail: ReadFailure };

export interface NewsPageResult {
  items: NewsArticle[];
  total: number;
  page: number;
}

export const NEWS_PAGE_SIZE = 20;

const LIST_PAGE_SIZE = 100;
const LIST_SAFETY_CEILING = 5000;

export interface DirectusStatus {
  ok: boolean;
  detail: "connected" | "unreachable" | "unconfigured";
}

const COLLECTIONS = {
  organizationUnits: "organization_units",
  people: "people",
  academicProfiles: "academic_profiles",
  roleAssignments: "role_assignments",
  programs: "programs",
  newsArticles: "news_articles",
  events: "events",
  serviceItems: "service_items",
  pages: "pages",
} as const;

interface DirectusPayload {
  data?: unknown;
  meta?: { filter_count?: unknown };
}

type FetchMode = { cache: "isr"; tags: string[] } | { cache: "no-store" };

function directusBaseUrl(): string | null {
  const raw = process.env.DIRECTUS_URL?.trim();
  if (!raw) {
    return null;
  }
  return raw.replace(/\/$/, "");
}

export type AssetPreset = "avatar" | "card" | "hero" | "document";

const IMAGE_PRESETS: Record<
  Exclude<AssetPreset, "document">,
  Record<string, string>
> = {
  avatar: {
    width: "400",
    format: "webp",
    quality: "80",
    withoutEnlargement: "true",
  },
  card: {
    width: "800",
    format: "webp",
    quality: "80",
  },
  hero: {
    width: "1600",
    format: "webp",
    quality: "82",
  },
};

/** Same-origin asset path. The browser never sees DIRECTUS_URL or the read token. */
export function getAssetUrl(
  fileId: string,
  preset: AssetPreset = "card",
): string | null {
  if (!isAssetId(fileId)) {
    return null;
  }
  const params = new URLSearchParams({ preset });
  return `/assets/${fileId}?${params.toString()}`;
}

/** Directus asset path for the server proxy. Never send this URL to the browser. */
export function directusAssetPath(
  fileId: string,
  preset: AssetPreset,
): string | null {
  if (!isAssetId(fileId)) {
    return null;
  }
  if (preset === "document") {
    return `/assets/${fileId}`;
  }
  const params = new URLSearchParams(IMAGE_PRESETS[preset]);
  return `/assets/${fileId}?${params.toString()}`;
}

function authHeaders(): HeadersInit {
  const token = process.env.DIRECTUS_READ_TOKEN?.trim();
  if (!token) {
    return {};
  }
  return { Authorization: `Bearer ${token}` };
}

async function directusFetch(
  path: string,
  mode: FetchMode,
): Promise<ReadResult<DirectusPayload>> {
  const base = directusBaseUrl();
  if (!base) {
    return { ok: false, detail: "unconfigured" };
  }

  try {
    const response = await fetch(`${base}${path}`, {
      headers: {
        Accept: "application/json",
        ...authHeaders(),
      },
      ...(mode.cache === "no-store"
        ? { cache: "no-store" as const }
        : { next: { revalidate: 3600, tags: ["directus", ...mode.tags] } }),
    });
    if (!response.ok) {
      return { ok: false, detail: "unreachable" };
    }
    const body: unknown = await response.json();
    if (!body || typeof body !== "object") {
      return { ok: false, detail: "unreachable" };
    }
    return { ok: true, data: body as DirectusPayload };
  } catch {
    return { ok: false, detail: "unreachable" };
  }
}

function readItems(payload: DirectusPayload): unknown[] | null {
  return Array.isArray(payload.data) ? payload.data : null;
}

function readCounted(
  payload: DirectusPayload,
): { items: unknown[]; total: number } | null {
  const items = readItems(payload);
  const total = payload.meta?.filter_count;
  if (!items || typeof total !== "number" || !Number.isFinite(total)) {
    return null;
  }
  return { items, total };
}

function publishedStatusFilter(): URLSearchParams {
  const params = new URLSearchParams();
  params.set("filter[status][_eq]", "published");
  return params;
}

async function listAll<T>(
  collection: string,
  tag: string,
  filter: URLSearchParams,
): Promise<CatalogResult<T>> {
  if (!directusBaseUrl()) {
    return { ok: false, detail: "unconfigured" };
  }

  const items: T[] = [];
  let offset = 0;
  let total: number | null = null;

  while (offset <= LIST_SAFETY_CEILING) {
    const params = new URLSearchParams(filter);
    params.set("fields", "*");
    params.set("limit", String(LIST_PAGE_SIZE));
    params.set("offset", String(offset));
    params.set("meta", "filter_count");
    const read = await directusFetch(`/items/${collection}?${params.toString()}`, {
      cache: "isr",
      tags: [tag],
    });
    if (!read.ok) {
      return read;
    }
    const counted = readCounted(read.data);
    if (!counted) {
      return { ok: false, detail: "unreachable" };
    }
    if (total === null) {
      total = counted.total;
      if (total > LIST_SAFETY_CEILING) {
        return { ok: false, detail: "unreachable" };
      }
    }
    items.push(...(counted.items as T[]));
    if (items.length >= total || counted.items.length < LIST_PAGE_SIZE) {
      return { ok: true, items };
    }
    offset += LIST_PAGE_SIZE;
  }

  return { ok: false, detail: "unreachable" };
}

async function listPublished<T>(collection: string, tag: string): Promise<CatalogResult<T>> {
  return listAll<T>(collection, tag, publishedStatusFilter());
}

async function listPublishedForLocale<T>(
  collection: string,
  tag: string,
  locale: Locale,
  isAvailable: (item: T, locale: Locale) => boolean,
): Promise<CatalogResult<T>> {
  const listed = await listPublished<T>(collection, tag);
  if (!listed.ok) {
    return listed;
  }
  return { ok: true, items: listed.items.filter((item) => isAvailable(item, locale)) };
}

export async function getDirectusStatus(): Promise<DirectusStatus> {
  const base = directusBaseUrl();
  if (!base) {
    return { ok: false, detail: "unconfigured" };
  }

  try {
    const response = await fetch(`${base}/server/ping`, {
      cache: "no-store",
      headers: { Accept: "text/plain" },
    });
    if (!response.ok) {
      return { ok: false, detail: "unreachable" };
    }
    return { ok: true, detail: "connected" };
  } catch {
    return { ok: false, detail: "unreachable" };
  }
}

type AssetProbe = "hit" | "miss" | "error";

async function probeFile(
  collection: string,
  field: string,
  fileId: string,
  tag: string,
  options: { status: boolean; person: boolean },
): Promise<AssetProbe> {
  const params = new URLSearchParams();
  params.set(`filter[${field}][_eq]`, fileId);
  if (options.status) {
    params.set("filter[status][_eq]", "published");
  }
  if (options.person) {
    params.set("filter[person_id][status][_eq]", "published");
  }
  params.set("fields", "id");
  params.set("limit", "1");
  const read = await directusFetch(`/items/${collection}?${params.toString()}`, {
    cache: "isr",
    tags: [tag],
  });
  if (!read.ok) {
    return "error";
  }
  const items = readItems(read.data);
  if (!items) {
    return "error";
  }
  return items.length > 0 ? "hit" : "miss";
}

export type AssetAccess = "allowed" | "denied" | "unconfigured" | "unreachable";

/** Public bytes only when a published row references the file for this preset. */
export async function publishedAssetAccess(
  fileId: string,
  preset: AssetPreset,
): Promise<AssetAccess> {
  if (!isAssetId(fileId)) {
    return "denied";
  }
  if (!directusBaseUrl() || !process.env.DIRECTUS_READ_TOKEN?.trim()) {
    return "unconfigured";
  }

  const probes =
    preset === "document"
      ? [
          probeFile(COLLECTIONS.programs, "curriculum_pdf", fileId, "programs", {
            status: true,
            person: false,
          }),
          probeFile(COLLECTIONS.academicProfiles, "cv_file", fileId, "people", {
            status: false,
            person: true,
          }),
        ]
      : [
          probeFile(COLLECTIONS.people, "avatar", fileId, "people", {
            status: true,
            person: false,
          }),
          probeFile(COLLECTIONS.newsArticles, "cover_image", fileId, "news", {
            status: true,
            person: false,
          }),
          probeFile(COLLECTIONS.events, "cover_image", fileId, "events", {
            status: true,
            person: false,
          }),
        ];
  const results = await Promise.all(probes);
  if (results.some((result) => result === "hit")) {
    return "allowed";
  }
  if (results.some((result) => result === "error")) {
    return "unreachable";
  }
  return "denied";
}

export function listOrganizationUnits(locale: Locale): Promise<CatalogResult<OrganizationUnit>> {
  return listPublishedForLocale<OrganizationUnit>(
    COLLECTIONS.organizationUnits,
    "organization-units",
    locale,
    hasLocaleName,
  );
}

export function listPeople(locale: Locale): Promise<CatalogResult<Person>> {
  return listPublishedForLocale<Person>(
    COLLECTIONS.people,
    "people",
    locale,
    hasLocalePersonName,
  );
}

export function listAcademicProfiles(): Promise<CatalogResult<AcademicProfile>> {
  const filter = new URLSearchParams();
  filter.set("filter[person_id][status][_eq]", "published");
  return listAll<AcademicProfile>(COLLECTIONS.academicProfiles, "people", filter);
}

export function listRoleAssignments(): Promise<CatalogResult<RoleAssignment>> {
  const filter = publishedStatusFilter();
  filter.set("filter[person_id][status][_eq]", "published");
  filter.set("filter[unit_id][status][_eq]", "published");
  return listAll<RoleAssignment>(COLLECTIONS.roleAssignments, "people", filter);
}

export function listRoleAssignmentsForPerson(
  personId: string,
): Promise<CatalogResult<RoleAssignment>> {
  if (!isAssetId(personId)) {
    return Promise.resolve({ ok: true, items: [] });
  }
  const filter = publishedStatusFilter();
  filter.set("filter[person_id][_eq]", personId);
  filter.set("filter[person_id][status][_eq]", "published");
  filter.set("filter[unit_id][status][_eq]", "published");
  return listAll<RoleAssignment>(COLLECTIONS.roleAssignments, "people", filter);
}

export function listPrograms(locale: Locale): Promise<CatalogResult<Program>> {
  return listPublishedForLocale<Program>(
    COLLECTIONS.programs,
    "programs",
    locale,
    hasLocaleTitle,
  );
}

export function listNewsArticles(locale: Locale): Promise<CatalogResult<NewsArticle>> {
  return listPublishedForLocale<NewsArticle>(
    COLLECTIONS.newsArticles,
    "news",
    locale,
    hasLocaleTitle,
  );
}

export async function listNewsPage(
  locale: Locale,
  page: number,
): Promise<ReadResult<NewsPageResult>> {
  const safePage = Number.isInteger(page) && page > 0 ? page : 1;
  if (!directusBaseUrl()) {
    return { ok: false, detail: "unconfigured" };
  }
  const params = new URLSearchParams();
  params.set("filter[_and][0][status][_eq]", "published");
  if (locale === "en") {
    params.set("filter[_and][1][title_en][_nempty]", "true");
  }
  params.set("sort", "-published_at,id");
  params.set("fields", "*");
  params.set("limit", String(NEWS_PAGE_SIZE));
  params.set("offset", String((safePage - 1) * NEWS_PAGE_SIZE));
  params.set("meta", "filter_count");
  const read = await directusFetch(
    `/items/${COLLECTIONS.newsArticles}?${params.toString()}`,
    { cache: "isr", tags: ["news"] },
  );
  if (!read.ok) {
    return read;
  }
  const counted = readCounted(read.data);
  if (!counted) {
    return { ok: false, detail: "unreachable" };
  }
  const items = (counted.items as NewsArticle[]).filter((item) =>
    hasLocaleTitle(item, locale),
  );
  return { ok: true, data: { items, total: counted.total, page: safePage } };
}

export function listEvents(locale: Locale): Promise<CatalogResult<EventItem>> {
  return listPublishedForLocale<EventItem>(
    COLLECTIONS.events,
    "events",
    locale,
    hasLocaleTitle,
  );
}

export function listServiceItems(locale: Locale): Promise<CatalogResult<ServiceItem>> {
  return listPublishedForLocale<ServiceItem>(
    COLLECTIONS.serviceItems,
    "services",
    locale,
    hasLocaleTitle,
  );
}

async function getPublishedBySlug<T extends { status: ContentStatus }>(
  collection: string,
  tag: string,
  slug: string,
): Promise<ReadResult<T | null>> {
  if (!PUBLIC_SLUG.test(slug)) {
    return { ok: true, data: null };
  }
  const params = new URLSearchParams();
  params.set("filter[status][_eq]", "published");
  params.set("filter[slug][_eq]", slug);
  params.set("fields", "*");
  params.set("limit", "1");
  const read = await directusFetch(`/items/${collection}?${params.toString()}`, {
    cache: "isr",
    tags: [tag],
  });
  if (!read.ok) {
    return read;
  }
  const items = readItems(read.data);
  if (!items) {
    return { ok: false, detail: "unreachable" };
  }
  const item = items[0];
  if (!item || typeof item !== "object") {
    return { ok: true, data: null };
  }
  return { ok: true, data: item as T };
}

async function readLocaleItem<T extends { status: ContentStatus }>(
  read: ReadResult<T | null>,
  locale: Locale,
  hasTranslation: (item: T, locale: Locale) => boolean,
): Promise<LocaleItemResult<T>> {
  if (!read.ok) {
    return { status: "unavailable", detail: read.detail };
  }
  return resolveLocaleItem(read.data, locale, hasTranslation);
}

export function resolveLocaleItem<T extends { status: ContentStatus }>(
  item: T | null | undefined,
  locale: Locale,
  hasTranslation: (item: T, locale: Locale) => boolean,
): LocaleItemResult<T> {
  if (!item || item.status !== "published") {
    return { status: "not-found" };
  }
  if (!hasTranslation(item, locale)) {
    return { status: "translation-unavailable", item };
  }
  return { status: "available", item };
}

export async function getOrganizationUnitBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<OrganizationUnit>(
    COLLECTIONS.organizationUnits,
    "organization-units",
    slug,
  );
  return readLocaleItem(read, locale, hasLocaleName);
}

export async function getOrganizationUnitById(
  id: string,
): Promise<ReadResult<OrganizationUnit | null>> {
  if (!isAssetId(id)) {
    return { ok: true, data: null };
  }
  const params = new URLSearchParams();
  params.set("filter[status][_eq]", "published");
  params.set("filter[id][_eq]", id);
  params.set("fields", "*");
  params.set("limit", "1");
  const read = await directusFetch(
    `/items/${COLLECTIONS.organizationUnits}?${params.toString()}`,
    { cache: "isr", tags: ["organization-units"] },
  );
  if (!read.ok) {
    return read;
  }
  const items = readItems(read.data);
  if (!items) {
    return { ok: false, detail: "unreachable" };
  }
  const item = items[0];
  if (!item || typeof item !== "object") {
    return { ok: true, data: null };
  }
  return { ok: true, data: item as OrganizationUnit };
}

export async function getAcademicProfile(
  personId: string,
): Promise<ReadResult<AcademicProfile | null>> {
  if (!isAssetId(personId)) {
    return { ok: true, data: null };
  }
  const params = new URLSearchParams();
  params.set("filter[person_id][_eq]", personId);
  params.set("filter[person_id][status][_eq]", "published");
  params.set("fields", "*");
  params.set("limit", "1");
  const read = await directusFetch(
    `/items/${COLLECTIONS.academicProfiles}?${params.toString()}`,
    { cache: "isr", tags: ["people"] },
  );
  if (!read.ok) {
    return read;
  }
  const items = readItems(read.data);
  if (!items) {
    return { ok: false, detail: "unreachable" };
  }
  const item = items[0];
  if (!item || typeof item !== "object") {
    return { ok: true, data: null };
  }
  return { ok: true, data: item as AcademicProfile };
}

export async function getPersonBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<Person>(COLLECTIONS.people, "people", slug);
  return readLocaleItem(read, locale, hasLocalePersonName);
}

export async function getProgramBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<Program>(COLLECTIONS.programs, "programs", slug);
  return readLocaleItem(read, locale, hasLocaleTitle);
}

export async function getNewsArticleBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<NewsArticle>(
    COLLECTIONS.newsArticles,
    "news",
    slug,
  );
  return readLocaleItem(read, locale, hasLocaleTitle);
}

export async function getEventBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<EventItem>(COLLECTIONS.events, "events", slug);
  return readLocaleItem(read, locale, hasLocaleTitle);
}

export async function getServiceItemBySlug(slug: string, locale: Locale) {
  const read = await getPublishedBySlug<ServiceItem>(
    COLLECTIONS.serviceItems,
    "services",
    slug,
  );
  return readLocaleItem(read, locale, hasLocaleTitle);
}

export interface SearchGroups {
  organizationUnits: OrganizationUnit[];
  people: Person[];
  programs: Program[];
  newsArticles: NewsArticle[];
}

export type SearchStatus =
  | "ready"
  | "empty-query"
  | "too-short"
  | "too-long"
  | "unconfigured"
  | "unreachable";

export interface SearchOutcome {
  status: SearchStatus;
  query: string;
  results: SearchGroups;
  truncated: boolean;
}

function emptySearch(): SearchGroups {
  return {
    organizationUnits: [],
    people: [],
    programs: [],
    newsArticles: [],
  };
}

const UNIT_SEARCH_BASES = ["name"] as const;
const PERSON_SEARCH_BASES = ["full_name", "first_name", "last_name"] as const;
const TITLE_SEARCH_BASES = ["title"] as const;

function searchItemsPath(
  collection: string,
  fieldBases: readonly string[],
  query: string,
  locale: Locale,
): string {
  const suffix = locale === "en" ? "en" : "fa";
  const params = new URLSearchParams();
  params.set("filter[_and][0][status][_eq]", "published");
  fieldBases.forEach((base, index) => {
    params.set(
      `filter[_and][1][_or][${index}][${base}_${suffix}][_icontains]`,
      query,
    );
  });
  params.set("fields", "*");
  params.set("limit", "20");
  params.set("meta", "filter_count");
  return `/items/${collection}?${params.toString()}`;
}

const searchQuerySchema = z.string().trim().min(2).max(80);

async function searchPublished<T>(
  collection: string,
  fieldBases: readonly string[],
  query: string,
  locale: Locale,
): Promise<ReadResult<{ items: T[]; total: number }>> {
  const read = await directusFetch(
    searchItemsPath(collection, fieldBases, query, locale),
    { cache: "no-store" },
  );
  if (!read.ok) {
    return read;
  }
  const counted = readCounted(read.data);
  if (!counted) {
    return { ok: false, detail: "unreachable" };
  }
  return { ok: true, data: { items: counted.items as T[], total: counted.total } };
}

export async function searchSiteContent(
  query: string,
  locale: Locale,
): Promise<SearchOutcome> {
  const trimmed = z.string().trim().parse(query);
  if (!trimmed) {
    return {
      status: "empty-query",
      query: "",
      results: emptySearch(),
      truncated: false,
    };
  }
  const parsed = searchQuerySchema.safeParse(query);
  if (!parsed.success) {
    const tooLong = trimmed.length > 80;
    return {
      status: tooLong ? "too-long" : "too-short",
      query: trimmed,
      results: emptySearch(),
      truncated: false,
    };
  }
  if (!directusBaseUrl()) {
    return {
      status: "unconfigured",
      query: trimmed,
      results: emptySearch(),
      truncated: false,
    };
  }

  const [organizationUnits, people, programs, newsArticles] = await Promise.all([
    searchPublished<OrganizationUnit>(
      COLLECTIONS.organizationUnits,
      UNIT_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<Person>(
      COLLECTIONS.people,
      PERSON_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<Program>(
      COLLECTIONS.programs,
      TITLE_SEARCH_BASES,
      trimmed,
      locale,
    ),
    searchPublished<NewsArticle>(
      COLLECTIONS.newsArticles,
      TITLE_SEARCH_BASES,
      trimmed,
      locale,
    ),
  ]);

  if (
    !organizationUnits.ok ||
    !people.ok ||
    !programs.ok ||
    !newsArticles.ok
  ) {
    return {
      status: "unreachable",
      query: trimmed,
      results: emptySearch(),
      truncated: false,
    };
  }

  const truncated = [organizationUnits, people, programs, newsArticles].some(
    (group) => group.data.total > 20,
  );

  return {
    status: "ready",
    query: trimmed,
    results: {
      organizationUnits: organizationUnits.data.items.filter((item) =>
        hasLocaleName(item, locale),
      ),
      people: people.data.items.filter((item) => hasLocalePersonName(item, locale)),
      programs: programs.data.items.filter((item) => hasLocaleTitle(item, locale)),
      newsArticles: newsArticles.data.items.filter((item) =>
        hasLocaleTitle(item, locale),
      ),
    },
    truncated,
  };
}

export function catalogFailure(
  results: readonly CatalogResult<unknown>[],
): ReadFailure | null {
  const failed = results.filter((result) => !result.ok);
  if (failed.length === 0) {
    return null;
  }
  return failed.some((result) => result.detail === "unconfigured")
    ? "unconfigured"
    : "unreachable";
}
