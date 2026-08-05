# Tyyliopas (h1)

Käytä h1-otsikoita (`# Heading Title`) pääluvun otsikkoon. Kaikki hx-otsikot näkyvät sivupalkissa kirjanmerkkeinä.

Jos otsikko ei ole h1-otsikko, sivupalkissa näkyy kopiointivirhe, joka näyttää sivun ja sitten h2-"title"-otsikon.

---
## Osio-otsikot (h2)

Käytä h2-otsikoita (`## Section Heading`), joiden edessä on jakaja (`---`), jokaiselle uudelle pääosiolle.

### Alaotsikot, joiden h-taso nousee yhdellä

Käytä h3-otsikoita (`### Subsection Heading`) jokaiselle uudelle alaosiolle ja h4-otsikoita (`#### Sub-Subsection Heading`) jokaiselle uudelle alialaosiolle.

### Alaotsikoiden h-eteneminen: 2 > 3 > 4

Alaotsikot menevät sekaisin sivupalkissa, jos h-etenemistä ei käsitellä oikein.

Otsikkomerkin tulisi kasvaa yhdellä tai ei ollenkaan.

h2-otsikkoa seuraava h2 tai h3 on kunnossa. h3-otsikkoa seuraava h3 tai h4 on myös kunnossa.

### Alaotsikoiden virheet
h2-otsikkoa seuraava h4 aiheuttaa ongelmia. Sivupalkki sijoittaa alaotsikon jonnekin pääotsikon yläpuolelle sisällysluettelossa.

### h-tasojen pienentäminen

Tämä ei tunnu olevan ongelma. Esim. h4:stä h3:een tai h2:een siirtyminen on kunnossa.

---
## Muotoilukäytännöt

Seuraavat tyylit ovat normina näille *Imperative* SRD-asiakirjoille Markdown-muodossa.

### Lihavointi, kursivointi ja jakajat

- Käytä kaksoistähtiä (`**Bold**`) **lihavoidulle** tekstille.
- Käytä alaviivoja (`_Italic_`) _kursivoidulle_ tekstille.
   - _huom: Vältä yksittäisten tähtien käyttöä kursivointiin!_
- Käytä kenoviivaa (`\_`) merkin "pakoittamiseen": \_Ei kursivointia\_.
- Käytä kulmalainausmerkkejä (``` `code` ```) luomaan `code blocks`.
- Käytä kolmea yhdysviivaa (`---`) vaakasuoran jakoviivan lisäämiseen.

### Lihavoinnin ja kursivoinnin käytännöt

Pyri noudattamaan seuraavia malleja...

#### Lihavoidut otsikot

Käytä lihavoituja otsikoita kuvatessasi loitsuja, vaikutuksia jne.
- **Loitsun nimi:** Kuvaus.

#### Kursivoidut otsikot

Käytä kursivoituja otsikoita varianttiloitsujen "alalistoille" jne.
- **Loitsu:** Kuvaus.
  - **_Loitsun variantti A:_** Kuvaus.
  - **_Loitsun variantti B:_** Kuvaus.

#### Kursivoidut viittaukset

Käytä kursivoituja otsikoita viitatessasi kirjaan, kuten _Mythras Imperative_ tai *Mythras*-ydinsäännöt.

---
## Listojen muotoilu

### Järjestämättömät listat / Luettelomerkit

- Järjestämättömät listat tehdään yhdysviivoilla.
- Järjestämättömät listat tehdään yhdysviivoilla.
  - Lisää sisennystä kahdella välilyönnillä tai sarkaimella.

### Järjestetyt listat / Numeroidut kohdat

1. Numeroidut listat tehdään numerolla ja pisteellä.
2. Numeroidut listat tehdään numerolla ja pisteellä.
- Sekoita luettelomerkkeihin
	- Ja sisennys
3. Lisää numeroita takaisin
   - Ja luettelomerkkejä

### Otsikoidut listat

Otsikoi listojen liittyvät alaotsikot lihavoimalla otsikko ja kaksoispiste.
- **Esimerkki 1:** Bla, bla, bla...
- **Esimerkki 2:** Bla, bla, bla...

### Kursivoidut otsikoidut listat

Otsikoi listojen liittyvät alaotsikot lihavoimalla ja kursivoimalla otsikko ja kaksoispiste.
- **_Esimerkki 1:_** Bla, bla, bla...
- **_Esimerkki 2:_** Bla, bla, bla...

---
## Taulukot

Anna taulukoille alaotsikko, jotta ne näkyvät kirjanmerkkeinä sivupalkissa, yhden tason verran sisennettynä pääosiostaan.

