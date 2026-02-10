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
import { cn } from "@/lib/utils";
import domesticHeroVideo from "@/assets/domestic-hero.mp4";
import domesticStudentsImg from "@/assets/domestic-students.jpg";
import domesticDeskImg from "@/assets/domestic-desk.jpg";
import domesticCorridorImg from "@/assets/domestic-corridor.jpg";
import domesticDoctorImg from "@/assets/domestic-doctor.jpg";
import domesticDocImg from "@/assets/domestic-doc.jpg";
import domesticEligibilityImg from "@/assets/domestic-eligibility.jpg";
import domesticNeetImg from "@/assets/dom-neet.jpg";
import domesticCounselingImg from "@/assets/dom-register.jpg";
import domesticClassroomImg from "@/assets/dom-clsroom.jpg";
import domesticAdmissionImg from "@/assets/dom-study.jpg";
import domesticSeatAllotmentImg from "@/assets/domestic-seat-allotment.jpg";
import domesticGovtCollegeImg from "@/assets/domestic-govt-college.jpg";
import domesticPrivateImg from "@/assets/domestic-private.jpg";
import internationalSeminarImg from "@/assets/international-seminar.jpg";
import verifiedUniImg from "@/assets/verified-uni.jpg";
import engineeringImg from "@/assets/engineeering.jpeg";
import commerceImg from "@/assets/commerce.jpeg";
import scienceImg from "@/assets/science.jpeg";
import artsImg from "@/assets/arts.jpeg";
import agriImg from "@/assets/agri.jpeg";
import nursingImg from "@/assets/nursing.jpeg";
import pharmacyImg from "@/assets/pharmacy.jpeg";
import lawImg from "@/assets/law.jpeg";
import SEO from "@/components/SEO";

