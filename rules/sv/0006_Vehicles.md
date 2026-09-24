# Fordon

Fordon i _Mythras Imperative_ behandlas på ett semi-abstrakt sätt. I huvudsak är de bakgrundsverktyg som används för att ta karaktärer från A till B, med litet behov av detaljerade beskrivningar eller statistik. Vid tillfällen kommer dock spelledare att behöva detaljer om fordon när det är nödvändigt att representera dem i jakter eller stridssituationer.

Reglerna i detta avsnitt tillåter representation av de flesta typer av fordon, men på ett abstrakt sätt som är avsett att medge flexibilitet och förbättra berättandet. Rymdskepp och farkoster är något annorlunda, även om de bygger på liknande principer.

---
## Statistik

Alla fordon beskrivs utifrån sin Struktur, Skrov, Hastighet, System, Egenskaper och Sköldar (om sådana finns i spelvärlden).

- **[Storlek](0006_Vehicles.md?id=vehicle-size-table):** Alla fordon har ett av sex Storleksvärden som bestämmer värdet eller intervallet för resten av egenskaperna. På grund av sin större inneboende storlek och rymdens fientliga miljöer har rymdskepp sitt eget intervall av värden.
- **[Skrov](0006_Vehicles.md?id=terrestrial-hulls):** Representerar Pansarpoäng.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Representerar ett fordons Träffpoäng.
- **[Sköldar](0006_Vehicles.md?id=shields):** I spelvärldar med avancerad teknik för energimanipulering kan sköldar finnas som skyddar fordonet, men som kan försvagas under ihållande eld.
- **[System](0006_Vehicles.md?id=systems):** Representerar vitala komponenter i fordonet, inklusive kraftkälla, besättningsutrymme och så vidare.
- **[Hastighet](0006_Vehicles.md?id=speed):** Varje fordon har ett grundläggande Hastighetsvärde.
- **[Egenskaper](0006_Vehicles.md?id=traits):** Ett fordon kan också ha en eller flera Egenskaper. Egenskaper, likt de förmågor som tilldelas varelser i reglerna för _Mythras Imperative_, eller Stridstils-egenskaper, erbjuder en ytterligare spelbeskrivning och fördel som återspeglar fordonets natur.
- **[Vapen](0006_Vehicles.md?id=weapons):** Precis som med Egenskaper kan ett fordon vara utrustat med vapen om spelvärlden tillåter det. Några förslag på exempel och värden detaljeras nedan.


---
### Skrovstorlek, Typ och Struktur

Ett fordons storlek och syfte påverkar dess skrovs tjocklek och dess inre strukturs motståndskraft. En motorcykel har till exempel ett minimalt skrov, byggt som den är för hastighet och smidighet. Ett "Land Ironclad" (en massiv, band- eller hjuldriven pansarkoloss, driven av ång- eller dieselmotorer), som är ett mycket större fordon designat för slagfältet, har ett mycket större skrov. De jämförbara storlekarna på skrov (och hur många träffar från vapen de typiskt kan motstå) sammanfattas i tabellerna för fordonsstorlek och skrov nedan.

Närhelst ett fordon lider skada, reduceras den inkommande skadan av dess Skrovvärde. Eventuell kvarvarande skada dras av från fordonets Strukturpoäng och har en procentuell chans, lika med den penetrerande skadan, att påverka ett System. Om fordonets Struktur någonsin reduceras till noll är det antingen fullständigt förstört eller så illa skadat att det måste skrotas.

##### Markbundna Skrov

| Storlek | Struktur | Civilt Skrovvärde | Militärt Skrovvärde | Exempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 1-20 | 1-3 | 4-6 | Motorcykel, motorcykel med sidovagn, kompakt eller subkompakt bil, kanot, kajak, roddbåt |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, skåpbil, pickup, lyxbil, lyxsportbil, muskelbil, limousine, livbåt, racerbåt, hängglidare, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastbil, sträckt limo, SUV, buss, personbärare, privatflygplan, segelflygplan, nöjeskryssare, stridsvagn, helikopter, ubåt |
| Enorm | 61-80 | 7-12 | 13-15 | Semitrailer, trafikflygplan, jetplan, kustbevakningsfartyg, yacht |
| Kolossal | 81-100 | 10-15 | 16-18 | Tåg, kryssningsfartyg, örlogsfartyg |

##### Rymdskeppsskrov

| Storlek | Struktur | Civilt Skrovvärde | Militärt Skrovvärde | Exempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 10-50 | 4-9 | 10-12 | Enmansjaktplan |
| Medium | 51-150 | 7-12 | 13-15 | Lätt fraktskepp, pendelfarkost |
| Stor | 151-450 | 10-15 | 16-18 | Tungt fraktskepp, kryssare |
| Enorm | 451-1350 | 13-18 | 19-21 | Eskortfregatt, lätt slagkryssare |
| Kolossal | 1351-4050 | 16-21 | 21-24 | Generationsskepp, tung slagkryssare |
| Gigantisk | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planetförstörande stridsstation |


---
### Sköldar

Deflektorsköldar ger ett ytterligare skyddslager för de fordon som kan montera dem. Sköldar fungerar något annorlunda än Skrovet på grund av deras ablativa natur. Om inkommande skada är lika med eller mindre än sköldarnas värde blockeras allt. Om skadan överstiger sköldvärdet minskar det överskjutande beloppet sköldstyrkan med den mängden.

