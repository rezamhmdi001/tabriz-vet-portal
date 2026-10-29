import type { Locale } from "@/lib/i18n";

export interface ShellLink {
  href: string;
  label: string;
  exact: boolean;
}

export function shellLinks(
  locale: Locale,
  labels: {
    home: string;
    people: string;
    news: string;
    events: string;
    search: string;
  },
): ShellLink[] {
  return [
    { href: `/${locale}`, label: labels.home, exact: true },
    { href: `/${locale}/people`, label: labels.people, exact: false },
    { href: `/${locale}/news`, label: labels.news, exact: false },
    { href: `/${locale}/events`, label: labels.events, exact: false },
    { href: `/${locale}/search`, label: labels.search, exact: false },
  ];
}

export function isCurrentPath(
  pathname: string,
  href: string,
  exact: boolean,
): boolean {
  if (exact) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
