# Fahrzeuge

Fahrzeuge in _Mythras Imperative_ werden in einer semi-abstrakten Weise behandelt. Im Wesentlichen sind sie Hilfsmittel im Hintergrund, die dazu dienen, Charaktere von A nach B zu bringen, ohne dass eine detaillierte Beschreibung oder Statistik erforderlich wäre. Gelegentlich benötigen Spielleiter jedoch Details zu Fahrzeugen, wenn diese in Verfolgungsjagden oder Kampfsituationen dargestellt werden müssen.

Die Regeln in diesem Abschnitt ermöglichen die Darstellung der meisten Fahrzeugarten, jedoch auf eine abstrahierte Weise, die Flexibilität bieten und das Erzählen von Geschichten verbessern soll. Raumschiffe und Weltraumfahrzeuge unterscheiden sich ein wenig, basieren jedoch auf ähnlichen Prinzipien.

---
## Statistiken

Alle Fahrzeuge werden anhand ihrer Struktur, Hülle, Geschwindigkeit, Systeme, Merkmale und Schilde (falls in der Spielwelt vorhanden) beschrieben.

- **[Größe](0006_Vehicles.md?id=vehicle-size-table):** Alle Fahrzeuge haben eine von sechs Größenstufen, die den Wert oder Bereich der übrigen Merkmale bestimmt. Aufgrund ihrer größeren intrinsischen Größe und der lebensfeindlichen Umgebung des Weltraums haben Raumschiffe ihren eigenen Wertebereich.
- **[Hülle](0006_Vehicles.md?id=terrestrial-hulls):** Stellt Rüstungspunkte dar.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Stellt die Trefferpunkte eines Fahrzeugs dar.
- **[Schilde](0006_Vehicles.md?id=shields):** In Spielwelten mit fortschrittlicher Technologie zur Energiemanipulation können Schilde vorhanden sein, die das Fahrzeug schützen, aber unter anhaltendem Beschuss abgetragen werden können.
- **[Systeme](0006_Vehicles.md?id=systems):** Repräsentieren lebenswichtige Komponenten des Fahrzeugs, einschließlich des Antriebs, des Mannschaftsbereichs usw.
- **[Geschwindigkeit](0006_Vehicles.md?id=speed):** Jedes Fahrzeug hat einen grundlegenden Geschwindigkeitswert.
- **[Merkmale](0006_Vehicles.md?id=traits):** Ein Fahrzeug kann auch ein oder mehrere Merkmale besitzen. Merkmale, ähnlich den Fähigkeiten, die Kreaturen in den _Mythras Imperative_-Regeln zugewiesen werden, oder Kampfstil-Merkmale, bieten eine zusätzliche spielerische Beschreibung und Vorteile, die die Natur des Fahrzeugs widerspiegeln.
- **[Waffen](0006_Vehicles.md?id=weapons):** Ähnlich wie Merkmale kann ein Fahrzeug mit Waffen ausgestattet sein, sofern die Spielwelt dies zulässt. Einige vorgeschlagene Beispiele und Werte sind unten aufgeführt.


---
### Hüllengröße, Typ und Struktur

Die Größe und der Zweck eines Fahrzeugs beeinflussen die Dicke seiner Hülle und die Widerstandsfähigkeit seiner internen Struktur. Ein Motorrad zum Beispiel hat eine minimale Hülle, da es auf Geschwindigkeit und Wendigkeit ausgelegt ist. Ein Land-Panzerschiff (ein massiver, auf Ketten oder Rädern fahrender, gepanzerter Gigant, der von Dampf- oder Dieselmotoren angetrieben wird) ist ein viel größeres Fahrzeug, das für das Schlachtfeld konzipiert wurde und eine wesentlich größere Hülle besitzt. Die vergleichbaren Größen von Hüllen (und wie viele Treffer durch Waffen sie typischerweise aushalten können) sind in den untenstehenden Tabellen für Fahrzeuggröße und Hülle zusammengefasst.

Wenn ein Fahrzeug Schaden erleidet, wird der eingehende Schaden um seinen Hüllenwert reduziert. Jeder verbleibende Schaden wird von den Strukturpunkten des Fahrzeugs abgezogen und hat eine prozentuale Chance, die dem durchdringenden Schaden entspricht, ein System zu beeinträchtigen. Wenn die Struktur eines Fahrzeugs jemals auf Null reduziert wird, ist es entweder völlig zerstört oder so schwer beschädigt, dass es verschrottet werden muss.

##### Terrestrische Hüllen 

| Größe | Struktur | Ziviler Hüllenwert | Militärischer Hüllenwert | Beispiel |
| :-- | :-: | :-: | :-: | :-- |
| Klein | 1-20 | 1-3 | 4-6 | Motorrad, Motorrad mit Beiwagen, Kompakt- oder Kleinstwagen, Kanu, Kajak, Ruderboot |
| Mittel | 21-40 | 1-6 | 7-9 | Limousine, Lieferwagen, Pick-up, Luxusauto, Sportwagen, Muscle-Car, Stretchlimousine, Rettungsboot, Schnellboot, Hängegleiter, Tragschrauber |
| Groß | 41-60 | 4-9 | 10-12 | LKW, Stretchlimousine, SUV, Bus, Van, Privatflugzeug, Segelflugzeug, Vergnügungsschiff, Panzer, Hubschrauber, U-Boot |
| Riesig | 61-80 | 7-12 | 13-15 | Sattelschlepper, Verkehrsflugzeug, Jet, Küstenwacheschiff, Yacht |
| Enorm | 81-100 | 10-15 | 16-18 | Zug, Kreuzfahrtschiff, Marineschiff |

##### Raumschiff-Hüllen 

| Größe | Struktur | Ziviler Hüllenwert | Militärischer Hüllenwert | Beispiel |
| :-- | :-: | :-: | :-: | :-- |
| Klein | 10-50 | 4-9 | 10-12 | Einsitziger Jäger |
| Mittel | 51-150 | 7-12 | 13-15 | Leichter Frachter, Shuttle |
| Groß | 151-450 | 10-15 | 16-18 | Schwerer Frachter, Kreuzer |
| Riesig | 451-1350 | 13-18 | 19-21 | Begleitfregatte, Leichter Schlachtkreuzer |
| Enorm | 1351-4050 | 16-21 | 21-24 | Generationenschiff, Schwerer Schlachtkreuzer |
| Kolossal | 4050-12110 | 19-24 | 24-30 | Orbitalhabitat, Planetenzerstörende Kampfstation |


