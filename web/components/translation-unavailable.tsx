import Link from "next/link";
import type { Metadata } from "next";
import { getShellCopy } from "@/lib/i18n";

const controlClassName =
  "inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline";

/** Pages that render TranslationUnavailable must spread this into their metadata. */
export function translationUnavailableMetadata(): Metadata {
  return {
    robots: { index: false, follow: true },
  };
}

export function TranslationUnavailable({ faHref }: { faHref: string }) {
  const copy = getShellCopy("en").translationUnavailable;

  return (
    <section
      aria-labelledby="translation-unavailable-title"
      className="flex flex-col gap-4 text-start"
    >
      <h1
        id="translation-unavailable-title"
        className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl"
      >
        {copy.title}
      </h1>
      <p className="max-w-xl text-lg leading-8 text-muted-foreground">{copy.body}</p>
      <nav aria-label={copy.title} className="flex flex-wrap gap-4">
        <Link href={faHref} hrefLang="fa" className={controlClassName}>
          {copy.viewInPersian}
        </Link>
        <Link href="/en" hrefLang="en" className={controlClassName}>
          {copy.englishHome}
        </Link>
      </nav>
    </section>
  );
}
