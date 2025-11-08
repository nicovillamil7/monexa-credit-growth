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
}

const ProductCard = ({ icon: Icon, title, description, href, features }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-large transition-shadow">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-secondary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-success mt-0.5">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" asChild className="w-full group">
          <Link to={href}>
            Learn More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