_Till exempel har en trupptransport en energisköldstyrka på 12 poäng. Om transporten träffas av en laser för 11 skada penetrerar den inte och får ingen ytterligare effekt. Om transporten däremot träffas av en sprängverkan som ger 15 skada, skulle de överskjutande tre poängen sänka sköldstyrkan till 9._

När styrkan hos en deflektorsköld har sjunkit till noll kollapsar den. Eventuell kvarvarande skada går vidare till skrovet.

---
### System

Varje gång ett fordon lider skada som penetrerar skrovet finns en chans, lika med den penetrerande skadan, att ett vitalt System har påverkats.

_Till exempel, 10 skada tillämpas på en Racerbåt - ett fordon med 3 Skrov och 24 Struktur. Skrovet räknas som pansar och reducerar skadan till 7. Detta dras av från de 24 Strukturpoängen och det finns en 7% chans att skada ett av fordonets System._

Den skada ett System kan uthärda baseras enbart på fordonets storlek. Detta modelleras genom antalet träffar ett System kan ta, snarare än den faktiska mängden skada. En enskild Systemträff på ett litet fordon förstör omedelbart systemet. Det krävs två träffar för att demolera ett Medium-stort fordons system, tre för ett Stort fordon, och så vidare. Se [Tabell för systemskada](0006_Vehicles.md?id=system-damage-table) nedan.

System som är skadade, men ännu inte förstörda, lider en funktionsförlust proportionell mot antalet mottagna träffar - antingen en procentuell minskning eller ett Gradsavdrag för Systemuppgifter. Den specifika effekten baseras på vad undersystemet kontrollerar, enligt detaljerna i [Tabell för systemkomponentskada](0006_Vehicles.md?id=system-component-damage-table) nedan. Beroende på vilket System som träffas kan effekterna bli katastrofala.

_Till exempel, ett Land Ironclad - ett Enormt fordon med 5 Systemträffar - som träffas två gånger i drivlinan skulle förlora 40% av sin kraft och skulle sänka sin Långsamma Hastighet två Grader till Tungrodd. På samma sätt skulle ett Stort fraktskepp - med 3 Systemträffar - som tar två träffar på Motor/Bränslesystemet få ett två Graders avdrag på Hastighet samt för elektroniska system. En tredje träff skulle förstöra Motor/Bränslesystemet och skeppet med det._


<details>

<summary>* Community-rättelser</summary>

---

#### Skada


_Den ursprungliga texten här var ursprungligen placerad längre bort. Placerad direkt efter System-avsnittet upprepar den onödigt det föregående stycket._

- _"Skada som överstiger Skrovet penetrerar fordonet, skadar strukturen och påverkar möjligen ett eller flera system. Beroende på fordonets storlek kan skadan vara mindre eller katastrofal._
- _Till exempel kan ett Stort fordon ta upp till två träffar på ett system såsom dess drivlina. Den tredje träffen förstör funktionellt drivlinan. Varje gång systemet tar en träff, förlorar det antingen en procentandel av sin funktion enligt beskrivningen i kolumnen för Förlust per träff i Tabell för systemskada nedan, eller så blir en kärnfunktion (såsom Drivlina, Pilot, Kommunikation, och så vidare) en svårighetsgrad svårare per uthärdad träff."_

_Ovanstående stycken är borttagna och en förkortad redigering tar deras plats för att lyfta fram ett annat exempel på Systemeffekt._

---

</details>

##### Tabell för systemskada

| Storlek | Systemträffar | Förlust per träff |
| :-- | :-: | :-- |
| Liten | 1 | 100% - Förstörd |
| Medium | 2 | 1 Grad eller 50% |
| Stor | 3 | 1 Grad eller 33% |
| Enorm | 4 | 1 Grad eller 25% |
| Kolossal | 5 | 1 Grad eller 20% |
| Gigantisk | 6 | 1 Grad eller 16% |


<details>

<summary>* Community-rättelser</summary>

---

##### Tabell för systemskada (Ursprunglig)

| Storlek | Systemträffar | Förlust per träff |
| :-- | :-: | :-- |
| Liten | 1 | 1 Grad eller 50% |
| Medium | 2 | 1 Grad eller 33% |
| Stor | 3 | 1 Grad eller 25% |
| Enorm | 4 | 1 Grad eller 20% |
| Kolossal | 5 | 1 Grad eller 16% |
| Gigantisk | 6 | 1 Grad eller 10% |

##### Tabell för fordonsstorlek (från [Skrovstorlek, Typ och Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Storlek | Systemträffar |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

_De ursprungliga reglerna och exemplen är inkonsekventa:_
- _"System som är skadade, men ännu inte förstörda, lider en förlust i funktionalitet. Detta är lika med proportionen av nuvarande träffar till dess totala kapacitet. Sålunda skulle ett Enormt fordon som träffas två gånger i drivlinan förlora 40% av sin kraft (2 träffar av maximalt 5)"._
   - _Detta antyder att det Enormt fordonet som visas med 5 Systemträffar borde förlora 20% vid varje träff - men tabellen säger 16%._
