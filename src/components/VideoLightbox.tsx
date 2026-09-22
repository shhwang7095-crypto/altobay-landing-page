"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoLightbox({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const [open, setOpen] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-6 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <video
        ref={videoRef}
        controls
        playsInline
        poster={poster}
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
        // Reserve a bit of empty space below the picture (box taller than the
        // source's own ratio, content pinned to the top) so the native
        // control bar has its own room instead of sitting on top of the
        // baked-in caption text near the bottom of the footage.
        className="my-auto max-h-[75vh] w-auto max-w-full rounded-2xl bg-black object-contain object-top shadow-2xl"
        style={{ aspectRatio: "1080 / 2180" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
