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
  title: "MorningstarrAI | AI Automation for Marketing Agencies",
  description: SITE.description,
  keywords: [
    "AI automation for agencies",
    "marketing agency automation",
    "social media reply automation",
    "content repurposing automation",
    "client onboarding automation",
    "agency operations",
    "n8n agency",
    "done-for-you automation",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "MorningstarrAI | Take On More Clients Without Hiring",
    description:
      "AI systems that take the manual work off marketing agencies: comment and DM replies, lead follow-up, content repurposing and admin. Book a consultation call.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "MorningstarrAI | AI Automation for Marketing Agencies",
    description:
      "Take on more clients without hiring. Custom AI systems for marketing agencies.",
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
