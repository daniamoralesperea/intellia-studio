import { GitFork, Briefcase, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Works: [
    { label: "Web Applications", href: "#portfolio" },
    { label: "Mobile Apps", href: "#portfolio" },
  ],
  Services: [
    { label: "Web Applications", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "API & Backend", href: "#services" },
  ],
  Company: [
    { label: "Pricing", href: "#pricing" },
    { label: "Contact us", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: GitFork, label: "GitHub", href: "#" },
  { icon: Briefcase, label: "LinkedIn", href: "#" },
  { icon: X, label: "Twitter", href: "#" },
];

const allServices = [
  { label: "Web Applications", href: "#services" },
  { label: "Mobile Development", href: "#services" },
  { label: "API & Backend", href: "#services" },
  { label: "Cloud & DevOps", href: "#services" },
  { label: "Product Strategy", href: "#services" },
  { label: "Technical Consulting", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clutch Badge */}
        <div className="flex justify-end py-6 border-b border-white/10">
          <Link
            href="https://clutch.co/profile/intellia-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white/60 hover:text-white transition-colors"
          >
            ⭐ Clutch Certified
          </Link>
        </div>

        {/* Main Content */}
        <div className="py-16">
          {/* Top section: Logo + Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Image
                  src="/logo-white.png"
                  alt="Intellia Studio"
                  width={200}
                  height={90}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-white/50 max-w-xs leading-relaxed">
                We build digital products that scale. From MVPs to enterprise
                platforms — code that ships and lasts.
              </p>
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All Services Section */}
          <div className="py-12 border-b border-white/10">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">
              All services
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {allServices.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Intellia Studio. All rights reserved.
            </p>
            <Link
              href="#"
              className="text-sm text-white/30 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
