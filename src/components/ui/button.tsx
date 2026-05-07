import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-none font-medium";
  const variantClasses =
    variant === "outline"
      ? "border border-current bg-transparent"
      : "bg-brand-cream text-brand-dark";

  return <button className={`${base} ${variantClasses} ${className}`} {...props} />;
}
