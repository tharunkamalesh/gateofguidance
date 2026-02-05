import { Link } from "react-router-dom";
import { CircleHelp, FileText, Target, ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/landing/Navbar";
import StickyFooter from "@/components/ui/sticky-footer";
import aboutHero from "@/assets/about us hero.jpg";
import aboutHandshake from "@/assets/about us handshake.jpg";
import aboutCampus from "@/assets/about us clg.jpg";
import aboutCounseling from "@/assets/about us ethical.jpg";
import ethicalGuidanceImg from "@/assets/honest.jpg";
import studentFirstImg from "@/assets/dedicated cons.jpg";
import testimonialStudent from "@/assets/testimonial.jpg";
import gog1Img from "@/assets/gog1.jpg";
import SEO from "@/components/SEO";

const About = () => {
  const heroReveal = useScrollReveal();
  const storyReveal = useScrollReveal();
  const directorReveal = useScrollReveal();
  const beliefReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | GateOfGuidance"
        description="Learn about GateOfGuidance's mission to simplify medical admissions. Dedicated support for aspiring doctors in India and overseas."
      />
      <Navbar />

      {/* Hero Section - Full Screen */}
      <section className="relative h-[80svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div
          ref={heroReveal.ref}
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 pt-20 transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 drop-shadow-2xl">
            Empowering Your <br className="hidden md:block" />
            <span className="text-primary italic">Medical Aspirations</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            At GateOfGuidance, we simplify the complex world of MBBS admissions
            with transparency, expertise, and a student-first approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-2xl hover:scale-105 active:scale-95 duration-300">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section - NEW Content */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="section-container">
          <div
            ref={storyReveal.ref}
            className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${storyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs px-4 py-2 bg-primary/10 rounded-full">
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Built to bring <span className="text-primary">Clarity</span> to the medical journey.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Gate Of Guidance was established with a singular vision: to transform access to global
                  medical education through integrity and excellence.
                </p>
                <p>
                  By simplifying complex admissions, university selection, and visa processes, we have built
                  a trusted platform that delivers confidence at every stage of a student's career.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-500 font-medium">Students Placed</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-slate-900">50+</p>
                  <p className="text-sm text-slate-500 font-medium">Partner Universities</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src={aboutCampus}
                  alt="Modern Campus"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative background box */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Director Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={directorReveal.ref}
            className={`grid md:grid-cols-2 gap-12 items-center scroll-reveal ${directorReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img
                src={gog1Img}
                alt="Director"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Message from Director
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "Gate of Guidance was established with a clear vision to transform access to global medical education through integrity, transparency, and excellence. By simplifying complex admission, university selection, and visa processes, we have built a trusted, student-focused platform that delivers clarity and confidence at every stage. With an expanding presence across multiple locations, our expert team provides seamless end-to-end guidance—from strategic university selection to successful admissions and visa facilitation. Driven by the success of our students, we remain committed to shaping global medical careers and enabling access to world-class education worldwide."
              </p>
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
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Verified universities</h3>
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
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Ethical guidance</h3>
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
              <h3 className="text-xl font-display font-bold text-primary mb-3">Student first</h3>
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
              <h3 className="text-xl font-display font-bold text-primary mb-3">Transparent process</h3>
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
              <div className="rounded-2xl overflow-hidden shadow-2xl">
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
                    <h3 className="text-xl font-bold text-primary mb-2">Understand your profile</h3>
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
                    <h3 className="text-xl font-bold text-primary mb-2">Match with right universities</h3>
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
                    <h3 className="text-xl font-bold text-primary mb-2">Complete the admission journey</h3>
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

      <StickyFooter />
    </div>
  );
};

export default About;
