# 2nd STREET 招募網站實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將 Figma 設計的 2nd STREET 招募網站完整實作為純 HTML/CSS/JavaScript 靜態網站

**Architecture:** 多頁式網站架構（6 個 HTML 頁面），使用 Mobile-First 響應式設計，從 Figma 手動提取設計 tokens 和內容，遵循 CLAUDE.md 規範（純前端技術，無框架）

**Tech Stack:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript (ES6+), Figma MCP (圖片下載)

**Design Source:** https://www.figma.com/design/kQBjfyqxaPFpNmWnZoq54Z/2ndSTREET?node-id=2442-9145

---

## 檔案結構規劃

建立以下檔案結構：

```
2ndSTREET/
├── index.html              # 首頁
├── daily-work.html         # 工作日常
├── stories.html            # 員工故事
├── recruit.html            # 招募資訊
├── job-intro.html          # 工作介紹
├── evaluation.html         # 評價制度
├── css/
│   └── style.css           # 主樣式表
├── js/
│   └── main.js             # 主 JavaScript
├── assets/
│   └── images/
│       ├── logo.png
│       ├── hero/
│       ├── work/
│       ├── staff/
│       └── icons/
├── docs/
│   └── superpowers/
│       ├── specs/
│       └── plans/
├── README.md
├── CLAUDE.md
└── .gitignore
```

---

## Task 1: 建立 CSS 設計系統（Design Tokens）

**Files:**
- Modify: `css/style.css` (建立從頭開始)

**目標：** 建立完整的 CSS Variables 系統，從 Figma 提取設計 tokens

- [ ] **Step 1: 查看 Figma 設計提取色彩資訊**

開啟 Figma 設計稿，記錄主要色彩：
- 黑色（導航背景）: #000000
- 紅色（CTA 按鈕）: #E60012
- 白色: #FFFFFF
- 淺灰（背景）: #F5F5F5
- 深灰（次要文字）: #666666

- [ ] **Step 2: 建立 CSS Variables 基礎架構**

在 `css/style.css` 建立：

```css
/* ========================================
   CSS Reset & Base
   ======================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* ========================================
       品牌色彩
       ======================================== */
    --color-primary: #000000;
    --color-secondary: #E60012;
    --color-accent: #FFFFFF;
    --color-gray-light: #F5F5F5;
    --color-gray-dark: #666666;

    /* ========================================
       文字顏色
       ======================================== */
    --text-primary: #000000;
    --text-secondary: #666666;
    --text-inverse: #FFFFFF;
    --text-accent: #E60012;

    /* ========================================
       背景顏色
       ======================================== */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F5F5F5;
    --bg-dark: #000000;

    /* ========================================
       間距系統（8px grid）
       ======================================== */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 48px;
    --spacing-xl: 80px;
    --spacing-2xl: 120px;

    /* ========================================
       字型大小
       ======================================== */
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 16px;
    --font-size-lg: 20px;
    --font-size-xl: 28px;
    --font-size-2xl: 40px;
    --font-size-3xl: 56px;

    /* ========================================
       字型家族
       ======================================== */
    --font-family-base: -apple-system, BlinkMacSystemFont,
                        "Segoe UI", "Noto Sans JP", "Noto Sans TC",
                        sans-serif;

    /* ========================================
       陰影
       ======================================== */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);

    /* ========================================
       圓角
       ======================================== */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;

    /* ========================================
       轉場動畫
       ======================================== */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* ========================================
   Base Styles
   ======================================== */
html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

ul, ol {
    list-style: none;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}
```

- [ ] **Step 3: 驗證 CSS 載入**

在瀏覽器開啟任一 HTML 頁面（可以先建立空白 HTML），檢查 DevTools:
- Elements → Computed → 確認 CSS Variables 存在
- 無 console 錯誤

- [ ] **Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS design system with variables from Figma

- Add CSS reset and base styles
- Add design tokens (colors, spacing, typography)
- Add shadow and transition variables"
```

---

## Task 2: 從 Figma 下載圖片素材

**Files:**
- Create: `assets/images/` 目錄及子目錄
- 使用 Figma MCP 工具下載圖片

**目標：** 從 Figma 下載所有需要的圖片素材

- [ ] **Step 1: 建立圖片目錄結構**

```bash
mkdir -p assets/images/hero
mkdir -p assets/images/work
mkdir -p assets/images/staff
mkdir -p assets/images/icons
```

- [ ] **Step 2: 使用 Figma MCP 下載 Logo**

使用 `mcp__figma-remote-mcp__download_assets` 工具下載 2nd STREET Logo：
- 找到 Figma 中的 Logo 節點 ID
- 下載為 PNG 格式
- 儲存至 `assets/images/logo.png`

- [ ] **Step 3: 下載 Hero 圖片（員工團隊照片）**

從 Figma 下載首頁 Hero 區塊的員工團隊照片：
- 節點 ID: 需要從 Figma 中找到對應的圖片節點
- 下載為 JPG 格式（2x 解析度）
- 儲存至 `assets/images/hero/team.jpg`

- [ ] **Step 4: 下載工作環境照片（8 張）**

從 Figma 下載工作環境照片網格的圖片：
- 下載 8 張工作環境照片
- 命名為 `work-01.jpg` 到 `work-08.jpg`
- 儲存至 `assets/images/work/` 目錄

- [ ] **Step 5: 下載員工照片（4-6 張）**

從 Figma 下載員工個人檔案照片：
- 下載 4-6 張員工照片
- 命名為 `staff-01.jpg` 到 `staff-06.jpg`
- 儲存至 `assets/images/staff/` 目錄

- [ ] **Step 6: 驗證圖片下載**

檢查所有圖片檔案：

```bash
ls -la assets/images/logo.png
ls -la assets/images/hero/
ls -la assets/images/work/
ls -la assets/images/staff/
```

預期：所有圖片檔案存在且大小合理

- [ ] **Step 7: Commit**

```bash
git add assets/images/
git commit -m "feat: download all images from Figma design

- Add 2nd STREET logo
- Add hero team photo
- Add 8 work environment photos
- Add 4-6 staff profile photos"
```

---

## Task 3: 建立 Header 共用元件

**Files:**
- Modify: `css/style.css` (新增 Header 樣式)
- Create: HTML snippet（稍後複製到各頁面）

**目標：** 建立黑色導航列，包含 Logo 和導航連結

- [ ] **Step 1: 在 CSS 中新增 Header 樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Layout - Container
   ======================================== */
.container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
    .container {
        padding: 0 var(--spacing-lg);
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 var(--spacing-xl);
    }
}

/* ========================================
   Header & Navigation
   ======================================== */
.header {
    position: sticky;
    top: 0;
    background: var(--bg-dark);
    color: var(--text-inverse);
    z-index: 1000;
    box-shadow: var(--shadow-sm);
}

.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    padding-top: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
}

@media (min-width: 768px) {
    .header .container {
        min-height: 80px;
    }
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    width: auto;
}

@media (min-width: 768px) {
    .logo img {
        height: 50px;
    }
}

/* 漢堡選單按鈕 */
.menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    cursor: pointer;
    background: transparent;
    border: none;
}

.menu-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-accent);
    transition: var(--transition-base);
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }
}

/* 導航選單 */
.nav-menu {
    display: none;
    position: fixed;
    top: 60px;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: calc(100vh - 60px);
    background: var(--bg-dark);
    padding: var(--spacing-lg) var(--spacing-md);
    transition: right var(--transition-base);
    overflow-y: auto;
}

.nav-menu.active {
    display: flex;
    right: 0;
}

@media (min-width: 768px) {
    .nav-menu {
        display: flex;
        position: static;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-lg);
        width: auto;
        max-width: none;
        height: auto;
        padding: 0;
        background: transparent;
    }
}

.nav-menu {
    flex-direction: column;
    gap: var(--spacing-md);
}

@media (min-width: 768px) {
    .nav-menu {
        flex-direction: row;
        gap: var(--spacing-lg);
    }
}

.nav-link {
    position: relative;
    font-size: var(--font-size-base);
    font-weight: 500;
    color: var(--text-inverse);
    transition: color var(--transition-fast);
    padding: var(--spacing-xs) 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-secondary);
    transition: width var(--transition-base);
}

.nav-link:hover {
    color: var(--color-secondary);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: var(--color-secondary);
}

.nav-link.active::after {
    width: 100%;
}
```