---
### Schilde

Deflektorschilde bieten eine zusätzliche Schutzschicht für Fahrzeuge, die mit ihnen ausgestattet werden können. Schilde funktionieren aufgrund ihrer ablativen Natur etwas anders als die Hülle. Wenn eingehender Schaden gleich oder geringer als der Schildwert ist, wird er vollständig abgeblockt. Übersteigt der Schaden den Schildwert, reduziert jeder überschüssige Punkt die Stärke des Schildes um diesen Betrag.

_Beispiel: Ein Truppentransporter hat eine Energieschildstärke von 12 Punkten. Wenn der Transporter von einem Laser mit 11 Schadenspunkten getroffen wird, dringt dieser nicht durch und hat keine weiteren Auswirkungen. Wird der Transporter hingegen von einer Explosion mit 15 Schadenspunkten getroffen, würden die überschüssigen drei Punkte die Schildstärke auf 9 reduzieren._

Sobald die Stärke eines Deflektorschildes auf Null gesunken ist, bricht er zusammen. Jeder verbleibende Schaden wirkt sich auf die Hülle aus.

---
### Systeme

Jedes Mal, wenn ein Fahrzeug Schaden erleidet, der seine Hülle durchdringt, besteht eine Chance, die dem durchdringenden Schaden entspricht, dass ein lebenswichtiges System beeinträchtigt wurde.

_Beispiel: 10 Schadenspunkte treffen ein Schnellboot – ein Fahrzeug mit 3 Hüllen- und 24 Strukturpunkten. Die Hülle zählt als Rüstung und reduziert den Schaden auf 7. Dies wird von den 24 Strukturpunkten abgezogen, und es besteht eine Chance von 7 %, eines der Systeme des Fahrzeugs zu beschädigen._

Der Schaden, den ein System erleiden kann, basiert rein auf der Größe des Fahrzeugs. Dies wird durch die Anzahl der Treffer modelliert, die ein System einstecken kann, anstatt durch die tatsächliche Schadensmenge. Ein einzelner Systemtreffer bei einem kleinen Fahrzeug zerstört dieses System sofort. Es sind zwei Treffer erforderlich, um die Systeme eines mittelgroßen Fahrzeugs zu zerstören, drei bei einem großen Fahrzeug und so weiter. Siehe die [Systemschaden-Tabelle](0006_Vehicles.md?id=system-damage-table) unten.

Systeme, die beschädigt, aber noch nicht zerstört sind, erleiden einen Funktionsverlust proportional zur Anzahl der erhaltenen Treffer – entweder als prozentuale Reduzierung oder als Malus in Schwierigkeitsgraden bei Systemaufgaben. Die spezifische Auswirkung hängt davon ab, was das Teilsystem steuert, wie in der [Systemkomponenten-Schadenstabelle](0006_Vehicles.md?id=system-component-damage-table) unten detailliert beschrieben. Je nachdem, welches System getroffen wird, können die Auswirkungen katastrophal sein.

_Beispiel: Ein Land-Panzerschiff – ein enormes Fahrzeug mit 5 Systemtreffern –, das zweimal im Antrieb getroffen wurde, würde 40 % seiner Leistung verlieren und seine Langsame Geschwindigkeit um zwei Stufen auf „Behäbig“ reduzieren. Ebenso würde ein großer Frachter – mit 3 Systemtreffern –, der zwei Treffer im Motor/Kraftstoff-System einsteckt, einen Malus von zwei Stufen auf die Geschwindigkeit sowie auf die Nutzung elektronischer Systeme erhalten. Ein dritter Treffer würde das Motor/Kraftstoff-System und damit das Schiff zerstören._


<details>

<summary>* Community-Errata</summary>

---

#### Schaden


_Der ursprüngliche Text hier stand ursprünglich weiter weg. Direkt nach dem System-Abschnitt platziert, wiederholt er unnötigerweise den vorherigen Absatz._

- _"Schaden, der die Hülle übersteigt, durchdringt das Fahrzeug, beschädigt die Struktur und beeinträchtigt möglicherweise ein oder mehrere Systeme. Abhängig von der Größe des Fahrzeugs kann der Schaden gering oder katastrophal sein._
- _Beispiel: Ein großes Fahrzeug kann bis zu drei Treffer bei einem System wie dem Antrieb einstecken. Der vierte Treffer zerstört das System funktional. Jedes Mal, wenn das System einen Treffer erleidet, verliert es entweder einen Prozentsatz seiner Funktion, wie in der Spalte „Verlust pro Treffer“ der Systemschaden-Tabelle unten beschrieben, oder eine Kernfunktion (wie Antrieb, Pilot, Kommunikation usw.) wird pro erhaltenem Treffer um einen Schwierigkeitsgrad schwerer."_

_Die obigen Absätze wurden entfernt und durch eine gekürzte Bearbeitung ersetzt, die ein weiteres Beispiel für Systemeffekte nennt._

---

</details>

##### Systemschaden-Tabelle 

| Größe | Systemtreffer | Verlust pro Treffer |
| :-- | :-: | :-- |
| Klein | 1 | 100 % - Zerstört |
| Mittel | 2 | 1 Stufe oder 50 % |
| Groß | 3 | 1 Stufe oder 33 % |
| Riesig | 4 | 1 Stufe oder 25 % |
| Enorm | 5 | 1 Stufe oder 20 % |
| Kolossal | 6 | 1 Stufe oder 16 % |


<details>

<summary>* Community-Errata</summary>

---

##### Systemschaden-Tabelle (Original) 

| Größe | Systemtreffer | Verlust pro Treffer |
| :-- | :-: | :-- |
| Klein | 1 | 1 Stufe oder 50 % |
| Mittel | 2 | 1 Stufe oder 33 % |
| Groß | 3 | 1 Stufe oder 25 % |
| Riesig | 4 | 1 Stufe oder 20 % |
| Enorm | 5 | 1 Stufe oder 16 % |
| Kolossal | 6 | 1 Stufe oder 10 % |

##### Fahrzeuggrößen-Tabelle (aus [Hüllengröße, Typ und Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Größe | Systemtreffer |
| :-- | :-: |
| Klein | 1 |
| Mittel | 2 |
| Groß | 3 |
| Riesig | 4 |
| Enorm | 5 |
| Kolossal | 6 |

