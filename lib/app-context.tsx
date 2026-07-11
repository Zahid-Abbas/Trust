"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PALETTE, ThemeName } from "./palette";
import { Lang, getT } from "./translations";

type Ctx = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  colors: typeof PALETTE.light;
};

const AppContext = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("light");
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as ThemeName | null;
    const savedLang = window.localStorage.getItem("lang") as Lang | null;
    if (savedTheme) setThemeState(savedTheme);
    if (savedLang) setLangState(savedLang);
    setHydrated(true);
  }, []);

  const setTheme = (t: ThemeName) => {
    setThemeState(t);
    window.localStorage.setItem("theme", t);
  };
  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = getT(lang);
  const colors = PALETTE[theme];

  // Avoid a flash of default theme/lang before localStorage loads
  if (!hydrated) return null;

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang, t, colors }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
