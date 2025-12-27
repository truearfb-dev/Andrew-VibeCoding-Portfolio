# Vibe Coding Portfolio

Личный лендинг-портфолио в стиле Cyberpunk/Neon.
Разработано с использованием **React**, **TypeScript**, **Tailwind CSS** и **Vite**.

## 🚀 Как настроить под себя

### 1. Фотография профиля
Проект ожидает файл фотографии по пути `/public/photo.jpg`.
*   **Если фото нет:** Автоматически отображается стильная SVG-аватарка.
*   **Как загрузить свое:** Просто добавьте файл `photo.jpg` в папку `public` (или загрузите его через интерфейс GitHub, перезаписав существующий файл).

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
