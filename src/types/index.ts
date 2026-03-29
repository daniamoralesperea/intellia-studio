export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "api" | "all";
  description: string;
  tags: string[];
  imageUrl: string;
  accentColor: string;
  metrics?: ProjectMetric[];
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCTA {
  label: string;
  href: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number | string;
  billingCycle: "month" | "project";
  description: string;
  features: PricingFeature[];
  cta: PricingCTA;
  highlighted: boolean;
  delivery?: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}
