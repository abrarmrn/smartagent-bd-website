// All site copy + data, bilingual (en / bn). High-converting, jargon-free product-page copy.

export type Lang = "en" | "bn";

/* ---------------- live toast notifications (social proof) ---------------- */
export const POPUPS = [
  { emoji: "🔥", en: "AI just closed an order for a Jamdani saree", bn: "AI এইমাত্র একটি জামদানি শাড়ির অর্ডার ক্লোজ করেছে", agoEn: "2 min ago", agoBn: "২ মিনিট আগে" },
  { emoji: "💰", en: "This bot generated ৳14,500 in sales today", bn: "এই বট আজ ৳১৪,৫০০ সেল এনেছে", agoEn: "Today", agoBn: "আজ" },
  { emoji: "⚡", en: "Replied to a customer in 3.1 seconds", bn: "একজন কাস্টমারকে ৩.১ সেকেন্ডে রিপ্লাই দিয়েছে", agoEn: "Just now · 2:47 AM", agoBn: "এইমাত্র · রাত ২:৪৭" },
  { emoji: "🎙️", en: "Closed a sale from a Bangla voice note", bn: "একটি বাংলা ভয়েস নোট থেকে সেল ক্লোজ করেছে", agoEn: "5 min ago", agoBn: "৫ মিনিট আগে" },
  { emoji: "🛒", en: "New cash-on-delivery order confirmed — Dhaka", bn: "নতুন ক্যাশ-অন-ডেলিভারি অর্ডার কনফার্ম — ঢাকা", agoEn: "1 min ago", agoBn: "১ মিনিট আগে" },
  { emoji: "📸", en: "Read a product screenshot & confirmed the order", bn: "প্রোডাক্ট স্ক্রিনশট পড়ে অর্ডার কনফার্ম করেছে", agoEn: "3 min ago", agoBn: "৩ মিনিট আগে" },
  { emoji: "💸", en: "Recovered a ৳2,400 sale from an abandoned cart", bn: "কার্ট ছেড়ে যাওয়া কাস্টমার থেকে ৳২,৪০০ সেল ফিরিয়েছে", agoEn: "8 min ago", agoBn: "৮ মিনিট আগে" },
] as const;

/* ---------------- pain ("Silent Revenue Killer") ---------------- */
export const PAINS = [
  {
    icon: "clock",
    en: { title: "The 2-hour reply that loses the sale", body: "Buyers message five pages at once and buy from whoever answers first. A 2-hour reply hands your order straight to your competitor." },
    bn: { title: "২ ঘণ্টার দেরি রিপ্লাই — সেল শেষ", body: "ক্রেতা একসাথে পাঁচটা পেজে মেসেজ দেয়, কেনে তার কাছ থেকেই যে আগে উত্তর দেয়। আপনার ২ ঘণ্টার দেরি অর্ডারটা সোজা প্রতিযোগীর হাতে তুলে দেয়।" },
  },
  {
    icon: "moon",
    en: { title: "Every night, money walks out", body: "Your best customers shop at midnight. With nobody to reply, those ready-to-buy DMs go cold by morning — and so does the sale." },
    bn: { title: "প্রতি রাতে টাকা বেরিয়ে যায়", body: "আপনার সেরা কাস্টমার কেনাকাটা করে মাঝরাতে। উত্তর দেওয়ার কেউ না থাকায় কিনতে-প্রস্তুত সেই DM সকালের মধ্যে ঠান্ডা হয়ে যায় — সেলটাও।" },
  },
  {
    icon: "wallet",
    en: { title: "Even a team of moderators drops orders", body: "You hire two, three, even five admins — and they still mix up prices, forget orders, take sick days, and vanish the moment things get busy." },
    bn: { title: "৫ জন মডারেটরও অর্ডার ফেলে দেয়", body: "আপনি দুই, তিন, এমনকি পাঁচজন অ্যাডমিন রাখেন — তবুও তারা দাম গুলিয়ে ফেলে, অর্ডার ভুলে যায়, ছুটি নেয়, আর ব্যস্ত সময়েই হাওয়া হয়ে যায়।" },
  },
  {
    icon: "repeat",
    en: { title: "Buried under 'dam koto?'", body: "You answer the same price and stock questions 200 times a day by hand — exhausted — while the real growth work never gets touched." },
    bn: { title: "'দাম কত?'-এর নিচে চাপা", body: "একই দাম-স্টকের প্রশ্নের উত্তর দিনে ২০০ বার নিজ হাতে দেন — ক্লান্ত — আর আসল গ্রোথের কাজটা কখনো করাই হয় না।" },
  },
] as const;

/* ---------------- solution pillars ---------------- */
export const PILLARS = [
  {
    icon: "brain",
    en: { title: "Hyper-trained on your shop", body: "It learns your products, prices, tone and policies until it sells exactly like your sharpest employee — only faster, and never off." },
    bn: { title: "আপনার দোকানে হাইপার-ট্রেইনড", body: "আপনার প্রোডাক্ট, দাম, টোন ও পলিসি শেখে যতক্ষণ না আপনার সেরা কর্মীর মতোই বিক্রি করে — শুধু আরও দ্রুত, কখনো বন্ধ হয় না।" },
  },
  {
    icon: "target",
    en: { title: "Built to close, not just chat", body: "Every reply nudges the customer one step closer to a confirmed cash-on-delivery order. It sells — it doesn't just answer." },
    bn: { title: "ক্লোজ করার জন্য তৈরি, শুধু চ্যাট নয়", body: "প্রতিটি রিপ্লাই কাস্টমারকে কনফার্মড ক্যাশ-অন-ডেলিভারি অর্ডারের এক ধাপ কাছে নেয়। এটা বিক্রি করে — শুধু উত্তর দেয় না।" },
  },
  {
    icon: "shield",
    en: { title: "Tireless and always on", body: "No sick days, no moods, no 3 AM gaps. It gives every single customer your A-game, every hour of every day." },
    bn: { title: "ক্লান্তিহীন, সবসময় চালু", body: "অসুস্থতার ছুটি নেই, মুড নেই, রাত ৩টার ফাঁক নেই। প্রতিটি কাস্টমারকে আপনার সেরাটা দেয়, দিনের প্রতি ঘণ্টায়।" },
  },
] as const;

