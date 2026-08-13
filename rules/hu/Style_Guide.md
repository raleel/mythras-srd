# Stílus útmutató (h1)

Az h1 fejlécet (`# Heading Title`) a fő fejezetcímhez használd. Minden hx fejléc könyvjelzőként jelenik meg az oldalsávban.

Ha a cím nem h1 fejléc, az oldalsávban duplikációs hiba jelenik meg, amely mutatja az oldalt, majd az h2 'cím' fejlécet.

---
## Szakaszfejlécek (h2)

Használj h2 fejléceket (`## Section Heading`), amelyek előtt elválasztó (`---`) áll minden új fő szakaszhoz.

### Alszakasz-fejlécek (növekvő h-szinttel)

Használj h3 fejléceket (`### Subsection Heading`) minden új alszakaszhoz, és h4 fejléceket (`#### Sub-Subsection Heading`) minden új al-alszakaszhoz.

### Alszakasz h-progreszió: 2 > 3 > 4

Az alfejlécek összekeverednek az oldalsávban, ha a h-progresziót nem megfelelően kezeljük.

A fejléc jelölőjének eggyel vagy sehogy sem szabad növekednie.

Az h2-t követő h2 vagy h3 rendben van. Az h3-at követő h3 vagy h4 szintén rendben van.

### Alszakasz hibák
Az h2-t követő h4 problémákat okoz. Az oldalsáv az alfejlécet valahol a címsor fölé helyezi a tartalomjegyzékben.

### h-szintek csökkentése

Úgy tűnik, ez nem okoz problémát. pl. h4-ről h3-ra vagy h2-re váltani rendben van.

---
## Formázási konvenciók

A következő stílusok a norma ezeknél az _Imperative_ SRD-knél Markdown formátumban.

### Félkövér, dőlt és elválasztók

- Használj dupla csillagot (`**Bold**`) **félkövér** szöveghez.
- Használj alulvonást (`_Italic_`) _dőlt_ szöveghez.
   - _Megj: Kerüld az egyes csillagok használatát dőlt betűkhöz!_
- Használj visszaperjelet (`\_`) egy karakter 'elkerüléséhez': \_Nem dőlt\_.
- Használj szögletes idézőjeleket (``` `code` ```) `code blocks` létrehozásához.
- Használj három kötőjelet (`---`) vízszintes elválasztó vonal beszúrásához.

### Félkövér és dőlt betűs konvenciók

Törekedj a következő minták betartására...

#### Félkövér címek

Használj félkövér címeket varázslatok, hatások stb. leírásakor.
- **Varázslat címe:** Leírás.

#### Dőlt címek

Használj dőlt címeket 'alszakaszokhoz' vagy varázslat-változatokhoz stb.
- **Varázslat:** Leírás.
  - **_Varázslat-változat A:_** Leírás.
  - **_Varázslat-változat B:_** Leírás.

#### Dőlt címek hivatkozásokhoz

Használj dőlt címeket, amikor olyan könyvekre hivatkozol, mint a _Mythras Imperative_ vagy az alap _Mythras_ szabálykönyv.

---
## Listák formázása

### Rendezetlen listák / Felsoroláspontok

- A rendezetlen listák kötőjelekkel készülnek.
- A rendezetlen listák kötőjelekkel készülnek.
  - Növeld a behúzási szintet 2 szóközzel vagy tabulátorral.

### Rendezett listák / Számozott pontok

1. A számozott listák számjeggyel és ponttal készülnek.
2. A számozott listák számjeggyel és ponttal készülnek.
- Keverd felsoroláspontokkal
	- És behúzással
3. Térj vissza a számokhoz
   - És felsoroláspontokhoz

### Fejléces listák

A kapcsolódó alfejezetek listájához tedd félkövérré a címet és a kettőspontot.
- **1. példa:** Bla, bla, bla...
- **2. példa:** Bla, bla, bla...

### Dőlt fejléces listák

A kapcsolódó alfejezetek listájához tedd félkövérré és dőlt betűssé a címet és a kettőspontot.
- **_1. példa:_** Bla, bla, bla...
- **_2. példa:_** Bla, bla, bla...

---
## Táblázatok

Adj a táblázatoknak alcímet, hogy könyvjelzőként jelenjenek meg az oldalsávban, a szülő szakaszhoz képest egy szinttel beljebb húzva.

