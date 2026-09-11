"use client";

import { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";

const STEPS = [
  { slug: "jobs", label: "Jobs" },
  { slug: "scope", label: "Scope" },
  { slug: "before", label: "Before" },
  { slug: "work", label: "Work" },
  { slug: "after", label: "After" },
  { slug: "scan", label: "Read" },
  { slug: "review", label: "Review" },
  { slug: "done", label: "Done" },
];

type DemoWindow = Window & { S?: { screen: string } };

export default function InteractiveDemoPhone() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [active, setActive] = useState("jobs");

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

  function goTo(slug: string) {
    const doc = iframeRef.current?.contentDocument;
    const btn = doc?.querySelector<HTMLButtonElement>(`[data-s="${slug}"]`);
    btn?.click();
  }

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
      <div className="relative w-full sm:w-36 sm:shrink-0 sm:pt-2">
        <span className="absolute left-[13px] top-5 bottom-5 hidden w-px bg-border sm:block" />
        <ol className="flex gap-1 overflow-x-auto pb-1 sm:flex-col sm:gap-0.5 sm:overflow-visible sm:pb-0">
          {STEPS.map((step, i) => (
            <li key={step.slug} className="shrink-0">
              <button
                type="button"
                onClick={() => goTo(step.slug)}
                className="flex items-center gap-3 rounded-lg py-1.5 pr-3 transition-colors hover:bg-muted sm:w-full"
              >
                <span
                  className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    active === step.slug
                      ? "bg-brand-blue text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`whitespace-nowrap text-sm font-medium transition-colors ${
                    active === step.slug ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <PhoneMockup size="interactive">
        <iframe
          ref={iframeRef}
          src="/interactive/ai-service-report-demo.html"
          title="Altobay.ai service report — interactive demo"
          className="h-full w-full border-0"
        />
      </PhoneMockup>
    </div>
  );
}
