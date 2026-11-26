import Link from "next/link";

type FooterProps = {
  siteName?: string;
  initials?: string;
  phone?: string;
  email?: string;
  hours?: string;
  footerTagline?: string;
};

export default function Footer({
  siteName = "LeSeft Moving",
  initials = "LS",
  phone = "+1 (555) 123-4567",
  email = "hello@leseftmoving.com",
  hours = "Mon – Sat: 8:00 AM – 6:00 PM",
  footerTagline =
    "Professional moving services you can trust. From local relocations to long-distance moves, we handle your belongings with care.",
}: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary-dark)] text-blue-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary-light)] text-sm font-bold text-white">
                {initials}
              </div>
              <span className="text-lg font-semibold text-white">{siteName}</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-200">{footerTagline}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/commodities" className="transition hover:text-white">
                  Commodities & Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition hover:text-white">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Phone: {phone}</li>
              <li>Email: {email}</li>
              <li>{hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} {siteName}. All rights reserved. Built
          with Next.js + Sanity.
        </div>
      </div>
    </footer>
  );
}
