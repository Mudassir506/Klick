import Image from "next/image";

/* Small line icons to match the Figma feature pills (no emoji) */
function IconKlick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2L8 5h8l1.5 2h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </svg>
  );
}
function IconKnow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4 20h16" />
      <rect x="5" y="11" width="3.2" height="6" rx="1" />
      <rect x="10.4" y="7" width="3.2" height="10" rx="1" />
      <rect x="15.8" y="13" width="3.2" height="4" rx="1" />
    </svg>
  );
}
function IconCompare() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 4v16" />
      <path d="M6 7 3 13h6zM6 7l-3 6m3-6 3 6" />
      <path d="M18 7l-3 6h6zM18 7l-3 6m3-6 3 6" />
      <path d="M7 4h10" />
    </svg>
  );
}
function IconWin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M7 4h10v4a5 5 0 0 1-10 0z" />
      <path d="M7 6H4.5A1.5 1.5 0 0 0 6 9.5M17 6h2.5A1.5 1.5 0 0 1 18 9.5" />
      <path d="M10 13.5 9.5 17h5l-.5-3.5M8 20h8M10 17v3m4-3v3" />
    </svg>
  );
}

const FEATURES = [
  { label: "KLICK", desc: "Snap any player", icon: <IconKlick /> },
  { label: "KNOW", desc: "Instant stats", icon: <IconKnow /> },
  { label: "COMPARE", desc: "Stack them up", icon: <IconCompare /> },
  { label: "WIN", desc: "Top the board", icon: <IconWin /> },
];

/* Bright green 4-point sparkle from the Figma */
function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path
        d="M20 0c1.2 11 7.8 17.6 18.8 18.8C27.8 20 21.2 26.6 20 37.6 18.8 26.6 12.2 20 1.2 18.8 12.2 17.6 18.8 11 20 0Z"
        fill="#a9ffa0"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[480px] w-[480px] glow-green opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[560px] w-[560px] glow-green opacity-60" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
        {/* Left copy */}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.25rem)] uppercase leading-[1.04]">
            <span className="whitespace-nowrap">
              <span className="text-green">Klick</span> It.
            </span>
            <br />
            <span className="whitespace-nowrap">
              <span className="text-green">Know</span> It.
            </span>
            <br />
            <span className="whitespace-nowrap">
              <span className="text-green">Win</span> It.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted lg:mx-0">
            Spot a footballer on TV, <span className="font-semibold text-white">klick a pic</span> and
            unlock instant stats, history and epic insights.
          </p>

          {/* feature pills */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-card px-3 py-4 text-center transition hover:border-green/40 lg:items-start lg:text-left"
              >
                <span className="text-green">{f.icon}</span>
                <span className="font-display text-[13px] tracking-wide text-white">
                  {f.label}
                </span>
                <span className="text-[11px] leading-tight text-muted">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right phones — the PNGs are 3000x3000 squares with the phone centred,
            so the wrappers are oversized squares that overlap (transparent margins
            spill past the section and get clipped harmlessly). */}
        <div className="relative z-10 mx-auto mt-2 aspect-square w-full max-w-[400px] lg:mt-0 lg:ml-auto lg:max-w-[620px]">
          {/* big green shape behind the phones */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[46%] bg-green/15 blur-3xl" />

          {/* decorative sparkles (top-left, as in Figma) */}
          <Spark className="animate-float-slow absolute left-[1%] top-[1%] z-30 h-8 w-8" />
          <Spark className="animate-float absolute left-[12%] top-[8%] z-30 h-4 w-4" />

          {/* back phone — splash */}
          <div className="animate-float-slow absolute left-[37%] top-[54%] z-10 w-[150%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/app/phone-splash.png"
              alt="Chesse Klick app launching"
              width={3000}
              height={3000}
              sizes="(max-width: 1024px) 60vw, 31vw"
              className="h-auto w-full"
              priority
            />
          </div>

          {/* front phone — home */}
          <div className="animate-float absolute left-[63%] top-[55%] z-20 w-[146%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/app/phone-home.png"
              alt="Chesse Klick home screen"
              width={3000}
              height={3000}
              sizes="(max-width: 1024px) 70vw, 36vw"
              className="h-auto w-full"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
