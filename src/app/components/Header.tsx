"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Download", href: "#download" },
  { label: "Shop", href: "#shop" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-4 flex items-center justify-between">
          <Logo className="h-auto w-40 md:w-48" />

          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-white/80 transition hover:text-green"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:border-green/60 hover:text-green sm:inline-block"
            >
              Contact Us
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 md:hidden"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/5 bg-black/80 p-3 backdrop-blur-md md:hidden">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-green"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-green px-4 py-2.5 text-center text-sm font-semibold text-black"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
