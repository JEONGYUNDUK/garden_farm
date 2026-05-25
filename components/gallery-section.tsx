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
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className={`group relative overflow-hidden rounded-[1.5rem] bg-[#1f2420] shadow-[0_18px_50px_rgba(36,36,36,0.08)] ${
              item.feature ? "lg:row-span-2" : ""
            }`}
          >
            <div
              className={`relative ${item.feature ? "aspect-[5/4] lg:h-full" : "aspect-[4/3]"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={
                  item.feature
                    ? "(min-width: 1024px) 60vw, 100vw"
                    : "(min-width: 1024px) 30vw, 100vw"
                }
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,12,0.08),rgba(8,18,12,0.68))]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[0.72rem] tracking-[0.2em] text-[#d6dfd1]">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[#e7ede2] sm:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
