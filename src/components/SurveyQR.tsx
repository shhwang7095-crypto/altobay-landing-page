import Image from "next/image";

export default function SurveyQR() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center sm:flex-row sm:items-center sm:gap-8 sm:p-10 sm:text-left">
        <a
          href="https://forms.gle/uJ46EUVj8y1XJaE97"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-2xl border border-border bg-white p-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Image
            src="/images/survey-qr.png"
            alt="QR code linking to the Altobay.ai shop survey"
            width={140}
            height={140}
          />
        </a>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            ← Click to help us build it right
          </span>
          <h3 className="mt-2 text-xl font-bold">Got 2 minutes for a quick survey?</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Scan the code to tell us what you have about the vehicle, it shapes what we build
            next.
          </p>
        </div>
      </div>
    </section>
  );
}
