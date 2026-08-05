# Fordon

Fordon i *Mythras Imperative* hanteras på ett semi-abstrakt sätt. I huvudsak är de bakgrundsverktyg som används för att ta rollpersoner från punkt A till punkt B, utan behov av detaljerade beskrivningar eller statistik. Vid enstaka tillfällen kan dock spelledaren behöva detaljer för fordon när det är nödvändigt att representera dem i jakter eller stridssituationer.

Reglerna i detta avsnitt tillåter representation av de flesta typer av fordon på ett abstrakt sätt, avsett att ge flexibilitet och förbättra berättandet. Rymdskepp och farkoster fungerar något annorlunda, även om de bygger på liknande principer.

---
## Statistik

Alla fordon beskrivs utifrån sin struktur (Structure), skrov (Hull), hastighet (Speed), system (Systems), egenskaper (Traits) och sköldar (Shields, om sådana finns i spelvärlden).

- **[Storlek](0006_Vehicles.md?id=vehicle-size-table):** Alla fordon har en av sex storleksklasser som avgör värdet eller intervallet för de övriga egenskaperna. På grund av sin större inneboende storlek och rymdens fientliga miljöer har rymdskepp egna värdeintervall.
- **[Skrov](0006_Vehicles.md?id=terrestrial-hulls):** Representerar pansarvärde (Armor Points).
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Representerar ett fordons skadepoäng (Hit Points).
- **[Sköldar](0006_Vehicles.md?id=shields):** I spelvärldar med avancerad energiteknik kan sköldar finnas som skyddar fordonet, men som kan nötas ned under ihållande eld.
- **[System](0006_Vehicles.md?id=systems):** Representerar viktiga komponenter i fordonet, inklusive kraftkälla, besättningsutrymme, och så vidare.
- **[Hastighet](0006_Vehicles.md?id=speed):** Varje fordon har ett grundläggande hastighetsvärde.
- **[Egenskaper](0006_Vehicles.md?id=traits):** Ett fordon kan även ha en eller flera egenskaper. Egenskaper, likt de förmågor som tilldelas varelser i *Mythras Imperative* eller stridsstilsförmågor, erbjuder en ytterligare spelbeskrivning och fördel som speglar fordonets natur.
- **[Vapen](0006_Vehicles.md?id=weapons):** Precis som med egenskaper kan ett fordon utrustas med vapen om spelvärlden tillåter det. Några förslag och värden beskrivs nedan.


---
### Skrovstorlek, typ och struktur

Ett fordons storlek och syfte påverkar tjockleken på dess skrov och tåligheten hos dess inre struktur. En motorcykel har till exempel ett minimalt skrov, byggt för hastighet och smidighet. Ett "Land Ironclad" (ett massivt, band- eller hjuldrivet bepansrat vidunder, drivet av ång- eller dieselmotorer), som är ett mycket större fordon designat för slagfältet, har ett mycket större skrov. De jämförbara storlekarna på skrov (och hur många träffar från vapen de vanligtvis tål) sammanfattas i tabellerna för fordonsstorlek och skrov nedan.

När ett fordon tar skada reduceras den inkommande skadan av dess skrovvärde. Eventuell återstående skada subtraheras från fordonets strukturpoäng och har en procentuell chans, lika med den penetrerande skadan, att påverka ett system. Om ett fordon någonsin reduceras till noll i struktur är det antingen totalt förstört eller så illa tilltygat att det måste skrotas.

##### Markfordonsskrov

| Storlek | Struktur | Civilt skrovvärde | Militärt skrovvärde | Exempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 1-20 | 1-3 | 4-6 | Motorcykel, motorcykel med sidovagn, kompaktbil, kanot, kajak, roddbåt |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, skåpbil, pickup, lyxbil, sportbil, muskelbil, limousin, livbåt, racerbåt, hängglidare, autogyro |
| Stor | 41-60 | 4-9 | 10-12 | Lastbil, stretchlimo, SUV, buss, personbil, privatflygplan, segelflygplan, nöjeskryssare, stridsvagn, helikopter, ubåt |
| Enorm | 61-80 | 7-12 | 13-15 | Långtradare, passagerarflygplan, jetplan, kustbevakningsfartyg, yacht |
| Kolossal | 81-100 | 10-15 | 16-18 | Tåg, kryssningsfartyg, örlogsfartyg |

##### Rymdskeppsskrov

