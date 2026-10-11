"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Client work", href: "/client-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-6 pt-7 pb-4 md:px-10 md:pt-9">
      <Link href="/" className="text-[1.0625rem] font-bold tracking-[-0.01em] text-ink hover:text-pen">
        Nina Rhone
      </Link>
      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem]">
          {nav.map((item) => {
            const current = !item.href.includes("#") && pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={
                    current
                      ? "text-ink underline decoration-pen decoration-2 underline-offset-[0.35em]"
                      : "text-muted hover:text-ink"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
