import { Link } from "react-router-dom";
import heroImage from "@/assets/hero main.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image - Adjusted to show the student's face better on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-slate-900/60 md:bg-gradient-to-r md:from-[hsl(227,35%,15%)]/90 md:via-[hsl(227,35%,15%)]/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-12 md:pt-20">
        <div className="max-w-3xl text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
            Focused on Your <br className="sm:hidden" /> <span className="text-secondary italic">Medical Future.</span>
          </h1>
          <p className="text-base md:text-xl text-white/95 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
            Expert MBBS admissions guidance with verified counselling and complete support. Your journey to becoming a doctor starts here.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-primary/25 active:scale-95">
                Enquiry Now
              </button>
            </Link>
            <Link to="/domestic">
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
