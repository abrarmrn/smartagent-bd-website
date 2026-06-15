// CTA destinations. Driven by public env vars (set in .env.local / Vercel),
// with safe placeholder fallbacks so the site still builds before you fill them in.

const MESSENGER = process.env.NEXT_PUBLIC_MESSENGER_HANDLE || "61590670236491";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801410700386";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+8801410700386";

const WA_MSG_EN = "Hi! I'd like a free trial of the SmartAgent BD AI sales bot for my page.";
const WA_MSG_BN = "আসসালামু আলাইকুম! আমার পেজের জন্য SmartAgent BD AI বটের ফ্রি ট্রায়াল নিতে চাই।";

export const contactLinks = (lang: "en" | "bn") => ({
  messenger: `https://m.me/${MESSENGER}`,
  whatsapp: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lang === "bn" ? WA_MSG_BN : WA_MSG_EN)}`,
  phone: `tel:${PHONE}`,
});
