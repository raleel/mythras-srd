# Kjøretøy

Kjøretøy i _Mythras Imperative_ blir behandlet på en semi-abstrakt måte. I bunn og grunn er de bakgrunnsverktøy som brukes for å få karakterer fra A til B, med lite behov for detaljerte beskrivelser eller statistikk. Noen ganger vil imidlertid spilledere kreve detaljer om kjøretøy når det er nødvendig å representere dem i jakter eller kampsituasjoner.

Reglene i denne seksjonen tillater representasjon av de fleste typer kjøretøy, men på en abstrakt måte som er ment å gi fleksibilitet og forbedre historiefortellingen. Romskip og romfartøyer er litt annerledes, selv om de er basert på lignende prinsipper.

---
## Statistikk

Alle kjøretøy er beskrevet ut fra sin Struktur, Skrog, Hastighet, Systemer, Egenskaper og Skjold (hvis tilgjengelig i spillverdenen).

- **[Størrelse](0006_Vehicles.md?id=vehicle-size-table):** Alle kjøretøy har én av seks størrelseskategorier som bestemmer verdien eller omfanget av resten av egenskapene. På grunn av sin større iboende størrelse og det fiendtlige miljøet i rommet, har romskip sitt eget verdiområde.
- **[Skrog](0006_Vehicles.md?id=terrestrial-hulls):** Representerer panserpoeng.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Representerer et kjøretøys treffpoeng.
- **[Skjold](0006_Vehicles.md?id=shields):** I spillverdener med avansert energimanipuleringsteknologi kan skjold være til stede som beskytter kjøretøyet, men som kan svekkes under vedvarende beskytning.
- **[Systemer](0006_Vehicles.md?id=systems):** Representerer vitale komponenter i kjøretøyet, inkludert kraftverk, mannskapsseksjon, og så videre.
- **[Hastighet](0006_Vehicles.md?id=speed):** Hvert kjøretøy har en grunnleggende hastighetsvurdering.
- **[Egenskaper](0006_Vehicles.md?id=traits):** Et kjøretøy kan også ha én eller flere egenskaper. Egenskaper, i likhet med evnene tildelt skapninger i _Mythras Imperative_-reglene, eller kampstil-egenskaper, tilbyr en ekstra spillbeskrivelse og fordel som reflekterer kjøretøyets natur.
- **[Våpen](0006_Vehicles.md?id=weapons):** I likhet med egenskaper kan et kjøretøy være utstyrt med våpen slik spillverdenen tillater. Noen foreslåtte eksempler og verdier er detaljert nedenfor.


---
### Skrogstørrelse, Type og Struktur

Størrelsen og formålet til et kjøretøy påvirker tykkelsen på skroget og motstandsdyktigheten til den interne strukturen. En motorsykkel har for eksempel et minimalt skrog, bygget som den er for hastighet og smidighet. Et "Land Ironclad" (en massiv, belte- eller hjulgående pansret gigant, drevet av damp- eller dieselmotorer), som er et mye større kjøretøy designet for slagmarken, har et mye større skrog. De sammenlignbare størrelsene på skrog (og hvor mange treff fra våpen de typisk tåler), er oppsummert i tabellene for kjøretøystørrelse og skrog nedenfor.

Hver gang et kjøretøy lider skade, reduseres den innkommende skaden med skrogets verdi. Eventuell gjenværende skade trekkes fra kjøretøyets strukturpoeng og har en prosentvis sjanse, lik den gjennomtrengende skaden, for å påvirke et system. Hvis et kjøretøy noen gang blir redusert til null struktur, blir det enten fullstendig ødelagt eller så hardt skadet at det må skrotes.

##### Terrestriske Skrog

| Størrelse | Struktur | Sivil Skrogverdi | Militær Skrogverdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 1-20 | 1-3 | 4-6 | Motorsykkel, motorsykkel med sidevogn, kompaktbil, kano, kajakk, robåt |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, varebil, pickup, luksusbil, sportsbil, muskelbil, limousin, livbåt, hurtigbåt, hengglider, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastebil, strekk-limo, SUV, buss, personbil, privatfly, seilfly, lystbåt, stridsvogn, helikopter, ubåt |
| Enorm | 61-80 | 7-12 | 13-15 | Semitrailer, passasjerfly, jetfly, kystvaktskip, yacht |
| Kolossal | 81-100 | 10-15 | 16-18 | Tog, cruiseskip, marineskip |

##### Romskipsskrog

| Størrelse | Struktur | Sivil Skrogverdi | Militær Skrogverdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 10-50 | 4-9 | 10-12 | Enseters jager |
| Medium | 51-150 | 7-12 | 13-15 | Lett frakteskip, skyttelfartøy |
| Stor | 151-450 | 10-15 | 16-18 | Tungt frakteskip, krysser |
| Enorm | 451-1350 | 13-18 | 19-21 | Eskorte-fregatt, lett slagkrysser |
| Kolossal | 1351-4050 | 16-21 | 21-24 | Generasjonsskip, tung slagkrysser |
| Gigantisk | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planetknuser-slagstasjon |


---
### Skjold

Deflektorskjold gir et ekstra lag med beskyttelse for de kjøretøyene som kan montere dem. Skjold fungerer litt annerledes enn skroget på grunn av deres ablative natur. Hvis innkommende skade er lik eller mindre enn verdien på skjoldene, blir alt blokkert. Hvis skaden overstiger skjoldverdien, vil det overskytende redusere skjoldstyrken med det beløpet.

