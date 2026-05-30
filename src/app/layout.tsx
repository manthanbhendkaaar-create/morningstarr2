import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MorningstarrAI | AI Automation Agency — Lead Generation & Appointment Booking",
  description: SITE.description,
  keywords: [
    "AI automation agency",
    "AI lead generation",
    "AI appointment booking",
    "CRM automation",
    "WhatsApp automation",
    "business automation",
    "done-for-you automation",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "MorningstarrAI | Stop Losing Leads to Slow Follow-Up",
    description:
      "Done-for-you AI automation for lead generation, appointment booking, CRM sync, and WhatsApp follow-up. Book a free audit.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "MorningstarrAI | AI Automation Agency",
    description:
      "Stop losing leads to slow follow-up. Automation systems that book appointments and recover revenue 24/7.",
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
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
