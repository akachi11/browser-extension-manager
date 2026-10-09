"use client";

import { useThemeStore } from "@/store/useThemeStore";

function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" className="fill-red-500" />
      <path
        d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="flex items-center justify-between px-2 py-5 md:px-4">
      <div className="flex items-center gap-3">
        <LogoIcon />
        <h1 className="text-xl font-bold text-[var(--foreground)]">
          Extensions
        </h1>
      </div>
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:bg-[var(--hover)]"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
}
