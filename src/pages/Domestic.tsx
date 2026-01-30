import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Percent, Calendar, Award, Users } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import domesticHeroImg from "@/assets/domestic-hero.jpg";
import domesticStudentsImg from "@/assets/domestic-students.jpg";
import domesticDeskImg from "@/assets/domestic-desk.jpg";
import domesticCorridorImg from "@/assets/domestic-corridor.jpg";
import domesticDoctorImg from "@/assets/domestic-doctor.jpg";
import domesticEligibilityImg from "@/assets/domestic-eligibility.jpg";
import domesticGovtCollegeImg from "@/assets/domestic-govt-college.jpg";
import domesticPrivateCollegeImg from "@/assets/domestic-private-college.jpg";
import domesticNeetImg from "@/assets/domestic-neet.jpg";
import domesticCounselingImg from "@/assets/domestic-counseling-process.jpg";
import domesticClassroomImg from "@/assets/domestic-classroom.jpg";
import domesticAdmissionImg from "@/assets/domestic-admission.jpg";

const features = [
  {
    number: "01",
    title: "Five year course",
    description: "Your qualification is recognized by the Medical Council of India and enables practice nationwide.",
    image: domesticStudentsImg,
  },
  {
    number: "02",
    title: "Feature two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: domesticDeskImg,
  },
  {
    number: "03",
    title: "Feature three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: domesticCorridorImg,
  },
];

const eligibilityItems = [
  {
    icon: Percent,
    title: "NEET qualification",
    description: "Government colleges require higher cutoffs while private institutions have varying thresholds by state.",
  },
  {
    icon: Calendar,
    title: "Cutoff scores",
    description: "NEET scores determine your admission pathway across all medical colleges in India.",
  },
  {
    icon: Award,
    title: "Age and academics",
    description: "SC, ST, and OBC categories have reserved seats with separate cutoff scores in government colleges.",
  },
  {
    icon: Users,
    title: "Category reservations",
    description: "Meet the academic and age requirements to qualify for counselling and seat allocation.",
  },
];

const govtFeatures = [
  { label: "Annual fees", value: "₹10-15K" },
  { label: "Competitive merit cutoff", value: "95-99 percentile" },
  { label: "Total available seats", value: "~15,000" },
  { label: "Admission difficulty", value: "Extremely competitive" },
];

const govtBenefits = [
  { positive: true, text: "Strong faculty and infrastructure" },
  { positive: true, text: "Established reputation nationally" },
  { positive: false, text: "Limited seats create intense pressure" },
  { positive: false, text: "Geographic preference constraints apply" },
];

const privateFeatures = [
  { label: "Annual fees", value: "₹15-25 lakhs" },
  { label: "Annual tuition", value: "₹10-15K" },
  { label: "Moderate merit cutoff", value: "50-75 percentile" },
  { label: "Total available seats", value: "~30,000+" },
  { label: "Admission accessibility", value: "More accessible pathways" },
];

const privateBenefits = [
  { positive: true, text: "Variable quality across institutions" },
  { positive: true, text: "Growing recognition in medical field" },
  { positive: true, text: "Higher financial commitment required" },
  { positive: true, text: "Flexible admission timelines available" },
];

const processSteps = [
  {
    step: "One",
    title: "Prepare and attempt NEET",
    description: "Register for the national entrance exam and complete your preparation thoroughly.",
    image: domesticNeetImg,
    large: true,
  },
  {
    step: "Two",
    title: "Register for counselling",
    description: "Submit your NEET score and documents to the counselling authority.",
    image: domesticCounselingImg,
  },
  {
    step: "Three",
    title: "Participate in choice filling",
    description: "Rank colleges by preference based on your score and aspirations.",
    image: domesticClassroomImg,
  },
  {
    step: "Four",
    title: "Receive seat allocation",
    description: "Merit-based algorithm assigns you to a college matching your rank.",
    image: domesticCounselingImg,
  },
  {
    step: "Five",
    title: "Complete admission formalities",
    description: "Report to your college and finalize enrollment with required documentation.",
    image: domesticAdmissionImg,
  },
];

const faqItems = [
  {
    question: "Can I attempt NEET again?",
    answer: "Yes, you can retake NEET multiple times to improve your score. Many students attempt it twice or thrice before securing their desired college. Each attempt gives you another chance to strengthen your preparation and increase your percentile.",
  },
  {
    question: "What happens after counselling?",
    answer: "After counselling concludes and seats are allocated, you receive your college assignment. You then report to your assigned institution with required documents to complete admission formalities and begin your medical education.",
  },
  {
    question: "Are private colleges recognized?",
    answer: "Private medical colleges in India are recognized by the Medical Council of India and their graduates can practice medicine nationwide. However, recognition quality varies by institution, making college selection important.",
  },
  {
    question: "How competitive is government admission?",
    answer: "Government MBBS seats are extremely competitive with cutoffs typically ranging from 95 to 99 percentile depending on your category and state. Limited seat availability makes these positions highly sought after.",
  },
  {
    question: "What if I miss counselling dates?",
    answer: "Missing counselling deadlines can result in forfeiting your seat. Counselling authorities maintain strict timelines, so marking important dates and submitting documents promptly is essential for securing admission.",
  },
];

