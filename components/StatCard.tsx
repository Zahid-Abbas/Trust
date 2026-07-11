"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { PALETTE, ThemeName } from "@/lib/palette";

function useCountUp(target: number, start: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 1300;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);
  return val;
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  prefix = "",
  theme,
}: {
  icon: LucideIcon;
  label: string;
  value: number;
  prefix?: string;
  theme: ThemeName;
}) {
  const c = PALETTE[theme];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const val = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-4 sm:p-6 shadow-sm transition-transform hover:-translate-y-1"
      style={{ background: c.card, border: `1px solid ${c.border}` }}
    >
      <div
        className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
        style={{ background: `${c.primary}1A`, color: c.primary }}
      >
        <Icon size={17} />
      </div>
      <p className="text-lg sm:text-2xl font-semibold" style={{ color: c.text }}>
        {prefix}
        {val.toLocaleString("en-IN")}
      </p>
      <p className="text-xs sm:text-sm mt-1 leading-snug" style={{ color: c.muted }}>
        {label}
      </p>
    </motion.div>
  );
}
