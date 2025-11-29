import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";
import InteractiveUseCases from "@/components/InteractiveUseCases";
import { 
  Clock, 
  RefreshCw, 
  Briefcase, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Users,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import personalLoansHero from "@/assets/personal-loans-hero.jpg";
import homeImprovement from "@/assets/home-improvement.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import cardUsage from "@/assets/card-usage.jpg";

const PersonalLoans = () => {
  const partnerLogos = [
    "OneMain Financial",
    "LendUp",
    "Avant",
    "Best Egg",
    "LendingPoint",
    "Discover",
    "Prosper",
    "LendingClub"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Small Business Owner",
      content: "Monexa helped me consolidate my debt and improve my credit score. The process was seamless!",
      rating: 5
    },
    {
      name: "James T.",
      role: "Healthcare Professional",
      content: "Fast approval and great rates. I was able to cover unexpected medical expenses without stress.",
      rating: 5
    },
    {
      name: "Maria L.",
      role: "New Homeowner",
      content: "Thanks to Monexa, I was able to fund my home renovation project. Highly recommend!",
      rating: 5
    },
    {
      name: "David K.",
      role: "Freelancer",
      content: "The flexibility in repayment terms made all the difference. I could focus on growing my business without financial stress.",
      rating: 5
    },
    {
      name: "Emily R.",
      role: "Teacher",
      content: "Excellent customer service and transparent rates. No hidden fees, just straightforward help when I needed it most.",
      rating: 5
    },
    {
      name: "Michael P.",
      role: "Recent Graduate",
      content: "Monexa made my dream of traveling possible. Quick approval and reasonable monthly payments.",
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
                Your goals deserve the right funding.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Whether it's a new home, a car, college tuition, or that dream vacation—we help you get there with personalized loan solutions.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            
            {/* Image Grid */}
            <div className="relative">
              <div className="bg-muted rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={personalLoansHero} alt="Professional consultation" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={homeImprovement} alt="Happy customer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={businessGrowth} alt="Business meeting" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={cardUsage} alt="Working professional" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                      <img src={personalLoansHero} alt="Team collaboration" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                      <img src={businessGrowth} alt="Office work" className="w-full h-full object-cover" />
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

      {/* Flexible Funding Strategies - White background for contrast */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              PERSONAL FUNDING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Flexible personal funding strategies.
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Dedicated to more than just providing loans; we're here to empower you to achieve your financial goals. Whether you're looking to consolidate debt, finance a major purchase, or improve your credit score, our dedicated team will work closely with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Approvals</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our advanced application process ensures fast decisions, so you get the funding you need without unnecessary waiting times.
                </p>
                <Link to="/apply" className="inline-flex items-center text-sm font-medium text-foreground hover:underline">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Choose repayment options that align with your cash flow and growth plans. Terms from 12 to 84 months available.
                </p>
                <Link to="/apply" className="inline-flex items-center text-sm font-medium text-foreground hover:underline">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Solutions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Access a wide range of funding products, from personal loans to credit building solutions.
                </p>
                <Link to="/apply" className="inline-flex items-center text-sm font-medium text-foreground hover:underline">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seamless Funding Section - With dot pattern */}
      <section className="py-20 bg-muted/50 bg-dot-pattern relative">
        <div className="container relative">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless personal funding<br />made easy.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              With Monexa, secure funding with confidence and simplicity. Our solutions offer flexible terms, competitive rates, and a streamlined application process to get you funded faster.
            </p>
          </div>

          {/* Alternating Content Sections */}
          <div className="space-y-24">
            {/* Section 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img src={homeImprovement} alt="Tailored funding" className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Tailored funding for every stage of your life.
                </h3>
                <p className="text-muted-foreground">
                  Monexa provides versatile funding options for individuals with diverse financial needs. Whether you're consolidating debt, planning for life's milestones, or managing unexpected expenses, our team ensures you're supported every step of the way.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "First-Time Home Buyers", desc: "Get the funding for your dream home purchase" },
                    { title: "Students & Parents", desc: "Finance college tuition and education costs" },
                    { title: "Car Buyers", desc: "Drive away in your new vehicle with great rates" },
                    { title: "Vacation Planners", desc: "Fund your next adventure without breaking the bank" }
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
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" asChild>
                  <Link to="/apply">Apply Today</Link>
                </Button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Why choose Monexa?
                </h3>
                <p className="text-muted-foreground">
                  At Monexa, we're committed to helping you achieve your financial goals quickly and efficiently. Whether you need to consolidate debt, cover medical expenses, or plan for a major life event, our personalized loan options and dedicated team ensure a smooth experience.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: TrendingUp, text: "High Approval Rates" },
                    { icon: Users, text: "Personalized Solutions" },
                    { icon: RefreshCw, text: "Flexible Repayment Terms" },
                    { icon: Zap, text: "Smart-Lending Technology" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link to="/submit-info">Meet Your Advisor</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-large">
                  <img src={businessGrowth} alt="Why choose Monexa" className="w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Use Cases Section */}
      <InteractiveUseCases />

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
                CLIENT STORIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Hear from our clients.
              </h2>
              <p className="text-muted-foreground max-w-md">
                Real stories from real people who achieved their financial goals with Monexa.
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
      <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
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
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to make it happen?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg">
                Whether it's a home, car, education, or vacation—your goals are within reach. Fill out the form and get matched with the right loan for you.
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Quick approvals in as fast as 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Competitive rates tailored to you</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>Flexible terms from 12 to 84 months</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span>No hidden fees or surprises</span>
                </li>
              </ul>
            </div>
            
            {/* Right side - Form */}
            <div className="relative">
              <LeadSubmissionForm defaultServiceType="personal-loan" variant="embedded" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
