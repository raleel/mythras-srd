# Járművek

A _Mythras Imperative_ járműveit fél-absztrakt módon kezeljük. Lényegében háttéreszközök, amelyek arra szolgálnak, hogy eljuttassák a karaktereket A pontból B pontba, anélkül, hogy részletes leírásra vagy statisztikákra lenne szükség. Alkalmanként azonban a Kalandmestereknek szükségük lehet a járművek részleteire, amikor azokat üldözésekben vagy harci szituációkban kell megjeleníteni.

Az ebben a részben található szabályok lehetővé teszik a legtöbb járműtípus reprezentálását, de egy olyan absztrakt módon, amelynek célja a rugalmasság és a történetmesélés elősegítése. A űrhajók és csillaghajók némileg eltérőek, bár hasonló alapelvekre épülnek.

---
## Statisztikák

Minden járművet a Szerkezet, Páncélzat (Hull), Sebesség, Rendszerek, Jellemvonások (Traits) és Pajzsok (ha a környezetben jelen vannak) alapján írunk le.

- **[Méret](0006_Vehicles.md?id=vehicle-size-table):** Minden jármű hat Méretkategória egyikébe tartozik, amely meghatározza a többi jellemző értékét vagy tartományát. A nagyobb belső méretük és az űr ellenséges környezete miatt a csillaghajók saját értékekkel rendelkeznek.
- **[Páncélzat](0006_Vehicles.md?id=terrestrial-hulls):** A jármű Páncélpontjait jelöli.
- **[Szerkezet](0006_Vehicles.md?id=terrestrial-hulls):** A jármű Életerőpontjait jelöli.
- **[Pajzsok](0006_Vehicles.md?id=shields):** A fejlett energia-manipulációs technológiával rendelkező környezetekben pajzsok védhetik a járművet, amelyek azonban a folyamatos tűz alatt elhasználódhatnak.
- **[Rendszerek](0006_Vehicles.md?id=systems):** A jármű létfontosságú részegységeit képviselik, beleértve az erőművet, a legénységi szakaszt és így tovább.
- **[Sebesség](0006_Vehicles.md?id=speed):** Minden jármű rendelkezik egy alapvető Sebességértékkel.
- **[Jellemvonások](0006_Vehicles.md?id=traits):** A jármű egy vagy több Jellemvonással is rendelkezhet. A Jellemvonások, hasonlóan a _Mythras Imperative_ szabályaiban a lényeknek adott Képességekhez vagy a Harci Stílus Jellemvonásokhoz, további játékbeli leírást és előnyt biztosítanak, tükrözve a jármű természetét.
- **[Fegyverek](0006_Vehicles.md?id=weapons):** A Jellemvonásokhoz hasonlóan, a jármű a környezetnek megfelelően fegyverekkel is felszerelhető. Néhány javasolt példa és érték az alábbiakban olvasható.


---
### Páncélzat mérete, típusa és szerkezete

A jármű mérete és célja befolyásolja a páncélzat vastagságát és a belső szerkezet ellenállóképességét. Egy motorkerékpár például minimális páncélzattal rendelkezik, mivel sebességre és mozgékonyságra tervezték. Egy Szárazföldi Páncélos (egy hatalmas, lánctalpas vagy kerekeken guruló, gőz- vagy dízelmotorral hajtott behemót), mivel sokkal nagyobb, harctéri célokra tervezett jármű, sokkal nagyobb páncélzattal bír. A páncélzatok összehasonlító méreteit (és hogy tipikusan hány fegyvertalálatot bírnak ki) az alábbi Járműméret és Páncélzat táblázatok foglalják össze.

Amikor egy jármű sérülést szenved, a beérkező sebzést a Páncélzat értéke csökkenti. A fennmaradó sebzést a jármű Szerkezetpontjaiból vonjuk le, és a behatoló sebzéssel egyenlő százalékos esély van arra, hogy egy Rendszer is sérüljön. Ha a jármű Szerkezete eléri a nullát, akkor vagy teljesen megsemmisül, vagy olyan súlyosan megrongálódik, hogy le kell selejtezni.

##### Földi Páncélzatok

| Méret | Szerkezet | Polgári Páncélzat | Katonai Páncélzat | Példa |
| :-- | :-: | :-: | :-: | :-- |
| Kicsi | 1-20 | 1-3 | 4-6 | Motorkerékpár, oldalkocsis motor, kompakt autó, kenu, kajak, evezős csónak |
| Közepes | 21-40 | 1-6 | 7-9 | Szedán, furgon, pickup, luxusautó, sportkocsi, limuzin, mentőcsónak, motorcsónak, sárkányrepülő, autogiro |
| Nagy | 41-60 | 4-9 | 10-12 | Teherautó, nyújtott limuzin, SUV, busz, személyszállító, személyi repülőgép, vitorlázórepülő, jacht, tank, helikopter, tengeralattjáró |
| Hatalmas | 61-80 | 7-12 | 13-15 | Kamion, utasszállító repülőgép, sugárhajtású gép, parti őrségi hajó |
| Óriási | 81-100 | 10-15 | 16-18 | Vonat, óceánjáró, hadihajó |

##### Csillaghajó Páncélzatok

| Méret | Szerkezet | Polgári Páncélzat | Katonai Páncélzat | Példa |
| :-- | :-: | :-: | :-: | :-- |
| Kicsi | 10-50 | 4-9 | 10-12 | Együléses vadászgép |
| Közepes | 51-150 | 7-12 | 13-15 | Könnyű teherhajó, komp |
| Nagy | 151-450 | 10-15 | 16-18 | Nehéz teherhajó, cirkáló |
| Hatalmas | 451-1350 | 13-18 | 19-21 | Kísérő fregatt, könnyű csatacirkáló |
| Óriási | 1351-4050 | 16-21 | 21-24 | Generációs hajó, nehéz csatacirkáló |
| Kolosszális | 4050-12110 | 19-24 | 24-30 | Űrbázis, bolygópusztító csataállomás |


