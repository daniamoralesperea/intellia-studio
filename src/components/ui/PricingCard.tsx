import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { PricingTier } from "@/types";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export default function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <AnimatedSection
      delay={index * 0.1}
      className="h-full"
    >
      <div
        className={cn(
          "relative flex flex-col h-full rounded-2xl border p-8 transition-all duration-300",
          tier.highlighted
            ? "bg-ink text-white border-ink shadow-card-lg scale-[1.02]"
            : "bg-white text-ink border-border hover:border-ink/30 hover:shadow-card"
        )}
      >
        {/* Popular badge */}
        {tier.highlighted && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3
            className={cn(
              "text-lg font-semibold mb-1",
              tier.highlighted ? "text-white" : "text-ink"
            )}
          >
            {tier.name}
          </h3>
          <p
            className={cn(
              "text-sm",
              tier.highlighted ? "text-white/60" : "text-ink-muted"
            )}
          >
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8">
          {tier.price === "Custom" ? (
            <p className="text-4xl font-bold">Custom Pricing</p>
          ) : typeof tier.price === "string" ? (
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">
                {tier.price}
              </span>
              <span
                className={cn(
                  "text-sm mb-1",
                  tier.highlighted ? "text-white/50" : "text-ink-muted"
                )}
              >
                /{tier.billingCycle}
              </span>
            </div>
          ) : (
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">
                ${tier.price.toLocaleString()}
              </span>
              <span
                className={cn(
                  "text-sm mb-1",
                  tier.highlighted ? "text-white/50" : "text-ink-muted"
                )}
              >
                / {tier.billingCycle}
              </span>
            </div>
          )}
        </div>

        {/* CTA */}
        <Button
          variant={tier.highlighted ? "primary" : "outline"}
          size="md"
          className="w-full mb-8"
          asChild
        >
          <Link href={tier.cta.href}>{tier.cta.label}</Link>
        </Button>

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {tier.features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3 text-sm">
              {feature.included ? (
                <Check
                  size={16}
                  className={tier.highlighted ? "text-accent" : "text-accent"}
                />
              ) : (
                <X
                  size={16}
                  className={tier.highlighted ? "text-white/20" : "text-ink-faint"}
                />
              )}
              <span
                className={cn(
                  feature.included
                    ? tier.highlighted
                      ? "text-white/80"
                      : "text-ink"
                    : tier.highlighted
                    ? "text-white/30"
                    : "text-ink-muted line-through"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Delivery Timeline */}
        {tier.delivery && (
          <p
            className={cn(
              "text-sm mt-6 pt-6 border-t",
              tier.highlighted
                ? "text-white/50 border-white/10"
                : "text-ink-muted border-border"
            )}
          >
            {tier.delivery}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
