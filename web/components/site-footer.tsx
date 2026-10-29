import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { shellLinks } from "@/lib/shell-links";

export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: {
    title: string;
    blurb: string;
    primary: string;
    home: string;
    people: string;
    news: string;
    events: string;
    search: string;
  };
}) {
  const items = shellLinks(locale, copy);

  return (
    <footer className="mt-auto border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{copy.title}</p>
          <p className="max-w-xl text-sm leading-6">{copy.blurb}</p>
        </div>
        <nav aria-label={copy.primary}>
          <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
