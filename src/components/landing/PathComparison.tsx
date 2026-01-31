import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mbbsIndiaImg from "@/assets/mbbs in india.avif";
import mbbsAbroadImg from "@/assets/mbbs in abroad.png";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PathCardProps {
  image: string;
  title: string;
  subtitle: string;
  features: { label: string; value: string }[];
  benefits: string[];
  ctaText: string;
  ctaHref: string;
}



const PathCard = ({ image, title, subtitle, features, benefits, ctaText, ctaHref }: PathCardProps) => (
  <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm card-hover-lift">
    <div className="p-6">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-6" />

      <h3 className="text-xl font-bold text-foreground text-center mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm text-center mb-6">{subtitle}</p>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
            <span className="text-muted-foreground text-sm">{feature.label}</span>
            <span className="text-foreground font-semibold text-sm">{feature.value}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{benefit}</span>
          </div>
        ))}
      </div>

      <Link to={ctaHref}>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {ctaText} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  </div>
);

const PathComparison = () => {
  const headerReveal = useScrollReveal();
  const cardsReveal = useScrollReveal();

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="domestic">
      {/* Services Ticker */}
      <div className="absolute top-0 left-0 right-0 bg-white py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Medical guidance",
            "Admission support",
            "Counselling expertise",
            "Visa assistance",
            "College selection",
            "Medical guidance",
            "Admission support",
            "Counselling expertise",
            "Visa assistance",
            "College selection",
          ].map((item, index) => (
            <span key={index} className="mx-8 text-primary text-sm font-bold uppercase tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="section-container">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-12 scroll-reveal ${headerReveal.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            India or Abroad — Which Path Fits You?
          </h2>
          <p className="text-muted-foreground">
            Not every NEET score leads to the same opportunity.
          </p>
        </div>

        <div
          ref={cardsReveal.ref}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-reveal ${cardsReveal.isVisible ? 'is-visible' : ''}`}
        >
          <PathCard
            image={mbbsIndiaImg}
            title="MBBS in India"
            subtitle="Structured pathway at home"
            features={[
              { label: "NEET score required", value: "Higher NEET cutoff" },
              { label: "Medical degree recognition", value: "National standard" },
              { label: "Admission competition level", value: "Highly intense" },
            ]}
            benefits={[
              "Established medical colleges across India",
              "Residency pathway well-defined domestically",
            ]}
            ctaText="See If I Qualify for India"
            ctaHref="/domestic"
          />

          <PathCard
            image={mbbsAbroadImg}
            title="MBBS abroad"
            subtitle="Global medical education opportunity"
            features={[
              { label: "NEET score required", value: "Lower NEET threshold" },
              { label: "Medical degree recognition", value: "International credentials" },
              { label: "Admission competition level", value: "Moderate" },
            ]}
            benefits={[
              "Universities in Europe, Asia, and beyond",
              "Global career opportunities and mobility",
            ]}
            ctaText="See If I Qualify for Abroad"
            ctaHref="/international"
          />
        </div>
      </div>
    </section>
  );
};

export default PathComparison;
