# דרישות מוקדמות

1. הבנה בסיסית של [שפת Markdown](https://www.markdownguide.org/basic-syntax/).

2. תצטרך ליצור חשבון [github](https://github.com/) חינמי אם אין לך אחד כזה. מומלץ להשתמש בשם משחק התפקידים שלך, כיוון שזה יהיה חלק מה-URL שאנשים ישתמשו בו כדי לגשת ל-SRD שלך.

3. באפשרותך לבצע את כל התהליך דרך הדפדפן מבלי להכיר git. עם זאת, למידת github desktop תאפשר לך לבדוק כל שינוי באופן מקומי לפני העלאתו לאוויר כדי שכל העולם יוכל לראות.

> אם יש ברשותך שם דומיין רשום, ניתן להשתמש בו בתהליך זה כדי ליצור SRD כמו זה שיש לי בכתובת https://srd.7thextinctionrpg.com

# התהליך

## יצירת המאגר (Repository) ב-Github

1. התחבר ל-Github

2. נווט לתבנית הציבורית https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. לחץ על "Use this template"

![Step3](/_media/Step3.png)

4. בחר ב-"Create a new repository"

5. הזן שם למאגר

![Step5](/_media/Step5.png)

6. בחר ב-'Private'

7. בחר ב-'Create repository'

ייקח 5-30 שניות להעתיק את התבנית, ולאחר מכן יהיה לך עותק משלך.

8. וודא שקיים אצלך הקובץ ".nojekyll" - זהו קובץ ריק שדרוש בעת אירוח אתר אינטרנט ב-Github, אחרת ה-SRD לא יוצג כראוי. *(מורה ל-GitHub Pages לא להריץ את הקבצים שפורסמו דרך Jekyll).*


## הוספת התוכן שלך

### קבצי *.md

קבצי .md הם קבצי Markdown. Markdown היא שפת סימון קלה שניתן להשתמש בה כדי להוסיף אלמנטים עיצוביים למסמכי טקסט פשוטים. בהתאם לנפח התוכן שלך, באפשרותך להציב את כל מידע המשחק שלך בקובץ *.md יחיד, או ליצור קבצים נפרדים לכל פרק כפי שעשיתי ב-[7thextinctionrpg.com](https://srd.7thextinctionrpg.com). ה-"sample.md" מספק כמה דוגמאות לעיצוב.

שפת Markdown קלה מאוד ללמידה; השתמש בקישור שסופק בנקודה 2 תחת "דרישות מוקדמות" לעיל לרשימה מלאה של התחביר.

### _Sidebar.md

זהו התפריט שלך, חלונית הניווט בצד שמאל של האתר. לאחר שהוספת קובץ markdown למאגר שלך, עליך להוסיף את הקובץ כאן כדי שתוכנו ייכלל. פעל לפי העיצוב הקיים.


## הפעלת Github Pages כדי להפוך את המאגר לאתר אינטרנט

1. במאגר שלך, לחץ על 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. בחר ב-'Pages' בתפריט הצדדי משמאל

![Website-Step2](/_media/Website-Step2.png)

3. אם לא הפכת את המאגר ל-'public', יש לך שתי אפשרויות:
    א. להפוך את המאגר לציבורי, מה שיאפשר לך להשתמש ב-Github pages כדי לארח את אתר ה-SRD שלך בחינם.
    ב. לשדרג את חשבון ה-Github שלך (בזמן כתיבת שורות אלו, העלות היא 4$ לחודש או עמלה שנתית של 48$).

4. תחת 'Branch' בחר ב-'main' ולחץ על שמירה.

5. המתן 10-20 שניות ואז רענן את הדף.

6. כעת תראה את ה-URL שלך, למשל https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## שינוי גופנים

1. ערוך את הקובץ /_assets/סגנון.css

2. תחת ה-'body section' תמצא את siteFont ו-headingFont

3. שנה אותם לגופנים שבהם תרצה להשתמש


## שימוש בתוסף Fontawesome ו/או Material Icons כדי להציג אייקונים בחינם ב-SRD שלך

### Fontawesome

השתמש ב-Fontawesome כדי לקבל אייקונים בחינם ואייקונים מונפשים. משתמשים רשומים יכולים להשתמש ב-Pro Icons.

1. מצא את האייקון ב-[Fontawesome](https://fontawesome.com/icons)
2. בחר את האייקון
3. בחלון הקופץ, תחת לשונית ה-HTML העתק את כל מה שבין " "

```EXAMPLE
<i מעמד="fa-solid fa-dice-d20"></i>
```

4. מקם את הטקסט שהועתק בין `:` ללא רווחים

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

השתמש ב-Material Icons עבור אייקונים נוספים בחינם.

1. מצא את האייקונים ב-[Material Icons](https://fonts.google.com/icons)
2. העתק והכנס את קישור ה-web span ישירות לקבצי ה-markdown שלך

```markup
<span מעמד="material-icons">face</span>
```