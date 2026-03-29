import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

interface WhyChooseCard {
  title: string;
  description: string;
}

interface ServiceWhyChooseSectionProps {
  serviceName: string;
  cards: WhyChooseCard[];
}

export default function ServiceWhyChooseSection({ serviceName, cards }: ServiceWhyChooseSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            Why Are Our {serviceName} Services The Right Choice For You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1} className="h-full">
              <div className="p-8 bg-background rounded-2xl border border-border hover:border-accent/30 transition-all duration-300">
                <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent rounded" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
