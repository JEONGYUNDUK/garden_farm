import { SectionShell } from "@/components/section-shell";
import { siteCopy } from "@/data/site";
import { sectionIds } from "@/lib/types";

export function LocationSection() {
  return (
    <SectionShell
      id={sectionIds.location}
      eyebrow={siteCopy.locationSection.eyebrow}
      title={siteCopy.locationSection.title}
      description={siteCopy.locationSection.description}
    >
      <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-[var(--panel)] p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm text-stone-500">주소</p>
          <p className="mt-3 text-2xl font-semibold text-stone-950">
            {siteCopy.locationLabel}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
            {siteCopy.locationDetail}
          </p>
          <p className="mt-4 text-sm text-stone-500">
            전화 문의: {siteCopy.phone}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={siteCopy.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-stone-50 transition hover:bg-stone-700"
          >
            길찾기 열기
          </a>
          <a
            href={siteCopy.kakaoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900 transition hover:border-stone-500"
          >
            카카오톡 채널
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
