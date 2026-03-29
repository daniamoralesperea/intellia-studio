import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingCard from "@/components/ui/PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background-subtle section-padding">
      <div className="container-tight">
        {/* Header */}
        <AnimatedSection className="flex flex-col gap-4 mb-14 max-w-2xl mx-auto text-center items-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-display-lg font-bold text-ink text-balance">
            Simple, transparent pricing.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            No hidden fees, no surprises. Choose the plan that fits your project
            — or reach out for a custom quote.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Note */}
        <AnimatedSection className="text-center mt-10">
          <p className="text-sm text-ink-muted">
            All prices are in USD. Need something different?{" "}
            <a
              href="#contact"
              className="text-accent hover:underline font-medium"
            >
              Let&apos;s talk.
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
