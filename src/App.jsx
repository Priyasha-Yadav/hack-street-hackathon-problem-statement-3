import Hero from "@/components/ui/particle-effect-for-hero";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="w-full bg-[#050505] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen">
        <Hero />
      </section>

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* ABOUT / OVERVIEW */}
      <AboutSection />

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* TIMELINE */}
      <TimelineSection />

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* PRIZES */}
      <PrizesSection />

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* SPONSORS */}
      <SponsorsSection />

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* FAQ */}
      <FAQSection />

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* REGISTRATION */}
      <RegistrationSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}