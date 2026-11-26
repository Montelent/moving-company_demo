import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commodities & Services",
};

const services = [
  {
    title: "Residential Moving",
    description:
      "Complete home relocation services including packing, loading, transport, and unloading. We handle apartments, houses, and multi-story residences.",
  },
  {
    title: "Commercial Moving",
    description:
      "Office and business relocations with minimal downtime. Desk systems, equipment, and inventory moved efficiently and securely.",
  },
  {
    title: "Long-Distance Moves",
    description:
      "Cross-city and cross-country transport with tracking, dedicated crews, and scheduled delivery windows.",
  },
  {
    title: "Specialty Commodities",
    description:
      "Fragile items, antiques, art, pianos, and high-value goods. Custom crating and white-glove handling available.",
  },
  {
    title: "Packing & Unpacking",
    description:
      "Professional packing materials and services. Full or partial packing options tailored to your needs.",
  },
  {
    title: "Storage Solutions",
    description:
      "Short- and long-term secure storage for furniture and belongings during transitions or renovations.",
  },
];

export default function CommoditiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary-light)]">
          What We Move
        </p>
        <h1 className="mb-6 text-4xl font-bold text-[var(--primary)]">
          Commodities & Services
        </h1>
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          From everyday household goods to specialty commodities, LeSeft Moving
          provides end-to-end solutions designed around your timeline and
          requirements.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-[var(--primary-light)] hover:shadow-md"
          >
            <h2 className="mb-3 text-lg font-semibold text-[var(--primary)]">
              {s.title}
            </h2>
            <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-[var(--primary)] px-8 py-10 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold">Need a custom solution?</h2>
        <p className="mb-6 text-blue-100">
          Tell us about your move and we\u2019ll build a plan that fits.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-blue-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
