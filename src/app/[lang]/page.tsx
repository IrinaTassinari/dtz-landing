import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggle from "@/components/theme-toggle";
import { isSupportedLang, translations } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  //routeLang = то, что пришло из URL
  const { lang: routeLang } = await params;
  //lang = проверенный язык
  const lang = isSupportedLang(routeLang) ? routeLang : "de";
  //t = нужный JSON-объект для этого языка
  const t = translations[lang];
  const isArabic = lang === "ar";
  const isRussian = lang === "ru";
  const solutionIncludedBadges = ["DTZ", "12x", "LNG", "Audio"];
  const solutionFeatureBadges = ["AI", "Focus", "DE", "Words", "Media", "25+"];
  const heroTitleClassName = isArabic
    ? "text-[3rem] font-normal leading-[1.08] sm:text-[4.8rem]"
    : isRussian
      ? "text-[2.5rem] font-semibold leading-[1.02] sm:text-[3.9rem]"
      : "text-[3rem] font-normal leading-[0.98] tracking-[0.02em] sm:text-[4.9rem]";
  const sectionTitleClassName = isArabic
    ? "text-3xl font-normal leading-tight sm:text-[4rem]"
    : isRussian
      ? "text-[2rem] font-semibold leading-tight sm:text-[3rem]"
      : "text-3xl font-normal leading-tight tracking-[0.02em] sm:text-[4rem]";
  const cardGradient =
    "linear-gradient(180deg, rgba(var(--elevated-rgb),1) 0%, rgba(var(--surface-rgb),1) 100%)";
  const sectionGradient =
    "linear-gradient(180deg, rgba(var(--accent-soft-rgb),0.55) 0%, rgba(var(--surface-rgb),0.92) 34%, rgba(var(--surface-rgb),1) 100%)";
  const baseSectionGradient =
    "linear-gradient(180deg, rgba(var(--surface-rgb),1) 0%, rgba(var(--elevated-rgb),1) 100%)";

  return (
    <main
      lang={lang}
      className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:py-16"
    >
      <div className="flex items-center justify-end gap-6">
        <LanguageSwitcher currentLang={lang} />
        <ThemeToggle />
      </div>


{/* 01 section - Уверенно сдай экзамен по немецкому */}
      <section
        className="relative mt-6 overflow-hidden rounded-[2rem] border px-6 py-8 shadow-[0_18px_50px_rgba(76,55,19,0.08)] sm:px-10 sm:py-12"
        // style={{
        //   backgroundColor: "var(--surface)",
        //   borderColor: "var(--line)",
        // }}
        style={{
          background: sectionGradient,
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
              backgroundColor: "var(--elevated)",
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


{/* 02 section - Это для тебя, если... */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: sectionGradient,
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


 {/* 03 section - Курсы сокращают, экзамен остается */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        // style={{
        //   background:
        //     "linear-gradient(180deg, rgba(251,246,235,1) 0%, rgba(255,253,248,1) 100%)",
        //   borderColor: "var(--line)",
        // }}
        style={{
          background: sectionGradient,
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
          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--accent-strong)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.problemEyebrow}
          </p>
          <h2
            data-display="true"
            className={`mt-3 ${sectionTitleClassName}`}
            style={{ color: "var(--foreground)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.problemTitle}
          </h2>
          <p
            className="mt-4 text-lg leading-8"
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
              sources: [
                {
                  name: "Hamburg.de",
                  href: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/aktuelles/pressemeldungen/bundesregierung-stoppt-zulassung-zu-integrationskursen-fuer-bundesweit-130-000-menschen-1144832",
                },
                {
                  name: "IamExpat",
                  href: "https://www.iamexpat.de/education/education-news/bamf-confirms-german-integration-course-cuts",
                },
              ],
            },
            {
              fact: t.problemFactTwo,
              sources: [
                {
                  name: "The Local",
                  href: "https://www.thelocal.de/20260205/german-government-quietly-freezes-applications-for-integration-courses",
                },
              ],
            },
            {
              fact: t.problemFactThree,
              sources: [
                {
                  name: "IIK Duesseldorf",
                  href: "https://www.iik-duesseldorf.de/en/german/general-german-courses/general-exams/dtz/#:~:text=Costs,a%20consultation%20or%20registration%20appointment.",
                },
              ],
            },
            {
              fact: t.problemFactFour,
              sourceName: "Sprachschule Aktiv - Kosten für Deutschkurse",
              hrefTwo: "https://smartergerman.com/blog/how-much-does-it-actually-cost-to-learn-german/",
              sourceNameTwo: "SmarterGerman",
              href: "https://www.sprachschule-aktiv.de/kosten-fuer-deutschkurse-in-deutschland/",
            },
          ].map((item) => (
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
              <div className="mt-6 flex flex-col gap-2">
                {item.sources?.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Source: {source.name}
                  </a>
                ))}
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
                {item.hrefTwo ? (
                  <a
                    href={item.hrefTwo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Source: {item.sourceNameTwo}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>


 {/* 04 section - Мы открыли бесплатный доступ  */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        // style={{
        //   background:
        //     "linear-gradient(180deg, rgba(251,246,235,1) 0%, rgba(255,253,248,1) 100%)",
        //   borderColor: "var(--line)",
        // }}
        style={{
          background: sectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.solutionEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.solutionTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.solutionIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <article
              className="rounded-[1.75rem] border p-6 shadow-[0_12px_28px_rgba(76,55,19,0.06)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(var(--accent-soft-rgb),0.65) 0%, rgba(var(--elevated-rgb),1) 100%)",
                borderColor: "var(--line)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-strong)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {t.solutionStatLabel}
                  </p>
                  <p
                    data-display="true"
                    className="mt-3 text-5xl font-normal leading-none sm:text-6xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.solutionStatValue}
                  </p>
                </div>
                <div
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--accent-strong)",
                  }}
                >
                  {t.solutionStatFootnote}
                </div>
              </div>

              <p
                className="mt-5 text-lg leading-8"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.solutionStatText}
              </p>
              <p
                className="mt-4 text-base leading-7"
                style={{ color: "var(--muted)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.solutionComparison}
              </p>
            </article>

            <article
              className="rounded-[1.75rem] border p-6 shadow-[0_12px_28px_rgba(76,55,19,0.06)]"
              style={{
                background: cardGradient,
                borderColor: "var(--line)",
              }}
            >
              <div
                className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--accent-strong)",
                }}
              >
                {t.solutionBetaBadge}
              </div>
              <p
                className="mt-5 text-lg leading-8"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.solutionBetaText}
              </p>
              <div
                className="mt-6 rounded-[1.4rem] border p-5"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent-strong)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.solutionDealLabel}
                </p>
                <p
                  className="mt-3 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.solutionDealText}
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex w-10 flex-col gap-1.5">
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-black)" }}
                />
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-red)" }}
                />
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-gold)" }}
                />
              </div>
              <h3
                data-display="true"
                className="text-2xl font-normal leading-tight sm:text-3xl"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.solutionIncludedTitle}
              </h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {t.solutionIncludedItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border p-5 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(var(--elevated-rgb),1) 0%, rgba(var(--surface-rgb),0.98) 72%, rgba(var(--accent-soft-rgb),0.38) 100%)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(180deg, rgba(var(--surface-strong-rgb),1) 0%, rgba(var(--accent-soft-rgb),0.88) 100%)"
                          : "linear-gradient(180deg, rgba(var(--accent-soft-rgb),1) 0%, rgba(var(--highlight-rgb),0.72) 100%)",
                      color: "var(--accent-strong)",
                      boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                    }}
                  >
                    {solutionIncludedBadges[index]}
                  </div>
                  <p
                    className="mt-4 text-[1.02rem] leading-8"
                    style={{ color: "var(--foreground)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex w-10 flex-col gap-1.5">
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-black)" }}
                />
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-red)" }}
                />
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--flag-gold)" }}
                />
              </div>
              <h3
                data-display="true"
                className="text-2xl font-normal leading-tight sm:text-3xl"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.solutionFeaturesTitle}
              </h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.solutionFeatureItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border p-5 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(var(--elevated-rgb),1) 0%, rgba(var(--surface-rgb),0.97) 70%, rgba(var(--accent-soft-rgb),0.34) 100%)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold"
                      style={{
                        background:
                          index % 2 === 0
                            ? "linear-gradient(180deg, rgba(var(--accent-soft-rgb),1) 0%, rgba(var(--highlight-rgb),0.72) 100%)"
                            : "linear-gradient(180deg, rgba(var(--surface-strong-rgb),1) 0%, rgba(var(--accent-soft-rgb),0.88) 100%)",
                        color: "var(--accent-strong)",
                        boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                      }}
                    >
                      {solutionFeatureBadges[index]}
                    </div>
                    <p
                      className="text-[1.02rem] leading-8"
                      style={{ color: "var(--foreground)" }}
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