- _"Till exempel kan ett Stort fordon ta upp till tre träffar på ett system såsom dess drivlina. Den fjärde träffen förstör funktionellt drivlinan."_
  - _Detta antyder - liksom tabellen - 25% skada per Systemträff, men Stora fordon kan bara ta 3 Systemträffar enligt samma tabell._
- _Även om det inte är inkonsekvent, var tabellen för fordonsstorlek redundant; den dök upp igen i fullständigare form (med tillägget av kolumnen Förlust per träff) bara några rader senare._

_Detta gör det svårt att ha en konsekvent regel. För att hantera dessa problem ändras värdena och exemplen för att matcha, och tabellen för fordonsstorlek togs bort._

---

</details>


##### Tabell för systemkomponentskada

| 1t10 | System | Skadat resultat | Förstört resultat |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mängd ägodelar eller utrustning lagrad i lastutrymmet, proportionell mot skadan, förstörs. | All last förstörs. |
| 2 | Kommunikation | Kommunikationsslag lider en ytterligare Svårighetsgrad av svårighet varje gång de skadas. | Fordonet kan inte längre kommunicera eller förfalska fiendens sensorer. |
| 3 | Kontroller | Slag för Båt, Fordon eller Pilot lider en ytterligare Svårighetsgrad varje gång de skadas; omedelbart Kontrollslag krävs. | Fordonet kan inte längre styras eller ändra kurs. |
| 4 | Drivlina | Hastighet reducerad med en mängd proportionell mot skada. | Fordonet stannar tvärt; flygplan kraschar. |
| 5 | Besättning | Ett antal passagerare proportionellt mot skadan blir förluster. De drabbade lider ett Stort sår och måste lyckas med ett Uth-slag eller dö omedelbart. | Fordonets passagerare dör. |
| 6 | Motor / Bränsle | Hastighet reducerad med en mängd proportionell mot skada. Elektroniska system en Svårighetsgrad svårare att använda. | Fordonet förstörs i en katastrofal explosion. |
| 7 | Sensorer | Slag för Sensor, Navigation och Vapenattack lider en ytterligare Svårighetsgrad varje gång de skadas. | Fordonet görs blint. |
| 8 | Vapen | Ett antal vapensystem proportionellt mot skadan blir ur funktion. | Fordonet kan inte längre avfyra vapen. |
| 9-0 | Inget | Inga system träffade; endast Strukturskada. | N/A |

<details>

<summary>* Community-rättelser</summary>

---

##### Tabell för systemkomponentskada (Motor/Bränsle)

_Det ursprungliga resultatet var följande: "Maxhastigheten halveras..." Detta motsäger den generella regeln för skadeavdrag i proportion till Systemskada: 25% skada = 25% avdrag. Dessutom nämner inte de fullständiga reglerna i Mythras Companion denna halvering av hastighet._

_Som ett resultat ersätts texten med samma post från Drivline-systemen: "Hastighet reducerad med en mängd proportionell mot skada."_

---

</details>


---
### Hastighet

Eftersom fysiken för hastighet, acceleration, luftmotstånd och tröghet (för att nämna några) är komplexa frågor, behövs viss förenkling och fordon tilldelas därför ett abstrakt hastighetsvärde. Hastighetsegenskapen bör endast användas för att grovt bedöma om ett fordon kan köra om eller komma ifatt ett annat.

Hastighetsvärdet representerar ett fordons nominella operativa hastighet. I nödsituationer kan denna prestanda ökas med ett steg, med risk för slitage eller skada på motorerna. Även om samma tabell används för alla fordonstyper bör sunt förnuft tillämpas så att endast fordon av samma klass jämförs. Om till exempel ett rymdskepp och en sportbil båda har samma accelerationshastighet, Snabb, så bör det vara uppenbart att rymdskeppet är jämförelsevis snabbare.

Att öka ett fordons Hastighet utöver dess standardvärde är möjligt genom ett lyckat Fordonsslag. Vanligtvis är denna extra hastighet endast hållbar under en kort period – inte mer än 1t6 minuter innan fordonet måste gå ner till sin standardhastighet eller riskera skada på sin kraftkälla. Ett kritiskt Fordonsslag gör att perioden med högre hastighet kan ökas till 1t12 minuter.

En förare kan försöka pressa fordonets hastighet med 2 steg, men detta kräver ett Herkuliskt Fordonsslag och det maximala fordonet kan hålla denna hastighet är 1t3 minuter: en Kritisk framgång förlänger inte den ökade hastighetens varaktighet.

##### Tabell för hastighetsvärde

| Hastighetsvärde | Maxhastighet För |
| :-- | :-: |
| Tungrodd | Enorm |
| Slö | |
| Långsam | Stor |
| Medioker | |
| Måttlig | Medium |
| Snabb | |
| Hastig | Liten |

---
### Egenskaper

Det maximala antalet egenskaper ett fordon kan ha beror på skrovstorlek och typ.

Varje fordon har en inneboende egenskap: det färdsätt som det primärt är designat för. Därför har flygplan inneboende egenskapen Luftburen, båtar Sjöburen, och så vidare. Denna inneboende egenskap räknas inte in i det tillgängliga antalet egenskaper. Men om ett fordon skulle inkludera ett andra färdsätt — en flygande ubåt till exempel — skulle egenskapen Luftburen behöva tas som en av dess tillgängliga egenskaper.

