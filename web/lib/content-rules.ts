import { z } from "zod";

export type ContentLocale = "fa" | "en";

export const ASSET_ID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isAssetId(value: string): boolean {
  return ASSET_ID.test(value);
}

export const REVALIDATABLE_TAGS = [
  "directus",
  "organization-units",
  "people",
  "programs",
  "news",
  "events",
  "services",
  "pages",
] as const;

export type RevalidatableTag = (typeof REVALIDATABLE_TAGS)[number];

export function isRevalidatableTag(value: string): value is RevalidatableTag {
  return (REVALIDATABLE_TAGS as readonly string[]).includes(value);
}

function hasText(value: string | null | undefined): boolean {
  return Boolean(value?.trim());
}

export function hasLocaleName(
  item: { name_en: string | null },
  locale: ContentLocale,
): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.name_en);
}

export function hasLocalePersonName(
  item: { full_name_en: string | null },
  locale: ContentLocale,
): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.full_name_en);
}

export function hasLocaleTitle(
  item: { title_en: string | null },
  locale: ContentLocale,
): boolean {
  if (locale === "fa") {
    return true;
  }
  return hasText(item.title_en);
}

export interface PrimaryRoleCandidate {
  id: string;
  is_primary_role: boolean | null;
  sort_order: number | null;
}

/** Lowest `sort_order` wins when more than one published primary role exists. */
export function selectPrimaryRole<T extends PrimaryRoleCandidate>(
  rows: readonly T[],
): T | null {
  const primaries = rows.filter((row) => row.is_primary_role === true);
  const sorted = [...primaries].sort((a, b) => {
    const order = (a.sort_order ?? 0) - (b.sort_order ?? 0);
    if (order !== 0) {
      return order;
    }
    return a.id.localeCompare(b.id);
  });
  return sorted[0] ?? null;
}

export function roleSubtitle(
  locale: ContentLocale,
  role: {
    role_title_fa: string | null;
    role_title_en: string | null;
    role_category: string | null;
  },
  labels: object,
): string {
  const titled = locale === "en" ? role.role_title_en : role.role_title_fa;
  const title = titled?.trim() ?? "";
  if (title) {
    return title;
  }
  const category = role.role_category;
  if (!category || !Object.prototype.hasOwnProperty.call(labels, category)) {
    return "";
  }
  const value = (labels as Record<string, unknown>)[category];
  return typeof value === "string" ? value : "";
}

const ORCID_ID = /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/;

function orcidCheckDigit(baseDigits: string): string {
  let total = 0;
  for (const character of baseDigits) {
    total = (total + Number(character)) * 2;
  }
  const result = (12 - (total % 11)) % 11;
  return result === 10 ? "X" : String(result);
}

export function canonicalOrcid(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let identifier = trimmed;
  if (trimmed.includes("://")) {
    let url: URL;
    try {
      url = new URL(trimmed);
    } catch {
      return null;
    }
    if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "orcid.org") {
      return null;
    }
    if (url.username || url.password || (url.port && url.port !== "443")) {
      return null;
    }
    identifier = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
  }

  const normalized = identifier.toUpperCase();
  if (!ORCID_ID.test(normalized)) {
    return null;
  }
  const compact = normalized.replace(/-/g, "");
  if (orcidCheckDigit(compact.slice(0, 15)) !== compact[15]) {
    return null;
  }
  return `https://orcid.org/${normalized}`;
}

function canonicalGoogleScholar(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (url.username || url.password || (url.port && url.port !== "443")) {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const allowedHost =
    host === "scholar.google.com" ||
    /^scholar\.google\.co\.[a-z]{2}$/.test(host) ||
    /^scholar\.google\.com\.[a-z]{2}$/.test(host) ||
    /^scholar\.google\.[a-z]{2}$/.test(host);
  if (!allowedHost) {
    return null;
  }
  return url.toString();
}

function canonicalHttpsHost(
  value: string | null | undefined,
  allowedHosts: ReadonlySet<string>,
): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (url.username || url.password || (url.port && url.port !== "443")) {
    return null;
  }
  if (!allowedHosts.has(url.hostname.toLowerCase())) {
    return null;
  }
  return url.toString();
}

