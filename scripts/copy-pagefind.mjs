import { cp, mkdir, writeFile } from "node:fs/promises";

await mkdir("public/pagefind", { recursive: true });
await cp("dist/pagefind", "public/pagefind", { recursive: true, force: true });

// The default English locale is canonical without a path prefix.
// Retire every legacy /en URL while preserving the remainder of the path.
await writeFile("dist/_redirects", "/en / 308\n/en/* /:splat 308\n", "utf8");
