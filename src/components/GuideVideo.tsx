"use client";

import { useRef, useState } from "react";

export default function GuideVideo({
  src,
  poster,
  label,
  tutorialLabel = 'Click to see "Altobay Video Tutorial"',
}: {
  src: string;
  poster: string;
  label: string;
  tutorialLabel?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [awake, setAwake] = useState(false);

  function wake() {
    if (awake) return;
    setAwake(true);
    videoRef.current?.play().catch(() => {});
  }

  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden py-4">
      <div
        className={`flex flex-col items-center gap-0.5 transition-opacity duration-300 ${
          awake ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={awake}
      >
        <span className="text-sm font-semibold text-foreground">{tutorialLabel}</span>
        <svg className="h-6 w-6 animate-bounce text-brand-blue" viewBox="0 0 24 40" fill="none">
          <path
            d="M12 2v28M12 30l-7.5-7.5M12 30l7.5-7.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className="origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: awake ? "rotate(0deg) translateY(0)" : "rotate(-8deg) translateY(6px)" }}
      >
        <div className="relative mx-auto w-[260px] max-w-full overflow-hidden rounded-[2.2rem] border-4 border-brand-navy-soft bg-brand-navy p-2 shadow-2xl">
          <div className="absolute left-1/2 top-3.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/40" />
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.6rem] bg-black">
            <video
              ref={videoRef}
              controls={awake}
              playsInline
              preload="metadata"
              poster={poster}
              aria-label={label}
              className="block h-full w-full object-contain"
            >
              <source src={src} type="video/mp4" />
            </video>

            {!awake && (
              <button
                type="button"
                onClick={wake}
                aria-label={`Play: ${label}`}
                className="absolute inset-0 flex items-center justify-center bg-black"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5 translate-x-0.5">
                    <path d="M8 5v14l11-7-11-7Z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
