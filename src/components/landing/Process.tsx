const steps = [
  {
    number: "01",
    label: "Process",
    title: "Consultation",
    description: "Three straightforward steps from consultation to admission",
  },
  {
    number: "02",
    label: "Step one",
    title: "Shortlisting & Application",
    description:
      "We assess your profile, goals, and academic standing. This foundation shapes every decision that follows.",
  },
  {
    number: "03",
    label: "Three steps",
    title: "Admission + Visa",
    description:
      "From your first conversation to your admission letter, we handle the complexity so you can focus on what matters.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-border rounded-xl p-8 md:p-12">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 md:gap-12 items-start">
                <span className="process-number font-display">{step.number}</span>
                <div className="pt-4">
                  {index > 0 && <div className="h-px w-16 bg-foreground mb-4" />}
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {step.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
