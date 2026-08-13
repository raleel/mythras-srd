# Előfeltételek

1. A [markdown nyelv](https://www.markdownguide.org/basic-syntax/) alapvető ismerete.

2. Létre kell hoznod egy ingyenes [github](https://github.com/) fiókot, ha még nincs ilyened. Javasoljuk, hogy az RPG-d nevét használd, mivel ez része lesz annak az URL-nek, amelyet a felhasználók az SRD-d eléréséhez fognak használni.

3. Ezt az egész folyamatot elvégezheted a böngészőn keresztül anélkül, hogy ismerned kellene a git használatát. Bár a Github Desktop megtanulása lehetővé teszi, hogy helyileg tesztelj bármilyen módosítást, mielőtt élesben közzétennéd azokat a világ számára.

> Ha rendelkezésre áll egy regisztrált domain neved, akkor ezzel a folyamattal létrehozhatsz egy SRD-t, ahogy én is tettem: https://srd.7thextinctionrpg.com

# A folyamat

## A tároló (repository) létrehozása a Githubon

1. Jelentkezz be a Githubra.

2. Navigálj a nyilvános sablonhoz: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kattints a "Use this template" (Sablon használata) gombra.

![Step3](/_media/Step3.png)

4. Válaszd a "Create a new repository" (Új tároló létrehozása) lehetőséget.

5. Írj be egy tárolónevet.

![Step5](/_media/Step5.png)

6. Válaszd a 'Private' (Privát) lehetőséget.

7. Kattints a 'Create repository' (Tároló létrehozása) gombra.

5-30 másodpercet vesz igénybe a sablon másolása, utána meglesz a saját példányod.

8. Győződj meg róla, hogy megvan a ".nojekyll" fájl; ez egy üres fájl, amelyre szükség van a webhely Githubon való tárolásakor, különben az SRD nem jelenik meg megfelelően. *(Ez jelzi a GitHub Pages számára, hogy ne futtassa a közzétett fájlokat a Jekyllen keresztül).*


## A tartalmad hozzáadása

### *.md fájlok

A .md fájlok markdown fájlok. A Markdown egy könnyű jelölőnyelv, amelyet szöveges dokumentumok formázására használhatsz. A tartalom méretétől függően az összes játékadatot elhelyezheted egyetlen *.md fájlban, vagy – mint ahogy én is tettem a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) oldalon – külön fájlokat hozhatsz létre minden fejezetnek. A "sample.md" tartalmaz néhány formázási példát.

A Markdown nyelv nagyon könnyen megtanulható, használd a fenti Előfeltételek 2. pontjában megadott linket a szintaxis teljes listájához.

### _Sidebar.md

Ez a menüd, a weboldal bal oldalán található navigációs panel. Miután hozzáadtál egy markdown fájlt a tárolódhoz, itt kell hozzáadnod a fájlt, hogy a tartalma megjelenjen. Kövesd a meglévő formázást.


## Github Pages engedélyezése a tároló weboldallá alakításához

1. A tárolódban kattints a 'Settings' (Beállítások) fülre.

![Website-Step1](/_media/Website-Step1.png)

2. Válaszd a 'Pages' opciót a bal oldali menüben.

![Website-Step2](/_media/Website-Step2.png)

3. Ha még nem tetted 'public' (nyilvános) állapotúvá a tárolót, két választásod van:
    a. Tedd nyilvánossá a tárolót, ami lehetővé teszi, hogy a Github Pages segítségével ingyen tárold az SRD webhelyedet.
    b. Frissítsd a Github-fiókodat (a cikk írásakor ez havi 4 dollárba vagy évi 48 dollárba kerül).

4. A 'Branch' (Ág) alatt válaszd a 'main' lehetőséget, majd kattints a mentésre.

5. Várj 10-20 másodpercet, majd frissítsd az oldalt.

6. Most látni fogod az URL-edet, például: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Betűtípusok módosítása

1. Szerkeszd a /_assets/style.css fájlt.

2. A 'body section' alatt megtalálod a siteFont és headingFont beállításokat.

3. Módosítsd ezeket az általad használni kívánt betűtípusokra.


## Fontawesome és/vagy Material Icons beépülő modul használata ingyenes ikonok megjelenítéséhez az SRD-dben

### Fontawesome

Használd a Fontawesome-ot ingyenes és animált ikonok beszerzéséhez. Az előfizetők használhatják a Pro ikonokat.

1. Keresd meg az ikont a [Fontawesome](https://fontawesome.com/icons) oldalon.
2. Válaszd ki az ikont.
3. A felugró ablakban, a HTML fül alatt másold ki mindent a " " között.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Illeszd be a kimásolt szöveget a `:` közé, szóközök nélkül.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Használd a Material Icons-t további ingyenes ikonokért.

1. Keresd meg az ikonokat a [Material Icons](https://fonts.google.com/icons) oldalon.
2. Másold ki és illeszd be a webes span linket közvetlenül a markdown fájljaidba.

```markup
<span class="material-icons">face</span>
```