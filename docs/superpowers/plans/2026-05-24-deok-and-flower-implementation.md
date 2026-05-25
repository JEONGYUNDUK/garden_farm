# Deok & Flower Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, data-driven Duck & Flower farm homepage that is ready to push to GitHub and deploy on Vercel.

**Architecture:** Use a static Next.js App Router app with one landing page composed of anchor-linked sections. Keep reusable content in `data/` TypeScript modules, render through focused UI components, and avoid any backend or database so the site stays simple to maintain and fast to deploy.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, ESLint

---

## Redesign Addendum

This implementation now includes a full UI/UX redesign pass guided by the approved British-style garden centre moodboard. The codebase should keep its current static, data-driven architecture while updating the visual system and top-level layout for stronger brand perception.

### Additional files to modify in this redesign pass

- `app/globals.css`: replace the current light-gray palette with a white, ivory, sage, and dark-green system
- `app/page.tsx`: rebalance section order and add persistent mobile CTA treatment if needed
- `components/header.tsx`: rebuild as left menu, centered text logo, right utility links
- `components/hero-section.tsx`: convert to large image hero with overlay copy and dual CTA
- `components/highlights-section.tsx`: repurpose as the three main image cards below hero
- `components/intro-section.tsx`: refine farm introduction into a more editorial split layout
- `components/plant-category-section.tsx`: expand to four categories and unify card styling
- `components/gallery-section.tsx`: push image-first layout and calmer overlay treatment
- `components/guide-section.tsx`: tone down utility cards so they fit the premium layout
- `components/news-section.tsx`: keep concise update cards with stronger spacing
- `components/location-section.tsx`: combine visit guidance and inquiry actions in one structured contact section
- `components/footer.tsx`: redesign to a dark footer with address, links, and copyright
- `data/site.ts`: centralize revised hero copy, header utility links, feature cards, contact CTAs, and footer copy
- `data/plants.ts`: add the fourth category and align category wording to the new brand voice
- `lib/types.ts`: extend shared types for utility links, feature cards, and inquiry actions

### Redesign implementation tasks

### Task R1: Update the visual system and shared data types

**Files:**
- Modify: `app/globals.css`
- Modify: `lib/types.ts`
- Modify: `data/site.ts`
- Modify: `data/plants.ts`

Deliver a new color system and extend the data model so the UI can render header utility links, main image cards, and inquiry actions without hardcoding them in components.

### Task R2: Rebuild the top of page experience

**Files:**
- Modify: `components/header.tsx`
- Modify: `components/hero-section.tsx`
- Modify: `components/highlights-section.tsx`

Rework the top of the site into a white utility header, an image-led hero with overlay copy, and three prominent image cards for introduction, plant guidance, and directions.

### Task R3: Refine the section layouts and footer

**Files:**
- Modify: `components/intro-section.tsx`
- Modify: `components/plant-category-section.tsx`
- Modify: `components/gallery-section.tsx`
- Modify: `components/guide-section.tsx`
- Modify: `components/news-section.tsx`
- Modify: `components/location-section.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/page.tsx`

Bring all remaining sections into the same tone-and-manner, keep the page informational rather than commercial, and finish with a dark footer plus mobile-friendly contact actions.

## File Structure

Planned files and responsibilities:

- `package.json`: project scripts and dependencies
- `tsconfig.json`: TypeScript configuration
- `next.config.ts`: Next.js configuration
- `postcss.config.mjs`: Tailwind PostCSS wiring
- `.gitignore`: ignore Next.js, node_modules, and local output
- `app/layout.tsx`: root HTML structure and metadata
- `app/page.tsx`: homepage section composition
- `app/globals.css`: Tailwind imports, CSS variables, and shared visual system
- `components/header.tsx`: sticky header with desktop/mobile anchor navigation
- `components/footer.tsx`: closing brand and contact footer
- `components/section-shell.tsx`: reusable section wrapper
- `components/hero-section.tsx`: opening hero with CTA
- `components/intro-section.tsx`: farm story content
- `components/highlights-section.tsx`: farm metrics and strengths
- `components/plant-category-section.tsx`: plant cards from data
- `components/gallery-section.tsx`: gallery cards from data
- `components/guide-section.tsx`: plant care tips from data
- `components/news-section.tsx`: farm news cards from data
- `components/location-section.tsx`: address and contact CTA block
- `components/ui/container.tsx`: shared width container helper
- `data/navigation.ts`: nav labels and anchor IDs
- `data/site.ts`: site-wide copy, contact, metadata constants
- `data/plants.ts`: plant category cards
- `data/gallery.ts`: gallery entries
- `data/guides.ts`: care guide entries
- `data/news.ts`: news entries
- `lib/types.ts`: shared TypeScript interfaces for data-driven sections
- `public/images/placeholder-farm.svg`: brand-friendly placeholder hero image
- `public/images/placeholder-gallery-1.svg`: gallery placeholder
- `public/images/placeholder-gallery-2.svg`: gallery placeholder
- `public/images/placeholder-gallery-3.svg`: gallery placeholder
- `README.md`: local run, GitHub push, and Vercel deploy notes

