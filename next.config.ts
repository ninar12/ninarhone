import type { NextConfig } from "next";

// Old ninarhone.com URLs keep working after the redesign.
const lab = ["lora", "stable", "aesthetics-wiki", "dbt-chatbot", "in-out", "pomodoro", "the-peoples-princess"];
const clientPages = ["arc-capital-partners", "bc", "eastside-therapy-collective", "hilary", "jonathan"];
const retired = ["horror-recs", "obscure-horror-curator", "guess-ai-stylist", "black-friday-ai-deal-hunter"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/client-work", permanent: true },
      { source: "/resume", destination: "/about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/myplantry", destination: "/work/myplantry", permanent: true },
      ...lab.map((s) => ({ source: `/${s}`, destination: "/lab", permanent: true })),
      ...clientPages.map((s) => ({ source: `/${s}`, destination: "/client-work", permanent: true })),
      ...retired.map((s) => ({ source: `/${s}`, destination: "/", permanent: false })),
    ];
  },
};

export default nextConfig;
