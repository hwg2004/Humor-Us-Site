// app/robots.ts
export default function robots() {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://humorussketchcomedy.com";

  return {
    rules: isProd
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: isProd ? `${base}/sitemap.xml` : undefined,
    host: isProd ? base : undefined,
  };
}