### Task 1: Scaffold the Next.js Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

- [ ] **Step 1: Write the failing smoke test for the homepage entry file**

Create a temporary test note in the plan to define the first expected behavior: the root page must render a top-level `<main>` and the brand name `덕앤플라워`.

```tsx
// Expected shape for app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>덕앤플라워</h1>
    </main>
  );
}
```

- [ ] **Step 2: Run the build command to verify the project does not exist yet**

Run: `npm run build`

Expected: command fails because `package.json` does not exist yet.

- [ ] **Step 3: Write the minimal project configuration**

Create `package.json` with the exact contents below.

```json
{
  "name": "deok-and-flower",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.3.2",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  },
  "devDependencies": {
    "@types/node": "22.15.29",
    "@types/react": "19.1.6",
    "@types/react-dom": "19.1.5",
    "eslint": "9.27.0",
    "eslint-config-next": "15.3.2",
    "tailwindcss": "3.4.13",
    "typescript": "5.8.3",
    "postcss": "8.5.3",
    "autoprefixer": "10.4.21"
  }
}
```

Create `tsconfig.json`.

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `next.config.ts`.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

Create `postcss.config.mjs`.

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

Create `.gitignore`.

```gitignore
node_modules
.next
out
.vercel
.superpowers
*.log
```

- [ ] **Step 4: Add the minimal root app files**

Create `app/layout.tsx`.

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "덕앤플라워 | 영천 화분·묘목 농원",
  description:
    "경북 영천에서 만나는 화분과 묘목 농원, 덕앤플라워의 소개와 방문 정보를 한눈에 살펴보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

Create `app/page.tsx`.

```tsx
export default function Home() {
  return (
    <main>
      <h1>덕앤플라워</h1>
    </main>
  );
}
```

Create `app/globals.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f6f1e7;
  --foreground: #1f2a1f;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: "Pretendard", "Noto Sans KR", system-ui, sans-serif;
}
```

- [ ] **Step 5: Run install and build to verify the scaffold passes**

Run: `npm install`

Expected: dependencies install successfully.

Run: `npm run build`

Expected: Next.js build completes successfully.

- [ ] **Step 6: Commit the scaffold**

```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs .gitignore app
git commit -m "feat: scaffold deok and flower homepage"
```

### Task 2: Add the shared data model and content files

**Files:**
- Create: `lib/types.ts`
- Create: `data/navigation.ts`
- Create: `data/site.ts`
- Create: `data/plants.ts`
- Create: `data/gallery.ts`
- Create: `data/guides.ts`
- Create: `data/news.ts`

- [ ] **Step 1: Write the failing type usage test in the page**

Update `app/page.tsx` so it imports `navigationItems` before the data file exists.

```tsx
import { navigationItems } from "@/data/navigation";

export default function Home() {
  return <main>{navigationItems.length}</main>;
}
```

- [ ] **Step 2: Run the build to verify the missing module failure**

Run: `npm run build`

Expected: FAIL with a module resolution error for `@/data/navigation`.

- [ ] **Step 3: Create the shared types**

Create `lib/types.ts`.

```ts
export type NavItem = {
  id: string;
  label: string;
};

export type PlantCategory = {
  title: string;
  description: string;
  useCase: string;
  badge: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

export type GuideItem = {
  title: string;
  description: string;
  point: string;
};

export type NewsItem = {
  title: string;
  description: string;
  dateLabel: string;
};
```

- [ ] **Step 4: Create the content data files**

Create `data/navigation.ts`.

```ts
import type { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { id: "about", label: "농원 소개" },
  { id: "highlights", label: "농원 강점" },
  { id: "plants", label: "식물 안내" },
  { id: "gallery", label: "농원 둘러보기" },
  { id: "guides", label: "관리 팁" },
  { id: "news", label: "농원 소식" },
  { id: "location", label: "오시는 길" },
];
```

