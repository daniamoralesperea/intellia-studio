import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Service } from "@/types";
import {
  Cloud,
  Code2,
  Database,
  Lightbulb,
  Smartphone,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Lightbulb,
  Users,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-white hover:border-accent/40 hover:shadow-card transition-all duration-300 h-full">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent">
          <Icon size={20} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-ink text-base">{service.title}</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {service.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
