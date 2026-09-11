export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0b1120_0%,#1c3d8f_100%)] px-8 py-16 text-center text-white sm:px-16">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue-light">
          Piloting with repair shops across California
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to Put AI in Your Bay?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          [Placeholder] Book a demo or download the app — replace with real CTA copy and links.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@altobay.ai"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request a Demo
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Download the App
          </a>
        </div>
        <p className="mt-4 text-xs text-white/40">
          [Placeholder — confirm contact email and store links]
        </p>
      </div>
    </section>
  );
}
