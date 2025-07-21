
# 🧠 Riddle Game (משחק חידות)

מערכת אינטראקטיבית למשחק חידות מבוססת Node.js. השחקנים פותרים חידות בזמן אמת, יכולים לבקש רמזים, המערכת מודדת זמנים ומנהלת נתוני שחקנים ותוצאות.

---

## 🚀 תכונות עיקריות

- 🧩 **ניהול חידות** – הוספה, מחיקה ותצוגה של חידות קיימות.
- 👤 **ניהול שחקנים** – בדיקת קיום שחקן או יצירת משתמש חדש.
- ⏱️ **מדידת זמן** – עבור כל חידה ובאופן מצטבר לכל המשחק.
- 💡 **תמיכה ברמזים** – בקשה להצגת רמז לפני מתן תשובה.
- 📊 **מערכת תוצאות** – שמירת זמן ממוצע וכללי לכל שחקן.

---

## 📂 מבנה התיקיות

```
RIDDLECLIENTEXPRESS/
│
├── controllersGame/
│   ├── controlessGame.js       # ניהול המשחק המרכזי
│   └── mnue.js                 # תפריט המשחק הראשי
│
├── logikGame/
│   ├── logikQuestions.js       # לוגיקת שאילת השאלה
│   └── riddleFlow.js           # ניהול זרימת החידות
│
├── newriddle/
│   └── newRiddle.js            # יצירת חידה חדשה
│
├── player/
│   ├── cheakPlayer.js          # בדיקת שחקן קיים
│   ├── newPlayer.js            # יצירת שחקן חדש
│   └── resultGemePlayer.js     # שמירת תוצאת המשחק
│
├── services/
│   ├── create.js               # פונקציית POST
│   ├── delete.js               # פונקציית DELETE
│   ├── read.js                 # פונקציית GET
│   └── updete.js               # (ריק או עתידי)
│
├── utils/
│   └── manegerTime.js          # ניהול מדידת זמנים
│
├── app.js                      # קובץ ראשי – מפעיל את תפריט המשחק
└── package.json
```

---

## 📦 התקנת ספריות

התקן את התלויות הדרושות:
```bash
npm install readline-sync node-fetch
```

---

## ▶️ הרצת המשחק

1. ודא ששרת Express רץ על `http://localhost:3000`.
2. הרץ את הקובץ הראשי:

```bash
node app.js
```

קובץ `app.js`:
```js
import { showMainMenu } from "./controllersGame/mnue.js";
showMainMenu();
```

---

## 🛠️ מסלולי שרת נדרשים (Express)

הקוד מבוסס על API מקומי עם המסלולים הבאים:

- `GET /riddles/getAllRiddles`
- `POST /riddles/addRiddle`
- `DELETE /riddles/deleteRiddle:id`
- `GET /player/getAllNamePlayers`
- `POST /player/newPlayer`
- `POST /resultGame/dataPlayer`
- `GET /resultGame/getAllDataPlayers`

---

## 📊 לוגיקת המשחק

1. השחקן מכניס את שמו.
2. אם הוא חדש – נוצרת רשומה.
3. כל החידות נשלפות מהשרת.
4. מוצגת שאלה, אפשר לבקש רמז, נמדד זמן.
5. לבסוף – נשלח זמן ממוצע וזמן כולל לשרת.

---

## 🧠 תפריט ראשי לדוגמה

```
==========================
✨ Main Menu ✨
1. Play the game
2. Create a new riddle
3. Show all riddles
4. Show all players
5. Show all result game
6. delete by id
==========================
```

---

## 📌 הערות

- הפרויקט **מבוסס קונסול** (terminal).
- נדרשת הפעלה של **שרת backend בנפרד**.
- אם נתקלת בבעיה – ודא שהשרת עונה על כתובת `http://localhost:3000`.

---

## 🧑‍💻 קרדיט

פותח ע"י ישראל ויצמן 💻  
ללימוד ובניית לוגיקת משחק עם Node.js, Express, ועבודה מול REST API.
