import { EmailAddress } from "@/components/ProtectedEmail";

// A closing line followed by the email address, set large: the site's one call to action.
export function EmailBlock({ line, id }: { line: string; id?: string }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className="scroll-mt-8">
      {id ? (
        <h2 id={`${id}-heading`} className="mb-3 text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
          Contact
        </h2>
      ) : null}
      <p className="max-w-[40rem] text-[1.1875rem] text-muted">{line} Email me.</p>
      <EmailAddress className="mt-3 inline-block text-[clamp(1.6rem,4.2vw,2.75rem)] leading-tight font-bold tracking-[-0.025em] text-pen underline decoration-2 underline-offset-[0.18em] hover:text-pen-dark" />
    </section>
  );
}
