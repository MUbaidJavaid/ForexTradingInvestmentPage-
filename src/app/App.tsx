import { InvestmentForm } from "@/app/components/InvestmentForm";
import { Testimonials } from "@/app/components/Testimonials";
import { HeroSection } from "@/app/components/HeroSection";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Stats } from "@/app/components/Stats";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { TrustBadges } from "@/app/components/TrustBadges";
import { FAQ } from "@/app/components/FAQ";
import { RiskManagement } from "@/app/components/RiskManagement";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900">
      {/* Hero Section with Form in Top Right */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr,350px] gap-8 items-start">
          {/* Left Side - Hero Content */}
          <HeroSection />

          {/* Right Side - Form (Sticky Top Right) */}
          {/* <InvestmentForm /> */}
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats Section */}
      <Stats />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Risk Management */}
      <RiskManagement />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