~Tedd a fejlécsort félkövér szöveggé.~
A fejlécsor félkövérré tétele valójában normál szövegként jeleníti meg azt. Az alapértelmezett CSS automatikusan félkövérre állítja azt a sort.

### Táblázat szövegigazítása

Használd a 2. sort a tartalom igazításához: `:--`, `:-:`, vagy `--:`.
Ez az egész oszlopra kihatással lesz.

#### Táblázatok alapvető elrendezése

| **1. oszlop** | **2. oszlop** |
| :-: | :-- |
| 1 | alfa |
| 2 | béta |
| 3 | gamma |

### Szövegigazítási konvenciók

- Használj középre igazítást számokhoz vagy hasonló értéklistákhoz.
- Használj balra igazítást szöveges mondatokhoz.

#### Igazítási példa táblázat

| **Szám** | **Leírás** |
| :-: | :-- |
| 1 | Leíró szöveg |
| 2 | Leíró szöveg |
| 3 | Leíró szöveg |

#### Példa: Tűzintenzitás táblázat

| **Intenzitás** | **Példák** | **Gyulladási idő** | **Sebzés** |
| :-: | :-- | :-: | :-: |
| 1 | Gyertya | 1d4 | 1d2 |
| 2 | Fáklya | 1d3 | 1d4 |
| 3 | Tábori tűz | 1d2 | 1d6 |
| 4 | Szobát betöltő tűzvész | 1d2 | 2d6 |
| 5 | Vulkáni láva | Azonnali | 3d6 |

---
## Hivatkozások

Az SRD-ben számos hivatkozás használatos, itt csak a főbb eseteket fedjük le.

### Hivatkozások formázása

A hivatkozás formázása szögletes zárójeles szöveggel történik. Használj szögletes zárójeleket a látható hivatkozási szöveghez, és gömbölyű zárójeleket a cél URL-hez: `[Link Text](URL)`.

