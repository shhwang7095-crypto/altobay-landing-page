import type { ReactNode } from "react";

const SIZES = {
  default: { width: 240, height: 420 },
  large: { width: 264, height: 462 },
  video: { width: 300, height: 533 },
  interactive: { width: 380, height: 760 },
};

export default function PhoneMockup({
  children,
  className,
  size = "default",
  overlay,
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof SIZES;
  /** Rendered above the scrollable screen, fixed to the viewport — use for
   * hover affordances etc. so they don't scroll away with the content. */
  overlay?: ReactNode;
}) {
  const { width, height } = SIZES[size];
  // The interactive demo needs to shrink on narrow viewports instead of
  // overflowing — the others are already small enough to never hit that.
  const isFluid = size === "interactive";
  return (
    <div
      className={`relative shrink-0 rounded-[2.2rem] border-4 border-brand-navy-soft bg-brand-navy p-2 shadow-2xl ring-1 ring-black/10 ${isFluid ? "w-full" : ""} ${className ?? ""}`}
      style={isFluid ? { maxWidth: width } : { width }}
    >
      <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/40" />
      <div
        className="no-scrollbar overflow-y-auto overflow-x-hidden rounded-[1.6rem] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
        style={{ height }}
      >
        {children}
      </div>
      {overlay && (
        <div className="pointer-events-none absolute inset-2 overflow-hidden rounded-[1.6rem]">
          {overlay}
        </div>
      )}
    </div>
  );
}
