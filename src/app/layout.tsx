import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Intellia Hub — Software Agency",
  description:
    "We build digital products that scale. Web apps, mobile, APIs & technical consulting.",
  openGraph: {
    title: "Intellia Hub",
    description:
      "We build digital products that scale. Web apps, mobile, APIs & technical consulting.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
