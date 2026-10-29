import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { isRevalidatableTag } from "@/lib/content-rules";

/** Compare secrets without throwing on unequal lengths or leaking the expected value. */
function secretsMatch(provided: string, expected: string): boolean {
  const providedDigest = createHash("sha256").update(provided).digest();
  const expectedDigest = createHash("sha256").update(expected).digest();
  return timingSafeEqual(providedDigest, expectedDigest);
}

export async function POST(request: Request) {
  const expected = process.env.REVALIDATE_SECRET?.trim();
  if (!expected) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const provided = request.headers.get("x-revalidate-secret")?.trim();
  if (!provided || !secretsMatch(provided, expected)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const tag =
    body &&
    typeof body === "object" &&
    "tag" in body &&
    typeof body.tag === "string"
      ? body.tag
      : null;

  if (!tag || !isRevalidatableTag(tag)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  revalidateTag(tag, { expire: 0 });
  if (tag !== "directus") {
    revalidateTag("directus", { expire: 0 });
  }
  return NextResponse.json({ ok: true });
}