---
### Pajzsok

A deflektorpajzsok további védelmi réteget biztosítanak azoknak a járműveknek, amelyekre felszerelhetők. A pajzsok némileg másképp működnek, mint a Páncélzat, az elhasználódó természetük miatt. Ha a beérkező sebzés egyenlő a pajzs értékével vagy kisebb annál, akkor az teljesen blokkolva lesz. Ha a sebzés meghaladja a pajzs értékét, a különbözet a pajzs erejét csökkenti ezzel az összeggel.

_Például: egy csapatszállítónak 12 pontos energiapajzsa van. Ha a szállítót egy lézer találja el 11 sebzéssel, az egyszerűen nem hatol át, és nincs további hatása. Ha viszont a szállítót egy 15 sebzést okozó robbanás éri, a felesleges 3 pont 9-re csökkenti a pajzs erejét._

Amint a deflektorpajzs ereje nullára esik, a pajzs összeomlik. A fennmaradó sebzés ezután a páncélzatra hat.

---
### Rendszerek

Valahányszor a jármű a páncélzatán áthatoló sérülést szenved, a behatoló sebzéssel egyenlő esély van arra, hogy egy létfontosságú Rendszer sérülést szenvedjen.

_Például: 10 sebzés éri a motorcsónakot – egy 3 Páncélzatú és 24 Szerkezetpontú járművet. A Páncélzat mint páncél csökkenti a sebzést 7-re. Ezt levonjuk a 24 Szerkezetpontból, és 7% esély van arra, hogy a jármű egyik Rendszere megsérüljön._

Az, hogy egy Rendszer mennyi sérülést képes elviselni, kizárólag a jármű méretén alapul. Ezt nem a tényleges sebzésmennyiség, hanem a Rendszert érő találatok száma modellezi. Egyetlen Rendszertalálat egy Kicsi járműnél azonnal tönkreteszi az adott Rendszert. Két találat szükséges egy Közepes méretű jármű Rendszereinek tönkretételéhez, három egy Nagynál, és így tovább. Lásd az alábbi [Rendszersérülés Táblázatot](0006_Vehicles.md?id=system-damage-table).

A sérült, de még nem tönkretett Rendszerek a kapott találatok számával arányos funkcióvesztést szenvednek el – vagy százalékos csökkenést, vagy fokozatbüntetést a Rendszer-próbákban. A konkrét hatás attól függ, mit vezérel az adott alrendszer, az alábbi [Rendszerkomponens-sérülési Táblázat](0006_Vehicles.md?id=system-component-damage-table) részletei szerint. Attól függően, melyik Rendszert éri a találat, a hatások katasztrofálisak lehetnek.

_Például: egy Szárazföldi Páncélos – egy Óriási jármű, amely 5 Rendszertalálatot bír ki – kétszer kap találatot a Meghajtásba, ezzel 40%-os teljesítménycsökkenést szenved, és Lassú sebessége két fokozattal Nehézkesre csökken. Hasonlóan, egy Nagy teherhajó – amely 3 Rendszertalálatot bír ki – két találatot kapva a Hajtómű/Üzemanyag rendszerbe, két fokozatnyi büntetést kap a Sebességre, valamint az Elektronikus rendszerek használatára. A harmadik találat megsemmisíti a Hajtómű/Üzemanyag rendszert, és vele a hajót is._

<details>

<summary>* Közösségi Helyesbítés</summary>

---

#### Sebzés


_- Az eredeti szöveg itt feleslegesen ismételte az előző bekezdést._

- _"A Páncélzatot meghaladó sebzés behatol a járműbe, károsítva a Szerkezetet és esetleg egy vagy több rendszert érintve. A jármű méretétől függően a sérülés lehet csekély vagy katasztrofális._
- _Például: egy Nagy jármű legfeljebb két találatot kaphat egy rendszerbe, például a Meghajtásba. A harmadik találat funkcionálisan tönkreteszi a Meghajtást. Valahányszor a rendszer találatot kap, vagy elveszíti funkciójának egy százalékát a Rendszersérülés Táblázat 'Veszteség találatonként' oszlopa szerint, vagy egy alapvető funkció (például Meghajtás, Kormányzás, Kommunikáció stb.) minden kapott találat után egy Nehézségi Fokozattal nehezebbé válik."_

_- A fenti bekezdések eltávolításra kerültek, és egy rövidített szerkesztés került a helyükre, amely egy másik példát említ a Rendszerhatásra._

---

</details>

##### Rendszersérülés Táblázat

| Méret | Rendszertalálatok | Veszteség találatonként |
| :-- | :-: | :-- |
| Kicsi | 1 | 100% - Megsemmisült |
| Közepes | 2 | 1 fokozat vagy 50% |
| Nagy | 3 | 1 fokozat vagy 33% |
| Hatalmas | 4 | 1 fokozat vagy 25% |
| Óriási | 5 | 1 fokozat vagy 20% |
| Kolosszális | 6 | 1 fokozat vagy 16% |

<details>

<summary>* Közösségi Helyesbítés</summary>

---

##### Rendszersérülés Táblázat (Eredeti)

| Méret | Rendszertalálatok | Veszteség találatonként |
| :-- | :-: | :-- |
| Kicsi | 1 | 1 fokozat vagy 50% |
| Közepes | 2 | 1 fokozat vagy 33% |
| Nagy | 3 | 1 fokozat vagy 25% |
| Hatalmas | 4 | 1 fokozat vagy 20% |
| Óriási | 5 | 1 fokozat vagy 16% |
| Kolosszális | 6 | 1 fokozat vagy 10% |

