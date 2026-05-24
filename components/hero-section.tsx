import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            {siteCopy.heroEyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            {siteCopy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {siteCopy.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`#${sectionIds.plants}`}
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
            >
              {siteCopy.heroPrimaryCtaLabel}
            </a>
            <a
              href={`#${sectionIds.location}`}
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-500"
            >
              {siteCopy.heroSecondaryCtaLabel}
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-[var(--panel)] p-6 shadow-[0_20px_80px_rgba(62,74,51,0.12)]">
          <Image
            src="/images/placeholder-farm.svg"
            alt={siteCopy.heroImageAlt}
            width={960}
            height={720}
            className="h-auto w-full rounded-[1.5rem]"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
