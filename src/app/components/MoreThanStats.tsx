import Image from "next/image";

/* Green line icons to match the Figma feature list (no emoji) */
const ic =
  "h-6 w-6";
function IconLeaderboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={ic}>
      <path d="M4 20h16" />
      <rect x="5" y="11" width="3.5" height="6" rx="1" />
      <rect x="10.25" y="7" width="3.5" height="10" rx="1" />
      <rect x="15.5" y="13" width="3.5" height="4" rx="1" />
    </svg>
  );
}
function IconBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={ic}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.2 8 22l4-2.2L16 22l-1-8.8" />
    </svg>
  );
}
function IconReward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={ic}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 13h16M12 9v11" />
      <path d="M12 9S10.5 4 8.5 5 8 9 12 9m0 0s1.5-5 3.5-4 .5 4-3.5 4" />
    </svg>
  );
}
function IconChallenge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={ic}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const FEATURES = [
  { icon: <IconLeaderboard />, title: "LEADERBOARDS", desc: "Compete globally" },
  { icon: <IconBadge />, title: "BADGES", desc: "Unlock achievements" },
  { icon: <IconReward />, title: "REWARDS", desc: "Win awesome prizes" },
  { icon: <IconChallenge />, title: "CHALLENGES", desc: "New every week" },
];

const BOARD = [
  { rank: 1, name: "CheeseKing10", score: "12,540" },
  { rank: 2, name: "FootyFanatic", score: "9,870" },
  { rank: 3, name: "StatMaster", score: "8,420" },
  { rank: 4, name: "CheeseKing10", score: "12,540" },
  { rank: 5, name: "FootyFanatic", score: "9,870" },
  { rank: 6, name: "StatMaster", score: "6,420" },
];

export default function MoreThanStats() {
  return (
    <section id="leaderboard" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[520px] w-[520px] glow-green opacity-50" />

      {/* Two columns: text on the left, 3-phone mockup on the right (matches Figma) */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-5xl">
            More <span className="text-green">Than</span>
            <br />
            <span className="text-green">Stats.</span> It&apos;s A Game.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Stats apps make you search. We think you should just point and
            know. Klick any player, unlock instant stats across 6 sports, earn
            points, climb the leaderboard and become the best in the world.
          </p>

          <div className="mt-9 grid max-w-md grid-cols-2 gap-x-8 gap-y-7">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col gap-1">
                <span className="text-green">{f.icon}</span>
                <span className="mt-1 font-display text-sm tracking-wide text-green">
                  {f.title}
                </span>
                <span className="text-xs text-muted">{f.desc}</span>
              </div>
            ))}
          </div>

          <a
            href="#download"
            className="mt-10 inline-block rounded-lg bg-green px-8 py-3 font-semibold text-black transition hover:bg-green-bright"
          >
            Download
          </a>
        </div>

        {/* Right — 3-phone mockup (Player Comparison / Search Players / Stats) */}
        <div className="relative">
          <Image
            src="/app/hero-mockup.png"
            alt="Cheese Klick — player comparison, search and instant stats"
            width={958}
            height={806}
            sizes="(max-width: 1024px) 90vw, 46vw"
            className="h-auto w-full"
          />
        </div>

        {/* Right — leaderboard panel hidden for now. Change `false` to `true` (or remove the wrapper) to restore. */}
        {false && (
        <div className="relative">
          <div className="relative z-10 rounded-3xl border border-white/10 bg-card p-6">
            <h3 className="text-center font-display text-xl uppercase tracking-wide">
              Leaderboard
            </h3>
            <div className="mt-5 space-y-3">
              {BOARD.map((row) => (
                <div
                  key={row.rank}
                  className="flex items-center gap-4 rounded-xl bg-card-2 px-4 py-3"
                >
                  <span
                    className="font-display text-sm"
                    style={{ color: "#c5ff2e" }}
                  >
                    {row.rank}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.pravatar.cc/80?img=${row.rank + 10}`}
                    alt={row.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="flex-1 text-sm font-medium text-white/90">
                    {row.name}
                  </span>
                  <span className="font-display text-sm text-green">
                    {row.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* champion badge — bottom-left on the sphere (Figma) */}
          <div
            className="absolute -bottom-25 -left-12 z-20 flex h-40 w-40 items-center justify-center rounded-full text-center shadow-[0_0_40px_rgba(197,255,46,0.5)] sm:-left-24"
            style={{ background: "#c5ff2e" }}
          >
            <span className="font-display text-xs uppercase leading-tight text-black">
              Be The
              <br />
              Cheese
              <br />
              Champion!
            </span>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
