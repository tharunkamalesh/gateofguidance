import heroImage from "@/assets/hero-graduation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Honest Guidance for MBBS in India & Abroad
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Based on your NEET score, budget, and long-term goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-hero-outline">Enquire Now</button>
            <button className="btn-hero-solid">Explore Programs</button>
          </div>
        </div>
      </div>

      {/* Services Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 overflow-hidden">
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
            <span key={index} className="mx-8 text-primary-foreground text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
