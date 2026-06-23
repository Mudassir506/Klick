import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-10 pb-0"
    >
      {/* Figma "Rectangle 45248": a green→black linear-gradient panel with one
          large rounded corner that forms the curve, shown at 55% opacity. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[65%]"
        style={{
          borderTopRightRadius: "55%",
          background: "linear-gradient(to top, #A9FFA0 0%, #000000 95%)",
          opacity: 0.55,
        }}
      />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] glow-green opacity-40" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-5 lg:grid-cols-2 lg:gap-4">
        {/* Phone sitting on the green curve */}
        <div className="relative flex items-center justify-center">
          {/* phone — 3000x3000 square PNG, player centred with transparent margins */}
          <div className="relative z-10 shrink-0 w-[240%] max-w-[820px] sm:w-[140%] sm:max-w-[520px] lg:w-[200%] lg:max-w-[888px]">
            <Image
              src="/app/phone-player.png"
              alt="Player identified in the Chesse Klick app"
              width={3000}
              height={3000}
              sizes="(max-width: 1024px) 85vw, 42vw"
              className="animate-float h-auto w-full"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-display text-5xl sm:text-6xl">About Us</h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. Spot, klick and
            know every player on the pitch — instantly.
          </p>

          <a
            href="#download"
            className="mt-8 inline-block rounded-lg bg-green px-8 py-3 font-semibold text-black transition hover:bg-green-bright"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
