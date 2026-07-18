import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bakudapa-adventure.my.id";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/waiting-list"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
