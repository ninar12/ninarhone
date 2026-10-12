// All site copy lives here so it can be edited without touching layout code.

export const site = {
  name: "Nina Rhone",
  url: "https://ninarhone.com",
  // Base64 of the contact address, decoded in the browser. Change it with: btoa("you@example.com")
  emailEncoded: "bmluYWpyMTFAaWNsb3VkLmNvbQ==",
  // Set to "/resume.pdf" after adding the file to /public. While null, resume links are hidden.
  resumeUrl: null as string | null,
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nina-rhone/" },
    { label: "GitHub", href: "https://github.com/ninar12" },
    { label: "Hugging Face", href: "https://huggingface.co/ninar12" },
    { label: "X", href: "https://twitter.com/ninar2424" },
  ],
};

export const home = {
  title: "Nina Rhone | Applied AI architect, Los Angeles",
  description:
    "Nina Rhone is an applied AI architect in Los Angeles who takes AI systems from prototype to production. AI Solutions Architect at GUESS, MIT grad.",
  headlineRole: "Applied AI architect.",
  headlineClaim: "I take AI systems from prototype to production.",
  subhead:
    "I like work where technology and creativity meet to solve a real problem. At GUESS, I helped start the AI program and build AI tools with teams from HR and Payroll to e-commerce. Before that: machine learning as a data analyst, full-stack engineering, and client websites. MIT, Computation and Cognition (joint computer science and neuroscience).",
  // Shown under the hero as a large figure with a short label.
  stats: [
    { figure: "1,000+", label: "GUESS employees use AI tools I helped roll out" },
    { figure: "2025", label: "Founding member of the GUESS Global AI Office" },
    { figure: "5", label: "Client sites shipped as NJR Solutions" },
  ],
  clientIntro:
    "I take on a small number of client projects through NJR Solutions. Five sites shipped so far.",
  clientClosing: "Have a project or website you need help with?",
  bio: "I studied Computation and Cognition, a joint computer science and neuroscience major, at MIT, then worked part-time as a full-stack engineer for a creative agency before joining GUESS as a data analyst in 2024. In 2025 GUESS leadership wanted to use AI to make everyday work less tedious, and asked for my findings. I wrote the report that recommended forming an AI team. That team became the Global AI Office, and I have been building its AI systems since. My side projects come from problems in my own life, like using up groceries before they expire. Outside work I bake, run Spartan races, draw and paint, and watch a lot of horror movies.",
  contactLine: "Working on applied AI, or have a project in mind?",
};

