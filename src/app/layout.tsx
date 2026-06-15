import type { Metadata } from "next";
import { Inter, Hind_Siliguri, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-space", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartagentbd.online"),
  title: "SmartAgent BD — The 24/7 AI Sales Agent That Never Sleeps",
  description:
    "Replace your ৳12,000/month page admin with an AI sales agent for ৳1,999. SmartAgent BD answers every Messenger DM in fluent Bangla, understands voice notes & screenshots, and closes cash-on-delivery orders in under 5 seconds — 24/7, no sick days.",
  keywords: [
    "AI chatbot Bangladesh",
    "Messenger sales bot",
    "F-commerce automation",
    "Bangla AI sales agent",
    "cash on delivery bot",
    "SmartAgent BD",
  ],
  openGraph: {
    title: "SmartAgent BD — Your 24/7 AI Sales Agent",
    description:
      "An AI that never sleeps, never misses a DM, and closes sales in under 5 seconds — from ৳2,999/month.",
    type: "website",
    locale: "en_US",
    url: "https://smartagentbd.online",
    siteName: "SmartAgent BD",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} ${mono.variable} ${hind.variable} font-sans bg-bg text-fg antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
