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
        {guideItems.map((item, index) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-7 shadow-[0_10px_26px_rgba(36,36,36,0.04)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs tracking-[0.2em] text-[color:var(--muted)]">
                0{index + 1}
              </span>
              <span className="h-px flex-1 bg-[color:var(--soil)]" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[color:var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              {item.description}
            </p>
            <p className="mt-6 rounded-[1rem] bg-[#f5f5f0] px-4 py-4 text-sm font-medium leading-6 text-[color:var(--accent-deep)]">
              {item.point}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
