import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface PortfolioCardProps {
  project: Project;
  featured?: boolean;
  index: number;
}

export default function PortfolioCard({
  project,
  featured = false,
  index,
}: PortfolioCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} className="h-full">
      <div
        className={`group relative overflow-hidden rounded-2xl border border-border bg-white shadow-card hover:shadow-card-lg transition-all duration-300 h-full flex flex-col`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${featured ? "h-72" : "h-52"}`}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "100vw" : "50vw"}
          />
          <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-300" />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2 bg-white text-ink text-sm font-semibold px-4 py-2 rounded-full">
              View Case Study <ArrowUpRight size={14} />
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="accent">{project.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <h3 className="font-semibold text-ink text-lg">{project.title}</h3>
          <p className="text-sm text-ink-muted leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex gap-6 pt-3 border-t border-border">
              {project.metrics.map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-base font-bold text-ink">{value}</span>
                  <span className="text-xs text-ink-muted">{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
