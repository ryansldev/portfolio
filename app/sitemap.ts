import type { MetadataRoute } from "next";
import { languageTag, locales, siteUrl } from "./locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [languageTag[l], `${siteUrl}/${l}`])),
    "x-default": siteUrl,
  };

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
