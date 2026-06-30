import Image from "next/image";

const STEPS = [
  {
    n: "1",
    label: "SEE A PLAYER",
    img: "/app/how/see-player.jpg",
    desc: "Whether you're at the stadium or watching from home on the couch.",
  },
  {
    n: "2",
    label: "KLICK A PIC",
    img: "/app/how/klick-a-pic.jpg",
    desc: "Point your camera at any player on the pitch or screen.",
  },
  {
    n: "3",
    label: "GET INSTANT STATS",
    img: "/app/how/instant-stats.jpg",
    desc: "Instant access to live performance data and heatmaps.",
  },
  {
    n: "4",
    label: "COMPARE & WIN",
    img: "/app/how/compare-win.jpg",
    desc: "Compare players side-by-side to make informed decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center font-display text-3xl uppercase sm:text-5xl">
          How It Works
        </h2>

        {/* 2 x 2 cards, like the Figma — photo on top, step text below */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-green/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="font-display text-xs uppercase tracking-[0.15em] text-green">
                  Step {s.n}
                </span>
                <h3 className="mt-1 font-display text-lg uppercase tracking-wide text-white">
                  {s.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
