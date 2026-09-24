# Járművek

A _Mythras Imperative_ járműveit félig elvont módon kezeljük. Lényegében háttéreszközök, amelyek arra szolgálnak, hogy eljuttassák a karaktereket A-ból B-be, anélkül, hogy részletes leírásra vagy statisztikákra lenne szükség. Alkalmanként azonban a Kalandmestereknek szükségük lehet a járművek részleteire, amikor azokat üldözésekben vagy harci helyzetekben kell megjeleníteni.

Az ebben a részben található szabályok lehetővé teszik a legtöbb járműtípus megjelenítését, mégpedig egy olyan elvont módon, amely rugalmasságot biztosít és fokozza a történetmesélést. Az űrhajók és csillaghajók némileg eltérőek, bár hasonló elveken alapulnak.

---
## Statisztikák

Minden járművet a Szerkezet, Páncélzat, Sebesség, Rendszerek, Tulajdonságok és Pajzsok (ha a világban elérhetőek) alapján írunk le.

- **[Méret](0006_Vehicles.md?id=vehicle-size-table):** Minden jármű hat Méretkategória egyikébe tartozik, amely meghatározza a többi jellemző értékét vagy tartományát. A csillaghajók nagyobb belső méretük és az űr zord környezete miatt saját értékrendszerrel rendelkeznek.
- **[Páncélzat](0006_Vehicles.md?id=terrestrial-hulls):** A Páncélpontokat képviseli.
- **[Szerkezet](0006_Vehicles.md?id=terrestrial-hulls):** A jármű Életerőpontjait képviseli.
- **[Pajzsok](0006_Vehicles.md?id=shields):** Azokban a világokban, ahol fejlett energiamanipulációs technológia létezik, lehetnek olyan pajzsok, amelyek védik a járművet, de folyamatos tűz alatt elhasználódhatnak.
- **[Rendszerek](0006_Vehicles.md?id=systems):** A jármű létfontosságú alkotóelemei, beleértve az erőforrást, a legénységi szakaszt stb.
- **[Sebesség](0006_Vehicles.md?id=speed):** Minden jármű rendelkezik egy alap Sebességbesorolással.
- **[Tulajdonságok](0006_Vehicles.md?id=traits):** Egy jármű rendelkezhet egy vagy több Tulajdonsággal. A Tulajdonságok, hasonlóan a _Mythras Imperative_ szabálykönyvében a Lényeknek adott Képességekhez vagy a Harcstílus-tulajdonságokhoz, további játéktechnikai leírást és előnyt kínálnak, tükrözve a jármű természetét.
- **[Fegyverek](0006_Vehicles.md?id=weapons):** A Tulajdonságokhoz hasonlóan, a járművek a világ lehetőségeinek megfelelően felszerelhetők fegyverekkel. Néhány javasolt példa és érték alább olvasható.


---
### Páncélzatméret, típus és szerkezet

A jármű mérete és célja befolyásolja a páncélzat vastagságát és a belső szerkezet ellenállóképességét. Egy motorkerékpár például minimális páncélzattal rendelkezik, mivel a sebességre és az agilitásra építették. Egy Land Ironclad (hatalmas, lánctalpas vagy kerekeken guruló páncélozott monstrum, amelyet gőz- vagy dízelmotor hajt), mivel egy sokkal nagyobb, harctéri célokra tervezett jármű, jóval erősebb páncélzattal bír. A páncélzatok relatív méreteit (és azt, hogy általában hány találatot képesek elviselni a fegyverektől) az alábbi Járműméret és Páncélzat táblázatok foglalják össze.

Amikor egy jármű kárt szenved, a beérkező sebzést a Páncélzat értéke csökkenti. A fennmaradó sebzést a jármű Szerkezetpontjaiból kell levonni, és a behatoló sebzéssel egyenlő százalékos esély van arra, hogy egy Rendszer is sérüljön. Ha a jármű Szerkezete nullára csökken, akkor az vagy teljesen megsemmisül, vagy olyan súlyosan megrongálódik, hogy le kell selejtezni.

##### Földi páncélzatok

| Méret | Szerkezet | Polgári Páncélzat | Katonai Páncélzat | Példa |
| :-- | :-: | :-: | :-: | :-- |
| Kicsi | 1-20 | 1-3 | 4-6 | Motorkerékpár, oldalkocsis motor, kompakt vagy szubkompakt autó, kenu, kajak, evezős csónak |
| Közepes | 21-40 | 1-6 | 7-9 | Szedán, furgon, kisteherautó, luxusautó, sportkocsi, izomautó, limuzin, mentőcsónak, gyorsasági motorcsónak, sárkányrepülő, autogiro |
| Nagy | 41-60 | 4-9 | 10-12 | Teherautó, nyújtott limuzin, SUV, busz, kisbusz, személyi repülőgép, vitorlázórepülő, sétahajó, tank, helikopter, tengeralattjáró |
| Hatalmas | 61-80 | 7-12 | 13-15 | Kamion, utasszállító repülőgép, sugárhajtású gép, parti őrségi hajó, jacht |
| Óriási | 81-100 | 10-15 | 16-18 | Vonat, óceánjáró hajó, hadihajó |

##### Csillaghajó-páncélzatok

| Méret | Szerkezet | Polgári Páncélzat | Katonai Páncélzat | Példa |
| :-- | :-: | :-: | :-: | :-- |
| Kicsi | 10-50 | 4-9 | 10-12 | Egyszemélyes vadászgép |
| Közepes | 51-150 | 7-12 | 13-15 | Könnyű teherszállító, komphajó |
| Nagy | 151-450 | 10-15 | 16-18 | Nehéz teherszállító, cirkáló |
| Hatalmas | 451-1350 | 13-18 | 19-21 | Kísérő fregatt, könnyű csatacirkáló |
| Óriási | 1351-4050 | 16-21 | 21-24 | Generációs hajó, nehéz csatacirkáló |
| Kolosszális | 4050-12110 | 19-24 | 24-30 | Orbitális állomás, bolygópusztító állomás |


