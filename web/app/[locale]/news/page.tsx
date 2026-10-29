import type { Metadata } from "next";
import Link from "next/link";
import { IndexPage } from "@/components/page-frame";
import { NEWS_PAGE_SIZE, listNewsPage } from "@/lib/directus";
import { getDirection, getShellCopy, isLocale } from "@/lib/i18n";
import {
  cmsStatusLabel,
  formatTimestamp,
  localeText,
  namedCard,
  publishedPath,
  requireLocale,
  sectionMetadata,
  unavailableCopy,
} from "@/lib/view";

export const revalidate = 3600;

function pageNumber(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw || !/^[1-9]\d*$/.test(raw)) {
    return 1;
  }
  const page = Number(raw);
  return Number.isSafeInteger(page) ? page : 1;
}

function pageHref(locale: string, page: number): string {
  const path = `/${locale}/news`;
  return page <= 1 ? path : `${path}?page=${page}`;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const page = pageNumber((await searchParams).page);
  const copy = getShellCopy(locale);
  return sectionMetadata(copy.catalog.news, pageHref(locale, page));
}

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const locale = await requireLocale(params);
  const page = pageNumber((await searchParams).page);
  const copy = getShellCopy(locale);
  const listed = await listNewsPage(locale, page);
  const items = listed.ok
    ? listed.data.items.flatMap((article) => {
        const card = namedCard(
          article.id,
          publishedPath(locale, "news", article.slug),
          localeText(locale, article.title_fa, article.title_en),
          formatTimestamp(locale, article.published_at),
        );
        return card ? [card] : [];
      })
    : [];
  const total = listed.ok ? listed.data.total : 0;
  const showPrevious = listed.ok && page > 1;
  const showNext = listed.ok && page * NEWS_PAGE_SIZE < total;
  const linkClass =
    "inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline";

  return (
    <IndexPage
      label={copy.title}
      title={copy.catalog.news}
      deck={copy.blurb}
      empty={listed.ok && page === 1 ? copy.catalog.newsEmpty : ""}
      items={items}
      direction={getDirection(locale)}
      status={
        listed.ok
          ? cmsStatusLabel(locale, { ok: true, detail: "connected" })
          : unavailableCopy(locale, listed.detail)
      }
      pager={
        showPrevious || showNext ? (
          <nav aria-label={copy.pager.label} className="flex flex-wrap gap-4">
            {showPrevious ? (
              <Link href={pageHref(locale, page - 1)} className={linkClass}>
                {copy.pager.previous}
              </Link>
            ) : null}
            {showNext ? (
              <Link href={pageHref(locale, page + 1)} className={linkClass}>
                {copy.pager.next}
              </Link>
            ) : null}
          </nav>
        ) : null
      }
    />
  );
}
