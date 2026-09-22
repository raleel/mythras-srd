# Titel des Styleguides (h1)

Verwenden Sie h1-Überschriften (`# Heading Title`) für den Hauptkapiteltitel. Alle hx-Überschriften erscheinen in der Seitenleiste als Lesezeichen.

Wenn der Titel keine h1-Überschrift ist, erzeugt die Seitenleiste einen Duplizierungsfehler, der die Seite und dann die h2-'Titel'-Überschrift anzeigt.

---
## Abschnittsüberschriften (h2)

Verwenden Sie h2-Überschriften (`## Section Heading`), denen ein Trenner (`---`) vorangestellt ist, für jeden neuen Hauptabschnitt.

### Unterabschnittsüberschriften erhöhen die h-Ebene um 1

Verwenden Sie h3-Überschriften (`### Subsection Heading`) für jeden neuen Unterabschnitt und h4-Überschriften (`#### Sub-Subsection Heading`) für jeden neuen Unter-Unterabschnitt. 


### Unterabschnitt h-Progression: 2 > 3 > 4

Die Unterüberschriften werden in der Seitenleiste durcheinandergebracht, wenn die h-Progression nicht korrekt gehandhabt wird.

Der Überschriften-Marker sollte um eins oder gar nicht erhöht werden. 

h2 gefolgt von h2 oder h3 ist in Ordnung. h3 gefolgt von h3 oder h4 ist ebenfalls in Ordnung. 

### Unterabschnittsfehler
h2 gefolgt von h4 verursacht Probleme. Die Seitenleiste platziert die Unterüberschrift irgendwo oberhalb der Überschrift im Inhaltsverzeichnis.

### Reduzieren von h-Ebenen

Dies scheint kein Problem zu sein. z. B. h4 zu h3 oder h2 ist in Ordnung. 

---
## Formatierungskonventionen

Die folgenden Stile sind der Standard für diese _Imperative_ SRDs im Markdown-Format.

### Fett, Kursiv und Trenner

- Verwenden Sie doppelte Sternchen (`**Bold**`) für **Fetten** Text.
- Verwenden Sie Unterstriche (`_Italic_`) für _Kursiven_ Text. 
   - _Hinweis: Vermeiden Sie die Verwendung einzelner Sternchen für Kursivschrift!_
- Verwenden Sie Backslashes (`\_`), um ein Zeichen zu 'maskieren': \_Nicht kursiv\_.
- Verwenden Sie spitze Anführungszeichen (``` `code` ```), um `code blocks` zu erstellen.
- Verwenden Sie drei Bindestriche (`---`), um eine horizontale Trennlinie einzufügen.

### Konventionen für Fett & Kursiv

Versuchen Sie, sich an die folgenden Muster zu halten... 

#### Fette Titel

Verwenden Sie fette Titel bei der Beschreibung von Zaubern, Effekten usw.
- **Magietitel:** Beschreibung.

#### Kursive Titel

Verwenden Sie kursive Titel für 'Unterlisten' von Varianten, Zaubern usw.
- **Magie:** Beschreibung.
  - **_Magievariante-A:_** Beschreibung.
  - **_Magievariante-B:_** Beschreibung.

#### Kursive Titelreferenzen

Verwenden Sie kursive Titel, wenn Sie ein Buch wie _Mythras Imperative_ oder das grundlegende _Mythras_-Regelwerk referenzieren.

---
## Listenformatierung

### Ungeordnete Listen / Aufzählungszeichen

- Ungeordnete Listen werden mit Bindestrichen erstellt.
- Ungeordnete Listen werden mit Bindestrichen erstellt.
  - Erhöhen Sie die Einzugsebene mit 2 Leerzeichen oder einem Tabulator.

### Geordnete Listen / Nummerierte Punkte

1. Nummerierte Listen werden mit der Ziffer und einem Punkt erstellt.
2. Nummerierte Listen werden mit der Ziffer und einem Punkt erstellt.
- Vermischung mit Aufzählungszeichen
	- Und Einzug
3. Zahlen wieder einmischen
   - Und Aufzählungszeichen

### Überschriftenlisten

Bei Listen mit verwandten Unterüberschriften fetten Sie den Titel und den Doppelpunkt.
- **Beispiel 1:** Bla, bla, bla...
- **Beispiel 2:** Bla, bla, bla...

### Kursiv überschriebene Listen

Bei Listen mit verwandten Unterüberschriften fetten und kursivieren Sie den Titel und den Doppelpunkt.
- **_Beispiel 1:_** Bla, bla, bla...
- **_Beispiel 2:_** Bla, bla, bla...

---
## Tabellen

Geben Sie Tabellen eine Unterüberschrift, damit sie in der Seitenleiste als Lesezeichen erscheinen, um eine Ebene eingerückt von ihrem übergeordneten Abschnitt. 