##### Járműméret Táblázat (a [Páncélzat mérete, típusa és szerkezete](0006_Vehicles.md?id=hull-size-type-and-structure) részből)

| Méret | Rendszertalálatok |
| :-- | :-: |
| Kicsi | 1 |
| Közepes | 2 |
| Nagy | 3 |
| Hatalmas | 4 |
| Óriási | 5 |
| Kolosszális | 6 |

_- Az eredeti szabályok és példák következetlenek:_
- _"A sérült, de még nem tönkretett Rendszerek funkcióvesztést szenvednek el. Ez egyenlő a jelenlegi találatok arányával a teljes kapacitáshoz képest. Így egy Óriási jármű, amely két találatot kapott a Meghajtásba, a teljesítményének 40%-át veszítené el (2 találat az 5-ből)."_
   - _Ez arra utal, hogy az 5 Rendszertalálattal rendelkező Óriási járműnek minden találat után 20%-ot kellene veszítenie – de a táblázat 16%-ot ír._
- _"Például: egy Nagy jármű legfeljebb három találatot kaphat egy rendszerbe, például a Meghajtásba. A negyedik találat funkcionálisan tönkreteszi a Meghajtást."_
  - _"Ez arra utal – ahogy a táblázat is –, hogy 25% sebzés jár Rendszertalálatonként, de a Nagy járművek ugyanezen táblázat szerint csak 3 Rendszertalálatot bírnak ki._
- _Bár nem következetlen, a Járműméret Táblázat redundáns volt; néhány sorral később újra megjelent teljesebb formában (hozzáadva a 'Veszteség találatonként' oszlopot)._

_- Emiatt nehéz következetes szabályt alkalmazni. A problémák megoldása érdekében az értékeket és példákat összehangoltuk, és a Járműméret Táblázatot eltávolítottuk._

---

</details>


##### Rendszerkomponens-sérülési Táblázat

| 1d10 | Rendszer | Sérült eredmény | Tönkrement eredmény |
| :-: | :-- | :-- | :-- |
| 1 | Rakomány | A raktérben tárolt tárgyak vagy felszerelések egy része, a sérüléssel arányosan, megsemmisül. | A teljes rakomány megsemmisül. |
| 2 | Kommunikáció | A kommunikációs próbák minden sérülés után egy további Nehézségi Fokozattal nehezebbek. | A jármű nem tud kommunikálni vagy zavarni az ellenséges érzékelőket. |
| 3 | Irányítás | A Hajózás, Vezetés vagy Pilóta próbák minden sérülés után egy további Nehézségi Fokozattal nehezebbek; azonnali Irányítás-próba szükséges. | A jármű többé nem kormányozható, és nem tud irányt változtatni. |
| 4 | Meghajtás | A sebesség a sérüléssel arányos mértékben csökken. | A jármű megáll; a repülőgépek lezuhannak. |
| 5 | Személyzet | A sérüléssel arányos számú utas szenved sérülést. Az érintettek Súlyos Sebet kapnak, és sikeres Állóképesség-próbát kell tenniük, különben azonnal meghalnak. | A jármű utasai meghalnak. |
| 6 | Hajtómű / Üzemanyag | A sebesség a sérüléssel arányos mértékben csökken. Az elektronikus rendszerek használata egy Nehézségi Fokozattal nehezebb. | A jármű katasztrofális robbanással megsemmisül. |
| 7 | Érzékelők | Az Érzékelés, Navigáció és Fegyvertámadás próbák minden sérülés után egy további Nehézségi Fokozattal nehezebbek. | A jármű vak. |
| 8 | Fegyverek | A sérüléssel arányos számú fegyverrendszer válik működésképtelenné. | A jármű többé nem tud fegyvert használni. |
| 9-0 | Nincs | Egyik rendszer sem sérült; csak a Szerkezet sérült. | N/A |

<details>

<summary>* Közösségi Helyesbítés</summary>

---

##### Rendszerkomponens-sérülési Táblázat (Hajtómű/Üzemanyag)

_- Az eredeti eredmény a következő volt: "A maximális sebesség feleződik..." Ez ellentmond a Rendszersérülések arányos büntetésére vonatkozó általános szabálynak: 25% sérülés = 25% büntetés. Ráadásul a Mythras Companion teljes szabályzata nem említi ezt a sebességfelezést._

_- Ennek eredményeként a szöveget a Meghajtás rendszereknél használt bejegyzésre cseréltük: "A sebesség a sérüléssel arányos mértékben csökken."_

---

</details>


---
### Sebesség

Mivel a sebesség, gyorsulás, légellenállás és tehetetlenség fizikája összetett kérdés, némi egyszerűsítésre van szükség, ezért a járművek absztrakt sebességbesorolást kapnak. A Sebesség jellemzőt csak arra szabad használni, hogy nagyjából megítéljük, egy jármű képes-e megelőzni vagy utolérni egy másikat.

A sebességbesorolás a jármű névleges üzemi sebességét jelöli. Vészhelyzetekben ez a teljesítmény egy fokozattal növelhető, a motorok kopásának vagy károsodásának kockázatával. Bár ugyanazt a táblázatot használják minden járműtípushoz, a józan észt kell alkalmazni, hogy csak azonos kategóriájú járműveket hasonlítsunk össze. Például, ha egy csillaghajó és egy sportkocsi gyorsulása is "Gyors", nyilvánvaló, hogy a csillaghajó relatíve gyorsabb.

A jármű sebességének növelése az alapérték fölé sikeres Vezetés-próbával lehetséges. Általában ez a többletsebesség csak rövid ideig tartható – legfeljebb 1d6 percig, mielőtt a járműnek vissza kellene térnie alapsebességére, különben kockáztatja az erőmű károsodását. Egy kritikus Vezetés-próba lehetővé teszi a magasabb sebesség idejének 1d12 percre történő növelését.