_For eksempel har en troppetransport en energiskjoldstyrke på 12 poeng. Hvis transporten ble truffet av en laser for 11 skade, trenger den ikke igjennom og har ingen ekstra effekt. På den annen side, hvis transporten ble truffet av en eksplosjon som påførte 15 skade, ville de overskytende tre poengene redusert skjoldstyrken til 9._

Når styrken til et deflektorskjold har sunket til null, kollapser det. Eventuell gjenværende skade overføres til skroget.

---
### Systemer

Hver gang et kjøretøy lider skade som trenger gjennom skroget, er det en sjanse, lik den gjennomtrengende skaden, for at et vitalt system har blitt påvirket.

_For eksempel påføres 10 skade på en hurtigbåt - et kjøretøy med 3 i skrog og 24 i struktur. Skroget teller som panser som reduserer skaden til 7. Dette fjernes fra de 24 strukturpoengene, og det er 7 % sjanse for å skade et av kjøretøyets systemer._

Skaden et system kan tåle er basert utelukkende på kjøretøyets størrelse. Dette modelleres ved antall treff et system kan tåle, snarere enn selve mengden skade. Et enkelt systemtreff på et lite kjøretøy vil umiddelbart ødelegge det systemet. Det kreves to treff for å ødelegge systemene til et mediumstort kjøretøy, tre for et stort kjøretøy, og så videre. Se [Systemskadetabellen](0006_Vehicles.md?id=system-damage-table) nedenfor.

Systemer som er skadet, men ennå ikke ødelagt, lider av et tap av funksjon proporsjonalt med antall treff – enten en prosentvis reduksjon eller en grad-straff på systemoppgaver. Den spesifikke effekten er basert på hva undersystemet kontrollerer, som detaljert i [Systemkomponent-skadetabellen](0006_Vehicles.md?id=system-component-damage-table) nedenfor. Avhengig av hvilket system som blir truffet, kan effektene være katastrofale.

_For eksempel, et Land Ironclad - et enormt kjøretøy med 5 systemtreff - som blir truffet to ganger i fremdriftssystemet, ville miste 40 % av kraften og redusere hastigheten sin fra "Sakte" to grader til "Ponderous". På samme måte vil et stort frakteskip - med 3 systemtreff - som tar to treff på motor/drivstoffsystemet, få to grads straff på hastighet så vel som på bruk av elektroniske systemer. Et tredje treff ville ødelegge motor/drivstoffsystemet og skipet med det._


<details>

<summary>* Fellesskaps-errata</summary>

---

#### Skade


_Den opprinnelige teksten her var opprinnelig plassert lenger unna. Plassert direkte etter systemseksjonen er det en unødvendig gjentakelse av det foregående avsnittet._

- _"Skade som overstiger skroget trenger gjennom kjøretøyet, skader strukturen og påvirker muligens ett eller flere systemer. Avhengig av størrelsen på kjøretøyet kan skaden være mindre eller katastrofal._
- _For eksempel kan et stort kjøretøy ta opptil to treff på et system som fremdrift. Det tredje treffet ødelegger funksjonelt fremdriften. Hver gang systemet tar et treff, mister det enten en prosentandel av sin funksjon som beskrevet i kolonnen for tap per treff i systemskadetabellen nedenfor, eller en kjernefunksjon (som fremdrift, styring, kommunikasjon, og så videre) blir én vanskelighetsgrad hardere per vedvarende treff."_

_Ovennevnte avsnitt er fjernet og en forkortet redigering tar dens plass som påpeker en annen eksempeleffekt for systemer._

---

</details>

##### Systemskadetabell

| Størrelse | Systemtreff | Tap per treff |
| :-- | :-: | :-- |
| Liten | 1 | 100 % - Ødelagt |
| Medium | 2 | 1 grad eller 50 % |
| Stor | 3 | 1 grad eller 33 % |
| Enorm | 4 | 1 grad eller 25 % |
| Kolossal | 5 | 1 grad eller 20 % |
| Gigantisk | 6 | 1 grad eller 16 % |


<details>

<summary>* Fellesskaps-errata</summary>

---

##### Systemskadetabell (Opprinnelig)

| Størrelse | Systemtreff | Tap per treff |
| :-- | :-: | :-- |
| Liten | 1 | 1 grad eller 50 % |
| Medium | 2 | 1 grad eller 33 % |
| Stor | 3 | 1 grad eller 25 % |
| Enorm | 4 | 1 grad eller 20 % |
| Kolossal | 5 | 1 grad eller 16 % |
| Gigantisk | 6 | 1 grad eller 10 % |

##### Kjøretøystørrelsestabell (fra [Skrogstørrelse, Type og Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Størrelse | Systemtreff |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

_De opprinnelige reglene og eksemplene er inkonsekvente:_
- _"Systemer som er skadet, men ennå ikke ødelagt, lider av et tap i funksjonalitet. Dette er lik forholdet mellom nåværende treff og total kapasitet. Dermed ville et enormt kjøretøy truffet to ganger i fremdriften miste 40 % av kraften (2 treff av maksimalt 5)"._ 
   - _Dette antyder at det enorme kjøretøyet vist med 5 systemtreff bør miste 20 % med hvert treff - men tabellen sier 16 %._
- _"For eksempel kan et stort kjøretøy ta opptil tre treff på et system som sin fremdrift. Det fjerde treffet ødelegger funksjonelt fremdriften."_ 
  - _"Dette antyder - det samme gjør tabellen - 25 % skade per systemtreff, men de store kjøretøyene kan bare ta 3 systemtreff ifølge samme tabell._
