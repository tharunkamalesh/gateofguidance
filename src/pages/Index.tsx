import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PathComparison from "@/components/landing/PathComparison";
import Process from "@/components/landing/Process";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PathComparison />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
