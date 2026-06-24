import { AppleStoreBadge, GooglePlayBadge } from "./Hero";

export default function Download() {
  return (
    <section id="download" className="px-5 py-16">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 glow-green opacity-60" />

        <p className="relative mb-4 text-sm font-bold uppercase tracking-[0.15em] text-green">
          Available Now
        </p>
        <h2 className="relative font-display text-3xl uppercase sm:text-4xl">
          Download Cheese Klick
        </h2>
        <p className="relative mt-3 max-w-md mx-auto text-sm text-muted">
          Point. Klick. Know. The Shazam moment for sport is here — download
          the app and start earning points today.
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <AppleStoreBadge />
          <GooglePlayBadge />
        </div>

        <p className="relative mt-6 text-xs text-muted">
          Available on iOS and Android &bull; Free to download
        </p>
      </div>
    </section>
  );
}
