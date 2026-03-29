import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold tracking-widest uppercase text-accent border-l-2 border-accent pl-3",
        className
      )}
    >
      {children}
    </span>
  );
}
