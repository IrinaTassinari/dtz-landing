import ar from "@/locales/ar.json";
import de from "@/locales/de.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

export const translations = {
  ar,
  de,
  en,
  ru,
};

export type Lang = keyof typeof translations;

export const supportedLanguages: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export function isSupportedLang(lang: string): lang is Lang {
  return lang in translations;
}
