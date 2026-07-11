"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { PALETTE, ThemeName } from "@/lib/palette";

export default function CopyField({ label, value, theme }: { label: string; value: string; theme: ThemeName }) {
  const c = PALETTE[theme];
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl px-4 py-3" style={{ background: c.cardAlt, border: `1px solid ${c.border}` }}>
      <div className="min-w-0">
        <p className="text-xs" style={{ color: c.muted }}>{label}</p>
        <p className="font-medium text-sm truncate" style={{ color: c.text }}>{value}</p>
      </div>
      <button
        onClick={copy}
        className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center transition-colors"
        style={{ background: copied ? c.primary : "transparent", color: copied ? "#fff" : c.primary, border: `1px solid ${c.primary}` }}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}
