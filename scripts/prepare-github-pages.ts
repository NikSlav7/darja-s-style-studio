import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "dist", "client");
const repositoryName = process.env["REPOSITORY_NAME"];

if (!repositoryName) {
  throw new Error("REPOSITORY_NAME is required to prepare the GitHub Pages build.");
}

await mkdir(outputDirectory, { recursive: true });

const generatedFiles = await readdir(outputDirectory);
if (!generatedFiles.includes("et") || !generatedFiles.includes("ru")) {
  throw new Error(
    `The static build did not generate both language pages. dist/client contains: ${JSON.stringify(generatedFiles)}`,
  );
}

const basePath = `/${repositoryName}/`;
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