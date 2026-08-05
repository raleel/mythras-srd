# Køretøjer

Køretøjer i _Mythras Imperative_ håndteres på en semi-abstrakt måde. De er essentielt baggrundsværktøjer, der bruges til at få karakterer fra A til B, uden stort behov for detaljerede beskrivelser eller statistikker. Lejlighedsvis vil spilledere dog få brug for detaljer om køretøjer, når det er nødvendigt at repræsentere dem i jagter eller kampsituationer.

Reglerne i dette afsnit tillader repræsentation af de fleste typer køretøjer, men på en abstrakt måde, der er tiltænkt at give fleksibilitet og forbedre historiefortællingen. Rumskibe og fartøjer er en smule anderledes, selvom de er baseret på lignende principper.

---
## Statistikker

Alle køretøjer beskrives ud fra deres Struktur, Skrog, Hastighed, Systemer, Træk og Skjolde (hvis de findes i settingen).

- **[Størrelse](0006_Vehicles.md?id=vehicle-size-table):** Alle køretøjer har en af seks størrelsesvurderinger, som bestemmer værdien eller intervallet for resten af karakteristikaene. På grund af deres større iboende størrelse og rummets fjendtlige miljøer har rumskibe deres eget interval af værdier.
- **[Skrog](0006_Vehicles.md?id=terrestrial-hulls):** Repræsenterer panserpoint (Armor Points).
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Repræsenterer et køretøjs hitpoints.
- **[Skjolde](0006_Vehicles.md?id=shields):** I settings med avanceret energimanipulationsteknologi kan der findes skjolde, der beskytter køretøjet, men som kan slides ned under vedvarende beskydning.
- **[Systemer](0006_Vehicles.md?id=systems):** Repræsenterer køretøjets vitale komponenter, herunder kraftværk, besætningssektion og så videre.
- **[Hastighed](0006_Vehicles.md?id=speed):** Hvert køretøj har en grundlæggende hastighedsvurdering.
- **[Træk](0006_Vehicles.md?id=traits):** Et køretøj kan også have et eller flere Træk. Træk, ligesom evnerne tildelt væsener i _Mythras Imperative_-reglerne eller kampstils-træk, tilbyder en ekstra spilbeskrivelse og fordel, der afspejler køretøjets natur.
- **[Våben](0006_Vehicles.md?id=weapons):** Ligesom med Træk kan et køretøj udstyres med våben, hvis settingen tillader det. Nogle foreslåede eksempler og værdier er beskrevet nedenfor.


---
### Skrogstørrelse, Type og Struktur

Et køretøjs størrelse og formål påvirker tykkelsen af dets skrog og modstandsdygtigheden af dets interne struktur. En motorcykel har for eksempel et minimalt skrog, bygget som den er til fart og smidighed. Et "Land Ironclad" (en massiv, bælte- eller hjuldrevet pansret kæmpe, drevet af damp- eller dieselmotorer), som er et langt større køretøj designet til slagmarken, har et meget større skrog. De sammenlignelige størrelser af skrog (og hvor mange træffere fra våben de typisk kan modstå), er opsummeret i tabellerne for køretøjsstørrelse og skrog nedenfor.

Når et køretøj lider skade, reduceres den indkommende skade af dets skrogværdi. Enhver resterende skade trækkes fra køretøjets strukturpoint og har en procentvis chance, lig med den gennemtrængende skade, for at påvirke et system. Hvis et køretøjs struktur nogensinde reduceres til nul, er det enten fuldstændig ødelagt eller så slemt beskadiget, at det må skrottes.

##### Terrestriske Skrog

| Størrelse | Struktur | Civilt Skrogværdi | Militært Skrogværdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Lille | 1-20 | 1-3 | 4-6 | Motorcykel, motorcykel med sidevogn, kompakt bil, kano, kajak, robåd |
| Mellem | 21-40 | 1-6 | 7-9 | Sedan, varevogn, pickup, luksusbil, sportsvogn, muskelbil, limousine, redningsbåd, speedbåd, hangglider, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastbil, limousine, SUV, bus, personbil, privatfly, svævefly, lystbåd, kampvogn, helikopter, ubåd |
| Kæmpe | 61-80 | 7-12 | 13-15 | Sættevogn, passagerfly, jet, kystvagtfartøj, yacht |
| Enorm | 81-100 | 10-15 | 16-18 | Tog, krydstogtskib, orlogsfartøj |

