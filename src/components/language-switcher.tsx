"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { supportedLanguages, type Lang } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: Lang;
};

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentLanguage =
    supportedLanguages.find((language) => language.code === currentLang) ??
    supportedLanguages[0];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--line)",
          color: "var(--foreground)",
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose language"
      >
        <span>Language</span>
        <span
          className="rounded-full px-2 py-0.5 text-xs font-semibold"
          style={{
            backgroundColor: "var(--accent-soft)",
            color: "var(--accent-strong)",
          }}
        >
          {currentLanguage.label}
        </span>
        <span
          className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--accent-strong)" }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {open ? (
        <div
          className="absolute right-0 z-20 mt-3 min-w-[11rem] rounded-[1.25rem] border p-2 shadow-[0_18px_40px_rgba(76,55,19,0.12)]"
          style={{
            backgroundColor: "var(--elevated)",
            borderColor: "var(--line)",
          }}
          role="menu"
          aria-label="Languages"
        >
          <div className="grid gap-1">
            {supportedLanguages.map((language) => {
              const isActive = language.code === currentLang;

              return (
                <Link
                  key={language.code}
                  href={`/${language.code}`}
                  onClick={() => setOpen(false)}
                  className="rounded-[0.9rem] px-3 py-2 text-sm font-semibold"
                  style={
                    isActive
                      ? {
                          backgroundColor: "var(--accent-soft)",
                          color: "var(--accent-strong)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "var(--foreground)",
                        }
                  }
                  role="menuitem"
                >
                  {language.label} - {language.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
