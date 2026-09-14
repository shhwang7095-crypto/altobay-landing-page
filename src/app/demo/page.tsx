import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import DemoRequestForm from "@/components/demo/DemoRequestForm";

export const metadata: Metadata = {
  title: "Request a Demo | Altobay.ai",
  description: "Tell us about your shop and we'll be in touch to set up a demo of Altobay.ai.",
};

export default function DemoPage() {
  return (
    <GuideShell
      eyebrow="Get Started"
      title="Request a Demo"
      intro="Tell us a bit about your shop and what you're interested in, and we'll follow up shortly."
    >
      <DemoRequestForm />
    </GuideShell>
  );
}
