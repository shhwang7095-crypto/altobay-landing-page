"use client";

import { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";

const STEPS = [
  {
    slug: "jobs",
    label: "Jobs",
    description: "See every car in the shop today and open one to start the visit.",
  },
  {
    slug: "scope",
    label: "Scope",
    description: "Pick what to check — the reported symptom, a full inspection, or your own list.",
  },
  {
    slug: "before",
    label: "Before",
    description: "Shoot a quick photo of each item before you touch it.",
  },
  {
    slug: "work",
    label: "Work",
    description: "Tick off what you're fixing today — everything else stays quoted on the report.",
  },
  {
    slug: "after",
    label: "After",
    description: "Shoot the same angle again so the AI can compare before and after.",
  },
  {
    slug: "scan",
    label: "Read",
    description: "AI reads each photo pair and calls it Fine, Watch, or Needs Work.",
  },
  {
    slug: "review",
    label: "Review",
    description: "Check the AI-drafted report and edit anything before it goes out.",
  },
  {
    slug: "done",
    label: "Done",
    description: "Send the finished report straight to the customer.",
  },
];

type DemoWindow = Window & { S?: { screen: string } };

export default function InteractiveDemoPhone() {
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
          {STEPS.map((step, i) => {
            const isActive = active === step.slug;
            const isOpen = expanded === step.slug;
            return (
              <li key={step.slug}>
                <button
                  type="button"
                  onClick={() => selectStep(step.slug)}
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
          src="/interactive/ai-service-report-demo.html"
          title="Altobay.ai service report — interactive demo"
          className="h-full w-full border-0"
        />
      </PhoneMockup>
    </div>
  );
}
