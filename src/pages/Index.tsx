import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SignatureOfferSection from "@/components/SignatureOfferSection";
import SocialProofSection from "@/components/SocialProofSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="accelerator">
        <SignatureOfferSection />
      </div>
      <div id="testimonials">
        <SocialProofSection />
      </div>
      <div id="videos">
        <VideoSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
