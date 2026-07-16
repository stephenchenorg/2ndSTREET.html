# 2nd STREET 招募網站 - Figma 設計完整實作規格

**日期：** 2026-07-16
**專案：** 2ndSTREET.html
**設計來源：** Figma (https://www.figma.com/design/kQBjfyqxaPFpNmWnZoq54Z/2ndSTREET?node-id=2442-9145)
**實作方式：** 完全重寫（方案 1）

---

## 專案概述

### 目標
將 Figma 設計的 2nd STREET 日本二手時尚品牌招募網站，完整轉換為純 HTML/CSS/JavaScript 靜態網站。

### 技術限制
- **必須使用：** HTML5、CSS3、Vanilla JavaScript (ES6+)
- **禁止使用：** 任何框架、建置工具、npm 套件、CSS 預處理器

### 核心需求
- ✅ 多頁網站架構（6 個 HTML 頁面）
- ✅ 真正的響應式設計（RWD）- 支援手機 375px 起
- ✅ 從 Figma 自動下載所有圖片素材
- ✅ 使用 Figma 原始文字內容
- ✅ 基礎互動效果（hover、平滑捲動、淡入動畫）
- ✅ CTA 按鈕使用 mailto: 或外部連結

---

## 檔案結構

```
2ndSTREET/
├── index.html              # 首頁（Hero + 招募摘要 + 公司簡介）
├── daily-work.html         # 工作日常（工作環境照片網格）
├── stories.html            # 員工故事（員工個人檔案）
├── recruit.html            # 招募資訊（完整招募內容）
├── job-intro.html          # 工作介紹（職務說明）
├── evaluation.html         # 評價制度（晉升機制）
├── css/
│   └── style.css           # 統一樣式表
├── js/
│   └── main.js             # 統一 JavaScript
├── assets/
│   ├── images/
│   │   ├── logo.png        # 2nd STREET Logo
│   │   ├── hero/           # Hero 區塊圖片
│   │   │   └── team.jpg    # 員工團隊照片
│   │   ├── work/           # 工作環境照片
│   │   │   ├── work-01.jpg
│   │   │   ├── work-02.jpg
│   │   │   └── ... (共 8 張)
│   │   ├── staff/          # 員工照片
│   │   │   ├── staff-01.jpg
│   │   │   ├── staff-02.jpg
│   │   │   └── ... (共 4-6 張)
│   │   └── icons/          # 圖示
│   │       └── ...
│   └── fonts/              # 字型檔案（如需要）
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-07-16-2ndstreet-figma-implementation-design.md
├── README.md
├── CLAUDE.md
└── .gitignore
```

---

## 頁面架構與導航

### 導航結構

所有頁面共用相同的 Header 導航列：

```
Header
├── Logo (左側) → index.html
└── Navigation (右側)
    ├── ABOUT → index.html
    ├── STORY → stories.html
    ├── JOB → job-intro.html
    ├── RECRUIT → recruit.html
    └── APPLY (按鈕樣式) → mailto:recruit@2ndstreet.jp
```

### 頁面內容分配

#### 1. index.html（首頁）

**功能：** 網站入口，展示品牌形象和招募亮點

**區塊：**
1. **Header** - 導航列
2. **Hero Section** - 全寬員工團隊照片 + 主標題
3. **Recruitment Highlight** - 招募資訊摘要（2020年 五福徵纖）
4. **About Section** - 關於 2nd STREET 簡介 + Logo + 圖片
5. **Footer** - 頁尾資訊

**CTA：** 前往 recruit.html

---

#### 2. daily-work.html（工作日常）

**功能：** 展示實際工作環境，讓求職者了解工作氛圍

**區塊：**
1. **Header** - 導航列
2. **Page Title** - 「深入了解」標題區塊
3. **Photo Grid** - 工作環境照片網格（8 張照片）
   - 桌機：3-4 欄
   - 平板：2 欄
   - 手機：1 欄
4. **Footer** - 頁尾資訊

**圖片來源：** Figma 中的工作環境照片

---

#### 3. stories.html（員工故事）

**功能：** 展示員工真實經驗，建立信任感

**區塊：**
1. **Header** - 導航列
2. **Page Title** - 「住員故事」標題區塊
3. **Staff Cards** - 員工檔案卡片網格（4-6 位員工）
   - 員工照片
   - 姓名
   - 職位
   - 簡短介紹（從 Figma 提取）
   - 桌機/平板：2 欄
   - 手機：1 欄
4. **Footer** - 頁尾資訊

**卡片設計：**
- 白色背景
- 圓角陰影
- Hover 效果：上浮 + 陰影加深

---

#### 4. recruit.html（招募資訊）

**功能：** 完整招募資訊與應徵說明

**區塊：**
1. **Header** - 導航列
2. **Title Section** - 「2020年 五福徵纖」標題
3. **Recruitment Content**
   - 職缺資訊
   - 應徵條件
   - 工作內容
   - 福利待遇
   - 工作地點
4. **CTA Section** - 大型「應徵」按鈕（mailto: 或外部連結）
5. **Footer** - 頁尾資訊

**內容來源：** 從 Figma 提取原文

---

#### 5. job-intro.html（工作介紹）

**功能：** 詳細說明工作職務內容

**區塊：**
1. **Header** - 導航列
2. **Title Section** - 工作介紹標題
3. **Job Description**
   - 職務說明
   - 工作項目列表
   - 技能要求
   - 圖片搭配說明
4. **Footer** - 頁尾資訊

---

#### 6. evaluation.html（評價制度）

**功能：** 說明員工評價與晉升機制

**區塊：**
1. **Header** - 導航列
2. **Title Section** - 評價制度標題
3. **Evaluation Content**
   - 評價機制說明
   - 晉升制度
   - 獎勵系統
   - 圖示或圖表展示（如有）
4. **Footer** - 頁尾資訊

---

## 設計系統（Design Tokens）

### CSS Variables

```css
:root {
    /* ========================================
       品牌色彩
       ======================================== */
    --color-primary: #000000;        /* 黑色（導航、主要元素）*/
    --color-secondary: #E60012;      /* 紅色（重點、CTA）*/
    --color-accent: #FFFFFF;         /* 白色（文字、背景）*/
    --color-gray-light: #F5F5F5;     /* 淺灰（背景）*/
    --color-gray-dark: #666666;      /* 深灰（次要文字）*/

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
       間距系統（基於 8px grid）
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
```

### 響應式斷點

```css
/* 手機版（預設）: < 768px */
/* 平板版: ≥ 768px */
/* 桌機版: ≥ 1024px */
/* 大螢幕: ≥ 1440px */
/* Figma 設計基準: ≥ 1920px */
```

---

## 響應式設計（RWD）

### Mobile-First 策略

**重要決策：** 業主原要求最小寬度 700px，經溝通後採用業界標準 RWD（375px 起），以確保：
- 手機使用者體驗
- SEO 友善性
- 最大化觸及求職者

### 斷點設計

#### 手機版（< 768px）

**版面配置：**
- 單欄式排版
- 漢堡選單（Hamburger Menu）
- 圖片全寬顯示
- 堆疊式卡片

**導航：**
```css
.nav-menu {
    display: none;  /* 預設隱藏 */
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: var(--bg-dark);
    transition: right var(--transition-base);
}

.nav-menu.active {
    right: 0;
}

.menu-toggle {
    display: block;  /* 顯示漢堡圖示 */
}
```

---

#### 平板版（768px - 1023px）

**版面配置：**
- 雙欄式排版（部分區塊）
- 完整導航列
- Photo Grid: 2 欄
- Staff Cards: 2 欄

**導航：**
```css
@media (min-width: 768px) {
    .nav-menu {
        display: flex;
        position: static;
        width: auto;
        height: auto;
        background: transparent;
    }

    .menu-toggle {
        display: none;
    }
}
```

---

#### 桌機版（≥ 1024px）

**版面配置：**
- 多欄式排版
- 完整視覺效果
- Photo Grid: 3-4 欄
- Staff Cards: 2 欄（更寬）
- 符合 Figma 設計

**Container 寬度：**
```css
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
        padding: var(--spacing-xl);
    }
}

@media (min-width: 1440px) {
    .container {
        max-width: 1200px;
    }
}

@media (min-width: 1920px) {
    .container {
        max-width: 1920px;
    }
}
```

---

## 共用元件設計

### Header（導航列）

**視覺設計：**
- 黑色背景（#000000）
- 白色文字
- 固定在頂部（sticky）
- 高度：80px（桌機）/ 60px（手機）

**HTML 結構：**
```html
<header class="header">
    <div class="container">
        <a href="index.html" class="logo">
            <img src="assets/images/logo.png" alt="2nd STREET">
        </a>

        <button class="menu-toggle" aria-label="開啟選單">
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

**CSS 重點：**
```css
.header {
    position: sticky;
    top: 0;
    background: var(--bg-dark);
    color: var(--text-inverse);
    z-index: 1000;
    box-shadow: var(--shadow-sm);
}

.nav-link {
    position: relative;
    transition: var(--transition-fast);
}

.nav-link:hover {
    color: var(--color-secondary);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-secondary);
    transition: width var(--transition-base);
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

---

### Footer（頁尾）

**視覺設計：**
- 深灰背景
- 白色文字
- 分為三區：公司資訊、社群連結、版權聲明

**HTML 結構：**
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
                        <i class="icon-instagram"></i>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <i class="icon-facebook"></i>
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

---

### 按鈕系統

**主要按鈕（Primary）：**
```css
.btn {
    display: inline-block;
    padding: 12px 32px;
    font-size: var(--font-size-base);
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: var(--transition-base);
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
```

**次要按鈕（Secondary）：**
```css
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

---

### 卡片系統

**基礎卡片：**
```css
.card {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: var(--transition-base);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.card img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform var(--transition-slow);
}

.card:hover img {
    transform: scale(1.05);
}

.card-content {
    padding: var(--spacing-md);
}

.card-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.card-text {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
}
```

---

## JavaScript 功能模組

### main.js 架構

```javascript
// ========================================
// 1. 行動版選單控制
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.querySelector('.nav-menu')

    if (!menuToggle || !navMenu) return

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')

        // 切換 ARIA 屬性
        const isOpen = navMenu.classList.contains('active')
        menuToggle.setAttribute('aria-expanded', isOpen)
    })

    // 點擊選單外部關閉
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navMenu.classList.remove('active')
            menuToggle.classList.remove('active')
        }
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
            const target = document.querySelector(targetId)

            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight
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
// 3. 捲動動畫（Intersection Observer）
// ========================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    })

    elements.forEach(el => observer.observe(el))
}

