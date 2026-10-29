/**
 * Create the local faculty Directus schema, roles, and permissions.
 * Reads DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD from the root .env.
 * Never prints those values. Refuses any Directus URL that is not local.
 */
import { randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const STATUS_COLLECTIONS = [
  "organization_units",
  "people",
  "role_assignments",
  "programs",
  "news_articles",
  "events",
  "service_items",
  "pages",
];

const CONTENT_COLLECTIONS = [...STATUS_COLLECTIONS, "academic_profiles"];

const STATUS_CHOICES = [
  { text: "Draft", value: "draft" },
  { text: "Published", value: "published" },
  { text: "Archived", value: "archived" },
];

const UNIT_TYPE_CHOICES = [
  { text: "Faculty", value: "faculty" },
  { text: "Deputy", value: "deputy" },
  { text: "Department", value: "department" },
  { text: "Laboratory", value: "laboratory" },
  { text: "Clinic", value: "clinic" },
];

const PREFIX_FA_CHOICES = [
  { text: "دکتر", value: "دکتر" },
  { text: "مهندس", value: "مهندس" },
  { text: "استاد", value: "استاد" },
];

const PREFIX_EN_CHOICES = [
  { text: "Dr.", value: "Dr." },
  { text: "Prof.", value: "Prof." },
];

const RANK_CHOICES = [
  { text: "مربی (Instructor / Lecturer)", value: "instructor" },
  { text: "استادیار (Assistant Professor)", value: "assistant_professor" },
  { text: "دانشیار (Associate Professor)", value: "associate_professor" },
  { text: "استاد (Professor)", value: "full_professor" },
  { text: "استاد ممتاز (Distinguished Professor)", value: "distinguished_professor" },
  { text: "مدرس بالینی (Clinical Instructor)", value: "clinical_instructor" },
];

const MEMBERSHIP_CHOICES = [
  { text: "هیئت علمی تمام‌وقت (Full-Time Tenured / Tenure-Track)", value: "official_tenured" },
  { text: "هیئت علمی پیمانی (Full-Time Contractual)", value: "contractual" },
  { text: "استاد مدعو (Adjunct / Visiting)", value: "adjunct" },
  { text: "استاد پیشکسوت (Professor Emeritus)", value: "emeritus" },
];

const DEGREE_CHOICES = [
  { text: "دکترای حرفه‌ای دامپزشکی (D.V.M.)", value: "dvm" },
  { text: "دکترای تخصصی (Ph.D.)", value: "phd" },
  { text: "دکترای تخصصی بالینی (D.V.Sc.)", value: "dvsc" },
  { text: "کارشناسی ارشد (M.Sc.)", value: "msc" },
];

const PROGRAM_DEGREE_CHOICES = [
  { text: "دکترای عمومی دامپزشکی (DVM)", value: "dvm" },
  { text: "کارشناسی ارشد (M.Sc.)", value: "msc" },
  { text: "دکترای تخصصی (Ph.D.)", value: "phd" },
  { text: "دستیاری (D.V.Sc.)", value: "dvsc" },
];

const ROLE_CHOICES = [
  { text: "رئیس دانشکده", value: "faculty_dean" },
  { text: "معاون دانشکده", value: "vice_dean" },
  { text: "مدیر گروه آموزشی", value: "department_head" },
  { text: "رئیس بیمارستان آموزشی", value: "hospital_director" },
  { text: "سرپرست آزمایشگاه", value: "lab_supervisor" },
  { text: "عضو هیئت علمی", value: "faculty_member" },
  { text: "کارشناس", value: "staff" },
];

const NEWS_CATEGORY_CHOICES = [
  { text: "News", value: "news" },
  { text: "Announcement", value: "announcement" },
];

function readEnvFile(filePath) {
  const values = {};
  const text = readFileSync(filePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      continue;
    }
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function assertLocalUrl(raw) {
  const fallback = "http://cms.localhost";
  if (!raw) {
    return fallback;
  }
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("DIRECTUS_URL is not a valid URL. Refusing to continue.");
  }
  // Compose keeps Directus off the host network. The schema script runs on the
  // host and reaches it through the proxy admin host.
  if (url.hostname === "cms") {
    return fallback;
  }
  if (
    url.hostname !== "127.0.0.1" &&
    url.hostname !== "localhost" &&
    url.hostname !== "cms.localhost"
  ) {
    throw new Error("Refusing to change a non-local Directus instance.");
  }
  return raw.replace(/\/$/, "");
}

function uuidPrimaryKey() {
  return {
    field: "id",
    type: "uuid",
    schema: {
      is_primary_key: true,
      has_auto_increment: false,
      is_nullable: false,
    },
    meta: {
      hidden: true,
      readonly: true,
      interface: "input",
      special: ["uuid"],
    },
  };
}

function statusField() {
  return {
    field: "status",
    type: "string",
    schema: {
      is_nullable: false,
      default_value: "draft",
      max_length: 255,
    },
    meta: {
      interface: "select-dropdown",
      display: "labels",
      width: "full",
      options: { choices: STATUS_CHOICES },
    },
  };
}

function stringField(field, { unique = false, required = false } = {}) {
  return {
    field,
    type: "string",
    schema: {
      is_nullable: !required,
      is_unique: unique,
      max_length: 255,
    },
    meta: {
      interface: "input",
      width: "half",
      required,
    },
  };
}

function textField(field) {
  return {
    field,
    type: "text",
    schema: { is_nullable: true },
    meta: { interface: "input-multiline", width: "full" },
  };
}

function enumField(field, choices) {
  return {
    field,
    type: "string",
    schema: { is_nullable: true, max_length: 255 },
    meta: {
      interface: "select-dropdown",
      width: "half",
      options: { choices },
    },
  };
}

function integerField(field, defaultValue = null) {
  return {
    field,
    type: "integer",
    schema: {
      is_nullable: true,
      ...(defaultValue === null ? {} : { default_value: defaultValue }),
    },
    meta: { interface: "input", width: "half" },
  };
}

function booleanField(field, defaultValue = false) {
  return {
    field,
    type: "boolean",
    schema: { is_nullable: true, default_value: defaultValue },
    meta: {
      interface: "boolean",
      special: ["cast-boolean"],
      width: "half",
    },
  };
}

function jsonField(field) {
  return {
    field,
    type: "json",
    schema: { is_nullable: true },
    meta: {
      interface: "input-code",
      options: { language: "JSON" },
      width: "full",
    },
  };
}

function timestampField(field) {
  return {
    field,
    type: "timestamp",
    schema: { is_nullable: true },
    meta: { interface: "datetime", width: "half" },
  };
}

function collectionMeta(icon, template, { archived = true, sortField = null } = {}) {
  return {
    icon,
    display_template: template,
    accountability: "all",
    ...(archived
      ? {
          archive_field: "status",
          archive_value: "archived",
          unarchive_value: "draft",
          archive_app_filter: true,
        }
      : {}),
    ...(sortField ? { sort_field: sortField } : {}),
  };
}

const COLLECTIONS = [
  {
    collection: "organization_units",
    meta: collectionMeta("account_tree", "{{name_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      integerField("sort_order", 0),
      enumField("unit_type", UNIT_TYPE_CHOICES),
      stringField("phone"),
      stringField("email"),
      stringField("location_fa"),
      stringField("location_en"),
      stringField("name_fa"),
      stringField("name_en"),
      textField("intro_fa"),
      textField("intro_en"),
    ],
  },
  {
    collection: "people",
    meta: collectionMeta("person", "{{full_name_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("academic_title_prefix_fa", PREFIX_FA_CHOICES),
      enumField("academic_title_prefix_en", PREFIX_EN_CHOICES),
      stringField("first_name_fa", { required: true }),
      stringField("last_name_fa", { required: true }),
      stringField("full_name_fa", { required: true }),
      stringField("first_name_en"),
      stringField("last_name_en"),
      stringField("full_name_en"),
      stringField("public_email"),
      stringField("office_phone"),
      stringField("office_location_fa"),
      stringField("office_location_en"),
      stringField("office_hours_fa"),
      stringField("office_hours_en"),
    ],
  },
  {
    collection: "academic_profiles",
    meta: collectionMeta("school", "{{academic_rank}}", { archived: false }),
    fields: [
      enumField("academic_rank", RANK_CHOICES),
      enumField("faculty_membership_type", MEMBERSHIP_CHOICES),
      enumField("highest_degree", DEGREE_CHOICES),
      stringField("specialty_fa"),
      stringField("specialty_en"),
      textField("bio_fa"),
      textField("bio_en"),
      jsonField("research_interests_fa"),
      jsonField("research_interests_en"),
      jsonField("education_history_fa"),
      jsonField("education_history_en"),
      jsonField("courses_taught_fa"),
      jsonField("courses_taught_en"),
      jsonField("selected_publications"),
      stringField("veterinary_council_number"),
      stringField("orcid_id"),
      stringField("google_scholar_url"),
      stringField("scopus_author_id"),
      stringField("wos_researcher_id"),
      stringField("researchgate_url"),
      stringField("institutional_cv_url"),
    ],
  },
  {
    collection: "role_assignments",
    meta: collectionMeta("badge", "{{role_title_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      enumField("role_category", ROLE_CHOICES),
      stringField("role_title_fa"),
      stringField("role_title_en"),
      booleanField("is_primary_role", false),
      integerField("sort_order", 0),
    ],
  },
  {
    collection: "programs",
    meta: collectionMeta("menu_book", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("degree_level", PROGRAM_DEGREE_CHOICES),
      stringField("title_fa"),
      stringField("title_en"),
      textField("duration_fa"),
      textField("duration_en"),
      textField("admission_fa"),
      textField("admission_en"),
      textField("courses_intro_fa"),
      textField("courses_intro_en"),
    ],
  },
  {
    collection: "news_articles",
    meta: collectionMeta("newspaper", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      enumField("category", NEWS_CATEGORY_CHOICES),
      timestampField("published_at"),
      stringField("title_fa"),
      stringField("title_en"),
      textField("summary_fa"),
      textField("summary_en"),
      textField("body_fa"),
      textField("body_en"),
    ],
  },
  {
    collection: "events",
    meta: collectionMeta("event", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      timestampField("start_at"),
      timestampField("end_at"),
      stringField("title_fa"),
      stringField("title_en"),
      stringField("location_fa"),
      stringField("location_en"),
      textField("description_fa"),
      textField("description_en"),
    ],
  },
  {
    collection: "service_items",
    meta: collectionMeta("medical_services", "{{title_fa}}"),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      stringField("working_hours_fa"),
      stringField("working_hours_en"),
      stringField("contact_phone"),
      stringField("title_fa"),
      stringField("title_en"),
      textField("visit_conditions_fa"),
      textField("visit_conditions_en"),
      textField("description_fa"),
      textField("description_en"),
    ],
  },
  {
    collection: "pages",
    meta: collectionMeta("description", "{{title_fa}}", { sortField: "sort_order" }),
    fields: [
      statusField(),
      stringField("slug", { unique: true }),
      booleanField("show_in_nav", false),
      integerField("sort_order", 0),
      stringField("title_fa"),
      stringField("title_en"),
      stringField("seo_title_fa"),
      stringField("seo_title_en"),
      textField("seo_description_fa"),
      textField("seo_description_en"),
      jsonField("sections_fa"),
      jsonField("sections_en"),
    ],
  },
];

