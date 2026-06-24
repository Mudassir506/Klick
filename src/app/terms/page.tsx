import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Cheese Klick",
  description: "The rules and conditions for using Cheese Klick.",
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
        <li key={i} className="relative pl-7 text-lg leading-relaxed text-muted md:text-xl">
          <span className="absolute left-0 top-1 text-base text-green">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContactCard() {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-card p-6 text-lg md:text-xl">
      <p className="mb-2 font-semibold text-white">JKE Technologies Ltd</p>
      <p className="mb-2 text-muted">
        4 Rogart Street, Rogart Street Campus, Glasgow, G40 2AA
      </p>
      <p className="mb-2 text-muted">
        Email:{" "}
        <a href="mailto:info@cheeseklick.com" className="text-green hover:underline">
          info@cheeseklick.com
        </a>
      </p>
    </div>
  );
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted md:text-xl">
            The rules and conditions for using{" "}
            <span className="text-green">Cheese Klick</span>.
          </p>
          <span className="mt-6 inline-block rounded-full border border-white/10 bg-card px-5 py-2 text-sm text-muted">
            Last updated: June 2026
          </span>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-16">
          <div className="mb-12 rounded-lg border border-green/20 border-l-[3px] border-l-green bg-green/5 px-6 py-5">
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              By downloading or using the Cheese Klick app or visiting our
              website, you agree to these Terms of Service. Please read them
              carefully. If you do not agree, do not use our services.
            </p>
          </div>

          <Section num="01" title="About Cheese Klick">
            <p>
              Cheese Klick is a mobile sports stats application operated by{" "}
              <strong className="text-white">JKE Technologies Ltd</strong>,
              registered in Scotland, United Kingdom. The app allows users to
              identify sports players using their device camera and instantly
              access performance stats, game data, and in-app features including
              leaderboards and Team of the Week.
            </p>
            <ContactCard />
          </Section>

          <Section num="02" title="Eligibility">
            <List
              items={[
                "You must be at least 13 years old to use Cheese Klick",
                "If you are under 18, you must have permission from a parent or guardian",
                "By using the app, you confirm you have the legal capacity to enter into these terms",
              ]}
            />
          </Section>

          <Section num="03" title="Your Account">
            <List
              items={[
                "You are responsible for maintaining the security of your account credentials",
                "You must provide accurate information when creating an account",
                "You may not share your account with others or create multiple accounts",
                <>
                  Notify us immediately at{" "}
                  <a
                    href="mailto:info@cheeseklick.com"
                    className="text-green hover:underline"
                  >
                    info@cheeseklick.com
                  </a>{" "}
                  if you suspect unauthorised access
                </>,
                "We reserve the right to suspend or terminate accounts that violate these terms",
              ]}
            />
          </Section>

          <Section num="04" title="Acceptable Use">
            <p>When using Cheese Klick, you agree not to:</p>
            <List
              items={[
                "Use the app for any unlawful purpose or in violation of any regulations",
                "Attempt to reverse-engineer, copy, or replicate any part of the app or its technology",
                "Use automated tools, bots, or scripts to interact with the app",
                "Upload or transmit any harmful, offensive, or illegal content",
                "Attempt to gain unauthorised access to our systems or other users' accounts",
                "Misuse the camera feature for any purpose other than player identification",
                "Manipulate leaderboard data, points, or game outcomes through unfair means",
              ]}
            />
          </Section>

          <Section
            num="05"
            title="In-App Features: Points, Leaderboards & Team of the Week"
          >
            <p>Cheese Klick includes game features including but not limited to:</p>
            <List
              items={[
                <>
                  <strong className="text-white/90">Points system</strong> —
                  earned through app usage, correct picks, and weekly performance
                </>,
                <>
                  <strong className="text-white/90">Leaderboards</strong> —
                  ranked by total points; updated regularly
                </>,
                <>
                  <strong className="text-white/90">Team of the Week</strong> —
                  select your squad before the weekend; AI-generated results
                  based on real match data
                </>,
              ]}
            />
            <div className="my-4 rounded-lg border border-red-500/20 border-l-[3px] border-l-red-500 bg-red-500/5 px-6 py-5">
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                Points and leaderboard positions have no cash value and cannot be
                exchanged for money. We reserve the right to adjust, reset, or
                modify the points system at any time. Any rewards offered through
                the app are subject to separate terms which will be displayed at
                the time of offer.
              </p>
            </div>
            <p>
              Results generated by our Team of the Week AI are based on real
              sports data but are provided for entertainment purposes. We do not
              guarantee the accuracy of any AI-generated output.
            </p>
          </Section>

          <Section num="06" title="Camera & Device Permissions">
            <p>
              Cheese Klick requires camera access to function. By granting camera
              permission:
            </p>
            <List
              items={[
                "You confirm you have the right to photograph or capture any image you use within the app",
                "You understand that camera images are processed in real-time and not stored on our servers",
                "You agree not to use the camera feature to capture images of individuals without their consent",
              ]}
            />
          </Section>

          <Section num="07" title="Intellectual Property">
            <p>
              All content within Cheese Klick — including but not limited to the
              app design, logo, name, technology, and copy — is the intellectual
              property of JKE Technologies Ltd. You may not reproduce, distribute,
              or create derivative works from any part of Cheese Klick without our
              written permission.
            </p>
            <p>
              Sports data displayed within the app is sourced from licensed
              third-party providers. All rights in that data remain with the
              respective data providers and sports organisations.
            </p>
          </Section>

          <Section num="08" title="Third-Party Services">
            <p>
              Cheese Klick uses third-party services to deliver features including
              sports data, cloud infrastructure, and analytics. We are not
              responsible for the content, terms, or practices of any third-party
              service. Use of third-party services within the app is subject to
              those providers' own terms.
            </p>
          </Section>

          <Section num="09" title="Disclaimers">
            <List
              items={[
                'Cheese Klick is provided "as is" without warranty of any kind',
                "We do not guarantee uninterrupted or error-free access to the app",
                "Stats and data displayed are sourced from third parties and may occasionally be incomplete or delayed",
                "We are not responsible for decisions made based on information displayed in the app",
                "The app is intended for entertainment and informational purposes only",
              ]}
            />
          </Section>

          <Section num="10" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by UK law, JKE Technologies Ltd
              shall not be liable for:
            </p>
            <List
              items={[
                "Any indirect, incidental, or consequential losses arising from your use of the app",
                "Loss of data, points, or leaderboard position due to technical issues",
                "Any losses arising from third-party data inaccuracies",
                "Unauthorised access to your account resulting from your failure to secure your credentials",
              ]}
            />
          </Section>

          <Section num="11" title="Termination">
            <p>
              We reserve the right to suspend or terminate your access to Cheese
              Klick at any time, with or without notice, if we reasonably believe
              you have violated these Terms of Service. You may delete your
              account at any time by contacting us at{" "}
              <a
                href="mailto:info@cheeseklick.com"
                className="text-green hover:underline"
              >
                info@cheeseklick.com
              </a>
              .
            </p>
          </Section>

          <Section num="12" title="Governing Law">
            <p>
              These Terms of Service are governed by the laws of Scotland and the
              United Kingdom. Any disputes arising from your use of Cheese Klick
              will be subject to the exclusive jurisdiction of the Scottish
              courts.
            </p>
          </Section>

          <Section num="13" title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. Changes will be posted
              on this page with an updated date. Continued use of Cheese Klick
              after changes are posted constitutes acceptance of the revised
              terms. For significant changes, we will notify you via the app or by
              email.
            </p>
          </Section>

          <Section num="14" title="Contact Us">
            <p>For any questions about these Terms of Service:</p>
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
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
