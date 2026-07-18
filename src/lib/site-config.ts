import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bakudapa-adventure.my.id";

export const siteConfig: {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
    tiktok: string;
    email: string;
    whatsapp: string;
  };
} = {
  name: "Bakudapa Adventure",
  description:
    "Komunitas pendaki gunung Sulawesi Utara. Temukan teman mendaki, jelajahi gunung, dan bagikan petualanganmu.",
  url: siteUrl,
  ogImage: `${siteUrl}/images/og-image.svg`,
  links: {
    instagram: "https://instagram.com/bakudapa.adventure",
    tiktok: "https://tiktok.com/@bakudapa.adventure",
    email: "halo@bakudapa.my.id",
    whatsapp: "https://wa.me/623138518923",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Komunitas Pendaki Sulawesi Utara`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "bakudapa",
    "pendaki",
    "gunung",
    "sulawesi utara",
    "komunitas pendaki",
    "mendaki gunung",
    "lokon",
    "klabat",
    "soputan",
    "adventure",
    "indonesia",
  ],
  authors: [{ name: "Bakudapa Adventure" }],
  creator: "Bakudapa Adventure",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};
