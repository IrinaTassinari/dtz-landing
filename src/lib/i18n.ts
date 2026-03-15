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

export const supportedLanguages: { code: Lang; label: string; name: string }[] = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
];

export function isSupportedLang(lang: string): lang is Lang {
  return lang in translations;
}