---
### Pajzsok

A deflektorpajzsok további védelmet nyújtanak azoknak a járműveknek, amelyekre felszerelhetők. A pajzsok némileg másképp működnek, mint a Páncélzat, az elhasználódó természetük miatt. Ha a beérkező sebzés egyenlő vagy kisebb a pajzs értékénél, akkor az teljes mértékben blokkolva van. Ha a sebzés meghaladja a pajzs értékét, a többlet sebzés ekkora mértékben csökkenti a pajzs erejét.

_Például: egy csapatszállítónak 12 pontos energiapajzsa van. Ha a szállítót lézerrel találják el 11 sebzéssel, az egyszerűen nem hatol át, és nincs további hatása. Másfelől, ha egy 15 sebzést okozó robbanás éri a szállítót, a többlet három pont 9-re csökkenti a pajzs erejét._

Amint a deflektorpajzs ereje nullára csökken, összeomlik. A fennmaradó sebzés a páncélzatra hat.

---
### Rendszerek

Valahányszor egy jármű olyan sebzést szenved, amely átüti a páncélzatát, a behatoló sebzéssel megegyező esély van arra, hogy egy létfontosságú Rendszer megsérüljön.

_Például: 10 sebzés éri a motorcsónakot – egy járművet, melynek 3 a Páncélzata és 24 a Szerkezete. A Páncélzat páncélként működik, 7-re csökkentve a sebzést. Ezt levonjuk a 24 Szerkezetpontból, és 7% esély van arra, hogy a jármű egyik Rendszere megsérüljön._

Az, hogy egy Rendszer mennyi sérülést képes elviselni, kizárólag a jármű méretén alapul. Ezt a Rendszer által elviselhető találatok száma modellezi, nem pedig a tényleges sebzésmennyiség. Egyetlen Rendszertalálat egy Kicsi jármű esetében azonnal tönkreteszi az adott Rendszert. Két találat kell egy Közepes jármű Rendszereinek lebontásához, három egy Nagy járműnél, és így tovább. Lásd az alábbi [Rendszersérülés-táblázatot](0006_Vehicles.md?id=system-damage-table).

Azok a rendszerek, amelyek megsérültek, de még nem semmisültek meg, a kapott találatok számával arányos működési veszteséget szenvednek – vagy százalékos csökkenést, vagy Nehézségi szint büntetést a Rendszerrel kapcsolatos próbákra. A konkrét hatás attól függ, hogy mit vezérel az alrendszer, az alábbi [Rendszerkomponens-sérülési táblázatban](0006_Vehicles.md?id=system-component-damage-table) részletezettek szerint. Attól függően, hogy melyik Rendszer sérült, a hatások katasztrofálisak lehetnek.

_Például: egy Land Ironclad – egy Óriási jármű 5 Rendszertalálattal – ha kétszer találják el a Meghajtást, az erejének 40%-át elveszítené, és a Lassú sebességét két szinttel, Nehézkesre csökkentené. Hasonlóképpen, egy Nagy teherszállító – 3 Rendszertalálattal – ha két találatot kap a Hajtómű/Üzemanyag rendszeren, akkor két szint büntetést kapna a Sebességre, valamint az elektronikai rendszerek használatára. Egy harmadik találat megsemmisítené a Hajtómű/Üzemanyag rendszert, és vele együtt a hajót is._


<details>

<summary>* Közösségi Errata</summary>

---

#### Sebzés


_Az eredeti szöveg itt távolabb volt. Közvetlenül a Rendszerek rész után elhelyezve feleslegesen ismétli az előző bekezdést._

- _"A Páncélzatot meghaladó sebzés behatol a járműbe, károsítva a Szerkezetet és esetlegesen hatással lehet egy vagy több rendszerre. A jármű méretétől függően a sebzés lehet kisebb vagy katasztrofális._
- _Például: egy Nagy jármű akár három találatot is kaphat egy olyan rendszeren, mint a Meghajtás. A negyedik találat funkcionálisan megsemmisíti a Meghajtást. Valahányszor a rendszer találatot kap, vagy elveszíti funkciójának egy százalékát, ahogy azt az alábbi Rendszersérülés-táblázat Veszteség találatonként oszlopa leírja, vagy egy alapfunkció (mint a Meghajtás, Pilótázás, Kommunikáció stb.) minden kapott találat után egy Nehézségi szinttel nehezebbé válik."_

_A fenti bekezdések eltávolításra kerültek, és egy rövidített szerkesztés került a helyére, amely egy másik példát említ a Rendszerhatásra._

---

</details>

##### Rendszersérülés-táblázat

| Méret | Rendszertalálatok | Veszteség találatonként |
| :-- | :-: | :-- |
| Kicsi | 1 | 100% - Megsemmisült |
| Közepes | 2 | 1 Szint vagy 50% |
| Nagy | 3 | 1 Szint vagy 33% |
| Hatalmas | 4 | 1 Szint vagy 25% |
| Óriási | 5 | 1 Szint vagy 20% |
| Kolosszális | 6 | 1 Szint vagy 16% |


<details>

<summary>* Közösségi Errata</summary>

---

##### Rendszersérülés-táblázat (Eredeti)

| Méret | Rendszertalálatok | Veszteség találatonként |
| :-- | :-: | :-- |
| Kicsi | 1 | 1 Szint vagy 50% |
| Közepes | 2 | 1 Szint vagy 33% |
| Nagy | 3 | 1 Szint vagy 25% |
| Hatalmas | 4 | 1 Szint vagy 20% |
| Óriási | 5 | 1 Szint vagy 16% |
| Kolosszális | 6 | 1 Szint vagy 10% |

##### Járműméret-táblázat (a [Páncélzatméret, típus és szerkezet](0006_Vehicles.md?id=hull-size-type-and-structure) részből)

| Méret | Rendszertalálatok |
| :-- | :-: |
| Kicsi | 1 |
| Közepes | 2 |
| Nagy | 3 |
| Hatalmas | 4 |
| Óriási | 5 |
| Kolosszális | 6 |

