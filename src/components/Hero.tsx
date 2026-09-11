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
            AI in Your <span className="text-brand-blue-light">Repair Bay</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-white/80">
            Run your repair shop smarter.
          </p>

          <p className="mt-6 max-w-md text-lg text-white/70">
            Altobay.ai is an AI platform for independent repair shops and customers — helping
            mechanics manage bookings, generate AI-powered service reports, and look up vehicle
            history, all from one app.
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

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              { label: "App Store" },
              { label: "Google Play" },
            ].map((store) => (
              <span
                key={store.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white/70"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <path
                    d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Zm7 20H5a2 2 0 0 1-2-2c0-3.9 4-7 9-7s9 3.1 9 7a2 2 0 0 1-2 2Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide text-white/40">
                    Coming soon on
                  </span>
                  <span className="block text-sm font-semibold text-white">{store.label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex justify-center md:justify-end">
          <TiltPhone>
            <PhoneMockup>
              <Image
                src="/screenshots/dashboard-hero.png"
                alt="Altobay.ai booking and service status dashboard"
                width={886}
                height={1342}
                priority
                sizes="240px"
                className="block h-auto w-full"
              />
            </PhoneMockup>
          </TiltPhone>
        </div>
      </div>
    </section>
  );
}