/* ---------------- benefit-driven features ---------------- */
export const FEATURES = [
  {
    icon: "mic",
    tag: "Voice AI",
    en: { title: "Closes sales through Bangla voice DMs", body: "Your customers hate typing. They send a voice note — the AI listens, understands and replies in seconds. No friction, no drop-off." },
    bn: { title: "বাংলা ভয়েস DM-এ সেল ক্লোজ করে", body: "আপনার কাস্টমার টাইপ করতে চায় না। ভয়েস নোট পাঠায় — AI শুনে, বুঝে, সেকেন্ডে উত্তর দেয়। কোনো ঝামেলা নেই, কাস্টমার হারায় না।" },
  },
  {
    icon: "eye",
    tag: "Vision AI",
    en: { title: "Reads customer screenshots to confirm prices instantly", body: "A buyer pastes a product screenshot — your agent recognises it and quotes the exact price on the spot. No 'which one, apu?' back-and-forth." },
    bn: { title: "স্ক্রিনশট পড়ে সাথে সাথে দাম জানায়", body: "ক্রেতা প্রোডাক্টের স্ক্রিনশট পাঠায় — এজেন্ট চিনে সাথে সাথে সঠিক দাম বলে। 'কোনটা আপু?' ঝামেলা নেই।" },
  },
  {
    icon: "save",
    tag: "Auto lead capture",
    en: { title: "Captures order names & numbers to a Google Sheet automatically", body: "No more lost contacts. It saves every customer's name, number and order on its own — your entire customer list builds itself." },
    bn: { title: "অর্ডারের নাম-নম্বর Google Sheet-এ নিজে থেকে সেভ করে", body: "আর কোনো কন্টাক্ট হারাবে না। প্রতিটি কাস্টমারের নাম, নম্বর ও অর্ডার নিজে থেকে সেভ হয় — আপনার পুরো কাস্টমার লিস্ট নিজেই তৈরি হয়।" },
  },
  {
    icon: "chat",
    tag: "Human-grade Bangla",
    en: { title: "Talks like a real Dhaka salesperson — never a robot", body: "Warm, natural Bangla with the right আপু/ভাইয়া. Your customers feel cared for, not processed by a machine." },
    bn: { title: "আসল ঢাকাই সেলসপারসনের মতো কথা বলে", body: "আন্তরিক, স্বাভাবিক বাংলা, সঠিক আপু/ভাইয়া। কাস্টমার গুরুত্ব পায়, যন্ত্রের মতো নয়।" },
  },
  {
    icon: "tag",
    tag: "Always accurate",
    en: { title: "Quotes only real prices & stock — never guesses", body: "It reads live numbers from your own sheet, so it never over-promises stock or loses a sale with a made-up price." },
    bn: { title: "শুধু আসল দাম ও স্টক বলে — কখনো অনুমান নয়", body: "আপনার শিট থেকে লাইভ সংখ্যা পড়ে, তাই ভুল স্টক বা বানানো দামে কখনো সেল হারায় না।" },
  },
  {
    icon: "cart",
    tag: "Auto-checkout",
    en: { title: "Pushes every chat to cash-on-delivery checkout", body: "It doesn't wait to be asked. It proposes the order, confirms COD and captures the delivery address — closing the sale for you." },
    bn: { title: "প্রতিটি চ্যাটকে ক্যাশ-অন-ডেলিভারিতে নেয়", body: "জিজ্ঞেস করার অপেক্ষা করে না। অর্ডার প্রস্তাব করে, COD কনফার্ম করে, ঠিকানা নেয় — সেলটা আপনার হয়ে ক্লোজ করে।" },
  },
] as const;

/* ---------------- how it works ---------------- */
export const PROCESS = [
  {
    no: "01",
    en: { title: "We plug into your page", body: "We connect your Messenger, product sheet and catalog for you. Fully done-for-you — you touch nothing." },
    bn: { title: "আপনার পেজে যুক্ত করি", body: "আপনার মেসেঞ্জার, প্রোডাক্ট শিট ও ক্যাটালগ আমরা যুক্ত করে দিই। সম্পূর্ণ আমরাই করি — আপনি কিছুই ছোঁবেন না।" },
  },
  {
    no: "02",
    en: { title: "We train your closer", body: "Your agent learns your prices, tone and policies, then we test it against real buyer questions until it's flawless." },
    bn: { title: "আপনার ক্লোজার ট্রেইন করি", body: "এজেন্ট আপনার দাম, টোন ও পলিসি শেখে, তারপর নিখুঁত না হওয়া পর্যন্ত আমরা আসল ক্রেতার প্রশ্নে পরীক্ষা করি।" },
  },
  {
    no: "03",
    en: { title: "It sells while you sleep", body: "Go live in days. Watch confirmed cash-on-delivery orders land in your inbox at 3 AM — with no human awake." },
    bn: { title: "ঘুমানোর সময় বিক্রি করে", body: "কয়েক দিনে লাইভ। রাত ৩টায় কনফার্মড ক্যাশ-অন-ডেলিভারি অর্ডার ইনবক্সে আসতে দেখুন — কেউ জেগে না থেকেও।" },
  },
] as const;

