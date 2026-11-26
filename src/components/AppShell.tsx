"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Settings = {
  siteName?: string;
  phone?: string;
  email?: string;
  hours?: string;
  footerTagline?: string;
};

export default function AppShell({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: Settings | null;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  const siteName = settings?.siteName || "LeSeft Moving";
  const initials = siteName
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Sanity Studio needs a clean full-viewport shell — no site header/footer
  if (isStudio) {
    return <div className="fixed inset-0 z-50 overflow-auto bg-white">{children}</div>;
  }

  return (
    <>
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
    </>
  );
}