{/* 05 section - Как устроен экзамен DTZ */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: baseSectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.examEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.examTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.examIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: t.examPartOneName,
                meta: t.examPartOneMeta,
                details: t.examPartOneDetails,
                status: t.examPartOneStatus,
                badge: "H",
              },
              {
                name: t.examPartTwoName,
                meta: t.examPartTwoMeta,
                details: t.examPartTwoDetails,
                status: t.examPartTwoStatus,
                badge: "L",
              },
              {
                name: t.examPartThreeName,
                meta: t.examPartThreeMeta,
                details: t.examPartThreeDetails,
                status: t.examPartThreeStatus,
                badge: "W",
              },
              {
                name: t.examPartFourName,
                meta: t.examPartFourMeta,
                details: t.examPartFourDetails,
                status: t.examPartFourStatus,
                badge: "S",
              },
            ].map((part, index) => (
              <article
                key={part.name}
                className="rounded-[1.5rem] border p-5 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                style={{
                    background:
                      "linear-gradient(180deg, rgba(var(--elevated-rgb),1) 0%, rgba(var(--surface-rgb),0.98) 72%, rgba(var(--accent-soft-rgb),0.28) 100%)",
                  borderColor: "var(--line)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold"
                    style={{
                      background:
                        index === 3
                          ? "linear-gradient(180deg, rgba(240,229,210,1) 0%, rgba(216,191,128,0.62) 100%)"
                          : "linear-gradient(180deg, rgba(var(--accent-soft-rgb),1) 0%, rgba(var(--highlight-rgb),0.72) 100%)",
                      color: "var(--accent-strong)",
                      boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                    }}
                  >
                    {part.badge}
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor:
                        index === 3 ? "var(--surface-strong)" : "var(--accent-soft)",
                      color: "var(--accent-strong)",
                    }}
                  >
                    {part.status}
                  </div>
                </div>

                <div className="mt-5">
                  <h3
                    data-display="true"
                    className="text-2xl font-normal leading-tight"
                    style={{ color: "var(--foreground)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {part.name}
                  </h3>
                  <p
                    className="mt-2 text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--accent-strong)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {part.meta}
                  </p>
                  <p
                    className="mt-4 text-base leading-7"
                    style={{ color: "var(--foreground)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {part.details}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border p-6 shadow-[0_12px_28px_rgba(76,55,19,0.06)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(var(--accent-soft-rgb),0.55) 0%, rgba(var(--surface-rgb),1) 100%)",
              borderColor: "var(--line)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-2xl">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent-strong)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.examLevelsTitle}
                </p>
                <p
                  data-display="true"
                  className="mt-3 text-3xl font-normal leading-tight sm:text-[2.6rem]"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.examLevelsList}
                </p>
                <p
                  className="mt-4 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.examLevelsText}
                </p>
              </div>
              <div className="flex w-full max-w-[12rem] flex-col gap-2">
                {["B1", "A2", "<A2"].map((level, index) => (
                  <div
                    key={level}
                    className="rounded-full px-4 py-2 text-center text-sm font-semibold"
                    style={{
                      backgroundColor:
                        index === 0 ? "var(--flag-gold)" : "var(--surface)",
                      color:
                        index === 0 ? "var(--foreground)" : "var(--accent-strong)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


{/* 06 section - Как работает платформа */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: sectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.stepsEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.stepsTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.stepsIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {[
              {
                label: t.stepsCardOneLabel,
                title: t.stepsCardOneTitle,
                text: t.stepsCardOneText,
                screenTitle: "Create account",
                badge: "30s",
              },
              {
                label: t.stepsCardTwoLabel,
                title: t.stepsCardTwoTitle,
                text: t.stepsCardTwoText,
                screenTitle: "Choose module",
                badge: "DTZ",
              },
              {
                label: t.stepsCardThreeLabel,
                title: t.stepsCardThreeTitle,
                text: t.stepsCardThreeText,
                screenTitle: "Practice + AI",
                badge: "AI",
              },
            ].map((step, index) => (
              <article
                key={step.title}
                className="grid grid-rows-[minmax(18.5rem,18.5rem)_1fr] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                style={{
                    background:
                      "linear-gradient(180deg, rgba(var(--elevated-rgb),1) 0%, rgba(var(--surface-rgb),0.98) 72%, rgba(var(--accent-soft-rgb),0.3) 100%)",
                  borderColor: "var(--line)",
                }}
              >
                <div
                  className="rounded-[1.35rem] border p-3"
                  style={{
                    borderColor: "var(--line)",
                    backgroundColor: "var(--elevated)",
                  }}
                >
                  <div className="flex items-center justify-between">
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
                    <div
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--accent-soft)",
                        color: "var(--accent-strong)",
                      }}
                    >
                      {step.badge}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      {step.screenTitle}
                    </p>

                    {index === 0 ? (
                      <div className="mt-4 space-y-3">
                        <div
                          className="h-11 rounded-2xl border"
                          style={{
                            borderColor: "var(--line)",
                            backgroundColor: "var(--surface)",
                          }}
                        />
                        <div
                          className="h-11 rounded-2xl border"
                          style={{
                            borderColor: "var(--line)",
                            backgroundColor: "var(--surface)",
                          }}
                        />
                        <div
                          className="h-11 rounded-2xl"
                          style={{ backgroundColor: "var(--accent-strong)" }}
                        />
                      </div>
                    ) : null}

                    {index === 1 ? (
                      <div className="mt-4 grid gap-3">
                        {["Horen", "Lesen", "Schreiben"].map((item, itemIndex) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border px-4 py-3"
                            style={{
                              borderColor: "var(--line)",
                              backgroundColor:
                                itemIndex === 1 ? "var(--accent-soft)" : "var(--surface)",
                            }}
                          >
                            <span
                              className="text-sm font-medium"
                              style={{ color: "var(--foreground)" }}
                            >
                              {item}
                            </span>
                            <span
                              className="text-xs font-semibold"
                              style={{ color: "var(--accent-strong)" }}
                            >
                              Start
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {index === 2 ? (
                      <div className="mt-4 space-y-3">
                        <div
                          className="rounded-2xl border px-4 py-3"
                          style={{
                            borderColor: "var(--line)",
                            backgroundColor: "var(--surface)",
                          }}
                        >
                          <div
                            className="h-3 w-2/3 rounded-full"
                            style={{ backgroundColor: "var(--surface-strong)" }}
                          />
                          <div
                            className="mt-3 h-3 w-full rounded-full"
                            style={{ backgroundColor: "var(--surface-strong)" }}
                          />
                        </div>
                        <div
                          className="rounded-2xl px-4 py-3"
                          style={{ backgroundColor: "var(--accent-soft)" }}
                        >
                          <p
                            className="text-xs font-semibold uppercase tracking-[0.16em]"
                            style={{ color: "var(--accent-strong)" }}
                          >
                            AI Mentor
                          </p>
                          <div
                            className="mt-3 h-3 w-5/6 rounded-full"
                            style={{ backgroundColor: "rgba(122,91,29,0.18)" }}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="mt-6 flex flex-col">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-strong)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {step.label}
                  </p>
                  <h3
                    data-display="true"
                    className="mt-3 min-h-[3.5rem] text-2xl font-normal leading-tight"
                    style={{ color: "var(--foreground)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-4 min-h-[8.75rem] text-base leading-7"
                    style={{ color: "var(--muted)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


{/* 07 section - Почему мы это делаем — "Мы сами иммигранты" */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: baseSectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.storyEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.storyTitle}
            </h2>
            <p
              className="mt-5 text-lg leading-8"
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.storyIntro}
            </p>
            <p
              className="mt-5 text-base leading-7"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.storyClosing}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              t.storyPointOne,
              t.storyPointTwo,
              t.storyPointThree,
              t.storyPointFour,
            ].map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border p-5 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--line)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: "var(--highlight)",
                      boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                    }}
                  />
                    <p
                      className="text-base leading-7"
                      style={{ color: "var(--foreground)" }}
                      dir={isArabic ? "rtl" : "ltr"}
                  >
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


{/* 08 section -  Бесплатный доступ — ограниченное предложение */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: sectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.pricingEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.pricingTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.pricingIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              t.pricingPointOne,
              t.pricingPointTwo,
              t.pricingPointThree,
              t.pricingPointFour,
            ].map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border p-5 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--line)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: "var(--highlight)",
                      boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                    }}
                  />
                  <p
                    className="text-base leading-7"
                    style={{ color: "var(--foreground)" }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)]">
            <article
              className="rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-strong)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.pricingCardLabel}
              </p>
              <h3
                data-display="true"
                className="mt-3 text-3xl font-normal leading-tight"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.pricingCardTitle}
              </h3>
              <p
                className="mt-4 text-base leading-7"
                style={{ color: "var(--muted)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.pricingCardText}
              </p>
            </article>

            <article
              className="rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(var(--accent-soft-rgb),0.74) 0%, rgba(var(--elevated-rgb),1) 100%)",
                borderColor: "var(--line)",
              }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-strong)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.pricingCtaLabel}
              </p>
              <p
                className="mt-4 text-lg leading-8"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.pricingCtaText}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
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
                    backgroundColor: "var(--surface)",
                  }}
                >
                  {t.secondaryCta}
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>


