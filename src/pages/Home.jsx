import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import StatisticsSection from "../components/StatisticsSection";
import FeaturesSection from "../components/FeaturesSection";
import PracticeSection from "../components/PracticeSection";
import AdvertisementSection from "../components/AdvertisementSection";
import CTASection from "../components/CTASection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturedInSection from "../components/FeaturedInSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import FooterCopy from "../components/FooterCopy";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <PracticeSection />
      <AdvertisementSection />
      <CTASection />
      <PricingSection />
      <TestimonialsSection />
      <FeaturedInSection />
      <FAQSection />
      <Footer />
      <FooterCopy />
    </div>
  );
}
