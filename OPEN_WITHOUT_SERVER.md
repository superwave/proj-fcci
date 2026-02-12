# 🎉 現在可以不需要 Server 直接打開了！

## 如何使用

### 方法 1：直接雙擊（推薦）
直接用 Finder 找到 `index.html` 然後雙擊打開即可！

或用瀏覽器的「開啟檔案」功能：
- **Chrome/Edge**: Cmd+O (Mac) 或 Ctrl+O (Windows)
- **Safari**: Cmd+O
- **Firefox**: Cmd+O

然後選擇 `index.html` 檔案

### 方法 2：拖曳
把 `index.html` 直接拖進瀏覽器視窗

### 方法 3：終端機開啟
```bash
open /Users/aotterapp/workfiles/proj_fcci/index.html
```

---

## 📝 改了什麼？

### 修改前（需要 server）：
```javascript
// 使用 fetch() 載入 JSON
fetch('data/config.json')  // ❌ file:// 下會被 CORS 阻擋
```

### 修改後（不需要 server）：
```javascript
// 直接使用內嵌的 JavaScript 物件
window.DATA.config  // ✅ 完全不需要網路請求
```

---

## 🔧 技術細節

### 新增檔案：
- **js/data.js** - 把所有 JSON 資料轉成 JavaScript 物件

### 修改檔案：
- **js/i18n.js** - 改用 `window.DATA` 而不是 `fetch()`
- **index.html** - 在最前面載入 `data.js`

---

## ✅ 優點

1. **不需要 local server** - 直接雙擊就能用
2. **載入更快** - 不需要等待網路請求
3. **完全離線** - 不需要任何網路連線
4. **簡單分享** - 把整個資料夾壓縮就能給別人用

---

## ⚠️ 缺點

1. **更新內容比較麻煩** - 要改 `js/data.js` 而不是 JSON 檔案
2. **檔案稍微大一點** - JavaScript 物件比 JSON 略大
3. **不易維護** - 對於大型專案，分離的 JSON 檔案較好維護

---

## 💡 建議

### 開發階段（需要常常改內容）：
使用原本的 JSON 版本 + local server：
```bash
python3 -m http.server 8000
```

### 正式發布（不想架 server）：
使用現在的內嵌版本，直接打開 HTML 檔案即可！

---

## 🚀 現在就試試看

```bash
open index.html
```

或直接到 Finder 雙擊 `index.html`！
