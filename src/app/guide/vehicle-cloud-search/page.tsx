import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import ComingSoon from "@/components/guide/ComingSoon";

export const metadata: Metadata = {
  title: "Vehicle Cloud Search | Altobay.ai Guide",
  description: "Step-by-step guide for the Altobay.ai Vehicle Cloud Search feature.",
};

export default function VehicleCloudSearchGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="Vehicle Cloud Search"
      intro="Pull up a vehicle's full service history in seconds."
    >
      <ComingSoon />
    </GuideShell>
  );
}
