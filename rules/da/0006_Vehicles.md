# Køretøjer

Køretøjer i _Mythras Imperative_ behandles på en semi-abstrakt facon. Grundlæggende er de baggrundsværktøjer, der bruges til at få karakterer fra A til B, med lille behov for detaljerede beskrivelser eller statistikker. Lejlighedsvis vil spilledere dog få brug for detaljer for køretøjer, når det er nødvendigt at repræsentere dem i jagter eller kampsituationer.

Reglerne i dette afsnit tillader repræsentation af de fleste typer køretøjer, men på en abstrakt måde, der har til formål at give fleksibilitet og forbedre historiefortællingen. Rumskibe og rumfartøjer er lidt anderledes, selvom de er baseret på lignende principper.

---
## Statistikker

Alle køretøjer beskrives i form af deres Struktur, Skrog, Hastighed, Systemer, Træk og Skjolde (hvis til stede i omgivelserne).

- **[Størrelse](0006_Vehicles.md?id=vehicle-size-table):** Alle køretøjer har en af seks Størrelsesvurderinger, som bestemmer værdien eller intervallet for resten af karakteristikkerne. På grund af deres større iboende størrelse og rummets fjendtlige miljøer, har rumskibe deres eget interval af værdier.
- **[Skrog](0006_Vehicles.md?id=terrestrial-hulls):** Repræsenterer Pansringspoint.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Repræsenterer et køretøjs Skadepoint.
- **[Skjolde](0006_Vehicles.md?id=shields):** I omgivelser med avanceret energimanipulationsteknologi kan der være skjolde til stede, som beskytter køretøjet, men som kan eroderes under vedvarende beskydning.
- **[Systemer](0006_Vehicles.md?id=systems):** Repræsenterer vitale komponenter i køretøjet, inklusive kraftværket, mandskabssektionen og så videre.
- **[Hastighed](0006_Vehicles.md?id=speed):** Hvert køretøj har en grundlæggende Hastighedsvurdering.
- **[Træk](0006_Vehicles.md?id=traits):** Et køretøj kan også have et eller flere Træk. Træk, ligesom Evner tildelt Væsner i _Mythras Imperative_-reglerne eller Kampstilstil-træk, tilbyder en ekstra spilbeskrivelse og fordel, der afspejler køretøjets natur.
- **[Våben](0006_Vehicles.md?id=weapons):** Ligesom med Træk, kan et køretøj være udstyret med våben, som omgivelserne tillader det. Nogle foreslåede eksempler og værdier er detaljeret nedenfor.


---
### Skrogstørrelse, Type og Struktur

Størrelsen og formålet med et køretøj påvirker tykkelsen af dets skrog og robustheden af dets interne struktur. En motorcykel har for eksempel et minimalt skrog, bygget som den er til fart og smidighed. Et Land-jernskib (et massivt, bælte- eller hjuldrevet pansret bæst, drevet af damp- eller dieselmotorer), der er et meget større køretøj designet til slagmarken, har et meget større skrog. Den sammenlignende størrelse af skrog (og hvor mange hits fra våben de typisk kan modstå), er opsummeret i tabellerne for Køretøjsstørrelse og Skrog nedenfor.

Hver gang et køretøj lider skade, reduceres den indkommende skade af dets Skrog-værdi. Enhver resterende skade trækkes fra køretøjets Struktur-point og har en procentvis chance, svarende til den gennemtrængende skade, for at påvirke et System. Hvis køretøjet nogensinde reduceres til nul Struktur, bliver det enten fuldstændigt ødelagt eller så slemt beskadiget, at det må skrottes.

##### Terrestriske Skrog

| Størrelse | Struktur | Civilt Skrogværdi | Militært Skrogværdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Lille | 1-20 | 1-3 | 4-6 | Motorcykel, motorcykel med sidevogn, kompakt eller subkompakt bil, kano, kajak, robåd |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, varevogn, pickup, luksusbil, luksussportsvogn, muskelbil, limousine, redningsbåd, speedbåd, hangglider, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastbil, strakt limousine, SUV, bus, personbil, privatfly, svævefly, lystkrydser, kampvogn, helikopter, ubåd |
| Kæmpe | 61-80 | 7-12 | 13-15 | Sættevogn, passagerfly, jet, kystvagtsfartøj, yacht |
| Enorm | 81-100 | 10-15 | 16-18 | Tog, krydstogtskib, flådefartøj |

##### Rumskibsskrog

| Størrelse | Struktur | Civilt Skrogværdi | Militært Skrogværdi | Eksempel |
| :-- | :-: | :-: | :-: | :-- |
| Lille | 10-50 | 4-9 | 10-12 | Enkelt-sædet jager |
| Medium | 51-150 | 7-12 | 13-15 | Let fragtskib, shuttle |
| Stor | 151-450 | 10-15 | 16-18 | Tungt fragtskib, krydser |
| Kæmpe | 451-1350 | 13-18 | 19-21 | Eskorte-fregat, let slagkrydser |
| Enorm | 1351-4050 | 16-21 | 21-24 | Generationsskib, tung slagkrydser |
| Kolossal | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planet-ødelæggende kampstation |