/* ---------------- pricing (BDT) — Starter / Pro / Enterprise ---------------- */
export const PRICING = [
  {
    id: "starter",
    monthly: "৳3,500",
    highlight: false,
    en: {
      name: "Starter",
      tagline: "Replaces a team up to 03 moderators.",
      includes: "",
      features: [
        "Order management",
        "All-in-one message inbox",
        "Product upload & catalog",
        "Sales tracking",
        "24/7 fluent Bangla AI replies",
        "Facebook Page & Messenger automation",
        "Email support",
      ],
      cta: "Chat to sales",
    },
    bn: {
      name: "স্টার্টার",
      tagline: "৩ জন পর্যন্ত মডারেটরের কাজ করে।",
      includes: "",
      features: [
        "অর্ডার ম্যানেজমেন্ট",
        "অল-ইন-ওয়ান মেসেজ ইনবক্স",
        "প্রোডাক্ট আপলোড ও ক্যাটালগ",
        "সেলস ট্র্যাকিং",
        "২৪/৭ সাবলীল বাংলা AI রিপ্লাই",
        "ফেসবুক পেজ ও মেসেঞ্জার অটোমেশন",
        "ইমেইল সাপোর্ট",
      ],
      cta: "সেলসের সাথে কথা বলুন",
    },
  },
  {
    id: "pro",
    monthly: "৳6,000",
    highlight: true,
    en: {
      name: "Pro",
      tagline: "Replaces a team up to 07 moderators.",
      includes: "Everything in Starter, plus —",
      features: [
        "Advanced human-like AI conversations",
        "Smart automated follow-ups",
        "Instagram & WhatsApp channels",
        "Voice note & image understanding",
        "Comment-to-DM auto-reply",
        "Abandoned-cart recovery",
        "Priority support",
      ],
      cta: "Chat to sales",
    },
    bn: {
      name: "প্রো",
      tagline: "৭ জন পর্যন্ত মডারেটরের কাজ করে।",
      includes: "স্টার্টারের সব, সাথে —",
      features: [
        "অ্যাডভান্সড মানুষের মতো AI কথোপকথন",
        "স্মার্ট অটোমেটেড ফলো-আপ",
        "ইনস্টাগ্রাম ও হোয়াটসঅ্যাপ চ্যানেল",
        "ভয়েস নোট ও ছবি বোঝে",
        "কমেন্ট-টু-DM অটো-রিপ্লাই",
        "অ্যাবান্ডনড-কার্ট রিকভারি",
        "প্রায়োরিটি সাপোর্ট",
      ],
      cta: "সেলসের সাথে কথা বলুন",
    },
  },
  {
    id: "enterprise",
    monthly: "৳12,000",
    highlight: false,
    en: {
      name: "Enterprise",
      tagline: "Replaces a team up to 15 moderators.",
      includes: "Everything in Pro, plus —",
      features: [
        "Advanced RAG system integration",
        "Human takeover option",
        "Weekly performance reports",
        "Custom-trained AI persona & tone",
        "Courier API & live inventory sync",
        "Full webhook & REST API access",
        "Dedicated account manager",
        "24/7 priority SLA support",
      ],
      cta: "Chat to sales",
    },
    bn: {
      name: "এন্টারপ্রাইজ",
      tagline: "১৫ জন পর্যন্ত মডারেটরের কাজ করে।",
      includes: "প্রো-এর সব, সাথে —",
      features: [
        "অ্যাডভান্সড RAG সিস্টেম ইন্টিগ্রেশন",
        "হিউম্যান টেকওভার অপশন",
        "সাপ্তাহিক পারফরম্যান্স রিপোর্ট",
        "কাস্টম-ট্রেইনড AI পারসোনা ও টোন",
        "কুরিয়ার API ও লাইভ ইনভেন্টরি সিঙ্ক",
        "ফুল ওয়েবহুক ও REST API অ্যাক্সেস",
        "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
        "২৪/৭ প্রায়োরিটি SLA সাপোর্ট",
      ],
      cta: "সেলসের সাথে কথা বলুন",
    },
  },
] as const;

/* ---------------- integration platforms (One Bot. All Platforms.) ---------------- */
export const PLATFORMS = [
  {
    id: "facebook",
    en: { name: "Facebook", blurb: "Pages & Messenger automation", more: "Auto-reply to comments and inbox messages on your Facebook Page — 24/7 in fluent Bangla." },
    bn: { name: "ফেসবুক", blurb: "পেজ ও মেসেঞ্জার অটোমেশন", more: "আপনার ফেসবুক পেজের কমেন্ট ও ইনবক্স মেসেজে ২৪/৭ সাবলীল বাংলায় অটো-রিপ্লাই।" },
  },
  {
    id: "instagram",
    en: { name: "Instagram", blurb: "DM & comment management", more: "Handle Instagram DMs and comment replies, turning followers into paying buyers automatically." },
    bn: { name: "ইনস্টাগ্রাম", blurb: "DM ও কমেন্ট ম্যানেজমেন্ট", more: "ইনস্টাগ্রাম DM ও কমেন্ট সামলায়, ফলোয়ারদের অটোমেটিক ক্রেতায় রূপ দেয়।" },
  },
  {
    id: "whatsapp",
    en: { name: "WhatsApp", blurb: "Business API integration", more: "Reply, share catalogs and confirm orders right over the WhatsApp Business API." },
    bn: { name: "হোয়াটসঅ্যাপ", blurb: "বিজনেস API ইন্টিগ্রেশন", more: "হোয়াটসঅ্যাপ বিজনেস API-তে রিপ্লাই, ক্যাটালগ শেয়ার ও অর্ডার কনফার্ম করে।" },
  },
  {
    id: "telegram",
    en: { name: "Telegram", blurb: "Group, Channel & Chatbot automation", more: "Automate Telegram groups, channels and one-to-one chats with your AI agent." },
    bn: { name: "টেলিগ্রাম", blurb: "গ্রুপ, চ্যানেল ও চ্যাটবট অটোমেশন", more: "টেলিগ্রাম গ্রুপ, চ্যানেল ও ওয়ান-টু-ওয়ান চ্যাট আপনার AI এজেন্ট দিয়ে অটোমেট করুন।" },
  },
  {
    id: "shopify",
    en: { name: "Shopify", blurb: "E-commerce order integration & product sync", more: "Sync products and pull live orders straight from your Shopify store." },
    bn: { name: "শপিফাই", blurb: "ই-কমার্স অর্ডার ইন্টিগ্রেশন ও প্রোডাক্ট সিঙ্ক", more: "আপনার শপিফাই স্টোর থেকে প্রোডাক্ট সিঙ্ক ও লাইভ অর্ডার টেনে আনে।" },
  },
  {
    id: "wordpress",
    en: { name: "WordPress", blurb: "Lead capture, WooCommerce & contact forms", more: "Capture leads from WooCommerce and contact forms on any WordPress site." },
    bn: { name: "ওয়ার্ডপ্রেস", blurb: "লিড ক্যাপচার, WooCommerce ও কন্টাক্ট ফর্ম", more: "যেকোনো ওয়ার্ডপ্রেস সাইটের WooCommerce ও কন্টাক্ট ফর্ম থেকে লিড সংগ্রহ করে।" },
  },
] as const;

