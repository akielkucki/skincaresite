import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {brand} from "@/lib/store";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${brand} | Premium Skincare & Wellness in Bucks County, PA`,
    description:
        `${brand} is the #1 destination for high-end skincare and beauty treatments in Bucks County, Pennsylvania. We combine science-backed formulas with personalized care to help your skin glow with confidence. Visit our brick-and-mortar spa for facials, rejuvenation treatments, and luxury skincare products trusted by locals and professionals alike.`,
    keywords: [
        "skincare Bucks County",
        "facials near me",
        "premium skincare",
        "spa treatments PA",
        "beauty and wellness",
        "anti-aging skincare",
        "brick and mortar skincare",
        "skincare products Pennsylvania",
    ],
    authors: [{ name: brand }],
    openGraph: {
        title: `${brand} | Premium Skincare & Wellness`,
        description:
            `${brand} delivers professional skincare services and luxury treatments across Bucks County, PA. Experience the best in personalized beauty care.`,
        url: "https://yourdomain.com",
        siteName: brand,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/logo.png", // 👈 your logo in the public folder
                width: 1200,
                height: 630,
                alt: `${brand} Logo`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${brand} | Premium Skincare`,
        description:
            `Discover ${brand}, Bucks County’s trusted skincare destination for facials, rejuvenation, and wellness.`,
        creator: "@blumskincare",
        images: ["/logo.png"]
    },
    metadataBase: new URL("https://yourdomain.com"),
    alternates: {
        canonical: "https://yourdomain.com",
    },
    icons: {
        icon: '/favicon.ico', // Path to your favicon in the public directory
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
