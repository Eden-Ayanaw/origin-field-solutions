import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Origin Field Solutions | Research & Field Operations in Ethiopia",

  description:
    "Origin Field Solutions provides professional research assistance, field operations, data collection, logistics coordination, translation, and project management services across Ethiopia.",

  keywords: [
    "Research Ethiopia",
    "Field Operations Ethiopia",
    "Research Assistance",
    "Data Collection",
    "Enumerator Recruitment",
    "Survey Implementation",
    "Focus Group Discussion",
    "NGO Research",
    "Research Logistics",
    "Origin Field Solutions"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
