import Image from "next/image";
import PhoneMockup from "./PhoneMockup";
import TiltPhone from "./TiltPhone";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#0b1120_0%,#0e1a33_45%,#1c3d8f_100%)] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(122,177,255,0.25), transparent 40%), radial-gradient(circle at 85% 0%, rgba(122,177,255,0.18), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-20 md:grid-cols-2 md:pt-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue-light">
            Built for U.S. auto repair shops
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Run your repair shop{" "}
            <span className="text-brand-blue-light">smarter, not harder</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/70">
            Altobay.ai is a smart mobility platform that helps mechanics manage bookings,
            generate AI-powered service reports, and look up vehicle history — all from one
            app.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-opacity hover:opacity-90"
            >
              Request a Demo
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            [Placeholder — replace with App Store / Google Play badges]
          </p>
        </div>

        <div className="relative mx-auto flex justify-center md:justify-end">
          <TiltPhone>
            <PhoneMockup>
              <div className="relative h-full w-full">
                <Image
                  src="/screenshots/dashboard-hero.png"
                  alt="Altobay.ai booking and service status dashboard"
                  fill
                  priority
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>
            </PhoneMockup>
          </TiltPhone>
        </div>
      </div>
    </section>
  );
}
