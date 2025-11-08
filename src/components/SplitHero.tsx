import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SplitHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

const SplitHero = ({
  title,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  imageOnRight = true,
}: SplitHeroProps) => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? '' : 'md:grid-flow-dense'}`}>
          <div className={imageOnRight ? '' : 'md:col-start-2'}>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              {description}
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
          <div className={`relative ${imageOnRight ? '' : 'md:col-start-1 md:row-start-1'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-large">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