{/* 09 section - Превью заданий / Скриншоты */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: baseSectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.previewEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.previewTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.previewIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article
              className="grid grid-rows-[minmax(24rem,24rem)_1fr] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div
                className="rounded-[1.35rem] border p-4"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--elevated)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-black)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-red)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-gold)" }} />
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                  >
                    Audio
                  </div>
                </div>
                <div className="mt-4 grid gap-4">
                  <div
                    className="rounded-2xl border px-4 py-4"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full" style={{ backgroundColor: "var(--accent-strong)" }} />
                      <div className="flex-1">
                        <div className="h-2.5 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                        <div className="mt-2 flex justify-between text-[11px] font-medium" style={{ color: "var(--muted)" }}>
                          <span>00:12</span>
                          <span>01:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <div className="h-3 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--accent-soft)" }}
                  >
                    <div className="h-3 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <div className="h-3 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <h3
                  data-display="true"
                  className="min-h-[3.5rem] text-2xl font-normal leading-tight"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardOneTitle}
                </h3>
                <p
                  className="mt-4 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardOneText}
                </p>
              </div>
            </article>

            <article
              className="grid grid-rows-[minmax(24rem,24rem)_1fr] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div
                className="rounded-[1.35rem] border p-4"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--elevated)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-black)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-red)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-gold)" }} />
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                  >
                    Text
                  </div>
                </div>
                <div className="mt-4 grid gap-3">
                  <div
                    className="rounded-2xl border px-4 py-4"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <div className="h-3 w-5/6 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-2 h-3 w-full rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-2 h-3 w-4/5 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--surface-strong)", color: "var(--accent-strong)" }}
                    >
                      A
                    </span>
                    <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--accent-soft)" }}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--surface-strong)", color: "var(--accent-strong)" }}
                    >
                      B
                    </span>
                    <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--surface-strong)", color: "var(--accent-strong)" }}
                    >
                      C
                    </span>
                    <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <h3
                  data-display="true"
                  className="min-h-[3.5rem] text-2xl font-normal leading-tight"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardTwoTitle}
                </h3>
                <p
                  className="mt-4 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardTwoText}
                </p>
              </div>
            </article>

            <article
              className="grid grid-rows-[minmax(24rem,24rem)_1fr] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div
                className="rounded-[1.35rem] border p-4"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--elevated)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-black)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-red)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-gold)" }} />
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                  >
                    Write
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div
                    className="rounded-2xl border px-4 py-4"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <div className="h-3 w-2/3 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-2 h-3 w-full rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                  <div
                    className="min-h-[10rem] rounded-2xl border px-4 py-4"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--elevated)" }}
                  >
                    <div className="h-3 w-4/5 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-3 h-3 w-full rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-3 h-3 w-5/6 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                    <div className="mt-3 h-3 w-3/4 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <h3
                  data-display="true"
                  className="min-h-[3.5rem] text-2xl font-normal leading-tight"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardThreeTitle}
                </h3>
                <p
                  className="mt-4 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardThreeText}
                </p>
              </div>
            </article>

            <article
              className="grid grid-rows-[minmax(24rem,24rem)_1fr] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div
                className="rounded-[1.35rem] border p-4"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--elevated)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-black)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-red)" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--flag-gold)" }} />
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                  >
                    {t.previewCardFourBadge}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl px-4 py-4" style={{ backgroundColor: "var(--accent-soft)" }}>
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      {t.previewCardFourNativeLabel}
                    </p>
                    <div className="mt-3 h-3 w-5/6 rounded-full" style={{ backgroundColor: "rgba(122,91,29,0.18)" }} />
                    <div className="mt-3 h-3 w-full rounded-full" style={{ backgroundColor: "rgba(122,91,29,0.18)" }} />
                    <div className="mt-3 h-3 w-4/5 rounded-full" style={{ backgroundColor: "rgba(122,91,29,0.18)" }} />
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      {t.previewCardFourWhyLabel}
                    </p>
                    <div className="mt-3 h-3 w-3/4 rounded-full" style={{ backgroundColor: "var(--surface-strong)" }} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <h3
                  data-display="true"
                  className="min-h-[3.5rem] text-2xl font-normal leading-tight"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardFourTitle}
                </h3>
                <p
                  className="mt-4 text-base leading-7"
                  style={{ color: "var(--muted)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.previewCardFourText}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>


{/* 10 section -  Для преподавателей — "Используйте для вашего класса" */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: sectionGradient,
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

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="max-w-4xl">
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-strong)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.teachersEyebrow}
              </p>
              <h2
                data-display="true"
                className={`mt-3 ${sectionTitleClassName}`}
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.teachersTitle}
              </h2>
              <p
                className="mt-4 text-lg leading-8"
                style={{ color: "var(--foreground)" }}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {t.teachersIntro}
              </p>
            </div>

            <article
              className="rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(76,55,19,0.08)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: "var(--highlight)",
                    boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                  }}
                />
                <p
                  className="text-base leading-7"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.teachersPointOne}
                </p>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <div
                  className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: "var(--highlight)",
                    boxShadow: "0 8px 18px rgba(122,91,29,0.12)",
                  }}
                />
                <p
                  className="text-base leading-7"
                  style={{ color: "var(--foreground)" }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {t.teachersPointTwo}
                </p>
              </div>

              <a
                href="mailto:teachers@dtz-exam.de"
                className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: "var(--accent-strong)" }}
              >
                {t.teachersCta}
              </a>
            </article>
          </div>
        </div>
      </section>