Vissa egenskaper kanske inte är tillgängliga, beroende på spelvärldens tekniknivå; Spelledare måste göra egna bedömningar om vilka egenskaper som kan tillämpas.

##### Tabell för fördelning av fordonsegenskaper

| Storlek | Max Egenskaper |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

#### Luftburen

Fordonet är kapabelt till atmosfärisk flygning.

#### Terränggående

Denna Egenskap måste användas med markfordon. Fordonet kan korsa ogästvänlig, svår och brant terräng med hjälp av antingen larvfötter, avancerad fjädring och drivsystem, eller kraftfulla drivdifferentialer.

#### Grävande

Fordonet är designat för att gräva och tunneldriva genom marken. Det kan nå ett maximalt djup lika med sitt Skrovvärde x5 meter.

#### Kamouflerad

Fordonet besitter antingen kamouflagefärg eller mimetiska sensorer som gör att det kan smälta in i sin miljö. Försök att upptäcka fordonet visuellt är en grad svårare.

#### Last

Fordonet är specifikt designat för att frakta last snarare än passagerare. Passagerarutrymmen hålls till ett minimum där resten av fordonets användbara utrymme ägnas åt lastförvaring med lämpliga sektioner, verktyg och till och med miljöanpassning (såsom fryssektioner för transport av lättfördärvliga varor). När fordonet är lastat är dess hastighet två steg lägre än vad dess skrovstorlek vanligtvis skulle tillåta.

#### Transportfartyg

Fordonet är specifikt designat för att bära mindre, lätt besatta eller möjligen fjärrstyrda fordon av antingen civilt eller militärt slag. Alla fordon som besitter denna egenskap måste vara minst Enorma. Antalet små farkoster som bärs kan variera beroende på uppdragstyp och syfte men kan vara så få som 10 till så många som fordonets Strukturvärde.

#### Konstruktion

Fordonet är utrustat för tungt byggnadsarbete. Alla fordon med denna egenskap har även egenskapen Terränggående, men hastigheten är två steg lägre än vad deras skrovstorlek vanligtvis skulle tillåta. Fordonet är utrustat med uppgiftstillpassade verktyg såsom kranarmar, grävskopor, tippvagnar och så vidare.

#### EMP-resistent

Fordonet är skärmat mot elektromagnetiska pulsanfall.

#### Förbättrad prestanda

Fordonets Hastighetsvärde är ett steg högre än maximum för dess storlek.

#### Ejektorsäte

I händelse av en nödsituation skjuter ett ejektorsäte ut passagerare flera hundra meter upp i luften och fäller sedan ut en fallskärm för att möjliggöra en säker landning. Fallskärm är valfritt. Rekommenderas inte för helikoptrar (Kamov Ka-52 Alligator är ett anmärkningsvärt undantag).

#### FTL

Endast Rymdskepp. Farkosten är utrustad med en motor för hastigheter snabbare än ljuset (vare sig det är hyperdrift, varpdrift, maskhålsgenerator eller liknande). FTL-driften har ett separat Hastighetsvärde som i huvudsak mäter den hastighet med vilken ett rymdskepp kan korsa en enskild parsek (3,26 ljusår, eller 31 biljoner kilometer eller 19 biljoner miles), enligt följande:

##### Tabell för FTL-hastighetsvärde

| Hastighetsvärde | Faktor för att korsa 1 parsek |
| :-- | :-: |
| Tungrodd | 10 |
| Slö | 8 |
| Långsam | 7 |
| Medioker | 6 |
| Måttlig | 5 |
| Snabb | 4 |
| Hastig | 3 |
| Mycket snabb | 2 |
| Blixtsnabb | 1 |

Faktortiden är upp till Spelledaren att besluta, beroende på hur avancerad spelvärldens FTL-utveckling är. Till exempel kan basfaktorn vara 1 dag, vilket innebär att ett skepp med en Tungrodd FTL-drift tar 10 dagar att slutföra resan, medan ett fartyg med en Blixtsnabb FTL-drift slutför resan på 1 dag. Annorstädes, där FTL-teknik är betydligt mindre effektiv, kan faktortiden mätas i månader snarare än dagar.

Det antas att skeppet har bränslereserver för att antingen göra en returresa eller ett sätt att tanka vid destinationen.

Anta att vilken storlek av rymdskepp som helst kan utrustas med en FTL-drift, även om detta återigen beror på spelvärlden.

FTL-drifter kan inte aktiveras inom 1,5 Astronomiska Enheter från en stjärna (cirka 225 miljoner kilometer, eller 270 miljoner miles). Detta innebär att skepp måste använda en underljusdrift för att flytta sig till ungefär Mars avstånd innan FTL-systemet aktiveras.

#### Markfordon

Fordonet är kapabelt till marktransport.

#### Svävare

Fordonet svävar ovanför marken med antingen en luftkudde eller en antigravitationsrepulsor.

#### Lyxig

Fordonet är specifikt designat för att bära passagerare på en viss nivå av lyx. Överflödigt lastutrymme ägnas åt lyxiga passagerarboenden, simbassänger, bubbelpooler, extra besättning för att tillgodose passagerarnas nycker, och så vidare.

#### Räls

