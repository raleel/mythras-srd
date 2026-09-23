# Stilrichtlinien-Titel (h1)

Verwenden Sie h1-Überschriften (`# Heading Title`) für den Hauptkapiteltitel. Alle hx-Überschriften erscheinen in der Seitenleiste als Lesezeichen.

Wenn der Titel keine h1-Überschrift ist, erzeugt die Seitenleiste einen Duplizierungsfehler, der die Seite und dann die h2-Überschrift „Titel“ anzeigt.

---
## Abschnittsüberschriften (h2)

Verwenden Sie h2-Überschriften (`## Section Heading`), denen ein Trenner (`---`) für jeden neuen Hauptabschnitt vorangestellt ist.

### Unterabschnittsüberschriften erhöhen die h-Ebene um 1

Verwenden Sie h3-Überschriften (`### Subsection Heading`) für jeden neuen Unterabschnitt und h4-Überschriften (`#### Sub-Subsection Heading`) für jeden neuen Unter-Unterabschnitt. 


### Unterabschnitt-h-Progression: 2 > 3 > 4

Die Unterüberschriften werden in der Seitenleiste durcheinandergebracht, wenn die h-Progression nicht korrekt gehandhabt wird.

Die Überschriftenmarkierung sollte um eins oder gar nicht erhöht werden. 

h2 gefolgt von h2 oder h3 ist in Ordnung. h3 gefolgt von h3 oder h4 ist ebenfalls in Ordnung. 

### Fehler bei Unterabschnitten
h2 gefolgt von h4 verursacht Probleme. Die Seitenleiste platziert die Unterüberschrift irgendwo oberhalb der Überschrift im Inhaltsverzeichnis.

### Reduzierung der h-Ebenen

Dies scheint kein Problem zu sein. z. B. h4 zu h3 oder h2 ist in Ordnung. 

---
## Formatierungskonventionen

Die folgenden Stile sind die Norm für diese _Imperative_ SRDs im Markdown-Format.

### Fett, Kursiv und Trenner

- Verwenden Sie doppelte Sternchen (`**Bold**`) für **Fetten** Text.
- Verwenden Sie Unterstriche (`_Italic_`) für _Kursiven_ Text. 
   - _Hinweis: Vermeiden Sie einfache Sternchen für Kursivschrift!_
- Verwenden Sie Backslashes (`\_`), um ein Zeichen zu „maskieren“: \_Nicht Kursiv\_.
- Verwenden Sie spitze Anführungszeichen (``` `code` ```), um `code blocks` zu erstellen.
- Verwenden Sie drei Bindestriche (`---`), um eine horizontale Trennlinie einzufügen.

### Konventionen für Fett & Kursiv

Versuchen Sie, sich an die folgenden Muster zu halten... 

#### Fette Titel

Verwenden Sie fette Titel bei der Beschreibung von Zaubern, Effekten usw.
- **Magietitel:** Beschreibung.

#### Kursive Titel

Verwenden Sie kursive Titel für „Unterlisten“ von Varianten-Zaubern usw.
- **Magie:** Beschreibung.
  - **_Magievariante-A:_** Beschreibung.
  - **_Magievariante-B:_** Beschreibung.

#### Kursive Titelreferenzen

Verwenden Sie kursive Titel, wenn Sie auf ein Buch verweisen, wie z. B. _Mythras Imperative_ oder das _Mythras_-Kernregelwerk.

---
## Listenformatierung

### Ungeordnete Listen / Aufzählungspunkte

- Ungeordnete Listen werden mit Bindestrichen erstellt.
- Ungeordnete Listen werden mit Bindestrichen erstellt.
  - Erhöhen Sie die Einrückungsebene mit 2 Leerzeichen oder einem Tabulator.

### Geordnete Listen / Nummerierte Punkte

1. Nummerierte Listen werden mit der Ziffer und einem Punkt erstellt.
2. Nummerierte Listen werden mit der Ziffer und einem Punkt erstellt.
- Mischen mit Aufzählungspunkten
	- Und Einrückung
3. Zahlen wieder einmischen
   - Und Aufzählungspunkte

### Listen mit Überschriften

Für Listen mit zugehörigen Unterüberschriften, den Titel und Doppelpunkt fett drucken.
- **Beispiel 1:** Bla, bla, bla...
- **Beispiel 2:** Bla, bla, bla...

### Kursive Listen mit Überschriften

Für Listen mit zugehörigen Unterüberschriften, den Titel und Doppelpunkt fett und kursiv drucken.
- **_Beispiel 1:_** Bla, bla, bla...
- **_Beispiel 2:_** Bla, bla, bla...

---
## Tabellen

