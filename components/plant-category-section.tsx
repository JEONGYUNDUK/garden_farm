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
      <div className="grid gap-5 lg:grid-cols-3">
        {plantCategories.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6"
          >
            <span className="inline-flex rounded-full bg-emerald-700/10 px-3 py-1 text-xs font-semibold text-emerald-800">
              {item.badge}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-stone-950">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-stone-600">
              {item.description}
            </p>
            <p className="mt-5 text-sm text-stone-500">{item.useCase}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
