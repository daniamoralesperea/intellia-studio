import { GitFork, Briefcase, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "API & Backend", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Work", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: GitFork, label: "GitHub", href: "#" },
  { icon: Briefcase, label: "LinkedIn", href: "#" },
  { icon: X, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
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

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Intellia Hub. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Built with Next.js & deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
