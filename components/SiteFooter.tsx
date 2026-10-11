import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-12 md:px-10">
      <div className="flex flex-col gap-4 border-t border-rule pt-6 text-[0.9375rem] text-muted md:flex-row md:items-baseline md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Nina Rhone. Client work as NJR Solutions.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {site.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink" rel="me noopener" target="_blank">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
