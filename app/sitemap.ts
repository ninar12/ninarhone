import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work/myplantry", "/client-work", "/about", "/lab"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
  }));
}
