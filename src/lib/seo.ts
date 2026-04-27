/**
 * Centralised SEO + GEO (Generative Engine Optimisation) helpers.
 *
 * Provides:
 *  - SITE_URL, DEFAULT_OG_IMAGE constants
 *  - buildPageMeta(): canonical, og:url, og:image, twitter, locale, geo tags
 *  - organizationJsonLd(), websiteJsonLd()
 *  - serviceJsonLd(): per-service Schema.org Service block
 *  - faqJsonLd(): FAQPage block
 *  - breadcrumbJsonLd(): BreadcrumbList block
 *
 * GEO note: AI engines (ChatGPT, Perplexity, Google AI Overviews, Claude,
 * Gemini) prefer pages with clear structured data, FAQ blocks, semantic
 * headings, and authoritative organization signals. We surface all of these.
 */

export const SITE_URL = "https://transess.lovable.app";
export const SITE_NAME = "Transess Technologies";
export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0d64953-b50e-4c05-a5a4-65ceecf35f49/id-preview-786dd0a0--56063fb0-dd26-47cf-b7b6-54e359b9312a.lovable.app-1777314638964.png";

export type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { charSet: string };

export type LinkTag = { rel: string; href: string };

export type ScriptTag = {
  type?: string;
  children?: string;
};

export type PageMetaInput = {
  title: string;
  description: string;
  path: string; // leading slash, no trailing slash; "/" for home
  image?: string;
  keywords?: string[];
  /** Schema.org type for the OpenGraph type field. Default: "website" */
  ogType?: "website" | "article" | "profile";
};

/** Build a complete set of <meta>/<link> tags for any route. */
export function buildPageMeta(input: PageMetaInput): {
  meta: MetaTag[];
  links: LinkTag[];
} {
  const url = `${SITE_URL}${input.path === "/" ? "" : input.path}`;
  const image = input.image ?? DEFAULT_OG_IMAGE;
  const meta: MetaTag[] = [
    { title: input.title },
    { name: "description", content: input.description },
    // GEO / locale
    { name: "geo.region", content: "IN" },
    { name: "geo.placename", content: "India" },
    { name: "language", content: "English" },
    // Open Graph
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en_IN" },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: input.title },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
    // Crawler / AI hints
    { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
    { name: "googlebot", content: "index,follow" },
  ];
  if (input.keywords?.length) {
    meta.push({ name: "keywords", content: input.keywords.join(", ") });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

/** Schema.org Organization block. Use site-wide on root. */
export function organizationJsonLd(): ScriptTag {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      alternateName: "Transess",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      image: DEFAULT_OG_IMAGE,
      description:
        "Eyecare-focused growth agency delivering patient acquisition, digital infrastructure, performance marketing, content authority, video, and CRM-driven conversion for eye hospitals across India.",
      foundingDate: "2005",
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Eyecare Marketing",
        "Ophthalmology Patient Acquisition",
        "LASIK Marketing",
        "Cataract Surgery Marketing",
        "SMILE Pro Marketing",
        "Eye Hospital SEO",
        "Healthcare CRM",
      ],
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    }),
  };
}

/** Schema.org WebSite block with SearchAction. Use on root. */
export function websiteJsonLd(): ScriptTag {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en-IN",
      publisher: { "@type": "Organization", name: SITE_NAME },
    }),
  };
}

/** Per-service Schema.org Service block. */
export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): ScriptTag {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: input.name,
      serviceType: input.serviceType,
      description: input.description,
      url: `${SITE_URL}${input.path}`,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: { "@type": "Country", name: "India" },
      audience: {
        "@type": "Audience",
        audienceType: "Eye Hospitals, Ophthalmologists, Eye Clinics",
      },
    }),
  };
}

/** FAQPage block — feeds Google rich results AND AI engines. */
export function faqJsonLd(faqs: { q: string; a: string }[]): ScriptTag {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
  };
}

/** Breadcrumb block. items in order from root to current. */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): ScriptTag {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
      })),
    }),
  };
}
