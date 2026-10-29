import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageMast } from "@/components/page-mast";
import {
  searchSiteContent,
  type LocalizedName,
  type LocalizedTitle,
  type Person,
  type SearchOutcome,
} from "@/lib/directus";
import {
  formatSearchSummary,
  getShellCopy,
  isLocale,
  type Locale,
  type SearchCopy,
} from "@/lib/i18n";
import { localeText, publishedPath, sectionMetadata, type ContentSection } from "@/lib/view";

function firstQueryValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

function statusMessage(
  locale: Locale,
  copy: SearchCopy,
  outcome: SearchOutcome,
  count: number,
): string {
  switch (outcome.status) {
    case "empty-query":
      return copy.emptyQuery;
    case "too-short":
      return copy.tooShort;
    case "too-long":
      return copy.tooLong;
    case "unconfigured":
      return copy.unconfigured;
    case "unreachable":
      return copy.unavailable;
    case "ready":
      return count === 0 ? copy.noResults : formatSearchSummary(locale, count);
  }
}

function linkedHits<T extends { id: string; slug: string | null }>(
  locale: Locale,
  section: ContentSection,
  rows: readonly T[],
  labelOf: (item: T) => string,
): { id: string; label: string; href: string | null }[] {
  return rows.flatMap((item) => {
    const label = labelOf(item);
    if (!label) {
      return [];
    }
    return [{ id: item.id, label, href: publishedPath(locale, section, item.slug) }];
  });
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getShellCopy(locale);
  const query = firstQueryValue((await searchParams).q).trim();
  const path = query
    ? `/${locale}/search?q=${encodeURIComponent(query)}`
    : `/${locale}/search`;
  return {
    description: copy.search.intro,
    ...sectionMetadata(copy.search.title, path),
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw;
  const { q } = await searchParams;
  const outcome = await searchSiteContent(firstQueryValue(q), locale);
  const shell = getShellCopy(locale);
  const copy = shell.search;
  const { results } = outcome;
  const groups = [
    {
      id: "search-units",
      title: copy.groups.units,
      items: linkedHits(
        locale,
        "departments",
        results.organizationUnits,
        (item: LocalizedName) => localeText(locale, item.name_fa, item.name_en),
      ),
    },
    {
      id: "search-people",
      title: copy.groups.people,
      items: linkedHits(locale, "people", results.people, (item: Person) =>
        localeText(locale, item.full_name_fa, item.full_name_en),
      ),
    },
    {
      id: "search-programs",
      title: copy.groups.programs,
      items: linkedHits(
        locale,
        "programs",
        results.programs,
        (item: LocalizedTitle) => localeText(locale, item.title_fa, item.title_en),
      ),
    },
    {
      id: "search-news",
      title: copy.groups.news,
      items: linkedHits(
        locale,
        "news",
        results.newsArticles,
        (item: LocalizedTitle) => localeText(locale, item.title_fa, item.title_en),
      ),
    },
  ];
  const count = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={shell.title}
        title={copy.title}
        deck={copy.intro}
        breadcrumbLabel={shell.breadcrumb}
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-10 text-start">
        <form
          method="get"
          action={`/${locale}/search`}
          className="flex flex-col gap-4"
          role="search"
        >
          <label htmlFor="search-query" className="text-sm font-semibold">
            {copy.label}
          </label>
          <input
            id="search-query"
            name="q"
            type="search"
            defaultValue={outcome.query}
            className="min-h-12 w-full border border-border bg-card px-3 text-base text-start"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center self-start bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            {copy.submit}
          </button>
        </form>
        <p aria-live="polite">{statusMessage(locale, copy, outcome, count)}</p>
        {outcome.status === "ready" && outcome.truncated ? <p>{copy.capped}</p> : null}
        {outcome.status === "ready"
          ? groups
              .filter((group) => group.items.length > 0)
              .map((group) => (
                <section
                  key={group.id}
                  aria-labelledby={group.id}
                  className="flex flex-col gap-3"
                >
                  <h2 id={group.id} className="text-2xl font-semibold">
                    {group.title}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))
          : null}
      </div>
    </main>
  );
}
