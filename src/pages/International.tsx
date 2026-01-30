import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, User, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroVideo from "@/assets/inter-hero.mp4";
import studentTabletImg from "@/assets/international-student-tablet.jpg";
import studentsGroupImg from "@/assets/inter-group.jpg";
import seminarImg from "@/assets/international-seminar.jpg";
import destinationImg from "@/assets/inter-kazakasthan.jpg";
import medicalDeskImg from "@/assets/domestic desk.jpg";
import travelImg from "@/assets/inter-travel.jpg";

const destinationsData = [
  {
    id: "russia",
    name: "Russia",
    title: "Medical excellence in historical institutions",
    description: "Russia offers world-renowned medical universities that combine historical prestige with modern research facilities. High passing rates in global screening tests make it a preferred destination.",
    image: destinationImg,
  },
  {
    id: "georgia",
    name: "Georgia",
    title: "European standards in safe environments",
    description: "Georgian universities follow European medical education standards (Bologna process), providing students with globally recognized degrees in some of the safest cities in the world.",
    image: studentsGroupImg,
  },
  {
    id: "philippines",
    name: "Philippines",
    title: "US-pattern medical education system",
    description: "With an American-style medical curriculum and English as the primary language of instruction, the Philippines offers exceptional clinical training and USMLE focus.",
    image: seminarImg,
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    title: "Modern infrastructure and affordable costs",
    description: "Kazakhstan has rapidly modernized its medical education infrastructure, offering Indian students NMC-recognized programs with high-quality clinical exposure at a fraction of domestic costs.",
    image: travelImg,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Visa application and approval",
    description: "We begin with a detailed assessment of your academic profile, NEET scores, and medical education goals. This foundation ensures we recommend universities aligned with your qualifications and aspirations.",
    label: "University selection and application preparation",
  },
  {
    number: "02",
    title: "Pre-departure and enrollment support",
    label: "Pre-departure and enrollment support",
  },
  {
    number: "03",
    title: "Admission approval",
    label: "Admission approval",
  },
  {
    number: "04",
    title: "Visa processing",
    label: "Visa processing",
  },
];

const faqs = [
  {
    question: "Is NEET mandatory for abroad?",
    answer: "Yes, NEET qualification is required by most international universities accepting Indian students. Your NEET score demonstrates medical aptitude and is essential for admission consideration.",
  },
  {
    question: "Are foreign degrees recognized in India?",
    answer: "Degrees from NMC-recognized institutions are fully recognized for medical practice in India. Graduates must complete FMGE examination to obtain Indian medical registration and practice license.",
  },
  {
    question: "How safe are these countries?",
    answer: "Our partner destinations maintain established student communities with strong safety records. We provide pre-departure orientation covering local customs, accommodation, and emergency support networks.",
  },
  {
    question: "What is the admission timeline?",
    answer: "Typical admission process spans four to six months from application to enrollment. We manage timelines ensuring applications reach universities during active admission cycles.",
  },
  {
    question: "Can I practice medicine after graduation?",
    answer: "Yes, graduates from NMC-recognized institutions can practice in India after FMGE qualification. International experience enhances clinical skills and provides global medical perspective.",
  },
];

