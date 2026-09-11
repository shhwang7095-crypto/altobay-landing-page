import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import InteractiveDemoPhone from "@/components/guide/InteractiveDemoPhone";

export const metadata: Metadata = {
  title: "AI-Generated Service Reports — Altobay.ai Guide",
  description:
    "Try the actual mechanic flow: shoot before/after photos, let AI read them, and send a customer-ready report — right in your browser.",
};

export default function AiServiceReportsGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="AI-Generated Service Reports"
      intro="This is the real flow a mechanic uses — try it yourself below."
    >
      <div>
        <InteractiveDemoPhone />
      </div>
    </GuideShell>
  );
}
