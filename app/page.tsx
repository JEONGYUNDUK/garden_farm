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
