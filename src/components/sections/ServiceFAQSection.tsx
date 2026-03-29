"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  items: FAQItem[];
}

export default function ServiceFAQSection({ items }: ServiceFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white border border-border rounded-xl hover:border-accent/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <p className="text-ink-muted leading-relaxed mt-4 pt-4 border-t border-border">
                    {item.answer}
                  </p>
                )}
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
