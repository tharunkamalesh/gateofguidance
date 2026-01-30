import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import featureVerified from "@/assets/verifief uni.jpg";
import featureTransparent from "@/assets/Transparency.jpg";
import featureSupport from "@/assets/dedicated cons.jpg";
import featureHonest from "@/assets/honest.jpg";

const features = [
  {
    label: "Verified",
    title: "Verified universities only",
    description:
      "Every institution in our network is accredited and recognized. We partner only with universities that meet international standards and deliver quality medical education.",
    image: featureVerified,
  },
  {
    label: "Transparent",
    title: "Transparent fee structure",
    description:
      "No hidden charges or surprise costs. You know exactly what you pay for and what you receive at every stage of the process.",
    image: featureTransparent,
  },
  {
    label: "Dedicated",
    title: "Dedicated counsellor support",
    description:
      "Your personal counsellor stays with you throughout your journey. We respond quickly and address your concerns with genuine care and expertise.",
    image: featureSupport,
  },
  {
    label: "Honest",
    title: "No hidden commissions",
    description:
      "We earn through transparent service fees, not by pushing you toward expensive options. Your best outcome is our only incentive.",
    image: featureHonest,
  },
];

const stats = [
  { number: 2800, suffix: "+", label: "Medical students admitted to quality institutions" },
  { number: 15, suffix: "+", label: "Nations with recognized MBBS programs" },
];

interface WhyChooseUsProps {
  showNations?: boolean;
  showStats?: boolean;
}

const WhyChooseUs = ({ showNations = true, showStats = true }: WhyChooseUsProps) => {
  const headerReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const statsReveal = useScrollReveal();

  const activeStats = showNations ? stats : stats.slice(0, 1);

  const count1 = useCountUp({ end: 2800, duration: 2500, isActive: statsReveal.isVisible });
  const count2 = useCountUp({ end: 15, duration: 2000, isActive: statsReveal.isVisible });

  const counts = [count1, count2];

  return (
    <section className="section-padding bg-background" id="about">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center mb-12 scroll-reveal ${headerReveal.isVisible ? 'is-visible' : ''}`}
        >
          <span className="text-muted-foreground text-sm uppercase tracking-wider">Trust</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Why choose us
          </h2>
          <p className="text-muted-foreground">
            Built on transparency and genuine student outcomes
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresReveal.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 scroll-reveal-stagger ${featuresReveal.isVisible ? 'is-visible' : ''}`}
        >
          {features.map((feature) => (
            <div key={feature.label} className="feature-card scroll-reveal flex flex-col items-center text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {feature.label}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-lg mt-auto"
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {showStats && (
          <div
            ref={statsReveal.ref}
            className={`max-w-4xl mx-auto scroll-reveal ${statsReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-10">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Results</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                Our track record speaks clearly
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-center md:text-left">
              <div className="max-w-md">
                <p className="text-muted-foreground mb-8 text-lg">
                  These numbers reflect years of dedicated work and genuine commitment to student
                  success across India and abroad.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link to="/about">
                    <Button variant="outline" className="border-foreground text-foreground px-8">
                      Discover
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="ghost" className="text-foreground">
                      Reach Us <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex gap-16">
                {activeStats.map((stat, index) => (
                  <div key={stat.number} className="text-center">
                    <span className="stat-number block">
                      {counts[index]}{stat.suffix}
                    </span>
                    <p className="text-muted-foreground text-sm mt-2 max-w-[150px] mx-auto">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
