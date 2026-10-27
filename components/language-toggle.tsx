"use client";

import Link from "next/link";
import { languageTag, localeCookie, type Locale } from "../app/locales";

const options: { locale: Locale; label: string; name: string }[] = [
  { locale: "pt", label: "PT", name: "Português" },
  { locale: "en", label: "EN", name: "English" },
];

export function LanguageToggle({ locale }: { locale: Locale }) {
  return (
    <nav className="flex items-center gap-4 text-sm">
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <Link
            key={option.locale}
            href={`/${option.locale}`}
            hrefLang={languageTag[option.locale]}
            lang={languageTag[option.locale]}
            aria-label={option.name}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              // Remembered by proxy.ts when the visitor comes back to "/".
              document.cookie = `${localeCookie}=${option.locale}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`leading-none font-medium text-(--content) underline-offset-4 ${
              active ? "underline" : "font-light text-(--content-2)"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </nav>
  );
}
