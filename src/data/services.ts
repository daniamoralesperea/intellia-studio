import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web",
    icon: "Code2",
    title: "Web Applications",
    description:
      "Full-stack web applications built for performance, scalability, and great user experience. From MVPs to enterprise platforms.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps for iOS and Android. Native-quality performance with a single, maintainable codebase.",
    tags: ["React Native", "iOS", "Android", "Expo"],
  },
  {
    id: "api",
    icon: "Database",
    title: "API & Backend",
    description:
      "Robust backend systems and REST/GraphQL APIs designed for reliability, security, and high throughput.",
    tags: ["Node.js", "PostgreSQL", "REST", "GraphQL"],
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Infrastructure setup, CI/CD pipelines, containerization, and cloud migrations so your team ships faster with confidence.",
    tags: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    id: "strategy",
    icon: "Lightbulb",
    title: "Product Strategy",
    description:
      "Discovery sessions, product roadmaps, and UX strategy to align your business goals with a clear technical direction.",
    tags: ["Discovery", "Roadmap", "UX", "Wireframes"],
  },
  {
    id: "consulting",
    icon: "Users",
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits, and team coaching to help you build the right system the right way.",
    tags: ["Architecture", "Audits", "Code Review", "Mentoring"],
  },
];
