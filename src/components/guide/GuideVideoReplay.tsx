"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import VideoLightbox from "@/components/VideoLightbox";

export default function GuideVideoReplay({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const searchParams = useSearchParams();
  // Only auto-open when arriving from the homepage's "tutorial video" choice
  // (?video=open) - arriving via "want to see the guide" starts closed, and
  // the button below can always open it manually.
  const [open, setOpen] = useState(() => searchParams.get("video") === "open");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M8 5v14l11-7-11-7Z" />
        </svg>
        Replay altobay video tutorial
      </button>
      <VideoLightbox src={src} poster={poster} label={label} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