/* ---------------- case studies (success stories) ---------------- */
export const CASE_STUDIES = [
  {
    id: "stylebd",
    en: {
      name: "StyleBD",
      tag: "E-commerce",
      desc: "A modern fashion retailer, and SmartAgentBD has streamlined their customer queries and accelerated their lead-to-purchase flow.",
      metrics: [{ v: "85%", l: "AI Automation Rate" }, { v: "32%", l: "Order Increase" }],
    },
    bn: {
      name: "StyleBD",
      tag: "ই-কমার্স",
      desc: "একটি আধুনিক ফ্যাশন রিটেইলার, এবং SmartAgentBD তাদের কাস্টমার কোয়েরি সহজ করেছে আর লিড-টু-পারচেজ ফ্লো দ্রুত করেছে।",
      metrics: [{ v: "৮৫%", l: "AI অটোমেশন রেট" }, { v: "৩২%", l: "অর্ডার বৃদ্ধি" }],
    },
  },
  {
    id: "freshbasket",
    en: {
      name: "FreshBasket",
      tag: "Grocery/Restaurant",
      desc: "A fresh food delivery service, and SmartAgentBD has made their FAQ handling effortless, keeping customer communication smooth.",
      metrics: [{ v: "86%", l: "AI Automation Rate" }, { v: "10 sec", l: "Avg. Response Time" }],
    },
    bn: {
      name: "FreshBasket",
      tag: "গ্রোসারি/রেস্টুরেন্ট",
      desc: "একটি ফ্রেশ ফুড ডেলিভারি সার্ভিস, এবং SmartAgentBD তাদের FAQ হ্যান্ডলিং অনায়াস করেছে, কাস্টমার যোগাযোগ মসৃণ রেখেছে।",
      metrics: [{ v: "৮৬%", l: "AI অটোমেশন রেট" }, { v: "১০ সে", l: "গড় রেসপন্স টাইম" }],
    },
  },
  {
    id: "glowup",
    en: {
      name: "GlowUp Cosmetics",
      tag: "Fashion & Beauty",
      desc: "A premium cosmetics brand, and SmartAgentBD helped them manage guest queries and guide visitors toward purchases seamlessly.",
      metrics: [{ v: "94%", l: "AI Automation Rate" }, { v: "50%", l: "Support Cost Reduced" }],
    },
    bn: {
      name: "GlowUp Cosmetics",
      tag: "ফ্যাশন ও বিউটি",
      desc: "একটি প্রিমিয়াম কসমেটিকস ব্র্যান্ড, এবং SmartAgentBD তাদের গেস্ট কোয়েরি সামলাতে ও ভিজিটরদের নির্বিঘ্নে কেনাকাটার দিকে নিতে সাহায্য করেছে।",
      metrics: [{ v: "৯৪%", l: "AI অটোমেশন রেট" }, { v: "৫০%", l: "সাপোর্ট খরচ হ্রাস" }],
    },
  },
] as const;

/* ---------------- stats ---------------- */
export const STATS = [
  { value: "৳3,500", en: "vs a 5-admin team", bn: "৫ জন অ্যাডমিনের বদলে" },
  { value: "<5s", en: "Average reply time", bn: "গড় রিপ্লাই টাইম" },
  { value: "24/7", en: "Never sleeps, no sick days", bn: "ঘুমায় না, ছুটি নেই" },
  { value: "0", en: "DMs missed", bn: "DM মিস" },
] as const;

/* ---------------- testimonials ---------------- */
export const TESTIMONIALS = [
  {
    id: "t1",
    avatar: "m1",
    en: { quote: "We woke up to 11 confirmed COD orders the bot closed overnight. It paid for a whole year in the first week.", name: "Tahmid Rahman", role: "Fashion F-commerce · Dhaka" },
    bn: { quote: "ঘুম থেকে উঠে দেখি বট রাতারাতি ১১টা কনফার্মড COD অর্ডার ক্লোজ করেছে। প্রথম সপ্তাহেই পুরো বছরের খরচ উঠে গেছে।", name: "তাহমিদ রহমান", role: "ফ্যাশন এফ-কমার্স · ঢাকা" },
  },
  {
    id: "t2",
    avatar: "f1",
    en: { quote: "Customers swear they're chatting with a real person. It never quotes a wrong price, and my DMs finally feel under control.", name: "Nadia Hossain", role: "D2C Beauty · Chattogram" },
    bn: { quote: "কাস্টমার বিশ্বাসই করে যে আসল মানুষের সাথে কথা বলছে। কখনো ভুল দাম দেয় না, আর আমার DM অবশেষে নিয়ন্ত্রণে।", name: "নাদিয়া হোসেন", role: "D2C বিউটি · চট্টগ্রাম" },
  },
  {
    id: "t3",
    avatar: "m2",
    en: { quote: "I was burning ৳24k a month on two admins. One AI does more, faster, for ৳1,999. I'm never going back.", name: "Rifat Karim", role: "Lifestyle Brand · Dhaka" },
    bn: { quote: "দুইজন অ্যাডমিনে মাসে ৳২৪হাজার পুড়ত। এখন একটা AI বেশি কাজ করে, দ্রুত, ৳১,৯৯৯-এ। আর ফিরে যাব না।", name: "রিফাত করিম", role: "লাইফস্টাইল ব্র্যান্ড · ঢাকা" },
  },
] as const;

