"use client";

import { useTransition } from "react";
import { setLocale } from "../app/set-locale";
import type { Locale } from "../app/i18n";

const options: { locale: Locale; label: string; name: string }[] = [
  { locale: "pt", label: "PT", name: "Português" },
  { locale: "en", label: "EN", name: "English" },
];

export function LanguageToggle({ locale }: { locale: Locale }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-4 text-sm">
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            aria-pressed={active}
            aria-label={option.name}
            disabled={pending}
            onClick={() => {
              if (active) return;
              startTransition(() => setLocale(option.locale));
            }}
            className={`cursor-pointer leading-none font-medium text-(--content) underline-offset-4 ${
              active ? "underline" : "font-light text-(--content-2)"
            } disabled:opacity-60`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
