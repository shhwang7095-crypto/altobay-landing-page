"use client";

import { useRef, useState } from "react";

export default function PhoneVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    if (playing) return;
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  }

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        controls={playing}
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        className="block h-full w-full object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play: ${label}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg viewBox="0 0 24 24" fill="#0b1120" className="h-6 w-6 translate-x-0.5">
              <path d="M8 5v14l11-7-11-7Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
