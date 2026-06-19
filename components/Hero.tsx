import Image from "next/image";
import { getDestinationImage } from "@/lib/destinationImages";

export function Hero() {
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden bg-dark-bg text-text-on-dark"
    >
      {/* full-bleed 도시 사진 — 오사카 (파리는 에펠탑 중앙 잘림 위험) */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src={getDestinationImage("오사카", 1920)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* scrim — 텍스트 legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-dark-bg/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-bg/30 via-dark-bg/40 to-dark-bg"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-10 px-6 pb-32 pt-24 sm:px-8 sm:pt-32 lg:pt-40 lg:pb-44">
        {/* 로고 마크 — hero 코너 (헤더 마크처럼) */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/logo.png"
            alt="TripMate"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-md"
          />
          <span className="font-editorial text-lg font-light tracking-tight text-white/85">
            TripMate
          </span>
        </div>

        <span className="inline-flex items-center rounded-pill border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
          AI 여행 메이트 매칭
        </span>

        <h1 className="font-editorial text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.015em]">
          혼자 떠나기 두렵다면,
          <br />
          <span className="text-accent">함께</span> 떠나세요.
        </h1>

        <p className="max-w-xl text-[17px] leading-[1.75] text-white/80 sm:text-[18px]">
          여행지·날짜·스타일만 입력하면, AI가{" "}
          <strong className="font-semibold text-white">23,000명</strong> 중 나와
          가장 잘 맞는 메이트를 찾아드려요.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-pill bg-mute-gold px-7 py-3.5 text-[15px] font-semibold tracking-tight text-primary shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition hover:brightness-105 active:brightness-95"
          >
            지금 무료로 시작하기
          </a>
          <a
            href="#reviews"
            className="inline-flex items-center justify-center rounded-pill border border-white/35 px-7 py-3.5 text-[15px] font-medium tracking-tight text-white transition hover:bg-white/10 active:bg-white/15"
          >
            메이트 둘러보기
          </a>
        </div>

        <p className="text-[13px] tracking-wide text-white/55">
          회원가입 무료 · 카드 등록 불필요
        </p>
      </div>
    </section>
  );
}
