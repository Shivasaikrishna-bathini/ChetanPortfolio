import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface TechBadgeProps {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "secondary" | "outline";
}

export function TechBadge({ icon: Icon, label, variant = "secondary" }: TechBadgeProps) {
  return (
    <Badge variant={variant} className="gap-1.5 px-3 py-1.5" data-testid={`badge-tech-${label.toLowerCase()}`}>
      <Icon className="h-3.5 w-3.5" />
      <span className="text-xs font-medium">{label}</span>
    </Badge>
  );
}
