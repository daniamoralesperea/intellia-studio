import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

const variantClasses = {
  default: "bg-background-subtle text-ink-muted border border-border",
  accent: "bg-accent-light text-accent-dark border border-accent/20",
  muted: "bg-ink/5 text-ink-muted border border-ink/10",
};

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
