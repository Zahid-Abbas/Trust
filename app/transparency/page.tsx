"use client";

import React, { useState } from "react";
import { Wallet, Users, Calendar, Landmark, ShieldCheck, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import Reveal from "@/components/Reveal";
import StatCard from "@/components/StatCard";
import { useApp } from "@/lib/app-context";
import { fontFor, formatINR } from "@/lib/palette";
import { CONTENT } from "@/lib/content";
import { STATISTICS, DONATIONS, MONTHLY, EXPENSE_BREAKDOWN, ANNUAL_REPORTS } from "@/lib/data";

export default function TransparencyPage() {
  const { theme, colors: c, lang, t } = useApp();
  const majorExpenses = CONTENT[lang].majorExpenses as { title: string; amount: number; date: string; desc: string }[];
  const [page, setPageNum] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(DONATIONS.length / perPage);
  const shown = DONATIONS.slice((page - 1) * perPage, page * perPage);
  const balance = STATISTICS.totalDonations - MONTHLY.reduce((a, m) => a + m.expense, 0);
  const axisColor = c.muted;

  return (
    <div style={{ background: c.page }}>
      <section className="py-12 sm:py-16 px-5 sm:px-6 text-center" style={{ background: c.cardAlt }}>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: c.gold }}>{t("transparency.tag")}</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-2" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("transparency.title")}
          </h1>
        </Reveal>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          <StatCard icon={Wallet} label={t("stats.totalDonations")} value={STATISTICS.totalDonations} prefix="₹" theme={theme} />
          <StatCard icon={Users} label={t("stats.totalDonors")} value={STATISTICS.totalDonors} theme={theme} />
          <StatCard icon={Calendar} label={t("stats.monthDonations")} value={STATISTICS.monthDonations} prefix="₹" theme={theme} />
          <StatCard icon={Users} label={t("stats.monthDonors")} value={STATISTICS.monthDonors} theme={theme} />
          <StatCard icon={Landmark} label={t("stats.monthExpenses")} value={STATISTICS.monthExpenses} prefix="₹" theme={theme} />
          <StatCard icon={ShieldCheck} label={t("stats.balance")} value={balance} prefix="₹" theme={theme} />
        </div>
      </section>

      <section className="pb-10 sm:pb-14 px-5 sm:px-6 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("transparency.recentTitle")}
          </h2>
          <div className="rounded-2xl overflow-x-auto" style={{ border: `1px solid ${c.border}`, background: c.card }}>
            <table className="w-full text-sm min-w-[280px]">
              <thead>
                <tr style={{ background: c.cardAlt }}>
                  <th className="text-left px-4 sm:px-5 py-3 font-medium" style={{ color: c.muted }}>{t("transparency.date")}</th>
                  <th className="text-right px-4 sm:px-5 py-3 font-medium" style={{ color: c.muted }}>{t("transparency.amount")}</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((d, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${c.border}` }}>
                    <td className="px-4 sm:px-5 py-3" style={{ color: c.text }}>{d.date}</td>
                    <td className="px-4 sm:px-5 py-3 text-right font-medium" style={{ color: c.primary }}>{formatINR(d.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              disabled={page === 1}
              onClick={() => setPageNum((p) => p - 1)}
              className="h-8 w-8 rounded-full flex items-center justify-center disabled:opacity-30"
              style={{ border: `1px solid ${c.border}`, color: c.text }}
            >
              <ChevronLeft size={15} />
            </button>
            <span className="text-sm" style={{ color: c.muted }}>
              {t("transparency.page")} {page} {t("transparency.of")} {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPageNum((p) => p + 1)}
              className="h-8 w-8 rounded-full flex items-center justify-center disabled:opacity-30"
              style={{ border: `1px solid ${c.border}`, color: c.text }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </Reveal>
      </section>

      <section className="pb-10 sm:pb-14 px-5 sm:px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">
        <Reveal>
          <div className="rounded-2xl p-4 sm:p-6 shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: c.text }}>{t("transparency.barChart")}</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={MONTHLY}>
                <CartesianGrid strokeDasharray="3 3" stroke={c.border} />
                <XAxis dataKey="month" stroke={axisColor} fontSize={11} />
                <YAxis stroke={axisColor} fontSize={11} />
                <Tooltip contentStyle={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="income" name={t("transparency.income")} fill={c.primary} radius={[6, 6, 0, 0]} />
                <Bar dataKey="expense" name={t("transparency.expense")} fill={c.gold} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl p-4 sm:p-6 shadow-sm" style={{ background: c.card, border: `1px solid ${c.border}` }}>
            <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: c.text }}>{t("transparency.pieChart")}</h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={EXPENSE_BREAKDOWN} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                  {EXPENSE_BREAKDOWN.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 10 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Reveal>
      </section>

      <section className="pb-10 sm:pb-14 px-5 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("transparency.majorExpenses")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {majorExpenses.map((e) => (
              <div key={e.title} className="rounded-2xl p-5" style={{ background: c.card, border: `1px solid ${c.border}` }}>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-sm sm:text-base" style={{ color: c.text }}>{e.title}</h3>
                  <span className="text-sm font-semibold shrink-0" style={{ color: c.gold }}>{formatINR(e.amount)}</span>
                </div>
                <p className="text-sm" style={{ color: c.muted }}>{e.desc}</p>
                <p className="text-xs mt-2" style={{ color: c.muted }}>{e.date}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pb-14 sm:pb-16 px-5 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6" style={{ color: c.text, fontFamily: fontFor(lang) }}>
            {t("transparency.annualReports")}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {ANNUAL_REPORTS.map((r) => (
              <div key={r.year} className="rounded-2xl p-5 flex items-center justify-between" style={{ background: c.card, border: `1px solid ${c.border}` }}>
                <div>
                  <p className="font-semibold" style={{ color: c.text }}>{r.year}</p>
                  <p className="text-xs" style={{ color: c.muted }}>PDF · {r.size}</p>
                </div>
                <button
                  className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${c.primary}1A`, color: c.primary }}
                  aria-label={`Download ${r.year}`}
                >
                  <Download size={15} />
                </button>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="text-center text-xs mt-7 sm:mt-8" style={{ color: c.muted }}>{t("transparency.lastUpdated")}</p>
      </section>
    </div>
  );
}
