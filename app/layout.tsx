import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { NavigationBar } from "@/components/navbar";
import { Footer } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Multi-Efekt",
  description:
    "Firma sprzątająca - czyszczenia, serwis dzienny oraz kompleksowe utrzymanie higieny i czystości w biurach, kompleksach handlowych, ...",
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
        <div className="min-h-screen flex flex-col">
          <NavigationBar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        <script src="../node_modules/flowbite/dist/flowbite.min.js" async />
      </body>
    </html>
  );
}