- [ ] **Step 2: 建立 Header HTML 結構**

準備以下 HTML 片段（稍後會加到每個頁面）：

```html
<header class="header">
    <div class="container">
        <a href="index.html" class="logo">
            <img src="assets/images/logo.png" alt="2nd STREET">
        </a>

        <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="nav-menu">
            <a href="index.html" class="nav-link">ABOUT</a>
            <a href="stories.html" class="nav-link">STORY</a>
            <a href="job-intro.html" class="nav-link">JOB</a>
            <a href="recruit.html" class="nav-link">RECRUIT</a>
            <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
        </nav>
    </div>
</header>
```

- [ ] **Step 3: 新增按鈕樣式（APPLY 按鈕）**

在 `css/style.css` 新增：

```css
/* ========================================
   Buttons
   ======================================== */
.btn {
    display: inline-block;
    padding: 12px 32px;
    font-size: var(--font-size-base);
    font-weight: 500;
    text-align: center;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    cursor: pointer;
}

.btn-primary {
    background: var(--color-secondary);
    color: var(--text-inverse);
}

.btn-primary:hover {
    background: #CC0010;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: var(--text-inverse);
}
```

- [ ] **Step 4: 測試 Header 樣式**

建立臨時測試檔案 `test-header.html`：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header Test</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- 測試內容 -->
    <div style="height: 200vh; padding: 100px 20px;">
        <h1>測試內容（捲動看 sticky header）</h1>
        <p>捲動頁面，Header 應該固定在頂部</p>
    </div>
</body>
</html>
```

在瀏覽器開啟 `test-header.html`：
- 桌機版：導航列應水平顯示
- 手機版：應顯示漢堡選單按鈕
- Header 應該在捲動時固定在頂部
- Logo 和 APPLY 按鈕正確顯示

- [ ] **Step 5: Commit**

```bash
git add css/style.css test-header.html
git commit -m "feat: add Header navigation component

- Add sticky header with logo and navigation
- Add hamburger menu for mobile
- Add button styles for APPLY CTA
- Add responsive layout (mobile-first)"
```

---

## Task 4: 建立 Footer 共用元件

**Files:**
- Modify: `css/style.css` (新增 Footer 樣式)

**目標：** 建立頁尾，包含公司資訊、社群連結、版權聲明

- [ ] **Step 1: 在 CSS 中新增 Footer 樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Footer
   ======================================== */
.footer {
    background: #1a1a1a;
    color: var(--text-inverse);
    padding: var(--spacing-xl) 0 var(--spacing-md);
    margin-top: var(--spacing-2xl);
}

.footer-content {
    display: grid;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
}

@media (min-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(3, 1fr);
    }
}

.footer-section h3,
.footer-section h4 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-sm);
    color: var(--text-inverse);
}

.footer-section p {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
}

.social-links {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: var(--transition-base);
}

.social-links a:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
}

.footer-bottom {
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.footer-bottom p {
    font-size: var(--font-size-sm);
    color: rgba(255, 255, 255, 0.5);
}
```

- [ ] **Step 2: 建立 Footer HTML 結構**

準備以下 HTML 片段：

```html
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>2nd STREET</h3>
                <p>日本最大二手時尚連鎖店</p>
            </div>

            <div class="footer-section">
                <h4>聯絡我們</h4>
                <p>Email: recruit@2ndstreet.jp</p>
            </div>

            <div class="footer-section">
                <h4>追蹤我們</h4>
                <div class="social-links">
                    <a href="#" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2020 2nd STREET. All rights reserved.</p>
        </div>
    </div>
</footer>
```

- [ ] **Step 3: 在測試檔案中加入 Footer**

在 `test-header.html` 的 `</body>` 前加入 Footer HTML

在瀏覽器測試：
- Footer 應顯示在頁面底部
- 三欄式排版（桌機版）
- 單欄式排版（手機版）
- 社群圖示 hover 效果正常

- [ ] **Step 4: Commit**

```bash
git add css/style.css test-header.html
git commit -m "feat: add Footer component

- Add footer with company info and social links
- Add responsive 3-column layout
- Add social icon hover effects"
```

---

## Task 5: 建立首頁（index.html）- Part 1: 基礎結構

**Files:**
- Create: `index.html`
- Modify: `css/style.css` (新增首頁專用樣式)

**目標：** 建立首頁基礎 HTML 結構，包含 Hero 區塊

- [ ] **Step 1: 建立 index.html 基礎結構**

建立 `index.html`：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta -->
    <title>2nd STREET 招募 - 加入日本最大二手時尚團隊</title>
    <meta name="description" content="2nd STREET 正在招募熱愛時尚的你！了解工作環境、員工故事和福利待遇。">
    <meta name="keywords" content="2nd STREET, 招募, 時尚, 二手衣, 工作機會">

    <!-- Open Graph -->
    <meta property="og:title" content="2nd STREET 招募">
    <meta property="og:description" content="加入日本最大二手時尚連鎖店">
    <meta property="og:image" content="assets/images/hero/team.jpg">
    <meta property="og:type" content="website">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link active">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-image">
                <img src="assets/images/hero/team.jpg" alt="2nd STREET 團隊" loading="eager">
            </div>
            <div class="hero-content">
                <h1 class="hero-title">加入我們的團隊</h1>
                <p class="hero-subtitle">一起創造時尚的未來</p>
            </div>
        </section>

        <!-- 其他區塊稍後加入 -->
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增 Hero Section 樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Hero Section
   ======================================== */
.hero {
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

@media (min-width: 768px) {
    .hero {
        min-height: 500px;
    }
}

@media (min-width: 1024px) {
    .hero {
        min-height: 600px;
    }
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
    );
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: var(--text-inverse);
    padding: var(--spacing-xl) var(--spacing-md);
}

.hero-title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}

@media (min-width: 768px) {
    .hero-title {
        font-size: var(--font-size-3xl);
    }
}

.hero-subtitle {
    font-size: var(--font-size-lg);
    font-weight: 400;
    opacity: 0.9;
}

@media (min-width: 768px) {
    .hero-subtitle {
        font-size: var(--font-size-xl);
    }
}
```

- [ ] **Step 3: 測試首頁**

在瀏覽器開啟 `index.html`：
- Hero 圖片應全寬顯示
- Hero 文字居中顯示在圖片上方
- Header 和 Footer 正常顯示
- 響應式設計正常（手機/平板/桌機）

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: create index.html with Hero section

- Add HTML structure with SEO meta tags
- Add Hero section with full-width image
- Add centered hero content overlay"
```

---

## Task 6: 完成首頁（index.html）- Part 2: 招募資訊與公司簡介