- _Selv om det ikke er inkonsekvent, var kjøretøystørrelsestabellen overflødig; den dukket opp igjen i fullstendig form (ved å legge til kolonnen for tap per treff) bare noen få linjer senere._

_Dette gjør det vanskelig å ha en konsistent regel. For å løse disse problemene er verdiene og eksemplene endret for å samsvare, og kjøretøystørrelsestabellen ble fjernet._

---

</details>


##### Systemkomponent-skadetabell

| 1d10 | System | Skadet resultat | Ødelagt resultat |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mengde eiendeler eller utstyr lagret i lasterommet, proporsjonalt med skaden, blir ødelagt. | All last er ødelagt. |
| 2 | Komms | Komms-kast lider én ekstra vanskelighetsgrad hver gang de blir skadet. | Kjøretøyet kan ikke lenger kommunisere eller lure fiendtlige sensorer. |
| 3 | Kontroller | Båt-, kjøre- eller pilotkast lider én ekstra vanskelighetsgrad hver gang de blir skadet; umiddelbart kontrollkast kreves. | Kjøretøyet kan ikke lenger styres eller endre kurs. |
| 4 | Fremdrift | Hastighet redusert med en mengde proporsjonal med skaden. | Kjøretøyet stopper helt; fly krasjer. |
| 5 | Mannskap | Et antall passasjerer proporsjonalt med skaden blir ofre. De berørte lider et stort sår og må lykkes med et UTH-kast eller bli drept umiddelbart. | Kjøretøyets passasjerer dør. |
| 6 | Motor / Drivstoff | Hastighet redusert med en mengde proporsjonal med skaden. Elektroniske systemer er én vanskelighetsgrad vanskeligere å bruke. | Kjøretøyet blir ødelagt i en katastrofal eksplosjon. |
| 7 | Sensorer | Sensor-, navigasjons- og våpenangrepskast lider én ekstra vanskelighetsgrad hver gang de blir skadet. | Kjøretøyet blir gjort blindt. |
| 8 | Våpen | Et antall våpensystemer proporsjonalt med skaden blir satt ut av drift. | Kjøretøyet kan ikke lenger avfyre våpen. |
| 9-0 | Ingen | Ingen systemer truffet; bare strukturskade. | N/A |

<details>

<summary>* Fellesskaps-errata</summary>

---

##### Systemkomponent-skadetabell (Motor/Drivstoff)

_Det opprinnelige resultatet var som følger: "Maksimal hastighet halveres..." Dette motsier den generelle regelen om skadestraff proporsjonalt med systemskade: 25 % skade = 25 % straff. Dessuten nevner ikke fullstendige regler i Mythras Companion denne halveringen av hastighet._

_Som et resultat er teksten erstattet med samme oppføring som for fremdriftssystemer: "Hastighet redusert med en mengde proporsjonal med skaden."_

---

</details>


---
### Hastighet

Siden fysikken knyttet til hastighet, akselerasjon, luftmotstand og treghet (for å nevne noen) er komplekse spørsmål, er det behov for noe forenkling, og kjøretøy får derfor en abstrakt hastighetsvurdering. Hastighetsegenskapen bør bare brukes til å grovt vurdere om ett kjøretøy kan kjøre forbi eller ta igjen et annet.

Hastighetsvurderingen representerer et kjøretøys nominelle driftsrate. I nødsituasjoner kan denne ytelsen økes med ett trinn, på bekostning av slitasje eller skade på motorene. Selv om den samme tabellen brukes for alle kjøretøytyper, bør sunn fornuft brukes slik at bare kjøretøy i samme klasse sammenlignes. For eksempel, hvis et romskip og en sportsbil begge har samme akselerasjonsrate som "Rask", bør det være åpenbart at romskipet er sammenlignbart raskere.

Å øke et kjøretøys hastighet utover standardverdien er mulig ved et vellykket kjørekast. Vanligvis er denne ekstra hastigheten bare bærekraftig i en kort periode – ikke mer enn 1d6 minutter før kjøretøyet må synke til standardhastighet eller risikere skade på kraftverket. Et kritisk kjørekast tillater at perioden med høyere hastighet økes til 1d12 minutter.

En fører kan forsøke å presse et kjøretøys hastighet med 2 trinn, men dette krever et heroisk kjørekast, og det maksimale kjøretøyet kan opprettholde denne hastigheten er 1d3 minutter: et kritisk suksess vil ikke forlenge varigheten av den økte hastigheten.

##### Hastighetsvurderingstabell

| Hastighetsvurdering | Maks hastighet for |
| :-- | :-: |
| Ponderous | Enorm |
| Sluggish | |
| Sakte | Stor |
| Mediocre | |
| Gentle | Medium |
| Moderate | |
| Rask | Liten |
| Fast | |
| Fleet | |


---
### Egenskaper

Maksimalt antall egenskaper et kjøretøy kan ha avhenger av skrogstørrelse og type.

Hvert kjøretøy har en iboende egenskap: reisemodusen det primært ble designet for. Derfor har fly iboende egenskapen "Luftbåren", båter "Sjøbåren", og så videre. Denne iboende egenskapen teller ikke med i det tilgjengelige antallet egenskaper. Men hvis et kjøretøy skulle inkludere en reisemodus nummer to — en flyvende ubåt for eksempel, så ville egenskapen "Luftbåren" måtte tas som én av de tilgjengelige egenskapene.