const Domestic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${domesticHeroImg})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 section-container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-3xl mx-auto">
            Navigate MBBS admissions with clarity
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We guide you through every step of India's medical education pathway with structured counselling, admission support, and visa assistance. Your journey to becoming a doctor starts here.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Enquire
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* What MBBS in India Entails */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Structure</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-6">
                What MBBS in India entails
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                India's MBBS program spans five and a half years of rigorous medical training followed by a mandatory internship. Your degree holds recognition across India and qualifies you for licensing examinations.
              </p>
              
              {/* Features List */}
              <div className="space-y-12">
                {features.map((feature) => (
                  <div key={feature.number} className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {feature.number}. {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src={domesticStudentsImg} 
                alt="Medical students" 
                className="w-full h-64 object-cover rounded-lg"
              />
              {features.slice(1).map((feature) => (
                <img 
                  key={feature.number}
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highly Competitive Section */}
      <section className="section-padding bg-background border-2 border-dashed border-border mx-4 md:mx-8 rounded-xl">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Highly competitive
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                NEET determines placement with limited government seats and substantial private college options available.
              </p>
            </div>
            <div>
              <img 
                src={domesticDoctorImg} 
                alt="Medical professional" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
              Eligibility criteria for MBBS admission
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NEET is the single entrance examination for all MBBS seats in India. Your score determines both government and private college eligibility based on merit and cutoff marks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-8">
              {eligibilityItems.slice(0, 2).map((item) => (
                <div key={item.title} className="text-center md:text-left">
                  <item.icon className="w-8 h-8 text-primary mx-auto md:mx-0 mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div>
              <img 
                src={domesticEligibilityImg} 
                alt="Student" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-8">
              {eligibilityItems.slice(2).map((item) => (
                <div key={item.title} className="text-center md:text-right">
                  <item.icon className="w-8 h-8 text-primary mx-auto md:ml-auto md:mr-0 mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government vs Private Colleges */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Choice</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
              Government versus private colleges
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Both pathways lead to medical practice with distinct advantages and trade-offs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Government College Card */}
            <div className="border-2 border-dashed border-border rounded-xl p-6">
              <img 
                src={domesticGovtCollegeImg} 
                alt="Government college" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-foreground text-center mb-1">Government colleges</h3>
              <p className="text-muted-foreground text-sm text-center mb-6">Highly subsidized education</p>
              
              <div className="space-y-3 mb-6">
                {govtFeatures.map((feature) => (
                  <div key={feature.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm">{feature.label}</span>
                    <span className="text-foreground font-semibold text-sm">{feature.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                {govtBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {benefit.positive ? (
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-muted-foreground text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private College Card */}
            <div className="border-2 border-dashed border-border rounded-xl p-6">
              <img 
                src={domesticPrivateCollegeImg} 
                alt="Private college" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-foreground text-center mb-1">Private colleges</h3>
              <p className="text-muted-foreground text-sm text-center mb-6">Self-funded medical education</p>
              
              <div className="space-y-3 mb-6">
                {privateFeatures.map((feature) => (
                  <div key={feature.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm">{feature.label}</span>
                    <span className="text-foreground font-semibold text-sm">{feature.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                {privateBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
              Your path to medical college
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              India's admission process follows a structured timeline with counselling determining your final seat allocation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* First large card */}
            <div className="md:row-span-2 border border-border rounded-xl p-6 flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{processSteps[0].step}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{processSteps[0].title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{processSteps[0].description}</p>
              <Link to="#" className="text-foreground font-medium text-sm flex items-center gap-2 mb-4">
                Reach Us <ArrowRight className="w-4 h-4" />
              </Link>
              <img 
                src={processSteps[0].image} 
                alt={processSteps[0].title}
                className="w-full h-48 object-cover rounded-lg mt-auto"
              />
            </div>

            {/* Remaining cards */}
            {processSteps.slice(1).map((step) => (
              <div key={step.step} className="border border-border rounded-xl p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">{step.step}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <Link to="#" className="text-foreground font-medium text-sm flex items-center gap-2 mb-4">
                  Reach Us <ArrowRight className="w-4 h-4" />
                </Link>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Find answers to what matters most about your medical education journey.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Begin your medical education journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Schedule a personalized consultation with our experienced counsellors today.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Domestic;
