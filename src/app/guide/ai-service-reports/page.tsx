import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import InteractiveDemoPhone from "@/components/guide/InteractiveDemoPhone";
import GuideVideo from "@/components/GuideVideo";

export const metadata: Metadata = {
  title: "AI-Generated Service Reports | Altobay.ai Guide",
  description:
    "Try the actual mechanic flow: shoot before/after photos, let AI read them, and send a customer-ready report, right in your browser.",
};

export default function AiServiceReportsGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="AI-Generated Service Reports"
      intro="Watch how it works, then try it yourself below."
    >
      <GuideVideo
        src="/videos/ai-report-flow-demo.mp4"
        poster="/videos/ai-report-flow-demo-poster.jpg"
        label="AI-Generated Service Reports walkthrough video"
      />

      <div>
        <InteractiveDemoPhone />
      </div>
    </GuideShell>
  );
}
