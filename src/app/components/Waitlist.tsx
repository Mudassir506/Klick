"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section id="download" className="px-5 py-16">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 glow-green opacity-60" />

        <h2 className="relative font-display text-3xl uppercase sm:text-4xl">
          Be The First To Play!
        </h2>
        <p className="relative mt-3 text-sm text-muted">
          Join the waitlist and get early access + exclusive rewards.
        </p>

        {joined ? (
          <p className="relative mx-auto mt-8 max-w-md rounded-full bg-green/15 px-6 py-3 font-semibold text-green">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-green focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-green px-7 py-3 font-display text-sm tracking-wide text-black transition hover:bg-green-bright"
            >
              Join Waitlist
            </button>
          </form>
        )}

        <div className="relative mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {[32, 45, 60].map((n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={n}
                src={`https://i.pravatar.cc/64?img=${n}`}
                alt="Waitlist player"
                className="h-8 w-8 rounded-full border-2 border-card object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-muted">
            <span className="font-semibold text-white">1,247+</span> players are
            already on the waitlist!
          </p>
        </div>
      </div>
    </section>
  );
}
