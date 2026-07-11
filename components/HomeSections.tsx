"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight, Wallet, Calendar, Users, Landmark } from "lucide-react";
import Reveal from "./Reveal";
import StatCard from "./StatCard";
import QuoteCarousel from "./QuoteCarousel";
import { MosqueSilhouette, StarPatternDefs } from "./MosqueSilhouette";
import { useApp } from "@/lib/app-context";
import { fontFor } from "@/lib/palette";
import { CONTENT } from "@/lib/content";
import { STATISTICS } from "@/lib/data";

export function Hero() {
  const { theme, lang, t, colors: c } = useApp();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
      <MosqueSilhouette theme={theme} />
      <div className="absolute inset-0" style={{ background: c.heroOverlay }} />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16 flex flex-col items-center text-center">
        <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3 sm:mb-4" style={{ color: c.gold }}>
          {t("hero.tag")}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: fontFor(lang) }}>
          {t("hero.title")}
        </h1>
        <p className="text-white/85 max-w-md sm:max-w-xl mb-7 sm:mb-8 text-sm sm:text-lg leading-relaxed">{t("hero.subtitle")}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto mb-10 sm:mb-14">
          <Link
            href="/donate"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 transition-transform active:scale-95 sm:hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${c.primary}, ${c.primaryDark})` }}
          >
            <Heart size={15} /> {t("hero.donate")}
          </Link>
          <Link
            href="/about"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/40 flex items-center justify-center gap-2 transition-transform active:scale-95 sm:hover:scale-105 backdrop-blur-sm"
          >
            {t("hero.learnMore")} <ArrowRight size={15} />
          </Link>
        </div>
        <QuoteCarousel theme={theme} lang={lang} />
      </div>
    </section>
  );
}

export function AboutPreview() {
  const { colors: c, lang, t } = useApp();
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: c.page }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <Reveal>
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: `1px solid ${c.border}` }}>
            <svg viewBox="0 0 500 340" className="w-full h-full">
              <defs>
                <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={c.primary} />
                  <stop offset="100%" stopColor={c.primaryDark} />
                </linearGradient>
                <StarPatternDefs id="starsAbout" color="#ffffff" />
              </defs>
              <rect width="500" height="340" fill="url(#aboutGrad)" />
              <rect width="500" height="340" fill="url(#starsAbout)" opacity="0.12" />
              <path d="M150 340 V210 Q250 110 350 210 V340 Z" fill="rgba(255,255,255,0.14)" />
              <circle cx="250" cy="150" r="7" fill={c.gold} />
            </svg>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("about.tag")}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-3 sm:mb-4" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("about.title")}
          </h2>
          <p className="mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ color: c.muted }}>{t("about.body")}</p>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: c.primary }}>
            {t("about.readMore")} <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FinancialSnapshot() {
  const { theme, colors: c, t } = useApp();
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: c.cardAlt }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("stats.tag")}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2" style={{ color: c.text }}>{t("stats.title")}</h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          <StatCard icon={Wallet} label={t("stats.totalDonations")} value={STATISTICS.totalDonations} prefix="₹" theme={theme} />
          <StatCard icon={Calendar} label={t("stats.monthDonations")} value={STATISTICS.monthDonations} prefix="₹" theme={theme} />
          <StatCard icon={Users} label={t("stats.totalDonors")} value={STATISTICS.totalDonors} theme={theme} />
          <StatCard icon={Users} label={t("stats.monthDonors")} value={STATISTICS.monthDonors} theme={theme} />
          <StatCard icon={Landmark} label={t("stats.monthExpenses")} value={STATISTICS.monthExpenses} prefix="₹" theme={theme} />
        </div>
      </div>
    </section>
  );
}

export function Announcements() {
  const { colors: c, lang, t } = useApp();
  const items = CONTENT[lang].announcements as { title: string; tag: string; date: string; desc: string }[];
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6" style={{ background: c.page }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("announce.tag")}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("announce.title")}
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="rounded-2xl p-5 h-full flex flex-col shadow-sm transition-transform hover:-translate-y-1" style={{ background: c.card, border: `1px solid ${c.border}` }}>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full w-fit mb-3" style={{ color: c.primaryDark, background: `${c.primary}1A` }}>
                  {a.tag}
                </span>
                <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: c.text }}>{a.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: c.muted }}>{a.desc}</p>
                <p className="text-xs mt-4" style={{ color: c.gold }}>{a.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { colors: c, t } = useApp();
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.primaryDark}, ${c.primary})` }}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 800 300">
        <StarPatternDefs id="ctaStars" color="#fff" />
        <rect width="800" height="300" fill="url(#ctaStars)" />
      </svg>
      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4 leading-snug">{t("cta.title")}</h2>
          <p className="text-white/85 mb-7 sm:mb-8 text-sm sm:text-base leading-relaxed">{t("cta.body")}</p>
          <Link
            href="/donate"
            className="inline-block rounded-full px-8 py-3.5 text-sm font-semibold w-full sm:w-auto"
            style={{ background: c.gold, color: c.primaryDark }}
          >
            {t("cta.button")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
