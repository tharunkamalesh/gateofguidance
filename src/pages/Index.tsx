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

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const pathComparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsPopupOpen(true);
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (pathComparisonRef.current) {
      observer.observe(pathComparisonRef.current);
    }

    return () => {
      if (pathComparisonRef.current) {
        observer.unobserve(pathComparisonRef.current);
      }
    };
  }, [hasTriggered]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div ref={pathComparisonRef}>
        <PathComparison />
      </div>
      <Process />
      <WhyChooseUs />
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