Create `data/site.ts`.

```ts
export const siteCopy = {
  name: "덕앤플라워",
  subtitle: "경북 영천에서 만나는 화분과 묘목 농원",
  description:
    "덕앤플라워는 영천 화산 효정리의 밭과 창고를 바탕으로 화분, 묘목, 조경용 식물을 차분하게 준비하는 농원입니다.",
  locationLabel: "경북 영천시 화산면 효정리",
  phone: "010-0000-0000",
  directionsUrl: "https://map.naver.com/",
  kakaoUrl: "https://pf.kakao.com/",
};
```

Create `data/plants.ts`.

```ts
import type { PlantCategory } from "@/lib/types";

export const plantCategories: PlantCategory[] = [
  {
    title: "화분",
    description: "실내와 야외에 어울리는 화분을 정갈하게 소개합니다.",
    useCase: "가정, 카페, 작은 정원",
    badge: "관리 쉬움",
  },
  {
    title: "묘목",
    description: "전원주택 마당과 텃밭에 어울리는 묘목 정보를 담습니다.",
    useCase: "마당, 전원주택, 텃밭",
    badge: "계절 추천",
  },
  {
    title: "조경용 식물",
    description: "공간 분위기를 정리해 주는 조경용 식물을 살펴볼 수 있습니다.",
    useCase: "매장 앞, 정원, 진입 공간",
    badge: "현장감",
  },
];
```

Create `data/gallery.ts`.

```ts
import type { GalleryItem } from "@/lib/types";

export const galleryItems: GalleryItem[] = [
  {
    title: "햇살이 드는 농원 전경",
    description: "넓은 밭과 차분한 작업 흐름을 한눈에 보여주는 대표 장면입니다.",
    image: "/images/placeholder-gallery-1.svg",
  },
  {
    title: "창고와 준비 공간",
    description: "300평 창고를 바탕으로 계절별 식물과 자재를 정리합니다.",
    image: "/images/placeholder-gallery-2.svg",
  },
  {
    title: "식물을 고르는 시간",
    description: "방문자가 천천히 둘러볼 수 있는 농원의 분위기를 담습니다.",
    image: "/images/placeholder-gallery-3.svg",
  },
];
```

Create `data/guides.ts`.

```ts
import type { GuideItem } from "@/lib/types";

export const guideItems: GuideItem[] = [
  {
    title: "물주기 기본",
    description: "겉흙이 마른 뒤 충분히 물을 주는 기본 원칙을 안내합니다.",
    point: "과습보다 관찰이 먼저입니다.",
  },
  {
    title: "햇빛 위치",
    description: "식물 종류에 따라 반양지와 양지의 차이를 쉽게 설명합니다.",
    point: "처음 일주일은 환경 적응 기간입니다.",
  },
  {
    title: "계절 관리",
    description: "봄과 가을 중심으로 분갈이와 성장 시기를 소개합니다.",
    point: "겨울에는 물 양을 조금 줄입니다.",
  },
];
```

Create `data/news.ts`.

```ts
import type { NewsItem } from "@/lib/types";

export const newsItems: NewsItem[] = [
  {
    title: "덕앤플라워 준비 기록",
    description: "농원 공간을 다듬고 첫 식물 라인업을 정리하는 과정을 전합니다.",
    dateLabel: "2026.05",
  },
  {
    title: "계절 식물 소개 예정",
    description: "봄과 여름에 어울리는 식물을 차례로 소개할 예정입니다.",
    dateLabel: "2026.06",
  },
];
```

- [ ] **Step 5: Run the build to verify the data layer passes**

Run: `npm run build`

Expected: build passes with the imported content modules.

- [ ] **Step 6: Commit the data layer**

```bash
git add lib/types.ts data app/page.tsx
git commit -m "feat: add homepage content data modules"
```

### Task 3: Build the shared layout and navigation components

