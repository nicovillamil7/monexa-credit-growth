import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Clock } from "lucide-react";

// Step 1: Contact Info Schema
const contactSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(10, "Número de teléfono inválido"),
});

// Credit info schema
const creditSchema = z.object({
  creditScore: z.string().min(1, "Selecciona tu puntaje crediticio"),
  creditProfile: z.array(z.string()).optional(),
});

// Funding info schema
const fundingSchema = z.object({
  fundingGoal: z.number().min(1000, "El monto mínimo es $1,000"),
  applicantType: z.string().min(1, "Selecciona el tipo de solicitante"),
  yearlyRevenue: z.string().min(1, "Selecciona tus ingresos anuales"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type CreditFormData = z.infer<typeof creditSchema>;
type FundingFormData = z.infer<typeof fundingSchema>;

const creditScoreOptions = [
  { value: "300-580", label: "300-580 (Malo)" },
  { value: "580-650", label: "580-650 (Regular)" },
  { value: "650-710", label: "650-710 (Bueno)" },
  { value: "710-750", label: "710-750 (Muy Bueno)" },
  { value: "750+", label: "750+ (Excelente)" },
  { value: "unknown", label: "No sé mi puntaje crediticio" },
];

const creditProfileOptions = [
  { value: "late_payments_2_years", label: "Pagos atrasados en los últimos 2 años" },
  { value: "late_payments_5_years", label: "Pagos atrasados en los últimos 5 años" },
  { value: "collections", label: "Colecciones o cargos pendientes" },
  { value: "bankruptcy", label: "Bancarrota" },
  { value: "clean", label: "No tengo / Mi crédito está limpio" },
];

const revenueOptions = [
  { value: "$0 - $25,000", label: "$0 - $25,000" },
  { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
  { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
  { value: "$100,000 - $250,000", label: "$100,000 - $250,000" },
  { value: "$250,000+", label: "$250,000+" },
];

const applicantTypeOptions = [
  { value: "individual", label: "Individual / Personal" },
  { value: "business", label: "Negocio / Empresa" },
];

type ServiceType = "credit_repair" | "funding" | null;

export default function SpanishLeadForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Contact form (Step 1)
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  // Credit form (Step 3a or 4b)
  const creditForm = useForm<CreditFormData>({
    resolver: zodResolver(creditSchema),
    defaultValues: {
      creditScore: "",
      creditProfile: [],
    },
  });

  // Funding form (Step 3b)
  const fundingForm = useForm<FundingFormData>({
    resolver: zodResolver(fundingSchema),
    defaultValues: {
      fundingGoal: 0,
      applicantType: "",
      yearlyRevenue: "",
    },
  });

  // Calculate progress based on step and service type
  const getProgress = () => {
    if (step === 1) return 25;
    if (step === 2) return 50;
    if (step === 3) return serviceType === "credit_repair" ? 85 : 70;
    if (step === 4) return 90;
    return 100;
  };

  // Step 1: Submit contact info and INSERT lead
  const handleContactSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { data: lead, error } = await supabase
        .from("funding_leads")
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          terms_accepted: true,
        })
        .select()
        .single();

      if (error) throw error;

      setLeadId(lead.id);
      setStep(2);
      toast({
        title: "¡Información guardada!",
        description: "Tu información de contacto ha sido registrada.",
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al guardar tu información. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Select service type and UPDATE lead
  const handleServiceSelect = async (type: ServiceType) => {
    if (!leadId || !type) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("funding_leads")
        .update({ service_type: type })
        .eq("id", leadId);

      if (error) throw error;

      setServiceType(type);
      setStep(3);
    } catch (error) {
      console.error("Error updating service type:", error);
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 3a: Credit Repair - submit credit info
  const handleCreditSubmit = async (data: CreditFormData) => {
    if (!leadId) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("funding_leads")
        .update({
          credit_score: data.creditScore,
          credit_profile: data.creditProfile || [],
        })
        .eq("id", leadId);

      if (error) throw error;

      setIsComplete(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (error) {
      console.error("Error updating credit info:", error);
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 3b: Funding - submit funding info then go to credit step
  const handleFundingSubmit = async (data: FundingFormData) => {
    if (!leadId) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("funding_leads")
        .update({
          funding_goal: data.fundingGoal,
          applicant_type: data.applicantType,
          yearly_revenue: data.yearlyRevenue,
        })
        .eq("id", leadId);

      if (error) throw error;

      setStep(4); // Go to credit info step
    } catch (error) {
      console.error("Error updating funding info:", error);
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 4b: Credit info for funding path
  const handleFundingCreditSubmit = async (data: CreditFormData) => {
    if (!leadId) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("funding_leads")
        .update({
          credit_score: data.creditScore,
          credit_profile: data.creditProfile || [],
        })
        .eq("id", leadId);

      if (error) throw error;

      setIsComplete(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (error) {
      console.error("Error updating credit info:", error);
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (isComplete) {
    return (
      <Card className="w-full max-w-lg mx-auto shadow-lg">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">¡Solicitud Enviada!</h2>
          <p className="text-muted-foreground mb-6">
            Gracias por tu solicitud. Nuestro equipo la revisará y te contactará en 24-48 horas.
          </p>
          <Button onClick={() => navigate("/")} variant="outline">
            Volver al Inicio
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader>
        <Progress value={getProgress()} className="mb-4" />
        <CardTitle className="text-xl">
          {step === 1 && "Tu Información de Contacto"}
          {step === 2 && "¿Cómo Podemos Ayudarte?"}
          {step === 3 && serviceType === "credit_repair" && "Tu Perfil Crediticio"}
          {step === 3 && serviceType === "funding" && "Detalles de Financiamiento"}
          {step === 4 && "Tu Perfil Crediticio"}
        </CardTitle>
        <CardDescription>
          {step === 1 && "Completa tus datos para comenzar"}
          {step === 2 && "Selecciona el servicio que necesitas"}
          {step === 3 && serviceType === "credit_repair" && "Cuéntanos sobre tu situación crediticia"}
          {step === 3 && serviceType === "funding" && "¿Cuánto capital necesitas?"}
          {step === 4 && "Último paso: tu información crediticia"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Step 1: Contact Info */}
        {step === 1 && (
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={contactForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Pérez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="juan@ejemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Guardando..." : "Siguiente"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Form>
        )}

        {/* Step 2: Upsell + Service Selection */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Upsell Message */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">¡Gracias!</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Tu información ha sido guardada.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">¿Quieres una respuesta más rápida?</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Completa estos datos adicionales y te contactamos en menos de 48 horas con opciones personalizadas.
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Selecciona tu objetivo:</Label>
              
              <button
                type="button"
                onClick={() => handleServiceSelect("credit_repair")}
                disabled={isSubmitting}
                className="w-full p-4 border-2 rounded-lg text-left hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-50"
              >
                <div className="font-semibold">🛠️ Reparación de Crédito</div>
                <div className="text-sm text-muted-foreground">Mejorar mi puntaje crediticio</div>
              </button>

              <button
                type="button"
                onClick={() => handleServiceSelect("funding")}
                disabled={isSubmitting}
                className="w-full p-4 border-2 rounded-lg text-left hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-50"
              >
                <div className="font-semibold">💰 Obtener Financiamiento</div>
                <div className="text-sm text-muted-foreground">Necesito capital para mi proyecto o negocio</div>
              </button>
            </div>

            <Button
              variant="ghost"
              onClick={() => setStep(1)}
              className="w-full"
              disabled={isSubmitting}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Atrás
            </Button>
          </div>
        )}

        {/* Step 3a: Credit Repair - Credit Info */}
        {step === 3 && serviceType === "credit_repair" && (
          <Form {...creditForm}>
            <form onSubmit={creditForm.handleSubmit(handleCreditSubmit)} className="space-y-4">
              <FormField
                control={creditForm.control}
                name="creditScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Puntaje Crediticio</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-2"
                      >
                        {creditScoreOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`score-${option.value}`} />
                            <Label htmlFor={`score-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={creditForm.control}
                name="creditProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Perfil Crediticio (selecciona todos los que apliquen)</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {creditProfileOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`profile-${option.value}`}
                              checked={field.value?.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), option.value]
                                  : (field.value || []).filter((v) => v !== option.value);
                                field.onChange(newValue);
                              }}
                            />
                            <Label htmlFor={`profile-${option.value}`} className="cursor-pointer text-sm">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atrás
                </Button>
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 3b: Funding - Funding Details */}
        {step === 3 && serviceType === "funding" && (
          <Form {...fundingForm}>
            <form onSubmit={fundingForm.handleSubmit(handleFundingSubmit)} className="space-y-4">
              <FormField
                control={fundingForm.control}
                name="fundingGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monto de Financiamiento Deseado</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          type="number"
                          placeholder="50,000"
                          className="pl-7"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={fundingForm.control}
                name="applicantType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Solicitante</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-2"
                      >
                        {applicantTypeOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`type-${option.value}`} />
                            <Label htmlFor={`type-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={fundingForm.control}
                name="yearlyRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingresos Anuales</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-2"
                      >
                        {revenueOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`revenue-${option.value}`} />
                            <Label htmlFor={`revenue-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atrás
                </Button>
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Guardando..." : "Siguiente"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 4: Credit Info for Funding Path */}
        {step === 4 && (
          <Form {...creditForm}>
            <form onSubmit={creditForm.handleSubmit(handleFundingCreditSubmit)} className="space-y-4">
              <FormField
                control={creditForm.control}
                name="creditScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Puntaje Crediticio</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-2"
                      >
                        {creditScoreOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`score4-${option.value}`} />
                            <Label htmlFor={`score4-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={creditForm.control}
                name="creditProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Perfil Crediticio (selecciona todos los que apliquen)</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {creditProfileOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`profile4-${option.value}`}
                              checked={field.value?.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), option.value]
                                  : (field.value || []).filter((v) => v !== option.value);
                                field.onChange(newValue);
                              }}
                            />
                            <Label htmlFor={`profile4-${option.value}`} className="cursor-pointer text-sm">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(3)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atrás
                </Button>
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
