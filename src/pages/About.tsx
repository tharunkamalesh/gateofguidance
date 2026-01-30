import { Link } from "react-router-dom";
import { CircleHelp, FileText, Target, ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import aboutHero from "@/assets/about us hero.jpg";
import aboutHandshake from "@/assets/about us handshake.jpg";
import aboutCampus from "@/assets/about us clg.jpg";
import aboutCounseling from "@/assets/about us ethical.jpg";
import ethicalGuidanceImg from "@/assets/honest.jpg";
import studentFirstImg from "@/assets/dedicated cons.jpg";
import testimonialStudent from "@/assets/testimonial.jpg";

import WhyChooseUs from "@/components/landing/WhyChooseUs";

const About = () => {
  const heroReveal = useScrollReveal();
  const storyReveal = useScrollReveal();
  const beliefReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar variant="solid" />

      {/* Hero Section - Boxed Layout */}
      <section className="bg-background pt-8 pb-12">
        <div className="section-container">
          <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center rounded-3xl overflow-hidden shadow-sm">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${aboutHero})` }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            </div>

            {/* Content */}
            <div
              ref={heroReveal.ref}
              className={`relative z-10 text-center max-w-4xl mx-auto px-6 scroll-reveal ${heroReveal.isVisible ? 'is-visible' : ''}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Built on Transparency.<br />
                Focused on Your Medical Future.
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Navigate MBBS admissions with verified counselling, university shortlisting, and complete
                admission support. We handle the complexity so you can focus on your future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="px-8 py-3 bg-white text-[#0B1B35] font-semibold rounded-md hover:bg-white/90 transition-all">
                    Enquiry Now
                  </button>
                </Link>
                <Link to="/domestic">
                  <button className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-all">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div
            ref={storyReveal.ref}
            className={`grid md:grid-cols-2 gap-12 items-center border-2 border-primary/30 rounded-xl p-8 md:p-12 scroll-reveal ${storyReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div>
              <CircleHelp className="w-12 h-12 text-primary/30 mb-6" strokeWidth={1} />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                We started because the path was unclear
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Medical admissions in India and abroad demand more than application forms and test scores.
                Students and parents navigate conflicting information, unverified consultants, and unclear processes.
              </p>
            </div>
            <div className="border-2 border-primary/30 rounded-xl overflow-hidden">
              <img
                src={testimonialStudent}
                alt="Medical student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={beliefReveal.ref}
            className={`text-center mb-12 scroll-reveal ${beliefReveal.isVisible ? 'is-visible' : ''}`}
          >
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Foundation</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
              What we believe in
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Medical education requires more than forms and scores. It demands clarity, honesty, and a
              genuine commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: Verified Universities (Top Left - Wide Horizontal) */}
            <div className="md:col-span-8 flex flex-col md:flex-row border border-border rounded-lg overflow-hidden card-hover-lift bg-background shadow-sm">
              <div className="p-8 md:w-1/2 flex flex-col">
                <span className="text-xs text-foreground font-semibold uppercase tracking-wider mb-4">Principles</span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Verified universities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  We work only with accredited institutions in India and abroad. No shortcuts, no unverified claims. Every university is vetted before recommendation.
                </p>
                <div className="mt-auto">
                  <Link to="/contact" className="text-foreground text-sm font-semibold inline-flex items-center hover:underline group">
                    Reach Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={aboutCampus} alt="University campus" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2: Ethical Guidance (Right - Tall Vertical) */}
            <div className="md:col-span-4 md:row-span-2 border border-border rounded-lg overflow-hidden flex flex-col card-hover-lift bg-background shadow-sm">
              <div className="p-8">
                <span className="text-xs text-foreground font-semibold uppercase tracking-wider mb-4">Standards</span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Ethical guidance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  We don't inflate credentials or promise guaranteed seats. We work within the rules and help you present your authentic profile.
                </p>
                <Link to="/contact" className="text-foreground text-sm font-semibold inline-flex items-center hover:underline group">
                  Reach Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-auto h-80">
                <img src={aboutCounseling} alt="Counseling" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 3: Student First (Bottom Left) */}
            <div className="md:col-span-4 border border-border rounded-lg p-8 flex flex-col card-hover-lift bg-background shadow-sm">
              <div className="mb-6">
                <Target className="w-10 h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Student first</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Your goals shape our strategy, not commission structures. We counsel based on merit, fit, and your timeline, regardless of where it leads.
              </p>
              <div className="mt-auto">
                <Link to="/contact" className="text-foreground text-sm font-semibold inline-flex items-center hover:underline group">
                  Reach Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 4: Transparent Process (Bottom Center) */}
            <div className="md:col-span-4 border border-border rounded-lg p-8 flex flex-col card-hover-lift bg-background shadow-sm">
              <div className="mb-6">
                <ClipboardList className="w-10 h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Transparent process</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Every step is explained. Admission requirements, timelines, costs, and outcomes are laid out clearly from the start.
              </p>
              <div className="mt-auto">
                <Link to="/contact" className="text-foreground text-sm font-semibold inline-flex items-center hover:underline group">
                  Reach Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs showStats={false} />

      {/* Process Section */}
      <section className="section-padding bg-secondary/20">
        <div className="section-container">
          <div
            ref={processReveal.ref}
            className={`max-w-5xl mx-auto scroll-reveal ${processReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Admission Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Three straightforward phases from your first consultation to your final admission letter.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="border-2 border-primary/20 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutHandshake}
                  alt="Professional handshake"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <FileText className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Understand your profile</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We assess your academic background, test scores, and career aspirations honestly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Match with right universities</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We shortlist verified institutions that align with your goals and qualifications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <ClipboardList className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Complete the admission journey</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From applications to visa support, we guide you through every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={ctaReveal.ref}
            className={`grid md:grid-cols-2 gap-8 items-center scroll-reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Start your medical journey
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-muted-foreground flex-grow">
                Book a consultation with our counsellors to discuss your profile, goals, and admission strategy.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                  Enquire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