Fordonet förlitar sig på ett rälsystem. Fordon med denna egenskap kan naturligt uppnå ett Hastighetsvärde tre steg högre än vad deras skrovstorlek vanligtvis skulle tillåta, men är uppenbarligen begränsade till rörelse endast på rälsystemet.

#### Motståndskraftig

Alla system kan motstå en ytterligare träff mer än vad som normalt bestäms av Storlek. Denna egenskap kan staplas — så Motståndskraftig 2 indikerar att system kan motstå 2 träffar mer än vanligt till en kostnad av två Egenskapspoäng.

#### Sjöburen

Fordonet är flytande på vatten.

#### Rymdfarkost

Fordonet är förseglat mot vakuum och skärmat mot kosmisk strålning och kan, beroende på design, vara kapabelt att lämna och återinträda i atmosfären samt upprätthålla flygning inom en atmosfär.

#### Stealth

Endast Flygplan. Fordonet är designat för att undvika upptäckt av radar och andra långdistanssensorsystem. Försök att upptäcka fordonet med elektroniska sensorer är en grad svårare.

#### Ubåt

Fordonet är kapabelt att sänka sig under ytan i ett hav till ett arbetsdjup av dess Skrovvärde x10 meter. Kollapsdjupet — det absoluta maximum som ubåten kan nå utan att bli krossad — är 1,5 gånger dess arbetsdjup.

#### Överlägsen hantering

Fordonets hantering klassas som Enkel.

#### Övervakningssvit

Fordonet har en inbyggd dator, kommunikationsbasstation, mottagare för avlyssningssignaler och apparatur för att avlyssna närliggande smartphonessignaler inom 100 meter.#### Tålig

Ett civilt fordon med detta drag hämtar sin Skrov från den militära kolumnen och har automatiskt maximal Struktur. Ett militärfordon med detta drag hämtar sitt Skrov och sin Struktur från raden under.

#### Traktorstråle

Endast rymdfarkoster. Skeppet är utrustat med en traktorstråle som kan fånga in och dra till sig fordon med ett skrovvärde på upp till två steg under sitt eget. En enorm rymdfarkost skulle alltså kunna attrahera och hålla fast ett skrov av upp till medelstorlek.

#### VTOL

Vertikal start/landning (Vertical Takeoff/Landing). Detta drag är inneboende för helikoptrar och liknande fordon som använder en kombination av rotorer för att skapa lyftkraft. När det tillämpas på flygplan med fasta vingar indikerar det användningen av fasta eller riktbara styrraketer för att kontrollera attityd, uppstigning och nedstigning i luften.

#### Amfibisk

Fordonet framdriver sig själv med hjälp av ledade ben. Gående fordon är begränsade till hastigheten Långsam, oavsett deras STO. Gångare kan dock byggas till höjder som skulle vara instabila för fordon utrustade med andra typer av framdrivningsmedel.

Detta fordon är kapabelt till undervattensrörelse.

#### Beväpnat

Fordonet har anpassats för att hysa vapensystem. Vapensystem diskuteras nedan i avsnittet [Vapen](0006_Vehicles.md?id=weapons).


---
## Vapen

Vanligtvis är endast militära skrov designade för att rymma vapen (fästpunkter, ammunitionsförvaring, kontrollsystem). Draget "Beväpnat" kan väljas för civila fordon som kan ha vapenkrav.

Det maximala antalet vapensystem som ett fordon kan stödja är lika med 1/10 av dess Strukturpoäng (så ett fordon med 40 Struktur skulle kunna stödja 4 vapensystem, om det är ett militärfordon eller ett civilt fordon med draget Beväpnat).

Vapensystem beror på fordonets STO. Den maximala typen av vapensystem för olika STO visas i tabellerna nedan.


##### Vapen efter STO Tabell 

| STO | Markfordon | Rymdfarkost |
| :-- | :-- | :-- |
| Liten | Lätt vapen (t.ex. automatkarbin) | Medeltungt vapen (t.ex. kulspruta, raketkastare) |
| Medel | Medeltungt vapen (t.ex. kulspruta, raketkastare) | Tornmonterat/Tungt vapen (t.ex. tunga länkade kulsprutor, miniguns) |
| Stor | Tornmonterat/Tungt vapen (t.ex. tunga länkade kulsprutor, miniguns) | Vapenbatteri (t.ex. fältartilleri) |
| Enorm | Vapenbatteri (t.ex. fältartilleri) | Avancerade vapen (t.ex. missilsystem) |
| Jättelik | Avancerade vapen (t.ex. missilsystem) | Ryggmonterade vapen (endast ett) |
| Kolossal | NA | Ryggmonterade vapen (upp till 3) |

##### Exempel på vapenstatistik 
 
| Vapen | Skada | Räckvidd | Eldhastighet | Amm/Ladd |
| :-- | :-: | :-: | :-: | :-: |
| 50-tums kanon | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling-kulspruta | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Medeltung missil/torped | 6d10 | Max räckvidd 200km | 1 | 1/5 |
| Stor/Kryssningsmissil | 6d10+10 | Max räckvidd 1000km | 1 | 1/10 |
| Laser/Plasmakanon | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Tung laser/plasmakanon | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilleribatteri | 5d6+6 | Max räckvidd 50km | 1 | 1/5 |
| Ryggmonterat batteri | 10d6+6 | Max räckvidd 20000km | 1 | 1/10 |

