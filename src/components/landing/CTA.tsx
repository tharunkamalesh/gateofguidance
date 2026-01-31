import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";

const CTA = () => {
  const ctaReveal = useScrollReveal();

  return (
    <section className="section-padding bg-background" id="contact">
      <div className="section-container text-center max-w-5xl mx-auto">
        <HighlightGroup className="group h-full">
          <div
            ref={ctaReveal.ref}
            className={`scroll-reveal w-full ${ctaReveal.isVisible ? 'is-visible' : ''}`}
          >
            <HighlighterItem className="rounded-3xl p-6">
              <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black py-20 px-6">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                  quantity={200}
                  color={"#555555"}
                  vy={-0.2}
                />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                    Start your medical journey now
                  </h2>
                  <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                    A free consultation is the first step toward clarity. Let us guide you to your dream medical career.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
                      Counselling
                    </Button>
                  </Link>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </HighlightGroup>
      </div>
    </section>
  );
};

export default CTA;
