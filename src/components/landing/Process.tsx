import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const steps = [
  {
    number: "01",
    label: "Process",
    title: "Initial Consultation",
    description: "Our journey begins with a deep dive into your vision. In the discovery phase, we engage in meaningful conversations to grasp your goals and the essence of your medical career aspirations. This phase sets the stage for all that follows.",
  },
  {
    number: "02",
    label: "Step one",
    title: "Shortlisting & Application",
    description: "We assess your academic profile, NEET scores, and goals thoroughly. We shortlist verified institutions in India and abroad that align with your aspirations, helping you prepare a strong application profile.",
  },
  {
    number: "03",
    label: "Three steps",
    title: "Admission + Visa Support",
    description: "From your first conversation to your actual enrollment, we handle the complexity of international or domestic admission and visa processes, ensuring you can focus on your studies while we take care of the paperwork.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="section-container">
        <div className="grid md:grid-cols-2 md:gap-12 xl:gap-16">
          <div className="left-0 top-32 md:sticky md:h-fit md:py-12">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">our process</span>
            <h2 className="mb-6 mt-4 text-3xl md:text-5xl font-display font-bold text-primary tracking-tight">
              Planning your educational journey
            </h2>
            <p className="max-w-prose text-muted-foreground leading-relaxed">
              We provide a structured pathway to medical admission. Our process is transparent, reliable, and designed to minimize stress while maximizing your chances of securing a seat in a reputable institution.
            </p>
          </div>

          <ContainerScroll className="space-y-8 py-12">
            {steps.map((step, index) => (
              <CardSticky
                key={step.number}
                index={index + 2}
                className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-display font-bold text-primary">
                    {step.title}
                  </h3>
                  <span className="text-3xl font-display font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default Process;
