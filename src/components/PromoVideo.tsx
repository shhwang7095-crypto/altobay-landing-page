"use client";

import { useEffect, useRef, useState } from "react";

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionsOn, setCaptionsOn] = useState(true);

  useEffect(() => {
    const track = videoRef.current?.textTracks?.[0];
    if (track) track.mode = captionsOn ? "showing" : "hidden";
  }, [captionsOn]);

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
