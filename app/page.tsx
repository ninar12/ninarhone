import Image from "next/image";
import Link from "next/link";
import { Drawings } from "@/components/Drawings";
import { EmailBlock } from "@/components/Email";
import { clients, home, selectedWork, site } from "@/lib/content";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Hero: the role in heavy type, the claim in light type at the same size. */}
      <section aria-labelledby="intro" className="pt-14 pb-16 md:pt-24 md:pb-20">
        <h1
          id="intro"
          className="max-w-[17ch] text-[clamp(2.5rem,6.6vw,5.25rem)] leading-[1.02] tracking-[-0.035em] md:max-w-[21ch]"
        >
          <span className="block font-extrabold">{home.headlineRole}</span>
          <span className="block font-normal">{home.headlineClaim}</span>
        </h1>
        <p className="mt-8 max-w-[38rem] text-[1.1875rem] leading-[1.55] text-muted">{home.subhead}</p>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#work"
            className="rounded-md bg-pen px-5 py-3 text-[1rem] font-semibold text-white hover:bg-pen-dark"
          >
            See the work
          </a>
          <a href={`mailto:${site.email}`} className="link text-[1rem] font-semibold">
            Email me
          </a>
          {site.resumeUrl ? (
            <a href={site.resumeUrl} className="link text-[1rem] font-semibold">
              Resume (PDF)
            </a>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-3 border-t border-rule pt-6 text-[0.9375rem] md:grid-cols-3">
          {home.facts.map((f) => (
            <li key={f} className="max-w-[22rem]">
              {f}
            </li>
          ))}
        </ul>
        <Drawings className="mt-10" />
      </section>

      {/* Selected work */}
      <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 pt-6">
        <SectionHeading id="work-heading">Selected work</SectionHeading>
        <div className="mt-8">
          {selectedWork.map((p) => (
            <article
              key={p.slug}
              className="grid gap-x-12 gap-y-4 border-t border-rule py-10 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]"
            >
              <div>
                <p className="text-[0.9375rem] font-semibold text-pen">{p.status}</p>
                <h3 className="mt-1 text-[1.5rem] leading-tight font-bold tracking-[-0.015em]">
                  {p.caseStudy ? (
                    <Link href={p.caseStudy} className="hover:text-pen">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
              </div>
              <div>
                <p className="max-w-[40rem]">{p.body}</p>
                <p className="mt-3 text-[0.9375rem] text-muted">Built with {p.stack}</p>
                {p.caseStudy || p.live ? (
                  <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-semibold">
                    {p.caseStudy ? (
                      <Link href={p.caseStudy} className="link">
                        Read the case study
                      </Link>
                    ) : null}
                    {p.live ? (
                      <a href={p.live} className="link" target="_blank" rel="noopener">
                        Try it
                      </a>
                    ) : null}
                  </p>
                ) : null}
                {p.image ? (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="mt-7 w-full rounded-lg border border-rule"
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <p className="border-t border-rule pt-6">
          <Link href="/lab" className="link font-semibold">
            More experiments in the Lab
          </Link>
        </p>
      </section>

      {/* Client work */}
      <section aria-labelledby="clients-heading" className="pt-24">
        <SectionHeading id="clients-heading">Client work</SectionHeading>
        <p className="mt-3 max-w-[40rem] text-muted">{home.clientIntro}</p>

        <ul className="mt-8 md:hidden">
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

        <table className="mt-8 hidden w-full border-collapse text-left md:table">
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
          <a href={`mailto:${site.email}`} className="link font-semibold">
            Email me
          </a>
          , or{" "}
          <Link href="/client-work" className="link font-semibold">
            see how a project works
          </Link>
          .
        </p>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="pt-24">
        <SectionHeading id="about-heading">About</SectionHeading>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
          <Image
            src="/images/nina.webp"
            alt="Portrait of Nina Rhone"
            width={772}
            height={780}
            sizes="128px"
            className="h-32 w-32 shrink-0 rounded-full object-cover"
          />
          <div className="max-w-[40rem]">
            <p>{home.bio}</p>
            <p className="mt-4">
              <Link href="/about" className="link font-semibold">
                More about me
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="pt-24">
        <EmailBlock id="contact" line={home.contactLine} />
      </div>
    </div>
  );
}