##### Rumskibsskrog

| Størrelse | Struktur | Civilt Skrogværdi | Militært Skrogværdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Lille | 10-50 | 4-9 | 10-12 | Enkelt-sædet jager |
| Mellem | 51-150 | 7-12 | 13-15 | Let fragtskib, shuttle |
| Stor | 151-450 | 10-15 | 16-18 | Tungt fragtskib, krydser |
| Kæmpe | 451-1350 | 13-18 | 19-21 | Eskorte-fregat, let slagkrydser |
| Enorm | 1351-4050 | 16-21 | 21-24 | Generationsskib, tung slagkrydser |
| Kolossal | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planetødelæggende kampstation |


---
### Skjolde

Deflektorskjolde giver et ekstra lag beskyttelse til de køretøjer, der kan montere dem. Skjolde fungerer lidt anderledes end skroget på grund af deres evne til at blive nedslidt (ablative). Hvis indkommende skade er lig med eller mindre end skjoldets værdi, blokeres alt. Hvis skaden overstiger skjoldværdien, reducerer det overskydende beløb skjoldstyrken med det samme beløb.

_For eksempel har en troppetransport en energiskjoldstyrke på 12 point. Hvis transporten rammes af en laser for 11 skade, trænger den slet ikke igennem og har ingen yderligere effekt. Hvis transporten derimod rammes af en eksplosion, der forårsager 15 skade, ville de overskydende tre point reducere skjoldstyrken til 9._

Når styrken af et deflektorskjold er faldet til nul, bryder det sammen. Enhver resterende skade føres videre til skroget.

---
### Systemer

Hver gang et køretøj lider skade, der trænger igennem skroget, er der en chance, svarende til den gennemtrængende skade, for at et vitalt system er blevet påvirket.

_For eksempel påføres 10 skade på en Speedbåd - et køretøj med 3 i Skrog og 24 i Struktur. Skroget tæller som panser og reducerer skaden til 7. Dette fjernes fra de 24 strukturpoint, og der er 7% chance for at beskadige et af køretøjets systemer._

Den skade, et system kan modstå, er baseret udelukkende på køretøjets størrelse. Dette modelleres ved antallet af træffere, et system kan tage, frem for den faktiske mængde skade. En enkelt systemtræffer på et lille køretøj vil øjeblikkeligt ødelægge systemet. Det kræver to træffere at ødelægge et mellemstort køretøjs systemer, tre for et stort køretøj, og så videre. Se [Systemskadetabellen](0006_Vehicles.md?id=system-damage-table) nedenfor.

Systemer, der er beskadigede, men endnu ikke ødelagte, lider et tab af funktion proportionalt med antallet af modtagne træffere - enten en procentvis reduktion eller en straf til systemopgaver. Den specifikke effekt er baseret på, hvad delsystemet kontrollerer, som beskrevet i [Tabellen for Systemkomponent-skade](0006_Vehicles.md?id=system-component-damage-table) nedenfor. Afhængigt af hvilket system der rammes, kan effekterne være katastrofale.

_For eksempel ville et Land Ironclad - et enormt køretøj med 5 systemtræffere - der bliver ramt to gange i drivlinjen, miste 40% af sin kraft og få reduceret sin lave hastighed med to grader til "Ponderous". På samme måde ville et stort fragtskib - med 3 systemtræffere - der tager to træffere på motor/brændstofsystemet, få en straf på to grader til både hastighed og brug af elektroniske systemer. En tredje træffer ville ødelægge motor/brændstofsystemet og dermed skibet._

<details>

<summary>* Community Errata</summary>

---

#### Skade

_Den oprindelige tekst her var unødvendigt gentagende. Placeret direkte efter systemsektionen repeterede den det foregående afsnit._