| Storlek | Struktur | Civilt skrovvärde | Militärt skrovvärde | Exempel |
| :-- | :-: | :-: | :-: | :-- |
| Liten | 10-50 | 4-9 | 10-12 | Enmansjaktplan |
| Medium | 51-150 | 7-12 | 13-15 | Lätt fraktskepp, skyttelfarkost |
| Stor | 151-450 | 10-15 | 16-18 | Tungt fraktskepp, kryssare |
| Enorm | 451-1350 | 13-18 | 19-21 | Eskortfregatt, lätt slagkryssare |
| Kolossal | 1351-4050 | 16-21 | 21-24 | Generationsskepp, tung slagkryssare |
| Gigantisk | 4050-12110 | 19-24 | 24-30 | Orbital habitat, planetförstörande station |


---
### Sköldar

Deflektorsköldar ger ett extra skyddslager för de fordon som kan utrustas med dem. Sköldar fungerar något annorlunda än skrovet på grund av sin ablerande natur. Om inkommande skada är lika med eller lägre än sköldens värde blockeras allt. Om skadan överstiger sköldvärdet minskar det överskjutande beloppet sköldstyrkan med den mängden.

*Till exempel: En trupptransport har en energisköldstyrka på 12 poäng. Om transporten träffas av en laser som gör 11 i skada, penetrerar den inte och har ingen effekt. Om transporten däremot träffas av en sprängverkan som gör 15 i skada, skulle de tre överskjutande poängen sänka sköldstyrkan till 9.*

När styrkan hos en deflektorsköld har sjunkit till noll kollapsar den. Eventuell kvarvarande skada går vidare till skrovet.

---
### System

Varje gång ett fordon tar skada som penetrerar dess skrov finns det en chans, lika med den penetrerande skadan, att ett livsviktigt system har påverkats.

*Till exempel: 10 i skada tilldelas en racerbåt – ett fordon med 3 i skrov och 24 i struktur. Skrovet räknas som pansar och reducerar skadan till 7. Detta dras av från de 24 strukturpoängen och det finns 7% chans att skada ett av fordonets system.*

Den skada ett system kan tåla baseras enbart på fordonets storlek. Detta modelleras av antalet träffar ett system kan ta, snarare än den faktiska mängden skada. En enda systemträff på ett litet fordon förstör omedelbart systemet. Det krävs två träffar för att demolera ett mediumstort fordons system, tre för ett stort fordon, och så vidare. Se [Tabell för systemskada](0006_Vehicles.md?id=system-damage-table) nedan.

System som är skadade, men ännu inte förstörda, lider av en funktionsförlust proportionell mot antalet tagna träffar – antingen en procentuell reduktion eller ett avdrag i svårighetsgrad för systemrelaterade handlingar. Den specifika effekten baseras på vad undersystemet kontrollerar, enligt [Tabell för systemkomponentskada](0006_Vehicles.md?id=system-component-damage-table) nedan. Beroende på vilket system som träffas kan effekterna vara katastrofala.

*Till exempel: Ett Land Ironclad – ett enormt fordon med 5 systemträffar – som träffas två gånger i drivlinan skulle förlora 40 % av sin kraft och sänka sin långsamma hastighet två grader till "Ponderous". På samma sätt skulle ett stort fraktskepp – med 3 systemträffar – som tar två träffar på motor/bränslesystemet få två graders avdrag på hastighet samt på användning av elektroniska system. En tredje träff skulle förstöra motor/bränslesystemet och därmed skeppet.*

<details>

<summary>* Errata från communityn</summary>

---

#### Skada

_Den ursprungliga texten här upprepade föregående stycke i onödan._

- _"Skada som överstiger skrovet penetrerar fordonet, skadar strukturen och kan påverka ett eller flera system. Beroende på fordonets storlek kan skadan vara mindre eller katastrofal._
- _Till exempel kan ett stort fordon ta upp till två träffar på ett system som dess drivlina. Den tredje träffen förstör drivlinan funktionellt. Varje gång systemet tar en träff förlorar det antingen en procentandel av sin funktion enligt tabellen för systemskada nedan eller så blir en kärnfunktion (såsom drivlina, styrning, kommunikation, etc.) en svårighetsgrad svårare per träff."_

_Ovanstående stycken är borttagna och ersatta av en förkortad redigering som lyfter fram ytterligare ett exempel på systemeffekt._

---

</details>

##### Tabell för systemskada

