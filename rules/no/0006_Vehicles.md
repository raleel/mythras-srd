# Kjøretøy

Kjøretøy i _Mythras Imperative_ blir behandlet på en semi-abstrakt måte. I hovedsak er de bakgrunnsverktøy som brukes for å få karakterer fra A til B, med lite behov for detaljerte beskrivelser eller statistikk. Noen ganger vil imidlertid spilledere (Games Masters) trenge detaljer for kjøretøy når det er nødvendig å representere dem i jakter eller kampsituasjoner.

Reglene i denne delen tillater representasjon av de fleste typer kjøretøy, men på en abstrakt måte som er ment å gi fleksibilitet og forbedre historiefortellingen. Romskip og fartøy er litt annerledes, selv om de er basert på lignende prinsipper.

---
## Statistikk

Alle kjøretøy beskrives ut fra deres struktur, skrog, hastighet, systemer, egenskaper og skjold (hvis til stede i spillverdenen).

- **[Størrelse](0006_Vehicles.md?id=vehicle-size-table):** Alle kjøretøy har en av seks størrelseskategorier som bestemmer verdien eller området for resten av karakteristikkene. På grunn av deres større iboende størrelse og de fiendtlige miljøene i verdensrommet, har romskip sitt eget utvalg av verdier.
- **[Skrog](0006_Vehicles.md?id=terrestrial-hulls):** Representerer rustningspoeng (Armor Points).
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Representerer et kjøretøys helsepoeng (Hit Points).
- **[Skjold](0006_Vehicles.md?id=shields):** I omgivelser med avansert energimanipuleringsteknologi kan det finnes skjold som beskytter kjøretøyet, men som kan svekkes ved vedvarende beskytning.
- **[Systemer](0006_Vehicles.md?id=systems):** Representerer viktige komponenter i kjøretøyet, inkludert kraftverk, mannskapsseksjon, og så videre.
- **[Hastighet](0006_Vehicles.md?id=speed):** Hvert kjøretøy har en grunnleggende hastighetsvurdering.
- **[Egenskaper](0006_Vehicles.md?id=traits):** Et kjøretøy kan også ha én eller flere egenskaper (Traits). Egenskaper, som evnene tildelt skapninger i _Mythras Imperative_-reglene eller kampstiltrekk, gir en ekstra spillbeskrivelse og fordel som gjenspeiler kjøretøyets natur.
- **[Våpen](0006_Vehicles.md?id=weapons):** I likhet med egenskaper kan et kjøretøy være utstyrt med våpen slik spillverdenen tillater. Noen foreslåtte eksempler og verdier er detaljert nedenfor.


---
### Skrogstørrelse, type og struktur

Størrelsen og formålet til et kjøretøy påvirker tykkelsen på skroget og motstandsdyktigheten til den interne strukturen. En motorsykkel har for eksempel et minimalt skrog, bygget som den er for hastighet og smidighet. Et "Land Ironclad" (en massiv, belte- eller hjulgående pansret gigant, drevet av damp- eller dieselmotorer), som er et mye større kjøretøy designet for slagmarken, har et mye større skrog. De sammenlignbare størrelsene på skrog (og hvor mange treff fra våpen de vanligvis tåler), er oppsummert i tabellene for kjøretøystørrelse og skrog nedenfor.

Hver gang et kjøretøy blir skadet, reduseres den innkommende skaden med dets skrogverdi. All gjenværende skade trekkes fra kjøretøyets strukturpoeng og har en prosentvis sjanse, lik den gjennomtrengende skaden, for å påvirke et system. Hvis kjøretøyet noen gang reduseres til null i struktur, er det enten fullstendig ødelagt eller så hardt skadet at det må vrakes.

##### Terrestriske skrog

