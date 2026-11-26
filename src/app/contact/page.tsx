import type { Metadata } from "next";
import { client, contactPageQuery, siteSettingsQuery } from "@/lib/sanity";

export const metadata: Metadata = { title: "Contact" };

const defaults = {
  eyebrow: "Get in Touch",
  title: "Contact Us",
  intro:
    "Request a free quote or ask any questions. Our team typically responds within one business day.",
  formNote:
    "This form is a demo. Wire it to an API or form handler as needed.",
  sidebarTitle: "Reach Us Directly",
  callbackTitle: "Prefer a callback?",
  callbackText:
    "Leave your number in the form and we’ll call you back within one business day to discuss your move.",
};

const defaultSettings = {
  phone: "+1 (555) 123-4567",
  email: "hello@leseftmoving.com",
  address: "123 Moving Lane, Suite 100\nYour City, ST 00000",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
};

const inputClass =
  "w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100";

export default async function ContactPage() {
  const [pageData, settings] = await Promise.all([
    client.fetch(contactPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);
  const c = { ...defaults, ...(pageData || {}) };
  const s = { ...defaultSettings, ...(settings || {}) };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary-light)]">
          {c.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-[var(--primary)]">{c.title}</h1>
        <p className="text-lg leading-relaxed text-[var(--muted)]">{c.intro}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <form className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--primary)]">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--primary)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              className={inputClass}
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--primary)]">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={inputClass}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="moveType" className="mb-1.5 block text-sm font-medium text-[var(--primary)]">
              Move Type
            </label>
            <select id="moveType" name="moveType" className={inputClass}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Long Distance</option>
              <option>Specialty / Commodities</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--primary)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClass}
              placeholder="Tell us about your move, dates, and any special requirements..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--primary)] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--primary-light)]"
          >
            Send Message
          </button>
          <p className="text-center text-xs text-[var(--muted)]">{c.formNote}</p>
        </form>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
              {c.sidebarTitle}
            </h2>
            <ul className="space-y-4 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">📞</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Phone</p>
                  <p>{s.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">✉️</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Email</p>
                  <p>{s.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">📍</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Office</p>
                  <p className="whitespace-pre-line">{s.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">🕐</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Hours</p>
                  <p>{s.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-blue-50 p-6">
            <h3 className="mb-2 font-semibold text-[var(--primary)]">
              {c.callbackTitle}
            </h3>
            <p className="text-sm text-[var(--muted)]">{c.callbackText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
