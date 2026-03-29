import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface ServiceTestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function ServiceTestimonialsSection({ testimonials }: ServiceTestimonialsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 0.1}>
              <div className="p-8 bg-background rounded-2xl border border-border hover:shadow-card transition-shadow duration-300 flex flex-col h-full">
                {/* Quote */}
                <p className="text-ink mb-6 leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-ink-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={testimonials.length * 0.1}>
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
