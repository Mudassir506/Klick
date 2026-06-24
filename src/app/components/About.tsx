import Image from "next/image";
import { AppleStoreBadge, GooglePlayBadge } from "./Hero";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden pb-0 pt-10">
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
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-[240%] max-w-[820px] shrink-0 sm:w-[140%] sm:max-w-[520px] lg:w-[200%] lg:max-w-[888px]">
            <Image
              src="/app/phone-player.png"
              alt="Player identified in the Cheese Klick app"
              width={3000}
              height={3000}
              sizes="(max-width: 1024px) 85vw, 42vw"
              className="animate-float h-auto w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-5xl sm:text-6xl">
            Built By Sports Fans.
            <br />
            <span className="text-green">For Sports Fans.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            We got tired of searching for stats mid-match. So we built the app
            we always wanted — klick any player on your screen, get each
            player&apos;s performance instantly, earn points and become the best
            in the world.
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
            You can now just point and know.{" "}
            <span className="font-semibold text-white">Cheese Klick</span> is
            the Shazam moment for sport.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <AppleStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
