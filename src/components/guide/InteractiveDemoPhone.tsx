"use client";

import { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import { useLanguage } from "@/i18n/LanguageProvider";

const STEP_SLUGS = ["jobs", "scope", "before", "work", "after", "scan", "review", "done"];

type DemoWindow = Window & { S?: { screen: string } };

export default function InteractiveDemoPhone() {
  const { locale, t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [active, setActive] = useState("jobs");
  const [expanded, setExpanded] = useState<string | null>("jobs");

  // The demo is a same-origin static page with its own step state (`S.screen`).
  // Poll it instead of wiring an event, since screens also change from taps
  // *inside* the demo (car rows, Next buttons) — not just this stepper.
  useEffect(() => {
    const id = setInterval(() => {
      const win = iframeRef.current?.contentWindow as DemoWindow | null;
      const screen = win?.S?.screen;
      if (screen) setActive(screen);
    }, 300);
    return () => clearInterval(id);
  }, []);

  function selectStep(slug: string) {
    setActive(slug);
    setExpanded((prev) => (prev === slug ? null : slug));
    const doc = iframeRef.current?.contentDocument;
    const btn = doc?.querySelector<HTMLButtonElement>(`[data-s="${slug}"]`);
    btn?.click();
  }

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <div className="relative w-full sm:w-64 sm:shrink-0">
        <span className="absolute left-4 top-6 bottom-6 w-px bg-border" />
        <ol className="flex flex-col gap-0.5">
          {t.interactive.steps.map((step, i) => {
            const slug = STEP_SLUGS[i];
            const isActive = active === slug;
            const isOpen = expanded === slug;
            return (
              <li key={slug}>
                <button
                  type="button"
                  onClick={() => selectStep(slug)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3.5 rounded-lg py-2 pr-3 text-left transition-colors hover:bg-muted"
                >
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isActive ? "bg-brand-blue text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-base font-semibold transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="py-1.5 pl-[46px] pr-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <PhoneMockup size="interactive">
        <iframe
          ref={iframeRef}
          src={`/interactive/ai-service-report-demo.html?lang=${locale}`}
          title={t.interactive.iframeTitle}
          className="h-full w-full border-0"
        />
      </PhoneMockup>
    </div>
  );
}
