import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "fintrack",
    title: "FinTrack Dashboard",
    category: "web",
    description:
      "A real-time financial analytics platform with interactive dashboards, automated reporting, and role-based access for enterprise teams.",
    tags: ["Next.js", "PostgreSQL", "Recharts", "Auth.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accentColor: "#4f46e5",
    metrics: [
      { label: "Users onboarded", value: "2,400+" },
      { label: "Reports automated", value: "98%" },
    ],
  },
  {
    id: "delivio",
    title: "Delivio Mobile App",
    category: "mobile",
    description:
      "On-demand delivery app for local businesses with real-time tracking, push notifications, and driver management portal.",
    tags: ["React Native", "Firebase", "Maps API", "Stripe"],
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    accentColor: "#059669",
    metrics: [
      { label: "App store rating", value: "4.8 ★" },
      { label: "Daily orders", value: "1,200+" },
    ],
  },
  {
    id: "syncapi",
    title: "SyncAPI Gateway",
    category: "api",
    description:
      "High-performance API gateway handling multi-tenant authentication, rate limiting, and event streaming for a SaaS platform.",
    tags: ["Node.js", "Redis", "Kafka", "Postgres"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    accentColor: "#d97706",
    metrics: [
      { label: "Requests / second", value: "50k+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
  },
  {
    id: "schoolhub",
    title: "SchoolHub Platform",
    category: "web",
    description:
      "End-to-end school management system covering student enrollment, grading, parent communications, and timetable generation.",
    tags: ["Next.js", "Prisma", "Resend", "Vercel"],
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    accentColor: "#7c3aed",
    metrics: [
      { label: "Schools deployed", value: "14" },
      { label: "Students managed", value: "8,000+" },
    ],
  },
];
