"use client";

import { useState } from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function GuideVideoReplay({
  src,
  poster,
  label,
  subtitleBase,
  autoOpen = false,
}: {
  src: string;
  poster: string;
  label: string;
  subtitleBase?: string;
  /** Open the lightbox on load (set when arriving via the homepage "tutorial video" choice). */
  autoOpen?: boolean;
}) {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState(autoOpen);

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
        {t.common.replayVideo}
      </button>
      <VideoLightbox
        key={locale}
        src={src}
        poster={poster}
        label={label}
        subtitleBase={subtitleBase}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
