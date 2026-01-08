import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurWorkSection from "@/components/OurWorkSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-background">
        <Navbar onGetQuote={openQuoteModal} />
        <HeroSection onGetQuote={openQuoteModal} />
        <AboutSection />
        <OurWorkSection />
        <ServicesSection onGetQuote={openQuoteModal} />
        <FAQSection />
        <CTASection />
        <Footer onGetQuote={openQuoteModal} />
        
        <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      </main>
    </>
  );
};

export default Index;
