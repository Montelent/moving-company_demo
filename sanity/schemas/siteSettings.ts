import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site / Company Name",
      type: "string",
      initialValue: "LeSeft Moving",
    }),
    defineField({
      name: "title",
      title: "Browser Tab Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description (SEO)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "string",
      initialValue: "Mon – Sat: 8:00 AM – 6:00 PM",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer Tagline",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