const RELATIONS = [
  ["organization_units", "parent_id", "organization_units", "SET NULL", false],
  ["people", "avatar", "directus_files", "SET NULL", false],
  ["academic_profiles", "person_id", "people", "RESTRICT", true],
  ["academic_profiles", "primary_department_id", "organization_units", "SET NULL", false],
  ["academic_profiles", "cv_file", "directus_files", "SET NULL", false],
  ["role_assignments", "person_id", "people", "SET NULL", false],
  ["role_assignments", "unit_id", "organization_units", "SET NULL", false],
  ["programs", "department_id", "organization_units", "SET NULL", false],
  ["programs", "curriculum_pdf", "directus_files", "SET NULL", false],
  ["news_articles", "cover_image", "directus_files", "SET NULL", false],
  ["news_articles", "unit_id", "organization_units", "SET NULL", false],
  ["events", "organizer_unit_id", "organization_units", "SET NULL", false],
  ["events", "cover_image", "directus_files", "SET NULL", false],
  ["service_items", "unit_id", "organization_units", "SET NULL", false],
];

function envToken(filePath) {
  if (!readFileSync(filePath, "utf8")) {
    return "";
  }
  return readEnvFile(filePath).DIRECTUS_READ_TOKEN?.trim() ?? "";
}

function writeToken(filePath, token) {
  const original = readFileSync(filePath, "utf8");
  const next = /^DIRECTUS_READ_TOKEN=.*$/m.test(original)
    ? original.replace(/^DIRECTUS_READ_TOKEN=.*$/m, `DIRECTUS_READ_TOKEN=${token}`)
    : `${original.replace(/\s*$/, "\n")}DIRECTUS_READ_TOKEN=${token}\n`;
  writeFileSync(filePath, next);
}

