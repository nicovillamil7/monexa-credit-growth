import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, FileText, Users, Shield, Zap, Wrench, ArrowRight, Target, FileCheck } from "lucide-react";
import creditRepairIcon from "@/assets/credit-repair-icon.png";

const Repair = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Clean up your credit. Grow your score.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Dispute errors, optimize utilization, and build positive history—step by step.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Start Credit Review</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive credit repair services designed to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Error Disputes</CardTitle>
                <CardDescription>
                  Challenge inaccurate information on your credit reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Late payments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Collections accounts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Charge-offs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Hard inquiries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Score Optimization</CardTitle>
                <CardDescription>
                  Strategic improvements to boost your credit score
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Utilization strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Account mix optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    On-time payment plans
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Credit age management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Expert Coaching</CardTitle>
                <CardDescription>
                  Personalized guidance for long-term credit health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Credit habit coaching
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Budgeting strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Reporting cadence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    Action plans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven, step-by-step approach to credit repair
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 opacity-20" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  icon: FileCheck,
                  title: "Credit Audit & Plan",
                  description: "Comprehensive review of your credit reports and personalized action plan"
                },
                {
                  icon: FileText,
                  title: "Dispute & Follow-ups",
                  description: "Challenge errors with credit bureaus and creditors, monitor progress"
                },
                {
                  icon: TrendingUp,
                  title: "Score Growth Checkpoints",
                  description: "Regular check-ins to track improvements and adjust strategies"
                },
                {
                  icon: Target,
                  title: "Funding Readiness",
                  description: "Prepare you for loan applications and help you access funding"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="relative overflow-hidden group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-background">
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <CardContent className="pt-8 pb-6 text-center relative">
                        <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-accent items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-medium">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Basic",
                  price: "$79",
                  period: "per month",
                  features: [
                    "Credit report analysis",
                    "Error disputes",
                    "Monthly updates",
                    "Email support"
                  ]
                },
                {
                  name: "Plus",
                  price: "$129",
                  period: "per month",
                  features: [
                    "Everything in Basic",
                    "Score optimization",
                    "Bi-weekly updates",
                    "Phone support",
                    "Creditor negotiations"
                  ],
                  featured: true
                },
                {
                  name: "Pro",
                  price: "$199",
                  period: "per month",
                  features: [
                    "Everything in Plus",
                    "Priority processing",
                    "Dedicated coach",
                    "Identity monitoring",
                    "Funding preparation"
                  ]
                }
              ].map((plan, index) => (
                <Card key={index} className={plan.featured ? "border-secondary shadow-glow" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.featured ? "accent" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <Link to="/pricing">Choose Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Compliance & Expectations</h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Timeline:</strong> Typical review cycles occur every 30-45 days. 
                    Credit bureaus have up to 30 days to investigate disputes. Results vary based on individual circumstances.
                  </p>
                  <p>
                    <strong className="text-foreground">No Guarantees:</strong> While we work diligently on your behalf, 
                    we cannot guarantee specific results. Credit repair is a process that depends on many factors, including 
                    the accuracy of information and creditor responses.
                  </p>
                  <p>
                    <strong className="text-foreground">CROA Compliance:</strong> Monexa operates in full compliance with 
                    the Credit Repair Organizations Act (CROA). You have the right to cancel services within 3 days of signing up.
                  </p>
                  <p>
                    <strong className="text-foreground">Your Rights:</strong> You have the right to dispute inaccurate 
                    information directly with credit bureaus at no cost. Our service provides expertise, advocacy, and 
                    comprehensive support throughout the process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Zap className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Credit Repair Journey
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get a free credit review and personalized action plan today.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Start Credit Review</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repair;
