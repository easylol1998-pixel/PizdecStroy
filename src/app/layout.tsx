import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "PizDa Строй — строительство домов и ремонт квартир в СПб и ЛО",
    template: "%s | PizDa Строй",
  },
  description:
    "Строительство загородных домов под ключ и ремонт квартир в Санкт-Петербурге и Ленинградской области. Фиксированная смета, гарантия, свои бригады.",
  keywords: [
    "строительство домов СПб",
    "загородный дом под ключ",
    "ремонт квартир Санкт-Петербург",
    "строительная компания ЛО",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "PizDa Строй",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F7F4EF] text-[#1A1A1A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
