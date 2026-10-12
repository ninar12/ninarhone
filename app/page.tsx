import Image from "next/image";
import Link from "next/link";
import { Drawings } from "@/components/Drawings";
import { EmailBlock } from "@/components/Email";
import { EmailLink } from "@/components/ProtectedEmail";
import { JsonLd } from "@/components/JsonLd";
import { PillLabel, Tags, splitStack } from "@/components/PillLabel";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { clients, home, selectedWork, site } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <JsonLd data={[personJsonLd, websiteJsonLd]} />

      {/* Hero: headline left, portrait card top right. */}
      <section aria-labelledby="intro" className="pt-8 pb-16 md:pt-14 md:pb-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <Image
            src="/images/nina.webp"
            alt="Portrait of Nina Rhone"
            width={772}
            height={780}
            priority
            sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 112px"
            className="aspect-[4/5] w-28 rounded-2xl object-cover object-top md:order-last md:w-full"
          />
          <h1
            id="intro"
            className="max-w-[17ch] self-end text-[clamp(2.5rem,6.6vw,5.25rem)] leading-[1.02] tracking-[-0.035em] md:max-w-[19ch]"
          >
            <span className="block font-extrabold">{home.headlineRole}</span>
            <span className="block font-normal">{home.headlineClaim}</span>
          </h1>
        </div>

        <p className="mt-10 max-w-[40rem] text-[1.1875rem] leading-[1.55] text-muted">{home.subhead}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-[1rem] font-semibold text-white transition-colors hover:bg-pen"
          >
            See the work
          </a>
          <EmailLink className="rounded-full border border-ink/20 px-6 py-3 text-[1rem] font-semibold transition-colors hover:border-ink">
            Email me
          </EmailLink>
          {site.resumeUrl ? (
            <a
              href={site.resumeUrl}
              className="rounded-full border border-ink/20 px-6 py-3 text-[1rem] font-semibold transition-colors hover:border-ink"
            >
              Resume (PDF)
            </a>
          ) : null}
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-6 border-t border-rule pt-8 sm:grid-cols-3">
          {home.stats.map((s) => (
            <li key={s.label}>
              <p className="text-[clamp(2.25rem,4.4vw,3.25rem)] leading-none font-medium tracking-[-0.03em]">
                {s.figure}
              </p>
              <p className="mt-3 max-w-[16rem] text-[0.9375rem] leading-snug text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
        <Drawings className="mt-10" />
      </section>

      {/* Selected work: one rounded card per project. */}
      <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 pt-6">
        <PillLabel id="work-heading">Selected work</PillLabel>
        <div className="mt-6 space-y-5">
          {selectedWork.map((p) => (
            <article
              key={p.slug}
              className="grid gap-x-12 gap-y-5 rounded-3xl bg-wash p-6 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:p-10"
            >
              <div>
                <p className="text-[0.9375rem] font-semibold text-pen">{p.status}</p>
                <h3 className="mt-1 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight font-bold tracking-[-0.02em]">
                  {p.caseStudy ? (
                    <Link href={p.caseStudy} className="hover:text-pen">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
                {p.caseStudy || p.live ? (
                  <p className="mt-6 flex flex-wrap gap-2">
                    {p.caseStudy ? (
                      <Link
                        href={p.caseStudy}
                        className="rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-pen"
                      >
                        Read the case study
                      </Link>
                    ) : null}
                    {p.live ? (
                      <a
                        href={p.live}
                        className="rounded-full border border-ink/20 bg-paper px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:border-ink"
                        target="_blank"
                        rel="noopener"
                      >
                        Try it
                      </a>
                    ) : null}
                  </p>
                ) : null}
              </div>
              <div>
                <p className="max-w-[40rem]">{p.body}</p>
                <Tags items={splitStack(p.stack)} className="mt-5" />
                {p.image ? (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="mt-7 w-full rounded-2xl border border-rule"
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/lab" className="link font-semibold">
            More experiments in the Lab
          </Link>
        </p>
      </section>

      {/* Client work */}
      <section aria-labelledby="clients-heading" className="pt-24">
        <PillLabel id="clients-heading">Client work</PillLabel>
        <p className="mt-5 max-w-[34rem] text-[clamp(1.5rem,3vw,2.125rem)] leading-[1.2] tracking-[-0.02em]">
          {home.clientIntro}
        </p>

        <ul className="mt-10 md:hidden">
          {clients.map((c) => (
            <li key={c.name} className="border-t border-rule py-5">
              <a href={c.href} className="link font-semibold" target="_blank" rel="noopener">
                {c.name}
              </a>
              <p className="text-[0.9375rem] text-muted">{c.kind}</p>
              <p className="mt-2">{c.did}</p>
            </li>
          ))}
        </ul>

        <table className="mt-10 hidden w-full border-collapse text-left md:table">
          <thead>
            <tr className="text-[0.9375rem] text-muted">
              <th scope="col" className="w-[26%] pb-3 font-medium">
                Client
              </th>
              <th scope="col" className="w-[37%] pb-3 pr-8 font-medium">
                What they needed
              </th>
              <th scope="col" className="pb-3 font-medium">
                What I delivered
              </th>
            </tr>
          </thead>
          <tbody className="align-top">
            {clients.map((c) => (
              <tr key={c.name} className="border-t border-rule">
                <th scope="row" className="py-5 pr-8 font-normal">
                  <a href={c.href} className="link font-semibold" target="_blank" rel="noopener">
                    {c.name}
                  </a>
                  <span className="block text-[0.9375rem] text-muted">{c.kind}</span>
                </th>
                <td className="py-5 pr-8">{c.needed}</td>
                <td className="py-5">{c.did}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-rule pt-6">
          {home.clientClosing}{" "}
          <EmailLink className="link font-semibold">Email me</EmailLink>
          , or{" "}
          <Link href="/client-work" className="link font-semibold">
            see how a project works
          </Link>
          .
        </p>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="pt-24">
        <PillLabel id="about-heading">About</PillLabel>
        <div className="mt-5 max-w-[42rem]">
          <p>{home.bio}</p>
          <p className="mt-4">
            <Link href="/about" className="link font-semibold">
              More about me
            </Link>
          </p>
        </div>
      </section>

      <div className="pt-24">
        <EmailBlock id="contact" line={home.contactLine} />
      </div>
    </div>
  );
}
