import { Link } from "react-router-dom";
import { CircleHelp, FileText, Target, ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import aboutHero from "@/assets/about us hero.jpg";
import aboutHandshake from "@/assets/about us handshake.jpg";
import aboutCampus from "@/assets/about us clg.jpg";
import aboutCounseling from "@/assets/about us ethical.jpg";
import testimonialStudent from "@/assets/testimonial.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Built on Transparency.<br />
            Focused on Your Medical Future.
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Navigate MBBS admissions with verified counselling, university shortlisting, and complete
            admission support. We handle the complexity so you can focus on your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-background text-foreground hover:bg-background/90 border-0">
              Enquiry Now
            </Button>
            <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center border-2 border-dashed border-primary/30 rounded-xl p-8 md:p-12">
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
            <div className="border-2 border-dashed border-primary/30 rounded-xl overflow-hidden">
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
          <div className="text-center mb-12">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Foundation</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              What we believe in
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Medical education requires more than forms and scores. It demands clarity, honesty, and a
              genuine commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Row */}
            <div className="feature-card flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Principles</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Verified universities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                We work only with accredited institutions in India and abroad. No shortcuts, no unverified claims.
                Every university is vetted before recommendation.
              </p>
              <Link to="#" className="text-foreground text-sm font-medium inline-flex items-center hover:underline">
                Reach Us <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
              <img src={aboutCampus} alt="University campus" className="w-full h-40 object-cover rounded-lg mt-4" />
            </div>

            <div className="feature-card flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Standards</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">Ethical guidance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                We don't inflate credentials or promise guaranteed seats. We work within the rules and help you
                present your authentic profile.
              </p>
              <Link to="#" className="text-foreground text-sm font-medium inline-flex items-center hover:underline">
                Reach Us <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Bottom Row */}
            <div className="feature-card">
              <Target className="w-8 h-8 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground mb-3">Student first</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Your goals shape our strategy, not commission structures. We counsel based on merit, fit, and your
                timeline, regardless of where it leads.
              </p>
              <Link to="#" className="text-foreground text-sm font-medium inline-flex items-center hover:underline">
                Reach Us <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="feature-card">
                <ClipboardList className="w-8 h-8 text-foreground mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-foreground mb-3">Transparent process</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Every step is explained. Admission requirements, timelines, costs, and outcomes are laid out clearly
                  from the start.
                </p>
                <Link to="#" className="text-foreground text-sm font-medium inline-flex items-center hover:underline">
                  Reach Us <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={aboutCounseling} alt="Counseling session" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={aboutHandshake}
                alt="Professional handshake"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-10">
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Understand your profile</h3>
                  <p className="text-muted-foreground">
                    We assess your academic background, test scores, and career aspirations honestly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Match with right universities</h3>
                  <p className="text-muted-foreground">
                    We shortlist verified institutions that align with your goals and qualifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ClipboardList className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Complete the admission journey</h3>
                  <p className="text-muted-foreground">
                    From applications to visa support, we guide you through every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Start your medical journey
            </h2>
            <div className="flex items-center gap-6">
              <p className="text-muted-foreground flex-grow">
                Book a consultation with our counsellors to discuss your profile, goals, and admission strategy.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
