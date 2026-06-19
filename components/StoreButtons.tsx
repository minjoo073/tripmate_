// 스토어 버튼 — placeholder href, CEO가 실제 링크로 교체.
// 톤: 어두운 Hero 위에 살짝 떠 있는 outlined 버튼.
// Primary(App Store)는 dusty rose, Secondary(Play)는 outlined white.

function AppleGlyph() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="currentColor"
    >
      <path d="M16.365 12.95c-.02-2.06 1.687-3.054 1.764-3.103-.963-1.406-2.46-1.598-2.992-1.62-1.273-.13-2.486.75-3.135.75-.65 0-1.65-.732-2.713-.71-1.394.02-2.681.808-3.398 2.054-1.45 2.51-.371 6.226 1.038 8.262.69.998 1.508 2.118 2.585 2.078 1.04-.042 1.432-.673 2.69-.673 1.255 0 1.61.673 2.71.65 1.12-.02 1.83-1.01 2.515-2.013.79-1.156 1.116-2.28 1.137-2.337-.025-.011-2.18-.836-2.201-3.318zM14.343 6.65c.574-.696.96-1.665.853-2.628-.825.033-1.823.55-2.416 1.245-.532.616-.997 1.602-.871 2.55.92.07 1.862-.467 2.434-1.168z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="currentColor"
    >
      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.89 10.892 2.404 2.405-10.083 5.715 7.679-8.12zm3.832-3.55-1.428 1.428-2.404-2.404 7.68-8.12c.488.279.788.798.788 1.354v8.483c0 .556-.3 1.075-.788 1.354L20.83 9.156h-2.5z" />
    </svg>
  );
}

export function AppStoreButton() {
  return (
    <a
      href="#app-store"
      className="group inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 text-text-on-dark shadow-primary transition-transform hover:-translate-y-0.5"
    >
      <AppleGlyph />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.18em] opacity-80">
          DOWNLOAD ON THE
        </span>
        <span className="mt-1 text-[17px] font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function PlayStoreButton() {
  return (
    <a
      href="#play-store"
      className="group inline-flex items-center gap-3 rounded-md border border-white/40 bg-white/5 px-6 py-4 text-text-on-dark backdrop-blur transition-colors hover:bg-white/10"
    >
      <PlayGlyph />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.18em] opacity-80">
          GET IT ON
        </span>
        <span className="mt-1 text-[17px] font-semibold">Google Play</span>
      </span>
    </a>
  );
}

// Final CTA용 - 라이트 배경 위에서 쓰는 어두운 버전
export function AppStoreButtonOnLight() {
  return (
    <a
      href="#app-store"
      className="inline-flex items-center gap-3 rounded-md bg-text-primary px-6 py-4 text-text-on-dark shadow-md transition-transform hover:-translate-y-0.5"
    >
      <AppleGlyph />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.18em] opacity-80">
          DOWNLOAD ON THE
        </span>
        <span className="mt-1 text-[17px] font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function PlayStoreButtonOnLight() {
  return (
    <a
      href="#play-store"
      className="inline-flex items-center gap-3 rounded-md border border-text-primary/80 bg-card px-6 py-4 text-text-primary transition-colors hover:bg-bg-deep"
    >
      <PlayGlyph />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.18em] opacity-70">
          GET IT ON
        </span>
        <span className="mt-1 text-[17px] font-semibold">Google Play</span>
      </span>
    </a>
  );
}
