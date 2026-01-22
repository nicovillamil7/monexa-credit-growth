import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import monexaLogo from "@/assets/monexa-logo.png";

interface LandingHeaderProps {
  onCtaClick?: () => void;
}

const LandingHeader = ({ onCtaClick }: LandingHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={monexaLogo} 
            alt="Monexa" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Single CTA Button */}
        <Button 
          onClick={onCtaClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-glow animate-pulse-glow"
        >
          Aplica Ahora
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;
