import { createFileRoute } from "@tanstack/react-router";
import { CITIES } from "@/data/cities";

const SITE_URL = "https://transess.lovable.app";

const STATIC_PATHS = [
  "/",
  "/digital-infrastructure",
  "/performance-marketing",
  "/content-authority",
  "/video-content",
  "/crm-conversion",
  "/expertise",
  "/locations",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const staticUrls = STATIC_PATHS.map(
          (p) =>
            `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
        );
        const cityUrls = CITIES.map(
          (c) =>
            `  <url><loc>${SITE_URL}/locations/${c.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...cityUrls].join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
