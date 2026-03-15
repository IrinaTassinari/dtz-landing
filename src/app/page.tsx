import { redirect } from "next/navigation";

export default function Home() {
  redirect("/de");
}

/**
 * Логика такая:
    src/app/page.tsx отвечает за /
    src/app/[lang]/page.tsx отвечает за /de, /en, /ru, /ar

  То есть:
    заходишь на / -> срабатывает redirect("/de")
    заходишь на /de -> рендерится [lang]/page.tsx
 */