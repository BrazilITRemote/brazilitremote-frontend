import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}