import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(150deg,#eef5fd_0%,#dceaf8_45%,#e3edfb_100%)] overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-6 pb-[52px] pt-[72px] sm:px-10 md:min-h-[560px] md:flex-row md:items-center md:gap-[52px]">
        {/* Left: text */}
        <div className="flex flex-col gap-7 md:flex-[0_0_420px]">
          <span className="text-[11px] font-bold uppercase italic tracking-[0.22em] text-text-muted">
            AI 여행 메이트 매칭
          </span>
          <h1 className="m-0 text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-[58px]">
            혼자가
            <br />
            두렵다면,
            <br />
            <span className="text-primary">함께</span> 떠나세요.
          </h1>

          <div className="mt-1 flex items-center gap-[14px]">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-pill bg-primary px-[30px] py-[14px] text-[15px] font-semibold text-text-on-dark shadow-[0_10px_28px_rgba(59,81,120,0.38)] transition hover:brightness-[1.08] hover:-translate-y-px"
            >
              지금 무료로 시작하기
            </a>
            <button
              type="button"
              aria-label="다음 슬라이드"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-card-border bg-card text-[18px] font-light text-primary transition hover:bg-primary-light"
            >
              ›
            </button>
          </div>

          {/* Slide dots */}
          <div className="mt-1 flex items-center gap-[10px]">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-[7px] w-[22px] rounded-pill bg-primary opacity-25" />
            <span className="h-2 w-2 rounded-full bg-card-border" />
          </div>
        </div>

        {/* Right: image + floating card */}
        <div className="relative min-h-[320px] flex-1 md:min-h-[460px]">
          <div className="relative h-[320px] w-full overflow-hidden rounded-[28px] md:h-[460px]">
            <Image
              src="/dest/osaka.jpg"
              alt="오사카"
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>

          {/* Floating card */}
          <div className="absolute bottom-[18px] right-[16px] flex min-w-[210px] flex-col gap-3 rounded-[18px] bg-card px-5 py-4 shadow-[0_10px_32px_rgba(28,43,58,0.16)] sm:bottom-7 sm:right-6">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-text-primary">
                인기 여행지
              </span>
              <span className="text-[13px] font-semibold text-primary">→</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`relative inline-block h-[30px] w-[30px] overflow-hidden rounded-full border-2 border-card bg-primary-light ${
                      i > 1 ? "-ml-[9px]" : ""
                    }`}
                  >
                    <Image
                      src={`/profile-icons/icon_${i}.png`}
                      alt=""
                      fill
                      sizes="30px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-bold text-primary">
                  23,400+ 메이트
                </div>
                <div className="mt-[1px] text-[11px] text-text-muted">
                  함께 여행 중
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
