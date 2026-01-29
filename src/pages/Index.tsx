import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BrandStory } from "@/components/BrandStory";
import { FAQSection } from "@/components/FAQSection";
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
        <ProductShowcase />
        <BrandStory />
        <FAQSection />
      </main>
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default Index;
