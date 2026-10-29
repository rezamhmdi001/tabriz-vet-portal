import type { Metadata } from "next";
import { IndexPage } from "@/components/page-frame";
import {
  catalogFailure,
  getDirectusStatus,
  listEvents,
  type EventItem,
} from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  formatTimestamp,
  joinParts,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  sectionMetadata,
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
  return sectionMetadata(getShellCopy(locale).catalog.events, `/${locale}/events`);
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

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await requireLocale(params);
  const copy = getShellCopy(locale);
  const [events, status] = await Promise.all([
    listEvents(locale),
    getDirectusStatus(),
  ]);
  const failure = catalogFailure([events]);
  const items = events.ok
    ? [...events.items].sort(bySoonest).flatMap((event) => {
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
    : [];

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.events}
      deck={copy.blurb}
      empty={failure ? "" : copy.catalog.eventsEmpty}
      items={items}
      direction={getDirection(locale)}
      status={failure ? unavailableCopy(locale, failure) : cmsStatusLabel(locale, status)}
    />
  );
}
