import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage, FactList, ProseBlock } from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import { hasLocaleTitle } from "@/lib/content-rules";
import { getAssetUrl, getNewsArticleBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import { buildBreadcrumbJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  breadcrumbItem,
  formatTimestamp,
  labelFor,
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
  const result = await getNewsArticleBySlug(slug, locale);
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
    `/${locale}/news/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getNewsArticleBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/news/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const summary = localeText(locale, item.summary_fa, item.summary_en);
  const body = localeText(locale, item.body_fa, item.body_en);
  const home = `/${locale}`;
  const path = `${home}/news/${slug}`;
  const cover = item.cover_image ? getAssetUrl(item.cover_image, "card") : null;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.news, `${home}/news`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
  ];

  return (
    <DetailPage
      label={copy.catalog.news}
      title={heading}
      deck={summary}
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/news`, label: copy.catalog.news },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {cover ? <CoverImage src={cover} alt={heading} /> : null}
      <FactList
        items={[
          {
            term: copy.fields.category,
            value: labelFor(copy.newsCategories, item.category),
            latin: false,
          },
          {
            term: copy.fields.published,
            value: formatTimestamp(locale, item.published_at),
            latin: false,
          },
        ]}
      />
      <ProseBlock
        heading={copy.fields.description}
        text={body === summary ? "" : body}
      />
    </DetailPage>
  );
}
