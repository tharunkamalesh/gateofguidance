import { useState } from "react";
import { ArrowRight, Award, FileCheck, User } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "@/assets/international-hero.jpg";
import studentTabletImg from "@/assets/international-student-tablet.jpg";
import studentsGroupImg from "@/assets/international-students-group.jpg";
import seminarImg from "@/assets/international-seminar.jpg";
import destinationImg from "@/assets/international-destination.jpg";
import medicalDeskImg from "@/assets/international-medical-desk.jpg";
import travelImg from "@/assets/international-travel.jpg";

const destinations = ["Russia", "Georgia", "Philippines and Kazakhstan options", "Russia", "Georgia", "Philippines"];

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 section-container pt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Study medicine globally with structured guidance
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Access world-class medical education through our comprehensive admission, visa, and licensing support. We guide Indian students through every step of international medical study.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Enquire
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Medicine Abroad Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Why study medicine abroad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Limited domestic seats create barriers for qualified candidates seeking medical education.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={studentTabletImg}
                alt="Medical student with tablet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structured Curriculum Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Access</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Structured curriculum with international accreditation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India's medical colleges receive far more qualified applicants than available seats each year. International universities offer proven pathways for capable students to pursue rigorous medical training.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={studentsGroupImg}
                alt="Group of medical students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Limited Seats Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Exposure</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Limited seats drive students toward global options
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Medical education abroad exposes students to diverse healthcare systems, clinical practices, and international standards. This global perspective strengthens clinical judgment and professional adaptability.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={studentsGroupImg}
                alt="International medical students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Established Universities Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Standards</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Established universities maintain rigorous medical curricula
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Partner institutions follow evidence-based medical education frameworks with comprehensive clinical training. NMC-recognized programs ensure graduates meet Indian medical practice standards.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={seminarImg}
                alt="Medical professionals in seminar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Study Destinations */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="border-2 border-dashed border-border rounded-xl p-8 md:p-12">
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
            <div className="grid grid-cols-3 md:grid-cols-6 border border-border divide-x divide-border mb-8">
              {destinations.map((dest, index) => (
                <div key={index} className="p-4 text-center">
                  <span className="text-sm font-medium text-foreground">{dest}</span>
                </div>
              ))}
            </div>

            {/* Featured Destination */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={destinationImg}
                  alt="Study destination"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Premier</span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2 mb-3">
                  Established medical education with proven outcomes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Decades of medical education excellence with extensive Indian student community support.
                </p>
                <a href="#contact" className="inline-flex items-center text-foreground font-medium hover:underline">
                  Reach Us <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Recognition */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
              Eligibility and recognition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding NEET scores, NMC approval, and licensing pathways for foreign medical graduates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="text-center">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">INTL</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
                  NEET qualification and score requirements
                </h3>
                <p className="text-sm text-muted-foreground">
                  Most international universities require NEET qualification as baseline eligibility criterion.
                </p>
              </div>
              <div className="text-center">
                <User className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  NMC approval for foreign medical degrees
                </h3>
                <p className="text-sm text-muted-foreground">
                  Partner institutions hold NMC recognition enabling graduates to practice medicine in India.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={medicalDeskImg}
                alt="Medical eligibility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  FMGE and licensing examination pathways
                </h3>
                <p className="text-sm text-muted-foreground">
                  Foreign Medical Graduate Examination provides standardized assessment for Indian medical practice.
                </p>
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">INTL</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
                  NEET qualification and score requirements
                </h3>
                <p className="text-sm text-muted-foreground">
                  Most international universities require NEET qualification as baseline eligibility criterion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission and Visa Pathway */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="mb-8">
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
              Admission and visa pathway
            </h2>
            <p className="text-muted-foreground">
              We manage every stage from university selection through visa approval and enrollment.
            </p>
          </div>

          <div className="border-2 border-dashed border-border rounded-xl overflow-hidden">
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
                    className={`w-full p-6 text-left transition-colors ${
                      activeStep === index + 1 ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
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
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold italic text-primary mb-4">
            Begin your medical education journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a personalized consultation with our counselors to explore international medical programs.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default International;
