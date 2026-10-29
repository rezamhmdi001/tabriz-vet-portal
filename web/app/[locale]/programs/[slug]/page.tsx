import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentLink, FactList, ProseBlock } from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import { hasLocaleTitle } from "@/lib/content-rules";
import { getAssetUrl, getProgramBySlug } from "@/lib/directus";
import { getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  contentMetadata,
  labelFor,
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
  const result = await getProgramBySlug(slug, locale);
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
    `/${locale}/programs/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getProgramBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/programs/${slug}`} />;
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const title = localeText(locale, item.title_fa, item.title_en);
  const heading = title || slug;
  const courses = localeText(locale, item.courses_intro_fa, item.courses_intro_en);
  const admission = localeText(locale, item.admission_fa, item.admission_en);
  const home = `/${locale}`;
  const path = `${home}/programs/${slug}`;
  const description = courses || admission;
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
    ...(title
      ? [
          {
            id: "course",
            json: serializeJsonLd(
              buildCourseJsonLd(
                description ? { name: title, description } : { name: title },
              ),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.programs}
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
            term: copy.fields.degree,
            value: labelFor(copy.degrees, item.degree_level),
            latin: false,
          },
          {
            term: copy.fields.duration,
            value: localeText(locale, item.duration_fa, item.duration_en),
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.admission} text={admission} />
      <ProseBlock heading={copy.fields.courses} text={courses} />
      {item.curriculum_pdf && getAssetUrl(item.curriculum_pdf, "document") ? (
        <DocumentLink
          href={getAssetUrl(item.curriculum_pdf, "document") ?? ""}
          label={copy.fields.curriculum}
        />
      ) : null}
    </DetailPage>
  );
}
