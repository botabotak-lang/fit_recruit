"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
};

export function CountUp({ to, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold text-orange">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
