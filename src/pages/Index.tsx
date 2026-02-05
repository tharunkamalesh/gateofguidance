import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PathComparison from "@/components/landing/PathComparison";
import Process from "@/components/landing/Process";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import StickyFooter from "@/components/ui/sticky-footer";
import { PopupForm } from "@/components/ui/PopupForm";
import SEO from "@/components/SEO";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const processTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsPopupOpen(true);
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 } // Trigger when just 10% of WhyChooseUs is visible
    );

    if (processTriggerRef.current) {
      observer.observe(processTriggerRef.current);
    }

    return () => {
      if (processTriggerRef.current) {
        observer.unobserve(processTriggerRef.current);
      }
    };
  }, [hasTriggered]);

  return (
    <div className="min-h-screen">
      <SEO
        title="MBBS Admissions Guidance | GateOfGuidance"
        description="Expert MBBS admission guidance in India and abroad. Get counseling, college selection, and application support."
      />
      <Navbar />
      <Hero />
      <PathComparison />
      <Process />
      <div ref={processTriggerRef}>
        <WhyChooseUs />
      </div>
      <Testimonials />
      <FAQ />
      <CTA />
      <StickyFooter />

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Index;
