import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { galleryItems } from "@/data/gallery";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function GallerySection() {
  return (
    <SectionShell
      id={sectionIds.gallery}
      eyebrow={siteCopy.gallerySection.eyebrow}
      title={siteCopy.gallerySection.title}
      description={siteCopy.gallerySection.description}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[var(--panel)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
