import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Card({
  className = "",
  children,
  ...props
}: Readonly<CardProps>) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg shadow dark:shadow-black/20 border border-slate-200 dark:border-slate-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