function readerTokenFor(env, envPath) {
  const current = envToken(envPath);
  const secret = env.DIRECTUS_SECRET?.trim();
  if (current && current !== secret) {
    return { token: current, replace: false };
  }
  return { token: randomBytes(32).toString("hex"), replace: true };
}

async function request(base, token, method, pathname, body) {
  const response = await fetch(`${base}${pathname}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }
  }
  return { status: response.status, payload };
}

function errorMessage(payload, status) {
  const messages = payload?.errors?.map((error) => error.message).filter(Boolean);
  const text = messages?.length ? messages.join("; ") : `HTTP ${status}`;
  return text.replace(/Value "[^"]*" for field "(token|password|secret)"/gi, 'Value for field "$1"');
}

async function send(base, token, method, pathname, body) {
  const result = await request(base, token, method, pathname, body);
  if (result.status < 200 || result.status >= 300) {
    throw new Error(`${method} ${pathname} failed: ${errorMessage(result.payload, result.status)}`);
  }
  return result.payload;
}

async function ensureCollection(base, token, definition, existing) {
  if (!existing.has(definition.collection)) {
    await send(base, token, "POST", "/collections", {
      collection: definition.collection,
      meta: definition.meta,
      schema: {},
      fields: [uuidPrimaryKey(), ...definition.fields],
    });
    existing.add(definition.collection);
    console.log(`created collection ${definition.collection}`);
    return;
  }
  const current = await send(base, token, "GET", `/fields/${definition.collection}`);
  const have = new Set((current?.data ?? []).map((field) => field.field));
  for (const field of definition.fields) {
    if (have.has(field.field)) {
      continue;
    }
    await send(base, token, "POST", `/fields/${definition.collection}`, field);
    console.log(`added field ${definition.collection}.${field.field}`);
  }
}

async function ensureRelation(base, token, relation, existing) {
  const [collection, field, related, onDelete, unique] = relation;
  const key = `${collection}.${field}`;
  const current = await send(base, token, "GET", `/fields/${collection}`);
  const have = new Set((current?.data ?? []).map((item) => item.field));
  if (!have.has(field)) {
    await send(base, token, "POST", `/fields/${collection}`, {
      field,
      type: "uuid",
      schema: {
        is_nullable: !unique,
        is_unique: unique,
      },
      meta: {
        interface: "select-dropdown-m2o",
        special: ["m2o"],
        width: "half",
        required: unique,
      },
    });
    console.log(`added field ${key}`);
  }
  if (!existing.has(key)) {
    await send(base, token, "POST", "/relations", {
      collection,
      field,
      related_collection: related,
      meta: {
        many_collection: collection,
        many_field: field,
        one_collection: related,
        one_field: null,
        one_deselect_action: "nullify",
      },
      schema: { on_delete: onDelete },
    });
    existing.add(key);
    console.log(`created relation ${key}`);
  }
  await send(base, token, "PATCH", `/fields/${collection}/${field}`, {
    meta: {
      interface: "select-dropdown-m2o",
      special: ["m2o"],
      width: "half",
      required: unique,
    },
    schema: {
      is_unique: unique,
      is_nullable: !unique,
    },
  });
}

async function ensureRole(base, token, name, description, icon) {
  const found = await send(
    base,
    token,
    "GET",
    `/roles?filter[name][_eq]=${encodeURIComponent(name)}&fields=id,name&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    return existing.id;
  }
  const created = await send(base, token, "POST", "/roles", { name, description, icon });
  console.log(`created role ${name}`);
  return created.data.id;
}