**Files:**
- Create: `components/ui/container.tsx`
- Create: `components/header.tsx`
- Create: `components/footer.tsx`
- Create: `components/section-shell.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Write the failing usage test for the header component**

Update `app/page.tsx` to import a non-existent `Header`.

```tsx
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main />
    </>
  );
}
```

- [ ] **Step 2: Run the build to verify the missing component failure**

Run: `npm run build`

Expected: FAIL with `Cannot find module '@/components/header'`.

- [ ] **Step 3: Create the shared container and shell components**

Create `components/ui/container.tsx`.

```tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>{children}</div>;
}
```

Create `components/section-shell.tsx`.

```tsx
import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionShellProps = {
  id: string;
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
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Create the navigation components**

Create `components/header.tsx`.

```tsx
"use client";

import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(246,241,231,0.92)] backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-[0.08em] text-stone-900">
          {siteCopy.name}
        </a>
        <nav className="hidden gap-6 md:flex">
          {navigationItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-stone-700 transition hover:text-stone-950">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-stone-300 px-4 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          메뉴
        </button>
      </Container>
      {open ? (
        <div className="border-t border-black/5 bg-[#f6f1e7] md:hidden">
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
```

Create `components/footer.tsx`.

```tsx
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container className="flex flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-stone-900">{siteCopy.name}</p>
          <p>{siteCopy.locationLabel}</p>
        </div>
        <p>정성껏 준비한 식물과 공간을 차분히 소개하는 영천 농원 홈페이지입니다.</p>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 5: Compose the layout shell in the homepage**

Update `app/page.tsx`.

```tsx
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main className="min-h-[60vh]" />
      <Footer />
    </div>
  );
}
```

Update `app/globals.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f6f1e7;
  --foreground: #1f2a1f;
  --panel: rgba(255, 251, 245, 0.78);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(177, 197, 169, 0.32), transparent 28rem),
    linear-gradient(180deg, #f8f3ea 0%, #f6f1e7 100%);
  color: var(--foreground);
  font-family: "Pretendard", "Noto Sans KR", system-ui, sans-serif;
}
```

- [ ] **Step 6: Run the build to verify the shared shell passes**

Run: `npm run build`

Expected: build passes with header/footer layout.

- [ ] **Step 7: Commit the shared shell**

```bash
git add components app/globals.css app/page.tsx
git commit -m "feat: add shared layout and navigation"
```

### Task 4: Implement the hero, intro, and highlights sections

**Files:**
- Create: `components/hero-section.tsx`
- Create: `components/intro-section.tsx`
- Create: `components/highlights-section.tsx`
- Modify: `data/site.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Write the failing usage test for the hero section**

Update `app/page.tsx` to import `HeroSection` before the file exists.

```tsx
import { HeroSection } from "@/components/hero-section";
```

- [ ] **Step 2: Run the build to verify the missing hero failure**

Run: `npm run build`

Expected: FAIL with missing `@/components/hero-section`.

- [ ] **Step 3: Expand site-wide content**

Update `data/site.ts`.

```ts
export const siteCopy = {
  name: "덕앤플라워",
  subtitle: "경북 영천에서 만나는 화분과 묘목 농원",
  description:
    "덕앤플라워는 영천 화산 효정리의 밭과 창고를 바탕으로 화분, 묘목, 조경용 식물을 차분하게 준비하는 농원입니다.",
  heroEyebrow: "Yeongcheon Plant Farm",
  heroTitle: "자연과 공간을 잇는 농원, 덕앤플라워",
  heroBody:
    "농원의 실제 규모와 준비 과정을 투명하게 소개하고, 계절에 맞는 화분과 묘목 정보를 한 페이지에 담았습니다.",
  locationLabel: "경북 영천시 화산면 효정리",
  phone: "010-0000-0000",
  directionsUrl: "https://map.naver.com/",
  kakaoUrl: "https://pf.kakao.com/",
  introTitle: "영천의 농원 풍경을 차분하게 소개합니다.",
  introBody:
    "덕앤플라워는 방문 전에도 농원의 분위기와 준비 방향을 충분히 이해할 수 있도록, 공간과 식물 정보를 정직하게 전하는 홈페이지를 지향합니다.",
  highlights: [
    { label: "보유 공간", value: "밭 800평" },
    { label: "작업 기반", value: "창고 300평" },
    { label: "운영 방향", value: "화분 · 묘목 · 조경용 식물" }
  ]
};
```

- [ ] **Step 4: Create the three opening sections**

Create `components/hero-section.tsx`.

```tsx
import Link from "next/link";
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

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
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{siteCopy.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#plants"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50"
            >
              식물 안내 보기
            </a>
            <a
              href="#location"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900"
            >
              오시는 길
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-[var(--panel)] p-6 shadow-[0_20px_80px_rgba(62,74,51,0.12)]">
          <img
            src="/images/placeholder-farm.svg"
            alt="덕앤플라워 농원 플레이스홀더 일러스트"
            className="h-auto w-full rounded-[1.5rem]"
          />
        </div>
      </Container>
    </section>
  );
}
```

