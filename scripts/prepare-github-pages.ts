import { copyFile, cp, mkdir, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = process.cwd();
const outputDirectory = join(root, "dist", "client");
const basePath = (process.env["BASE_PATH"] || "/").replace(/\/?$/, "/");
const repositoryName = basePath.replace(/^\/|\/$/g, "");

async function exists(p: string) {
  try { await stat(p); return true; } catch { return false; }
}
async function walk(dir: string, out: string[] = []): Promise<string[]> {
  if (!(await exists(dir))) return out;
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "node_modules" && e.name !== "assets") await walk(p, out); }
    else if (e.name.endsWith(".html")) out.push(relative(root, p));
  }
  return out;
}

await mkdir(outputDirectory, { recursive: true });

// Nitro can select a GitHub-specific output directory from CI environment
// variables. Normalise that directory before preparing the Pages artifact.
const possibleOutputDirectories = [
  outputDirectory,
  join(root, "dist", "public"),
  join(root, ".output", "public"),
  join(root, ".output", "client"),
];
for (const candidate of possibleOutputDirectories.slice(1)) {
  const hasEt = await exists(join(candidate, "et", "index.html"));
  const hasRu = await exists(join(candidate, "ru", "index.html"));
  if (hasEt && hasRu) {
    await rm(outputDirectory, { recursive: true, force: true });
    await mkdir(outputDirectory, { recursive: true });
    await cp(candidate, outputDirectory, { recursive: true });
    break;
  }
}

// Normalise each language page to dist/client/<lang>/index.html wherever the prerenderer put it.
for (const lang of ["et", "ru"]) {
  const target = join(outputDirectory, lang, "index.html");
  if (await exists(target)) continue;
  const candidates = [
    join(outputDirectory, `${lang}.html`),
    ...(repositoryName ? [join(outputDirectory, repositoryName, lang, "index.html"), join(outputDirectory, repositoryName, `${lang}.html`)] : []),
  ];
  for (const c of candidates) {
    if (await exists(c)) {
      await mkdir(join(outputDirectory, lang), { recursive: true });
      await rename(c, target);
      break;
    }
  }
}

const missing = [];
for (const lang of ["et", "ru"]) if (!(await exists(join(outputDirectory, lang, "index.html")))) missing.push(lang);
if (missing.length) {
  const found = [
    ...(await walk(join(root, "dist"))),
    ...(await walk(join(root, ".output"))),
  ];
  const msg = `Missing pages: ${missing.join(",")}. HTML found in build output: ${JSON.stringify(found)}`;
  console.log(`::error title=Static pages missing::${msg}`);
  throw new Error(msg);
}

const estonianUrl = `${basePath}et/`;
const redirectPage = `<!doctype html>
<html lang="et">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Darja</title>
    <meta http-equiv="refresh" content="0;url=${estonianUrl}">
    <link rel="canonical" href="${estonianUrl}">
    <script>location.replace(${JSON.stringify(estonianUrl)} + location.hash)</script>
  </head>
  <body></body>
</html>
`;

await writeFile(join(outputDirectory, "index.html"), redirectPage);
await copyFile(join(outputDirectory, "index.html"), join(outputDirectory, "404.html"));
await writeFile(join(outputDirectory, ".nojekyll"), "");
console.log(`Prepared GitHub Pages output at ${outputDirectory}`);
