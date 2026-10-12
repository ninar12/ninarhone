import { EmailAddress } from "@/components/ProtectedEmail";

// A closing line followed by the email address at body size.
export function EmailBlock({ line, id }: { line: string; id?: string }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className="scroll-mt-8">
      {id ? (
        <h2 id={`${id}-heading`} className="mb-3 text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
          Contact
        </h2>
      ) : null}
      <p className="max-w-[40rem] text-[1.1875rem] text-muted">{line} Email me.</p>
      <EmailAddress className="link mt-2 inline-block text-[1.1875rem] font-semibold" />
    </section>
  );
}
