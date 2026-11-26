import { defineType, defineField } from "sanity";

export const commoditiesPage = defineType({
  name: "commoditiesPage",
  title: "Commodities Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "What We Move",
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Commodities & Services",
    }),
    defineField({
      name: "intro",
      title: "Intro Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
      initialValue: "Need a custom solution?",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Contact Us",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Commodities Page" }),
  },
});
