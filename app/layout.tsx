import type { Metadata } from "next";
import { Manrope, Amiri, Hind, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/app-context";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700"] });
const amiri = Amiri({ subsets: ["latin"], variable: "--font-amiri", weight: ["400", "700"] });
const hind = Hind({ subsets: ["devanagari", "latin"], variable: "--font-hind", weight: ["400", "500", "600", "700"] });
const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-nastaliq", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Noor-e-Karbala Trust — Masjid, Imambargah & Karbala Donations",
  description: "A peaceful space for prayer, remembrance, and community — sustained by the generosity of donors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${amiri.variable} ${hind.variable} ${nastaliq.variable}`} style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
        <AppProvider>
          <NavBar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
