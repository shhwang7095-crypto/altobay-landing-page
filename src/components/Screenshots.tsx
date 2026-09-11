import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";

function CloudSearchScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-brand-navy">
      <div className="border-b border-border px-4 py-3 text-sm font-bold">Vehicle Cloud Search</div>
      <div className="px-4 py-3">
        <div className="rounded-lg border border-border px-3 py-2 text-[11px] text-muted-foreground">
          Search plate, VIN, or owner...
        </div>
      </div>
      <div className="flex-1 space-y-2 px-4 py-2 text-[11px]">
        <div className="rounded-lg bg-brand-blue/5 p-3">
          <p className="font-semibold">2019 Honda Civic</p>
          <p className="mt-1 text-muted-foreground">6 service records found</p>
        </div>
        <div className="rounded-lg border border-border p-3 text-muted-foreground">
          Last visit: Oil change, brake inspection
        </div>
      </div>
    </div>
  );
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full">
      <Image src={src} alt={alt} fill sizes="264px" className="object-cover object-top" />
    </div>
  );
}

const SCREENS = [
  {
    slug: "smart-booking",
    label: "Smart Booking",
    ready: true,
    node: (
      <ScreenshotImage
        src="/screenshots/booking-calendar.png"
        alt="Smart Booking calendar and appointment list in the Altobay.ai app"
      />
    ),
  },
  {
    slug: "ai-service-reports",
    label: "AI-Generated Service Reports",
    ready: true,
    node: (
      <ScreenshotImage
        src="/screenshots/service-report-create.png"
        alt="Create Service Report screen in the Altobay.ai app"
      />
    ),
  },
  {
    slug: "vehicle-cloud-search",
    label: "Vehicle Cloud Search",
    ready: false,
    node: <CloudSearchScreen />,
  },
];

export default function Screenshots() {
  return (
    <section id="how-it-works" className="overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Inside the App
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          A closer look at Altobay.ai
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Tap a screen for a step-by-step guide to that feature.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap items-end justify-center gap-8 px-6">
        {SCREENS.map((screen, index) => (
          <Link
            key={screen.slug}
            href={`/guide/${screen.slug}`}
            className="group flex flex-col items-center gap-4"
          >
            <PhoneMockup
              size={index === 1 ? "large" : "default"}
              className="transition-transform group-hover:-translate-y-1.5 group-hover:shadow-brand-blue/20"
            >
              <div className="relative h-full w-full">
                {screen.node}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-blue/0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-brand-blue/40 group-hover:opacity-100">
                  <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-center text-xs font-semibold text-brand-navy shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                    Want to see the guide?
                  </span>
                </div>
              </div>
            </PhoneMockup>
            <span className="text-sm font-semibold text-foreground">{screen.label}</span>
            <span
              className={`-mt-3 text-xs font-medium ${
                screen.ready ? "text-brand-blue" : "text-muted-foreground"
              }`}
            >
              {screen.ready ? "View guide →" : "Guide coming soon"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