~Machen Sie die Überschriftenzeile zu fettem Text.~ 
Das Fetten der Überschriftenzeile rendert sie tatsächlich in normalem Text. Das Standard-CSS hat diese Zeile bereits gefettet.

### Tabellentextausrichtung

Verwenden Sie Zeile 2 für die Inhaltsausrichtung: `:--`, `:-:` oder `--:`.
Dies wirkt sich auf die gesamte Spalte aus.

#### Grundlayout von Tabellen

| **Spalte 1** | **Spalte 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Konventionen zur Textausrichtung

- Verwenden Sie die zentrierte Ausrichtung für Zahlen oder ähnliche Wertelisten.
- Verwenden Sie die linksbündige Ausrichtung für Textsätze.

#### Ausrichtungsbeispieltabelle

| **Nummer** | **Beschreibung** |
| :-: | :-- |
| 1 | Beschreibender Text |
| 2 | Beschreibender Text |
| 3 | Beschreibender Text |

#### Beispiel: Feuerintensitätstabelle

| **Intensität** | **Beispiele** | **Zeit bis zur Entzündung** | **Schaden** |
| :-: | :-- | :-: | :-: |
| 1 | Kerze | 1d4 | 1d2 |
| 2 | Fackel | 1d3 | 1d4 |
| 3 | Lagerfeuer | 1d2 | 1d6 |
| 4 | Raumfüllender Brand | 1d2 | 2d6 |
| 5 | Vulkane Lava | Sofort | 3d6 |

---
## Links

Es gibt viele Verwendungszwecke für Links in der SRD, und nur einige wenige Hauptfälle werden hier behandelt.

### Links formatieren

Das Formatieren eines Links erfolgt mit Text in Klammern. Verwenden Sie eckige Klammern für den sichtbaren Linktext und runde Klammern für die Ziel-URL: `[Link Text](URL)`.

