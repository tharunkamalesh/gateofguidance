import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import contactImage from "@/assets/handshake-centered.png";
import StickyFooter from "@/components/ui/sticky-footer";
import { ContactForm } from "@/components/landing/ContactForm";
import SEO from "@/components/SEO";

const Contact = () => {
  const formReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | GateOfGuidance"
        description="Contact GateOfGuidance for MBBS admission counseling and expert guidance."
      />
      <Navbar variant="solid" />

      {/* Form Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Connect</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mt-2 mb-4">
              Reach out to us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about your medical education options? Our expert counsellors are ready to help you navigate your path.
            </p>
          </div>

          <div
            ref={formReveal.ref}
            className={`grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto scroll-reveal ${formReveal.isVisible ? 'is-visible' : ''}`}
          >
            {/* Image - Hidden on mobile, second on desktop */}
            <div className="hidden md:block order-2">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl border border-border group">
                <img
                  src={contactImage}
                  alt="Contact us"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Form - Always first on mobile */}
            <div className="order-1 md:order-1 bg-[hsl(0,0%,91%)] p-8 md:p-10 rounded-2xl border border-border transition-all hover:shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-primary">
        <div className="section-container">
          <div
            ref={contactReveal.ref}
            className={`scroll-reveal ${contactReveal.isVisible ? 'is-visible' : ''}`}
          >
            <span className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider">Connect</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Get in touch
            </h2>
            <p className="text-primary-foreground/80 mb-12">
              We're here to guide your medical education journey
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Email</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Send us your questions and we'll respond promptly
                </p>
                <a
                  href="mailto:info@gateofguidance.com"
                  className="text-primary-foreground underline text-sm"
                >
                  info@gateofguidance.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Phone</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Speak directly with our counselling team during office hours
                </p>
                <a
                  href="tel:+919944294698"
                  className="text-primary-foreground underline text-sm"
                >
                  99442 94698
                </a>
              </div>

              {/* Office */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Our Locations</h3>
                <p className="text-primary-foreground/90 font-semibold text-sm mb-1">Head Office:</p>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  100 Jalan Sultan, #09-06, Sultan Plaza, Singapore - 199 001
                </p>

                <p className="text-primary-foreground/90 font-semibold text-sm mb-1">India Branches:</p>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Theni: 197, L.F.Road, Cumbum - 625516
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Puducherry: No. 89, Anna Nagar Main Road
                </p>
              </div>
            </div>

            {/* Integrated Footer Wordings */}
            <div className="mt-20 pt-8 border-t border-primary-foreground/10">
              <div className="text-primary-foreground/40 flex flex-col items-center justify-between gap-6 text-xs md:text-sm md:flex-row w-full font-sans">
                <div className="flex items-center gap-2 order-1 md:order-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <p className="font-semibold text-primary-foreground/80 italic text-shadow-sm">Empowering Future Doctors</p>
                </div>
                <p className="order-2 md:order-2">© 2026 Gate of Guidance. All rights reserved.</p>
                <div className="flex gap-8 order-3 md:order-3">
                  <p className="hover:text-primary-foreground/60 cursor-pointer transition-colors shadow-sm">Privacy Policy</p>
                  <p className="hover:text-primary-foreground/60 cursor-pointer transition-colors shadow-sm">Terms & Conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
