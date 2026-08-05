# Stiilijuhendi pealkiri (h1)

Kasutage h1-pealkirju (`# Heading Title`) põhilise peatüki pealkirja jaoks. Kõik hx-pealkirjad ilmuvad külgribal järjehoidjatena.

Kui pealkiri ei ole h1-pealkiri, tekib külgribal duplikaadiviga, mis näitab lehte ja seejärel h2-pealkirja.

---
## Sektsioonide pealkirjad (h2)

Kasutage h2-pealkirju (`## Section Heading`), millele eelneb eraldusjoon (`---`), iga uue põhilise sektsiooni jaoks.

### Alasektsioonide pealkirjad, suurendades h-taset 1 võrra

Kasutage h3-pealkirju (`### Subsection Heading`) iga uue alasektsiooni jaoks ja h4-pealkirju (`#### Sub-Subsection Heading`) iga uue alam-alasektsiooni jaoks.


### Alasektsiooni h-progression: 2 > 3 > 4

Alampäised segunevad külgribal, kui h-progressiooniga ei ole õigesti tegeletud.

Pealkirja tähis peaks suurenema ühe võrra või mitte üldse.

h2, millele järgneb h2 või h3, on korras. h3, millele järgneb h3 või h4, on samuti korras.

### Alasektsiooni vead
h2, millele järgneb h4, põhjustab probleeme. Külgriba paigutab alampäise sisukorras pealkirjast kõrgemale.

### h-tasemete vähendamine

See ei tundu olevat probleemiks. nt h4 kuni h3 või h2 on korras.

---
## Vormindamise kokkulepped

Järgmised stiilid on Markdown-vormingus *Imperative* SRD-de puhul normiks.

### Paks kiri, kaldkiri ja eraldusjooned

- Kasutage topelt-tärne (`**Bold**`) **paksus kirjas** teksti jaoks.
- Kasutage alakriipse (`_Italic_`) _kaldkirjas_ teksti jaoks.
   - _nb: Vältige kaldkirja jaoks ühekordsete tärnide kasutamist!_
- Kasutage kaldkriipse (`\_`) märgi "põgenemiseks": \_Mitte kaldkirjas\_.
- Kasutage nurksulge (``` `code` ```), et teha `code blocks`.
- Kasutage kolme sidekriipsu (`---`), et lisada horisontaalne eraldusjoon.

### Paksus ja kaldkirjas kokkulepped

Püüdke kinni pidada järgmistest mustritest...

#### Paksu kirjaga pealkirjad

Kasutage paksu kirja pealkirju, kui kirjeldate loitse, efekte jne.
- **Loitsu pealkiri:** Kirjeldus.

#### Kaldkirjas pealkirjad

Kasutage kaldkirjas pealkirju loitsude variantide "alamloendite" jms jaoks.
- **Loits:** Kirjeldus.
  - **_Loitsu variant-A:_** Kirjeldus.
  - **_Loitsu variant-B:_** Kirjeldus.

#### Kaldkirjas pealkirja viited

Kasutage kaldkirjas pealkirju, kui viitate raamatule, näiteks _Mythras Imperative_ või põhilisele _Mythras_ reeglistikule.

---
## Loendite vormindamine

### Järjestamata loendid / Täpploendid

- Järjestamata loendid tehakse sidekriipsudega.
- Järjestamata loendid tehakse sidekriipsudega.
  - Suurendage taande taset 2 tühiku või tabeldusmärgiga.

### Järjestatud loendid / Nummerdatud punktid

1. Nummerdatud loendid tehakse numbri ja täispunktiga.
2. Nummerdatud loendid tehakse numbri ja täispunktiga.
- Segage täppidega
	- Ja taandega
3. Segage numbrid uuesti sisse
   - Ja täpid

### Pealkirjastatud loendid

Seotud alampäiste loendite puhul tehke pealkiri ja koolon paksus kirjas.
- **Näide 1:** Bla, bla, bla...
- **Näide 2:** Bla, bla, bla...

### Kaldkirjas pealkirjastatud loendid

Seotud alampäiste loendite puhul tehke pealkiri ja koolon paksus ja kaldkirjas.
- **_Näide 1:_** Bla, bla, bla...
- **_Näide 2:_** Bla, bla, bla...

