import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentSection from "@/components/DifferentSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f0eee6] pt-[69px]">
      <Header />
      <div className="w-full max-w-[80rem] mx-auto flex flex-col">
        <HeroSection />
        <SocialProofBar />
        <CapabilitiesSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <DifferentSection />
        <TeamSection />
        <FooterSection />
      </div>
    </main>
  );
}
