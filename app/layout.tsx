import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "浅纸提词器",
  description: "一款简单免费且好用的提词器小程序",
  keywords: [
    "teleprompter",
    "提词器",
    "小程序",
    "minprogram",
    "免费",
    "pc端",
    "手机端",
    "平板端",
  ],
  verification: {
    other: { "baidu-site-verification": "codeva-7EEJwyTQa8" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