| Storlek | Systemträffar | Förlust per träff |
| :-- | :-: | :-- |
| Liten | 1 | 100% - Förstört |
| Medium | 2 | 1 grad eller 50% |
| Stor | 3 | 1 grad eller 33% |
| Enorm | 4 | 1 grad eller 25% |
| Kolossal | 5 | 1 grad eller 20% |
| Gigantisk | 6 | 1 grad eller 16% |

<details>

<summary>* Errata från communityn</summary>

---

##### Tabell för systemskada (Ursprunglig)

| Storlek | Systemträffar | Förlust per träff |
| :-- | :-: | :-- |
| Liten | 1 | 1 grad eller 50% |
| Medium | 2 | 1 grad eller 33% |
| Stor | 3 | 1 grad eller 25% |
| Enorm | 4 | 1 grad eller 20% |
| Kolossal | 5 | 1 grad eller 16% |
| Gigantisk | 6 | 1 grad eller 10% |

##### Tabell för fordonsstorlek (från [Skrovstorlek, typ och struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Storlek | Systemträffar |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

_De ursprungliga reglerna och exemplen är inkonsekventa:_
- _"System som är skadade, men ännu inte förstörda, lider av funktionsförlust. Detta är lika med proportionen av nuvarande träffar till dess totala kapacitet. Alltså skulle ett enormt fordon som träffas två gånger i drivlinan förlora 40% av sin kraft (2 träffar av max 5)"._
   - _Detta antyder att det enorma fordonet med 5 systemträffar bör förlora 20% per träff – men tabellen anger 16%._
- _"Till exempel kan ett stort fordon ta upp till tre träffar på ett system som dess drivlina. Den fjärde träffen förstör drivlinan funktionellt."_
  - _Detta antyder – liksom tabellen – 25% skada per systemträff, men stora fordon kan bara ta 3 systemträffar enligt samma tabell._
- _Tabellen för fordonsstorlek var redundant; den dök upp igen i fullständigare form (med kolumnen Förlust per träff) bara några rader senare._

_Detta gör det svårt att ha en konsekvent regel. För att lösa dessa problem har värdena och exemplen justerats för att matcha, och tabellen för fordonsstorlek togs bort._

---

</details>

##### Tabell för systemkomponentskada

| 1d10 | System | Skadad effekt | Förstörd effekt |
| :-: | :-- | :-- | :-- |
| 1 | Last | En mängd ägodelar eller utrustning i lastutrymmet, proportionell mot skadan, förstörs. | All last förstörs. |
| 2 | Kommunikation | Kommunikationsslag får en svårighetsgrad svårare för varje gång det skadas. | Fordonet kan inte längre kommunicera eller störa fiendens sensorer. |
| 3 | Kontroller | Slag för båt, körning eller pilot får en svårighetsgrad svårare för varje gång det skadas; omedelbart kontrollslag krävs. | Fordonet kan inte längre styras eller byta kurs. |
| 4 | Drivlina | Hastighet reduceras proportionellt mot skadan. | Fordonet stannar tvärt; flygplan störtar. |
| 5 | Besättning | Ett antal passagerare proportionellt mot skadan blir skadade. De drabbade får en allvarlig skada och måste lyckas med ett uthållighetsslag eller dö omedelbart. | Fordonets passagerare dör. |
| 6 | Motor/Bränsle | Hastighet reduceras proportionellt mot skadan. Elektroniska system blir en svårighetsgrad svårare att använda. | Fordonet förstörs i en våldsam explosion. |
| 7 | Sensorer | Slag för sensorer, navigering och vapenattacker får en svårighetsgrad svårare för varje gång det skadas. | Fordonet blir "blint". |
| 8 | Vapen | Ett antal vapensystem proportionellt mot skadan slutar fungera. | Fordonet kan inte längre avfyra vapen. |
| 9-0 | Inget | Inga system träffade; endast strukturskada. | N/A |

<details>

<summary>* Errata från communityn</summary>

---

##### Tabell för systemkomponentskada (Motor/Bränsle)

_Det ursprungliga resultatet var: "Maxhastigheten halveras..." Detta motsäger den generella regeln om skadestraff proportionellt mot systemskada: 25% skada = 25% straff. Dessutom nämner inte huvudreglerna i Mythras Companion denna halvering av hastigheten._

_Därför har texten ersatts med samma post som för drivlina: "Hastighet reduceras proportionellt mot skadan."_

---

</details>

---
### Hastighet

Eftersom fysik gällande hastighet, acceleration, luftmotstånd och tröghet är komplexa frågor, behövs förenklingar och fordon får därför ett abstrakt hastighetsvärde. Hastighetsegenskapen ska endast användas för att grovt bedöma om ett fordon kan köra om eller hinna ikapp ett annat.