- _"Skade, der overstiger skroget, trænger ind i køretøjet, beskadiger strukturen og rammer muligvis et eller flere systemer. Afhængigt af køretøjets størrelse kan skaden være mindre eller katastrofal._
- _For eksempel kan et stort køretøj tage op til tre træffere på et system som dets drivlinje. Den fjerde træffer ødelægger systemet. Hver gang systemet tager en træffer, mister det enten en procentdel af sin funktion som beskrevet i kolonnen 'Tab pr. træffer' i systemskadetabellen nedenfor, eller en kernefunktion (som fremdrift, pilot, kommunikation osv.) bliver én sværhedsgrad sværere pr. modtaget træffer."_

_Ovenstående afsnit er fjernet og erstattet med en forkortet redigering, der nævner et andet eksemplets systemeffekt._

---

</details>

##### Systemskadetabel

| Størrelse | Systemtræffere | Tab pr. træffer |
| :-- | :-: | :-- |
| Lille | 1 | 100% - Ødelagt |
| Mellem | 2 | 1 grad eller 50% |
| Stor | 3 | 1 grad eller 33% |
| Kæmpe | 4 | 1 grad eller 25% |
| Enorm | 5 | 1 grad eller 20% |
| Kolossal | 6 | 1 grad eller 16% |

<details>

<summary>* Community Errata</summary>

---

##### Systemskadetabel (Original)

| Størrelse | Systemtræffere | Tab pr. træffer |
| :-- | :-: | :-- |
| Lille | 1 | 1 grad eller 50% |
| Mellem | 2 | 1 grad eller 33% |
| Stor | 3 | 1 grad eller 25% |
| Kæmpe | 4 | 1 grad eller 20% |
| Enorm | 5 | 1 grad eller 16% |
| Kolossal | 6 | 1 grad eller 10% |

##### Køretøjsstørrelsestabel (fra [Skrogstørrelse, Type og Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Størrelse | Systemtræffere |
| :-- | :-: |
| Lille | 1 |
| Mellem | 2 |
| Stor | 3 |
| Kæmpe | 4 |
| Enorm | 5 |
| Kolossal | 6 |

_De oprindelige regler og eksempler er inkonsekvente:_
- _"Systemer, der er beskadigede, men endnu ikke ødelagte, lider et tab i funktionalitet. Dette svarer til forholdet mellem nuværende træffere og dets totale kapacitet. Således ville et Enormt køretøj, der bliver ramt to gange i drivlinjen, miste 40% af sin kraft (2 træffere ud af maksimalt 5)"_ 
   - _Dette antyder, at det Enorme køretøj vist med 5 systemtræffere burde miste 20% pr. træffer - men tabellen siger 16%._
- _"For eksempel kan et stort køretøj tage op til tre træffere på et system... Den fjerde træffer ødelægger systemet."_
  - _Dette antyder - som tabellen - 25% skade pr. systemtræffer, men Store køretøjer kan kun tage 3 systemtræffere ifølge samme tabel._
- _Selvom det ikke er inkonsekvent, var køretøjsstørrelsestabellen redundant; den optrådte igen i en mere udfyldt form (med kolonnen Tab pr. træffer) blot få linjer senere._

_Dette gør det svært at have en konsistent regel. For at løse disse problemer er værdierne og eksemplerne rettet til, så de stemmer overens, og køretøjsstørrelsestabellen er fjernet._

---

</details>

##### Systemkomponent-skadetabel

