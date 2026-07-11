"use client";

import React from "react";
import { Clock } from "lucide-react";
import Reveal from "./Reveal";
import { useApp } from "@/lib/app-context";
import { useLivePrayerTimes } from "@/lib/use-live-prayer-times";
import { PRAYER_LOCATION } from "@/lib/data";

export default function PrayerTimesCard() {
  const { colors: c, t } = useApp();
  const { times, status, dateLabel } = useLivePrayerTimes();

  return (
    <section className="py-12 sm:py-16 px-5 sm:px-6" style={{ background: c.cardAlt }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="rounded-2xl p-5 sm:p-8 shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <div className="flex items-center gap-2 mb-1.5 justify-center">
              <Clock size={16} style={{ color: c.primary }} />
              <h3 className="font-semibold text-sm sm:text-base" style={{ color: c.text }}>
                {t("prayer.title")}
              </h3>
            </div>
            <p className="text-center text-[11px] sm:text-xs mb-5 sm:mb-6" style={{ color: c.muted }}>
              {PRAYER_LOCATION.name} · Shia (Jafari) method
              {status === "loading" && " · loading live timings…"}
              {status === "fallback" && " · showing sample times (live fetch unavailable)"}
              {status === "live" && dateLabel && ` · ${dateLabel}`}
            </p>
            <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
              {times.map((p) => (
                <div key={p.name}>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wide mb-1" style={{ color: c.gold }}>
                    {p.name}
                  </p>
                  <p className="font-semibold text-[11px] sm:text-base leading-tight" style={{ color: c.text }}>
                    {p.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
