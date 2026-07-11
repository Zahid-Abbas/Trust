"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun, Sparkles, Heart } from "lucide-react";
import { useApp } from "@/lib/app-context";
import LangToggle from "./LangToggle";
import { fontFor } from "@/lib/palette";

export default function NavBar() {
  const { theme, setTheme, lang, setLang, t, colors: c } = useApp();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/transparency", label: t("nav.transparency") },
    { href: "/contact", label: t("nav.contact") },
  ];
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: c.navBg, borderBottom: `1px solid ${c.border}` }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight shrink-0" style={{ color: c.text }}>
          <span className="inline-flex h-8 w-8 rounded-xl items-center justify-center shrink-0" style={{ background: c.primary }}>
            <Sparkles size={16} color="#fff" />
          </span>
          <span className="text-base sm:text-lg truncate max-w-[120px] sm:max-w-none" style={{ fontFamily: fontFor(lang) }}>
            {t("brand")}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
              style={{ color: isActive(it.href) ? c.primary : c.muted }}
            >
              {it.label}
              <span
                className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-transform origin-center"
                style={{ background: c.gold, transform: isActive(it.href) ? "scaleX(1)" : "scaleX(0)" }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LangToggle lang={lang} setLang={setLang} theme={theme} />
          <button
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full flex items-center justify-center transition-transform hover:scale-105 shrink-0"
            style={{ border: `1px solid ${c.border}`, color: c.text }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 shrink-0"
            style={{ background: `linear-gradient(135deg, ${c.primary}, ${c.primaryDark})` }}
          >
            <Heart size={14} /> {t("nav.donateNow")}
          </Link>
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center shrink-0"
            style={{ color: c.text }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 sm:px-6 pb-4 flex flex-col gap-1" style={{ borderTop: `1px solid ${c.border}` }}>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className="text-left py-2.5 text-sm font-medium"
              style={{ color: isActive(it.href) ? c.primary : c.muted }}
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white text-center"
            style={{ background: c.primary }}
          >
            {t("nav.donateNow")}
          </Link>
        </div>
      )}
    </header>
  );
}
