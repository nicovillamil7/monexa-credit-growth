import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  CreditCard, 
  LineChart, 
  Shield, 
  Zap, 
  CheckCircle,
  TrendingUp,
  FileCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Funding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get the capital you need to grow.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              We match you with personal loans, credit cards, and trade line options with high approval odds.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">See Your Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Snapshot */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Eligibility Check</h2>
              <p className="text-lg text-muted-foreground">
                Soft-pull prequalification with no impact to your credit score
              </p>
            </div>

            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-secondary" />
                      Basic Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        18+ years old (19+ in some states)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Valid government-issued ID
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        U.S. citizen or permanent resident
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Active bank account
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-secondary" />
                      Verification Needed
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Proof of income (paystubs, tax returns)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Employment verification
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Identity verification
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                        Bank account ownership
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funding Options</h2>
            <p className="text-lg text-muted-foreground">
              Multiple paths to access the capital you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={DollarSign}
              title="Personal Loans"
              description="Fixed APR with predictable monthly payments"
              href="/funding/personal-loans"
              features={[
                "Loan amounts: $1,000 - $100,000",
                "Terms: 12 to 84 months",
                "Quick decisions (often same-day)",
                "Debt consolidation, emergency funds, growth capital"
              ]}
            />
            <ProductCard
              icon={CreditCard}
              title="Credit Cards"
              description="Flexible spending with rewards and benefits"
              href="/funding/credit-cards"
              features={[
                "Rewards programs (cashback, travel)",
                "Balance transfer options",
                "No/low annual fee cards",
                "Build credit with responsible use"
              ]}
            />
            <ProductCard
              icon={LineChart}
              title="Trade Line"
              description="Build credit history with authorized user accounts"
              href="/funding/trade-line"
              features={[
                "Establish positive payment history",
                "Regular reporting to bureaus",
                "Designed for score growth",
                "No hard inquiry required"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Monexa Funding */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Monexa Funding?</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">High Approval Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Smart matching algorithms connect you with lenders most likely to approve your application
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Fast Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  Streamlined applications mean you get answers quickly, often within hours
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Secure Application</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-level encryption and strict privacy controls protect your sensitive information
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Growth Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  We help you choose options that not only meet your needs but also build your credit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Will pre-qualification affect my credit score?</AccordionTrigger>
                <AccordionContent>
                  No. Our initial pre-qualification uses a soft pull and does not impact your credit score. 
                  A hard inquiry may occur when you formally apply with a lender, but you'll be informed before this happens.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to get approved?</AccordionTrigger>
                <AccordionContent>
                  Many applicants receive initial decisions within hours, and some lenders can fund approved loans 
                  as quickly as the next business day. Timing varies by product type and lender requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What credit score do I need?</AccordionTrigger>
                <AccordionContent>
                  We work with lenders across the credit spectrum. Whether you have excellent credit or are rebuilding, 
                  we can help you find options. Your specific eligibility depends on multiple factors beyond just your credit score.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Is my information secure?</AccordionTrigger>
                <AccordionContent>
                  Yes. We use bank-level encryption (256-bit SSL) to protect your data, and we never share your information 
                  without your explicit consent. Our security practices comply with industry standards and regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What documents do I need?</AccordionTrigger>
                <AccordionContent>
                  Typically, you'll need: government-issued ID, proof of income (paystubs or tax returns), 
                  bank statements, and proof of address. Some lenders may require additional documentation 
                  depending on the loan amount and your situation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to See Your Options?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get prequalified in minutes without affecting your credit score.
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

export default Funding;