**Files:**
- Modify: `index.html` (新增區塊)
- Modify: `css/style.css` (新增樣式)

**目標：** 完成首頁其他區塊

- [ ] **Step 1: 在 index.html 新增招募資訊區塊**

在 `<main>` 中 Hero Section 後加入：

```html
        <!-- Recruitment Highlight -->
        <section class="recruitment-highlight">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">2020年 五福徵纖</h2>
                    <p class="section-subtitle">加入我們的團隊！</p>
                </div>

                <div class="highlight-content">
                    <p>我們正在尋找充滿熱情、熱愛時尚的你！<br>
                    在 2nd STREET，你將有機會接觸最新的二手時尚潮流，<br>
                    與志同道合的夥伴一起成長。</p>

                    <a href="recruit.html" class="btn btn-primary btn-lg">查看職缺</a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <h2 class="section-title">關於 2nd STREET</h2>
                        <p>2nd STREET 是日本最大的二手時尚連鎖店，致力於推廣永續時尚理念。我們相信每件衣服都有它的故事，每位員工都是時尚的傳播者。</p>
                        <p>加入我們，一起創造時尚的循環價值。</p>
                    </div>

                    <div class="about-logo">
                        <img src="assets/images/logo.png" alt="2nd STREET Logo">
                    </div>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: 新增區塊樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Section Common Styles
   ======================================== */
section {
    padding: var(--spacing-xl) 0;
}

@media (min-width: 1024px) {
    section {
        padding: var(--spacing-2xl) 0;
    }
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.section-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

@media (min-width: 768px) {
    .section-title {
        font-size: var(--font-size-2xl);
    }
}

.section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
}

/* ========================================
   Recruitment Highlight Section
   ======================================== */
.recruitment-highlight {
    background: var(--bg-secondary);
    text-align: center;
}

.highlight-content {
    max-width: 800px;
    margin: 0 auto;
}

.highlight-content p {
    font-size: var(--font-size-lg);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
}

.btn-lg {
    padding: 16px 48px;
    font-size: var(--font-size-lg);
}

/* ========================================
   About Section
   ======================================== */
.about-content {
    display: grid;
    gap: var(--spacing-lg);
    align-items: center;
}

@media (min-width: 768px) {
    .about-content {
        grid-template-columns: 2fr 1fr;
        gap: var(--spacing-xl);
    }
}

.about-text p {
    font-size: var(--font-size-base);
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.about-logo {
    text-align: center;
}

.about-logo img {
    max-width: 200px;
    margin: 0 auto;
}
```

- [ ] **Step 3: 測試首頁完整效果**

在瀏覽器開啟 `index.html`：
- Hero 區塊正常顯示
- 招募資訊區塊（灰色背景）正常顯示
- 公司簡介區塊（左文字、右 Logo）正常顯示
- 響應式設計正常

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: complete index.html with all sections

- Add recruitment highlight section
- Add about section with logo
- Add section common styles"
```

---

## Task 7: 建立 JavaScript 基礎功能

**Files:**
- Create: `js/main.js`

**目標：** 實作行動版選單、平滑捲動、當前頁面高亮

- [ ] **Step 1: 建立 main.js 並實作行動版選單**

建立 `js/main.js`：

```javascript
// ========================================
// 1. 行動版選單控制
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.querySelector('.nav-menu')

    if (!menuToggle || !navMenu) return

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')

        // 更新 ARIA 屬性
        menuToggle.setAttribute('aria-expanded', isActive)
    })

    // 點擊選單外部關閉
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navMenu.classList.remove('active')
            menuToggle.classList.remove('active')
            menuToggle.setAttribute('aria-expanded', 'false')
        }
    })

    // 點擊選單連結後關閉選單
    const navLinks = navMenu.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active')
            menuToggle.classList.remove('active')
            menuToggle.setAttribute('aria-expanded', 'false')
        })
    })
}

// ========================================
// 2. 平滑捲動
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const targetId = link.getAttribute('href')

            if (targetId === '#') return

            const target = document.querySelector(targetId)

            if (target) {
                const header = document.querySelector('.header')
                const headerHeight = header ? header.offsetHeight : 0
                const targetPosition = target.offsetTop - headerHeight

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })
            }
        })
    })
}

// ========================================
// 3. 當前頁面導航高亮
// ========================================
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'
    const navLinks = document.querySelectorAll('.nav-link')

    navLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href === currentPage) {
            link.classList.add('active')
        }
    })
}

// ========================================
// 初始化所有功能
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
})
```

- [ ] **Step 2: 測試 JavaScript 功能**

在手機模擬器或實際手機測試：
- 點擊漢堡選單，選單應滑入
- 點擊選單外部，選單應關閉
- 點擊選單連結，選單應關閉
- 當前頁面的導航連結應有紅色底線

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JavaScript core functionality

- Add mobile menu toggle
- Add smooth scroll for anchor links
- Add active navigation highlighting"
```

---

## Task 8: 建立 daily-work.html（工作日常頁面）

**Files:**
- Create: `daily-work.html`
- Modify: `css/style.css` (新增照片網格樣式)

**目標：** 建立工作環境照片網格頁面

- [ ] **Step 1: 建立 daily-work.html**

建立 `daily-work.html`：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>工作日常 - 2nd STREET 招募</title>
    <meta name="description" content="了解 2nd STREET 的工作環境與日常，看看我們的團隊如何創造時尚價值。">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page Title -->
        <section class="page-title">
            <div class="container">
                <h1>深入了解</h1>
                <p>探索 2nd STREET 的工作環境</p>
            </div>
        </section>

        <!-- Photo Grid -->
        <section class="photo-grid-section">
            <div class="container">
                <div class="photo-grid">
                    <div class="photo-item">
                        <img src="assets/images/work/work-01.jpg" alt="工作環境照片 1" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-02.jpg" alt="工作環境照片 2" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-03.jpg" alt="工作環境照片 3" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-04.jpg" alt="工作環境照片 4" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-05.jpg" alt="工作環境照片 5" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-06.jpg" alt="工作環境照片 6" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-07.jpg" alt="工作環境照片 7" loading="lazy">
                    </div>
                    <div class="photo-item">
                        <img src="assets/images/work/work-08.jpg" alt="工作環境照片 8" loading="lazy">
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增照片網格樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Page Title
   ======================================== */
.page-title {
    padding: var(--spacing-xl) 0;
    text-align: center;
    background: var(--bg-secondary);
}

.page-title h1 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

@media (min-width: 768px) {
    .page-title h1 {
        font-size: var(--font-size-3xl);
    }
}

.page-title p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
}

/* ========================================
   Photo Grid
   ======================================== */
.photo-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .photo-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .photo-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-lg);
    }
}

@media (min-width: 1440px) {
    .photo-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.photo-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-md);
    aspect-ratio: 4 / 3;
    background: var(--bg-secondary);
}

.photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.photo-item:hover img {
    transform: scale(1.05);
}
```

- [ ] **Step 3: 測試 daily-work.html**

在瀏覽器開啟 `daily-work.html`：
- 照片網格正常顯示
- 響應式：手機 1 欄、平板 2 欄、桌機 3-4 欄
- Hover 效果：圖片微放大
- 圖片懶載入正常

- [ ] **Step 4: Commit**

```bash
git add daily-work.html css/style.css
git commit -m "feat: create daily-work.html with photo grid

