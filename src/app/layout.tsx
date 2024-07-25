import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C-BooK",
  description: "Buku Pintar Ok Carolus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col container mx-auto items-start justify-center`}>
        <Navbar />
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
