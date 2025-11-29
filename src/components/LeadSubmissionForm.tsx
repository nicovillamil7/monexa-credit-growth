import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const serviceTypes = [
  { value: "credit-repair", label: "Credit Repair" },
  { value: "personal-loan", label: "Personal Loan" },
  { value: "business-funding", label: "Business Funding" },
  { value: "credit-card", label: "Credit Card" },
  { value: "trade-line", label: "Trade Line" },
];

const formSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  fullName: z.string().min(2, "Full name is required").max(100),
  personalEmail: z.string().email("Invalid email address"),
  personalPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  homeAddress: z.string().min(5, "Address is required"),
  ssn: z.string().min(9, "SSN must be 9 digits").max(11),
  creditScore: z.string().min(1, "Credit score is required"),
  referralSource: z.string().optional(),
  // Business-specific fields
  businessName: z.string().optional(),
  businessEmail: z.string().email().optional().or(z.literal("")),
  businessPhone: z.string().optional(),
  businessAddress: z.string().optional(),
  ein: z.string().optional(),
  businessIndustry: z.string().optional(),
  fundingAmount: z.string().optional(),
  numberOfOwners: z.string().optional(),
  naicsCode: z.string().optional(),
  stateOfIncorporation: z.string().optional(),
  existingBusinessCards: z.string().optional(),
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
  const [currentStep, setCurrentStep] = useState(defaultServiceType ? 1 : 0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: defaultServiceType,
      fullName: "",
      personalEmail: "",
      personalPhone: "",
      homeAddress: "",
      ssn: "",
      creditScore: "",
      referralSource: "",
      businessName: "",
      businessEmail: "",
      businessPhone: "",
      businessAddress: "",
      ein: "",
      businessIndustry: "",
      fundingAmount: "",
      numberOfOwners: "",
      naicsCode: "",
      stateOfIncorporation: "",
      existingBusinessCards: "",
    },
  });

  const serviceType = form.watch("serviceType");
  const isBusinessService = serviceType === "business-funding";

  const steps = [
    ...(defaultServiceType ? [] : [{ title: "Service Type", fields: ["serviceType"] }]),
    { title: "Personal Info", fields: ["fullName", "personalEmail", "personalPhone"] },
    { title: "Address & Details", fields: ["homeAddress", "ssn", "creditScore"] },
    ...(isBusinessService
      ? [
          { title: "Business Info", fields: ["businessName", "businessEmail", "businessPhone"] },
          { title: "Business Details", fields: ["businessAddress", "ein", "businessIndustry"] },
          {
            title: "Funding Details",
            fields: ["fundingAmount", "numberOfOwners", "naicsCode", "stateOfIncorporation", "existingBusinessCards"],
          },
        ]
      : []),
    { title: "Additional Info", fields: ["referralSource"] },
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
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "Your information has been submitted successfully.",
    });
    onSuccess?.();
  };

  if (isSubmitted) {
    return (
      <Card className={variant === "embedded" ? "bg-card/10 border-primary-foreground/20" : ""}>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className={`w-16 h-16 ${variant === "embedded" ? "text-primary-foreground" : "text-primary"}`} />
          </div>
          <CardTitle className={`text-2xl text-center ${variant === "embedded" ? "text-primary-foreground" : ""}`}>
            Submission Complete!
          </CardTitle>
          <CardDescription className={variant === "embedded" ? "text-primary-foreground/80 text-center" : "text-center"}>
            Thank you for submitting your information. Our team will review it and contact you within 24-48 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => (window.location.href = "/")} 
            className={`w-full ${variant === "embedded" ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90" : ""}`}
          >
            Return to Home
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Calculate the actual step index for rendering based on whether we skip service type selection
  const getStepIndex = (stepName: string) => {
    return steps.findIndex(s => s.title === stepName);
  };

  return (
    <Card className={variant === "embedded" ? "bg-card/10 border-primary-foreground/20 backdrop-blur-sm" : ""}>
      <CardHeader>
        <div className="space-y-2">
          <div className={`flex justify-between text-sm mb-2 ${variant === "embedded" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className={`text-xl mt-4 ${variant === "embedded" ? "text-primary-foreground" : ""}`}>
          {steps[currentStep].title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Service Type Selection - only show if no default */}
            {!defaultServiceType && currentStep === getStepIndex("Service Type") && (
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                      Select Service Type *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground" : ""}>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Personal Info */}
            {currentStep === getStepIndex("Personal Info") && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="personalEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Personal Email *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="personalPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Personal Phone *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="(555) 123-4567" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Address & Details */}
            {currentStep === getStepIndex("Address & Details") && (
              <>
                <FormField
                  control={form.control}
                  name="homeAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Home Address *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123 Main St, City, State, ZIP" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ssn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Social Security Number *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="XXX-XX-XXXX" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="creditScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Personal Credit Score *
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground" : ""}>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="below-580">Below 580 (Poor)</SelectItem>
                          <SelectItem value="580-669">580-669 (Fair)</SelectItem>
                          <SelectItem value="670-739">670-739 (Good)</SelectItem>
                          <SelectItem value="740-799">740-799 (Very Good)</SelectItem>
                          <SelectItem value="800+">800+ (Excellent)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Business Info - only for business funding */}
            {isBusinessService && currentStep === getStepIndex("Business Info") && (
              <>
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Legal Business Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="ABC Company LLC" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Business Email *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="contact@business.com" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Business Phone *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="(555) 987-6543" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Business Details - only for business funding */}
            {isBusinessService && currentStep === getStepIndex("Business Details") && (
              <>
                <FormField
                  control={form.control}
                  name="businessAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Business Address *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="456 Business Ave, City, State, ZIP" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ein"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        EIN Number *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="XX-XXXXXXX" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessIndustry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Business Industry *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Retail, Technology, Healthcare" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Funding Details - only for business funding */}
            {isBusinessService && currentStep === getStepIndex("Funding Details") && (
              <>
                <FormField
                  control={form.control}
                  name="fundingAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Desired Funding Amount *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="50000" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfOwners"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Number of Owners *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="1" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="naicsCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        NAICS Code *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="XXXXXX" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stateOfIncorporation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        State of Incorporation *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Delaware" 
                          {...field} 
                          className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="existingBusinessCards"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                        Existing Business Credit Cards? *
                      </FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <FormLabel htmlFor="yes" className={`font-normal cursor-pointer ${variant === "embedded" ? "text-primary-foreground" : ""}`}>
                              Yes
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <FormLabel htmlFor="no" className={`font-normal cursor-pointer ${variant === "embedded" ? "text-primary-foreground" : ""}`}>
                              No
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Additional Info */}
            {currentStep === getStepIndex("Additional Info") && (
              <FormField
                control={form.control}
                name="referralSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={variant === "embedded" ? "text-primary-foreground" : ""}>
                      Who referred you?
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Referral name (optional)" 
                        {...field} 
                        className={variant === "embedded" ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 0}
                className={variant === "embedded" ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              {currentStep < totalSteps - 1 ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className={variant === "embedded" ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90" : ""}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  type="submit"
                  className={variant === "embedded" ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90" : ""}
                >
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
