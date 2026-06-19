type Feature = {
  num: string;
  title: string;
  desc: string;
  accent: "primary" | "accent" | "olive" | "mute-gold";
};

const FEATURES: Feature[] = [
  {
    num: "01",
    title: "AI 스마트 매칭",
    desc: "여행지·날짜·스타일을 분석해 23,000명 중 나와 딱 맞는 메이트를 추천해 드려요.",
    accent: "primary",
  },
  {
    num: "02",
    title: "안전 인증 시스템",
    desc: "SNS 인증 + 본인 확인으로 신뢰할 수 있는 메이트만 매칭돼요. 안심하고 사용하세요.",
    accent: "accent",
  },
  {
    num: "03",
    title: "실시간 채팅",
    desc: "매칭 후 바로 일정을 공유하고 채팅으로 세부 계획을 맞춰가세요.",
    accent: "olive",
  },
  {
    num: "04",
    title: "여행 커뮤니티",
    desc: "여행 후기, 꿀팁, 동행 모집까지. 같은 목적지를 꿈꾸는 여행자들을 만나보세요.",
    accent: "mute-gold",
  },
];

const ACCENT_CLASS: Record<Feature["accent"], string> = {
  primary: "text-primary",
  accent: "text-accent",
  olive: "text-olive",
  "mute-gold": "text-mute-gold",
};

export function Features() {
  return (
    <section
      id="features"
      className="bg-bg py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              왜 TripMate인가요
            </span>
            <h2 className="mt-5 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-text-primary">
              여행의 모든 걱정,
              <br />
              TripMate가 해결해드려요.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.8] text-text-secondary lg:col-span-6 lg:col-start-7 lg:self-end">
            낯선 사람과의 동행이 걱정되셨나요? TripMate는 안전한 인증과
            AI 매칭으로, 처음 만나는 사람도 가까운 친구처럼 함께 떠날 수 있게
            도와드립니다.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-7">
          {FEATURES.map((f) => (
            <article
              key={f.num}
              className="group flex flex-col gap-5 rounded-lg border border-card-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className={`font-editorial text-4xl font-light leading-none ${ACCENT_CLASS[f.accent]}`}
              >
                {f.num}
              </span>
              <h3 className="text-[19px] font-semibold leading-tight text-text-primary">
                {f.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