Ezekben a dokumentumokban a leggyakrabban használt külső hivatkozás a [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Külső vs. Belső hivatkozások

A külső hivatkozások más oldalakra mutatnak az interneten keresztül, és `http://example.com` URL-t igényelnek, és alapértelmezetten _mindig_ új böngészőfülön nyílnak meg.

Hogy elkerüljük a több fül okozta zsúfoltságot az olvasott dokumentumban, a belső hivatkozások és könyvjelzők relatív URL-ekkel készülnek, amelyek a GitHub-tárhelyen látható markdown fájlokra hivatkoznak. Az új fül helyett ezek a belső hivatkozások gyorsan a hivatkozott szakaszhoz görgetnek.

#### Belső hivatkozási példák

- **Fejezet hivatkozások:** Ezek egy fő (h1) szakasz kezdetére mutatnak. pl. a [Harc](0005_Combat.md) fejezet.

  - Hivatkozás formátuma: `[Combat](0005_Combat.md)`

- **Alszakasz hivatkozások:** Ezek egy fejezeten belüli fejlécre mutatnak, a fenti dokumentumra hivatkozva, de hozzáfűzve a `?id=` jelet, majd közvetlenül a célfejlécet. pl. [Ugró támadások](0005_Combat.md?id=leaping-attacks)

  - Hivatkozás formátuma: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Külső hivatkozások alszakaszokra

Előfordulhat, hogy egy külső dokumentum ismert szakaszára kell hivatkozni, például egy másik SRD-ben található konkrét táblázatra. A formázás megegyezik a fenti alszakasz hivatkozásokkal, csak a külső HTTP URL-t használjuk.

Példaként íme az [Imperial-Metrikus átváltási táblázat](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) a [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/)-ből.

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Mágia és Erő listák

Kezdj egy 'tiszta' szakaszt egy h2 fejléc alatt az elérhető varázslatok, erők stb. listájához; majd h3 az egyes listaelemekhez.

A varázslatok és erők általában egyetlen lapos listában jelennek meg mágia típus szerint (Népi Mágia, Teizmus, stb.), de ha a lista saját alszakaszokat igényel, mint például iskola vagy kultusz specializációk, akkor növeld a fejléc szintjét ennek megfelelően. Például h2 a Teista Csodák Listájához, h3 a Mithras Kultuszhoz, és h4 az egyes Mithras kultusz csodákhoz.

Különösen a varázslatok esetében, de minden kulcsszó attribútumot használó leírásnál, sorold fel azokat dőlt betűvel.

A leíró szöveg és a különleges szabályok normál szöveget használnak.

### Varázslatlista formázása

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Példa: formázott varázslatlista (blokk idézetben) </summary>

---
> ## Varázslat leírások
>
> ### Elhárítás
> _Azonnali, Hatótávolságon belüli_
>
> Az Elhárítás egy másik varázslat hatótávolságon belüli megszüntetésére szolgál. Az Elhárítás reaktív módon is elsüthető a támadó varázslatok semlegesítésére, az Elhárítás Reaktív Akció használatával.

</details>

---
## Jármű statisztikák
Kezdj egy 'tiszta' szakaszt egy h2 fejléc alatt a listázásokhoz, majd növeld a h-szintet szokás szerint a kategóriákhoz és listaelemekhez.

Minden felsorolt példa rendelkezik a statisztikákkal és leírásokkal, amelyek felsoroláspontos listaként, félkövér pontcímekkel vannak bemutatva.

### Jármű statisztika formázása

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Példa: formázott jármű statisztika (blokk idézetben) </summary>

---
> ## Jármű minták
>
> ### Földi járművek
>
> #### Elfogó
>
> - **Test:** 6 (Közepes katonai), 40 Szerkezet
>
> - **Sebesség:** Gyors
>
> - **Rendszerek:** 3
>
> - **Jellemzők:** Katapultülés, Megnövelt teljesítmény, Kiváló irányíthatóság, Megfigyelő rendszer, Szívós, Fegyverezett
>
> - **Fegyverek:** Olajfolt-szóró, füstszóró, ikergéppuskák
>
> - **Leírás:** Egy feltuningolt luxusautó, sportkocsi vagy hasonló, ezt az autót arra építették, hogy gyors legyen és harc közben is megállja a helyét. Ez az a jármű, amire az emberek gondolnak, amikor valaki azt mondja, "kém autó".

</details>

---
## Lény statisztikák
Kezdj egy 'tiszta' szakaszt egy h2 fejléc alatt a listázásokhoz. A lény statisztikák táblázatokat használnak, és összetettebbek formázási és helyigény szempontjából. Az átláthatóság érdekében kerüld az alszakaszokat, és adj elválasztókat a listaelemek közé.

Minden felsorolt példa rendelkezzen a következőkkel...

- **Lény címe:** Egy elválasztó, amelyet egy h3 fejléc követ a lény nevével.

- **MEG bejegyzés:** Egy külső hivatkozás a megadott lényre a [Mythras Encounter Generator](https://mythras.skoll.xyz/)-en.

- **Alapvető részletek:** Lény neve/típusa, attribútumok, képességek és minden különleges leírás vagy karakterjegyzet, ahogy szükséges.

- **Fegyver részletek:** Rövidített leírások, oszlopokkal a fegyver nevéhez és a következő attribútumokhoz: Méret (tartalmazza az Erőt itt), Hatótáv (tartalmazza a Távolságot itt), Sebzés, AP/HP, és minden különleges szabály.

- **Találati helyek & Páncél:** A helyszíntáblázatok a lény anatómiájától függően változnak, de tartalmazni kell őket még a hagyományos humanoidoknál is, mint a páncél és a sebzés nyomon követésének módját.

### Lény statisztika formázása

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

<summary>Példa: formázott lény statisztika táblázatok (blokk idézetben) </summary>

> ---
> ### Goblin/Ork
> [MEG bejegyzés](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Lény neve | Goblin/Ork |
> | :-- | :-- |
> | Főbb attribútumok | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Akciópontok | 2 |
> | Sebzés módosító | - |
> | Kezdeményezés | +11 |
> | Mozgás | 6m |
> | Képességek | Éjszakai látás |
> | Készségek | Atlétika 52%, Erő 42%, Megtévesztés 57%, Kitartás 48%, Kitérés 62%, Észlelés 61%, Pusztakezes 52%, Akaraterő 42% |
> | Harci stílus | Harcos (Rövidkard, Pajzs, Lándzsa, Parittya) 62% |
>
> #### Fegyver részletek
>
> | Fegyver | Méret | Hatótáv | Sebzés | AP/HP | Különleges |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Rövidkard | M | M | 1d6 | 6/8 | |
> | Lándzsa | M | L | 1d8+1 | 4/5 | |
> | Parittya | L | 10/150/300 | 1d8 | 1/2 | |
> | Pajzs | L | S | 1d4 | 4/9 | 3 helyszínt véd passzív blokkolás/hárítás esetén |
>
> #### Találati helyek & Páncél
>
> | **1d20** | **Helyszín** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Jobb láb | 1/5 |
> | 4-6 | Bal láb | 1/5 |
> | 7-9 | Has | 1/6 |
> | 10-12 | Mellkas | 1/7 |
> | 13-15 | Jobb kar | 1/4 |
> | 16-18 | Bal kar | 1/4 |
> | 19-20 | Fej | 1/5 |

</details>

---
## Közösségi helyesbítések (Errata)

### Gépelési hibák és zavarok

A szerzők szövegének 'tisztítására' irányuló szerkesztéseket minimális szinten kell tartani, de a gépelési hibákat és más tévedéseket csak változtatás nélkül, jelzés nélkül kell javítani.

### Helyesbítési információs panelek

Ahol egy adott szabály túl kétértelmű, hiányos vagy egyszerűen helytelen, adj hozzá egy összecsukható Közösségi helyesbítés (Errata) jegyzetet.

Magyarázd el a problémát dőlt betűvel, csak félkövér dőlt betűt használva a probléma címéhez - _nincs h(x) fejléc!_ - hogy ne hozzunk létre zavaró oldalsáv bejegyzéseket.

Ha helyettesítő szöveget adsz hozzá, tedd azt idézőjelbe félkövér dőlt betűvel, megelőzve a "_Közösségi helyesbítés:_" felirattal normál dőlt betűvel.

További szabályokat, ha szükségesek, normál súlyú szöveggel kell bemutatni.

#### Helyesbítési formázási sablon

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Helyesbítési példák

<details>

<summary>* Közösségi helyesbítés</summary>

_**Mászás**_

_Közösségi helyesbítés:_
_**"A viselt páncél a viselt Páncélpontok átlagával hátráltatja a mászókat. Ezt úgy találhatod meg, hogy összeadod az összes helyszín viselt páncélpontját, és elosztod ezt az összeget a helyszínek számával."**_

_Az eredetileg leírt szabály hamar problémákat okoz. Egyetlen 6 AP-s páncél viselése egy embert 0 Mozgásra csökkentene, ami azt jelenti, hogy egy acélsisakot viselő ember, más ruházat nélkül, túl megterhelt lenne a mászáshoz. Ez ésszerűtlenül korlátozónak tűnik, ezért az alább javasolt szerkesztett változat. Ez frissítésre kerül, amennyiben az eredeti szerzők módosítják a leírt szabályt._

</details>

<details>

<summary>* Közösségi helyesbítés</summary>

_**Járásmódok: Séta, Futás, Sprint**_

_A Mythras Imperative kiadott változata nem tartalmaz kifejezett szabályokat a különböző járásmódokkal való mozgáshoz, bár ezeket a Mythras alapkönyve lefedi. A fenti járásmód szorzók a Közösségi helyesbítés részeként kerültek hozzáadásra._

_Ahol szükséges, elegendő a következőképpen kezelni a járásmódokat:_

- _A Sétánál gyorsabb járásmódok szorzót alkalmaznak a Mozgás értéken: 3x Futásnál, 5x Sprintnél._

- _Futás vagy Sprint közben a karakterek nem kísérelhetnek meg legtöbb proaktív cselekvést, például támadást vagy varázslást. Néhány kivétel magában foglalja..._
  - _Támadásokat a Rohamozás szabályok használatakor._
  - _Távolsági fegyverek használatát a Portyázás jellemzővel._
- _Általános szabályként minden megengedett cselekvést egy osztállyal nehezebbnek kell tekinteni Futásnál, és két osztállyal nehezebbnek Sprintnél._

</details>

---
## Vegyes figyelmeztetések

### Üres sorok / Kocsi-visszatérés

Hagyj egy üres sort a különböző típusú bejegyzések között. Fejlécek, elválasztók, táblázatok stb. Ezek nem válnak láthatóvá az olvasási nézetben, de hiányuk formázási problémákat okozhat.

### Félkövér vagy dőlt több bekezdéses szöveg

Minden bekezdést külön kell félkövér vagy dőlt szövegként jelölni. A bekezdések közötti új sor megszakítja a formázást, árva formázási jelöléseket hagyva maga után.

### Nemzetközi helyesírás

A regresszív és siralmas erők úgy döntöttek, hogy eltávolítják az összes brit helyesírást az objektíven gyengébb amerikai verziók javára. Figyelj a brit -OUR szavakra: _armour_, _favour_, stb.