_Die ursprünglichen Regeln und Beispiele sind inkonsistent:_
- _„Systeme, die beschädigt, aber noch nicht zerstört sind, erleiden einen Funktionsverlust. Dieser ist proportional zum Anteil der aktuellen Treffer an ihrer Gesamtkapazität. Daher würde ein enormes Fahrzeug, das zweimal im Antrieb getroffen wurde, 40 % seiner Leistung verlieren (2 Treffer von maximal 5)“._ 
   - _Dies deutet darauf hin, dass das enorme Fahrzeug mit 5 Systemtreffern mit jedem Treffer 20 % verlieren sollte – die Tabelle sagt jedoch 16 %._
- _„Beispiel: Ein großes Fahrzeug kann bis zu drei Treffer bei einem System wie dem Antrieb einstecken. Der vierte Treffer zerstört das System funktional“._ 
  - _„Dies deutet – ebenso wie die Tabelle – auf 25 % Schaden pro Systemtreffer hin, aber große Fahrzeuge können laut derselben Tabelle nur 3 Systemtreffer einstecken._
- _Obwohl nicht inkonsistent, war die Fahrzeuggrößen-Tabelle redundant; sie erschien nur wenige Zeilen später erneut in vollständigerer Form (mit der Spalte „Verlust pro Treffer“)._

_Dies macht es schwierig, eine konsistente Regel zu haben. Um diese Probleme zu beheben, wurden die Werte und Beispiele angepasst, um sie in Einklang zu bringen, und die Fahrzeuggrößen-Tabelle wurde entfernt._

---

</details>


##### Systemkomponenten-Schadenstabelle 

| 1d10 | System | Beschädigtes Ergebnis | Zerstörtes Ergebnis |
| :-: | :-- | :-- | :-- |
| 1 | Fracht | Eine dem Schaden proportionale Menge an Besitztümern oder Ausrüstung im Frachtraum wird zerstört. | Die gesamte Fracht wird zerstört. |
| 2 | Kommunikation | Kommunikationswürfe werden bei jeder Beschädigung um einen zusätzlichen Schwierigkeitsgrad schwerer. | Das Fahrzeug kann nicht mehr kommunizieren oder gegnerische Sensoren täuschen. |
| 3 | Steuerung | Boots-, Fahr- oder Pilotenwürfe werden bei jeder Beschädigung um einen zusätzlichen Schwierigkeitsgrad schwerer; sofortiger Kontrollwurf erforderlich. | Das Fahrzeug kann nicht mehr gesteuert oder der Kurs geändert werden. |
| 4 | Antrieb | Geschwindigkeit um einen zum Schaden proportionalen Betrag reduziert. | Fahrzeug bleibt sofort stehen; Flugzeuge stürzen ab. |
| 5 | Besatzung | Eine dem Schaden proportionale Anzahl von Passagieren wird zu Opfern. Betroffene erleiden eine schwere Wunde und müssen einen Ausdauerwurf bestehen oder sterben sofort. | Insassen sterben. |
| 6 | Motor / Kraftstoff | Geschwindigkeit um einen zum Schaden proportionalen Betrag reduziert. Elektronische Systeme sind um einen Schwierigkeitsgrad schwerer zu nutzen. | Fahrzeug wird in einer katastrophalen Explosion zerstört. |
| 7 | Sensoren | Sensor-, Navigations- und Waffenangriffswürfe werden bei jeder Beschädigung um einen zusätzlichen Schwierigkeitsgrad schwerer. | Das Fahrzeug wird blind. |
| 8 | Waffen | Eine dem Schaden proportionale Anzahl von Waffensystemen wird funktionsunfähig. | Fahrzeug kann keine Waffen mehr abfeuern. |
| 9-0 | Keine | Keine Systeme getroffen; nur Strukturschaden. | N/V |

<details>

<summary>* Community-Errata</summary>

---

##### Systemkomponenten-Schadenstabelle (Motor/Kraftstoff)

_Das ursprüngliche Ergebnis lautete: „Die Höchstgeschwindigkeit wird halbiert...“ Dies widerspricht der allgemeinen Regel von Schadensmalussen proportional zum Systemschaden: 25 % Schaden = 25 % Malus. Außerdem erwähnen die vollständigen Regeln im Mythras Companion diese Halbierung der Geschwindigkeit nicht._

_Infolgedessen wird der Text durch denselben Eintrag aus den Antriebssystemen ersetzt: „Geschwindigkeit um einen zum Schaden proportionalen Betrag reduziert.“_

---

</details>


---
### Geschwindigkeit

Da die physikalischen Gesetze von Geschwindigkeit, Beschleunigung, Widerstand und Trägheit komplexe Themen sind, ist eine gewisse Vereinfachung erforderlich, weshalb Fahrzeuge einen abstrakten Geschwindigkeitswert erhalten. Das Geschwindigkeitsmerkmal sollte nur verwendet werden, um grob zu beurteilen, ob ein Fahrzeug ein anderes überholen oder einholen kann.

Der Geschwindigkeitswert stellt die nominale Betriebsrate eines Fahrzeugs dar. In Notfällen kann diese Leistung um eine Stufe gesteigert werden, auf Kosten von Verschleiß oder Schäden an den Motoren. Obwohl für alle Fahrzeugtypen dieselbe Tabelle verwendet wird, sollte der gesunde Menschenverstand angewandt werden, sodass nur Fahrzeuge derselben Klasse verglichen werden. Wenn beispielsweise ein Raumschiff und ein Sportwagen beide die gleiche Beschleunigungsrate „Rasant“ haben, sollte es offensichtlich sein, dass das Raumschiff vergleichsweise schneller ist.

Das Steigern der Geschwindigkeit eines Fahrzeugs über seinen Standardwert hinaus ist mit einem erfolgreichen Fahrwurf möglich. Normalerweise ist diese zusätzliche Geschwindigkeit nur für einen kurzen Zeitraum nachhaltig – nicht länger als 1d6 Minuten, bevor das Fahrzeug auf seine Standardgeschwindigkeit zurückfallen muss oder Schäden am Antrieb riskieren muss. Ein kritischer Fahrwurf erlaubt es, den Zeitraum der höheren Geschwindigkeit auf 1d12 Minuten zu erhöhen.

Ein Fahrer kann versuchen, die Geschwindigkeit eines Fahrzeugs um 2 Stufen zu steigern, dies erfordert jedoch einen Herkules-Fahrwurf, und das Maximum, das das Fahrzeug diese Geschwindigkeit beibehalten kann, beträgt 1d3 Minuten: Ein kritischer Erfolg verlängert die Dauer der erhöhten Geschwindigkeit nicht.

##### Geschwindigkeitswert-Tabelle 

