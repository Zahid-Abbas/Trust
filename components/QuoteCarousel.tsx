"use client";

import React, { useEffect, useState } from "react";
import { PALETTE, ThemeName, fontFor } from "@/lib/palette";
import { CONTENT } from "@/lib/content";
import { Lang } from "@/lib/translations";

export default function QuoteCarousel({ theme, lang }: { theme: ThemeName; lang: Lang }) {
  const c = PALETTE[theme];
  const quotes = CONTENT[lang].quotes as { text: string; by: string }[];
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIdx(0);
    setVisible(true);
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % quotes.length);
        setVisible(true);
      }, 350);
    }, 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const q = quotes[idx];
  return (
    <div className="max-w-2xl mx-auto text-center px-2">
      <div
        className="min-h-[100px] sm:min-h-[110px] flex flex-col items-center justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <span style={{ color: c.gold, fontSize: "1.6rem", lineHeight: 0, fontFamily: "'Amiri', serif" }}>&#8220;</span>
        <p className="text-base sm:text-lg md:text-xl text-white/95 font-medium px-1" style={{ fontFamily: fontFor(lang) }}>
          {q.text}
        </p>
        <p className="mt-2 text-xs sm:text-sm tracking-wide" style={{ color: c.gold }}>
          — {q.by}
        </p>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {quotes.map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all"
            style={{ width: i === idx ? 18 : 6, background: i === idx ? c.gold : "rgba(255,255,255,0.35)" }}
          />
        ))}
      </div>
    </div>
  );
}