---
## Tabelid

Andke tabelitele alapealkiri, et need ilmuksid külgribal järjehoidjatena, taandatuna ühe taseme võrra oma vanemsektsioonist.

~Muutke pealkirjarida paksus kirjas tekstiks.~
Päiserea paksus kirjas muutmine muudab selle tegelikult tavaliseks tekstiks. Vaikimisi CSS-is on see rida paksus kirjas.

### Tabeli teksti joondamine

Kasutage 2. rida sisu joondamiseks: `:--`, `:-:` või `--:`.
See mõjutab tervet veergu.

#### Tabelite põhiline paigutus

| **Veerg 1** | **Veerg 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beeta |
| 3 | gamma |

### Teksti joondamise kokkulepped

- Kasutage numbrite või sarnaste väärtuste loendite puhul keskele joondamist.
- Kasutage lausete puhul vasakule joondamist.

#### Joondamise näidistabel

| **Number** | **Kirjeldus** |
| :-: | :-- |
| 1 | Kirjeldav tekst |
| 2 | Kirjeldav tekst |
| 3 | Kirjeldav tekst |

#### Näide: Tule intensiivsuse tabel

| **Intensiivsus** | **Näited** | **Süttimisaeg** | **Kahjustus** |
| :-: | :-- | :-: | :-: |
| 1 | Küünal | 1d4 | 1d2 |
| 2 | Tõrvik | 1d3 | 1d4 |
| 3 | Lõke | 1d2 | 1d6 |
| 4 | Ruumitäis leeke | 1d2 | 2d6 |
| 5 | Vulkaaniline laava | Hetkeline | 3d6 |

---
## Lingid

SRD-s on linkidel palju kasutusvõimalusi ja siin on kaetud vaid mõned peamised juhud.

### Linkide vormindamine

Lingi vormindamine tehakse nurksulgudega tekstiga. Kasutage nähtava lingiteksti jaoks nurksulge ja sihtkoha URL-i jaoks kõversulge: `[Link Text](URL)`.

