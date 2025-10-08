// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://humorussketchcomedy.com/";
  const paths = ["", "/about", "/people", "/shows", "/alumni", "/join"];
  const now = new Date();

  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1.0 : 0.7,
  }));
}