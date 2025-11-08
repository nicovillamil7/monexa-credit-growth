import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
}

const TrustBadge = ({ icon: Icon, title }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-trust rounded-lg border border-border">
      <Icon className="h-4 w-4 text-secondary" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default TrustBadge;
