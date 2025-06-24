import React from "react";
import Image from "next/image";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  className?: string;
  src: string;
}

export function Avatar({
  size = 48,
  className = "",
  ...props
}: Readonly<AvatarProps>) {
  return (
    <div className="p-3">
      <Image
        {...props}
        src={props.src}
        loading="lazy"
        alt={props.alt ?? "Avatar"}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
      />
    </div>
  );
}
