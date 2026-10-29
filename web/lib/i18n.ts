export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export type Direction = "rtl" | "ltr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): Direction {
  return locale === "fa" ? "rtl" : "ltr";
}

export interface TranslationUnavailableCopy {
  title: string;
  body: string;
  viewInPersian: string;
  englishHome: string;
}

export interface SearchCopy {
  title: string;
  intro: string;
  label: string;
  submit: string;
  emptyQuery: string;
  tooShort: string;
  tooLong: string;
  noResults: string;
  unavailable: string;
  unconfigured: string;
  capped: string;
  groups: {
    units: string;
    people: string;
    programs: string;
    news: string;
  };
}

export interface NavCopy {
  primary: string;
  menuOpen: string;
  menuClose: string;
  home: string;
  people: string;
  news: string;
  events: string;
  search: string;
  language: string;
}

export interface CatalogCopy {
  units: string;
  unitsEmpty: string;
  people: string;
  peopleEmpty: string;
  news: string;
  newsEmpty: string;
  events: string;
  eventsEmpty: string;
  programs: string;
  services: string;
  departments: string;
}

export interface FieldCopy {
  phone: string;
  email: string;
  location: string;
  hours: string;
  officeHours: string;
  duration: string;
  degree: string;
  admission: string;
  courses: string;
  category: string;
  published: string;
  starts: string;
  ends: string;
  visitConditions: string;
  description: string;
  rank: string;
  membership: string;
  specialty: string;
  biography: string;
  research: string;
  education: string;
  coursesTaught: string;
  publications: string;
  council: string;
  cv: string;
  curriculum: string;
  department: string;
  role: string;
  identifiers: string;
  researcherId: string;
}

export interface NotFoundCopy {
  label: string;
  title: string;
  body: string;
  home: string;
}

export interface DegreeLabels {
  dvm: string;
  msc: string;
  phd: string;
  dvsc: string;
}

export interface NewsCategoryLabels {
  news: string;
  announcement: string;
}

export interface AcademicRankLabels {
  instructor: string;
  assistant_professor: string;
  associate_professor: string;
  full_professor: string;
  distinguished_professor: string;
  clinical_instructor: string;
}

export interface MembershipLabels {
  official_tenured: string;
  contractual: string;
  adjunct: string;
  emeritus: string;
}

export interface RoleCategoryLabels {
  faculty_dean: string;
  vice_dean: string;
  department_head: string;
  hospital_director: string;
  lab_supervisor: string;
  faculty_member: string;
  staff: string;
}

export interface DeliveryLabels {
  theoretical: string;
  practical: string;
}

export interface PagerCopy {
  label: string;
  previous: string;
  next: string;
}

export interface ShellCopy {
  title: string;
  blurb: string;
  homeKicker: string;
  breadcrumb: string;
  switchToFa: string;
  switchToEn: string;
  cmsConnected: string;
  cmsUnreachable: string;
  cmsUnconfigured: string;
  skipToContent: string;
  nav: NavCopy;
  catalog: CatalogCopy;
  fields: FieldCopy;
  notFound: NotFoundCopy;
  degrees: DegreeLabels;
  newsCategories: NewsCategoryLabels;
  ranks: AcademicRankLabels;
  memberships: MembershipLabels;
  roleCategories: RoleCategoryLabels;
  delivery: DeliveryLabels;
  pager: PagerCopy;
  translationUnavailable: TranslationUnavailableCopy;
  search: SearchCopy;
}

