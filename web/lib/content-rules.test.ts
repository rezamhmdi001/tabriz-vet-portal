import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  canonicalOrcid,
  hasLocaleName,
  hasLocalePersonName,
  hasLocaleTitle,
  isAssetId,
  isRevalidatableTag,
  selectPrimaryRole,
} from "./content-rules.ts";

describe("canonicalOrcid", () => {
  it("accepts a valid check digit and returns the canonical URL", () => {
    assert.equal(canonicalOrcid("0000-0002-1825-0097"), "https://orcid.org/0000-0002-1825-0097");
    assert.equal(
      canonicalOrcid("https://orcid.org/0000-0002-1694-233X"),
      "https://orcid.org/0000-0002-1694-233X",
    );
  });

  it("rejects a bad check digit and a non-ORCID URL", () => {
    assert.equal(canonicalOrcid("0000-0002-1825-0098"), null);
    assert.equal(canonicalOrcid("https://example.com/0000-0002-1825-0097"), null);
    assert.equal(canonicalOrcid(""), null);
  });
});

describe("isAssetId", () => {
  it("accepts a UUID and rejects everything else", () => {
    assert.equal(isAssetId("550e8400-e29b-41d4-a716-446655440000"), true);
    assert.equal(isAssetId("not-a-uuid"), false);
    assert.equal(isAssetId("550e8400-e29b-41d4-c716-446655440000"), false);
    assert.equal(isAssetId(""), false);
  });
});

describe("isRevalidatableTag", () => {
  it("allows the public cache tags and rejects collection names", () => {
    assert.equal(isRevalidatableTag("news"), true);
    assert.equal(isRevalidatableTag("organization-units"), true);
    assert.equal(isRevalidatableTag("people"), true);
    assert.equal(isRevalidatableTag("news_articles"), false);
    assert.equal(isRevalidatableTag("directus_files"), false);
  });
});

describe("locale names", () => {
  it("keeps Persian rows and drops an empty English name", () => {
    const row = { name_en: "  ", full_name_en: "", title_en: null };
    assert.equal(hasLocaleName(row, "fa"), true);
    assert.equal(hasLocaleName(row, "en"), false);
    assert.equal(hasLocalePersonName(row, "en"), false);
    assert.equal(hasLocaleTitle(row, "en"), false);
    assert.equal(hasLocaleTitle({ title_en: "Clinic hours" }, "en"), true);
  });
});

describe("selectPrimaryRole", () => {
  it("returns null when no published row is primary", () => {
    assert.equal(
      selectPrimaryRole([
        { id: "b", is_primary_role: false, sort_order: 0 },
        { id: "a", is_primary_role: null, sort_order: 1 },
      ]),
      null,
    );
  });

  it("chooses the lowest sort order, then the id", () => {
    const chosen = selectPrimaryRole([
      { id: "b", is_primary_role: true, sort_order: 2 },
      { id: "c", is_primary_role: false, sort_order: 0 },
      { id: "d", is_primary_role: true, sort_order: 2 },
      { id: "a", is_primary_role: true, sort_order: 2 },
    ]);
    assert.equal(chosen?.id, "a");

    const lower = selectPrimaryRole([
      { id: "b", is_primary_role: true, sort_order: 5 },
      { id: "a", is_primary_role: true, sort_order: 1 },
    ]);
    assert.equal(lower?.id, "a");
  });
});
