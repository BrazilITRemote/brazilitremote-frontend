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
      className={`bg-white dark:bg-gray-900/60 rounded-lg shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
