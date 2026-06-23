import Logo from "./Logo";

/* Social icons matching the Figma footer (plain line icons, no bg circle) */
const sc = "h-6 w-6";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={sc}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={sc}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={sc}>
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.8 4.8a4 4 0 0 0 1.3 5.4 4 4 0 0 1-1.8-.5v.05a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.07 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={sc}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.2v5.6l4.7-2.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", icon: <IconInstagram /> },
  { label: "X", icon: <IconX /> },
  { label: "Twitter", icon: <IconTwitter /> },
  { label: "YouTube", icon: <IconYouTube /> },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between">
        <Logo size={180} />

        <p className="order-3 text-base text-muted sm:order-2">
          © 2026 Chesse Klick. All rights reserved.
        </p>

        <div className="order-2 flex items-center gap-5 sm:order-3">
          <span className="text-base uppercase tracking-wide text-muted">Follow us</span>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-white/80 transition hover:text-green"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
