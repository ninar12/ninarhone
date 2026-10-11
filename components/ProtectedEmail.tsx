"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

// The address never appears in the HTML or as plain text in the JavaScript.
// It is decoded in the browser after the page loads, which stops the simple
// scrapers that harvest addresses from page source.
function useEmail(): string | null {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    try {
      setEmail(atob(site.emailEncoded));
    } catch {
      setEmail(null);
    }
  }, []);
  return email;
}

type LinkProps = { className?: string; children: React.ReactNode };

/** A link that becomes a mailto: link once the page has loaded. */
export function EmailLink({ className, children }: LinkProps) {
  const email = useEmail();
  return (
    <a href={email ? `mailto:${email}` : "/#contact"} className={className}>
      {children}
    </a>
  );
}

/** The address itself, shown as a mailto: link once the page has loaded. */
export function EmailAddress({ className }: { className?: string }) {
  const email = useEmail();
  if (!email) {
    // Same size as the address, so the page doesn't jump when it appears.
    return (
      <span className={className} aria-hidden="true">
        &nbsp;
      </span>
    );
  }
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
