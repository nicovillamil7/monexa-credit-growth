import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const creditScoreOptions = [
  { value: "300-580", label: "300-580" },
  { value: "580-650", label: "580-650" },
  { value: "650-710", label: "650-710" },
  { value: "710-750", label: "710-750" },
  { value: "750+", label: "750+" },
  { value: "unknown", label: "I don't know my credit score" },
];

const creditProfileOptions = [
  { value: "late-2-years", label: "Late payments within 2 years" },
  { value: "late-5-years", label: "Late payments within 5 years" },
  { value: "collections", label: "Collections or charge-offs (open or closed)" },
  { value: "bankruptcy", label: "Bankruptcy" },
  { value: "clean", label: "No, I don't know / My credit is clean" },
];

const revenueOptions = [
  { value: "$0-$25,000", label: "$0 - $25,000" },
  { value: "$25,000-$50,000", label: "$25,000 - $50,000" },
  { value: "$50,000-$100,000", label: "$50,000 - $100,000" },
  { value: "$100,000-$250,000", label: "$100,000 - $250,000" },
  { value: "$250,000+", label: "$250,000+" },
];

const formSchema = z.object({
  // Step 1 - Funding Details
  fundingGoal: z.string().min(1, "Please enter your funding goal"),
  applicantType: z.enum(["individual", "business"], {
    required_error: "Please select if you are an individual or business",
  }),
  yearlyRevenue: z.string().min(1, "Please select your yearly revenue"),
  // Step 2 - Credit Information
  creditScore: z.string().min(1, "Please select your credit score range"),
  creditProfile: z.array(z.string()).min(1, "Please select at least one option"),
  // Step 3 - Contact Information
  firstName: z.string().min(2, "First name is required").max(50),
  lastName: z.string().min(2, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadSubmissionFormProps {
  defaultServiceType?: string;
  variant?: "default" | "embedded";
  onSuccess?: () => void;
}

export default function LeadSubmissionForm({ 
  defaultServiceType = "", 
  variant = "default",
  onSuccess 
}: LeadSubmissionFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fundingGoal: "",
      applicantType: undefined,
      yearlyRevenue: "",
      creditScore: "",
      creditProfile: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      termsAccepted: false,
    },
  });

  const steps = [
    { title: "Funding Details", fields: ["fundingGoal", "applicantType", "yearlyRevenue"] },
    { title: "Credit Information", fields: ["creditScore", "creditProfile"] },
    { title: "Contact Information", fields: ["firstName", "lastName", "email", "phone", "termsAccepted"] },
  ];

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const validateStep = async () => {
    const fieldsToValidate = steps[currentStep].fields as (keyof FormValues)[];
    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("funding_leads").insert({
        funding_goal: parseInt(data.fundingGoal.replace(/[^0-9]/g, "")),
        applicant_type: data.applicantType,
        yearly_revenue: data.yearlyRevenue,
        credit_score: data.creditScore,
        credit_profile: data.creditProfile,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        terms_accepted: data.termsAccepted,
        service_type: defaultServiceType || "general",
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmbedded = variant === "embedded";

  if (isSubmitted) {
    return (
      <Card className={isEmbedded ? "bg-card border-border shadow-lg" : ""}>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">
            Application Submitted!
          </CardTitle>
          <p className="text-muted-foreground text-center mt-2">
            Thank you for your application. Our team will review it and contact you within 24-48 hours.
          </p>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => (window.location.href = "/")} 
            className="w-full"
          >
            Return to Home
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={isEmbedded ? "bg-card border-border shadow-lg" : ""}>
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-2 text-muted-foreground">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-xl mt-4">
          {steps[currentStep].title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1 - Funding Details */}
            {currentStep === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="fundingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Goal *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input 
                            type="text"
                            inputMode="numeric"
                            placeholder="50,000" 
                            className="pl-7"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9]/g, "");
                              const formatted = value ? parseInt(value).toLocaleString() : "";
                              field.onChange(formatted);
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="applicantType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you an individual or a business? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col space-y-3"
                        >
                          <div className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-accent/50 cursor-pointer">
                            <RadioGroupItem value="individual" id="individual" />
                            <label htmlFor="individual" className="flex-1 cursor-pointer font-medium">
                              Individual
                            </label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-accent/50 cursor-pointer">
                            <RadioGroupItem value="business" id="business" />
                            <label htmlFor="business" className="flex-1 cursor-pointer font-medium">
                              Business
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearlyRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gross Yearly Revenue *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your yearly revenue" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {revenueOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Step 2 - Credit Information */}
            {currentStep === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="creditScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your credit score? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col space-y-2"
                        >
                          {creditScoreOptions.map((option) => (
                            <div 
                              key={option.value}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-accent/50 cursor-pointer"
                            >
                              <RadioGroupItem value={option.value} id={`score-${option.value}`} />
                              <label htmlFor={`score-${option.value}`} className="flex-1 cursor-pointer font-medium">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="creditProfile"
                  render={() => (
                    <FormItem>
                      <FormLabel>Do you have any negative items on your credit profile? *</FormLabel>
                      <div className="flex flex-col space-y-2 mt-2">
                        {creditProfileOptions.map((option) => (
                          <FormField
                            key={option.value}
                            control={form.control}
                            name="creditProfile"
                            render={({ field }) => (
                              <div 
                                className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-accent/50 cursor-pointer"
                              >
                                <Checkbox
                                  id={`profile-${option.value}`}
                                  checked={field.value?.includes(option.value)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    if (checked) {
                                      field.onChange([...current, option.value]);
                                    } else {
                                      field.onChange(current.filter((v) => v !== option.value));
                                    }
                                  }}
                                />
                                <label htmlFor={`profile-${option.value}`} className="flex-1 cursor-pointer font-medium">
                                  {option.label}
                                </label>
                              </div>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Step 3 - Contact Information */}
            {currentStep === 2 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg border border-input">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="cursor-pointer">
                          I agree to the Terms and Conditions and Privacy Policy *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormMessage />
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              
              {currentStep < totalSteps - 1 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Funded"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