Noen egenskaper er kanskje ikke tilgjengelige, avhengig av spillverdenens teknologinivå; spilledere må ta egne vurderinger om hvilke egenskaper som kan brukes.

##### Tildelingstabell for kjøretøyegenskaper

| Størrelse | Maks egenskaper |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

#### Luftbåren

Kjøretøyet er i stand til atmosfærisk flyvning.

#### All Terreng

Denne egenskapen må brukes med bakkekjøretøy. Kjøretøyet kan krysse ugjestmildt, vanskelig og bratt terreng ved bruk av enten belter, avansert fjæring og drivsystemer, eller kraftige differensialer.

#### Graving

Kjøretøyet er designet for å grave og tunnellere gjennom bakken. Det kan oppnå en maksimal dybde lik skrogvurderingen x 5 meter.

#### Kamuflert

Kjøretøyet har enten kamuflasjemaling eller mimetiske sensorer som lar det gli inn i omgivelsene. Forsøk på å se kjøretøyet visuelt er én grad vanskeligere.

#### Last

Kjøretøyet er designet spesifikt for å frakte last fremfor passasjerer. Passasjerkabiner er holdt til et minimum, med resten av kjøretøyets brukbare plass viet til lasteoppbevaring med passende seksjoner, verktøy og til og med miljøkontroll (som fryseseksjoner for transport av ferskvarer). Når det er lastet, er kjøretøyets hastighet to trinn lavere enn skrogstørrelsen vanligvis ville tillate.

#### Transportør

Kjøretøyet er designet spesifikt for å bære mindre, lett bemannet eller muligens fjernstyrte kjøretøy av enten sivil eller militær natur. Ethvert kjøretøy som besitter denne egenskapen må være minst Enormt. Antallet småfartøy som bæres kan variere etter oppdragstype og formål, men kan være så få som 10 til så mange som kjøretøyets strukturvurdering.

#### Konstruksjon

Kjøretøyet er utstyrt for tungt anleggsarbeid. Alle kjøretøy med denne egenskapen har også egenskapen "All Terreng", men hastigheten er to trinn lavere enn skrogstørrelsen vanligvis ville tillate. Kjøretøyet er utstyrt med oppgavespesifikt verktøy som krangardiner, graveskovler, dumpervogner og så videre.

#### EMP-resistent

Kjøretøyet er skjermet mot elektromagnetiske pulsangrep.

#### Forbedret ytelse

Kjøretøyets hastighetsvurdering er ett trinn høyere enn maksimumet for størrelsen.

#### Katapultsete

I tilfelle nødsituasjoner slynger et katapultsete passasjerene flere hundre meter opp i luften, for så å utløse en fallskjerm for å tillate trygg landing. Fallskjerm er valgfritt. Ikke anbefalt for helikoptre (Kamov Ka-52 Alligator er et bemerkelsesverdig unntak).

#### FTL

Kun romfartøyer. Fartøyet er utstyrt med en motor for hastigheter raskere enn lyset (enten dette er hyperdrift, warp-drift, ormehullsgenerator eller lignende). FTL-driften har en egen hastighetsvurdering som i bunn og grunn måler raten et romskip kan krysse én parsec (3,26 lysår, eller 31 billioner kilometer eller 19 billioner miles), som følger:

##### FTL-hastighetsvurderingstabell

| Hastighetsvurdering | Faktor for å krysse 1 parsec |
| :-- | :-: |
| Ponderous | 10 |
| Sluggish | 8 |
| Sakte | 7 |
| Mediocre | 6 |
| Gentle | 5 |
| Moderate | 4 |
| Rask | 3 |
| Fast | 2 |
| Fleet | 1 |

Faktortiden er opp til spillederen å bestemme, avhengig av hvor avansert spillverdenens FTL-utvikling er. For eksempel kan grunnfaktoren være 1 dag, noe som betyr at et skip med en "Ponderous" FTL-drift bruker 10 dager på å fullføre reisen, mens et fartøy med en "Fleet" FTL-drift fullfører turen på 1 dag. Andre steder, hvor FTL-teknologi er betydelig mindre effektiv, kan faktortiden måles i måneder i stedet for dager.

Det antas at skipet har drivstoffreserver til enten å foreta en returreise eller et middel for å etterfylle drivstoff på destinasjonspunktet.

Det antas at enhver størrelse på romskip kan utstyres med FTL-drift, selv om dette igjen avhenger av spillverdenen.

FTL-drift kan ikke aktiveres innenfor 1,5 astronomiske enheter fra en stjerne (ca. 225 millioner kilometer, eller 270 millioner miles). Dette betyr at skip må bruke en underlys-drift for å bevege seg til omtrentlig avstand til Mars før de aktiverer FTL-systemet.

#### Bakkekjøretøy

Kjøretøyet er i stand til bakkereise.

#### Svev

Kjøretøyet svever over bakken ved bruk av enten en luftpute eller en antigravitasjons-repulsor.

#### Luksuriøs

Kjøretøyet er designet spesifikt for å frakte passasjerer på et visst nivå av luksus. Overskytende lasteplass er viet til luksuriøse passasjerfasiliteter, svømmebassenger, boblebad, ekstra mannskap for å imøtekomme passasjerenes ønsker, og så videre.

#### Skinner

