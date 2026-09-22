# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Du musst ein kostenloses [Github](https://github.com/)-Konto erstellen, falls du noch keines hast. Es wird empfohlen, den Namen deines Rollenspiels zu verwenden, da dies Teil der URL wird, die Nutzer verwenden, um auf dein SRD zuzugreifen.

3. Du kannst diesen gesamten Prozess über den Browser abwickeln, ohne Git zu beherrschen. Das Erlernen von GitHub Desktop ermöglicht es dir jedoch, Änderungen lokal zu testen, bevor du sie live für die Welt sichtbar machst.

> Wenn du einen registrierten Domainnamen hast, kannst du diesen mit diesem Prozess verwenden, um ein SRD zu erstellen, so wie ich es getan habe: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositories auf Github

1. Melde dich bei Github an.

2. Navigiere zu der öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicke auf "Use this template".

![Step3](/_media/Step3.png)

4. Wähle "Create a new repository".

5. Gib einen Namen für das Repository ein.

![Step5](/_media/Step5.png)

6. Wähle 'Private'.

7. Wähle 'Create repository'.

Es dauert 5–30 Sekunden, bis die Vorlage kopiert wurde, danach hast du deine eigene Kopie.

8. Stelle sicher, dass du die Datei ".nojekyll" besitzt. Dies ist eine leere Datei, die beim Hosten einer Website auf Github erforderlich ist; andernfalls wird das SRD nicht korrekt angezeigt. *(Weist GitHub Pages an, die veröffentlichten Dateien nicht durch Jekyll zu verarbeiten).*


## Deine Inhalte hinzufügen

### *.md-Dateien

.md-Dateien sind Markdown-Dateien. Markdown ist eine leichtgewichtige Auszeichnungssprache, die du verwenden kannst, um Formatierungselemente zu Klartext-Dokumenten hinzuzufügen. Abhängig vom Umfang deiner Inhalte kannst du entweder alle Spielinformationen in einer einzigen *.md-Datei platzieren oder, wie ich es bei [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) getan habe, separate Dateien für jedes Kapitel erstellen. Die "sample.md" bietet einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr leicht zu erlernen. Verwende den unter Punkt 2 bei den Voraussetzungen bereitgestellten Link für eine vollständige Liste der Syntax.

### _Sidebar.md

Dies ist dein Menü, der Navigationsbereich auf der linken Seite der Website. Sobald du eine Markdown-Datei zu deinem Repository hinzugefügt hast, musst du die Datei hier eintragen, damit ihre Inhalte eingeschlossen werden. Folge dabei der bestehenden Formatierung.


## Github Pages aktivieren, um das Repository in eine Website zu verwandeln

1. Klicke in deinem Repository auf 'Settings'.

![Website-Step1](/_media/Website-Step1.png)

2. Wähle 'Pages' im linken Menü.

![Website-Step2](/_media/Website-Step2.png)

3. Wenn du das Repository nicht auf 'public' gestellt hast, hast du zwei Möglichkeiten:
    a. Mache das Repository öffentlich, was es dir ermöglicht, Github Pages zu nutzen, um deine SRD-Website kostenlos zu hosten.
    b. Führe ein Upgrade deines Github-Kontos durch (zum Zeitpunkt des Schreibens kostet dies 4 $ pro Monat oder eine Jahresgebühr von 48 $).

4. Wähle unter 'Branch' die Option 'main' und klicke auf 'Save'.

5. Warte 10–20 Sekunden und aktualisiere dann die Seite.

6. Du siehst nun deine URL, wie zum Beispiel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Schriftarten ändern

1. Bearbeite die Datei /_assets/style.css

2. Im Bereich 'body' findest du siteFont & headingFont.

3. Ändere diese in die Schriftarten, die du verwenden möchtest.


## Verwendung der Plugins Fontawesome und/oder Material Icons, um kostenlose Symbole in deinem SRD anzuzeigen

### Fontawesome

Verwende Fontawesome, um kostenlose Symbole und animierte Symbole zu erhalten. Abonnenten können Pro-Symbole verwenden.

1. Finde das Symbol auf [Fontawesome](https://fontawesome.com/icons)
2. Wähle das Symbol aus.
3. Kopiere im Popup-Fenster unter dem HTML-Tab alles, was zwischen " " steht.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Platziere den kopierten Text zwischen `:` ohne Leerzeichen.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Verwende Material Icons für weitere kostenlose Symbole.

1. Finde die Symbole auf [Material Icons](https://fonts.google.com/icons)
2. Kopiere den Web-Span-Link und füge ihn direkt in deine Markdown-Dateien ein.

```markup
<span class="material-icons">face</span>
```