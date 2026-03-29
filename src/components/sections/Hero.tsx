"use client";

import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const rotatingPhrases = [
  "Users Fall in Love With",
  "Scale Businesses",
  "Transform Ideas",
  "Build Impact",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-background pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        {/* Agency name — line 1 */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-display-xl font-bold text-ink leading-tight"
          >
            Intellia Studio
          </motion.p>
        </div>

        {/* Headline — line 2: static part */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="text-display-xl font-bold text-ink leading-tight"
          >
            We Create Experiences
          </motion.p>
        </div>

        {/* Headline — line 3: "That" + rotating animated phrase */}
        <div className="overflow-visible">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="text-display-xl font-bold text-ink leading-tight"
          >
            That{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-accent inline"
              >
                {rotatingPhrases[current]}
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex flex-wrap items-center gap-4 mt-12"
        >
          <Button variant="primary" size="lg" asChild>
            <Link href="#contact">
              Start a Project <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="#portfolio">See Our Work</Link>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex items-center gap-12 mt-16 pt-10 border-t border-border"
        >
          {[
            { value: "40+", label: "Projects delivered" },
            { value: "98%", label: "Client satisfaction" },
            { value: "5+", label: "Years of experience" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-bold text-accent">{value}</span>
              <span className="text-sm text-ink-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex justify-center pb-8"
      >
        <Link
          href="#services"
          className="flex flex-col items-center gap-1 text-ink-muted hover:text-accent transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown size={16} className="animate-bounce text-accent" />
        </Link>
      </motion.div>
    </section>
  );
}
