import Link from "next/link";

export function PageMast({
  label,
  title,
  deck,
  breadcrumbLabel,
  crumbs,
}: {
  label: string;
  title: string;
  deck: string;
  breadcrumbLabel: string;
  crumbs: readonly { href: string; label: string }[];
}) {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 pb-12 pt-10 md:pb-16 md:pt-14">
        {crumbs.length > 0 ? (
          <nav aria-label={breadcrumbLabel}>
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={`${crumb.href}-${crumb.label}`} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-muted-foreground">
                        /
                      </span>
                    ) : null}
                    {last ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}
        <p className="folio-label">
          <span className="folio-rule" aria-hidden="true" />
          {label}
        </p>
        <h1 className="folio-title max-w-4xl text-balance">{title}</h1>
        {deck.trim() ? (
          <p className="folio-prose text-muted-foreground">{deck}</p>
        ) : null}
      </div>
    </header>
  );
}
