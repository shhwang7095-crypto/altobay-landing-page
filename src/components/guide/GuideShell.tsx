import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/server";

export default async function GuideShell({
  eyebrow,
  title,
  intro,
  replayButton,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  replayButton?: ReactNode;
  children: ReactNode;
}) {
  const { common } = await getDictionary();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {common.backToHome}
          </Link>
          {replayButton}
        </div>

        <span className="mt-8 block text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>

        <div className="mt-12 space-y-14">{children}</div>
      </main>
      <Footer />
    </>
  );
}