const shellCopy: Record<Locale, ShellCopy> = {
  fa: {
    title: "دانشکده دامپزشکی",
    blurb:
      "وب‌سایت اطلاع‌رسانی دانشکده. محتوای منتشرشده پس از اتصال سامانه مدیریت محتوا در اینجا نمایش داده می‌شود.",
    homeKicker: "وب‌سایت اطلاع‌رسانی",
    breadcrumb: "مسیر صفحه",
    switchToFa: "فارسی",
    switchToEn: "English",
    cmsConnected: "اتصال به سامانه مدیریت محتوا برقرار است.",
    cmsUnreachable: "سامانه مدیریت محتوا در حال حاضر در دسترس نیست.",
    cmsUnconfigured: "نشانی سامانه مدیریت محتوا پیکربندی نشده است.",
    skipToContent: "پرش به محتوای اصلی",
    nav: {
      primary: "ناوبری اصلی",
      menuOpen: "باز کردن منو",
      menuClose: "بستن منو",
      home: "خانه",
      people: "افراد",
      news: "اخبار",
      events: "رویدادها",
      search: "جستجو",
      language: "زبان",
    },
    catalog: {
      units: "واحدهای سازمانی",
      unitsEmpty: "واحد سازمانی منتشرشده‌ای برای نمایش وجود ندارد.",
      people: "افراد",
      peopleEmpty: "فرد منتشرشده‌ای برای نمایش وجود ندارد.",
      news: "اخبار",
      newsEmpty: "خبر منتشرشده‌ای برای نمایش وجود ندارد.",
      events: "رویدادها",
      eventsEmpty: "رویداد منتشرشده‌ای برای نمایش وجود ندارد.",
      programs: "برنامه‌ها",
      services: "خدمات",
      departments: "واحد سازمانی",
    },
    fields: {
      phone: "تلفن",
      email: "رایانامه",
      location: "مکان",
      hours: "ساعات",
      officeHours: "ساعات مراجعه",
      duration: "مدت",
      degree: "مقطع",
      admission: "پذیرش",
      courses: "درس‌ها",
      category: "دسته",
      published: "انتشار",
      starts: "آغاز",
      ends: "پایان",
      visitConditions: "شرایط مراجعه",
      description: "توضیح",
      rank: "رتبه علمی",
      membership: "نوع عضویت",
      specialty: "تخصص",
      biography: "معرفی",
      research: "علاقه‌مندی‌های پژوهشی",
      education: "سوابق تحصیلی",
      coursesTaught: "درس‌های ارائه‌شده",
      publications: "آثار برگزیده",
      council: "شماره نظام دامپزشکی",
      cv: "رزومه",
      curriculum: "برنامه درسی",
      department: "گروه",
      role: "سمت",
      identifiers: "شناسه‌های علمی",
      researcherId: "شناسه پژوهشگر",
    },
    notFound: {
      label: "خطا",
      title: "صفحه پیدا نشد",
      body: "این نشانی منتشر نشده است یا وجود ندارد.",
      home: "بازگشت به خانه",
    },
    degrees: {
      dvm: "دکترای حرفه‌ای دامپزشکی (D.V.M.)",
      phd: "دکترای تخصصی (Ph.D.)",
      dvsc: "دکترای تخصصی بالینی دامپزشکی / دستیاری (D.V.Sc.)",
      msc: "کارشناسی ارشد (M.Sc.)",
    },
    newsCategories: {
      news: "خبر",
      announcement: "اطلاعیه",
    },
    ranks: {
      instructor: "مربی",
      assistant_professor: "استادیار",
      associate_professor: "دانشیار",
      full_professor: "استاد (استاد تمام)",
      distinguished_professor: "استاد ممتاز",
      clinical_instructor: "مدرس بالینی / کارشناس ارشد آموزشی",
    },
    memberships: {
      official_tenured: "هیئت علمی تمام‌وقت (رسمی قطعی / آزمایشی)",
      contractual: "هیئت علمی پیمانی / طرح هیئت علمی",
      adjunct: "استاد مدعو / وابسته / حق‌التدریس",
      emeritus: "استاد پیشکسوت / بازنشسته",
    },
    roleCategories: {
      faculty_dean: "رئیس دانشکده",
      vice_dean: "معاون دانشکده",
      department_head: "مدیر گروه آموزشی",
      hospital_director: "رئیس بیمارستان آموزشی / کلینیک تخصصی",
      lab_supervisor: "سرپرست آزمایشگاه تخصصی",
      faculty_member: "عضو هیئت علمی گروه",
      staff: "کارشناس مسئول / کادر اداری و آزمایشگاهی",
    },
    delivery: {
      theoretical: "نظری",
      practical: "عملی",
    },
    pager: {
      label: "صفحه‌بندی",
      previous: "قبلی",
      next: "بعدی",
    },
    translationUnavailable: {
      title: "این صفحه فقط به فارسی در دسترس است",
      body: "ترجمه انگلیسی این مورد منتشر نشده است. می‌توانید نسخه فارسی را بخوانید یا به صفحه اصلی انگلیسی برگردید.",
      viewInPersian: "مشاهده نسخه فارسی",
      englishHome: "صفحه اصلی انگلیسی",
    },
    search: {
      title: "جستجو",
      intro: "جستجو در واحدها، افراد، برنامه‌ها و اخبار منتشرشده.",
      label: "عبارت جستجو",
      submit: "جستجو",
      emptyQuery: "برای شروع، یک عبارت وارد کنید.",
      tooShort: "حداقل دو نویسه وارد کنید.",
      tooLong: "عبارت جستجو بلندتر از حد مجاز است.",
      noResults: "نتیجه‌ای برای این عبارت پیدا نشد.",
      unavailable: "سامانه مدیریت محتوا در حال حاضر در دسترس نیست.",
      unconfigured: "نشانی سامانه مدیریت محتوا پیکربندی نشده است.",
      capped: "فقط ۲۰ نتیجهٔ اول نشان داده می‌شود.",
      groups: {
        units: "واحدهای سازمانی",
        people: "افراد",
        programs: "برنامه‌ها",
        news: "اخبار",
      },
    },
  },
  en: {
    title: "Faculty of Veterinary Medicine",
    blurb:
      "Public information site for the faculty. Published content will appear here once the content system is connected.",
    homeKicker: "Public site",
    breadcrumb: "Breadcrumb",
    switchToFa: "فارسی",
    switchToEn: "English",
    cmsConnected: "The content system is reachable.",
    cmsUnreachable: "The content system is not reachable right now.",
    cmsUnconfigured: "The content system address is not configured.",
    skipToContent: "Skip to main content",
    nav: {
      primary: "Primary navigation",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      home: "Home",
      people: "People",
      news: "News",
      events: "Events",
      search: "Search",
      language: "Language",
    },
    catalog: {
      units: "Organization units",
      unitsEmpty: "No published organization units to show.",
      people: "People",
      peopleEmpty: "No published people to show.",
      news: "News",
      newsEmpty: "No published news to show.",
      events: "Events",
      eventsEmpty: "No published events to show.",
      programs: "Programs",
      services: "Services",
      departments: "Organization unit",
    },
    fields: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      hours: "Hours",
      officeHours: "Office hours",
      duration: "Duration",
      degree: "Degree",
      admission: "Admission",
      courses: "Courses",
      category: "Category",
      published: "Published",
      starts: "Starts",
      ends: "Ends",
      visitConditions: "Visit conditions",
      description: "Description",
      rank: "Academic rank",
      membership: "Membership",
      specialty: "Specialty",
      biography: "Biography",
      research: "Research interests",
      education: "Education",
      coursesTaught: "Courses taught",
      publications: "Selected publications",
      council: "Veterinary council number",
      cv: "Curriculum vitae",
      curriculum: "Curriculum",
      department: "Department",
      role: "Role",
      identifiers: "Academic identifiers",
      researcherId: "Researcher ID",
    },
    notFound: {
      label: "Error",
      title: "Page not found",
      body: "This address is not published, or it does not exist.",
      home: "Back to home",
    },
    degrees: {
      dvm: "Doctor of Veterinary Medicine (D.V.M.)",
      phd: "Doctor of Philosophy (Ph.D.)",
      dvsc: "Doctor of Veterinary Science (D.V.Sc.)",
      msc: "Master of Science (M.Sc.)",
    },
    newsCategories: {
      news: "News",
      announcement: "Announcement",
    },
    ranks: {
      instructor: "Instructor / Lecturer",
      assistant_professor: "Assistant Professor",
      associate_professor: "Associate Professor",
      full_professor: "Professor (Full Professor)",
      distinguished_professor: "Distinguished Professor",
      clinical_instructor: "Clinical Instructor",
    },
    memberships: {
      official_tenured: "Full-Time Tenured / Tenure-Track Faculty",
      contractual: "Full-Time Contractual Faculty",
      adjunct: "Adjunct / Visiting Lecturer",
      emeritus: "Professor Emeritus",
    },
    roleCategories: {
      faculty_dean: "Dean",
      vice_dean: "Vice Dean",
      department_head: "Department Head",
      hospital_director: "Teaching Hospital Director",
      lab_supervisor: "Laboratory Supervisor",
      faculty_member: "Faculty Member",
      staff: "Staff",
    },
    delivery: {
      theoretical: "Theoretical",
      practical: "Practical",
    },
    pager: {
      label: "Pagination",
      previous: "Previous",
      next: "Next",
    },
    translationUnavailable: {
      title: "This page is available in Persian only",
      body: "An English translation of this item has not been published. You can read the Persian page or return to the English home page.",
      viewInPersian: "Read in Persian",
      englishHome: "English home",
    },
    search: {
      title: "Search",
      intro: "Search published units, people, programs, and news.",
      label: "Search terms",
      submit: "Search",
      emptyQuery: "Enter a term to start.",
      tooShort: "Enter at least two characters.",
      tooLong: "That search is longer than the allowed length.",
      noResults: "No published items match that search.",
      unavailable: "The content system is not reachable right now.",
      unconfigured: "The content system address is not configured.",
      capped: "Showing the first 20 results.",
      groups: {
        units: "Organization units",
        people: "People",
        programs: "Programs",
        news: "News",
      },
    },
  },
};

export function getShellCopy(locale: Locale): ShellCopy {
  return shellCopy[locale];
}

export function facultyLegalName(locale: Locale): string {
  if (locale === "fa") {
    return "دانشکده دامپزشکی دانشگاه آزاد اسلامی واحد تبریز";
  }
  return "Faculty of Veterinary Medicine, Islamic Azad University, Tabriz Branch";
}

export function formatSearchSummary(locale: Locale, count: number): string {
  if (locale === "fa") {
    return `${count.toLocaleString("fa-IR")} نتیجه`;
  }
  return count === 1 ? "1 result" : `${count} results`;
}
