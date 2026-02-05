// Domestic Page - MBBS in India
import { useState } from "react";
import { Link } from "react-router-dom";
import { Percent, Calendar, Award, Users, ArrowRight } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import Navbar from "@/components/landing/Navbar";
import StickyFooter from "@/components/ui/sticky-footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import domesticHeroVideo from "@/assets/domestic hero.mp4";
import domesticStudentsImg from "@/assets/domestic students.jpg";
import domesticDeskImg from "@/assets/domestic desk.jpg";
import domesticCorridorImg from "@/assets/domestic-corridor.jpg";
import domesticDoctorImg from "@/assets/domestic doc.jpg";
import domesticEligibilityImg from "@/assets/domestic eligibilty.jpg";
import domesticNeetImg from "@/assets/dom-neet.jpg";
import domesticCounselingImg from "@/assets/dom-register.jpg";
import domesticClassroomImg from "@/assets/dom-clsroom.jpg";
import domesticAdmissionImg from "@/assets/dom-study.jpg";
import domesticSeatAllotmentImg from "@/assets/dom-seat allotment.jpg";
import domesticGovtCollegeImg from "@/assets/domestic govrn.jpg";
import domesticPrivateImg from "@/assets/domestic pvrt.jpg";

const coursesData = [
  {
    id: "commerce",
    name: "Commerce",
    title: "School of Commerce Courses",
    description: "B.Com (Hons), B.Com (Computer Application), B.Com (Chartered Accountancy), B.Com (with Accounting & Finance), B.Com (Information Technology), B.Com (Cost & Management Accountant), B.Com (Business Process Services), B.Com (Company Secretary), B.Com (Certified Financial Planner), B.Com (E-Commerce), B.Com (Banking & Insurance), B.Com (Professional Accounting).",
    image: domesticGovtCollegeImg,
  },
  {
    id: "science",
    name: "Science",
    title: "School of Science Courses",
    description: "B.Sc. (Computer Science), B.Sc. (Computer Technology), B.Sc. (Embedded & Real-time System), B.Sc. (Biochemistry), B.Sc. (Control Systems), B.Sc. (Computer System & Design), B.Sc. (Microbiology), B.Sc. (Information Technology), B.Sc. (Communication System), B.Sc. (Zoology), B.Sc. (Chemistry), B.Sc. (Botany), B.Sc. (Rural Development Science), B.Sc. (Electronics), B.Sc. (Mathematics), B.Sc. (Industrial Electronics), B.Sc. (Costume Design & Fashion), B.Sc. (Interior Decoration), B.Sc. (Visual Communication), B.Sc. (Mathematics with CA), B.Sc. Cyber Security, B.Sc. (Rehabilitation Science), B.Sc. (Geology), B.Sc. (Physical Education), B.Sc. (Physics), B.Sc. (Psychology), B.Sc. (Microbiology), B.Sc. (Industrial Microbiology), B.Sc. Forensic Science, B.Sc. (Computer Integrated Manufacturing), B.Sc. Information Security & Digital Forensics.",
    image: domesticStudentsImg,
  },
  {
    id: "management",
    name: "Management",
    title: "School of Management Courses",
    description: "B.B.A, B.B.A (Computer Application), B.B.A (International Business), B.C.A (Computer Application), B.B.M (Business Management).",
    image: domesticDeskImg,
  },
  {
    id: "agriculture",
    name: "Agriculture",
    title: "School of Agriculture Courses",
    description: "B.Sc. Agriculture, B.Sc. Horticulture, B.Sc. Fisheries Science, B.Sc. Forestry, B.Sc. Dairy Science.",
    image: domesticDoctorImg,
  },
  {
    id: "law",
    name: "Law",
    title: "School of Law Courses",
    description: "BA - LLB, BBA - LLB, LLB, M.L, LLM (Business Law), LLM (Human Rights).",
    image: domesticCorridorImg,
  },
  {
    id: "arts",
    name: "Arts",
    title: "School of Arts Courses",
    description: "B.A Criminology, B.A (Tamil), B.A (Social Work), B.A (English), B.A (Corporate Secretaryship), B.A (Carnatic Music).",
    image: domesticEligibilityImg,
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    title: "Pharmacy Courses",
    description: "Diploma in Pharmacy, B.Pharm, Pharm.D, M.Pharm in Pharmaceutics, M.Pharm in Industrial Pharmacy, M.Pharm in Pharmacy Practice, M.Pharm in Pharmacology, M.Pharm in Pharmaceutical Analysis, BPT, MPT, MPT Cardio Pulmonary Diseases, MPT Orthopaedics, MPT Neurology, MPT Sports Physiotherapy, MPT Paediatric Neurology, MPT Obstetrics and Gynaecology.",
    image: domesticNeetImg,
  },
  {
    id: "nursing",
    name: "Nursing",
    title: "Nursing Courses",
    description: "B.Sc. Nursing, GNM & ANM, M.Sc. Nursing, Psychiatric Nursing, Medical-Surgical Nursing, Public Health Nursing, Critical Care Nursing, Occupational Health Nursing, Obstetrics and Gynaecology, Pediatric Nursing, Oncology, Orthopaedic Nursing, Neuroscience, Neuroscience Nursing, Nursing Management.",
    image: domesticCounselingImg,
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
    image: domesticSeatAllotmentImg,
  },
  {
    step: "Five",
    title: "Complete admission formalities",
    description: "Report to your college and finalize enrollment with required documentation.",
    image: domesticAdmissionImg,
  },
];

