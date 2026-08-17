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

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });
await cp(clientDir, pagesDir, { recursive: true });

const withBasePath = (source) =>
  source
    .replaceAll("/_next/", `${basePath}/_next/`)
    .replaceAll('"/media/', `"${basePath}/media/`)
    .replaceAll("'/media/", `'${basePath}/media/`)
    .replaceAll('"/social-', `"${basePath}/social-`)
    .replaceAll("'/social-", `'${basePath}/social-`)
    .replaceAll("url(/fonts/", `url(${basePath}/fonts/`)
    .replaceAll('url("/fonts/', `url("${basePath}/fonts/`)
    .replaceAll('href="/favicon.svg"', `href="${basePath}/favicon.svg"`)
    .replaceAll('href="/privacy/"', `href="${basePath}/privacy/"`)
    .replaceAll('href="/"', `href="${basePath}/"`);

const staticBehavior = `<script>
(() => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealItems.forEach((item) => item.classList.add("reveal-pending"));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12%", threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });

  const booking = document.querySelector("#booking");
  const stickyCta = document.querySelector(".mobile-sticky-cta");
  let bookingVisible = false;
  const updateCta = () => stickyCta?.classList.toggle("is-visible", scrollY > 520 && !bookingVisible);
  if (booking && "IntersectionObserver" in window) {
    const bookingObserver = new IntersectionObserver(([entry]) => {
      bookingVisible = entry.isIntersecting;
      updateCta();
    }, { threshold: 0.08 });
    bookingObserver.observe(booking);
  }
  addEventListener("scroll", updateCta, { passive: true });
  updateCta();
})();
</script>`;

async function renderPage(pathname, outputPath, behavior = "") {
  const response = await worker.fetch(
    new Request(`https://pages.local${pathname}`),
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
    throw new Error(`Static render failed for ${pathname} with status ${response.status}`);
  }

  const html = (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace("</body>", `${behavior}</body>`);

  const target = path.join(pagesDir, outputPath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);
  return html;
}

const homeHtml = await renderPage("/", "index.html", staticBehavior);
await renderPage("/privacy", "privacy/index.html");
await writeFile(path.join(pagesDir, "404.html"), homeHtml);
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
