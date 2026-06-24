import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact Us — Cheese Klick",
  description:
    "Get in touch with the Cheese Klick team. We aim to respond within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-5 pb-12 pt-56 text-center">
          <div className="glow-green pointer-events-none absolute inset-0 -z-10" />
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-green">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl text-white md:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted md:text-xl">
            Have a question or need help? We aim to respond within{" "}
            <span className="text-green">48 hours</span>.
          </p>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