| Geschwindigkeitswert | Max. Geschwindigkeit für |
| :-- | :-: |
| Behäbig | Enorm |
| Schwerfällig | |
| Langsam | Riesig |
| Mittelmäßig | |
| Gemächlich | Groß |
| Mäßig | |
| Rasant | Mittel |
| Schnell | |
| Flott | Klein |


---
### Merkmale

Die maximale Anzahl an Merkmalen, die ein Fahrzeug haben kann, hängt von der Hüllengröße und dem Typ ab.

Jedes Fahrzeug hat ein inhärentes Merkmal: den Fortbewegungsmodus, für den es primär konstruiert wurde. Daher besitzen Flugzeuge inhärent das Merkmal „Flugfähig“, Boote „Seetüchtig“ und so weiter. Dieses inhärente Merkmal zählt nicht zur verfügbaren Anzahl der Merkmale. Sollte ein Fahrzeug jedoch einen zweiten Fortbewegungsmodus enthalten – ein fliegendes U-Boot zum Beispiel –, dann müsste das Merkmal „Flugfähig“ als eines der verfügbaren Merkmale gewählt werden.

Einige Merkmale sind je nach Technologiestufe der Spielwelt möglicherweise nicht verfügbar; Spielleiter müssen ihre eigene Entscheidung treffen, welche Merkmale angewendet werden können.

##### Fahrzeug-Merkmalszuweisungstabelle 

| Größe | Max. Merkmale |
| :-- | :-: |
| Klein | 1 |
| Mittel | 2 |
| Groß | 3 |
| Riesig | 4 |
| Enorm | 5 |
| Kolossal | 6 |

#### Flugfähig

Das Fahrzeug ist zu atmosphärischem Flug fähig.

#### Geländegängig

Dieses Merkmal muss bei Bodenfahrzeugen verwendet werden. Das Fahrzeug kann unwirtliches, schwieriges und steiles Gelände durchqueren, indem es entweder Ketten, eine fortschrittliche Aufhängung und Antriebssysteme oder leistungsstarke Antriebsdifferenziale nutzt.

#### Grabend

Das Fahrzeug ist darauf ausgelegt, sich durch den Boden zu graben und zu tunneln. Es kann eine maximale Tiefe erreichen, die seinem Hüllenwert x 5 Metern entspricht.

#### Getarnt

Das Fahrzeug besitzt entweder Tarnfarbe oder mimetische Sensoren, die es ihm ermöglichen, mit seiner Umgebung zu verschmelzen. Versuche, das Fahrzeug visuell zu entdecken, sind um einen Grad schwieriger.

#### Fracht

Das Fahrzeug ist speziell darauf ausgelegt, Fracht statt Passagiere zu befördern. Passagierabteile werden auf ein Minimum reduziert, wobei der Rest des nutzbaren Raums des Fahrzeugs der Frachtaufbewahrung gewidmet ist, mit entsprechenden Bereichen, Werkzeugen und sogar Klimatisierung (wie Kühlbereiche für den Transport von verderblichen Waren). Wenn das Fahrzeug mit Fracht beladen ist, ist seine Geschwindigkeit zwei Stufen niedriger, als seine Hüllengröße normalerweise erlauben würde.

#### Träger

Das Fahrzeug ist speziell darauf ausgelegt, kleinere, leicht bemannte oder möglicherweise ferngesteuerte Fahrzeuge ziviler oder militärischer Natur zu transportieren. Jedes Fahrzeug, das dieses Merkmal besitzt, muss mindestens „Enorm“ sein. Die Anzahl der transportierten kleinen Fahrzeuge kann je nach Missionstyp und Zweck variieren, kann aber nur 10 oder bis zu so vielen wie der Strukturwert des Fahrzeugs betragen.

#### Konstruktion

Das Fahrzeug ist für schwere Bauarbeiten ausgerüstet. Alle Fahrzeuge mit diesem Merkmal haben auch das Merkmal „Geländegängig“, aber die Geschwindigkeit ist um zwei Stufen niedriger, als ihre Hüllengröße normalerweise erlauben würde. Das Fahrzeug ist mit aufgabenrelevanten Werkzeugen wie Kranarmen, Baggerschaufeln, Muldenkippern usw. ausgestattet.

#### EMP-Resistent

Das Fahrzeug ist gegen elektromagnetische Impulsangriffe abgeschirmt.

#### Verbesserte Leistung

Der Geschwindigkeitswert des Fahrzeugs ist eine Stufe höher als das Maximum für seine Größe.

#### Schleudersitz

Im Notfall katapultiert ein Schleudersitz die Insassen mehrere hundert Meter in die Luft und entfaltet dann einen Fallschirm für eine sichere Landung. Der Fallschirm ist optional. Nicht für Hubschrauber empfohlen (wobei die Kamow Ka-52 Alligator eine bemerkenswerte Ausnahme ist).

#### FTL

Nur Raumfahrzeuge. Das Fahrzeug ist mit einem Überlichtgeschwindigkeitsantrieb ausgestattet (sei es ein Hyperantrieb, Warpantrieb, Wurmlochgenerator oder ähnliches). Der FTL-Antrieb hat einen separaten Geschwindigkeitswert, der im Wesentlichen misst, mit welcher Rate ein Raumschiff einen einzelnen Parsec (3,26 Lichtjahre, oder 31 Billionen Kilometer oder 19 Billionen Meilen) durchqueren kann:

##### FTL-Geschwindigkeitswert-Tabelle 

| Geschwindigkeitswert | Faktor für die Durchquerung von 1 Parsec |
| :-- | :-: |
| Behäbig | 10 |
| Schwerfällig | 8 |
| Langsam | 7 |
| Mittelmäßig | 6 |
| Gemächlich | 5 |
| Mäßig | 4 |
| Rasant | 3 |
| Schnell | 2 |
| Flott | 1 |

Der Zeitfaktor liegt im Ermessen des Spielleiters, je nachdem, wie fortgeschritten die FTL-Entwicklung der Spielwelt ist. Beispielsweise könnte der Basisfaktor 1 Tag betragen, was bedeutet, dass ein Schiff mit einem behäbigen FTL-Antrieb 10 Tage für die Reise benötigt, während ein Schiff mit einem flotten FTL-Antrieb die Reise an einem Tag abschließt. Andernorts, wo die FTL-Technologie deutlich weniger effizient ist, könnte der Zeitfaktor eher in Monaten als in Tagen gemessen werden.

