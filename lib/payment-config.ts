export const UPI_ID = "zahidjafri15@okicici";
export const PAYEE_NAME = "Haidariya Foundation";

export const AMOUNT_OPTIONS = [
  { amount: 50, impact: "Helps cover a day of electricity" },
  { amount: 100, impact: "Contributes to Masjid upkeep" },
  { amount: 200, impact: "Sponsors prayer mats & supplies", popular: false },
  { amount: 500, impact: "Supports a day of Majlis arrangements", popular: true },
  { amount: 1000, impact: "Funds a day of community langar" },
  { amount: 2000, impact: "Goes toward roof & structural repairs" },
];

export function buildUpiLink(scheme: string, amount: string) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    cu: "INR",
    tn: "Donation to Haidariya Foundation",
  });
  if (amount && Number(amount) > 0) {
    params.set("am", amount);
  }
  return `${scheme}?${params.toString()}`;
}