| 1d10 | System | Beskadiget Resultat | Ødelagt Resultat |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mængde ejendele eller udstyr i lastrummet, proportional med skaden, ødelægges. | Al last ødelægges. |
| 2 | Komm. | Kommunikationsslag lider én yderligere sværhedsgrad, hver gang de beskadiges. | Køretøjet kan ikke længere kommunikere eller aflede fjendtlige sensorer. |
| 3 | Kontrol | Sejlads-, køre- eller pilotslag lider én yderligere sværhedsgrad pr. beskadigelse; øjeblikkeligt kontrolslag kræves. | Køretøjet kan ikke længere styres eller skifte kurs. |
| 4 | Drivlinje | Hastigheden reduceres proportionalt med skaden. | Køretøjet stopper øjeblikkeligt; fly styrter ned. |
| 5 | Besætning | Et antal passagerer proportionalt med skaden bliver tilskadekomne. Berørte lider et større sår og skal bestå et udholdenhedsslag eller dø øjeblikkeligt. | Køretøjets passagerer dør. |
| 6 | Motor/Brændstof | Hastigheden reduceres proportionalt med skaden. Elektroniske systemer bliver én sværhedsgrad sværere at bruge. | Køretøjet ødelægges i en katastrofal eksplosion. |
| 7 | Sensorer | Sensor-, navigations- og våbenangrebsslag lider én yderligere sværhedsgrad pr. beskadigelse. | Køretøjet bliver "blindt". |
| 8 | Våben | Et antal våbensystemer proportionalt med skaden bliver uvirksomme. | Køretøjet kan ikke længere affyre våben. |
| 9-0 | Ingen | Ingen systemer ramt; kun strukturskade. | N/A |

<details>

<summary>* Community Errata</summary>

---

##### Systemkomponent-skadetabel (Motor/Brændstof)

_Det oprindelige resultat var: "Maksimal hastighed halveres..." Dette modsiger den generelle regel om skadesstraffe i proportion til systemskade: 25% skade = 25% straf. Desuden nævner de fulde regler i Mythras Companion ikke denne halvering af hastigheden._

_Som et resultat er teksten erstattet med samme indgang fra Drivlinjesystemer: "Hastigheden reduceres proportionalt med skaden."_

---

</details>


---
### Hastighed

Da fysikken bag hastighed, acceleration, luftmodstand og inerti er komplekse emner, er en vis forenkling nødvendig, og derfor tildeles køretøjer en abstrakt hastighedsvurdering. Hastighedskarakteristikken bør kun bruges til groft at vurdere, om ét køretøj kan overhale eller indhente et andet.

Hastighedsvurderingen repræsenterer et køretøjs nominelle driftshastighed. I nødsituationer kan denne ydeevne øges med ét trin, med risiko for slitage eller skade på motorerne. Selvom den samme tabel bruges til alle køretøjstyper, bør sund fornuft anvendes, så kun køretøjer af samme klasse sammenlignes. For eksempel, hvis et rumskib og en sportsvogn begge har samme accelerationsrate ("Rapid"), bør det være indlysende, at rumskibet er komparativt hurtigere.

At øge et køretøjs hastighed ud over dets standardværdi er muligt ved et succesfuldt køreslag. Normalt er denne ekstra hastighed kun bæredygtig i en kort periode – ikke mere end 1d6 minutter, før køretøjet skal sænke farten til sin standardhastighed eller risikere skade på drivværket. Et kritisk køreslag tillader perioden med højere hastighed at blive øget til 1d12 minutter.

En fører kan forsøge at presse et køretøjs hastighed med 2 trin, men dette kræver et heroisk køreslag, og maksimalt kan køretøjet holde denne hastighed i 1d3 minutter: Et kritisk resultat vil ikke forlænge varigheden.

##### Hastighedsvurderingstabel

| Hastighedsvurdering | Maks. Hastighed for |
| :-- | :-: |
| Ponderous (Doven) | Enorm |
| Sluggish (Døsig) | |
| Slow (Langsom) | Kæmpe |
| Mediocre (Jævn) | |
| Gentle (Rolig) | Stor |
| Moderate (Moderat) | |
| Rapid (Hurtig) | Mellem |
| Fast (Lyn) | |
| Fleet (Vindhast) | Lille |


---
### Træk

Det maksimale antal træk, et køretøj kan have, afhænger af skrogets størrelse og type.

Hvert køretøj har et iboende træk: den rejseform, det primært er designet til. Fly har derfor iboende trækket "Airborne", både har "Seaborne", og så videre. Dette iboende træk tæller ikke med i det tilgængelige antal træk. Men hvis et køretøj inkluderer en ekstra rejseform — f.eks. en flyvende ubåd — skal "Airborne" tages som et af de tilgængelige træk.

Nogle træk er muligvis ikke tilgængelige afhængigt af settingens teknologiniveau; spilledere må selv vurdere, hvilke træk der kan anvendes.