Kjøretøyet er avhengig av et skinnesystem. Kjøretøy med denne egenskapen kan naturlig oppnå en hastighetsvurdering tre trinn høyere enn skrogstørrelsen vanligvis ville tillate, men er åpenbart begrenset til bevegelse på skinnesystemet alene.

#### Motstandsdyktig

Alle systemer tåler ett treff til mer enn vanlig bestemt av størrelse. Denne egenskapen kan stables — så "Motstandsdyktig 2" indikerer at systemer kan tåle 2 treff mer enn vanlig til en kostnad av to egenskaps-poeng.

#### Sjøbåren

Kjøretøyet er flytende på vann.

#### Romfartøy

Kjøretøyet er forseglet mot vakuum og skjermet mot kosmisk stråling og kan, avhengig av design, være i stand til å forlate og gå inn i atmosfæren igjen, samt opprettholde flyvning innenfor en atmosfære.

#### Stealth

Kun fly. Kjøretøyet er designet for å unngå oppdagelse av radar og andre langdistanse-sensorsystemer. Forsøk på å se kjøretøyet ved bruk av elektroniske sensorer er én grad vanskeligere.

#### Nedsenkbar

Kjøretøyet er i stand til å senke seg under overflaten av et hav til en operasjonell dybde lik skrogvurderingen x 10 meter. Kollapsdybden — det absolutte maksimumet ubåten kan nå uten å bli knust — er 1,5 ganger dens operasjonelle dybde.

#### Overlegen håndtering

Kjøretøyets håndtering er vurdert som enkel.

#### Overvåkningspakke

Kjøretøyet har en innebygd datamaskin, kommunikasjonsbasestasjon, mottaker for signaler fra lytteutstyr og apparater for å avskjære nærliggende smarttelefonsignaler innenfor 100 meter.#### Robust

Et sivilt kjøretøy med denne egenskapen henter sin Skrog fra den militære kolonnen og har automatisk maksimal Struktur. Et militært kjøretøy med denne egenskapen henter sitt Skrog og sin Struktur fra raden rett under.

#### Traktorstråle

Kun romskip. Skipet er utstyrt med en traktorstråle som kan fange og trekke til seg kjøretøy med en skrogvurdering på opptil to trinn lavere enn sin egen. Dermed kan et Enormt stjerneskip tiltrekke seg og holde et skrog på opptil Middels størrelse.

#### VTOL

Vertikal avgang/landing (Vertical Takeoff/Landing). Denne egenskapen er iboende for helikoptre og lignende kjøretøy som bruker en kombinasjon av rotorer for å skape løft. Når den brukes på fly med faste vinger, indikerer det bruk av faste eller justerbare thrustere for å kontrollere holdning, stigning og nedstigning i luften.

#### Vannbåren

Kjøretøyet fremdriver seg selv ved hjelp av leddede ben. Gående kjøretøy er begrenset til hastigheten Rolig, uansett størrelse. Gående kjøretøy kan imidlertid bygges i høyder som ville vært ustabile for kjøretøy utstyrt med andre fremkomstmidler.

Dette kjøretøyet er i stand til å bevege seg under vann.

#### Bevæpnet

Kjøretøyet har blitt tilpasset for å romme våpen. Våpensystemer diskuteres nedenfor i [Våpen](0006_Vehicles.md?id=weapons)-delen.


---
## Våpen

Vanligvis er det bare militære skrog som er designet for å romme våpen (hardpunkter, ammunisjonslagring, kontrollsystemer). Egenskapen 'Bevæpnet' kan velges for sivile kjøretøy som kan ha behov for våpen.

Maksimalt antall våpensystemer et kjøretøy kan støtte er lik 1/10 av dets Strukturpoeng (så et kjøretøy med 40 Struktur kan støtte 4 våpensystemer, hvis det er et militært kjøretøy eller et Bevæpnet sivilt kjøretøy).

Våpensystemer avhenger av kjøretøyets størrelse. Maksimal type våpensystem for forskjellige størrelser er vist i tabellene nedenfor.


##### Tabell over våpen etter størrelse 

| Størrelse | Terrestrisk | Romskip |
| :-- | :-- | :-- |
| Liten | Lett våpen (f.eks. automatgevær) | Middels våpen (f.eks. maskingevær, rakettkaster) |
| Middels | Middels våpen (f.eks. maskingevær, rakettkaster) | Tårnbasert/tungt våpen (f.eks. tunge koblede maskingevær, mini-guns) |
| Stor | Tårnbasert/tungt våpen (f.eks. tunge koblede maskingevær, mini-guns) | Våpenbatteri (f.eks. feltartilleri) |
| Enorm | Våpenbatteri (f.eks. feltartilleri) | Avanserte våpen (f.eks. rakettsystemer) |
| Gigantisk | Avanserte våpen (f.eks. rakettsystemer) | Ryggmonterte våpen (kun ett) |
| Kolossal | NA | Ryggmonterte våpen (opptil 3) |

##### Eksempel på våpenstatistikk 
 
| Våpen | Skade | Rekkevidde | Skuddtakt | Ammo/Lading |
| :-- | :-: | :-: | :-: | :-: |
| 50-tommers kanon | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling-gevær | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rakett | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Middels missil/torpedo | 6d10 | Maks rekkevidde på 200km | 1 | 1/5 |
| Stort/kryssermissil | 6d10+10 | Maks rekkevidde på 1000km | 1 | 1/10 |
| Laser/plasmakanon | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Tung laser/plasmakanon | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilleribatteri | 5d6+6 | Maks rekkevidde på 50km | 1 | 1/5 |
| Ryggmontert batteri | 10d6+6 | Maks rekkevidde på 20000km | 1 | 1/10 |

