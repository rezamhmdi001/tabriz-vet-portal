"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import type { Locale } from "@/lib/i18n";
import { isCurrentPath, shellLinks } from "@/lib/shell-links";

export interface SiteHeaderCopy {
  title: string;
  primary: string;
  menuOpen: string;
  menuClose: string;
  home: string;
  people: string;
  news: string;
  events: string;
  search: string;
  language: string;
  switchToFa: string;
  switchToEn: string;
}

const itemClass =
  "inline-flex min-h-11 items-center px-3 text-sm font-semibold text-foreground";
const currentClass = "underline decoration-2 decoration-primary underline-offset-4";

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteHeaderCopy;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const items = shellLinks(locale, copy);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-11 min-w-11 items-center gap-3"
        >
          <Image
            src="/brand/iau-logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="size-10 object-contain"
          />
          <span className="max-w-32 truncate text-start text-sm font-semibold sm:max-w-xs md:max-w-none">
            {copy.title}
          </span>
        </Link>
        <div className="ms-auto flex items-center gap-1">
          <nav aria-label={copy.primary} className="hidden items-center md:flex">
            {items.map((item) => {
              const current = isCurrentPath(pathname, item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={current ? `${itemClass} ${currentClass}` : itemClass}
                  {...(current ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitch
            locale={locale}
            label={copy.language}
            switchToFa={copy.switchToFa}
            switchToEn={copy.switchToEn}
          />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span className="sr-only">{open ? copy.menuClose : copy.menuOpen}</span>
          </button>
        </div>
      </div>
      <nav
        id="site-menu"
        aria-label={copy.primary}
        className={open ? "border-t border-border px-4 py-3 md:hidden" : "hidden"}
      >
        <ul className="flex flex-col">
          {items.map((item) => {
            const current = isCurrentPath(pathname, item.href, item.exact);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={current ? `${itemClass} ${currentClass}` : itemClass}
                  {...(current ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
