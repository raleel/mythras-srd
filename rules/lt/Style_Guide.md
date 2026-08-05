# Stiliaus vadovo pavadinimas (h1)

Naudokite h1 antraštes (`# Heading Title`) pagrindiniam skyriaus pavadinimui. Visos hx antraštes šoninėje juostoje bus rodomos kaip žymelės.

Jei pavadinimas nėra h1 antraštė, šoninėje juostoje atsiras dubliavimo klaida, rodanti puslapį, o po jo – h2 „pavadinimo“ antraštę.

---
## Skyrių antraštes (h2)

Kiekvienam naujam pagrindiniam skyriui naudokite h2 antraštes (`## Section Heading`), prieš jas įterpdami skirtuką (`---`).

### Poskyrių antraštes, didinančios h-lygį 1 vienetu

Kiekvienam naujam poskyriui naudokite h3 antraštes (`### Subsection Heading`), o kiekvienam poskyrio poskyriui – h4 antraštes (`#### Sub-Subsection Heading`). 


### Poskyrių h-progresija: 2 > 3 > 4

Jei h-progresija nesutvarkyta teisingai, šoninėje juostoje esančios paantraštės susimaišo.

Antraščių žymeklis turėtų didėti vienu vienetu arba nedidėti. 

h2 po kurios eina h2 arba h3 yra gerai. h3 po kurios eina h3 arba h4 taip pat yra gerai. 

### Poskyrių klaidos
h2 po kurios eina h4 sukelia problemų. Šoninėje juostoje paantraštė atsiduria kažkur virš antraštės turinyje.

### h-lygių mažinimas

Tai neturėtų kelti problemų. Pvz., h4 perėjimas į h3 arba h2 yra tinkamas. 

---
## Formatavimo konvencijos

Šie stiliai yra standartas šiems _Imperative_ SRD Markdown formatu.

### Paryškinimas, pasvirasis šriftas ir skirtukai

- Naudokite dvigubas žvaigždutes (`**Bold**`) **paryškintam** tekstui.
- Naudokite apatinius brūkšnius (`_Italic_`) _pasvirajam_ tekstui. 
   - _pastaba: Venkite naudoti viengubas žvaigždutes pasvirajam šriftui!_
- Naudokite atvirkštinius brūkšnius (`\_`) simboliui „išvengti“: \_Ne pasvirasis šriftas\_.
- Naudokite kampinius kabutes (``` `code` ```) norėdami sukurti `code blocks`.
- Naudokite tris brūkšnius (`---`) horizontaliai skiriamajai linijai įterpti.

### Paryškinimo ir pasvirojo šrifto konvencijos

Stenkitės laikytis šių modelių... 

#### Paryškinti pavadinimai

Naudokite paryškintus pavadinimus aprašydami burtus, efektus ir pan.
- **Magijos pavadinimas:** Aprašymas.

#### Pasviri pavadinimai

Naudokite pasvirusius pavadinimus burtų variantų „posąrašiui“ ir pan.
- **Magija:** Aprašymas.
  - **_Magijos variantas-A:_** Aprašymas.
  - **_Magijos variantas-B:_** Aprašymas.

#### Pasvirojo šrifto pavadinimų nuorodos

Naudokite pasvirusius pavadinimus cituodami knygą, pavyzdžiui, _Mythras Imperative_ arba pagrindinį _Mythras_ taisyklių rinkinį.

---
## Sąrašų formatavimas

### Nerikiuoti sąrašai / Ženklinti punktai

- Nerikiuoti sąrašai kuriami naudojant brūkšnius.
- Nerikiuoti sąrašai kuriami naudojant brūkšnius.
  - Padidinkite įtraukos lygį 2 tarpais arba tabuliacija.

### Rikiuoti sąrašai / Numeruoti punktai

1. Numeruoti sąrašai kuriami naudojant skaitmenį ir tašką.
2. Numeruoti sąrašai kuriami naudojant skaitmenį ir tašką.
- Maišykite su ženklinimo punktais
	- Ir įtrauka
3. Vėl įtraukite skaičius
   - Ir ženklintus punktus

### Antraštiniai sąrašai

Susijusių paantraščių sąrašams paryškinkite pavadinimą ir dvitaškį.
- **1 pavyzdys:** Bla, bla, bla...
- **2 pavyzdys:** Bla, bla, bla...

### Pasviri antraštiniai sąrašai

Susijusių paantraščių sąrašams paryškinkite ir pasvyru šriftu pažymėkite pavadinimą bei dvitaškį.
- **_1 pavyzdys:_** Bla, bla, bla...
- **_2 pavyzdys:_** Bla, bla, bla...