~Tee otsikkorivistä lihavoitua tekstiä.~
Otsikkorivin lihavointi itse asiassa esittää sen normaalina tekstinä. Oletustyylitiedosto (CSS) lihavoi kyseisen rivin automaattisesti.

### Taulukon tekstin tasaus

Käytä riviä 2 sisällön tasaamiseen: `:--`, `:-:` tai `--:`.
Tämä vaikuttaa koko sarakkeeseen.

#### Taulukoiden perusasettelu

| **Sarake 1** | **Sarake 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beeta |
| 3 | gamma |

### Tekstin tasauskäytännöt

- Käytä keskitystä numeroille tai vastaaville arvolistoille.
- Käytä vasenta tasausta tekstilauseille.

#### Tasausesimerkki-taulukko

| **Numero** | **Kuvaus** |
| :-: | :-- |
| 1 | Kuvaileva teksti |
| 2 | Kuvaileva teksti |
| 3 | Kuvaileva teksti |

#### Esimerkki: Tulen voimakkuustaulukko

| **Voimakkuus** | **Esimerkkejä** | **Syttymisaika** | **Vahinko** |
| :-: | :-- | :-: | :-: |
| 1 | Kynttilä | 1d4 | 1d2 |
| 2 | Soihtu | 1d3 | 1d4 |
| 3 | Nuotio | 1d2 | 1d6 |
| 4 | Huoneen täyttävä palo | 1d2 | 2d6 |
| 5 | Vulkaaninen laava | Välitön | 3d6 |

---
## Linkit

SRD-asiakirjoissa on monia käyttötarkoituksia linkeille, ja tässä käsitellään vain muutamia pääasiallisia tapauksia.

### Linkkien muotoilu

Linkin muotoilu tehdään hakasulkeilla. Käytä hakasulkeita näkyvälle linkkitekstille ja kaarisulkeita kohde-URL-osoitteelle: `[Link Text](URL)`.

