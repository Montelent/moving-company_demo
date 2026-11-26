import Link from "next/link";
import { client, homePageQuery } from "@/lib/sanity";

const defaults = {
  heroEyebrow: "Trusted Moving Experts",
  heroTitle: "Move with Confidence.",
  heroTitleHighlight: "Arrive with Care.",
  heroDescription:
    "LeSeft Moving delivers professional residential, commercial, and long-distance moving services. Your belongings are in safe hands from the first box to the last mile.",
  heroPrimaryCta: "Get a Free Quote",
  heroPrimaryCtaLink: "/contact",
  heroSecondaryCta: "View Our Work",
  heroSecondaryCtaLink: "/projects",
  featuresTitle: "Why Choose LeSeft?",
  featuresSubtitle:
    "Professional service built on reliability, care, and experience.",
  features: [
    {
      title: "Licensed & Insured",
      description:
        "Fully licensed movers with comprehensive insurance coverage for your peace of mind.",
      icon: "🛡️",
    },
    {
      title: "Expert Handling",
      description:
        "Trained crews that treat every item — from furniture to fragile commodities — with care.",
      icon: "📦",
    },
    {
      title: "On-Time Delivery",
      description:
        "Transparent scheduling and reliable arrival windows so you can plan with confidence.",
      icon: "⏰",
    },
    {
      title: "Local & Long Distance",
      description:
        "Whether across town or across the country, we handle the logistics end to end.",
      icon: "🚚",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored packing, storage, and specialty moves for unique requirements.",
      icon: "⚙️",
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear quotes with no hidden fees. Know exactly what you’re paying for.",
      icon: "💬",
    },
  ],
  ctaTitle: "Ready to Move?",
  ctaDescription: "Contact us today for a free, no-obligation quote.",
  ctaButtonText: "Request a Quote",
  ctaButtonLink: "/contact",
};

export default async function HomePage() {
  const data = (await client.fetch(homePageQuery).catch(() => null)) || {};
  const c = { ...defaults, ...data };
  if (!c.features?.length) c.features = defaults.features;

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[#1e4a7a] to-[var(--primary-light)] text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-200">
              {c.heroEyebrow}
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {c.heroTitle}{" "}
              <span className="text-[var(--accent)]">{c.heroTitleHighlight}</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              {c.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={c.heroPrimaryCtaLink || "/contact"}
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] shadow-lg transition hover:bg-blue-50"
              >
                {c.heroPrimaryCta}
              </Link>
              <Link
                href={c.heroSecondaryCtaLink || "/projects"}
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {c.heroSecondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--primary)]">
            {c.featuresTitle}
          </h2>
          <p className="mt-3 text-[var(--muted)]">{c.featuresSubtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {c.features.map(
            (item: { title: string; description: string; icon?: string }) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{item.icon || "✨"}</div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-[var(--primary)] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold">{c.ctaTitle}</h2>
          <p className="mb-8 text-blue-100">{c.ctaDescription}</p>
          <Link
            href={c.ctaButtonLink || "/contact"}
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--primary-dark)] transition hover:bg-blue-300"
          >
            {c.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
