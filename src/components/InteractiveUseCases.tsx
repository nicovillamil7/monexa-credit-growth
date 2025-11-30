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
import { cn } from "@/lib/utils";

// Import existing assets
import homeImprovement from "@/assets/home-improvement.jpg";
import travelRewards from "@/assets/travel-rewards.jpg";
import cardUsage from "@/assets/card-usage.jpg";
import personalLoansHero from "@/assets/personal-loans-hero.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import creditCardsHero from "@/assets/credit-cards-hero.jpg";

interface UseCase {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ctaText: string;
  image: string;
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
    ctaText: "Explore Home Loans",
    image: homeImprovement
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
    ctaText: "Finance Your Car",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&auto=format&fit=crop&q=80"
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
    ctaText: "Fund Your Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
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
    ctaText: "Plan Your Trip",
    image: travelRewards
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
    ctaText: "Start Consolidating",
    image: cardUsage
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
    ctaText: "Get Emergency Funds",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
  }
];

interface InteractiveUseCasesProps {
  scrollTargetId?: string;
}

const InteractiveUseCases = ({ scrollTargetId = "apply-form" }: InteractiveUseCasesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedUseCase = useCasesData[selectedIndex];

  const handleCTAClick = () => {
    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-6 max-w-7xl mx-auto">
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
                    "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-medium" 
                      : "bg-card hover:bg-muted border border-border hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    isActive ? "bg-primary-foreground/20" : "bg-primary/10"
                  )}>
                    <Icon className={cn(
                      "h-5 w-5",
                      isActive ? "text-primary-foreground" : "text-primary"
                    )} />
                  </div>
                  <div className="min-w-0">
                    <p className={cn(
                      "font-semibold text-sm truncate",
                      isActive ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {useCase.title}
                    </p>
                    <p className={cn(
                      "text-xs truncate",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {useCase.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Split Image-Content Panel */}
          <div className="bg-card border border-border rounded-2xl shadow-soft overflow-hidden min-h-[480px]">
            <div 
              key={selectedIndex}
              className="grid grid-cols-2 h-full animate-fade-in"
            >
              {/* Left: Image */}
              <div className="relative h-full min-h-[480px]">
                <img 
                  src={selectedUseCase.image} 
                  alt={`${selectedUseCase.title} - ${selectedUseCase.shortDescription} with Monexa credit repair and funding`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
              </div>

              {/* Right: Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <selectedUseCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedUseCase.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedUseCase.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {selectedUseCase.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-fit"
                  onClick={handleCTAClick}
                >
                  {selectedUseCase.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Accordion Style with Images */}
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
                  <div className="animate-fade-in">
                    {/* Mobile Image */}
                    <div className="relative h-48 w-full">
                      <img 
                        src={useCase.image} 
                        alt={`${useCase.title} - ${useCase.shortDescription} with Monexa credit repair and funding`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>

                    <div className="px-4 pb-4">
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
                        onClick={handleCTAClick}
                      >
                        {useCase.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
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
