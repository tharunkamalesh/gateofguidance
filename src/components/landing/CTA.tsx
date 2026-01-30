import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-background" id="contact">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Start your medical journey now
        </h2>
        <p className="text-muted-foreground mb-8">
          A free consultation is the first step toward clarity
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
          Counselling
        </Button>
      </div>
    </section>
  );
};

export default CTA;
