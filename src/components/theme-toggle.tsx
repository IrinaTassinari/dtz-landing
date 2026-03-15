"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle ml-3 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border"
      style={{
        backgroundColor: "var(--elevated)",
        borderColor: "var(--accent)",
        color: "var(--accent-strong)",
        boxShadow: "0 8px 18px rgba(122, 91, 29, 0.1)",
      }}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
      aria-pressed={theme === "dark"}
    >
      <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.2" />
            <path d="M12 19.3v2.2" />
            <path d="M21.5 12h-2.2" />
            <path d="M4.7 12H2.5" />
            <path d="m18.7 5.3-1.6 1.6" />
            <path d="m6.9 17.1-1.6 1.6" />
            <path d="m18.7 18.7-1.6-1.6" />
            <path d="M6.9 6.9 5.3 5.3" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.2 15.4A8.5 8.5 0 1 1 8.6 3.8a7.2 7.2 0 1 0 11.6 11.6Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
