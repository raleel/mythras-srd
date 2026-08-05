# Stilguide-titel (h1)

Brug h1-overskrifter (`# Heading Title`) til hovedkapiteltitlen. Alle hx-overskrifter vil optræde i sidepanelet som bogmærker.

Hvis titlen ikke er en h1-overskrift, vil sidepanelet vise en duplikeringsfejl, der viser siden efterfulgt af h2-'titel'-overskriften.

---
## Sektions-overskrifter (h2)

Brug h2-overskrifter (`## Section Heading`) indledt af en skillelinje (`---`) for hver ny hovedsektion.

### Undersektions-overskrifter, hvor h-niveauet øges med 1

Brug h3-overskrifter (`### Subsection Heading`) for hver ny undersektion, og h4-overskrifter (`#### Sub-Subsection Heading`) for hver ny under-undersektion.


### Undersektions h-progression: 2 > 3 > 4

Under-overskrifterne bliver blandet sammen i sidepanelet, hvis h-progressionen ikke håndteres korrekt.

Overskriftsmarkøren bør stige med én eller slet ikke.

h2 efterfulgt af h2 eller h3 er fint. h3 efterfulgt af h3 eller h4 er også fint.

### Fejl i undersektioner
h2 efterfulgt af h4 skaber problemer. Sidepanelet placerer under-overskriften et sted over overskriften i indholdsfortegnelsen.

### Reducering af h-niveauer

Dette ser ikke ud til at være et problem. f.eks. h4 til h3 eller h2 er fint.

---
## Formateringskonventioner

Følgende stile er normen for disse _Imperative_ SRD'er i Markdown-format.

### Fed, kursiv og skillelinjer

- Brug dobbelte stjerner (`**Bold**`) til **fed** tekst.
- Brug understregning (`_Italic_`) til _kursiv_ tekst.
   - _Bemærk: Undgå at bruge enkelte stjerner til kursiv!_
- Brug backslash (`\_`) til at 'escape' et tegn: \_Ikke kursiv\_.
- Brug vinkelparenteser (``` `code` ```) til at lave `code blocks`.
- Brug tre bindestreger (`---`) til at indsætte en vandret skillelinje.

### Konventioner for fed & kursiv

Prøv at holde dig til følgende mønstre...

#### Fede titler

Brug fede titler, når du beskriver besværgelser, effekter osv.
- **Magisk titel:** Beskrivelse.

#### Kursive titler

Brug kursive titler til 'underlister' af variant-besværgelser osv.
- **Magi:** Beskrivelse.
  - **_Magisk variant-A:_** Beskrivelse.
  - **_Magisk variant-B:_** Beskrivelse.

#### Kursive titelreferencer

Brug kursive titler, når du refererer til en bog, såsom _Mythras Imperative_ eller det grundlæggende _Mythras_ regelsæt.

---
## Listeformatering

### Unummererede lister / Punktopstilling

- Unummererede lister laves med bindestreger.
- Unummererede lister laves med bindestreger.
  - Øg indrykningsniveauet med 2 mellemrum eller et tabulatur.

### Nummererede lister / Nummererede punkter

1. Nummererede lister laves med cifferet og et punktum.
2. Nummererede lister laves med cifferet og et punktum.
- Bland med punktopstillinger
	- Og indrykning
3. Bland tal tilbage ind
   - Og punkter

### Overskriftslister

For lister med relaterede under-overskrifter, fremhæv titlen med fed og et kolon.
- **Eksempel 1:** Bla, bla, bla...
- **Eksempel 2:** Bla, bla, bla...

### Kursive overskriftslister

For lister med relaterede under-overskrifter, fremhæv titlen med fed og kursiv samt et kolon.
- **_Eksempel 1:_** Bla, bla, bla...
- **_Eksempel 2:_** Bla, bla, bla...

---
## Tabeller

Giv tabeller en under-overskrift, så de optræder som bogmærker i sidepanelet, indrykket et niveau fra deres overordnede sektion.

