"use client";

import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(246,241,231,0.92)] backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href="#top"
          className="text-lg font-semibold tracking-[0.08em] text-stone-900"
        >
          {siteCopy.name}
        </a>
        <nav aria-label="주요 섹션" className="hidden gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-stone-700 transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
          className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          메뉴
        </button>
      </Container>
      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-black/5 bg-[#f6f1e7] md:hidden"
        >
          <Container className="flex flex-col py-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-3 text-sm text-stone-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
