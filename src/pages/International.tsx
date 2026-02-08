import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, User, Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import StickyFooter from "@/components/ui/sticky-footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
import SEO from "@/components/SEO";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import AirportTree from "@/components/ui/AirportTree";

import heroVideo from "@/assets/inter-hero.mp4";
import studentTabletImg from "@/assets/international-student-tablet.jpg";
import studentsGroupImg from "@/assets/inter-group.jpg";
import seminarImg from "@/assets/international-seminar.jpg";
import destinationImg from "@/assets/inter-kazakasthan.jpg";
import medicalDeskImg from "@/assets/domestic desk.jpg";
import travelImg from "@/assets/inter-travel.jpg";
import worldMapBg from "@/assets/bg.jpg";
import russiaImg from "@/assets/russia.webp";
import azerbaijanImg from "@/assets/Azerbaijan.jpg";
import kyrgyzstanImg from "@/assets/Kyrgyzstan.jpg";
import uzbekistanImg from "@/assets/Uzbekistan.webp";
import chinaImg from "@/assets/China.jpg";
import bangladeshImg from "@/assets/Bangladesh.webp";
import timorLesteImg from "@/assets/Timor Leste.jpg";
import fmgeAchiever1 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.32 PM (1).jpeg";
import fmgeAchiever2 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.32 PM.jpeg";
import fmgeAchiever3 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.33 PM (1).jpeg";
import fmgeAchiever4 from "@/assets/WhatsApp Image 2026-02-05 at 1.06.33 PM.jpeg";

import airport1 from "@/assets/WhatsApp Image 2026-02-04 at 6.53.51 PM.jpeg";
import airport2 from "@/assets/WhatsApp Image 2026-02-04 at 6.54.26 PM.jpeg";
import airport3 from "@/assets/WhatsApp Image 2026-02-04 at 6.54.27 PM.jpeg";
import airport4 from "@/assets/WhatsApp Image 2026-02-04 at 6.55.10 PM.jpeg";