async function ensurePolicy(base, token, name, description, icon, appAccess) {
  const found = await send(
    base,
    token,
    "GET",
    `/policies?filter[name][_eq]=${encodeURIComponent(name)}&fields=id,name&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    return existing.id;
  }
  const created = await send(base, token, "POST", "/policies", {
    name,
    description,
    icon,
    admin_access: false,
    app_access: appAccess,
    enforce_tfa: false,
  });
  console.log(`created policy ${name}`);
  return created.data.id;
}

async function ensureAccess(base, token, roleId, policyId) {
  const found = await send(
    base,
    token,
    "GET",
    `/access?filter[role][_eq]=${roleId}&filter[policy][_eq]=${policyId}&fields=id&limit=1`,
  );
  if (found?.data?.length) {
    return;
  }
  await send(base, token, "POST", "/access", { role: roleId, policy: policyId });
}

async function ensurePermission(base, token, policyId, collection, action) {
  const found = await send(
    base,
    token,
    "GET",
    `/permissions?filter[policy][_eq]=${policyId}&filter[collection][_eq]=${collection}&filter[action][_eq]=${action}&fields=id&limit=-1`,
  );
  const rows = found?.data ?? [];
  for (const extra of rows.slice(1)) {
    await send(base, token, "DELETE", `/permissions/${extra.id}`);
  }
  if (rows.length > 0) {
    return;
  }
  // Directus 12 Core rejects item filters (custom permission rules). Full read is
  // stored here; cms/extensions/site-reader-published narrows Site Reader queries.
  await send(base, token, "POST", "/permissions", {
    policy: policyId,
    collection,
    action,
    permissions: null,
    fields: ["*"],
  });
}

async function ensureUser(base, token, { email, roleId, staticToken, firstName, lastName, updateToken }) {
  const found = await send(
    base,
    token,
    "GET",
    `/users?filter[email][_eq]=${encodeURIComponent(email)}&fields=id,token&limit=1`,
  );
  const existing = found?.data?.[0];
  if (!existing) {
    const created = await send(base, token, "POST", "/users", {
      email,
      password: randomBytes(24).toString("hex"),
      role: roleId,
      status: "active",
      token: staticToken,
      first_name: firstName,
      last_name: lastName,
    });
    console.log(`created user ${email}`);
    return created.data.id;
  }
  if (updateToken) {
    await send(base, token, "PATCH", `/users/${existing.id}`, { token: staticToken, role: roleId });
    console.log(`updated token for ${email}`);
  }
  return existing.id;
}

async function deleteUserByEmail(base, token, email) {
  const found = await send(
    base,
    token,
    "GET",
    `/users?filter[email][_eq]=${encodeURIComponent(email)}&fields=id&limit=1`,
  );
  const existing = found?.data?.[0];
  if (existing) {
    await send(base, token, "DELETE", `/users/${existing.id}`);
  }
}

async function cleanupProbes(base, token) {
  const assignments = await send(
    base,
    token,
    "GET",
    "/items/role_assignments?fields=id,person_id.slug,unit_id.slug&limit=-1",
  );
  for (const assignment of assignments?.data ?? []) {
    const personSlug = assignment.person_id?.slug ?? "";
    const unitSlug = assignment.unit_id?.slug ?? "";
    if (personSlug.startsWith("schema-probe") || unitSlug.startsWith("schema-probe")) {
      await send(base, token, "DELETE", `/items/role_assignments/${assignment.id}`);
    }
  }
  const people = await send(
    base,
    token,
    "GET",
    "/items/people?filter[slug][_starts_with]=schema-probe&fields=id&limit=-1",
  );
  for (const person of people?.data ?? []) {
    const profiles = await send(
      base,
      token,
      "GET",
      `/items/academic_profiles?filter[person_id][_eq]=${person.id}&fields=id&limit=-1`,
    );
    for (const profile of profiles?.data ?? []) {
      await send(base, token, "DELETE", `/items/academic_profiles/${profile.id}`);
    }
    await send(base, token, "DELETE", `/items/people/${person.id}`);
  }
  const units = await send(
    base,
    token,
    "GET",
    "/items/organization_units?filter[slug][_starts_with]=schema-probe&fields=id&limit=-1",
  );
  for (const unit of units?.data ?? []) {
    await send(base, token, "DELETE", `/items/organization_units/${unit.id}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function provePermissions(base, adminToken, readerToken) {
  await cleanupProbes(base, adminToken);
  await deleteUserByEmail(base, adminToken, "schema-probe-editor@example.com");

  const editorRole = await send(
    base,
    adminToken,
    "GET",
    "/roles?filter[name][_eq]=Content%20Editor&fields=id&limit=1",
  );
  const editorToken = randomBytes(24).toString("hex");
  await send(base, adminToken, "POST", "/users", {
    email: "schema-probe-editor@example.com",
    password: randomBytes(24).toString("hex"),
    role: editorRole.data[0].id,
    status: "active",
    token: editorToken,
    first_name: "Schema",
    last_name: "Probe",
  });

  try {
    await send(base, adminToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-draft",
      name_fa: "Synthetic probe draft",
    });
    await send(base, adminToken, "POST", "/items/organization_units", {
      status: "published",
      slug: "schema-probe-published",
      name_fa: "Synthetic probe published",
    });

    const draftPerson = await send(base, adminToken, "POST", "/items/people", {
      status: "draft",
      slug: "schema-probe-person-draft",
      first_name_fa: "آزمایشی",
      last_name_fa: "پیش‌نویس",
      full_name_fa: "آزمایشی پیش‌نویس",
    });
    const publishedPerson = await send(base, adminToken, "POST", "/items/people", {
      status: "published",
      slug: "schema-probe-person-published",
      first_name_fa: "آزمایشی",
      last_name_fa: "منتشر",
      full_name_fa: "آزمایشی منتشر",
      full_name_en: "Synthetic Published Probe",
    });
    await send(base, adminToken, "POST", "/items/academic_profiles", {
      person_id: draftPerson.data.id,
      academic_rank: "instructor",
    });
    await send(base, adminToken, "POST", "/items/academic_profiles", {
      person_id: publishedPerson.data.id,
      academic_rank: "assistant_professor",
    });

    const readerUnits = await send(
      base,
      readerToken,
      "GET",
      "/items/organization_units?filter[slug][_starts_with]=schema-probe&fields=slug,status&limit=-1",
    );
    const readerSlugs = (readerUnits?.data ?? []).map((item) => item.slug).sort();
    assert(
      readerSlugs.length === 1 && readerSlugs[0] === "schema-probe-published",
      "Site Reader did not return only the published probe.",
    );

    const readerDenied = await request(base, readerToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-reader-denied",
      name_fa: "Denied",
    });
    assert(readerDenied.status === 403, "Site Reader create was not rejected.");

    const publishedUnit = await send(base, adminToken, "POST", "/items/organization_units", {
      status: "published",
      slug: "schema-probe-unit-published",
      name_fa: "واحد آزمایشی",
    });
    await send(base, adminToken, "POST", "/items/role_assignments", {
      status: "published",
      person_id: draftPerson.data.id,
      unit_id: publishedUnit.data.id,
      role_category: "staff",
      role_title_fa: "کارشناس آزمایشی",
    });
    await send(base, adminToken, "POST", "/items/role_assignments", {
      status: "published",
      person_id: publishedPerson.data.id,
      unit_id: publishedUnit.data.id,
      role_category: "faculty_member",
      role_title_fa: "عضو آزمایشی",
    });

    const readerProfiles = await send(
      base,
      readerToken,
      "GET",
      "/items/academic_profiles?fields=person_id.status,person_id.slug&limit=-1",
    );
    const profileSlugs = (readerProfiles?.data ?? []).map((item) => item.person_id?.slug);
    assert(
      profileSlugs.includes("schema-probe-person-published") &&
        !profileSlugs.includes("schema-probe-person-draft"),
      "Site Reader academic profile filter did not follow the person's status.",
    );

    const readerAssignments = await send(
      base,
      readerToken,
      "GET",
      "/items/role_assignments?fields=person_id.slug,unit_id.slug&limit=-1",
    );
    const assignmentPeople = (readerAssignments?.data ?? []).map((item) => item.person_id?.slug);
    assert(
      assignmentPeople.includes("schema-probe-person-published") &&
        !assignmentPeople.includes("schema-probe-person-draft"),
      "Site Reader role assignment filter did not require a published person and unit.",
    );

    const editorCreated = await send(base, editorToken, "POST", "/items/organization_units", {
      status: "draft",
      slug: "schema-probe-editor",
      name_fa: "Synthetic editor probe",
    });
    assert(editorCreated?.data?.id, "Content Editor could not create a probe item.");

    const editorSchema = await request(base, editorToken, "POST", "/collections", {
      collection: "schema_probe_forbidden",
      schema: {},
    });
    assert(
      editorSchema.status === 403 || editorSchema.status === 401,
      "Content Editor schema change was not rejected.",
    );

    const publicRead = await request(
      base,
      null,
      "GET",
      "/items/organization_units?filter[slug][_eq]=schema-probe-published",
    );
    assert(
      publicRead.status === 401 || publicRead.status === 403,
      "Public read without a token was not rejected.",
    );
    console.log("permission checks passed");
  } finally {
    await cleanupProbes(base, adminToken);
    await deleteUserByEmail(base, adminToken, "schema-probe-editor@example.com");
  }
}

