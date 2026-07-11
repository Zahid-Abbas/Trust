"use client";

import React, { useState } from "react";
import { Globe, Check } from "lucide-react";
import { LANGS, Lang } from "@/lib/translations";
import { PALETTE, ThemeName } from "@/lib/palette";

export default function LangToggle({
  lang,
  setLang,
  theme,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: ThemeName;
}) {
  const c = PALETTE[theme];
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        aria-label="Change language"
        onClick={() => setOpen(!open)}
        className="h-9 px-2.5 rounded-full flex items-center gap-1 transition-transform hover:scale-105"
        style={{ border: `1px solid ${c.border}`, color: c.text }}
      >
        <Globe size={15} />
        <span className="text-xs font-semibold">{current.short}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 mt-2 z-50 rounded-xl overflow-hidden shadow-lg min-w-[130px]"
            style={{ background: c.card, border: `1px solid ${c.border}` }}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code as Lang);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left"
                style={{
                  color: lang === l.code ? c.primary : c.text,
                  background: lang === l.code ? `${c.primary}14` : "transparent",
                }}
              >
                {l.label} {lang === l.code && <Check size={13} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
