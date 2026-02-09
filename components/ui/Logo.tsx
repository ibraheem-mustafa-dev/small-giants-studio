"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "h-10 w-auto", variant = "default" }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Light variant uses text fallback (no light logo image available)
  if (variant === "light" || imageError) {
    return <LogoText className={className} variant={variant} />;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/sgs-logo.jpg"
        alt="Small Giants Studio"
        width={160}
        height={160}
        className="h-full w-auto rounded"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export function LogoText({ className = "", variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary-800";
  const accentColor = variant === "light" ? "text-accent-400" : "text-accent-500";

  return (
    <div className={`flex items-center gap-1 text-xl font-bold ${className}`}>
      <span className={textColor}>Small Giants</span>
      <span className={accentColor}>Studio</span>
    </div>
  );
}
