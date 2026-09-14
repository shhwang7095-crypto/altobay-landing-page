import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0b1120_0%,#1c3d8f_100%)] px-8 py-16 text-center text-white sm:px-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to Put AI in Your Bay?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">Book a demo or download app</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request a Demo
          </Link>
          <a
            href="https://altobay.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Click to visit site
          </a>
        </div>
      </div>
    </section>
  );
}
