// import Logo from "./Logo"; // Footer logo removed for initial launch

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top row */}
        <div className="flex flex-col items-start gap-8 sm:items-end">
          {/* Footer logo removed — nav + download buttons moved up.
          <Logo size={180} />
          */}

          <div className="flex w-full flex-col items-start gap-4 sm:items-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
              <a href="/" className="transition hover:text-green">Home</a>
              <a href="/#download" className="transition hover:text-green">Download</a>
              <a href="/contact" className="transition hover:text-green">Contact</a>
              <a href="/support" className="transition hover:text-green">Support</a>
              <a href="/privacy" className="transition hover:text-green">Privacy Policy</a>
              <a href="/terms" className="transition hover:text-green">Terms of Service</a>
            </nav>

            {/* Download buttons — right aligned */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-2.5 transition hover:border-green/50"
              >
                <svg className="h-6 w-6 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-white/60">Download on the</div>
                  <div className="text-[14px] font-semibold leading-tight text-white">App Store</div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-2.5 transition hover:border-green/50"
              >
                <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.37.2.8.22 1.2.02l12.4-7.17-2.55-2.55-11.05 9.7z" fill="#EA4335" />
                  <path d="M20.82 10.37 17.6 8.52l-2.87 2.87 2.87 2.87 3.23-1.86a1.36 1.36 0 0 0 0-2.03z" fill="#FBBC04" />
                  <path d="M3.18.24A1.36 1.36 0 0 0 2.5 1.4v21.2c0 .49.26.92.68 1.16l11.55-11.76L3.18.24z" fill="#4285F4" />
                  <path d="M4.38.26 16.78 7.43l-2.55 2.55L3.18.24c.37-.2.82-.18 1.2.02z" fill="#34A853" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-white/60">Get it on</div>
                  <div className="text-[14px] font-semibold leading-tight text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/5" />

        {/* Legal info */}
        <div className="grid gap-4 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-1 font-semibold text-white/80">JKE Technologies Ltd</p>
            <p>4 Rogart Street, Rogart Street Campus</p>
            <p>Glasgow, G40 2AA</p>
            <p>Scotland, United Kingdom</p>
            <p className="mt-1">Company No. <span className="text-white/70">SC892512</span></p>
          </div>

          {/* Contact block removed from footer — handled on the dedicated /contact page.
              Kept here (commented) in case it needs to be restored.
          <div>
            <p className="mb-1 font-semibold text-white/80">Contact</p>
            <a href="mailto:info@cheeseklick.com" className="block transition hover:text-green">
              info@cheeseklick.com
            </a>
            <a href="mailto:support@cheeseklick.com" className="block transition hover:text-green">
              support@cheeseklick.com
            </a>
            <a href="/support" className="block transition hover:text-green">
              Help &amp; Support Centre
            </a>
            <a href="https://www.cheeseklick.com" target="_blank" rel="noopener noreferrer" className="block transition hover:text-green">
              www.cheeseklick.com
            </a>
          </div>
          */}

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-1 font-semibold text-white/80">Legal</p>
            <p className="text-xs leading-relaxed">
              Cheese Klick is operated by JKE Technologies Ltd, registered in
              Scotland. All rights reserved.
            </p>
            <div className="mt-2 flex gap-4 text-xs">
              <a href="/privacy" className="transition hover:text-green">Privacy Policy</a>
              <a href="/terms" className="transition hover:text-green">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="my-6 border-t border-white/5" />
        <p className="text-center text-xs text-muted">
          © 2026 Cheese Klick — JKE Technologies Ltd. Registered in Scotland.
        </p>
      </div>
    </footer>
  );
}
