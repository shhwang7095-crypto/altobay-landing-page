"use client";

import { useEffect, useRef, useState } from "react";

// Outward-only "stroke" (text-shadow copies sit behind the glyph fill, so
// they never eat into it) plus a hard 45deg drop shadow, no blur.
function captionTextShadow(strokeColor: string, strokeWidth: number, steps = 16) {
  const ring: string[] = [];
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    const x = (Math.cos(angle) * strokeWidth).toFixed(2);
    const y = (Math.sin(angle) * strokeWidth).toFixed(2);
    ring.push(`${x}px ${y}px 0 ${strokeColor}`);
  }
  return [...ring, "4px 4px 0 rgba(0,0,0,0.44)"].join(", ");
}

const CAPTION_TEXT_SHADOW = captionTextShadow("#000", 2);

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [cueText, setCueText] = useState("");

  useEffect(() => {
    const track = videoRef.current?.textTracks?.[0];
    if (!track) return;
    // Always "hidden": cues still fire so we can render them ourselves,
    // but the browser's own caption box (with its background/positioning
    // we can't fully control) never paints.
    track.mode = "hidden";
    const onCueChange = () => {
      const cues = track.activeCues;
      setCueText(cues && cues.length > 0 ? (cues[0] as VTTCue).text : "");
    };
    track.addEventListener("cuechange", onCueChange);
    return () => track.removeEventListener("cuechange", onCueChange);
  }, []);

  return (
    <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border bg-brand-navy shadow-xl">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster="/videos/altobay-promo-poster.jpg"
        className="block w-full"
      >
        <source src="/videos/altobay-promo.mp4" type="video/mp4" />
        <track
          kind="subtitles"
          src="/videos/altobay-promo.vtt"
          srcLang="en"
          label="English"
          default
        />
      </video>

      {captionsOn && cueText && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-6"
        >
          <p
            className="max-w-[90%] text-center text-lg font-bold text-white sm:text-xl"
            style={{ textShadow: CAPTION_TEXT_SHADOW, whiteSpace: "pre-line" }}
          >
            {cueText}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setCaptionsOn((on) => !on)}
        aria-pressed={captionsOn}
        className={`absolute right-3 top-3 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors ${
          captionsOn
            ? "border-brand-blue bg-brand-blue/90 text-white"
            : "border-white/30 bg-black/40 text-white/80 hover:bg-black/60"
        }`}
      >
        CC {captionsOn ? "On" : "Off"}
      </button>
    </div>
  );
}