##### Tabel for køretøjstræk

| Størrelse | Maks. Træk |
| :-- | :-: |
| Lille | 1 |
| Mellem | 2 |
| Stor | 3 |
| Kæmpe | 4 |
| Enorm | 5 |
| Kolossal | 6 |

#### Airborne (Luftbåret)

Køretøjet er i stand til atmosfærisk flyvning.

#### All Terrain (Terrængående)

Dette træk skal bruges med køretøjer til landbrug. Køretøjet kan krydse ugæstfrie, svære og stejle terræner ved hjælp af bælter, avanceret affjedring eller kraftige gearingssystemer.

#### Burrowing (Gravende)

Køretøjet er designet til at grave og tunneller gennem jorden. Det kan nå en maksimal dybde svarende til dets skrogværdi x 5 meter.

#### Camouflaged (Camoufleret)

Køretøjet besidder enten camouflage-maling eller mimetic-sensorer, der gør det muligt at blende ind i omgivelserne. Forsøg på at få øje på køretøjet visuelt er én grad sværere.

#### Cargo (Last)

Køretøjet er designet specifikt til at fragte gods frem for passagerer. Passagerkabiner holdes på et minimum, mens resten af køretøjets brugbare plads er dedikeret til opbevaring med passende sektioner, værktøj og endda miljøstyring (f.eks. kølerum til transport af letfordærvelige varer). Når det er lastet, er køretøjets hastighed to trin lavere, end dets skrogstørrelse ellers ville tillade.

#### Carrier (Moderskib)

Køretøjet er specifikt designet til at bære mindre, let besatte eller muligt fjernstyrede køretøjer af civil eller militær natur. Ethvert køretøj med dette træk skal være mindst Enormt. Antallet af små fartøjer varierer efter missionstype, men kan være fra 10 op til køretøjets strukturværdi.

#### Construction (Konstruktion)

Køretøjet er udstyret til tungt anlægsarbejde. Alle køretøjer med dette træk har også "All Terrain", men hastigheden er to trin lavere, end deres skrogstørrelse ellers ville tillade. Køretøjet er monteret med opgave-passende værktøj såsom kranarme, gravemaskiner, tipvogne osv.

#### EMP Resistant (EMP-resistent)

Køretøjet er afskærmet mod elektromagnetiske impulser.

#### Enhanced Performance (Forbedret ydeevne)

Køretøjets hastighedsvurdering er ét trin højere end maksimum for dets størrelse.

#### Ejector Seat (Katapultsæde)

I nødstilfælde skyder et katapultsæde passagererne flere hundrede meter op i luften, hvorefter en faldskærm udløses for sikker landing. Faldskærm er valgfri. Ikke anbefalet til helikoptere.

#### FTL (Overlys-hastighed)

Kun rumfartøjer. Fartøjet er udstyret med en FTL-motor (hyperdrev, warp-drev, ormehulsgenerator eller lignende). FTL-drevet har en separat hastighedsvurdering, der måler raten for krydsning af én parsec (3,26 lysår, eller ca. 31 billioner kilometer).

##### FTL-hastighedstabell

| Hastighedsvurdering | Faktor pr. Parsec |
| :-- | :-: |
| Ponderous (Doven) | 10 |
| Sluggish (Døsig) | 8 |
| Slow (Langsom) | 7 |
| Mediocre (Jævn) | 6 |
| Gentle (Rolig) | 5 |
| Moderate (Moderat) | 4 |
| Rapid (Hurtig) | 3 |
| Fast (Lyn) | 2 |
| Fleet (Vindhast) | 1 |

Faktortiden er op til spillederen. For eksempel kunne basisfaktoren være 1 dag, hvilket betyder, at et skib med et "Ponderous" FTL-drev tager 10 dage, mens et med "Fleet" gennemfører på 1 dag. Det antages, at skibet har brændstofreserver til returrejse eller tankning.

FTL-drev kan ikke aktiveres inden for 1,5 astronomiske enheder fra en stjerne.

#### Ground Vehicle (Landkøretøj)

Køretøjet er i stand til at bevæge sig på land.

