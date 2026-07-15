# 2ndSTREET.html

純 HTML/CSS/JavaScript 靜態網站專案，無需任何框架或建置工具。

## 專案特色

- 純前端技術棧（HTML5 + CSS3 + Vanilla JS）
- 無需 npm、webpack 或任何建置流程
- 開箱即用，直接用瀏覽器開啟即可
- 響應式設計（RWD），支援各種裝置尺寸
- 語意化 HTML，符合 SEO 最佳實踐
- 模組化的 CSS 架構（使用 CSS Variables）
- 原生 JavaScript，無需 jQuery 或其他函式庫

## 專案結構

```
2ndSTREET/
├── index.html              # 主頁面
├── css/
│   └── style.css           # 主樣式表
├── js/
│   └── main.js             # 主 JavaScript 檔案
├── assets/
│   ├── images/             # 圖片資源
│   └── fonts/              # 字型檔案
├── README.md               # 專案說明文件
├── CLAUDE.md               # Claude AI 開發指引
└── .gitignore              # Git 忽略檔案
```

## 快速開始

### 1. 開啟專案

有三種方式可以檢視此專案：

#### 方法一：直接開啟（最簡單）
直接用瀏覽器開啟 `index.html` 即可。

#### 方法二：使用 VS Code Live Server
1. 在 VS Code 安裝 "Live Server" 擴充功能
2. 在 `index.html` 上按右鍵
3. 選擇 "Open with Live Server"

#### 方法三：使用 Python 內建伺服器
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
然後開啟瀏覽器訪問 `http://localhost:8000`

### 2. 開始開發

直接編輯 HTML/CSS/JS 檔案，重新整理瀏覽器即可看到變更。

## 功能說明

### 已實作功能

- **響應式導航列**
  - 桌面版：水平選單
  - 行動版：漢堡選單
  - 平滑捲動導航

- **Hero 區塊**
  - 全寬背景
  - 漸層色彩
  - CTA 按鈕

- **服務展示區**
  - Grid 網格排版
  - 卡片式設計
  - Hover 效果

- **聯絡表單**
  - 基本驗證
  - 通知系統
  - Email 格式檢查

- **捲動動畫**
  - Intersection Observer API
  - 淡入效果
  - 延遲載入

### JavaScript 功能模組

所有功能都在 `js/main.js` 中，包含：

| 函式 | 功能 |
|------|------|
| `initMobileMenu()` | 行動版選單控制 |
| `initSmoothScroll()` | 平滑捲動 |
| `initFormValidation()` | 表單驗證 |
| `initScrollAnimations()` | 捲動動畫 |
| `showNotification()` | 通知訊息 |
| `validateEmail()` | Email 驗證 |
| `throttle()` | 節流函數 |
| `debounce()` | 防抖函數 |

## CSS 架構

### CSS Variables（CSS 變數）

所有設計 tokens 都定義在 `:root` 中，方便統一管理：

```css
:root {
    /* 色彩 */
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --text-color: #1e293b;

    /* 間距 */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;

    /* 其他設計 tokens... */
}
```

### 區塊結構

CSS 檔案依功能分為以下區塊：

1. Reset & Base Styles（重置與基礎樣式）
2. Layout（版面配置）
3. Header & Navigation（導航列）
4. Hero Section（首屏區塊）
5. Buttons（按鈕）
6. About Section（關於區塊）
7. Services Section（服務區塊）
8. Contact Section（聯絡區塊）
9. Footer（頁尾）
10. Responsive Design（響應式設計）
11. Utility Classes（工具類別）

## 響應式設計

專案採用 Mobile-First 的斷點設計：

| 裝置 | 斷點 | 說明 |
|------|------|------|
| 行動裝置 | < 480px | 超小螢幕 |
| 平板 | < 768px | 中小螢幕 |
| 筆電 | < 1024px | 中等螢幕 |
| 桌機 | ≥ 1024px | 大螢幕 |

