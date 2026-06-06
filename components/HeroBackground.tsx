"use client";

import { useEffect, useRef } from "react";

interface HeroBackgroundProps {
  image: string;
}

const HeroBackground = ({ image }: HeroBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const section = element?.parentElement;

    if (!element || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const updateScale = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      const scale = 1.04 + progress * 0.22;

      element.style.transform = `scale(${scale.toFixed(3)})`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateScale);
    };

    updateScale();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 bg-cover bg-center will-change-transform"
      style={{
        backgroundImage: `url(${image})`,
        transform: "scale(1.04)",
        transformOrigin: "center",
      }}
      aria-hidden="true"
    />
  );
};

export default HeroBackground;
