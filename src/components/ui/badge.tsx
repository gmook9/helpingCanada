import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "emerald" | "neutral";
};

export function Badge({ className, variant = "emerald", ...props }: BadgeProps) {
  const variants = {
    emerald: "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200",
    neutral: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
