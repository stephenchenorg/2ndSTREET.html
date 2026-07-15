# Claude AI 開發指引 - 2ndSTREET.html

> 本檔案提供給 Claude AI 的專案特定開發規範與提醒事項。

## 專案概述

**專案名稱：** 2ndSTREET.html
**專案類型：** 純 HTML/CSS/JavaScript 靜態網站
**技術限制：** 不使用任何框架、建置工具、npm 套件
**開發原則：** Keep it simple, stupid (KISS)

## 技術棧

### 必須使用

- HTML5（語意化標籤）
- CSS3（包含 CSS Variables、Flexbox、Grid）
- Vanilla JavaScript（ES6+）

### 禁止使用

- ❌ 任何 JavaScript 框架（React、Vue、Angular 等）
- ❌ CSS 預處理器（Sass、Less、Stylus）
- ❌ 建置工具（Webpack、Vite、Parcel）
- ❌ npm 套件（jQuery、Lodash、Bootstrap 等）
- ❌ TypeScript
- ❌ 任何需要編譯的工具

## 檔案結構規範

### 目錄組織

```
2ndSTREET/
├── index.html              # 主頁面（必須）
├── css/
│   └── style.css           # 主樣式表（必須）
├── js/
│   └── main.js             # 主 JavaScript（必須）
├── assets/
│   ├── images/             # 圖片資源
│   └── fonts/              # 字型檔案
├── README.md               # 專案說明
├── CLAUDE.md               # 本檔案
└── .gitignore              # Git 忽略
```

### 新增頁面規則

如需新增頁面：
1. 在根目錄建立新的 `.html` 檔案
2. 複製 `index.html` 的基本結構
3. 保持 CSS/JS 的引用路徑一致
4. 更新所有頁面的導航連結

## 開發規範

### HTML 規範

1. **語意化標籤優先**
   ```html
   ✅ <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
   ❌ <div class="header">, <div class="nav">
   ```

2. **SEO 必備元素**
   - 每頁必須有 `<title>`
   - 每頁必須有 `<meta name="description">`
   - 圖片必須有 `alt` 屬性
   - 使用 `<h1>` 至 `<h6>` 建立標題層級

3. **可訪問性（Accessibility）**
   - 表單控制項必須有 `<label>`
   - 按鈕使用 `<button>` 而非 `<div onclick="">`
   - 連結使用 `<a>` 而非 `<span onclick="">`
   - 重要互動元素加上 `aria-label`

4. **效能優化**
   ```html
   <!-- 圖片延遲載入 -->
   <img src="image.jpg" alt="描述" loading="lazy">

   <!-- CSS 放在 <head> -->
   <link rel="stylesheet" href="css/style.css">

   <!-- JavaScript 放在 </body> 前 -->
   <script src="js/main.js"></script>
   ```

### CSS 規範

1. **使用 CSS Variables**
   ```css
   /* ✅ 正確：使用變數統一管理 */
   :root {
       --primary-color: #2563eb;
   }
   .button {
       background-color: var(--primary-color);
   }

   /* ❌ 錯誤：重複硬編碼 */
   .button {
       background-color: #2563eb;
   }
   ```

2. **模組化結構**
   - 使用註釋區分區塊
   - 依功能組織（Layout → Components → Utilities）
   - 避免過度巢狀（最多 3 層）

3. **命名慣例**
   ```css
   /* BEM 命名法 */
   .block {}
   .block__element {}
   .block--modifier {}

   /* 範例 */
   .nav-menu {}
   .nav-menu__item {}
   .nav-menu--mobile {}
   ```

4. **響應式設計**
   ```css
   /* Mobile-First 設計 */
   .container {
       padding: 1rem; /* 行動版預設 */
   }

   @media (min-width: 768px) {
       .container {
           padding: 2rem; /* 平板以上 */
       }
   }

   @media (min-width: 1024px) {
       .container {
           padding: 4rem; /* 桌機以上 */
       }
   }
   ```

5. **禁止使用**
   - ❌ `!important`（除非絕對必要）
   - ❌ ID 選擇器用於樣式（僅用於 JavaScript）
   - ❌ 行內樣式（`style="..."`）