Näissä asiakirjoissa yleisimmin käytetty ulkoinen linkki on [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Ulkoiset vs. sisäiset linkit

Ulkoiset linkit johtavat muille sivuille internetissä ja vaativat `http://example.com` URL-osoitteen, ja ne avautuvat oletuksena _aina_ uuteen selaimen välilehteen.

Jotta välilehtien määrä ei sotke luettavaa asiakirjaa, sisäiset linkit ja kirjanmerkit muodostetaan suhteellisilla URL-osoitteilla, jotka viittaavat GitHub-arkistossa näkyviin Markdown-tiedostoihin. Uuden välilehden sijaan nämä sisäiset linkit vierittävät nopeasti linkitettyyn osioon.

#### Esimerkkejä sisäisistä linkeistä

- **Lukulinkit:** Nämä osoittavat pääosion (h1) alkuun, esim. [Taistelu](0005_Combat.md) -lukuun.

  - Linkin muoto: `[Combat](0005_Combat.md)`

- **Alaosioiden linkit:** Nämä osoittavat luvun sisäiseen otsikkoon viittaamalla asiakirjaan kuten yllä, mutta lisäämällä loppuun `?id=` ja välittömästi perään kohdeotsikon. Esim. [Hyppäävät hyökkäykset](0005_Combat.md?id=leaping-attacks)

  - Linkin muoto: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Ulkoiset linkit alaosioihin

Saattaa olla tilanteita, joissa on tarpeen viitata ulkoisen asiakirjan tunnettuun osioon, esimerkiksi tiettyyn taulukkoon toisessa SRD-asiakirjassa. Muotoilu on sama kuin yllä olevissa alaosioiden linkeissä, mutta siinä käytetään ulkoista HTTP-URL-osoitetta.

Esimerkkinä tässä on [Imperiaalisten ja metristen yksiköiden muunnostaulukko](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/) -asiakirjasta.

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Loitsut ja voimat -listat

Aloita "puhdas" osio h2-otsikolla käytettävissä olevien loitsujen, voimien jne. listoille; käytä sitten h3-otsikkoa jokaiselle listan kohdalle.

Loitsut ja voimat esitetään yleensä yhtenä tasaisena listana taikatyyppien mukaan (kansantaikuus, teismi jne.), mutta jos lista vaatii omia alaosioitaan, kuten koulukuntia tai kulttien erikoistumisia, nosta otsikkotasoa vastaavasti. Esimerkiksi h2 teistien ihmelistalle, h3 kultille: Mithras, ja h4 jokaiselle Mithraksen kultin ihmeelle.

Erityisesti loitsujen tapauksessa, mutta kaikissa kuvauksissa, joissa käytetään avainsana-attribuutteja, listaa ne kursivoidulla tekstillä.

Kuvaileva teksti ja erityissäännöt käyttävät normaalia tekstiä.

### Loitsulistan muotoilu

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Esimerkki: muotoiltu loitsulista (lohkolainauksena)</summary>

---
> ## Loitsujen kuvaukset
>
> ### Avert (Käännä)
> _Välitön, kantama_
>
> Avert-loitsua käytetään toisen loitsun kumoamiseen kantaman sisällä. Avert voidaan heittää reaktiivisesti hyökkäävien loitsujen neutralisoimiseksi käyttämällä Counter Magic -reaktiotoimintoa.

</details>

---
## Ajoneuvojen tilastoblokit
Aloita "puhdas" osio h2-otsikolla listoille ja nosta sitten h-tasoa tavalliseen tapaan kategorioille ja listan kohdille.

Jokaisen listatun esimerkin tilastot ja kuvaukset esitetään luettelomerkein varustettuna listana, jossa on lihavoidut otsikot.

### Ajoneuvon tilastoblokin muotoilu

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Esimerkki: muotoiltu ajoneuvon tilastoblokki (lohkolainauksena)</summary>

---
> ## Esimerkkiajoneuvot
>
> ### Maa-ajoneuvot
>
> #### Interceptor
>
> - **Runko:** 6 (Keskikokoinen sotilaallinen), 40 rakennetta
>
> - **Nopeus:** Nopea
>
> - **Järjestelmät:** 3
>
> - **Piirteet:** Heittoistuin, tehostettu suorituskyky, erinomainen käsiteltävyys, valvontapaketti, kestävä, aseistettu
>
> - **Aseet:** Öljyläiskän levitin, savunlevitin, kaksoistornit keskikokoisilla konekivääreillä
>
> - **Kuvaus:** Viritetty luksusauto, urheiluauto tai vastaava; tämä auto on rakennettu nopeaksi ja se pärjää taistelussa. Tällainen on ajoneuvo, jonka ihmiset mieltävät sanottaessa "vakooja-auto".

</details>

---
## Olentojen tilastoblokit
Aloita "puhdas" osio h2-otsikolla listoille. Olentojen tilastoblokit käyttävät taulukoita ja ovat muotoilultaan ja tilavaatimuksiltaan monimutkaisempia. Selkeyden vuoksi vältä alaotsikoita ja lisää jakajat listan kohtien väliin.

Jokaisen listatun esimerkin tulee sisältää seuraavat...

- **Olennon nimi:** Jakaja, jota seuraa h3-otsikko olennon nimelle.

- **MEG-merkintä:** Ulkoinen linkki määritettyyn olentoon [Mythras Encounter Generator](https://mythras.skoll.xyz/) -sivustolla.

- **Perustiedot:** Olennon nimi/tyyppi, attribuutit, taidot ja mahdolliset erityiskuvaukset tai huomautukset tarpeen mukaan.

- **Asetiedot:** Lyhennetyt kuvaukset sarakkeilla, joissa on aseen nimi ja seuraavat attribuutit: Koko (sisällytä voima tähän), Ulottuvuus (sisällytä kantama tähän), Vahinko, AP/HP ja mahdolliset erityissäännöt.

- **Osumakohdat ja haarniska:** Sijaintitaulukot vaihtelevat olennoittain, mutta ne tulisi sisällyttää jopa perinteisille humanoideille haarniskan ja vahingon seuraamiseksi.

### Olentojen tilastoblokin muotoilu

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

<summary>Esimerkki: muotoiltu olennon tilastoblokki (lohkolainauksena)</summary>

> ---
> ### Hiisi/Örkki
> [MEG-merkintä](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Olennon nimi | Hiisi/Örkki |
> | :-- | :-- |
> | Avainattribuutit | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Toimintapisteet | 2 |
> | Vahinkomuuntaja | - |
> | Aloite | +11 |
> | Liike | 6m |
> | Kyvyt | Yönäkö |
> | Taidot | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Taistelutyyli | Soturi (Lyhytmiekka, Kilpi, Keihäs, Linko) 62% |
>
> #### Asetiedot
>
> | Ase | Koko | Ulottuvuus | Vahinko | AP/HP | Erityistä |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Lyhytmiekka | M | M | 1d6 | 6/8 | |
> | Keihäs | M | L | 1d8+1 | 4/5 | |
> | Linko | L | 10/150/300 | 1d8 | 1/2 | |
> | Kilpi | L | S | 1d4 | 4/9 | Suojaa 3 sijaintia passiivisessa torjunnassa |
>
> #### Osumakohdat ja haarniska
>
> | **1d20** | **Sijainti** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Oikea jalka | 1/5 |
> | 4-6 | Vasen jalka | 1/5 |
> | 7-9 | Vatsa | 1/6 |
> | 10-12 | Rinta | 1/7 |
> | 13-15 | Oikea käsi | 1/4 |
> | 16-18 | Vasen käsi | 1/4 |
> | 19-20 | Pää | 1/5 |

</details>

---
## Yhteisön errata (virhekorjaukset)

### Kirjoitusvirheet ja epäselvyydet

Kirjoittajien tekstin "siivoamisen" tulisi pysyä mahdollisimman pienenä, mutta kirjoitusvirheet ja muut virheet tulisi muuttaa suoraan ilman erillistä merkintää.

### Errata-tietolaatikot

Jos jokin sääntö on liian moniselitteinen, puutteellinen tai yksinkertaisesti väärä, lisää taitettava Yhteisön errata -huomautus.

Selitä ongelma kursiivilla käyttäen vain lihavoitua kursivointia ongelman otsikossa – _ei h(x)-otsikoita!_ – jotta ne eivät luo sekavia sivupalkin merkintöjä.

Jos lisäät korvaavaa tekstiä, sijoita se lainausmerkkeihin lihavoituna ja kursivoituna, ja lisää sen eteen "_Community Errata:_" normaalipainoisella kursiivilla.

Lisäsäännöt, jos niitä tarvitaan, tulee esittää normaalilla tekstillä.

#### Errata-muotoilupohja

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata-esimerkkejä

<details>

<summary>* Yhteisön errata</summary>

_**Kiipeäminen (Climb)**_

_Community Errata:_
_**"Päällä oleva haarniska haittaa kiipeilijää määrällä, joka vastaa haarniskan pisteytysten keskiarvoa. Laske tämä laskemalla yhteen jokaisen sijainnin haarniskapisteet ja jakamalla summa sijaintien määrällä."**_

_Alkuperäinen sääntö aiheuttaa nopeasti ongelmia. Yksittäisen 6AP-haarniskan käyttäminen pudottaisi ihmisen liikenopeuden nollaan, mikä tarkoittaisi, että teräskypärää kantava ihminen olisi liian kuormittunut kiipeämään lainkaan. Tämä vaikuttaa kohtuuttoman rajoittavalta, minkä vuoksi yllä oleva korjattu versio on ehdotettu. Tätä päivitetään, jos alkuperäiset kirjoittajat muuttavat sääntöä._

</details>

<details>

<summary>* Yhteisön errata</summary>

_**Liikkumistyylit (Gaits): Kävely, Juoksu, Pyrähdys**_

_Julkaistussa _Mythras Imperative_ -versiossa ei ole selkeitä sääntöjä eri liikkumistyyleille, vaikka ne käsitelläänkin Mythras-ydinsääntökirjassa. Yllä olevat liikkumistyylien kertoimet on lisätty osana yhteisön errataa._

_Tarvittaessa liikkumistyylejä tulisi käsitellä seuraavasti:_

- _Kävelyä nopeammat liikkumistyylit soveltavat kerrointa Liike-arvoon: 3x Juoksulle, 5x Pyrähdykselle._

- _Juoksu- tai Pyrähdystilassa hahmot eivät voi yrittää useimpia proaktiivisia toimintoja, kuten hyökkäämistä tai loitsujen heittämistä. Poikkeuksia ovat..._
  - _Hyökkäykset käytettäessä rynnäkkösääntöjä (Charging)._
  - _Etäaseilla ampuminen Skirmishing-piirteen avulla._
- _Yleissääntönä voidaan sanoa, että kaikki sallitut toiminnot vaikeutuvat yhdellä asteella juoksun aikana ja kahdella asteella pyrähdyksen aikana._

</details>

---
## Muita varoituksia

### Tyhjät rivit / rivinvaihdot

Jätä tyhjä rivi eri tyyppisten merkintöjen väliin. Otsikot, jakajat, taulukot jne. Nämä eivät näy lukunäkymässä, mutta niiden puuttuminen voi aiheuttaa muotoiluongelmia.

### Lihavoitu tai kursivoitu monikappaleinen teksti

Jokainen kappale on merkittävä lihavoiduksi tai kursivoiduksi tekstiksi. Kappaleiden välinen rivinvaihto rikkoo muotoilun ja jättää jälkeensä orpoja muotoilumerkkejä.

### Kansainväliset kirjoitusasut

Regressiiviset ja valitettavat voimat ovat nähneet hyväksi poistaa kaikki brittiläiset kirjoitusasut Yhdysvaltain versioiden tieltä. Ole tarkkana brittiläisten -OUR-sanojen kanssa: _armour_, _favour_ jne.