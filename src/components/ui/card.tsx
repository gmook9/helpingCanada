import * as React from "react";
import { cn } from "@/lib/utils";

const baseCard =
  "rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(baseCard, className)} {...props} />
));

Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4 flex flex-col gap-2", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-xl font-semibold text-slate-900", className)} {...props} />
);

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-base leading-relaxed text-slate-600", className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-sm text-slate-500", className)} {...props} />
);
