import Image from "next/image";

const SPORTS = [
  { img: "/app/sport-football.png", name: "Football" },
  { img: "/app/sport-basketball.png", name: "Basketball" },
  { img: "/app/sport-tennis.png", name: "Tennis" },
  { img: "/app/sport-american-football.png", name: "American Football" },
  { img: "/app/sport-formula1.png", name: "Formula 1" },
  { img: "/app/sport-golf.png", name: "Golf" },
];

export default function DreamSquad() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Rounded card with a soft green glow in the middle (matches Figma) */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c110c] px-6 py-16 text-center shadow-2xl sm:px-10 sm:py-20">
          {/* soft green glow behind the heading */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/20 blur-[110px]" />

          <div className="relative z-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green">
              Fantasy
            </p>
            <h2 className="font-display text-2xl uppercase leading-tight sm:text-5xl lg:text-6xl">
              Build Your <span className="text-green">Dream</span> Squad
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              Pick players from any team, any sport. Stack your squad against the
              world and see who comes out on top.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[15px] font-semibold text-white">
              One app. Six Sports. Infinite bragging rights.
            </p>

            {/* Sport icon grid hidden — not in the new Figma for this section.
                Kept (not deleted) with {false && (...)} so it can be restored. */}
            {false && (
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-6">
              {SPORTS.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-card px-3 py-5 transition hover:border-green/40"
                >
                  <Image
                    src={s.img}
                    alt={s.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-xs font-semibold text-white/70">{s.name}</span>
                </div>
              ))}
            </div>
            )}

            <a
              href="#download"
              className="mt-10 inline-block rounded-full bg-green px-10 py-4 font-display text-sm uppercase tracking-widest text-black transition hover:bg-green-bright"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
