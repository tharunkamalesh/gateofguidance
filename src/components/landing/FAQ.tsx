import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What are the eligibility criteria for Indian students?",
    answer:
      "Indian students must have successfully completed 10+2 or equivalent education with Physics, Chemistry, and Biology as mandatory subjects. A minimum aggregate score of 50% in PCB is required for General category candidates, while 40% is applicable for SC/ST/OBC candidates, in accordance with National Medical Commission (NMC) guidelines. Applicants must have attained the age of 17 years on or before 31st December of the admission year.",
  },
  {
    question: "Is NEET required to study MBBS abroad?",
    answer:
      "Yes. Qualifying NEET is mandatory for Indian students pursuing MBBS abroad if they intend to practice medicine in India after graduation. This requirement is prescribed by the National Medical Commission (NMC), Government of India, and applies to all foreign medical graduates seeking licensure in India.",
  },
  {
    question: "Is there an entrance examination for admission?",
    answer:
      "Most international medical universities do not conduct separate entrance examinations. Admissions are primarily based on academic merit and NEET qualification. Certain universities may conduct online interviews or basic eligibility assessments as part of the admission process.",
  },
  {
    question: "Are hostel facilities available for students?",
    answer:
      "Yes. The majority of universities offer safe, well-maintained on-campus or nearby hostel accommodations for international students. These facilities are designed to provide a comfortable living environment, with many universities offering Indian food options. Students may also choose private off-campus accommodation, subject to availability.",
  },
];

const FAQ = ({
  items = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Can't find what you are looking for?"
}: FAQProps) => {
  const [openItem, setOpenItem] = useState("");
  const headerReveal = useScrollReveal();
  const faqReveal = useScrollReveal();

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div
              ref={headerReveal.ref}
              className={cn(
                "scroll-reveal",
                headerReveal.isVisible && "is-visible"
              )}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight mb-16 leading-[1.1]">
                {title.split(' ').map((word, i) => {
                  // Add a line break after the second word for "Frequently Asked"
                  if (i === 1) return <span key={i}>{word} <br /></span>;
                  return <span key={i}>{word} </span>;
                })}
              </h2>

              <div className="mt-auto">
                <p className="text-gray-400 text-sm mb-2 font-medium">
                  {subtitle}
                </p>
                <h3 className="text-xl font-bold text-primary mb-6">
                  We would like to chat with you.
                </h3>

                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-[#4182F9] rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#3471E5] transition-colors group">
                    <MessageSquare className="w-8 h-8 text-white fill-white" />
                  </div>
                  {/* Arrow decoration */}

                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div
              ref={faqReveal.ref}
              className={cn(
                "scroll-reveal",
                faqReveal.isVisible && "is-visible"
              )}
            >
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-0"
                value={openItem}
                onValueChange={setOpenItem}
              >
                {items.length > 0 ? (
                  items.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-gray-200 py-2 last:border-0"
                    >
                      <AccordionTrigger
                        className="group flex flex-row-reverse items-center justify-between py-6 hover:no-underline text-left"
                        onMouseEnter={() => setOpenItem(`item-${index}`)}
                      >
                        <span className="text-lg font-bold text-primary flex-1 pl-4 group-data-[state=open]:text-primary">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary shrink-0" />
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="py-20 text-center text-gray-400">
                    No items found.
                  </div>
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
