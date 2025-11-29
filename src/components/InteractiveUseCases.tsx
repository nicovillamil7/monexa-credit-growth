import { useState } from "react";
import { 
  Home, 
  Briefcase, 
  TrendingUp, 
  Plane, 
  CreditCard, 
  Heart,
  CheckCircle,
  ArrowRight,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface UseCase {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ctaText: string;
}

const useCasesData: UseCase[] = [
  {
    icon: Home,
    title: "Buy Your Dream Home",
    shortDescription: "Down payment & home purchase",
    fullDescription: "Whether you're a first-time buyer or looking to upgrade, our personal loans provide the capital you need for your down payment or home purchase. Get competitive rates and flexible terms designed to fit your budget.",
    benefits: [
      "Competitive rates starting at 6.99% APR",
      "Loan amounts up to $100,000",
      "Terms from 24 to 84 months",
      "No prepayment penalties"
    ],
    ctaText: "Explore Home Loans"
  },
  {
    icon: Briefcase,
    title: "Get a New Car",
    shortDescription: "Vehicle financing made easy",
    fullDescription: "Drive away in the car of your dreams with our flexible auto financing solutions. Whether it's a new or used vehicle, we offer competitive rates that put you in the driver's seat.",
    benefits: [
      "Fast approval process",
      "Flexible down payment options",
      "Competitive interest rates",
      "Terms up to 72 months"
    ],
    ctaText: "Finance Your Car"
  },
  {
    icon: TrendingUp,
    title: "Pay for College",
    shortDescription: "Invest in your education",
    fullDescription: "Don't let finances stand between you and your education. Our student funding options help cover tuition, books, housing, and other education-related expenses with manageable repayment terms.",
    benefits: [
      "Cover tuition and living expenses",
      "Deferred payment options available",
      "Competitive student rates",
      "Fund any accredited institution"
    ],
    ctaText: "Fund Your Education"
  },
  {
    icon: Plane,
    title: "Take That Vacation",
    shortDescription: "Fund your dream getaway",
    fullDescription: "Life is meant to be lived! Fund your dream vacation and create memories that last a lifetime. From tropical getaways to adventure trips, we help make your travel dreams a reality.",
    benefits: [
      "Quick funding for travel",
      "Flexible repayment schedules",
      "No collateral required",
      "Use for any destination"
    ],
    ctaText: "Plan Your Trip"
  },
  {
    icon: CreditCard,
    title: "Consolidate Debt",
    shortDescription: "Simplify your finances",
    fullDescription: "Take control of your finances by consolidating multiple high-interest debts into one manageable monthly payment. Lower your overall interest rate and pay off debt faster.",
    benefits: [
      "Single monthly payment",
      "Lower overall interest rates",
      "Improve credit utilization",
      "Clear debt faster"
    ],
    ctaText: "Start Consolidating"
  },
  {
    icon: Heart,
    title: "Cover Life's Surprises",
    shortDescription: "Handle unexpected expenses",
    fullDescription: "Life happens. Whether it's medical bills, home repairs, or other unexpected expenses, our personal loans provide quick access to funds when you need them most.",
    benefits: [
      "Fast approval in 24 hours",
      "Funds deposited quickly",
      "Flexible use of funds",
      "Manageable monthly payments"
    ],
    ctaText: "Get Emergency Funds"
  }
];

const InteractiveUseCases = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedUseCase = useCasesData[selectedIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What can you do with funding from Monexa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any category to explore how our funding solutions can help you achieve your goals.
          </p>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-8 max-w-6xl mx-auto">
          {/* Left: Vertical Tabs */}
          <div className="space-y-2">
            {useCasesData.map((useCase, index) => {
              const Icon = useCase.icon;
              const isActive = selectedIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-medium" 
                      : "bg-card hover:bg-muted border border-border hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                    isActive ? "bg-primary-foreground/20" : "bg-primary/10"
                  )}>
                    <Icon className={cn(
                      "h-6 w-6",
                      isActive ? "text-primary-foreground" : "text-primary"
                    )} />
                  </div>
                  <div className="min-w-0">
                    <p className={cn(
                      "font-semibold truncate",
                      isActive ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {useCase.title}
                    </p>
                    <p className={cn(
                      "text-sm truncate",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {useCase.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Content Panel */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
            <div 
              key={selectedIndex}
              className="animate-fade-in"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <selectedUseCase.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedUseCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedUseCase.fullDescription}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Key Benefits</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedUseCase.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                asChild
              >
                <Link to="/apply">
                  {selectedUseCase.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Accordion Style */}
        <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
          {useCasesData.map((useCase, index) => {
            const Icon = useCase.icon;
            const isActive = selectedIndex === index;
            
            return (
              <div 
                key={index}
                className={cn(
                  "rounded-xl border transition-all duration-300 overflow-hidden",
                  isActive 
                    ? "border-primary bg-card shadow-medium" 
                    : "border-border bg-card"
                )}
              >
                <button
                  onClick={() => setSelectedIndex(index)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                    isActive ? "bg-primary" : "bg-primary/10"
                  )}>
                    <Icon className={cn(
                      "h-6 w-6",
                      isActive ? "text-primary-foreground" : "text-primary"
                    )} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{useCase.title}</p>
                    <p className="text-sm text-muted-foreground">{useCase.shortDescription}</p>
                  </div>
                  <ArrowRight className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform",
                    isActive && "rotate-90"
                  )} />
                </button>
                
                {isActive && (
                  <div className="px-4 pb-4 animate-fade-in">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground mb-4">
                        {useCase.fullDescription}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {useCase.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                        asChild
                      >
                        <Link to="/apply">
                          {useCase.ctaText}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveUseCases;
