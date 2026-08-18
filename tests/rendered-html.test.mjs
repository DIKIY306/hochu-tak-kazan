import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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

test("server-renders the Hochu Tak quality rescue design", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Хочу Так - сеть салонов красоты в Казани<\/title>/i);
  assert.match(html, /Песчаные Ковали, Октябрьская, 29в/);
  assert.match(html, /70K\+/);
  assert.match(html, /6 лет/);
  assert.match(html, /Белинского, 18/);
  assert.match(html, /Записаться/);
  assert.match(html, /Выберите, что хочется изменить/);
  assert.match(html, /Результаты, которые можно показать мастеру/);
  assert.match(html, /От идеи к понятному результату/);
  assert.match(html, /Вечерняя собранная прическа/);
  assert.match(html, /На карте/);
  assert.match(html, /t\.me\/Salon_Hochu_Tak/);
  assert.match(html, /vk\.com\/hochutak_kzn/);
  assert.match(html, /instagram\.com\/hochutak_kzn/);
  assert.match(html, /web\.max\.ru/);
  assert.match(html, /MAX · \+7 986 925-93-96/);
  assert.match(html, /Фиксируем стоимость работы/);
  assert.match(html, /согласовываем заранее, без доплат/);
  assert.match(html, /id="works-women"/);
  assert.match(html, /id="works-hairstyles"/);
  assert.match(html, /Подберите ближайший салон к вам/);
  assert.match(html, /\+7 986 925-93-96/);
  assert.match(html, /href="tel:\+79869259396"/);
  assert.match(html, /hero-smooth\.webp/);
  assert.match(html, /hero-fade\.webp/);
  assert.match(html, /hero-tiara\.webp/);
  assert.match(html, /hero-mens-cut\.webp/);
  assert.match(html, /hero-platinum\.webp/);
  assert.match(html, /service-color\.webp/);
  assert.match(html, /service-perm\.webp/);
  assert.match(html, /ИП Блинов Тимур Хабибуллаевич/);
  assert.match(html, /ИНН[\s\S]{0,80}161405161457/);
  assert.match(html, /href="\/privacy\/"/);
  assert.doesNotMatch(html, /Сайт должен продавать|главный аргумент|service menu|final step|Color transformation|Clean blonde/i);
  assert.doesNotMatch(html, /\/media\/logo\.jpg/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});

test("server-renders the privacy policy with confirmed operator details", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Политика обработки персональных данных/);
  assert.match(html, /ИП Блинов Тимур Хабибуллаевич/);
  assert.match(html, /ОГРНИП[\s\S]{0,80}320169000078590/);
  assert.match(html, /blinovtimar@gmail\.com/);
  assert.doesNotMatch(html, /\{organisation_name\}/);
});