| Størrelse | Struktur | Sivil skrogverdi | Militær skrogverdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 1-20 | 1-3 | 4-6 | Motorsykkel, motorsykkel med sidevogn, kompakt bil, kano, kajakk, robåt |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, varebil, pickup, luksusbil, sportsbil, muskelbil, limousin, livbåt, hurtigbåt, hangglider, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastebil, strekk-limo, SUV, buss, personbil, privatfly, seilfly, luksuscruiser, stridsvogn, helikopter, ubåt |
| Enorm | 61-80 | 7-12 | 13-15 | Semitrailer, passasjerfly, jetfly, kystvaktskip, yacht |
| Kolossal | 81-100 | 10-15 | 16-18 | Tog, cruiseskip, marineskip |

##### Romskipskrog

| Størrelse | Struktur | Sivil skrogverdi | Militær skrogverdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 10-50 | 4-9 | 10-12 | Enkeltseters jagerfly |
| Medium | 51-150 | 7-12 | 13-15 | Lett frakteskip, romferge |
| Stor | 151-450 | 10-15 | 16-18 | Tungt frakteskip, krysser |
| Enorm | 451-1350 | 13-18 | 19-21 | Eskortefregatt, lett slagkrysser |
| Kolossal | 1351-4050 | 16-21 | 21-24 | Generasjonsskip, tung slagkrysser |
| Titanisk | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planet-ødeleggende stasjon |


---
### Skjold

Deflektorskjold gir et ekstra lag med beskyttelse for de kjøretøyene som kan montere dem. Skjold fungerer litt annerledes enn skroget på grunn av sin ablerende (nedbrytbare) natur. Hvis innkommende skade er lik eller mindre enn verdien til skjoldene, blir alt blokkert. Hvis skaden overstiger skjoldverdien, reduserer eventuelt overskudd skjoldstyrken med det beløpet.

_For eksempel har en troppetransport en energiskjoldstyrke på 12 poeng. Hvis transporten blir truffet av en laser for 11 skade, trenger den ikke gjennom og har ingen ytterligere effekt. På den annen side, hvis transporten ble truffet av en eksplosjon som påførte 15 skade, ville de tre overskytende poengene redusere skjoldstyrken til 9._

Når styrken til et deflektorskjold har sunket til null, kollapser det. All gjenværende skade går videre til skroget.

---
### Systemer

Hver gang et kjøretøy lider skade som trenger gjennom skroget, er det en sjanse, lik den gjennomtrengende skaden, for at et viktig system har blitt påvirket.

_For eksempel påføres 10 skade på en hurtigbåt - et kjøretøy med 3 i skrog og 24 i struktur. Skroget teller som rustning og reduserer skaden til 7. Dette trekkes fra de 24 strukturpoengene, og det er 7 % sjanse for å skade et av kjøretøyets systemer._

Skaden et system kan tåle er basert utelukkende på kjøretøyets størrelse. Dette modelleres ved antall treff et system kan ta, snarere enn selve skademengden. Et enkelt systemtreff på et lite kjøretøy vil øyeblikkelig ødelegge systemet. Det kreves to treff for å ødelegge et medium kjøretøys systemer, tre for et stort kjøretøy, og så videre. Se [Systemskadetabellen](0006_Vehicles.md?id=system-damage-table) nedenfor.

Systemer som er skadet, men ennå ikke ødelagt, lider et funksjonstap proporsjonalt med antall mottatte treff - enten en prosentvis reduksjon eller en vanskelighetsgradstraff (Grade penalty) for systemoppgaver. Den spesifikke effekten er basert på hva undersystemet kontrollerer, som detaljert i [Systemkomponentskadetabellen](0006_Vehicles.md?id=system-component-damage-table) nedenfor. Avhengig av hvilket system som blir truffet, kan effektene være katastrofale.

_For eksempel, et "Land Ironclad" - et enormt kjøretøy med 5 systemtreff - som blir truffet to ganger i drivverket, ville mistet 40 % av kraften og redusert sin langsomme hastighet med to grader til "Ponderous" (tung/treg). På samme måte ville et stort frakteskip - med 3 systemtreff - som tar to treff i motor/drivstoff-systemet, få en straff på to grader på hastighet samt på bruk av elektroniske systemer. Et tredje treff ville ødelagt motor/drivstoff-systemet og skipet med det._


<details>

<summary>* Errata fra nettsamfunnet</summary>

---

