"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

const HOW_IT_WORKS_ITEMS = [
  { slug: "smart-booking", href: "/guide/smart-booking" },
  { slug: "ai-service-reports", href: "/guide/ai-service-reports" },
  { slug: "vehicle-cloud-search", href: "/guide/vehicle-cloud-search" },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label={t.nav.homeAria}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#service"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.service}
          </a>

          <div className="group relative">
            <a
              href="#how-it-works"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.howItWorks}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-xl">
                {HOW_IT_WORKS_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {t.showcase.screens[item.slug].label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#company"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.company}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/demo"
            className="inline-flex whitespace-nowrap rounded-full bg-brand-blue px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">{t.common.demoShort}</span>
            <span className="hidden sm:inline">{t.common.requestDemo}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