Geben Sie Tabellen eine Unterüberschrift, damit sie in der Seitenleiste mit Lesezeichen versehen und eine Ebene unter ihrem übergeordneten Abschnitt eingerückt erscheinen. 

~Machen Sie die Kopfzeile zu fettem Text.~ 
Das Fetten der Kopfzeile stellt sie tatsächlich in normalem Text dar. Das Standard-CSS hat diese Zeile fett formatiert.

### Textausrichtung in Tabellen

Verwenden Sie Zeile 2 für die Inhaltsausrichtung: `:--`, `:-:` oder `--:`.
Dies wirkt sich auf die gesamte Spalte aus.

#### Grundlayout von Tabellen

| **Spalte 1** | **Spalte 2** |
| :-: | :-- |
| 1 | Alpha |
| 2 | Beta |
| 3 | Gamma |

### Konventionen zur Textausrichtung

- Verwenden Sie zentrierte Ausrichtung für Zahlen oder ähnliche Wertelisten.
- Verwenden Sie linksbündige Ausrichtung für Textsätze.

#### Beispiel für Ausrichtungstabelle

| **Nummer** | **Beschreibung** |
| :-: | :-- |
| 1 | Beschreibender Text |
| 2 | Beschreibender Text |
| 3 | Beschreibender Text |

#### Beispiel: Tabelle Feuerintensität

| **Intensität** | **Beispiele** | **Zeit bis zur Entzündung** | **Schaden** |
| :-: | :-- | :-: | :-: |
| 1 | Kerze | 1d4 | 1d2 |
| 2 | Fackel | 1d3 | 1d4 |
| 3 | Lagerfeuer | 1d2 | 1d6 |
| 4 | Raumfüllender Brand | 1d2 | 2d6 |
| 5 | Vulkanausbruch | Sofort | 3d6 |

---
## Links

Es gibt viele Verwendungsmöglichkeiten für Links im SRD, und hier werden nur einige Hauptfälle abgedeckt.

### Formatierung von Links

Das Formatieren eines Links erfolgt mit Text in Klammern. Verwenden Sie eckige Klammern für den sichtbaren Linktext und runde Klammern für die Ziel-URL: `[Link Text](URL)`.