Es wird angenommen, dass das Schiff über Treibstoffreserven für eine Rückreise oder eine Möglichkeit zum Auftanken am Zielort verfügt.

Es wird angenommen, dass jede Größe von Raumschiffen mit einem FTL-Antrieb ausgestattet werden kann, obwohl dies, wie gesagt, von der Spielwelt abhängt.

FTL-Antriebe können nicht innerhalb von 1,5 Astronomischen Einheiten eines Sterns (etwa 225 Millionen Kilometer oder 270 Millionen Meilen) aktiviert werden. Das bedeutet, dass Schiffe einen Unterlichtantrieb nutzen müssen, um sich etwa bis auf die Entfernung des Mars zu bewegen, bevor sie das FTL-System aktivieren.

#### Bodenfahrzeug

Das Fahrzeug ist zur Fortbewegung am Boden fähig.

#### Schweber

Das Fahrzeug schwebt über dem Boden, entweder mithilfe eines Luftkissens oder eines Antigravitations-Repulsors.

#### Luxuriös

Das Fahrzeug ist speziell darauf ausgelegt, Passagiere auf einem gewissen Luxusniveau zu befördern. Zusätzlicher Frachtraum wird für luxuriöse Passagierunterkünfte, Swimmingpools, Whirlpools, zusätzliches Personal, um sich um die Launen der Passagiere zu kümmern, usw. verwendet.

#### Schiene

Das Fahrzeug ist auf ein Schienensystem angewiesen. Fahrzeuge mit diesem Merkmal können von Natur aus einen Geschwindigkeitswert erreichen, der drei Stufen höher ist, als ihre Hüllengröße normalerweise erlauben würde, sind aber offensichtlich auf die Bewegung auf dem Schienensystem beschränkt.

#### Resilient

Alle Systeme können einen Treffer mehr aushalten als normalerweise durch die Größe bestimmt. Dieses Merkmal kann gestapelt werden – Resilient 2 bedeutet also, dass Systeme 2 Treffer mehr als gewöhnlich aushalten können, auf Kosten von zwei Merkmals-Punkten.

#### Seetüchtig

Das Fahrzeug ist schwimmfähig auf Wasser.

#### Raumfahrzeug

Das Fahrzeug ist gegen Vakuum abgedichtet, gegen kosmische Strahlung abgeschirmt und kann je nach Konstruktion in der Lage sein, die Atmosphäre zu verlassen und wieder einzutreten sowie den Flug innerhalb einer Atmosphäre aufrechtzuerhalten.

#### Stealth

Nur Flugzeuge. Das Fahrzeug ist so konstruiert, dass es von Radar- und anderen Langstreckensensorsystemen nicht erkannt wird. Versuche, das Fahrzeug mit elektronischen Sensoren zu entdecken, sind um einen Grad schwieriger.

#### Tauchfähig

Das Fahrzeug ist in der Lage, unter die Oberfläche eines Ozeans bis zu einer Betriebstiefe von seinem Hüllenwert x 10 Metern einzutauchen. Die Kollaps-Tiefe – das absolute Maximum, das das Tauchfahrzeug erreichen kann, ohne zerquetscht zu werden – beträgt das 1,5-fache seiner Betriebstiefe.

#### Überlegene Handhabung

Die Handhabung des Fahrzeugs wird als „Einfach“ bewertet.

#### Überwachungspaket

Das Fahrzeug verfügt über einen Bordcomputer, eine Kommunikationsbasisstation, einen Empfänger für Abhörsignale und Geräte, um nahegelegene Smartphone-Signale innerhalb von 100 Metern abzufangen.#### Robust

Ein ziviles Fahrzeug mit dieser Eigenschaft bezieht seine Rumpfwerte aus der Militär-Spalte und besitzt automatisch die maximale Struktur. Ein Militärfahrzeug mit dieser Eigenschaft bezieht Rumpf und Struktur aus der jeweils nächstunteren Zeile.

#### Traktorstrahl

Nur Raumschiffe. Das Schiff ist mit einem Traktorstrahl ausgestattet, der Fahrzeuge mit einer Rumpfgröße von bis zu zwei Stufen unter der eigenen einfangen und heranziehen kann. So könnte ein riesiges (Huge) Raumschiff ein Fahrzeug bis zur Größe Mittel (Medium) anziehen und festhalten.

#### VTOL

Senkrechtstart/-landung. Diese Eigenschaft ist inhärent für Hubschrauber und ähnliche Fahrzeuge, die eine Kombination von Rotoren verwenden, um Auftrieb zu erzeugen. Bei Starrflügelflugzeugen weist dies auf die Verwendung fester oder ausrichtbarer Triebwerke zur Steuerung von Fluglage, Aufstieg und Abstieg hin.

#### Walker

Das Fahrzeug bewegt sich mithilfe von gelenkigen Beinen fort. Walker-Fahrzeuge sind unabhängig von ihrer Größe auf eine Geschwindigkeit von Sanft (Gentle) begrenzt. Walker können jedoch in Höhen gebaut werden, die für Fahrzeuge mit anderen Fortbewegungsmitteln schlicht instabil wären.

Dieses Fahrzeug ist zur Unterwasserbewegung fähig.

#### Bewaffnet

Das Fahrzeug wurde angepasst, um Bewaffnung aufzunehmen. Waffensysteme werden weiter unten im Abschnitt [Waffen](0006_Vehicles.md?id=weapons) besprochen.

---
## Waffen

Normalerweise sind nur Militärrümpfe darauf ausgelegt, Bewaffnung aufzunehmen (Aufhängungspunkte, Munitionslagerung, Steuerungssysteme). Die Eigenschaft „Bewaffnet“ kann für zivile Fahrzeuge gewählt werden, die möglicherweise Waffenanforderungen haben.

Die maximale Anzahl an Waffensystemen, die ein Fahrzeug unterstützen kann, entspricht einem Zehntel seiner Strukturpunkte (ein Fahrzeug mit 40 Struktur könnte also 4 Waffensysteme unterstützen, sofern es sich um ein Militärfahrzeug oder ein „bewaffnetes“ ziviles Fahrzeug handelt).

Waffensysteme hängen von der Größe des Fahrzeugs ab. Die maximalen Typen von Waffensystemen für verschiedene Größen sind in den nachstehenden Tabellen aufgeführt.

##### Tabelle: Waffen nach Größe