A vezető megkísérelheti a jármű sebességét 2 fokozattal növelni, de ez egy Heroikus Vezetés-próbát igényel, és a jármű legfeljebb 1d3 percig bírja ezt a sebességet: a Kritikus Siker nem hosszabbítja meg a megnövelt sebesség időtartamát.

##### Sebességbesorolási Táblázat

| Sebességbesorolás | Max. Sebesség (Méret) |
| :-- | :-: |
| Nehézkes | Óriási |
| Lomha | |
| Lassú | Hatalmas |
| Közepes | |
| Mérsékelt | Nagy |
| Megfontolt | |
| Gyors | Közepes |
| Sebes | |
| Szélvész | Kicsi |


---
### Jellemvonások

A jármű által birtokolható jellemvonások maximális száma a páncélzat méretétől és típusától függ.

Minden jármű rendelkezik egy belső jellemvonással: azzal az utazási móddal, amelyre elsődlegesen tervezték. Ezért a repülőgépek belsőleg rendelkeznek a Légi jellemvonással, a csónakok a Vízi jellemvonással, és így tovább. Ez a belső jellemvonás nem számít bele az elérhető jellemvonások számába. Ha azonban egy jármű egy második utazási módot is tartalmaz – például egy repülő tengeralattjárót –, akkor a Légi jellemvonást az elérhető jellemvonásai közül kell választani.

Egyes jellemvonások nem feltétlenül elérhetőek, a környezet technológiai szintjétől függően; a Kalandmestereknek maguknak kell eldönteniük, milyen jellemvonások alkalmazhatók.

##### Jármű Jellemvonás Elosztási Táblázat

| Méret | Max. Jellemvonás |
| :-- | :-: |
| Kicsi | 1 |
| Közepes | 2 |
| Nagy | 3 |
| Hatalmas | 4 |
| Óriási | 5 |
| Kolosszális | 6 |

#### Légi (Airborne)

A jármű képes légköri repülésre.

#### Terepjáró (All Terrain)

Ezt a jellemvonást Földi járműveknél kell használni. A jármű képes áthaladni barátságtalan, nehéz és meredek terepen, lánctalpak, fejlett felfüggesztés és meghajtórendszerek vagy erőteljes differenciálművek segítségével.

#### Fúró (Burrowing)

A járművet úgy tervezték, hogy a föld alatt fúrjon és alagutakat vájjon. A maximális mélység a Páncélzat Értéke x 5 méter.

#### Álcázott (Camouflaged)

A jármű álcafestékkel vagy mimetikus érzékelőkkel rendelkezik, amelyek lehetővé teszik, hogy környezetébe olvadjon. A vizuális észlelési kísérletek egy fokozattal nehezebbek.

#### Rakomány (Cargo)

A járművet kifejezetten rakomány, nem pedig utasok szállítására tervezték. Az utasfülkét minimálisra csökkentették, a jármű többi használható helyét pedig rakománytárolásra, megfelelő rekeszekkel, szerszámokkal, sőt környezeti szabályozással (például hűtőszekciók romlandó áruk szállításához) alakították ki. Rakománnyal telítve a jármű sebessége két fokozattal alacsonyabb, mint amit a páncélzat mérete egyébként megengedne.

#### Hordozó (Carrier)

A járművet kifejezetten kisebb, könnyű legénységű vagy távirányítású polgári vagy katonai járművek szállítására tervezték. Bármely jármű, amely rendelkezik ezzel a jellemvonással, legalább Óriási kell legyen. A szállított kis járművek száma küldetéstípustól és céltól függően változhat, de lehet akár 10 vagy annyi, amennyi a jármű Szerkezetpontja.

#### Építő (Construction)

A jármű nehéz építési munkákra van felszerelve. Minden ezzel a jellemvonással rendelkező jármű rendelkezik a Terepjáró jellemvonással is, de a sebessége két fokozattal alacsonyabb, mint amit a páncélzat mérete egyébként megengedne. A jármű feladat-specifikus eszközökkel, például daruval, markolókanállal, billenőkocsival stb. van felszerelve.

#### EMP-Ellenálló (EMP Resistant)

A jármű árnyékolt az elektromágneses impulzustámadások ellen.

#### Fokozott Teljesítmény (Enhanced Performance)

A jármű sebességbesorolása egy fokozattal magasabb, mint a méretéhez tartozó maximum.

#### Katapultülés (Ejector Seat)

Vészhelyzet esetén a katapultülés több száz méter magasra repíti az utasokat, majd ejtőernyőt nyit a biztonságos leszálláshoz. Az ejtőernyő opcionális. Helikopterekhez nem ajánlott (a Kamov Ka-52 Alligator figyelemre méltó kivétel).

#### FTL (Fénysebességnél gyorsabb utazás)

Csak űrhajókra. A jármű fénysebességnél gyorsabb hajtóművel van felszerelve (legyen az hiperhajtómű, görbületi hajtómű, féregjárat-generátor vagy hasonló). Az FTL hajtómű külön Sebességbesorolással rendelkezik, amely lényegében méri azt az ütemet, ahogy egy csillaghajó áthaladhat egy parszeken (3,26 fényév, vagy 31 billió kilométer).

##### FTL Sebességbesorolási Táblázat

| Sebességbesorolás | Faktor 1 parsec megtételéhez |
| :-- | :-: |
| Nehézkes | 10 |
| Lomha | 8 |
| Lassú | 7 |
| Közepes | 6 |
| Mérsékelt | 5 |
| Megfontolt | 4 |
| Gyors | 3 |
| Sebes | 2 |
| Szélvész | 1 |