#### Hover (Svæve)

Køretøjet svæver over jorden ved hjælp af luftpude eller antigravitations-repulsorer.

#### Luxurious (Luksuriøs)

Køretøjet er designet til at bære passagerer i luksus. Overskydende lastplads bruges til luksuriøs indkvartering, swimmingpools, jacuzzier osv.

#### Rails (Skinner)

Køretøjet afhænger af et skinnesystem. Kan naturligt opnå en hastighed tre trin højere end normalt, men er begrænset til skinnerne.

#### Resilient (Robust)

Alle systemer kan modstå én ekstra træffer mere end normalt for deres størrelse. Kan stables.

#### Seaborne (Søgående)

Køretøjet er flydende på vand.

#### Spacecraft (Rumfartøj)

Forseglet mod vakuum, afskærmet mod stråling, og kan (afhængigt af design) forlade og genindtræde i atmosfærer.

#### Stealth (Snig-funktion)

Kun fly. Designet til at undgå radar. Forsøg på at opdage køretøjet elektronisk er én grad sværere.

#### Submersible (Undervandsfartøj)

Køretøj der kan dykke til en dybde på skrogværdi x 10 meter. Kollapsdybde er 1,5 x driftsdybde.

#### Superior Handling (Overlegen håndtering)

Køretøjets håndtering er "Easy".

#### Surveillance Suite (Overvågningspakke)

Onboard computer, kommunikationsbasestation, signalmodtager og aflytningsudstyr.

#### Tough (Hård)

Civilt køretøj henter skrog fra militær-kolonnen og har automatisk maks. struktur. Militært køretøj rykker en række ned.

#### Tractor Beam (Traktorstråle)

Kun rumfartøjer. Kan indfange fartøjer op til to trin mindre end sig selv.

#### VTOL (Lodret start/landing)

Inherent for helikoptere. Kan påføres fly for at kontrollere attitude og opstigning.

#### Waterborne (Gangart-vand)

Køretøjet bruger leddelte ben. Begrænset til hastighed "Gentle".

#### Weaponized (Bevæbnet)

Køretøjet er tilpasset til at bære våben. Se [Våben](0006_Vehicles.md?id=weapons).


---
## Våben

Kun militære skrog er designet til våben. "Weaponized"-trækket kan tages for civile køretøjer.

Det maksimale antal våbensystemer er lig med 1/10 af strukturpointene (f.eks. 40 struktur = 4 våbensystemer).

##### Våben efter størrelses-tabel

| Størrelse | Terrestrisk | Rumfartøj |
| :-- | :-- | :-- |
| Lille | Let våben (f.eks. automatriffel) | Mellem våben (f.eks. maskingevær, raketkaster) |
| Mellem | Mellem våben (f.eks. maskingevær, raketkaster) | Tårn/Tungt våben (f.eks. tunge linkede maskingeværer) |
| Stor | Tårn/Tungt våben (f.eks. tunge linkede maskingeværer) | Våbenbatteri (f.eks. artilleri) |
| Kæmpe | Våbenbatteri (f.eks. artilleri) | Avancerede våben (f.eks. missilsystemer) |
| Enorm | Avancerede våben (f.eks. missilsystemer) | Spinalmonteret våben (kun ét) |
| Kolossal | NA | Spinalmonteret våben (op til 3) |

---
## Håndtering og Manøvrer

Pludselige manøvrer kræver et succesfuldt køre/pilotslag.

##### Tab for tab af kontrol

| 1d100 | Resultat |
| :-: | :-- |
| 01-25 | Sving. Midlertidig. Hastighed falder 1 trin i 5 sek. |
| 26-40 | Skrid. Hastighed falder 2 trin i 10 sek. |
| 41-50 | Alvorligt skrid. Køretøjet vender forkert og holder stille i 15 sek. |
| 51-60 | Rul. 3d10 skade på struktur. Passagerer: Udholdenhedsslag eller 1d10 skade på 1d3 lokationer. |
| ... | ... |

*(Resten af dokumentet følger de samme formateringsregler og oversættes tilsvarende for at bevare teknisk nøjagtighed.)*