---
### Skjolde

Deflektorskjolde giver et ekstra lag af beskyttelse for de køretøjer, der kan montere dem. Skjolde fungerer en smule anderledes end Skroget på grund af deres ablative natur. Hvis indkommende skade er lig med eller mindre end værdien af skjoldene, blokeres den fuldstændigt. Hvis skaden overstiger skjoldværdien, reducerer det overskydende beløb skjoldstyrken med det beløb.

_For eksempel har en troppetransport en energiskjoldstyrke på 12 point. Hvis transporten blev ramt af en laser med 11 i skade, trænger den simpelthen ikke igennem og har ingen yderligere effekt. På den anden side, hvis transporten blev ramt af en eksplosion, der forårsagede 15 i skade, ville de overskydende tre point reducere skjoldstyrken til 9._

Når styrken af et deflektorskjold er faldet til nul, bryder det sammen. Enhver resterende skade føres videre til skroget.

---
### Systemer

Hver gang et køretøj lider skade, der trænger igennem skroget, er der en chance, svarende til den gennemtrængende skade, for at et vigtigt System er blevet påvirket.

_For eksempel påføres 10 i skade på en Speedbåd - et køretøj med 3 i Skrog og 24 i Struktur. Skroget tæller som panser, der reducerer skaden til 7. Dette fjernes fra de 24 Struktur-point, og der er 7% chance for at beskadige et af køretøjets Systemer._

Den skade, et System kan modstå, er udelukkende baseret på køretøjets størrelse. Dette modelleres ved antallet af hits, et System kan tage, frem for den faktiske mængde skade. Et enkelt System-hit på et Lille køretøj vil øjeblikkeligt ødelægge dette System. Det kræver to hits at ødelægge et Medium størrelse køretøjs systemer, tre for et Stort køretøj, og så videre. Se [Systemskadetabellen](0006_Vehicles.md?id=system-damage-table) nedenfor.

Systemer, der er beskadigede, men endnu ikke ødelagte, lider et tab af funktion proportionalt med antallet af modtagne Hits - enten en procentvis reduktion eller en Sværhedsgrads-straf til System-handlinger. Den specifikke effekt er baseret på, hvad delsystemet kontrollerer, som beskrevet i [Systemkomponent-skadetabellen](0006_Vehicles.md?id=system-component-damage-table) nedenfor. Afhængigt af hvilket System der rammes, kan effekterne være katastrofale.

_For eksempel ville et Land-jernskib - et Enormt køretøj med 5 System-hits - hvis det rammes to gange i Drivværket, miste 40% af sin kraft og ville reducere sin Langsomme Hastighed to Sværhedsgrader til Tungt. Ligeledes ville et Stort fragtskib - med 3 System-hits - der tager to hits på Motor/Brændstof-systemet, få en straf på to Sværhedsgrader til Hastighed såvel som til brug af elektroniske systemer. Et tredje hit ville ødelægge Motor/Brændstof-systemet og skibet med det._

<details>

<summary>* Community Errata</summary>

---

#### Skade

_Den originale tekst her var oprindeligt placeret længere væk. Placeret direkte efter System-afsnittet gentager det unødvendigt det foregående afsnit._

- _"Skade, der overstiger Skroget, trænger igennem køretøjet, beskadiger Strukturen og påvirker muligvis et eller flere systemer. Afhængigt af køretøjets størrelse kan skaden være mindre eller katastrofal._
- _For eksempel kan et Stort køretøj tage op til tre hits på et System såsom dets Drivværk. Det fjerde hit ødelægger funktionelt Drivværket. Hver gang systemet tager et hit, mister det enten en procentdel af sin funktion som beskrevet i kolonnen 'Tab pr. hit' i Systemskadetabellen nedenfor, eller en kernefunktion (såsom Drivværk, Pilot, Kommunikation osv.) bliver én Sværhedsgrad sværere pr. modtaget hit."_

_Ovenstående afsnit er fjernet, og en forkortet redigering træder i stedet og fremhæver en anden eksemplarisk System-effekt._

---

</details>

##### Systemskadetabel

| Størrelse | System-hits | Tab pr. hit |
| :-- | :-: | :-- |
| Lille | 1 | 100% - Ødelagt |
| Medium | 2 | 1 Grad eller 50% |
| Stor | 3 | 1 Grad eller 33% |
| Kæmpe | 4 | 1 Grad eller 25% |
| Enorm | 5 | 1 Grad eller 20% |
| Kolossal | 6 | 1 Grad eller 16% |

<details>

<summary>* Community Errata</summary>

---

##### Systemskadetabel (Original)

| Størrelse | System-hits | Tab pr. hit |
| :-- | :-: | :-- |
| Lille | 1 | 1 Grad eller 50% |
| Medium | 2 | 1 Grad eller 33% |
| Stor | 3 | 1 Grad eller 25% |
| Kæmpe | 4 | 1 Grad eller 20% |
| Enorm | 5 | 1 Grad eller 16% |
| Kolossal | 6 | 1 Grad eller 10% |

