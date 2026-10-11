# ninarhone.com

Personal site for Nina Rhone. Next.js 15 (App Router) and Tailwind CSS 4, deployed on Vercel.

## Editing

- **Copy:** almost all text lives in `lib/content.ts`. The myplantry case study is written directly in `app/work/myplantry/page.tsx`.
- **Resume:** put the PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `lib/content.ts`. Resume links stay hidden until then.
- **Hand-drawn food drawings:** drop PNG or WebP files into `public/drawings/`. Up to six show under the hero, in filename order. With the folder empty, nothing shows.
- **Images:** project screenshots are in `public/images/`.

## Pages

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/work/myplantry` | myplantry case study |
| `/client-work` | Client work |
| `/about` | About |
| `/lab` | Smaller experiments |

Old URLs from the previous site (`/services`, `/resume`, `/myplantry` and the old project pages) redirect to the new pages. See `next.config.ts`.

## Running locally

```bash
npm install
npm run dev
```

## Deploying

Import the repo into Vercel. When the preview looks right, move the `ninarhone.com` domain from the old project to this one.
