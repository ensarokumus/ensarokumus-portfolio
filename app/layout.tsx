import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} relative bg-gray-50 text-zinc-950`}>
        <div className="absolute -left-36 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-green-500 to-purple-500 h-96 -z-10 overflow-x-hidden motion-safe:animate-spin-slow"></div>
        <div className="absolute -right-14 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-blue-500 to-red-500 h-72 -z-10 overflow-x-hidden motion-safe:animate-spin-slow"></div>
        {children}
      </body>
    </html>
  );
}