A faktortartam a Kalandmester döntése, attól függően, mennyire fejlett a környezet FTL-fejlettsége. Például, az alapfaktor lehet 1 nap, ami azt jelenti, hogy egy Nehézkes FTL hajtóművel rendelkező hajó 10 nap alatt teszi meg az utat, míg egy Szélvész FTL hajtóművel rendelkező hajó 1 nap alatt. Másutt, ahol az FTL-technológia lényegesen kevésbé hatékony, a faktoridőt hónapokban mérhetik, nem napokban.

Feltételezzük, hogy a hajó rendelkezik üzemanyag-tartalékokkal a visszaútra, vagy az úticélnál történő tankolási lehetőséggel.

Feltételezzük, hogy bármely méretű csillaghajó felszerelhető FTL-hajtóművel, bár ez szintén a környezettől függ.

Az FTL-hajtóművek nem aktiválhatók egy csillag 1,5 csillagászati egységen belüli körzetében (kb. 225 millió kilométer). Ez azt jelenti, hogy a hajóknak szub-fénysebességű hajtóművet kell használniuk, hogy eljussanak a Mars távolságáig, mielőtt aktiválhatnák az FTL-rendszert.

#### Földi Jármű (Ground Vehicle)

A jármű képes földi közlekedésre.

#### Lebegő (Hover)

A jármű a talaj felett lebeg légpárna vagy antigravitációs taszító segítségével.

#### Luxus (Luxurious)

A járművet kifejezetten utasok luxusszintű szállítására tervezték. A felesleges rakományteret luxus utaskabinokra, úszómedencékre, pezsgőfürdőkre, az utasok kényeztetésére szolgáló plusz legénységre és hasonlókra fordították.

#### Sín (Rails)

A jármű sínrendszeren közlekedik. A ezzel a jellemvonással rendelkező járművek természetes módon három fokozattal magasabb Sebességbesorolást érhetnek el, mint amit a páncélzat mérete egyébként megengedne, de nyilvánvalóan csak a sínrendszeren való mozgásra korlátozódnak.

#### Ellenálló (Resilient)

Minden rendszer egy további találatot bír ki, mint amennyit a Méret alapján egyébként meghatároznánk. Ez a jellemvonás halmozható – tehát az Ellenálló 2 azt jelzi, hogy a rendszerek 2 találattal többet bírnak ki a szokásosnál, két jellemvonás-pont áráért.

#### Vízi (Seaborne)

A jármű úszóképes a vízen.

#### Űrhajó (Spacecraft)

A jármű légmentesen zárt a vákuum ellen, és árnyékolt a kozmikus sugárzás ellen, és kialakítástól függően képes lehet elhagyni és újra belépni a légkörbe, valamint légkörön belüli repülésre.

#### Lopakodó (Stealth)

Csak repülőgépekre. A járművet úgy tervezték, hogy elkerülje a radarok és más nagy hatótávolságú érzékelőrendszerek általi észlelést. Az elektronikus érzékelőkkel történő észlelési kísérletek egy fokozattal nehezebbek.

#### Búvár (Submersible)

A jármű képes az óceán felszíne alá merülni, a Páncélzat Értéke x 10 méteres üzemi mélységig. Az összeomlási mélység – az abszolút maximum, amelyet a tengeralattjáró elérhet összeroppanás nélkül – az üzemi mélység 1,5-szerese.

#### Kiváló Kezelhetőség (Superior Handling)

A jármű kezelhetősége Könnyű.

#### Megfigyelőkészlet (Surveillance Suite)

A jármű fedélzeti számítógéppel, kommunikációs bázisállomással, lehallgatókészülék-jelvétellel, és 100 méteres körzeten belüli okostelefon-jelek elfogására alkalmas berendezéssel rendelkezik.

#### Strapabíró (Tough)

Az ezzel a jellemvonással rendelkező polgári jármű a Katonai oszlopból nyeri a Páncélzatot, és automatikusan maximális Szerkezettel rendelkezik. A katonai jármű ezzel a jellemvonással a következő sorból nyeri Páncélzatát és Szerkezetét.

#### Vontatósugár (Tractor Beam)

Csak űrhajókra. A hajó vontatósugárral van felszerelve, amely képes elkapni és magához vonzani olyan járműveket, amelyek páncélzatmérete legfeljebb két fokozattal kisebb az övénél. Így egy Hatalmas csillaghajó vonzhat és tarthat fogva legfeljebb Közepes méretű páncélzatú célpontot.

#### VTOL (Függőleges fel- és leszállás)

Függőleges fel/leszállás. Ez a jellemvonás helikopterek és hasonló járművek esetében alapértelmezett, amelyek rotorok kombinációját használják a felhajtóerő létrehozásához. Merevszárnyú repülőgépekre alkalmazva a rögzített vagy állítható fúvókák használatát jelzi a repülési attitűd, az emelkedés és süllyedés szabályozására.

#### Járó (Walker)

A jármű csuklós lábak segítségével hajtja magát. A Járó járművek sebessége Méretüktől függetlenül legfeljebb Mérsékelt. Ugyanakkor a Járók olyan magasságúra építhetők, amely más közlekedési móddal felszerelt járművek számára egyszerűen instabil lenne.

Ez a jármű képes víz alatti mozgásra.

#### Fegyveres (Weaponized)

A járművet fegyverzet elhelyezésére adaptálták. A fegyverrendszereket alább, a [Fegyverek](0006_Vehicles.md?id=weapons) szakaszban tárgyaljuk.


---
## Fegyverek

Általában csak a katonai páncélzatú járműveket tervezik fegyverzet (fegyverfelfüggesztők, lőszerraktár, vezérlőrendszerek) elhelyezésére. A 'Fegyveres' jellemvonás felvehető olyan polgári járművekre, amelyek fegyverigénnyel rendelkezhetnek.

