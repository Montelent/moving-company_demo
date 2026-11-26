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

export const homePageQuery = `*[_type == "homePage"][0]{
  heroEyebrow, heroTitle, heroTitleHighlight, heroDescription,
  heroPrimaryCta, heroPrimaryCtaLink, heroSecondaryCta, heroSecondaryCtaLink,
  featuresTitle, featuresSubtitle, features,
  ctaTitle, ctaDescription, ctaButtonText, ctaButtonLink
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  eyebrow, title, intro, whoWeAreTitle, whoWeAreBody, valuesTitle, values
}`;

export const commoditiesPageQuery = `*[_type == "commoditiesPage"][0]{
  eyebrow, title, intro, ctaTitle, ctaDescription, ctaButtonText
}`;

export const projectsPageQuery = `*[_type == "projectsPage"][0]{
  eyebrow, title, intro
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  eyebrow, title, intro, formNote, sidebarTitle, callbackTitle, callbackText
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName, title, description, phone, email, address, hours, footerTagline
}`;

export const projectsQuery = `*[_type == "project"] | order(completedAt desc) {
  _id, title, "slug": slug.current, category, summary, mainImage, completedAt
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id, title, "slug": slug.current, description, icon
}`;
