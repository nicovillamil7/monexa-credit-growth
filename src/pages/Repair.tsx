import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";
import InteractiveUseCases from "@/components/InteractiveUseCases";
import SEO from "@/components/SEO";
import { creditRepairServiceSchema, faqSchema } from "@/lib/seo-schemas";
import { 
  FileText, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Shield, 
  Zap, 
  Star,
  ChevronLeft,
  ChevronRight,
  Target,
  Wrench
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
// Using Unsplash for high-quality lifestyle images
const happyHomeowners = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80&auto=format"; // Family looking at house from outside
const businessRealEstate = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80&auto=format"; // Commercial building
const corporateFinance = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80&auto=format"; // Modern corporate office
const businessSuccess = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80&auto=format"; // Business team meeting
const apartmentLiving = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80&auto=format"; // Modern apartment interior
const collegeEducation = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=80&auto=format"; // Graduation caps celebration
const carPurchase = "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop&q=80&auto=format"; // Normal sedan car
const businessHandshake = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80&auto=format"; // Business deal/handshake

const Repair = () => {
  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const partnerLogos = [
    "Experian",
    "Equifax",
    "TransUnion",
    "FICO",
    "Credit Karma",
    "myFICO",
    "IdentityForce",
    "Credit Sesame"
  ];

  const testimonials = [
    {
      name: "Anthony W.",
      role: "Home Buyer",
      content: "After credit repair with Monexa, my score went from 580 to 720. I finally qualified for my mortgage!",
      rating: 5
    },
    {
      name: "Michelle S.",
      role: "Small Business Owner",
      content: "They removed 5 negative items from my report. The process was smooth and the results were incredible.",
      rating: 5
    },
    {
      name: "Derek L.",
      role: "Auto Buyer",
      content: "I thought I'd never get approved for a car loan. Monexa helped me clean up my credit and now I'm driving my dream car.",
      rating: 5
    },
    {
      name: "Patricia M.",
      role: "Single Parent",
      content: "The team was so patient and helpful. They explained everything clearly and got real results for my credit.",
      rating: 5
    },
    {
      name: "James C.",
      role: "Recent Graduate",
      content: "Student loan mistakes had tanked my score. Monexa helped dispute errors and I saw a 90-point increase.",
      rating: 5
    },
    {
      name: "Sandra K.",
      role: "Retiree",
      content: "After a divorce, my credit was a mess. The Monexa team helped me rebuild and start fresh.",
      rating: 5
    }
  ];

  // Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const faqData = [
    {
      question: "How long does credit repair take?",
      answer: "Most clients see improvements within 30-90 days, though results vary based on individual credit situations. We provide monthly updates on your progress."
    },
    {
      question: "Can you remove negative items from my credit report?",
      answer: "We dispute inaccurate, unverifiable, or unfair items with credit bureaus. If items are accurate, we help you develop strategies to minimize their impact."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Credit Repair Services | Fix Your Credit Score | Monexa"
        description="Professional credit repair services. Dispute errors, remove negative items, boost your credit score. Free credit review. Results in 30-90 days. CROA compliant."
        keywords="credit repair, fix credit score, dispute credit errors, remove collections, credit repair company, improve credit rating"
        structuredData={[creditRepairServiceSchema, faqSchema(faqData)]}
      />
      <Header />
      
      {/* Hero Section - Clean Design */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fix your credit. Unlock your dreams.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Qualify for mortgages, auto loans, and better rates. Remove errors, boost your score, and open doors to home ownership, car financing, and business growth.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                onClick={scrollToForm}
              >
                Start Credit Review
              </Button>
            </div>
            
            {/* Image Grid */}
            <div className="relative">
              <div className="bg-muted rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={happyHomeowners} alt="Family looking at dream house from outside ready to buy with improved credit" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={businessSuccess} alt="Business team meeting for funding approval" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={collegeEducation} alt="College graduation ceremony students throwing caps celebrating education success" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={apartmentLiving} alt="Modern apartment interior for qualified renters" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                      <img src={businessHandshake} alt="Business deal handshake after securing funding" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={carPurchase} alt="Normal sedan car purchase approved with better credit score and auto loan" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip - Social Proof */}
      <section className="py-8 bg-muted border-y border-border">
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-12 whitespace-nowrap">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <span key={index} className="text-lg font-medium text-muted-foreground/60">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credit Repair Services - White background for contrast */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              WHAT YOU CAN ACHIEVE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your credit repair opens doors.
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Better credit isn't just a number—it's your ticket to major life milestones. Here's what our clients achieve after repairing their credit with Monexa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Buy Your Dream Home</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Qualify for mortgage approvals and secure better interest rates. A 100-point credit score increase can save you $50K+ over the life of your loan.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Lower mortgage rates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Easier loan approval
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Qualify to rent apartments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Approved for Auto Loans</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Drive off the lot with confidence. Better credit means lower monthly payments, reduced interest rates, and access to the vehicles you want.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Lower APR on car loans
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Higher approval chances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Save thousands in interest
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unlock Better Rates</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Access business funding, credit cards with rewards, and personal loans at competitive rates. Good credit saves you money on everything.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Business funding access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Premium credit cards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    Lower interest on all loans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credit Repair Process Section - With dot pattern */}
      <section className="py-20 bg-muted/50 bg-dot-pattern relative">
        <div className="container relative">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your path to<br />better credit.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our proven process has helped thousands of clients improve their credit scores and achieve their financial goals. We handle the hard work while you focus on your future.
            </p>
          </div>

          {/* Alternating Content Sections */}
          <div className="space-y-24">
            {/* Section 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img src={businessRealEstate} alt="Business partners purchasing commercial warehouse property" className="w-full h-80 object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Get approved for the things that matter.
                </h3>
                <p className="text-muted-foreground">
                  Our credit repair service helps you qualify for mortgages, auto loans, and business funding. We've helped 12,000+ clients remove errors, boost their scores, and achieve their financial goals—from buying homes to starting businesses.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Home Buying", desc: "Qualify for mortgages with better rates" },
                    { title: "Auto Loans", desc: "Get approved for car financing" },
                    { title: "Lower Rates", desc: "Save thousands on all credit products" },
                    { title: "Business Funding", desc: "Access capital to grow your business" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                  onClick={scrollToForm}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Why Monexa gets results.
                </h3>
                <p className="text-muted-foreground">
                  We've helped 12,000+ clients qualify for mortgages, auto loans, and business funding. Our proven process combines expert dispute filing, strategic score optimization, and personalized coaching to help you achieve real-world financial goals.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Target, text: "140M+ Credit Points Increased" },
                    { icon: Shield, text: "CROA Compliant & Transparent" },
                    { icon: Users, text: "12,000+ Businesses Funded" },
                    { icon: Zap, text: "Results in 30-90 Days" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={scrollToForm}
                >
                  See If You Qualify
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img src={corporateFinance} alt="Professional financial institution office representing trusted credit services" className="w-full h-80 object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Use Cases Section */}
      <InteractiveUseCases scrollTargetId="apply-form" />

      {/* Testimonials Section - Carousel Grid */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                SUCCESS STORIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Real results from real clients.
              </h2>
              <p className="text-muted-foreground max-w-md">
                Hear from people who transformed their credit and achieved their goals with Monexa.
              </p>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-muted transition-colors flex items-center justify-center disabled:opacity-50"
                disabled={!canScrollPrev}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50"
                disabled={!canScrollNext}
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div 
                    className={`group relative p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-medium ${
                      index === 0 
                        ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground' 
                        : 'bg-card border border-border hover:border-primary/20'
                    }`}
                  >
                    {/* Quote mark */}
                    <div className={`absolute top-4 right-6 text-5xl font-serif leading-none ${
                      index === 0 ? 'text-primary-foreground/20' : 'text-primary/10'
                    }`}>
                      "
                    </div>
                    
                    <div className="relative">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${
                            index === 0 
                              ? 'fill-primary-foreground text-primary-foreground' 
                              : 'fill-primary text-primary'
                          }`} />
                        ))}
                      </div>
                      
                      <p className={`text-base leading-relaxed mb-6 line-clamp-4 ${
                        index === 0 ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {testimonial.content}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-auto">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                          index === 0 
                            ? 'bg-primary-foreground/20 text-primary-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${index === 0 ? 'text-primary-foreground' : 'text-foreground'}`}>
                            {testimonial.name}
                          </p>
                          <p className={`text-xs ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Embedded Form - Asymmetric design */}
      <section id="apply-form" className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Asymmetric decorative shapes */}
        <svg 
          className="absolute top-0 left-0 w-full h-32 -translate-y-full" 
          viewBox="0 0 1440 128" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 128L60 117.3C120 107 240 85 360 80C480 75 600 85 720 90.7C840 96 960 96 1080 90.7C1200 85 1320 75 1380 69.3L1440 64V128H1380C1320 128 1200 128 1080 128C960 128 840 128 720 128C600 128 480 128 360 128C240 128 120 128 60 128H0Z" 
            className="fill-primary"
          />
        </svg>
        
        {/* Floating decorative curves */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
            <circle cx="500" cy="100" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="500" cy="100" r="250" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="500" cy="100" r="200" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <path d="M0 400 Q 200 200 400 300" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M0 350 Q 200 150 400 250" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M0 300 Q 200 100 400 200" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side - Text */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Wrench className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start your credit repair journey.
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg">
                Get a free credit review and personalized action plan. Our experts are ready to help you take control of your credit.
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Free credit report analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Professional dispute filing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Ongoing progress tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </div>
            
            {/* Right side - Form */}
            <div className="relative">
              <LeadSubmissionForm defaultServiceType="credit-repair" variant="embedded" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repair;