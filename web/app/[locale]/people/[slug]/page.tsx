import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AvatarImage,
  BulletList,
  DocumentLink,
  FactList,
  ProseBlock,
  TextLinkList,
} from "@/components/content-blocks";
import { CmsUnavailablePage, DetailPage, UnavailablePage } from "@/components/page-frame";
import {
  hasLocalePersonName,
  httpsUrl,
  parseCourses,
  parseEducation,
  parsePublications,
  parseStringList,
  personSameAs,
  roleSubtitle,
  selectPrimaryRole,
} from "@/lib/content-rules";
import {
  getAcademicProfile,
  getAssetUrl,
  getOrganizationUnitById,
  getPersonBySlug,
  listRoleAssignmentsForPerson,
} from "@/lib/directus";
import { facultyLegalName, getShellCopy, isLocale } from "@/lib/i18n";
import {
  buildBreadcrumbJsonLd,
  buildPersonJsonLd,
  serializeJsonLd,
} from "@/lib/schema-org";
import {
  absoluteUrl,
  breadcrumbItem,
  contentMetadata,
  joinParts,
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
  const result = await getPersonBySlug(slug, locale);
  const title =
    result.status === "available"
      ? localeText(locale, result.item.full_name_fa, result.item.full_name_en)
      : "";
  const englishAvailable =
    result.status === "available" && hasLocalePersonName(result.item, "en");
  return contentMetadata(
    locale,
    result.status,
    title,
    `/${locale}/people/${slug}`,
    englishAvailable,
    result.status === "unavailable" ? result.detail : undefined,
  );
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await requireLocaleSlug(params);
  const result = await getPersonBySlug(slug, locale);
  if (result.status === "unavailable") {
    return <CmsUnavailablePage message={unavailableCopy(locale, result.detail)} />;
  }
  if (result.status === "not-found") {
    notFound();
  }
  if (result.status === "translation-unavailable") {
    return <UnavailablePage faHref={`/fa/people/${slug}`} />;
  }

  const item = result.item;
  const [profileResult, rolesResult] = await Promise.all([
    getAcademicProfile(item.id),
    listRoleAssignmentsForPerson(item.id),
  ]);
  if (!profileResult.ok) {
    return <CmsUnavailablePage message={unavailableCopy(locale, profileResult.detail)} />;
  }
  if (!rolesResult.ok) {
    return <CmsUnavailablePage message={unavailableCopy(locale, rolesResult.detail)} />;
  }

  const copy = getShellCopy(locale);
  const profile = profileResult.data;
  let departmentName = "";
  if (profile?.primary_department_id) {
    const unit = await getOrganizationUnitById(profile.primary_department_id);
    if (!unit.ok) {
      return <CmsUnavailablePage message={unavailableCopy(locale, unit.detail)} />;
    }
    if (unit.data) {
      departmentName = localeText(locale, unit.data.name_fa, unit.data.name_en);
    }
  }

  const primary = selectPrimaryRole(rolesResult.items);
  const roleTitle = primary ? roleSubtitle(locale, primary, copy.roleCategories) : "";
  const rank = profile?.academic_rank ? labelFor(copy.ranks, profile.academic_rank) : "";
  const name = localeText(locale, item.full_name_fa, item.full_name_en);
  const heading = name || slug;
  const home = `/${locale}`;
  const path = `${home}/people/${slug}`;
  const avatar = item.avatar ? getAssetUrl(item.avatar, "avatar") : null;
  const image = avatar ? absoluteUrl(avatar) : null;
  const jobTitle = joinParts([rank, roleTitle]);
  const specialty = profile
    ? localeText(locale, profile.specialty_fa, profile.specialty_en)
    : "";
  const biography = profile ? localeText(locale, profile.bio_fa, profile.bio_en) : "";
  const interests = profile
    ? parseStringList(
        locale === "en" ? profile.research_interests_en : profile.research_interests_fa,
      )
    : [];
  const education = profile
    ? parseEducation(
        locale === "en" ? profile.education_history_en : profile.education_history_fa,
      ).map((entry) =>
        joinParts([
          entry.degree ?? "",
          entry.field ?? "",
          entry.institution ?? "",
          entry.country ?? "",
          entry.year ?? "",
        ]),
      )
    : [];
  const courses = profile
    ? parseCourses(
        locale === "en" ? profile.courses_taught_en : profile.courses_taught_fa,
      ).map((course) =>
        joinParts([
          course.title,
          course.delivery ? copy.delivery[course.delivery] : "",
        ]),
      )
    : [];
  const publications = profile
    ? parsePublications(profile.selected_publications).map((entry) =>
        joinParts([entry.title, entry.year ?? "", entry.venue ?? ""]),
      )
    : [];
  const sameAs = profile
    ? personSameAs(
        profile.orcid_id,
        profile.google_scholar_url,
        profile.scopus_author_id,
        profile.researchgate_url,
      )
    : [];
  const institutionalCv = profile ? httpsUrl(profile.institutional_cv_url) : null;
  const cvHref = profile?.cv_file ? getAssetUrl(profile.cv_file, "document") : null;
  const identifierLinks = [
    ...sameAs.map((href) => ({ href, label: href })),
    ...(institutionalCv ? [{ href: institutionalCv, label: institutionalCv }] : []),
  ];
  const scripts = [
    {
      id: "breadcrumb",
      json: serializeJsonLd(
        buildBreadcrumbJsonLd([
          breadcrumbItem(copy.nav.home, home),
          breadcrumbItem(copy.catalog.people, `${home}/people`),
          breadcrumbItem(heading, path),
        ]),
      ),
    },
    ...(name
      ? [
          {
            id: "person",
            json: serializeJsonLd(
              buildPersonJsonLd({
                name,
                jobTitle,
                email: item.public_email,
                image,
                affiliationName: facultyLegalName(locale),
                orcidId: profile?.orcid_id,
                googleScholarUrl: profile?.google_scholar_url,
                scopusAuthorId: profile?.scopus_author_id,
                researchGateUrl: profile?.researchgate_url,
              }),
            ),
          },
        ]
      : []),
  ];

  return (
    <DetailPage
      label={copy.catalog.people}
      title={heading}
      deck={roleTitle}
      breadcrumbLabel={copy.breadcrumb}
      crumbs={[
        { href: home, label: copy.nav.home },
        { href: `${home}/people`, label: copy.catalog.people },
        { href: path, label: heading },
      ]}
      scripts={scripts}
    >
      {avatar ? <AvatarImage src={avatar} alt={heading} /> : null}
      <FactList
        items={[
          { term: copy.fields.rank, value: rank, latin: false },
          { term: copy.fields.role, value: roleTitle, latin: false },
          {
            term: copy.fields.membership,
            value: profile?.faculty_membership_type
              ? labelFor(copy.memberships, profile.faculty_membership_type)
              : "",
            latin: false,
          },
          {
            term: copy.fields.degree,
            value: profile?.highest_degree
              ? labelFor(copy.degrees, profile.highest_degree)
              : "",
            latin: false,
          },
          { term: copy.fields.specialty, value: specialty, latin: false },
          { term: copy.fields.department, value: departmentName, latin: false },
          {
            term: copy.fields.email,
            value: item.public_email?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.phone,
            value: item.office_phone?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.location,
            value: localeText(locale, item.office_location_fa, item.office_location_en),
            latin: false,
          },
          {
            term: copy.fields.officeHours,
            value: localeText(locale, item.office_hours_fa, item.office_hours_en),
            latin: false,
          },
          {
            term: copy.fields.council,
            value: profile?.veterinary_council_number?.trim() ?? "",
            latin: true,
          },
          {
            term: copy.fields.researcherId,
            value: profile?.wos_researcher_id?.trim() ?? "",
            latin: true,
          },
        ]}
      />
      <ProseBlock heading={copy.fields.biography} text={biography} />
      <BulletList heading={copy.fields.research} items={interests} />
      <BulletList heading={copy.fields.education} items={education} />
      <BulletList heading={copy.fields.coursesTaught} items={courses} />
      <BulletList heading={copy.fields.publications} items={publications} />
      <TextLinkList heading={copy.fields.identifiers} links={identifierLinks} />
      {cvHref ? <DocumentLink href={cvHref} label={copy.fields.cv} /> : null}
    </DetailPage>
  );
}