const Domestic = () => {
  const heroReveal = useScrollReveal();
  const whatMbbsReveal = useScrollReveal();
  const competitiveReveal = useScrollReveal();
  const eligibilityReveal = useScrollReveal();
  const hubsReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const [activeHub, setActiveHub] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={domesticHeroVideo} type="video/mp4" />
        </video>

        <div
          ref={heroReveal.ref}
          className={`relative z-10 section-container text-center text-primary-foreground scroll-reveal ${heroReveal.isVisible ? 'is-visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-3xl mx-auto">
            Navigate MBBS admissions with clarity
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We guide you through every step of India's medical education pathway with structured counselling and admission support. Your journey to becoming a doctor starts here.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Enquire
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950">
        <Timeline
          title="What MBBS in India entails"
          description="India's MBBS program spans five and a half years of rigorous medical training followed by a mandatory internship. Your degree holds recognition across India and qualifies you for licensing examinations."
          data={[
            {
              title: "01",
              content: (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Five year course</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Your qualification is recognized by the Medical Council of India and enables practice nationwide.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={domesticStudentsImg}
                      alt="Medical students"
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
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Structured Internship</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Compulsory rotatory internship in recognized hospitals provides hands-on clinical experience essential for independent practice.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={domesticDeskImg}
                      alt="Internship"
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
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Licensing Exam</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Clear the NEXT (National Exit Test) to obtain your license to practice medicine across India and pursue postgraduate studies.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src={domesticCorridorImg}
                      alt="Licensing"
                      className="rounded-2xl object-cover h-40 md:h-80 lg:h-[500px] w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* Highly Competitive Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={competitiveReveal.ref}
            className={`grid md:grid-cols-2 gap-12 items-center rounded-2xl p-8 md:p-12 scroll-reveal ${competitiveReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Highly competitive
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                NEET determines placement with limited government seats and substantial private college options available. We help you navigate these choices based on your merit and financial considerations.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
              <img
                src={domesticDoctorImg}
                alt="Medical professional"
                className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Medical Hubs Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={hubsReveal.ref}
            className={`border-2 border-border rounded-xl p-8 md:p-12 scroll-reveal ${hubsReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Programs</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Courses We Offer
              </h2>
              <p className="text-muted-foreground">
                Comprehensive courses across multiple disciplines to help you build your career.
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 border border-border divide-x divide-border mb-8 rounded-lg overflow-hidden">
              {coursesData.map((course, index) => (
                <button
                  key={course.id}
                  onClick={() => setActiveHub(index)}
                  className={`p-4 text-center transition-all duration-300 ${activeHub === index ? 'bg-primary text-primary-foreground' : 'bg-transparent text-foreground hover:bg-primary/5'}`}
                >
                  <span className="text-xs md:text-sm font-semibold">{course.name}</span>
                </button>
              ))}
            </div>

            {/* Featured Course */}
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={coursesData[activeHub].image}
                  alt={coursesData[activeHub].name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">Courses Offered</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 leading-tight">
                    {coursesData[activeHub].title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {coursesData[activeHub].description}
                </p>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="rounded-full px-8 flex items-center gap-2 group">
                      Enquire about {coursesData[activeHub].name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div
            ref={eligibilityReveal.ref}
            className={`scroll-reveal ${eligibilityReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-12">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Eligibility criteria for MBBS admission
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                NEET is the single entrance examination for all MBBS seats in India. Your score determines both government and private college eligibility based on merit and cutoff marks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="space-y-12">
                {eligibilityItems.slice(0, 2).map((item) => (
                  <div key={item.title} className="text-center md:text-right group">
                    <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:ml-auto md:mr-0 mb-4 transition-colors group-hover:bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl" />
                <img
                  src={domesticEligibilityImg}
                  alt="Student"
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl border-4 border-background"
                />
              </div>

              <div className="space-y-12">
                {eligibilityItems.slice(2).map((item) => (
                  <div key={item.title} className="text-center md:text-left group">
                    <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 transition-colors group-hover:bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
          <div
            ref={processReveal.ref}
            className={`scroll-reveal ${processReveal.isVisible ? 'is-visible' : ''}`}
          >
            <div className="text-center mb-12">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Your path to medical college
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                India's admission process follows a structured timeline with counselling determining your final seat allocation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center text-center p-6 border border-border rounded-2xl hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{step.description}</p>
                  <div className="w-full aspect-video overflow-hidden rounded-xl bg-muted">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
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
                      Schedule a personalized consultation with our experienced counsellors today.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        Book now
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

export default Domestic;
