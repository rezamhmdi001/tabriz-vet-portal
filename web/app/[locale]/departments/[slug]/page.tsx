import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogList } from "@/components/catalog-list";
import { FactList, ProseBlock } from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import { hasLocaleName, roleSubtitle, selectPrimaryRole } from "@/lib/content-rules";
import {
  catalogFailure,
  getOrganizationUnitBySlug,
  listAcademicProfiles,
  listPeople,
  listRoleAssignments,
} from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildCollegeJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  breadcrumbItem,
  contentMetadata,
  localeText,
  namedCard,
  PUBLIC_SLUG,
  publishedPath,
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
  const result = await getOrganizationUnitBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.name_fa, result.item.name_en)
      : "";
  const englishAvailable =
    result.status === "available" && hasLocaleName(result.item, "en");
  return contentMetadata(
    locale,
    result.status,
    title,
    `/${locale}/departments/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getOrganizationUnitBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/departments/${slug}`} />;
  }

  const [peopleResult, profilesResult, rolesResult] = await Promise.all([
    listPeople(locale),
    listAcademicProfiles(),
    listRoleAssignments(),
  ]);
  const failure = catalogFailure([peopleResult, profilesResult, rolesResult]);
  if (failure || !peopleResult.ok || !profilesResult.ok || !rolesResult.ok) {
    return (
      <CmsUnavailablePage
        message={unavailableCopy(locale, failure ?? "unreachable")}
      />
    );
  }

  const item = result.item;
  const copy = getShellCopy(locale);
  const memberIds = new Set<string>();
  for (const profile of profilesResult.items) {
    if (profile.primary_department_id === item.id && profile.person_id) {
      memberIds.add(profile.person_id);
    }
  }
  for (const role of rolesResult.items) {
    if (role.unit_id === item.id && role.person_id) {
      memberIds.add(role.person_id);
    }
  }
  const members = peopleResult.items
    .filter((person) => memberIds.has(person.id))
    .flatMap((person) => {
      const primary = selectPrimaryRole(
        rolesResult.items.filter((role) => role.person_id === person.id),
      );
      const card = namedCard(
        person.id,
        publishedPath(locale, "people", person.slug),
        localeText(locale, person.full_name_fa, person.full_name_en),
        primary ? roleSubtitle(locale, primary, copy.roleCategories) : "",
      );
      return card ? [card] : [];
    })
    .sort((a, b) => a.label.localeCompare(b.label, locale === "fa" ? "fa" : "en"));

  const name = localeText(locale, item.name_fa, item.name_en);
  const heading = name || slug;
  const intro = localeText(locale, item.intro_fa, item.intro_en);
  const home = `/${locale}`;
  const path = `${home}/departments/${slug}`;
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
    ...(name
      ? [
          {
            id: "college",
            json: serializeJsonLd(
              buildCollegeJsonLd(intro ? { name, description: intro } : { name }),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.departments}
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
            term: copy.fields.phone,
            value: item.phone?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.email,
            value: item.email?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.location,
            value: localeText(locale, item.location_fa, item.location_en),
            latin: false,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.description} text={intro} />
      <CatalogList
        id="department-people"
        title={copy.catalog.people}
        titleHref={`/${locale}/people`}
        empty={copy.catalog.peopleEmpty}
        items={members}
        direction={getDirection(locale)}
        withHeading
      />
    </DetailPage>
  );
}
