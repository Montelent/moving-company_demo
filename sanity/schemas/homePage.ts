import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow (small label above title)",
      type: "string",
      initialValue: "Trusted Moving Experts",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title (first line)",
      type: "string",
      initialValue: "Move with Confidence.",
    }),
    defineField({
      name: "heroTitleHighlight",
      title: "Hero Title Highlight (colored line)",
      type: "string",
      initialValue: "Arrive with Care.",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Get a Free Quote",
    }),
    defineField({
      name: "heroPrimaryCtaLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "View Our Work",
    }),
    defineField({
      name: "heroSecondaryCtaLink",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "/projects",
    }),
    defineField({
      name: "featuresTitle",
      title: "Features Section Title",
      type: "string",
      initialValue: "Why Choose LeSeft?",
    }),
    defineField({
      name: "featuresSubtitle",
      title: "Features Section Subtitle",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "icon", type: "string", title: "Icon (emoji)" },
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        },
      ],
    }),
    defineField({
      name: "ctaTitle",
      title: "Bottom CTA Title",
      type: "string",
      initialValue: "Ready to Move?",
    }),
    defineField({
      name: "ctaDescription",
      title: "Bottom CTA Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaButtonText",
      title: "Bottom CTA Button Text",
      type: "string",
      initialValue: "Request a Quote",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "Bottom CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
