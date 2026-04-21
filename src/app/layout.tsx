import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";

import "./globals.css";
import { UtmCapture } from "@/components/site/utm-capture";
import { defaultMetadata } from "@/lib/seo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${manrope.variable}`}>
        <UtmCapture />
        {children}
      </body>
    </html>
  );
}
