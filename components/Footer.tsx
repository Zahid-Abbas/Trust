"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/app-context";
import { fontFor } from "@/lib/palette";
import { useLivePrayerTimes } from "@/lib/use-live-prayer-times";

export default function Footer() {
  const { colors: c, lang, t } = useApp();
  const { times, status } = useLivePrayerTimes();

  const navMap: [string, string][] = [
    ["/", t("nav.home")],
    ["/about", t("nav.about")],
    ["/donate", t("nav.donate")],
    ["/transparency", t("nav.transparency")],
    ["/contact", t("nav.contact")],
  ];

  return (
    <footer className="pt-12 sm:pt-14 pb-8 px-5 sm:px-6" style={{ background: c.footer, color: c.footerText }}>
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="col-span-2 md:col-span-1">
          <p className="font-semibold text-white mb-3" style={{ fontFamily: fontFor(lang) }}>
            {t("brand")}
          </p>
          <p className="text-sm opacity-80 leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div>
          <p className="font-medium text-white mb-3 text-sm">{t("footer.quickLinks")}</p>
          <div className="flex flex-col gap-2 text-sm opacity-85">
            {navMap.map(([href, label]) => (
              <Link key={href} href={href} className="text-left hover:opacity-100 w-fit">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-white mb-3 text-sm">{t("footer.contact")}</p>
          <div className="flex flex-col gap-2 text-sm opacity-85">
            <span>{t("contact.addressValue")}</span>
            <span>{t("contact.phoneValue")}</span>
            <span>{t("contact.emailValue")}</span>
          </div>
        </div>
        <div>
          <p className="font-medium text-white mb-3 text-sm">{t("footer.prayer")}</p>
          <div className="flex flex-col gap-1.5 text-sm opacity-85">
            {times.map((p) => (
              <span key={p.name}>
                {p.name} — {p.time}
              </span>
            ))}
            {status === "fallback" && (
              <span className="text-[11px] opacity-60">(sample times)</span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-70 text-center">
        <span>{t("footer.copyright")}</span>
        <span>{t("footer.blessing")}</span>
      </div>
    </footer>
  );
}