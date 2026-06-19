import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripMate",
  description: "AI 여행 동행 매칭 — 마케팅 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