const International = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeDest, setActiveDest] = useState(0);

  const heroReveal = useScrollReveal();
  const whyStudyReveal = useScrollReveal();
  const curriculumReveal = useScrollReveal();
  const seatsReveal = useScrollReveal();
  const universitiesReveal = useScrollReveal();
  const destinationsReveal = useScrollReveal();
  const eligibilityReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const faqReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 10) {
              e.currentTarget.currentTime = 0;
            }
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 section-container pt-20 text-center scroll-reveal ${heroReveal.isVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Study medicine globally with structured guidance
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Access world-class medical education through our comprehensive admission, visa, and licensing support. We guide Indian students through every step of international medical study.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  Enquire
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped Overview Sections with CardStack */}
      <section className="section-padding bg-secondary/10 overflow-hidden">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left side: Sticky Content */}
            <div className="md:sticky md:top-32 md:h-fit md:py-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Overview</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-6 leading-tight tracking-tight">
                Why study medicine <span className="text-foreground">globally?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Limited domestic seats create barriers for qualified candidates in India. Our international programs offer high-standard education and a clear path to your medical career, helping you bypass extreme competition.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Expert Advice
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side: Scrolled Cards */}
            <ContainerScroll className="space-y-8 py-12">
              {/* Card 1: Why Study Abroad */}
              <CardSticky index={2} className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-display font-bold text-primary">Why study medicine abroad</h3>
                  <span className="text-3xl font-display font-bold text-primary/20">01</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  International programs offer a global perspective, world-class infrastructure, and a direct path to becoming a licensed doctor without the intense pressure of local seat availability.
                </p>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={studentTabletImg} alt="Medical student" className="w-full h-full object-cover" />
                </div>
              </CardSticky>

              {/* Card 2: Curriculum */}
              <CardSticky index={3} className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-display font-bold text-primary">Structured curriculum</h3>
                  <span className="text-3xl font-display font-bold text-primary/20">02</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  India's medical colleges receive far more applicants than available positions. International universities offer proven pathways for capable students with accredited training.
                </p>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={studentsGroupImg} alt="Group of students" className="w-full h-full object-cover" />
                </div>
              </CardSticky>

              {/* Card 3: Exposure */}
              <CardSticky index={4} className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-display font-bold text-primary">Global clinical exposure</h3>
                  <span className="text-3xl font-display font-bold text-primary/20">03</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Exposure to diverse healthcare systems and international standards strengthens clinical judgment and professional adaptability in a globalized medical environment.
                </p>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={studentsGroupImg} alt="International medical students" className="w-full h-full object-cover" />
                </div>
              </CardSticky>

              {/* Card 4: Standards */}
              <CardSticky index={5} className="rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-display font-bold text-primary">Rigorous med curricula</h3>
                  <span className="text-3xl font-display font-bold text-primary/20">04</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Partner institutions follow evidence-based education with comprehensive clinical training. NMC-recognized programs ensure graduates meet rigorous Indian practice standards.
                </p>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={seminarImg} alt="Seminar" className="w-full h-full object-cover" />
                </div>
              </CardSticky>
            </ContainerScroll>
          </div>
        </div>
      </section>

      {/* Primary Study Destinations */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={destinationsReveal.ref}
            className={`border-2 border-border rounded-xl p-8 md:p-12 scroll-reveal ${destinationsReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Destinations</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Primary study destinations
              </h2>
              <p className="text-muted-foreground">
                Established medical universities with strong international recognition and NMC approval.
              </p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border mb-8 rounded-lg overflow-hidden">
              {destinationsData.map((dest, index) => (
                <button
                  key={dest.id}
                  onClick={() => setActiveDest(index)}
                  className={`p-4 text-center transition-all duration-300 ${activeDest === index ? 'bg-primary text-primary-foreground' : 'bg-transparent text-foreground hover:bg-primary/5'}`}
                >
                  <span className="text-sm font-semibold">{dest.name}</span>
                </button>
              ))}
            </div>

            {/* Featured Destination */}
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={destinationsData[activeDest].image}
                  alt={destinationsData[activeDest].name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">Premier Choice</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 leading-tight">
                    {destinationsData[activeDest].title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {destinationsData[activeDest].description}
                </p>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="rounded-full px-8 flex items-center gap-2 group">
                      Consult for {destinationsData[activeDest].name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Recognition */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={eligibilityReveal.ref}
            className={`scroll-reveal ${eligibilityReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Eligibility and recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding NEET scores, NMC approval, and licensing pathways for foreign medical graduates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-12">
                <div className="text-center md:text-right group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:ml-auto md:mr-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">NEET qualification</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most international universities require NEET qualification as a mandatory baseline eligibility criterion for Indian students.
                  </p>
                </div>
                <div className="text-center md:text-right group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:ml-auto md:mr-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Degree Recognition</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our partner institutions hold full recognition from national and international medical councils, ensuring your degree is valid.
                  </p>
                </div>
              </div>

              {/* Center Image */}
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-4 border-background relative">
                  <img
                    src={destinationImg}
                    alt="Study destination"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 border border-border min-w-[200px]">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider">NMC Recognized</p>
                    <p className="text-[10px] text-muted-foreground">Certified Medical Education</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div className="text-center md:text-left group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">FMGE Pathways</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We provide specific guidance on FMGE/NEXT examination preparation throughout your international journey.
                  </p>
                </div>
                <div className="text-center md:text-left group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Expert Counseling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our experts help you choose the right country and university based on your budget and academic goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission and Visa Pathway */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={processReveal.ref}
            className={`scroll-reveal ${processReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Admission and visa pathway
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We manage every stage from university selection through visa approval and enrollment.
              </p>
            </div>

            <div className="border-2 border-border rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-4">
                {/* Main Content */}
                <div className="md:col-span-1 border-r border-border p-6 flex items-center">
                  <span className="text-sm font-medium text-muted-foreground [writing-mode:vertical-lr] rotate-180">
                    {processSteps[activeStep].label}
                  </span>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-display font-bold text-primary">{processSteps[activeStep].number}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {processSteps[activeStep].title}
                  </h3>
                  {processSteps[activeStep].description && (
                    <p className="text-muted-foreground mb-6">
                      {processSteps[activeStep].description}
                    </p>
                  )}
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img
                      src={travelImg}
                      alt="International study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="md:col-span-1 border-l border-border divide-y divide-border">
                  {processSteps.slice(1).map((step, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setActiveStep(index + 1)}
                      className={`w-full p-6 text-left transition-colors ${activeStep === index + 1 ? "bg-muted" : "hover:bg-muted/50"
                        }`}
                    >
                      <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={faqReveal.ref}
            className={`scroll-reveal ${faqReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                FAQ
              </h2>
              <p className="text-muted-foreground">
                Common questions about international medical education, eligibility, and licensing.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <div
            ref={ctaReveal.ref}
            className={`scroll-reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Begin your medical education journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a personalized consultation with our counselors to explore international medical programs.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default International;
