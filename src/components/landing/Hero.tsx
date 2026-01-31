import { Link } from "react-router-dom";
import heroImage from "@/assets/hero main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-10 md:pb-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_15%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-20 w-full mb-10 md:mb-0">
        <div className="max-w-3xl mx-auto md:ml-auto md:mr-0 text-center md:text-left">
          <div className="inline-block text-primary-foreground/90 font-medium tracking-wider uppercase text-sm mb-4 bg-primary/20 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-foreground/20">
            Built on Transparency.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Focused on Your <span className="text-primary italic">Medical Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Navigate MBBS admissions with verified counselling, university shortlisting, and complete admission support. We handle the complexity so you can focus on your future.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/contact">
              <button className="btn-hero-solid">Enquiry Now</button>
            </Link>
            <Link to="/domestic">
              <button className="btn-hero-outline">Explore Path</button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