_Rekkevidder er oppgitt i meter og kilometer._

_Skuddtakter er for enkeltskudd, halvautomatisk og helautomatisk._

_Ammo er skytekapasitet før omlading er nødvendig. Lading er omladingstid i kamprunder, forutsatt at et fullt mannskap er tilgjengelig._

---
## Håndtering og manøvrer

Unnvikende eller plutselige manøvrer krever et vellykket Kjøre/Pilot-kast for å sikre at føreren eller piloten beholder kontrollen over kjøretøyet. De fleste kjøretøy er designet og bygget for å tåle sporadiske påkjenninger, men spillmesteren kan avgjøre at en bestemt manøver krever et kast med en høyere vanskelighetsgrad, avhengig av hvor ambisiøs den er. Svikt betyr at kontrollen over kjøretøyet går tapt: rull på tabellen for tap av kontroll.

Merk at tabellen for tap av kontroll kun gjelder terrestriske kjøretøy. Lignende effekter kan brukes på luft- og romkjøretøy, men spillmestere må justere resonnementet for den spesifikke effekten. For eksempel kan et fly, i stedet for å skrense, gå inn i en spinn.

Et kjøretøys iboende håndtering kan også ha en ytterligere innvirkning på Kjøre-kastet. Håndtering er enten Enkel, Standard, Vanskelig, Formidabel eller Herkulesaktig, og bestemmer utgangspunktet for Kjøre-kastet ved utførelse av en manøver. Vanskelighetsgraden for manøveren blir deretter lagt til håndteringen for å bestemme den endelige vanskelighetsgraden.

For eksempel har en motorsykkel med høy ytelse innebygde gyrostabilisatorer som gir den en Håndtering på Enkel. Føreren ønsker å utføre en 180-graders skrens-sving for å unnslippe en forfølger, en manøver som spillmesteren vurderer til å være én ekstra vanskelighetsgrad. Føreren må derfor utføre sitt Kjøre-kast som Standard i stedet for Enkel. Hvis han hadde forsøkt den samme manøveren på en ikke-stabilisert motorsykkel, ville Kjøre-kastet vært Vanskelig.

Overlegen håndtering er en egenskap. Hvis et kjøretøy ikke har denne egenskapen som en del av beskrivelsen, er standarden Standard håndtering for ethvert kjøretøy av størrelse Stor og under. Enorme og Gigantiske kjøretøy har iboende egenskapen Håndtering på henholdsvis Formidabel og Herkulesaktig, og spillmesteren står fritt til å avgjøre at visse manøvrer rett og slett er umulige å oppnå på grunn av kjøretøyets størrelse.

##### Tabell for tap av kontroll 

| 1d100 | Resultat |
| :-: | :-- |
| 01-25 | Sving. Tapet av kontroll er midlertidig. Kjøretøyet senker hastigheten med 1 trinn i 5 sekunder. |
| 26-40 | Skrens. Føreren må kjempe for å holde kjøretøyet under kontroll. Kjøretøyet senker hastigheten med 2 trinn i 10 sekunder. |
| 41-50 | Kraftig skrens. Kjøretøyet ender opp med å stå i feil retning og står stille i 15 sekunder. |
| 51-60 | Rulling. Kjøretøyet skrenser og ruller, og pådrar seg 3d10 skade på sin Struktur. Passasjerer må foreta vellykkede UTH-kast eller pådra seg 1d10 skade på 1d3 treffsoner. |
| 61-70 | Kraftig rulling. Som ovenfor, men kjøretøyet pådrar seg 3d10+10 skade og passasjerer mottar 1d10 skade selv om UTH-kastet lykkes, og 2d10 hvis det feiler. |
| 71-80 | Totalskade. Som ovenfor, men kjøretøyet reduseres til 0 Struktur. Passasjerer pådrar seg samme skade som ved Kraftig rulling. |
| 81-90 | Eksplosjon. Som ovenfor, men kjøretøyets drivstoffsystem antennes og eksploderer innen 1d20+10 sekunder. Hvis de ikke kommer seg unna, lider passasjerene ytterligere 1d6 forbrenningsskade på 1d6 soner. |
| 91-98 | Umiddelbar eksplosjon. Som ovenfor, men eksplosjonen er umiddelbar. |
| 99-00 | Katastrofalt krasj. Passasjerer må lykkes med et UTH-kast eller bli drept umiddelbart. Skade som for Totalskade pådras uansett. |


---
## Eksempler på kjøretøy

---

### Landkjøretøy

#### Avskjærer (Interceptor)

En oppgradert luksusbil, sportsbil eller lignende; denne bilen er bygget for å gå fort og gi like mye som den tåler i kamp. Dette er typen kjøretøy folk tenker på når noen sier "spionbil".

| Avskjærer | |
| :- | :- |
| **Størrelse / Type** | Middels militær |
| **Skrog** | 6 |
| **Struktur** | 40 |
| **Systemer** | 2 |
| **Hastighet** | Rask |
| **Håndtering** | Enkel |
| **Egenskaper** | [Katapultsete](0006_Vehicles.md?id=ejector-seat), [Forbedret ytelse](0006_Vehicles.md?id=enhanced-performance), [Overlegen håndtering](0006_Vehicles.md?id=superior-handling), [Overvåkningspakke](0006_Vehicles.md?id=surveillance-suite), [Bevæpnet](0006_Vehicles.md?id=weaponized) |
| **Våpen** | Oljesprut-dispenser, Røykdispenser, Tvillingkoblede middels maskingevær (2d6+3) |

