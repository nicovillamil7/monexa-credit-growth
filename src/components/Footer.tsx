import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Monexa
            </div>
            <p className="text-sm text-muted-foreground">
              Grow your credit. Unlock funding.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580150353858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/monexa.creditcapital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/repair" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Credit Repair
                </Link>
              </li>
              <li>
                <Link to="/funding/personal-loans" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/funding/credit-cards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link to="/funding/trade-line" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trade Line
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/disclosures" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-4">
            Monexa is not a law firm or a credit reporting agency. Results vary and are not guaranteed. 
            Services comply with applicable federal and state credit-repair regulations. Some products may 
            require identity verification and additional documentation. Terms and conditions apply.
          </p>
          <p>&copy; {new Date().getFullYear()} Monexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
