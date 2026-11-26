import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "Get in Touch",
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "intro",
      title: "Intro Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "formNote",
      title: "Form Footer Note",
      type: "string",
    }),
    defineField({
      name: "sidebarTitle",
      title: "Sidebar Title",
      type: "string",
      initialValue: "Reach Us Directly",
    }),
    defineField({
      name: "callbackTitle",
      title: "Callback Box Title",
      type: "string",
      initialValue: "Prefer a callback?",
    }),
    defineField({
      name: "callbackText",
      title: "Callback Box Text",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
