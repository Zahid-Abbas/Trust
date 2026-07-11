import { Hero, AboutPreview, FinancialSnapshot, Announcements, CTASection } from "@/components/HomeSections";
import PrayerTimesCard from "@/components/PrayerTimesCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FinancialSnapshot />
      <Announcements />
      <PrayerTimesCard />
      <CTASection />
    </>
  );
}
