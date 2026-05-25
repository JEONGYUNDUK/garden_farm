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
      <div className="grid gap-5 lg:grid-cols-2">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-7 shadow-[0_10px_26px_rgba(36,36,36,0.04)]"
          >
            <time
              dateTime={item.publishedAt}
              className="text-[0.72rem] tracking-[0.18em] text-[color:var(--accent)]"
            >
              {item.dateLabel}
            </time>
            <h3 className="mt-4 text-2xl font-semibold text-[color:var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