---
## Lentelės

Suteikite lentelėms paantraštę, kad jos būtų rodomos šoninės juostos žymelėse, įtrauktos vienu lygiu žemiau už pirminį skyrių. 

~Padarykite antraščių eilutę paryškintą.~ 
Antraščių eilutės paryškinimas iš tikrųjų ją rodo įprastu tekstu. Numatytasis CSS stilius tą eilutę jau paryškina.

### Lentelės teksto lygiavimas

Turinio lygiavimui naudokite 2 eilutę: `:--`, `:-:` arba `--:`.
Tai paveiks visą stulpelį.

#### Pagrindinis lentelių išdėstymas

| **1 stulpelis** | **2 stulpelis** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Teksto lygiavimo konvencijos

- Skaičiams ar panašiems vertybių sąrašams naudokite lygiavimą centre.
- Sakiniams naudokite kairinį lygiavimą.

#### Lygiavimo pavyzdžio lentelė

| **Numeris** | **Aprašymas** |
| :-: | :-- |
| 1 | Aprašomasis tekstas |
| 2 | Aprašomasis tekstas |
| 3 | Aprašomasis tekstas |

#### Pavyzdys: Ugnies intensyvumo lentelė

| **Intensyvumas** | **Pavyzdžiai** | **Laikas iki užsidegimo** | **Žala** |
| :-: | :-- | :-: | :-: |
| 1 | Žvakė | 1d4 | 1d2 |
| 2 | Deglas | 1d3 | 1d4 |
| 3 | Laužas | 1d2 | 1d6 |
| 4 | Kambarį užpildantis gaisras | 1d2 | 2d6 |
| 5 | Vulkaninė lava | Akimirksniu | 3d6 |

---
## Nuorodos

SRD nuorodos naudojamos daug kur, čia aptarti tik pagrindiniai atvejai.

### Nuorodų formatavimas

Nuoroda formatuojama su laužtiniais skliaustais. Naudokite laužtinius skliaustus matomam nuorodos tekstui, o riestinius – tiksliniam URL: `[Link Text](URL)`.

