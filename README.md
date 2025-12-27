# Vibe Coding Portfolio

Личный лендинг-портфолио в стиле Cyberpunk/Neon.
Разработано с использованием **React**, **TypeScript**, **Tailwind CSS** и **Vite**.

## 🚀 Как настроить под себя

### 1. Аватар
Для отображения вашего фото:
1.  Удалите или переименуйте существующие файлы (если есть).
2.  Добавьте ваше фото в папку `public` и назовите его **`photo.jpg`**.
3.  Если файл не найден, код автоматически покажет заглушку (`avatar.svg`).

### 2. Ссылки и Тексты
Основные данные находятся в компонентах:
*   `components/Hero.tsx` — Заголовок и описание.
*   `components/MainProject.tsx` — Главный проект (SuperWoman AI).
*   `components/Footer.tsx` — Ссылка на Telegram.

## 🛠 Установка и запуск

```bash
npm install
npm run dev
```

## 📊 Аналитика
Подключена Яндекс.Метрика (код находится в `index.html`).

## 🎨 Стек
*   React 18
*   Tailwind CSS (с кастомными анимациями neon/glow)
*   Lucide React (иконки)