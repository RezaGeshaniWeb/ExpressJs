# Express.js Learning Project

مجموعه‌ای از مثال‌های عملی و مستقل برای یادگیری **Express.js** و مفاهیم مرتبط با توسعه بک‌اند Node.js. هر پوشه یک موضوع جداگانه را پوشش می‌دهد و می‌تواند به‌صورت مستقل اجرا شود.

## پیش‌نیازها

- [Node.js](https://nodejs.org/) (نسخه ۱۸ یا بالاتر توصیه می‌شود)
- npm
- برای ماژول Mongoose: نصب و اجرای **MongoDB** روی سیستم یا استفاده از اتصال ابری

## ساختار پروژه

```
ExpressJs/
├── 01-Routing/              # مسیریابی، پارامترها، query string، متدهای HTTP
├── 02-Middleware/           # میان‌افزارهای سفارشی و زنجیره‌ای
├── 03-Error-Handler/        # مدیریت خطای 404 و خطاهای سرور
├── 04-Template-Engines/     # موتورهای قالب EJS، Pug، Handlebars
│   ├── ejs/
│   ├── pug/
│   └── hbs/
├── 05-Mongoose/             # اتصال MongoDB و CRUD با Mongoose
├── 06-Validation/           # اعتبارسنجی ورودی
│   ├── express-validator/
│   ├── joi/
│   ├── express-validation/
│   └── validate/
├── 07-File-Upload/          # آپلود فایل
│   ├── multer/
│   └── express-fileupload/
├── 08-Router/               # Router ماژولار، Controller و ساختار MVC
├── 09-FavIcon/              # سرو کردن favicon
├── 10-Serve-Index/          # serve-index برای لیست دایرکتوری
├── 11-Cookie-Parser/        # کار با کوکی
├── 12-Environment/          # متغیرهای محیطی با dotenv
├── 13-Hashing/              # هش رمز عبور (bcrypt، crypto)
├── 14-JWT/                  # JSON Web Token
└── 15-Strategy/             # استراتژی‌های احراز هویت (مفاهیم)
```

## نحوه اجرا

هر ماژول پوشه و `package.json` مخصوص خود را دارد.

```bash
cd 01-Routing
npm install
npm run dev    # با nodemon
# یا
npm start      # با node
```

پورت پیش‌فرض اکثر ماژول‌ها **3000** است (ماژول Environment از متغیر `PORT` در فایل env استفاده می‌کند).

---

## فهرست ماژول‌ها

### 01 — Routing

- تعریف route برای `/`, `/users`, `/users/:id`
- پاسخ با `res.send`, `res.json`, `res.status`
- مدیریت خطای 404 برای منابع ناموجود
- فایل‌های کمکی: `HTTP-Methods.js`, `query-string.js`, `matched-routes.js`

### 02 — Middleware

- زنجیره‌سازی چند middleware با `app.use`
- ترتیب اجرا و فراخوانی `next()`
- مثال‌های جانبی: `morgan`, `camelCase`, `omitEmpty`

### 03 — Error Handler

- middleware مخصوص **404** (route پیدا نشد)
- middleware چهار پارامتری برای **خطاهای عمومی** (`err, req, res, next`)

### 04 — Template Engines

سه پیاده‌سازی جدا با یک صفحه نمونه:

| موتور | پوشه | نکات |
|--------|------|------|
| **EJS** | `04-Template-Engines/ejs` | `view engine: ejs`, فایل‌های استاتیک در `public/` |
| **Pug** | `04-Template-Engines/pug` | حلقه، شرط، include partial، استاتیک در `/static` |
| **Handlebars (hbs)** | `04-Template-Engines/hbs` | `registerPartials` برای header و بخش‌های مشترک |

**فایل‌های CSS** در این بخش فشرده (minify) شده‌اند و هر فایل در **یک خط** قرار دارد تا حجم کمتری اشغال کند:

- `ejs/public/assets/css/global.css`
- `ejs/public/assets/css/master.css`
- `hbs/public/assets/css/global.css`
- `hbs/public/assets/css/master.css`
- `pug/public/style.css`

استایل‌های EJS و HBS از nesting مدرن CSS (`&`, `>`) استفاده می‌کنند؛ مرورگر باید از [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting_selector) پشتیبانی کند.

**اجرای نمونه (EJS):**

```bash
cd 04-Template-Engines/ejs
npm install
npm start
# http://localhost:3000
```

### 05 — Mongoose

- اتصال به MongoDB از طریق `config/mongo.config.js`
- مدل `Blog` و عملیات: `create`, `save`, `insertMany`, `find`, `findById`, `updateOne`, `deleteOne` و موارد مشابه
- استفاده از `omit-empty` و اعتبارسنجی `ObjectId`

### 06 — Validation

چهار رویکرد مختلف برای اعتبارسنجی body و پارامترها:

- **express-validator** — زنجیره‌سازی rule و middleware `checkValidation`
- **joi** — schema-based validation
- **express-validation** — wrapper روی express-validator
- **validate** — کتابخانه validate

مسیرهای نمونه: `POST /login`, `POST /register`, `GET /blogs/:id`

### 07 — File Upload

- **multer** — `single`, `array`, `fields`, `any`
- **express-fileupload** — آپلود بدون multer

### 08 — Router

ساختار ماژولار:

```
routers/
  index.js      # Router اصلی و middleware مشترک
  user.router.js
  blog.router.js
  comment.router.js
controllers/
  user.controller.js
  blog.controller.js
```

### 09 — FavIcon

سرو کردن آیکون سایت با middleware مربوط به favicon.

### 10 — Serve Index

نمایش لیست فایل‌های یک دایرکتوری با `serve-index` (مثلاً FTP عمومی).

### 11 — Cookie Parser

خواندن و تنظیم کوکی با `cookie-parser`.

### 12 — Environment Variables

- بارگذاری `.env` با `dotenv`
- فایل‌های محیطی: `.development.env`, `.production.env`
- خواندن `NODE_ENV`, `PORT`, `SMS_API_KEY` و سایر متغیرها

**توجه:** فایل‌های env در `.gitignore` هستند؛ قبل از اجرا مقادیر را در فایل env مربوطه تنظیم کنید.

### 13 — Hashing

اسکریپت‌های آموزشی برای:

- `crypto` (هش یک‌طرفه، HMAC)
- `bcrypt` (هش رمز عبور با salt)
- مقایسه روش‌های مختلف در فایل‌های جداگانه

### 14 — JWT

مفاهیم و پیاده‌سازی JSON Web Token (`jwt.js`, `index.js`).

### 15 — Strategy

یادداشت و مثال‌های مفهومی برای استراتژی‌های احراز هویت:

- Basic (Base64)
- Bearer / JWT
- API Key
- OAuth

---

## الگوهای مشترک در پروژه

### مدیریت خطا

بسیاری از ماژول‌ها از الگوی زیر استفاده می‌کنند:

```javascript
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')

// ... routes ...

app.use(NotFoundError)   // 404
app.use(ErrorHandler)    // خطاهای دیگر
```

### Body parser

در APIها معمولاً:

```javascript
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```

---

## وابستگی‌های اصلی

| پکیج | کاربرد |
|------|--------|
| `express` ^5.x | فریم‌ورک وب |
| `mongoose` | ODM برای MongoDB |
| `ejs`, `pug`, `hbs` | موتورهای قالب |
| `express-validator`, `joi` | اعتبارسنجی |
| `multer`, `express-fileupload` | آپلود فایل |
| `dotenv` | متغیر محیطی |
| `bcrypt`, `crypto` (built-in) | هش |
| `jsonwebtoken` | JWT |
| `cookie-parser` | کوکی |
| `nodemon` | توسعه (devDependency) |

---

## نکات امنیتی

- فایل‌های `.env` و اطلاعات حساس را commit نکنید (در `.gitignore` قرار دارند).
- در production از HTTPS، rate limiting و اعتبارسنجی سخت‌گیرانه استفاده کنید.
- رمز عبور را فقط با **bcrypt** (یا مشابه) ذخیره کنید، نه به‌صورت plain text.
- کلیدهای JWT و API را در متغیر محیطی نگه دارید.

---

## Git

```bash
git clone <repository-url>
cd ExpressJs
```

هر ماژول را جداگانه `npm install` کنید؛ ریشه پروژه `package.json` مرکزی ندارد.

---
