import Image from "next/image";
import { getDestinationImage } from "@/lib/destinationImages";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-dark-bg text-text-on-dark">
      {/* full-bleed 도시 사진 — 이스탄불 (해질녘 골든혼) */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src={getDestinationImage("이스탄불", 1920)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* scrim — 중앙 정렬 텍스트라 살짝 더 진하게 */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-dark-bg/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-bg/40 via-dark-bg/50 to-dark-bg/70"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 py-28 text-center sm:px-8 sm:py-32 lg:py-40">
        <h2 className="font-editorial text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.08] tracking-tight">
          지금 바로, 나만의
          <br />
          <span className="text-accent">여행 메이트</span>를 찾아보세요.
        </h2>

        <p className="max-w-xl text-[17px] leading-[1.75] text-white/80">
          가입하는 순간, AI가 당신에게 맞는 여행 메이트를 찾기 시작해요.
        </p>

        <div className="mt-2 flex justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-pill bg-mute-gold px-8 py-4 text-[15px] font-semibold tracking-tight text-primary shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition hover:brightness-105 active:brightness-95"
          >
            무료로 시작하기
          </a>
        </div>

        <p className="text-[13px] tracking-wide text-white/55">
          iOS · Android · Web 모두 지원
        </p>
      </div>
    </section>
  );
}