| Größe | Landfahrzeuge | Raumschiffe |
| :-- | :-- | :-- |
| Klein | Leichte Waffe (z. B. Sturmgewehr) | Mittlere Waffe (z. B. Maschinengewehr, Raketenwerfer) |
| Mittel | Mittlere Waffe (z. B. Maschinengewehr, Raketenwerfer) | Turm-/Schwere Waffe (z. B. schwere gekoppelte Maschinengewehre, Mini-Guns) |
| Groß | Turm-/Schwere Waffe (z. B. schwere gekoppelte Maschinengewehre, Mini-Guns) | Waffenbatterie (z. B. Feldartillerie) |
| Riesig | Waffenbatterie (z. B. Feldartillerie) | Fortgeschrittene Waffen (z. B. Raketensysteme) |
| Enorm | Fortgeschrittene Waffen (z. B. Raketensysteme) | Spantenmontierte Waffen (nur eine) |
| Kolossal | NA | Spantenmontierte Waffen (bis zu 3) |

##### Beispiel: Waffenwerte

| Waffe | Schaden | Reichweite | Feuerrate | Munition/Laden |
| :-- | :-: | :-: | :-: | :-: |
| 50-Zoll-Kanone | 3w6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling-Geschütz | 3w6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rakete | 5w6 | 5000/20km/60km | 1 | 1/5 |
| Mittlere Rakete/Torpedo | 6w10 | Max. 200km | 1 | 1/5 |
| Große/Marschflugkörper | 6w10+10 | Max. 1000km | 1 | 1/10 |
| Laser/Plasmakanone | 4w6 | 300/1000/2000 | -/5/25 | 500/5 |
| Schwere Laser/Plasmakanone | 5w6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilleriebatterie | 5w6+6 | Max. 50km | 1 | 1/5 |
| Spantenmontierte Batterie | 10w6+6 | Max. 20000km | 1 | 1/10 |

_Reichweiten sind in Metern und Kilometern angegeben._

_Feuerraten gelten für Einzelschuss, Halbautomatik und Vollautomatik._

_Munition ist die Schusskapazität vor dem Nachladen. Laden ist die Nachladezeit in Kampfrunden, vorausgesetzt, eine vollständige Crew ist verfügbar._

---
## Handhabung und Manöver

Ausweichmanöver oder plötzliche Manöver erfordern einen erfolgreichen Fahren/Pilotieren-Wurf, um sicherzustellen, dass der Fahrer oder Pilot die Kontrolle über das Fahrzeug behält. Die meisten Fahrzeuge sind darauf ausgelegt und gebaut, gelegentlichen Belastungen standzuhalten, aber der Spielleiter kann festlegen, dass ein bestimmtes Manöver einen Wurf mit einem höheren Schwierigkeitsgrad erfordert, je nachdem, wie ambitioniert es ist. Ein Fehlschlag bedeutet, dass die Kontrolle über das Fahrzeug verloren geht: Würfle auf der Tabelle für Kontrollverlust.

Beachte, dass die Tabelle für Kontrollverlust nur für Landfahrzeuge gilt. Ähnliche Auswirkungen können auf Luft- und Raumfahrzeuge angewendet werden, aber der Spielleiter muss die Begründung für den spezifischen Effekt anpassen. Ein Flugzeug könnte zum Beispiel in einen Trudelzustand geraten, anstatt zu schlittern.

Zudem kann das inhärente Handling eines Fahrzeugs einen zusätzlichen Einfluss auf den Fahren-Wurf haben. Das Handling ist entweder Einfach, Standard, Schwer, Formidabel oder Herkulisch und bestimmt den Ausgangspunkt für den Fahren-Wurf bei der Ausführung eines Manövers. Der Schwierigkeitsgrad für das Manöver wird dann auf das Handling angewendet, um die endgültige Schwierigkeit zu bestimmen.

Beispiel: Ein Hochleistungsmotorrad verfügt über eingebaute Gyrostabilisatoren, was ihm ein Handling von Einfach verleiht. Der Fahrer möchte eine 180-Grad-Schleuderwende durchführen, um einem Verfolger auszuweichen – ein Manöver, das der Spielleiter mit einem zusätzlichen Schwierigkeitsgrad bewertet. Der Fahrer muss seinen Fahren-Wurf daher auf Standard statt auf Einfach ablegen. Hätte er dasselbe Manöver mit einem nicht stabilisierten Motorrad versucht, wäre der Fahren-Wurf auf Schwer gewesen.

Überlegenes Handling ist eine Eigenschaft. Wenn ein Fahrzeug die Eigenschaft nicht in seiner Beschreibung hat, ist Standard-Handling der Standard für jedes Fahrzeug der Größe Groß und darunter. Riesige und Enorme Fahrzeuge haben inhärent das Handling-Attribut Formidabel bzw. Herkulisch, und es steht dem Spielleiter frei zu entscheiden, dass bestimmte Manöver aufgrund der Größe des Fahrzeugs schlicht unmöglich sind.

##### Tabelle: Kontrollverlust

| 1w100 | Ergebnis |
| :-: | :-- |
| 01-25 | Schlenker. Der Kontrollverlust ist vorübergehend. Fahrzeug reduziert seine Geschwindigkeit für 5 Sekunden um 1 Stufe. |
| 26-40 | Rutschen. Der Fahrer muss kämpfen, um das Fahrzeug unter Kontrolle zu halten. Fahrzeug reduziert seine Geschwindigkeit für 10 Sekunden um 2 Stufen. |
| 41-50 | Heftiges Rutschen. Fahrzeug landet in der falschen Richtung und bleibt für 15 Sekunden stehen. |
| 51-60 | Überschlag. Fahrzeug rutscht und überschlägt sich, wobei es 3w10 Schaden an seiner Struktur erleidet. Insassen müssen erfolgreiche Ausdauerwürfe ablegen oder 1w10 Schaden an 1w3 Trefferorten erleiden. |
| 61-70 | Schwerer Überschlag. Wie oben, aber das Fahrzeug erleidet 3w10+10 Schaden und die Insassen erhalten 1w10 Schaden, selbst wenn der Ausdauerwurf gelingt, und 2w10 bei einem Fehlschlag. |
| 71-80 | Totalschaden. Wie oben, aber das Fahrzeug wird auf 0 Struktur reduziert. Insassen erleiden denselben Schaden wie bei einem schweren Überschlag. |
| 81-90 | Explosion. Wie oben, aber das Treibstoffsystem des Fahrzeugs entzündet sich und explodiert innerhalb von 1w20+10 Sekunden. Wenn sie nicht entkommen können, erleiden die Insassen zusätzlich 1w6 Brandschaden an 1w6 Orten. |
| 91-98 | Sofortige Explosion. Wie oben, aber die Explosion erfolgt sofort. |
| 99-00 | Katastrophaler Absturz. Insassen müssen erfolgreich auf Ausdauer würfeln oder sind sofort tot. Schaden wie bei Totalschaden wird unabhängig davon erlitten. |

