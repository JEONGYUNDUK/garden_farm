import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function HighlightsSection() {
  return (
    <SectionShell
      id={sectionIds.highlights}
      eyebrow="주요 안내"
      title={siteCopy.highlightsTitle}
      description={siteCopy.highlightsBody}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {siteCopy.featureCards.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group relative overflow-hidden rounded-[1.25rem] bg-[#1f2420] shadow-[0_18px_50px_rgba(36,36,36,0.1)]"
          >
            <div className="relative aspect-[5/4]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,12,0.18),rgba(8,18,12,0.58))] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(8,18,12,0.24),rgba(8,18,12,0.7))]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <span className="inline-flex rounded-full border border-white px-5 py-2 text-sm font-medium text-white">
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