In diesen Dokumenten ist der am häufigsten verwendete externe Link der [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Externe vs. interne Links

Externe Links führen über das Internet zu anderen Seiten und benötigen eine `http://example.com` URL und öffnen sich standardmäßig _immer_ in einem neuen Browser-Tab. 

Damit das gelesene Dokument nicht mit mehreren Tabs überladen wird, werden interne Links und Lesezeichen mit relativen URLs gebildet, die auf die im GitHub-Repository sichtbaren Markdown-Dateien verweisen. Anstelle eines neuen Tabs scrollen diese internen Links schnell zum verlinkten Abschnitt.

#### Beispiele für interne Links

- **Kapitellinks:** Diese zeigen auf den Anfang eines Hauptabschnitts (h1). z. B. das Kapitel [Kampf](0005_Combat.md).

  - Linkformat: `[Combat](0005_Combat.md)`

- **Unterabschnitt-Links:** Diese zeigen auf eine Überschrift innerhalb eines Kapitels, die wie oben auf das Dokument verweist, aber direkt `?id=` gefolgt von der Zielüberschrift anhängt. z. B. [Sprungangriffe](0005_Combat.md?id=leaping-attacks) 

  - Linkformat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Externe Links zu Unterabschnitten

Es kann vorkommen, dass auf einen bekannten Abschnitt eines externen Dokuments verwiesen werden muss, zum Beispiel auf eine bestimmte Tabelle in einem anderen SRD. Die Formatierung ist dieselbe wie bei den Unterabschnitt-Links oben, nur unter Verwendung der externen HTTP-URL.

Als Beispiel ist hier die [Tabelle zur Umrechnung von Imperial in Metrisch](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) aus dem [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magie- und Kräfte-Listen

Beginnen Sie einen „sauberen“ Abschnitt mit einer h2-Überschrift für Listen verfügbarer Zauber, Kräfte usw.; dann h3 für jeden Listeneintrag. 

Zauber und Kräfte werden normalerweise in einer einzigen flachen Liste nach Magietyp (Volksmagie, Theismus usw.) präsentiert, aber wenn die Liste eigene Unterabschnitte benötigt, wie Schule oder Kult-Spezialisierungen, erhöhen Sie die Überschriftenebene entsprechend. Zum Beispiel h2 für Theismus-Wunderliste, h3 für Kult: Mithras und h4 für jedes Mithras-Kultwunder. 
 
Besonders bei Zaubern, aber auch bei jeder Beschreibung, die Schlüsselwortattribute verwendet, listen Sie diese in kursivem Text auf.

Beschreibender Text und Spezialregeln verwenden normalen Text.

### Formatierung der Zauberliste

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
> _Sofort, Fernkampf_
>
> Abwenden wird verwendet, um einen anderen Zauber innerhalb der Reichweite aufzuheben. Abwenden kann reaktiv gewirkt werden, um offensive Zauber durch die Nutzung der Reaktiven Aktion Gegenmagie zu neutralisieren.

</details>

---
## Fahrzeug-Statistiken
Beginnen Sie einen „sauberen“ Abschnitt mit einer h2-Überschrift für die Auflistungen und erhöhen Sie dann die h-Ebene wie üblich für Kategorien und Listenelemente. 

Jedes aufgelistete Beispiel enthält die Statistiken und Beschreibungen, die als Liste mit Aufzählungspunkten und fettgedruckten Punktüberschriften dargestellt werden.

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
> #### Interceptor
> 
> - **Rumpf:**  6 (Mittel Schweres Militär), 40 Struktur
> 
> - **Geschwindigkeit:**  Schnell
> 
> - **Systeme:**  3
> 
> - **Eigenschaften:**  Schleudersitz, Verbesserte Leistung, Überlegenes Handling, Überwachungssuite, Robust, Bewaffnet
> 
> - **Waffen:**  Ölspursprüher, Rauchsprüher, doppelt verbundene mittlere Maschinengewehre
> 
> - **Beschreibung:**  Ein aufgemotztes Luxusauto, Sportwagen oder Ähnliches, dieses Auto ist darauf ausgelegt, schnell zu sein und in einer Schlacht genauso viel auszuteilen, wie es einsteckt. Das ist die Art von Fahrzeug, an die Leute denken, wenn jemand „Spionageauto“ sagt.

</details>

---
## Kreaturen-Statistikblöcke
Beginnen Sie einen „sauberen“ Abschnitt mit einer h2-Überschrift für die Auflistungen. Kreaturen-Statistikblöcke verwenden Tabellen und sind in Bezug auf Formatierung und Platzbedarf komplexer. Vermeiden Sie zur Übersichtlichkeit Unterabschnitte und fügen Sie Trenner zwischen Listenelementen hinzu.


Jedes aufgelistete Beispiel sollte Folgendes enthalten...

- **Kreaturentitel:** Ein Trenner gefolgt von einer h3-Überschrift für den Kreaturnamen.

- **MEG-Eintrag:** Ein externer Link zur angegebenen Kreatur im [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Kerndetails:** Kreaturname/Typ, Attribute, Fertigkeiten und alle speziellen Beschreibungen oder Charakterhinweise nach Bedarf.

- **Waffendetails:** Gekürzte Beschreibungen mit Spalten für den Waffennamen und die folgenden Attribute: Statur (Kraft hier einschließen), Reichweite (Nahkampf hier einschließen), Schaden, Rüstung/Trefferpunkte und alle Sonderregeln.

- **Trefferzonen & Rüstung:** Standorttabellen variieren je nach Anatomie der Kreatur, sollten aber selbst bei traditionellen Humanoiden enthalten sein, um Rüstung und Schaden zu verfolgen. 

### Formatierung der Kreaturen-Statistikblöcke

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attribute | STÄ 11, KON 14, GRÖ 11, GES 11, INT 11, MAC 11, CHA 7 |
| Other Notizen | Values and details | 
```


<details>

<summary>Beispiel: formatierte Tabellen für Kreaturen-Statistikblöcke (als Blockzitat) </summary>

> ---
> ### Goblin/Ork
> [MEG-Eintrag](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Kreaturenname | Goblin/Ork  |
> | :-- | :-- |
> | Hauptattribute | STÄ 11, KON 14, GRÖ 11, GES 11, INT 11, MAC 11, CHA 7 |
> | Aktionspunkte | 2 | 
> | Schad. Mod. | - |
> | Initiative | +11 |
> | Bewegung | 6m |
> | Fähigkeiten | Nachtsicht |
> | Fertigkeiten | Athletik 52%, Muskelkraft 42%, Täuschung 57%, Ausdauer 48%, Ausweichen 62%, Wahrnehmung 61%, Unbewaffnet 52%, Willenskraft 42% |
> | Kampfstil | Krieger (Kurzschwert, Schild, Speer, Schleuder) 62% |
> 
> #### Waffendetails
> 
> | Waffe | Statur | Reichweite | Schaden | Rüstung/TP | Spezial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kurzschwert | M | M | 1d6 | 6/8 | |
> | Speer | M | L | 1d8+1 | 4/5 | |
> | Schleuder | L | 10/150/300 | 1d8 | 1/2 |  |
> | Schild | L | S | 1d4 | 4/9 | Schützt 3 Zonen bei passivem Blocken/Abwehren |
> 
> #### Trefferzonen & Rüstung
> 
> | **1d20** | **Ort** | **Rüstung/TP** |
> | :-: | :-- | :-: |
> | 1-3 | Rechtes Bein | 1/5 |
> | 4-6 | Linkes Bein | 1/5 |
> | 7-9 | Unterleib | 1/6 |
> | 10-12 | Brust | 1/7 |
> | 13-15 | Rechter Arm | 1/4 |
> | 16-18 | Linker Arm | 1/4 |
> | 19-20 | Kopf | 1/5 |


</details>


---
## Community-Errata

### Tippfehler und Verwirrung

Änderungen zur „Bereinigung“ der Texte der Autoren sollten minimal gehalten werden, aber Tippfehler und andere Fehler sollten einfach inline ohne Kennzeichnung geändert werden.


### Errata-Info-Panels

Wenn eine bestimmte Regel zu mehrdeutig, unvollständig oder schlicht falsch ist, fügen Sie einen aufklappbaren Community-Errata-Hinweis hinzu.

Erklären Sie das Problem kursiv unter Verwendung von fett-kursiver Schrift für den Titel des Problems - _keine h(x)-Überschriften!_ - um keine verwirrenden Seitenleisteneinträge zu erzeugen.

Wenn Ersatztext hinzugefügt wird, setzen Sie ihn in Anführungszeichen in fett-kursiv, vorangestellt mit "_Community-Errata:_" in normalgewichtiger Kursivschrift.

Zusätzliche Regeln sollten, falls erforderlich, in normalgewichtigem Text dargestellt werden.

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
_**"Getragene Rüstung behindert Kletterer um einen Betrag, der dem Durchschnitt der getragenen Rüstungspunkte entspricht. Ermitteln Sie dies, indem Sie die getragenen Rüstungspunkte jedes Körperteils addieren und diesen Wert durch die Anzahl der Körperteile dividieren."**_

_Die Regel, wie sie geschrieben steht, führt schnell zu Problemen. Das Tragen eines einzigen Rüstungsteils mit 6 Rüstungspunkten würde einen Menschen auf eine Bewegungsrate von 0 reduzieren, was bedeutet, dass ein Mensch, der nur einen Stahlhelm und sonst nichts trägt, zu überladen wäre, um überhaupt zu klettern. Dies erscheint unangemessen restriktiv, daher die oben vorgeschlagene editierte Version. Dies wird aktualisiert, sollte der ursprüngliche Autor die geschriebene Regel überarbeiten._

</details>

<details>

<summary>* Community-Errata</summary>

_**Gangarten: Gehen, Rennen, Sprinten**_

_Die veröffentlichte Version von _Mythras Imperative_ enthält keine expliziten Regeln für die Bewegung in verschiedenen Gangarten, obwohl diese im Mythras-Kernregelwerk abgedeckt sind. Die oben genannten Gangarten-Multiplikatoren wurden als Teil der Community-Errata hinzugefügt._ 

_Wo erforderlich, sollte es ausreichen, die Gangarten wie folgt zu behandeln:_

- _Gangarten, die schneller als Gehen sind, wenden einen Multiplikator auf den Bewegungs-Wert an: 3x für Rennen, 5x für Sprinten._

- _Während einer Renn- oder Sprint-Gangart können Charaktere die meisten proaktiven Aktionen wie Angreifen oder Zaubern nicht versuchen. Einige Ausnahmen beinhalten..._
  - _Angriffe bei der Verwendung der Regeln für Sturmangriffe._
  - _Abfeuern von Fernkampfwaffen mit der Eigenschaft Plänkeln._ 
- _Als allgemeine Regel sollte jede erlaubte Aktion so behandelt werden, dass sie beim Rennen um einen Grad schwerer und beim Sprinten um zwei Grad schwerer zu bewerkstelligen ist._


</details>

---
## Verschiedene Warnungen

### Leerzeilen / Wagenrückläufe

Lassen Sie eine Leerzeile zwischen verschiedenen Arten von Einträgen. Überschriften, Trenner, Tabellen usw. Diese werden in der Leseansicht nicht sichtbar sein, aber ihr Fehlen kann zu Formatierungsproblemen führen.

### Fetter oder kursiver mehrzeiliger Text

Jeder Absatz muss als fetter oder kursiver Text markiert werden. Die neue Zeile zwischen den Absätzen unterbricht die Formatierung und hinterlässt verwaiste Formatierungsmarkierungen.

### Internationale Schreibweisen

Die regressiven und beklagenswerten Mächte haben es für richtig befunden, alle britischen Schreibweisen zugunsten der objektiv schwächeren US-Versionen zu entfernen. Achten Sie auf britische -OUR-Wörter: _armour_ (Rüstung), _favour_ (Gunst) usw.