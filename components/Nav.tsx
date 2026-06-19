import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "#features", label: "서비스" },
  { href: "#how", label: "사용법" },
  { href: "#reviews", label: "후기" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/85 backdrop-blur supports-[backdrop-filter]:bg-card/70">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 sm:px-8">
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
            className="h-8 w-8 rounded-md"
          />
          <span className="font-editorial text-2xl font-light tracking-tight">
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
          className="rounded-pill bg-primary px-5 py-2.5 text-[14px] font-semibold text-text-on-dark shadow-primary transition-transform hover:-translate-y-0.5"
        >
          앱 다운로드
        </a>
      </div>
    </header>
  );
}
