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
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-md"
              />
              <span className="font-editorial text-3xl font-light tracking-tight">
                TripMate
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.75] text-white/60">
              혼자가 아닌, 함께하는 여행을 만들어드립니다.
              <br />
              AI가 찾아주는 나만의 여행 메이트.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-mute-gold">
                  {col.title}
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[14px] text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 TripMate Inc. All rights reserved.</div>
          <div>서울특별시 강남구 테헤란로 427 · contact@tripmate.kr</div>
        </div>
      </div>
    </footer>
  );
}