_Räckvidder anges i meter och kilometer._

_Eldhastigheter avser enkelskott, halvautomatisk och helautomatisk eld._

_Ammunition är avfyrningskapacitet innan omladdning krävs. Laddning är omladdningstid i stridsrundor, förutsatt att full besättning finns tillgänglig._

---
## Hantering och manövrar

Undanmanövrar eller plötsliga manövrar kräver ett lyckat slag för Fordon/Pilot för att säkerställa att föraren eller piloten behåller kontrollen över fordonet. De flesta fordon är designade och byggda för att tåla enstaka påfrestningar, men spelledaren kan bestämma att en viss manöver kräver ett slag med högre svårighetsgrad, beroende på hur ambitiös den är. Misslyckande innebär att kontrollen över fordonet går förlorad: slå på tabellen för Förlorad kontroll.

Notera att tabellen för Förlorad kontroll endast gäller markfordon. Liknande effekter kan tillämpas på luft- och rymdfarkoster, men spelledare behöver justera motiveringen för den specifika effekten. Ett flygplan kan till exempel gå in i en spinn istället för att sladda.

Dessutom kan fordonets inneboende hantering ha en ytterligare inverkan på Fordon-slaget. Hantering är antingen Enkel, Standard, Svår, Formidabel eller Herkulesartad och bestämmer startpunkten för Fordon-slaget när en manöver utförs. Svårighetsgraden för manövern appliceras sedan på hanteringen för att bestämma den slutgiltiga svårigheten.

Exempelvis har en högpresterande motorcykel inbyggda gyrostabilisatorer som ger den Hanteringen Enkel. Föraren vill utföra en 180-graders sladdsväng för att undkomma en förföljare, en manöver som spelledaren bedömer som en ytterligare svårighetsgrad. Föraren måste därför göra sitt Fordon-slag mot Standard istället för Enkel. Om han hade försökt samma manöver på en icke-stabiliserad motorcykel skulle Fordon-slaget varit mot Svår.

Överlägsen hantering är ett drag. Om ett fordon inte har draget som en del av sin beskrivning är standardvärdet Standard för alla fordon av storlek Stor och neråt. Enorma och Jättelika fordon har i sig hanteringsdragen Formidabel respektive Herkulesartad, och spelledaren står fritt att avgöra att vissa manövrar helt enkelt är omöjliga att utföra på grund av fordonets storlek.

##### Tabell för förlorad kontroll 

| 1d100 | Resultat |
| :-: | :-- |
| 01-25 | Krängning. Kontrollförlusten är tillfällig. Fordonet sänker sin hastighet med 1 steg i 5 sekunder. |
| 26-40 | Sladd. Föraren måste kämpa för att behålla kontrollen över fordonet. Fordonet sänker sin hastighet med 2 steg i 10 sekunder. |
| 41-50 | Allvarlig sladd. Fordonet hamnar åt fel håll och står stilla i 15 sekunder. |
| 51-60 | Rullning. Fordonet sladdar och rullar, vilket ger 3d10 skada på dess Struktur. Passagerare måste lyckas med UTH-slag eller ta 1d10 skada på 1d3 träffområden. |
| 61-70 | Kraftig rullning. Samma som ovan, men fordonet tar 3d10+10 skada och passagerare tar 1d10 skada även om UTH-slaget lyckas, och 2d10 om det misslyckas. |
| 71-80 | Skrotning. Samma som ovan men fordonet reduceras till 0 Struktur. Passagerare tar samma skada som vid Kraftig rullning. |
| 81-90 | Explosion. Samma som ovan men fordonets bränslesystem antänds och exploderar inom 1d20+10 sekunder. Om de inte lyckas ta sig ut drabbas passagerare av ytterligare 1d6 brännskada på 1d6 områden. |
| 91-98 | Omedelbar explosion. Samma som ovan men explosionen sker omedelbart. |
| 99-00 | Katastrofal krasch. Passagerare måste lyckas med UTH-slag eller dödas omedelbart. Skada som för Skrotning tas oavsett utfall. |


---
## Exempel på fordon

---

### Markfordon

#### Interceptor

En trimmad lyxbil, sportbil eller liknande; denna bil är byggd för att köra fort och ge lika mycket som den tar i en strid. Detta är den typ av fordon folk tänker på när någon säger "spionbil".

| Interceptor | |
| :- | :- |
| **STO / Typ** | Medelstort militärfordon |
| **Skrov** | 6 |
| **Struktur** | 40 |
| **System** | 2 |
| **Hastighet** | Snabb |
| **Hantering** | Enkel |
| **Drag** | [Ejektorstol](0006_Vehicles.md?id=ejector-seat), [Förbättrad prestanda](0006_Vehicles.md?id=enhanced-performance), [Överlägsen hantering](0006_Vehicles.md?id=superior-handling), [Övervakningssvit](0006_Vehicles.md?id=surveillance-suite), [Beväpnat](0006_Vehicles.md?id=weaponized) |
| **Vapen** | Oljeutsläpp, rökutsläpp, dubbelmonterade medeltunga kulsprutor (2d6+3) |

<br>

---

