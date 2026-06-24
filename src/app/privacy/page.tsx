import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Cheese Klick",
  description:
    "How we collect, use, and protect your data at Cheese Klick.",
};

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14">
      <h2 className="mb-5 flex items-center gap-3 border-b border-white/10 pb-3 text-2xl font-bold text-white md:text-3xl">
        <span className="rounded-md border border-green/60 bg-green/10 px-2.5 py-1 text-sm font-bold tracking-wider text-green">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-lg leading-relaxed text-muted md:text-xl">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-7 text-lg leading-relaxed text-muted md:text-xl"
        >
          <span className="absolute left-0 top-1 text-base text-green">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-5 pb-16 pt-56 text-center">
          <div className="glow-green pointer-events-none absolute inset-0 -z-10" />
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-green">
            Legal
          </p>
          <h1 className="font-display text-5xl text-white md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted md:text-xl">
            How we collect, use, and protect your data at{" "}
            <span className="text-green">Cheese Klick</span>.
          </p>
          <span className="mt-6 inline-block rounded-full border border-white/10 bg-card px-5 py-2 text-sm text-muted">
            Last updated: June 2026
          </span>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-16">
          <Section num="01" title="Who We Are">
            <p>
              Cheese Klick is operated by{" "}
              <strong className="text-white">JKE Technologies Ltd</strong>, a
              company registered in Scotland, United Kingdom.
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-card p-6 text-lg md:text-xl">
              <p className="mb-2 font-semibold text-white">
                JKE Technologies Ltd
              </p>
              <p className="mb-2 text-muted">
                4 Rogart Street, Rogart Street Campus
              </p>
              <p className="mb-2 text-muted">Glasgow, G40 2AA</p>
              <p className="mb-2 text-muted">Scotland, United Kingdom</p>
              <p className="mb-2 text-muted">
                Email:{" "}
                <a
                  href="mailto:info@cheeseklick.com"
                  className="text-green hover:underline"
                >
                  info@cheeseklick.com
                </a>
              </p>
              <p className="mb-2 text-muted">
                Website:{" "}
                <a
                  href="https://www.cheeseklick.com"
                  className="text-green hover:underline"
                >
                  www.cheeseklick.com
                </a>
              </p>
            </div>
            <p className="mt-3.5">
              For any privacy-related queries, contact us at{" "}
              <a
                href="mailto:info@cheeseklick.com"
                className="text-green hover:underline"
              >
                info@cheeseklick.com
              </a>
              .
            </p>
          </Section>

          <Section num="02" title="What Data We Collect">
            <p>
              We collect only the data necessary to provide and improve the
              Cheese Klick app and services.
            </p>
            <List
              items={[
                <>
                  <strong className="text-white/90">Camera images</strong> —
                  used in real-time to identify players on screen. Images are
                  processed and not stored on our servers.
                </>,
                <>
                  <strong className="text-white/90">Account information</strong>{" "}
                  — username, email address, and password when you create an
                  account.
                </>,
                <>
                  <strong className="text-white/90">Usage data</strong> — how
                  you interact with the app (features used, session duration,
                  klick history) to improve performance.
                </>,
                <>
                  <strong className="text-white/90">Device information</strong>{" "}
                  — device type, operating system, and app version for technical
                  support purposes.
                </>,
                <>
                  <strong className="text-white/90">
                    Leaderboard and game data
                  </strong>{" "}
                  — your picks, points, and ranking data for the Team of the
                  Week and in-app games.
                </>,
                <>
                  <strong className="text-white/90">Waitlist data</strong> —
                  your email address if you join our pre-launch waitlist.
                </>,
              ]}
            />
          </Section>

          <Section num="03" title="How We Use Your Data">
            <List
              items={[
                "To identify players using your camera and return stats instantly",
                "To operate the leaderboard, Team of the Week picks, and in-app game features",
                "To send you relevant notifications (only with your permission)",
                "To improve the app based on usage patterns",
                "To communicate service updates, new sports, and feature launches",
                "To comply with legal obligations under UK and Scottish law",
              ]}
            />
            <div className="my-4 rounded-lg border border-green/20 border-l-[3px] border-l-green bg-green/5 px-6 py-5">
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                We do not sell your personal data to third parties. We do not
                use your camera data for any purpose other than real-time player
                identification within the app.
              </p>
            </div>
          </Section>

          <Section num="04" title="Camera & Photo Access">
            <p>
              Cheese Klick requests access to your device&apos;s camera to enable
              our core feature — point at any player on your screen and instantly
              receive their stats and performance data.
            </p>
            <List
              items={[
                "Camera access is only active when you are using the klick feature",
                "Images captured are processed in real-time and are not stored on our servers",
                "You can revoke camera access at any time in your device settings",
                "Revoking camera access disables the klick feature but does not affect other app functions",
              ]}
            />
          </Section>

          <Section num="05" title="Legal Basis for Processing (GDPR)">
            <p>
              We process your personal data under the following legal bases as
              defined by UK GDPR:
            </p>
            <List
              items={[
                <>
                  <strong className="text-white/90">Contract</strong> —
                  processing necessary to provide the service you&apos;ve signed
                  up for
                </>,
                <>
                  <strong className="text-white/90">
                    Legitimate interests
                  </strong>{" "}
                  — improving our app and preventing fraud
                </>,
                <>
                  <strong className="text-white/90">Consent</strong> — for
                  marketing communications and optional notifications
                </>,
                <>
                  <strong className="text-white/90">Legal obligation</strong> —
                  where required by UK law
                </>,
              ]}
            />
          </Section>

          <Section num="06" title="Data Sharing">
            <p>
              We may share your data with trusted third-party providers who help
              us operate the app, including:
            </p>
            <List
              items={[
                "Cloud infrastructure and hosting providers",
                "Analytics services (anonymised data only)",
                "Customer support tools",
                "Sports data API providers (stats and player data only — no personal data)",
              ]}
            />
            <p>
              All third-party providers are contractually required to handle
              your data securely and in compliance with UK GDPR. We do not share
              your data with advertisers.
            </p>
          </Section>

          <Section num="07" title="Data Retention">
            <p>We retain your personal data only for as long as necessary:</p>
            <List
              items={[
                "Account data — held for the duration of your account plus 12 months after deletion",
                "Camera images — not retained; processed in real-time only",
                "Usage and game data — retained for up to 24 months for service improvement",
                "Waitlist data — held until launch or until you unsubscribe",
              ]}
            />
          </Section>

          <Section num="08" title="Your Rights">
            <p>Under UK GDPR, you have the right to:</p>
            <List
              items={[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                'Request deletion of your data ("right to be forgotten")',
                "Object to or restrict how we process your data",
                "Request a copy of your data in a portable format",
                "Withdraw consent at any time where consent is the legal basis",
              ]}
            />
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:info@cheeseklick.com"
                className="text-green hover:underline"
              >
                info@cheeseklick.com
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section num="09" title="Cookies">
            <p>
              Our website uses essential cookies to keep the site functioning. We
              may use analytics cookies to understand how visitors use the site —
              you will be asked for consent before any non-essential cookies are
              set.
            </p>
          </Section>

          <Section num="10" title="Children's Privacy">
            <p>
              Cheese Klick is not directed at children under the age of 13. We do
              not knowingly collect personal data from children under 13. If you
              believe a child has provided us with personal data, please contact
              us immediately at{" "}
              <a
                href="mailto:info@cheeseklick.com"
                className="text-green hover:underline"
              >
                info@cheeseklick.com
              </a>{" "}
              and we will delete it promptly.
            </p>
          </Section>

          <Section num="11" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will update the &quot;Last updated&quot; date at the top of this
              page and notify you via the app or email where appropriate.
              Continued use of Cheese Klick after changes constitutes acceptance
              of the updated policy.
            </p>
          </Section>

          <Section num="12" title="Contact & Complaints">
            <p>For any privacy concerns or to exercise your rights:</p>
            <div className="mt-4 rounded-xl border border-white/10 bg-card p-6 text-lg md:text-xl">
              <p className="mb-2 font-semibold text-white">
                JKE Technologies Ltd
              </p>
              <p className="mb-2 text-muted">
                4 Rogart Street, Rogart Street Campus, Glasgow, G40 2AA
              </p>
              <p className="mb-2 text-muted">
                Email:{" "}
                <a
                  href="mailto:info@cheeseklick.com"
                  className="text-green hover:underline"
                >
                  info@cheeseklick.com
                </a>
              </p>
            </div>
            <p className="mt-4">
              If you are not satisfied with our response, you have the right to
              lodge a complaint with the{" "}
              <strong className="text-white/90">
                Information Commissioner&apos;s Office (ICO)
              </strong>{" "}
              at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:underline"
              >
                ico.org.uk
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
