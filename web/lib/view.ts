import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translationUnavailableMetadata } from "@/components/translation-unavailable";
import { getShellCopy, isLocale, type Locale } from "@/lib/i18n";

export const PUBLIC_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type ContentSection =
  | "departments"
  | "people"
  | "programs"
  | "news"
  | "events"
  | "services";

export interface CatalogItem {
  id: string;
  href: string;
  label: string;
  detail?: string;
}

export async function requireLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return locale;
}

export async function requireLocaleSlug(
  params: Promise<{ locale: string; slug: string }>,
): Promise<{ locale: Locale; slug: string }> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    notFound();
  }
  return { locale, slug };
}

export function localeText(
  locale: Locale,
  fa: string | null | undefined,
  en: string | null | undefined,
): string {
  const value = locale === "en" ? en : fa;
  return value?.trim() ?? "";
}

export function publishedPath(
  locale: Locale,
  section: ContentSection,
  slug: string | null | undefined,
): string | null {
  const value = slug?.trim() ?? "";
  if (!PUBLIC_SLUG.test(value)) {
    return null;
  }
  return `/${locale}/${section}/${value}`;
}

export function namedCard(
  id: string,
  href: string | null,
  label: string,
  detail: string,
): CatalogItem | null {
  if (!href) {
    return null;
  }
  const name = label.trim();
  if (!name) {
    return null;
  }
  const extra = detail.trim();
  if (extra) {
    return { id, href, label: name, detail: extra };
  }
  return { id, href, label: name };
}

export function formatTimestamp(
  locale: Locale,
  value: string | null | undefined,
): string {
  if (!value?.trim()) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function joinParts(parts: readonly string[]): string {
  return parts
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .join(" — ");
}

export function labelFor<K extends string>(
  labels: Record<K, string>,
  key: string | null,
): string {
  if (!key || !Object.prototype.hasOwnProperty.call(labels, key)) {
    return "";
  }
  return labels[key as K];
}

export function cmsStatusLabel(
  locale: Locale,
  status: { ok: boolean; detail: "connected" | "unreachable" | "unconfigured" },
): string {
  const copy = getShellCopy(locale);
  if (status.ok) {
    return copy.cmsConnected;
  }
  if (status.detail === "unconfigured") {
    return copy.cmsUnconfigured;
  }
  return copy.cmsUnreachable;
}

export function absoluteUrl(path: string): string | null {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!origin) {
    return null;
  }
  return `${origin}${path}`;
}

export function breadcrumbItem(
  name: string,
  path: string,
): { name: string; url?: string } {
  const url = absoluteUrl(path);
  if (!url) {
    return { name };
  }
  return { name, url };
}

export function alternatesFor(
  path: string,
  englishAvailable: boolean,
): Metadata {
  const canonical = absoluteUrl(path);
  const suffix = path.replace(/^\/(?:fa|en)(?=\/|\?|$)/, "");
  const fa = absoluteUrl(`/fa${suffix}`);
  const en = absoluteUrl(`/en${suffix}`);
  const languages = englishAvailable && fa && en ? { fa, en } : undefined;
  if (!canonical && !languages) {
    return {};
  }
  return {
    alternates: {
      ...(canonical ? { canonical } : {}),
      ...(languages ? { languages } : {}),
    },
  };
}

export function contentMetadata(
  locale: Locale,
  status: "available" | "not-found" | "translation-unavailable" | "unavailable",
  title: string,
  path: string,
  englishAvailable: boolean,
  detail?: "unconfigured" | "unreachable" | undefined,
): Metadata {
  if (status === "translation-unavailable") {
    return {
      ...translationUnavailableMetadata(),
      title: getShellCopy("en").translationUnavailable.title,
    };
  }
  if (status === "unavailable") {
    return {
      title: unavailableCopy(locale, detail ?? "unreachable"),
      robots: { index: false, follow: false },
    };
  }
  if (status !== "available" || !title.trim()) {
    return {};
  }
  return {
    title,
    ...alternatesFor(path, englishAvailable),
  };
}

export function sectionMetadata(title: string, path: string): Metadata {
  return {
    title,
    ...alternatesFor(path, true),
  };
}

export function unavailableCopy(
  locale: Locale,
  detail: "unconfigured" | "unreachable",
): string {
  const copy = getShellCopy(locale);
  return detail === "unconfigured" ? copy.cmsUnconfigured : copy.cmsUnreachable;
}

export function timestamp(value: string | null | undefined): number | null {
  if (!value?.trim()) {
    return null;
  }
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? null : time;
}
