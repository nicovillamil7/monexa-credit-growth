import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadge from "@/components/TrustBadge";
import ProductCard from "@/components/ProductCard";
import ValueProp from "@/components/ValueProp";
import SEO from "@/components/SEO";
import { organizationSchema } from "@/lib/seo-schemas";
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp, 
  Building2, 
  Wrench, 
  CreditCard,
  Star,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import valparHero from "@/assets/valpar-hero.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Monexa | Credit Repair & Fast Funding Solutions"
        description="Improve your credit score and access fast funding. Expert credit repair, personal loans up to $100K, credit cards, and trade lines. Free credit review available."
        keywords="credit repair services, improve credit score, personal loans, credit funding, credit cards, trade lines, fast loan approval"
        structuredData={organizationSchema}
      />
      <Header />
      
      {/* Hero Section - Personal Brand with Dark Background */}
      <section className="relative bg-[hsl(var(--hero-bg))] overflow-hidden">
        {/* Subtle decorative elements - very low opacity */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container py-12 md:py-20 lg:py-24">
          {/* Side-by-side layout on ALL screen sizes */}
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6 animate-fade-in">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary" />
                Your Credit Expert
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[hsl(var(--hero-foreground))] mb-3 sm:mb-6 animate-fade-in leading-tight">
                Your path to <span className="text-primary">better credit</span> and faster funding.
              </h1>
              
              <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--hero-muted))] mb-4 sm:mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                I help you repair credit, boost scores, and unlock approvals for loans, credit cards, and trade lines — with a personal touch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button size="lg" variant="accent" asChild className="hover-scale text-sm sm:text-base px-4 sm:px-8">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button size="lg" asChild className="text-sm sm:text-base px-4 sm:px-8 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-[hsl(var(--hero-bg))]">
                  <Link to="/apply">Free Credit Review</Link>
                </Button>
              </div>

              {/* Quick trust indicators - hidden on very small screens */}
              <div className="hidden sm:flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-[hsl(var(--hero-muted)/0.2)] animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">12K+ Clients Helped</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">$56M+ Funded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-[hsl(var(--hero-muted))]">4.8★ Rating</span>
                </div>
              </div>
            </div>

            {/* Photo - side by side on all screens */}
            <div className="flex justify-end animate-fade-in">
              <div className="relative">
                {/* Gold accent ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-2xl" />
                
                {/* Image container - responsive sizing */}
                <div className="relative">
                  <img 
                    src={valparHero} 
                    alt="Valpar - Credit Expert and Founder of Monexa" 
                    className="w-[120px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto object-contain drop-shadow-2xl"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={600}
                    height={750}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators for mobile - shown below on small screens, all in one row */}
          <div className="flex sm:hidden items-center justify-center gap-3 mt-8 pt-6 border-t border-[hsl(var(--hero-muted)/0.2)] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
              <span className="text-[10px] text-[hsl(var(--hero-muted))] whitespace-nowrap">12K+ Clients</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
              <span className="text-[10px] text-[hsl(var(--hero-muted))] whitespace-nowrap">$56M+ Funded</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
              <span className="text-[10px] text-[hsl(var(--hero-muted))] whitespace-nowrap">4.8★ Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">$56M+</div>
              <div className="text-sm text-primary-foreground/80">Loans Processed</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">140M+</div>
              <div className="text-sm text-primary-foreground/80">Points Increased</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">12K+</div>
              <div className="text-sm text-primary-foreground/80">Businesses Supported</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">4.8★</div>
              <div className="text-sm text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solutions to grow your credit and access the funding you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              icon={Wrench}
              title="Credit Repair"
              description="Clean up your credit and boost your score"
              href="/repair"
              features={[
                "Dispute errors & collections",
                "Optimize utilization",
                "Remove negative items",
                "Growth-focused coaching"
              ]}
            />
            <ProductCard
              icon={CreditCard}
              title="Personal Loans"
              description="$1K-$100K with flexible terms"
              href="/funding/personal-loans"
              features={[
                "Fast approvals",
                "Competitive rates",
                "12-84 month terms",
                "Multiple use cases"
              ]}
            />
            <ProductCard
              icon={CreditCard}
              title="Credit Cards"
              description="Find your perfect card match"
              href="/funding/credit-cards"
              features={[
                "Rewards & cashback",
                "Balance transfers",
                "Credit building",
                "Secured options"
              ]}
            />
            <ProductCard
              icon={TrendingUp}
              title="Trade Line"
              description="Build credit history fast"
              href="/funding/trade-line"
              features={[
                "No hard inquiry",
                "Fast results",
                "Authorized user status",
                "Score boost potential"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Monexa?</h2>
            <p className="text-lg text-muted-foreground">
              We make credit repair and funding simple, secure, and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ValueProp
              icon={CheckCircle}
              title="High Approval Rate"
              description="Smart matching boosts your odds of approval with our curated lender network."
            />
            <ValueProp
              icon={Zap}
              title="Fast Funding"
              description="Streamlined applications mean quick decisions and faster access to funds."
            />
            <ValueProp
              icon={Shield}
              title="Secure Process"
              description="Bank-level encryption and strict privacy controls protect your data."
            />
            <ValueProp
              icon={TrendingUp}
              title="Growth-Focused"
              description="Coaching and tools to build long-term credit health, not just quick fixes."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.8/5</span>
            </div>
            <p className="text-lg text-muted-foreground">Trusted by thousands of customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah M.",
                text: "Monexa helped me raise my credit score by 120 points in 6 months. The process was transparent and the team was incredibly supportive."
              },
              {
                name: "James K.",
                text: "I got approved for a personal loan within 48 hours. The rates were competitive and the entire experience was smooth."
              },
              {
                name: "Maria G.",
                text: "After years of credit issues, Monexa helped me dispute errors and optimize my accounts. Now I'm finally building wealth."
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to unlock funding?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of customers who've improved their credit and accessed the funding they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                <Link to="/apply">Free Credit Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
