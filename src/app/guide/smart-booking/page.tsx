import type { Metadata } from "next";
import { Suspense } from "react";
import GuideShell from "@/components/guide/GuideShell";
import GuideStep from "@/components/guide/GuideStep";
import GuideVideoReplay from "@/components/guide/GuideVideoReplay";

export const metadata: Metadata = {
  title: "Smart Booking | Altobay.ai Guide",
  description:
    "Step-by-step guide for mechanics: track every booking and service request from one screen in Altobay.ai.",
};

export default function SmartBookingGuide() {
  return (
    <GuideShell
      eyebrow="Feature Guide"
      title="Smart Booking"
      intro="Track every appointment and service request from one screen, no more juggling calls, texts, and paper notes."
      replayButton={
        <Suspense fallback={null}>
          <GuideVideoReplay
            src="/videos/smart-booking-demo.mp4"
            poster="/videos/smart-booking-demo-poster.jpg"
            label="Smart Booking walkthrough video"
          />
        </Suspense>
      }
    >
      <GuideStep
        number={1}
        title="Get notified when a booking comes in"
        screenshotLabel="Notification detail screen"
        screenshotSrc="/screenshots/notification-detail.png"
        screenshotAlt="Notification detail screen showing a new booking request with date, customer, vehicle, and service"
      >
        <p>
          Every new booking request arrives as a notification with the date, customer, vehicle,
          and requested service.
        </p>
        <p>
          Tap <strong>View booking</strong> to jump straight to the request and confirm it.
        </p>
      </GuideStep>

      <GuideStep
        number={2}
        title="See your whole schedule at a glance"
        screenshotLabel="Booking & service status calendar"
        screenshotSrc="/screenshots/booking-calendar.png"
        screenshotAlt="Monthly calendar view of bookings with a selected date showing a confirmed appointment"
      >
        <p>
          Open <strong>Booking &amp; service</strong> and switch between{" "}
          <strong>Monthly</strong> and <strong>Daily</strong> views. Days with appointments are
          marked, so you can spot busy days instantly.
        </p>
        <p>
          Tap any date to see that day&apos;s bookings: status, time, customer, vehicle, and
          requested service, all in one card.
        </p>
      </GuideStep>

      <GuideStep
        number={3}
        title="Track status from request to delivery"
        screenshotLabel="Booking & service status dashboard"
        screenshotSrc="/screenshots/dashboard-hero.png"
        screenshotAlt="Dashboard showing booking counts by status: requested, confirmed, service completed, vehicle delivered, marked as completed, and canceled"
      >
        <p>
          The home dashboard breaks down your bookings by status:{" "}
          <strong>Requested</strong>, <strong>Confirmed</strong>,{" "}
          <strong>Service completed</strong>, <strong>Vehicle delivered</strong>, and more.
        </p>
        <p>
          Toggle between <strong>Today</strong>, <strong>This week</strong>, and{" "}
          <strong>This month</strong> to see how the shop is doing at a glance.
        </p>
      </GuideStep>
    </GuideShell>
  );
}
