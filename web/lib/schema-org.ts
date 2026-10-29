import "server-only";
import { personSameAs } from "@/lib/content-rules";

export { personSameAs };

/**
 * Schema.org JSON-LD builders. Callers pass already-loaded copy.
 * These functions do not read Directus or invent address, phone, or ranking data.
 */

export interface CollegeJsonLdInput {
  name: string;
  description?: string;
}

export interface CollegeJsonLd {
  "@context": "https://schema.org";
  "@type": ["CollegeOrUniversity", "EducationalOrganization"];
  name: string;
  description?: string;
}

export interface PersonJsonLdInput {
  name: string;
  jobTitle?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  affiliationName?: string | null | undefined;
  orcidId?: string | null | undefined;
  googleScholarUrl?: string | null | undefined;
  scopusAuthorId?: string | null | undefined;
  researchGateUrl?: string | null | undefined;
}

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle?: string;
  email?: string;
  image?: string;
  affiliation?: {
    "@type": "CollegeOrUniversity";
    name: string;
  };
  sameAs?: string[];
}

export interface CourseJsonLdInput {
  name: string;
  description?: string | null;
}

export interface CourseJsonLd {
  "@context": "https://schema.org";
  "@type": ["Course", "EducationalOccupationalProgram"];
  name: string;
  description?: string;
}

export interface BreadcrumbItemInput {
  name: string;
  url?: string | null;
}

export interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item?: string;
}

export interface BreadcrumbJsonLd {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

export interface EventJsonLdInput {
  name: string;
  startDate: string;
  endDate?: string | null;
  locationName?: string | null;
  description?: string | null;
}

export interface EventJsonLd {
  "@context": "https://schema.org";
  "@type": "Event";
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: {
    "@type": "Place";
    name: string;
  };
}

export interface FaqItemInput {
  question: string;
  answer: string;
}

export interface FaqJsonLd {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export type JsonLdNode =
  | CollegeJsonLd
  | PersonJsonLd
  | CourseJsonLd
  | BreadcrumbJsonLd
  | EventJsonLd
  | FaqJsonLd;

function absoluteHttpUrl(value: string | null | undefined): string | null {
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
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return null;
  }
  if (url.username || url.password) {
    return null;
  }
  return url.toString();
}

function publicEmail(value: string | null | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+$/.test(trimmed)) {
    return null;
  }
  return trimmed;
}

export function buildCollegeJsonLd(input: CollegeJsonLdInput): CollegeJsonLd {
  const description = input.description?.trim();
  return {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    name: input.name,
    ...(description ? { description } : {}),
  };
}

export function buildPersonJsonLd(input: PersonJsonLdInput): PersonJsonLd {
  const jobTitle = input.jobTitle?.trim();
  const email = publicEmail(input.email);
  const image = absoluteHttpUrl(input.image);
  const affiliationName = input.affiliationName?.trim();
  const sameAs = personSameAs(
    input.orcidId,
    input.googleScholarUrl,
    input.scopusAuthorId,
    input.researchGateUrl,
  );
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    ...(jobTitle ? { jobTitle } : {}),
    ...(email ? { email } : {}),
    ...(image ? { image } : {}),
    ...(affiliationName
      ? { affiliation: { "@type": "CollegeOrUniversity" as const, name: affiliationName } }
      : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildCourseJsonLd(input: CourseJsonLdInput): CourseJsonLd {
  const description = input.description?.trim();
  return {
    "@context": "https://schema.org",
    "@type": ["Course", "EducationalOccupationalProgram"],
    name: input.name,
    ...(description ? { description } : {}),
  };
}

export function buildBreadcrumbJsonLd(
  items: readonly BreadcrumbItemInput[],
): BreadcrumbJsonLd {
  const named = items.flatMap((item) => {
    const name = item.name.trim();
    if (!name) {
      return [];
    }
    const url = item.url?.trim();
    return [{ name, ...(url ? { url } : {}) }];
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: named.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function buildEventJsonLd(input: EventJsonLdInput): EventJsonLd {
  const endDate = input.endDate?.trim();
  const description = input.description?.trim();
  const locationName = input.locationName?.trim();
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    startDate: input.startDate,
    ...(endDate ? { endDate } : {}),
    ...(description ? { description } : {}),
    ...(locationName
      ? { location: { "@type": "Place" as const, name: locationName } }
      : {}),
  };
}

export function buildFaqJsonLd(items: readonly FaqItemInput[]): FaqJsonLd {
  const mainEntity = items.flatMap((item) => {
    const question = item.question.trim();
    const answer = item.answer.trim();
    if (!question || !answer) {
      return [];
    }
    return [
      {
        "@type": "Question" as const,
        name: question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: answer,
        },
      },
    ];
  });
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

/** JSON for a script tag. Escapes `<` so a value cannot close the script element. */
export function serializeJsonLd(data: JsonLdNode): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
