import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import contactImage from "@/assets/handshake-centered.png";
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
            {/* Form */}
            <div className="bg-[hsl(0,0%,91%)] p-8 md:p-10 rounded-2xl border border-border transition-all hover:shadow-xl">
              <ContactForm />
            </div>

            {/* Image */}
            <div className="block mt-8 md:mt-0">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl border border-border group">
                <img
                  src={contactImage}
                  alt="Contact us"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
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
                  href="tel:+919342094698"
                  className="text-primary-foreground underline text-sm"
                >
                  93420 94698
                </a>
              </div>

              {/* Office */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Head Office</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  100 Jalan Sultan, #09-06, Sultan Plaza
                </p>
                <p className="text-primary-foreground text-sm mb-4">
                  Singapore - 199 001
                </p>

                <h3 className="text-lg font-bold text-primary-foreground mb-2">Branches</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Theni: 197, L.F.Road, Cumbum - 625516
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Puducherry: No. 89, Anna Nagar Main Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
