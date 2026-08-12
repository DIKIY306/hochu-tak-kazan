# Хочу Так

Сайт сети салонов красоты «Хочу Так» в Казани.

## Локальный запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm test
```

## Публикация

Основная версия собирается командой `npm run build`. Для GitHub Pages используется
отдельная статическая сборка `npm run build:pages`, которую автоматически запускает
workflow `.github/workflows/deploy-pages.yml` после отправки изменений в `main`.
