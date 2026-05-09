import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Bangla } from "next/font/google";
import "./globals.css";
import AppLayout from "./layouts/AppLayout";
import NProgress from "@/components/NProgress";

// import { Router } from "next/router";
// import NProgress from "@/components/NProgress";
import "../app/styles/nprogress.css";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

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
        <link rel="preload" as="image" href="/images/hero-bg-1.png" />
        <link rel="preload" as="image" href="/images/hero-bg-2.png" />
        <link rel="preload" as="image" href="/images/hero-bg-3.png" />
        <link rel="preload" as="image" href="/images/partener-hero.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekBangla.variable} antialiased`}
        style={{ fontFamily: "var(--font-anek)" }}
      >
        <NProgress />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
