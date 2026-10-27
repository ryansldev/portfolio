export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const siteUrl = "https://www.ryansldev.com.br";

export const localeCookie = "locale";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// BCP 47 tags for <html lang> and hreflang, and Open Graph locale codes.
export const languageTag = { en: "en", pt: "pt-BR" } as const satisfies Record<Locale, string>;
export const ogLocale = { en: "en_US", pt: "pt_BR" } as const satisfies Record<Locale, string>;
