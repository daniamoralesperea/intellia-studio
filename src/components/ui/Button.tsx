"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean;
}

const variantClasses = {
  primary:
    "bg-accent text-white hover:bg-[#3CB97C] hover:text-[#0F2318] focus:ring-2 focus:ring-accent focus:ring-offset-2",
  secondary:
    "bg-ink text-white hover:bg-[#3CB97C] hover:text-[#0F2318] focus:ring-2 focus:ring-ink focus:ring-offset-2",
  ghost:
    "bg-transparent text-ink hover:bg-[#3CB97C] hover:text-[#0F2318] focus:ring-2 focus:ring-ink/20 focus:ring-offset-2",
  outline:
    "border border-ink text-ink hover:bg-[#3CB97C] hover:text-[#0F2318] focus:ring-2 focus:ring-ink focus:ring-offset-2",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!loading && icon && icon}
        <span>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
