import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid: "bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-emerald-600",
  outline:
    "border border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-emerald-600",
  ghost:
    "text-emerald-700 hover:bg-emerald-50 focus-visible:outline-emerald-600",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
