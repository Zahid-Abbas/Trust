export const PRAYER_TIMES = [
  { name: "Fajr", time: "4:12 AM" }, { name: "Zuhr", time: "12:05 PM" },
  { name: "Asr", time: "5:40 PM" }, { name: "Maghrib", time: "7:32 PM" },
  { name: "Isha", time: "9:00 PM" },
];

// Location used for live prayer-time calculation
export const PRAYER_LOCATION = { name: "Akbarpur, Ambedkar Nagar, UP", lat: 26.4310, lng: 82.5340, tz: "Asia/Kolkata" };
// AlAdhan API calculation method: 0 = Shia Ithna-Ashari (Jafari)
export const PRAYER_METHOD = 0;

export const STATISTICS = { totalDonations: 4218650, monthDonations: 186420, totalDonors: 3126, monthDonors: 214, monthExpenses: 92300 };

export const DONATIONS = [
  { date: "11 Jul 2026", amount: 500 }, { date: "11 Jul 2026", amount: 1001 },
  { date: "10 Jul 2026", amount: 251 }, { date: "09 Jul 2026", amount: 5000 },
  { date: "09 Jul 2026", amount: 151 }, { date: "08 Jul 2026", amount: 2100 },
  { date: "08 Jul 2026", amount: 501 }, { date: "07 Jul 2026", amount: 11000 },
  { date: "06 Jul 2026", amount: 300 }, { date: "05 Jul 2026", amount: 750 },
  { date: "05 Jul 2026", amount: 1500 }, { date: "04 Jul 2026", amount: 201 },
  { date: "03 Jul 2026", amount: 5100 }, { date: "02 Jul 2026", amount: 101 },
  { date: "01 Jul 2026", amount: 2500 }, { date: "30 Jun 2026", amount: 351 },
  { date: "29 Jun 2026", amount: 1001 }, { date: "28 Jun 2026", amount: 500 },
  { date: "27 Jun 2026", amount: 251 }, { date: "26 Jun 2026", amount: 3000 },
];

export const MONTHLY = [
  { month: "Feb", income: 312000, expense: 88000 }, { month: "Mar", income: 289000, expense: 95000 },
  { month: "Apr", income: 356000, expense: 101000 }, { month: "May", income: 298000, expense: 87500 },
  { month: "Jun", income: 341000, expense: 99200 }, { month: "Jul", income: 186420, expense: 92300 },
];

export const EXPENSE_BREAKDOWN = [
  { name: "Electricity", value: 18200, color: "#0F766E" }, { name: "Water", value: 6100, color: "#14532D" },
  { name: "Cleaning", value: 8400, color: "#C9A227" }, { name: "Repairs", value: 24500, color: "#3F9C8E" },
  { name: "Religious Programs", value: 21300, color: "#8FBFA8" }, { name: "Maintenance", value: 9800, color: "#D8C27A" },
  { name: "Miscellaneous", value: 4000, color: "#A9B8AE" },
];

export const ANNUAL_REPORTS = [{ year: 2025, size: "2.1 MB" }, { year: 2024, size: "1.8 MB" }, { year: 2023, size: "1.6 MB" }];
