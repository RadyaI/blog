import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Suspense } from "react";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Blog - Radya",
  description: "This blog is for writing articles and is part of my personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}