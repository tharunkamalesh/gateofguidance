import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featureVerified from "@/assets/feature-verified.jpg";
import featureTransparent from "@/assets/feature-transparent.jpg";
import featureSupport from "@/assets/feature-support.jpg";
import featureHonest from "@/assets/feature-honest.jpg";

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
  { number: "2800+", label: "Medical students admitted to quality institutions" },
  { number: "15+", label: "Nations with recognized MBBS programs" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm uppercase tracking-wider">Trust</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Why choose us
          </h2>
          <p className="text-muted-foreground">
            Built on transparency and genuine student outcomes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <div key={feature.label} className="feature-card">
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
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Results</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Our track record speaks clearly
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground mb-6">
              These numbers reflect years of dedicated work and genuine commitment to student
              success across India and abroad.
            </p>
            <div className="flex gap-12 mb-6">
              {stats.map((stat) => (
                <div key={stat.number}>
                  <span className="stat-number">{stat.number}</span>
                  <p className="text-muted-foreground text-sm mt-1 max-w-[150px]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-foreground text-foreground">
                Discover
              </Button>
              <Button variant="ghost" className="text-foreground">
                Reach Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