#### Skade

- _"Skade som overstiger skroget trenger inn i kjøretøyet, skader strukturen og påvirker muligens ett eller flere systemer. Avhengig av kjøretøyets størrelse kan skaden være mindre eller katastrofal._
- _For eksempel kan et stort kjøretøy ta opptil tre treff på et system som drivverket. Det fjerde treffet ødelegger funksjonelt drivverket. Hver gang systemet tar et treff, mister det enten en prosentandel av funksjonen som beskrevet i kolonnen 'Loss per Hit' i Systemskadetabellen nedenfor, eller en kjernefunksjon (som drift, styring, kommunikasjon, og så videre) blir én vanskelighetsgrad vanskeligere per treff._

---

</details>

##### Systemskadetabell

| Størrelse | Systemtreff | Tap per treff |
| :-- | :-: | :-- |
| Liten | 1 | 100% - Ødelagt |
| Medium | 2 | 1 grad eller 50% |
| Stor | 3 | 1 grad eller 33% |
| Enorm | 4 | 1 grad eller 25% |
| Kolossal | 5 | 1 grad eller 20% |
| Titanisk | 6 | 1 grad eller 16% |

<details>

<summary>* Errata fra nettsamfunnet</summary>

---

_De opprinnelige reglene og eksemplene er inkonsistente:_
- _"Systemer som er skadet, men ennå ikke ødelagt, lider et tap i funksjonalitet. Dette er lik forholdet mellom nåværende treff og total kapasitet."_
- _Dette gjør det vanskelig å ha en konsistent regel. For å løse disse problemene er verdiene og eksemplene endret for å samsvare._

---

</details>

##### Systemkomponentskadetabell

| 1d10 | System | Skadet resultat | Ødelagt resultat |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mengde eiendeler eller utstyr i lasterommet ødelegges. | All last ødelegges. |
| 2 | Kommunikasjon | Kommunikasjonstester får én ekstra vanskelighetsgrad hver gang de skades. | Kjøretøyet kan ikke lenger kommunisere eller lure fiendtlige sensorer. |
| 3 | Kontroller | Kjøring eller piloting får én ekstra vanskelighetsgrad hver gang de skades; umiddelbar kontrolltest kreves. | Kjøretøyet kan ikke lenger styres eller endre kurs. |
| 4 | Drivverk | Hastighet redusert med et beløp proporsjonalt med skaden. | Kjøretøyet stopper helt opp; fly krasjer. |
| 5 | Mannskap | Et antall passasjerer blir skadet. De berørte lider et alvorlig sår og må bestå en utholdenhetstest eller dø umiddelbart. | Kjøretøyets passasjerer dør. |
| 6 | Motor / Drivstoff | Hastighet redusert med et beløp proporsjonalt med skaden. Elektroniske systemer er én vanskelighetsgrad vanskeligere å bruke. | Kjøretøyet ødelegges i en katastrofal eksplosjon. |
| 7 | Sensorer | Sensor-, navigasjons- og våpenangrep får én ekstra vanskelighetsgrad hver gang de skades. | Kjøretøyet blir blindet. |
| 8 | Våpen | Et antall våpensystemer blir ubrukelige. | Kjøretøyet kan ikke lenger avfyre våpen. |
| 9-0 | Ingen | Ingen systemer truffet; kun strukturell skade. | N/A |

<details>

<summary>* Errata fra nettsamfunnet</summary>

---

##### Systemkomponentskadetabell (Motor/Drivstoff)

_Det opprinnelige resultatet var: "Maksimal hastighet halveres..." Dette motsier den generelle regelen om skadestraffer proporsjonalt med systemskade. Teksten er erstattet med samme oppføring som for Drivverk: "Hastighet redusert med et beløp proporsjonalt med skaden."_

---

</details>

---
### Hastighet

Siden fysikk knyttet til hastighet, akselerasjon, luftmotstand og treghet er komplekse spørsmål, er noen forenklinger nødvendige, og kjøretøy får derfor en abstrakt hastighetsvurdering. Hastighetskarakteristikken bør bare brukes til å grovt vurdere om ett kjøretøy kan ta igjen et annet.