<br>

---

#### Forfølgelsesmotorsykkel

En lett, rask motorsykkel for raske forfølgelser; Forfølgelsesmotorsykkelen bærer på en overraskelse – enten et par koblede maskingevær eller to raketter.

| Forfølgelsesmotorsykkel | |
| :- | :- |
| **Størrelse / Type** | Liten sivil |
| **Skrog** | 2 |
| **Struktur** | 12 |
| **Systemer** | 1 |
| **Hastighet** | Rask |
| **Håndtering** | Enkel |
| **Egenskaper** | [Overlegen håndtering](0006_Vehicles.md?id=superior-handling), [Bevæpnet](0006_Vehicles.md?id=weaponized) |
| **Våpen** | To raketter (4d6) eller tvillingkoblede lette maskingevær (2d6) |

<br>

---

#### Sedan

En standard 4-dørs sedan med nok plass til å sitte komfortabelt med en fører og tre passasjerer. Ofrer lasteplass for å innlemme en overvåkningspakke.

| Sedan | |
| :- | :- |
| **Størrelse / Type** | Middels sivil |
| **Skrog** | 4 |
| **Struktur** | 25 |
| **Systemer** | 2 |
| **Hastighet** | Hurtig |
| **Håndtering** | Standard |
| **Egenskaper** | [Diskret](0006_Vehicles.md?id=unobtrusive), [Overvåkningspakke](0006_Vehicles.md?id=surveillance-suite) |
| **Våpen** | Ingen |

<br>

---

#### Nedsenkbar bil

En to-personers bil som kan bytte til vannbåren eller nedsenkbar modus for å reise på eller under vann. Kommer med en frontmontert torpedo og en toppmontert overflate-til-luft-missil.

| Nedsenkbar bil | |
| :- | :- |
| **Størrelse / Type** | Middels sivil |
| **Skrog** | 6 |
| **Struktur** | 25 |
| **Systemer** | 2 |
| **Hastighet** | Rask |
| **Håndtering** | Standard |
| **Egenskaper** | [Forbedret ytelse](0006_Vehicles.md?id=enhanced-performance), [Nedsenkbar](0006_Vehicles.md?id=submersible), [Vannbåren](0006_Vehicles.md?id=waterborne), [Bevæpnet](0006_Vehicles.md?id=weaponized) |
| **Våpen** | Rakett (5d6), Torpedo (4d10) |

<br>

---

#### Overvåkningsvarebil

En vanlig, umerket varebil som huser et team med agenter og en pakke med lyd- og bildeopptaksutstyr.

| Overvåkningsvarebil | |
| :- | :- |
| **Størrelse / Type** | Stor sivil |
| **Skrog** | 9 |
| **Struktur** | 60 |
| **Systemer** | 3 |
| **Hastighet** | Rolig |
| **Håndtering** | Standard |
| **Egenskaper** | [Overvåkningspakke](0006_Vehicles.md?id=surveillance-suite), [Robust](0006_Vehicles.md?id=tough) |
| **Våpen** | Ingen |

<br>

---

#### Taktisk støttekjøretøy

En pickup eller jeep med plass til et tomannsmannskap i førerhuset og en skytter som står på planet og betjener et svingmontert middels maskingevær.

| Taktisk støttekjøretøy | |
| :- | :- |
| **Størrelse / Type** | Middels sivil |
| **Skrog** | 6 |
| **Struktur** | 30 |
| **Systemer** | 2 |
| **Hastighet** | Hurtig |
| **Håndtering** | Standard |
| **Egenskaper** | [Alt terreng](0006_Vehicles.md?id=all-terrain), [Bevæpnet](0006_Vehicles.md?id=weaponized) |
| **Våpen** | Montert middels maskingevær (2d6) |


<br>

---

### Fartøy

#### Hurtigbåt

En typisk hurtigbåt, bevæpnet med en hekkmontert minedispenser.

| Hurtigbåt | |
| :- | :- |
| **Størrelse / Type** | Middels sivil |
| **Skrog** | 3 |
| **Struktur** | 24 |
| **Systemer** | 2 |
| **Hastighet** | Rask |
| **Håndtering** | Standard |
| **Egenskaper** | [Forbedret ytelse](0006_Vehicles.md?id=enhanced-performance), [Vannbåren](0006_Vehicles.md?id=waterborne), [Bevæpnet](0006_Vehicles.md?id=weaponized) |
| **Våpen** | Minedispenser (5d6) |

<br>

#### Yacht

Typen luksusyacht en oligark kan eie. Sannsynligvis utstyrt med en overvåkningspakke for å beskytte mot fiender som prøver å finne på noe galt.

| Yacht | |
| :- | :- |
| **Størrelse / Type** | Enorm sivil |
| **Skrog** | 10 |
| **Struktur** | 75 |
| **Systemer** | 4 |
| **Hastighet** | Sakte |
| **Håndtering** | Formidabel |
| **Egenskaper** | [Luksuriøs](0006_Vehicles.md?id=luxurious), [Overvåkningspakke](0006_Vehicles.md?id=surveillance-suite), [Vannbåren](0006_Vehicles.md?id=waterborne) |
| **Våpen** | Ingen |


<br>

---

### Fly/Romskip

