import type { Metadata } from "next";
import { Suspense } from "react";
import GuideShell from "@/components/guide/GuideShell";
import InteractiveDemoPhone from "@/components/guide/InteractiveDemoPhone";
import GuideVideoReplay from "@/components/guide/GuideVideoReplay";
import { getDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "AI-Generated Service Reports | Altobay.ai Guide",
  description:
    "Try the actual mechanic flow: shoot before/after photos, let AI read them, and send a customer-ready report, right in your browser.",
};

export default async function AiServiceReportsGuide() {
  const { common, guide } = await getDictionary();
  const g = guide.aiReports;

  return (
    <GuideShell
      eyebrow={common.featureGuide}
      title={g.title}
      intro={g.intro}
      replayButton={
        <Suspense fallback={null}>
          <GuideVideoReplay
            src="/videos/ai-report-flow-demo.mp4"
            poster="/videos/ai-report-flow-demo-poster.jpg"
            label={g.videoLabel}
          />
        </Suspense>
      }
    >
      <div>
        <InteractiveDemoPhone />
      </div>
    </GuideShell>
  );
}
