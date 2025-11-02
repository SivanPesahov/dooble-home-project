# Dooble — Frontend

הפרויקט נבנה במסגרת תרגיל הבית ל־Dooble, ומציג ממשק משתמש מלא שנבנה ב־React ו־TypeScript עם Tailwind CSS.

האתר כולל מספר קומפוננטות עיקריות:

- **Header** – תפריט עליון רספונסיבי עם ניווט וחיפוש.
- **Hero** – אזור פתיחה (Hero Section) הכולל כותרת וקריאה לפעולה.
- **Ensured** – הצגת ענפים מבוטחים עם עיצוב רספונסיבי.
- **Gallery** – גלריית תמונות חקלאית.
- **News** – אזור חדשות ועדכונים.
- **Footer** – כותרת תחתונה עם פרטי קשר וקישורים שימושיים.

כל הקומפוננטות נבנו בצורה רספונסיבית ומתמקדות בעיצוב נקי ובחוויית משתמש טובה.

---

## טכנולוגיות

- React + TypeScript
- Tailwind CSS
- Vite

---

## התקנה והרצה

1. התקנת חבילות:

```bash
pnpm install   # או npm install / yarn
```

2. הרצה בסביבת פיתוח:

```bash
pnpm dev       # או npm run dev / yarn dev
```

3. בנייה לגרסת Production:

```bash
pnpm build && pnpm preview
```

> דרוש Node.js בגרסה 18 ומעלה.

---

## מבנה הפרויקט

```
src/
  components/
    layout/
      Header.tsx
      HeroComponnent.tsx
      EnsuredComponnent.tsx
      GalleryComponent.tsx
      NewsComponent.tsx
      Footer.tsx
```

---

## על הפרויקט

המטרה בפרויקט היא להדגים יכולת פיתוח Frontend מלאה – החל מבניית קומפוננטות רספונסיביות ועד הקפדה על מבנה קוד תקין וקריא. הפרויקט תוכנן כך שידגיש הבנה ב־React, TypeScript ו־Tailwind, תוך שמירה על חוויית משתמש אחידה ונעימה.
