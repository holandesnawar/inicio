"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  scale?: boolean;
  threshold?: number;
  as?: "div" | "li";
}

const delayMap = ["", "d1", "d2", "d3", "d4"] as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  scale = false,
  threshold = 0.12,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("vis"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLLIElement>}
      className={`${scale ? "sr-s" : "sr"} ${delayMap[delay]} ${className}`}
    >
      {children}
    </Tag>
  );
}
