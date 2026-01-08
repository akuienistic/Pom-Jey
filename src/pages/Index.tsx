import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";
import { NumbersSection } from "@/components/home/NumbersSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AboutSnapshotSection } from "@/components/home/AboutSnapshotSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIDoSection />
        <NumbersSection />
        <HighlightsSection />
        <TestimonialsSection />
        <AboutSnapshotSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
