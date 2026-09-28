import type { Metadata } from "next";
import { Suspense } from "react";
import GuideShell from "@/components/guide/GuideShell";
import GuideStep from "@/components/guide/GuideStep";
import GuideVideoReplay from "@/components/guide/GuideVideoReplay";
import RichText from "@/i18n/RichText";
import { getDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Smart Booking | Altobay.ai Guide",
  description:
    "Step-by-step guide for mechanics: track every booking and service request from one screen in Altobay.ai.",
};

const STEP_SCREENSHOTS = [
  "/screenshots/notification-detail.png",
  "/screenshots/booking-calendar.png",
  "/screenshots/dashboard-hero.png",
];

export default async function SmartBookingGuide() {
  const { common, guide } = await getDictionary();
  const g = guide.smartBooking;

  return (
    <GuideShell
      eyebrow={common.featureGuide}
      title={g.title}
      intro={g.intro}
      replayButton={
        <Suspense fallback={null}>
          <GuideVideoReplay
            src="/videos/smart-booking-demo.mp4"
            poster="/videos/smart-booking-demo-poster.jpg"
            label={g.videoLabel}
          />
        </Suspense>
      }
    >
      {g.steps.map((step, i) => (
        <GuideStep
          key={STEP_SCREENSHOTS[i]}
          number={i + 1}
          title={step.title}
          screenshotLabel={step.shotLabel}
          screenshotSrc={STEP_SCREENSHOTS[i]}
          screenshotAlt={step.alt}
        >
          {step.paragraphs.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </GuideStep>
      ))}
    </GuideShell>
  );
}
