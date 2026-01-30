import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialImg from "@/assets/testimonial.jpg";

const testimonials = [
  {
    image: testimonialImg,
    quote:
      "They didn't just help me get into medical school—they understood what I wanted and made sure every decision aligned with my goals. The counsellor was there when I had doubts, and that made all the difference.",
    name: "Arjun Sharma",
    role: "MBBS student, Poland",
  },
  {
    image: testimonialImg,
    quote:
      "The entire process was seamless. From choosing the right university to getting my visa approved, they handled everything professionally. I'm now studying in Germany and couldn't be happier.",
    name: "Priya Patel",
    role: "MBBS student, Germany",
  },
  {
    image: testimonialImg,
    quote:
      "What impressed me most was their honesty. They didn't push expensive options—they genuinely wanted what was best for me. That trust made the journey so much easier.",
    name: "Rahul Kumar",
    role: "MBBS student, Russia",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
              ))}
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
