import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$79",
      period: "per month",
      description: "Essential credit repair for individuals starting their journey",
      features: [
        "Credit report analysis",
        "Error disputes with all 3 bureaus",
        "Monthly progress updates",
        "Email support",
        "Personalized action plan",
        "Access to educational resources"
      ]
    },
    {
      name: "Plus",
      price: "$129",
      period: "per month",
      description: "Comprehensive credit repair with enhanced support",
      featured: true,
      features: [
        "Everything in Basic",
        "Score optimization strategies",
        "Bi-weekly progress updates",
        "Phone & email support",
        "Creditor negotiations",
        "Goodwill letter assistance",
        "Priority processing",
        "Credit monitoring alerts"
      ]
    },
    {
      name: "Pro",
      price: "$199",
      period: "per month",
      description: "Premium service with dedicated coaching and identity protection",
      features: [
        "Everything in Plus",
        "Dedicated credit coach",
        "Weekly check-ins",
        "24/7 priority support",
        "Identity theft monitoring",
        "Funding preparation & guidance",
        "Debt consolidation planning",
        "Credit building strategies",
        "Expedited dispute processing"
      ]
    }
  ];

  const addOns = [
    {
      name: "Expedited Processing",
      price: "$49/month",
      description: "Rush handling of disputes and faster bureau follow-ups"
    },
    {
      name: "Identity Monitoring",
      price: "$19/month",
      description: "Real-time alerts for identity theft and suspicious activity"
    },
    {
      name: "Education Bundle",
      price: "$29 one-time",
      description: "Comprehensive credit education courses and resources"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Choose the plan that fits your credit repair needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={plan.featured ? "border-secondary shadow-glow relative" : ""}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="min-h-[3rem]">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
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
                    <Link to="/apply">Choose {plan.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Optional Add-ons</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your plan with additional services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-secondary">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What's Always Included</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">No Setup Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Start immediately without any upfront costs or hidden charges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Cancel Anytime</h3>
                  <p className="text-sm text-muted-foreground">
                    No contracts or commitments. Cancel your service anytime with no penalties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">3-Day Money Back</h3>
                  <p className="text-sm text-muted-foreground">
                    Full refund if you cancel within 3 business days, as required by CROA.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Transparent Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular updates and full visibility into all disputes and actions taken.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Credit Repair Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Choose your plan and get started today. First consultation is always free.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