async function assertPublicUntouched(base, token) {
  const policies = await send(base, token, "GET", "/policies?fields=id,name&limit=-1");
  const publicPolicy = (policies?.data ?? []).find(
    (policy) => policy.name === "Public" || policy.name === "$t:public_label",
  );
  if (!publicPolicy) {
    console.log("no Public policy found; unauthenticated read is still checked directly");
    return;
  }
  const permissions = await send(
    base,
    token,
    "GET",
    `/permissions?filter[policy][_eq]=${publicPolicy.id}&fields=collection,action&limit=-1`,
  );
  const contentHit = (permissions?.data ?? []).filter((permission) =>
    CONTENT_COLLECTIONS.includes(permission.collection) || permission.collection === "directus_files",
  );
  assert(contentHit.length === 0, "Public policy has permissions on content or files.");
  console.log("public policy has no content permissions");
}

const REVALIDATE_URL = "http://web:3000/api/revalidate";

const REVALIDATE_FLOWS = [
  ["organization_units", "organization-units"],
  ["people", "people"],
  ["academic_profiles", "people"],
  ["role_assignments", "people"],
  ["programs", "programs"],
  ["news_articles", "news"],
  ["events", "events"],
  ["service_items", "services"],
  ["pages", "pages"],
];

function redactSecret(text, secret) {
  if (!secret) {
    return text;
  }
  return text.split(secret).join("[redacted]");
}

