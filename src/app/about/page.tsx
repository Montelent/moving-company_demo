import type { Metadata } from "next";
import { client, aboutPageQuery } from "@/lib/sanity";

export const metadata: Metadata = { title: "About Us" };

const defaults = {
  eyebrow: "Our Story",
  title: "About LeSeft Moving",
  intro:
    "Founded with a simple mission — to make moving stress-free and reliable — LeSeft Moving has grown into a trusted partner for families and businesses alike.",
  whoWeAreTitle: "Who We Are",
  whoWeAreText: [
    "We are a team of professional movers, logistics specialists, and customer-care experts dedicated to delivering exceptional service. Every move is planned carefully, executed carefully, and completed with attention to detail.",
    "From residential homes to commercial offices and specialty commodities, we bring the same standard of care to every job.",
  ],
  valuesTitle: "Our Values",
  values: [
    { title: "Integrity", text: "Honest communication and transparent pricing." },
    { title: "Care", text: "Treat every item as if it were our own." },
    { title: "Reliability", text: "Show up on time and deliver on promises." },
    { title: "Excellence", text: "Continuous improvement in every process." },
  ],
};

function blocksToText(blocks: unknown): string[] {
  if (!Array.isArray(blocks) || !blocks.length) return [];
  return blocks
    .map((b: { children?: { text?: string }[] }) =>
      (b.children || []).map((c) => c.text || "").join("")
    )
    .filter(Boolean);
}

export default async function AboutPage() {
  const data = (await client.fetch(aboutPageQuery).catch(() => null)) || {};
  const c = { ...defaults, ...data };
  const bodyParas =
    blocksToText(data.whoWeAreBody).length > 0
      ? blocksToText(data.whoWeAreBody)
      : defaults.whoWeAreText;
  if (!c.values?.length) c.values = defaults.values;

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
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            {c.whoWeAreTitle}
          </h2>
          {bodyParas.map((p: string, i: number) => (
            <p key={i} className="leading-relaxed text-[var(--muted)]">
              {p}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-[var(--primary)]">
            {c.valuesTitle}
          </h3>
          <ul className="space-y-4">
            {c.values.map((v: { title: string; text: string }) => (
              <li key={v.title} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-xs font-bold text-white">
                  ✓
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
