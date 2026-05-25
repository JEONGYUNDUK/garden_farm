"use client";

import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";
import type { UtilityLink } from "@/lib/types";

function UtilityIcon({ kind }: { kind: UtilityLink["kind"] }) {
  const baseProps = {
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  if (kind === "phone") {
    return (
      <svg {...baseProps}>
        <path d="M6.8 4.5h3.1l1.3 3.8-1.8 1.8a14.7 14.7 0 0 0 4.5 4.5l1.8-1.8 3.8 1.3v3.1c0 .7-.5 1.2-1.2 1.2C10.4 19.4 4.6 13.6 4.6 5.7c0-.7.5-1.2 1.2-1.2Z" />
      </svg>
    );
  }

  if (kind === "kakao") {
    return (
      <svg {...baseProps}>
        <path d="M12 4.8c-4.4 0-7.9 2.8-7.9 6.3 0 2.3 1.5 4.3 3.8 5.4l-.8 3.5 3.5-2.3c.5.1 1 .1 1.4.1 4.4 0 7.9-2.8 7.9-6.3S16.4 4.8 12 4.8Z" />
      </svg>
    );
  }

  if (kind === "map") {
    return (
      <svg {...baseProps}>
        <path d="m8 18-4 2V6l4-2 4 2 4-2 4 2v14l-4-2-4 2-4-2Z" />
        <path d="M12 6v14" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/96 backdrop-blur">
      <Container>
        <div className="flex min-h-24 items-center justify-between gap-4">
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            className="inline-flex items-center gap-3 text-base text-[color:var(--accent-deep)]"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)]">
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </span>
            <span className="hidden sm:inline">menu</span>
          </button>

          <a href="#top" className="flex min-w-0 flex-col items-center text-center">
            <span className="font-editorial text-[2rem] leading-none text-[color:var(--accent-deep)] sm:text-[2.45rem]">
              {siteCopy.name}
            </span>
            <span className="mt-1 text-[0.68rem] tracking-[0.26em] text-[color:var(--muted)]">
              {siteCopy.headerNote}
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {siteCopy.utilityLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--accent-deep)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--background)]"
              >
                <UtilityIcon kind={item.kind} />
              </a>
            ))}
          </div>
        </div>

        <nav
          aria-label="주요 섹션"
          className="hidden items-center justify-center gap-8 border-t border-[color:var(--line)] py-4 md:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-stone-700 transition hover:text-[color:var(--accent-deep)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {open ? (
          <div
            id="mobile-navigation"
            className="border-t border-[color:var(--line)] py-4 md:hidden"
          >
            <nav aria-label="모바일 주요 섹션" className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-2xl px-3 py-3 text-sm text-stone-700 transition hover:bg-[#f4f1ec]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteCopy.utilityLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--accent-deep)]"
                  onClick={() => setOpen(false)}
                >
                  <UtilityIcon kind={item.kind} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