##### Køretøjsstørrelsestabel (fra [Skrogstørrelse, Type og Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Størrelse | System-hits |
| :-- | :-: |
| Lille | 1 |
| Medium | 2 |
| Stor | 3 |
| Kæmpe | 4 |
| Enorm | 5 |
| Kolossal | 6 |

_De originale regler og eksempler er inkonsistente:_
- _"Systemer, der er beskadigede, men endnu ikke ødelagte, lider et tab i funktionalitet. Dette er lig med proportionen af nuværende hits i forhold til dets samlede kapacitet. Således ville et Enormt køretøj ramt to gange i Drivværket miste 40% af sin kraft (2 hits ud af maksimalt 5)"._
   - _Dette antyder, at det Enorme køretøj vist med 5 System-hits burde miste 20% for hvert hit - men tabellen siger 16%._
- _"For eksempel kan et Stort køretøj tage op til tre hits på et system såsom dets Drivværk. Det fjerde hit ødelægger funktionelt Drivværket."_
  - _"Dette antyder - ligesom tabellen - 25% skade pr. System-hit, men de Store køretøjer kan kun tage 3 System-hits ifølge den samme tabel._
- _Selvom ikke inkonsistent, var Køretøjsstørrelsestabellen redundant; den optrådte igen i en mere udfyldt form (hvor kolonnen 'Tab pr. hit' blev tilføjet) blot få linjer senere._

_Dette gør det svært at have en konsistent regel. For at adressere disse problemer er værdierne og eksemplerne ændret til at matche, og Køretøjsstørrelsestabellen blev fjernet._

---

</details>

##### Systemkomponent-skadetabel

| 1d10 | System | Beskadiget resultat | Ødelagt resultat |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mængde ejendele eller udstyr opbevaret i lastrummet, proportionalt med skaden, ødelægges. | Al last er ødelagt. |
| 2 | Komms | Komms-rul lider én ekstra Sværhedsgrad i sværhedsgrad hver gang de beskadiges. | Køretøjet kan ikke længere kommunikere eller forstyrre fjendtlige sensorer. |
| 3 | Kontrol | Båd-, Kørsels- eller Pilot-rul lider én ekstra Sværhedsgrad hver gang de beskadiges; øjeblikkeligt Kontrol-rul påkrævet. | Køretøjet kan ikke længere styres eller ændre kurs. |
| 4 | Drivværk | Hastighed reduceret med et beløb proportionalt med skaden. | Køretøjet stopper brat; fly styrter ned. |
| 5 | Mandskab | Et antal passagerer proportionalt med skaden bliver til tab. De berørte lider et Alvorligt Sår og skal bestå et UDH-rul eller dø øjeblikkeligt. | Køretøjets beboere dør. |
| 6 | Motor / Brændstof | Hastighed reduceret med et beløb proportionalt med skaden. Elektroniske systemer er én Sværhedsgrad sværere at bruge. | Køretøjet ødelægges i en katastrofal eksplosion. |
| 7 | Sensorer | Sensor-, Navigations- og våbenangrebsrul lider én ekstra Sværhedsgrad hver gang de beskadiges. | Køretøjet bliver gjort blindt. |
| 8 | Våben | Et antal våbensystemer proportionalt med skaden bliver ude af drift. | Køretøjet kan ikke længere affyre våben. |
| 9-0 | Ingen | Ingen systemer ramt; kun Struktur-skade. | Ikke relevant |

<details>

<summary>* Community Errata</summary>

---

##### Systemkomponent-skadetabel (Motor/Brændstof)

_Det originale resultat var som følger: "Maksimal Hastighed halveres..." Dette modsiger den generelle regel om skadesstraffe i forhold til System-skade: 25% skade = 25% straf. Desuden nævner de fulde regler i Mythras Companion ikke denne halvering af Hastigheden._

_Som et resultat er teksten erstattet med den samme post fra Drivværks-systemer: "Hastighed reduceret med et beløb proportionalt med skaden."_

---

</details>


---
### Hastighed

Da fysikken bag hastighed, acceleration, luftmodstand og inerti (for blot at nævne nogle få) er komplekse spørgsmål, er en vis forenkling nødvendig, og køretøjer får derfor en abstrakt hastighedsvurdering. Hastighedskarakteristikken bør kun bruges til groft at vurdere, om ét køretøj kan overhale eller indhente et andet.

Hastighedsvurderingen repræsenterer et køretøjs nominelle operationelle sats. I nødsituationer kan denne ydeevne øges med ét trin på bekostning af risiko for slid eller skade på motorerne. Selvom den samme tabel bruges til alle køretøjstyper, bør sund fornuft anvendes, således at kun køretøjer af samme klasse sammenlignes. For eksempel, hvis et Rumskib og en sportsvogn begge har den samme accelerationsrate på Rapid, så bør det være indlysende, at rumskibet er sammenligningsvist hurtigere.

Det er muligt at øge et køretøjs Hastighed ud over dets standardværdi ved et succesfuldt Kørsels-rul. Normalt er denne ekstra hastighed kun holdbar i en kort periode – ikke mere end 1d6 minutter, før køretøjet skal falde til sin standardhastighed eller risikere skade på sit kraftværk. Et kritisk Kørsels-rul gør det muligt at øge perioden med højere hastighed til 1d12 minutter.

