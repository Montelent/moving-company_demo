import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary-light)]">
          Get in Touch
        </p>
        <h1 className="mb-6 text-4xl font-bold text-[var(--primary)]">
          Contact Us
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          Request a free quote or ask any questions. Our team typically responds
          within one business day.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <form className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[var(--primary)]"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[var(--primary)]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-[var(--primary)]"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label
              htmlFor="moveType"
              className="mb-1.5 block text-sm font-medium text-[var(--primary)]"
            >
              Move Type
            </label>
            <select
              id="moveType"
              name="moveType"
              className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Long Distance</option>
              <option>Specialty / Commodities</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-[var(--primary)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-blue-100"
              placeholder="Tell us about your move, dates, and any special requirements..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
          >
            Send Message
          </button>
          <p className="text-center text-xs text-[var(--muted)]">
            This is a demo form. Wire it to an API or Sanity form handler as
            needed.
          </p>
        </form>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
              Reach Us Directly
            </h2>
            <ul className="space-y-4 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">\ud83d\udcde</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">\u2709\ufe0f</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Email</p>
                  <p>hello@leseftmoving.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">\ud83d\udccd</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Office</p>
                  <p>123 Moving Lane, Suite 100<br />Your City, ST 00000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">\ud83d\udd50</span>
                <div>
                  <p className="font-medium text-[var(--primary)]">Hours</p>
                  <p>Mon \u2013 Sat: 8:00 AM \u2013 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-blue-50 p-6">
            <h3 className="mb-2 font-semibold text-[var(--primary)]">
              Prefer a callback?
            </h3>
            <p className="text-sm text-[var(--muted)]">
              Leave your number in the form and we\u2019ll call you back within one
              business day to discuss your move.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