Create `components/intro-section.tsx`.

```tsx
import { siteCopy } from "@/data/site";
import { SectionShell } from "@/components/section-shell";

export function IntroSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title={siteCopy.introTitle}
      description={siteCopy.introBody}
    >
      <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-[var(--panel)] p-8 sm:grid-cols-2">
        <p className="text-base leading-7 text-stone-700">
          넓은 밭과 작업 공간을 바탕으로, 방문 전에도 농원의 인상과 방향을 충분히 파악할 수 있도록 구성합니다.
        </p>
        <p className="text-base leading-7 text-stone-700">
          덕앤플라워는 화분과 묘목을 단순히 나열하기보다, 어디에 어울리고 어떻게 관리하면 좋은지 함께 전합니다.
        </p>
      </div>
    </SectionShell>
  );
}
```

Create `components/highlights-section.tsx`.

```tsx
import { siteCopy } from "@/data/site";
import { SectionShell } from "@/components/section-shell";

export function HighlightsSection() {
  return (
    <SectionShell
      id="highlights"
      eyebrow="Strengths"
      title="직접 보고 느낄 수 있는 농원의 기반"
      description="규모와 운영 방향을 투명하게 보여주어 방문 전 신뢰를 쌓습니다."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {siteCopy.highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6"
          >
            <p className="text-sm text-stone-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-stone-950">{item.value}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
```

- [ ] **Step 5: Compose the opening sections in the homepage**

Update `app/page.tsx`.

```tsx
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { IntroSection } from "@/components/intro-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 6: Run the build to verify the opening sections**

Run: `npm run build`

Expected: build passes and the page renders the opening sections.

- [ ] **Step 7: Commit the opening sections**

```bash
git add components data/site.ts app/page.tsx
git commit -m "feat: add hero and introduction sections"
```

### Task 5: Implement the data-driven plant, gallery, guide, news, and location sections

**Files:**
- Create: `components/plant-category-section.tsx`
- Create: `components/gallery-section.tsx`
- Create: `components/guide-section.tsx`
- Create: `components/news-section.tsx`
- Create: `components/location-section.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Write the failing usage test for the plant section**

Update `app/page.tsx` to import `PlantCategorySection` before it exists.

```tsx
import { PlantCategorySection } from "@/components/plant-category-section";
```

- [ ] **Step 2: Run the build to verify the missing section failure**

Run: `npm run build`

Expected: FAIL with missing `@/components/plant-category-section`.

- [ ] **Step 3: Create the data-driven section components**

Create `components/plant-category-section.tsx`.

```tsx
import { plantCategories } from "@/data/plants";
import { SectionShell } from "@/components/section-shell";

export function PlantCategorySection() {
  return (
    <SectionShell
      id="plants"
      eyebrow="Plants"
      title="공간과 계절에 맞는 식물 정보를 정리했습니다."
      description="구매보다 이해를 먼저 돕는 정보형 카드로 구성했습니다."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {plantCategories.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6">
            <span className="inline-flex rounded-full bg-emerald-700/10 px-3 py-1 text-xs font-semibold text-emerald-800">
              {item.badge}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
            <p className="mt-5 text-sm text-stone-500">{item.useCase}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
```

Create `components/gallery-section.tsx`.

```tsx
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { SectionShell } from "@/components/section-shell";

export function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="농원의 풍경과 준비 공간을 차분하게 보여드립니다."
      description="실사진이 추가되면 같은 구조에서 바로 교체할 수 있도록 설계합니다."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[var(--panel)]">
            <div className="relative aspect-[4/3]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
```

Create `components/guide-section.tsx`.

```tsx
import { guideItems } from "@/data/guides";
import { SectionShell } from "@/components/section-shell";

export function GuideSection() {
  return (
    <SectionShell
      id="guides"
      eyebrow="Care Guide"
      title="처음 식물을 키우는 분도 이해하기 쉬운 관리 팁"
      description="짧고 실용적인 설명으로 기본 관리 감각을 전달합니다."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {guideItems.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6">
            <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
            <p className="mt-4 text-sm font-medium text-emerald-800">{item.point}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
```

Create `components/news-section.tsx`.