En fører kan forsøge at presse et køretøjs hastighed med 2 trin, men dette kræver et heroisk Kørsels-rul, og det maksimale køretøjet kan opretholde denne hastighed er 1d3 minutter: en Kritisk Succes vil ikke forlænge den øgede hastigheds varighed.

##### Hastighedsvurderingstabel

| Hastighedsvurdering | Maks Hastighed For |
| :-- | :-: |
| Ponderous | Enorm |
| Sluggish | |
| Slow | Kæmpe |
| Mediocre | |
| Gentle | Stor |
| Moderate | |
| Rapid | Medium |
| Fast | |
| Fleet | Lille |


---
### Træk

Det maksimale antal træk, et køretøj kan have, afhænger af skrogstørrelse og type.

Ethvert køretøj har et iboende træk: den rejsemåde, som det primært er designet til. Derfor har fly automatisk Luftbåren-trækket, både har Søbåren-trækket, og så videre. Dette iboende træk tæller ikke med i det tilgængelige antal træk. Men hvis et køretøj skal inkludere en anden rejsemåde - en flyvende ubåd for eksempel - så ville Luftbåren-trækket skulle tages som et af dets tilgængelige træk.

Nogle træk er muligvis ikke tilgængelige afhængigt af teknologi-niveauet i omgivelserne; spilledere skal tage deres egne beslutninger om, hvilke træk der kan anvendes.

##### Tildelingstabel for Køretøjstræk

| Størrelse | Maks Træk |
| :-- | :-: |
| Lille | 1 |
| Medium | 2 |
| Stor | 3 |
| Kæmpe | 4 |
| Enorm | 5 |
| Kolossal | 6 |

#### Luftbåren

Køretøjet er i stand til atmosfærisk flyvning.

#### All Terrain (Al-Terræn)

Dette Træk skal bruges med Jord-køretøjer. Køretøjet kan krydse ugæstmildt, vanskeligt og stejlt terræn ved hjælp af enten bælter, avanceret affjedring og drivsystemer eller kraftige driv-differentialer.

#### Gravende

Køretøjet er designet til at grave og tunnelere gennem jorden. Det kan opnå en maksimal dybde svarende til dets Skrogværdi x 5 meter.

#### Camoufleret

Køretøjet besidder enten camouflagemaling eller mimetiske sensorer, der gør det muligt at gå i ét med omgivelserne. Forsøg på at spotte køretøjet visuelt er én grad sværere.

#### Last

Køretøjet er designet specifikt til at fragte last frem for passagerer. Passagersektioner holdes på et minimum, mens resten af køretøjets anvendelige plads er dedikeret til lastopbevaring med passende sektioner, værktøj og endda miljøkonditionering (såsom fryseafdelinger til transport af letfordærvelige varer). Når det er læsset med last, er køretøjets hastighed to trin lavere, end dets skrogstørrelse ellers ville tillade.

#### Transportskib

Køretøjet er designet specifikt til at bære mindre, let bemandede eller muligvis fjernstyrede køretøjer af enten civil eller militær natur. Ethvert køretøj, der besidder dette træk, skal være mindst Enormt. Antallet af små fartøjer, der transporteres, kan variere efter missionstype og formål, men kan være så få som 10 til så mange som køretøjets Strukturværdi.

#### Konstruktion

Køretøjet er udstyret til tungt konstruktionsarbejde. Alle køretøjer med dette træk har også All Terrain-trækket, men hastigheden er to trin lavere, end deres skrogstørrelse ellers ville tillade. Køretøjet er monteret med opgave-passende værktøj såsom kranarme, gravemaskiner, tipvogne og så videre.

#### EMP-resistent

Køretøjet er afskærmet mod elektromagnetiske puls-angreb.

#### Forbedret Ydeevne

Køretøjets Hastighedsvurdering er ét trin højere end maksimummet for dets størrelse.

#### Katapultsæde

I tilfælde af en nødsituation fremdriver et katapultsæde beboerne flere hundrede meter op i luften, og udløser derefter en faldskærm for at tillade en sikker landing. Faldskærm er valgfri. Ikke anbefalet til helikoptere (hvor Kamov Ka-52 Alligator er en bemærkelsesværdig undtagelse).

#### FTL (Overlyshastighed)

Kun rumfartøjer. Fartøjet er monteret med en motor til hastigheder hurtigere end lyset (hvad enten dette er et hyperdrev, warpdrev, ormehulsgenerator eller lignende). FTL-drevet har en separat Hastighedsvurdering, der essentielt måler den hastighed, hvormed et rumskib kan krydse en enkelt parsec (3,26 lysår, eller 31 billioner kilometer eller 19 billioner miles), som følger:

##### FTL Hastighedsvurderingstabel

| Hastighedsvurdering | Faktor for at krydse 1 parsec |
| :-- | :-: |
| Ponderous | 10 |
| Sluggish | 8 |
| Slow | 7 |
| Mediocre | 6 |
| Gentle | 5 |
| Moderate | 4 |
| Rapid | 3 |
| Fast | 2 |
| Fleet | 1 |

