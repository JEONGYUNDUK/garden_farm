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
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[1.75rem] bg-[#23412f] p-8 text-white shadow-[0_18px_50px_rgba(31,61,43,0.2)] sm:p-10">
          <p className="text-[0.72rem] tracking-[0.24em] text-[#d6dfd1]">
            {siteCopy.locationPanelEyebrow}
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            {siteCopy.locationPanelTitle}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#e4ece0]">
            {siteCopy.locationDetail}
          </p>
          <div className="mt-8 grid gap-4">
            {siteCopy.locationNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1rem] border border-white/15 bg-white/8 px-5 py-4"
              >
                <p className="text-sm leading-7 text-[#eef3eb]">{note}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6">
          <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_10px_26px_rgba(36,36,36,0.04)] sm:p-10">
            <div className="grid gap-5">
              <div>
                <p className="text-sm text-[color:var(--muted)]">주소</p>
                <p className="mt-2 text-2xl font-semibold leading-snug text-[color:var(--foreground)]">
                  {siteCopy.locationLabel}
                </p>
              </div>
              <div>
                <p className="text-sm text-[color:var(--muted)]">전화 문의</p>
                <a
                  href={`tel:${siteCopy.phone}`}
                  className="mt-2 inline-block text-xl font-semibold text-[color:var(--accent-deep)]"
                >
                  {siteCopy.phone}
                </a>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={siteCopy.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[color:var(--accent-deep)] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[color:var(--accent)]"
                >
                  {siteCopy.directionsCtaLabel}
                </a>
                <a
                  href={siteCopy.kakaoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[color:var(--accent-deep)] px-6 py-3 text-center text-sm font-medium text-[color:var(--accent-deep)] transition hover:bg-[#f5f5f0]"
                >
                  {siteCopy.kakaoCtaLabel}
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-[#f5f5f0] p-8 sm:p-10">
            <p className="text-[0.72rem] tracking-[0.24em] text-[color:var(--accent)]">
              {siteCopy.inquiryTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
              {siteCopy.inquiryDescription}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {siteCopy.inquiryActions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  className={`rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                    action.style === "solid"
                      ? "bg-[color:var(--accent-deep)] text-white hover:bg-[color:var(--accent)]"
                      : "border border-[color:var(--accent-deep)] bg-white text-[color:var(--accent-deep)] hover:bg-[#fbfaf6]"
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