Hastighetsvurderingen representerer kjøretøyets nominelle driftshastighet. I nødsituasjoner kan denne ytelsen økes med ett trinn, med fare for slitasje eller skade på motorene. Selv om den samme tabellen brukes for alle kjøretøytyper, bør sunn fornuft anvendes slik at bare kjøretøy i samme klasse sammenlignes.

Å øke et kjøretøys hastighet utover standardverdien er mulig ved en vellykket "Kjøre"- eller "Pilot"-test. Vanligvis er denne ekstra hastigheten bare bærekraftig i en kort periode – ikke mer enn 1d6 minutter før kjøretøyet må gå tilbake til standard hastighet eller risikere skade på kraftverket. En kritisk suksess tillater at perioden med høyere hastighet økes til 1d12 minutter.

En fører kan forsøke å presse kjøretøyets hastighet med 2 trinn, men dette krever en "herkulisk" test, og maksimal tid kjøretøyet kan opprettholde denne hastigheten er 1d3 minutter.

##### Hastighetstabell

| Hastighetsgrad | Maks hastighet for |
| :-- | :-: |
| Ponderous (Tung/treg) | Kolossal |
| Sluggish (Dov) | |
| Slow (Langsom) | Enorm |
| Mediocre (Middels) | |
| Gentle (Rolig) | Stor |
| Moderate (Moderat) | |
| Rapid (Rask) | Medium |
| Fast (Hurtig) | |
| Fleet (Lynrask) | Liten |

---
### Egenskaper (Traits)

Maksimalt antall egenskaper et kjøretøy kan ha avhenger av skrogstørrelse og type.

Hvert kjøretøy har en iboende egenskap: reisemodusen det primært ble designet for. Derfor har fly "Luftbåren", båter "Sjøbåren", og så videre. Denne iboende egenskapen teller ikke mot det tilgjengelige antallet. Men hvis et kjøretøy inkluderer en sekundær reisemodus – for eksempel en flyvende ubåt – må den aktuelle egenskapen tas som en av de tilgjengelige.

##### Tabell for egenskapstildeling

| Størrelse | Maks egenskaper |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Titanisk | 6 |

*(Resten av egenskapene følger de engelske definisjonene, som Airborne, All Terrain, etc.)*

---
## Våpen

Vanligvis er bare militære skrog designet for å imøtekomme våpen. Egenskapen "Våpenisert" (Weaponized) kan tas for sivile kjøretøy som har våpenbehov.

Maksimalt antall våpensystemer et kjøretøy kan støtte er lik 1/10 av dets strukturpoeng.

##### Våpen etter størrelsestabell

| Størrelse | Terrestrisk | Romfartøy |
| :-- | :-- | :-- |
| Liten | Lett våpen (f.eks. automatgevær) | Medium våpen (f.eks. maskingevær) |
| Medium | Medium våpen (f.eks. maskingevær) | Tårn/tungt våpen |
| Stor | Tårn/tungt våpen | Våpenbatteri |
| Enorm | Våpenbatteri | Avanserte våpen |
| Kolossal | Avanserte våpen | Spinalmonterte våpen (1) |
| Titanisk | I/A | Spinalmonterte våpen (opptil 3) |

---
## Håndtering og manøvrer

Unnvikende eller plutselige manøvrer krever en vellykket "Kjøre/Pilot"-test for å sikre at føreren beholder kontrollen over kjøretøyet. De fleste kjøretøy er bygget for å tåle sporadiske belastninger, men spillederen kan kreve en test med høyere vanskelighetsgrad for ambisiøse manøvrer. Svikt betyr at kontrollen går tapt: rull på tabellen for tap av kontroll.

*(Tabellen for tap av kontroll følger logikken: 01-25 Sving, 26-40 Skrens, 41-50 Alvorlig skrens, 51-60 Rulling, 61-70 Alvorlig rulling, 71-80 Vraket, 81-90 Eksplosjon, 91-98 Umiddelbar eksplosjon, 99-00 Katastrofalt krasj.)*