const coursesData = [
  {
    id: "engineering",
    name: "Engineering",
    title: "School of Engineering",
    courses: [
      "Automobile Engineering", "Aerospace Engineering", "Automotive Engineering",
      "Agricultural Engineering", "Bio Medical Engineering", "Biotechnology",
      "Civil Engineering", "Mechanical Engineering", "Chemical Engineering",
      "Fashion Technology", "Information Technology", "Metallurgical Engineering",
      "Petroleum Engineering", "AI & Data Science", "AI & Machine Learning",
      "Computer Science & Business Systems", "Textile Technology", "Mechatronics Engineering",
      "Marine Engineering", "Nanotechnology Engineering", "Computer Science & Engineering",
      "Electrical & Electronics Engineering", "Electronics & Communication Engineering",
      "Instrumentation & Control Engineering", "Robotics & Automation Engineering",
      "Food Processing and Engineering"
    ],
    image: engineeringImg,
  },
  {
    id: "commerce",
    name: "Commerce",
    title: "School of Commerce",
    courses: ["B.Com (Hons)", "B.Com (Computer Application)", "B.Com (Chartered Accountancy)", "B.Com (with Accounting & Finance)", "B.Com (Information Technology)", "B.Com (Cost & Management Accountant)", "B.Com (Business Process Services)", "B.Com (Company Secretary)", "B.Com (Certified Financial Planner)", "B.Com (E-Commerce)", "B.Com (Banking & Insurance)", "B.Com (Professional Accounting)"],
    image: commerceImg,
  },
  {
    id: "science",
    name: "Science",
    title: "School of Science",
    courses: ["B.Sc. (Computer Science)", "B.Sc. (Computer Technology)", "B.Sc. (Embedded & Real-time System)", "B.Sc. (Biochemistry)", "B.Sc. (Control Systems)", "B.Sc. (Computer System & Design)", "B.Sc. (Microbiology)", "B.Sc. (Information Technology)", "B.Sc. (Communication System)", "B.Sc. (Zoology)", "B.Sc. (Chemistry)", "B.Sc. (Botany)", "B.Sc. (Rural Development Science)", "B.Sc. (Electronics)", "B.Sc. (Mathematics)", "B.Sc. (Industrial Electronics)", "B.Sc. (Costume Design & Fashion)", "B.Sc. (Interior Decoration)", "B.Sc. (Visual Communication)", "B.Sc. (Mathematics with CA)", "B.Sc. Cyber Security", "B.Sc. (Rehabilitation Science)", "B.Sc. (Geology)", "B.Sc. (Physical Education)", "B.Sc. (Physics)", "B.Sc. (Psychology)", "B.Sc. (Industrial Microbiology)", "B.Sc. Forensic Science", "B.Sc. (Computer Integrated Manufacturing)", "B.Sc. Information Security & Digital Forensics"],
    image: scienceImg,
  },
  {
    id: "management_arts",
    name: "Management & Arts",
    title: "School of Management & Arts",
    courses: [
      "B.B.A", "B.B.A (Computer Application)", "B.B.A (International Business)", "B.C.A (Computer Application)", "B.B.M (Business Management)",
      "B.A Criminology", "B.A (Tamil)", "B.A (Social Work)", "B.A (English)", "B.A (Corporate Secretaryship)", "B.A (Carnatic Music)"
    ],
    image: artsImg,
  },
  {
    id: "agriculture",
    name: "Agriculture",
    title: "School of Agriculture",
    courses: ["B.Sc. Agriculture", "B.Sc. Horticulture", "B.Sc. Fisheries Science", "B.Sc. Forestry", "B.Sc. Dairy Science"],
    image: agriImg,
  },
  {
    id: "law",
    name: "Law",
    title: "School of Law",
    courses: ["BA - LLB", "BBA - LLB", "LLB", "M.L", "LLM (Business Law)", "LLM (Human Rights)"],
    image: lawImg,
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    title: "School of Pharmacy",
    courses: ["Diploma in Pharmacy", "B.Pharm", "Pharm.D", "M.Pharm in Pharmaceutics", "M.Pharm in Industrial Pharmacy", "M.Pharm in Pharmacy Practice", "M.Pharm in Pharmacology", "M.Pharm in Pharmaceutical Analysis", "BPT", "MPT", "MPT Cardio Pulmonary Diseases", "MPT Orthopaedics", "MPT Neurology", "MPT Sports Physiotherapy", "MPT Paediatric Neurology", "MPT Obstetrics and Gynaecology"],
    image: pharmacyImg,
  },
  {
    id: "nursing",
    name: "Nursing",
    title: "School of Nursing",
    courses: ["B.Sc. Nursing", "GNM & ANM", "M.Sc. Nursing", "Psychiatric Nursing", "Medical-Surgical Nursing", "Public Health Nursing", "Critical Care Nursing", "Occupational Health Nursing", "Obstetrics and Gynaecology", "Pediatric Nursing", "Oncology", "Orthopaedic Nursing", "Neuroscience", "Neuroscience Nursing", "Nursing Management"],
    image: nursingImg,
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
      <SEO
        title="MBBS in India Admissions | GateOfGuidance"
        description="Study MBBS in India. Get expert guidance for NEET, college selection, and admissions in top Indian medical colleges."
      />
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={domesticHeroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-slate-900/40 z-0" />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 section-container text-center text-white scroll-reveal ${heroReveal.isVisible ? 'is-visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-3xl mx-auto drop-shadow-lg">
            Navigate MBBS admissions with clarity
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
            We guide you through every step of India's medical education pathway with structured counselling and admission support. Your journey to becoming a doctor starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 min-w-[200px]">
                Enquire Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-lg rounded-full backdrop-blur-md transition-all hover:scale-105 active:scale-95 min-w-[200px] bg-transparent">
                Explore More
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
                src={domesticDocImg}
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

            {/* Courses Tabs - Box Style matching International Page */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border border-border divide-x divide-y lg:divide-y-0 divide-border mb-12 rounded-xl overflow-hidden bg-white shadow-md">
              {coursesData.map((course, index) => (
                <button
                  key={course.id}
                  onClick={() => setActiveHub(index)}
                  className={cn(
                    "min-h-[60px] md:min-h-[80px] p-2 md:p-4 text-center transition-all duration-300 hover:bg-primary/5 h-full flex items-center justify-center",
                    activeHub === index ? "bg-primary text-primary-foreground" : "bg-transparent text-slate-700"
                  )}
                >
                  <span className="text-[11px] md:text-sm font-bold tracking-tight uppercase">{course.name}</span>
                </button>
              ))}
            </div>

            {/* Featured Course Content */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl lg:sticky lg:top-40 ring-1 ring-border/50 mt-12">
                <img
                  src={coursesData[activeHub].image}
                  alt={coursesData[activeHub].name}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
                    {coursesData[activeHub].title}
                  </h3>
                  <div className="h-1.5 w-20 bg-primary rounded-full mt-4"></div>
                </div>

                <ul className="text-muted-foreground text-sm md:text-lg leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {coursesData[activeHub].courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2 group/item">
                      <span className="text-primary font-bold mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                      <span className="text-foreground/80 font-medium">{course}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <Link to="/contact" className="inline-block w-full md:w-auto">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-4 h-auto text-lg font-bold shadow-lg flex items-center justify-center gap-2 group transition-all hover:shadow-primary/20 hover:-translate-y-1 active:scale-95 w-full md:w-auto">
                      Admission in {coursesData[activeHub].name}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                    className="absolute inset-0 -z-10 opacity-40 transition-opacity duration-1000 ease-in-out"
                    quantity={200}
                    color={"#2d3552"}
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
