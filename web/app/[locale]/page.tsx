import type { Metadata } from "next";
import { CatalogList } from "@/components/catalog-list";
import { PageMast } from "@/components/page-mast";
import {
  catalogFailure,
  getDirectusStatus,
  listEvents,
  listNewsArticles,
  listOrganizationUnits,
  type EventItem,
  type NewsArticle,
} from "@/lib/directus";
import { facultyLegalName, getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import { buildCollegeJsonLd, serializeJsonLd } from "@/lib/schema-org";
import {
  alternatesFor,
  cmsStatusLabel,
  formatTimestamp,
  joinParts,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  timestamp,
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
  return alternatesFor(`/${locale}`, true);
}

function byNewest(a: NewsArticle, b: NewsArticle): number {
  const aTime = timestamp(a.published_at);
  const bTime = timestamp(b.published_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return bTime - aTime;
}

function bySoonest(a: EventItem, b: EventItem): number {
  const aTime = timestamp(a.start_at);
  const bTime = timestamp(b.start_at);
  if (aTime === null && bTime === null) {
    return 0;
  }
  if (aTime === null) {
    return 1;
  }
  if (bTime === null) {
    return -1;
  }
  return aTime - bTime;
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const direction = getDirection(locale);
  const [units, news, events, status] = await Promise.all([
    listOrganizationUnits(locale),
    listNewsArticles(locale),
    listEvents(locale),
    getDirectusStatus(),
  ]);
  const failure = catalogFailure([units, news, events]);

  const unitItems = units.ok
    ? [...units.items]
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
        .flatMap((unit) => {
          const card = namedCard(
            unit.id,
            publishedPath(locale, "departments", unit.slug),
            localeText(locale, unit.name_fa, unit.name_en),
            localeText(locale, unit.location_fa, unit.location_en),
          );
          return card ? [card] : [];
        })
        .slice(0, 6)
    : [];

  const newsItems = news.ok
    ? [...news.items]
        .sort(byNewest)
        .flatMap((article) => {
          const card = namedCard(
            article.id,
            publishedPath(locale, "news", article.slug),
            localeText(locale, article.title_fa, article.title_en),
            formatTimestamp(locale, article.published_at),
          );
          return card ? [card] : [];
        })
        .slice(0, 6)
    : [];

  const eventItems = events.ok
    ? [...events.items]
        .sort(bySoonest)
        .flatMap((event) => {
          const card = namedCard(
            event.id,
            publishedPath(locale, "events", event.slug),
            localeText(locale, event.title_fa, event.title_en),
            joinParts([
              formatTimestamp(locale, event.start_at),
              localeText(locale, event.location_fa, event.location_en),
            ]),
          );
          return card ? [card] : [];
        })
        .slice(0, 6)
    : [];

  const collegeJsonLd = serializeJsonLd(
    buildCollegeJsonLd({ name: facultyLegalName(locale), description: copy.blurb }),
  );

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collegeJsonLd }}
      />
      <PageMast
        label={copy.homeKicker}
        title={copy.title}
        deck={copy.blurb}
        breadcrumbLabel={copy.breadcrumb}
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10">
        <CatalogList
          id="home-units"
          title={copy.catalog.units}
          titleHref={null}
          empty={units.ok ? copy.catalog.unitsEmpty : ""}
          items={unitItems}
          direction={direction}
          withHeading
        />
        <CatalogList
          id="home-news"
          title={copy.catalog.news}
          titleHref={`/${locale}/news`}
          empty={news.ok ? copy.catalog.newsEmpty : ""}
          items={newsItems}
          direction={direction}
          withHeading
        />
        <CatalogList
          id="home-events"
          title={copy.catalog.events}
          titleHref={`/${locale}/events`}
          empty={events.ok ? copy.catalog.eventsEmpty : ""}
          items={eventItems}
          direction={direction}
          withHeading
        />
        <p className="text-sm text-muted-foreground">
          {failure ? unavailableCopy(locale, failure) : cmsStatusLabel(locale, status)}
        </p>
      </div>
    </main>
  );
}
