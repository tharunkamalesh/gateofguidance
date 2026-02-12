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
import { ImageGallery } from "@/components/ui/carousel-circular-image-gallery";

import fmgeAchiever1 from "@/assets/fmge-achiever-1.jpeg";
import fmgeAchiever2 from "@/assets/fmge-achiever-2.jpeg";
import fmgeAchiever3 from "@/assets/fmge-achiever-3.jpeg";
import fmgeAchiever4 from "@/assets/fmge-achiever-4.jpeg";

import airport1 from "@/assets/airport-1.jpeg";
import airport2 from "@/assets/airport-2.jpeg";
import airport3 from "@/assets/airport-3.jpeg";
import airport4 from "@/assets/airport-4.jpeg";

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
        title="GATEOFGUIDANCE"
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
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-white overflow-hidden border-t border-border">
        <div className="section-container">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-base md:text-lg font-semibold text-primary uppercase tracking-wider">Memories</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mt-3 mb-4">
              Airport Diaries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Capturing the excitement and new beginnings as our students embark on their international medical journeys.
            </p>
          </div>
        </div>

        <div className="section-container pb-12 overflow-visible">
          <ImageGallery
            images={[
              { title: "Departure 1", url: airport1 },
              { title: "Departure 2", url: airport2 },
              { title: "Departure 3", url: airport3 },
              { title: "Departure 4", url: airport4 },
              { title: "Arrival 1", url: airport1 },
              { title: "Arrival 2", url: airport2 },
            ]}
          />
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
