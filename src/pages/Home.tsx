import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadge from "@/components/TrustBadge";
import ProductCard from "@/components/ProductCard";
import ValueProp from "@/components/ValueProp";
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp, 
  Building2, 
  Wrench, 
  CreditCard,
  Star,
  Users,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import creditDashboardPhone from "@/assets/credit-dashboard-phone.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Your Credit.<br />Your Identity.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-xl">
                We monitor your credit report, provide you with alerts, and help you build the credit score you deserve so you can focus on living your financial best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" variant="accent" asChild className="hover-scale group">
                  <Link to="/apply">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                  <Link to="/repair">Learn More</Link>
                </Button>
              </div>

              {/* Trust Message */}
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 max-w-md mx-auto lg:mx-0">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <p className="text-sm text-primary-foreground/90 font-medium">
                  Checking your own credit will NOT harm it.
                </p>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-20 animate-pulse" />
                
                {/* Phone mockup */}
                <div className="relative">
                  <img
                    src={creditDashboardPhone}
                    alt="Credit score monitoring dashboard showing journey from 650 to 750"
                    className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
                  />
                </div>

                {/* Floating stats */}
                <div className="absolute -left-4 top-1/4 bg-background rounded-xl p-4 shadow-large animate-fade-in hidden md:block" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">+150</div>
                      <div className="text-xs text-muted-foreground">Points Increased</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-background rounded-xl p-4 shadow-large animate-fade-in hidden md:block" style={{ animationDelay: "0.6s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">100%</div>
                      <div className="text-xs text-muted-foreground">Secure & Safe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">$56M+</div>
              <div className="text-sm text-muted-foreground">Loans Processed</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">140M+</div>
              <div className="text-sm text-muted-foreground">Points Increased</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">12K+</div>
              <div className="text-sm text-muted-foreground">Businesses Supported</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
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