_Az eredeti szabályok és példák következetlenek:_
- _"Azok a rendszerek, amelyek megsérültek, de még nem semmisültek meg, működési veszteséget szenvednek. Ez egyenlő az aktuális találatok és a teljes kapacitás arányával. Így egy Óriási jármű, amely két találatot kap a Meghajtáson, erejének 40%-át veszítené el (2 találat az 5-ös maximumból)."_ 
   - _Ez arra utal, hogy az 5 Rendszertalálattal rendelkező Óriási járműnek minden találatnál 20%-ot kellene veszítenie – de a táblázat 16%-ot ír._
- _"Például: egy Nagy jármű akár három találatot is kaphat egy olyan rendszeren, mint a Meghajtás. A negyedik találat funkcionálisan megsemmisíti a Meghajtást."_ 
  - _"Ez arra utal – ahogy a táblázat is – 25% sebzésre Rendszertalálatonként, de a Nagy járművek a táblázat szerint csak 3 Rendszertalálatot bírnak ki._
- _Bár nem ellentmondásos, a Járműméret-táblázat redundáns volt; mivel néhány sorral később újra megjelenik teljesebb formában (a Veszteség találatonként oszloppal kiegészítve)._

_Ez megnehezíti a következetes szabályalkotást. Ezen problémák megoldása érdekében az értékeket és a példákat összehangoltuk, és a Járműméret-táblázat eltávolításra került._

---

</details>


##### Rendszerkomponens-sérülési táblázat

| 1d10 | Rendszer | Sérült eredmény | Megsemmisült eredmény |
| :-: | :-- | :-- | :-- |
| 1 | Rakomány | A raktérben tárolt vagyontárgyak vagy felszerelés egy része, a sebzéssel arányosan, megsemmisül. | Minden rakomány megsemmisül. |
| 2 | Kommunikáció | A kommunikációs próbák minden találat után egy további Nehézségi szinttel nehezebbek. | A jármű többé nem képes kommunikálni vagy megzavarni az ellenséges szenzorokat. |
| 3 | Irányítás | A Csónakázás, Vezetés vagy Pilótázás próbák minden találat után egy további Nehézségi szinttel nehezebbek; azonnali Irányítás-próba szükséges. | A jármű többé nem kormányozható és nem változtathat irányt. |
| 4 | Meghajtás | A sebesség a sebzéssel arányos mértékben csökken. | A jármű megáll; a repülőgépek lezuhannak. |
| 5 | Legénység | Az utasok közül a sebzéssel arányos számú személy szenved sérülést. Az érintettek Súlyos Sebesülést szenvednek, és sikeres Állóképesség-próbát kell tenniük, különben azonnal meghalnak. | A jármű utasai meghalnak. |
| 6 | Hajtómű / Üzemanyag | A sebesség a sebzéssel arányos mértékben csökken. Az elektronikus rendszerek használata egy Nehézségi szinttel nehezebb. | A jármű katasztrofális robbanással megsemmisül. |
| 7 | Szenzorok | A Szenzor-, Navigációs- és Fegyvertámadás-próbák minden találat után egy további Nehézségi szinttel nehezebbek. | A jármű megvakul. |
| 8 | Fegyverek | A fegyverrendszerek közül a sebzéssel arányos számú üzemképtelenné válik. | A jármű többé nem tud tüzelni. |
| 9-0 | Egyik sem | Egyik rendszer sem sérült; csak a Szerkezet sérült. | N/A |

<details>

<summary>* Közösségi Errata</summary>

---

##### Rendszerkomponens-sérülési táblázat (Hajtómű/Üzemanyag)

_Az eredeti eredmény a következő volt: "A Maximális sebesség megfeleződik..." Ez ellentmond a Rendszersérülés esetén a sebzési büntetések általános szabályának: 25% sebzés = 25% büntetés. Ráadásul a Mythras Companion teljes szabályzata nem említi a sebesség megfelezését._

_Ennek eredményeként a szöveget a Meghajtás rendszereknél használt bejegyzéssel cseréltük le: "A sebesség a sebzéssel arányos mértékben csökken."_

---

</details>


---
### Sebesség

Mivel a sebesség, a gyorsulás, a légellenállás és a tehetetlenség fizikája (hogy csak néhányat említsünk) összetett kérdések, egyszerűsítésre van szükség, ezért a járművek elvont sebességbesorolást kapnak. A Sebesség jellemzőt csak arra szabad használni, hogy nagyjából megítéljük, egy jármű képes-e megelőzni vagy utolérni egy másikat.

A sebességbesorolás a jármű névleges működési sebességét jelöli. Vészhelyzetekben ez a teljesítmény egy fokozattal növelhető, a motorok kopásának vagy károsodásának kockázatával. Bár ugyanazt a táblázatot használják minden járműtípushoz, a józan ész elvét kell alkalmazni, hogy csak azonos osztályú járműveket hasonlítsunk össze. Például, ha egy csillaghajónak és egy sportkocsinak ugyanaz a Gyors gyorsulási értéke, akkor nyilvánvaló, hogy a űrhajó arányosan gyorsabb.

A jármű Sebességének szabványos érték fölé emelése sikeres Vezetés-próba esetén lehetséges. Általában ez az extra sebesség csak rövid ideig tartható – legfeljebb 1d6 percig, mielőtt a járműnek vissza kellene térnie a normál sebességére, különben fennáll a hajtómű károsodásának veszélye. Kritikus Vezetés-próba esetén a nagyobb sebesség időtartama 1d12 percre növelhető.

A vezető megkísérelheti 2 fokozattal megnövelni a jármű sebességét, de ehhez Héraklészi Vezetés-próba szükséges, és a jármű ezt a sebességet legfeljebb 1d3 percig bírja: a Kritikus Siker nem hosszabbítja meg a megnövelt sebesség időtartamát.

##### Sebességbesorolási táblázat

