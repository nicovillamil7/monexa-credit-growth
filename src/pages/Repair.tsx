import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";
import InteractiveUseCases from "@/components/InteractiveUseCases";
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
import creditScoreGauge from "@/assets/credit-score-gauge.jpg";
import creditScorePhone from "@/assets/credit-score-phone.png";
import personalLoansHero from "@/assets/personal-loans-hero.jpg";

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section - Clean Design */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Clean up your credit. Unlock your future.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Dispute errors, remove negative items, and build a credit profile that opens doors to better rates and more opportunities.
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
                      <img src={creditScoreGauge} alt="Credit score gauge" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={personalLoansHero} alt="Financial freedom" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={creditScorePhone} alt="Credit monitoring app" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={creditScoreGauge} alt="Score improvement" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                      <img src={personalLoansHero} alt="Consultation" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={creditScorePhone} alt="Credit progress" className="w-full h-full object-cover" />
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
              CREDIT REPAIR
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive credit repair services.
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our expert team works with credit bureaus and creditors on your behalf to dispute errors, negotiate removals, and develop strategies to improve your credit score.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Error Disputes</h3>
                <p className="text-muted-foreground text-sm">
                  Challenge inaccurate information on your credit reports including late payments, collections, charge-offs, and incorrect accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Score Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic improvements to boost your score through utilization management, account mix optimization, and payment history coaching.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Coaching</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized guidance from credit experts who help you understand your report, build better habits, and maintain long-term credit health.
                </p>
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
                  <img src={creditScoreGauge} alt="Credit analysis" className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  We fight for your credit rights.
                </h3>
                <p className="text-muted-foreground">
                  Our team of credit experts analyzes your reports, identifies errors and negative items, and creates a personalized strategy to improve your score. We challenge inaccuracies and negotiate with creditors on your behalf.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Credit Report Analysis", desc: "Full review of all three bureau reports" },
                    { title: "Error Identification", desc: "Find inaccurate and disputable items" },
                    { title: "Dispute Filing", desc: "Professional disputes with bureaus" },
                    { title: "Progress Tracking", desc: "Regular updates on your improvements" }
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
                  Get Your Free Review
                </Button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Why choose Monexa for credit repair?
                </h3>
                <p className="text-muted-foreground">
                  With years of experience and thousands of satisfied clients, we know what it takes to improve credit scores. Our transparent process and dedicated support team ensure you're never left in the dark.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Target, text: "Results-Driven Approach" },
                    { icon: Shield, text: "CROA Compliant Process" },
                    { icon: Users, text: "Dedicated Support Team" },
                    { icon: Zap, text: "Fast, Efficient Service" }
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
                  Talk to an Expert
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img src={creditScorePhone} alt="Credit monitoring" className="w-full h-80 object-cover" />
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