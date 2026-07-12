"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Landmark, MessageCircle, IndianRupee, Check, Sparkles, Users, Wallet } from "lucide-react";
import Reveal from "@/components/Reveal";
import CopyField from "@/components/CopyField";
import FAQItem from "@/components/FAQItem";
import { useApp } from "@/lib/app-context";
import { fontFor, formatINR } from "@/lib/palette";
import { CONTENT } from "@/lib/content";
import { STATISTICS } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/contact-config";
import { AMOUNT_OPTIONS, buildUpiLink } from "@/lib/payment-config";

const PAY_APPS = [
  { label: "Google Pay", color: "#4285F4", scheme: "tez://upi/pay" },
  { label: "PhonePe", color: "#5F259F", scheme: "phonepe://pay" },
  { label: "Paytm", color: "#00BAF2", scheme: "paytmmp://pay" },
];



export default function DonatePage() {

  const [isMobile, setIsMobile] = useState(false);

React.useEffect(() => {
  setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
}, []);

  const { theme, colors: c, lang, t } = useApp();
  const faqs = CONTENT[lang].faqs as { q: string; a: string }[];

  const [amount, setAmount] = useState("500");
  const [name, setName] = useState("");

  const selectedOption = AMOUNT_OPTIONS.find((o) => String(o.amount) === amount);
  const isPreset = AMOUNT_OPTIONS.some((o) => String(o.amount) === amount);

  const payWithApp = (scheme: string) => {
    window.location.href = buildUpiLink(scheme, amount);
  };

  const notifyViaWhatsApp = () => {
    if (!name.trim()) {
      alert("Please enter your name so we know who to thank.");
      return;
    }
    const text = `Assalamu Alaikum, I have just made a donation.\n\nName: ${name}${
      amount ? `\nAmount: ₹${amount}` : ""
    }\n\nPlease confirm receipt. JazakAllah Khair.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ background: c.page }}>
      {/* Hero */}
      <section className="pt-14 sm:pt-20 pb-8 px-5 sm:px-6 text-center" style={{ background: c.cardAlt }}>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("donate.tag")}</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("donate.title")}
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base" style={{ color: c.muted }}>{t("donate.subtitle")}</p>

          <div className="flex items-center justify-center gap-5 sm:gap-8 mt-6 flex-wrap text-xs sm:text-sm" style={{ color: c.muted }}>
            <span className="flex items-center gap-1.5">
              <Users size={14} style={{ color: c.primary }} /> {STATISTICS.totalDonors.toLocaleString("en-IN")}+ donors
            </span>
            <span className="flex items-center gap-1.5">
              <Wallet size={14} style={{ color: c.primary }} /> {formatINR(STATISTICS.monthDonations)} raised this month
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} style={{ color: c.primary }} /> 100% transparent
            </span>
          </div>
        </Reveal>
      </section>

      {/* Two equal-height columns */}
      <section className="py-10 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* LEFT: amount picker + QR + pay apps */}
        <Reveal className="h-full">
          <div className="rounded-2xl shadow-sm overflow-hidden h-full flex flex-col" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <div className="p-5 sm:p-8" style={{ background: c.cardAlt }}>
              <p className="text-sm font-semibold text-center" style={{ color: c.text }}>Choose your impact</p>
              <p className="text-xs text-center mt-1 mb-5" style={{ color: c.muted }}>
                Every amount, big or small, keeps this Masjid and Imambargah alive
              </p>

              <div className="grid grid-cols-3 gap-2.5">
                {AMOUNT_OPTIONS.map((o) => {
                  const active = amount === String(o.amount);
                  return (
                    <motion.button
                      key={o.amount}
                      type="button"
                      onClick={() => setAmount(String(o.amount))}
                      whileTap={{ scale: 0.94 }}
                      className="relative rounded-xl py-3 text-sm font-bold overflow-visible"
                      style={{
                        background: active ? `linear-gradient(135deg, ${c.primary}, ${c.primaryDark})` : c.card,
                        color: active ? "#fff" : c.text,
                        border: `1.5px solid ${active ? c.primary : c.border}`,
                        boxShadow: active ? `0 6px 16px ${c.primary}45` : "none",
                      }}
                    >
                      {o.popular && (
                        <span
                          className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                          style={{ background: c.gold, color: c.primaryDark }}
                        >
                          MOST GIVEN
                        </span>
                      )}
                      ₹{o.amount}
                      <AnimatePresence>
                        {active && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,255,255,0.25)" }}
                          >
                            <Check size={9} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption.amount}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center justify-center gap-1.5 mt-3.5 text-xs text-center"
                    style={{ color: c.primary }}
                  >
                    <Sparkles size={12} /> {selectedOption.impact}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative mt-4">
                <IndianRupee size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: c.muted }} />
                <input
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none"
                  style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text }}
                />
              </div>
            </div>

            {/* QR + pay apps — fills remaining height so both columns end level */}
            <div className="p-5 sm:p-8 text-center flex-1 flex flex-col justify-center">
              <p className="text-sm font-medium mb-4" style={{ color: c.muted }}>{t("donate.scanTitle")}</p>

              <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-white" style={{ border: `1px solid ${c.border}` }}>
                <Image src="/qr-code.png" alt="UPI QR Code" width={192} height={192} className="w-full h-full object-contain" />
              </div>

              {isMobile ? (
  <>
    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
      {PAY_APPS.map((p) => (
        <motion.button
          key={p.label}
          type="button"
          onClick={() => payWithApp(p.scheme)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full px-4 py-2 text-xs font-semibold text-white"
          style={{ background: p.color }}
        >
          {p.label}
        </motion.button>
      ))}
    </div>
    <p className="text-[11px] mt-2.5" style={{ color: c.muted }}>
      {amount ? `₹${amount} will be pre-filled` : "Choose an amount above"} · opens the app on your phone
    </p>
  </>
) : (
  <p className="text-xs mt-5 flex items-center justify-center gap-1.5" style={{ color: c.muted }}>
    <Sparkles size={12} style={{ color: c.gold }} /> On a computer? Scan the QR code below with your phone's camera to pay.
  </p>
)}
              <p className="text-[11px] mt-2.5" style={{ color: c.muted }}>
                {amount ? `₹${amount} will be pre-filled` : "Choose an amount above"} · opens the app on your phone
              </p>

              <div className="mt-6">
                <CopyField label={t("donate.upiId")} value="zahidjafri15@okicici" theme={theme} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: bank details + notify — same height as left */}
        <Reveal delay={100} className="h-full">
          <div className="rounded-2xl p-5 sm:p-8 shadow-sm h-full flex flex-col" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <div className="flex items-center gap-2 mb-5">
              <Landmark size={17} style={{ color: c.primary }} />
              <p className="font-semibold" style={{ color: c.text }}>{t("donate.bankTitle")}</p>
            </div>
            <div className="flex flex-col gap-3">
              <CopyField label={t("donate.accName")} value="Haidariya Foundation" theme={theme} />
              <CopyField label={t("donate.bankName")} value="State Bank of India" theme={theme} />
              <CopyField label={t("donate.accNumber")} value="3021 5647 8901 22" theme={theme} />
              <CopyField label={t("donate.ifsc")} value="SBIN0004521" theme={theme} />
              <CopyField label={t("donate.branch")} value="Lucknow, UP" theme={theme} />
            </div>

            <div className="mt-6 pt-6 flex-1 flex flex-col" style={{ borderTop: `1px solid ${c.border}` }}>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <p className="font-semibold text-sm" style={{ color: c.text }}>Already donated? Let us know</p>
              </div>
              <p className="text-xs mb-4" style={{ color: c.muted }}>
                Send us a quick WhatsApp message so we can confirm receipt and thank you personally.
              </p>
              <div className="flex flex-col gap-2 mt-auto">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-xl px-4 py-2.5 text-sm outline-none"
                  style={{ background: c.cardAlt, border: `1px solid ${c.border}`, color: c.text }}
                />
                <motion.button
                  type="button"
                  onClick={notifyViaWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={14} /> Notify via WhatsApp
                </motion.button>
              </div>
            </div>
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