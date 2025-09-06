# Shopify School Homepage

Односторінковий лендинг, зверстаний за макетом із
[**Figma**](https://www.figma.com/design/Ij1lznUWVE9a9Yk0JqSQKL/Test-for-Developer?node-id=0-1&p=f&t=V43SvZguGyLqrnnL-0).

Проєкт реалізовано на **Vanilla HTML**, **CSS** (з використанням **CSS nesting**
та **BEM-методології**) і **JavaScript**, зі слайдерами на **Swiper.js**.

Деплой виконано на [**Vercel**](https://shopify-three-mauve.vercel.app/).

## Запуск проєкту локально

1. **Клонувати репозиторій:**

```bash
git clone https://github.com/ViktorSvertoka/shopify.git

cd shopify
```

2. **Встановити залежності:**

```bash
npm install
```

3. **Запустити локальний сервер:**

```bash
npm run dev
```

4. **Відкрити сторінку у браузері:**

```arduino
http://localhost:5173
```

## Використані технології

- **Vite** — для швидкої розробки та білду

- **HTML5** семантична розмітка

- **CSS3** з підходом CSS Nesting

- **BEM-методологія** для іменування класів

- **JavaScript**

- **Swiper.js** для слайдерів

- **Google Fonts** (Poppins)

## Реалізовані секції

- **Header** з логотипом і навігацією

- **Hero-слайдер** на Swiper

- **Featured Collection** (карусель продуктів) на Swiper

- **FAQ** (акордеон) на details/summary

- **Product Spotlight** (галерея товару з вибором кольору/розміру) на Swiper

- **Need Help?** (форма з alert на submit)

- **Footer** з акордеоном на мобільних пристроях

- **Popup-банер**, який з’являється через 1 секунду

## Що можна покращити

Додати більш розширену перевірку форм (валидація Email, телефону)

Додати unit-тести для JS-логіки

## Реалізація

![Demonstration](./assets/screencapture.png)

## Структура проєкту

```
📂
├── .gitignore          # Файли та папки, які ігнорує Git
├── .prettierrc         # Налаштування Prettier для форматування коду
├── LICENSE.txt         # Ліцензія проєкту
├── README.md           # Основна документація: як запустити, опис проєкту
├── SECURITY.md         # Політика безпеки та рекомендації
├── assets
│   └── screencapture.png   # Скриншот сторінки для README
├── package-lock.json   # Автоматично згенерований lock-файл npm
├── package.json        # Метадані проєкту, залежності, npm-скрипти
├── src
│   ├── css             # Стилі проєкту (структура за БЕМ та секціями)
│   │   ├── base        # Базові стилі (шрифти, ресети, змінні)
│   │   │   ├── fonts.css
│   │   │   ├── reset.css
│   │   │   └── variables.css
│   │   ├── components  # Стилі для окремих UI-компонентів (наприклад, кнопки)
│   │   │   └── button.css
│   │   ├── layout      # Стилі для кожної секції сторінки
│   │   │   ├── 01-header.css
│   │   │   ├── 02-hero.css
│   │   │   ├── 03-featured.css
│   │   │   ├── 04-questions.css
│   │   │   ├── 05-product.css
│   │   │   ├── 06-help.css
│   │   │   ├── 07-footer.css
│   │   │   └── 08-modal.css
│   │   └── style.css   # Головний файл зі збіркою всіх стилів
│   ├── fonts           # Локально підключені шрифти (Poppins)
│   │   ├── Poppins-Bold.woff2
│   │   ├── Poppins-Medium.woff2
│   │   ├── Poppins-Regular.woff2
│   │   └── Poppins-SemiBold.woff2
│   ├── icons           # Іконки (favicon та SVG-спрайт)
│   │   ├── favicon.svg
│   │   └── sprite.svg
│   ├── images          # Зображення, згруповані за секціями
│   │   ├── components  # Зображення для компонентів (наприклад, модалки)
│   │   │   ├── .gitkeep
│   │   │   └── modal
│   │   │       ├── modal.webp
│   │   │       └── modal@2x.webp
│   │   └── sections   # Зображення для секцій головної сторінки
│   │       ├── 01-hero
│   │       ├── 02-featured
│   │       └── 03-product
│   ├── index.html      # Головний HTML-файл (сторінка)
│   ├── js              # JavaScript (логіка для секцій)
│   │   ├── 01-hero.js
│   │   ├── 02-featured.js
│   │   ├── 03-questions.js
│   │   ├── 04-product.js
│   │   ├── 05-help.js
│   │   ├── 06-footer.js
│   │   ├── 07-modal.js
│   │   ├── data        # Дані для товарів
│   │   │   └── dataProducts.js
│   │   ├── main.js     # Точка входу для JS
│   │   └── template    # Шаблони (рендеринг карток товарів тощо)
│   │       └── templateProducts.js
│   └── partials        # HTML-шаблони секцій сторінки
│       ├── 01-header.html
│       ├── 02-hero.html
│       ├── 03-featured.html
│       ├── 04-questions.html
│       ├── 05-product.html
│       ├── 06-help.html
│       ├── 07-footer.html
│       └── 08-modal.html
└── vite.config.js      # Конфігурація Vite (збірка та дев-сервер)

```