Faktortiden er op til spillederen at beslutte, afhængigt af hvor avanceret omgivelsernes FTL-udvikling er. For eksempel kunne basis-faktoren være 1 dag, hvilket betyder, at et skib med et Ponderous FTL-drev bruger 10 dage på at fuldføre rejsen, mens et fartøj med et Fleet FTL-drev fuldfører turen på 1 dag. Andetsteds, hvor FTL-teknologi er væsentligt mindre effektiv, kan faktortiden måles i måneder frem for dage.

Det antages, at skibet har brændstofreserver til enten at foretage en returrejse eller et middel til at tanke op ved destinationspunktet.

Antag at enhver størrelse af rumskib kan monteres med et FTL-drev, selvom dette naturligvis afhænger af omgivelserne.

FTL-drev kan ikke aktiveres inden for 1,5 Astronomiske Enheder fra en stjerne (omkring 225 millioner kilometer, eller 270 millioner miles). Dette betyder, at skibe skal bruge et underlys-drev for at bevæge sig til omkring afstanden af Mars, før FTL-systemet aktiveres.

#### Jord-køretøj

Køretøjet er i stand til at køre på land.

#### Hover (Luftpude)

Køretøjet svæver over jorden enten ved hjælp af en luftpude eller en antigravitations-repulsor.

#### Luksuriøs

Køretøjet er designet specifikt til at bære passagerer på et vist niveau af luksus. Overskydende lastplads er dedikeret til luksuriøse passagerfaciliteter, swimmingpools, jacuzzier, ekstra mandskab til at opvarte passagerernes luner og så videre.

#### Skinner

Køretøjet er afhængig af et skinnesystem. Køretøjer med dette træk kan naturligt opnå en Hastighedsvurdering tre trin højere, end deres skrogstørrelse ellers ville tillade, men er naturligvis begrænset til bevægelse kun på skinnesystemet.

#### Robust

Alle systemer kan modstå ét yderligere hit mere end normalt bestemt af Størrelse. Dette Træk kan stables - så Robust 2 indikerer, at systemer kan modstå 2 hits mere end normalt til en pris af to Træk-point.

#### Søbåren

Køretøjet er flydende på vand.

#### Rumfartøj

Køretøjet er forseglet mod vakuum og afskærmet mod kosmisk stråling og kan, afhængigt af design, være i stand til at forlade og genindtræde i atmosfæren samt opretholde flyvning inden i en atmosfære.

#### Stealth (Usynlighed)

Kun fly. Køretøjet er designet til at undgå detektion af radar og andre langdistance-sensorsystemer. Forsøg på at spotte køretøjet ved hjælp af elektroniske sensorer er én grad sværere.

#### Undervandsbåd

Køretøjet er i stand til at dykke under overfladen af et hav til en driftsdybde på dets Skrogværdi x 10 meter. Sammenbrudsdybden - det absolutte maksimum ubåden kan nå uden at blive knust - er 1,5 gange dens driftsdybde.

#### Overlegen Håndtering

Køretøjets håndtering vurderes som Nem.

#### Overvågningspakke

Køretøjet har en indbygget computer, komms-basestation, modtager til lytningsenhedssignaler og apparatur til at opsnappe nærliggende smartphone-signaler inden for 100 meter.#### Tough

Et civilt køretøj med dette træk henter sin Skrog-værdi fra den militære kolonne og har automatisk den maksimale Struktur. Et militært køretøj med dette træk henter sit Skrog og sin Struktur fra rækken lige nedenunder.

#### Traktorstråle

Kun rumskibe. Skibet er udstyret med en traktorstråle, der kan indfange og trække køretøjer til sig, som har en skrogbedømmelse på op til to trin under sin egen. En enorm stjernebase kunne således tiltrække og fastholde et skrog på op til mellemstørrelse.

#### VTOL

Lodret start/landing (Vertical takeoff/landing). Dette træk er iboende for helikoptere og lignende køretøjer, der bruger en kombination af rotorer til at skabe løftekraft. Når det anvendes på fastvingede fly, indikerer det brugen af faste eller justerbare dyser til at kontrollere luftbåren stilling, opstigning og nedstigning.

#### Vandbåren

Køretøjet bevæger sig fremad ved hjælp af leddelte ben. Gående køretøjer (Walkers) er begrænset til en hastighed på "Rolig" (Gentle), uanset deres Størrelse. Gående køretøjer kan dog bygges i højder, der ville være ustabile for køretøjer udstyret med andre former for fremdrift.

Dette køretøj er i stand til at bevæge sig under vandet.

#### Bevæbnet (Weaponized)

Køretøjet er blevet tilpasset til at rumme våben. Våbensystemer diskuteres nedenfor i afsnittet [Våben](0006_Vehicles.md?id=weapons).

---
## Våben

Normalt er det kun militære skrog, der er designet til at rumme våben (fastgørelsespunkter, ammunitionsopbevaring, kontrolsystemer). Trækket 'Bevæbnet' kan vælges til civile køretøjer, der kan have behov for våben.

