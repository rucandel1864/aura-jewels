import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { WhyMoissanite } from "@/components/WhyMoissanite";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CaratComparison } from "@/components/CaratComparison";
import { SpecsAccordion } from "@/components/SpecsAccordion";
import { BrandStory } from "@/components/BrandStory";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyAddToCart } from "@/components/StickyAddToCart";
import { useCartSync } from "@/hooks/useCartSync";

const Index = () => {
  useCartSync();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyMoissanite />
        <ProductShowcase />
        <CaratComparison />
        <SpecsAccordion />
        <BrandStory />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default Index;