// ========================================
// 4. 圖片懶載入
// ========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]')

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.classList.add('loaded')
                imageObserver.unobserve(img)
            }
        })
    })

    images.forEach(img => imageObserver.observe(img))
}

// ========================================
// 5. 當前頁面導航高亮
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
    initScrollAnimations()
    initLazyLoading()
    initActiveNav()
})
```

---

## 互動效果詳細規格

### 1. 按鈕 Hover 效果

**視覺變化：**
- 上移 2px
- 陰影加深
- 背景顏色變深（主要按鈕）

**CSS 實作：**
```css
.btn {
    transition: all var(--transition-base);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn:active {
    transform: translateY(0);
}
```

---

### 2. 導航連結 Hover

**視覺變化：**
- 文字變紅色
- 底部出現紅色底線動畫（從左到右）

**CSS 實作：**
```css
.nav-link {
    position: relative;
    transition: color var(--transition-fast);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
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
```

---

### 3. 卡片 Hover 效果

**視覺變化：**
- 卡片上浮 4px
- 陰影加深
- 圖片微放大 5%

**CSS 實作：**
```css
.card {
    transition: all var(--transition-base);
    overflow: hidden;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.card img {
    transition: transform var(--transition-slow);
}

.card:hover img {
    transform: scale(1.05);
}
```

---

### 4. 淡入動畫

**觸發時機：** 元素進入視窗時

**視覺變化：**
- 從透明到不透明
- 從下方 20px 滑入

**CSS 實作：**
```css
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**HTML 使用：**
```html
<section class="fade-in">
    <!-- 內容 -->
</section>
```

---

### 5. 圖片懶載入

**實作方式：**
```html
<img data-src="assets/images/photo.jpg" alt="描述" class="lazy">
```

**CSS 載入效果：**
```css
img.lazy {
    opacity: 0;
    transition: opacity var(--transition-base);
}

img.lazy.loaded {
    opacity: 1;
}
```

---

## 圖片素材處理

### 從 Figma 下載策略

**下載內容：**
1. **Logo** - 2nd STREET 品牌 Logo
2. **Hero 圖片** - 員工團隊照片（首頁 Hero 區塊）
3. **工作環境照片** - 8 張照片（daily-work.html）
4. **員工照片** - 4-6 張員工個人照（stories.html）
5. **圖示** - 社群媒體圖示等

**下載規格：**
- 格式：PNG（透明背景）/ JPG（照片）
- 解析度：2x（@2x for Retina）
- 命名規則：小寫、連字號分隔（例：`hero-team.jpg`）

**檔案組織：**
```
assets/images/
├── logo.png
├── hero/
│   └── team.jpg
├── work/
│   ├── work-01.jpg
│   ├── work-02.jpg
│   ├── work-03.jpg
│   ├── work-04.jpg
│   ├── work-05.jpg
│   ├── work-06.jpg
│   ├── work-07.jpg
│   └── work-08.jpg
├── staff/
│   ├── staff-01.jpg
│   ├── staff-02.jpg
│   ├── staff-03.jpg
│   ├── staff-04.jpg
│   ├── staff-05.jpg
│   └── staff-06.jpg
└── icons/
    ├── instagram.svg
    └── facebook.svg
```

### 圖片優化

**HTML 使用：**
```html
<!-- 懶載入 + 響應式 -->
<img
    data-src="assets/images/work/work-01.jpg"
    alt="工作環境照片"
    loading="lazy"
    class="lazy"
>
```

**WebP 支援（可選）：**
```html
<picture>
    <source srcset="assets/images/hero/team.webp" type="image/webp">
    <img src="assets/images/hero/team.jpg" alt="團隊照片" loading="lazy">
</picture>
```

---

## 文字內容處理

### 提取策略

**從 Figma 提取的內容：**
1. **導航文字** - ABOUT, STORY, JOB, RECRUIT, APPLY
2. **標題** - 各區塊的主標題和副標題
3. **招募資訊** - 職缺、條件、福利等文字
4. **員工介紹** - 姓名、職位、簡介
5. **公司簡介** - 關於 2nd STREET 的文字

**使用原則：**
- 保留 Figma 原始文字（日文/中文）
- 不做翻譯或修改
- 維持原有排版和分段
- 業主日後可自行替換

### 文字排版規範

**標題層級：**
```css
h1 {
    font-size: var(--font-size-3xl);  /* 56px */
    font-weight: 700;
    line-height: 1.2;
}

h2 {
    font-size: var(--font-size-2xl);  /* 40px */
    font-weight: 700;
    line-height: 1.3;
}

h3 {
    font-size: var(--font-size-xl);   /* 28px */
    font-weight: 600;
    line-height: 1.4;
}

h4 {
    font-size: var(--font-size-lg);   /* 20px */
    font-weight: 600;
    line-height: 1.5;
}
```

**段落：**
```css
p {
    font-size: var(--font-size-base);  /* 16px */
    line-height: 1.8;
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
}
```

---

## 效能優化措施

### 1. 圖片優化

**策略：**
- ✅ 使用 `loading="lazy"` 屬性
- ✅ Intersection Observer 實作懶載入
- ✅ 適當的圖片尺寸（不超過實際顯示大小）
- ✅ 壓縮圖片（TinyPNG 或 ImageOptim）
- ⚠️ WebP 格式（可選，需 fallback）

**實作範例：**
```html
<img
    data-src="assets/images/work/work-01.jpg"
    alt="工作環境"
    loading="lazy"
    width="400"
    height="300"
>
```

---

### 2. CSS 優化

**策略：**
- ✅ 使用 CSS Variables 減少重複
- ✅ 避免過度巢狀選擇器（最多 3 層）
- ✅ 使用 `will-change` 提示瀏覽器優化動畫
- ✅ 最小化重繪和重排

**實作範例：**
```css
/* ✅ 良好的選擇器 */
.card-title {
    color: var(--text-primary);
}

/* ❌ 避免過度巢狀 */
.section .container .content .card .title {
    /* 太深了 */
}

/* ✅ 動畫優化 */
.card {
    will-change: transform;
    transition: transform var(--transition-base);
}
```

---

### 3. JavaScript 優化

**策略：**
- ✅ 使用事件委派減少監聽器數量
- ✅ Intersection Observer 取代 scroll 事件
- ✅ 快取 DOM 查詢結果
- ✅ 避免重複的 DOM 操作

**實作範例：**
```javascript
// ✅ 快取 DOM 查詢
const header = document.querySelector('.header')
const navLinks = header.querySelectorAll('.nav-link')

// ✅ 事件委派
document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        handleClick(e)
    }
})

// ✅ 使用 Intersection Observer
const observer = new IntersectionObserver(callback)
elements.forEach(el => observer.observe(el))
```

---

## 可訪問性（Accessibility）

### WCAG 2.1 AA 標準

**必須達成：**
1. **語意化 HTML** - 使用正確的標籤
2. **鍵盤導航** - 所有功能可用鍵盤操作
3. **ARIA 屬性** - 適當的 ARIA 標籤
4. **顏色對比** - 符合 WCAG AA 標準（4.5:1）
5. **Alt 文字** - 所有圖片都有描述性 alt

### 實作重點

**1. 語意化 HTML：**
```html
<header>
<nav>
<main>
    <section>
    <article>
</main>
<footer>
```

**2. ARIA 屬性：**
```html
<button
    class="menu-toggle"
    aria-label="開啟選單"
    aria-expanded="false"
    aria-controls="nav-menu"
>
```

**3. 鍵盤導航：**
```css
/* 清楚的 focus 狀態 */
a:focus,
button:focus {
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
}
```

**4. Alt 文字：**
```html
<img src="assets/images/staff/staff-01.jpg" alt="員工田中太郎的工作照">
```

---

## SEO 優化

### Meta Tags（每個頁面）

```html
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
    <meta property="og:url" content="https://www.2ndstreet.jp/recruit/">
    <meta property="og:type" content="website">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://www.2ndstreet.jp/recruit/">

    <link rel="stylesheet" href="css/style.css">
</head>
```

### 結構化資料（JSON-LD）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "2nd STREET 店舗スタッフ",
  "description": "日本最大の古着チェーン店でのお仕事",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "2nd STREET",
    "sameAs": "https://www.2ndstreet.jp"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP"
    }
  }
}
</script>
```

---

## 瀏覽器支援

### 目標瀏覽器

- ✅ Chrome（最新版 + 前 2 版）
- ✅ Firefox（最新版 + 前 2 版）
- ✅ Safari（最新版 + 前 2 版）
- ✅ Edge（最新版 + 前 2 版）
- ✅ iOS Safari（iOS 14+）
- ✅ Android Chrome（Android 10+）

### 降級策略

**CSS Grid 不支援：**
```css
/* Fallback to Flexbox */
.photo-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
}

