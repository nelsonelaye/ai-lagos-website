import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Bangla } from "next/font/google";
import "./globals.css";
import AppLayout from "./layouts/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Lagos",
  description:
    "Learning, experimenting, and talking about AI — responsibly and creatively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekBangla.variable} antialiased`}
        style={{ fontFamily: "var(--font-anek)" }}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
