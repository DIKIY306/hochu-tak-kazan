import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const pagesDir = path.join(root, "dist", "pages");
const basePath = `/${(process.env.GITHUB_REPOSITORY ?? "DIKIY306/hochu-tak-kazan")
  .split("/")
  .at(-1)}`;

const workerUrl = new URL(`../dist/server/index.js?pages=${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://pages.local/"),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });
await cp(clientDir, pagesDir, { recursive: true });

const withBasePath = (source) =>
  source
    .replaceAll('"/_next/', `"${basePath}/_next/`)
    .replaceAll("'/_next/", `'${basePath}/_next/`)
    .replaceAll('"/media/', `"${basePath}/media/`)
    .replaceAll("'/media/", `'${basePath}/media/`)
    .replaceAll("url(/fonts/", `url(${basePath}/fonts/`)
    .replaceAll('url("/fonts/', `url("${basePath}/fonts/`)
    .replaceAll('href="/favicon.svg"', `href="${basePath}/favicon.svg"`);

const html = withBasePath(await response.text());
await writeFile(path.join(pagesDir, "index.html"), html);
await writeFile(path.join(pagesDir, "404.html"), html);
await writeFile(path.join(pagesDir, ".nojekyll"), "");

async function rewriteAssets(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteAssets(filePath);
      continue;
    }
    if (!/\.(?:css|html|js|json)$/.test(entry.name)) continue;
    const source = await readFile(filePath, "utf8");
    const rewritten = withBasePath(source);
    if (rewritten !== source) await writeFile(filePath, rewritten);
  }
}

await rewriteAssets(pagesDir);
console.log(`GitHub Pages bundle created at ${pagesDir} for ${basePath}/`);
