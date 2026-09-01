import type { Metadata } from "next";
import GuideShell from "@/components/guide/GuideShell";
import GuideStep from "@/components/guide/GuideStep";

export const metadata: Metadata = {
  title: "AI-Generated Service Reports — Altobay.ai Guide",
  description:
    "Step-by-step guide for mechanics: turn a quick note into a customer-ready service report with Altobay.ai.",
};

export default function AiServiceReportsGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="AI-Generated Service Reports"
      intro="Turn a short shop note into a clean, customer-ready service report — no extra typing required."
    >
      <GuideStep
        number={1}
        title="Log the job"
        screenshotLabel="Create Service Report screen"
        screenshotSrc="/screenshots/service-report-create.png"
        screenshotAlt="Create Service Report form showing booking info, service report, mechanic's comment, and recommended action fields"
      >
        <p>
          Open the booking and tap <strong>Service report</strong>. The customer, vehicle, and
          appointment details are already filled in for you.
        </p>
        <p>
          Type a short, plain note about the work performed in{" "}
          <strong>Service report</strong> — no special formatting needed. You can also attach
          after-service photos and select a repair manual.
        </p>
      </GuideStep>

      <GuideStep number={2} title="Let AI build the report" screenshotLabel="Report screen right after tapping Generate — Mechanic's Comment and Recommended Action sections populated.">
        <p>
          Tap <strong>Generate Report</strong>. Altobay reads the note and sorts it into a{" "}
          <strong>Mechanic&apos;s Comment</strong> and a <strong>Recommended Action</strong> list.
        </p>
        <p>Overdue items are flagged automatically so nothing gets missed.</p>
      </GuideStep>

      <GuideStep number={3} title="Review the summary" screenshotLabel="Maintenance Summary screen showing each item with an Overdue / Scheduled status tag and due date.">
        <p>
          Check the auto-built <strong>Maintenance Summary</strong>. Each item shows its status
          (Overdue / Scheduled) and next due date.
        </p>
        <p>Edit anything that needs a correction before it goes out.</p>
      </GuideStep>

      <GuideStep number={4} title="Send to the customer" screenshotLabel="Confirmation state after tapping Send to customer, or the customer-facing report view.">
        <p>
          Tap <strong>Send to customer</strong>. They receive a clean, easy-to-read report
          instead of raw shop notes — building trust and cutting down on back-and-forth calls.
        </p>
      </GuideStep>
    </GuideShell>
  );
}
