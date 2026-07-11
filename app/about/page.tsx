"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useApp } from "@/lib/app-context";
import { fontFor } from "@/lib/palette";
import { CONTENT } from "@/lib/content";

export default function AboutPage() {
  const { colors: c, lang, t } = useApp();
  const timeline = CONTENT[lang].timeline as { year: string; title: string; desc: string }[];

  return (
    <div style={{ background: c.page }}>
      <section className="py-14 sm:py-20 px-5 sm:px-6 text-center" style={{ background: c.cardAlt }}>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("about.page.tag")}</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("about.page.title")}
          </h1>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-5xl mx-auto grid sm:grid-cols-3 gap-5 sm:gap-6">
        {[
          { title: t("about.mission.title"), body: t("about.mission.body") },
          { title: t("about.vision.title"), body: t("about.vision.body") },
          { title: t("about.values.title"), body: t("about.values.body") },
        ].map((v, i) => (
          <Reveal key={v.title} delay={i * 90}>
            <div className="rounded-2xl p-5 sm:p-6 h-full shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <h3 className="font-semibold mb-2" style={{ color: c.primary, fontFamily: fontFor(lang) }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{v.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-3xl mx-auto">
        <Reveal className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: c.text, fontFamily: fontFor(lang) }}>{t("about.journey")}</h2>
        </Reveal>
        <div className="relative pl-7 sm:pl-8">
          <div className="absolute left-[6px] sm:left-[7px] top-1 bottom-1 w-px" style={{ background: c.border }} />
          {timeline.map((tl, i) => (
            <Reveal key={tl.year} delay={i * 90} className="relative mb-8 sm:mb-10 last:mb-0">
              <span className="absolute -left-7 sm:-left-8 top-1 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full" style={{ background: c.gold }} />
              <p className="text-sm font-semibold" style={{ color: c.gold }}>{tl.year}</p>
              <h3 className="font-semibold mt-1 text-sm sm:text-base" style={{ color: c.text }}>{tl.title}</h3>
              <p className="text-sm mt-1 leading-relaxed" style={{ color: c.muted }}>{tl.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("about.findUs")}
          </h2>
          <div
            className="rounded-2xl overflow-hidden h-56 sm:h-64 flex items-center justify-center gap-2 text-center px-4"
            style={{ background: c.cardAlt, border: `1px solid ${c.border}`, color: c.muted }}
          >
            <MapPin size={18} /> <span className="text-sm">{t("about.mapPlaceholder")}</span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
