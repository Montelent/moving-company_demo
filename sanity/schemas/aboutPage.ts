import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "Our Story",
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "About LeSeft Moving",
    }),
    defineField({
      name: "intro",
      title: "Intro Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whoWeAreTitle",
      title: "Who We Are Title",
      type: "string",
      initialValue: "Who We Are",
    }),
    defineField({
      name: "whoWeAreBody",
      title: "Who We Are Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "valuesTitle",
      title: "Values Section Title",
      type: "string",
      initialValue: "Our Values",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "text", type: "string", title: "Description" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
});
