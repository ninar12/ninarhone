// A small outlined label that names a section. Rendered as the section's h2.
export function PillLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="inline-block rounded-full border border-ink/15 px-3.5 py-1 text-[0.875rem] leading-normal font-medium tracking-normal text-ink"
    >
      {children}
    </h2>
  );
}

// Splits a "Built with" string into tags, keeping parenthesised lists together:
// "AWS (Bedrock, Lambda), Python" -> ["AWS (Bedrock, Lambda)", "Python"]
export function splitStack(stack: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of stack) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) out.push(current.trim());
  return out;
}

export function Tags({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Built with">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-rule bg-paper px-3 py-1 text-[0.8125rem] text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}
