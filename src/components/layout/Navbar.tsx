"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "UX UI Design", href: "/services/ux-ui-design" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Branding Design", href: "/services/branding-design" },
  { label: "MVP Development", href: "/services/mvp-development" },
  { label: "App Design", href: "/services/app-design" },
  { label: "Wordpress, Wix and Webflow", href: "/services/web-builders" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Intellia Studio"
            width={180}
            height={80}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <li className="relative group">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-sm text-ink-muted hover:text-ink transition-colors font-medium flex items-center gap-1"
            >
              Services
              <ChevronDown size={16} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
            </button>

            {/* Dropdown menu */}
            <div className={cn(
              "absolute left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
              isServicesOpen && "opacity-100 visible"
            )}>
              <div className="py-2">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-accent/5 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#contact">Log in</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-ink rounded-lg hover:bg-ink/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {/* Mobile Services dropdown */}
            <li>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="block text-sm font-medium text-ink-muted hover:text-ink transition-colors py-1 w-full text-left flex items-center justify-between"
              >
                Services
                <ChevronDown size={16} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-border pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-ink-muted hover:text-ink transition-colors py-1"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-ink-muted hover:text-ink transition-colors py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" size="md" className="w-full">
              Log in
            </Button>
            <Button variant="primary" size="md" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