- Add page title section
- Add responsive photo grid (1/2/3/4 columns)
- Add image hover zoom effect"
```

---

## Task 9: 建立 stories.html（員工故事頁面）

**Files:**
- Create: `stories.html`
- Modify: `css/style.css` (新增卡片樣式)

**目標：** 建立員工個人檔案卡片頁面

- [ ] **Step 1: 建立 stories.html**

建立 `stories.html`（使用與 daily-work.html 相同的 Header/Footer）：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>員工故事 - 2nd STREET 招募</title>
    <meta name="description" content="聽聽 2nd STREET 員工的真實故事，了解他們的工作經驗與成長歷程。">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header（同 daily-work.html）-->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link active">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page Title -->
        <section class="page-title">
            <div class="container">
                <h1>住員故事</h1>
                <p>聽聽我們的團隊成員分享他們的經驗</p>
            </div>
        </section>

        <!-- Staff Cards -->
        <section class="staff-cards-section">
            <div class="container">
                <div class="staff-cards">
                    <!-- Staff Card 1 -->
                    <div class="card staff-card">
                        <div class="card-image">
                            <img src="assets/images/staff/staff-01.jpg" alt="員工照片" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">田中 太郎</h3>
                            <p class="card-role">店舗スタッフ</p>
                            <p class="card-text">加入 2nd STREET 後，我學會了時尚搭配的技巧，也認識了許多志同道合的朋友。每天都充滿新鮮感！</p>
                        </div>
                    </div>

                    <!-- Staff Card 2 -->
                    <div class="card staff-card">
                        <div class="card-image">
                            <img src="assets/images/staff/staff-02.jpg" alt="員工照片" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">佐藤 花子</h3>
                            <p class="card-role">店長</p>
                            <p class="card-text">從店員晉升到店長，2nd STREET 給了我很多成長的機會。我喜歡這裡的工作氛圍和團隊文化。</p>
                        </div>
                    </div>

                    <!-- Staff Card 3 -->
                    <div class="card staff-card">
                        <div class="card-image">
                            <img src="assets/images/staff/staff-03.jpg" alt="員工照片" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">鈴木 一郎</h3>
                            <p class="card-role">店舗スタッフ</p>
                            <p class="card-text">我一直對時尚很感興趣，在這裡我可以將興趣與工作結合，每天都過得很充實。</p>
                        </div>
                    </div>

                    <!-- Staff Card 4 -->
                    <div class="card staff-card">
                        <div class="card-image">
                            <img src="assets/images/staff/staff-04.jpg" alt="員工照片" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">高橋 美咲</h3>
                            <p class="card-role">副店長</p>
                            <p class="card-text">2nd STREET 的教育訓練很完善，讓我快速成長。現在我也能指導新進員工了。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer（同 daily-work.html）-->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增員工卡片樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Cards
   ======================================== */
.card {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: all var(--transition-base);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.card-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--bg-secondary);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.card:hover .card-image img {
    transform: scale(1.05);
}

.card-content {
    padding: var(--spacing-md);
}

.card-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.card-role {
    font-size: var(--font-size-sm);
    color: var(--text-accent);
    font-weight: 500;
    margin-bottom: var(--spacing-md);
}

.card-text {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.8;
}

/* ========================================
   Staff Cards Grid
   ======================================== */
.staff-cards {
    display: grid;
    gap: var(--spacing-lg);
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .staff-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
    }
}

.staff-card {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.staff-card .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.staff-card .card-text {
    flex: 1;
}
```

- [ ] **Step 3: 測試 stories.html**

在瀏覽器開啟 `stories.html`：
- 員工卡片正常顯示
- 響應式：手機 1 欄、平板/桌機 2 欄
- Hover 效果：卡片上浮、圖片放大
- 卡片高度一致

- [ ] **Step 4: Commit**

```bash
git add stories.html css/style.css
git commit -m "feat: create stories.html with staff profile cards

- Add staff cards grid (1/2 columns)
- Add card component with hover effects
- Add staff role labels"
```

---

## Task 10: 建立 recruit.html（招募資訊頁面）

**Files:**
- Create: `recruit.html`
- Modify: `css/style.css` (新增招募資訊樣式)

**目標：** 建立招募資訊頁面，包含職缺列表、福利待遇、應徵流程

- [ ] **Step 1: 建立 recruit.html**

建立 `recruit.html`：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>招募資訊 - 2nd STREET 招募</title>
    <meta name="description" content="查看 2nd STREET 最新職缺、福利待遇與應徵流程。歡迎加入我們的團隊！">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link active">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page Title -->
        <section class="page-title">
            <div class="container">
                <h1>招募資訊</h1>
                <p>加入 2nd STREET，開啟你的時尚職涯</p>
            </div>
        </section>

        <!-- Job Positions -->
        <section class="job-positions-section">
            <div class="container">
                <h2 class="section-title">現正招募職缺</h2>

                <div class="job-list">
                    <!-- Job Item 1 -->
                    <div class="job-item">
                        <h3 class="job-title">店舗スタッフ（門市人員）</h3>
                        <div class="job-tags">
                            <span class="tag">全職</span>
                            <span class="tag">兼職</span>
                        </div>
                        <p class="job-description">
                            負責門市銷售、顧客服務、商品陳列與收購鑑定。<br>
                            歡迎對時尚有熱情的你加入！
                        </p>
                        <ul class="job-requirements">
                            <li>高中職以上學歷</li>
                            <li>具備良好溝通能力</li>
                            <li>對時尚有興趣者佳</li>
                        </ul>
                        <a href="mailto:recruit@2ndstreet.jp?subject=應徵：店舗スタッフ" class="btn btn-outline">立即應徵</a>
                    </div>

                    <!-- Job Item 2 -->
                    <div class="job-item">
                        <h3 class="job-title">店長候補</h3>
                        <div class="job-tags">
                            <span class="tag">全職</span>
                        </div>
                        <p class="job-description">
                            協助店長管理門市營運、人員培訓、業績管理。<br>
                            培訓期滿後可晉升為店長。
                        </p>
                        <ul class="job-requirements">
                            <li>大專以上學歷</li>
                            <li>具零售業經驗 1 年以上</li>
                            <li>具備領導能力與責任感</li>
                        </ul>
                        <a href="mailto:recruit@2ndstreet.jp?subject=應徵：店長候補" class="btn btn-outline">立即應徵</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="benefits-section">
            <div class="container">
                <h2 class="section-title">福利待遇</h2>

                <div class="benefits-grid">
                    <div class="benefit-item">
                        <div class="benefit-icon">💰</div>
                        <h3>優渥薪資</h3>
                        <p>業界競爭力薪資，年終獎金、績效獎金</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">📚</div>
                        <h3>教育訓練</h3>
                        <p>完整的新人訓練、定期進修課程</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">🎯</div>
                        <h3>升遷管道</h3>
                        <p>明確的職涯發展路徑，表現優異者快速晉升</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">🛍️</div>
                        <h3>員工優惠</h3>
                        <p>員工購物優惠、制服提供</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">🏥</div>
                        <h3>完善保險</h3>
                        <p>勞健保、團體保險</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">🎉</div>
                        <h3>團隊活動</h3>
                        <p>員工聚餐、旅遊、慶生會</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Application Process -->
        <section class="process-section">
            <div class="container">
                <h2 class="section-title">應徵流程</h2>

                <div class="process-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3 class="step-title">投遞履歷</h3>
                        <p class="step-description">將履歷寄至 recruit@2ndstreet.jp</p>
                    </div>

                    <div class="step">
                        <div class="step-number">2</div>
                        <h3 class="step-title">書面審核</h3>
                        <p class="step-description">約 3-5 個工作天通知審核結果</p>
                    </div>

                    <div class="step">
                        <div class="step-number">3</div>
                        <h3 class="step-title">面試</h3>
                        <p class="step-description">一對一面試，了解您的經驗與期望</p>
                    </div>

                    <div class="step">
                        <div class="step-number">4</div>
                        <h3 class="step-title">錄取通知</h3>
                        <p class="step-description">面試後 3 個工作天內通知結果</p>
                    </div>
                </div>

                <div class="cta-section">
                    <h3>準備好加入我們了嗎？</h3>
                    <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary btn-lg">立即應徵</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增招募資訊樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Job List
   ======================================== */
