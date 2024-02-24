import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Noto_Serif } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const NotoSerif = Noto_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Advisor",
  description:
    "This is a Travel advisor website that provides the best guides and brings beautifull places to visit",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSerif.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