In diesen Dokumenten ist der am häufigsten verwendete externe Link der [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Externe vs. interne Links

Externe Links führen über das Internet zu anderen Seiten und benötigen eine `http://example.com`-URL; standardmäßig werden sie _immer_ in einem neuen Browser-Tab geöffnet. 

Um zu vermeiden, dass mehrere Tabs das gelesene Dokument überladen, werden interne Links und Lesezeichen mit relativen URLs erstellt, die sich auf die im GitHub-Repository sichtbaren Markdown-Dateien beziehen. Statt eines neuen Tabs scrollen diese internen Links schnell zum verlinkten Abschnitt.

#### Beispiele für interne Links

- **Kapitellinks:** Diese zeigen auf den Beginn eines Hauptabschnitts (h1). z. B. das Kapitel [Kampf](0005_Combat.md).

  - Linkformat: `[Combat](0005_Combat.md)`

- **Unterabschnittslinks:** Diese zeigen auf eine Überschrift innerhalb eines Kapitels und verweisen wie oben auf das Dokument, fügen jedoch `?id=` gefolgt von der Zielüberschrift direkt an. z. B. [Sprungangriffe](0005_Combat.md?id=leaping-attacks) 

  - Linkformat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Externe Links zu Unterabschnitten

Es kann vorkommen, dass auf einen bekannten Abschnitt eines externen Dokuments verwiesen werden muss, zum Beispiel eine bestimmte Tabelle in einer anderen SRD. Die Formatierung ist die gleiche wie bei Unterabschnittslinks oben, nur unter Verwendung der externen HTTP-URL.

Als Beispiel hier die [Tabelle zur Umrechnung von Imperial in Metrisch](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) aus der [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magie- und Kräfte-Listen

Starten Sie einen 'sauberen' Abschnitt mit einer h2-Überschrift für Listen verfügbarer Zauber, Kräfte usw.; dann h3 für jeden Listeneintrag. 

Zauber und Kräfte werden normalerweise in einer einzigen flachen Liste nach Magietyp (Volksmagie, Theismus usw.) präsentiert, aber wenn die Liste eigene Unterabschnitte benötigt, wie Schulen oder Kultspezialisierungen, erhöhen Sie die Überschriftenebene entsprechend. Zum Beispiel h2 für Theismus-Wunderliste, h3 für Kult: Mithras und h4 für jedes Mithras-Kultwunder. 
 
Insbesondere bei Zaubern, aber in jeder Beschreibung, die Schlüsselwortattribute verwendet, listen Sie diese in kursivem Text auf.

Beschreibender Text und spezielle Regeln verwenden normalen Text.

### Zauberlistenformatierung

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Beispiel: formatierte Zauberliste (als Blockzitat) </summary>

---
> ## Zauberbeschreibungen
>
> ### Abwenden
> _Sofort, Reichweite_
>
> Abwenden wird verwendet, um einen anderen Zauber innerhalb der Reichweite aufzuheben. Abwenden kann reaktiv gewirkt werden, um offensive Zauber durch die Nutzung der reaktiven Aktion Gegenmagie zu neutralisieren.

</details>

---
## Fahrzeug-Statistikblöcke
Starten Sie einen 'sauberen' Abschnitt mit einer h2-Überschrift für die Auflistungen, dann erhöhen Sie die h-Ebene wie gewohnt für Kategorien und Listeneinträge. 

Jedes aufgelistete Beispiel hat die Statistiken und Beschreibungen als Aufzählungsliste mit fettgedruckten Punktüberschriften.

### Formatierung der Fahrzeug-Statistikblöcke

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Beispiel: formatierter Fahrzeug-Statistikblock (als Blockzitat) </summary>

---
> ## Beispielfahrzeuge
> 
> ### Bodenfahrzeuge
> 
> #### Abfangjäger
> 
> - **Rumpf:** 6 (Mittleres Militär), 40 Struktur
> 
> - **Geschwindigkeit:** Schnell
> 
> - **Systeme:** 3
> 
> - **Eigenschaften:** Schleudersitz, Verbesserte Leistung, Überlegenes Handling, Überwachungssuite, Robust, Bewaffnet
> 
> - **Waffen:** Ölspurauswerfer, Rauchauswerfer, doppelt verknüpfte mittlere Maschinengewehre
> 
> - **Beschreibung:** Ein aufgemotztes Luxusauto, Sportwagen oder Ähnliches; dieses Auto ist gebaut, um schnell zu fahren und im Kampf genauso viel auszuteilen, wie es einsteckt. Dies ist die Art von Fahrzeug, an die Leute denken, wenn jemand "Spionageauto" sagt.

</details>

---
## Kreaturen-Statistikblöcke
Starten Sie einen 'sauberen' Abschnitt mit einer h2-Überschrift für die Auflistungen. Kreaturen-Statistikblöcke verwenden Tabellen und sind hinsichtlich Formatierung und Platzbedarf komplexer. Vermeiden Sie der Übersichtlichkeit halber Unterabschnitte und fügen Sie Trenner zwischen Listeneinträgen ein.


Jedes aufgelistete Beispiel sollte Folgendes enthalten...

- **Kreaturentitel:** Ein Trenner gefolgt von einer h3-Überschrift für den Namen der Kreatur.

- **MEG-Eintrag:** Ein externer Link zur angegebenen Kreatur im [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Kern-Details:** Kreaturname/-typ, Attribute, Fertigkeiten und bei Bedarf spezielle Beschreibungen oder Charakteranmerkungen.

- **Waffen-Details:** Gekürzte Beschreibungen mit Spalten für den Waffennamen und die folgenden Attribute: Größe (hier Stärke einschließen), Reichweite (hier Distanz einschließen), Schaden, RS/LP und alle speziellen Regeln.

- **Trefferzonen & Rüstung:** Zonentabellen variieren je nach Anatomie der Kreatur, sollten aber auch bei traditionellen Humanoiden enthalten sein, um Rüstung und Schaden zu verfolgen. 

### Formatierung der Kreaturen-Statistikblöcke

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```


<details>

<summary>Beispiel: formatierte Kreaturen-Statistikblock-Tabellen (als Blockzitat) </summary>

> ---
> ### Goblin/Ork
> [MEG-Eintrag](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Kreaturname | Goblin/Ork |
> | :-- | :-- |
> | Kernattribute | STR 11, KON 14, GRÖ 11, GES 11, INT 11, WIL 11, CHA 7 |
> | Aktionspunkte | 2 | 
> | Schadensmodifikator | - |
> | Initiative | +11 |
> | Bewegung | 6m |
> | Fähigkeiten | Nachtsicht |
> | Fertigkeiten | Athletik 52%, Muskelkraft 42%, List 57%, Abhärtung 48%, Ausweichen 62%, Wahrnehmung 61%, Unbewaffnet 52%, Willenskraft 42% |
> | Kampfstil | Krieger (Kurzschwert, Schild, Speer, Schleuder) 62% |
> 
> #### Waffen-Details
> 
> | Waffe | Größe | Reichweite | Schaden | RS/LP | Spezial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kurzschwert | M | M | 1d6 | 6/8 | |
> | Speer | M | L | 1d8+1 | 4/5 | |
> | Schleuder | L | 10/150/300 | 1d8 | 1/2 | |
> | Schild | L | S | 1d4 | 4/9 | Schützt 3 Zonen bei passivem Blocken/Abwehren |
> 
> #### Trefferzonen & Rüstung
> 
> | **1d20** | **Zone** | **RS/LP** |
> | :-: | :-- | :-: |
> | 1-3 | Rechtes Bein | 1/5 |
> | 4-6 | Linkes Bein | 1/5 |
> | 7-9 | Bauch | 1/6 |
> | 10-12 | Brust | 1/7 |
> | 13-15 | Rechter Arm | 1/4 |
> | 16-18 | Linker Arm | 1/4 |
> | 19-20 | Kopf | 1/5 |


</details>


---
## Community-Errata

### Tippfehler und Unklarheiten

Änderungen zur 'Bereinigung' der Texte der Autoren sollten minimal gehalten werden, aber Tippfehler und andere Fehler sollten einfach inline geändert werden, ohne darauf hinzuweisen.


### Info-Panels zu Errata

Wo eine gegebene Regel zu zweideutig, unvollständig oder einfach falsch ist, fügen Sie einen einklappbaren Hinweis zu Community-Errata hinzu.

Erklären Sie das Problem kursiv unter Verwendung von fett-kursiver Schrift nur für den Titel des Problems - _keine h(x)-Überschriften!_ - um keine verwirrenden Einträge in der Seitenleiste zu erzeugen.

Wenn Ersatztext hinzugefügt wird, setzen Sie ihn in Anführungszeichen in fett-kursiver Schrift, vorangestellt mit "_Community-Errata:_" in normaler kursiver Schrift.

Zusätzliche Regeln sollten, falls erforderlich, in normaler Schrift präsentiert werden.

#### Errata-Formatierungsvorlage

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata-Beispiele

<details>

<summary>* Community-Errata</summary>

_**Klettern**_

_Community-Errata:_
_**"Getragene Rüstung behindert Kletterer um einen Betrag, der dem Durchschnitt der getragenen Rüstungspunkte entspricht. Ermitteln Sie dies, indem Sie die Rüstungspunkte aller Zonen addieren und diese Zahl durch die Anzahl der Zonen teilen."**_

_Die Regel, wie sie geschrieben steht, verursacht schnell Probleme. Das Tragen eines einzigen Rüstungsteils mit 6 RS würde einen Menschen auf Bewegung 0 reduzieren, was bedeutet, dass ein Mensch, der nur einen Stahlhelm trägt, zu überladen wäre, um überhaupt zu klettern. Dies erscheint unangemessen restriktiv, daher die oben vorgeschlagene bearbeitete Version. Dies wird aktualisiert, falls die ursprünglichen Autoren die Regel wie geschrieben überarbeiten._

</details>

<details>

<summary>* Community-Errata</summary>

_**Gangarten: Gehen, Laufen, Sprinten**_

_Die veröffentlichte Version von _Mythras Imperative_ hat keine expliziten Regeln für die Bewegung in verschiedenen Gangarten, obwohl sie im Mythras-Kernregelwerk abgedeckt sind. Die oben genannten Gangarten-Multiplikatoren wurden als Teil der Community-Errata hinzugefügt._ 

_Wo erforderlich, sollte es ausreichen, Gangarten wie folgt zu behandeln:_

- _Gangarten, die schneller als Gehen sind, wenden einen Multiplikator auf den Bewegungswert an: 3x für Laufen, 5x für Sprinten._

- _Während einer Lauf- oder Sprint-Gangart können Charaktere die meisten proaktiven Aktionen wie Angreifen oder Zaubern nicht versuchen. Einige Ausnahmen beinhalten..._
  - _Angriffe bei Verwendung der Ansturm-Regeln._
  - _Abfeuern von Fernkampfwaffen mit der Eigenschaft Plänkeln._ 
- _Als allgemeine Regel gilt: Alle erlaubten Aktionen sollten beim Laufen als um einen Grad schwieriger und beim Sprinten als um zwei Grade schwieriger behandelt werden._


</details>

---
## Sonstige Warnungen

### Leerzeilen / Zeilenumbrüche

Lassen Sie eine Leerzeile zwischen verschiedenen Arten von Einträgen. Überschriften, Trenner, Tabellen usw. Diese werden in der Leseansicht nicht sichtbar gerendert, aber ihr Fehlen kann Formatierungsprobleme verursachen.

### Fetter oder kursiver mehrzeiliger Text

Jeder Absatz muss als fetter oder kursiver Text markiert werden. Die neue Zeile zwischen Absätzen bricht die Formatierung und hinterlässt verwaiste Formatierungszeichen.

### Internationale Schreibweisen

Die regressiven und bedauerlichen Mächte haben es für angemessen gehalten, alle britischen Schreibweisen zugunsten der objektiv schwächeren US-Versionen zu entfernen. Achten Sie auf britische -OUR-Wörter: _armour_ (Rüstung), _favour_ (Gunst) usw.