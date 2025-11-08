import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueProp from "@/components/ValueProp";
import ImageSection from "@/components/ImageSection";
import { CreditCard, Shield, Gift, Plane, Percent, TrendingUp, CheckCircle } from "lucide-react";
import creditCardsHero from "@/assets/credit-cards-hero.jpg";
import cardUsage from "@/assets/card-usage.jpg";
import travelRewards from "@/assets/travel-rewards.jpg";

const CreditCards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Card Image */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-large animate-fade-in">
                <img
                  src={creditCardsHero}
                  alt="Premium credit cards"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Categories - Masonry Style */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Card Categories</h2>
            <p className="text-lg text-muted-foreground">Find the right card for your needs and credit profile</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Secured Cards",
                desc: "Build or rebuild credit with a refundable security deposit. Graduate to unsecured cards.",
                features: ["Low approval requirements", "Reports to all 3 bureaus", "Path to unsecured card"],
                highlight: true
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
                features: ["Earn 2-5x on travel", "Airport lounge access", "No foreign transaction fees"],
                highlight: true
              },
              {
                icon: TrendingUp,
                title: "Credit Building",
                desc: "Specialized cards designed to help you establish or improve your credit score.",
                features: ["Credit monitoring tools", "Regular bureau reporting", "Score tracking"]
              },
              {
                icon: Percent,
                title: "Low APR",
                desc: "Lower interest rates for cardholders who carry a balance month-to-month.",
                features: ["Competitive fixed APR", "No annual fee options", "Simple terms"]
              }
            ].map((category) => (
              <Card 
                key={category.title} 
                className={`hover:shadow-large transition-all hover:-translate-y-1 ${
                  category.highlight ? 'md:row-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30' : ''
                }`}
              >
                <CardHeader>
                  <category.icon className={`${category.highlight ? 'h-12 w-12' : 'h-10 w-10'} text-primary mb-4`} />
                  <CardTitle className={category.highlight ? 'text-2xl' : 'text-xl'}>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm text-muted-foreground mb-4 ${category.highlight ? 'text-base' : ''}`}>
                    {category.desc}
                  </p>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tips - Zigzag Layout with Images */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Credit With Smart Card Use</h2>
            <p className="text-lg text-muted-foreground">Follow these best practices to maximize your score</p>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            <ImageSection
              title="Use Your Card Regularly"
              description="Make small purchases and pay them off each month. Consistent activity shows lenders you can manage credit responsibly. This builds a positive payment history over time."
              imageSrc={cardUsage}
              imageAlt="Person using credit card at cafe"
              imageOnLeft={false}
            >
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <p className="text-sm font-medium">💡 Pro Tip: Set up autopay for subscriptions like Netflix or Spotify, then pay off the full balance monthly.</p>
              </div>
            </ImageSection>

            <ImageSection
              title="Maximize Travel Rewards"
              description="Travel cards offer incredible value with points multipliers, airport lounge access, and travel protections. Use them for flights, hotels, and travel expenses to earn maximum rewards."
              imageSrc={travelRewards}
              imageAlt="Traveler at airport"
              imageOnLeft={true}
            >
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <p className="text-sm font-medium">✈️ Insider Tip: Book travel through card portals for bonus points and price protection benefits.</p>
              </div>
            </ImageSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Keep Utilization Under 30%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Use less than 30% of your available credit. Aim for under 10% for optimal score impact.
                </p>
                <div className="bg-secondary/10 p-3 rounded-md">
                  <p className="text-xs font-medium text-secondary">If your limit is $1,000, keep balance below $300</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Pay On Time, Every Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Payment history is the biggest factor in your credit score. Set up autopay to never miss a due date.
                </p>
                <div className="bg-secondary/10 p-3 rounded-md">
                  <p className="text-xs font-medium text-secondary">Even one late payment can drop your score by 100+ points</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits - Full Width Banner Style */}
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

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Credit Card FAQs</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger>What credit score do I need?</AccordionTrigger>
                <AccordionContent>
                  Requirements vary by card. Secured cards often accept scores as low as 300. Rewards cards typically require good credit (670+). We match you with cards you're likely to qualify for.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Will applying hurt my credit?</AccordionTrigger>
                <AccordionContent>
                  Checking your pre-qualified offers uses a soft inquiry and does not affect your score. When you formally apply for a card, a hard inquiry will be made, which may temporarily lower your score by a few points.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger>How do secured cards work?</AccordionTrigger>
                <AccordionContent>
                  Secured cards require a refundable security deposit (typically $200-$500) that serves as your credit limit. Use the card responsibly, and after 6-12 months of on-time payments, you may graduate to an unsecured card and get your deposit back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger>Should I carry a balance to build credit?</AccordionTrigger>
                <AccordionContent>
                  No—this is a common myth. You don't need to carry a balance or pay interest to build credit. Simply using the card and paying the full statement balance by the due date is sufficient.
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
