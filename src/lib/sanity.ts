import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Example GROQ queries for future use
export const projectsQuery = `*[_type == "project"] | order(completedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  summary,
  mainImage,
  completedAt
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  icon
}`;
