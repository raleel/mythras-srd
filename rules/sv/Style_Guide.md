# Styleguide för titel (h1)

Använd h1-rubriker (`# Heading Title`) för huvudkapitlets titel. Alla hx-rubriker kommer att visas i sidofältet som bokmärken.

Om titeln inte är en h1-rubrik kommer sidofältet att visa ett dupliceringsfel som visar sidan följt av h2-rubriken för "titel".

---
## Avsnittsrubriker (h2)

Använd h2-rubriker (`## Section Heading`) föregångna av en avdelare (`---`) för varje nytt huvudavsnitt.

### Underrubriker som ökar h-nivån med 1

Använd h3-rubriker (`### Subsection Heading`) för varje nytt underavsnitt och h4-rubriker (`#### Sub-Subsection Heading`) för varje nytt under-underavsnitt.

### H-progression i underavsnitt: 2 > 3 > 4

Rubrikerna hamnar i oordning i sidofältet om h-progressionen inte hanteras korrekt.

Rubrikmarkören bör öka med ett steg eller inte alls.

h2 följt av h2 eller h3 går bra. h3 följt av h3 eller h4 går också bra.

### Fel i underavsnitt
h2 följt av h4 skapar problem. Sidofältet placerar underrubriken någonstans ovanför huvudrubriken i innehållsförteckningen.

### Minska h-nivåer

Detta verkar inte vara ett problem. t.ex. h4 till h3 eller h2 går bra.

---
## Formateringskonventioner

Följande stilar är standard för dessa _Imperative_ SRD:er i Markdown-format.

### Fetstil, kursivering och avdelare

- Använd dubbla asterisker (`**Bold**`) för **fet** text.
- Använd understreck (`_Italic_`) för _kursiv_ text.
   - _obs: Undvik att använda enkla asterisker för kursivering!_
- Använd omvänt snedstreck (`\_`) för att 'undanta' ett tecken: \_Inte kursivt\_.
- Använd vinkelparenteser (``` `code` ```) för att skapa `code blocks`.
- Använd tre bindestreck (`---`) för att infoga en horisontell avdelare.

### Konventioner för fetstil och kursivering

Försök att följa följande mönster...

#### Fetstilta titlar

Använd fetstilta titlar när du beskriver besvärjelser, effekter etc.
- **Magititel:** Beskrivning.

#### Kursiva titlar

Använd kursiva titlar för 'underlistor' av variantbesvärjelser etc.
- **Magi:** Beskrivning.
  - **_Magivariant-A:_** Beskrivning.
  - **_Magivariant-B:_** Beskrivning.

#### Kursiva titelreferenser

Använd kursiva titlar när du refererar till en bok som _Mythras Imperative_ eller kärnreglerna för _Mythras_.

---
## Listformatering

### Osorterade listor / Punktlistor

- Osorterade listor görs med bindestreck.
- Osorterade listor görs med bindestreck.
  - Öka indragningsnivån med 2 mellanslag eller en tab.

### Sorterade listor / Numrerade punkter

1. Numrerade listor görs med siffran och en punkt.
2. Numrerade listor görs med siffran och en punkt.
- Blanda med punktlistor
	- Och indrag
3. Blanda in siffror igen
   - Och punkter

### Listor med rubriker

För listor med relaterade underrubriker, gör titeln och kolonet fetstilt.
- **Exempel 1:** Bla, bla, bla...
- **Exempel 2:** Bla, bla, bla...

### Listor med kursiva rubriker

För listor med relaterade underrubriker, gör titeln och kolonet fetstilt och kursivt.
- **_Exempel 1:_** Bla, bla, bla...
- **_Exempel 2:_** Bla, bla, bla...

---
## Tabeller

Ge tabeller en underrubrik så att de visas som bokmärken i sidofältet, indragna en nivå från sitt överordnade avsnitt.

~Gör rubrikraden fetstilt.~
Att göra rubrikraden fetstilt renderar den faktiskt i normal text. Standard-CSS:en har den raden fetstilt.

### Textjustering i tabeller

Använd rad 2 för innehållsjustering: `:--`, `:-:` eller `--:`.
Detta kommer att påverka hela kolumnen.

#### Grundläggande layout för tabeller

| **Kolumn 1** | **Kolumn 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Konventioner för textjustering

- Använd centrering för siffror eller liknande värdelistor.
- Använd vänsterjustering för meningar.

#### Justeringsexempel (Tabell)

| **Nummer** | **Beskrivning** |
| :-: | :-- |
| 1 | Beskrivande text |
| 2 | Beskrivande text |
| 3 | Beskrivande text |

#### Exempel: Tabell för eldintensitet

| **Intensitet** | **Exempel** | **Tid att antända** | **Skada** |
| :-: | :-- | :-: | :-: |
| 1 | Ljus | 1d4 | 1d2 |
| 2 | Fackla | 1d3 | 1d4 |
| 3 | Lägereld | 1d2 | 1d6 |
| 4 | Rumsfyllande eldsvåda | 1d2 | 2d6 |
| 5 | Vulkanisk lava | Omedelbar | 3d6 |

