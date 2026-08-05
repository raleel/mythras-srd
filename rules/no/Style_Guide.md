# Veilednings tittel for stil (h1)

Bruk h1-overskrifter (`# Heading Title`) for hovedkapitteltittelen. Alle hx-overskrifter vil vises i sidepanelet som bokmerker.

Hvis tittelen ikke er en h1-overskrift, vil sidepanelet vise en duplikatfeil som viser siden etterfulgt av h2-overskriften 'tittel'.

---
## Seksjonsoverskrifter (h2)

Bruk h2-overskrifter (`## Section Heading`) innledet av en skillelinje (`---`) for hver nye hovedseksjon.

### Underseksjonsoverskrifter øker h-nivået med 1

Bruk h3-overskrifter (`### Subsection Heading`) for hver nye underseksjon, og h4-overskrifter (`#### Sub-Subsection Heading`) for hver nye under-underseksjon.

### Underseksjon h-progresjon: 2 > 3 > 4

Overskriftene blir blandet i sidepanelet hvis h-progresjonen ikke håndteres korrekt.

Overskriftsmarkøren bør øke med én eller ikke i det hele tatt.

h2 etterfulgt av h2 eller h3 er greit. h3 etterfulgt av h3 eller h4 er også greit.

### Underseksjonsfeil
h2 etterfulgt av h4 skaper problemer. Sidepanelet plasserer underoverskriften et sted over overskriften i innholdsfortegnelsen.

### Redusering av h-nivåer

Dette ser ikke ut til å være et problem. F.eks. h4 til h3 eller h2 er greit.

---
## Formateringskonvensjoner

Følgende stiler er normen for disse _Imperative_ SRD-ene i Markdown-format.

### Fet, kursiv og skillelinjer

- Bruk doble stjerner (`**Bold**`) for **Fet** tekst.
- Bruk understreking (`_Italic_`) for _Kursiv_ tekst.
   - _NB: Unngå å bruke enkel stjerne for kursiv!_
- Bruk backslash (`\_`) for å 'escape' et tegn: \_Ikke kursiv\_.
- Bruk vinklede anførselstegn (``` `code` ```) for å lage `code blocks`.
- Bruk tre bindestreker (`---`) for å sette inn en horisontal skillelinje.

### Konvensjoner for fet og kursiv

Sikt på å følge følgende mønstre...

#### Fetstilte titler

Bruk fetstilte titler når du beskriver formler, effekter osv.
- **Magitittel:** Beskrivelse.

#### Kursiverte titler

Bruk kursiverte titler for 'underlister' av variantformler osv.
- **Magi:** Beskrivelse.
  - **_Magivariant-A:_** Beskrivelse.
  - **_Magivariant-B:_** Beskrivelse.

#### Referanser til kursiverte titler

Bruk kursiverte titler når du refererer til en bok som _Mythras Imperative_ eller kjerneregelsettet _Mythras_.

---
## Listeformatering

### Uordnede lister / Punktlister

- Uordnede lister lages med bindestreker.
- Uordnede lister lages med bindestreker.
  - Øk innrykk med 2 mellomrom eller en tabulator.

### Ordnete lister / Nummererte punkter

1. Nummererte lister lages med siffer og et punktum.
2. Nummererte lister lages med siffer og et punktum.
- Bland inn punktlister
	- Og innrykk
3. Bland tilbake tall
   - Og punktlister

### Overskrevne lister

For lister med relaterte underoverskrifter, uthev tittelen og kolon.
- **Eksempel 1:** Bla, bla, bla...
- **Eksempel 2:** Bla, bla, bla...

### Kursiverte overskrevne lister

For lister med relaterte underoverskrifter, uthev og kursiver tittelen og kolon.
- **_Eksempel 1:_** Bla, bla, bla...
- **_Eksempel 2:_** Bla, bla, bla...

---
## Tabeller

Gi tabeller en underoverskrift slik at de vises som bokmerker i sidepanelet, innrykket ett nivå fra sin overordnede seksjon.

