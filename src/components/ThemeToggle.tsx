"use client";

import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted ${className ?? ""}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="hidden h-4 w-4 dark:block">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 dark:hidden">
        <path
          fill="currentColor"
          d="M20.7 14.9a8.5 8.5 0 1 1-9.6-13 1 1 0 0 1 1.1 1.5 6.5 6.5 0 0 0 8 8.9 1 1 0 0 1 1.2 1.3 8.5 8.5 0 0 1-0.7 1.3Z"
        />
      </svg>
    </button>
  );
}
