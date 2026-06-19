import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TripMate — 혼자가 두렵다면, 함께 떠나세요",
  description:
    "AI가 23,000명 중 나와 딱 맞는 여행 메이트를 찾아줍니다. 안전 인증, 실시간 채팅, 41개국 커버.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Features />
        <Steps />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