/* ---------------- FAQ ---------------- */
export const FAQS = [
  {
    en: { q: "Does it really understand pure Bangla?", a: "Yes. It speaks natural, warm Dhaka Bangla — আপু/ভাইয়া and all — not stiff translation. Most customers never realise they aren't talking to a person." },
    bn: { q: "এটা কি সত্যিই খাঁটি বাংলা বোঝে?", a: "জ্বি। স্বাভাবিক, আন্তরিক ঢাকাই বাংলায় কথা বলে — আপু/ভাইয়া সহ — কাঠখোট্টা অনুবাদ নয়। বেশিরভাগ কাস্টমার বুঝতেই পারে না এটা মানুষ নয়।" },
  },
  {
    en: { q: "Can I connect my WhatsApp and Instagram too?", a: "Absolutely. From the Intermediate plan up, your AI works across Facebook, Messenger, Instagram and WhatsApp — all from one place." },
    bn: { q: "আমি কি হোয়াটসঅ্যাপ ও ইনস্টাগ্রামও যুক্ত করতে পারব?", a: "অবশ্যই। ইন্টারমিডিয়েট প্ল্যান থেকে আপনার AI ফেসবুক, মেসেঞ্জার, ইনস্টাগ্রাম ও হোয়াটসঅ্যাপ — সব এক জায়গা থেকে চালায়।" },
  },
  {
    en: { q: "Is the setup included, or extra work for me?", a: "Zero work for you. Our team handles the entire setup — your page, products and prices — and hands you a bot that's already selling. No hidden charges." },
    bn: { q: "সেটআপ কি অন্তর্ভুক্ত, নাকি আমার বাড়তি কাজ?", a: "আপনার কোনো কাজ নেই। পুরো সেটআপ আমাদের টিম করে — পেজ, প্রোডাক্ট, দাম — আর আপনাকে এমন বট দেয় যা আগে থেকেই বিক্রি করছে। কোনো লুকানো চার্জ নেই।" },
  },
  {
    en: { q: "How much ROI can I actually expect?", a: "Most pages recover the monthly fee from just a handful of saved night-time orders. Replace a 5-admin team with a ৳3,500 AI — the math speaks for itself." },
    bn: { q: "আমি আসলে কত ROI পাব?", a: "বেশিরভাগ পেজ শুধু কয়েকটা রাতের অর্ডার বাঁচিয়েই মাসিক ফি তুলে ফেলে। ৫ জন অ্যাডমিনের বদলে ৳৩,৫০০-এর AI — হিসাবটা নিজেই কথা বলে।" },
  },
  {
    en: { q: "What if the bot doesn't know an answer?", a: "It never guesses. For anything sensitive it instantly pings you on Telegram so you can step in — you stay in full control." },
    bn: { q: "বট কোনো উত্তর না জানলে?", a: "এটা কখনো অনুমান করে না। সংবেদনশীল কিছু হলে সাথে সাথে টেলিগ্রামে আপনাকে জানায় যেন আপনি ধরতে পারেন — নিয়ন্ত্রণ পুরোপুরি আপনার হাতে।" },
  },
  {
    en: { q: "How do I pay — and are there hidden charges?", a: "Simple monthly payment via bKash or Nagad. No contracts, no surprises, no hidden charges — and you can cancel anytime." },
    bn: { q: "পেমেন্ট কীভাবে — লুকানো চার্জ আছে?", a: "সহজ মাসিক পেমেন্ট বিকাশ বা নগদে। কোনো চুক্তি নেই, চমক নেই, লুকানো চার্জ নেই — আর যেকোনো সময় বাতিল করতে পারেন।" },
  },
] as const;

/* ---------------- niche chat snippets (versatility) ---------------- */
export const NICHES = [
  {
    emoji: "👗", accent: "#b14bff",
    en: { name: "Fashion & Clothing", q: "Is this three-piece available?", a: "Yes apu! ✨ ৳1,250, in stock now 🛍️" },
    bn: { name: "ফ্যাশন ও পোশাক", q: "এই থ্রি-পিসটা আছে?", a: "জ্বি আপু! ✨ ১,২৫০৳, এখন স্টকে আছে 🛍️" },
  },
  {
    emoji: "💄", accent: "#2be7ff",
    en: { name: "Beauty & Skincare", q: "Is this cream 100% original?", a: "100% original apu 💯 ৳650, COD available." },
    bn: { name: "বিউটি ও স্কিনকেয়ার", q: "ক্রিমটা কি ১০০% অরিজিনাল?", a: "১০০% অরিজিনাল আপু 💯 ৬৫০৳, COD আছে।" },
  },
  {
    emoji: "📱", accent: "#aef83e",
    en: { name: "Gadgets & Electronics", q: "Price of these earbuds?", a: "This TWS is ৳890 bhai ⚡ with warranty." },
    bn: { name: "গ্যাজেট ও ইলেকট্রনিকস", q: "ইয়ারবাডসের দাম কত?", a: "এই TWS টা ৮৯০৳ ভাইয়া ⚡ ওয়ারেন্টি সহ।" },
  },
  {
    emoji: "🍱", accent: "#b14bff",
    en: { name: "Food & Homemade", q: "Do you deliver homemade pickle?", a: "Yes! 🥭 500g ৳350, Dhaka delivery tomorrow." },
    bn: { name: "খাবার ও হোমমেড", q: "হোমমেড আচার ডেলিভারি দেন?", a: "জ্বি! 🥭 ৫০০গ্রাম ৩৫০৳, কালই ঢাকায় ডেলিভারি।" },
  },
  {
    emoji: "💍", accent: "#2be7ff",
    en: { name: "Jewelry & Accessories", q: "Is this earring in stock?", a: "Yes apu 💛 gold-plated, ৳450, ready to ship." },
    bn: { name: "গয়না ও অ্যাকসেসরিজ", q: "এই কানের দুলটা স্টকে আছে?", a: "জ্বি আপু 💛 গোল্ড প্লেটেড, ৪৫০৳, রেডি।" },
  },
  {
    emoji: "👟", accent: "#aef83e",
    en: { name: "Shoes & Footwear", q: "Does this sneaker come in size 42?", a: "Yes bhai! 👟 ৳1,450, available on COD." },
    bn: { name: "জুতা ও ফুটওয়্যার", q: "এই স্নিকারটা ৪২ সাইজে হবে?", a: "জ্বি ভাইয়া! 👟 ১,৪৫০৳, COD তে নিতে পারেন।" },
  },
] as const;