.job-list {
    display: grid;
    gap: var(--spacing-xl);
}

.job-item {
    padding: var(--spacing-lg);
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.job-item:hover {
    border-color: var(--border-accent);
    box-shadow: var(--shadow-md);
}

.job-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.job-tags {
    display: flex;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
}

.tag {
    display: inline-block;
    padding: 4px 12px;
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-sm);
}

.job-description {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
}

.job-requirements {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--spacing-lg) 0;
}

.job-requirements li {
    position: relative;
    padding-left: 20px;
    margin-bottom: var(--spacing-xs);
    color: var(--text-secondary);
}

.job-requirements li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--text-accent);
    font-weight: 700;
}

/* ========================================
   Benefits Grid
   ======================================== */
.benefits-section {
    background: var(--bg-secondary);
}

.benefits-grid {
    display: grid;
    gap: var(--spacing-lg);
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
    }
}

@media (min-width: 1024px) {
    .benefits-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.benefit-item {
    text-align: center;
    padding: var(--spacing-lg);
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.benefit-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

.benefit-icon {
    font-size: 48px;
    margin-bottom: var(--spacing-md);
}

.benefit-item h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.benefit-item p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}

/* ========================================
   Application Process
   ======================================== */
.process-steps {
    display: grid;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}

@media (min-width: 768px) {
    .process-steps {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
    }
}

@media (min-width: 1024px) {
    .process-steps {
        grid-template-columns: repeat(4, 1fr);
    }
}

.step {
    text-align: center;
}

.step-number {
    width: 64px;
    height: 64px;
    margin: 0 auto var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--text-inverse);
    background: var(--bg-accent);
    border-radius: 50%;
}

.step-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.step-description {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}

.cta-section {
    text-align: center;
    padding: var(--spacing-xl);
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
}

.cta-section h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
}
```

- [ ] **Step 3: 測試 recruit.html**

在瀏覽器開啟 `recruit.html`：
- 職缺列表正常顯示
- 福利待遇網格（3 欄）正常顯示
- 應徵流程步驟（4 步驟）正常顯示
- Hover 效果正常
- 響應式設計正常

- [ ] **Step 4: Commit**

```bash
git add recruit.html css/style.css
git commit -m "feat: create recruit.html with job listings

- Add job positions with tags and requirements
- Add benefits grid (3 columns)
- Add application process steps
- Add CTA section"
```

---

## Task 11: 建立 job-intro.html（工作介紹頁面）

**Files:**
- Create: `job-intro.html`
- Modify: `css/style.css` (新增工作介紹樣式)

**目標：** 建立工作內容介紹頁面

- [ ] **Step 1: 建立 job-intro.html**

建立 `job-intro.html`：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>工作介紹 - 2nd STREET 招募</title>
    <meta name="description" content="了解 2nd STREET 的工作內容、一天的工作流程與職務職責。">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link active">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page Title -->
        <section class="page-title">
            <div class="container">
                <h1>工作介紹</h1>
                <p>了解在 2nd STREET 的日常工作</p>
            </div>
        </section>

        <!-- Job Overview -->
        <section class="job-overview-section">
            <div class="container">
                <h2 class="section-title">工作內容</h2>

                <div class="job-overview-grid">
                    <div class="overview-card">
                        <div class="overview-icon">🛍️</div>
                        <h3>門市銷售</h3>
                        <p>協助顧客挑選商品、提供時尚建議、完成結帳流程，創造優質購物體驗。</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">👔</div>
                        <h3>商品收購</h3>
                        <p>鑑定二手商品價值、評估品質與市場行情，進行收購作業。</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">📦</div>
                        <h3>商品陳列</h3>
                        <p>規劃賣場陳列、搭配展示、維護商品整潔，打造吸引人的購物環境。</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">💻</div>
                        <h3>庫存管理</h3>
                        <p>管理商品進出、盤點庫存、維護系統資料，確保庫存準確。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Daily Schedule -->
        <section class="schedule-section">
            <div class="container">
                <h2 class="section-title">一天的工作流程</h2>

                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-time">10:00</div>
                        <div class="timeline-content">
                            <h3>開店準備</h3>
                            <p>清潔賣場、檢查商品陳列、準備收銀系統</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-time">11:00</div>
                        <div class="timeline-content">
                            <h3>營業開始</h3>
                            <p>接待顧客、提供購物諮詢、處理收購業務</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-time">13:00</div>
                        <div class="timeline-content">
                            <h3>午休時間</h3>
                            <p>輪班休息，享用午餐</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-time">14:00</div>
                        <div class="timeline-content">
                            <h3>下午營業</h3>
                            <p>繼續接待顧客、整理新進商品、更新陳列</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-time">18:00</div>
                        <div class="timeline-content">
                            <h3>晚間尖峰</h3>
                            <p>處理下班時段較多的顧客需求</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-time">20:00</div>
                        <div class="timeline-content">
                            <h3>收店作業</h3>
                            <p>結算帳務、清潔整理、關店離開</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Required -->
        <section class="skills-section">
            <div class="container">
                <h2 class="section-title">我們重視的特質</h2>

                <div class="skills-grid">
                    <div class="skill-card">
                        <h3>溝通能力</h3>
                        <p>良好的顧客服務與團隊合作能力</p>
                    </div>

                    <div class="skill-card">
                        <h3>時尚敏感度</h3>
                        <p>對流行趨勢保持關注與興趣</p>
                    </div>

                    <div class="skill-card">
                        <h3>責任感</h3>
                        <p>認真負責，能獨立完成工作</p>
                    </div>

                    <div class="skill-card">
                        <h3>學習熱忱</h3>
                        <p>願意學習新知識與技能</p>
                    </div>

                    <div class="skill-card">
                        <h3>細心度</h3>
                        <p>注重細節，維持商品與環境品質</p>
                    </div>

                    <div class="skill-card">
                        <h3>彈性</h3>
                        <p>能配合排班，適應不同工作需求</p>
                    </div>
                </div>

                <div class="cta-section">
                    <p>覺得自己適合這份工作嗎？</p>
                    <a href="recruit.html" class="btn btn-primary btn-lg">查看職缺</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增工作介紹樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Job Overview Grid
   ======================================== */
.job-overview-grid {
    display: grid;
    gap: var(--spacing-lg);
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .job-overview-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
    }
}

.overview-card {
    padding: var(--spacing-lg);
    background: var(--bg-primary);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    text-align: center;
    transition: all var(--transition-base);
}

.overview-card:hover {
    border-color: var(--border-accent);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

.overview-icon {
    font-size: 56px;
    margin-bottom: var(--spacing-md);
}

.overview-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.overview-card p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}

/* ========================================
   Timeline
   ======================================== */
.schedule-section {
    background: var(--bg-secondary);
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-color);
}

@media (max-width: 767px) {
    .timeline::before {
        left: 60px;
    }
}

.timeline-item {
    position: relative;
    padding-left: 120px;
    margin-bottom: var(--spacing-xl);
}

@media (max-width: 767px) {
    .timeline-item {
        padding-left: 100px;
    }
}

.timeline-time {
    position: absolute;
    left: 0;
    width: 80px;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--text-accent);
}

@media (max-width: 767px) {
    .timeline-time {
        width: 60px;
        font-size: var(--font-size-base);
    }
}

.timeline-content {
    position: relative;
    padding: var(--spacing-md);
    background: var(--bg-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
}

.timeline-content::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 20px;
    width: 16px;
    height: 16px;
    background: var(--bg-accent);
    border: 3px solid var(--bg-primary);
    border-radius: 50%;
    box-shadow: 0 0 0 2px var(--bg-secondary);
}

.timeline-content h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.timeline-content p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}

/* ========================================
   Skills Grid
   ======================================== */
.skills-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: 1fr;
    margin-bottom: var(--spacing-2xl);
}

@media (min-width: 768px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-lg);
    }
}

@media (min-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.skill-card {
    padding: var(--spacing-md);
    background: var(--bg-secondary);
    border-left: 4px solid var(--border-accent);
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
}

.skill-card:hover {
    transform: translateX(4px);
    background: var(--bg-primary);
    box-shadow: var(--shadow-sm);
}

.skill-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.skill-card p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}
```

