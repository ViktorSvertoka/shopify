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

```
📂 Структура проєкту
├── public/           # статичні файли (іконки, зображення, шрифти)
├── src/
│   ├── assets/       # стилі, зображення, іконки
│   ├── js/           # скрипти
│   ├── styles/       # стилі з CSS nesting + БЕМ
│   └── index.html    # головна сторінка
├── package.json
├── vite.config.js
└── README.md
```
