import { useRef } from "react";
import { Link } from "react-router-dom";
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
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import CountUpNumber from "@/components/CountUpNumber";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";
import SEO from "@/components/SEO";

const EsCredito = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trustStats = [
    { value: 500, suffix: "+", label: "Clientes Satisfechos" },
    { value: 95, suffix: "%", label: "Tasa de Satisfacción" },
    { value: 4, suffix: "+", label: "Años de Experiencia" },
    { value: 100, suffix: "+", label: "Puntos Promedio" },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "No te aprueban préstamos",
      description: "Los bancos te rechazan por tu historial crediticio",
    },
    {
      icon: TrendingUp,
      title: "Tu puntaje es muy bajo",
      description: "Un puntaje bajo limita tus oportunidades financieras",
    },
    {
      icon: FileText,
      title: "Deudas en cobranza",
      description: "Las colecciones afectan tu crédito negativamente",
    },
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
    { icon: FileText, title: "Consulta Gratis", description: "Analizamos tu situación sin costo" },
    { icon: Users, title: "Plan Personalizado", description: "Creamos una estrategia a tu medida" },
    { icon: Sparkles, title: "Resultados Reales", description: "Mejoras visibles en tu crédito" },
  ];

  const testimonials = [
    {
      name: "María G.",
      text: "Mi puntaje subió 85 puntos en solo 3 meses. Ahora pude comprar mi carro nuevo.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      text: "Después de años siendo rechazado, finalmente me aprobaron un préstamo. ¡Gracias Monexa!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Repara tu Crédito y Obtén Financiamiento | Monexa"
        description="Mejora tu puntaje de crédito y accede a financiamiento rápido. Consulta gratis. Resultados comprobados."
        keywords="reparacion de credito, mejorar credito, prestamos personales, tarjetas de credito, financiamiento"
      />
      
      <LandingHeader onCtaClick={scrollToForm} />

      {/* Hero Section - Dark Background */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-card via-card to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary animate-float-slow" />
              <span className="text-sm text-primary font-medium">Consulta 100% Gratis</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Repara tu crédito.{" "}
              <span className="text-primary">Accede a financiamiento.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              ¿Cansado de que te rechacen? Te ayudamos a mejorar tu puntaje de crédito 
              y obtener la aprobación que necesitas.
            </p>

            {/* CTA Button */}
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow animate-pulse-glow animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Solicita tu Consulta Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Respuesta en 24hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Sin Compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar - Gold Gradient */}
      <section className="py-12 bg-gradient-primary relative overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Tu crédito te está frenando?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Muchas personas enfrentan estos problemas. No estás solo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <Card 
                key={problem.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-destructive animate-float-slow" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Te ayudamos a avanzar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestros servicios están diseñados para transformar tu situación financiera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className="p-8 bg-card/80 backdrop-blur-md border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary animate-float-slow" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
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

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cómo Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple de 3 pasos para transformar tu crédito.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col md:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 relative">
                    <step.icon className="w-8 h-8 text-primary animate-float-slow" style={{ animationDelay: `${index * 0.3}s` }} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[180px]">{step.description}</p>
                </div>
                
                {/* Connector Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-primary/50 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 bg-card/80 backdrop-blur-md border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-medium text-muted-foreground">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} className="py-20 bg-gradient-to-br from-card via-card to-muted/50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -left-20 top-20 w-64 h-64 text-primary/5 animate-float-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <svg className="absolute -right-20 bottom-20 w-80 h-80 text-primary/5 animate-float-slow" style={{ animationDelay: "1.5s" }} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comienza hoy — Es gratis
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Completa el formulario y un especialista te contactará en menos de 24 horas.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Benefits List */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-semibold text-foreground mb-4">¿Por qué Monexa?</h3>
                {[
                  "Consulta inicial 100% gratis",
                  "Sin compromiso de contratar",
                  "Atención personalizada",
                  "Resultados comprobados",
                  "Respuesta rápida garantizada",
                ].map((benefit, index) => (
                  <div 
                    key={benefit} 
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="md:col-span-3 animate-scale-in">
                <LeadSubmissionForm variant="embedded" />
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
