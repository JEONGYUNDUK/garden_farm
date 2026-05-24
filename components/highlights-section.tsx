import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/data/site";

export function HighlightsSection() {
  return (
    <SectionShell
      id="highlights"
      eyebrow="Strengths"
      title={siteCopy.highlightsTitle}
      description={siteCopy.highlightsBody}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {siteCopy.highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6"
          >
            <p className="text-sm text-stone-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-stone-950">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
