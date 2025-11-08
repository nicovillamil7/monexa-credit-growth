import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProp from "@/components/ValueProp";
import SplitHero from "@/components/SplitHero";
import ImageSection from "@/components/ImageSection";
import Timeline from "@/components/Timeline";
import { DollarSign, Clock, Shield, TrendingUp, CheckCircle } from "lucide-react";
import personalLoansHero from "@/assets/personal-loans-hero.jpg";
import homeImprovement from "@/assets/home-improvement.jpg";
import businessGrowth from "@/assets/business-growth.jpg";

const PersonalLoans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Split Hero Section */}
      <SplitHero
        title="Personal Loans for Every Need"
        description="Get $1,000 to $100,000 with flexible terms and competitive rates. Fast approvals, secure process, and funding in days."
        ctaText="Pre-Qualify Now"
        ctaLink="/apply"
        imageSrc={personalLoansHero}
        imageAlt="Person celebrating financial approval"
      />

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

      {/* How It Works - Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Get funded in four simple steps</p>
          </div>

          <Timeline
            steps={[
              { step: "1", title: "Apply Online", description: "Complete our secure application in minutes" },
              { step: "2", title: "Get Matched", description: "We find the best loan options for your profile" },
              { step: "3", title: "Review Offers", description: "Compare rates and terms with no obligation" },
              { step: "4", title: "Get Funded", description: "Receive funds in your account within days" }
            ]}
          />
        </div>
      </section>

      {/* Use Cases with Images */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Your Loan For</h2>
            <p className="text-lg text-muted-foreground">Flexible funding for life's important moments</p>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            <ImageSection
              title="Home Improvements"
              description="Transform your living space with renovations, repairs, or upgrades. Whether it's a new kitchen, bathroom remodel, or roof replacement, we've got you covered."
              imageSrc={homeImprovement}
              imageAlt="Family planning home improvements"
              imageOnLeft={false}
            >
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Kitchen & bathroom remodels</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Roof repairs & replacements</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>HVAC & energy efficiency upgrades</span>
                </li>
              </ul>
            </ImageSection>

            <ImageSection
              title="Business Growth"
              description="Invest in your business with funding for equipment, inventory, marketing, or expansion. Fuel your entrepreneurial dreams with competitive rates."
              imageSrc={businessGrowth}
              imageAlt="Business owner in their shop"
              imageOnLeft={true}
            >
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Equipment & inventory purchases</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Marketing & advertising campaigns</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Business expansion & franchising</span>
                </li>
              </ul>
            </ImageSection>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Debt Consolidation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Combine multiple high-interest debts into one manageable payment with a lower rate.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Simplify multiple payments</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Lower interest rates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Emergency Expenses</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cover unexpected medical bills, car repairs, or urgent family needs quickly and securely.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Fast approval process</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Funding within days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility - Sidebar Layout */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Requirements</h2>
                <p className="text-muted-foreground">
                  Here's what you need to apply for a personal loan through our platform.
                </p>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>How long does approval take?</AccordionTrigger>
                <AccordionContent>
                  Most applications receive a decision within 24-48 hours. Once approved, funds are typically disbursed within 3-5 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>Will checking rates affect my credit score?</AccordionTrigger>
                <AccordionContent>
                  No. Our pre-qualification process uses a soft credit pull, which does not impact your credit score. Only when you accept a loan offer will a hard inquiry be made.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>What credit score do I need?</AccordionTrigger>
                <AccordionContent>
                  We work with a range of credit profiles. While requirements vary by lender, many of our partners accept scores as low as 580. Better credit typically means better rates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-muted/30 rounded-lg px-6">
                <AccordionTrigger>Are there any fees?</AccordionTrigger>
                <AccordionContent>
                  Our loan matching service is free. Individual loan offers may include origination fees (typically 1-8% of the loan amount) which will be clearly disclosed before you accept.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-muted/30 rounded-lg px-6">
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
