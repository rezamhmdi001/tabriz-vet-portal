import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactList, ProseBlock } from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import { hasLocaleTitle } from "@/lib/content-rules";
import { getServiceItemBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import { buildBreadcrumbJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  breadcrumbItem,
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
  const result = await getServiceItemBySlug(slug, locale);
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
    `/${locale}/services/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getServiceItemBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/services/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const description = localeText(locale, item.description_fa, item.description_en);
  const visit = localeText(
    locale,
    item.visit_conditions_fa,
    item.visit_conditions_en,
  );
  const home = `/${locale}`;
  const path = `${home}/services/${slug}`;
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
  ];

  return (
    <DetailPage
      label={copy.catalog.services}
      title={heading}
      deck=""
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      <FactList
        items={[
          {
            term: copy.fields.hours,
            value: localeText(locale, item.working_hours_fa, item.working_hours_en),
            latin: false,
          },
          {
            term: copy.fields.phone,
            value: item.contact_phone?.trim() ?? "",
            latin: true,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.visitConditions} text={visit} />
      <ProseBlock heading={copy.fields.description} text={description} />
    </DetailPage>
  );
}
