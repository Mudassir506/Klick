"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact info */}
          <div>
            <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl">
              We&apos;d Love To <span className="text-green">Hear From You</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Reach out using the details below or send us a message — our team
              is always happy to help.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-xl border border-white/10 bg-card p-5">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-green">
                  Company
                </p>
                <p className="font-semibold text-white">JKE Technologies Ltd</p>
                <p className="mt-1 text-sm text-muted">
                  4 Rogart Street, Rogart Street Campus
                  <br />
                  Glasgow, G40 2AA
                  <br />
                  Scotland, United Kingdom
                </p>
                <p className="mt-1 text-sm text-muted">
                  Reg. No.{" "}
                  <span className="text-white/80">SC892512</span>
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-card p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-green">
                  Email Us
                </p>
                <a
                  href="mailto:info@cheeseklick.com"
                  className="block text-sm text-white/80 transition hover:text-green"
                >
                  info@cheeseklick.com{" "}
                  <span className="text-muted">— General enquiries</span>
                </a>
                <a
                  href="mailto:support@cheeseklick.com"
                  className="mt-2 block text-sm text-white/80 transition hover:text-green"
                >
                  support@cheeseklick.com{" "}
                  <span className="text-muted">— App support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="rounded-2xl border border-white/10 bg-card p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="text-4xl">✅</span>
                <h3 className="font-display text-xl text-white">
                  Message Received!
                </h3>
                <p className="text-sm text-muted">
                  We&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-green focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green py-3 font-display text-sm uppercase tracking-widest text-black transition hover:bg-green-bright"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
