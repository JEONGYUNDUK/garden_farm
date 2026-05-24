import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/data/site";

export function IntroSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title={siteCopy.introTitle}
      description={siteCopy.introBody}
    >
      <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-[var(--panel)] p-8 sm:grid-cols-2">
        {siteCopy.introPoints.map((point) => (
          <p key={point} className="text-base leading-7 text-stone-700">
            {point}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}