| Sebességbesorolás | Max. sebesség kategória |
| :-- | :-: |
| Nehézkes | Óriási |
| Lomha | |
| Lassú | Hatalmas |
| Közepes | |
| Mérsékelt | Nagy |
| Éléénk | |
| Gyors | Közepes |
| Sebes | |
| Szélvész | Kicsi |


---
### Tulajdonságok

A jármű által birtokolható tulajdonságok maximális száma a páncélzat méretétől és típusától függ.

Minden jármű rendelkezik egy eredendő tulajdonsággal: azzal az utazási móddal, amelyre elsődlegesen tervezték. Ezért a repülőgépek eleve rendelkeznek a Repülő tulajdonsággal, a hajók a Vízi tulajdonsággal stb. Ez az eredendő tulajdonság nem számít bele az elérhető tulajdonságok számába. Azonban, ha egy jármű magában foglal egy második utazási módot – például egy repülő tengeralattjáró –, akkor a Repülő tulajdonságot el kell számolni az elérhető tulajdonságok közül.

Egyes tulajdonságok a világ technológiai szintjétől függően nem biztos, hogy elérhetőek; a Kalandmestereknek saját döntésüket kell alkalmazniuk arról, hogy milyen tulajdonságok alkalmazhatók.

##### Jármű-tulajdonság kiosztási táblázat

| Méret | Max. tulajdonságok |
| :-- | :-: |
| Kicsi | 1 |
| Közepes | 2 |
| Nagy | 3 |
| Hatalmas | 4 |
| Óriási | 5 |
| Kolosszális | 6 |

#### Repülő

A jármű képes légköri repülésre.

#### Terepjáró

Ezt a Tulajdonságot földi járműveknél kell használni. A jármű képes áthaladni barátságtalan, nehéz és meredek terepen, akár lánctalpak, fejlett felfüggesztés és meghajtórendszerek, vagy erőteljes differenciálművek segítségével.

#### Fúró

A járművet úgy tervezték, hogy a föld alatt fúrjon és alagutakat vájjon. Maximális mélysége a Páncélzatbesorolása x5 méter.

#### Álcázott

A jármű álcafestéssel vagy olyan mimetikus szenzorokkal rendelkezik, amelyek lehetővé teszik, hogy beleolvadjon a környezetébe. A jármű vizuális észlelésére tett kísérletek egy fokozattal nehezebbek.

#### Rakomány

A járművet kifejezetten rakományszállításra tervezték, nem utasok számára. Az utastereket minimálisra csökkentették, a jármű maradék hasznos terét rakománytárolásra fordították, megfelelő szakaszokkal, eszközökkel, sőt még környezeti szabályozással (például fagyasztó szekciók romlandó áruk szállításához) is felszerelve. Rakománnyal megterhelve a jármű sebessége két fokozattal alacsonyabb, mint amit a páncélzatmérete egyébként lehetővé tenne.

#### Hordozó

A járművet kifejezetten kisebb, könnyű legénységű vagy esetleg távirányítású, polgári vagy katonai jellegű járművek szállítására tervezték. Bármely jármű, amely rendelkezik ezzel a tulajdonsággal, legalább Óriási kell, hogy legyen. A hordozott kisjárművek száma küldetéstípustól és céltól függően változhat, de lehet akár 10 vagy annyi is, amennyi a jármű Szerkezet-értéke.

#### Építő

A jármű nehéz építési munkákra van felszerelve. Az ezzel a tulajdonsággal rendelkező járművek szintén rendelkeznek a Terepjáró tulajdonsággal is, de sebességük két fokozattal alacsonyabb, mint amit a páncélzatméretük egyébként lehetővé tenne. A járművet a feladatnak megfelelő eszközökkel szerelték fel, mint például daruk, kotrókanalakkal, dömperekkel stb.

#### EMP-ellenálló

A jármű védett az elektromágneses impulzus (EMP) támadásokkal szemben.

#### Megnövelt teljesítmény

A jármű Sebességbesorolása egy fokozattal magasabb, mint a méretéhez tartozó maximum.

#### Katapultülés

Vészhelyzet esetén a katapultülés több száz méter magasra repíti az utasokat a levegőbe, majd egy ejtőernyőt nyit, amely lehetővé teszi a biztonságos leszállást. Az ejtőernyő opcionális. Helikopterekhez nem ajánlott (a Kamov Ka-52 Alligator kivételével).

#### FTL

Csak csillaghajók számára. A jármű fénysebesség feletti hajtóművel (legyen az hiperhajtómű, görbületmeghajtó, féreglyuk-generátor vagy hasonló) van felszerelve. Az FTL-hajtóműnek külön Sebességbesorolása van, amely lényegében azt a mértéket méri, amellyel a csillaghajó képes átszelni egy parszeket (3,26 fényév, vagy 31 billió kilométer, vagy 19 billió mérföld), az alábbiak szerint:

##### FTL-sebességbesorolási táblázat

| Sebességbesorolás | 1 parszek megtételének tényezője |
| :-- | :-: |
| Nehézkes | 10 |
| Lomha | 8 |
| Lassú | 7 |
| Közepes | 6 |
| Mérsékelt | 5 |
| Éléénk | 4 |
| Gyors | 3 |
| Sebes | 2 |
| Szélvész | 1 |

A tényező időtartama a Kalandmester döntése, attól függően, mennyire fejlett a világ FTL-technológiája. Például az alaptényező lehet 1 nap, ami azt jelenti, hogy egy Nehézkes FTL-hajtóművel felszerelt hajónak 10 napba telik az út, míg egy Szélvész FTL-hajtóművel rendelkező hajó 1 nap alatt teljesíti azt. Másutt, ahol az FTL-technológia lényegesen kevésbé hatékony, a tényező időtartamát napok helyett hónapokban mérhetik.

Feltételezzük, hogy a hajó rendelkezik üzemanyag-tartalékkal a visszautazáshoz, vagy rendelkezik eszközzel az utazási célponton való újratankoláshoz.

