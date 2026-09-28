import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";
import PromoVideo from "./PromoVideo";
import { getDictionary } from "@/i18n/server";
import type { Dictionary } from "@/i18n/dictionaries/en";

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

const SCREENS: {
  slug: keyof Dictionary["showcase"]["screens"];
  src: string;
  ready: boolean;
  hasVideo: boolean;
}[] = [
  {
    slug: "smart-booking",
    src: "/screenshots/mockup-smart-booking.png",
    ready: true,
    hasVideo: true,
  },
  {
    slug: "ai-service-reports",
    src: "/screenshots/mockup-service-report.png",
    ready: true,
    hasVideo: true,
  },
  {
    slug: "vehicle-cloud-search",
    src: "/screenshots/mockup-vehicle-search.png",
    ready: true,
    hasVideo: true,
  },
];

export default async function Screenshots() {
  const { showcase } = await getDictionary();

  return (
    <section id="how-it-works" className="overflow-hidden py-24">
      <div className="px-6">
        <PromoVideo />
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {showcase.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {showcase.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{showcase.subtitle}</p>
      </div>

      <div className="mt-16 flex flex-wrap items-end justify-center gap-8 px-6">
        {SCREENS.map((screen, index) => {
          const { label, alt } = showcase.screens[screen.slug];
          const node = <ScreenshotImage src={screen.src} alt={alt} width={205} height={432} />;

          return screen.hasVideo ? (
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
                        {showcase.wantGuide}
                      </Link>
                      <Link
                        href={`/guide/${screen.slug}?video=open`}
                        className="pointer-events-auto translate-y-2 rounded-full bg-brand-blue px-4 py-2 text-center text-xs font-semibold text-white opacity-0 shadow-lg transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        {showcase.watchVideo}
                      </Link>
                    </div>
                  </div>
                }
              >
                {node}
              </PhoneMockup>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <Link
                href={`/guide/${screen.slug}`}
                className="-mt-3 text-xs font-medium text-brand-blue hover:underline"
              >
                {showcase.viewGuide}
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
                      {screen.ready ? showcase.wantGuide : showcase.comingSoon}
                    </span>
                  </div>
                }
              >
                {node}
              </PhoneMockup>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <span
                className={`-mt-3 text-xs font-medium ${
                  screen.ready ? "text-brand-blue" : "text-muted-foreground"
                }`}
              >
                {screen.ready ? showcase.viewGuide : showcase.guideComingSoon}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
