"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useApp } from "@/lib/app-context";
import { fontFor } from "@/lib/palette";
import { WHATSAPP_NUMBER, MAP_EMBED_SRC } from "@/lib/contact-config";


export default function ContactPage() {
  const { colors: c, lang, t } = useApp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, message: false });
  const [sent, setSent] = useState(false);

  const nameError = touched.name && !form.name.trim();
  const messageError = touched.message && !form.message.trim();

  const sendViaWhatsApp = () => {
    setTouched({ name: true, message: true });
    if (!form.name.trim() || !form.message.trim()) return;

    const text = `New message from ${form.name}${form.email ? " (" + form.email + ")" : ""}:\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, message: false });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div style={{ background: c.page }}>
      <section className="py-12 sm:py-16 px-5 sm:px-6 text-center" style={{ background: c.cardAlt }}>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("contact.tag")}</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("contact.title")}
          </h1>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10">
        <Reveal>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="rounded-2xl p-4 sm:p-5 flex items-start gap-3" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <MapPin size={18} style={{ color: c.primary }} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm" style={{ color: c.text }}>{t("contact.address")}</p>
                <p className="text-sm" style={{ color: c.muted }}>{t("contact.addressValue")}</p>
              </div>
            </div>
            <div className="rounded-2xl p-4 sm:p-5 flex items-start gap-3" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <Phone size={18} style={{ color: c.primary }} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm" style={{ color: c.text }}>{t("contact.phone")}</p>
                <p className="text-sm" style={{ color: c.muted }}>{t("contact.phoneValue")}</p>
              </div>
            </div>
            <div className="rounded-2xl p-4 sm:p-5 flex items-start gap-3" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <Mail size={18} style={{ color: c.primary }} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm" style={{ color: c.text }}>{t("contact.email")}</p>
                <p className="text-sm" style={{ color: c.muted }}>{t("contact.emailValue")}</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-48 sm:h-56" style={{ border: `1px solid ${c.border}` }}>
              <iframe
                src={MAP_EMBED_SRC}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Imamia Masjid Korjha, Ambedkar Nagar location"
              />
            </div>

            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: `${c.primary}1A`, color: c.primary }}>
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl p-5 sm:p-8 flex flex-col gap-4 relative overflow-hidden" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <div>
              <label className="text-xs font-medium mb-1 block" style={{ color: c.muted }}>
                {t("contact.formName")}
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2"
                style={{
                  background: c.cardAlt,
                  border: `1px solid ${nameError ? "#DC2626" : c.border}`,
                  color: c.text,
                  ["--tw-ring-color" as any]: nameError ? "#DC2626" : c.primary,
                }}
              />
              <AnimatePresence>
                {nameError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="text-xs mt-1 flex items-center gap-1"
                    style={{ color: "#DC2626" }}
                  >
                    <AlertCircle size={12} /> Please enter your name.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-medium mb-1 block" style={{ color: c.muted }}>
                {t("contact.formEmail")} <span style={{ opacity: 0.6 }}>(optional)</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2"
                style={{ background: c.cardAlt, border: `1px solid ${c.border}`, color: c.text, ["--tw-ring-color" as any]: c.primary }}
              />
            </div>

            <div>
              <label className="text-xs font-medium mb-1 block" style={{ color: c.muted }}>
                {t("contact.formMessage")}
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none resize-none transition-shadow focus:ring-2"
                style={{
                  background: c.cardAlt,
                  border: `1px solid ${messageError ? "#DC2626" : c.border}`,
                  color: c.text,
                  ["--tw-ring-color" as any]: messageError ? "#DC2626" : c.primary,
                }}
              />
              <AnimatePresence>
                {messageError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="text-xs mt-1 flex items-center gap-1"
                    style={{ color: "#DC2626" }}
                  >
                    <AlertCircle size={12} /> Please enter a message.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="button"
              onClick={sendViaWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={14} /> {t("contact.sendWhatsapp")}
            </motion.button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center rounded-2xl"
                  style={{ background: c.card }}
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex flex-col items-center gap-3 text-center px-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 15 }}
                      className="h-14 w-14 rounded-full flex items-center justify-center"
                      style={{ background: "#25D36622" }}
                    >
                      <CheckCircle2 size={30} style={{ color: "#25D366" }} />
                    </motion.div>
                    <p className="font-semibold" style={{ color: c.text }}>WhatsApp opened!</p>
                    <p className="text-xs" style={{ color: c.muted }}>Just hit send inside WhatsApp to reach us.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </div>
  );
}