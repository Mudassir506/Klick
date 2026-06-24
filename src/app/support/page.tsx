import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Support — Cheese Klick",
  description:
    "Get help with Cheese Klick. Contact our support team at support@cheeseklick.com — we aim to respond within 48 hours.",
};

const FAQS = [
  {
    q: "How does Cheese Klick identify players?",
    a: "Point your camera at any player on your screen and klick a pic. Our technology identifies the player in real-time and instantly returns their stats, history and performance data. Images are processed live and are never stored on our servers.",
  },
  {
    q: "Which sports are supported?",
    a: "Cheese Klick supports six sports — Football, Basketball, Tennis, American Football, Formula 1 and Golf. We're always working to add more.",
  },
  {
    q: "How do points and leaderboards work?",
    a: "You earn points through app usage, correct picks and weekly performance. Points rank you on the global leaderboard. Points have no cash value and are for entertainment only.",
  },
  {
    q: "The camera isn't working. What should I do?",
    a: "Make sure you've granted camera permission in your device settings. If the issue persists, restart the app or reinstall it. Still stuck? Email us at support@cheeseklick.com.",
  },
  {
    q: "How do I delete my account or data?",
    a: "You can request account or data deletion at any time by emailing support@cheeseklick.com. We'll process your request and respond within 30 days, as outlined in our Privacy Policy.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-5 pb-12 pt-56 text-center">
          <div className="glow-green pointer-events-none absolute inset-0 -z-10" />
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-green">
            Help Centre
          </p>
          <h1 className="font-display text-5xl text-white md:text-7xl">Support</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted md:text-xl">
            Need a hand? We&apos;re here to help and aim to respond within{" "}
            <span className="text-green">48 hours</span>.
          </p>
        </section>

        <div className="mx-auto max-w-3xl px-5 pb-24 pt-16">
          {/* Contact support card */}
          <div className="mb-14 rounded-2xl border border-green/30 bg-green/5 p-8 text-center">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Get In Touch With Support
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-muted md:text-lg">
              For any app issues, questions or feedback, email our support team
              directly:
            </p>
            <a
              href="mailto:support@cheeseklick.com"
              className="mt-6 inline-block rounded-full bg-green px-8 py-3.5 font-display text-sm uppercase tracking-widest text-black transition hover:bg-green-bright"
            >
              support@cheeseklick.com
            </a>
            <p className="mt-5 text-sm text-muted">
              For general or business enquiries:{" "}
              <a
                href="mailto:info@cheeseklick.com"
                className="text-green hover:underline"
              >
                info@cheeseklick.com
              </a>
            </p>
          </div>

          {/* FAQ */}
          <h2 className="mb-8 text-center font-display text-3xl text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-card p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                  {item.q}
                </h3>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Company / contact details */}
          <div className="mt-14 rounded-xl border border-white/10 bg-card p-6 text-center">
            <p className="font-semibold text-white">JKE Technologies Ltd</p>
            <p className="mt-1 text-sm text-muted">
              4 Rogart Street, Rogart Street Campus, Glasgow, G40 2AA, Scotland,
              United Kingdom
            </p>
            <p className="mt-2 text-sm text-muted">
              Support:{" "}
              <a
                href="mailto:support@cheeseklick.com"
                className="text-green hover:underline"
              >
                support@cheeseklick.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
