import Image from "next/image";

function PinIcon() {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function SearchPlusIcon() {
  return (
    <svg
      aria-hidden
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function Steps() {
  return (
    <section id="how" className="bg-[#f0f5fb] pb-24 pt-[88px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        {/* Header */}
        <div className="mx-auto mb-[60px] max-w-[460px] text-center">
          <h2 className="m-0 mb-[14px] text-[34px] font-extrabold tracking-[-0.02em] text-text-primary">
            단 3단계로 완벽한 여행 메이트!
          </h2>
          <p className="m-0 text-[15px] leading-[1.7] text-text-secondary">
            여행지·날짜·스타일만 입력하면 AI가 나와 꼭 맞는 메이트를 찾아드려요.
          </p>
        </div>

        {/* 3 columns */}
        <div className="flex flex-col items-stretch gap-7 md:flex-row md:items-center">
          {/* Step 1 — plain */}
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary-light text-primary">
              <PinIcon />
            </div>
            <div>
              <h3 className="m-0 mb-[10px] text-[19px] font-bold leading-[1.3] text-text-primary">
                여행 계획
                <br />
                입력
              </h3>
              <p className="m-0 text-[14px] leading-[1.7] text-text-secondary">
                어디로, 언제, 어떤 스타일로 여행할지 간단히 입력하세요.
              </p>
            </div>
          </div>

          {/* Step 2 — highlighted card */}
          <div className="relative flex min-h-[300px] flex-[1.35] flex-col justify-end overflow-hidden rounded-[22px] bg-primary px-7 py-8 shadow-[0_16px_40px_rgba(59,81,120,0.38)]">
            <div aria-hidden className="absolute inset-0">
              <Image
                src="/dest/paris.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 540px, 100vw"
                className="object-cover opacity-[0.22]"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-[14px] text-text-on-dark">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-white/18 backdrop-blur-sm">
                <SearchPlusIcon />
              </div>
              <h3 className="m-0 text-[22px] font-bold leading-[1.25]">
                AI 매칭
                <br />
                시작
              </h3>
              <p className="m-0 text-[13px] leading-[1.65] text-white/72">
                AI가 수만 명의 프로필을 분석해 가장 잘 맞는 메이트를 골라드려요.
              </p>
              <a
                href="#download"
                className="mt-1 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/85 transition hover:text-white"
              >
                더 알아보기 →
              </a>
            </div>
          </div>

          {/* Step 3 — plain */}
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary-light text-primary">
              <PhoneIcon />
            </div>
            <div>
              <h3 className="m-0 mb-[10px] text-[19px] font-bold leading-[1.3] text-text-primary">
                동행 확정
                <br />
                &amp; 출발
              </h3>
              <p className="m-0 text-[14px] leading-[1.7] text-text-secondary">
                채팅으로 일정을 맞추고, 동행을 확정하면 여행 준비 끝.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
