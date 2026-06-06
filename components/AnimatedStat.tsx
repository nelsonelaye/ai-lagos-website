"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  className?: string;
  padStart?: number;
  suffix?: string;
}

const AnimatedStat = ({
  value,
  className,
  padStart = 0,
  suffix = "+",
}: AnimatedStatProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (prefersReducedMotion) {
          setCount(value);
          observer.disconnect();
          return;
        }

        const start = performance.now();
        const duration = 650;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <h3 ref={ref} className={className}>
      {String(count).padStart(padStart, "0")}
      {suffix}
    </h3>
  );
};

export default AnimatedStat;
