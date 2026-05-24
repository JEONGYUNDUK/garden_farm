import { SectionShell } from "@/components/section-shell";
import { guideItems } from "@/data/guides";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function GuideSection() {
  return (
    <SectionShell
      id={sectionIds.guides}
      eyebrow={siteCopy.guideSection.eyebrow}
      title={siteCopy.guideSection.title}
      description={siteCopy.guideSection.description}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {guideItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6"
          >
            <h3 className="text-xl font-semibold text-stone-950">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-stone-600">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-medium text-emerald-800">
              {item.point}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