- [ ] **Step 3: 測試 job-intro.html**

在瀏覽器開啟 `job-intro.html`：
- 工作內容卡片正常顯示
- 時間軸（timeline）正常顯示
- 特質網格正常顯示
- Hover 效果正常
- 響應式設計正常

- [ ] **Step 4: Commit**

```bash
git add job-intro.html css/style.css
git commit -m "feat: create job-intro.html with job details

- Add job overview cards with icons
- Add daily schedule timeline
- Add skills/qualities grid
- Add timeline component with vertical line"
```

---

## Task 12: 建立 evaluation.html（評價制度頁面）

**Files:**
- Create: `evaluation.html`
- Modify: `css/style.css` (如需新樣式)

**目標：** 建立評價制度說明頁面

- [ ] **Step 1: 建立 evaluation.html**

建立 `evaluation.html`（使用已有的樣式組件）：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>評價制度 - 2nd STREET 招募</title>
    <meta name="description" content="了解 2nd STREET 的績效評價制度、晉升機制與職涯發展路徑。">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="2nd STREET">
            </a>

            <button class="menu-toggle" aria-label="開啟選單" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <a href="index.html" class="nav-link">ABOUT</a>
                <a href="stories.html" class="nav-link">STORY</a>
                <a href="job-intro.html" class="nav-link">JOB</a>
                <a href="recruit.html" class="nav-link">RECRUIT</a>
                <a href="mailto:recruit@2ndstreet.jp" class="btn btn-primary">APPLY</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page Title -->
        <section class="page-title">
            <div class="container">
                <h1>評價制度</h1>
                <p>公平公開的績效評估與晉升制度</p>
            </div>
        </section>

        <!-- Evaluation System -->
        <section class="evaluation-system-section">
            <div class="container">
                <h2 class="section-title">評價項目</h2>

                <div class="job-overview-grid">
                    <div class="overview-card">
                        <div class="overview-icon">📊</div>
                        <h3>業績表現</h3>
                        <p>銷售業績、收購成果、目標達成率</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">🤝</div>
                        <h3>顧客服務</h3>
                        <p>顧客滿意度、服務態度、問題處理能力</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">👥</div>
                        <h3>團隊合作</h3>
                        <p>協作能力、溝通效率、團隊貢獻度</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">⚡</div>
                        <h3>工作效率</h3>
                        <p>任務完成速度、時間管理、多工處理</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">💡</div>
                        <h3>主動積極</h3>
                        <p>提案改善、學習意願、解決問題態度</p>
                    </div>

                    <div class="overview-card">
                        <div class="overview-icon">🎯</div>
                        <h3>專業知識</h3>
                        <p>商品知識、時尚敏感度、專業技能</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Career Path -->
        <section class="career-path-section">
            <div class="container">
                <h2 class="section-title">職涯發展路徑</h2>

                <div class="career-path">
                    <div class="path-stage">
                        <div class="stage-badge">LEVEL 1</div>
                        <h3>新進店員</h3>
                        <p>學習基礎業務、熟悉商品與系統操作</p>
                        <div class="stage-duration">入職 0-3 個月</div>
                    </div>

                    <div class="path-arrow">→</div>

                    <div class="path-stage">
                        <div class="stage-badge">LEVEL 2</div>
                        <h3>資深店員</h3>
                        <p>獨立處理業務、協助新人訓練</p>
                        <div class="stage-duration">入職 3-12 個月</div>
                    </div>

                    <div class="path-arrow">→</div>

                    <div class="path-stage">
                        <div class="stage-badge">LEVEL 3</div>
                        <h3>副店長</h3>
                        <p>協助店長管理、負責部分業務決策</p>
                        <div class="stage-duration">入職 1-2 年</div>
                    </div>

                    <div class="path-arrow">→</div>

                    <div class="path-stage">
                        <div class="stage-badge">LEVEL 4</div>
                        <h3>店長</h3>
                        <p>全店營運管理、團隊領導、業績負責</p>
                        <div class="stage-duration">入職 2 年以上</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Review Cycle -->
        <section class="review-cycle-section">
            <div class="container">
                <h2 class="section-title">評價週期</h2>

                <div class="benefits-grid">
                    <div class="benefit-item">
                        <div class="benefit-icon">📅</div>
                        <h3>每月評估</h3>
                        <p>月度業績檢討與回饋</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">📈</div>
                        <h3>季度考核</h3>
                        <p>季度績效評估與調薪審核</p>
                    </div>

                    <div class="benefit-item">
                        <div class="benefit-icon">🏆</div>
                        <h3>年度評鑑</h3>
                        <p>年度總評、晉升評估、獎金發放</p>
                    </div>
                </div>

                <div class="cta-section">
                    <p>想在這裡發展您的職涯嗎？</p>
                    <a href="recruit.html" class="btn btn-primary btn-lg">查看職缺</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>2nd STREET</h3>
                    <p>日本最大二手時尚連鎖店</p>
                </div>

                <div class="footer-section">
                    <h4>聯絡我們</h4>
                    <p>Email: recruit@2ndstreet.jp</p>
                </div>

                <div class="footer-section">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2020 2nd STREET. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 新增職涯路徑樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Career Path
   ======================================== */
.career-path-section {
    background: var(--bg-secondary);
}

.career-path {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    align-items: center;
}

@media (min-width: 1024px) {
    .career-path {
        flex-direction: row;
        justify-content: center;
    }
}

.path-stage {
    flex: 1;
    max-width: 240px;
    padding: var(--spacing-lg);
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.path-stage:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.stage-badge {
    display: inline-block;
    padding: 6px 16px;
    margin-bottom: var(--spacing-md);
    background: var(--bg-accent);
    color: var(--text-inverse);
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: var(--radius-full);
}

.path-stage h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.path-stage p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
}

.stage-duration {
    font-size: var(--font-size-sm);
    color: var(--text-accent);
    font-weight: 500;
}

.path-arrow {
    font-size: var(--font-size-2xl);
    color: var(--text-accent);
    font-weight: 700;
}

