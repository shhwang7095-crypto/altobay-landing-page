import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";
import PromoVideo from "./PromoVideo";

function ScreenshotImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  // No crop: show the whole screenshot at full width. If it's taller than
  // the phone frame, PhoneMockup's own overflow-y-auto makes it scrollable.
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="264px"
      className="block h-auto w-full"
    />
  );
}

const SCREENS = [
  {
    slug: "smart-booking",
    label: "Smart Booking",
    ready: true,
    hasVideo: true,
    node: (
      <ScreenshotImage
        src="/screenshots/mockup-smart-booking.png"
        alt="Smart Booking calendar and appointment list in the Altobay.ai app"
        width={205}
        height={432}
      />
    ),
  },
  {
    slug: "ai-service-reports",
    label: "AI-Generated Service Reports",
    ready: true,
    hasVideo: true,
    node: (
      <ScreenshotImage
        src="/screenshots/mockup-service-report.png"
        alt="Edit Service Report screen in the Altobay.ai app"
        width={205}
        height={432}
      />
    ),
  },
  {
    slug: "vehicle-cloud-search",
    label: "Vehicle Cloud Search",
    ready: true,
    hasVideo: false,
    node: (
      <ScreenshotImage
        src="/screenshots/mockup-vehicle-search.png"
        alt="Vehicle Cloud Search results list in the Altobay.ai app"
        width={205}
        height={432}
      />
    ),
  },
];

export default function Screenshots() {
  return (
    <section id="how-it-works" className="overflow-hidden py-24">
      <div className="px-6">
        <PromoVideo />
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 text-center">
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
        {SCREENS.map((screen, index) =>
          screen.hasVideo ? (
            <div key={screen.slug} className="group flex flex-col items-center gap-4">
              <PhoneMockup
                size={index === 1 ? "large" : "default"}
                className="transition-transform group-hover:-translate-y-1.5 group-hover:shadow-brand-blue/20"
                overlay={
                  <div className="flex h-full w-full items-center justify-center bg-brand-blue/0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-brand-blue/40 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-2">
                      <Link
                        href={`/guide/${screen.slug}`}
                        className="pointer-events-auto translate-y-2 rounded-full bg-white px-4 py-2 text-center text-xs font-semibold text-brand-navy opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Want to see the guide?
                      </Link>
                      <Link
                        href={`/guide/${screen.slug}?video=open`}
                        className="pointer-events-auto translate-y-2 rounded-full bg-brand-blue px-4 py-2 text-center text-xs font-semibold text-white opacity-0 shadow-lg transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Click to see tutorial video
                      </Link>
                    </div>
                  </div>
                }
              >
                {screen.node}
              </PhoneMockup>
              <span className="text-sm font-semibold text-foreground">{screen.label}</span>
              <Link
                href={`/guide/${screen.slug}`}
                className="-mt-3 text-xs font-medium text-brand-blue hover:underline"
              >
                View guide →
              </Link>
            </div>
          ) : (
            <Link
              key={screen.slug}
              href={`/guide/${screen.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              <PhoneMockup
                size={index === 1 ? "large" : "default"}
                className="transition-transform group-hover:-translate-y-1.5 group-hover:shadow-brand-blue/20"
                overlay={
                  <div
                    className={`flex h-full w-full items-center justify-center opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100 ${
                      screen.ready ? "bg-brand-blue/0 group-hover:bg-brand-blue/40" : "bg-slate-500/0 group-hover:bg-slate-500/50"
                    }`}
                  >
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-center text-xs font-semibold text-brand-navy shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                      {screen.ready ? "Want to see the guide?" : "Coming soon"}
                    </span>
                  </div>
                }
              >
                {screen.node}
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
          )
        )}
      </div>
    </section>
  );
}
