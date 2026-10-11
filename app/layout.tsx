import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { home, site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: home.title,
  description: home.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: home.title,
    description: home.description,
    images: [{ url: "/images/nina.webp", width: 772, height: 780, alt: "Nina Rhone" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: home.title,
    description: home.description,
    images: ["/images/nina.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only rounded bg-pen px-3 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
