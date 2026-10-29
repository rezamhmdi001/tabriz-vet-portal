import Link from "next/link";
import { DirectionalArrow } from "@/components/directional-arrow";
import type { Direction } from "@/lib/i18n";
import type { CatalogItem } from "@/lib/view";

export function CatalogList({
  id,
  title,
  titleHref,
  empty,
  items,
  direction,
  withHeading,
}: {
  id: string;
  title: string;
  titleHref: string | null;
  empty: string;
  items: readonly CatalogItem[];
  direction: Direction;
  withHeading: boolean;
}) {
  const list =
    items.length === 0 ? (
      empty.trim() ? (
        <p className="text-muted-foreground">{empty}</p>
      ) : null
    ) : (
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="surface-card flex min-h-11 items-center justify-between gap-4 p-4 hover:border-primary"
            >
              <span className="flex min-w-0 flex-col gap-1 text-start">
                <span className="font-semibold">{item.label}</span>
                {item.detail ? (
                  <span className="text-sm text-muted-foreground">{item.detail}</span>
                ) : null}
              </span>
              <DirectionalArrow direction={direction} />
            </Link>
          </li>
        ))}
      </ul>
    );

  if (!withHeading) {
    return list;
  }

  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <h2 id={id} className="text-2xl font-semibold">
        {titleHref ? (
          <Link
            href={titleHref}
            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      {list}
    </section>
  );
}
