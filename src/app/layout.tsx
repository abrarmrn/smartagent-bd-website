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
  title: "SmartAgent BD | AI Agents & Business Automation Solutions",
  description:
    "Empowering businesses with intelligent AI agents and automated workflows. Get 24/7 automated customer support, instant lead capture, and smart systems.",
  keywords: [
    "AI chatbot Bangladesh",
    "Messenger sales bot",
    "F-commerce automation",
    "Bangla AI sales agent",
    "cash on delivery bot",
    "SmartAgent BD",
  ],
  openGraph: {
    title: "SmartAgent BD | AI Agents & Business Automation Solutions",
    description:
      "Empowering businesses with intelligent AI agents and automated workflows. Get 24/7 automated customer support, instant lead capture, and smart systems.",
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
