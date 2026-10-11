import type { Metadata } from "next";
import { site } from "@/lib/content";

const TWITTER = "@ninar2424";
const DEFAULT_IMAGE = "/og.png";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
};

/** Title, description, canonical URL and link-preview tags for one page. */
export function pageMetadata({ title, description, path, image = DEFAULT_IMAGE, type = "website" }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER,
      images: [image],
    },
  };
}

const personId = `${site.url}/#person`;

/** Structured data that tells search engines who the site is about. No email, on purpose. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: site.name,
  url: site.url,
  image: `${site.url}/images/nina.webp`,
  jobTitle: "AI Solutions Architect",
  worksFor: { "@type": "Organization", name: "GUESS" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Massachusetts Institute of Technology" },
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  knowsAbout: [
    "Applied AI",
    "Large language models",
    "Retrieval-augmented generation",
    "Recommendation systems",
    "Machine learning",
    "Full-stack web development",
  ],
  sameAs: site.links.map((l) => l.href),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": personId },
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${site.url}/about`,
  mainEntity: { "@id": personId },
};

export const myplantryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "myplantry case study",
  description:
    "How myplantry reads receipts and fridge photos, works out when food expires, and suggests recipes for what needs using first.",
  url: `${site.url}/work/myplantry`,
  image: `${site.url}/og-myplantry.png`,
  author: { "@id": personId },
  about: {
    "@type": "SoftwareApplication",
    name: "myplantry",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: "https://www.myplantry.app",
  },
};