---
## Beispiel-Fahrzeuge

---

### Landfahrzeuge

#### Abfangjäger (Interceptor)

Ein aufgemotzter Luxuswagen, Sportwagen oder ähnliches. Dieses Auto ist darauf gebaut, schnell zu sein und im Kampf genauso gut auszuteilen, wie es einstecken kann. Dies ist die Art von Fahrzeug, an die Leute denken, wenn jemand "Spionageauto" sagt.

| Abfangjäger | |
| :- | :- |
| **Größe / Typ** | Mittel Militärisch |
| **Rumpf** | 6 |
| **Struktur** | 40 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Schnell |
| **Handling** | Einfach |
| **Eigenschaften** | [Schleudersitz](0006_Vehicles.md?id=ejector-seat), [Verbesserte Leistung](0006_Vehicles.md?id=enhanced-performance), [Überlegenes Handling](0006_Vehicles.md?id=superior-handling), [Überwachungsausrüstung](0006_Vehicles.md?id=surveillance-suite), [Bewaffnet](0006_Vehicles.md?id=weaponized) |
| **Waffen** | Ölspur-Spender, Rauchspender, gekoppelte mittlere Maschinengewehre (2w6+3) |

<br>

---

#### Verfolgungs-Motorrad

Ein leichtes, schnelles Motorrad für schnelle Verfolgungsjagden. Das Verfolgungs-Motorrad trägt eine Überraschung – entweder ein Paar gekoppelter Maschinengewehre oder zwei Raketen.

| Verfolgungs-Motorrad | |
| :- | :- |
| **Größe / Typ** | Klein Zivil |
| **Rumpf** | 2 |
| **Struktur** | 12 |
| **Systeme** | 1 |
| **Geschwindigkeit** | Schnell |
| **Handling** | Einfach |
| **Eigenschaften** | [Überlegenes Handling](0006_Vehicles.md?id=superior-handling), [Bewaffnet](0006_Vehicles.md?id=weaponized) |
| **Waffen** | Zwei Raketen (4w6) oder gekoppelte leichte Maschinengewehre (2w6) |

<br>

---

#### Limousine

Eine Standard-4-Türer-Limousine mit genug Platz für einen Fahrer und drei Passagiere. Opfert Laderaum für die Integration einer Überwachungsausrüstung.

| Limousine | |
| :- | :- |
| **Größe / Typ** | Mittel Zivil |
| **Rumpf** | 4 |
| **Struktur** | 25 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Rasch |
| **Handling** | Standard |
| **Eigenschaften** | [Unauffällig](0006_Vehicles.md?id=unobtrusive), [Überwachungsausrüstung](0006_Vehicles.md?id=surveillance-suite) |
| **Waffen** | Keine |

<br>

---

#### Tauchfähiges Auto

Ein Zweisitzer, der in den Wasser- oder Tauchmodus wechseln kann, um auf oder unter Wasser zu reisen. Kommt mit einem frontmontierten Torpedo und einer oben montierten Boden-Luft-Rakete.

| Tauchfähiges Auto | |
| :- | :- |
| **Größe / Typ** | Mittel Zivil |
| **Rumpf** | 6 |
| **Struktur** | 25 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Schnell |
| **Handling** | Standard |
| **Eigenschaften** | [Verbesserte Leistung](0006_Vehicles.md?id=enhanced-performance), [Tauchfähig](0006_Vehicles.md?id=submersible), [Wasserfahrzeug](0006_Vehicles.md?id=waterborne), [Bewaffnet](0006_Vehicles.md?id=weaponized) |
| **Waffen** | Rakete (5w6), Torpedo (4w10) |

<br>

---

#### Überwachungswagen (Van)

Ein schlichter, unmarkierter Van, der ein Team von Agenten und eine Suite von audiovisuellen Aufzeichnungsgeräten beherbergt.

| Überwachungswagen | |
| :- | :- |
| **Größe / Typ** | Groß Zivil |
| **Rumpf** | 9 |
| **Struktur** | 60 |
| **Systeme** | 3 |
| **Geschwindigkeit** | Sanft |
| **Handling** | Standard |
| **Eigenschaften** | [Überwachungsausrüstung](0006_Vehicles.md?id=surveillance-suite), [Robust](0006_Vehicles.md?id=tough) |
| **Waffen** | Keine |

<br>

---

#### Taktisches Unterstützungsfahrzeug

Ein Pickup oder Jeep mit Platz für eine zweiköpfige Crew in der Kabine und einem Schützen, der auf der Ladefläche ein schwenkbares mittleres Maschinengewehr bedient.

| Taktisches Unterstützungsfahrzeug | |
| :- | :- |
| **Größe / Typ** | Mittel Zivil |
| **Rumpf** | 6 |
| **Struktur** | 30 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Rasch |
| **Handling** | Standard |
| **Eigenschaften** | [Geländegängig](0006_Vehicles.md?id=all-terrain), [Bewaffnet](0006_Vehicles.md?id=weaponized) |
| **Waffen** | Montiertes mittleres Maschinengewehr (2w6) |

<br>

---

### Wasserfahrzeuge

#### Schnellboot

Ein typisches Schnellboot, bewaffnet mit einem am Heck montierten Minenspender.

| Schnellboot | |
| :- | :- |
| **Größe / Typ** | Mittel Zivil |
| **Rumpf** | 3 |
| **Struktur** | 24 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Schnell |
| **Handling** | Standard |
| **Eigenschaften** | [Verbesserte Leistung](0006_Vehicles.md?id=enhanced-performance), [Wasserfahrzeug](0006_Vehicles.md?id=waterborne), [Bewaffnet](0006_Vehicles.md?id=weaponized) |
| **Waffen** | Minenspender (5w6) |

<br>

---

#### Yacht

Die Art von Luxusyacht, die ein Oligarch besitzen könnte. Wahrscheinlich mit einer Überwachungsausrüstung ausgestattet, um sich vor Feinden zu schützen, die Böses im Schilde führen.

