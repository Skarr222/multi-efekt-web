import "../styles/globals.css";
import { NavigationBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import React from "react";
import SessionWrapper from "@/wrappers/SessionWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Multi-Efekt",
  description:
    "Firma sprzątająca - czyszczenia, serwis dzienny oraz kompleksowe utrzymanie higieny i czystości w biurach, kompleksach handlowych, ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SessionWrapper>
          <NavigationBar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