export type Project = {
  slug: string;
  status: string;
  title: string;
  body: string;
  stack: string;
  caseStudy?: string;
  live?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export const selectedWork: Project[] = [
  {
    slug: "guess",
    status: "GUESS, current role",
    title: "AI for search and recommendations at GUESS",
    body: "I build the AI systems behind product search and recommendations at GUESS. That includes an LLM pipeline that writes structured style attributes for thousands of products, and retrieval that combines keyword, vector and image search.",
    stack: "AWS (Bedrock, Lambda, OpenSearch Serverless), Python",
  },
  {
    slug: "myplantry",
    status: "In beta",
    title: "myplantry",
    body: "A pantry app that knows what is about to expire. Add food by receipt photo, fridge photo, handwritten list or manual entry, and it suggests recipes that use the soonest-expiring items first. Shelf life comes from a USDA FoodKeeper lookup, with a model estimate cached for anything the table misses. You can also ask an AI cooking assistant questions and keep a grocery list.",
    stack: "Next.js, Supabase Postgres (pg_trgm), Gemini",
    caseStudy: "/work/myplantry",
    live: "https://www.myplantry.app/dashboard",
    image: {
      src: "/images/myplantry.webp",
      alt: "The myplantry recipes screen, with a prompt box for nudging the recipe and a list of ingredients that expire soon",
      width: 1600,
      height: 625,
    },
  },
];

export type Client = {
  name: string;
  href: string;
  kind: string;
  needed: string;
  did: string;
  builtWith: string;
  image: { src: string; width: number; height: number };
};

export const clients: Client[] = [
  {
    name: "Arc Capital Partners",
    href: "https://arccapitalpartners.com/",
    kind: "Investment firm",
    needed: "A refresh of an aging WordPress site: colors, mobile layout, an updated portfolio",
    did: "Audited the site, resolved plugin conflicts, cleaned up legacy code and updated the templates",
    builtWith: "WordPress, Gravity Forms, WP Engine",
    image: { src: "/images/arc-capital.webp", width: 1600, height: 1203 },
  },
  {
    name: "BC Group",
    href: "https://bccentralamerica.com/",
    kind: "Global clothing brand",
    needed: "A brand-aligned welcome site with a working contact form, on a short timeline through an agency partner",
    did: "Built it on the Uncode theme with custom CSS and a contact form run by Google Apps Script",
    builtWith: "WordPress, Google Apps Script",
    image: { src: "/images/bc-group.webp", width: 1600, height: 989 },
  },
  {
    name: "Eastside Therapy Collective",
    href: "https://www.eastsidetherapycollective.com/muses-1",
    kind: "Therapy practice",
    needed: "A warm site that is easy to navigate for people looking for care",
    did: "Built the site plus an interactive “muses” page for the therapists’ writing",
    builtWith: "Wix",
    image: { src: "/images/eastside-therapy.webp", width: 1600, height: 864 },
  },
  {
    name: "Hilary MacGregor",
    href: "https://www.hilarymacgregor.com/",
    kind: "Therapist in Los Angeles",
    needed: "A personal brand and site that reflect her narrative approach",
    did: "Designed the brand identity, then built the site",
    builtWith: "Figma, Wix, custom CSS",
    image: { src: "/images/hilary-macgregor.webp", width: 1600, height: 1097 },
  },
  {
    name: "Jonathan Fernandez",
    href: "https://www.jonathan-fernandez.com/",
    kind: "Writer, producer and director",
    needed: "One place for his reel, teaching history and contact details",
    did: "Built the site around his reel",
    builtWith: "Squarespace, custom CSS",
    image: { src: "/images/jonathan-fernandez.webp", width: 1600, height: 1206 },
  },
];

export const clientPage = {
  title: "Client work | Nina Rhone",
  description:
    "Websites and small AI tools built by Nina Rhone through NJR Solutions, for a clothing brand, an investment firm, two therapy practices and a filmmaker.",
  intro:
    "I take on a few client projects at a time through NJR Solutions. So far that has meant websites for a clothing brand, an investment firm, two therapy practices and a filmmaker. I also build small AI tools for teams that do not have engineers of their own.",
  offers: [
    { title: "New websites", body: "Designed and built on WordPress, Wix, Squarespace or custom Next.js." },
    { title: "Refreshes and fixes", body: "Mobile layout, updated content, plugin conflicts and old code on a site you already have." },
    {
      title: "AI tools",
      body: "An assistant that answers questions from your own documents, or a workflow that takes over repetitive work like tagging, drafting or pulling data out of files.",
    },
  ],
  steps: [
    {
      title: "A free 30-minute call",
      body: "You tell me what you are trying to fix or build. I tell you what I would do and whether it is worth doing.",
    },
    { title: "A fixed-price proposal", body: "Scope, timeline and price in writing, with no open-ended retainer." },
    { title: "Build and launch", body: "I design, build and launch it with you." },
  ],
  closing: "Have a project or website you need help with?",
};

export const aboutPage = {
  title: "About | Nina Rhone",
  description:
    "Nina Rhone is an AI Solutions Architect at GUESS and a founding member of its Global AI Office. MIT, Computation and Cognition.",
  bio: [
    "I studied Computation and Cognition, a joint computer science and neuroscience major, at MIT. Then I worked part-time as a full-stack engineer for a creative agency, then joined GUESS as a data analyst in 2024.",
    "In 2025 GUESS leadership wanted to use AI to make everyday work less tedious, and asked for my findings. I wrote the report that recommended forming an AI team. That team became the Global AI Office, and I have been building its AI systems since. The work runs from requirements and architecture through the build, security review and vendor scoping, to getting people to actually use it.",
    "On the side I build websites for clients through NJR Solutions, plus personal projects that come from my own life. Outside work I bake, run Spartan races, draw and paint, and watch a lot of horror movies.",
  ],
  atGuess: [
    "Built an LLM pipeline that writes structured style attributes for thousands of products, feeding search and recommendations",
    "Helped roll out Copilot and ChatGPT Enterprise across the company; Copilot now has more than 1,000 active users",
    "Built AI automations for HR, Payroll and Internal Audit",
    "As a data analyst, built a classification model that assigns style personas to millions of customers, refreshed weekly",
  ],
  experience: [
    { role: "AI Solutions Architect, Global AI Office", when: "2025 to now", where: "GUESS, Los Angeles" },
    { role: "Data Analyst", when: "2024 to 2025", where: "GUESS, Los Angeles" },
    { role: "Full-stack engineer", where: "Patternbreak, Los Angeles" },
    { role: "Full-stack engineer", where: "Cashear, remote" },
    { role: "Product design and development", where: "AI4XRAY, University of Copenhagen" },
    { role: "Full-stack engineer", where: "Akello Health, San Francisco" },
    { role: "Full-stack engineer", where: "Conservation X Labs, San Francisco" },
    { role: "Data visualization", where: "HelpGuide, remote" },
    { role: "Front-end engineer", where: "Rivet, remote" },
    { role: "Research assistant", where: "MIT Media Lab, remote" },
    { role: "Research assistant", where: "MIT AgeLab" },
  ] as { role: string; when?: string; where: string }[],
  education: "MIT, B.S. in Computation and Cognition (joint computer science and neuroscience), 2023",
  skills: [
    {
      group: "AI",
      items: "LLM apps, retrieval and RAG, embeddings and vector search, guardrails, evaluation, LoRA fine-tuning, classical ML",
    },
    { group: "Models and platforms", items: "Claude, OpenAI, Gemini, AWS Bedrock, Hugging Face, Pinecone, Replicate" },
    {
      group: "Engineering",
      items:
        "Python, TypeScript, React, Next.js, FastAPI, Streamlit, SQL, Postgres and Supabase, AWS (Lambda, OpenSearch Serverless, DynamoDB, S3), GitHub Actions",
    },
    { group: "Websites and design", items: "WordPress, Wix, Squarespace, Figma" },
    { group: "Enterprise tools", items: "Copilot Studio, Power Automate" },
  ],
  closing: "Working on applied AI, or have a project in mind?",
};

export type Experiment = {
  name: string;
  href: string;
  what: string;
  builtWith: string;
  image: { src: string; width: number; height: number };
};

export const labPage = {
  title: "Lab | Nina Rhone",
  description: "Smaller projects by Nina Rhone, mostly built to learn something or for fun.",
  intro: "Smaller projects, mostly built to learn something or for fun.",
  experiments: [
    {
      name: "Black hairstyle LoRA",
      href: "https://replicate.com/ninar12/sdxlblackmalehairstyles",
      what: "An SDXL fine-tune trained on Creative Commons photos of Black men’s hairstyles, labeled with their real style names, because base Stable Diffusion gets them wrong.",
      builtWith: "SDXL, LoRA, Replicate",
      image: { src: "/images/lora.webp", width: 1600, height: 1090 },
    },
    {
      name: "Image prompt recipe",
      href: "https://patternbreak.ai",
      what: "A tool that turns image prompts into a repeatable formula, with a generator built on a model fine-tuned on Midjourney prompts. Built for Patternbreak.",
      builtWith: "Next.js, Hugging Face, fal.ai",
      image: { src: "/images/prompt-recipe.webp", width: 1600, height: 1064 },
    },
    {
      name: "Aesthetics Wiki dataset",
      href: "https://huggingface.co/datasets/ninar12/aesthetics-wiki",
      what: "About 400 online aesthetic subcultures, scraped, cleaned and tagged with color palettes and iconography.",
      builtWith: "Python, pandas, Hugging Face Datasets",
      image: { src: "/images/aesthetics-wiki.webp", width: 1600, height: 792 },
    },
    {
      name: "DBT skills chatbot",
      href: "https://www.coze.com/store/agent/7359282529574060037",
      what: "A chatbot grounded in a free DBT workbook, for recalling and practicing skills day to day.",
      builtWith: "Coze",
      image: { src: "/images/dbt-chatbot.webp", width: 1600, height: 1043 },
    },
    {
      name: "The People’s Princess",
      href: "https://the-peoples-princess.vercel.app",
      what: "A neighborhood mutual aid bulletin with a submission flow, moderation rules and shareable postcard templates.",
      builtWith: "Next.js",
      image: { src: "/images/peoples-princess.webp", width: 1600, height: 1194 },
    },
    {
      name: "In & Out generator",
      href: "https://in-and-out-generator.vercel.app",
      what: "Make and share your own yearly in and out list, in a Windows 95 interface.",
      builtWith: "React, React95",
      image: { src: "/images/in-out.webp", width: 1600, height: 1221 },
    },
    {
      name: "Pomodoro timer",
      href: "https://lana-pomodoro-timer.netlify.app/",
      what: "A study timer with my hand-drawn illustrations that plays Lana Del Rey songs at each interval.",
      builtWith: "React",
      image: { src: "/images/pomodoro.webp", width: 1600, height: 1176 },
    },
  ] as Experiment[],
};
