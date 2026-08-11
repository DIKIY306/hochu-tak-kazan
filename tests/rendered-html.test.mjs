import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
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
}

test("server-renders the Hochu Tak design draft", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Хочу Так - сеть салонов красоты в Казани<\/title>/i);
  assert.match(html, /Beauty house/);
  assert.match(html, /7 салонов/);
  assert.match(html, /70K\+/);
  assert.match(html, /Белинского, 18/);
  assert.match(html, /Записаться/);
  assert.match(html, /Выберите, что хочется обновить/);
  assert.match(html, /Покажите мастеру/);
  assert.doesNotMatch(html, /Сайт должен продавать|главный аргумент|service menu|final step/i);
  assert.doesNotMatch(html, /\/media\/logo\.jpg/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
