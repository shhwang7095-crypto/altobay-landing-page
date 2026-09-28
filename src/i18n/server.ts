import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { ko } from "./dictionaries/ko";
import { es } from "./dictionaries/es";
import type { ClientDictionary } from "./LanguageProvider";

const DICTIONARIES: Record<Locale, Dictionary> = { en, ko, es };

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export async function getDictionary(): Promise<Dictionary> {
  return DICTIONARIES[await getLocale()];
}

export function pickClientDictionary(d: Dictionary): ClientDictionary {
  return {
    common: d.common,
    nav: d.nav,
    promo: d.promo,
    demoForm: d.demoForm,
    features: d.features,
    interactive: d.interactive,
  };
}