Feltételezhető, hogy bármilyen méretű csillaghajó felszerelhető FTL-hajtóművel, bár ez ismételten a világon múlik.

Az FTL-hajtóművek nem aktiválhatók egy csillag 1,5 Csillagászati Egységnyi távolságán belül (körülbelül 225 millió kilométer). Ez azt jelenti, hogy a hajóknak szubfénysebességű hajtóművet kell használniuk, hogy a Mars távolságáig eljussanak az FTL-rendszer aktiválása előtt.

#### Földi jármű

A jármű képes földi közlekedésre.

#### Lebegő

A jármű a föld felett lebeg, légpárna vagy antigravitációs taszító segítségével.

#### Luxus

A járművet kifejezetten arra tervezték, hogy az utasokat bizonyos szintű luxusban szállítsa. A felesleges rakományteret luxus utaskabinoknak, úszómedencéknek, pezsgőfürdőknek, az utasok szeszélyeit kiszolgáló extra legénységnek stb. adják át.

#### Sín

A jármű sínrendszerre támaszkodik. Az ezzel a tulajdonsággal rendelkező járművek természetes módon három fokozattal magasabb Sebességbesorolást érhetnek el, mint amit a páncélzatméretük egyébként lehetővé tenne, de nyilvánvalóan csak a sínrendszeren történő mozgásra korlátozódnak.

#### Reziliens

Minden rendszer egy további találatot képes elviselni, mint amennyit a Méret alapján egyébként meghatároztunk. Ez a tulajdonság halmozható – tehát a Reziliens 2 azt jelzi, hogy a rendszerek 2 találattal többet bírnak a szokásosnál, két Tulajdonságpont költségén.

#### Vízi

A jármű képes a vízen úszni.

#### Űrjármű

A jármű tömített a vákuummal szemben, védett a kozmikus sugárzástól, és a kialakítástól függően képes lehet elhagyni a légkört, újra belépni abba, és fenntartani a repülést légkörön belül is.

#### Lopakodó

Csak repülőgépek számára. A járművet úgy tervezték, hogy elkerülje a radar és más nagy hatótávolságú szenzorrendszerek általi észlelést. Az elektronikus szenzorokkal történő észlelési kísérletek egy fokozattal nehezebbek.

#### Merülő

A jármű képes az óceán felszíne alá merülni, a Páncélzatbesorolása x10 méteres működési mélységig. Az összeomlási mélység – az az abszolút maximum, amelyet a búvárhajó elérhet anélkül, hogy összezúzódna – a működési mélységének 1,5-szerese.

#### Kiváló irányíthatóság

A jármű irányíthatósága Könnyű besorolású.

#### Megfigyelőcsomag

A jármű fedélzeti számítógéppel, kommunikációs bázisállomással, lehallgatókészülék-jelek vevőjével és a 100 méteren belüli közeli okostelefon-jelek elfogására szolgáló berendezéssel rendelkezik.#### Tough

Az ezzel a tulajdonsággal rendelkező polgári jármű a Szerkezet (Hull) értékét a Katonai oszlopból veszi, és automatikusan maximális Szerkezeti Ponttal (Structure) rendelkezik. Az ezzel a tulajdonsággal rendelkező Katonai jármű Szerkezet (Hull) és Szerkezeti Pont (Structure) értékét az alatta lévő sorból veszi.

#### Vontatósugár

Csak űrhajókra vonatkozik. A hajó olyan vontatósugárral van felszerelve, amely képes befogni és magához húzni olyan járműveket, amelyek szerkezeti besorolása (hull-rating) legfeljebb két fokozattal alacsonyabb a sajátjánál. Így egy Hatalmas (Huge) csillaghajó legfeljebb Közepes (Medium) méretű járművet képes magához vonzani és megtartani.

#### VTOL

Függőleges fel- és leszállás (Vertical takeoff/landing). Ez a tulajdonság a helikopterek és hasonló járművek sajátja, amelyek rotorok kombinációját használják a felhajtóerő létrehozására. Merevszárnyú repülőgépekre alkalmazva a rögzített vagy állítható hajtóművek használatát jelzi a repülési irány, az emelkedés és a süllyedés vezérlésére.

#### Vízi

A jármű csuklós lábak segítségével hajtja magát. A lépegető (Walker) járművek sebessége legfeljebb Szelíd (Gentle) lehet, függetlenül a méretüktől. A lépegetők azonban olyan magasságúra építhetők, ami más mozgási móddal felszerelt járművek számára egyszerűen instabil lenne.

Ez a jármű képes víz alatti mozgásra.

#### Felfegyverzett

A járművet úgy alakították át, hogy alkalmas legyen fegyverzet hordozására. A fegyverrendszerekről az alábbi, [Fegyverek](0006_Vehicles.md?id=weapons) című szakaszban olvashat.

---
## Fegyverek

Általában csak a katonai szerkezeteket (hulls) tervezik fegyverzet (fegyverfelfüggesztő pontok, lőszerraktárak, vezérlőrendszerek) befogadására. A „Felfegyverzett” tulajdonság felvehető olyan polgári járműveknél is, amelyek fegyverigénnyel rendelkezhetnek.

A fegyverrendszerek maximális száma, amelyet egy jármű támogatni képes, a Szerkezeti Pontjainak (Structure Points) 1/10-e (tehát egy 40 Szerkezeti Ponttal rendelkező jármű 4 fegyverrendszert támogathat, ha katonai jármű, vagy egy Felfegyverzett polgári jármű).

A fegyverrendszerek a jármű méretétől függenek. A különböző méretekhez tartozó maximális fegyverrendszer-típusokat az alábbi táblázatok mutatják.

##### Fegyverek méret szerinti táblázata