const destinationsData = [
  {
    id: "russia",
    name: "Russia",
    title: "Russia",
    description: "Russia provides world-class medical education at a low cost compared to private colleges in India. With an HDI score of 0.824 and high literacy, it offers a safe, friendly environment. The straightforward admission process requires only NEET qualification, making it an ideal gateway to a promising medical career.",
    image: russiaImg,
    universities: [
      "Siberian State Medical University",
      "Voronezh State Medical University named after N.N. Burdenko",
      "Volgograd State Medical University",
      "Bashkir State Medical University",
      "Kemerovo State Medical Academy",
      "North Caucasian State Medical University",
      "Kazan State Medical University",
      "Kazan Federal University",
      "Pitirim Sorokin Syktyvkar State University",
      "Ural State Medical University",
      "Omsk State Medical University",
      "Ulyanovsk State Medical University",
      "Samara State Medical University",
      "Ingush State University",
      "Chuvash State University named after I.N. Ulyanov",
      "Yaroslavl State Medical University"
    ]
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    title: "Azerbaijan",
    description: "Azerbaijan offers high-quality medical education with a blend of European and Asian standards. The universities are globally recognized, offering English-medium programs with modern medical technology and extensive clinical training in safe, beautiful cities.",
    image: azerbaijanImg,
    universities: []
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    title: "Kyrgyzstan",
    description: "Kyrgyzstan is an excellent choice for Indian medical aspirants due to its high-quality education at affordable fees and global recognition. With NMC-approved degrees, top-ranked universities, and extensive clinical exposure, it provides a perfect pathway for a successful medical career.",
    image: kyrgyzstanImg,
    universities: [
      "Jalalabad State University",
      "OSH State Medical University",
      "International School of Medicine Kyrgyzstan",
      "Adam University School of Medicine",
      "Asian Medical Institute Kyrgyzstan"
    ]
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    title: "Uzbekistan",
    description: "Emerging as a top choice for Indian students with its simple admission process (NEET only) and high FMGE passing rates. Universities in Tashkent and historic cities like Samarkand offer a safe environment and diverse culture.",
    image: uzbekistanImg,
    universities: [
      "Tashkent Medical Academy",
      "Tashkent Medical Academy Urgench",
      "Tashkent Pediatric Medical Institute",
      "Bukhara State Medical University",
      "Fergana State University"
    ]
  },
  {
    id: "china",
    name: "China",
    title: "China",
    description: "China offers world-class infrastructure and high-quality education at affordable costs. With advanced labs, English-medium programs, and high FMGE passing rates, it remains a top destination. The living expenses are budget-friendly, and the safe environment makes it ideal for international students.",
    image: chinaImg,
    universities: [
      "Soochow University",
      "Nantong University",
      "Zhejiang University",
      "Guangxi Medical University",
      "Huazhong University of Science & Technology",
      "Nanjing Medical University",
      "Fujian Medical University",
      "Xi'an Jiaotong University",
      "Jilin University",
      "Jiangsu University",
      "Shandong University",
      "Guangzhou Medical University",
      "North Sichuan Medical College",
      "Xiamen University",
      "Yangzhou University",
      "Sichuan University",
      "China Three Gorges University",
      "Kunming Medical University",
      "China Medical University",
      "Anhui Medical University",
      "Qingdao University",
      "Southeast University",
      "Dalian Medical University",
      "Jinzhou Medical University"
    ]
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    title: "Bangladesh",
    description: "Bangladesh is a top choice for Indian students due to its medical syllabus and teaching patterns that closely resemble India's, making it easier to clear exams like FMGE/NEXT. With affordable education, a safe environment, and familiar culture (including food and language), it ensures a comfortable and successful academic journey.",
    image: bangladeshImg,
    universities: [
      "Dhaka National Medical College",
      "Sahabuddin Medical College",
      "Maina Moti Medical College",
      "Dr. Sirajuislam Medical College",
      "International Medical College",
      "Tairunnessa Medical College",
      "Enam Medical College",
      "Holi Family Medical College",
      "Anwar Khan Medical College",
      "Ad-din Women's Medical College"
    ]
  },
  {
    id: "timor_leste",
    name: "Timor Leste",
    title: "Timor Leste",
    description: "Timor Leste is a peaceful Southeast Asian nation with a tropical climate and affordable living costs. Medical programs are offered in English, providing students with real-world clinical experience in local hospitals. The degree is recognized internationally, allowing graduates to pursue global medical careers.",
    image: timorLesteImg,
    universities: []
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
  const [isUniListOpen, setIsUniListOpen] = useState(false);
  const [selectedMapCountry, setSelectedMapCountry] = useState<string | null>(null);

  const heroReveal = useScrollReveal();
  const destinationsReveal = useScrollReveal();
  const worldMapReveal = useScrollReveal();
  const eligibilityReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="MBBS Abroad Admissions | GateOfGuidance"
        description="Study MBBS abroad in top medical universities. Expert guidance for admissions in Russia, Uzbekistan, Kyrgyzstan, and more."
      />
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
        <div className="absolute inset-0 bg-[hsl(227,35%,15%)]/50" />

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

      {/* World Map Section */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="section-container">
          <div
            ref={worldMapReveal.ref}
            className={`scroll-reveal ${worldMapReveal.isVisible ? 'is-visible' : ''}`}
          >
            {/* Title */}
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Global Presence</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
                Top Countries for Studying MBBS Abroad
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We help Indian students pursue their medical dreams across multiple countries with NMC-recognized programs.
              </p>
            </div>

            {/* World Map with Country Markers */}
            <div className="relative w-full max-w-5xl mx-auto mb-16">
              <img
                src={worldMapBg}
                alt="World Map"
                className="w-full h-auto rounded-2xl shadow-xl border border-border/50"
              />

              {[
                { name: "Russia", x: "65%", y: "22%" },
                { name: "Kyrgyzstan", x: "60%", y: "38%" },
                { name: "Uzbekistan", x: "55%", y: "36%" },
                { name: "Azerbaijan", x: "47%", y: "37%" },
                { name: "China", x: "72%", y: "45%" },
                { name: "Bangladesh", x: "65%", y: "52%" },
                { name: "Timor Leste", x: "82%", y: "70%" },
              ].map((country) => {
                const isSelected = selectedMapCountry === country.name;
                const isOtherSelected = selectedMapCountry !== null && selectedMapCountry !== country.name;

                return (
                  <div
                    key={country.name}
                    className={cn(
                      "absolute group cursor-pointer transition-all duration-500",
                      isSelected && "z-20 scale-110",
                      isOtherSelected && "opacity-30 scale-90"
                    )}
                    style={{ left: country.x, top: country.y, transform: "translate(-50%, -100%)" }}
                    onClick={() => {
                      const newSelected = isSelected ? null : country.name;
                      setSelectedMapCountry(newSelected);
                      if (newSelected) {
                        const index = destinationsData.findIndex(d => d.name === newSelected);
                        if (index !== -1) setActiveDest(index);
                      }
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className={cn(
                        "bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-lg mb-2 transition-all duration-300 border",
                        isSelected
                          ? "opacity-100 scale-110 border-primary bg-primary text-white shadow-primary/30"
                          : "opacity-0 md:opacity-90 group-hover:opacity-100 group-hover:scale-110 border-border/10",
                        // On mobile, hide names unless selected to prevent overlapping
                        !isSelected && "hidden md:flex"
                      )}>
                        <span className={cn(
                          "text-[10px] md:text-xs font-bold whitespace-nowrap",
                          isSelected ? "text-white" : "text-slate-800"
                        )}>{country.name}</span>
                      </div>

                      <div className="relative">
                        {isSelected && (
                          <>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full opacity-50"></div>
                          </>
                        )}
                        {!isSelected && (
                          <>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full opacity-30"></div>
                          </>
                        )}

                        <svg
                          width={isSelected ? "32" : "24"}
                          height={isSelected ? "44" : "34"}
                          viewBox="0 0 20 28"
                          className={cn(
                            "drop-shadow-lg relative z-10 transition-all duration-300",
                            isSelected ? "-translate-y-2" : "group-hover:-translate-y-2"
                          )}
                        >
                          <path
                            d="M10 0C4.5 0 0 4.5 0 10c0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z"
                            fill={isSelected ? "hsl(var(--primary))" : "#dc2626"}
                          />
                          <circle cx="10" cy="10" r="3.5" fill={isSelected ? "white" : "#fee2e2"} />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Country List Grid - More compact on mobile */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 max-w-4xl mx-auto">
              {[
                "Russia", "Kyrgyzstan", "Uzbekistan", "Azerbaijan", "China",
                "Bangladesh", "Timor Leste"
              ].map((country) => {
                const isSelected = selectedMapCountry === country;
                const isOtherSelected = selectedMapCountry !== null && selectedMapCountry !== country;

                return (
                  <button
                    key={country}
                    onClick={() => {
                      const newSelected = isSelected ? null : country;
                      setSelectedMapCountry(newSelected);
                      if (newSelected) {
                        const index = destinationsData.findIndex(d => d.name === newSelected);
                        if (index !== -1) setActiveDest(index);
                      }
                    }}
                    className={cn(
                      "bg-card border rounded-lg p-3 text-center transition-all duration-300",
                      isSelected
                        ? "bg-primary border-primary text-white shadow-lg scale-105"
                        : isOtherSelected
                          ? "border-border/50 opacity-50"
                          : "border-border/50 hover:bg-primary/5 hover:border-primary/30"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-white" : "text-foreground"
                    )}>{country}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="rounded-full px-10 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all duration-300 hover:scale-105">
                  Explore Programs <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
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
            <div className="grid grid-cols-2 md:grid-cols-5 border border-border divide-x divide-y md:divide-y-0 divide-border mb-8 rounded-lg overflow-hidden bg-card/50">
              {destinationsData.map((dest, index) => (
                <button
                  key={dest.id}
                  onClick={() => {
                    setActiveDest(index);
                    setSelectedMapCountry(dest.name);
                  }}
                  className={`p-4 text-center transition-all duration-300 hover:bg-primary/5 h-full flex items-center justify-center ${activeDest === index ? 'bg-primary text-primary-foreground shadow-inner' : 'bg-transparent text-foreground'}`}
                >
                  <span className="text-xs md:text-sm font-semibold">{dest.name}</span>
                </button>
              ))}
            </div>

            {/* Featured Destination */}
            <div className="grid md:grid-cols-2 gap-12 items-start min-h-[400px]">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl md:sticky md:top-24">
                <img
                  src={destinationsData[activeDest].image}
                  alt={destinationsData[activeDest].name}
                  className="w-full aspect-video object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{destinationsData[activeDest].name}</h3>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-5xl font-display font-bold text-primary leading-tight">
                    {destinationsData[activeDest].title}
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  {destinationsData[activeDest].description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Universities List - Collapsible Dropdown */}
                {destinationsData[activeDest].universities.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <button
                      onClick={() => setIsUniListOpen(!isUniListOpen)}
                      className="w-full flex items-center justify-between bg-card p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-left">
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">Top Medical Colleges</h4>
                          <p className="text-xs text-muted-foreground">Click to view {destinationsData[activeDest].universities.length} universities</p>
                        </div>
                      </div>
                      {isUniListOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />}
                    </button>

                    <div
                      className={`grid gap-3 overflow-hidden transition-all duration-500 ease-in-out ${isUniListOpen ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}
                    >
                      {destinationsData[activeDest].universities.map((uni, idx) => (
                        <div key={idx} className="bg-card p-3 rounded-lg border border-border/60 flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-primary font-bold text-xs">{idx + 1}</span>
                          </div>
                          <span className="text-sm font-medium">{uni}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6">
                  <Link to="/contact" className="inline-block w-full md:w-auto">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 h-auto text-lg font-bold shadow-lg flex items-center justify-center gap-2 group transition-all hover:shadow-primary/20 hover:-translate-y-1 active:scale-95">
                      Get Admission in {destinationsData[activeDest].name}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                          <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-4 md:mb-6">
                            {step.title}
                          </h3>
                          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
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

                <SliderBtnGroup className="mt-4 grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-border shadow-2xl bg-white dark:bg-neutral-900">
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

      {/* FMGE Achievers Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white overflow-hidden border-t border-border">
        <div className="section-container">
          <ImageAutoSlider
            images={[
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4,
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4,
              fmgeAchiever1,
              fmgeAchiever2,
              fmgeAchiever3,
              fmgeAchiever4
            ]}
            subtitle="Success Stories"
            title="FMGE Achievers"
            description="Meet our proud students who cleared FMGE and are now practicing doctors across India"
            duration={25}
            className="py-4"
          />
        </div>
      </section>

      {/* Airport Diaries Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden border-t border-border">
        <div className="section-container">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-base md:text-lg font-semibold text-primary uppercase tracking-wider">Memories</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mt-3 mb-4">
              Airport Diaries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Capturing the excitement and new beginnings as our students embark on their international medical journeys.
            </p>
          </div>
        </div>

        <div className="section-container pb-8">
          <AirportTree
            branches={[
              { image: airport1 },
              { image: airport2 },
              { image: airport3 },
              { image: airport4 },
            ]}
          />
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
                    color={"#2d3552"}
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