~Gør overskriftsrækken fed.~
At gøre overskriftsrækken fed gør den faktisk almindelig tekst. Standard-CSS'en har den række i fed.

### Justering af tabeltekst

Brug række 2 til justering af indhold: `:--`, `:-:` eller `--:`.
Dette vil påvirke hele kolonnen.

#### Grundlæggende layout af tabeller

| **Kolonne 1** | **Kolonne 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Konventioner for tekstjustering

- Brug centreret justering til tal eller lignende værdilister.
- Brug venstrejustering til sætninger.

#### Eksempel på justeringstabel

| **Nummer** | **Beskrivelse** |
| :-: | :-- |
| 1 | Beskrivende tekst |
| 2 | Beskrivende tekst |
| 3 | Beskrivende tekst |

#### Eksempel: Tabel for ildintensitet

| **Intensitet** | **Eksempler** | **Tid til antændelse** | **Skade** |
| :-: | :-- | :-: | :-: |
| 1 | Stearinlys | 1d4 | 1d2 |
| 2 | Fakkel | 1d3 | 1d4 |
| 3 | Lejrbål | 1d2 | 1d6 |
| 4 | Rum-fyldende brand | 1d2 | 2d6 |
| 5 | Vulkan-lava | Øjeblikkelig | 3d6 |

---
## Links

Der er mange anvendelsesmuligheder for links i SRD'en, og kun nogle få hovedtilfælde er dækket her.

### Formatering af links

Formatering af et link gøres med tekst i parentes. Brug firkantede parenteser til den synlige linktekst, og runde parenteser til destinations-URL'en: `[Link Text](URL)`.

