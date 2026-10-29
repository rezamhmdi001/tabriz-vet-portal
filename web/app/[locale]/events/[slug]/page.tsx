import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage, FactList, ProseBlock } from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import { hasLocaleTitle } from "@/lib/content-rules";
import { getAssetUrl, getEventBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildEventJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  formatTimestamp,
  contentMetadata,
  localeText,
  PUBLIC_SLUG,
  requireLocaleSlug,
  unavailableCopy,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !PUBLIC_SLUG.test(slug)) {
    return {};
  }
  const result = await getEventBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.title_fa, result.item.title_en)
      : "";
  const englishAvailable =
    result.status === "available" && hasLocaleTitle(result.item, "en");
  return contentMetadata(
    locale,
    result.status,
    title,
    `/${locale}/events/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getEventBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/events/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const description = localeText(locale, item.description_fa, item.description_en);
  const location = localeText(locale, item.location_fa, item.location_en);
  const start = item.start_at?.trim() ?? "";
  const end = item.end_at?.trim() ?? "";
  const home = `/${locale}`;
  const path = `${home}/events/${slug}`;
  const cover = item.cover_image ? getAssetUrl(item.cover_image, "card") : null;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.events, `${home}/events`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(title && start
      ? [
          {
            id: "event",
            json: serializeJsonLd(
              buildEventJsonLd({
                name: title,
                startDate: start,
                ...(end ? { endDate: end } : {}),
                ...(description ? { description } : {}),
                ...(location ? { locationName: location } : {}),
              }),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.events}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/events`, label: copy.catalog.events },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {cover ? <CoverImage src={cover} alt={heading} /> : null}
      <FactList
        items={[
          {
            term: copy.fields.starts,
            value: formatTimestamp(locale, item.start_at),
            latin: false,
          },
          {
            term: copy.fields.ends,
            value: formatTimestamp(locale, item.end_at),
            latin: false,
          },
          {
            term: copy.fields.location,
            value: location,
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.description} text={description} />
    </DetailPage>
  );
}