```tsx
import { newsItems } from "@/data/news";
import { SectionShell } from "@/components/section-shell";

export function NewsSection() {
  return (
    <SectionShell
      id="news"
      eyebrow="News"
      title="농원의 준비 과정과 계절 변화를 이어서 전합니다."
      description="지속적으로 업데이트 가능한 카드 구조로 설계합니다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-white/70 bg-[var(--panel)] p-6">
            <p className="text-sm text-stone-500">{item.dateLabel}</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
```

Create `components/location-section.tsx`.

```tsx
import { siteCopy } from "@/data/site";
import { SectionShell } from "@/components/section-shell";

export function LocationSection() {
  return (
    <SectionShell
      id="location"
      eyebrow="Visit"
      title="영천에서 덕앤플라워를 만나보세요."
      description="방문 전 위치와 연락 수단을 간단히 확인할 수 있도록 정리했습니다."
    >
      <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-[var(--panel)] p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm text-stone-500">주소</p>
          <p className="mt-3 text-2xl font-semibold text-stone-950">{siteCopy.locationLabel}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
            영천 지역에서 화분과 묘목, 조경용 식물을 직접 둘러보고 싶은 분들을 위한 농원 소개 페이지입니다.
          </p>
          <p className="mt-4 text-sm text-stone-500">전화 문의: {siteCopy.phone}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={siteCopy.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-stone-50"
          >
            길찾기 열기
          </a>
          <a
            href={siteCopy.kakaoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900"
          >
            카카오톡 채널
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
```

- [ ] **Step 4: Compose the remaining sections in the homepage**

Update `app/page.tsx`.

```tsx
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { GuideSection } from "@/components/guide-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { IntroSection } from "@/components/intro-section";
import { LocationSection } from "@/components/location-section";
import { NewsSection } from "@/components/news-section";
import { PlantCategorySection } from "@/components/plant-category-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <HighlightsSection />
        <PlantCategorySection />
        <GallerySection />
        <GuideSection />
        <NewsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Run the build to verify all sections pass**

Run: `npm run build`

Expected: build passes with the full one-page composition.

- [ ] **Step 6: Commit the section set**

```bash
git add components app/page.tsx
git commit -m "feat: add data-driven homepage sections"
```

### Task 6: Add placeholder assets, polish, and deployment docs

**Files:**
- Create: `public/images/placeholder-farm.svg`
- Create: `public/images/placeholder-gallery-1.svg`
- Create: `public/images/placeholder-gallery-2.svg`
- Create: `public/images/placeholder-gallery-3.svg`
- Create: `README.md`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write the failing asset reference test**

Run the build with image references before the SVG placeholders exist.

Run: `npm run build`

Expected: FAIL with missing static asset references if the files are not yet created.

- [ ] **Step 2: Create the placeholder SVG assets**

Create `public/images/placeholder-farm.svg`.

```svg
<svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="900" rx="48" fill="#EFE7DA"/>
  <rect x="72" y="72" width="1056" height="756" rx="36" fill="#F8F3EA"/>
  <path d="M120 650C220 540 340 500 470 540C580 574 670 640 790 640C885 640 984 597 1080 500V792H120V650Z" fill="#C4D0B6"/>
  <path d="M120 704C255 604 370 586 470 618C612 664 700 740 840 740C930 740 1012 705 1080 648V792H120V704Z" fill="#97A97C"/>
  <circle cx="920" cy="210" r="58" fill="#E7D38C"/>
  <path d="M260 580H910" stroke="#6B7A54" stroke-width="18" stroke-linecap="round"/>
  <path d="M380 580V450" stroke="#6B7A54" stroke-width="18" stroke-linecap="round"/>
  <path d="M560 580V390" stroke="#6B7A54" stroke-width="18" stroke-linecap="round"/>
  <path d="M740 580V468" stroke="#6B7A54" stroke-width="18" stroke-linecap="round"/>
</svg>
```

Create `public/images/placeholder-gallery-1.svg`, `public/images/placeholder-gallery-2.svg`, and `public/images/placeholder-gallery-3.svg` by reusing the same palette with different simple landscape compositions.

- [ ] **Step 3: Finalize metadata and README**

Update `app/layout.tsx`.

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "덕앤플라워 | 영천 화분·묘목 농원",
  description:
    "경북 영천에서 만나는 화분과 묘목 농원, 덕앤플라워의 소개와 방문 정보를 한눈에 살펴보세요.",
  keywords: ["덕앤플라워", "영천 농원", "영천 화분", "영천 묘목", "경북 농원"],
  openGraph: {
    title: "덕앤플라워 | 영천 화분·묘목 농원",
    description:
      "경북 영천에서 만나는 화분과 묘목 농원, 덕앤플라워의 소개와 방문 정보를 한눈에 살펴보세요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

Create `README.md`.

```md
# 덕앤플라워 홈페이지