| Méret | Földi | Űrhajó |
| :-- | :-- | :-- |
| Kicsi (Small) | Könnyű fegyver (pl. Rohampuska) | Közepes fegyver (pl. Géppuska, Rakétavető) |
| Közepes (Medium) | Közepes fegyver (pl. Géppuska, Rakétavető) | Tornyos/Nehéz fegyver (pl. Nehéz ikergéppuskák, Mini-ágyúk) |
| Nagy (Large) | Tornyos/Nehéz fegyver (pl. Nehéz ikergéppuskák, Mini-ágyúk) | Fegyverütegek (pl. Csatatéri tüzérség) |
| Hatalmas (Huge) | Fegyverütegek (pl. Csatatéri tüzérség) | Fejlett fegyverek (pl. Rakétarendszerek) |
| Óriási (Enormous) | Fejlett fegyverek (pl. Rakétarendszerek) | Gerincbe épített fegyverek (csak egy) |
| Kolosszális (Colossal) | NA | Gerincbe épített fegyverek (max. 3) |

##### Példa fegyverstatisztikák

| Fegyver | Sebzés | Hatótáv | Tűzgyorsaság | Lőszer/Töltés |
| :-- | :-: | :-: | :-: | :-: |
| 50 hüvelykes ágyú | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-ágyú/Gatling ágyú | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rakéta | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Közepes rakéta/torpedó | 6d10 | Max hatótáv 200km | 1 | 1/5 |
| Nagy/cirkálórakéta | 6d10+10 | Max hatótáv 1000km | 1 | 1/10 |
| Lézer/Plazmaágyú | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Nehéz lézer/Plazmaágyú | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Tüzérségi üteg | 5d6+6 | Max hatótáv 50km | 1 | 1/5 |
| Gerincbe épített üteg | 10d6+6 | Max hatótáv 20000km | 1 | 1/10 |

_A hatótávok méterben és kilométerben vannak megadva._

_A tűzgyorsaság egyes lövésre, félautomata és automata üzemmódra vonatkozik._

_A lőszer a tüzelési képességet jelöli az újratöltés előtt. A töltés az újratöltési idő Harci Körökben (Combat Rounds), feltételezve, hogy a teljes személyzet rendelkezésre áll._

---
## Irányítás és manőverek

Az elkerülő vagy hirtelen manőverekhez sikeres Vezetés/Pilóta (Drive/Pilot) dobás szükséges annak biztosítására, hogy a sofőr vagy pilóta megőrizze az uralmat a jármű felett. A legtöbb járművet úgy tervezték és építették, hogy ellenálljon az alkalmi igénybevételnek, de a Játékmester dönthet úgy, hogy egy adott manőver végrehajtása magasabb nehézségi fokú dobást igényel, attól függően, mennyire kockázatos az. A kudarc azt jelenti, hogy az uralom elveszett: dobj az Irányítás elvesztése táblázaton.

Megjegyzendő, hogy az Irányítás elvesztése táblázat csak földi járművekre vonatkozik. Hasonló hatások alkalmazhatók légi és űrjárművekre is, de a Játékmestereknek módosítaniuk kell az adott hatás okát. Például egy repülőgép csúszás helyett dugóhúzóba kerülhet.

Emellett a jármű alapvető irányíthatósága további hatással lehet a Vezetés dobásra. Az irányíthatóság lehet Könnyű (Easy), Standard, Nehéz (Hard), Félelmetes (Formidable) vagy Herkulesi (Herculean), és ez határozza meg a Vezetés dobás kiindulópontját a manőver végrehajtásakor. A manőver nehézségi foka ezután adódik hozzá az irányíthatósághoz a végső nehézség meghatározásához.

Például egy nagy teljesítményű motorkerékpár beépített giroszkópos stabilizátorokkal rendelkezik, ami Könnyű (Easy) irányíthatóságot biztosít. A vezető 180 fokos csúszófordulatot akar végrehajtani, hogy lerázzon egy üldözőt, amit a Játékmester egy fokozattal nehezebbnek minősít. A motorosnak ezért a Vezetés dobását Standard nehézséggel kell végrehajtania a Könnyű helyett. Ha ugyanezt a manővert egy nem stabilizált motorkerékpáron kísérelné meg, a Vezetés dobás Nehéz (Hard) lenne.

A Kiváló irányíthatóság (Superior Handling) egy tulajdonság. Ha a jármű leírásában nem szerepel ez a tulajdonság, akkor a Nagy (Large) és annál kisebb méretű járműveknél az irányíthatóság alapértelmezés szerint Standard. A Hatalmas (Huge) és Óriási (Enormous) járművek eleve Félelmetes (Formidable) és Herkulesi (Herculean) irányíthatósági tulajdonsággal rendelkeznek, és a Játékmester szabadon dönthet úgy, hogy bizonyos manőverek a jármű mérete miatt egyszerűen kivitelezhetetlenek.

##### Irányítás elvesztése táblázat

| 1d100 | Eredmény |
| :-: | :-- |
| 01-25 | Kicsúszás. Az uralom elvesztése átmeneti. A jármű 5 másodpercre 1 fokozattal csökkenti a sebességét. |
| 26-40 | Megcsúszás. A vezetőnek küzdenie kell a jármű uralásáért. A jármű 10 másodpercre 2 fokozattal csökkenti a sebességét. |
| 41-50 | Erős megcsúszás. A jármű rossz irányba fordulva áll meg 15 másodpercre. |
| 51-60 | Borulás. A jármű megcsúszik és felborul, 3d10 sebzést szenvedve a Szerkezetében. Az utasoknak sikeres Állóképesség (Endurance) dobást kell tenniük, különben 1d10 sebzést szenvednek 1d3 Találati Helyen. |
| 61-70 | Súlyos borulás. Mint fent, de a jármű 3d10+10 sebzést szenved, az utasok pedig akkor is 1d10 sebzést kapnak, ha az Állóképesség dobás sikeres, és 2d10-et, ha sikertelen. |
| 71-80 | Totálkáros. Mint fent, de a jármű Szerkezete 0-ra csökken. Az utasok ugyanazt a sebzést szenvedik, mint a Súlyos borulásnál. |
| 81-90 | Robbanás. Mint fent, de a jármű üzemanyagrendszere begyullad és 1d20+10 másodpercen belül felrobban. Ha az utasok nem tudnak kiszabadulni, további 1d6 égési sebzést szenvednek 1d6 testtájon. |
| 91-98 | Azonnali robbanás. Mint fent, de a robbanás azonnali. |
| 99-00 | Katasztrofális baleset. Az utasoknak sikeres Állóképesség dobást kell tenniük, különben azonnal meghalnak. A Totálkárosnak megfelelő sebzés mindenképpen bekövetkezik. |