{/* 11 section -  FAQ Частые вопросы */}
      <section
        className="relative mt-12 rounded-[2rem] border px-6 py-8 sm:mt-28 sm:px-8 sm:py-10"
        style={{
          background: baseSectionGradient,
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

          <div className="max-w-4xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-strong)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.faqEyebrow}
            </p>
            <h2
              data-display="true"
              className={`mt-3 ${sectionTitleClassName}`}
              style={{ color: "var(--foreground)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.faqTitle}
            </h2>
            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--muted)" }}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t.faqIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {[
              [
                {
                  title: t.faqExamTitle,
                  items: [
                    { q: t.faqExamQ1, a: t.faqExamA1 },
                    { q: t.faqExamQ2, a: t.faqExamA2 },
                    { q: t.faqExamQ3, a: t.faqExamA3 },
                  ],
                },
                {
                  title: t.faqFeaturesTitle,
                  items: [
                    { q: t.faqFeaturesQ1, a: t.faqFeaturesA1 },
                    { q: t.faqFeaturesQ2, a: t.faqFeaturesA2 },
                    { q: t.faqFeaturesQ3, a: t.faqFeaturesA3 },
                    { q: t.faqFeaturesQ4, a: t.faqFeaturesA4 },
                  ],
                },
              ],
              [
                {
                  title: t.faqPlatformTitle,
                  items: [
                    { q: t.faqPlatformQ1, a: t.faqPlatformA1 },
                    { q: t.faqPlatformQ2, a: t.faqPlatformA2 },
                    { q: t.faqPlatformQ3, a: t.faqPlatformA3 },
                    { q: t.faqPlatformQ4, a: t.faqPlatformA4 },
                    { q: t.faqPlatformQ5, a: t.faqPlatformA5 },
                    { q: t.faqPlatformQ6, a: t.faqPlatformA6 },
                    { q: t.faqPlatformQ7, a: t.faqPlatformA7 },
                  ],
                },
                {
                  title: t.faqTeachersTitle,
                  items: [
                    { q: t.faqTeachersQ1, a: t.faqTeachersA1 },
                    { q: t.faqTeachersQ2, a: t.faqTeachersA2 },
                    { q: t.faqTeachersQ3, a: t.faqTeachersA3 },
                    { q: t.faqTeachersQ4, a: t.faqTeachersA4 },
                  ],
                },
              ],
            ].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-8">
                {column.map((group) => (
                  <div key={group.title}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex w-10 flex-col gap-1.5">
                        <span
                          className="h-1.5 w-10 rounded-full"
                          style={{ backgroundColor: "var(--flag-black)" }}
                        />
                        <span
                          className="h-1.5 w-10 rounded-full"
                          style={{ backgroundColor: "var(--flag-red)" }}
                        />
                        <span
                          className="h-1.5 w-10 rounded-full"
                          style={{ backgroundColor: "var(--flag-gold)" }}
                        />
                      </div>
                      <h3
                        data-display="true"
                        className="text-2xl font-normal leading-tight"
                        style={{ color: "var(--foreground)" }}
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <details
                          key={item.q}
                          className="group rounded-[1.35rem] border px-5 py-4 shadow-[0_12px_28px_rgba(76,55,19,0.05)]"
                          style={{
                            backgroundColor: "var(--surface)",
                            borderColor: "var(--line)",
                          }}
                        >
                          <summary
                            className="flex cursor-pointer list-none items-start justify-between gap-4 text-base leading-7 font-medium"
                            style={{ color: "var(--foreground)" }}
                            dir={isArabic ? "rtl" : "ltr"}
                          >
                            <span>{item.q}</span>
                            <span
                              className="mt-1 shrink-0 text-lg leading-none transition-transform group-open:rotate-45"
                              style={{ color: "var(--accent-strong)" }}
                            >
                              +
                            </span>
                          </summary>
                          <div
                            className="mt-4 border-t pt-4 text-base leading-7"
                            style={{
                              color: "var(--muted)",
                              borderColor: "var(--line)",
                            }}
                            dir={isArabic ? "rtl" : "ltr"}
                          >
                            {item.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative mt-12 mb-8 rounded-[2rem] border px-6 py-10 sm:mt-28 sm:px-8 sm:py-14"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--accent-soft-rgb),0.72) 0%, rgba(var(--surface-rgb),0.96) 42%, rgba(var(--elevated-rgb),1) 100%)",
          borderColor: "var(--line)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex justify-center">
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

          <p
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--accent-strong)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.finalCtaEyebrow}
          </p>
          <h2
            data-display="true"
            className={`mt-4 ${sectionTitleClassName}`}
            style={{ color: "var(--foreground)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.finalCtaTitle}
          </h2>
          <div className="mt-6 flex justify-center">
            <button
              className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: "var(--accent-strong)" }}
            >
              {t.primaryCta}
            </button>
          </div>
          <p
            className="mt-5 text-sm leading-6"
            style={{ color: "var(--muted)" }}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.finalCtaNote}
          </p>
        </div>
      </section>
    </main>
  );
}
