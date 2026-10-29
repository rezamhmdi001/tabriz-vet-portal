import { CatalogList } from "@/components/catalog-list";
import { PageMast } from "@/components/page-mast";
import { TranslationUnavailable } from "@/components/translation-unavailable";
import type { Direction } from "@/lib/i18n";
import type { CatalogItem } from "@/lib/view";

export function IndexPage({
  label,
  title,
  deck,
  empty,
  items,
  direction,
  status,
  pager,
}: {
  label: string;
  title: string;
  deck: string;
  empty: string;
  items: readonly CatalogItem[];
  direction: Direction;
  status: string;
  pager?: React.ReactNode;
}) {
  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      <PageMast
        label={label}
        title={title}
        deck={deck}
        breadcrumbLabel=""
        crumbs={[]}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <CatalogList
          id="catalog"
          title={title}
          titleHref={null}
          empty={empty}
          items={items}
          direction={direction}
          withHeading={false}
        />
        {pager}
        <p className="text-sm text-muted-foreground">{status}</p>
      </div>
    </main>
  );
}

export function DetailPage({
  label,
  title,
  deck,
  breadcrumbLabel,
  crumbs,
  scripts,
  children,
}: {
  label: string;
  title: string;
  deck: string;
  breadcrumbLabel: string;
  crumbs: readonly { href: string; label: string }[];
  scripts: readonly { id: string; json: string }[];
  children: React.ReactNode;
}) {
  return (
    <main id="content" tabIndex={-1} className="flex flex-1 flex-col">
      {scripts.map((script) => (
        <script
          key={script.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script.json }}
        />
      ))}
      <PageMast
        label={label}
        title={title}
        deck={deck}
        breadcrumbLabel={breadcrumbLabel}
        crumbs={crumbs}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        {children}
      </div>
    </main>
  );
}

export function UnavailablePage({ faHref }: { faHref: string }) {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16"
    >
      <TranslationUnavailable faHref={faHref} />
    </main>
  );
}

export function CmsUnavailablePage({ message }: { message: string }) {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16"
    >
      <p>{message}</p>
    </main>
  );
}
