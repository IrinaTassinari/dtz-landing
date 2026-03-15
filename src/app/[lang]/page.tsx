import LanguageSwitcher from "@/components/language-switcher";
import { isSupportedLang, translations } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = isSupportedLang(routeLang) ? routeLang : "de";
  const t = translations[lang];
  const isArabic = lang === "ar";
  const heroTitleClassName = isArabic
    ? "text-[3rem] font-normal leading-[1.08] sm:text-[4.8rem]"
    : "text-[3rem] font-normal leading-[0.98] tracking-[0.02em] sm:text-[4.9rem]";
  const sectionTitleClassName = isArabic
    ? "text-3xl font-normal leading-tight sm:text-[4rem]"
    : "text-3xl font-normal leading-tight tracking-[0.02em] sm:text-[4rem]";
  const cardGradient =
    "linear-gradient(180deg, rgba(255,253,248,1) 0%, rgba(251,246,235,1) 100%)";

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:py-16">
      <div className="flex justify-end">
        <LanguageSwitcher currentLang={lang} />
      </div>

      <section
        className="relative mt-6 overflow-hidden rounded-[2rem] border px-6 py-8 shadow-[0_18px_50px_rgba(76,55,19,0.08)] sm:px-10 sm:py-12"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--line)",
        }}
      >
        <div
          className="absolute right-12 top-0 h-24 w-2 rounded-b-full"
          style={{ backgroundColor: "var(--flag-black)" }}
        />
        <div
          className="absolute right-9 top-0 h-24 w-2 rounded-b-full"
          style={{ backgroundColor: "var(--flag-red)" }}
        />
        <div
          className="absolute right-6 top-0 h-24 w-2 rounded-b-full"
          style={{ backgroundColor: "var(--flag-gold)" }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-center lg:gap-10">
          <div className="flex max-w-[40rem] flex-col gap-6">
            <h1
              data-display="true"
              className={heroTitleClassName}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.heroTitle}
            </h1>

            <p
              className="max-w-[36rem] text-lg leading-8"
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.heroSubtitle}
            </p>

            <p
              className="max-w-[34rem] text-base leading-7"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.heroNote}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                className="rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: "var(--accent-strong)" }}
              >
                {t.primaryCta}
              </button>
              <button
                className="rounded-full border px-5 py-3 text-sm font-semibold"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent-strong)",
                  backgroundColor: "var(--accent-soft)",
                }}
              >
                {t.secondaryCta}
              </button>
            </div>
          </div>

          <div
            className="mx-auto w-full max-w-[360px] rounded-[1.5rem] border p-3 shadow-[0_14px_30px_rgba(76,55,19,0.08)] lg:mt-14 lg:mr-4"
            style={{
              backgroundColor: "#fffdf8",
              borderColor: "var(--line)",
            }}
          >
            <div
              className="rounded-[1.1rem] border p-4"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.24em]"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    DTZ
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                    Lesen • Aufgabe 3
                  </p>
                </div>
                <div
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent-strong)",
                  }}
                >
                  Beta
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div
                  className="h-3 w-4/5 rounded-full"
                  style={{ backgroundColor: "var(--surface-strong)" }}
                />
                <div
                  className="h-3 w-full rounded-full"
                  style={{ backgroundColor: "var(--surface-strong)" }}
                />
                <div
                  className="h-3 w-5/6 rounded-full"
                  style={{ backgroundColor: "var(--surface-strong)" }}
                />
              </div>

              <div className="mt-6 space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                    style={{
                      borderColor: "var(--line)",
                      backgroundColor:
                        item === 2 ? "var(--accent-soft)" : "transparent",
                    }}
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full border text-xs"
                      style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent-strong)",
                      }}
                    >
                      {item}
                    </span>
                    <div
                      className="h-2.5 flex-1 rounded-full"
                      style={{ backgroundColor: "var(--surface-strong)" }}
                    />
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl px-4 py-4"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent-strong)" }}
                >
                  AI Mentor
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                  Detailed explanations and feedback in your native language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(239,226,191,0.55) 0%, rgba(251,246,235,0.92) 34%, rgba(251,246,235,1) 100%)",
          borderColor: "var(--line)",
        }}
      >
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-black)" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-red)" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-gold)" }}
              />
            </div>
          </div>
          <h2
            data-display="true"
            className={sectionTitleClassName}
            style={{ color: "var(--foreground)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.audienceTitle}
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: t.audienceCardOneTitle,
              text: t.audienceCardOneText,
            },
            {
              title: t.audienceCardTwoTitle,
              text: t.audienceCardTwoText,
            },
            {
              title: t.audienceCardThreeTitle,
              text: t.audienceCardThreeText,
            },
          ].map((card, index) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border p-6 shadow-[0_12px_28px_rgba(76,55,19,0.06)]"
              style={{
                background: cardGradient,
                borderColor: "var(--line)",
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                style={{
                  backgroundColor:
                    index === 1 ? "var(--accent-soft)" : "var(--surface-strong)",
                  color: "var(--accent-strong)",
                }}
              >
                0{index + 1}
              </div>

              <h3
                data-display="true"
                className={`mt-6 min-h-[7.5rem] text-2xl font-light leading-tight ${isArabic ? "" : "uppercase tracking-[0.03em]"}`}
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {card.title}
              </h3>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: "var(--muted)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(251,246,235,1) 0%, rgba(255,253,248,1) 100%)",
          borderColor: "var(--line)",
        }}
      >
        <div className="max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-black)" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-red)" }}
              />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--flag-gold)" }}
              />
            </div>
          </div>
          <h2
            data-display="true"
            className={sectionTitleClassName}
            style={{ color: "var(--foreground)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.problemTitle}
          </h2>
          <p
            className="mt-4 max-w-[42rem] text-lg leading-8"
            style={{ color: "var(--muted)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.problemIntro}
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[
            {
              fact: t.problemFactOne,
              sourceName: "Hamburg.de",
              href: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/aktuelles/pressemeldungen/bundesregierung-stoppt-zulassung-zu-integrationskursen-fuer-bundesweit-130-000-menschen-1144832",
            },
            {
              fact: t.problemFactTwo,
              sourceName: "The Local",
              href: "https://www.thelocal.de/20260205/german-government-quietly-freezes-applications-for-integration-courses",
            },
            {
              fact: t.problemFactThree,
              sourceName: "",
              href: "",
            },
            {
              fact: t.problemFactFour,
              sourceName: "Berlin.de VHS",
              href: "https://www.berlin.de/vhs/kurse/deutsch-integration/deutsch-und-integrationsangebote/",
            },
          ].map((item, index) => (
            <article
              key={item.fact}
              className="rounded-[1.75rem] border p-6 shadow-[0_12px_28px_rgba(76,55,19,0.06)]"
              style={{
                background: cardGradient,
                borderColor: "var(--line)",
              }}
            >
              <p
                className="text-xl leading-8"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {item.fact}
              </p>
              <div className="mt-6">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Source: {item.sourceName}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
