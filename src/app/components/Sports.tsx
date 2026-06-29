import Image from "next/image";

const SPORTS = [
  { img: "/app/sports/football.jpg", name: "Football", stats: "Goals · Assists · Stats" },
  { img: "/app/sports/basketball.jpg", name: "Basketball", stats: "Points · Rebounds · Stats" },
  { img: "/app/sports/american-football.jpg", name: "American Football", stats: "Yards · Touchdowns · Stats" },
  { img: "/app/sports/formula1.jpg", name: "Formula 1", stats: "Lap Times · Positions · Stats" },
  { img: "/app/sports/golf.jpg", name: "Golf", stats: "Handicap · Rounds · Stats" },
  { img: "/app/sports/tennis.jpg", name: "Tennis", stats: "Aces · Winners · Stats" },
];

export default function Sports() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-12 text-center font-display text-3xl uppercase sm:text-5xl">
          One App. <span className="text-green">Six Sports.</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPORTS.map((s, i) => (
            <div
              key={s.name}
              className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border transition ${
                i === 0 ? "border-green/70" : "border-white/10 hover:border-green/40"
              }`}
            >
              <Image
                src={s.img}
                alt={s.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Dark gradient so the label is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg uppercase tracking-wide text-white">
                  {s.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-green/90">
                  {s.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