async function sendQuiet(base, token, method, pathname, body, secret) {
  try {
    return await send(base, token, method, pathname, body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "request failed";
    throw new Error(redactSecret(message, secret));
  }
}

function revalidateOperationOptions(secret, tag) {
  return {
    method: "POST",
    url: REVALIDATE_URL,
    headers: [
      { header: "Content-Type", value: "application/json" },
      { header: "x-revalidate-secret", value: secret },
    ],
    body: JSON.stringify({ tag }),
  };
}

async function ensureRevalidateFlow(base, token, secret, collection, tag) {
  const name = `Revalidate ${collection}`;
  const key = `revalidate_${collection}`;
  const listed = await sendQuiet(
    base,
    token,
    "GET",
    `/flows?filter[name][_eq]=${encodeURIComponent(name)}&fields=id,operation&limit=-1`,
    undefined,
    secret,
  );
  const matches = listed?.data ?? [];
  let flow = matches[0];
  if (!flow) {
    const created = await sendQuiet(
      base,
      token,
      "POST",
      "/flows",
      {
        name,
        icon: "bolt",
        status: "active",
        trigger: "event",
        accountability: "all",
        options: {
          type: "action",
          scope: ["items.create", "items.update", "items.delete"],
          collections: [collection],
        },
      },
      secret,
    );
    flow = created?.data;
  } else if (matches.length > 1) {
    console.log(`revalidation Flow ${collection} already has duplicates; updating the first`);
  }
  if (!flow?.id) {
    throw new Error(`revalidation Flow for ${collection} was not created`);
  }

  const operations = await sendQuiet(
    base,
    token,
    "GET",
    `/operations?filter[flow][_eq]=${flow.id}&fields=id,key&limit=-1`,
    undefined,
    secret,
  );
  const operationRows = operations?.data ?? [];
  const options = revalidateOperationOptions(secret, tag);
  let operation = operationRows.find((row) => row.key === key) ?? operationRows[0];
  if (!operation) {
    const created = await sendQuiet(
      base,
      token,
      "POST",
      "/operations",
      {
        name,
        key,
        type: "request",
        position_x: 19,
        position_y: 1,
        options,
        flow: flow.id,
      },
      secret,
    );
    operation = created?.data;
  } else {
    await sendQuiet(
      base,
      token,
      "PATCH",
      `/operations/${operation.id}`,
      { name, key, type: "request", options, flow: flow.id },
      secret,
    );
  }
  if (!operation?.id) {
    throw new Error(`revalidation operation for ${collection} was not created`);
  }
  if (flow.operation !== operation.id) {
    await sendQuiet(
      base,
      token,
      "PATCH",
      `/flows/${flow.id}`,
      {
        status: "active",
        operation: operation.id,
        trigger: "event",
        options: {
          type: "action",
          scope: ["items.create", "items.update", "items.delete"],
          collections: [collection],
        },
      },
      secret,
    );
  }
  console.log(`revalidation Flow ready for ${collection}`);
}

async function ensureRevalidateFlows(base, token, secret) {
  if (!secret) {
    console.log("REVALIDATE_SECRET is unset; revalidation Flows were not created");
    return;
  }
  for (const [collection, tag] of REVALIDATE_FLOWS) {
    await ensureRevalidateFlow(base, token, secret, collection, tag);
  }
}

async function main() {
  const env = readEnvFile(path.join(root, ".env"));
  const email = env.DIRECTUS_ADMIN_EMAIL?.trim();
  const password = env.DIRECTUS_ADMIN_PASSWORD?.trim();
  const base = assertLocalUrl(env.DIRECTUS_URL?.trim() || "");
  if (!email || !password) {
    throw new Error("DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD are required in the root .env.");
  }

  const login = await request(base, null, "POST", "/auth/login", { email, password });
  if (login.status < 200 || login.status >= 300) {
    throw new Error(`Admin login failed (${login.status}).`);
  }
  const adminToken = login.payload?.data?.access_token;
  if (!adminToken) {
    throw new Error("Admin login did not return an access token.");
  }

  const collectionList = await send(base, adminToken, "GET", "/collections?limit=-1");
  const existing = new Set((collectionList?.data ?? []).map((item) => item.collection));
  for (const definition of COLLECTIONS) {
    await ensureCollection(base, adminToken, definition, existing);
  }

  const relationList = await send(base, adminToken, "GET", "/relations?limit=-1");
  const relations = new Set(
    (relationList?.data ?? []).map((relation) => `${relation.collection}.${relation.field}`),
  );
  for (const relation of RELATIONS) {
    await ensureRelation(base, adminToken, relation, relations);
  }

  const readerRoleId = await ensureRole(
    base,
    adminToken,
    "Site Reader",
    "Server-only read of published items.",
    "visibility",
  );
  const readerPolicyId = await ensurePolicy(
    base,
    adminToken,
    "Site Reader",
    "Read published faculty content only.",
    "visibility",
    false,
  );
  await ensureAccess(base, adminToken, readerRoleId, readerPolicyId);
  for (const collection of STATUS_COLLECTIONS) {
    await ensurePermission(base, adminToken, readerPolicyId, collection, "read");
  }
  await ensurePermission(base, adminToken, readerPolicyId, "academic_profiles", "read");
  await ensurePermission(base, adminToken, readerPolicyId, "directus_files", "read");

  const editorRoleId = await ensureRole(
    base,
    adminToken,
    "Content Editor",
    "Faculty staff who create, edit, and publish. No schema access and no delete.",
    "edit",
  );
  const editorPolicyId = await ensurePolicy(
    base,
    adminToken,
    "Content Editor",
    "Create, read, and update content and files. No delete and no schema access.",
    "edit",
    true,
  );
  await ensureAccess(base, adminToken, editorRoleId, editorPolicyId);
  for (const collection of [...CONTENT_COLLECTIONS, "directus_files"]) {
    for (const action of ["create", "read", "update"]) {
      await ensurePermission(base, adminToken, editorPolicyId, collection, action);
    }
  }

  const envPath = path.join(root, "web", ".env.local");
  const rootEnvPath = path.join(root, ".env");
  const chosen = readerTokenFor(env, envPath);
  await ensureUser(base, adminToken, {
    email: "site-reader@example.com",
    roleId: readerRoleId,
    staticToken: chosen.token,
    firstName: "Site",
    lastName: "Reader",
    updateToken: chosen.replace,
  });
  if (chosen.replace) {
    writeToken(envPath, chosen.token);
    if (envToken(rootEnvPath) === env.DIRECTUS_SECRET?.trim() || !envToken(rootEnvPath)) {
      writeToken(rootEnvPath, chosen.token);
    }
    console.log("wrote a new DIRECTUS_READ_TOKEN to the local env files");
  } else {
    console.log("DIRECTUS_READ_TOKEN already set; attached it to Site Reader");
  }
  const readerToken = chosen.token;

  await assertPublicUntouched(base, adminToken);
  await provePermissions(base, adminToken, readerToken);
  await ensureRevalidateFlows(base, adminToken, env.REVALIDATE_SECRET?.trim() ?? "");
  console.log("local Directus schema is ready");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Schema setup failed.");
  process.exitCode = 1;
});
