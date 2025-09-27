import type { Metadata } from "next";
import { Merriweather, Reddit_Sans } from "next/font/google";
import "./globals.css";

const reddit = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NSC",
  description: "developed by asqe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${reddit.variable} ${merriweather.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
