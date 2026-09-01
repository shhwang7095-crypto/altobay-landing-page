import type { ReactNode } from "react";
import Image from "next/image";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";

export default function GuideStep({
  number,
  title,
  children,
  screenshotLabel,
  screenshotSrc,
  screenshotAlt,
}: {
  number: number;
  title: string;
  children: ReactNode;
  screenshotLabel: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
      <div className={number % 2 === 0 ? "md:order-2" : ""}>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
          {number}
        </span>
        <h2 className="mt-4 text-xl font-bold">{title}</h2>
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
      <div className={number % 2 === 0 ? "md:order-1" : ""}>
        {screenshotSrc ? (
          <div className="mx-auto w-[260px] overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
            <Image
              src={screenshotSrc}
              alt={screenshotAlt ?? screenshotLabel}
              width={880}
              height={1540}
              sizes="260px"
              className="h-auto w-full"
            />
          </div>
        ) : (
          <ScreenshotPlaceholder label={screenshotLabel} />
        )}
      </div>
    </div>
  );
}
