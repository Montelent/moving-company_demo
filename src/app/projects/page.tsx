import type { Metadata } from "next";
import { client, projectsPageQuery, projectsQuery } from "@/lib/sanity";

export const metadata: Metadata = { title: "Projects" };

const defaultProjects = [
  {
    title: "Downtown Office Relocation",
    category: "Commercial",
    summary:
      "Full office move for a 40-person tech team. Completed over a weekend with zero downtime on Monday morning.",
  },
  {
    title: "Family Home – Cross-State Move",
    category: "Residential",
    summary:
      "Three-bedroom house relocated 800 miles. Full packing, specialty item handling, and unpacking at destination.",
  },
  {
    title: "Art Gallery Collection Transport",
    category: "Specialty",
    summary:
      "Climate-controlled transport of a private art collection including large canvases and fragile sculptures.",
  },
  {
    title: "Warehouse Inventory Transfer",
    category: "Commercial",
    summary:
      "Coordinated multi-truck move of inventory and racking systems between two distribution centers.",
  },
  {
    title: "Apartment Complex Bulk Move",
    category: "Residential",
    summary:
      "Managed simultaneous moves for 12 units during a building renovation window.",
  },
  {
    title: "Piano & Antique Furniture",
    category: "Specialty",
    summary:
      "White-glove service for a grand piano and heirloom furniture pieces with custom crating.",
  },
];

const defaults = {
  eyebrow: "Our Work",
  title: "Recent Projects",
  intro:
    "A selection of moves we’ve completed. Manage these from Sanity Studio.",
};

export default async function ProjectsPage() {
  const [pageData, projects] = await Promise.all([
    client.fetch(projectsPageQuery).catch(() => null),
    client.fetch(projectsQuery).catch(() => null),
  ]);
  const c = { ...defaults, ...(pageData || {}) };
  const list =
    Array.isArray(projects) && projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary-light)]">
          {c.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-[var(--primary)]">{c.title}</h1>
        <p className="text-lg leading-relaxed text-[var(--muted)]">{c.intro}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(
          (p: { title: string; category?: string; summary?: string }) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition hover:shadow-md"
            >
              <div className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
              <div className="p-6">
                {p.category && (
                  <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium capitalize text-[var(--primary)]">
                    {p.category}
                  </span>
                )}
                <h2 className="mb-2 text-lg font-semibold text-[var(--primary)]">
                  {p.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {p.summary}
                </p>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}
