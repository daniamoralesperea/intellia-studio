"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import PortfolioCard from "@/components/ui/PortfolioCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Filter = "all" | "web" | "mobile" | "api";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "API", value: "api" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-background section-padding">
      <div className="container-tight">
        {/* Header */}
        <AnimatedSection className="flex flex-col gap-4 mb-10 max-w-2xl">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="text-display-lg font-bold text-ink text-balance">
            Products we&apos;ve shipped.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            A selection of projects across industries — each one built to solve
            a real problem and built to last.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === f.value
                  ? "bg-ink text-white"
                  : "bg-background-subtle text-ink-muted hover:bg-border hover:text-ink"
              )}
            >
              {f.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid — first card is featured (spans 2 cols on lg) */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={cn(index === 0 && filtered.length > 1 ? "lg:col-span-2" : "")}
            >
              <PortfolioCard
                project={project}
                featured={index === 0 && filtered.length > 1}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">
              Start your project <ArrowRight size={16} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
