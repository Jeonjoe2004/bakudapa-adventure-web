import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bakudapa Adventure",
    short_name: "Bakudapa",
    description:
      "Komunitas pendaki gunung Sulawesi Utara. Temukan teman mendaki, jelajahi gunung, dan bagikan petualanganmu.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#15803d",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
