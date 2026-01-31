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

const FAQ = ({
  items = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Can't find what you are looking for?"
}: FAQProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const headerReveal = useScrollReveal();
  const faqReveal = useScrollReveal();

  const filteredFaqs = items.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mb-16 leading-[1.1]">
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
                <h3 className="text-xl font-bold text-black mb-6">
                  We would like to chat with you.
                </h3>

                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-[#4182F9] rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#3471E5] transition-colors group">
                    <MessageSquare className="w-8 h-8 text-white fill-white" />
                  </div>
                  {/* Arrow decoration */}
                  <svg
                    className="absolute -right-8 -top-8 w-12 h-12 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 7L7 17M7 17H17M7 17V7" transform="rotate(135 12 12)" />
                  </svg>
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
              {/* Search Bar */}
              <div className="relative mb-12 group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-black transition-colors" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 border-dashed py-4 pl-10 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-400"
                />
              </div>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="w-full space-y-0">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-gray-200 py-2 last:border-0"
                    >
                      <AccordionTrigger className="group flex flex-row-reverse items-center justify-between py-6 hover:no-underline text-left">
                        <span className="text-lg font-bold text-black flex-1 pl-4 group-data-[state=open]:text-black">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-black shrink-0" />
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="py-20 text-center text-gray-400">
                    No results found for "{searchQuery}"
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