#### Dirigibel (Sivilt luftskip)

I likhet med Hindenburg er denne klassen av transkontinentale dirigibler (og andre i samme klasse) 245 meter lang og krever et mannskap på 40 til 61. Den kan vanligvis frakte 50 til 72 passasjerer i luksuriøse omgivelser.

| Dirigibel | |
| :- | :- |
| **Størrelse / Type** | Gigantisk sivil |
| **Skrog** | 10 |
| **Struktur** | 85 |
| **Systemer** | 5 |
| **Hastighet** | Tungvint |
| **Håndtering** | Herkulesaktig |
| **Egenskaper** | [Luftbåren](0006_Vehicles.md?id=airborne), [Luksuriøs](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjold** | Ingen |
| **Våpen** | Ingen |

<br>

---

#### Angrepshelikopter

Det tradisjonelle angrepshelikopteret bruker sin avanserte overvåkningsteknologi for å avskjære telefon- og trådløse internetsignaler, og spore individer og kjøretøy selv i mørket, via FLIR. Forsøk på å unnvike sporingen gjennom sniking er Formidabelt.

| Angrepshelikopter | |
| :- | :- |
| **Størrelse / Type** | Stor militær |
| **Skrog** | 11 |
| **Struktur** | 50 |
| **Systemer** | 3 |
| **Hastighet** | Moderat |
| **Håndtering** | Enkel |
| **Egenskaper** | [Luftbåren](0006_Vehicles.md?id=airborne), [Forbedret ytelse](0006_Vehicles.md?id=enhanced-performance), [Sniking](0006_Vehicles.md?id=stealth), [Overlegen håndtering](0006_Vehicles.md?id=superior-handling), [Overvåkningspakke](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjold** | Ingen |
| **Våpen** | 1 Gatling-gevær (3d6), 4 raketter (5d6) |

<br>

---

#### Flerfunksjonsjager

Denne toseters landbaserte jageren (lignende type som De Havilland Mosquito) er kjent for sin ytelse og allsidighet. Bomberommet kan bære enten to 250 lb. bomber (behandles som middels missiler med rekkevidde 0) eller en enkelt torpedo.

| Flerfunksjonsjager | |
| :- | :- |
| **Størrelse / Type** | Stor militær |
| **Skrog** | 10 |
| **Struktur** | 45 |
| **Systemer** | 3 |
| **Hastighet** | Moderat |
| **Håndtering** | Standard |
| **Egenskaper** | [Luftbåren](0006_Vehicles.md?id=airborne), [Forbedret ytelse](0006_Vehicles.md?id=enhanced-performance) |
| **Skjold** | Ingen |
| **Våpen** | 4 nese-monterte Gatling-gevær (4d6+3), 1 bomberom (6d10 - se beskrivelse) |

<br>

---

#### Interstellart frakteskip (Lett høyteknologisk transportskip)

Dette lette transportskipet krever et minimumsmannskap på kun to, med plass til opptil fire ekstra passasjerer. Standardversjonen er notert her, men mange eiere vil bruke sine egne "spesialmodifikasjoner" som skjult lasterom, forbedret ytelse, overlegen håndtering, EMP-motstand, sniking, og så videre.

| Interstellart frakteskip | |
| :- | :- |
| **Størrelse / Type** | Middels sivilt romskip |
| **Skrog** | 10 |
| **Struktur** | 80 |
| **Systemer** | 2 |
| **Hastighet** | Hurtig (Parsekfaktor 3) |
| **Håndtering** | Standard |
| **Egenskaper** | [Luftbåren](0006_Vehicles.md?id=airborne), [Last](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Romskip](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjold** | 8 |
| **Våpen** | 2x Quad-monterte laserkanontårn (5d6) |


<br>

---

#### Generell kontaktenhet (Ultra-høyteknologisk romskip)

Dette ekstremt høyteknologiske stjerneskipet er den fysiske representasjonen av et svært avansert kunstig sinn, som tar form av en to kilometer lang serie med feltkoblede moduler. Modulene har individuelle formål og inkluderer habitater, konstruksjonsfasiliteter, lasteområder, matforedling, fritidskomplekser, hangarbukter og til og med noen hemmelige enheter skipets intelligens sjelden, om noensinne, diskuterer. Det trenger ikke noe menneskelig mannskap, men kan enkelt støtte en passasjerpopulasjon på opptil 100 000. Mange passasjerer blir født og dør ombord på kontaktenheten: mange er forbigående, og kommer og går som de vil.

| Generell kontaktenhet | |
| :- | :- |
| **Størrelse / Type** | Kolossalt sivilt romskip |
| **Skrog** | 20 |
| **Struktur** | 10 000 |
| **Systemer** | 6 |
| **Hastighet** | Moderat (Parsekfaktor 4. På dette teknologinivået tilsvarer en faktor 1 time) |
| **Håndtering** | Formidabel |
| **Egenskaper** | [Luftbåren](0006_Vehicles.md?id=airborne), [Last](0006_Vehicles.md?id=cargo), [Hangarskip](0006_Vehicles.md?id=carrier), [Konstruksjon](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuriøs](0006_Vehicles.md?id=luxurious), [Romskip](0006_Vehicles.md?id=spacecraft), [Overlegen håndtering](0006_Vehicles.md?id=superior-handling), [Traktorstråle](0006_Vehicles.md?id=tractor-beam) |
| **Skjold** | 30 |
| **Våpen** | Ingen det bryr seg med å diskutere |

<br>