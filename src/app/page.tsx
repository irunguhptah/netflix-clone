import NavigationHeader from '@/components/sections/navigation-header';
import HeroSection from '@/components/sections/hero-section';
import PromotionBanner from '@/components/sections/promotion-banner';
import TrendingCarousel from '@/components/sections/trending-carousel';
import FeaturesGrid from '@/components/sections/features-grid';
import FaqAccordion from '@/components/sections/faq-accordion';
import EmailSignupCta from '@/components/sections/email-signup-cta';
import Footer from '@/components/sections/footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavigationHeader />
      <main>
        <HeroSection />
        <PromotionBanner />
        <TrendingCarousel />
        <FeaturesGrid />
        <FaqAccordion />
        <EmailSignupCta />
      </main>
      <Footer />
    </div>
  );
}