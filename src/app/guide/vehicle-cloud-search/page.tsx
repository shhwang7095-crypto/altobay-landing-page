import type { Metadata } from "next";
import { Suspense } from "react";
import GuideShell from "@/components/guide/GuideShell";
import PhoneMockup from "@/components/PhoneMockup";
import GuideVideoReplay from "@/components/guide/GuideVideoReplay";
import { getDictionary, getLocale } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Vehicle Cloud Search | Altobay.ai Guide",
  description: "Step-by-step guide for the Altobay.ai Vehicle Cloud Search feature.",
};

export default async function VehicleCloudSearchGuide() {
  const locale = await getLocale();
  const { common, guide } = await getDictionary();
  const g = guide.vehicleSearch;

  return (
    <GuideShell
      eyebrow={common.featureGuide}
      title={g.title}
      intro={g.intro}
      replayButton={
        <Suspense fallback={null}>
          <GuideVideoReplay
            src="/videos/vehicle-cloud-search-demo_narrated.mp4"
            poster="/videos/vehicle-cloud-search-demo-poster.jpg"
            label={g.videoLabel}
          />
        </Suspense>
      }
    >
      <div className="flex justify-center">
        <PhoneMockup size="interactive">
          <iframe
            src={`/interactive/vehicle-cloud-search-demo.html?lang=${locale}`}
            title={g.iframeTitle}
            className="h-full w-full border-0"
          />
        </PhoneMockup>
      </div>
    </GuideShell>
  );
}
