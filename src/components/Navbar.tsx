"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: t.nav.service, href: "#service" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.company, href: "#company" },
  ];

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
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