~Gjør overskriftsraden til fet tekst.~
Å gjøre overskriftsraden fet gjengir den faktisk i vanlig tekst. Standard CSS har den raden uthevet.

### Tekstjustering i tabeller

Bruk rad 2 for innholdsjustering: `:--`, `:-:` eller `--:`.
Dette vil påvirke hele kolonnen.

#### Grunnleggende layout for tabeller

| **Kolonne 1** | **Kolonne 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Konvensjoner for tekstjustering

- Bruk sentrert justering for tall eller lignende verdilister.
- Bruk venstrejustering for tekstsetninger.

#### Eksempeltabell for justering

| **Nummer** | **Beskrivelse** |
| :-: | :-- |
| 1 | Beskrivende tekst |
| 2 | Beskrivende tekst |
| 3 | Beskrivende tekst |

#### Eksempel: Tabell for ildintensitet

| **Intensitet** | **Eksempler** | **Tid til antennelse** | **Skade** |
| :-: | :-- | :-: | :-: |
| 1 | Stearinlys | 1d4 | 1d2 |
| 2 | Fakkel | 1d3 | 1d4 |
| 3 | Leirbål | 1d2 | 1d6 |
| 4 | Romutfyllende brann | 1d2 | 2d6 |
| 5 | Vulkansk lava | Umiddelbar | 3d6 |

---
## Lenker

Det er mange bruksområder for lenker i SRD-en, og bare noen få hovedtilfeller er dekket her.

### Formatering av lenker

Formatering av en lenke gjøres med tekst i klammeparentes. Bruk firkantede klammer for den synlige lenketeksten, og krumme klammer for destinasjons-URL-en: `[Link Text](URL)`.

