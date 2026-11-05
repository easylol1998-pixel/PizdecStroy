# PizDa Строй

Сайт строительной компании ООО «PizDa» — строительство загородных домов и ремонт квартир в Санкт-Петербурге и Ленинградской области.

**Стек:** Next.js (App Router) + TypeScript + Tailwind CSS

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная |
| `/uslugi` | Услуги |
| `/portfolio` | Портфолио |
| `/o-kompanii` | О компании |
| `/kontakty` | Контакты + форма заявки |
| `/politika` | Политика обработки ПДн (152-ФЗ) |
| `/soglasie` | Согласие на обработку ПДн |

## Деплой на Vercel

1. Загрузите этот репозиторий на GitHub
2. Зайдите на [vercel.com](https://vercel.com) → Import Project
3. Выберите репозиторий → Deploy

Сайт будет доступен через 1–2 минуты.

## Важно по 152-ФЗ

- Хостинг и база данных должны быть в РФ
- Перед продакшеном заполните реальные реквизиты ООО
- Подайте уведомление в Роскомнадзор
- Подключите капчу и сохранение заявок в БД

## Структура проекта

```
src/
├── app/
│   ├── page.tsx              # Главная
│   ├── uslugi/page.tsx
│   ├── portfolio/page.tsx
│   ├── o-kompanii/page.tsx
│   ├── kontakty/page.tsx
│   ├── politika/page.tsx
│   ├── soglasie/page.tsx
│   └── api/lead/route.ts     # API заявок
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    └── ContactForm.tsx
```
