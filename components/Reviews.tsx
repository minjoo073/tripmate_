import Image from "next/image";

const REVIEWS = [
  {
    name: "김지은",
    meta: "26세 · 서울",
    trip: "오사카 5박 6일",
    rate: 5,
    avatar: "/profile-icons/icon_1.png",
    text: "혼자 가려다 TripMate에서 만난 분과 함께 갔는데, 역대 최고의 여행이었어요. AI가 취향까지 맞춰줄 줄은 몰랐어요.",
  },
  {
    name: "박민준",
    meta: "29세 · 부산",
    trip: "도쿄 4박 5일",
    rate: 5,
    avatar: "/profile-icons/icon_2.png",
    text: "처음엔 반신반의했는데 매칭률 93%라더니 진짜 저랑 여행 스타일이 똑같더라고요. 친구처럼 편하게 다녔어요.",
  },
  {
    name: "이수아",
    meta: "24세 · 대구",
    trip: "방콕 5박 7일",
    rate: 5,
    avatar: "/profile-icons/icon_3.png",
    text: "인증 시스템이 있어서 믿고 사용했어요. 혼자 여행이 두렵던 제가 이제 매달 떠나고 있어요.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span
      aria-label={`별 ${count}점`}
      className="text-[14px] tracking-[0.2em] text-mute-gold"
    >
      {"★".repeat(count)}
      <span className="opacity-30">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-bg-deep py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            실제 사용자 후기
          </span>
          <h2 className="mt-5 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-text-primary">
            TripMate로 만난 여행,
            <br />그 후기들.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-24 lg:gap-7">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col gap-6 rounded-lg bg-card p-8 shadow-sm"
            >
              <Stars count={r.rate} />
              <blockquote className="flex-1 font-editorial text-[20px] font-light leading-[1.55] text-text-primary">
                “{r.text}”
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-card-border pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-pill bg-primary-light shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-card-border">
                  <Image
                    src={r.avatar}
                    alt={`${r.name} 프로필`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold text-text-primary">
                    {r.name}{" "}
                    <span className="font-normal text-text-muted">
                      · {r.meta}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[13px] text-text-secondary">
                    {r.trip}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