---
## Járműpéldák

---

### Földi járművek

#### Interceptor

Egy feltuningolt luxusautó, sportkocsi vagy hasonló, ezt a járművet arra tervezték, hogy gyors legyen és harc közben is megállja a helyét. Ez az a fajta jármű, amire az emberek gondolnak, amikor valaki azt mondja: „kémkocsi”.

| Interceptor | |
| :- | :- |
| **Méret / Típus** | Közepes Katonai |
| **Szerkezet (Hull)** | 6 |
| **Szerkezeti Pont (Structure)** | 40 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Irányíthatóság** | Könnyű |
| **Tulajdonságok** | [Katapultülés](0006_Vehicles.md?id=ejector-seat), [Fokozott teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Kiváló irányíthatóság](0006_Vehicles.md?id=superior-handling), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Felfegyverzett](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Olajfolt-szóró, Füstkibocsátó, Ikerszárú közepes géppuskák (2d6+3) |

<br>

---

#### Üldöző motorkerékpár

Egy könnyű, gyors motorkerékpár gyors üldözésekhez, az Üldöző motorkerékpár meglepetést hordoz – vagy egy pár ikergéppuskát, vagy két rakétát.

| Üldöző motorkerékpár | |
| :- | :- |
| **Méret / Típus** | Kicsi Polgári |
| **Szerkezet (Hull)** | 2 |
| **Szerkezeti Pont (Structure)** | 12 |
| **Rendszerek** | 1 |
| **Sebesség** | Gyors |
| **Irányíthatóság** | Könnyű |
| **Tulajdonságok** | [Kiváló irányíthatóság](0006_Vehicles.md?id=superior-handling), [Felfegyverzett](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Két rakéta (4d6) vagy ikerszárú könnyű géppuskák (2d6) |

<br>

---

#### Szedán autó

Egy szabványos 4-ajtós szedán, amely elég tágas ahhoz, hogy kényelmesen elférjen benne a sofőr és három utas. Feláldozza a csomagteret egy megfigyelőkészlet beépítéséért.

| Szedán autó | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Szerkezet (Hull)** | 4 |
| **Szerkezeti Pont (Structure)** | 25 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Feltűnésmentes](0006_Vehicles.md?id=unobtrusive), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite) |
| **Fegyverek** | Nincs |

<br>

---

#### Búvárkocsi

Egy kétüléses autó, amely vízi vagy merülő üzemmódba válthat, hogy víz felszínén vagy víz alatt közlekedjen. Elülső torpedóvetővel és tetőre szerelt föld-levegő rakétával rendelkezik.

| Búvárkocsi | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Szerkezet (Hull)** | 6 |
| **Szerkezeti Pont (Structure)** | 25 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Fokozott teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Merülő](0006_Vehicles.md?id=submersible), [Vízi](0006_Vehicles.md?id=waterborne), [Felfegyverzett](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Rakéta (5d6), Torpedó (4d10) |

<br>

---

#### Megfigyelő furgon

Egy egyszerű, jelöletlen furgon, amely ügynökcsapatnak és egy audiovizuális rögzítőberendezés-készletnek ad otthont.

| Megfigyelő furgon | |
| :- | :- |
| **Méret / Típus** | Nagy Polgári |
| **Szerkezet (Hull)** | 9 |
| **Szerkezeti Pont (Structure)** | 60 |
| **Rendszerek** | 3 |
| **Sebesség** | Szelíd |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Szívós](0006_Vehicles.md?id=tough) |
| **Fegyverek** | Nincs |

<br>

---

#### Taktikai támogató jármű

Egy pickup vagy dzsip, amelyben kétfős legénység fér el a fülkében, és egy lövész áll a platós részen, egy forgatható Közepes géppuskát kezelve.

| Taktikai támogató jármű | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Szerkezet (Hull)** | 6 |
| **Szerkezeti Pont (Structure)** | 30 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Terepjáró](0006_Vehicles.md?id=all-terrain), [Felfegyverzett](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Felszerelt közepes géppuska (2d6) |

<br>

---

### Vízi járművek

#### Gyorscsónak

Egy tipikus gyorscsónak, hátsó aknaszóróval felfegyverezve.

| Gyorscsónak | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári |
| **Szerkezet (Hull)** | 3 |
| **Szerkezeti Pont (Structure)** | 24 |
| **Rendszerek** | 2 |
| **Sebesség** | Gyors |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Fokozott teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Vízi](0006_Vehicles.md?id=waterborne), [Felfegyverzett](0006_Vehicles.md?id=weaponized) |
| **Fegyverek** | Aknaszóró (5d6) |

<br>

---

#### Jacht

Olyan luxusjacht, amilyet egy oligarcha birtokolhat. Valószínűleg megfigyelőkészlettel van felszerelve, hogy védekezzen a gonoszkodni próbáló ellenségek ellen.

| Jacht | |
| :- | :- |
| **Méret / Típus** | Hatalmas Polgári |
| **Szerkezet (Hull)** | 10 |
| **Szerkezeti Pont (Structure)** | 75 |
| **Rendszerek** | 4 |
| **Sebesség** | Lassú |
| **Irányíthatóság** | Félelmetes |
| **Tulajdonságok** | [Luxus](0006_Vehicles.md?id=luxurious), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [Vízi](0006_Vehicles.md?id=waterborne) |
| **Fegyverek** | Nincs |

<br>

---

### Repülőgépek/Űrhajók

#### Léghajó (Polgári utasszállító)

