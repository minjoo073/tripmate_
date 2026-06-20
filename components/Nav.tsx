import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "#features", label: "서비스" },
  { href: "#how", label: "사용법" },
  { href: "#reviews", label: "후기" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/88 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-primary"
          aria-label="TripMate 홈"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-[8px]"
          />
          <span className="text-[21px] font-light tracking-[-0.025em]">
            TripMate
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-pill bg-primary px-6 py-[11px] text-[14px] font-semibold text-text-on-dark shadow-primary transition hover:brightness-[1.08] hover:-translate-y-px"
        >
          앱 다운로드
        </a>
      </div>
    </header>
  );
}
