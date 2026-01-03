# רפואה ידידותית - פלטפורמה רפואית ידידותית

אתר דמו לתרגול והדגמה של מערכת חיפוש רופאים.

## התקנה והרצה

### שיטה 1: עם npm (מומלץ)

1. התקן את התלויות:
```bash
npm install
```

2. הפעל שרת מקומי:
```bash
npm start
```

או עם auto-reload:
```bash
npm run dev
```

האתר יפתח אוטומטית בדפדפן בכתובת: `http://localhost:8000`

### שיטה 2: עם Python

אם יש לך Python מותקן:
```bash
python -m http.server 8000
```

### שיטה 3: עם start-server.bat

פשוט לחץ כפול על `public/tools/start-server.bat`

### שיטה 4: פתיחה ישירה

פשוט לחץ כפול על `index.html` (אבל חלק מהתכונות עלולות לא לעבוד ללא שרת)

## פקודות זמינות

- `npm start` - מפעיל שרת מקומי ופותח את האתר בדפדפן
- `npm run dev` - מפעיל שרת עם auto-reload (ללא cache)
- `npm run serve` - מפעיל שרת ללא פתיחה אוטומטית
- `npm run build` - לא נדרש לפרויקט סטטי (רק מציג הודעה)

## מבנה הפרויקט

```
GFMA/
├── index.html              # עמוד ראשי
├── package.json            # הגדרות npm
├── public/
│   ├── css/
│   │   └── style.css       # עיצוב האתר
│   ├── js/
│   │   ├── app.js          # JavaScript ראשי
│   │   └── functions.js    # פונקציות נוספות
│   ├── system/
│   │   ├── sw.js           # Service Worker (PWA)
│   │   ├── 404.html        # דף שגיאה 404
│   │   └── offline.html    # דף מצב לא מקוון
│   ├── meta/
│   │   ├── manifest.json   # PWA Manifest
│   │   ├── sitemap.xml     # מפת אתר
│   │   └── robots.txt      # הנחיות למנועי חיפוש
│   └── tools/
│       └── start-server.bat # סקריפט להרצת שרת
└── README.md               # קובץ זה
```

## תכונות

- ✅ חיפוש רופאים מתקדם
- ✅ סינון לפי מיקום
- ✅ Dark Mode (מצב כהה)
- ✅ צ'אט-בוט עוזר רפואי
- ✅ PWA (Progressive Web App)
- ✅ תמיכה במצב לא מקוון
- ✅ עיצוב רספונסיבי
- ✅ תמיכה בעברית (RTL)

## הערות חשובות

⚠️ **האתר הוא אתר דמו** - כל הנתונים פיקטיביים לצורכי תרגול והדגמה בלבד.

⚠️ האתר אינו מיועד לשימוש ציבורי או להפצה פומבית.

## בעיות נפוצות

### האתר לא נטען אחרי `npm install` ו-`npm run build`

**פתרון:** `npm run build` לא מפעיל את האתר - הוא רק build process. השתמש ב:
```bash
npm start
```
או
```bash
npm run dev
```

### שגיאת "Cannot find module 'http-server'"

**פתרון:** הרץ:
```bash
npm install
```

### השרת לא נפתח אוטומטית

**פתרון:** פתח ידנית את הדפדפן ונווט ל: `http://localhost:8000`

## פיתוח

האתר בנוי כ-SPA (Single Page Application) עם JavaScript vanilla (ללא frameworks).

## רישיון

כל הזכויות שמורות למפתח האתר.

---

**עיצוב ופיתוח:** מיכאל פפיסמדוב
