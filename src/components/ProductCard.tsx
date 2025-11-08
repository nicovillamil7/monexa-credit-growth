import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
  expandedDescription?: string;
}

const ProductCard = ({ icon: Icon, title, description, href, features, expandedDescription }: ProductCardProps) => {
  return (
    <Card className="group relative flex flex-col h-full hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden border-primary/20 bg-gradient-to-br from-background to-muted/20 animate-fade-in">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between relative">
        {/* Collapsed state - features list */}
        <div className="group-hover:opacity-0 group-hover:max-h-0 transition-all duration-300 overflow-hidden">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expanded state - detailed description */}
        {expandedDescription && (
          <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {expandedDescription}
            </p>
          </div>
        )}
        
        <Button variant="outline" asChild className="w-full group/btn border-primary/30 hover:bg-primary/10 hover:border-primary mt-auto">
          <Link to={href}>
            Learn More
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
