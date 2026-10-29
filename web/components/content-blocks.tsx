export function FactList({
  items,
}: {
  items: readonly { term: string; value: string; latin: boolean }[];
}) {
  const visible = items.filter((item) => item.value.trim().length > 0);
  if (visible.length === 0) {
    return null;
  }

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {visible.map((item) => (
        <div key={item.term} className="surface-card flex flex-col gap-1 p-4">
          <dt className="text-sm font-semibold">{item.term}</dt>
          <dd>
            {item.latin ? (
              <bdi dir="ltr" className="latin-digits">
                {item.value}
              </bdi>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProseBlock({ heading, text }: { heading: string; text: string }) {
  const body = text.trim();
  if (!body) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="folio-prose whitespace-pre-wrap">{body}</p>
    </section>
  );
}

export function BulletList({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <ul className="flex list-disc flex-col gap-2 ps-5">
        {items.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function TextLinkList({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; label: string }[];
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
            >
              <bdi dir="ltr" className="latin-digits">
                {link.label}
              </bdi>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DocumentLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline"
    >
      {label}
    </a>
  );
}

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- the asset route already serves a sized WebP preset
    <img
      src={src}
      alt={alt}
      width={800}
      height={450}
      className="h-auto w-full max-w-3xl object-cover"
    />
  );
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- the asset route already serves a sized WebP preset
    <img
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="size-40 object-cover"
    />
  );
}
