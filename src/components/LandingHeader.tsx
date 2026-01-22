import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import monexaLogo from "@/assets/logo.png";

interface LandingHeaderProps {
  onCtaClick?: () => void;
}

const LandingHeader = ({ onCtaClick }: LandingHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 md:h-24 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={monexaLogo} 
            alt="Monexa Credit & Capital" 
            className="h-24 md:h-32 w-auto"
          />
        </Link>

        {/* Single CTA Button */}
        <Button 
          onClick={onCtaClick}
          variant="hero"
        >
          Aplica Ahora
        </Button>
      </nav>
    </header>
  );
};

export default LandingHeader;
