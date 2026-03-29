import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-background-subtle section-padding"
    >
      <div className="container-tight">
        {/* Header */}
        <AnimatedSection className="flex flex-col gap-4 mb-14 max-w-2xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-display-lg font-bold text-ink text-balance">
            Everything you need to ship great software.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            We cover the full spectrum — from design and development to
            infrastructure and strategy. One partner, end-to-end.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