| Yacht | |
| :- | :- |
| **Größe / Typ** | Riesig Zivil |
| **Rumpf** | 10 |
| **Struktur** | 75 |
| **Systeme** | 4 |
| **Geschwindigkeit** | Langsam |
| **Handling** | Formidabel |
| **Eigenschaften** | [Luxuriös](0006_Vehicles.md?id=luxurious), [Überwachungsausrüstung](0006_Vehicles.md?id=surveillance-suite), [Wasserfahrzeug](0006_Vehicles.md?id=waterborne) |
| **Waffen** | Keine |

<br>

---

### Luft-/Raumfahrzeuge

#### Luftschiff (Ziviles Passagierluftschiff)

Ähnlich wie die Hindenburg ist diese Klasse von transkontinentalen Luftschiffen 245 Meter lang und erfordert eine Besatzung von 40 bis 61 Personen. Es kann typischerweise 50 bis 72 Passagiere in luxuriöser Ausstattung befördern.

| Luftschiff | |
| :- | :- |
| **Größe / Typ** | Enorm Zivil |
| **Rumpf** | 10 |
| **Struktur** | 85 |
| **Systeme** | 5 |
| **Geschwindigkeit** | Schwerfällig |
| **Handling** | Herkulisch |
| **Eigenschaften** | [Luftfahrzeug](0006_Vehicles.md?id=airborne), [Luxuriös](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Schilde** | Keine |
| **Waffen** | Keine |

<br>

---

#### Kampfhubschrauber

Der traditionelle Kampfhubschrauber nutzt seine fortschrittliche Überwachungstechnologie, um Telefon- und kabellose Internetsignale abzufangen und Personen sowie Fahrzeuge selbst im Dunkeln mittels FLIR zu verfolgen. Versuche, dem Tracker durch Heimlichkeit (Stealth) zu entgehen, sind Formidabel.

| Kampfhubschrauber | |
| :- | :- |
| **Größe / Typ** | Groß Militärisch |
| **Rumpf** | 11 |
| **Struktur** | 50 |
| **Systeme** | 3 |
| **Geschwindigkeit** | Moderat |
| **Handling** | Einfach |
| **Eigenschaften** | [Luftfahrzeug](0006_Vehicles.md?id=airborne), [Verbesserte Leistung](0006_Vehicles.md?id=enhanced-performance), [Heimlichkeit](0006_Vehicles.md?id=stealth), [Überlegenes Handling](0006_Vehicles.md?id=superior-handling), [Überwachungsausrüstung](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Schilde** | Keine |
| **Waffen** | 1 Gatling-Geschütz (3w6), 4 Raketen (5w6) |

<br>

---

#### Mehrzweckjäger

Dieser zweisitzige landgestützte Jäger (ähnlich wie die De Havilland Mosquito) ist bekannt für seine Leistung und Vielseitigkeit. Sein Bombenschacht kann entweder zwei 250-Pfund-Bomben (behandle als mittlere Raketen mit Reichweite 0) oder einen einzelnen Torpedo tragen.

| Mehrzweckjäger | |
| :- | :- |
| **Größe / Typ** | Groß Militärisch |
| **Rumpf** | 10 |
| **Struktur** | 45 |
| **Systeme** | 3 |
| **Geschwindigkeit** | Moderat |
| **Handling** | Standard |
| **Eigenschaften** | [Luftfahrzeug](0006_Vehicles.md?id=airborne), [Verbesserte Leistung](0006_Vehicles.md?id=enhanced-performance) |
| **Schilde** | Keine |
| **Waffen** | 4 in der Nase montierte Gatling-Geschütze (4w6+3), 1 Bombenschacht (6w10 – siehe Beschreibung) |

<br>

---

#### Interstellarer Frachter (Leichter High-Tech-Transporter)

Dieser leichte Transporter benötigt eine Mindestbesatzung von nur zwei Personen, mit Platz für bis zu vier zusätzliche Passagiere. Die Standardversion ist hier notiert, jedoch werden viele Besitzer ihre eigenen „Spezialmodifikationen“ anbringen, wie verborgenen Laderaum, verbesserte Leistung, überlegenes Handling, EMP-Resistenz, Heimlichkeit usw.

| Interstellarer Frachter | |
| :- | :- |
| **Größe / Typ** | Mittel Ziviles Raumschiff |
| **Rumpf** | 10 |
| **Struktur** | 80 |
| **Systeme** | 2 |
| **Geschwindigkeit** | Rasch (Parsec-Faktor 3) |
| **Handling** | Standard |
| **Eigenschaften** | [Luftfahrzeug](0006_Vehicles.md?id=airborne), [Fracht](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Raumschiff](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Schilde** | 8 |
| **Waffen** | 2x Vierfach-Laserkanonentürme (5w6) |

<br>

---

#### General Contact Unit (Ultra-High-Tech-Raumschiff)

Dieses extrem hochentwickelte Raumschiff ist die physische Repräsentation eines hochkomplexen künstlichen Geistes (Mind), der die Form einer zwei Kilometer langen Reihe feldverbundener Module annimmt. Die Module sind individuell zweckbestimmt und umfassen Habitate, Baueinrichtungen, Frachtbereiche, Lebensmittelverarbeitung, Freizeitkomplexe, Hangarbuchten und sogar einige geheimnisvolle Einheiten, die die Intelligenz des Schiffes selten oder nie erwähnt. Es benötigt keine menschliche Crew, kann aber problemlos eine Passagierpopulation von bis zu 100.000 unterstützen. Viele Passagiere werden an Bord der Contact Unit geboren und sterben dort: viele sind nur vorübergehend anwesend und kommen und gehen, wie sie möchten.

| General Contact Unit | |
| :- | :- |
| **Größe / Typ** | Kolossal Ziviles Raumschiff |
| **Rumpf** | 20 |
| **Struktur** | 10.000 |
| **Systeme** | 6 |
| **Geschwindigkeit** | Moderat (Parsec-Faktor 4. Auf diesem Techniklevel entspricht ein Faktor 1 Stunde) |
| **Handling** | Formidabel |
| **Eigenschaften** | [Luftfahrzeug](0006_Vehicles.md?id=airborne), [Fracht](0006_Vehicles.md?id=cargo), [Träger](0006_Vehicles.md?id=carrier), [Konstruktion](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxuriös](0006_Vehicles.md?id=luxurious), [Raumschiff](0006_Vehicles.md?id=space-craft), [Überlegenes Handling](0006_Vehicles.md?id=superior-handling), [Traktorstrahl](0006_Vehicles.md?id=tractor-beam) |
| **Schilde** | 30 |
| **Waffen** | Keine, über die es sprechen möchte |

<br>