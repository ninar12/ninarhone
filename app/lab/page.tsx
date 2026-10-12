import type { Metadata } from "next";
import Image from "next/image";
import { labPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: labPage.title,
  description: labPage.description,
  path: "/lab",
});

export default function LabPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <header className="pt-12 pb-12 md:pt-20">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">Lab</h1>
        <p className="mt-6 max-w-[38rem] text-[1.1875rem] leading-[1.55] text-muted">{labPage.intro}</p>
      </header>

      <ul>
        {labPage.experiments.map((e) => (
          <li
            key={e.name}
            className="grid gap-x-10 gap-y-4 border-t border-rule py-8 sm:grid-cols-[12rem_1fr] md:grid-cols-[16rem_1fr]"
          >
            <Image
              src={e.image.src}
              alt={`Screenshot of ${e.name}`}
              width={e.image.width}
              height={e.image.height}
              sizes="(min-width: 768px) 256px, (min-width: 640px) 192px, 100vw"
              className="aspect-[4/3] w-full rounded-xl border border-rule object-cover object-top"
            />
            <div className="max-w-[40rem]">
              <h2 className="text-[1.25rem] leading-snug font-bold tracking-[-0.01em]">
                <a href={e.href} className="hover:text-pen" target="_blank" rel="noopener">
                  {e.name}
                </a>
              </h2>
              <p className="mt-1">{e.what}</p>
              <p className="mt-2 text-[0.9375rem] text-muted">Built with {e.builtWith}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
