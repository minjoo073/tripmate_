const STEPS = [
  {
    num: "01",
    title: "여행 계획 입력",
    desc: "어디로, 언제, 어떤 스타일로 여행할지 간단히 입력하세요.",
  },
  {
    num: "02",
    title: "AI 매칭 시작",
    desc: "AI가 수만 명의 프로필을 분석해 가장 잘 맞는 메이트를 골라드려요.",
  },
  {
    num: "03",
    title: "동행 확정 & 출발",
    desc: "채팅으로 일정을 맞추고, 동행을 확정하면 여행 준비 끝.",
  },
];

export function Steps() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-dark-bg py-24 text-text-on-dark sm:py-32 lg:py-40"
    >
      {/* TODO: 야경 도시 사진 — 옅게 (opacity 0.18) overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(107,140,173,0.25),transparent_60%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mute-gold">
            사용 방법
          </span>
          <h2 className="mt-5 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight">
            단 3단계로,
            <br />
            완벽한 여행 메이트.
          </h2>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-24 lg:gap-12">
          {STEPS.map((s) => (
            <li key={s.num} className="relative flex flex-col gap-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-pill border border-mute-gold/40 bg-white/5 font-editorial text-xl font-light text-mute-gold">
                {s.num}
              </span>
              <h3 className="text-[20px] font-semibold leading-snug">
                {s.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-white/65">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
