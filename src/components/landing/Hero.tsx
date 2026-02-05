import { Link } from "react-router-dom";
import heroImage from "@/assets/hero main.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradients for readability: Top-down for navbar, Bottom-up for content, and side-fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full mb-8 md:mb-0">
        <div className="max-w-3xl mx-auto md:ml-auto md:mr-0 text-center md:text-left pt-20">
          <div className="inline-block text-white/90 font-medium tracking-wider uppercase text-[10px] md:text-sm mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            Built on Transparency.
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.15] mb-6">
            Focused on Your <br className="sm:hidden" /> <span className="text-primary italic">Medical Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
            Navigate MBBS admissions with verified counselling, university shortlisting, and complete admission support. We handle the complexity so you can focus on your future.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/25 active:scale-95">
                Enquiry Now
              </button>
            </Link>
            <Link to="/domestic">
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
                Explore Path
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