I disse dokumenter vil det mest almindeligt anvendte eksterne link være [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Eksterne vs. interne links

Eksterne links går til andre sider via internettet og vil have brug for en `http://example.com` URL, og som standard vil de _altid_ åbne i en ny browserfane.

For at undgå at flere faner roder i det dokument, der læses, er interne links og bogmærker dannet med relative URL'er, der refererer til de markdown-filer, der er synlige i GitHub-arkivet. I stedet for en ny fane vil disse interne links hurtigt rulle til den linkede sektion.

#### Eksempler på interne links

- **Kapitellinks:** Disse peger til starten af en hovedsektion (h1). f.eks. [Kamp](0005_Combat.md)-kapitlet.

  - Linkformat: `[Combat](0005_Combat.md)`

- **Undersektionslinks:** Disse peger til en overskrift inden for et kapitel, der refererer til dokumentet som ovenfor, men tilføjer `?id=` efterfulgt af destinations-overskriften. f.eks. [Springangreb](0005_Combat.md?id=leaping-attacks)

  - Linkformat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Eksterne links til undersektioner

Der kan være lejlighed til at referere til en kendt sektion i et eksternt dokument, for eksempel en specifik tabel i en anden SRD. Formateringen er den samme som med undersektionslinks ovenfor, bare med brug af den eksterne HTTP-URL.

Som et eksempel er her [tabellen for omregning fra imperiale til metriske enheder](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) fra [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magi og kræfter-lister

Start en 'ren' sektion med en h2-overskrift til lister over tilgængelige besværgelser, kræfter osv.; derefter h3 for hvert listeelement.

Besværgelser og kræfter præsenteres normalt i en flad liste opdelt efter magitype (Folk Magic, Theism osv.), men hvis listen kræver sine egne undersektioner, såsom skole eller kult-specialiseringer, skal overskriftsniveauet øges passende. For eksempel h2 for Theisme-mirakler, h3 for Kult: Mithras, og h4 for hvert Mithras-kultmirakel.

Især i tilfælde af besværgelser, men i enhver beskrivelse der bruger nøgleord-attributter, skal de listes i kursiv.

Beskrivende tekst og særlige regler bruger almindelig tekst.

### Formatering af besværgelsesliste

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Eksempel: formateret besværgelsesliste (blokciteret) </summary>

---
> ## Beskrivelse af besværgelser
>
> ### Avert (Afværg)
> _Øjeblikkelig, Rækkevidde_
>
> Avert bruges til at afvise en anden besværgelse inden for rækkevidde. Avert kan kastes reaktivt for at neutralisere offensive besværgelser ved at bruge den reaktive handling "Counter Magic".

</details>

---
## Køretøjs-statblokke
Start en 'ren' sektion med en h2-overskrift til listerne, og øg derefter h-niveauet som normalt for kategorier og listeelementer.

Hvert listet eksempel har statistikker og beskrivelser præsenteret som en punktopstilling med fede punkttitler.

### Formatering af køretøjs-statblok

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Eksempel: formateret køretøjs-statblok (blokciteret) </summary>

---
> ## Eksempel på køretøjer
> 
> ### Landkøretøjer
> 
> #### Interceptor
> 
> - **Skrog:** 6 (Mellem militær), 40 Struktur
> 
> - **Hastighed:** Hurtig
> 
> - **Systemer:** 3
> 
> - **Egenskaber:** Ejector-sæde, Forbedret ydeevne, Overlegen håndtering, Overvågningspakke, Robust, Bevæbnet
> 
> - **Våben:** Oliefilms-dispenser, røgdispenser, dobbeltkoblede medium maskingeværer
> 
> - **Beskrivelse:** En trimmet luksusbil, sportsvogn eller lignende; denne bil er bygget til at køre hurtigt og give lige så godt igen, som den tager imod i kamp. Dette er den type køretøj, folk tænker på, når nogen siger "spionbil".

</details>

---
## Væsen-statblokke
Start en 'ren' sektion med en h2-overskrift til listerne. Væsen-statblokke bruger tabeller og er mere komplekse med hensyn til formatering og pladskrav. For klarhedens skyld, undgå undersektioner og tilføj skillelinjer mellem listeelementer.

Hvert listet eksempel bør have følgende...

- **Væsen-titel:** En skillelinje efterfulgt af en h3-overskrift til væsenets navn.

- **MEG-indgang:** Et eksternt link til det specifikke væsen på [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Kerneoplysninger:** Væsenets navn/type, attributter, færdigheder og eventuelle særlige beskrivelser eller noter efter behov.

- **Våbenoplysninger:** Forkortede beskrivelser med kolonner for våbenets navn og følgende attributter: Størrelse (inkluder Kraft her), Rækkevidde (inkluder Rækkevidde her), Skade, AP/HP, og eventuelle særlige regler.

- **Ramte lokationer & Rustning:** Lokationstabeller vil variere baseret på væsenets anatomi, men bør inkluderes selv for traditionelle humanoider som en måde at spore rustning og skade på.

### Formatering af væsen-statblok

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

<summary>Eksempel: formateret tabel for væsen-statblok (blokciteret) </summary>

> ---
> ### Goblin/Ork
> [MEG-indgang](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Væsen-navn | Goblin/Ork  |
> | :-- | :-- |
> | Primære attributter | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Handlingspoint | 2 | 
> | Skadesmodifikator | - |
> | Initiativ | +11 |
> | Bevægelse | 6m |
> | Evner | Nattesyn |
> | Færdigheder | Atletik 52%, Brawn 42%, Bedrag 57%, Udholdenhed 48%, Undvigelse 62%, Perception 61%, Ubevæbnet 52%, Viljestyrke 42% |
> | Kampstil | Kriger (Kortsværd, Skjold, Spyd, Slynge) 62% |
> 
> #### Våbenoplysninger
> 
> | Våben | Størrelse | Rækkevidde | Skade | AP/HP | Speciel |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kortsværd | M | M | 1d6 | 6/8 | |
> | Spyd | M | L | 1d8+1 | 4/5 | |
> | Slynge | L | 10/150/300 | 1d8 | 1/2 | |
> | Skjold | L | S | 1d4 | 4/9 | Beskytter 3 lokationer ved passiv blokering/afværgelse |
> 
> #### Ramte lokationer & Rustning
> 
> | **1d20** | **Lokation** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Højre ben | 1/5 |
> | 4-6 | Venstre ben | 1/5 |
> | 7-9 | Mave | 1/6 |
> | 10-12 | Bryst | 1/7 |
> | 13-15 | Højre arm | 1/4 |
> | 16-18 | Venstre arm | 1/4 |
> | 19-20 | Hoved | 1/5 |

</details>


---
## Fællesskabs-errata

### Skrivefejl og forvirring

Redigeringer for at 'rydde op' i forfatternes tekst bør holdes på et minimum, men skrivefejl og andre fejl bør blot ændres direkte uden markering.

### Errata-infopaneler

Hvor en given regel er for tvetydig, ufuldstændig eller blot forkert, tilføj en sammenklappelig fællesskabs-errata-note.

Forklar problemet i kursiv ved kun at bruge fed kursiv til emnets titel - _ingen h(x)-overskrifter!_ - for ikke at skabe forvirrende sidepanelelementer.

Hvis der tilføjes erstatningstekst, skal den placeres i anførselstegn med fed kursiv, indledt af "_Fællesskabs-errata:_" med normal vægt i kursiv.

Yderligere regler, hvis det kræves, bør præsenteres med normal vægt i tekst.

#### Errata-formateringsskabelon

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata-eksempler

<details>

<summary>* Fællesskabs-errata</summary>

_**Klatring**_

_Fællesskabs-errata:_
_**"Båret rustning hindrer klatrere med en værdi svarende til gennemsnittet af båret rustningspoint. Find dette ved at lægge alle lokationers rustningspoint sammen og dividere tallet med antallet af lokationer."**_

_Reglen som skrevet skaber hurtigt problemer. At bære et enkelt stykke 6AP-rustning ville reducere et menneske til Bevægelse 0, hvilket betyder, at et menneske, der kun bærer en stålhjelm og intet andet, ville være for tynget til overhovedet at klatre. Dette virker urimeligt restriktivt, deraf den foreslåede redigerede version ovenfor. Dette vil blive opdateret, hvis de oprindelige forfattere reviderer reglen._

</details>

<details>

<summary>* Fællesskabs-errata</summary>

_**Gangarter: Gå, Løb, Sprint**_

_Den udgivne version af _Mythras Imperative_ har ingen eksplicitte regler for at bevæge sig ved forskellige gangarter, selvom de er dækket i Mythras grundregelsæt. Gangarts-multiplikatorerne ovenfor er tilføjet som en del af fællesskabs-errataen._

_Hvor det kræves, bør det være tilstrækkeligt at behandle gangarter som følger:_

- _Gangarter hurtigere end "Gå" anvender en multiplikator på Bevægelses-værdien: 3x for Løb, 5x for Sprint._

- _Mens man er i Løb- eller Sprint-gangart, kan karakterer ikke forsøge de fleste proaktive handlinger såsom at angribe eller kaste besværgelser. Nogle undtagelser inkluderer..._
  - _Angreb, når man bruger reglerne for at storme (Charging)._
  - _Affyring af fjernvåben med Skirmishing-egenskaben._
- _Som hovedregel bør alle tilladte handlinger behandles som én grad sværere at udføre ved Løb, og to grader sværere ved Sprint._

</details>

---
## Diverse advarsler

### Tomme linjer / Vognretur

Efterlad en tom linje mellem forskellige typer af elementer. Overskrifter, skillelinjer, tabeller osv. Disse vil ikke være synlige i læsevisning, men deres fravær kan forårsage formateringsproblemer.

### Fed eller kursiv tekst over flere afsnit

Hvert afsnit skal markeres som fed eller kursiv tekst. Den nye linje mellem afsnit vil bryde formateringen og efterlade herreløse formateringsmærker.

### Internationale stavemåder

De regressive og beklagelige magter har fundet det passende at fjerne alle britiske stavemåder til fordel for de objektivt svagere amerikanske versioner. Hold øje med britiske -OUR ord: _armour_, _favour_ osv.