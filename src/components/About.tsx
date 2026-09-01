import { LogoMark } from "./Logo";

const FACTS = [
  { value: "2026", label: "Founded" },
  { value: "Menlo Park, CA", label: "HQ" },
  { value: "California", label: "Pilot market" },
];

const PILLARS = [
  {
    label: "What we replace",
    body: "Scheduling, reporting, and vehicle data — unified in one AI platform, replacing the scattered calls, texts, and paper records that slow independent repair shops down.",
    icon: (
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    label: "Why shops trust us",
    body: "Piloting with independent repair shops across California, built by a team with backgrounds spanning Big Four accounting, corporate strategy, and enterprise finance.",
    icon: (
      <path
        d="M12 3l7 3v5.5c0 4.2-2.9 8.1-7 9.5-4.1-1.4-7-5.3-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
];

const STATS = [
  { value: "5+", label: "Pilot repair shops in California" },
  { value: "6", label: "Startup program selections" },
  { value: "MVP", label: "In active development" },
];

export default function About() {
  return (
    <section id="company" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Company
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          About Altobay.ai
        </h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {FACTS.map((fact) => (
            <span
              key={fact.label}
              className="inline-flex items-baseline gap-1.5 rounded-full border border-border bg-muted px-3.5 py-1.5"
            >
              <span className="text-sm font-bold">{fact.value}</span>
              <span className="text-xs text-muted-foreground">{fact.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Core principle — the strongest statement, given the most weight */}
      <div className="relative mt-12 overflow-hidden rounded-3xl border border-brand-blue/25 bg-brand-blue/[0.06] p-8 sm:p-12">
        <LogoMark className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 opacity-[0.06]" />

        <div className="relative max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Our core principle
          </span>
          <p className="mt-5 text-2xl font-bold leading-snug tracking-tight sm:text-[2rem]">
            Final diagnosis and repair decisions always stay with the shop.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Altobay&apos;s AI focuses on automating intake and improving the quality of customer
            explanations — never replacing a mechanic&apos;s judgment.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {pillar.icon}
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold">{pillar.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-8 py-9 text-center">
            <p className="text-4xl font-extrabold tracking-tight text-brand-blue">
              {stat.value}
            </p>
            <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
