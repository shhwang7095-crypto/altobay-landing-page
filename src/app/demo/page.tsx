import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import { getDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Request a Demo | Altobay.ai",
  description: "Tell us about your shop and we'll be in touch to set up a demo of Altobay.ai.",
};

export default async function DemoPage() {
  const { demoPage } = await getDictionary();

  return (
    <GuideShell eyebrow={demoPage.eyebrow} title={demoPage.title} intro={demoPage.intro}>
      <DemoRequestForm />
    </GuideShell>
  );
}
