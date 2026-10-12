import { EmailAddress } from "@/components/ProtectedEmail";

// A closing line followed by the email address, set large on a soft blue panel:
// the site's one call to action.
export function EmailBlock({ line, id }: { line: string; id?: string }) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className="glow scroll-mt-8 rounded-3xl px-6 py-12 md:px-12 md:py-20"
    >
      {id ? (
        <h2
          id={`${id}-heading`}
          className="mb-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]"
        >
          Contact
        </h2>
      ) : null}
      <p className="max-w-[40rem] text-[1.1875rem] text-muted">{line} Email me.</p>
      <EmailAddress className="mt-4 inline-block text-[clamp(1.5rem,4.2vw,2.75rem)] leading-tight font-bold tracking-[-0.025em] break-all text-pen underline decoration-2 underline-offset-[0.18em] hover:text-pen-dark" />
    </section>
  );
}
