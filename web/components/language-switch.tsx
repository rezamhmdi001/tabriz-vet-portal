"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Locale } from "@/lib/i18n";

function languageHrefs(pathname: string, query: string): { faHref: string; enHref: string } {
  const rest = pathname.replace(/^\/(fa|en)(?=\/|$)/, "");
  const suffix = query ? `?${query}` : "";
  return { faHref: `/fa${rest}${suffix}`, enHref: `/en${rest}${suffix}` };
}

function LanguageLinks({
  locale,
  label,
  switchToFa,
  switchToEn,
  faHref,
  enHref,
}: {
  locale: Locale;
  label: string;
  switchToFa: string;
  switchToEn: string;
  faHref: string;
  enHref: string;
}) {
  const linkClass = "inline-flex min-h-11 items-center px-2 text-sm font-semibold";

  return (
    <nav aria-label={label} className="flex items-center">
      <Link
        href={faHref}
        hrefLang="fa"
        lang="fa"
        className={linkClass}
        {...(locale === "fa" ? { "aria-current": "true" as const } : {})}
      >
        {switchToFa}
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        className={linkClass}
        {...(locale === "en" ? { "aria-current": "true" as const } : {})}
      >
        {switchToEn}
      </Link>
    </nav>
  );
}

function LanguageSwitchWithQuery({
  locale,
  label,
  switchToFa,
  switchToEn,
}: {
  locale: Locale;
  label: string;
  switchToFa: string;
  switchToEn: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const params = useSearchParams();
  const hrefs = languageHrefs(pathname, params.toString());
  return (
    <LanguageLinks
      locale={locale}
      label={label}
      switchToFa={switchToFa}
      switchToEn={switchToEn}
      faHref={hrefs.faHref}
      enHref={hrefs.enHref}
    />
  );
}

export function LanguageSwitch({
  locale,
  label,
  switchToFa,
  switchToEn,
}: {
  locale: Locale;
  label: string;
  switchToFa: string;
  switchToEn: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const hrefs = languageHrefs(pathname, "");

  return (
    <Suspense
      fallback={
        <LanguageLinks
          locale={locale}
          label={label}
          switchToFa={switchToFa}
          switchToEn={switchToEn}
          faHref={hrefs.faHref}
          enHref={hrefs.enHref}
        />
      }
    >
      <LanguageSwitchWithQuery
        locale={locale}
        label={label}
        switchToFa={switchToFa}
        switchToEn={switchToEn}
      />
    </Suspense>
  );
}
