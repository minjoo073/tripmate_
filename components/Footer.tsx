import Image from "next/image";

const COLUMNS = [
  {
    title: "서비스",
    links: [
      { label: "서비스 소개", href: "#features" },
      { label: "사용 방법", href: "#how" },
      { label: "사용자 후기", href: "#reviews" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "공지사항", href: "#" },
      { label: "채용", href: "#" },
      { label: "프레스킷", href: "#" },
    ],
  },
  {
    title: "고객지원",
    links: [
      { label: "고객센터", href: "#" },
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-text-primary text-text-on-dark">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-16 sm:px-10">
        <div className="mb-[52px] grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-[18px] flex items-center gap-[10px]">
              <Image
                src="/brand/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-[6px]"
              />
              <span className="text-[19px] font-light tracking-[-0.02em]">
                TripMate
              </span>
            </div>
            <p className="m-0 text-[14px] leading-[1.8] text-white/50">
              혼자가 아닌, 함께하는 여행을
              <br />
              만들어드립니다. AI가 찾아주는
              <br />
              나만의 여행 메이트.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-[18px] text-[10px] font-bold uppercase tracking-[0.22em] text-mute-gold">
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 TripMate Inc. All rights reserved.</span>
          <span>서울특별시 강남구 테헤란로 427 · contact@tripmate.kr</span>
        </div>
      </div>
    </footer>
  );
}
