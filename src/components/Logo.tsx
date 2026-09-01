type LogoProps = {
  className?: string;
  showTagline?: boolean;
  mono?: boolean;
};

// Geometry pixel-measured from the official Altobay.ai mark (reference PNG,
// 433x510). Two arcs are NOT concentric — outer circle center sits ~44px
// above the inner circle center — and both share the same 148.3°/31.7°
// gap angles. Needle runs from the pivot center straight to its tip.
// Blue tones are identical across light/dark variants of the mark; only the
// near-black outer ring lightens on dark backgrounds so it stays visible
// (see --logo-track in globals.css).
const ICON_BLUE_ARC = "#75A7F9";
const ICON_BLUE_NEEDLE = "#3B82F6";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 433 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* outer ring: center (222.5, 213.5), r=184.5, gap centered at bottom */}
      <path
        d="M65.6 310.5 A184.5 184.5 0 1 1 379.4 310.5"
        stroke="var(--logo-track)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* inner ring: separate center (222.5, 258), r=136.5, same gap angle */}
      <path
        d="M106.4 329.8 A136.5 136.5 0 1 1 338.6 329.8"
        stroke={ICON_BLUE_ARC}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <line
        x1="222.5"
        y1="396.5"
        x2="336"
        y2="250"
        stroke={ICON_BLUE_NEEDLE}
        strokeWidth="11"
        strokeLinecap="round"
      />
      <circle cx="222.5" cy="396.5" r="17.5" fill="var(--logo-track)" />
      <circle cx="222.5" cy="396.5" r="9" fill={ICON_BLUE_NEEDLE} />
    </svg>
  );
}

export default function Logo({ className, showTagline = false, mono = false }: LogoProps) {
  const textColor = mono ? "currentColor" : "var(--foreground)";
  return (
    <div className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="flex items-center gap-1.5">
          <span
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: textColor }}
          >
            Altobay
          </span>
          <span className="rounded-md bg-brand-blue px-1.5 py-0.5 text-xs font-bold text-white">
            .ai
          </span>
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue-light">
            Smart Mobility Platform
          </span>
        )}
      </div>
    </div>
  );
}
