import type { Metadata } from "next";
import { RevealInit } from "@/components/RevealInit";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tripmate.kr"),
  title: {
    default: "TripMate — 혼자가 두렵다면, 함께 떠나세요",
    template: "%s · TripMate",
  },
  description:
    "AI가 23,000명 중 나와 딱 맞는 여행 메이트를 찾아줍니다. 안전 인증, 실시간 채팅, 41개국 커버.",
  openGraph: {
    title: "TripMate — 혼자가 두렵다면, 함께 떠나세요",
    description:
      "AI가 찾아주는 나만의 여행 메이트. 23,000명 중 딱 맞는 동행을, 41개국에서.",
    type: "website",
    locale: "ko_KR",
    siteName: "TripMate",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripMate — 혼자가 두렵다면, 함께 떠나세요",
    description:
      "AI가 찾아주는 나만의 여행 메이트. 23,000명 중 딱 맞는 동행을, 41개국에서.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <head>
        <style>{`
[data-reveal]{opacity:0;transform:translateY(16px);transition:opacity 700ms cubic-bezier(0.22,1,0.36,1),transform 700ms cubic-bezier(0.22,1,0.36,1)}
[data-reveal][data-revealed="true"]{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1;transform:none;transition:none}}
`}</style>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
