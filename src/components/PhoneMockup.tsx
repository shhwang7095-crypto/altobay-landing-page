import type { ReactNode } from "react";

const SIZES = {
  default: { width: 240, height: 420 },
  large: { width: 264, height: 462 },
};

export default function PhoneMockup({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof SIZES;
}) {
  const { width, height } = SIZES[size];
  return (
    <div
      className={`relative shrink-0 rounded-[2.2rem] border-4 border-brand-navy-soft bg-brand-navy p-2 shadow-2xl ring-1 ring-black/10 ${className ?? ""}`}
      style={{ width }}
    >
      <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/40" />
      <div
        className="overflow-hidden rounded-[1.6rem] bg-white"
        style={{ height }}
      >
        {children}
      </div>
    </div>
  );
}
