import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import img1 from "@/assets/s2.jpeg";
import img2 from "@/assets/s1.jpeg";
import img3 from "@/assets/s3.jpeg";
import img4 from "@/assets/s4.jpeg";
import img5 from "@/assets/1.jpeg";
import img6 from "@/assets/2.jpeg";
import img7 from "@/assets/3.jpeg";
import img8 from "@/assets/7.jpeg";

const testimonials = [
  {
    image: img1,
    rating: 5,
    quote:
      "Integrity and transparency are at the heart of their service. They managed my entire admission and visa process with extreme professionalism, giving me confidence at every stage.",
    name: "Dr. Noufal",
    role: "Theni, Azerbaijan Medical University",
    highlighted: true,
  },
  {
    image: img4,
    rating: 4,
    quote:
      "Gate of Guidance provides a seamless pathway for aspiring medical students. Their expertise in documentation and institutional matching ensures a smooth transition to your dream career.",
    name: "Althaf",
    role: "Riyadh (Saudi Arabia), Azerbaijan Medical University",
  },
  {
    image: img3,
    rating: 4.5,
    quote:
      "A huge thank you to the team for their dedicated support. From strategic university selection to successful enrollment, they were with me every step of the way.",
    name: "Sameer Ahmed",
    role: "Kayalpattinam, Azerbaijan Medical University",
  },
  {
    image: img2,
    rating: 4,
    quote:
      "The guidance I received was truly transformative. Gate of Guidance simplified the complex admission and university selection process, making my dream of studying medicine a reality.",
    name: "Bilal",
    role: "Dammam, Azerbaijan Medical University",
  },
  {
    image: img5,
    rating: 4.5,
    quote:
      "Deeply grateful for the guidance that helped me secure my medical seat. The transition from Theni to my dream college was made possible by their dedicated support and transparent counselling.",
    name: "Deepan kandhaswamy",
    role: "Theni",
  },
  {
    image: img6,
    rating: 4,
    quote:
      "Studying at Community Based Medical College, Bangladesh has been a life-changing experience. The entire admission and visa process was handled with extreme professionalism and care.",
    name: "Dr Thanish Abbas",
    role: "Community based medical college, Bangladesh",
  },
  {
    image: img7,
    rating: 4,
    quote:
      "The expert advice I received was instrumental in navigating the complex medical admission pathway. Their honest approach ensured I made the best decision for my future career.",
    name: "Dr Hari Saravanan",
    role: "Dindugal",
  },
  {
    image: img8,
    rating: 5,
    quote:
      "Choosing Dhaka International College, Bangladesh was one of my best decisions. The guidance and documentation support provided by the team were incredibly efficient and reliable.",
    name: "Rithika",
    role: "Dhaka International College, Bangladesh",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialReveal = useScrollReveal();

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-[hsl(0,0%,91%)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Our Assets
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Our greatest achievements are reflected in the success of our students. <br className="hidden md:block" />
            Meet the aspiring doctors who have navigated their path to medical excellence with our dedicated support.
          </p>
        </div>
        <div
          ref={testimonialReveal.ref}
          className={`grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto scroll-reveal ${testimonialReveal.isVisible ? 'is-visible' : ''}`}
        >
          {/* Image */}
          <div className={cn(
            "aspect-[4/5] overflow-hidden rounded-xl transition-all duration-500",
            current.highlighted && "ring-4 ring-primary ring-offset-4 ring-offset-background shadow-[0_0_25px_rgba(var(--primary),0.3)] scale-[1.02]"
          )}>
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => {
                const rating = current.rating;
                const fullStar = i < Math.floor(rating);
                const halfStar = !fullStar && i < rating;

                if (fullStar) {
                  return <Star key={i} className="w-5 h-5 fill-[hsl(227,30%,25%)] text-[hsl(227,30%,25%)]" />;
                } else if (halfStar) {
                  return <StarHalf key={i} className="w-5 h-5 fill-[hsl(227,30%,25%)] text-[hsl(227,30%,25%)]" />;
                } else {
                  return <Star key={i} className="w-5 h-5 text-border" />;
                }
              })}
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-muted-foreground text-sm">{current.role}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-foreground" : "bg-border"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
