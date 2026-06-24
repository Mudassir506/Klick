import Image from "next/image";

const SPORTS = [
  { img: "/app/sport-football.png", name: "Football" },
  { img: "/app/sport-basketball.png", name: "Basketball" },
  { img: "/app/sport-tennis.png", name: "Tennis" },
  { img: "/app/sport-american-football.png", name: "American Football" },
  { img: "/app/sport-formula1.png", name: "Formula 1" },
  { img: "/app/sport-golf.png", name: "Golf" },
];

export default function Sports() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-10 text-center text-sm font-bold uppercase tracking-[0.15em] text-green">
          One App. Six Sports.
        </p>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {SPORTS.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-card px-4 py-6 text-center transition hover:border-green/40"
            >
              <Image
                src={s.img}
                alt={s.name}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <span className="text-sm font-semibold text-white/80">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
