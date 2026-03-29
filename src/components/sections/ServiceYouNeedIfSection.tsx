import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface YouNeedIfCard {
  title: string;
  description: string;
}

interface ServiceYouNeedIfSectionProps {
  serviceName: string;
  cards: YouNeedIfCard[];
}

export default function ServiceYouNeedIfSection({ serviceName, cards }: ServiceYouNeedIfSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Perfect For</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            You need {serviceName} if your company...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1}>
              <div className="p-6 bg-white rounded-2xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                <h3 className="text-lg font-semibold text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={cards.length * 0.1}>
          <div className="flex justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="#contact">
                Start a Project <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
