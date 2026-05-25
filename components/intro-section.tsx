import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function IntroSection() {
  return (
    <SectionShell
      id={sectionIds.about}
      eyebrow="덕앤플라워 소개"
      title={siteCopy.introTitle}
      description={siteCopy.introBody}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.5rem] bg-[color:var(--background-strong)] p-8 shadow-[0_16px_40px_rgba(36,36,36,0.05)] sm:p-10">
          <p className="font-editorial max-w-2xl text-3xl leading-[1.35] text-[color:var(--accent-deep)] sm:text-4xl">
            {siteCopy.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {siteCopy.highlights.map((item) => (
              <div
                key={item.label}
                className="border-t border-[color:var(--soil)] pt-4"
              >
                <p className="text-xs tracking-[0.18em] text-[color:var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--foreground)]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-[1.5rem] border border-[color:var(--line)] bg-[#f4f1ec] p-7 sm:p-8">
            <p className="text-[0.72rem] tracking-[0.2em] text-[color:var(--muted)]">
              위치
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-[color:var(--foreground)]">
              {siteCopy.locationLabel}
            </p>
          </article>
          {siteCopy.introPoints.map((point) => (
            <article
              key={point}
              className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-7"
            >
              <p className="text-base leading-8 text-[color:var(--muted)]">
                {point}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
