import Image from "next/image";

type Dest = {
  city: string;
  country: string;
  rate: string;
  src: string;
};

const DESTS: Dest[] = [
  { city: "이스탄불", country: "터키", rate: "4.9", src: "/dest/istanbul.jpg" },
  { city: "오사카", country: "일본", rate: "4.7", src: "/dest/osaka.jpg" },
  { city: "파리", country: "프랑스", rate: "4.7", src: "/dest/paris.jpg" },
];

function PinIcon() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Features() {
  return (
    <section id="features" data-reveal className="bg-card pb-[88px] pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        {/* Header */}
        <div className="mb-11 flex items-end justify-between gap-6">
          <div>
            <h2 className="m-0 mb-2 text-[34px] font-extrabold tracking-[-0.02em] text-text-primary">
              인기 여행지
            </h2>
            <p className="m-0 text-[16px] text-text-secondary">
              나와 함께 떠날 메이트를 TripMate에서 만나보세요
            </p>
          </div>
          <a
            href="#features"
            className="hidden shrink-0 items-center gap-1 text-[14px] font-semibold text-primary transition hover:gap-2 md:inline-flex"
          >
            더 보기 →
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTS.map((d) => (
            <article
              key={d.city}
              className="group flex flex-1 flex-col overflow-hidden rounded-[18px] bg-card shadow-[0_4px_20px_rgba(28,43,58,0.09)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(28,43,58,0.14)]"
            >
              <div className="relative h-[224px] w-full overflow-hidden">
                <Image
                  src={d.src}
                  alt={d.city}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-5 py-[18px]">
                <h3 className="m-0 mb-2 text-[16px] font-bold text-text-primary">
                  {d.city}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[13px] text-text-secondary">
                    <PinIcon />
                    <span>{d.country}</span>
                  </div>
                  <span className="rounded-pill bg-primary px-[11px] py-1 text-[12px] font-bold tracking-[0.02em] text-text-on-dark">
                    ★ {d.rate}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
