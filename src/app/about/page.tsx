import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary-light)]">
          Our Story
        </p>
        <h1 className="mb-6 text-4xl font-bold text-[var(--primary)]">
          About LeSeft Moving
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          Founded with a simple mission \u2014 to make moving stress-free and
          reliable \u2014 LeSeft Moving has grown into a trusted partner for
          families and businesses alike.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            Who We Are
          </h2>
          <p className="leading-relaxed text-[var(--muted)]">
            We are a team of professional movers, logistics specialists, and
            customer-care experts dedicated to delivering exceptional service.
            Every move is planned carefully, executed carefully, and completed
            with attention to detail.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            From residential homes to commercial offices and specialty
            commodities, we bring the same standard of care to every job.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-[var(--primary)]">
            Our Values
          </h3>
          <ul className="space-y-4">
            {[
              {
                title: "Integrity",
                text: "Honest communication and transparent pricing.",
              },
              {
                title: "Care",
                text: "Treat every item as if it were our own.",
              },
              {
                title: "Reliability",
                text: "Show up on time and deliver on promises.",
              },
              {
                title: "Excellence",
                text: "Continuous improvement in every process.",
              },
            ].map((v) => (
              <li key={v.title} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-xs font-bold text-white">
                  \u2713
                </span>
                <div>
                  <p className="font-medium text-[var(--primary)]">{v.title}</p>
                  <p className="text-sm text-[var(--muted)]">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