### JavaScript 規範

1. **使用現代語法**
   ```javascript
   // ✅ 使用 const/let
   const name = 'John'
   let count = 0

   // ❌ 避免使用 var
   var name = 'John'

   // ✅ 箭頭函數
   const greet = (name) => `Hello, ${name}`

   // ✅ 解構賦值
   const { name, email } = formData

   // ✅ 模板字串
   const message = `Welcome, ${name}!`
   ```

2. **事件處理**
   ```javascript
   // ✅ 正確：使用 addEventListener
   button.addEventListener('click', handleClick)

   // ❌ 錯誤：行內事件
   <button onclick="handleClick()">

   // ✅ 事件委派（效能更好）
   document.querySelector('.container').addEventListener('click', (e) => {
       if (e.target.classList.contains('btn')) {
           handleClick(e)
       }
   })
   ```

3. **DOM 查詢最佳實踐**
   ```javascript
   // ✅ 快取 DOM 查詢
   const form = document.getElementById('contact-form')
   const nameInput = form.querySelector('#name')

   // ❌ 重複查詢
   document.getElementById('name').value = ''
   document.getElementById('name').focus()
   ```

4. **錯誤處理**
   ```javascript
   // ✅ 檢查元素是否存在
   const menu = document.querySelector('.nav-menu')
   if (!menu) return

   // ✅ try-catch 處理可能錯誤
   try {
       const data = JSON.parse(response)
   } catch (error) {
       console.error('解析失敗:', error)
   }
   ```

5. **效能優化**
   ```javascript
   // ✅ 使用 throttle 控制捲動事件
   window.addEventListener('scroll', throttle(handleScroll, 100))

   // ✅ 使用 debounce 控制輸入事件
   input.addEventListener('input', debounce(handleInput, 300))

   // ✅ 使用 Intersection Observer 而非 scroll 事件
   const observer = new IntersectionObserver(callback)
   observer.observe(element)
   ```

## 常見任務指引

### 新增一個新區塊（Section）

1. 在 `index.html` 新增結構：
   ```html
   <section id="new-section" class="new-section">
       <div class="container">
           <h2>區塊標題</h2>
           <p>區塊內容</p>
       </div>
   </section>
   ```

2. 在 `css/style.css` 新增樣式：
   ```css
   /* ========================================
      New Section
      ======================================== */

   .new-section {
       padding: var(--spacing-lg) 0;
       background-color: var(--bg-light);
   }

   .new-section h2 {
       font-size: 2.5rem;
       margin-bottom: var(--spacing-md);
   }
   ```

3. 如需互動，在 `js/main.js` 新增函式：
   ```javascript
   function initNewSection() {
       const section = document.querySelector('.new-section')
       if (!section) return

       // 功能邏輯...
   }

   // 在 DOMContentLoaded 中呼叫
   document.addEventListener('DOMContentLoaded', function() {
       // ...其他初始化
       initNewSection()
   })
   ```

### 新增一個互動元件

1. **按鈕 Hover 效果**
   ```css
   .btn {
       transition: all 0.3s ease;
   }

   .btn:hover {
       transform: translateY(-2px);
       box-shadow: var(--shadow-lg);
   }
   ```

2. **Modal 彈窗**
   - HTML 結構 + CSS 樣式 + JavaScript 控制
   - 記得處理 ESC 鍵關閉和點擊外部關閉

3. **輪播圖**
   - 使用原生 JavaScript，不依賴套件
   - 提供鍵盤導航和觸控滑動支援

### 整合第三方服務

1. **Google Analytics**
   ```html
   <!-- 在 </head> 前加入 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
       window.dataLayer = window.dataLayer || []
       function gtag(){dataLayer.push(arguments)}
       gtag('js', new Date())
       gtag('config', 'GA_MEASUREMENT_ID')
   </script>
   ```

2. **Google Fonts**
   ```html
   <!-- 在 <head> 中加入 -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">
   ```

3. **Font Awesome（圖示）**
   ```html
   <!-- CDN 方式 -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

   <!-- 使用 -->
   <i class="fas fa-user"></i>
   ```

