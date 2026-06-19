const STATS = [
  { value: "23,400+", label: "여행 메이트" },
  { value: "89%", label: "매칭 만족도" },
  { value: "41개국", label: "여행지 커버" },
  { value: "1,200+", label: "동행 후기" },
];

export function StatsBar() {
  return (
    <section className="bg-primary text-text-on-dark">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-y-10 px-6 py-16 sm:px-8 md:grid-cols-4 md:py-20">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center"
          >
            <span className="font-editorial text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none tracking-tight text-text-on-dark">
              {s.value}
            </span>
            <span className="mt-3 text-[13px] tracking-[0.18em] text-white/65 uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
