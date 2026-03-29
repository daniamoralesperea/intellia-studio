import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

interface WhatWeDoCard {
  title: string;
  description: string;
  image: string;
}

interface ServiceWhatWeDoSectionProps {
  cards: WhatWeDoCard[];
}

export default function ServiceWhatWeDoSection({ cards }: ServiceWhatWeDoSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl overflow-hidden bg-background hover:shadow-card transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