A Hindenburghoz hasonlóan ez a transzkontinentális léghajó (és osztályának más tagjai) 245 méter hosszú, és 40-61 fős legénységet igényel. Általában 50-72 utas szállítására képes luxuskörülmények között.

| Léghajó | |
| :- | :- |
| **Méret / Típus** | Óriási Polgári |
| **Szerkezet (Hull)** | 10 |
| **Szerkezeti Pont (Structure)** | 85 |
| **Rendszerek** | 5 |
| **Sebesség** | Nehézkes |
| **Irányíthatóság** | Herkulesi |
| **Tulajdonságok** | [Légi](0006_Vehicles.md?id=airborne), [Luxus](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | Nincs |
| **Fegyverek** | Nincs |

<br>

---

#### Támadó helikopter

A hagyományos támadó helikopter fejlett megfigyelési technológiáját használja a telefon- és vezeték nélküli internetjelek elfogására, valamint egyének és járművek nyomon követésére még sötétben is, FLIR-en keresztül. A nyomkövető elkerülésére tett kísérletek Lopakodással (Stealth) Félelmetesek.

| Támadó helikopter | |
| :- | :- |
| **Méret / Típus** | Nagy Katonai |
| **Szerkezet (Hull)** | 11 |
| **Szerkezeti Pont (Structure)** | 50 |
| **Rendszerek** | 3 |
| **Sebesség** | Mérsékelt |
| **Irányíthatóság** | Könnyű |
| **Tulajdonságok** | [Légi](0006_Vehicles.md?id=airborne), [Fokozott teljesítmény](0006_Vehicles.md?id=enhanced-performance), [Lopakodás](0006_Vehicles.md?id=stealth), [Kiváló irányíthatóság](0006_Vehicles.md?id=superior-handling), [Megfigyelőkészlet](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | Nincs |
| **Fegyverek** | 1 Gatling ágyú (3d6), 4 rakéta (5d6) |

<br>

---

#### Többfeladatú vadászgép

Ez a kétüléses, földi telepítésű vadászgép (a De Havilland Mosquito típushoz hasonló) jól ismert teljesítményéről és sokoldalúságáról. Bombakamrája vagy két 250 fontos bombát (kezelje közepes rakétaként 0 hatótávval), vagy egyetlen torpedót képes szállítani.

| Többfeladatú vadászgép | |
| :- | :- |
| **Méret / Típus** | Nagy Katonai |
| **Szerkezet (Hull)** | 10 |
| **Szerkezeti Pont (Structure)** | 45 |
| **Rendszerek** | 3 |
| **Sebesség** | Mérsékelt |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Légi](0006_Vehicles.md?id=airborne), [Fokozott teljesítmény](0006_Vehicles.md?id=enhanced-performance) |
| **Pajzsok** | Nincs |
| **Fegyverek** | 4 orrba szerelt Gatling ágyú (4d6+3), 1 bombakamra (6d10 – lásd a leírást) |

<br>

---

#### Csillagközi teherszállító (Könnyű high-tech szállító)

Ehhez a könnyű szállítóhoz mindössze kétfős minimális legénység szükséges, és akár négy további utas számára is van hely. Az alapfelszereltségű változat látható itt, azonban sok tulajdonos alkalmazza saját „speciális módosításait”, mint például elrejtett raktér, Fokozott teljesítmény, Kiváló irányíthatóság, EMP-ellenállás, Lopakodás és így tovább.

| Csillagközi teherszállító | |
| :- | :- |
| **Méret / Típus** | Közepes Polgári űrhajó |
| **Szerkezet (Hull)** | 10 |
| **Szerkezeti Pont (Structure)** | 80 |
| **Rendszerek** | 2 |
| **Sebesség** | Sebes (3-as Parsec Faktor) |
| **Irányíthatóság** | Standard |
| **Tulajdonságok** | [Légi](0006_Vehicles.md?id=airborne), [Rakomány](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Űrhajó](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Pajzsok** | 8 |
| **Fegyverek** | 2x Négyes lézerágyú-torony (5d6) |

<br>

---

#### Általános kapcsolattartó egység (Ultra high-tech űrhajó)

Ez az rendkívül high-tech csillaghajó egy rendkívül fejlett mesterséges Elme fizikai megtestesülése, amely két kilométer hosszú, mezővel összekapcsolt modulok formáját ölti. A modulok külön célt szolgálnak, beleértve az élőhelyeket, építési létesítményeket, raktárterületeket, élelmiszer-feldolgozást, szabadidőközpontokat, hangárokat, és még néhány titkos egységet is, amelyekről a hajó intelligenciája ritkán, ha egyáltalán, beszél. Nincs szüksége emberi legénységre, de könnyedén támogat akár 100 000 fős utaspopulációt is. Sok utas a Kapcsolattartó egységen születik és hal meg: sokan átutazók, akik jönnek és mennek, ahogy kedvük tartja.

| Általános kapcsolattartó egység | |
| :- | :- |
| **Méret / Típus** | Kolosszális Polgári űrhajó |
| **Szerkezet (Hull)** | 20 |
| **Szerkezeti Pont (Structure)** | 10 000 |
| **Rendszerek** | 6 |
| **Sebesség** | Mérsékelt (4-es Parsec Faktor. Ezen a technológiai szinten egy Faktor 1 órát jelent) |
| **Irányíthatóság** | Félelmetes |
| **Tulajdonságok** | [Légi](0006_Vehicles.md?id=airborne), [Rakomány](0006_Vehicles.md?id=cargo), [Hordozó](0006_Vehicles.md?id=carrier), [Építkezés](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxus](0006_Vehicles.md?id=luxurious), [Űrhajó](0006_Vehicles.md?id=spacecraft), [Kiváló irányíthatóság](0006_Vehicles.md?id=superior-handling), [Vontatósugár](0006_Vehicles.md?id=tractor-beam) |
| **Pajzsok** | 30 |
| **Fegyverek** | Semmi, amiről szívesen beszélne |

<br>