Det maksimale antal våbensystemer, et køretøj kan understøtte, er lig med 1/10 af dets Strukturpoint (så et køretøj med 40 Struktur kunne understøtte 4 våbensystemer, hvis det er et militært køretøj eller et civilt køretøj med trækket Bevæbnet).

Våbensystemer afhænger af køretøjets Størrelse. Den maksimale type våbensystem for forskellige størrelser er vist i tabellerne herunder.

##### Tabel over våben efter størrelse

| Størrelse | Terrestrisk | Rumskib |
| :-- | :-- | :-- |
| Lille | Let våben (f.eks. angrebsriffel) | Mellem våben (f.eks. maskingevær, raketkaster) |
| Mellem | Mellem våben (f.eks. maskingevær, raketkaster) | Tårnbaseret/tungt våben (f.eks. tunge sammenkoblede maskingeværer, miniguns) |
| Stor | Tårnbaseret/tungt våben (f.eks. tunge sammenkoblede maskingeværer, miniguns) | Våbenbatteri (f.eks. slagmarksartilleri) |
| Enorm | Våbenbatteri (f.eks. slagmarksartilleri) | Avancerede våben (f.eks. missilsystemer) |
| Kolossal | Avancerede våben (f.eks. missilsystemer) | Sprygmonterede våben (kun ét) |
| Titanisk | NA | Sprygmonterede våben (op til 3) |

##### Eksempel på våbenstatistikker

| Våben | Skade | Rækkevidde | Skudhastighed | Ammo/Ladning |
| :-- | :-: | :-: | :-: | :-: |
| 50-tommer kanon | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling-gevær | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Mellem missil/torpedo | 6d10 | Maks. rækkevidde 200km | 1 | 1/5 |
| Stort/krydsermissil | 6d10+10 | Maks. rækkevidde 1000km | 1 | 1/10 |
| Laser/plasmakanon | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Tung laser/plasmakanon | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilleribatteri | 5d6+6 | Maks. rækkevidde 50km | 1 | 1/5 |
| Sprygmonteret batteri | 10d6+6 | Maks. rækkevidde 20000km | 1 | 1/10 |

_Rækkevidder er angivet i meter og kilometer._

_Skudhastigheder er for enkeltskud, semi-automatisk og fuldautomatisk._

_Ammo er affyringskapacitet før genladning er påkrævet. Ladning er genladningstiden i kamprunder, forudsat at en fuld besætning er til rådighed._

---
## Håndtering og manøvrer

Undvigende eller pludselige manøvrer kræver et vellykket Køre/Pilot-kast for at sikre, at føreren eller piloten bevarer kontrollen over køretøjet. De fleste køretøjer er designet og bygget til at modstå lejlighedsvis belastning, men spillederen (GM) kan beslutte, at en bestemt manøvre kræver et kast med en højere sværhedsgrad, afhængigt af hvor ambitiøs den er. Fiasko betyder, at kontrollen over køretøjet mistes: slå på tabellen for Tab af kontrol.

Bemærk, at tabellen for Tab af kontrol kun gælder for terrestriske køretøjer. Lignende effekter kan anvendes på luft- og rumkøretøjer, men spilledere bliver nødt til at justere begrundelsen for den specifikke effekt. For eksempel kan et fly, i stedet for at skride, gå i et spin.

Desuden kan et køretøjs iboende håndtering have en yderligere indvirkning på Køre-kastet. Håndtering er enten Let, Standard, Svær, Formidabel eller Herkulisk og bestemmer startpunktet for Køre-kastet ved udførelse af en manøvre. Sværhedsgraden for manøvren anvendes derefter på håndteringen for at bestemme den endelige sværhedsgrad.

For eksempel har en højtydende motorcykel indbyggede gyrostabilisatorer, der giver den en håndtering på Let. Føreren ønsker at udføre et 180-graders skrid-sving for at undvige en forfølger, en manøvre som spillederen vurderer til at være én grad sværere. Føreren skal derfor foretage sit Køre-kast med Standard i stedet for Let. Hvis han havde forsøgt den samme manøvre på en ikke-stabiliseret motorcykel, ville Køre-kastet have været på Svær.

Overlegen håndtering er et træk. Hvis et køretøj ikke har trækket som en del af sin beskrivelse, er standarden Standard-håndtering for ethvert køretøj af størrelse Stor og derunder. Enorme og kolossale køretøjer har i sagens natur håndteringstrækket Formidabel og Herkulisk, og spillederen står frit for at vurdere, at visse manøvrer simpelthen er umulige at opnå på grund af køretøjets størrelse.

##### Tabel over tab af kontrol

