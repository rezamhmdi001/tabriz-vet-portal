"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageMast } from "@/components/page-mast";
import { getShellCopy, type Locale } from "@/lib/i18n";

export function NotFoundMessage() {
  const pathname = usePathname() ?? "/fa";
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fa";
  const copy = getShellCopy(locale);

  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={copy.notFound.label}
        title={copy.notFound.title}
        deck={copy.notFound.body}
        breadcrumbLabel=""
        crumbs={[]}
      />
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <Link
          href={`/${locale}`}
          className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
        >
          {copy.notFound.home}
        </Link>
      </div>
    </main>
  );
}
