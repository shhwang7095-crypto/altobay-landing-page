const FEATURES = [
  {
    tag: "01",
    title: "Smart Booking",
    description:
      "Consolidate every booking, photo upload, and symptom report into one screen — no more juggling calls, texts, and standalone tools.",
    tint: "bg-brand-blue/10 text-brand-blue",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9.5h18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M8.5 14.8l2 2 4.2-4.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    tag: "02",
    title: "AI-Generated Service Reports",
    description:
      "A mechanic jots a quick note, and Altobay's AI turns it into a clean, professional explanation of the work and cost — building customer trust and cutting down repeat calls.",
    tint: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    icon: (
      <>
        <path
          d="M7 3h6l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M13 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 13.5h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M18 8.2l.55 1.3 1.3.55-1.3.55-.55 1.3-.55-1.3-1.3-.55 1.3-.55.55-1.3Z"
          fill="currentColor"
        />
      </>
    ),
  },
  {
    tag: "03",
    title: "Vehicle Cloud Search",
    description:
      "Every vehicle's repair history is captured as structured data, so your shop can search and analyze it instantly — not dig through paper files.",
    tint: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6.7 12.2l1-2.7a1 1 0 0 1 .95-.65h4.7a1 1 0 0 1 .95.65l1 2.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6.2 12.2h8.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="8" cy="12.4" r="0.9" fill="currentColor" />
        <circle cx="13" cy="12.4" r="0.9" fill="currentColor" />
        <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export default function ServiceFeatures() {
  return (
    <section id="service" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          App Service
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything your shop needs, in one app
        </h2>
        <p className="mt-4 text-muted-foreground">
          Scheduling, reporting, and vehicle data — unified in one AI platform built for U.S.
          independent repair shops.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="absolute right-5 top-5 text-xs font-bold tabular-nums text-muted-foreground/40">
              {feature.tag}
            </span>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${feature.tint}`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                {feature.icon}
              </svg>
            </div>
            <h3 className="mt-5 pr-6 text-lg font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
