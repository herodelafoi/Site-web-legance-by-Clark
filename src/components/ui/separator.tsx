import type { HTMLAttributes } from "react";

export function Separator({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`h-px bg-border ${className}`} {...props} />;
}
