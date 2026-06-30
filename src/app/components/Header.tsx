"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#how" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/contact" },
];

export default function Header({
  nav = NAV,
  showContact = true,
}: {
  nav?: NavItem[];
  showContact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-1 flex items-center">
          {/* Left — nav (desktop); empty spacer on mobile keeps the logo centred */}
          <div className="flex flex-1 items-center">
            <nav className="hidden items-center gap-9 md:flex">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xl font-medium text-white/80 transition hover:text-green"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Centre — logo */}
          <Logo className="h-auto w-28 shrink-0 md:w-32" />

          {/* Right — actions */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {/* "Contact Us" button removed per client — it duplicates the
                "Contact" link already in the nav. Hidden (not deleted) with
                {false && (...)} so it can be restored. */}
            {false && showContact && (
              <a
                href="/contact"
                className="hidden rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:border-green/60 hover:text-green sm:inline-block"
              >
                Contact Us
              </a>
            )}
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
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-green"
              >
                {item.label}
              </a>
            ))}
            {showContact && (
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg bg-green px-4 py-2.5 text-center text-sm font-semibold text-black"
              >
                Contact Us
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