Šiuose dokumentuose dažniausiai naudojama išorinė nuoroda bus [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Išorinės ir vidinės nuorodos

Išorinės nuorodos veda į kitus interneto puslapius ir joms reikalingas `http://example.com` URL; pagal numatytuosius nustatymus jos _visada_ atsidarys naujame naršyklės skirtuke. 

Kad išvengtumėte daugybės skirtukų, kurie apsunkina dokumento skaitymą, vidinės nuorodos ir žymelės formuojamos naudojant santykinius URL, nurodančius į Markdown failus GitHub saugykloje. Vietoj naujo skirtuko, šios vidinės nuorodos greitai nuslinks į susietą skyrių.

#### Vidinių nuorodų pavyzdžiai

- **Skyrių nuorodos:** Jos rodo į pagrindinio (h1) skyriaus pradžią. Pvz., [Kovos](0005_Combat.md) skyrius.

  - Nuorodos formatas: `[Combat](0005_Combat.md)`

- **Poskyrių nuorodos:** Jos rodo į antraštę skyriuje, nurodant dokumentą, kaip minėta aukščiau, bet pridedant `?id=` ir iškart po to – tikslinę antraštę. Pvz., [Šuoliuojantys išpuoliai](0005_Combat.md?id=leaping-attacks) 

  - Nuorodos formatas: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Išorinės nuorodos į poskyrius

Kartais gali prireikti nuorodos į žinomą išorinio dokumento skyrių, pavyzdžiui, konkrečią lentelę kitame SRD. Formatavimas toks pat kaip ir poskyrių nuorodų, tik naudojamas išorinis HTTP URL.

Pavyzdžiui, štai [Imperinių vienetų konvertavimo į metrinius lentelė](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) iš [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magijos ir galių sąrašai

Pradėkite „švarų“ skyrių su h2 antrašte pasiekiamų burtų, galių ir pan. sąrašams; tada h3 kiekvienam sąrašo elementui. 

Burtai ir galios paprastai pateikiami viename ištisiniame sąraše pagal magijos tipą (Folk Magic, Theism ir kt.), bet jei sąrašui reikia savo poskyrių, pavyzdžiui, mokyklų ar kulto specializacijų, atitinkamai padidinkite antraštės lygį. Pavyzdžiui, h2 Theism stebuklų sąrašui, h3 Mithras kultui, ir h4 kiekvienam Mithras kulto stebuklui. 
 
Ypač burtų atveju, bet ir bet kuriame aprašyme, naudojant raktinius atributus, išvardykite juos pasviruoju šriftu.

Aprašomajame tekste ir specialiose taisyklėse naudojamas įprastas tekstas.

### Burtų sąrašo formatavimas

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Pavyzdys: suformatuotas burtų sąrašas (blokinė citata) </summary>

---
> ## Burtų aprašymai
>
> ### Avert
> _Akimirksninis, Nuotolinis_
>
> Avert naudojamas nutraukti kitą burtą veikimo nuotolyje. Avert galima išmesti reaktyviai, neutralizuojant puolamuosius burtus naudojant Counter Magic reaktyvų veiksmą.

</details>

---
## Transporto priemonių statistikos blokai
Pradėkite „švarų“ skyrių su h2 antrašte sąrašams, tada didinkite h-lygį pagal kategorijas ir sąrašo elementus. 

Kiekvienas išvardytas pavyzdys turi statistiką ir aprašymus, pateiktus kaip ženklintą sąrašą su paryškintais punktų pavadinimais.

### Transporto priemonės statistikos bloko formatavimas

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Pavyzdys: suformatuotas transporto priemonės statistikos blokas (blokinė citata) </summary>

---
> ## Transporto priemonių pavyzdžiai
> 
> ### Antžeminės transporto priemonės
> 
> #### Interceptor
> 
> - **Korpusas:** 6 (vidutinis karinis), 40 Struktūra
> 
> - **Greitis:** Greitas
> 
> - **Sistemos:** 3
> 
> - **Savybės:** Katapultos sėdynė, Patobulintas veikimas, Puikus valdymas, Stebėjimo sistema, Tvirtas, Ginkluotas
> 
> - **Ginklai:** Alyvos dėmių dozatorius, dūmų dozatorius, suporuoti vidutiniai kulkosvaidžiai
> 
> - **Aprašymas:** Tai patobulintas prabangus automobilis, sportinis automobilis ar panašus; šis automobilis sukurtas važiuoti greitai ir atlaikyti mūšį. Tai transporto priemonė, apie kurią žmonės pagalvoja, kai kas nors pasako „šnipų automobilis“.

</details>

---
## Padarų statistikos blokai
Pradėkite „švarų“ skyrių su h2 antrašte sąrašams. Padarų statistikos blokai naudoja lenteles ir yra sudėtingesni formatavimo bei vietos poreikių prasme. Dėl aiškumo venkite poskyrių ir įterpkite skirtukus tarp sąrašo elementų.


Kiekvienas išvardytas pavyzdys turėtų turėti šiuos elementus...

- **Padaro pavadinimas:** Skirtukas, po kurio eina h3 antraštė su padaro vardu.

- **MEG įrašas:** Išorinė nuoroda į konkretų padarą [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Pagrindiniai duomenys:** Padaro vardas/tipas, atributai, įgūdžiai ir bet kokie specialūs aprašymai ar charakterio pastabos pagal poreikį.

- **Ginklų duomenys:** Sutrumpinti aprašymai su stulpeliais ginklo pavadinimui ir šiems atributams: Dydis (įtraukite čia Jėgą/Force), Pasiekiamumas (įtraukite čia Nuotolį), Žala, AP/HP ir bet kokios specialios taisyklės.

- **Kūno vietos ir šarvai:** Vietų lentelės skirsis priklausomai nuo padaro anatomijos, tačiau jas reikėtų įtraukti net tradiciniams humanoidams kaip būdą sekti šarvus ir žalą. 

### Padaro statistikos bloko formatavimas

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

<summary>Pavyzdys: suformatuotas padaro statistikos blokas (blokinė citata) </summary>

> ---
> ### Goblinas/Orkas
> [MEG įrašas](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Padaro vardas | Goblinas/Orkas |
> | :-- | :-- |
> | Pagrindiniai atributai | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Veiksmo taškai | 2 | 
> | Žalos modifikatorius | - |
> | Iniciatyva | +11 |
> | Judėjimas | 6m |
> | Gebėjimai | Naktinis matymas |
> | Įgūdžiai | Atletika 52%, Jėga 42%, Apgaulė 57%, Ištvermė 48%, Vengimas 62%, Suvokimas 61%, Bekovė kova 52%, Valia 42% |
> | Kovos stilius | Karys (trumpas kardas, skydas, ietis, laidynė) 62% |
> 
> #### Ginklų duomenys
> 
> | Ginklas | Dydis | Pasiekiamumas | Žala | AP/HP | Specialu |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Trumpas kardas | M | M | 1d6 | 6/8 | |
> | Ietis | M | L | 1d8+1 | 4/5 | |
> | Laidynė | L | 10/150/300 | 1d8 | 1/2 |  |
> | Skydas | L | S | 1d4 | 4/9 | Apsaugo 3 vietas pasyviam blokavimui |
> 
> #### Kūno vietos ir šarvai
> 
> | **1d20** | **Vieta** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Dešinė koja | 1/5 |
> | 4-6 | Kairė koja | 1/5 |
> | 7-9 | Pilvas | 1/6 |
> | 10-12 | Krūtinė | 1/7 |
> | 13-15 | Dešinė ranka | 1/4 |
> | 16-18 | Kairė ranka | 1/4 |
> | 19-20 | Galva | 1/5 |


</details>


---
## Bendruomenės pataisos (Errata)

### Rašybos klaidos ir neaiškumai

Autorių teksto „valymo“ redagavimas turėtų būti minimalus, tačiau rašybos klaidos ir kiti netikslumai turėtų būti tiesiog taisomi vietoje be jokių žymų.


### Errata informaciniai skydeliai

Ten, kur taisyklė yra per daug dviprasmiška, neišsami arba tiesiog klaidinga, įterpkite surenkamą bendruomenės pataisos pastabą.

Paaiškinkite problemą pasviruoju šriftu, naudodami tik paryškintą pasvirąjį šriftą problemos pavadinimui – _jokių h(x) antraščių!_ – kad nesukurtumėte painių šoninės juostos įrašų.

Jei pridedamas pakeičiamas tekstas, patalpinkite jį tarp dvigubų kabučių paryškintu pasviruoju šriftu, prieš tai įrašę "_Community Errata:_" įprastu pasviruoju šriftu.

Papildomos taisyklės, jei jų reikia, turėtų būti pateiktos įprastu tekstu.

#### Errata formatavimo šablonas

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata pavyzdžiai

<details>

<summary>* Community Errata</summary>

_**Laipiojimas**_

_Community Errata:_
_**"Dėvimi šarvai trukdo lipti, atimdami kiekį, lygų vidutiniam dėvimų šarvų taškų skaičiui. Tai sužinosite susumuodami visų vietų šarvų taškus ir padalindami šį skaičių iš vietų skaičiaus."**_

_Ši taisyklė sukelia greitų problemų. Dėvint vieną 6AP šarvų gabalą, žmogaus judėjimas sumažėtų iki 0, o tai reiškia, kad žmogus su plieniniu šalmu ir be nieko kito būtų per daug apkrautas, kad galėtų lipti. Tai atrodo nepagrįstai ribojančia, todėl siūlomas aukščiau pateiktas redaguotas variantas. Tai bus atnaujinta, jei originalūs autoriai peržiūrės taisyklę._

</details>

<details>

<summary>* Community Errata</summary>

_**Ėjimo tempai: Ėjimas, Bėgimas, Sprintas**_

_Publikuotoje _Mythras Imperative_ versijoje nėra aiškių taisyklių ėjimui skirtingais tempais, nors jos aptariamos _Mythras_ pagrindinėje taisyklių knygoje. Aukščiau nurodyti tempų daugikliai buvo pridėti kaip Bendruomenės pataisos dalis._ 

_Kai reikia, užtenka tempus vertinti taip:_

- _Spartesni nei ėjimas tempai taiko daugiklį Judėjimo rodikliui: 3x Bėgimui, 5x Sprintui._

- _Bėgimo arba sprinto tempu veikėjai negali bandyti atlikti daugumos iniciatyvių veiksmų, tokių kaip puolimas ar burtų metimas. Išimtys apima..._
  - _Puolimus naudojant puolimo taisykles._
  - _Šaudymą iš tolimųjų ginklų su Skirmishing savybe._ 
- _Kaip bendra taisyklė, visi leidžiami veiksmai turėtų būti laikomi vienu lygiu sunkesniais bėgant ir dviem lygiais sunkesniais sprintuojant._


</details>

---
## Įvairūs įspėjimai

### Tuščios eilutės / Eilučių grąžinimai

Palikite tuščią eilutę tarp skirtingų tipų įrašų. Antraštės, skirtukai, lentelės ir kt. Skaitymo režime jie nebus matomi, tačiau jų trūkumas gali sukelti formatavimo problemų.

### Paryškintas arba pasviras kelių pastraipų tekstas

Kiekviena pastraipa turi būti pažymėta kaip paryškintas arba pasviras tekstas. Nauja eilutė tarp pastraipų sugadins formatavimą, palikdama „našlaičius“ formatavimo ženklus.

### Tarptautinė rašyba

Regresyvios ir apgailėtinos jėgos nusprendė pašalinti visą britišką rašybą JAV versijų naudai. Būkite atidūs su britiškais -OUR žodžiais: _armour_, _favour_ ir kt.