I disse dokumentene vil den mest brukte eksterne lenken være [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Eksterne vs. interne lenker

Eksterne lenker går til andre sider via internett og trenger en `http://example.com` URL, og som standard vil de _alltid_ åpnes i en ny nettleserfane.

For å unngå flere faner som roter til dokumentet som leses, dannes interne lenker og bokmerker med relative URL-er som refererer til markdown-filene som er synlige i GitHub-depotet. I stedet for en ny fane, vil disse interne lenkene raskt rulle til den lenkede seksjonen.

#### Eksempler på interne lenker

- **Kapittellenker:** Disse peker til starten av en hovedseksjon (h1). f.eks. kapittelet [Kamp](0005_Combat.md).

  - Lenkeformat: `[Combat](0005_Combat.md)`

- **Underseksjonslenker:** Disse peker til en overskrift i et kapittel som refererer til dokumentet som ovenfor, men med vedlegg av `?id=` etterfulgt umiddelbart av destinasjonsoverskriften. f.eks. [Hoppangrep](0005_Combat.md?id=leaping-attacks)

  - Lenkeformat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Eksterne lenker til underseksjoner

Det kan forekomme anledninger til å referere til en kjent seksjon i et eksternt dokument, for eksempel en spesifikk tabell i en annen SRD. Formateringen er den samme som for underseksjonslenker ovenfor, bare med bruk av den eksterne HTTP-URL-en.

Som et eksempel, her er [tabellen for konvertering mellom imperial og metrisk](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) fra [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magiske lister og krefter

Start en 'ren' seksjon med en h2-overskrift for lister over tilgjengelige formler, krefter osv.; deretter h3 for hvert listeelement.

Formler og krefter presenteres vanligvis i en enkel flat liste etter magitype (Folkemagi, Teisme, etc.), men hvis listen krever egne underseksjoner, som skole eller kultspesialiseringer, øk overskriftsnivået tilsvarende. For eksempel, h2 for Teistiske mirakler-liste, h3 for Kult: Mithras, og h4 for hvert Mithras-kultmirakel.

Spesielt når det gjelder formler, men i enhver beskrivelse som bruker nøkkelordattributter, list dem opp i kursiv tekst.

Beskrivende tekst og spesialregler bruker normal tekst.

### Formatering av formelliste

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Eksempel: formatert formelliste (blokksitert) </summary>

---
> ## Formelbeskrivelser
>
> ### Avverge
> _Umiddelbar, Avstandsbasert_
>
> Avverge brukes for å avfeie en annen formel innen rekkevidde. Avverge kan kastes reaktivt for å nøytralisere offensive formler ved å bruke den reaktive handlingen Motmagi.

</details>

---
## Kjøretøy-statistikkblokker
Start en 'ren' seksjon med en h2-overskrift for oppføringene, og øk deretter h-nivået som vanlig for kategorier og listeelementer.

Hvert oppført eksempel har statistikk og beskrivelser presentert som en punktliste med uthevede punkttitler.

### Formatering av kjøretøy-statistikkblokk

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Eksempel: formatert kjøretøy-statistikkblokk (blokksitert) </summary>

---
> ## Eksempel på kjøretøy
> 
> ### Kjøretøy på bakken
> 
> #### Interceptor
> 
> - **Skrog:** 6 (Middels militært), 40 Struktur
> 
> - **Hastighet:** Rask
> 
> - **Systemer:** 3
> 
> - **Egenskaper:** Katapultsete, Forbedret ytelse, Overlegen manøvrering, Overvåkningspakke, Tøff, Våpenutrustet
> 
> - **Våpen:** Oljesøl-dispenser, røykkaster, tvillingmonterte middels maskingevær
> 
> - **Beskrivelse:** En oppgradert luksusbil, sportsbil eller lignende; denne bilen er bygget for å kjøre fort og tåle like mye som den gir i kamp. Dette er typen kjøretøy folk tenker på når noen sier "spionbil".

</details>

---
## Skapnings-statistikkblokker
Start en 'ren' seksjon med en h2-overskrift for oppføringene. Skapnings-statistikkblokker bruker tabeller og er mer komplekse når det gjelder formatering og plassbehov. For oversiktlighet, unngå underseksjoner og legg til skillelinjer mellom listeelementer.

Hvert oppført eksempel bør ha følgende...

- **Skapningstittel:** En skillelinje etterfulgt av en h3-overskrift for skapningens navn.

- **MEG-oppføring:** En ekstern lenke til den spesifiserte skapningen på [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Kjernedetaljer:** Skapningens navn/type, attributter, ferdigheter og eventuelle spesielle beskrivelser eller merknader etter behov.

- **Våpendetaljer:** Forkortede beskrivelser med kolonner for våpenets navn og følgende attributter: Størrelse (inkluder Kraft her), Rekkevidde (inkluder Avstand her), Skade, AP/HP, og eventuelle spesialregler.

- **Treffsoner og rustning:** Lokasjonstabeller vil variere basert på ulik anatomi hos skapninger, men bør inkluderes selv for tradisjonelle humanoider som en måte å spore rustning og skade på.

### Formatering av skapnings-statistikkblokk

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

<summary>Eksempel: formaterte tabeller for skapnings-statistikkblokk (blokksitert) </summary>

> ---
> ### Goblin/Ork
> [MEG-oppføring](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Skapningsnavn | Goblin/Ork |
> | :-- | :-- |
> | Nøkkelattributter | STR 11, KON 14, STØ 11, BEH 11, INT 11, VIL 11, KAR 7 |
> | Handlingspoeng | 2 | 
> | Skadejustering | - |
> | Initiativ | +11 |
> | Bevegelse | 6m |
> | Evner | Nattsyn |
> | Ferdigheter | Atletikk 52 %, Muskelkraft 42 %, Bedrag 57 %, Utholdenhet 48 %, Unnvikelse 62 %, Persepsjon 61 %, Ubevæpnet 52 %, Viljestyrke 42 % |
> | Kampstil | Kriger (Kortsverd, Skjold, Spyd, Slynge) 62 % |
> 
> #### Våpendetaljer
> 
> | Våpen | Størrelse | Rekkevidde | Skade | AP/HP | Spesial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kortsverd | M | M | 1d6 | 6/8 | |
> | Spyd | M | L | 1d8+1 | 4/5 | |
> | Slynge | L | 10/150/300 | 1d8 | 1/2 | |
> | Skjold | L | S | 1d4 | 4/9 | Beskytter 3 soner ved passiv blokkering/verning |
> 
> #### Treffsoner og rustning
> 
> | **1d20** | **Lokasjon** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Høyre ben | 1/5 |
> | 4-6 | Venstre ben | 1/5 |
> | 7-9 | Underliv | 1/6 |
> | 10-12 | Bryst | 1/7 |
> | 13-15 | Høyre arm | 1/4 |
> | 16-18 | Venstre arm | 1/4 |
> | 19-20 | Hode | 1/5 |

</details>

---
## Fellesskapets errata

### Skrivefeil og forvirring

Redigeringer for å 'rydde opp' i forfatternes tekst bør holdes minimale, men skrivefeil og andre feil bør bare endres direkte i teksten uten merking.

### Errata-infopaneler

Der en gitt regel er for tvetydig, ufullstendig eller rett og slett feil, legg inn en sammenleggbar Errata-merknad fra fellesskapet.

Forklar problemet i kursiv ved å kun bruke fet kursiv for problemets tittel - _ingen h(x)-overskrifter!_ - for ikke å skape forvirrende sidepanelelementer.

Hvis erstatningstekst legges til, plasser den i doble anførselstegn i fet kursiv, innledet av "_Fellesskapets errata:_" i vanlig kursiv.

Ytterligere regler, hvis nødvendig, bør presenteres i normal skrift.

#### Mal for errata-formatering

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

<summary>* Fellesskapets errata</summary>

_**Klatre**_

_Fellesskapets errata:_
_**"Brukt rustning hindrer klatrere med et beløp lik gjennomsnittet av brukte rustningspoeng. Finn dette ved å summere alle lokasjoners brukte rustningspoeng og divider tallet med antall lokasjoner."**_

_Regelen slik den er skrevet skaper raskt problemer. Å bruke et enkelt stykke rustning på 6 AP ville redusere et menneske til 0 i bevegelse, noe som betyr at et menneske som kun bruker en stålhjelm ville være for overbelastet til å klatre i det hele tatt. Dette virker urimelig restriktivt, derav den redigerte versjonen foreslått ovenfor. Dette vil bli oppdatert dersom de originale forfatterne reviderer regelen slik den er skrevet._

</details>

<details>

<summary>* Fellesskapets errata</summary>

_**Gangarter: Gå, Løpe, Sprinte**_

_Den publiserte versjonen av _Mythras Imperative_ har ingen eksplisitte regler for bevegelse i forskjellige gangarter, selv om de er dekket i Mythras-kjerneregelboken. Gangart-multiplikatorene ovenfor er lagt til som en del av fellesskapets errata._

_Der det er påkrevd, bør det være tilstrekkelig å behandle gangarter som følger:_

- _Gangarter raskere enn å gå bruker en multiplikator på bevegelsesverdien: 3x for å løpe, 5x for å sprinte._

- _Mens man er i en Løpe- eller Sprinte-gangart, kan ikke karakterer prøve de fleste proaktive handlinger som å angripe eller kaste formler. Noen unntak inkluderer..._
  - _Angrep ved bruk av regler for utfall._
  - _Avfyring av avstandsvåpen med egenskapen Skirmishing._
- _Som en generell regel bør alle tillatte handlinger behandles som én grad vanskeligere å utføre når man løper, og to grader vanskeligere når man sprinter._

</details>

---
## Diverse advarsler

### Tomme linjer / Vognretur

Legg igjen en tom linje mellom forskjellige typer oppføringer. Overskrifter, skillelinjer, tabeller osv. Disse vil ikke være synlige i lesevisning, men fraværet deres kan forårsake formateringsproblemer.

### Fet eller kursiv tekst over flere avsnitt

Hvert avsnitt må markeres som fet eller kursiv tekst. Den nye linjen mellom avsnittene vil bryte formateringen og etterlate foreldreløse formateringsmerker.

### Internasjonal stavemåte

De regressive og beklagelige kreftene har sett seg tjent med å fjerne alle britiske stavemåter til fordel for de objektivt svakere amerikanske versjonene. Vær på vakt etter britiske -OUR-ord: _armour_, _favour_, osv.