import { SectionShell } from "@/components/section-shell";
import { plantCategories } from "@/data/plants";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function PlantCategorySection() {
  return (
    <SectionShell
      id={sectionIds.plants}
      eyebrow={siteCopy.plantsSection.eyebrow}
      title={siteCopy.plantsSection.title}
      description={siteCopy.plantsSection.description}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {plantCategories.map((item, index) => (
          <article
            key={item.id}
            className={`flex min-h-[21rem] flex-col rounded-[1.5rem] border border-[color:var(--line)] p-7 shadow-[0_10px_26px_rgba(36,36,36,0.04)] ${item.tone}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs tracking-[0.18em] text-[color:var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--accent-deep)]">
                {item.badge}
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-semibold text-[color:var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              {item.description}
            </p>
            <div className="mt-auto pt-8">
              <p className="text-xs tracking-[0.18em] text-[color:var(--muted)]">
                추천 공간
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--foreground)]">
                {item.useCase}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
