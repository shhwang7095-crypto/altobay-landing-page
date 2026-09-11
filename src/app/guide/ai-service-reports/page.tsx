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
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-brand-blue/40 bg-brand-blue/5 px-5 py-4 text-sm text-muted-foreground">
          <strong className="text-foreground">How to try it:</strong> use the steps beside the
          phone to jump around — Jobs → Scope → Before → Work → After → Read → Review → Done.
          Tap a car, tick what to check, shoot before/after photos, then watch AI read them into
          a report you can edit and send.
        </div>

        <div className="mt-8">
          <InteractiveDemoPhone />
        </div>
      </div>
    </GuideShell>
  );
}
