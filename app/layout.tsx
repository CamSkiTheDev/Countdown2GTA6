import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Countdown to GTA 6 | @Countdown2GTA6",
  description:
    "An unofficial fan countdown to the launch of Grand Theft Auto VI. See exactly how many days until GTA 6 drops on May 26, 2026.",
  keywords: [
    "GTA 6",
    "GTA VI",
    "Grand Theft Auto 6",
    "GTA 6 release date",
    "GTA countdown",
    "GTA 6 timer",
    "Countdown to GTA 6",
    "Vice City GTA 6",
  ],
  authors: [{ name: "Countdown2GTA6 Team", url: "https://countdown2gta6.com" }],
  creator: "Countdown2GTA6 Team",
  openGraph: {
    title: "Countdown to GTA 6",
    description:
      "An unofficial fan countdown to the launch of Grand Theft Auto VI.",
    url: "https://countdown2gta6.com",
    siteName: "Countdown2GTA6",
    images: [
      {
        url: "https://countdown2gta6.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Countdown to GTA 6 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countdown to GTA 6",
    description:
      "Track the days until GTA VI hits the streets. Vice City awaits.",
    creator: "@Countdown2GTA6",
    images: ["https://countdown2gta6.com/og-image.jpg"],
  },
  metadataBase: new URL("https://countdown2gta6.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P57SQ55K" />
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
