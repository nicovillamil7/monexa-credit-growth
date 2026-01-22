import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  CreditCard,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Star,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Phone,
  Home,
  Car,
  Briefcase,
  Plane,
  GraduationCap,
  Heart,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import CountUpNumber from "@/components/CountUpNumber";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";
import SEO from "@/components/SEO";
import valparHero from "@/assets/valpar-hero.png";

const EsCredito = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trustStats = [
    { value: 56, prefix: "$", suffix: "M+", label: "Préstamos Procesados" },
    { value: 140, suffix: "M+", label: "Puntos Aumentados" },
    { value: 12, suffix: "K+", label: "Negocios Ayudados" },
    { value: 4.8, suffix: "★", label: "Calificación" },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Rechazos constantes",
      description: "Los bancos dicen 'no'",
    },
    {
      icon: TrendingUp,
      title: "Puntaje bajo",
      description: "Sin opciones de financiamiento",
    },
    {
      icon: FileText,
      title: "Deudas en cobranza",
      description: "Afectan tu historial",
    },
  ];

  const aspirations = [
    { icon: Home, title: "Tu casa propia", description: "Hipoteca aprobada" },
    { icon: Car, title: "Tu carro nuevo", description: "Financiamiento fácil" },
    { icon: Briefcase, title: "Tu negocio crece", description: "Capital disponible" },
    { icon: Plane, title: "Esas vacaciones", description: "Viaja sin límites" },
    { icon: GraduationCap, title: "Universidad", description: "Invierte en ti" },
    { icon: Heart, title: "Tranquilidad", description: "Emergencias cubiertas" },
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Reparación de Crédito",
      description: "Eliminamos errores y disputamos información negativa en tu reporte",
      benefits: ["Análisis completo de tu reporte", "Disputas profesionales", "Seguimiento mensual"],
    },
    {
      icon: CreditCard,
      title: "Acceso a Financiamiento",
      description: "Te conectamos con opciones de préstamos y tarjetas de crédito",
      benefits: ["Préstamos personales", "Tarjetas de crédito", "Líneas de crédito"],
    },
  ];

  const steps = [
    { icon: ClipboardList, title: "Llena el Formulario", description: "Completa tus datos en solo 2 minutos", hasCta: true },
    { icon: Phone, title: "Consulta Gratis", description: "Te contactamos para analizar tu caso", hasCta: false },
    { icon: Users, title: "Plan Personalizado", description: "Diseñamos una estrategia a tu medida", hasCta: false },
    { icon: Sparkles, title: "Resultados Reales", description: "Mejoras visibles en tu crédito", hasCta: false },
  ];

  const testimonials = [
    {
      name: "María G.",
      text: "Mi puntaje subió 85 puntos en solo 3 meses. Ahora pude comprar mi carro nuevo.",
      rating: 5,
      result: "+85 puntos",
    },
    {
      name: "Carlos R.",
      text: "Después de años siendo rechazado, finalmente me aprobaron un préstamo. ¡Gracias Monexa!",
      rating: 5,
      result: "Préstamo aprobado",
    },
    {
      name: "Ana M.",
      text: "Eliminaron 4 colecciones de mi reporte. Mi crédito mejoró muchísimo en poco tiempo.",
      rating: 5,
      result: "4 colecciones eliminadas",
    },
    {
      name: "José L.",
      text: "Pasé de 520 a 680 puntos. Ahora califico para mejores tasas de interés.",
      rating: 5,
      result: "+160 puntos",
    },
    {
      name: "Laura S.",
      text: "El equipo de Monexa me guió paso a paso. Muy profesionales y atentos.",
      rating: 5,
      result: "Experiencia excelente",
    },
    {
      name: "Roberto P.",
      text: "Conseguí mi primera tarjeta de crédito gracias a la reparación de mi historial.",
      rating: 5,
      result: "Primera tarjeta",
    },
  ];

  // Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Repara tu Crédito y Obtén Financiamiento | Monexa"
        description="Mejora tu puntaje de crédito y accede a financiamiento rápido. Consulta gratis. Resultados comprobados."
        keywords="reparacion de credito, mejorar credito, prestamos personales, tarjetas de credito, financiamiento"
      />
      
      <LandingHeader onCtaClick={scrollToForm} />

      {/* Hero Section - Dark background with split layout like Home page */}
      <section className="relative bg-[hsl(var(--hero-bg))] overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container py-12 md:py-20 lg:py-24">
          {/* Split layout - text left, image right on desktop */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Consulta 100% Gratis</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[hsl(var(--hero-foreground))] mb-4 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
                Repara tu crédito.{" "}
                <span className="text-primary">Accede a financiamiento.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-[hsl(var(--hero-muted))] mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                ¿Cansado de que te rechacen? Te ayudamos a mejorar tu puntaje de crédito 
                y obtener la aprobación que necesitas.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-5 text-base rounded-full shadow-glow animate-pulse-glow"
                >
                  Solicita tu Consulta Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-8 pt-6 border-t border-[hsl(var(--hero-muted)/0.2)] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">100% Confidencial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">Respuesta en 24hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">Sin Compromiso</span>
                </div>
              </div>
            </div>

            {/* Photo - Desktop only */}
            <div className="hidden md:flex justify-end animate-fade-in">
              <div className="relative">
                {/* Gold accent ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-2xl" />
                
                {/* Image container */}
                <div className="relative w-[300px] lg:w-[400px] xl:w-[500px] aspect-[4/5]">
                  <img 
                    src={valparHero} 
                    alt="Valpar - Experto en Crédito de Monexa" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={500}
                    height={625}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar - Gold Gradient */}
      <section className="py-8 md:py-12 bg-gradient-primary relative overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-4 gap-2 md:gap-8">
            {trustStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-primary-foreground mb-0.5 md:mb-2">
                  <CountUpNumber end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-[9px] sm:text-xs md:text-sm text-primary-foreground/80 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - Harder hitting, ultra-short copy */}
      <section className="py-12 md:py-16 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tu crédito te cierra puertas
            </h2>
            <p className="text-muted-foreground text-sm">
              Cada "no" duele. No tiene que seguir así.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto">
            {problems.map((problem, index) => (
              <Card 
                key={problem.title}
                className="p-4 md:p-5 bg-background border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-11 md:h-11 bg-destructive/10 rounded-xl flex items-center justify-center mb-2 md:mb-3 mx-auto">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{problem.title}</h3>
                <p className="text-muted-foreground text-xs">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aspirational Bridge Section - Asymmetric bento-style layout */}
      <section className="py-12 md:py-16 bg-background relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Con mejor crédito, todo cambia
            </h2>
            <p className="text-muted-foreground text-sm">
              Estas puertas se abren:
            </p>
          </div>

          {/* Bento Grid - Asymmetric layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {/* Large card - Home */}
            <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 relative group">
              <div className="h-full p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-in-up">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Tu casa propia</h3>
                <p className="text-sm text-muted-foreground">Hipoteca aprobada. El sueño de tu hogar está al alcance.</p>
              </div>
            </div>

            {/* Smaller cards */}
            <div className="p-4 md:p-5 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:-translate-y-1 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Tu carro nuevo</h3>
              <p className="text-xs text-muted-foreground">Financiamiento fácil</p>
            </div>

            <div className="p-4 md:p-5 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:-translate-y-1 animate-fade-in-up group" style={{ animationDelay: "0.15s" }}>
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Tu negocio crece</h3>
              <p className="text-xs text-muted-foreground">Capital disponible</p>
            </div>

            <div className="p-4 md:p-5 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:-translate-y-1 animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plane className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Esas vacaciones</h3>
              <p className="text-xs text-muted-foreground">Viaja sin límites</p>
            </div>

            <div className="p-4 md:p-5 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:-translate-y-1 animate-fade-in-up group" style={{ animationDelay: "0.25s" }}>
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Universidad</h3>
              <p className="text-xs text-muted-foreground">Invierte en ti</p>
            </div>

            {/* Wide card - Tranquility */}
            <div className="col-span-2 p-4 md:p-5 bg-gradient-to-r from-muted/40 to-muted/20 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up flex items-center gap-4" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-0.5">Tranquilidad financiera</h3>
                <p className="text-xs text-muted-foreground">Emergencias cubiertas. Paz mental para ti y tu familia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Light background */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Te ayudamos a avanzar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Nuestros servicios están diseñados para transformar tu situación financiera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className="p-6 bg-muted/30 border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary animate-float-slow" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Clean symmetric design */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Cómo Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Un proceso simple de 4 pasos para transformar tu crédito.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-4 relative bg-primary/10">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-7 md:h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-semibold text-foreground text-xs md:text-base mb-1">{step.title}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Centered CTA below steps */}
          <div className="text-center mt-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials - Dark section for contrast */}
      <section className="py-16 bg-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-background mb-3">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-background/60 text-sm">Resultados reales de personas como tú</p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-background transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-background transition-colors hidden md:flex"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(33.333%-11px)] px-1"
                  >
                    <Card className="p-5 bg-background/10 backdrop-blur-sm border-background/20 h-full">
                      {/* Result Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 rounded-full mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary">{testimonial.result}</span>
                      </div>
                      
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-background/90 mb-3 text-sm italic">"{testimonial.text}"</p>
                      <p className="text-xs font-medium text-background/60">— {testimonial.name}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              <button 
                onClick={scrollPrev}
                className="w-9 h-9 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-background transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-9 h-9 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-background transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section - Gold gradient */}
      <section ref={formRef} className="py-16 bg-gradient-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -left-20 top-10 w-48 h-48 text-background/5 animate-float-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <svg className="absolute -right-20 bottom-10 w-64 h-64 text-background/5 animate-float-slow" style={{ animationDelay: "1.5s" }} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Comienza hoy — Es gratis
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm">
                Completa el formulario y un especialista te contactará en menos de 24 horas.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 items-start">
              {/* Benefits List */}
              <div className="md:col-span-2 space-y-3">
                <h3 className="font-semibold text-primary-foreground mb-3 text-sm">¿Por qué Monexa?</h3>
                {[
                  "Consulta inicial 100% gratis",
                  "Sin compromiso de contratar",
                  "Atención personalizada",
                  "Resultados comprobados",
                  "Respuesta rápida garantizada",
                ].map((benefit, index) => (
                  <div 
                    key={benefit} 
                    className="flex items-center gap-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground flex-shrink-0" />
                    <span className="text-primary-foreground/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="md:col-span-3 animate-scale-in">
                <div className="bg-background rounded-2xl p-1 shadow-large">
                  <LeadSubmissionForm variant="embedded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default EsCredito;
