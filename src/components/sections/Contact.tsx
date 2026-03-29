"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ContactFormFields } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@intellia.studio" },
  { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors";
const labelClass = "block text-sm font-medium text-ink mb-1.5";
const errorClass = "text-xs text-red-500 mt-1";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormFields) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // handle silently — form stays editable
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background section-padding">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <AnimatedSection className="flex flex-col gap-6">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="text-display-lg font-bold text-ink text-balance">
              Ready to build something great?
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within
              24 hours. No obligations, no pushy sales — just a real
              conversation.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-muted">{label}</p>
                    <p className="text-sm font-medium text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right column — form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border border-border bg-background-subtle text-center min-h-[400px]">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-xl font-semibold text-ink">
                  Message sent!
                </h3>
                <p className="text-ink-muted text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 p-8 rounded-2xl border border-border bg-background-subtle"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Jane Smith"
                      className={cn(inputClass, errors.name && "border-red-400")}
                    />
                    {errors.name && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register("email")}
                      placeholder="jane@company.com"
                      type="email"
                      className={cn(
                        inputClass,
                        errors.email && "border-red-400"
                      )}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Company (optional)</label>
                  <input
                    {...register("company")}
                    placeholder="Acme Corp"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Service needed <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={cn(
                      inputClass,
                      errors.service && "border-red-400"
                    )}
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="api">API & Backend</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="strategy">Product Strategy</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                  {errors.service && (
                    <p className={errorClass}>{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Budget range (optional)</label>
                  <select {...register("budget")} className={inputClass}>
                    <option value="">Select a budget...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={cn(
                      inputClass,
                      "resize-none",
                      errors.message && "border-red-400"
                    )}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isLoading}
                >
                  Send Message
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
