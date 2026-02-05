import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, User, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import StickyFooter from "@/components/ui/sticky-footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { Timeline } from "@/components/ui/timeline";
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import { cn } from "@/lib/utils";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";

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
    title: "University Selection",
    description: "Detailed assessment of your academic profile, NEET scores, and medical education goals to recommend universities aligned with your qualifications.",
    label: "Step 01",
    img: studentTabletImg,
    sliderName: "step1"
  },
  {
    number: "02",
    title: "Admission Approval",
    description: "Handling the entire application process, securing admission to top NMC-recognized medical universities worldwide with expert guidance.",
    label: "Step 02",
    img: medicalDeskImg,
    sliderName: "step2"
  },
  {
    number: "03",
    title: "Visa Processing",
    description: "Complete visa assistance, from document preparation to embassy interview training, ensuring all requirements are met for success.",
    label: "Step 03",
    img: destinationImg,
    sliderName: "step3"
  },
  {
    number: "04",
    title: "Pre-departure Support",
    description: "Comprehensive guidance including travel arrangements, enrollment documentation, and orientation for your new university environment.",
    label: "Step 04",
    img: travelImg,
    sliderName: "step4"
  },
];



const International = () => {
  const [activeDest, setActiveDest] = useState(0);

  const heroReveal = useScrollReveal();
  const whyStudyReveal = useScrollReveal();
  const curriculumReveal = useScrollReveal();
  const seatsReveal = useScrollReveal();
  const universitiesReveal = useScrollReveal();
  const destinationsReveal = useScrollReveal();
  const eligibilityReveal = useScrollReveal();
  const processReveal = useScrollReveal();
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

      {/* Timeline Section */}
      <section className="bg-white dark:bg-neutral-950">
        <Timeline
          title="Why study medicine globally?"
          description={
            <>
              Limited domestic seats create barriers for qualified candidates in India.
              <br className="hidden md:block" />
              Our international programs offer high-standard education and a clear path to your medical career, helping you bypass extreme competition.
            </>
          }
          data={[
            {
              title: "01",
              content: (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why study medicine abroad</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    International programs offer a global perspective, world-class infrastructure, and a direct path to becoming a licensed doctor without the intense pressure of local seat availability.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={studentTabletImg}
                      alt="Medical student"
                      className="rounded-2xl object-cover h-40 md:h-80 lg:h-[500px] w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "02",
              content: (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Structured curriculum</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    India's medical colleges receive far more applicants than available positions. International universities offer proven pathways for capable students with accredited training.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={studentsGroupImg}
                      alt="Group of students"
                      className="rounded-2xl object-cover h-40 md:h-80 lg:h-[500px] w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "03",
              content: (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Global clinical exposure</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Exposure to diverse healthcare systems and international standards strengthens clinical judgment and professional adaptability in a globalized medical environment.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={studentsGroupImg}
                      alt="International medical students"
                      className="rounded-2xl object-cover h-40 md:h-80 lg:h-[500px] w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "04",
              content: (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Rigorous med curricula</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Partner institutions follow evidence-based education with comprehensive clinical training. NMC-recognized programs ensure graduates meet rigorous Indian practice standards.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={seminarImg}
                      alt="Seminar"
                      className="rounded-2xl object-cover h-40 md:h-80 lg:h-[500px] w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
          <Link to="/contact">
            <Button className="rounded-full px-10 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all duration-300">
              Get Expert Advice
            </Button>
          </Link>
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
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 leading-tight">
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
                  <h3 className="text-xl font-bold text-primary mb-2">NEET qualification</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most international universities require NEET qualification as a mandatory baseline eligibility criterion for Indian students.
                  </p>
                </div>
                <div className="text-center md:text-right group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:ml-auto md:mr-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Degree Recognition</h3>
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
                  <h3 className="text-xl font-bold text-primary mb-2">FMGE Pathways</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We provide specific guidance on FMGE/NEXT examination preparation throughout your international journey.
                  </p>
                </div>
                <div className="text-center md:text-left group">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 group-hover:bg-primary/10 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Expert Counseling</h3>
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
      <section className="section-padding bg-white overflow-hidden border-t border-border">
        <div className="section-container">
          <div
            ref={processReveal.ref}
            className={`scroll-reveal ${processReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6">
                Admission and visa pathway
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We manage every stage from university selection through visa approval and enrollment.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <ProgressSlider activeSlider="step1" duration={5000} className="relative">
                <SliderContent>
                  {processSteps.map((step, index) => (
                    <SliderWrapper key={index} value={step.sliderName}>
                      <div className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl overflow-hidden shadow-2xl p-4 lg:p-8">
                        <div className="order-2 lg:order-1 p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl font-display font-bold text-primary/20">{step.number}</span>
                            <div className="h-px bg-primary/20 flex-1"></div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                            {step.description}
                          </p>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-xl">
                          <img
                            src={step.img}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </SliderWrapper>
                  ))}
                </SliderContent>

                <SliderBtnGroup className="mt-16 grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-border shadow-2xl bg-white dark:bg-neutral-900">
                  {processSteps.map((step, index) => (
                    <SliderBtn
                      key={index}
                      value={step.sliderName}
                      className="text-left cursor-pointer p-8 focus:outline-none transition-all duration-500 border-r border-border last:border-0 relative overflow-hidden group"
                      progressBarClass="bg-primary"
                    >
                      <div className="relative z-10">
                        <span className={cn(
                          "inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 transition-colors duration-300",
                          "bg-primary text-primary-foreground group-data-[active=true]:bg-white group-data-[active=true]:text-primary"
                        )}>
                          {step.label}
                        </span>
                        <h4 className="text-lg font-bold text-primary group-data-[active=true]:text-white transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                    </SliderBtn>
                  ))}
                </SliderBtnGroup>
              </ProgressSlider>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-background">
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
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                      Begin your medical education journey
                    </h2>
                    <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                      Schedule a personalized consultation with our counselors to explore international medical programs.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        Book consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </section>

      <StickyFooter />
    </div>
  );
};

export default International;