const SCOPUS_AUTHOR_ID = /^\d{1,20}$/;
const RESEARCHGATE_HOSTS = new Set(["researchgate.net", "www.researchgate.net"]);

export function canonicalScopusAuthor(value: string | null | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  if (!SCOPUS_AUTHOR_ID.test(trimmed)) {
    return null;
  }
  return `https://www.scopus.com/authid/detail.uri?authorId=${trimmed}`;
}

export function httpsUrl(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (url.username || url.password) {
    return null;
  }
  return url.toString();
}

export function personSameAs(
  orcidId: string | null | undefined,
  googleScholarUrl: string | null | undefined,
  scopusAuthorId?: string | null,
  researchGateUrl?: string | null,
): string[] {
  const links = [
    canonicalOrcid(orcidId),
    canonicalGoogleScholar(googleScholarUrl),
    canonicalScopusAuthor(scopusAuthorId),
    canonicalHttpsHost(researchGateUrl, RESEARCHGATE_HOSTS),
  ];
  return links.filter((link): link is string => link !== null);
}

const looseText = z.string().optional();

const educationItem = z.object({
  degree: looseText,
  field: looseText,
  institution: looseText,
  country: looseText,
  year: z.union([z.string(), z.number()]).optional(),
});

const courseItem = z.object({
  title: z.string(),
  delivery: z.enum(["theoretical", "practical"]).optional(),
});

const publicationItem = z.object({
  kind: z.enum(["article", "book"]).optional(),
  title: z.string(),
  year: z.union([z.string(), z.number()]).optional(),
  venue: looseText,
});

function parseEach<T>(value: unknown, schema: z.ZodType<T>): T[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap((item) => {
    const parsed = schema.safeParse(item);
    return parsed.success ? [parsed.data] : [];
  });
}

export function parseStringList(value: unknown): string[] {
  return parseEach(value, z.string())
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

export interface EducationEntry {
  degree?: string;
  field?: string;
  institution?: string;
  country?: string;
  year?: string;
}

export function parseEducation(value: unknown): EducationEntry[] {
  return parseEach(value, educationItem).flatMap((item) => {
    const year =
      item.year === undefined || item.year === null ? "" : String(item.year).trim();
    const entry: EducationEntry = {};
    const degree = item.degree?.trim() ?? "";
    const field = item.field?.trim() ?? "";
    const institution = item.institution?.trim() ?? "";
    const country = item.country?.trim() ?? "";
    if (degree) {
      entry.degree = degree;
    }
    if (field) {
      entry.field = field;
    }
    if (institution) {
      entry.institution = institution;
    }
    if (country) {
      entry.country = country;
    }
    if (year) {
      entry.year = year;
    }
    if (Object.keys(entry).length === 0) {
      return [];
    }
    return [entry];
  });
}

export interface CourseEntry {
  title: string;
  delivery?: "theoretical" | "practical";
}

export function parseCourses(value: unknown): CourseEntry[] {
  return parseEach(value, courseItem).flatMap((item) => {
    const title = item.title.trim();
    if (!title) {
      return [];
    }
    if (item.delivery) {
      return [{ title, delivery: item.delivery }];
    }
    return [{ title }];
  });
}

export interface PublicationEntry {
  title: string;
  year?: string;
  venue?: string;
}

export function parsePublications(value: unknown): PublicationEntry[] {
  return parseEach(value, publicationItem).flatMap((item) => {
    const title = item.title.trim();
    if (!title) {
      return [];
    }
    const entry: PublicationEntry = { title };
    const year =
      item.year === undefined || item.year === null ? "" : String(item.year).trim();
    const venue = item.venue?.trim() ?? "";
    if (year) {
      entry.year = year;
    }
    if (venue) {
      entry.venue = venue;
    }
    return [entry];
  });
}
