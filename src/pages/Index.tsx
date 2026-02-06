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
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

import fmgeAchiever1 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.32 PM (1).jpeg";
import fmgeAchiever2 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.32 PM.jpeg";
import fmgeAchiever3 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.33 PM (1).jpeg";
import fmgeAchiever4 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.33 PM.jpeg";

import airport1 from "@/assets/WhatsApp Image 2026-02-04 at 6.53.51 PM.jpeg";
import airport2 from "@/assets/WhatsApp Image 2026-02-04 at 6.54.26 PM.jpeg";
import airport3 from "@/assets/WhatsApp Image 2026-02-04 at 6.54.27 PM.jpeg";
import airport4 from "@/assets/WhatsApp Image 2026-02-04 at 6.55.10 PM.jpeg";

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

      {/* FMGE Achievers Section */}
      <section className="section-padding bg-white overflow-hidden border-t border-border">
        <div className="section-container">
          <ImageAutoSlider
            images={[
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4,
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4,
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4
            ]}
            subtitle="Success Stories"
            title="FMGE Achievers"
            description="Meet our proud students who cleared FMGE and are now practicing doctors across India"
            duration={25}
            className="py-4"
          />
        </div>
      </section>

      {/* Airport Diaries Section */}
      <section className="section-padding bg-slate-50 overflow-hidden border-t border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Memories</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6">
              Airport Diaries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Capturing the excitement and new beginnings as our students embark on their international medical journeys.
            </p>
          </div>

          <div className="py-10">
            <ThreeDPhotoCarousel
              images={[
                airport1,
                airport2,
                airport3,
                airport4,
                airport1,
                airport2,
                airport3,
                airport4,
                airport1,
                airport2,
                airport3,
                airport4
              ]}
            />
          </div>
        </div>
      </section>

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
