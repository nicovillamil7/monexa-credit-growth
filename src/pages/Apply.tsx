import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("type") || "loans";
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you shortly.",
    });
    setStep(5);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Services</h1>
              <p className="text-lg text-muted-foreground">
                Complete your application in just a few minutes
              </p>
            </div>

            {step < 5 && (
              <div className="mb-8">
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                          step >= num
                            ? "bg-gradient-accent text-accent-foreground shadow-glow"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {num}
                      </div>
                      {num < 4 && (
                        <div
                          className={`h-1 w-12 md:w-24 mx-2 ${
                            step > num ? "bg-secondary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs md:text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                  <span>Profile</span>
                  <span>Intent</span>
                  <span>Details</span>
                  <span>Consent</span>
                </div>
              </div>
            )}

            {step === 5 ? (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-accent mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <CheckCircle className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for applying. Our team will review your application and contact you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Check your email for next steps and important documents.
                    </p>
                    <Button variant="accent" size="lg" asChild>
                      <a href="/">Return to Home</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {step === 1 && "Your Profile"}
                      {step === 2 && "What Are You Looking For?"}
                      {step === 3 && "Tell Us More"}
                      {step === 4 && "Review & Consent"}
                    </CardTitle>
                    <CardDescription>
                      {step === 1 && "Let's start with some basic information"}
                      {step === 2 && "Select the services you're interested in"}
                      {step === 3 && "Help us understand your specific needs"}
                      {step === 4 && "Review and agree to our terms"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {step === 1 && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="ny">New York</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <Tabs defaultValue={defaultTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="loans">Loans</TabsTrigger>
                          <TabsTrigger value="cards">Credit Cards</TabsTrigger>
                          <TabsTrigger value="repair">Repair</TabsTrigger>
                        </TabsList>
                        <TabsContent value="loans" className="space-y-4 mt-6">
                          <p className="text-sm text-muted-foreground">
                            We'll help you find personal loan options with competitive rates.
                          </p>
                        </TabsContent>
                        <TabsContent value="cards" className="space-y-4 mt-6">
                          <p className="text-sm text-muted-foreground">
                            Discover credit cards that match your credit profile and goals.
                          </p>
                        </TabsContent>
                        <TabsContent value="repair" className="space-y-4 mt-6">
                          <p className="text-sm text-muted-foreground">
                            Start repairing your credit and building a stronger financial future.
                          </p>
                        </TabsContent>
                      </Tabs>
                    )}

                    {step === 3 && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="income">Annual Income Range</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-25k">$0 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                              <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                              <SelectItem value="100k+">$100,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employment">Employment Type</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                              <SelectItem value="self-employed">Self-employed</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="creditScore">Estimated Credit Score Range</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="300-579">300-579 (Poor)</SelectItem>
                              <SelectItem value="580-669">580-669 (Fair)</SelectItem>
                              <SelectItem value="670-739">670-739 (Good)</SelectItem>
                              <SelectItem value="740-799">740-799 (Very Good)</SelectItem>
                              <SelectItem value="800-850">800-850 (Excellent)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {step === 4 && (
                      <>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <Checkbox id="terms" required />
                            <div className="space-y-1">
                              <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I agree to the Terms of Service and Privacy Policy
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                By checking this box, you consent to our terms and privacy practices.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Checkbox id="consent" required />
                            <div className="space-y-1">
                              <Label htmlFor="consent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I authorize a soft credit pull for prequalification
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                This will not affect your credit score.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Checkbox id="contact" required />
                            <div className="space-y-1">
                              <Label htmlFor="contact" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I agree to be contacted about my application
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                We'll use your provided contact information to follow up.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-xs text-muted-foreground">
                          <p className="mb-2">
                            <strong>CROA Disclosure:</strong> You have the right to cancel this contract within 3 
                            business days of signing without penalty or obligation. Results are not guaranteed and 
                            may vary.
                          </p>
                        </div>
                      </>
                    )}

                    <div className="flex gap-4 pt-6">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(step - 1)}
                          className="flex-1"
                        >
                          Back
                        </Button>
                      )}
                      {step < 4 ? (
                        <Button
                          type="button"
                          variant="hero"
                          onClick={() => setStep(step + 1)}
                          className="flex-1"
                        >
                          Continue
                        </Button>
                      ) : (
                        <Button type="submit" variant="accent" className="flex-1">
                          Submit Application
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
