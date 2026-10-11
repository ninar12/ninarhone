import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Nina's hand-drawn food drawings. Drop PNG or WebP files into /public/drawings
// and they appear here in filename order. With the folder empty, nothing renders.
function listDrawings(): string[] {
  const dir = path.join(process.cwd(), "public", "drawings");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|webp)$/i.test(f))
      .sort()
      .slice(0, 6);
  } catch {
    return [];
  }
}

export function Drawings({ className = "" }: { className?: string }) {
  const files = listDrawings();
  if (files.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-end gap-4 ${className}`} aria-hidden="true">
      {files.map((f) => (
        <Image key={f} src={`/drawings/${f}`} alt="" width={64} height={64} className="h-16 w-16 object-contain" />
      ))}
    </div>
  );
}
