"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/i18n/config";

type SubtitleChoice = Locale | "off";

export default function VideoLightbox({
  src,
  poster,
  label,
  subtitleBase,
  open,
  onClose,
}: {
  src: string;
  poster: string;
  label: string;
  /** `/videos/subtitles/<name>` - expects `<name>.en.vtt`, `.ko.vtt`, `.es.vtt`. */
  subtitleBase?: string;
  open: boolean;
  onClose: () => void;
}) {
  const { locale, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [choice, setChoice] = useState<SubtitleChoice>(locale);
  const [cue, setCue] = useState("");
  const [nativeCaptions, setNativeCaptions] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // The chosen language's track stays "hidden" (cues still fire) so we can draw
  // them ourselves above the captions burned into the video; the others are off.
  useEffect(() => {
    const video = videoRef.current;
    if (!open || !video || !subtitleBase) return;
    const tracks = Array.from(video.textTracks);
    tracks.forEach((track) => {
      track.mode = track.language === choice ? "hidden" : "disabled";
    });
    const active = tracks.find((track) => track.language === choice);
    if (!active) return;
    // Work the current cue out from the playback time instead of trusting
    // `cuechange` alone - browsers can skip it right after a seek.
    const update = () => {
      const now = video.currentTime;
      const lines: string[] = [];
      for (const cue of Array.from(active.cues ?? []) as VTTCue[]) {
        if (now >= cue.startTime && now < cue.endTime) lines.push(cue.text);
      }
      setCue(lines.join("\n"));
    };
    const events = ["timeupdate", "seeking", "seeked", "loadeddata", "play", "pause"];
    // The file loads after the track goes "hidden"; refresh once its cues arrive.
    const trackEl = Array.from(video.querySelectorAll("track")).find((el) => el.srclang === choice);
    events.forEach((name) => video.addEventListener(name, update));
    active.addEventListener("cuechange", update);
    trackEl?.addEventListener("load", update);
    const frame = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(frame);
      events.forEach((name) => video.removeEventListener(name, update));
      active.removeEventListener("cuechange", update);
      trackEl?.removeEventListener("load", update);
    };
  }, [open, choice, subtitleBase]);

  // Our overlay isn't part of the <video>, so it disappears in the browser's own
  // fullscreen. Hand over to the native subtitle renderer while that lasts.
  useEffect(() => {
    const video = videoRef.current;
    if (!open || !video || !subtitleBase) return;
    function sync(fullscreen: boolean) {
      const active = Array.from(video!.textTracks).find((track) => track.language === choice);
      if (active) active.mode = fullscreen ? "showing" : "hidden";
      setNativeCaptions(fullscreen);
    }
    const onChange = () => sync(document.fullscreenElement === video);
    const onBegin = () => sync(true);
    const onEnd = () => sync(false);
    document.addEventListener("fullscreenchange", onChange);
    video.addEventListener("webkitbeginfullscreen", onBegin);
    video.addEventListener("webkitendfullscreen", onEnd);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      video.removeEventListener("webkitbeginfullscreen", onBegin);
      video.removeEventListener("webkitendfullscreen", onEnd);
    };
  }, [open, choice, subtitleBase]);

  if (!open) return null;

  return (
    <div
      // h-dvh (with h-screen as a same-value fallback) is set explicitly
      // because inset-0's auto height alone doesn't stretch this fixed flex
      // container to the full viewport once it has a video child sized by
      // max-height/aspect-ratio - it shrinks to the child's content height
      // instead, leaving a strip of the real page exposed at the bottom.
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.common.closeVideo}
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

      {subtitleBase && (
        <div
          role="group"
          aria-label={t.common.subtitles}
          onClick={(e) => e.stopPropagation()}
          className="absolute left-5 top-5 flex items-center gap-0.5 rounded-full bg-white/10 p-1 text-xs font-semibold text-white"
        >
          <span aria-hidden="true" className="px-2 text-white/70">
            CC
          </span>
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              aria-label={LOCALE_NAMES[code]}
              aria-pressed={choice === code}
              onClick={() => setChoice(code)}
              className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                choice === code ? "bg-white text-black" : "hover:bg-white/20"
              }`}
            >
              {code}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={choice === "off"}
            onClick={() => setChoice("off")}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              choice === "off" ? "bg-white text-black" : "hover:bg-white/20"
            }`}
          >
            {t.common.subtitlesOff}
          </button>
        </div>
      )}

      {/* All guide videos are 9:16. The width comes from the height cap so the
          wrapper always matches the video box, which the subtitles are placed in. */}
      <div
        className="relative my-auto aspect-[9/16] w-[min(100%,calc(92vh*9/16))] [container-type:inline-size]"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          controls
          playsInline
          poster={poster}
          aria-label={label}
          className="block h-full w-full rounded-2xl object-contain shadow-2xl"
        >
          <source src={src} type="video/mp4" />
          {subtitleBase &&
            LOCALES.map((code) => (
              <track
                key={code}
                kind="subtitles"
                src={`${subtitleBase}.${code}.vtt`}
                srcLang={code}
                label={LOCALE_NAMES[code]}
              />
            ))}
        </video>

        {subtitleBase && choice !== "off" && !nativeCaptions && cue && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[20%] flex justify-center px-[5%]"
          >
            <p
              className="max-w-full rounded-lg bg-black/75 px-3 py-1.5 text-center font-semibold text-white"
              style={{ fontSize: "clamp(11px, 3.8cqw, 17px)", lineHeight: 1.4, whiteSpace: "pre-line" }}
            >
              {cue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
