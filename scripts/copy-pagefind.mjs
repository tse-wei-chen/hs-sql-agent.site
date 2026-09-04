import { cp, mkdir, writeFile } from "node:fs/promises";

await mkdir("public/pagefind", { recursive: true });
await cp("dist/pagefind", "public/pagefind", { recursive: true, force: true });
await writeFile("dist/_redirects", "/ /en/ 302\n", "utf8");
