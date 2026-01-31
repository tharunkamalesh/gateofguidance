import { ArrowRight, ShieldCheck, DollarSign, HandHeart, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import CardFlip from "@/components/ui/flip-card";
import featureVerified from "@/assets/verifief uni.jpg";
import featureTransparent from "@/assets/Transparency.jpg";
import featureSupport from "@/assets/dedicated cons.jpg";
import featureHonest from "@/assets/honest.jpg";



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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
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
          <CardFlip
            title="Verified universities"
            subtitle="Verified"
            description="Every institution in our network is accredited and recognized. We partner only with universities that meet international standards."
            features={[
              'International Standards',
              'Accredited Network',
              'Quality Education',
              'Recognized Degrees',
            ]}
            color="#0ea5e9"
            icon={ShieldCheck}
            frontImage={featureVerified}
          />
          <CardFlip
            title="Transparent fees"
            subtitle="Transparent"
            description="No hidden charges or surprise costs. You know exactly what you pay for and what you receive at every stage."
            features={[
              'No Hidden Charges',
              'Clear Breakdown',
              'Upfront Pricing',
              'Process Clarity',
            ]}
            color="#8b5cf6"
            icon={DollarSign}
            frontImage={featureTransparent}
          />
          <CardFlip
            title="Dedicated support"
            subtitle="Dedicated"
            description="Your personal counsellor stays with you throughout your journey. We respond quickly and address your concerns with care."
            features={[
              'Personal Counsellor',
              '24/7 Response',
              'Expert Guidance',
              'Caring Support',
            ]}
            color="#f43f5e"
            icon={HandHeart}
            frontImage={featureSupport}
          />
          <CardFlip
            title="No hidden commissions"
            subtitle="Honest"
            description="We earn through transparent service fees, not by pushing you toward expensive options. Your best outcome is our goal."
            features={[
              'Transparent Fees',
              'Student First',
              'Unbiased Advice',
              'Ethical Practice',
            ]}
            color="#10b981"
            icon={Scale}
            frontImage={featureHonest}
          />
        </div>

        {/* Stats Section */}
        {showStats && (
          <div
            ref={statsReveal.ref}
            className={`max-w-4xl mx-auto scroll-reveal ${statsReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-10">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Results</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">
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
