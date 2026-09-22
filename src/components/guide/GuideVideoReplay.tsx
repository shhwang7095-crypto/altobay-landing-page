"use client";

import { useState } from "react";
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
  // Remounting VideoLightbox (via key) re-triggers its own "open on mount"
  // behavior, so replaying just means giving it a fresh instance.
  const [replayKey, setReplayKey] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => setReplayKey((k) => k + 1)}
        className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M8 5v14l11-7-11-7Z" />
        </svg>
        Replay altobay video tutorial
      </button>
      <VideoLightbox key={replayKey} src={src} poster={poster} label={label} />
    </>
  );
}