---
## Länkar

Det finns många användningsområden för länkar i SRD:en och endast några få huvudfall täcks här.

### Formatera länkar

Att formatera en länk görs med hakparenteser. Använd fyrkantiga parenteser för den synliga länktexten och runda parenteser för destinations-URL:en: `[Link Text](URL)`.

I dessa dokument kommer den vanligaste externa länken att vara [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Externa vs Interna länkar

Externa länkar leder till andra sidor via internet och behöver en `http://example.com` URL och de kommer som standard _alltid_ att öppnas i en ny flik.

För att undvika att flera flikar belamrar dokumentet som läses, skapas interna länkar och bokmärken med relativa URL:er som refererar till markdown-filerna som är synliga i GitHub-förvaret. Istället för en ny flik kommer dessa interna länkar att snabbt skrolla till det länkade avsnittet.

#### Exempel på interna länkar

- **Kapitellänkar:** Dessa pekar till början av ett huvudavsnitt (h1). t.ex. kapitlet [Strid](0005_Combat.md).

  - Länkformat: `[Combat](0005_Combat.md)`

- **Underavsnittslänkar:** Dessa pekar till en rubrik inom ett kapitel genom att referera till dokumentet som ovan, men lägga till `?id=` omedelbart följt av destinationsrubriken. t.ex. [Hoppattacker](0005_Combat.md?id=leaping-attacks)

  - Länkformat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Externa länkar till underavsnitt

Det kan finnas tillfällen att referera till ett känt avsnitt i ett externt dokument, till exempel en specifik tabell i en annan SRD. Formateringen är densamma som för underavsnittslänkar ovan, fast med användning av den externa HTTP-URL:en.

Som ett exempel, här är [omvandlingstabellen för imperialistiska till metriska enheter](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) från [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listor för magi och krafter

Starta ett 'rent' avsnitt med en h2-rubrik för listor över tillgängliga besvärjelser, krafter etc; sedan h3 för varje listobjekt.

Besvärjelser och krafter presenteras vanligtvis i en enkel lista per magityp (Folk Magic, Theism, etc), men om listan kräver egna underavsnitt, som skola eller kulter, öka rubriknivån på lämpligt sätt. Till exempel h2 för Teismmirakellista, h3 för Kult: Mithras, och h4 för varje Mithras-kultmirakel.

Särskilt när det gäller besvärjelser, men i alla beskrivningar som använder nyckelordsattribut, lista dem med kursiv text.

Beskrivande text och särskilda regler använder normal text.

### Formatering av besvärjelselista

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Exempel: formaterad besvärjelselista (citerat block) </summary>

---
> ## Besvärjelsebeskrivningar
>
> ### Avert
> _Omedelbar, Räckvidd_
>
> Avert används för att avvärja en annan besvärjelse inom räckvidd. Avert kan kastas reaktivt för att neutralisera offensiva besvärjelser genom att använda den reaktiva handlingen Motmagi (Counter Magic).

</details>

---
## Fordonsstatblock
Starta ett 'rent' avsnitt med en h2-rubrik för listorna, öka sedan h-nivån som vanligt för kategorier och listobjekt.

Varje listat exempel har statistik och beskrivningar presenterade som en punktlista med fetstilta punkttitlar.

### Formatering av fordonsstatblock

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Exempel: formaterat fordonsstatblock (citerat block) </summary>

---
> ## Exempelfordon
>
> ### Markfordon
>
> #### Interceptor
>
> - **Skrov:** 6 (Medeltungt militärt), 40 Struktur
>
> - **Hastighet:** Snabb
>
> - **System:** 3
>
> - **Egenskaper:** Ejektorstol, Förbättrad prestanda, Överlägsen hantering, Övervakningssvit, Tålig, Vapenförsedd
>
> - **Vapen:** Oljespillsutkastare, rökutkastare, dubbelmonterade medeltunga maskingevär
>
> - **Beskrivning:** En trimmad lyxbil, sportbil eller liknande; den här bilen är byggd för att köra snabbt och ge lika mycket som den tar i strid. Det är den typ av fordon folk tänker på när någon säger "spionbil".

</details>

---
## Varelsesstatblock
Starta ett 'rent' avsnitt med en h2-rubrik för listorna. Varelsesstatblock använder tabeller och är mer komplexa när det gäller formatering och utrymmeskrav. För tydlighetens skull, undvik underavsnitt och lägg till avdelare mellan listobjekt.

Varje listat exempel bör ha följande...

- **Varelsetitel:** En avdelare följd av en h3-rubrik för varelse namnet.

- **MEG-post:** En extern länk till den angivna varelsen på [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Kärndetaljer:** Varelsens namn/typ, attribut, färdigheter och eventuella särskilda beskrivningar eller karaktärsanteckningar efter behov.

- **Vapendetaljer:** Förkortade beskrivningar med kolumner för vapennamn och följande attribut: Storlek (inkludera Kraft/Force här), Räckvidd (inkludera Avstånd här), Skada, AP/HP och eventuella särskilda regler.

- **Träffområden & Rustning:** Tabeller för träffområden varierar beroende på varelsens anatomi men bör inkluderas även för traditionella humanoider som ett sätt att hålla reda på rustning och skada.

### Formatering av varelsesstatblock

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

<summary>Exempel: formaterade tabeller för varelsesstatblock (citerat block) </summary>

> ---
> ### Goblin/Ork
> [MEG-post](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Varelsenamn | Goblin/Ork |
> | :-- | :-- |
> | Nyckelattribut | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Handlingspoäng | 2 |
> | Skademodifikator | - |
> | Initiativ | +11 |
> | Förflyttning | 6m |
> | Förmågor | Mörkerseende |
> | Färdigheter | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Stridsstil | Krigare (Kortsvärd, Sköld, Spjut, Slunga) 62% |
>
> #### Vapendetaljer
>
> | Vapen | Storlek | Räckvidd | Skada | AP/HP | Special |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kortsvärd | M | M | 1d6 | 6/8 | |
> | Spjut | M | L | 1d8+1 | 4/5 | |
> | Slunga | L | 10/150/300 | 1d8 | 1/2 | |
> | Sköld | L | S | 1d4 | 4/9 | Skyddar 3 områden vid passiv blockering/skydd |
>
> #### Träffområden & Rustning
>
> | **1d20** | **Område** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Höger ben | 1/5 |
> | 4-6 | Vänster ben | 1/5 |
> | 7-9 | Buk | 1/6 |
> | 10-12 | Bröst | 1/7 |
> | 13-15 | Höger arm | 1/4 |
> | 16-18 | Vänster arm | 1/4 |
> | 19-20 | Huvud | 1/5 |

</details>

---
## Community-errata

### Typfel och oklarheter

Redigeringar för att "snygga till" författarnas text bör hållas minimala, men typfel och andra misstag bör ändras direkt i texten utan någon markering.

### Informationspaneler för errata

Där en viss regel är för tvetydig, ofullständig eller helt enkelt felaktig, lägg till en infällbar Community-errata-notering.

Förklara problemet i kursiv stil och använd endast fetkursiv stil för problemets titel - _inga h(x)-rubriker!_ - för att inte skapa förvirrande sidofältsinlägg.

Om ersättningstext läggs till, placera den inom citattecken i fetkursiv stil, föregången av "_Community Errata:_" i normalviktig kursiv stil.

Ytterligare regler, om så krävs, bör presenteras i normalviktig text.

#### Mall för errata-formatering

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Exempel på errata

<details>

<summary>* Community Errata</summary>

_**Klättra (Climb)**_

_Community Errata:_
_**"Buren rustning hindrar klättrare med ett belopp lika med genomsnittet av burna rustningspoäng. Hitta detta genom att summera varje områdes burna rustningspoäng och dividera siffran med antalet områden."**_

_Regeln som den är skriven orsakar snabbt problem. Att bära en enda del 6AP-rustning skulle reducera en människa till Förflyttning 0, vilket innebär att en människa som bär en stålhjälm och inget annat skulle vara för överbelastad för att klättra alls. Detta verkar orimligt restriktivt, därav den redigerade versionen som föreslås ovan. Detta kommer att uppdateras om de ursprungliga författarna reviderar regeln som den är skriven._

</details>

<details>

<summary>* Community Errata</summary>

_**Gångarter: Gå, Springa, Snabblöpa (Walk, Run, Sprint)**_

_Den publicerade versionen av Mythras Imperative har inga explicita regler för att röra sig i olika gångarter, även om de täcks i Mythras kärnregelbok. Gångartmultiplikatorerna ovan har lagts till som en del av Community Errata._

_Där så krävs bör det räcka att behandla gångarter enligt följande:_

- _Gångarter snabbare än Gå applicerar en multiplikator på Förflyttningsvärdet: 3x för Springa, 5x för Snabblöpa._

- _Vid gångart Springa eller Snabblöpa kan karaktärer inte försöka utföra de flesta proaktiva handlingar såsom att attackera eller kasta besvärjelser. Vissa undantag inkluderar..._
  - _Attacker vid användning av anfallsregler (Charging)._
  - _Avfyrning av avståndsvapen med egenskapen Skirmishing._
- _Som en allmän regel bör alla tillåtna handlingar behandlas som en grad svårare att genomföra vid Springa, och två grader svårare vid Snabblöpa._

</details>

---
## Diverse varningar

### Tomma rader / Radbrytningar

Lämna en tom rad mellan olika typer av poster. Rubriker, avdelare, tabeller etc. Dessa blir inte synliga i läsläge, men deras frånvaro kan orsaka formateringsproblem.

### Fetstilt eller kursiv text över flera stycken

Varje stycke måste markeras som fet eller kursiv text. Den nya raden mellan stycken bryter formateringen och lämnar föräldralösa formateringsmärken.

### Internationella stavningar

De regressiva och beklagliga krafterna har sett lämpligt att ta bort alla brittiska stavningar till förmån för de objektivt svagare amerikanska versionerna. Håll utkik efter brittiska -OUR-ord: _armour_, _favour_ etc.