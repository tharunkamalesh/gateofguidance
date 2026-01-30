import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Do I need NEET to apply?",
    answer:
      "Yes. NEET qualification is mandatory for Indian students seeking MBBS admission, whether in India or abroad. We guide you through preparation and use your score strategically during applications.",
  },
  {
    question: "Is foreign MBBS recognized in India?",
    answer:
      "MBBS degrees from our partner universities are recognized by the Medical Council of India. We work only with accredited institutions that meet international standards and Indian regulatory requirements.",
  },
  {
    question: "What is the total cost involved?",
    answer:
      "Costs vary by country and university. We provide transparent breakdowns covering tuition, living expenses, and our service fees upfront. No hidden charges at any stage.",
  },
  {
    question: "Do you guarantee admission?",
    answer:
      "We cannot guarantee admission, but we maximize your chances through careful university selection and strong applications. Our track record speaks to our success rate and genuine commitment.",
  },
  {
    question: "How long is the entire process?",
    answer:
      "From initial consultation to visa approval typically takes six to nine months. We work within your timeline and keep you informed at every milestone.",
  },
];

const FAQ = () => {
  const headerReveal = useScrollReveal();
  const faqReveal = useScrollReveal();

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="section-container">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-12 scroll-reveal ${headerReveal.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Questions
          </h2>
          <p className="text-muted-foreground">Clear answers to what matters most to you</p>
        </div>

        <div
          ref={faqReveal.ref}
          className={`max-w-2xl mx-auto scroll-reveal ${faqReveal.isVisible ? 'is-visible' : ''}`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
