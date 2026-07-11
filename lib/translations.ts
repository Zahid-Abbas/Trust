export type Lang = "en" | "hi" | "ur";

export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिंदी", short: "हि" },
  { code: "ur", label: "اردو", short: "اردو" },
];

export const STRINGS = {
  en: {
    "nav.home": "Home", "nav.about": "About Us", "nav.donate": "Donate",
    "nav.transparency": "Transparency", "nav.contact": "Contact", "nav.donateNow": "Donate Now",
    "brand": "Noor-e-Karbala",

    "hero.tag": "Masjid • Imambargah • Karbala",
    "hero.title": "Noor-e-Karbala Trust",
    "hero.subtitle": "A peaceful space for prayer, remembrance, and community — sustained entirely by the generosity of people like you.",
    "hero.donate": "Donate Now", "hero.learnMore": "Learn More",

    "about.tag": "About Us", "about.title": "A home for faith and fellowship",
    "about.body": "For over three decades, our Masjid and Imambargah have served as a gathering place for prayer, mourning gatherings for Karbala, and community welfare — entirely sustained by the sincerity of local donors.",
    "about.readMore": "Read More",

    "stats.tag": "Financial Snapshot", "stats.title": "Transparency at a glance",
    "stats.totalDonations": "Total Donations", "stats.monthDonations": "This Month's Donations",
    "stats.totalDonors": "Total Donors", "stats.monthDonors": "This Month's Donors",
    "stats.monthExpenses": "This Month's Expenses", "stats.balance": "Current Balance",

    "announce.tag": "Latest", "announce.title": "Recent Announcements",

    "prayer.title": "Today's Prayer Timings",

    "cta.title": "Every contribution preserves this sacred space",
    "cta.body": "Regardless of its size, your gift helps preserve our Masjid, Imambargah, and Karbala, and supports the wider community. May Allah reward every donor abundantly.",
    "cta.button": "Donate Now",

    "about.page.tag": "About Us", "about.page.title": "History, Mission & Vision",
    "about.mission.title": "Mission", "about.mission.body": "To provide a welcoming space for prayer and remembrance, and to serve our community with compassion and transparency.",
    "about.vision.title": "Vision", "about.vision.body": "A thriving, self-sustaining institution that future generations inherit stronger than they found it.",
    "about.values.title": "Values", "about.values.body": "Sincerity, humility, accountability, and generosity guide every decision we make.",
    "about.journey": "Our Journey", "about.findUs": "Find Us", "about.mapPlaceholder": "Map placeholder — embed Google Maps location here",

    "donate.tag": "Donate", "donate.title": "Support Our Masjid & Imambargah",
    "donate.subtitle": "Scan, tap, or transfer — every path leads to the same sincere cause.",
    "donate.scanTitle": "Scan to Pay via UPI", "donate.qrPlaceholder": "QR code placeholder — replace with your official UPI QR image",
    "donate.upiId": "UPI ID", "donate.bankTitle": "Bank Transfer Details",
    "donate.accName": "Account Name", "donate.bankName": "Bank Name",
    "donate.accNumber": "Account Number", "donate.ifsc": "IFSC Code", "donate.branch": "Branch",
    "donate.note": "Every rupee you give is handled with care and recorded on our Transparency page. Give sincerely, and give what you can — it is the intention that matters most.",
    "donate.faqTitle": "Frequently Asked Questions",

    "transparency.tag": "Transparency", "transparency.title": "Where Every Rupee Goes",
    "transparency.recentTitle": "Recent Anonymous Donations",
    "transparency.date": "Date", "transparency.amount": "Amount",
    "transparency.page": "Page", "transparency.of": "of",
    "transparency.barChart": "Monthly Income vs Expenses",
    "transparency.pieChart": "Expense Breakdown",
    "transparency.income": "Income", "transparency.expense": "Expense",
    "transparency.majorExpenses": "Major Expenses",
    "transparency.annualReports": "Annual Reports",
    "transparency.lastUpdated": "Last updated: 11 July 2026",

    "contact.tag": "Contact", "contact.title": "We'd Love to Hear From You",
    "contact.address": "Address", "contact.addressValue": "Imamiya Masjid, Korjha, Ambedkar Nagar, UP 224139",
    "contact.phone": "Phone", "contact.phoneValue": "+91 70811 96735",
    "contact.email": "Email", "contact.emailValue": "contact@noorekarbala.org",
    "contact.mapPlaceholder": "Map placeholder",
    "contact.formName": "Name", "contact.formEmail": "Email", "contact.formMessage": "Message",
    "contact.send": "Send Message", "contact.sent": "Message Sent",
    "contact.sentNote": "Thank you — we'll get back to you soon.",

    "footer.tagline": "A peaceful space for prayer, remembrance, and community service.",
    "footer.quickLinks": "Quick Links", "footer.contact": "Contact", "footer.prayer": "Prayer",
    "footer.copyright": "© 2026 Noor-e-Karbala Trust. All rights reserved.",
    "footer.blessing": "May Allah accept every sincere contribution.",
  },

  hi: {
    "nav.home": "होम", "nav.about": "हमारे बारे में", "nav.donate": "दान करें",
    "nav.transparency": "पारदर्शिता", "nav.contact": "संपर्क करें", "nav.donateNow": "अभी दान करें",
    "brand": "नूर-ए-कर्बला",

    "hero.tag": "मस्जिद • इमामबाड़ा • कर्बला",
    "hero.title": "नूर-ए-कर्बला ट्रस्ट",
    "hero.subtitle": "नमाज़, याद और समुदाय के लिए एक शांत स्थान — जो पूरी तरह आप जैसे उदार लोगों की मदद से चलता है।",
    "hero.donate": "अभी दान करें", "hero.learnMore": "और जानें",

    "about.tag": "हमारे बारे में", "about.title": "आस्था और भाईचारे का घर",
    "about.body": "तीन दशकों से अधिक समय से, हमारी मस्जिद और इमामबाड़ा नमाज़, कर्बला की मजलिसों और सामुदायिक कल्याण के लिए एक मिलन स्थल रहे हैं — जो पूरी तरह स्थानीय दानदाताओं की सच्ची भावना से चलता है।",
    "about.readMore": "और पढ़ें",

    "stats.tag": "वित्तीय सारांश", "stats.title": "एक नज़र में पारदर्शिता",
    "stats.totalDonations": "कुल दान", "stats.monthDonations": "इस माह का दान",
    "stats.totalDonors": "कुल दानदाता", "stats.monthDonors": "इस माह के दानदाता",
    "stats.monthExpenses": "इस माह का खर्च", "stats.balance": "वर्तमान शेष राशि",

    "announce.tag": "नवीनतम", "announce.title": "हाल की घोषणाएं",

    "prayer.title": "आज के नमाज़ के समय",

    "cta.title": "आपका हर योगदान इस पवित्र स्थान को संरक्षित करता है",
    "cta.body": "चाहे राशि छोटी हो या बड़ी, आपका योगदान हमारी मस्जिद, इमामबाड़ा और कर्बला को संरक्षित रखने और समुदाय की सेवा में मदद करता है। अल्लाह हर दानदाता को भरपूर बदला दे।",
    "cta.button": "अभी दान करें",

    "about.page.tag": "हमारे बारे में", "about.page.title": "इतिहास, उद्देश्य और दृष्टि",
    "about.mission.title": "उद्देश्य", "about.mission.body": "नमाज़ और याद के लिए एक स्वागत योग्य स्थान प्रदान करना, और करुणा तथा पारदर्शिता के साथ अपने समुदाय की सेवा करना।",
    "about.vision.title": "दृष्टि", "about.vision.body": "एक समृद्ध, आत्मनिर्भर संस्था जिसे आने वाली पीढ़ियां पहले से मज़बूत रूप में पाएं।",
    "about.values.title": "मूल्य", "about.values.body": "सच्चाई, विनम्रता, जवाबदेही और उदारता हमारे हर फैसले का मार्गदर्शन करते हैं।",
    "about.journey": "हमारी यात्रा", "about.findUs": "हमें खोजें", "about.mapPlaceholder": "मानचित्र स्थान — यहाँ गूगल मैप्स एम्बेड करें",

    "donate.tag": "दान करें", "donate.title": "हमारी मस्जिद और इमामबाड़ा का समर्थन करें",
    "donate.subtitle": "स्कैन करें, टैप करें, या ट्रांसफर करें — हर तरीका एक ही सच्चे उद्देश्य तक पहुँचता है।",
    "donate.scanTitle": "UPI से भुगतान के लिए स्कैन करें", "donate.qrPlaceholder": "QR कोड प्लेसहोल्डर — इसे अपने आधिकारिक UPI QR छवि से बदलें",
    "donate.upiId": "UPI आईडी", "donate.bankTitle": "बैंक ट्रांसफर विवरण",
    "donate.accName": "खाता नाम", "donate.bankName": "बैंक का नाम",
    "donate.accNumber": "खाता संख्या", "donate.ifsc": "IFSC कोड", "donate.branch": "शाखा",
    "donate.note": "आपके द्वारा दिया गया हर रुपया सावधानी से संभाला जाता है और हमारे पारदर्शिता पृष्ठ पर दर्ज किया जाता है। सच्चे मन से दें, जो दे सकें वह दें — नीयत ही सबसे महत्वपूर्ण है।",
    "donate.faqTitle": "अक्सर पूछे जाने वाले प्रश्न",

    "transparency.tag": "पारदर्शिता", "transparency.title": "हर रुपया कहाँ जाता है",
    "transparency.recentTitle": "हाल के गुमनाम दान",
    "transparency.date": "तारीख़", "transparency.amount": "राशि",
    "transparency.page": "पृष्ठ", "transparency.of": "का",
    "transparency.barChart": "मासिक आय बनाम व्यय",
    "transparency.pieChart": "व्यय विवरण",
    "transparency.income": "आय", "transparency.expense": "व्यय",
    "transparency.majorExpenses": "प्रमुख व्यय",
    "transparency.annualReports": "वार्षिक रिपोर्ट",
    "transparency.lastUpdated": "अंतिम अद्यतन: 11 जुलाई 2026",

    "contact.tag": "संपर्क करें", "contact.title": "हमें आपसे सुनना अच्छा लगेगा",
    "contact.address": "पता", "contact.addressValue": "इमामिया मस्जिद, कोरझा, अंबेडकर नगर, उत्तर प्रदेश",
    "contact.phone": "फ़ोन", "contact.phoneValue": "+91 98765 43210",
    "contact.email": "ईमेल", "contact.emailValue": "contact@noorekarbala.org",
    "contact.mapPlaceholder": "मानचित्र स्थान",
    "contact.formName": "नाम", "contact.formEmail": "ईमेल", "contact.formMessage": "संदेश",
    "contact.send": "संदेश भेजें", "contact.sent": "संदेश भेजा गया",
    "contact.sentNote": "धन्यवाद — हम जल्द ही आपसे संपर्क करेंगे।",

    "footer.tagline": "नमाज़, याद और सामुदायिक सेवा के लिए एक शांत स्थान।",
    "footer.quickLinks": "त्वरित लिंक", "footer.contact": "संपर्क", "footer.prayer": "नमाज़",
    "footer.copyright": "© 2026 नूर-ए-कर्बला ट्रस्ट। सर्वाधिकार सुरक्षित।",
    "footer.blessing": "अल्लाह हर सच्चे योगदान को स्वीकार करे।",
  },

  ur: {
    "nav.home": "ہوم", "nav.about": "ہمارے بارے میں", "nav.donate": "عطیہ کریں",
    "nav.transparency": "شفافیت", "nav.contact": "رابطہ کریں", "nav.donateNow": "ابھی عطیہ کریں",
    "brand": "نور کربلا",

    "hero.tag": "مسجد • امام بارگاہ • کربلا",
    "hero.title": "نور کربلا ٹرسٹ",
    "hero.subtitle": "نماز، ذکر اور برادری کے لیے ایک پرسکون مقام — جو مکمل طور پر آپ جیسے سخی لوگوں کی فیاضی سے چلتا ہے۔",
    "hero.donate": "ابھی عطیہ کریں", "hero.learnMore": "مزید جانیں",

    "about.tag": "ہمارے بارے میں", "about.title": "ایمان اور بھائی چارے کا گھر",
    "about.body": "تین دہائیوں سے زائد عرصے سے، ہماری مسجد اور امام بارگاہ نماز، کربلا کی مجالس اور فلاحی خدمات کے لیے ایک مرکز رہے ہیں — جو مکمل طور پر مقامی عطیہ دہندگان کے خلوص سے چلتا ہے۔",
    "about.readMore": "مزید پڑھیں",

    "stats.tag": "مالی جائزہ", "stats.title": "ایک نظر میں شفافیت",
    "stats.totalDonations": "کل عطیات", "stats.monthDonations": "اس ماہ کے عطیات",
    "stats.totalDonors": "کل عطیہ دہندگان", "stats.monthDonors": "اس ماہ کے عطیہ دہندگان",
    "stats.monthExpenses": "اس ماہ کے اخراجات", "stats.balance": "موجودہ بیلنس",

    "announce.tag": "تازہ ترین", "announce.title": "حالیہ اعلانات",

    "prayer.title": "آج کے نماز کے اوقات",

    "cta.title": "آپ کا ہر عطیہ اس مقدس مقام کی حفاظت کرتا ہے",
    "cta.body": "چاہے رقم کم ہو یا زیادہ، آپ کا عطیہ ہماری مسجد، امام بارگاہ اور کربلا کی حفاظت اور برادری کی خدمت میں مددگار ثابت ہوتا ہے۔ اللہ ہر عطیہ دہندہ کو بہترین اجر عطا فرمائے۔",
    "cta.button": "ابھی عطیہ کریں",

    "about.page.tag": "ہمارے بارے میں", "about.page.title": "تاریخ، مقصد اور وژن",
    "about.mission.title": "مقصد", "about.mission.body": "نماز اور ذکر کے لیے ایک خوش آئند مقام فراہم کرنا، اور شفقت و شفافیت کے ساتھ اپنی برادری کی خدمت کرنا۔",
    "about.vision.title": "وژن", "about.vision.body": "ایک مضبوط اور خودکفیل ادارہ جسے آنے والی نسلیں پہلے سے بہتر حالت میں پائیں۔",
    "about.values.title": "اقدار", "about.values.body": "اخلاص، تواضع، جوابدہی اور سخاوت ہمارے ہر فیصلے کی رہنمائی کرتے ہیں۔",
    "about.journey": "ہمارا سفر", "about.findUs": "ہمیں تلاش کریں", "about.mapPlaceholder": "نقشے کی جگہ — یہاں گوگل میپس شامل کریں",

    "donate.tag": "عطیہ کریں", "donate.title": "ہماری مسجد اور امام بارگاہ کی مدد کریں",
    "donate.subtitle": "اسکین کریں، ٹیپ کریں، یا ٹرانسفر کریں — ہر راستہ ایک ہی مخلصانہ مقصد کی طرف جاتا ہے۔",
    "donate.scanTitle": "UPI کے ذریعے ادائیگی کے لیے اسکین کریں", "donate.qrPlaceholder": "QR کوڈ کی جگہ — اپنی سرکاری UPI QR تصویر سے تبدیل کریں",
    "donate.upiId": "UPI آئی ڈی", "donate.bankTitle": "بینک ٹرانسفر کی تفصیلات",
    "donate.accName": "اکاؤنٹ کا نام", "donate.bankName": "بینک کا نام",
    "donate.accNumber": "اکاؤنٹ نمبر", "donate.ifsc": "IFSC کوڈ", "donate.branch": "برانچ",
    "donate.note": "آپ کا دیا گیا ہر روپیہ احتیاط سے سنبھالا جاتا ہے اور ہمارے شفافیت صفحے پر درج کیا جاتا ہے۔ خلوص دل سے دیں، جو دے سکیں دیں — نیت ہی سب سے اہم ہے۔",
    "donate.faqTitle": "اکثر پوچھے گئے سوالات",

    "transparency.tag": "شفافیت", "transparency.title": "ہر روپیہ کہاں جاتا ہے",
    "transparency.recentTitle": "حالیہ گمنام عطیات",
    "transparency.date": "تاریخ", "transparency.amount": "رقم",
    "transparency.page": "صفحہ", "transparency.of": "از",
    "transparency.barChart": "ماہانہ آمدنی بمقابلہ اخراجات",
    "transparency.pieChart": "اخراجات کی تفصیل",
    "transparency.income": "آمدنی", "transparency.expense": "اخراجات",
    "transparency.majorExpenses": "بڑے اخراجات",
    "transparency.annualReports": "سالانہ رپورٹس",
    "transparency.lastUpdated": "آخری تازہ کاری: 11 جولائی 2026",

    "contact.tag": "رابطہ کریں", "contact.title": "ہمیں آپ سے سن کر خوشی ہوگی",
    "contact.address": "پتہ", "contact.addressValue": "امامیہ مسجد، کورجھا، امبیڈکر نگر، اتر پردیش",
    "contact.phone": "فون", "contact.phoneValue": "+91 98765 43210",
    "contact.email": "ای میل", "contact.emailValue": "contact@noorekarbala.org",
    "contact.mapPlaceholder": "نقشے کی جگہ",
    "contact.formName": "نام", "contact.formEmail": "ای میل", "contact.formMessage": "پیغام",
    "contact.send": "پیغام بھیجیں", "contact.sent": "پیغام بھیج دیا گیا",
    "contact.sentNote": "شکریہ — ہم جلد آپ سے رابطہ کریں گے۔",

    "footer.tagline": "نماز، ذکر اور سماجی خدمت کے لیے ایک پرسکون مقام۔",
    "footer.quickLinks": "فوری روابط", "footer.contact": "رابطہ", "footer.prayer": "نماز",
    "footer.copyright": "© 2026 نور کربلا ٹرسٹ۔ جملہ حقوق محفوظ ہیں۔",
    "footer.blessing": "اللہ ہر مخلصانہ عطیہ قبول فرمائے۔",
  },
};


export function getT(lang: Lang) {
  return (key: string) => (STRINGS as any)[lang]?.[key] ?? (STRINGS as any).en[key] ?? key;
}
