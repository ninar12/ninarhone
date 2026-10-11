import type { Metadata } from "next";
import Image from "next/image";
import { EmailBlock } from "@/components/Email";
import { aboutPage, site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { aboutJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: aboutPage.title,
  description: aboutPage.description,
  path: "/about",
  type: "profile",
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <JsonLd data={[aboutJsonLd, personJsonLd]} />
      <header className="flex flex-col gap-8 pt-12 pb-12 md:flex-row md:items-end md:justify-between md:pt-20">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">About</h1>
        <Image
          src="/images/nina.webp"
          alt="Portrait of Nina Rhone"
          width={772}
          height={780}
          priority
          sizes="160px"
          className="h-40 w-40 rounded-full object-cover"
        />
      </header>

      <div className="max-w-[40rem] space-y-5 text-[1.125rem] leading-[1.65]">
        {aboutPage.bio.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <section aria-labelledby="guess-heading" className="pt-20">
        <H2 id="guess-heading">At GUESS</H2>
        <ul className="mt-6 max-w-[44rem] border-t border-rule">
          {aboutPage.atGuess.map((item) => (
            <li key={item} className="border-b border-rule py-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-heading" className="pt-20">
        <H2 id="experience-heading">Experience</H2>
        <table className="mt-6 w-full max-w-[52rem] border-collapse text-left">
          <thead className="sr-only">
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Where</th>
            </tr>
          </thead>
          <tbody>
            {aboutPage.experience.map((e) => (
              <tr key={e.role + e.where} className="border-t border-rule align-top">
                <td className="py-4 pr-6">
                  <span className="font-semibold">{e.role}</span>
                  {e.when ? <span className="block text-[0.9375rem] text-muted">{e.when}</span> : null}
                </td>
                <td className="py-4 text-muted">{e.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section aria-labelledby="education-heading" className="pt-20">
        <H2 id="education-heading">Education</H2>
        <p className="mt-4 max-w-[40rem]">{aboutPage.education}</p>
      </section>

      <section aria-labelledby="skills-heading" className="pt-20">
        <H2 id="skills-heading">Skills</H2>
        <dl className="mt-6 max-w-[52rem] border-t border-rule">
          {aboutPage.skills.map((s) => (
            <div key={s.group} className="grid gap-1 border-b border-rule py-4 md:grid-cols-[12rem_1fr] md:gap-6">
              <dt className="font-semibold">{s.group}</dt>
              <dd className="text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="links-heading" className="pt-20">
        <H2 id="links-heading">Elsewhere</H2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
          {site.resumeUrl ? (
            <li>
              <a href={site.resumeUrl} className="link">
                Resume (PDF)
              </a>
            </li>
          ) : null}
          {site.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link" target="_blank" rel="me noopener">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-24">
        <EmailBlock line={aboutPage.closing} />
      </div>
    </div>
  );
}
