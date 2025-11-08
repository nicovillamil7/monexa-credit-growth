import { ReactNode } from "react";

interface ImageSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  children?: ReactNode;
}

const ImageSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  children,
}: ImageSectionProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageOnLeft ? '' : 'md:grid-flow-dense'}`}>
      <div className={imageOnLeft ? 'md:col-start-2' : ''}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {children}
      </div>
      <div className={`relative ${imageOnLeft ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div className="relative rounded-lg overflow-hidden shadow-medium h-64 md:h-80">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