/* ---------------- feature spotlights (lazychat-style poster rows) ---------------- */
export const SPOTLIGHTS = [
  {
    id: "inbox", tone: "cyan", mockup: "inbox",
    en: { title: "All your chats in one place", desc: "Facebook, Messenger, Instagram and WhatsApp messages — pulled into one smart inbox, sorted and never missed.", poster: "All chats,", posterAccent: "one inbox." },
    bn: { title: "সব চ্যাট এক জায়গায়", desc: "ফেসবুক, মেসেঞ্জার, ইনস্টাগ্রাম ও হোয়াটসঅ্যাপের মেসেজ — সব এক স্মার্ট ইনবক্সে, গোছানো, কখনো মিস হয় না।", poster: "সব চ্যাট,", posterAccent: "এক ইনবক্সে।" },
  },
  {
    id: "lang", tone: "purple", mockup: "lang",
    en: { title: "Speaks your customer's language", desc: "Bangla, English or Banglish — it replies naturally in whatever your customer types, like a real Dhaka salesperson.", poster: "Bangla. English.", posterAccent: "Banglish." },
    bn: { title: "কাস্টমারের ভাষায় কথা বলে", desc: "বাংলা, ইংরেজি বা বাংলিশ — কাস্টমার যা-ই লিখুক, ঠিক সেই ভাষায় স্বাভাবিকভাবে উত্তর দেয়, আসল ঢাকাই সেলসম্যানের মতো।", poster: "বাংলা। ইংরেজি।", posterAccent: "বাংলিশ।" },
  },
  {
    id: "photo", tone: "lime", mockup: "photo",
    en: { title: "Send a photo, get instant answers", desc: "A customer sends a product photo or screenshot — it recognises the exact item and quotes the price on the spot.", poster: "Send a photo,", posterAccent: "get the price." },
    bn: { title: "ছবি পাঠান, সাথে সাথে উত্তর", desc: "কাস্টমার প্রোডাক্টের ছবি বা স্ক্রিনশট পাঠায় — এজেন্ট হুবহু চিনে সাথে সাথে দাম বলে দেয়।", poster: "ছবি পাঠান,", posterAccent: "দাম পান।" },
  },
  {
    id: "orders", tone: "pink", mockup: "orders",
    en: { title: "Never miss an order again", desc: "Every order is captured, the customer's name and number saved — nothing slips through, even at 3 AM.", poster: "Every order,", posterAccent: "captured." },
    bn: { title: "আর কোনো অর্ডার মিস নয়", desc: "প্রতিটি অর্ডার ক্যাপচার হয়, কাস্টমারের নাম-নম্বর সেভ হয় — রাত ৩টাতেও কিছু হারায় না।", poster: "প্রতিটি অর্ডার,", posterAccent: "ক্যাপচারড।" },
  },
] as const;