Hastighetsvärdet representerar fordonets nominella driftshastighet. I nödsituationer kan denna prestanda ökas ett steg, med risk för slitage eller skada på motorerna. Även om samma tabell används för alla fordonstyper bör sunt förnuft tillämpas så att endast fordon av samma klass jämförs. Om ett rymdskepp och en sportbil båda har samma accelerationshastighet ("Rapid"), är det uppenbart att rymdskeppet är snabbare.

Att öka fordonets hastighet utöver dess standardvärde är möjligt vid ett lyckat slag för körning. Normalt är denna extra hastighet endast hållbar under en kort period – högst 1d6 minuter innan fordonet måste återgå till standardhastighet eller riskera skada på kraftkällan. Ett kritiskt slag för körning tillåter att perioden med högre hastighet utökas till 1d12 minuter.

En förare kan försöka pressa fordonets hastighet 2 steg, men detta kräver ett "Herculean"-slag för körning och fordonet kan som mest hålla denna hastighet i 1d3 minuter: ett kritiskt lyckat slag förlänger inte varaktigheten.

##### Tabell för hastighetsvärden

| Hastighetsvärde | Max hastighet för |
| :-- | :-: |
| Ponderous (Dåsig) | Kolossal |
| Sluggish (Trög) | |
| Slow (Långsam) | Enorm |
| Mediocre (Medelmåttig) | |
| Gentle (Mjuk) | Stor |
| Moderate (Måttlig) | |
| Rapid (Snabb) | Medium |
| Fast (Hurtig) | |
| Fleet (Il-snabb) | Liten |

---
### Egenskaper

Det maximala antalet egenskaper ett fordon kan ha beror på skrovstorlek och typ.

Varje fordon har en inneboende egenskap: det färdsätt för vilket det primärt designades. Därför har flygplan inneboende egenskapen "Airborne", båtar "Seaborne", och så vidare. Denna inneboende egenskap räknas inte in i det tillgängliga antalet egenskaper. Om ett fordon däremot inkluderar ett andra färdsätt – till exempel en flygande ubåt – skulle egenskapen "Airborne" behöva väljas som en av de tillgängliga egenskaperna.

Vissa egenskaper kanske inte är tillgängliga, beroende på spelvärldens teknologinivå; spelledare måste göra egna bedömningar om vilka egenskaper som kan tillämpas.

##### Tabell för tilldelning av fordonsegenskaper

| Storlek | Max egenskaper |
| :-- | :-: |
| Liten | 1 |
| Medium | 2 |
| Stor | 3 |
| Enorm | 4 |
| Kolossal | 5 |
| Gigantisk | 6 |

#### Airborne
Fordonet kan flyga i atmosfären.

#### All Terrain
Denna egenskap måste användas med markfordon. Fordonet kan färdas i ogästvänlig, svår och brant terräng genom att använda band, avancerad fjädring eller kraftfulla drivsystem.

#### Burrowing
Fordonet är designat för att gräva och köra genom marken. Det kan nå ett maxdjup lika med dess skrovvärde x 5 meter.

#### Camouflaged
Fordonet har antingen kamouflagemålning eller mimik-sensorer som gör att det smälter in i omgivningen. Försök att upptäcka fordonet visuellt blir en svårighetsgrad svårare.

#### Cargo
Fordonet är specifikt designat för att frakta last snarare än passagerare. Passagerarutrymmen är minimala och fordonets användbara utrymme är ägnat åt frakt med lämpliga sektioner, verktyg och ibland även klimatkontroll (t.ex. frysutrymmen). När fordonet är lastat är hastigheten två steg lägre än vad skrovstorleken normalt skulle tillåta.

#### Carrier
Fordonet är specifikt designat för att bära mindre, lätt bemannade eller fjärrstyrda farkoster av civilt eller militärt ursprung. Alla fordon med denna egenskap måste vara minst enorma. Antalet småfarkoster kan variera beroende på uppdragstyp men kan vara allt från 10 upp till fordonets strukturvärde.

#### Construction
Fordonet är utrustat för tungt byggnadsarbete. Alla fordon med denna egenskap har även "All Terrain", men hastigheten är två steg lägre än normalt. Fordonet är utrustat med relevanta verktyg såsom kranar, grävskopor, dumperkorgar osv.

#### EMP Resistant
Fordonet är skärmat mot pulsvapen (EMP).

