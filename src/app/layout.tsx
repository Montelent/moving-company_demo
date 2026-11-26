import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client, siteSettingsQuery } from "@/lib/sanity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LeSeft Moving | Professional Moving Services",
    template: "%s | LeSeft Moving",
  },
  description:
    "Reliable, professional moving company. Residential, commercial, and long-distance moves with care and expertise.",
};

async function getSettings() {
  try {
    return await client.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();
  const siteName = settings?.siteName || "LeSeft Moving";
  const initials = siteName
    .split(/\s+/)
    .map((w: string) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header siteName={siteName} initials={initials} />
        <main className="flex-1">{children}</main>
        <Footer
          siteName={siteName}
          initials={initials}
          phone={settings?.phone}
          email={settings?.email}
          hours={settings?.hours}
          footerTagline={settings?.footerTagline}
        />
      </body>
    </html>
  );
}
