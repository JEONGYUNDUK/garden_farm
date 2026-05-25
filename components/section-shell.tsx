import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import type { SectionId } from "@/lib/types";

type SectionShellProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-10 border-t border-[color:var(--soil)] pt-5 lg:mb-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <p className="text-[0.72rem] tracking-[0.26em] text-[color:var(--accent)] lg:w-56 lg:flex-none">
            {eyebrow}
          </p>
          <div className="max-w-3xl">
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl lg:mt-0">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