A jármű által támogatott fegyverrendszerek maximális száma a Szerkezetpontok 1/10-ével egyenlő (így egy 40 Szerkezetponttal rendelkező jármű 4 fegyverrendszert támogathat, ha katonai jármű, vagy Fegyveres polgári jármű).

A fegyverrendszerek a jármű Méretétől függnek. A különböző Méretekhez tartozó maximális fegyverrendszertípusokat az alábbi táblázatok mutatják.


##### Fegyverek Méret Szerint Táblázat

| Méret | Földi | Csillaghajó |
| :-- | :-- | :-- |
| Kicsi | Könnyű fegyver (pl. Gépkarabély) | Közepes fegyver (pl. Géppuska, Rakétavető) |
| Közepes | Közepes fegyver (pl. Géppuska, Rakétavető) | Torony/Nehézfegyver (pl. Nehéz csatolt géppuska, Mini-ágyúk) |
| Nagy | Torony/Nehézfegyver (pl. Nehéz csatolt géppuska, Mini-ágyúk) | Fegyverütegek (pl. Harctéri tüzérség) |
| Hatalmas | Fegyverütegek (pl. Harctéri tüzérség) | Fejlett fegyverek (pl. Rakétarendszerek) |
| Óriási | Fejlett fegyverek (pl. Rakétarendszerek) | Gerincfegyverek (csak egy) |
| Kolosszális | N/A | Gerincfegyverek (legfeljebb 3) |

##### Példa fegyverstatisztikák

| Fegyver | Sebzés | Hatótáv | Tüzelési sebesség | Töltény/Load |
| :-- | :-: | :-: | :-: | :-: |
| 50-es ágyú | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-ágyú/Gatling ágyú | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rakéta | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Közepes rakéta/Torpedó | 6d10 | Max 200km | 1 | 1/5 |
| Nagy/Cirkálórakéta | 6d10+10 | Max 1000km | 1 | 1/10 |
| Lézer/Plazmaágyú | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Nehéz Lézer/Plazmaágyú | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Tüzérségi üteg | 5d6+6 | Max 50km | 1 | 1/5 |
| Gerincfegyver-ütegek | 10d6+6 | Max 20000km | 1 | 1/10 |

_A hatótávolságok méterben és kilométerben vannak megadva._

_A tüzelési sebességek egyes lövésre, félautomata és sorozatlövésre értendők._

_A Töltény a tűzképesség újratöltés előtt. A Load a töltési idő Harci Körökben, feltételezve, hogy teljes legénység áll rendelkezésre._

---
## Kezelhetőség és Manőverek

Az elkerülő vagy hirtelen manőverek sikeres Vezetés/Pilóta próbát igényelnek annak biztosítására, hogy a vezető vagy pilóta megőrizze a jármű feletti uralmat. A legtöbb járművet úgy tervezték és építették, hogy ellenálljon az alkalmi igénybevételnek, de a Kalandmester elrendelheti, hogy egy adott manőver egy magasabb nehézségi fokozatú próbát igényeljen, attól függően, mennyire ambiciózus az. A kudarc azt jelenti, hogy a jármű feletti uralom elveszett: dobj az Irányításvesztés táblázaton.

Ne feledd, az Irányításvesztés táblázat csak földi járművekre vonatkozik. Hasonló hatások alkalmazhatók légi és űrjárművekre is, de a Kalandmestereknek módosítaniuk kell az indoklást az adott hatásra. Például egy repülőgép csúszás helyett dugóhúzóba kerülhet.

Emellett a jármű belső kezelhetősége további hatással lehet a Vezetés-próbára. A kezelhetőség lehet Könnyű, Standard, Nehéz, Formidable (Félelmetes) vagy Herculean (Herculeusi), és ez határozza meg a Vezetés-próba kiindulópontját a manőver végrehajtásakor. A manőver nehézségi foka ezután a kezelhetőségre kerül alkalmazásra a végső nehézség meghatározásához.

Például egy nagy teljesítményű motorkerékpár beépített girostabilizátorokkal rendelkezik, ami Könnyű kezelhetőséget biztosít. A vezető egy 180 fokos csúszó-fordulatot akar végrehajtani, hogy kikerüljön egy üldözőt, egy manővert, amelyet a Kalandmester egy további nehézségi fokozattal minősít. A motorosnak tehát Standard próbát kell dobnia a Könnyű helyett. Ha ugyanezt a manővert egy nem stabilizált motorkerékpáron kísérelte volna meg, a Vezetés-próba Nehéz lett volna.

A Kiváló Kezelhetőség egy jellemvonás. Ha a jármű leírása nem tartalmazza ezt a jellemvonást, akkor a Nagy méretű és az alatti járműveknél az alapértelmezett a Standard kezelhetőség. A Hatalmas és Óriási járművek belsőleg rendelkeznek a Formidable, illetve Herculean kezelhetőséggel, és a Kalandmester szabadon dönthet úgy, hogy bizonyos manőverek a jármű mérete miatt egyszerűen lehetetlenek.

##### Irányításvesztés Táblázat