#### Enhanced Performance
Fordonets hastighetsvärde är ett steg högre än max för dess storlek.

#### Ejector Seat
I en nödsituation skjuter en utskjutningsstol ut passagerarna flera hundra meter upp i luften, varpå en fallskärm fälls ut för säker landning. Fallskärm är valfritt. Rekommenderas ej för helikoptrar (Kamov Ka-52 Alligator är ett notabelt undantag).

#### FTL (Faster Than Light)
Endast rymdfarkoster. Farkosten är utrustad med en överljusmotor (hyperdrift, warpmotor, maskhålsgenerator eller liknande). FTL-driften har ett eget hastighetsvärde som mäter hur snabbt ett rymdskepp kan korsa en parsec (3,26 ljusår), enligt följande:

##### Tabell för FTL-hastighet

| Hastighetsvärde | Faktor för att korsa 1 parsec |
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

Tidsfaktorn bestäms av spelledaren beroende på hur avancerad FTL-tekniken är i spelvärlden. Till exempel kan basfaktorn vara 1 dag, vilket innebär att ett skepp med Ponderous FTL-drift tar 10 dagar för resan, medan ett skepp med Fleet FTL-drift gör det på 1 dag.

Det antas att skeppet har bränslereserver för antingen en returresa eller ett sätt att tanka vid destinationen. Alla storlekar av rymdskepp kan utrustas med FTL-drift, beroende på spelvärlden. FTL-drift kan inte aktiveras inom 1,5 astronomiska enheter från en stjärna.

#### Ground Vehicle
Fordonet kan färdas på marken.

#### Hover
Fordonet svävar över marken med hjälp av luftkudde eller antigravitationsrepulsorer.

#### Luxurious
Fordonet är designat för att bära passagerare med hög lyxnivå. Överflödigt lastutrymme används för lyxiga passagerarutrymmen, pooler, extra besättning och så vidare.

#### Rails
Fordonet förlitar sig på ett rälsystem. Fordon med denna egenskap kan naturligt uppnå en hastighet tre steg högre än vad skrovstorleken normalt tillåter, men är begränsade till att röra sig på räls.

#### Resilient
Alla system tål en extra träff mer än vad storleken normalt anger. Kan staplas – Resilient 2 innebär 2 extra träffar till kostnaden av två egenskaps-poäng.

#### Seaborne
Fordonet flyter på vatten.

#### Spacecraft
Fordonet är hermetiskt tillslutet mot vakuum och skärmat mot kosmisk strålning. Det kan ofta lämna och återinträda i atmosfärer.

#### Stealth
Endast flygplan. Designat för att undvika radar. Försök att upptäcka fordonet med elektroniska sensorer är en svårighetsgrad svårare.

#### Submersible
Fordonet kan sänka sig under havsytan till ett arbetsdjup av skrovvärdet x 10 meter. Kollapsdjupet är 1,5 gånger arbetsdjupet.

#### Superior Handling
Fordonets manövreringsförmåga är "Easy".

#### Surveillance Suite
Fordonet har dator, kommunikationsbasstation och utrustning för att avlyssna radiosignaler och mobiltelefonsignaler inom 100 meter.

#### Tough
Ett civilt fordon med denna egenskap hämtar sitt skrovvärde från militärkolumnen och har automatiskt maxstruktur. Ett militärt fordon hämtar sitt värde från nästa rad nedåt.

#### Tractor Beam
Endast rymdfarkoster. Kan fånga in och dra till sig farkoster med ett skrovvärde upp till två steg lägre än sitt eget.

#### VTOL
Vertikal start/landning. Inneboende för helikoptrar. För flygplan med fasta vingar innebär det alignerbara munstycken för att kontrollera lyft och attityd.

#### Waterborne (Gångfordon)
Fordonet rör sig med hjälp av ledade ben. Gångfordon är begränsade till maxhastigheten "Gentle". De kan dock byggas mycket högre än andra fordon. Denna egenskap möjliggör även rörelse under vatten.

#### Weaponized
Fordonet har anpassats för att bära vapen. Se avsnittet om vapen.

---
## Vapen

Vanligtvis är det endast militära skrov som är designade för vapen. Egenskapen "Weaponized" kan väljas för civila fordon. Max antal vapensystem är 1/10 av strukturpoängen.

##### Tabell för vapen efter storlek

