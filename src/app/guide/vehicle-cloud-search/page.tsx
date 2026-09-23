import type { Metadata } from "next";
import { Suspense } from "react";
import GuideShell from "@/components/guide/GuideShell";
import PhoneMockup from "@/components/PhoneMockup";
import GuideVideoReplay from "@/components/guide/GuideVideoReplay";

export const metadata: Metadata = {
  title: "Vehicle Cloud Search | Altobay.ai Guide",
  description: "Step-by-step guide for the Altobay.ai Vehicle Cloud Search feature.",
};

export default function VehicleCloudSearchGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="Vehicle Cloud Search"
      intro="Type anything into the search bar below and hit Enter to see it in action."
      replayButton={
        <Suspense fallback={null}>
          <GuideVideoReplay
            src="/videos/vehicle-cloud-search-demo_narrated.mp4"
            poster="/videos/vehicle-cloud-search-demo-poster.jpg"
            label="Vehicle Cloud Search walkthrough video"
          />
        </Suspense>
      }
    >
      <div className="flex justify-center">
        <PhoneMockup size="interactive">
          <iframe
            src="/interactive/vehicle-cloud-search-demo.html"
            title="Altobay.ai Vehicle Cloud Search interactive demo"
            className="h-full w-full border-0"
          />
        </PhoneMockup>
      </div>
    </GuideShell>
  );
}