#### Jaktmotorcykel

En lätt, snabb motorcykel för snabba jakter. Jaktmotorcykeln bär på en överraskning – antingen ett par länkade kulsprutor eller två raketer.

| Jaktmotorcykel | |
| :- | :- |
| **STO / Typ** | Litet civilt fordon |
| **Skrov** | 2 |
| **Struktur** | 12 |
| **System** | 1 |
| **Hastighet** | Snabb |
| **Hantering** | Enkel |
| **Drag** | [Överlägsen hantering](0006_Vehicles.md?id=superior-handling), [Beväpnat](0006_Vehicles.md?id=weaponized) |
| **Vapen** | Två raketer (4d6) eller dubbelmonterade lätta kulsprutor (2d6) |

<br>

---

#### Sedan

En vanlig 4-dörrars sedan med tillräckligt med utrymme för att bekvämt rymma förare och tre passagerare. Offrar lastutrymme för att införliva en övervakningssvit.

| Sedan | |
| :- | :- |
| **STO / Typ** | Medelstort civilt fordon |
| **Skrov** | 4 |
| **Struktur** | 25 |
| **System** | 2 |
| **Hastighet** | Rapid |
| **Hantering** | Standard |
| **Drag** | [Diskret](0006_Vehicles.md?id=unobtrusive), [Övervakningssvit](0006_Vehicles.md?id=surveillance-suite) |
| **Vapen** | Inga |

<br>

---

#### Undervattensbil

En tvåpersonersbil som kan växla till amfibiskt eller undervattensläge för att färdas på eller under vatten. Levereras med en frontmonterad torped och en takmonterad luftvärnsmissil.

| Undervattensbil | |
| :- | :- |
| **STO / Typ** | Medelstort civilt fordon |
| **Skrov** | 6 |
| **Struktur** | 25 |
| **System** | 2 |
| **Hastighet** | Snabb |
| **Hantering** | Standard |
| **Drag** | [Förbättrad prestanda](0006_Vehicles.md?id=enhanced-performance), [Amfibisk](0006_Vehicles.md?id=submersible), [Amfibisk](0006_Vehicles.md?id=waterborne), [Beväpnat](0006_Vehicles.md?id=weaponized) |
| **Vapen** | Raket (5d6), Torped (4d10) |

<br>

---

#### Övervakningsskåpbil

En vanlig, omärkt skåpbil som hyser ett team av agenter och en svit av ljud- och bildinspelningsutrustning.

| Övervakningsskåpbil | |
| :- | :- |
| **STO / Typ** | Stort civilt fordon |
| **Skrov** | 9 |
| **Struktur** | 60 |
| **System** | 3 |
| **Hastighet** | Långsam |
| **Hantering** | Standard |
| **Drag** | [Övervakningssvit](0006_Vehicles.md?id=surveillance-suite), [Tålig](0006_Vehicles.md?id=tough) |
| **Vapen** | Inga |

<br>

---

#### Taktiskt stödfordon

En pickup eller jeep med plats för en tvåpersonersbesättning i hytten och en skytt som står på flaket och manövrerar en svängmonterad medeltung kulspruta.

| Taktiskt stödfordon | |
| :- | :- |
| **STO / Typ** | Medelstort civilt fordon |
| **Skrov** | 6 |
| **Struktur** | 30 |
| **System** | 2 |
| **Hastighet** | Rapid |
| **Hantering** | Standard |
| **Drag** | [All terräng](0006_Vehicles.md?id=all-terrain), [Beväpnat](0006_Vehicles.md?id=weaponized) |
| **Vapen** | Monterad medeltung kulspruta (2d6) |


<br>

---

### Vattenfarkoster

#### Snabbbåt

En typisk snabbbåt, beväpnad med en bakmonterad minspridare.

| Snabbbåt | |
| :- | :- |
| **STO / Typ** | Medelstort civilt fordon |
| **Skrov** | 3 |
| **Struktur** | 24 |
| **System** | 2 |
| **Hastighet** | Snabb |
| **Hantering** | Standard |
| **Drag** | [Förbättrad prestanda](0006_Vehicles.md?id=enhanced-performance), [Amfibisk](0006_Vehicles.md?id=waterborne), [Beväpnat](0006_Vehicles.md?id=weaponized) |
| **Vapen** | Minspridare (5d6) |

<br>

---

#### Yacht

Den typ av lyxyacht som en oligark kan äga. Sannolikt utrustad med en övervakningssvit för att skydda mot fiender som försöker ställa till med trubbel.

| Yacht | |
| :- | :- |
| **STO / Typ** | Jättelikt civilt fordon |
| **Skrov** | 10 |
| **Struktur** | 75 |
| **System** | 4 |
| **Hastighet** | Långsam |
| **Hantering** | Formidabel |
| **Drag** | [Luxuös](0006_Vehicles.md?id=luxurious), [Övervakningssvit](0006_Vehicles.md?id=surveillance-suite), [Amfibisk](0006_Vehicles.md?id=waterborne) |
| **Vapen** | Inga |


<br>

---

### Flyg- och rymdfarkoster

#### Luftskepp (Civilt passagerarluftskepp)

I likhet med Hindenburg är denna klass av transkontinentala luftskepp 245 meter långt och kräver en besättning på 40 till 61 personer. Det kan vanligtvis bära en komplettering på 50 till 72 passagerare i lyxiga utrymmen.

