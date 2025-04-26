import React from "react";

export type ButtonVariant = "primary" | "accent" | "highlight";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600",
  accent: "bg-accent-500 text-white hover:bg-accent-600",
  highlight: "bg-highlight-500 text-white hover:bg-highlight-600",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Readonly<ButtonProps>) {
  const base = "px-4 py-2 rounded font-semibold transition";
  const variantClass = variantClasses[variant] || variantClasses.primary;
  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
