import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import PhoneMockup from "@/components/PhoneMockup";

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
