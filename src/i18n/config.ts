export const LOCALES = ["en", "ko", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "altobay-lang";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  es: "Español",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
