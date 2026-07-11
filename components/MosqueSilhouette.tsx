"use client";

import React from "react";
import { ThemeName, PALETTE } from "@/lib/palette";

export function StarPatternDefs({ id, color }: { id: string; color: string }) {
  return (
    <defs>
      <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
        <g fill="none" stroke={color} strokeWidth="1">
          <path d="M28 4 L34 20 L52 20 L38 30 L44 48 L28 37 L12 48 L18 30 L4 20 L22 20 Z" />
        </g>
      </pattern>
    </defs>
  );
}

export function MosqueSilhouette({ theme }: { theme: ThemeName }) {
  const c = PALETTE[theme];
  return (
    <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme === "dark" ? "#0A1D18" : "#0F3F35"} />
          <stop offset="100%" stopColor={theme === "dark" ? "#020806" : "#0B241E"} />
        </linearGradient>
        <StarPatternDefs id="starsHero" color={c.gold} />
      </defs>
      <rect width="1200" height="420" fill="url(#skyGrad)" />
      <rect width="1200" height="420" fill="url(#starsHero)" opacity="0.05" />
      <g opacity="0.5" fill={theme === "dark" ? "#08160F" : "#082821"}>
        <rect x="60" y="230" width="14" height="150" /><circle cx="67" cy="222" r="10" />
        <rect x="1120" y="230" width="14" height="150" /><circle cx="1127" cy="222" r="10" />
      </g>
      <g fill={theme === "dark" ? "#0B1F17" : "#0A2E24"}>
        <rect x="380" y="260" width="440" height="160" rx="6" />
        <path d="M480 260 Q600 120 720 260 Z" />
        <circle cx="600" cy="170" r="8" fill={c.gold} /><rect x="596" y="150" width="8" height="24" fill={c.gold} />
        <rect x="340" y="180" width="20" height="240" /><path d="M340 180 Q350 150 360 180 Z" />
        <rect x="840" y="180" width="20" height="240" /><path d="M840 180 Q850 150 860 180 Z" />
        <path d="M560 420 L560 350 Q600 300 640 350 L640 420 Z" fill={theme === "dark" ? "#020806" : "#04140F"} />
      </g>
      <rect x="0" y="410" width="1200" height="10" fill={theme === "dark" ? "#020806" : "#04140F"} />
    </svg>
  );
}
