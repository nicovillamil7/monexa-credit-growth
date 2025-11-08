import { LucideIcon } from "lucide-react";

interface ValuePropProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueProp = ({ icon: Icon, title, description }: ValuePropProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="h-14 w-14 rounded-full bg-gradient-accent flex items-center justify-center mb-4 shadow-glow">
        <Icon className="h-7 w-7 text-accent-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ValueProp;
