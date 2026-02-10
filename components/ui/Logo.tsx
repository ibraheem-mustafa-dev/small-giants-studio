"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "h-10 w-auto sm:h-12", variant = "default" }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <LogoText className={className} variant={variant} />;
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/sgs-horizontal-logo.png"
        alt="Small Giants Studio — Digital Transformation for UK SMEs"
        width={200}
        height={62}
        className={`h-full w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export function LogoText({ className = "", variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary-800 dark:text-primary-300";
  const accentColor = variant === "light" ? "text-accent-400" : "text-accent-700 dark:text-accent-400";

  return (
    <div className={`flex items-center gap-1 text-xl font-bold ${className}`}>
      <span className={textColor}>Small Giants</span>
      <span className={accentColor}>Studio</span>
    </div>
  );
}
