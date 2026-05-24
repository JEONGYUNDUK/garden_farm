import { SectionShell } from "@/components/section-shell";
import { newsItems } from "@/data/news";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function NewsSection() {
  return (
    <SectionShell
      id={sectionIds.news}
      eyebrow={siteCopy.newsSection.eyebrow}
      title={siteCopy.newsSection.title}
      description={siteCopy.newsSection.description}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6"
          >
            <time dateTime={item.publishedAt} className="text-sm text-stone-500">
              {item.dateLabel}
            </time>
            <h3 className="mt-3 text-2xl font-semibold text-stone-950">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-stone-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