| 1d100 | Eredmény |
| :-: | :-- |
| 01-25 | Kanyar. Az irányításvesztés átmeneti. A jármű 5 másodpercre 1 fokozattal csökkenti sebességét. |
| 26-40 | Csúszás. A vezetőnek harcolnia kell az irányítás megőrzéséért. A jármű 10 másodpercre 2 fokozattal csökkenti sebességét. |
| 41-50 | Súlyos csúszás. A jármű rossz irányba néz, és 15 másodpercig egy helyben áll. |
| 51-60 | Borulás. A jármű csúszik és borul, 3d10 sérülést okozva a Szerkezetben. Az utasoknak sikeres Állóképesség-próbát kell tenniük, különben 1d10 sérülést szenvednek 1d3 Találati Helyen. |
| 61-70 | Súlyos borulás. Mint fent, de a jármű 3d10+10 sérülést kap, és az utasok akkor is 1d10 sérülést kapnak, ha az Állóképesség-próba sikeres, és 2d10-et, ha sikertelen. |
| 71-80 | Totálkár. Mint fent, de a jármű Szerkezete 0-ra csökken. Az utasok ugyanazt a sérülést szenvedik el, mint a Súlyos borulásnál. |
| 81-90 | Robbanás. Mint fent, de a jármű üzemanyagrendszere begyullad és 1d20+10 másodpercen belül felrobban. Ha nem tudnak elmenekülni, az utasok további 1d6 égési sérülést szenvednek 1d6 helyen. |
| 91-98 | Azonnali robbanás. Mint fent, de a robbanás azonnali. |
| 99-00 | Katasztrofális ütközés. Az utasoknak sikeres Állóképesség-próbát kell tenniük, különben azonnal meghalnak. A Totálkárnál leírt sebzést akkor is megkapják, ha túlélik. |


---
## Járműpéldák

---

### Földi járművek

#### Elfogó (Interceptor)

Egy feltuningolt luxusautó, sportkocsi vagy hasonló, ezt az autót gyorsaságra tervezték, és arra, hogy harcban is helytálljon. Ez az a jármű, amire az emberek gondolnak, amikor valaki azt mondja: "kémkocsi".

| Interceptor | |
| :- | :- |
| **Méret / Típus** | Közepes Katonai |
| **Páncélzat** | 6 |
| **Szerkezet** | 40 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Kezelhetőség** | Könnyű |
| **Jellemvonások** | [Katapultülés](0006_Vehicles.md?id=ejector-seat), [Fokozott Teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Kiváló Kezelhetőség](0006_Vehicles.md?id=superior-handling), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Fegyveres](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Olajfolt-szóró, Füstszóró, Csatolt Közepes Géppuskák (2d6+3) |

<br>

---

#### Üldöző motorkerékpár (Pursuit Motorcycle)

Könnyű, sebes motorkerékpár gyors üldözésekhez, amely meglepetést is tartogat – vagy egy pár csatolt géppuskát, vagy két rakétát.

| Üldöző motorkerékpár | |
| :- | :- |
| **Méret / Típus** | Kicsi Polgári |
| **Páncélzat** | 2 |
| **Szerkezet** | 12 |
| **Rendszerek** | 1 |
| **Sebesség** | Gyors |
| **Kezelhetőség** | Könnyű |
| **Jellemvonások** | [Kiváló Kezelhetőség](0006_Vehicles.md?id=superior-handling), [Fegyveres](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Két Rakéta (4d6) vagy Csatolt Könnyű Géppuskák (2d6) |

<br>

---

#### Szedán autó (Sedan Car)

Egy szabványos 4-ajtós szedán, amely kényelmesen elszállásolja a sofőrt és három utast. Feláldozza a rakományteret egy megfigyelőkészlet elhelyezéséért.

| Szedán autó | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Páncélzat** | 4 |
| **Szerkezet** | 25 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Feltűnésmentes](0006_Vehicles.md?id=unobtrusive), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite) |
| **Fegyverek** | Nincs |

<br>

---

#### Búvár autó (Submersible Car)

Egy kétüléses autó, amely átválthat vízi vagy búvár üzemmódba, hogy a víz felszínén vagy alatt utazzon. Elülső torpedóval és tetőre szerelt föld-levegő rakétával rendelkezik.

| Búvár autó | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Páncélzat** | 6 |
| **Szerkezet** | 25 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Fokozott Teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Búvár](0006_Vehicles.md?id=submersible), [Vízi](0006_Vehicles.md?id=waterborne), [Fegyveres](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Rakéta (5d6), Torpedó (4d10) |

<br>

---

#### Megfigyelő furgon (Surveillance Van)

Egy jelöletlen furgon, amelyben egy ügynökcsapat és egy audió-vizuális rögzítőberendezés-készlet található.

| Megfigyelő furgon | |
| :- | :- |
| **Méret / Típus** | Nagy Polgári |
| **Páncélzat** | 9 |
| **Szerkezet** | 60 |
| **Rendszerek** | 3 |
| **Sebesség** | Mérsékelt |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Strapabíró](0006_Vehicles.md?id=tough) |
| **Fegyverek** | Nincs |

<br>

---

#### Taktikai támogató jármű (Tactical Support Vehicle)

Egy pickup vagy dzsip, amelyben a fülkében egy kétszemélyes legénység fér el, a platón pedig egy lövész áll, aki egy forgatható Közepes Géppuskát kezel.

| Taktikai támogató jármű | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Páncélzat** | 6 |
| **Szerkezet** | 30 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Terepjáró](0006_Vehicles.md?id=all-terrain), [Fegyveres](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Szerelt Közepes Géppuska (2d6) |

<br>

---

### Vízi járművek

#### Motorcsónak (Speedboat)

Egy tipikus motorcsónak, hátulra szerelt aknaadagolóval felfegyverezve.

| Motorcsónak | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Páncélzat** | 3 |
| **Szerkezet** | 24 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Fokozott Teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Vízi](0006_Vehicles.md?id=waterborne), [Fegyveres](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Aknaadagoló (5d6) |

<br>

---

#### Jacht (Yacht)

Olyan luxusjacht, amilyennel egy oligarcha rendelkezhet. Valószínűleg megfigyelőkészlettel van felszerelve, hogy megvédje magát a rossz szándékú ellenségektől.

| Jacht | |
| :- | :- |
| **Méret / Típus** | Hatalmas Polgári |
| **Páncélzat** | 10 |
| **Szerkezet** | 75 |
| **Rendszerek** | 4 |
| **Sebesség** | Lassú |
| **Kezelhetőség** | Formidable |
| **Jellemvonások** | [Luxus](0006_Vehicles.md?id=luxurious), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Vízi](0006_Vehicles.md?id=waterborne) |
| **Fegyverek** | Nincs |

