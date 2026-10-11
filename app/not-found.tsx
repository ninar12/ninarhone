import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10">
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-6 text-[1.1875rem] text-muted">
        It may have moved in the redesign.{" "}
        <Link href="/" className="link font-semibold">
          Go to the homepage
        </Link>
        .
      </p>
    </div>
  );
}
