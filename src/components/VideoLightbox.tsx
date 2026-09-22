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
      // h-dvh (with h-screen as a same-value fallback) is set explicitly
      // because inset-0's auto height alone doesn't stretch this fixed flex
      // container to the full viewport once it has a video child sized by
      // max-height/aspect-ratio - it shrinks to the child's content height
      // instead, leaving a strip of the real page exposed at the bottom.
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
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
        className="my-auto max-h-[92vh] w-auto max-w-full rounded-2xl shadow-2xl"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
