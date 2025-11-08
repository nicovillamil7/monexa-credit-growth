import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProp from "@/components/ValueProp";
import { DollarSign, Clock, Shield, TrendingUp, CheckCircle, FileText } from "lucide-react";

const PersonalLoans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Personal Loans for Every Need
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Get $1,000 to $100,000 with flexible terms and competitive rates. Fast approvals, secure process, and funding in days.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Pre-Qualify Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <ValueProp
              icon={DollarSign}
              title="$1K - $100K"
              description="Flexible loan amounts to match your needs"
            />
            <ValueProp
              icon={Clock}
              title="12-84 Months"
              description="Choose terms that fit your budget"
            />
            <ValueProp
              icon={Shield}
              title="Secure Process"
              description="Bank-level encryption and privacy"
            />
            <ValueProp
              icon={TrendingUp}
              title="Build Credit"
              description="On-time payments boost your score"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Get funded in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Apply Online", desc: "Complete our secure application in minutes" },
              { step: "2", title: "Get Matched", desc: "We find the best loan options for your profile" },
              { step: "3", title: "Review Offers", desc: "Compare rates and terms with no obligation" },
              { step: "4", title: "Get Funded", desc: "Receive funds in your account within days" }
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Your Loan For</h2>
            <p className="text-lg text-muted-foreground">Flexible funding for life's important moments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Debt Consolidation", desc: "Combine multiple debts into one manageable payment" },
              { title: "Emergency Expenses", desc: "Cover unexpected medical bills or repairs" },
              { title: "Business Growth", desc: "Invest in equipment, inventory, or expansion" },
              { title: "Home Improvements", desc: "Renovate, repair, or upgrade your property" }
            ].map((use) => (
              <Card key={use.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{use.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{use.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Requirements</h2>
              <p className="text-lg text-muted-foreground">Here's what you need to apply</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    "Be at least 18 years old (19 in some states)",
                    "Valid government-issued ID",
                    "Proof of income (paystubs, tax returns, or bank statements)",
                    "Active checking or savings account",
                    "Valid phone number and email address",
                    "U.S. citizenship or permanent residency"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{req}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Documents Needed</h2>
              <p className="text-lg text-muted-foreground">Have these ready to speed up your application</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identification", items: ["Driver's license", "State ID", "Passport"] },
                { title: "Income Proof", items: ["Recent paystubs", "Tax returns", "Bank statements"] },
                { title: "Account Info", items: ["Bank account details", "Routing number", "Account number"] }
              ].map((doc) => (
                <Card key={doc.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {doc.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger>How long does approval take?</AccordionTrigger>
                <AccordionContent>
                  Most applications receive a decision within 24-48 hours. Once approved, funds are typically disbursed within 3-5 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Will checking rates affect my credit score?</AccordionTrigger>
                <AccordionContent>
                  No. Our pre-qualification process uses a soft credit pull, which does not impact your credit score. Only when you accept a loan offer will a hard inquiry be made.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger>What credit score do I need?</AccordionTrigger>
                <AccordionContent>
                  We work with a range of credit profiles. While requirements vary by lender, many of our partners accept scores as low as 580. Better credit typically means better rates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Are there any fees?</AccordionTrigger>
                <AccordionContent>
                  Our loan matching service is free. Individual loan offers may include origination fees (typically 1-8% of the loan amount) which will be clearly disclosed before you accept.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Can I pay off my loan early?</AccordionTrigger>
                <AccordionContent>
                  Many of our lending partners allow early payoff with no prepayment penalties. This information will be clearly stated in your loan agreement.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Pre-qualify in minutes with no impact to your credit score.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