Nendes dokumentides on kõige sagedamini kasutatav välislink [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Välised vs sisemised lingid

Välised lingid viivad teistele lehtedele internetis ja vajavad `http://example.com` URL-i ning vaikimisi avanevad need _alati_ uuel brauseri vahelehel.

Et vältida mitme vahelehe kuhjumist loetavas dokumendis, luuakse sisemised lingid ja järjehoidjad suhteliste URL-idega, mis viitavad GitHubi repositooriumis nähtavatele Markdown-failidele. Uue vahelehe asemel kerivad need sisemised lingid kiiresti lingitud sektsiooni.

#### Sisemiste linkide näited

- **Peatükkide lingid:** Need osutavad põhilise (h1) sektsiooni algusele. nt [Võitluse](0005_Combat.md) peatükk.

  - Lingi formaat: `[Combat](0005_Combat.md)`

- **Alasektsioonide lingid:** Need osutavad peatüki sees olevale pealkirjale, viidates dokumendile nagu ülal, kuid lisades `?id=` ja kohe selle järele sihtkoha pealkirja. nt [Hüppavad rünnakud](0005_Combat.md?id=leaping-attacks)

  - Lingi formaat: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Välised lingid alasektsioonidele

Võib tekkida vajadus viidata välise dokumendi tuntud sektsioonile, näiteks mõnele teisele SRD-le kuuluvale tabelile. Vormindamine on sama mis alasektsioonide linkide puhul, kasutades ainult välist HTTP URL-i.

Näitena on siin [Imperialist meetermõõdustikku teisendamise tabel](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) [Classic Fantasy Imperative SRD-st](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Maagia ja võimete loendid

Alustage "puhast" sektsiooni h2-pealkirjaga saadaolevate loitsude, võimete jms loendite jaoks; seejärel h3 iga loendiüksuse jaoks.

Loitsud ja võimed on tavaliselt esitatud ühe tasase loendina maagiatüübi järgi (Folk Magic, Theism jne), kuid kui loend vajab oma alasektsioone, nagu koolkond või kultuse spetsialiseerumised, suurendage pealkirja taset vastavalt. Näiteks h2 Theism Miracles List jaoks, h3 kultuse Mithras jaoks ja h4 iga Mithras kultuse ime jaoks.

Eriti loitsude puhul, kuid mis tahes kirjelduses, kus kasutatakse märksõna atribuute, loetlege need kaldkirjas tekstina.

Kirjeldav tekst ja erireeglid kasutavad tavalist teksti.

### Loitsu loendi vormindamine

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Näide: vormindatud loitsuloend (plokina tsiteeritud) </summary>

---
> ## Loitsude kirjeldused
>
> ### Avert
> _Instant, Ranged_
>
> Averti kasutatakse mõne teise loitsu tühistamiseks leviala piires. Averti saab kasutada reaktiivselt ründavate loitsude neutraliseerimiseks, kasutades Counter Magic Reactive Actionit.

</details>

---
## Sõidukite statistika blokid
Alustage "puhast" sektsiooni h2-pealkirjaga loendite jaoks, seejärel suurendage h-taset nagu tavaliselt kategooriate ja loendiüksuste puhul.

Igal loetletud näitel on statistika ja kirjeldused esitatud täpploendina koos paksus kirjas punktide pealkirjadega.

### Sõiduki statistika bloki vormindamine

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Näide: vormindatud sõiduki statistika blokk (plokina tsiteeritud) </summary>

---
> ## Näidissõidukid
>
> ### Maismaasõidukid
>
> #### Interceptor
>
> - **Kere:** 6 (Medium Military), 40 Structure
>
> - **Kiirus:** Fast
>
> - **Süsteemid:** 3
>
> - **Tunnused:** Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Tough, Weaponized
>
> - **Relvad:** Oil slick dispenser, smoke dispenser, twin linked medium machine guns
>
> - **Kirjeldus:** See on "tuunitud" luksusauto, sportauto või muu sarnane, ehitatud kiireks liikumiseks ja lahingus vastu pidama. See on sõiduk, mida inimesed kujutavad ette, kui keegi ütleb "spiooni auto".

</details>

---
## Olendite statistika blokid
Alustage "puhast" sektsiooni h2-pealkirjaga loendite jaoks. Olendite statistika blokid kasutavad tabeleid ja on vormindamise ja ruumivajaduse poolest keerukamad. Selguse huvides vältige alasektsioone ja lisage loendiüksuste vahele eraldusjooned.

Igal loetletud näitel peaks olema järgmine...

- **Olendi pealkiri:** Eraldusjoon, millele järgneb h3-päis olendi nimega.

- **MEG kirje:** Välislink määratud olendile [Mythras Encounter Generatoris](https://mythras.skoll.xyz/).

- **Põhiandmed:** Olendi nimi/tüüp, atribuudid, oskused ja kõik vajalikud erikirjeldused või märkused tegelase kohta.

- **Relvaandmed:** Lühendatud kirjeldused koos veergudega relva nime ja järgmiste atribuutide jaoks: Size (sisaldage siin Force'i), Reach (sisaldage siin Range'i), Damage, AP/HP ja kõik erireeglid.

- **Tabamiskohtade asukohad ja soomus:** Asukohtade tabelid varieeruvad sõltuvalt olendi erinevast anatoomiast, kuid need tuleks lisada isegi tavaliste humanoidide puhul, et jälgida soomust ja kahjustusi.

### Olendi statistika bloki vormindamine

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

<summary>Näide: vormindatud olendi statistika tabelid (plokina tsiteeritud) </summary>

> ---
> ### Goblin/Orc
> [MEG kirje](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Olendi nimi | Goblin/Orc |
> | :-- | :-- |
> | Peamised atribuudid | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Tegevuspunktid | 2 |
> | Kahjustuse modifikaator | - |
> | Algatus | +11 |
> | Liikumine | 6m |
> | Võimed | Night Sight |
> | Oskused | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Võitlusstiil | Warrior (Shortsword, Shield, Spear, Sling) 62% |
>
> #### Relvaandmed
>
> | Relv | Suurus | Ulatus | Kahjustus | AP/HP | Erireegel |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Lühimõõk | M | M | 1d6 | 6/8 | |
> | Oda | M | L | 1d8+1 | 4/5 | |
> | Ling | L | 10/150/300 | 1d8 | 1/2 | |
> | Kilp | L | S | 1d4 | 4/9 | Kaitseb 3 kohta (Passive Blocking/Warding) |
>
> #### Tabamiskohtade asukohad ja soomus
>
> | **1d20** | **Asukoht** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Parem jalg | 1/5 |
> | 4-6 | Vasak jalg | 1/5 |
> | 7-9 | Kõht | 1/6 |
> | 10-12 | Rind | 1/7 |
> | 13-15 | Parem käsi | 1/4 |
> | 16-18 | Vasak käsi | 1/4 |
> | 19-20 | Pea | 1/5 |

</details>

---
## Kogukonna parandused (Errata)

### Kirjavead ja segadus

Teksti "korrastamiseks" tehtud muudatused peaksid olema minimaalsed, kuid kirjavead ja muud vead tuleks lihtsalt ilma tähistuseta tekstis muuta.

### Errata info-paneelid

Kui reegel on liiga mitmetähenduslik, puudulik või lihtsalt vale, lisage kokkuklapitav "Community Errata" märkus.

Selgitage probleemi kaldkirjas, kasutades probleemi pealkirja jaoks ainult paksus kaldkirjas fonti - _mitte h(x) päiseid!_ -, et mitte tekitada segadust tekitavaid külgriba kirjeid.

Kui lisatakse asendustekst, pange see jutumärkidesse paksus kaldkirjas, millele eelneb "_Community Errata:_" tavalises kaldkirjas.

Täiendavad reeglid, kui neid vajatakse, tuleks esitada tavalises kirjas.

#### Errata vormindamise mall

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata näited

<details>

<summary>* Community Errata</summary>

_**Climb**_

_Community Errata:_
_**"Kantud soomus takistab ronimist määral, mis võrdub kantud soomuspunktide keskmisega. Leidke see liites kokku kõikide kohtade kantud soomuspunktid ja jagage see summa kohtade arvuga."**_

_Nii nagu kirjutatud, tekitab see reegel kiiresti probleeme. Ühe 6AP soomustüki kandmine vähendaks inimese liikumiskiiruse 0-ni, mis tähendab, et teraskiivrit kandev inimene oleks liiga koormatud, et üldse ronida. See tundub ebamõistlikult piirav, mistõttu on siin soovitatud muudetud versioon. See uuendatakse, kui algsed autorid peaksid reeglit muutma._

</details>

<details>

<summary>* Community Errata</summary>

_**Kõnnakud: Walk, Run, Sprint**_

_Avaldatud _Mythras Imperative_ versioonis puuduvad selged reeglid erinevate kõnnakute jaoks, kuigi need on kaetud Mythrase põhireeglistikus. Ülaltoodud kõnnakute kordajad on lisatud osana kogukonna parandustest._

_Vajaduse korral piisab kõnnakute käsitlemisest järgmiselt:_

- _Kõnnakud, mis on kiiremad kui Walk, rakendavad Move-reitingule kordajat: 3x Run ja 5x Sprint puhul._

- _Run või Sprint kõnnaku ajal ei saa tegelased proovida enamikku proaktiivseid tegevusi, nagu ründamine või loitsimine. Mõned erandid hõlmavad..._
  - _Rünnakud Charging-reeglite kasutamisel._
  - _Kaugrelvadest laskmine Skirmishing-tunnusega._
- _Üldreeglina tuleks kõiki lubatud tegevusi pidada Run-kõnnakul ühe astme võrra ja Sprint-kõnnakul kahe astme võrra raskemini teostatavateks._

</details>

---
## Mitmesugused hoiatused

### Tühjad read / Reavahetused

Jätke erinevate kirjete vahele tühi rida. Päised, eraldusjooned, tabelid jne. Need ei ole lugemisvaates nähtavad, kuid nende puudumine võib põhjustada vormindusprobleeme.

### Paksu või kaldkirjas mitmelõiguline tekst

Iga lõik peab olema tähistatud paksu või kaldkirjas tekstina. Uus rida lõikude vahel katkestab vorminduse, jättes maha rippuvad vormindusmärgid.

### Rahvusvahelised õigekirjad

Regressiivsed ja taunimisväärsed jõud on näinud vajadust eemaldada kõik Briti õigekirja vormid USA versioonide kasuks. Olge tähelepanelikud Briti -OUR sõnade suhtes: _armour_, _favour_ jne.