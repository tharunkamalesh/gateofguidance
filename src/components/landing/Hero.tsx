import { Link } from "react-router-dom";
import heroImage from "@/assets/hero main.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90svh] min-h-[550px] flex items-end pb-12 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Mobile Gradient (Bottom-up) and Desktop Gradient (Left-right) */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent md:bg-gradient-to-r md:from-foreground/80 md:via-foreground/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full mb-6 md:mb-0">
        <div className="max-w-3xl mx-auto md:ml-auto md:mr-0 text-center md:text-left pt-20">
          <div className="inline-block text-primary-foreground/90 font-medium tracking-wider uppercase text-[10px] md:text-sm mb-3 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary-foreground/20">
            Built on Transparency.
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.2] mb-4">
            Focused on Your <br className="sm:hidden" /> <span className="text-primary italic">Medical Future.</span>
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Navigate MBBS admissions with verified counselling and complete support. We handle the complexity so you can focus on your future.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link to="/contact">
              <button className="btn-hero-solid px-6 py-3 text-sm md:text-base">Enquiry Now</button>
            </Link>
            <Link to="/domestic">
              <button className="btn-hero-outline px-6 py-3 text-sm md:text-base">Explore Path</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