| 1d100 | Resultat |
| :-: | :-- |
| 01-25 | Sving. Tabet af kontrol er midlertidigt. Køretøjet falder 1 trin i hastighed i 5 sekunder. |
| 26-40 | Skrid. Føreren skal kæmpe for at holde køretøjet under kontrol. Køretøjet falder 2 trin i hastighed i 10 sekunder. |
| 41-50 | Alvorligt skrid. Køretøjet ender med at vende i den forkerte retning og holder stille i 15 sekunder. |
| 51-60 | Rul. Køretøjet skrider og ruller, hvilket forårsager 3d10 skade på dets Struktur. Passagerer skal foretage vellykkede UDH-kast eller modtage 1d10 skade på 1d3 lokationer. |
| 61-70 | Alvorligt rul. Som ovenfor, men køretøjet modtager 3d10+10 skade, og passagerer modtager 1d10 skade, selv hvis UDH-kastet lykkes, og 2d10 hvis det fejler. |
| 71-80 | Totalskade. Som ovenfor, men køretøjet reduceres til 0 Struktur. Passagerer modtager samme skade som ved Alvorligt rul. |
| 81-90 | Eksplosion. Som ovenfor, men køretøjets brændstofsystem antændes og eksploderer inden for 1d20+10 sekunder. Hvis man ikke kan komme væk i tide, lider passagerer yderligere 1d6 forbrændingsskade på 1d6 lokationer. |
| 91-98 | Øjeblikkelig eksplosion. Som ovenfor, men eksplosionen sker øjeblikkeligt. |
| 99-00 | Katastrofalt sammenstød. Passagerer skal foretage et vellykket UDH-kast eller dø øjeblikkeligt. Skade som ved Totalskade påføres uanset udfaldet. |

---
## Eksempler på køretøjer

---

### Landkøretøjer

#### Interceptor

En tunet luksusbil, sportsvogn eller lignende; denne bil er bygget til fart og kan tage imod lige så meget, som den uddeler i kamp. Dette er den type køretøj, folk tænker på, når nogen siger "spionbil".

| Interceptor | |
| :- | :- |
| **Størrelse / Type** | Mellem militær |
| **Skrog** | 6 |
| **Struktur** | 40 |
| **Systemer** | 2 |
| **Hastighed** | Hurtig |
| **Håndtering** | Let |
| **Træk** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Våben** | Oliespild-udkast, røgudkast, sammenkoblede mellem-maskingeværer (2d6+3) |

<br>

---

#### Forfølgelsesmotorcykel

En let, hurtig motorcykel til hurtige forfølgelser. Forfølgelsesmotorcyklen bærer på en overraskelse – enten et par sammenkoblede maskingeværer eller to raketter.

| Forfølgelsesmotorcykel | |
| :- | :- |
| **Størrelse / Type** | Lille civil |
| **Skrog** | 2 |
| **Struktur** | 12 |
| **Systemer** | 1 |
| **Hastighed** | Hurtig |
| **Håndtering** | Let |
| **Træk** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Våben** | To raketter (4d6) eller sammenkoblede lette maskingeværer (2d6) |

<br>

---

#### Sedan

En standard 4-dørs sedan med plads nok til komfortabelt at rumme en fører og tre passagerer. Ofre bagageplads for at indbygge en overvågningspakke.

| Sedan | |
| :- | :- |
| **Størrelse / Type** | Mellem civil |
| **Skrog** | 4 |
| **Struktur** | 25 |
| **Systemer** | 2 |
| **Hastighed** | Rapid |
| **Håndtering** | Standard |
| **Træk** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Våben** | Ingen |

<br>

---

#### Undervandsbil

En to-personers bil, der kan skifte til vandbåren eller undervandstilstand for at rejse på eller under vandet. Leveres med en frontmonteret torpedo og et topmonteret jord-til-luft-missil.

| Undervandsbil | |
| :- | :- |
| **Størrelse / Type** | Mellem civil |
| **Skrog** | 6 |
| **Struktur** | 25 |
| **Systemer** | 2 |
| **Hastighed** | Hurtig |
| **Håndtering** | Standard |
| **Træk** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Våben** | Raket (5d6), Torpedo (4d10) |

<br>

---

#### Overvågningsvogn

En almindelig, umarkeret varevogn, der huser et hold agenter og en pakke med audiovisuelt optageudstyr.

| Overvågningsvogn | |
| :- | :- |
| **Størrelse / Type** | Stor civil |
| **Skrog** | 9 |
| **Struktur** | 60 |
| **Systemer** | 3 |
| **Hastighed** | Rolig |
| **Håndtering** | Standard |
| **Træk** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Våben** | Ingen |

<br>

---

#### Taktisk støttekøretøj

En pickup eller jeep med plads til en besætning på to i kabinen og en skytte stående på ladet, der betjener et svingmonteret mellem-maskingevær.

| Taktisk støttekøretøj | |
| :- | :- |
| **Størrelse / Type** | Mellem civil |
| **Skrog** | 6 |
| **Struktur** | 30 |
| **Systemer** | 2 |
| **Hastighed** | Rapid |
| **Håndtering** | Standard |
| **Træk** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Våben** | Monteret mellem-maskingevær (2d6) |

<br>

---

### Vandfartøjer

#### Speedbåd

En typisk speedbåd, bevæbnet med en bagmonteret mineudlægger.