@supports (display: grid) {
    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
```

**Intersection Observer 不支援：**
```javascript
// 檢查支援度
if ('IntersectionObserver' in window) {
    initScrollAnimations()
} else {
    // Fallback: 直接顯示所有元素
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible')
    })
}
```

---

## 測試檢查清單

### 功能測試

- [ ] 導航列在所有頁面正常運作
- [ ] 漢堡選單在手機版正常開關
- [ ] 所有連結正確導向
- [ ] APPLY 按鈕正確開啟 mailto:
- [ ] 圖片正確載入
- [ ] 懶載入功能正常
- [ ] 平滑捲動功能正常
- [ ] 淡入動畫正常觸發

### 響應式測試

**手機版（375px）：**
- [ ] 版面正確顯示
- [ ] 漢堡選單正常
- [ ] 文字大小適中
- [ ] 按鈕可點擊

**平板版（768px）：**
- [ ] 導航列完整顯示
- [ ] Grid 2 欄正常
- [ ] 間距適當

**桌機版（1024px+）：**
- [ ] 符合 Figma 設計
- [ ] Grid 3-4 欄正常
- [ ] 視覺效果完整

### 效能測試

- [ ] Lighthouse 分數 > 90
- [ ] 圖片已壓縮
- [ ] 無 console 錯誤
- [ ] 載入時間 < 3 秒

### 可訪問性測試

- [ ] 鍵盤導航正常
- [ ] WAVE 工具無錯誤
- [ ] 顏色對比符合標準
- [ ] 螢幕閱讀器友善

### 瀏覽器測試

- [ ] Chrome 正常
- [ ] Firefox 正常
- [ ] Safari 正常
- [ ] Edge 正常
- [ ] iOS Safari 正常
- [ ] Android Chrome 正常

---

## 部署準備

### 部署前檢查

1. **程式碼清理：**
   - [ ] 移除所有 `console.log()`
   - [ ] 移除註解掉的程式碼
   - [ ] 移除未使用的 CSS

2. **檔案檢查：**
   - [ ] 所有圖片已優化
   - [ ] 所有連結正確
   - [ ] 所有文字正確

3. **Meta 資訊：**
   - [ ] 每頁都有獨特的 title
   - [ ] 每頁都有 description
   - [ ] Open Graph 設定正確

### 建議部署平台

**靜態網站託管（擇一）：**
- GitHub Pages（免費）
- Netlify（免費）
- Vercel（免費）
- Cloudflare Pages（免費）

**部署步驟（GitHub Pages 範例）：**
```bash
# 1. 建立 Git Repository
git init
git add .
git commit -m "feat: complete 2nd STREET recruitment website"