## 瀏覽器支援

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

建議使用現代瀏覽器以獲得最佳體驗。

## 客製化指南

### 更改顏色主題

編輯 `css/style.css` 中的 CSS Variables：

```css
:root {
    --primary-color: #your-color;  /* 主要色 */
    --secondary-color: #your-color; /* 次要色 */
}
```

### 新增頁面區塊

1. 在 `index.html` 新增 `<section>` 區塊
2. 在 `css/style.css` 新增對應樣式
3. 如需互動，在 `js/main.js` 新增對應函式

### 更改字型

方法一：使用 Web 字型

```html
<!-- 在 index.html <head> 中加入 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
/* 在 CSS 中套用 */
:root {
    --font-family: 'Noto Sans TC', sans-serif;
}
```

方法二：使用本地字型

將字型檔放在 `assets/fonts/` 並在 CSS 中定義：

```css
@font-face {
    font-family: 'YourFont';
    src: url('../assets/fonts/your-font.woff2') format('woff2');
}
```

## 部署方式

### 靜態網站託管

此專案可部署到任何靜態網站託管服務：

- **GitHub Pages**
  1. 將專案推送到 GitHub
  2. 在 Settings → Pages 中啟用
  3. 選擇 main branch

- **Netlify**
  1. 拖曳整個資料夾到 Netlify
  2. 或連結 GitHub repo

- **Vercel**
  1. Import GitHub repository
  2. 無需設定，直接部署

- **Cloudflare Pages**
  1. 連結 GitHub repo
  2. 建置指令留空
  3. 輸出目錄選擇根目錄

### 傳統虛擬主機

直接使用 FTP/SFTP 上傳所有檔案到伺服器根目錄即可。

## 開發指南

### 編碼規範

- HTML：使用語意化標籤
- CSS：遵循 BEM 命名法則
- JavaScript：使用 ES6+ 語法
- 縮排：2 個空格

### 檔案命名

- HTML：小寫，用 `-` 分隔（例：`about-us.html`）
- CSS：小寫，用 `-` 分隔（例：`style.css`）
- JavaScript：駝峰式命名（例：`main.js`）
- 圖片：小寫，用 `-` 分隔（例：`hero-bg.jpg`）

### Git 工作流程

```bash
# 初始化 Git（如果尚未初始化）
git init

# 新增檔案
git add .

# 提交變更
git commit -m "feat: add feature description"

# 推送到遠端
git push origin main
```

## 效能優化建議

### 圖片優化

1. 使用 WebP 格式（fallback 到 JPG/PNG）
2. 壓縮圖片（推薦工具：TinyPNG、ImageOptim）
3. 使用 `loading="lazy"` 屬性

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="描述" loading="lazy">
</picture>
```

### CSS 優化

- 使用 CSS Variables 減少重複
- 避免過度巢狀選擇器
- 使用 `will-change` 屬性提示瀏覽器優化動畫

### JavaScript 優化

- 使用事件委派減少監聽器數量
- 使用 throttle/debounce 控制事件頻率
- 延遲載入非關鍵 JavaScript

## 常見問題

### Q: 為什麼不使用框架？

A: 此專案目的是提供一個輕量、無依賴的基礎範本，適合小型專案或學習前端基礎。

### Q: 可以整合後端 API 嗎？

A: 可以！在 `js/main.js` 中使用 `fetch()` API 串接後端即可。

### Q: 如何新增更多頁面？

A: 複製 `index.html` 並重新命名，記得更新導航連結。

### Q: 支援 IE11 嗎？

A: 需要額外處理。建議使用 Babel 轉譯 JavaScript，並加入 polyfills。

## 相關資源

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Can I Use](https://caniuse.com/)

## 授權

MIT License

## 作者

開發者：[Your Name]

如有問題或建議，歡迎開 Issue 或 Pull Request！

---

**Last Updated:** 2026-07-15
