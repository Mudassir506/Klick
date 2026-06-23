import Image from "next/image";

const STEPS = [
  { n: "1", label: "SEE A PLAYER", img: "/app/see-player.png", green: false },
  { n: "2", label: "KLICK A PIC", img: "/app/klick-a-pic.png", green: true },
  { n: "3", label: "GET INSTANT STATS", img: "/app/instant-stats.png", green: false },
  { n: "4", label: "COMPARE & WIN", img: "/app/compare-win.png", green: false },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-center font-display text-4xl uppercase sm:text-5xl">
          How It Works
        </h2>

        {/* 4 flush cards, like the Figma */}
        <div className="mt-14 grid grid-cols-2 gap-1.5 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* photo — desaturated, except the green KLICK A PIC card */}
              <Image
                src={s.img}
                alt={s.label}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={`object-cover ${s.green ? "" : "grayscale"}`}
              />

              {/* tint: Figma green linear-gradient on card 2, dark mute on the rest */}
              {s.green ? (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(169,255,160,0) 50%, rgba(169,255,160,1) 100%)",
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-black/45" />
              )}

              {/* big watermark number */}
              <span
                className={`pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[8rem] leading-none sm:text-[11rem] ${
                  s.green ? "text-black/25" : "text-white/25"
                }`}
              >
                {s.n}
              </span>

              {/* label — bottom-left */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
