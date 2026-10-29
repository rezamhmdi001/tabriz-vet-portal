import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDirection, getShellCopy, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getShellCopy(locale);
  return {
    title: {
      default: copy.title,
      template: `%s — ${copy.title}`,
    },
    description: copy.blurb,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getShellCopy(locale);

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body
        className={
          locale === "fa"
            ? "fa-digits flex min-h-full flex-col antialiased"
            : "flex min-h-full flex-col antialiased"
        }
      >
        <a href="#content" className="skip-link">
          {copy.skipToContent}
        </a>
        <SiteHeader
          locale={locale}
          copy={{
            title: copy.title,
            primary: copy.nav.primary,
            menuOpen: copy.nav.menuOpen,
            menuClose: copy.nav.menuClose,
            home: copy.nav.home,
            people: copy.nav.people,
            news: copy.nav.news,
            events: copy.nav.events,
            search: copy.nav.search,
            language: copy.nav.language,
            switchToFa: copy.switchToFa,
            switchToEn: copy.switchToEn,
          }}
        />
        {children}
        <SiteFooter
          locale={locale}
          copy={{
            title: copy.title,
            blurb: copy.blurb,
            primary: copy.nav.primary,
            home: copy.nav.home,
            people: copy.nav.people,
            news: copy.nav.news,
            events: copy.nav.events,
            search: copy.nav.search,
          }}
        />
      </body>
    </html>
  );
}
