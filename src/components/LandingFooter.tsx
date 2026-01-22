import { Link } from "react-router-dom";
import monexaLogo from "@/assets/monexa-logo.png";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={monexaLogo} 
              alt="Monexa" 
              className="h-8 w-auto opacity-70"
            />
          </Link>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Monexa. Todos los derechos reservados.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            Monexa no es un prestamista ni un asesor financiero. Los servicios de reparación de crédito 
            y las referencias de financiamiento están sujetos a términos y condiciones. Los resultados 
            pueden variar según la situación individual de cada cliente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
