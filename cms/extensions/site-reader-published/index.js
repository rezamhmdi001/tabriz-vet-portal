const STATUS_COLLECTIONS = new Set([
  "organization_units",
  "people",
  "role_assignments",
  "programs",
  "news_articles",
  "events",
  "service_items",
  "pages",
]);

/**
 * Directus 12 Core rejects item filters on policies. This hook applies the
 * published-only rule for the Site Reader role when a query is built.
 */
export default ({ filter }, { database }) => {
  let readerRoleId;

  async function siteReaderRoleId() {
    if (readerRoleId) {
      return readerRoleId;
    }
    const row = await database("directus_roles").select("id").where({ name: "Site Reader" }).first();
    readerRoleId = row?.id ?? null;
    return readerRoleId;
  }

  filter("items.query", async (query, meta, context) => {
    const accountability = context?.accountability ?? meta?.accountability;
    if (!accountability || accountability.admin) {
      return query;
    }
    const roleId = await siteReaderRoleId();
    if (!roleId || accountability.role !== roleId) {
      return query;
    }

    let rule = null;
    if (meta.collection === "role_assignments") {
      rule = {
        _and: [
          { status: { _eq: "published" } },
          { person_id: { status: { _eq: "published" } } },
          { unit_id: { status: { _eq: "published" } } },
        ],
      };
    } else if (STATUS_COLLECTIONS.has(meta.collection)) {
      rule = { status: { _eq: "published" } };
    } else if (meta.collection === "academic_profiles") {
      rule = { person_id: { status: { _eq: "published" } } };
    }
    if (!rule) {
      return query;
    }

    return {
      ...query,
      filter: query.filter ? { _and: [query.filter, rule] } : rule,
    };
  });
};