## 除錯指引

### 常見問題排查

1. **JavaScript 無法執行**
   - 檢查瀏覽器 Console 是否有錯誤
   - 確認 `<script>` 標籤位置（應在 `</body>` 前）
   - 確認檔案路徑是否正確

2. **CSS 樣式沒有套用**
   - 檢查 `<link>` 標籤路徑
   - 使用開發者工具檢查元素是否被其他樣式覆蓋
   - 確認選擇器優先權

3. **圖片無法顯示**
   - 檢查圖片路徑是否正確（相對路徑 vs 絕對路徑）
   - 確認圖片檔案存在
   - 檢查檔案名稱大小寫（在 Linux 伺服器上區分大小寫）

### 開發工具使用

1. **Chrome DevTools**
   - Elements：檢查 HTML/CSS
   - Console：查看 JavaScript 錯誤和 log
   - Network：檢查資源載入狀態
   - Lighthouse：效能與 SEO 審查

2. **驗證工具**
   - HTML 驗證：[W3C Validator](https://validator.w3.org/)
   - CSS 驗證：[CSS Validator](https://jigsaw.w3.org/css-validator/)
   - 可訪問性：[WAVE](https://wave.webaim.org/)

## 效能檢查清單

開發完成後，執行以下檢查：

- [ ] 所有圖片已壓縮（使用 TinyPNG 或 ImageOptim）
- [ ] 圖片使用 `loading="lazy"` 屬性
- [ ] CSS/JS 檔案大小合理（CSS < 50KB, JS < 100KB）
- [ ] 沒有未使用的 CSS 規則
- [ ] JavaScript 沒有記憶體洩漏
- [ ] 在行動裝置上測試過
- [ ] Lighthouse 分數 > 90

## SEO 檢查清單

- [ ] 每頁都有獨特的 `<title>`
- [ ] 每頁都有 `<meta name="description">`
- [ ] 圖片都有 `alt` 屬性
- [ ] 使用語意化 HTML5 標籤
- [ ] 標題層級正確（h1 → h2 → h3）
- [ ] 有 `robots.txt` 和 `sitemap.xml`（如需要）
- [ ] 有 Open Graph tags（分享到社群媒體）

## 無障礙檢查清單

- [ ] 顏色對比度符合 WCAG AA 標準
- [ ] 所有互動元素可用鍵盤操作
- [ ] 表單控制項都有 `<label>`
- [ ] 圖片有描述性的 `alt` 文字
- [ ] 使用 `aria-label` 輔助螢幕閱讀器
- [ ] 焦點狀態清楚可見

## 部署前檢查

- [ ] 移除所有 `console.log()`
- [ ] 移除註解掉的程式碼
- [ ] 測試所有連結和按鈕
- [ ] 測試表單驗證
- [ ] 在不同瀏覽器測試（Chrome、Firefox、Safari、Edge）
- [ ] 在不同裝置測試（手機、平板、桌機）
- [ ] 檢查網頁載入速度

## Claude 協助重點

當我（Claude AI）協助開發此專案時，我會：

1. **優先使用原生技術**
   - 不建議使用框架或套件
   - 用原生 JavaScript 實作所有功能
   - 提供純 CSS 解決方案

2. **保持程式碼簡潔**
   - 避免過度工程
   - 只實作必要功能
   - 程式碼可讀性優先

3. **確保相容性**
   - 使用廣泛支援的 Web API
   - 提供 fallback 方案
   - 測試跨瀏覽器相容性

4. **注重效能**
   - 最小化 DOM 操作
   - 使用事件委派
   - 適當使用節流和防抖

5. **遵循最佳實踐**
   - 語意化 HTML
   - 模組化 CSS
   - 乾淨的 JavaScript

## 聯絡與支援

如果遇到問題或需要新增功能，請：

1. 先查看 `README.md` 的常見問題
2. 檢查瀏覽器 Console 錯誤訊息
3. 使用開發者工具除錯
4. 參考 MDN Web Docs

---

**記住：簡單就是美。保持專案輕量、快速、易於維護。**

**Last Updated:** 2026-07-15