## 실행 방법

```bash
npm install
npm run dev
```

## GitHub 업로드

```bash
git init
git add .
git commit -m "feat: launch deok and flower homepage"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

## Vercel 배포

1. GitHub 저장소를 Vercel에 연결합니다.
2. Framework Preset은 Next.js를 유지합니다.
3. 배포 후 실제 연락처와 지도 링크, 사진 자산을 교체합니다.
```

- [ ] **Step 4: Run full verification**

Run: `npm run lint`

Expected: lint passes without errors.

Run: `npm run build`

Expected: production build passes successfully.

- [ ] **Step 5: Commit the final polish**

```bash
git add public/images app/layout.tsx README.md
git commit -m "feat: add launch assets and deployment docs"
```

## Self-Review

- Spec coverage check:
  - Single-page landing structure is covered by Tasks 3 through 5.
  - Data-separated content is covered by Task 2 and consumed in Task 5.
  - Clean brand styling and responsive structure are covered by Tasks 3 through 5.
  - GitHub/Vercel deployment readiness is covered by Tasks 1 and 6.
  - SEO metadata is covered by Task 6.
- Placeholder scan:
  - No `TBD`, `TODO`, or unresolved placeholders remain in the plan body.
  - The GitHub remote URL placeholder is intentionally user-supplied operational input in `README.md`.
- Type consistency:
  - Shared data types are introduced in `lib/types.ts` before data modules use them.
  - Section imports in `app/page.tsx` match the component names defined in later tasks.

---

## Redesign Addendum: Garsons-Inspired Localization Refresh

This addendum supersedes the visual direction of Tasks 3 through 6 while preserving the same technical stack and data-driven architecture. The goal is not a literal clone, but a Korean-localized homepage that borrows Garsons’ broad layout grammar: large editorial hero, quiet cream/olive palette, spacious section rhythm, and a more premium retail-garden tone.

### Updated File Responsibilities

- `app/globals.css`: redesign tokens, global spacing, background treatment, and any shared visual primitives
- `app/page.tsx`: final section order remains single-page, but composition should reflect the redesigned visual rhythm
- `components/header.tsx`: slimmer premium-style header and clearer anchor behavior
- `components/footer.tsx`: quieter editorial footer treatment
- `components/section-shell.tsx`: section framing consistent with the new design rhythm
- `components/hero-section.tsx`: Garsons-inspired wide hero with Korean-localized messaging
- `components/intro-section.tsx`: editorial intro block rather than plain two-column text
- `components/highlights-section.tsx`: trust metrics presented as premium summary cards
- `components/plant-category-section.tsx`: retail-style category card section
- `components/gallery-section.tsx`: image-led block with more visual emphasis
- `components/guide-section.tsx`: softer knowledge-card section
- `components/news-section.tsx`: concise editorial updates strip
- `components/location-section.tsx`: stronger visit CTA styling while keeping placeholder operational data
- `data/site.ts`: centralized section copy, CTA labels, and editorial headings
- `public/images/placeholder-farm.svg` and `public/images/placeholder-gallery-*.svg`: placeholders that better fit the redesigned palette

### Task 7: Apply the Garsons-Inspired Homepage Redesign

**Files:**
- Modify: `app/globals.css`
- Modify: `app/page.tsx`
- Modify: `components/header.tsx`
- Modify: `components/footer.tsx`
- Modify: `components/section-shell.tsx`
- Modify: `components/hero-section.tsx`
- Modify: `components/intro-section.tsx`
- Modify: `components/highlights-section.tsx`
- Modify: `components/plant-category-section.tsx`
- Modify: `components/gallery-section.tsx`
- Modify: `components/guide-section.tsx`
- Modify: `components/news-section.tsx`
- Modify: `components/location-section.tsx`
- Modify: `data/site.ts`
- Modify: `public/images/placeholder-farm.svg`
- Modify: `public/images/placeholder-gallery-1.svg`
- Modify: `public/images/placeholder-gallery-2.svg`
- Modify: `public/images/placeholder-gallery-3.svg`

- [ ] **Step 1: Write the failing visual contract checks**

