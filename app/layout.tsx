import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ensar Okumus | Portfolio",
  description:
    "Check out my portfolio to see my full-stack development expertise and a collection of projects I'm currently working on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-16 sm:pt-30`}
      >
        <div
          aria-hidden
          className="absolute -z-40 inset-0 bg-[radial-gradient(#69696959_1px,transparent_1px)] bg-[size:34px_34px] opacity-80 motion-safe:animate-move-bg"
        />
        <div aria-hidden className="relative overflow-x-clip">
          <div
            aria-hidden
            className="absolute -left-36 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-green-500 to-purple-500 h-96 -z-50 motion-safe:animate-spin-slow"
          />
          <div
            aria-hidden
            className="absolute -right-14 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-blue-500 to-red-500 h-72 -z-50 motion-safe:animate-spin-slow"
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
