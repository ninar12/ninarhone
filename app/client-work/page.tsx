import type { Metadata } from "next";
import Image from "next/image";
import { EmailBlock } from "@/components/Email";
import { clientPage, clients } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: clientPage.title,
  description: clientPage.description,
  path: "/client-work",
});

export default function ClientWorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <header className="pt-12 pb-12 md:pt-20">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          Client work
        </h1>
        <p className="mt-6 max-w-[38rem] text-[1.1875rem] leading-[1.55] text-muted">{clientPage.intro}</p>
      </header>

      <section aria-labelledby="offers-heading">
        <h2 id="offers-heading" className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
          What I build
        </h2>
        <dl className="mt-6 grid gap-x-10 gap-y-6 border-t border-rule pt-6 md:grid-cols-3">
          {clientPage.offers.map((o) => (
            <div key={o.title}>
              <dt className="font-semibold">{o.title}</dt>
              <dd className="mt-1 text-muted">{o.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="projects-heading" className="pt-24">
        <h2 id="projects-heading" className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
          Projects
        </h2>
        <div className="mt-8">
          {clients.map((c) => (
            <article
              key={c.name}
              className="grid gap-x-12 gap-y-5 border-t border-rule py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
            >
              <Image
                src={c.image.src}
                alt={`The ${c.name} website`}
                width={c.image.width}
                height={c.image.height}
                sizes="(min-width: 768px) 45vw, 100vw"
                className="w-full rounded-2xl border border-rule"
              />
              <div>
                <h3 className="text-[1.5rem] leading-tight font-bold tracking-[-0.015em]">
                  <a href={c.href} className="hover:text-pen" target="_blank" rel="noopener">
                    {c.name}
                  </a>
                </h3>
                <p className="text-[0.9375rem] text-muted">{c.kind}</p>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-[0.9375rem] font-semibold">What they needed</dt>
                    <dd>{c.needed}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.9375rem] font-semibold">What I did</dt>
                    <dd>{c.did}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.9375rem] font-semibold">Built with</dt>
                    <dd>{c.builtWith}</dd>
                  </div>
                </dl>
                <p className="mt-5">
                  <a href={c.href} className="link font-semibold" target="_blank" rel="noopener">
                    Visit the site
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-heading" className="pt-20">
        <h2 id="process-heading" className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
          How a project works
        </h2>
        <ol className="mt-6 grid gap-x-10 gap-y-6 border-t border-rule pt-6 md:grid-cols-3">
          {clientPage.steps.map((s, i) => (
            <li key={s.title}>
              <p className="font-semibold">
                <span className="mr-2 text-pen">{i + 1}.</span>
                {s.title}
              </p>
              <p className="mt-1 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="pt-24">
        <EmailBlock line={clientPage.closing} />
      </div>
    </div>
  );
}
