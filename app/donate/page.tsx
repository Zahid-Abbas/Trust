"use client";

import React, { useState } from "react";
import { ShieldCheck, Landmark, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import CopyField from "@/components/CopyField";
import FAQItem from "@/components/FAQItem";
import { useApp } from "@/lib/app-context";
import { fontFor } from "@/lib/palette";
import { CONTENT } from "@/lib/content";
import { WHATSAPP_NUMBER } from "@/lib/contact-config";

const PAY_BUTTONS = [
  { label: "Google Pay", color: "#4285F4" },
  { label: "PhonePe", color: "#5F259F" },
  { label: "Paytm", color: "#00BAF2" },
];

export default function DonatePage() {
  const { theme, colors: c, lang, t } = useApp();
  const faqs = CONTENT[lang].faqs as { q: string; a: string }[];

  // "Notify us after donating" mini-form
  const [donorName, setDonorName] = useState("");
  const [donorAmount, setDonorAmount] = useState("");

  const notifyViaWhatsApp = () => {
    if (!donorName.trim()) {
      alert("Please enter your name so we know who to thank.");
      return;
    }
    const text = `Assalamu Alaikum, I have just made a donation.\n\nName: ${donorName}${
      donorAmount.trim() ? `\nAmount: ₹${donorAmount.trim()}` : ""
    }\n\nPlease confirm receipt. JazakAllah Khair.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ background: c.page }}>
      <section className="py-12 sm:py-16 px-5 sm:px-6 text-center" style={{ background: c.cardAlt }}>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("donate.tag")}</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("donate.title")}
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base" style={{ color: c.muted }}>{t("donate.subtitle")}</p>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
        <Reveal>
          <div className="rounded-2xl p-5 sm:p-8 text-center shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <p className="text-sm font-medium mb-4" style={{ color: c.muted }}>{t("donate.scanTitle")}</p>
            {/* Replace this SVG placeholder with an <img src="/qr-code.png" /> of your real UPI QR code */}
            <div className="mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-xl flex items-center justify-center" style={{ background: c.cardAlt, border: `1px dashed ${c.border}` }}>
              <svg viewBox="0 0 100 100" width="140" height="140">
                <rect width="100" height="100" fill={theme === "dark" ? "#0F1E19" : "#fff"} />
                {Array.from({ length: 8 }).map((_, r) =>
                  Array.from({ length: 8 }).map(
                    (_, col) =>
                      ((r + col) % 3 === 0 || (r * col) % 5 === 0) && (
                        <rect key={`${r}-${col}`} x={4 + col * 11.5} y={4 + r * 11.5} width="9" height="9" fill={c.primaryDark} />
                      )
                  )
                )}
              </svg>
            </div>
            <p className="text-xs mt-3" style={{ color: c.muted }}>{t("donate.qrPlaceholder")}</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
              {PAY_BUTTONS.map((p) => (
                <button key={p.label} className="rounded-full px-4 py-2 text-xs font-semibold text-white" style={{ background: p.color }}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <CopyField label={t("donate.upiId")} value="noorekarbala@upi" theme={theme} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl p-5 sm:p-8 shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <div className="flex items-center gap-2 mb-5">
              <Landmark size={17} style={{ color: c.primary }} />
              <p className="font-semibold" style={{ color: c.text }}>{t("donate.bankTitle")}</p>
            </div>
            <div className="flex flex-col gap-3">
              <CopyField label={t("donate.accName")} value="Noor-e-Karbala Trust" theme={theme} />
              <CopyField label={t("donate.bankName")} value="State Bank of India" theme={theme} />
              <CopyField label={t("donate.accNumber")} value="3021 5647 8901 22" theme={theme} />
              <CopyField label={t("donate.ifsc")} value="SBIN0004521" theme={theme} />
              <CopyField label={t("donate.branch")} value="Lucknow, Uttar Pradesh" theme={theme} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Notify us after donating — WhatsApp */}
      <section className="px-5 sm:px-6 pb-4">
        <Reveal className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-8 shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
          <div className="flex items-center gap-2 mb-2 justify-center">
            <MessageCircle size={17} style={{ color: "#25D366" }} />
            <p className="font-semibold text-center" style={{ color: c.text }}>Already donated? Let us know</p>
          </div>
          <p className="text-sm text-center mb-5" style={{ color: c.muted }}>
            Send us a quick WhatsApp message with your name so we can confirm receipt and thank you personally.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <input
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="Your name"
              className="rounded-xl px-4 py-2.5 text-sm outline-none"
              style={{ background: c.cardAlt, border: `1px solid ${c.border}`, color: c.text }}
            />
            <input
              value={donorAmount}
              onChange={(e) => setDonorAmount(e.target.value)}
              placeholder="Amount donated (optional)"
              inputMode="numeric"
              className="rounded-xl px-4 py-2.5 text-sm outline-none"
              style={{ background: c.cardAlt, border: `1px solid ${c.border}`, color: c.text }}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={notifyViaWhatsApp}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={14} /> Notify via WhatsApp
            </button>
          </div>
        </Reveal>
      </section>

      <section className="px-5 sm:px-6 pb-4">
        <Reveal className="max-w-3xl mx-auto text-center rounded-2xl p-5 sm:p-6" style={{ background: `${c.primary}12` }}>
          <p className="text-sm leading-relaxed" style={{ color: c.text }}>
            <ShieldCheck size={16} className="inline mr-1.5 -mt-0.5" style={{ color: c.primary }} />
            {t("donate.note")}
          </p>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-3xl mx-auto">
        <Reveal className="text-center mb-7 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: c.text, fontFamily: fontFor(lang) }}>{t("donate.faqTitle")}</h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} item={f} theme={theme} />
          ))}
        </div>
      </section>
    </div>
  );
}