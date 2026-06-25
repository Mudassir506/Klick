import Image from "next/image";

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

function AppleStoreBadge() {
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-3.5 transition hover:border-green/50 hover:shadow-[0_0_16px_rgba(169,255,160,0.15)] sm:w-auto sm:justify-start"
    >
      <svg className="h-7 w-7 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-widest text-white/60">Download on the</div>
        <div className="text-[15px] font-semibold leading-tight text-white">App Store</div>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      aria-label="Get it on Google Play"
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-3.5 transition hover:border-green/50 hover:shadow-[0_0_16px_rgba(169,255,160,0.15)] sm:w-auto sm:justify-start"
    >
      <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 23.76c.37.2.8.22 1.2.02l12.4-7.17-2.55-2.55-11.05 9.7z" fill="#EA4335" />
        <path d="M20.82 10.37 17.6 8.52l-2.87 2.87 2.87 2.87 3.23-1.86a1.36 1.36 0 0 0 0-2.03z" fill="#FBBC04" />
        <path d="M3.18.24A1.36 1.36 0 0 0 2.5 1.4v21.2c0 .49.26.92.68 1.16l11.55-11.76L3.18.24z" fill="#4285F4" />
        <path d="M4.38.26 16.78 7.43l-2.55 2.55L3.18.24c.37-.2.82-.18 1.2.02z" fill="#34A853" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-widest text-white/60">Get it on</div>
        <div className="text-[15px] font-semibold leading-tight text-white">Google Play</div>
      </div>
    </a>
  );
}

export { AppleStoreBadge, GooglePlayBadge };

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -left-40 top-24 h-[480px] w-[480px] glow-green opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[560px] w-[560px] glow-green opacity-60" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.25rem)] uppercase leading-[1.04]">
            <span className="whitespace-nowrap">
              <span className="text-green">Klick</span>.
            </span>
            <br />
            <span className="whitespace-nowrap">
              <span className="text-green">Know</span>.
            </span>
            <br />
            <span className="whitespace-nowrap">
              <span className="text-green">Win</span>.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted lg:mx-0">
            Spot any player on TV,{" "}
            <span className="font-semibold text-white">klick a pic</span> and
            unlock instant stats, history and epic insights.
          </p>

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

          {/* Download badges */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
            <AppleStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-2 aspect-square w-full max-w-[400px] lg:ml-auto lg:mt-0 lg:max-w-[620px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[46%] bg-green/15 blur-3xl" />

          <Spark className="animate-float-slow absolute left-[1%] top-[1%] z-30 h-8 w-8" />
          <Spark className="animate-float absolute left-[12%] top-[8%] z-30 h-4 w-4" />

          <div className="animate-float-slow absolute left-[30%] top-[54%] z-10 w-[150%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/app/phone-splash.png"
              alt="Cheese Klick app launching"
              width={3000}
              height={3000}
              sizes="(max-width: 1024px) 60vw, 31vw"
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="animate-float absolute left-[63%] top-[55%] z-20 w-[146%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/app/phone-home.png"
              alt="Cheese Klick home screen"
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
