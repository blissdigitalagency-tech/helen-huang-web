import type { Metadata, Viewport } from "next";
import type { Content } from "@/content/types";

export const viewport: Viewport = { themeColor: "#070605", colorScheme: "dark" };

export function pageMetadata(c: Content): Metadata {
  return {
    // Netlify sets URL at build time; no custom domain yet.
    metadataBase: new URL(process.env.URL ?? "http://localhost:5500"),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: c.locale === "id" ? "/" : "/en/",
      languages: { id: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      type: "website",
      locale: c.locale === "id" ? "id_ID" : "en_US",
      images: [{ url: "/media/hero-poster.jpg", width: 1920, height: 1080 }],
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
  };
}