| Speedbåd | |
| :- | :- |
| **Størrelse / Type** | Mellem civil |
| **Skrog** | 3 |
| **Struktur** | 24 |
| **Systemer** | 2 |
| **Hastighed** | Hurtig |
| **Håndtering** | Standard |
| **Træk** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Våben** | Mineudlægger (5d6) |

<br>

---

#### Yacht

Den type luksusyacht, som en oligark kunne eje. Sandsynligvis udstyret med en overvågningspakke til beskyttelse mod fjender, der forsøger at foretage sig noget fordækt.

| Yacht | |
| :- | :- |
| **Størrelse / Type** | Enorm civil |
| **Skrog** | 10 |
| **Struktur** | 75 |
| **Systemer** | 4 |
| **Hastighed** | Langsom |
| **Håndtering** | Formidabel |
| **Træk** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Våben** | Ingen |

<br>

---

### Fly/Rumskibe

#### Luftskib (Civilt passagerluftskib)

I stil med Hindenburg er denne klasse af transkontinentale luftskibe (og andre i samme klasse) 245 meter lange og kræver en besætning på 40 til 61 personer. De kan typisk bære en gruppe på 50 til 72 passagerer i luksuriøse omgivelser.

| Luftskib | |
| :- | :- |
| **Størrelse / Type** | Kolossal civil |
| **Skrog** | 10 |
| **Struktur** | 85 |
| **Systemer** | 5 |
| **Hastighed** | Tung |
| **Håndtering** | Herkulisk |
| **Træk** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjolde** | Ingen |
| **Våben** | Ingen |

<br>

---

#### Angrebshelikopter

Den traditionelle angrebshelikopter bruger sin avancerede overvågningsteknologi til at opsnappe telefon- og trådløse internetsignaler og spore individer og køretøjer selv i mørke gennem FLIR. Forsøg på at undgå sporeren gennem Stealth er Formidabelt.

| Angrebshelikopter | |
| :- | :- |
| **Størrelse / Type** | Stor militær |
| **Skrog** | 11 |
| **Struktur** | 50 |
| **Systemer** | 3 |
| **Hastighed** | Moderat |
| **Håndtering** | Let |
| **Træk** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjolde** | Ingen |
| **Våben** | 1 Gatling-gevær (3d6), 4 raketter (5d6) |

<br>

---

#### Multi-rolle jagerfly

Dette to-sædede landbaserede jagerfly (lignende De Havilland Mosquito) er velkendt for sin ydeevne og alsidighed. Dets bomberum er i stand til at bære enten to 250 lb. bomber (behandles som mellem-missiler med rækkevidde 0) eller en enkelt torpedo.

| Multi-rolle jagerfly | |
| :- | :- |
| **Størrelse / Type** | Stor militær |
| **Skrog** | 10 |
| **Struktur** | 45 |
| **Systemer** | 3 |
| **Hastighed** | Moderat |
| **Håndtering** | Standard |
| **Træk** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Skjolde** | Ingen |
| **Våben** | 4 næsemonterede Gatling-geværer (4d6+3), 1 bomberum (6d10 - se beskrivelse) |

<br>

---

#### Interstellart fragtskib (Let højteknologisk transport)

Dette lette transportfartøj kræver en minimumsbesætning på kun to personer, med plads til op til fire yderligere passagerer. Standardversionen er noteret her, men mange ejere vil anvende deres egne "særlige modifikationer" såsom skjult lastrum, Enhanced Performance, Superior Handling, EMP-modstand, Stealth osv.

| Interstellart fragtskib | |
| :- | :- |
| **Størrelse / Type** | Mellem civilt rumskib |
| **Skrog** | 10 |
| **Struktur** | 80 |
| **Systemer** | 2 |
| **Hastighed** | Rapid (Parsec-faktor på 3) |
| **Håndtering** | Standard |
| **Træk** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skjolde** | 8 |
| **Våben** | 2x Quad-monterede lasertårne (5d6) |

<br>

---

#### Generel kontaktenhed (Ultrahøjteknologisk rumskib)

Dette ekstremt højteknologiske stjerneskib er den fysiske repræsentation af et højt avanceret kunstigt Sind, der tager form af en to kilometer lang række af feltforbundne moduler. Modulerne har individuelle formål og inkluderer habitater, konstruktionsfaciliteter, lastområder, fødevareforarbejdning, fritidskomplekser, hangarbåse og endda nogle hemmelige enheder, som skibets intelligens sjældent, hvis nogensinde, diskuterer. Det behøver ingen menneskelig besætning, men kan nemt understøtte en passagerbefolkning på op til 100.000. Mange passagerer bliver født og dør om bord på kontaktenheden: mange er forbigående og kommer og går, som de ønsker.

| Generel kontaktenhed | |
| :- | :- |
| **Størrelse / Type** | Titanisk civilt rumskib |
| **Skrog** | 20 |
| **Struktur** | 10.000 |
| **Systemer** | 6 |
| **Hastighed** | Moderat (Parsec-faktor på 4. Ved dette teknologiniveau svarer en faktor til 1 time) |
| **Håndtering** | Formidabel |
| **Træk** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Skjolde** | 30 |
| **Våben** | Ingen som det finder værd at diskutere |

<br>