import { directusAssetPath, publishedAssetAccess, type AssetPreset } from "@/lib/directus";
import { NextResponse } from "next/server";

const PRESETS = new Set<AssetPreset>(["avatar", "card", "hero", "document"]);

function isPreset(value: string | null): value is AssetPreset {
  return value !== null && PRESETS.has(value as AssetPreset);
}

function mediaType(value: string | null): string {
  return value?.split(";")[0]?.trim().toLowerCase() ?? "";
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const presetValue = new URL(request.url).searchParams.get("preset");
  if (!isPreset(presetValue)) {
    return new NextResponse(null, { status: 404 });
  }

  const assetPath = directusAssetPath(id, presetValue);
  if (!assetPath) {
    return new NextResponse(null, { status: 404 });
  }

  const access = await publishedAssetAccess(id, presetValue);
  if (access === "unconfigured") {
    return new NextResponse(null, { status: 503 });
  }
  if (access === "unreachable") {
    return new NextResponse(null, { status: 502 });
  }
  if (access !== "allowed") {
    return new NextResponse(null, { status: 404 });
  }

  const base = process.env.DIRECTUS_URL?.trim().replace(/\/$/, "");
  const token = process.env.DIRECTUS_READ_TOKEN?.trim();
  if (!base || !token) {
    return new NextResponse(null, { status: 503 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${base}${assetPath}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new NextResponse(null, { status: upstream.status === 404 ? 404 : 502 });
  }

  const type = mediaType(upstream.headers.get("content-type"));
  const expected = presetValue === "document" ? "application/pdf" : "image/webp";
  if (type !== expected) {
    return new NextResponse(null, { status: 404 });
  }

  const headers = new Headers();
  headers.set("content-type", type);
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) {
    headers.set("content-length", contentLength);
  }
  headers.set("cache-control", "public, max-age=3600");
  return new NextResponse(upstream.body, { status: 200, headers });
}