@media (min-width: 1024px) {
    .path-arrow {
        align-self: center;
    }
}

@media (max-width: 1023px) {
    .path-arrow {
        transform: rotate(90deg);
    }
}
```

- [ ] **Step 3: 測試 evaluation.html**

在瀏覽器開啟 `evaluation.html`：
- 評價項目網格正常顯示
- 職涯路徑（4 階段 + 箭頭）正常顯示
- 評價週期網格正常顯示
- 響應式：手機版箭頭垂直、桌機版水平
- Hover 效果正常

- [ ] **Step 4: Commit**

```bash
git add evaluation.html css/style.css
git commit -m "feat: create evaluation.html with career path

- Add evaluation criteria grid
- Add career path progression (4 stages)
- Add review cycle information
- Add responsive career path arrows"
```

---

## Task 13: 加入捲動動畫效果

**Files:**
- Modify: `js/main.js` (新增 Intersection Observer)

**目標：** 為區塊加入淡入動畫

- [ ] **Step 1: 在 main.js 新增捲動動畫功能**

在 `js/main.js` 新增：

```javascript
// ========================================
// 4. 捲動淡入動畫
// ========================================
function initScrollAnimations() {
    // 取得所有需要動畫的元素
    const animatedElements = document.querySelectorAll(
        'section, .card, .photo-item, .job-item, .benefit-item, .overview-card, .timeline-item, .skill-card, .path-stage'
    )

    if (!animatedElements.length) return

    // 建立 Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                    // 動畫完成後停止觀察（效能優化）
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    // 開始觀察所有元素
    animatedElements.forEach(el => {
        el.classList.add('animate-target')
        observer.observe(el)
    })
}

// ========================================
// 更新初始化：加入 initScrollAnimations
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
    initScrollAnimations()  // 新增這一行
})
```

- [ ] **Step 2: 在 CSS 新增動畫樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Scroll Animations
   ======================================== */
.animate-target {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-target.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* 為不同元素設定延遲，創造階梯效果 */
.photo-grid .photo-item:nth-child(1) { transition-delay: 0.1s; }
.photo-grid .photo-item:nth-child(2) { transition-delay: 0.2s; }
.photo-grid .photo-item:nth-child(3) { transition-delay: 0.3s; }
.photo-grid .photo-item:nth-child(4) { transition-delay: 0.4s; }

.staff-cards .staff-card:nth-child(1) { transition-delay: 0.1s; }
.staff-cards .staff-card:nth-child(2) { transition-delay: 0.2s; }
.staff-cards .staff-card:nth-child(3) { transition-delay: 0.3s; }
.staff-cards .staff-card:nth-child(4) { transition-delay: 0.4s; }

.benefits-grid .benefit-item:nth-child(1) { transition-delay: 0.1s; }
.benefits-grid .benefit-item:nth-child(2) { transition-delay: 0.2s; }
.benefits-grid .benefit-item:nth-child(3) { transition-delay: 0.3s; }
.benefits-grid .benefit-item:nth-child(4) { transition-delay: 0.4s; }
.benefits-grid .benefit-item:nth-child(5) { transition-delay: 0.5s; }
.benefits-grid .benefit-item:nth-child(6) { transition-delay: 0.6s; }

/* 減少動畫效果（遵循用戶偏好）*/
@media (prefers-reduced-motion: reduce) {
    .animate-target {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
```

- [ ] **Step 3: 測試捲動動畫**

在瀏覽器測試所有頁面：
- 捲動時區塊應淡入
- 卡片網格應有階梯延遲效果
- 動畫流暢不卡頓
- 在 macOS 系統偏好設定 → 輔助使用 → 顯示器 → 「減少動態效果」開啟時，動畫應消失

- [ ] **Step 4: Commit**

```bash
git add js/main.js css/style.css
git commit -m "feat: add scroll fade-in animations

- Add Intersection Observer for scroll detection
- Add fade-in animation with translateY
- Add staggered delays for grid items
- Respect prefers-reduced-motion"
```

---

## Task 14: 加入圖片懶載入優化

**Files:**
- Modify: `js/main.js` (新增圖片懶載入邏輯)

**目標：** 優化圖片載入效能

- [ ] **Step 1: 在 main.js 新增圖片懶載入功能**

在 `js/main.js` 新增：

```javascript
// ========================================
// 5. 圖片懶載入（瀏覽器原生支援 fallback）
// ========================================
function initLazyLoading() {
    // 檢查瀏覽器是否原生支援 loading="lazy"
    if ('loading' in HTMLImageElement.prototype) {
        // 已經在 HTML 中使用 loading="lazy"，無需額外處理
        return
    }

    // Fallback：使用 Intersection Observer 實作懶載入
    const lazyImages = document.querySelectorAll('img[loading="lazy"]')

    if (!lazyImages.length) return

    const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    if (img.dataset.src) {
                        img.src = img.dataset.src
                    }
                    img.classList.add('loaded')
                    imageObserver.unobserve(img)
                }
            })
        },
        {
            rootMargin: '50px'
        }
    )

    lazyImages.forEach(img => {
        imageObserver.observe(img)
    })
}

// ========================================
// 更新初始化：加入 initLazyLoading
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
    initScrollAnimations()
    initLazyLoading()  // 新增這一行
})
```

- [ ] **Step 2: 在 CSS 新增圖片載入樣式**

在 `css/style.css` 新增：

```css
/* ========================================
   Lazy Loading Images
   ======================================== */
img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img[loading="lazy"].loaded,
img[loading="lazy"]:not([src=""]) {
    opacity: 1;
}

/* 圖片載入時的佔位背景 */
.photo-item img,
.card-image img,
.hero-image img {
    background: var(--bg-secondary);
}
```

- [ ] **Step 3: 測試懶載入**

在瀏覽器測試：
- 開啟 DevTools → Network 分頁
- 重新載入頁面
- 捲動頁面，觀察圖片是否只在接近可視區域時才載入
- 初次載入時，畫面外的圖片不應立即載入

- [ ] **Step 4: Commit**

```bash
git add js/main.js css/style.css
git commit -m "feat: enhance image lazy loading

- Add Intersection Observer fallback for older browsers
- Add fade-in transition for loaded images
- Add placeholder background during loading"
```

---

## Task 15: 最終測試與優化

**Files:**
- N/A（測試階段）

**目標：** 全面測試網站功能與效能

- [ ] **Step 1: 功能測試**

測試所有頁面功能：

```bash
# 開啟本地伺服器
python3 -m http.server 8000
# 或使用 VS Code Live Server
```

**測試清單：**

1. **導航測試**
   - [ ] Header 所有連結正常
   - [ ] Footer 所有連結正常
   - [ ] 行動版選單開關正常
   - [ ] 當前頁面高亮正常

2. **頁面測試**（每頁檢查）
   - [ ] index.html 正常顯示
   - [ ] daily-work.html 正常顯示
   - [ ] stories.html 正常顯示
   - [ ] recruit.html 正常顯示
   - [ ] job-intro.html 正常顯示
   - [ ] evaluation.html 正常顯示

3. **響應式測試**
   - [ ] 375px（手機）正常
   - [ ] 768px（平板）正常
   - [ ] 1024px（桌機）正常
   - [ ] 1920px（大螢幕）正常

4. **互動測試**
   - [ ] Hover 效果正常
   - [ ] 捲動動畫正常
   - [ ] 圖片懶載入正常
   - [ ] 平滑捲動正常

