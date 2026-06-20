import Image from "next/image";

function PinIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
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

function ChatCheckIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function Steps() {
  return (
    <section id="how" data-reveal className="bg-[#f0f5fb] pb-24 pt-[88px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        {/* Header — H2 + sub only */}
        <div className="mx-auto mb-[56px] max-w-[460px] text-center">
          <h2 className="m-0 mb-[14px] text-[34px] font-extrabold tracking-[-0.02em] text-text-primary">
            단 3단계로 완벽한 여행 메이트!
          </h2>
          <p className="m-0 text-[16px] leading-[1.7] text-text-secondary">
            여행지·날짜·스타일만 입력하면 AI가 나와 꼭 맞는 메이트를 찾아드려요.
          </p>
        </div>

        {/* 3 cards */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 — Find */}
            <article
              id="01-find"
              className="flex flex-col gap-5 rounded-[18px] border border-card-border bg-card shadow-sm"
              style={{ padding: "32px 28px" }}
            >
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-accent-light text-accent">
                <PinIcon />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="m-0 text-[19px] font-bold leading-[1.3] text-text-primary">
                  여행 계획 입력
                </h3>
                <p className="m-0 text-[16px] leading-[1.6] text-text-secondary">
                  어디로, 언제, 어떤 스타일로 여행할지 간단히 입력하세요.
                </p>
              </div>
            </article>

            {/* Card 2 — Match (emphasized) */}
            <article
              id="02-match"
              className="relative flex flex-col overflow-hidden rounded-[18px] bg-primary"
              style={{
                padding: "32px 28px",
                minHeight: "300px",
                boxShadow: "0 16px 40px rgba(59, 81, 120, 0.28)",
              }}
            >
              <div aria-hidden className="absolute inset-0">
                <Image
                  src="/dest/paris.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover opacity-[0.22]"
                />
              </div>

              <div className="relative z-10">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-sm">
                  <SearchPlusIcon />
                </div>
              </div>

              <div className="relative z-10 mt-auto flex flex-col gap-[10px] pt-8 text-text-on-dark">
                <h3 className="m-0 text-[22px] font-bold leading-[1.3]">
                  AI 매칭 시작
                </h3>
                <p className="m-0 text-[14px] leading-[1.65] text-white/72">
                  AI가 수만 명의 프로필을 분석해 가장 잘 맞는 메이트를 골라드려요.
                </p>
                <a
                  href="#match"
                  className="mt-2 inline-block text-[13px] font-semibold tracking-[-0.01em] text-white/85 hover:text-white"
                >
                  더 알아보기 →
                </a>
              </div>
            </article>

            {/* Card 3 — Go */}
            <article
              id="03-go"
              className="flex flex-col gap-5 rounded-[18px] border border-card-border bg-card shadow-sm"
              style={{ padding: "32px 28px" }}
            >
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-accent-light text-accent">
                <ChatCheckIcon />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="m-0 text-[19px] font-bold leading-[1.3] text-text-primary">
                  동행 확정 & 출발
                </h3>
                <p className="m-0 text-[16px] leading-[1.6] text-text-secondary">
                  채팅으로 일정을 맞추고, 동행을 확정하면 여행 준비 끝.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
