import Link from "next/link";

import { supportedLanguages, type Lang } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: Lang;
};

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label="Language switcher" className="flex flex-wrap gap-2">
      {supportedLanguages.map((language) => {
        const isActive = language.code === currentLang;

        return (
          <Link
            key={language.code}
            href={`/${language.code}`}
            className="rounded-full border px-3 py-2 text-sm font-semibold"
            style={
              isActive
                ? {
                    backgroundColor: "var(--flag-black)",
                    borderColor: "var(--flag-black)",
                    color: "var(--surface)",
                  }
                : {
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--line)",
                    color: "var(--muted)",
                  }
            }
          >
            {language.label}
          </Link>
        );
      })}
    </nav>
  );
}
