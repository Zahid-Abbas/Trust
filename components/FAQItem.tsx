"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PALETTE, ThemeName } from "@/lib/palette";

export default function FAQItem({ item, theme }: { item: { q: string; a: string }; theme: ThemeName }) {
  const c = PALETTE[theme];
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${c.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
        style={{ background: c.card }}
      >
        <span className="font-medium text-sm" style={{ color: c.text }}>{item.q}</span>
        <ChevronDown
          size={16}
          className="shrink-0"
          style={{ color: c.primary, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
        />
      </button>
      <div style={{ maxHeight: open ? 260 : 0, overflow: "hidden", transition: "max-height 0.3s ease", background: c.cardAlt }}>
        <p className="px-4 sm:px-5 py-4 text-sm leading-relaxed" style={{ color: c.muted }}>{item.a}</p>
      </div>
    </div>
  );
}