| Luftskepp | |
| :- | :- |
| **STO / Typ** | Enormt civilt fordon |
| **Skrov** | 10 |
| **Struktur** | 85 |
| **System** | 5 |
| **Hastighet** | Tungfotad |
| **Hantering** | Herkulesartad |
| **Drag** | [Luftburen](0006_Vehicles.md?id=airborne), [Luxuös](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Sköldar** | Inga |
| **Vapen** | Inga |

<br>

---

#### Attackhelikopter

Den traditionella attackhelikoptern använder sin avancerade övervakningsteknologi för att avlyssna telefon- och trådlösa internetsignaler, samt spåra individer och fordon även i mörker via FLIR. Försök att undvika spåraren genom att använda "Smyga" är Formidabla.

| Attackhelikopter | |
| :- | :- |
| **STO / Typ** | Stort militärfordon |
| **Skrov** | 11 |
| **Struktur** | 50 |
| **System** | 3 |
| **Hastighet** | Moderat |
| **Hantering** | Enkel |
| **Drag** | [Luftburen](0006_Vehicles.md?id=airborne), [Förbättrad prestanda](0006_Vehicles.md?id=enhanced-performance), [Smyga](0006_Vehicles.md?id=stealth), [Överlägsen hantering](0006_Vehicles.md?id=superior-handling), [Övervakningssvit](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Sköldar** | Inga |
| **Vapen** | 1 Gatling-kulspruta (3d6), 4 raketer (5d6) |

<br>

---

#### Flerrollsjaktplan

Detta tvåsitsiga landbaserade jaktplan (liknande De Havilland Mosquito) är välkänt för sin prestanda och mångsidighet. Dess bombrum kan bära antingen två 250-pundsbomber (behandlas som medeltunga missiler med räckvidd 0) eller en enstaka torped.

| Flerrollsjaktplan | |
| :- | :- |
| **STO / Typ** | Stort militärfordon |
| **Skrov** | 10 |
| **Struktur** | 45 |
| **System** | 3 |
| **Hastighet** | Moderat |
| **Hantering** | Standard |
| **Drag** | [Luftburen](0006_Vehicles.md?id=airborne), [Förbättrad prestanda](0006_Vehicles.md?id=enhanced-performance) |
| **Sköldar** | Inga |
| **Vapen** | 4 nosmonterade Gatling-kulsprutor (4d6+3), 1 bombrum (6d10 - se beskrivning) |

<br>

---

#### Interstellärt fraktskepp (Lätt högteknologisk transport)

Denna lätta transport kräver en minimibesättning på endast två personer, med plats för upp till fyra extra passagerare. Standardmodellen noteras här, men många ägare tillämpar sina egna "specialmodifieringar" såsom dolt lastutrymme, förbättrad prestanda, överlägsen hantering, EMP-resistens, smygegenskaper och så vidare.

| Interstellärt fraktskepp | |
| :- | :- |
| **STO / Typ** | Medelstort civilt rymdskepp |
| **Skrov** | 10 |
| **Struktur** | 80 |
| **System** | 2 |
| **Hastighet** | Rapid (Parsec-faktor 3) |
| **Hantering** | Standard |
| **Drag** | [Luftburen](0006_Vehicles.md?id=airborne), [Last](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Rymdfarkost](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Sköldar** | 8 |
| **Vapen** | 2x fyrdubbelt monterade laserkanontorn (5d6) |


<br>

---

#### Generell kontaktenhet (Ultrahögteknologiskt rymdskepp)

Detta extremt högteknologiska stjärnskepp är den fysiska representationen av ett högt avancerat artificiellt Medvetande, som tar formen av en två kilometer lång serie av fältanslutna moduler. Modulerna har individuella syften och inkluderar habitat, konstruktionsanläggningar, lastområden, matbearbetning, fritidskomplex, hangarer och till och med några hemlighetsfulla enheter som skeppets intelligens sällan, om ens någonsin, diskuterar. Det behöver ingen mänsklig besättning, men kan lätt stödja en passagerarpopulation på upp till 100 000. Många passagerare föds och dör ombord på Kontaktenheten: många är tillfälliga och kommer och går som de vill.

| Generell kontaktenhet | |
| :- | :- |
| **STO / Typ** | Kolossalt civilt rymdskepp |
| **Skrov** | 20 |
| **Struktur** | 10 000 |
| **System** | 6 |
| **Hastighet** | Moderat (Parsec-faktor 4. Vid denna teknologinivå motsvarar en faktor 1 timme) |
| **Hantering** | Formidabel |
| **Drag** | [Luftburen](0006_Vehicles.md?id=airborne), [Last](0006_Vehicles.md?id=cargo), [Bärarskepp](0006_Vehicles.md?id=carrier), [Konstruktion](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxuös](0006_Vehicles.md?id=luxurious), [Rymdfarkost](0006_Vehicles.md?id=spacecraft), [Överlägsen hantering](0006_Vehicles.md?id=superior-handling), [Traktorstråle](0006_Vehicles.md?id=tractor-beam) |
| **Sköldar** | 30 |
| **Vapen** | Inga som den bryr sig om att diskutera |

<br>