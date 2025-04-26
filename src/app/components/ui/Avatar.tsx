import React from "react";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  className?: string;
}

export function Avatar({ size = 48, className = "", ...props }: AvatarProps) {
  return (
    <img
      {...props}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}