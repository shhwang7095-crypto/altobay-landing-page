"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

// Only the sections client components read - server components get the full
// dictionary straight from getDictionary(), so it never ships to the browser.
export type ClientDictionary = Pick<
  Dictionary,
  "common" | "nav" | "promo" | "demoForm" | "features" | "interactive"
>;

type LanguageContextValue = { locale: Locale; t: ClientDictionary };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: ClientDictionary;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ locale, t: dictionary }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
