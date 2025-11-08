import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProp from "@/components/ValueProp";
import { TrendingUp, Clock, Shield, CheckCircle, Users, BarChart } from "lucide-react";

const TradeLine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Build Credit History Fast
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Get added as an authorized user to an established credit card and benefit from its positive payment history.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Open a Trade Line</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is a Trade Line */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is a Trade Line?</h2>
              <p className="text-lg text-muted-foreground">
                A credit-building strategy that adds positive payment history to your credit report
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  A trade line is an account that appears on your credit report. When you're added as an <strong>authorized user</strong> 
                  on someone else's credit card (with their permission), that card's payment history, age, and credit limit 
                  can be reported to the credit bureaus under your name.
                </p>
                <p className="text-muted-foreground">
                  This strategy is particularly effective for people with thin credit files, those rebuilding credit, or anyone 
                  looking to boost their score quickly by piggybacking on an established account with excellent payment history.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-6">
              <ValueProp
                icon={TrendingUp}
                title="Score Boost"
                description="Benefit from the primary account holder's positive history"
              />
              <ValueProp
                icon={Clock}
                title="Fast Results"
                description="Typically reports within 30-60 days"
              />
              <ValueProp
                icon={Shield}
                title="No Hard Inquiry"
                description="Adding authorized users doesn't require a credit check"
              />
              <ValueProp
                icon={CheckCircle}
                title="Proven Method"
                description="Used by millions to establish or repair credit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple process, powerful results</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Choose Your Trade Line",
                  desc: "We match you with an established credit card account based on your goals and timeline."
                },
                {
                  step: "2",
                  title: "Get Added as Authorized User",
                  desc: "You're added to the account. You won't receive a physical card or have spending access."
                },
                {
                  step: "3",
                  title: "Account Reports to Bureaus",
                  desc: "The positive payment history, age, and utilization report on your credit file."
                },
                {
                  step: "4",
                  title: "Watch Your Score Grow",
                  desc: "Most users see changes within 30-60 days. Monitor your credit regularly to track progress."
                }
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
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

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Trade Lines</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Instant Credit History",
                desc: "Benefit from years of positive payment history without waiting to build your own."
              },
              {
                icon: Users,
                title: "No Liability",
                desc: "As an authorized user, you're not responsible for payments or debt on the account."
              },
              {
                icon: BarChart,
                title: "Lower Utilization",
                desc: "Adding a card with low utilization can improve your overall credit utilization ratio."
              },
              {
                icon: CheckCircle,
                title: "Established Age",
                desc: "The age of the primary account can increase the average age of your credit history."
              },
              {
                icon: Shield,
                title: "Safe & Compliant",
                desc: "Authorized user trade lines are legal and widely accepted by lenders and credit bureaus."
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                desc: "Choose short-term or long-term placements based on your credit goals and budget."
              }
            ].map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use Trade Lines */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Should Use Trade Lines?</h2>
              <p className="text-lg text-muted-foreground">Trade lines work best for these scenarios</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "New to Credit",
                  desc: "Young adults or recent immigrants with little to no credit history can jumpstart their credit file."
                },
                {
                  title: "Rebuilding Credit",
                  desc: "Those recovering from past credit issues can add positive history to offset negative marks."
                },
                {
                  title: "Thin Credit Files",
                  desc: "If you have few accounts or a short credit history, trade lines can bulk up your profile."
                },
                {
                  title: "Preparing for Major Purchase",
                  desc: "Need a quick score boost before applying for a mortgage, auto loan, or other major financing."
                }
              ].map((scenario) => (
                <Card key={scenario.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{scenario.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Considerations</h2>
            </div>

            <Card className="border-secondary/50">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">✓ Trade lines report to major bureaus</h3>
                  <p className="text-sm text-muted-foreground">Most primary cardholders report to Experian, Equifax, and TransUnion.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Results vary by lender</h3>
                  <p className="text-sm text-muted-foreground">Some lenders give full weight to authorized user accounts, others may discount them.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Not a permanent fix</h3>
                  <p className="text-sm text-muted-foreground">Trade lines are best used as part of a broader credit-building strategy, not a standalone solution.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Choose wisely</h3>
                  <p className="text-sm text-muted-foreground">The account's payment history, age, and utilization must be positive to benefit you.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Timeline matters</h3>
                  <p className="text-sm text-muted-foreground">Reporting can take 30-60 days, so plan ahead if you have a deadline.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade Line FAQs</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger>How much will my score increase?</AccordionTrigger>
                <AccordionContent>
                  Results vary based on your current credit profile, the strength of the trade line, and other factors. Some users see increases of 20-100+ points, but outcomes are not guaranteed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Is this legal and safe?</AccordionTrigger>
                <AccordionContent>
                  Yes. Being added as an authorized user is a common, legal practice. It's been used for decades by parents adding children, spouses adding each other, and credit repair programs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Will I have access to the card?</AccordionTrigger>
                <AccordionContent>
                  No. You won't receive a physical card, account number, or spending privileges. You're added for reporting purposes only.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger>How long does reporting take?</AccordionTrigger>
                <AccordionContent>
                  Most accounts report to the credit bureaus within 30-60 days after you're added as an authorized user. Some may report faster.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Can I be removed from the trade line?</AccordionTrigger>
                <AccordionContent>
                  Yes. Either you or the primary account holder can request removal at any time. Once removed, the account will typically fall off your credit report.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-background rounded-lg px-6">
                <AccordionTrigger>What if the primary account has late payments?</AccordionTrigger>
                <AccordionContent>
                  Negative activity on the primary account can hurt your score. That's why we only match you with accounts that have excellent payment history and low utilization.
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
            <TrendingUp className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Boost Your Credit?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get matched with a trade line that fits your credit goals and timeline.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TradeLine;