| Storlek | Mark | Rymd |
| :-- | :-- | :-- |
| Liten | Lätt vapen (t.ex. automatkarbin) | Mediumvapen (t.ex. kulspruta, raketgevär) |
| Medium | Mediumvapen | Torn/Tunga vapen (t.ex. tunga kulsprutor) |
| Stor | Torn/Tunga vapen | Vapenbatteri (t.ex. artilleri) |
| Enorm | Vapenbatteri | Avancerade vapen (t.ex. missilsystem) |
| Kolossal | Avancerade vapen | Spinalmonterade vapen (ett) |
| Gigantisk | N/A | Spinalmonterade vapen (upp till tre) |

##### Statistik för exempelvapen

| Vapen | Skada | Räckvidd | Eldhastighet | Amm/Laddn |
| :-- | :-: | :-: | :-: | :-: |
| 50 tums kanon | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Gatling-kulspruta | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Medium missil | 6d10 | Max 200 km | 1 | 1/5 |
| Kryssningsmissil | 6d10+10 | Max 1000 km | 1 | 1/10 |
| Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Tung Laser | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilleribatteri | 5d6+6 | Max 50 km | 1 | 1/5 |
| Spinalbatteri | 10d6+6 | Max 20000 km | 1 | 1/10 |

---
## Hantering och manövrar

Undanmanövrar eller plötsliga svängar kräver lyckade slag för körning/pilot. Spelledaren kan kräva högre svårighetsgrad för ambitiösa manövrar. Misslyckande innebär förlorad kontroll: rulla på tabellen för förlorad kontroll.

##### Tabell för förlorad kontroll

| 1d100 | Resultat |
| :-- | :-- |
| 01-25 | Sladd. Tillfällig kontrollförlust. Hastighet sänks 1 steg i 5 sekunder. |
| 26-40 | Kraftig sladd. Hastighet sänks 2 steg i 10 sekunder. |
| 41-50 | Allvarlig sladd. Fordonet vänder fel och stannar i 15 sekunder. |
| 51-60 | Rullning. Fordonet skadar 3d10 på struktur. Passagerare måste lyckas med uthållighet eller få 1d10 skada på 1d3 träffområden. |
| 61-70 | Allvarlig rullning. Som ovan, men 3d10+10 skada. Passagerare får 1d10 skada även vid lyckat uthållighetsslag, 2d10 vid misslyckat. |
| 71-80 | Skrotad. Som ovan, men struktur blir 0. |
| 81-90 | Explosion. Som ovan, bränslesystemet antänds och exploderar inom 1d20+10 sekunder. |
| 91-98 | Omedelbar explosion. Som ovan, omedelbart. |
| 99-00 | Katastrofal krasch. Passagerare måste lyckas med uthållighet eller dö omedelbart. |

---
## Exempel på fordon

### Markfordon

#### Interceptor
En trimmad lyxbil eller sportbil, byggd för fart och strid. "Spionbilen".

| Interceptor | |
| :- | :- |
| **Storlek / Typ** | Medium Militär |
| **Skrov / Struktur** | 6 / 40 |
| **System** | 2 |
| **Hastighet** | Fast |
| **Hantering** | Easy |
| **Egenskaper** | Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Weaponized |
| **Vapen** | Oljeutsläpp, rökridå, dubbelmonterade medium-kulsprutor (2d6+3) |

#### Sedan
En standardbil med plats för 4.

| Sedan | |
| :- | :- |
| **Storlek / Typ** | Medium Civil |
| **Skrov / Struktur** | 4 / 25 |
| **System** | 2 |
| **Hastighet** | Rapid |
| **Hantering** | Standard |
| **Egenskaper** | Unobtrusive, Surveillance Suite |

### Farkoster (Urval)

#### Assault Helicopter
Använder FLIR och signalavlyssning.

| Assault Helicopter | |
| :- | :- |
| **Storlek / Typ** | Stor Militär |
| **Skrov / Struktur** | 11 / 50 |
| **System** | 3 |
| **Hastighet** | Moderate |
| **Egenskaper** | Airborne, Stealth, VTOL, etc. |
| **Vapen** | 1 Gatling (3d6), 4 Raketer (5d6) |

#### Interstellar Freighter
Lätt transport för besättning på två.

| Interstellar Freighter | |
| :- | :- |
| **Storlek / Typ** | Medium Civil Rymdskepp |
| **Skrov / Struktur** | 10 / 80 |
| **System** | 2 |
| **Hastighet** | Rapid (Parsec 3) |
| **Egenskaper** | Airborne, Cargo, FTL, Space Craft, VTOL |
| **Sköldar** | 8 |
| **Vapen** | 2x Quad-Laser torn (5d6) |