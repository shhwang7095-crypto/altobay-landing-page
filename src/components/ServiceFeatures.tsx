const FEATURES = [
  {
    title: "Smart Booking",
    description:
      "Consolidate every booking, photo upload, and symptom report into one screen — no more juggling calls, texts, and standalone tools.",
  },
  {
    title: "AI-Generated Service Reports",
    description:
      "A mechanic jots a quick note, and Altobay's AI turns it into a clean, professional explanation of the work and cost — building customer trust and cutting down repeat calls.",
  },
  {
    title: "Vehicle Cloud Search",
    description:
      "Every vehicle's repair history is captured as structured data, so your shop can search and analyze it instantly — not dig through paper files.",
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
            className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
