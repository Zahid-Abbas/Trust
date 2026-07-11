"use client";

import { useEffect, useState } from "react";
import { PRAYER_TIMES, PRAYER_LOCATION, PRAYER_METHOD } from "./data";

export type PrayerStatus = "loading" | "live" | "fallback";

export function useLivePrayerTimes() {
  const [times, setTimes] = useState(PRAYER_TIMES);
  const [status, setStatus] = useState<PrayerStatus>("loading");
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchTimes() {
      try {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();

        const url = `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${PRAYER_LOCATION.lat}&longitude=${PRAYER_LOCATION.lng}&method=${PRAYER_METHOD}&timezonestring=${PRAYER_LOCATION.tz}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("bad response");
        const json = await res.json();
        const tm = json?.data?.timings;
        if (!tm) throw new Error("no timings in response");

        // API returns "HH:MM (IST)" — strip the suffix and convert to 12h
        const clean = (s: string) => String(s).split(" ")[0];
        const to12h = (hhmm: string) => {
          const [h, m] = clean(hhmm).split(":").map(Number);
          const period = h >= 12 ? "PM" : "AM";
          const h12 = h % 12 === 0 ? 12 : h % 12;
          return `${h12}:${String(m).padStart(2, "0")} ${period}`;
        };

        if (cancelled) return;
        setTimes([
          { name: "Fajr", time: to12h(tm.Fajr) },
          { name: "Zuhr", time: to12h(tm.Dhuhr) },
          { name: "Asr", time: to12h(tm.Asr) },
          { name: "Maghrib", time: to12h(tm.Maghrib) },
          { name: "Isha", time: to12h(tm.Isha) },
        ]);
        setDateLabel(json?.data?.date?.readable || "");
        setStatus("live");
      } catch (err) {
        if (!cancelled) {
          setTimes(PRAYER_TIMES);
          setStatus("fallback");
        }
      }
    }

    fetchTimes();
    return () => {
      cancelled = true;
    };
  }, []);

  return { times, status, dateLabel };
}
