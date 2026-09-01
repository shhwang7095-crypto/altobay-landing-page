export default function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-muted px-6 py-10 text-center">
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-muted-foreground">
        <path
          d="M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .8-.4l.8-1.2a1 1 0 0 1 .8-.4h4.8a1 1 0 0 1 .8.4l.8 1.2a1 1 0 0 0 .8.4H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <p className="text-xs font-medium text-muted-foreground">Screenshot needed:</p>
      <p className="max-w-xs text-sm text-foreground">{label}</p>
    </div>
  );
}
