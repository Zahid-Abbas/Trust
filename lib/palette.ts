export type ThemeName = "light" | "dark";

export const PALETTE = {
  light: {
    page: "#FAFAFA", card: "#FFFFFF", cardAlt: "#F4F7F5",
    text: "#1F2937", muted: "#5B6B62", border: "rgba(15,118,110,0.14)",
    primary: "#0F766E", primaryDark: "#14532D", gold: "#C9A227",
    heroOverlay: "rgba(9,20,17,0.68)", navBg: "rgba(255,255,255,0.8)",
    footer: "#0E1F19", footerText: "#D8E3DC",
  },
  dark: {
    page: "#0B1512", card: "#0F1E19", cardAlt: "#122620",
    text: "#EFF5F1", muted: "#9AAAA1", border: "rgba(201,162,39,0.18)",
    primary: "#2FBFA8", primaryDark: "#1F8F6E", gold: "#D8B44A",
    heroOverlay: "rgba(2,8,6,0.78)", navBg: "rgba(11,21,18,0.82)",
    footer: "#070F0C", footerText: "#B9C7BF",
  },
} as const;

export const fontFor = (lang: string) =>
  lang === "ur" ? "var(--font-nastaliq), serif" : lang === "hi" ? "var(--font-hind), sans-serif" : "var(--font-amiri), serif";

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");