# 2. 推送到 GitHub
git remote add origin https://github.com/username/2ndstreet.git
git branch -M main
git push -u origin main

# 3. 啟用 GitHub Pages
# Settings → Pages → Source: main branch
```

---

## 專案時程規劃（參考）

### 階段 1：基礎架構（優先）
- 建立檔案結構
- 設定 CSS Variables
- 建立 Header/Footer 共用元件
- 實作響應式基礎

### 階段 2：圖片下載與處理
- 從 Figma 下載所有圖片
- 優化圖片大小
- 組織圖片檔案

### 階段 3：頁面實作
- index.html（首頁）
- daily-work.html（工作日常）
- stories.html（員工故事）
- recruit.html（招募資訊）
- job-intro.html（工作介紹）
- evaluation.html（評價制度）

### 階段 4：互動效果
- 實作 JavaScript 功能模組
- 加入動畫效果
- 測試互動功能

### 階段 5：優化與測試
- 效能優化
- 可訪問性檢查
- 跨瀏覽器測試
- 響應式測試

### 階段 6：部署
- 最終檢查
- 部署到靜態託管平台
- 驗證線上版本

---

## 技術決策記錄

### 決策 1：完全重寫 vs 漸進式更新

**決策：** 完全重寫（方案 1）

**理由：**
- 專案剛初始化，現有代碼量少
- Figma 是全新設計，完全重寫能確保 100% 還原
- 乾淨的代碼庫，未來更容易維護
- 技術棧符合要求（純 HTML/CSS/JS）

---

### 決策 2：響應式最小寬度

**決策：** 手機版 375px 起（業界標準 RWD）

**原始需求：** 業主要求最小寬度 700px

**決策理由：**
- 超過 60% 網路流量來自手機
- 招募網站目標受眾（求職者）經常用手機瀏覽
- min-width 700px 會導致手機體驗極差（橫向捲軸、文字過小）
- SEO 和 Google 行動裝置友善測試會不通過
- 建議與業主溝通，採用真正的 RWD

**影響：**
- 需要設計三種版面（手機、平板、桌機）
- 開發時間略增，但使用者體驗大幅提升
- SEO 排名更好，觸及更多求職者

---

### 決策 3：文字內容處理

**決策：** 使用 Figma 原始文字，不做翻譯或修改

**理由：**
- 業主要求使用 Figma 原文
- 保留原汁原味的品牌語言
- 業主日後可自行替換內容

---

### 決策 4：表單處理

**決策：** CTA 按鈕使用 mailto: 或外部連結

**理由：**
- 業主選擇方案 C（只有連結按鈕）
- 不實作完整表單功能
- 最簡單快速的實作方式

---

### 決策 5：圖片來源

**決策：** 從 Figma 自動下載所有圖片

**理由：**
- 業主選擇方案 A
- 直接可用，省時省力
- 網站完整度高

---

## 風險與注意事項

### 風險 1：Figma 圖片解析度不足

**風險：** Figma 匯出的圖片可能解析度不夠高

**緩解措施：**
- 下載時選擇 2x 或 3x 解析度
- 必要時使用 AI 升頻工具
- 與業主確認圖片品質

---

### 風險 2：文字內容不完整

**風險：** Figma 設計中的文字可能是示意文字

**緩解措施：**
- 完整提取 Figma 所有文字
- 標記需要業主補充的內容
- 提供替換文字的簡易流程

---

### 風險 3：瀏覽器相容性

**風險：** 部分 CSS 或 JS 功能舊瀏覽器不支援

**緩解措施：**
- 提供 Fallback 方案
- 使用漸進式增強策略
- 測試主流瀏覽器

---

## 成功標準

專案完成時，應達成以下標準：

### 功能完整性
- ✅ 所有 6 個頁面完整實作
- ✅ 導航功能正常
- ✅ 所有連結正確
- ✅ 互動效果符合設計

### 視覺還原度
- ✅ 桌機版 95%+ 符合 Figma 設計
- ✅ 平板版合理適配
- ✅ 手機版合理適配
- ✅ 色彩、字型、間距正確

### 效能指標
- ✅ Lighthouse Performance > 90
- ✅ Lighthouse Accessibility > 90
- ✅ Lighthouse Best Practices > 90
- ✅ Lighthouse SEO > 90
- ✅ 首次載入時間 < 3 秒

### 技術品質
- ✅ 符合 CLAUDE.md 規範
- ✅ 無 console 錯誤
- ✅ 代碼乾淨、可維護
- ✅ 註解清楚

### 可訪問性
- ✅ WCAG 2.1 AA 標準
- ✅ 鍵盤導航正常
- ✅ WAVE 工具無錯誤

### 響應式設計
- ✅ 手機版（375px+）正常
- ✅ 平板版（768px+）正常
- ✅ 桌機版（1024px+）正常

---

## 附錄

### A. 實作優先順序

**高優先級（必須完成）：**
1. 基礎架構（HTML 結構、CSS Variables）
2. Header/Footer 共用元件
3. index.html（首頁）- 最重要的頁面
4. 響應式設計基礎
5. 圖片下載與處理

**中優先級（重要）：**
1. recruit.html（招募資訊）- 核心功能頁
2. stories.html（員工故事）- 建立信任
3. daily-work.html（工作日常）- 展示環境
4. 基礎互動效果（hover、平滑捲動）

**低優先級（可後續完善）：**
1. job-intro.html（工作介紹）
2. evaluation.html（評價制度）
3. 進階動畫效果
4. WebP 圖片格式支援

---

### B. 常見問題解答

**Q1: 如果業主要改文字怎麼辦？**
A: 所有文字都在 HTML 中，可直接編輯。建議提供簡單的編輯指南。

**Q2: 如果要新增更多員工照片？**
A: 在 `assets/images/staff/` 新增圖片，然後在 `stories.html` 複製卡片 HTML 結構即可。

**Q3: 如何更改品牌顏色？**
A: 在 `css/style.css` 的 `:root` 區塊修改 CSS Variables 即可全站套用。

**Q4: 手機版看起來太擠怎麼辦？**
A: 調整 `--spacing-*` 變數，或針對手機版增加 padding。

**Q5: 圖片載入太慢怎麼辦？**
A: 使用圖片壓縮工具（TinyPNG、ImageOptim）進一步壓縮。

---

### C. 參考資源

**設計規範：**
- Figma 設計稿：https://www.figma.com/design/kQBjfyqxaPFpNmWnZoq54Z/2ndSTREET
- CLAUDE.md：專案特定開發規範
- README.md：專案說明文件

**技術文件：**
- MDN Web Docs：https://developer.mozilla.org/
- CSS-Tricks：https://css-tricks.com/
- JavaScript.info：https://javascript.info/

**工具：**
- TinyPNG：https://tinypng.com/（圖片壓縮）
- WAVE：https://wave.webaim.org/（可訪問性檢查）
- Lighthouse：Chrome DevTools（效能審查）

---

## 結論

本設計規格提供了完整的 2nd STREET 招募網站實作藍圖，涵蓋：

1. **清晰的架構** - 6 個頁面的完整規劃
2. **完善的設計系統** - CSS Variables、響應式斷點
3. **詳細的技術規格** - HTML/CSS/JavaScript 實作細節
4. **品質標準** - 效能、可訪問性、SEO 要求
5. **測試計畫** - 完整的測試檢查清單

遵循本規格，可確保：
- ✅ 100% 符合 CLAUDE.md 技術限制
- ✅ 高度還原 Figma 設計
- ✅ 優秀的使用者體驗
- ✅ 良好的效能表現
- ✅ 易於維護和擴展

下一步：進入實作階段，建立詳細的實作計畫（Implementation Plan）。