<br>

---

### Repülőgépek/Űrhajók

#### Dirigibil (Polgári léghajó)

Hasonló a Hindenburghoz, ez a transzkontinentális léghajó (és osztályának többi tagja) 245 méter hosszú, és 40-61 fős legénységet igényel. Tipikusan 50-72 utast képes szállítani luxuskörülmények között.

| Dirigibil | |
| :- | :- |
| **Méret / Típus** | Óriási Polgári |
| **Páncélzat** | 10 |
| **Szerkezet** | 85 |
| **Rendszerek** | 5 |
| **Sebesség** | Nehézkes |
| **Kezelhetőség** | Herculean |
| **Jellemvonások** | [Légi](0006_Vehicles.md?id=airborne), [Luxus](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | Nincs |
| **Fegyverek** | Nincs |

<br>

---

#### Rohamhelikopter (Assault Helicopter)

A hagyományos Rohamhelikopter fejlett megfigyelőtechnológiáját telefon- és vezeték nélküli internetjelek elfogására, valamint személyek és járművek követésére használja még sötétben is, FLIR segítségével. A követő elkerülése Lopakodással Formidable nehézségű.

| Rohamhelikopter | |
| :- | :- |
| **Méret / Típus** | Nagy Katonai |
| **Páncélzat** | 11 |
| **Szerkezet** | 50 |
| **Rendszerek** | 3 |
| **Sebesség** | Mérsékelt |
| **Kezelhetőség** | Könnyű |
| **Jellemvonások** | [Légi](0006_Vehicles.md?id=airborne), [Fokozott Teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Lopakodó](0006_Vehicles.md?id=stealth), [Kiváló Kezelhetőség](0006_Vehicles.md?id=superior-handling), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | Nincs |
| **Fegyverek** | 1 Gatling ágyú (3d6), 4 Rakéta (5d6) |

<br>

---

#### Többcélú vadászgép (Multi-Role Fighter)

Ez a kétüléses földi bázisú vadászgép (a De Havilland Mosquito típushoz hasonló) közismert teljesítményéről és sokoldalúságáról. Bombakamrája képes két 250 fontos bomba (közepes rakétaként kezelendő 0 hatótávval) vagy egyetlen torpedó szállítására.

| Többcélú vadászgép | |
| :- | :- |
| **Méret / Típus** | Nagy Katonai |
| **Páncélzat** | 10 |
| **Szerkezet** | 45 |
| **Rendszerek** | 3 |
| **Sebesség** | Mérsékelt |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Légi](0006_Vehicles.md?id=airborne), [Fokozott Teljesítmény](0006_Vehicles.md?id=enhanced-performance) |
| **Pajzsok** | Nincs |
| **Fegyverek** | 4 orrba szerelt Gatling ágyú (4d6+3), 1 bombakamra (6d10 - lásd leírás) |

<br>

---

#### Csillagközi teherhajó (Könnyű High-Tech szállító)

Ez a könnyű szállító minimum kétfős legénységet igényel, legfeljebb négy további utas számára van hellyel. Az alapgyári változatot írjuk le itt, azonban sok tulajdonos saját "speciális módosításokat" alkalmaz, mint például rejtett rakománytér, Fokozott Teljesítmény, Kiváló Kezelhetőség, EMP-ellenállás, Lopakodás stb.

| Csillagközi teherhajó | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári Űrhajó |
| **Páncélzat** | 10 |
| **Szerkezet** | 80 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes (Parszek Faktor: 3) |
| **Kezelhetőség** | Standard |
| **Jellemvonások** | [Légi](0006_Vehicles.md?id=airborne), [Rakomány](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Űrhajó](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | 8 |
| **Fegyverek** | 2x Négyes csatolt Lézerágyú-torony (5d6) |

<br>

---

#### Általános Kapcsolattartó Egység (Ultra High-Tech Űrhajó)

Ez a rendkívül high-tech csillaghajó egy fejlett mesterséges Tudat fizikai megtestesülése, amely egy két kilométer hosszú, mezővel összekapcsolt modulsorozat formáját ölti. A modulok külön-külön céllal rendelkeznek, beleértve élőhelyeket, építési létesítményeket, raktárterületeket, élelmiszer-feldolgozást, szabadidőközpontokat, hangárakat, sőt néhány titkos egységet is, amelyekről a hajó intelligenciája ritkán, ha egyáltalán, beszél. Nincs szüksége emberi legénységre, de akár 100 000 fős utaspopulációt is könnyedén kiszolgál. Sok utas a Kapcsolattartó Egység fedélzetén születik és hal meg: sokan átutazók, kedvük szerint jönnek-mennek.

| Általános Kapcsolattartó Egység | |
| :- | :- |
| **Méret / Típus** | Kolosszális Polgári Űrhajó |
| **Páncélzat** | 20 |
| **Szerkezet** | 10 000 |
| **Rendszerek** | 6 |
| **Sebesség** | Mérsékelt (Parszek Faktor: 4. Ezen a technológiai szinten egy Faktor 1 órának felel meg) |
| **Kezelhetőség** | Formidable |
| **Jellemvonások** | [Légi](0006_Vehicles.md?id=airborne), [Rakomány](0006_Vehicles.md?id=cargo), [Hordozó](0006_Vehicles.md?id=carrier), [Építő](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxus](0006_Vehicles.md?id=luxurious), [Űrhajó](0006_Vehicles.md?id=space-craft), [Kiváló Kezelhetőség](0006_Vehicles.md?id=superior-handling), [Vontatósugár](0006_Vehicles.md?id=tractor-beam) |
| **Pajzsok** | 30 |
| **Fegyverek** | Egyikről sem kíván beszélni |

<br>