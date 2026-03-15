'use client';
import { useScrollReveal } from '@/components/hooks/useScrollReveal';

type Animation = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, animation = 'fade-up', delay = 0, className = '' }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const baseStyles = 'transition-all duration-700 ease-out';
  const hiddenStyles: Record<Animation, string> = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-12',
    'slide-right': 'opacity-0 translate-x-12',
    'scale-in': 'opacity-0 scale-95',
  };

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hiddenStyles[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
