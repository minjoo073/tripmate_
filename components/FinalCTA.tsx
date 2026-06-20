import Image from "next/image";

export function FinalCTA() {
  return (
    <section id="reviews" className="bg-card pt-[88px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <div className="flex flex-col items-stretch gap-10 md:flex-row md:gap-16 md:min-h-[420px]">
          {/* Left: image with bottom-gradient overlay */}
          <div className="relative h-[300px] overflow-hidden rounded-[22px] md:h-auto md:flex-[0_0_380px]">
            <Image
              src="/dest/istanbul.jpg"
              alt="이스탄불"
              fill
              sizes="(min-width: 768px) 380px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,34,42,0.78)_0%,rgba(30,34,42,0.1)_55%,transparent_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 px-[26px] pb-6">
              <div className="text-[26px] font-black tracking-[-0.02em] text-mute-gold">
                무료 가입
              </div>
              <div className="mt-[3px] text-[12px] text-white/65">
                지금 시작하면 프리미엄 1개월 무료
              </div>
            </div>
          </div>

          {/* Right: display text */}
          <div className="flex flex-1 flex-col justify-center gap-7">
            <h2 className="m-0 text-[40px] font-black uppercase leading-[1.02] tracking-[-0.04em] text-text-primary sm:text-[54px]">
              나만의
              <br />
              여행 메이트와
              <br />
              <span className="text-primary">함께</span>
              <br />
              떠나세요
            </h2>
            <p className="m-0 max-w-[340px] text-[15px] leading-[1.75] text-text-secondary">
              여행지·날짜·스타일만 입력하면
              <br />
              AI가 23,000명 중 꼭 맞는 메이트를 찾아드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div id="download" className="mt-[52px] bg-primary-light py-[26px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:px-10 md:flex-row">
          <div className="flex items-baseline gap-4">
            <span className="text-[22px] font-black tracking-[-0.02em] text-mute-gold">
              무료 가입
            </span>
            <span className="text-[14px] text-text-secondary">
              회원가입 무료 · 카드 등록 불필요
            </span>
          </div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-pill bg-primary px-[30px] py-[15px] text-[15px] font-bold tracking-[-0.01em] text-text-on-dark shadow-primary transition hover:brightness-[1.08] hover:-translate-y-px"
          >
            지금 앱 다운로드 →
          </a>
        </div>
      </div>
    </section>
  );
}