5. **瀏覽器測試**
   - [ ] Chrome 正常
   - [ ] Firefox 正常
   - [ ] Safari 正常
   - [ ] Edge 正常

- [ ] **Step 2: 效能測試**

使用 Chrome DevTools Lighthouse 測試：

```
開啟 Chrome DevTools → Lighthouse → 選擇以下項目：
✓ Performance
✓ Accessibility
✓ Best Practices
✓ SEO

點擊 "Analyze page load"
```

**目標分數：**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

如有問題，根據建議進行優化。

- [ ] **Step 3: 無障礙測試**

檢查以下項目：
- [ ] 所有圖片有 `alt` 屬性
- [ ] 顏色對比度符合 WCAG AA
- [ ] 可用鍵盤完整操作
- [ ] ARIA 屬性正確
- [ ] 語意化 HTML 正確

- [ ] **Step 4: SEO 檢查**

每個頁面檢查：
- [ ] 有 `<title>` 標籤
- [ ] 有 `<meta name="description">` 標籤
- [ ] 標題層級正確（h1 → h2 → h3）
- [ ] 語意化標籤使用正確

- [ ] **Step 5: 記錄測試結果**

將測試結果記錄到專案 README：

```markdown
## 測試報告

### Lighthouse 分數（2026-07-16）
- Performance: XX
- Accessibility: XX
- Best Practices: XX
- SEO: XX

### 瀏覽器相容性
✓ Chrome 126+
✓ Firefox 127+
✓ Safari 17+
✓ Edge 126+

### 響應式測試
✓ 375px (Mobile)
✓ 768px (Tablet)
✓ 1024px (Desktop)
✓ 1920px (Large Desktop)
```

---

## Task 16: 清理與部署準備

**Files:**
- Modify: `js/main.js` (移除 console.log)
- Modify: `css/style.css` (移除註解掉的程式碼)
- Modify: `README.md` (更新專案說明)

**目標：** 清理程式碼，準備部署

- [ ] **Step 1: 清理 JavaScript**

檢查 `js/main.js`，確保：
- 移除所有 `console.log()`
- 移除註解掉的程式碼
- 確認沒有未使用的函式

- [ ] **Step 2: 清理 CSS**

檢查 `css/style.css`，確保：
- 移除註解掉的程式碼
- 確認沒有未使用的 CSS 規則
- CSS Variables 都有被使用

- [ ] **Step 3: 清理 HTML**

檢查所有 `.html` 檔案，確保：
- 移除註解掉的程式碼
- 移除測試用的佔位文字
- 確認所有圖片路徑正確

- [ ] **Step 4: 更新 README.md**

更新專案說明：

```markdown
# 2ndSTREET.html

純 HTML/CSS/JavaScript 靜態網站專案，2nd STREET 招募網站。

## 專案特色

- 純前端技術棧（HTML5 + CSS3 + Vanilla JS）
- 無需 npm、webpack 或任何建置流程
- 開箱即用，直接用瀏覽器開啟即可
- 響應式設計（RWD），支援各種裝置尺寸（375px+）
- 語意化 HTML，符合 SEO 最佳實踐
- 模組化的 CSS 架構（使用 CSS Variables）
- 原生 JavaScript，無需 jQuery 或其他函式庫
- Lighthouse 分數 90+ (Performance, Accessibility, SEO)

## 專案結構

\```
2ndSTREET/
├── index.html              # 首頁
├── daily-work.html         # 工作日常
├── stories.html            # 員工故事
├── recruit.html            # 招募資訊
├── job-intro.html          # 工作介紹
├── evaluation.html         # 評價制度
├── css/
│   └── style.css           # 主樣式表
├── js/
│   └── main.js             # 主 JavaScript
├── assets/
│   ├── images/             # 圖片資源
│   └── fonts/              # 字型檔案（如需要）
├── README.md               # 專案說明
├── CLAUDE.md               # Claude AI 開發指引
└── .gitignore              # Git 忽略
\```

## 功能清單

### 已實作功能

- **響應式導航列**
  - 桌面版：水平選單
  - 行動版：漢堡選單
  - 平滑捲動導航
  - 當前頁面高亮

- **六個頁面**
  - 首頁（Hero + 招募資訊 + 公司簡介）
  - 工作日常（照片網格）
  - 員工故事（員工卡片）
  - 招募資訊（職缺列表 + 福利 + 流程）
  - 工作介紹（工作內容 + 時間軸 + 特質）
  - 評價制度（評價項目 + 職涯路徑 + 週期）

- **互動效果**
  - 捲動淡入動畫（Intersection Observer）
  - 圖片懶載入
  - Hover 效果（卡片、按鈕、圖片）
  - 平滑捲動

- **效能優化**
  - 圖片 lazy loading
  - Intersection Observer 自動 unobserve
  - CSS 變數統一管理
  - 遵循 prefers-reduced-motion

## 瀏覽器支援

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 快速開始

### 方法一：直接開啟
直接用瀏覽器開啟 `index.html` 即可。

### 方法二：使用 Python 伺服器
\```bash
python3 -m http.server 8000
\```
然後開啟 `http://localhost:8000`

### 方法三：使用 VS Code Live Server
1. 安裝 Live Server 擴充功能
2. 右鍵 `index.html` → "Open with Live Server"

## 部署

此專案可部署到任何靜態網站託管服務：

- **GitHub Pages**: 推送到 GitHub，在 Settings → Pages 啟用
- **Netlify**: 拖曳整個資料夾或連結 GitHub repo
- **Vercel**: Import GitHub repository
- **Cloudflare Pages**: 連結 repo，無需建置指令

## 客製化

### 更改顏色主題
編輯 `css/style.css` 中的 CSS Variables：
\```css
:root {
    --color-primary: #000000;    /* 主要色 */
    --color-secondary: #E60012;  /* 次要色（紅色）*/
}
\```

### 更改內容
直接編輯對應的 `.html` 檔案。

### 更換圖片
將新圖片放入 `assets/images/` 並更新 HTML 中的路徑。

## License

MIT License

---

**Last Updated:** 2026-07-16
```

- [ ] **Step 5: 最終 Commit**

```bash
git add .
git commit -m "chore: final cleanup and deployment prep

- Remove console.log statements
- Remove commented code
- Update README with complete documentation
- Project ready for deployment"
```

- [ ] **Step 6: 建立 Git Tag（版本標記）**

```bash
git tag -a v1.0.0 -m "Release version 1.0.0 - 2nd STREET recruitment website"
git push origin v1.0.0
```

---

## 計畫完成！

**所有 16 個任務已完成。**

### 下一步建議：

1. **執行計畫**
   - 依序執行每個 Task 的步驟
   - 每個 Task 完成後立即 commit
   - 頻繁測試，確保每個功能正常

2. **部署網站**
   - 推送到 GitHub
   - 部署到 GitHub Pages / Netlify / Vercel

3. **持續改進**
   - 根據 Lighthouse 建議優化
   - 根據用戶反饋調整設計
   - 定期更新內容

### 實作重點提醒：

✅ **遵循 CLAUDE.md 規範**（純 HTML/CSS/JS，無框架）
✅ **Mobile-First RWD**（375px 起）
✅ **頻繁 Commit**（每個 Task 結束 commit）
✅ **DRY 原則**（重用 Header/Footer/CSS）
✅ **YAGNI**（只實作必要功能）
✅ **效能優先**（lazy loading, Intersection Observer）
✅ **無障礙**（ARIA, 語意化 HTML, keyboard navigation）

**準備好開始實作了嗎？🚀**