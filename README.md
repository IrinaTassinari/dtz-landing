# DTZ Landing

Landing page for DTZ exam preparation with multilingual support, light and dark theme, and responsive layout.

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- App Router
- `next/font` for font loading and optimization
- JSON locales for multilingual content

## Installation

Install dependencies:

```bash
npm install
```

Run the project in development mode:

```bash
npm run dev
```

Open in the browser:

```text
http://localhost:3000
```

## Main Commands

Run the dev server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Project Structure

- `src/app` - routes and layout
- `src/app/[lang]/page.tsx` - the main multilingual landing page
- `src/components` - UI components, including language and theme switchers
- `src/locales` - translations stored as JSON files
- `src/lib/i18n.ts` - supported languages and translation dictionary configuration

## Localization

Languages are provided through JSON files in `src/locales`.

The project currently uses the following route format:

```text
/:lang
```

Examples:

- `/de`
- `/en`
- `/ru`
- `/ar`

## Deploy on Vercel

The project is deployed on Vercel: https://dtz-landing.vercel.app/de

## Additional Notes

Detailed notes about architecture, adding languages, adding sections, and cost estimates are available in [docs.md](docs.md).



---



# DTZ Landing

Лендинг для подготовки к экзамену DTZ с поддержкой нескольких языков, светлой и темной темы и адаптивной версткой.

## Стек

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- App Router
- `next/font` для подключения и оптимизации шрифтов
- JSON-локали для мультиязычности

## Установка

Установить зависимости:

```bash
npm install
```

Запустить проект в режиме разработки:

```bash
npm run dev
```

Открыть в браузере:

```text
http://localhost:3000
```

## Основные команды

Запуск dev-сервера:

```bash
npm run dev
```

Проверка линтером:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Запуск production-сборки локально:

```bash
npm run start
```

## Структура проекта

- `src/app` — маршруты и layout
- `src/app/[lang]/page.tsx` — основная мультиязычная страница лендинга
- `src/components` — UI-компоненты, включая переключатели языка и темы
- `src/locales` — переводы в JSON
- `src/lib/i18n.ts` — конфигурация поддерживаемых языков и словаря переводов

## Локализация

Языки подключаются через JSON-файлы в `src/locales`.

Сейчас проект использует маршрут вида:

```text
/:lang
```

Например:

- `/de`
- `/en`
- `/ru`
- `/ar`

## Деплой на Vercel

Сайт задеплоен на Vercel: https://dtz-landing.vercel.app/de

## Дополнительно

Подробные ответы по архитектуре, добавлению языков, добавлению секций и оценке стоимости собраны в [docs.md](docs.md).
