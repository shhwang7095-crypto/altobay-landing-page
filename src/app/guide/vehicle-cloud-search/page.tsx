import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import GuideStep from "@/components/guide/GuideStep";

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
      <GuideStep
        number={1}
        title="Search by VIN or plate"
        screenshotLabel="Vehicle search screen"
        screenshotSrc="/screenshots/mockup-vehicle-search-input.png"
        screenshotAlt="Vehicle Cloud Search screen with an empty search bar for VIN or plate number"
      >
        <p>
          Type a VIN or license plate number into the search bar to pull up any vehicle
          instantly.
        </p>
      </GuideStep>

      <GuideStep
        number={2}
        title="See the full service history"
        screenshotLabel="Vehicle search results"
        screenshotSrc="/screenshots/mockup-vehicle-search.png"
        screenshotAlt="Vehicle Cloud Search results list showing a vehicle's past service records"
      >
        <p>
          Every past visit, repair, and inspection shows up in one list, no digging through
          paper files.
        </p>
      </GuideStep>

      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
          3
        </span>
        <h2 className="mt-4 text-xl font-bold">Manage it all with ease</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Every vehicle&apos;s history stays organized and searchable, so your shop can move
          faster and serve customers with confidence.
        </p>
      </div>
    </GuideShell>
  );
}
