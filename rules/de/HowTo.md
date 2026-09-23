# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Du musst ein kostenloses [Github](https://github.com/)-Konto erstellen, falls du noch keines hast. Es wird empfohlen, den Namen deines RPGs zu verwenden, da dieser Teil der URL wird, über die Leute auf dein SRD zugreifen werden.

3. Du kannst diesen gesamten Vorgang über den Browser durchführen, ohne Git zu beherrschen. Das Erlernen von GitHub Desktop ermöglicht es dir jedoch, Änderungen lokal zu testen, bevor du sie live für die Welt sichtbar machst.

> Wenn du einen registrierten Domainnamen hast, kannst du diesen mit diesem Prozess verwenden, um ein SRD zu erstellen, so wie ich es getan habe: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositorys auf Github

1. Melde dich bei Github an.

2. Navigiere zur öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicke auf „Use this template“.

![Step3](/_media/Step3.png)

4. Wähle „Create a new repository“.

5. Gib einen Repository-Namen ein.

![Step5](/_media/Step5.png)

6. Wähle „Private“.

7. Wähle „Create repository“.

Es dauert 5–30 Sekunden, bis die Vorlage kopiert wurde, dann hast du deine eigene Kopie.

8. Stelle sicher, dass die Datei „.nojekyll“ vorhanden ist. Dies ist eine leere Datei, die beim Hosten einer Website auf Github benötigt wird, da das SRD sonst nicht korrekt angezeigt wird. *(Weist GitHub Pages an, die veröffentlichten Dateien nicht durch Jekyll zu verarbeiten).*


## Hinzufügen deiner Inhalte

### *.md-Dateien

.md-Dateien sind Markdown-Dateien. Markdown ist eine einfache Auszeichnungssprache, die du verwenden kannst, um Formatierungselemente zu Klartextdokumenten hinzuzufügen. Je nach Umfang deiner Inhalte kannst du entweder alle Informationen deines Spiels in eine einzige *.md-Datei einfügen oder, wie ich es unter [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) gemacht habe, separate Dateien für jedes Kapitel erstellen. Die „sample.md“ enthält einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr einfach zu erlernen; verwende den Link in Punkt 2 unter Voraussetzungen oben für eine vollständige Liste der Syntax.

### _Sidebar.md

Dies ist dein Menü, der Navigationsbereich auf der linken Seite der Website. Sobald du eine Markdown-Datei zu deinem Repository hinzugefügt hast, musst du die Datei hier eintragen, damit ihre Inhalte eingebunden werden. Folge der vorhandenen Formatierung.


## Github Pages aktivieren, um das Repository in eine Website zu verwandeln

1. Klicke in deinem Repository auf „Settings“.

![Website-Step1](/_media/Website-Step1.png)

2. Wähle im Menü auf der linken Seite „Pages“ aus.

![Website-Step2](/_media/Website-Step2.png)

3. Wenn du das Repository nicht „öffentlich“ gemacht hast, hast du zwei Möglichkeiten:
    a. Mache das Repository öffentlich, wodurch du Github Pages nutzen kannst, um deine SRD-Website kostenlos zu hosten.
    b. Upgrade dein Github-Konto (zum Zeitpunkt des Schreibens kostet dies 4 $ pro Monat oder 48 $ Jahresgebühr).

4. Wähle unter „Branch“ den „main“-Zweig aus und klicke auf „Save“.

5. Warte 10–20 Sekunden und aktualisiere die Seite.

6. Du siehst nun deine URL, wie z. B. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Schriftarten ändern

1. Bearbeite die Datei /_assets/Stil.css.

2. Unter dem „body“-Abschnitt findest du „siteFont“ und „headingFont“.

3. Ändere diese in die Schriftarten, die du verwenden möchtest.


## Verwendung der Plugins Fontawesome und/oder Material Icons, um kostenlose Symbole in deinem SRD anzuzeigen

### Fontawesome

Verwende Fontawesome, um kostenlose Symbole und animierte Symbole zu erhalten. Abonnenten können Pro Icons verwenden.

1. Finde das Symbol auf [Fontawesome](https://fontawesome.com/icons).
2. Wähle das Symbol aus.
3. Kopiere im Popup-Fenster unter dem HTML-Tab alles zwischen den Anführungszeichen „ “.

```EXAMPLE
<i Klasse="fa-solid fa-dice-d20"></i>
```

4. Platziere den kopierten Text zwischen `:` ohne Leerzeichen.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Verwende Material Icons für weitere kostenlose Symbole.

1. Finde die Symbole auf [Material Icons](https://fonts.google.com/icons).
2. Kopiere den Web-Span-Link und füge ihn direkt in deine Markdown-Dateien ein.

```markup
<span Klasse="material-icons">face</span>
```