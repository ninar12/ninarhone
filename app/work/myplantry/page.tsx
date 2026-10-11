import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { myplantryJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "myplantry case study | Nina Rhone",
  description:
    "How myplantry reads receipts and fridge photos, works out when food expires, and suggests recipes for what needs using first.",
  path: "/work/myplantry",
  image: "/og-myplantry.png",
  type: "article",
});

export default function MyplantryCaseStudy() {
  return (
    <article className="mx-auto max-w-6xl px-6 md:px-10">
      <JsonLd data={myplantryJsonLd} />
      <header className="pt-12 pb-10 md:pt-20">
        <p className="text-[0.9375rem]">
          <Link href="/#work" className="link">
            Selected work
          </Link>
        </p>
        <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          myplantry
        </h1>
        <p className="mt-4 max-w-[34rem] text-[clamp(1.25rem,2.4vw,1.625rem)] leading-snug tracking-[-0.01em]">
          Photograph your receipt, and get recipes for what is about to expire.
        </p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] text-muted">
          <a href="https://www.myplantry.app/dashboard" className="link font-semibold" target="_blank" rel="noopener">
            Try it
          </a>
          <span>In beta</span>
          <span>2026</span>
        </p>
      </header>

      <Image
        src="/images/myplantry.webp"
        alt="The myplantry recipes screen, with a prompt box for nudging the recipe and a list of ingredients that expire soon"
        width={1600}
        height={625}
        priority
        sizes="(min-width: 1152px) 1072px, 100vw"
        className="w-full rounded-lg border border-rule"
      />

      <div className="article mt-4">
        <h2>The problem</h2>
        <p>
          I kept buying food I already had and throwing out food I forgot about. Deciding what to cook meant opening
          the fridge and guessing. I wanted an app that knew what was in my kitchen and what needed using first.
        </p>

        <h2>What it does</h2>
        <p>
          myplantry keeps an inventory of your kitchen and tracks when each item will go bad. It suggests recipes built
          from what you have, starting with the items closest to expiring. You can also ask Kitchen AI, a cooking
          assistant, questions while you cook, and build a grocery list.
        </p>

        <h2>Getting food in</h2>
        <p>There are four ways to add food, and three of them are a photo.</p>
        <ul>
          <li>
            <strong>Receipt photo.</strong> Gemini reads the line items and decodes abbreviations like
            &ldquo;CHKN BRST&rdquo;.
          </li>
          <li>
            <strong>Fridge or pantry photo.</strong> Gemini identifies the items it can see.
          </li>
          <li>
            <strong>Handwritten list.</strong> A photo of the list is transcribed into inventory.
          </li>
          <li>
            <strong>Manual entry.</strong>
          </li>
        </ul>
        <p>Recipes can be imported from a URL or from pasted text.</p>

        <h2>Knowing what expires</h2>
        <ol>
          <li>
            Each item you type in or buy from your grocery list is fuzzy-matched with <code>pg_trgm</code> against a
            433-row table seeded from USDA FoodKeeper data.
          </li>
          <li>If nothing matches, Gemini estimates the shelf life.</li>
          <li>
            That estimate is saved back to the table, so the next person who adds the same food gets a plain lookup
            with no model call.
          </li>
        </ol>
        <p>
          The date also depends on where the food is kept. The same item gets a different shelf life in the fridge, the
          pantry or the freezer, and the date is recalculated when you mark it as opened.
        </p>
        <p>
          Photo scans are the exception. The vision model estimates shelf life in the same call that reads the photo.
        </p>

        <h2>Suggesting recipes</h2>
        <p>
          Recipe generation is one Gemini call with no agent loop. The prompt carries the full pantry with expiration
          dates, the user&rsquo;s dietary and cuisine preferences, and the titles of their last 10 saved recipes so
          suggestions do not repeat. Guardrails in the prompt force a recognizable dish and block invented combinations
          such as vinegar pasta. The prompt asks for raw JSON, and the reply is cleaned and parsed before anything is
          shown.
        </p>

        <h2>Keeping AI cost under control</h2>
        <p>
          Every AI feature runs on my Gemini budget, so each one has a per-user daily cap, and each user has a
          per-minute limit across all of them. The check and the usage record happen in one Postgres function behind a
          per-user lock, so parallel requests cannot slip past the cap. I get an alert when one account passes 30 AI
          calls in an hour.
        </p>

        <h2>When the model fails</h2>
        <ul>
          <li>
            <strong>Shelf life.</strong> The model fallback times out after 10 seconds, and the item gets a default
            date instead of none.
          </li>
          <li>
            <strong>Cooking assistant.</strong> A failed call returns a plain &ldquo;try again in a moment&rdquo;
            message.
          </li>
          <li>
            <strong>Parsing.</strong> Replies are stripped of code fences and parsed defensively, so a malformed reply
            gives an empty result, not a crash.
          </li>
        </ul>

        <h2>Data and sign-in</h2>
        <p>
          Next.js App Router route handlers serve the API on top of Supabase Postgres. Tables use row-level security,
          and every API route checks the session on the server. NextAuth handles Google sign-in and email and password.
        </p>

        <h2>Tests</h2>
        <p>
          The repo has 11 test files. They cover pantry state, saved recipes, the pantry and recipe API routes, sign-up
          and login, and AI response parsing. GitHub Actions runs the type-check, lint, tests and a production build on
          pushes and pull requests to the main branches.
        </p>

        <h2>What I learned and had to decide</h2>
        <ul>
          <li>
            <strong>Steering the recipe.</strong> The first version had one button that generated a recipe from the
            pantry. Sometimes I wanted a particular kind of dish and had no way to say so. I added an optional text box
            for a nudge like &ldquo;something cozy&rdquo; or &ldquo;30-minute meal&rdquo;. The prompt treats it as
            guidance and still favors what expires soonest.
          </li>
          <li>
            <strong>Using part of something.</strong> Testing with my aunt raised a question I had not thought about:
            if you have three bags of rice and have used half of one, how do you say that? Quantity can now be a
            fraction. A &ldquo;Used how much?&rdquo; menu takes 25, 50, 75 or 100 percent of one unit, or a custom
            amount, so three bags become 2.5. Finishing a unit moves on to the next one with a fresh date.
          </li>
          <li>
            <strong>Adding a grocery list.</strong> Updating the pantry is the moment you notice what you are missing,
            so the grocery list belongs right next to it. Marking an item as bought moves it into the pantry with an
            expiry date.
          </li>
          <li>
            <strong>Drawing the food myself.</strong> The food emojis on the landing page are ones I drew by hand on my
            iPad, in place of a stock icon set.
          </li>
        </ul>

        <h2>Stack</h2>
        <p>Next.js, Supabase Postgres (pg_trgm), Gemini (vision and text), NextAuth, Vercel, Vitest, GitHub Actions.</p>
      </div>
    </article>
  );
}
