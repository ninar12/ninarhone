import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/work/myplantry", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/client-work", priority: 0.6 },
    { path: "/lab", priority: 0.5 },
  ];
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
