# Förutsättningar

1. En grundläggande förståelse för [markdown-språket](https://www.markdownguide.org/basic-syntax/).

2. Du behöver skapa ett gratis [github](https://github.com/)-konto om du inte redan har ett. Vi rekommenderar att du använder namnet på ditt rollspel eftersom detta kommer att bli en del av webbadressen som folk använder för att nå din SRD.

3. Du kan utföra hela processen via webbläsaren utan att behöva kunna git. Att lära sig github desktop gör det dock möjligt att testa eventuella ändringar lokalt innan du publicerar dem så att hela världen kan se dem.

> Om du har ett registrerat domännamn kan du använda det i den här processen för att skapa en SRD likt den jag har på https://srd.7thextinctionrpg.com

# Processen

## Skapa databasen (repository) på Github

1. Logga in på Github

2. Navigera till den offentliga mallen https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicka på "Use this template"

![Step3](/_media/Step3.png)

4. Välj "Create a new repository"

5. Ange ett namn på databasen (repository)

![Step5](/_media/Step5.png)

6. Välj "Private" (Privat)

7. Välj "Create repository"

Det tar 5–30 sekunder att kopiera mallen, därefter har du din egen kopia.

8. Säkerställ att du har filen ".nojekyll". Detta är en tom fil som krävs när man hostar en webbplats på Github, annars kommer SRD-sidan inte att visas korrekt. *(Talar om för GitHub Pages att inte köra de publicerade filerna genom Jekyll).*


## Lägga till ditt innehåll

### *.md-filer

.md-filer är markdown-filer. Markdown är ett lättviktigt märkspråk som du kan använda för att lägga till formatering i klartextdokument. Beroende på mängden innehåll kan du antingen placera all din spelinformation i en enda *.md-fil, eller skapa separata filer för varje kapitel, precis som jag har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "sample.md" innehåller några formateringsexempel.

Markdown-språket är mycket enkelt att lära sig. Använd länken som anges i punkt 2 under Förutsättningar ovan för en fullständig lista över syntax.

### _Sidebar.md

Detta är din meny och navigeringspanel på vänster sida av webbplatsen. När du har lagt till en markdown-fil i din databas måste du lägga till filen här så att dess innehåll inkluderas. Följ den befintliga formateringen.


## Aktivera Github Pages för att förvandla databasen till en webbplats

1. Klicka på "Settings" i din databas

![Website-Step1](/_media/Website-Step1.png)

2. Välj "Pages" i menyn på vänster sida

![Website-Step2](/_media/Website-Step2.png)

3. Om du inte har gjort databasen "public", har du två val:
    a. Gör databasen offentlig (public), vilket gör att du kan använda Github Pages för att hosta din SRD-webbplats gratis.
    b. Uppgradera ditt Github-konto (i skrivande stund kostar det $4 i månaden eller $48 per år).

4. Under "Branch", välj "main" och klicka på spara.

5. Vänta 10–20 sekunder och uppdatera sedan sidan.

6. Du kommer nu att se din webbadress, till exempel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ändra typsnitt

1. Redigera filen /_assets/style.css

2. Under "body section" hittar du siteFont & headingFont

3. Ändra dessa till de typsnitt du vill använda


## Använda insticksprogrammet Fontawesome och/eller Material Icons för att visa gratis ikoner i din SRD

### Fontawesome

Använd Fontawesome för att få gratisikoner och animerade ikoner. Prenumererande användare kan använda Pro-ikoner.

1. Hitta ikonen på [Fontawesome](https://fontawesome.com/icons)
2. Välj ikonen
3. I popup-fönstret, under fliken HTML, kopiera allt mellan " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Placera den kopierade texten mellan `:` utan mellanslag

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Använd Material Icons för fler gratisikoner

1. Hitta ikonerna på [Material Icons](https://fonts.google.com/icons)
2. Kopiera & infoga web-span-länken direkt i dina markdown-filer

```markup
<span class="material-icons">face</span>
```