/* ---------------- section copy ---------------- */
export const T = {
  en: {
    nav: { problem: "The Problem", features: "Features", demo: "Live Demo", pricing: "Pricing", faq: "FAQ", cta: "Get the Bot" },
    hero: {
      eyebrow: "24/7 AI Sales Agent for Messenger",
      title1: "Convert DMs into Sales",
      title2: "Instantly —",
      title3: "even while you sleep.",
      sub: "SmartAgent BD replies to every customer in fluent Bangla, understands voice notes and screenshots, and closes cash-on-delivery orders in seconds. Your best salesperson — on for every customer, at every hour.",
      swapLabel: "Why pay",
      swapOld: "4–5 admins & moderators",
      swapNew: "৳3,500",
      swapMonthly: "/mo",
      swapFrame: "One tireless AI outworks your whole support team — for less than a single salary. It pays for itself in days.",
      ctaPrimary: "Get your AI agent",
      ctaSecondary: "Watch it close a sale",
      punch: ["Replies in under 5 seconds", "Never sleeps, never sick", "Closes orders on autopilot"],
    },
    pain: { eyebrow: "The silent revenue killer", title: "Every unanswered DM is money in your", titleAccent: "competitor's pocket", sub: "While you sleep, eat or step away, ready-to-buy customers are messaging — and quietly leaving the moment no one replies." },
    solution: { eyebrow: "Meet your new top seller", title: "Not a chatbot.", titleAccent: "An elite sales machine.", sub: "SmartAgent BD is a tireless, hyper-trained closer — not a robotic auto-reply. It understands pure Bangla, voice notes and screenshots, and drives every conversation toward a confirmed sale." },
    integrations: { eyebrow: "One brain, every channel", title: "One Bot.", titleAccent: "All Platforms.", sub: "Connect your social media accounts and let SmartAgentBD handle customer conversations everywhere.", learnMore: "Learn more" },
    features: { eyebrow: "What it does for you", title: "Built to", titleAccent: "sell, not just chat", sub: "Every feature exists for one reason: to turn more of your DMs into confirmed, paid orders." },
    niches: { eyebrow: "Works in your niche", title: "One AI,", titleAccent: "every kind of business", sub: "Fashion, beauty, gadgets, food and more — SmartAgent BD sells whatever you sell, in fluent Bangla." },
    spotlights: { eyebrow: "See it in action", title: "Everything customers throw at it,", titleAccent: "handled", sub: "Photos, voice notes, three languages, midnight orders — watch how SmartAgent BD turns each one into a sale." },
    showcase: {
      eyebrow: "Live demo · Payel Fashion",
      title: "From 'dam koto?' to", titleAccent: "confirmed order — in seconds",
      sub: "Watch the real agent handle a customer in natural Bangla — sending product photos, quoting the price, confirming stock, pushing cash-on-delivery, and capturing the address to close the order. Zero human help.",
      metrics: [{ v: "<5s", l: "Reply time" }, { v: "24/7", l: "Always on" }, { v: "ROI", l: "Guarantee" }],
      cta: "I want this on my page",
    },
    process: { eyebrow: "How it works", title: "Live in", titleAccent: "days, not months", sub: "Done-for-you onboarding. You don't write a single line or touch a setting." },
    pricing: { eyebrow: "Pricing", title: "Simple, transparent", titleAccent: "pricing", sub: "We believe SmartAgentBD should be accessible to all companies, no matter the size.", monthlyLabel: "/mo", popular: "POPULAR" },
    cases: { eyebrow: "Success Stories", title: "Case", titleAccent: "Studies", sub: "How growing Bangladeshi brands turned everyday conversations into real revenue with SmartAgentBD." },
    testimonials: { eyebrow: "Real sellers", title: "They stopped", titleAccent: "losing nights", verified: "Verified client" },
    faq: { eyebrow: "Questions", title: "Everything you're", titleAccent: "wondering", sub: "Straight answers — no fine print, no tech-speak." },
    contact: {
      eyebrow: "Claim your agent",
      title: "Get your AI seller", titleAccent: "live this week.",
      sub: "Tell us about your page. We'll spin up a free demo agent on your own products and show you exactly how it sells — zero commitment.",
      name: "Full name",
      email: "Email",
      phone: "Phone Number",
      whatsapp: "WhatsApp Number",
      service: "What's your biggest headache?",
      services: ["Missing late-night orders", "Too many DMs to handle", "Slow replies losing sales", "Paying admins too much"],
      budget: "Plan you're eyeing",
      budgets: ["Starter — ৳3,500/mo", "Pro — ৳6,000/mo", "Enterprise — ৳12,000/mo", "Help me decide"],
      details: "Tell us about your page & products (Optional)",
      submit: "Get my free demo agent",
      sending: "Sending…",
      success: "🎉 You're in! We'll reach out within one business day to set up your free demo agent.",
      error: "Something went wrong. Please reach us directly on WhatsApp.",
      orReach: "Prefer to chat now?",
    },
    footer: { tagline: "The 24/7 AI sales agent for Bangladeshi F-commerce pages. It answers, it sells, it never sleeps.", explore: "Explore", connect: "Talk to us", pay: "Payments via bKash & Nagad", rights: "All rights reserved.", made: "Built in Bangladesh 🇧🇩" },
  },
  bn: {
    nav: { problem: "সমস্যা", features: "ফিচার", demo: "লাইভ ডেমো", pricing: "প্রাইসিং", faq: "প্রশ্নোত্তর", cta: "বট নিন" },
    hero: {
      eyebrow: "মেসেঞ্জারের জন্য ২৪/৭ এআই সেলস এজেন্ট",
      title1: "DM থেকে সেল,",
      title2: "সাথে সাথে —",
      title3: "আপনি যখন ঘুমিয়ে।",
      sub: "SmartAgent BD প্রতিটি কাস্টমারকে সাবলীল বাংলায় উত্তর দেয়, ভয়েস নোট ও স্ক্রিনশট বোঝে, আর সেকেন্ডেই ক্যাশ-অন-ডেলিভারি অর্ডার ক্লোজ করে। আপনার সেরা সেলসপারসন — প্রতিটি কাস্টমারের জন্য, প্রতি ঘণ্টায়।",
      swapLabel: "কেন দেবেন",
      swapOld: "৪–৫ জন মডারেটরের বেতন",
      swapNew: "৳৩,৫০০",
      swapMonthly: "/মাস",
      swapFrame: "একটা ক্লান্তিহীন AI আপনার পুরো সাপোর্ট টিমের চেয়ে বেশি কাজ করে — এক জনের বেতনেরও কমে। কয়েক দিনেই খরচ উঠে আসে।",
      ctaPrimary: "আপনার এআই এজেন্ট নিন",
      ctaSecondary: "সেল ক্লোজ হতে দেখুন",
      punch: ["৫ সেকেন্ডের কমে রিপ্লাই", "ঘুমায় না, অসুস্থ হয় না", "অটোপাইলটে অর্ডার ক্লোজ"],
    },
    pain: { eyebrow: "নীরব রেভিনিউ কিলার", title: "প্রতিটি উত্তরহীন DM মানে টাকা যাচ্ছে আপনার", titleAccent: "প্রতিযোগীর পকেটে", sub: "আপনি যখন ঘুমান, খান বা একটু সরে যান, কিনতে-প্রস্তুত কাস্টমার মেসেজ দিচ্ছে — আর উত্তর না পাওয়া মাত্রই নীরবে চলে যাচ্ছে।" },
    solution: { eyebrow: "আপনার নতুন সেরা সেলার", title: "চ্যাটবট নয়।", titleAccent: "একটি এলিট সেলস মেশিন।", sub: "SmartAgent BD একটি ক্লান্তিহীন, হাইপার-ট্রেইনড ক্লোজার — রোবটিক অটো-রিপ্লাই নয়। খাঁটি বাংলা, ভয়েস নোট ও স্ক্রিনশট বোঝে, আর প্রতিটি কথোপকথনকে কনফার্মড সেলের দিকে নিয়ে যায়।" },
    integrations: { eyebrow: "এক মস্তিষ্ক, সব চ্যানেল", title: "এক বট।", titleAccent: "সব প্ল্যাটফর্ম।", sub: "আপনার সোশ্যাল মিডিয়া অ্যাকাউন্ট যুক্ত করুন, SmartAgentBD সব জায়গায় কাস্টমারের কথোপকথন সামলাবে।", learnMore: "আরও জানুন" },
    features: { eyebrow: "যা আপনার জন্য করে", title: "শুধু চ্যাট নয়,", titleAccent: "বিক্রির জন্য তৈরি", sub: "প্রতিটি ফিচারের একটাই কারণ: আপনার বেশি DM-কে কনফার্মড, পেইড অর্ডারে রূপ দেওয়া।" },
    niches: { eyebrow: "আপনার যেকোনো ব্যবসায়", title: "এক AI,", titleAccent: "সব ধরনের ব্যবসায়", sub: "ফ্যাশন, বিউটি, গ্যাজেট, খাবার — যা-ই বিক্রি করেন, SmartAgent BD সাবলীল বাংলায় বিক্রি করে।" },
    spotlights: { eyebrow: "কাজে দেখুন", title: "কাস্টমার যা-ই দিক,", titleAccent: "সব সামলায়", sub: "ছবি, ভয়েস নোট, তিন ভাষা, মাঝরাতের অর্ডার — দেখুন কীভাবে SmartAgent BD প্রতিটাকে সেলে রূপ দেয়।" },
    showcase: {
      eyebrow: "লাইভ ডেমো · Payel Fashion",
      title: "'দাম কত?' থেকে", titleAccent: "কনফার্মড অর্ডার — সেকেন্ডে",
      sub: "দেখুন আসল এজেন্ট স্বাভাবিক বাংলায় কাস্টমার সামলাচ্ছে — প্রোডাক্টের ছবি পাঠাচ্ছে, দাম বলছে, স্টক কনফার্ম করছে, ক্যাশ-অন-ডেলিভারি পুশ করছে, ঠিকানা নিয়ে অর্ডার ক্লোজ করছে। কোনো মানুষ ছাড়াই।",
      metrics: [{ v: "<৫সে", l: "রিপ্লাই টাইম" }, { v: "২৪/৭", l: "সবসময় চালু" }, { v: "ROI", l: "গ্যারান্টি" }],
      cta: "আমার পেজে এটা চাই",
    },
    process: { eyebrow: "যেভাবে কাজ করে", title: "লাইভ", titleAccent: "কয়েক দিনে, মাসে নয়", sub: "ডান-ফর-ইউ অনবোর্ডিং। আপনাকে একটা লাইনও লিখতে বা সেটিং ছুঁতে হবে না।" },
    pricing: { eyebrow: "প্রাইসিং", title: "সহজ, স্বচ্ছ", titleAccent: "প্রাইসিং", sub: "আমরা বিশ্বাস করি SmartAgentBD সব আকারের কোম্পানির জন্যই সহজলভ্য হওয়া উচিত — ছোট হোক বা বড়।", monthlyLabel: "/মাস", popular: "জনপ্রিয়" },
    cases: { eyebrow: "সাকসেস স্টোরি", title: "কেস", titleAccent: "স্টাডি", sub: "বাড়ন্ত বাংলাদেশি ব্র্যান্ডরা কীভাবে SmartAgentBD দিয়ে সাধারণ কথোপকথনকে আসল রেভিনিউতে রূপ দিয়েছে।" },
    testimonials: { eyebrow: "আসল সেলার", title: "তারা রাত", titleAccent: "হারানো বন্ধ করেছেন", verified: "ভেরিফাইড ক্লায়েন্ট" },
    faq: { eyebrow: "প্রশ্ন", title: "আপনার মনে যা", titleAccent: "প্রশ্ন আছে", sub: "সরাসরি উত্তর — কোনো শর্ত নেই, টেক-ভাষা নেই।" },
    contact: {
      eyebrow: "আপনার এজেন্ট নিন",
      title: "এই সপ্তাহেই আপনার AI সেলার", titleAccent: "লাইভ করুন।",
      sub: "আপনার পেজ সম্পর্কে বলুন। আমরা আপনার নিজের প্রোডাক্টে একটি ফ্রি ডেমো এজেন্ট চালু করে দেখাব ঠিক কীভাবে বিক্রি করে — কোনো বাধ্যবাধকতা নেই।",
      name: "পুরো নাম",
      email: "ইমেইল",
      phone: "ফোন নম্বর",
      whatsapp: "হোয়াটসঅ্যাপ নম্বর",
      service: "আপনার সবচেয়ে বড় মাথাব্যথা কী?",
      services: ["রাতের অর্ডার মিস হওয়া", "অনেক বেশি DM সামলানো", "দেরি রিপ্লাইয়ে সেল হারানো", "অ্যাডমিনে বেশি খরচ"],
      budget: "যে প্ল্যান ভাবছেন",
      budgets: ["স্টার্টার — ৳৩,৫০০/মাস", "প্রো — ৳৬,০০০/মাস", "এন্টারপ্রাইজ — ৳১২,০০০/মাস", "সিদ্ধান্তে সাহায্য করুন"],
      details: "আপনার পেজ ও প্রোডাক্ট সম্পর্কে বলুন (ঐচ্ছিক)",
      submit: "আমার ফ্রি ডেমো এজেন্ট চাই",
      sending: "পাঠানো হচ্ছে…",
      success: "🎉 হয়ে গেছে! এক কর্মদিবসের মধ্যে ফ্রি ডেমো এজেন্ট সেট করতে যোগাযোগ করব।",
      error: "কিছু একটা সমস্যা হয়েছে। সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।",
      orReach: "এখনই কথা বলবেন?",
    },
    footer: { tagline: "বাংলাদেশি এফ-কমার্স পেজের জন্য ২৪/৭ এআই সেলস এজেন্ট। উত্তর দেয়, বিক্রি করে, কখনো ঘুমায় না।", explore: "এক্সপ্লোর", connect: "কথা বলুন", pay: "বিকাশ ও নগদে পেমেন্ট", rights: "সর্বস্বত্ব সংরক্ষিত।", made: "বাংলাদেশে নির্মিত 🇧🇩" },
  },
} as const;
