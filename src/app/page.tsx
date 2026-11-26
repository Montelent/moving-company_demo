import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[#1e4a7a] to-[var(--primary-light)] text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-200">
              Trusted Moving Experts
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Move with Confidence.{" "}
              <span className="text-[var(--accent)]">Arrive with Care.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              LeSeft Moving delivers professional residential, commercial, and
              long-distance moving services. Your belongings are in safe hands
              from the first box to the last mile.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] shadow-lg transition hover:bg-blue-50"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--primary)]">
            Why Choose LeSeft?
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Professional service built on reliability, care, and experience.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Licensed & Insured",
              desc: "Fully licensed movers with comprehensive insurance coverage for your peace of mind.",
              icon: "\ud83d\udee1\ufe0f",
            },
            {
              title: "Expert Handling",
              desc: "Trained crews that treat every item \u2014 from furniture to fragile commodities \u2014 with care.",
              icon: "\ud83d\udce6",
            },
            {
              title: "On-Time Delivery",
              desc: "Transparent scheduling and reliable arrival windows so you can plan with confidence.",
              icon: "\u23f0",
            },
            {
              title: "Local & Long Distance",
              desc: "Whether across town or across the country, we handle the logistics end to end.",
              icon: "\ud83d\ude9a",
            },
            {
              title: "Custom Solutions",
              desc: "Tailored packing, storage, and specialty moves for unique requirements.",
              icon: "\u2699\ufe0f",
            },
            {
              title: "Transparent Pricing",
              desc: "Clear quotes with no hidden fees. Know exactly what you\u2019re paying for.",
              icon: "\ud83d\udcac",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--primary)] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold">Ready to Move?</h2>
          <p className="mb-8 text-blue-100">
            Contact us today for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--primary-dark)] transition hover:bg-blue-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
