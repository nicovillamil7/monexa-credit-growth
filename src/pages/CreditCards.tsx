import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProp from "@/components/ValueProp";
import { CreditCard, Shield, Gift, Plane, Percent, TrendingUp } from "lucide-react";

const CreditCards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Find Your Perfect Credit Card
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Compare cards designed for your credit profile. Build credit, earn rewards, and manage your finances smarter.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">See Card Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Card Categories */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Card Categories</h2>
            <p className="text-lg text-muted-foreground">Find the right card for your needs and credit profile</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Secured Cards",
                desc: "Build or rebuild credit with a refundable security deposit. Graduate to unsecured cards.",
                features: ["Low approval requirements", "Reports to all 3 bureaus", "Path to unsecured card"]
              },
              {
                icon: Gift,
                title: "Cashback Cards",
                desc: "Earn money back on every purchase. Great for everyday spending and rewards enthusiasts.",
                features: ["1-5% cashback", "No rotating categories", "Sign-up bonuses"]
              },
              {
                icon: Percent,
                title: "Balance Transfer",
                desc: "Pay down existing debt with 0% intro APR periods. Save on interest charges.",
                features: ["0% APR for 12-21 months", "Low or no transfer fees", "Debt consolidation"]
              },
              {
                icon: Plane,
                title: "Travel Rewards",
                desc: "Earn points or miles for travel redemptions. Perfect for frequent travelers.",
                features: ["Earn 2-5x on travel", "Airport lounge access", "No foreign transaction fees"]
              },
              {
                icon: Percent,
                title: "Low APR",
                desc: "Lower interest rates for cardholders who carry a balance month-to-month.",
                features: ["Competitive fixed APR", "No annual fee options", "Simple terms"]
              },
              {
                icon: TrendingUp,
                title: "Credit Building",
                desc: "Specialized cards designed to help you establish or improve your credit score.",
                features: ["Credit monitoring tools", "Regular bureau reporting", "Score tracking"]
              }
            ].map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <category.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{category.desc}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Cards Wisely */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Credit With Smart Card Use</h2>
            <p className="text-lg text-muted-foreground">Follow these best practices to maximize your score</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Keep Utilization Under 30%",
                desc: "Use less than 30% of your available credit. Aim for under 10% for optimal score impact.",
                tip: "If your limit is $1,000, keep your balance below $300"
              },
              {
                title: "Pay On Time, Every Time",
                desc: "Payment history is the biggest factor in your credit score. Set up autopay to never miss a due date.",
                tip: "Even one late payment can drop your score by 100+ points"
              },
              {
                title: "Pay More Than the Minimum",
                desc: "Paying only the minimum prolongs debt and increases interest. Pay in full when possible.",
                tip: "Paying the statement balance in full avoids interest charges"
              },
              {
                title: "Monitor Your Accounts",
                desc: "Check statements regularly for errors or fraud. Use credit monitoring tools to track your progress.",
                tip: "Many cards offer free credit score tracking"
              }
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <div className="bg-secondary/10 p-3 rounded-md">
                    <p className="text-xs font-medium text-secondary">💡 Tip: {item.tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Credit Cards?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ValueProp
              icon={TrendingUp}
              title="Build Credit"
              description="Responsible use reports to bureaus and improves your score over time"
            />
            <ValueProp
              icon={Gift}
              title="Earn Rewards"
              description="Get cashback, points, or miles on purchases you already make"
            />
            <ValueProp
              icon={Shield}
              title="Fraud Protection"
              description="Zero liability for unauthorized charges with better protection than debit"
            />
            <ValueProp
              icon={CreditCard}
              title="Financial Flexibility"
              description="Cover emergencies and manage cash flow with revolving credit"
            />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h2>
              <p className="text-lg text-muted-foreground">Get matched with cards in three easy steps</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Share Your Profile",
                  desc: "Tell us about your credit goals, spending habits, and current credit situation."
                },
                {
                  step: "2",
                  title: "Get Matched",
                  desc: "We analyze your profile and show you cards with high approval odds based on your credit."
                },
                {
                  step: "3",
                  title: "Compare & Apply",
                  desc: "Review card features, rates, and rewards. Apply directly through our secure platform."
                }
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Credit Card FAQs</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>What credit score do I need?</AccordionTrigger>
                <AccordionContent>
                  Requirements vary by card. Secured cards often accept scores as low as 300. Rewards cards typically require good credit (670+). We match you with cards you're likely to qualify for.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>Will applying hurt my credit?</AccordionTrigger>
                <AccordionContent>
                  Checking your pre-qualified offers uses a soft inquiry and does not affect your score. When you formally apply for a card, a hard inquiry will be made, which may temporarily lower your score by a few points.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>How do secured cards work?</AccordionTrigger>
                <AccordionContent>
                  Secured cards require a refundable security deposit (typically $200-$500) that serves as your credit limit. Use the card responsibly, and after 6-12 months of on-time payments, you may graduate to an unsecured card and get your deposit back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>Should I carry a balance to build credit?</AccordionTrigger>
                <AccordionContent>
                  No—this is a common myth. You don't need to carry a balance or pay interest to build credit. Simply using the card and paying the full statement balance by the due date is sufficient.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>How many cards should I have?</AccordionTrigger>
                <AccordionContent>
                  There's no magic number, but 2-3 cards is a good starting point. Having multiple cards can improve your total available credit and lower your overall utilization ratio, which benefits your score.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <CreditCard className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Find Your Next Card Today
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Compare cards tailored to your credit profile with no impact to your score.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">See My Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditCards;
