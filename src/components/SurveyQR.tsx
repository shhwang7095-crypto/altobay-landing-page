import Image from "next/image";
import { getDictionary } from "@/i18n/server";

export default async function SurveyQR() {
  const { survey } = await getDictionary();

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
            alt={survey.qrAlt}
            width={140}
            height={140}
          />
        </a>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {survey.eyebrow}
          </span>
          <h3 className="mt-2 text-xl font-bold">{survey.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {survey.body}
          </p>
        </div>
      </div>
    </section>
  );
}
