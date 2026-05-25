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
import { siteCopy } from "@/data/site";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="relative bg-transparent pb-24 pt-0 md:pb-10">
        <HeroSection />
        <IntroSection />
        <HighlightsSection />
        <GallerySection />
        <PlantCategorySection />
        <div className="relative">
          <GuideSection />
          <NewsSection />
        </div>
        <LocationSection />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--line)] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2">
          {siteCopy.inquiryActions.slice(0, 3).map((action) => (
            <a
              key={action.id}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className={`rounded-full px-3 py-3 text-center text-xs font-medium ${
                action.style === "solid"
                  ? "bg-[color:var(--accent-deep)] text-white"
                  : "border border-[color:var(--accent-deep)] bg-white text-[color:var(--accent-deep)]"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
