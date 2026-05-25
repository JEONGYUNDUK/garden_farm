import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function HeroSection() {
  return (
    <section className="pb-8 pt-6 sm:pb-10 sm:pt-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.28)] bg-[#1f2420] shadow-[0_28px_80px_rgba(36,36,36,0.14)]">
          <div className="absolute inset-0">
            <Image
              src="/images/placeholder-farm.svg"
              alt={siteCopy.heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,28,21,0.78)_0%,rgba(16,28,21,0.52)_45%,rgba(16,28,21,0.3)_100%)]" />
          </div>

          <div className="relative grid min-h-[35rem] items-end px-7 py-10 sm:px-10 sm:py-12 lg:min-h-[42rem] lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
            <div className="max-w-2xl text-white">
              <p className="text-[0.72rem] tracking-[0.28em] text-[#dbe3d6]">
                {siteCopy.heroEyebrow}
              </p>
              <h1 className="font-editorial mt-5 text-5xl leading-none sm:text-6xl lg:text-8xl">
                {siteCopy.heroTitle}
              </h1>
              <p className="mt-4 text-lg text-[#eef2ea] sm:text-xl">
                {siteCopy.heroSubtitle}
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#dfe7da] sm:text-lg">
                {siteCopy.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`#${sectionIds.gallery}`}
                  className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#1f3d2b]"
                >
                  {siteCopy.heroPrimaryCtaLabel}
                </a>
                <a
                  href={`#${sectionIds.location}`}
                  className="rounded-full bg-[#23412f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f3d2b]"
                >
                  {siteCopy.heroSecondaryCtaLabel}
                </a>
              </div>
            </div>

            <div className="mt-10 self-end lg:mt-0 lg:justify-self-end">
              <div className="max-w-sm border border-white/30 bg-[rgba(12,18,14,0.36)] p-5 text-white backdrop-blur-md sm:p-6">
                <p className="text-[0.72rem] tracking-[0.24em] text-[#d6dfd1]">
                  {siteCopy.heroOverlayEyebrow}
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight sm:text-[1.95rem]">
                  {siteCopy.heroOverlayTitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#e3eadf] sm:text-base">
                  {siteCopy.heroOverlayBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