Use lightweight source assertions to define the redesign target before implementation.

```bash
node <<'EOF'
const fs = require('node:fs');
const hero = fs.readFileSync('components/hero-section.tsx', 'utf8');
const globals = fs.readFileSync('app/globals.css', 'utf8');

if (hero.includes('rounded-[2rem] border border-white/70 bg-[var(--panel)] p-6 shadow-[0_20px_80px_rgba(62,74,51,0.12)]')) {
  throw new Error('Hero still uses the old card shell styling');
}

if (!globals.includes('--background')) {
  throw new Error('Expected global design tokens to exist');
}
EOF
```

Expected: FAIL before the redesign because the old hero shell styling still exists.

- [ ] **Step 2: Run the failing check to confirm the old design is still present**

Run:

```bash
node <<'EOF'
const fs = require('node:fs');
const hero = fs.readFileSync('components/hero-section.tsx', 'utf8');
if (hero.includes('rounded-[2rem] border border-white/70 bg-[var(--panel)] p-6 shadow-[0_20px_80px_rgba(62,74,51,0.12)]')) {
  throw new Error('Hero still uses the old card shell styling');
}
EOF
```

Expected: FAIL with `Hero still uses the old card shell styling`.

- [ ] **Step 3: Replace the design tokens and global surface styling**

Update `app/globals.css` so the page carries a cream editorial background, softer contrast, and a refined system of tokens.

Implementation guidance:
- keep `@tailwind base/components/utilities`
- define tokens such as `--background`, `--foreground`, `--panel`, `--panel-strong`, `--accent`, `--muted`
- shift the body background toward a Garsons-like cream paper look with subtle gradients
- preserve smooth scrolling

- [ ] **Step 4: Rewrite the site copy for the localized premium tone**

Update `data/site.ts` so headings and CTA labels are shorter, calmer, and more premium in Korean.

Implementation guidance:
- keep operational placeholders intact (`phone`, `directionsUrl`, `kakaoUrl`)
- update hero, plants, gallery, guide, news, and location section copy to fit the redesign tone
- keep everything centralized so section components stop owning core title/description strings

- [ ] **Step 5: Redesign shared structural components**

Update `components/header.tsx`, `components/footer.tsx`, and `components/section-shell.tsx`.

Implementation guidance:
- header should feel slimmer and quieter, with elegant spacing and subtle translucency
- footer should feel editorial rather than utility-heavy
- `SectionShell` should support the more spacious rhythm and cleaner headings used across the refreshed page

- [ ] **Step 6: Redesign the hero, intro, and highlights blocks**

Update `components/hero-section.tsx`, `components/intro-section.tsx`, and `components/highlights-section.tsx`.

Implementation guidance:
- hero should become the most Garsons-like area: wide, airy, image-led, with restrained copy and strong CTA hierarchy
- intro should feel like a branded editorial statement, not just a text box
- highlights should read like curated strengths, not dashboard metrics

- [ ] **Step 7: Redesign the plants, gallery, guide, news, and location sections**

Update:
- `components/plant-category-section.tsx`
- `components/gallery-section.tsx`
- `components/guide-section.tsx`
- `components/news-section.tsx`
- `components/location-section.tsx`
- `app/page.tsx`

Implementation guidance:
- plants should look like premium retail category cards
- gallery should feel image-first, with quieter captions
- guide/news should be concise and balanced
- location should feel like a deliberate visit invitation
- keep all anchors working and maintain the one-page scroll structure

- [ ] **Step 8: Refresh placeholder illustration assets to match the new palette**

Update:
- `public/images/placeholder-farm.svg`
- `public/images/placeholder-gallery-1.svg`
- `public/images/placeholder-gallery-2.svg`
- `public/images/placeholder-gallery-3.svg`

Implementation guidance:
- use cream, olive, sage, dark green, and warm soil tones
- make the assets feel premium and calm rather than generic placeholders

- [ ] **Step 9: Run verification on the refreshed design**

Run:

```bash
npm run lint
```

Expected: PASS with no lint errors.

Run:

```bash
npm run build
```

Expected: PASS with a successful static production build.

- [ ] **Step 10: Commit the redesign**

```bash
git add app components data lib public/images docs/superpowers/specs/2026-05-24-deok-and-flower-design.md docs/superpowers/plans/2026-05-24-deok-and-flower-implementation.md
git commit -m "feat: redesign homepage with garsons-inspired layout"
```
