# Haidariya Foundation — Donation Website

A Next.js (App Router) + TypeScript + Tailwind CSS donation website for a Masjid, Imambargah, and Karbala,
with English / Hindi / Urdu language support, dark/light mode, and live Shia (Jafari) prayer timings.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx          Root layout — fonts, providers, NavBar/Footer
  page.tsx             Home page
  about/page.tsx        About page
  donate/page.tsx        Donate page (QR, UPI, bank details, FAQ)
  transparency/page.tsx  Transparency page (charts, donation table)
  contact/page.tsx       Contact page

components/
  NavBar.tsx, Footer.tsx, LangToggle.tsx
  HomeSections.tsx       Hero, AboutPreview, FinancialSnapshot, Announcements, CTA
  PrayerTimesCard.tsx    Live prayer-times widget
  StatCard.tsx, QuoteCarousel.tsx, CopyField.tsx, FAQItem.tsx
  MosqueSilhouette.tsx   Decorative SVG hero art
  Reveal.tsx             Scroll-reveal animation wrapper (Framer Motion)

lib/
  app-context.tsx        Theme + language React context (persists to localStorage)
  palette.ts              Color tokens for light/dark theme
  translations.ts          All UI strings in English / Hindi / Urdu
  content.ts                Per-language content: quotes, announcements, timeline, FAQs, major expenses
  data.ts                     Static data: statistics, donations, monthly income/expense, prayer location
  use-live-prayer-times.ts     Hook that fetches today's Shia (Jafari) prayer times from the AlAdhan API
```

## Things to customize before going live

1. **Donation details** — in `app/donate/page.tsx`, replace the placeholder QR code SVG with a real
   `<img src="/qr-code.png" />` of your UPI QR code, and update the UPI ID / bank details in `CopyField` values.
2. **Prayer location** — in `lib/data.ts`, `PRAYER_LOCATION` is set to Akbarpur, Ambedkar Nagar
   (lat 26.4310, lng 82.5340). Change the coordinates if needed.
3. **Prayer calculation method** — `PRAYER_METHOD = 0` in `lib/data.ts` is AlAdhan's
   "Shia Ithna-Ashari (Jafari)" method. See https://aladhan.com/calculation-methods for other options.
4. **Contact form** — `app/contact/page.tsx` currently only shows a success message locally. Wire the
   `submit` function up to a real backend (an API route, or a service like Formspree/Resend) to actually
   receive messages.
5. **Google Maps** — the About and Contact pages have map placeholders. Replace them with a real
   `<iframe src="https://www.google.com/maps/embed?...">`.
6. **Annual report PDFs** — the Download buttons in `app/transparency/page.tsx` are visual only; link them
   to real PDF files (e.g. placed in the `public/` folder).
7. **Statistics & donation data** — everything in `lib/data.ts` and `lib/content.ts` is placeholder data.
   Replace with your real figures, or connect it to a real backend/database.

## Notes

- Language and theme preferences are saved to `localStorage` and restored on next visit.
- Urdu automatically switches the page to right-to-left (RTL) layout.
- The live prayer times widget gracefully falls back to sample data if the AlAdhan API is unreachable.
