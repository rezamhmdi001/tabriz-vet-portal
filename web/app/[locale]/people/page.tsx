import type { Metadata } from "next";
import { IndexPage } from "@/components/page-frame";
import { roleSubtitle, selectPrimaryRole } from "@/lib/content-rules";
import {
  catalogFailure,
  getDirectusStatus,
  listPeople,
  listRoleAssignments,
} from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  sectionMetadata,
  unavailableCopy,
} from "@/lib/view";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return sectionMetadata(getShellCopy(locale).catalog.people, `/${locale}/people`);
}

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const [peopleResult, rolesResult, status] = await Promise.all([
    listPeople(locale),
    listRoleAssignments(),
    getDirectusStatus(),
  ]);
  const failure = catalogFailure([peopleResult, rolesResult]);
  const people = peopleResult.ok ? peopleResult.items : [];
  const roles = rolesResult.ok ? rolesResult.items : [];
  const items = failure
    ? []
    : people
    .flatMap((person) => {
      const primary = selectPrimaryRole(
        roles.filter((role) => role.person_id === person.id),
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

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.people}
      deck={copy.blurb}
      empty={failure ? "" : copy.catalog.peopleEmpty}
      items={items}
      direction={getDirection(locale)}
      status={
        failure
          ? unavailableCopy(locale, failure)
          : cmsStatusLabel(locale, status)
      }
    />
  );
}
