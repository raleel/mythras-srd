# Naslov Vodiča za stil (h1)

Koristite h1 naslove (`# Heading Title`) za glavni naslov poglavlja. Svi hx naslovi će se pojaviti u bočnoj traci kao oznake.

Ako naslov nije h1 naslov, bočna traka će imati grešku dupliranja koja prikazuje stranicu, a zatim h2 'naslov' naslov.

---
## Naslovi sekcija (h2)

Koristite h2 naslove (`## Section Heading`) ispred kojih stoji razdjelnik (`---`) za svaku novu glavnu sekciju.

### Naslovi podsekcija koji povećavaju nivo h-nivoa za 1

Koristite h3 naslove (`### Subsection Heading`) za svaku novu podsekciju, i h4 naslove (`#### Sub-Subsection Heading`) za svaku novu pod-podsekciju.

### Progresija h-nivoa podsekcije: 2 > 3 > 4

Podnaslovi se pomiješaju u bočnoj traci ako progresija h-nivoa nije ispravno tretirana.

Oznaka naslova treba da se poveća za jedan ili ništa.

h2 praćeno h2 ili h3 je u redu. h3 praćeno h3 ili h4 je također u redu.

### Greške podsekcija
h2 praćeno h4 uzrokuje probleme. Bočna traka postavlja podnaslov negdje iznad naslova u sadržaju.

### Smanjivanje h-nivoa

Ovo se ne čini kao problem. npr. h4 na h3 ili h2 je u redu.

---
## Konvencije formatiranja

Sljedeći stilovi su norma za ove _Imperativ_ SRD-ove u Markdown formatu.

### Podebljano, kurziv i razdjelnici

- Koristite dvostruke zvjezdice (`**Bold**`) za **podebljani** tekst.
- Koristite donje crte (`_Italic_`) za _kurzivni_ tekst.
   - _nb: Izbjegavajte korištenje pojedinačnih zvjezdica za kurziv!_
- Koristite kose crte (`\_`) za 'izbjegavanje' znaka: \_Nije Kurziv\_.
- Koristite ugaone navodnike (``` `code` ```) da biste napravili `code blocks`.
- Koristite tri crtice (`---`) za umetanje horizontalne linije razdjelnika.

### Konvencije za podebljano i kurziv

Nastojte se držati sljedećih obrazaca...

#### Podebljani naslovi

Koristite podebljane naslove kada opisujete čini, efekte itd.
- **Naslov magije:** Opis.

#### Kurzivni naslovi

Koristite kurzivne naslove za 'podliste' varijanti čarolija itd.
- **Magija:** Opis.
  - **_Varijanta magije-A:_** Opis.
  - **_Varijanta magije-B:_** Opis.

#### Reference na kurzivne naslove

Koristite kurzivne naslove kada se pozivate na knjigu kao što je _Mythras Imperative_ ili osnovni _Mythras_ pravilnik.

---
## Formatiranje lista

### Neuređene liste / Bullets

- Neuređene liste se prave crticama.
- Neuređene liste se prave crticama.
  - Povećajte nivo uvlačenja sa 2 razmaka ili tabulatorom.

### Uređene liste / Numerisane tačke

1. Numerisane liste se prave cifrom i tačkom.
2. Numerisane liste se prave cifrom i tačkom.
- Pomiješati sa tačkama
	- I uvlačenje
3. Ponovo pomiješati brojeve
   - I bullets

### Liste sa naslovima

Za liste srodnih podnaslova podebljajte naslov i dvotačku.
- **Primjer 1:** Bla, bla, bla...
- **Primjer 2:** Bla, bla, bla...

### Liste sa kurzivnim naslovima

Za liste srodnih podnaslova podebljajte i kurzivirajte naslov i dvotačku.
- **_Primjer 1:_** Bla, bla, bla...
- **_Primjer 2:_** Bla, bla, bla...

---
## Tabele

Dajte tabelama podnaslov kako bi se pojavile označene u bočnoj traci, uvučene za jedan nivo od matične sekcije.

~Podebljajte red zaglavlja.~
Podebljavanje reda zaglavlja zapravo ga prikazuje kao normalan tekst. Podrazumevani CSS ima taj red podebljan.

### Poravnanje teksta u tabeli

Koristite red 2 za poravnanje sadržaja: `:--`, `:-:`, ili `--:`.
Ovo će uticati na celu kolonu.

#### Osnovni raspored tabela

| **Kolona 1** | **Kolona 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konvencije za poravnanje teksta

- Koristite centrirano poravnanje za brojeve ili slične liste vrijednosti.
- Koristite lijevo poravnanje za rečenice teksta.

#### Tabela primjera poravnanja

| **Broj** | **Opis** |
| :-: | :-- |
| 1 | Opisni tekst |
| 2 | Opisni tekst |
| 3 | Opisni tekst |

#### Primjer: Tabela intenziteta vatre

| **Intenzitet** | **Primjeri** | **Vrijeme paljenja** | **Šteta** |
| :-: | :-- | :-: | :-: |
| 1 | Svijeća | 1d4 | 1d2 |
| 2 | Baklja | 1d3 | 1d4 |
| 3 | Logorska vatra | 1d2 | 1d6 |
| 4 | Požar koji ispunjava sobu | 1d2 | 2d6 |
| 5 | Vulcanska lava | Trenutno | 3d6 |

---
## Linkovi

Postoji mnogo upotreba za linkove u SRD-u i ovdje je pokriveno samo nekoliko glavnih slučajeva.

### Formatiranje linkova

Formatiranje linka se vrši tekstom u zagradama. Koristite uglaste zagrade za vidljivi tekst linka, i zaobljene zagrade za odredišni URL: `[Link Text](URL)`.

U ovim dokumentima najčešće korišteni vanjski link bit će [Mythras Generator susreta](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Vanjski vs. interni linkovi

Vanjski linkovi vode na druge stranice putem interneta i trebat će im `http://example.com` URL, a po defaultu će se _uvijek_ otvarati u novom pregledniku.

Kako bi se izbjeglo zatrpavanje dokumenta koji se čita sa više tabova, interni linkovi i oznake se formiraju pomoću relativnih URL-ova koji referenciraju markdown datoteke vidljive u GitHub repozitorijumu. Umjesto novog taba, ovi interni linkovi će se brzo pomaknuti do linkovanog odjeljka.

#### Primjeri internih linkova

- **Linkovi poglavlja:** Ovi upućuju na početak glavne (h1) sekcije. npr. poglavlje [Borba](0005_Combat.md).

  - Format linka: `[Combat](0005_Combat.md)`

- **Linkovi podsekcija:** Ovi upućuju na naslov unutar poglavlja referencirajući dokument kao gore, ali dodajući `?id=` odmah praćeno odredišnim naslovom. npr. [Napad skakanjem](0005_Combat.md?id=leaping-attacks)

  - Format linka: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Vanjski linkovi na podsekcije

Može biti prilike za referenciranje poznate sekcije vanjskog dokumenta, na primjer, specifične tabele u drugom SRD-u. Formatiranje je isto kao i kod linkova podsekcija, gore, samo se koristi vanjski HTTP URL.

Kao primjer, evo [tabele imperijalnih u metričke konverzije](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) iz [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Liste magije i moći

Započnite 'čistu' sekciju sa h2 naslovom za liste dostupnih čarolija, moći itd; zatim h3 za svaku stavku liste.

Čarolije i moći se obično prezentuju u jednoj ravnoj listi po vrsti magije (Narodna magija, Teizam, itd), ali ako lista zahtijeva vlastite podsekcije, kao što su školske ili kultne specijalizacije, povećajte nivo naslova prema potrebi. Na primjer, h2 za Listu čuda teizma, h3 za Kult: Mithras, i h4 za svako čudo kulta Mithrasa.

Posebno u slučaju čarolija, ali u bilo kojem opisu koji koristi atribute ključnih riječi, navedite ih kurzivnim tekstom.

Opisni tekst i posebna pravila koriste normalan tekst.

### Formatiranje liste čarolija

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Primjer: formatirana lista čarolija (blok citirano) </summary>

---
> ## Opisi čarolija
>
> ### Odvratiti
> _Trenutno, Domet_
>
> Odvratiti se koristi za otpuštanje druge čarolije unutar dometa. Odvratiti se može baciti reaktivno za neutralizaciju napadnih čarolija, koristeći Reaktivnu akciju protiv magije.

</details>

---
## Blokovi statistika vozila
Započnite 'čistu' sekciju sa h2 naslovom za liste, zatim povećajte h-nivo kao i obično za kategorije i stavke liste.

Svaki navedeni primjer ima statistike i opise predstavljene kao lista sa tačkama sa podebljanim naslovima tačaka.

### Formatiranje bloka statistika vozila

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Primjer: formatirani blok statistika vozila (blok citirano) </summary>

---
> ## Primjeri vozila
>
> ### Kopnena vozila
>
> #### Presretač
>
> - **Oklop:** 6 (Srednje vojno), 40 Struktura
>
> - **Brzina:** Brza
>
> - **Sistemi:** 3
>
> - **Osobine:** Sjedalo za izbacivanje, Poboljšane performanse, Superiorno rukovanje, Nadzorni paket, Čvrst, Naoružan
>
> - **Oružje:** Dozator uljane mrlje, dozator dima, dvostruko povezani srednji mitraljezi
>
> - **Opis:** Napumpani luksuzni automobil, sportski automobil ili slično, ovaj automobil je napravljen da bude brz i da se dobro nosi u borbi. Ovo je vrsta vozila na koju ljudi pomisle kada neko kaže "špijunski automobil."

</details>

---
## Blokovi statistika stvorenja
Započnite 'čistu' sekciju s h2 naslovom za popise. Blokovi statistika stvorenja koriste tablice i složeniji su u smislu formatiranja i prostornih zahtjeva. Radi jasnoće, izbjegavajte podsekcije i dodajte razdjelnike između stavki popisa.

Svaki navedeni primjer treba da sadrži sljedeće...

- **Naslov stvorenja:** Razdjelnik praćen h3 naslovom za ime stvorenja.

- **MEG unos:** Vanjski link na određeno stvorenje na [Mythras Generatoru susreta](https://mythras.skoll.xyz/).

- **Osnovni detalji:** Ime/vrsta stvorenja, atributi, vještine i svi posebni opisi ili bilješke o karakteru prema potrebi.

- **Detalji o oružju:** Skraćeni opisi s kolonama za ime oružja i sljedeće atribute: Veličina (uključite Ovdje Snagu), Domet (uključite Ovdje Raspon), Šteta, AP/HP, i sva posebna pravila.

- **Lokacije udaraca i oklop:** Tabele lokacija će se razlikovati ovisno o različitoj anatomiji stvorenja, ali trebaju biti uključene čak i za tradicionalne humanoidne oblike kao sredstvo za praćenje oklopa i štete.

### Formatiranje bloka statistika stvorenja

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

<summary>Primjer: formatirane tabele blokova statistika stvorenja (blok citirano) </summary>

> ---
> ### Goblin/Ork
> [MEG unos](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Naziv stvorenja | Goblin/Ork |
> | :-- | :-- |
> | Ključni atributi | STR 11, KON 14, VEL 11, DEX 11, INT 11, MOC 11, KAR 7 |
> | Akcione tačke | 2 |
> | Modifikator štete | - |
> | Inicijativa | +11 |
> | Kretanje | 6m |
> | Sposobnosti | Noćni vid |
> | Vještine | Atletika 52%, Snaga 42%, Obmana 57%, Izdržljivost 48%, Izbjegavanje 62%, Percepcija 61%, Nenaoružana borba 52%, Snaga volje 42% |
> | Borbeni stil | Ratnik (Kratki mač, Štit, Koplje, Praćka) 62% |
>
> #### Detalji o oružju
>
> | Oružje | Veličina | Domet | Šteta | AP/HP | Posebno |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kratki mač | S | S | 1d6 | 6/8 | |
> | Koplje | S | D | 1d8+1 | 4/5 | |
> | Praćka | M | 10/150/300 | 1d8 | 1/2 | |
> | Štit | M | K | 1d4 | 4/9 | Štiti 3 lokacije za Pasivno blokiranje/odvraćanje |
>
> #### Lokacije udaraca i oklop
>
> | **1d20** | **Lokacija** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Desna noga | 1/5 |
> | 4-6 | Lijeva noga | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Grudi | 1/7 |
> | 13-15 | Desna ruka | 1/4 |
> | 16-18 | Lijeva ruka | 1/4 |
> | 19-20 | Glava | 1/5 |

</details>

---
## Errata zajednice

### Greške u kucanju i zabuna

Uređivanje tekstova autora radi 'čišćenja' treba biti minimalno, ali greške u kucanju i druge pogreške treba jednostavno mijenjati inline bez ikakvog signaliziranja.

### Errata Info paneli

Gdje je dato pravilo previše dvosmisleno, nepotpuno ili jednostavno pogrešno, dodajte sklopivu napomenu o Erratama zajednice.

Objasnite problem kurzivom koristeći samo podebljani kurziv za naslov problema - _bez h(x) zaglavlja!_ - kako ne biste stvarali zbunjujuće unose u bočnoj traci.

Ako je dodan zamjenski tekst, stavite ga u dvostruke navodnike u podebljanom kurzivu, ispred kojeg stoji "_Errata zajednice:_" u kurzivu normalne težine.

Dodatna pravila, ako su potrebna, trebaju biti predstavljena tekstom normalne težine.

#### Predložak formatiranja Errate

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Primjeri Errate

<details>

<summary>* Errata zajednice</summary>

_**Penjanje**_

_Errata zajednice:_
_**"Nošeni oklop ometa penjače za iznos jednak prosjeku nošenih oklopnih poena. Ovo se pronalazi tako što se zbroje svi oklopni poeni nošeni na svakoj lokaciji i taj broj podijeli sa brojem lokacija."**_

_Pravilo, kako je napisano, brzo uzrokuje probleme. Nošenje jednog komada oklopa od 6AP smanjilo bi ljudsko kretanje na 0, što znači da bi čovjek koji nosi čeličnu kacigu i ništa drugo bio previše opterećen da se uopće penje. Ovo se čini nerazumno restriktivnim, otuda i predložena uređena verzija. Ovo će biti ažurirano ako originalni autori revidiraju pravilo kako je napisano._

</details>

<details>

<summary>* Errata zajednice</summary>

_**Načini kretanja: Hod, Trčanje, Sprint**_

_Objavljena verzija _Mythras Imperative_ nema eksplicitna pravila za kretanje različitim načinima kretanja, iako su pokrivena u osnovnom pravilniku Mythrasa. Množitelji načina kretanja iznad dodani su kao dio Errate zajednice._

_Gdje je potrebno, trebalo bi biti dovoljno tretirati načine kretanja na sljedeći način:_

- _Načini kretanja brži od Hoda primjenjuju množitelj na ocjenu kretanja: 3x za Trčanje, 5x za Sprint._

- _Dok su u načinu kretanja Trčanja ili Sprinta, likovi ne mogu pokušavati većinu proaktivnih akcija poput napadanja ili bacanja čini. Neki izuzeci uključuju..._
  - _Napadanje pri korištenju pravila za Juriš._
  - _Gađanje oružjem dugog dometa s osobinom Skirmishing._
- _Kao opće pravilo, sve dopuštene akcije treba tretirati kao jednu ocjenu teže za izvođenje pri Trčanju, i dvije ocjene teže pri Sprintu._

</details>

---
## Razna upozorenja

### Prazne linije / Novi redovi

Ostavite prazan red između različitih vrsta unosa. Zaglavlja, razdjelnici, tabele itd. Oni neće biti vidljivi u načinu čitanja, ali njihov nedostatak može uzrokovati probleme s formatiranjem.

### Podebljani ili kurzivni višeparagrafski tekst

Svaki paragraf mora biti označen kao podebljan ili kurzivan tekst. Novi red između paragrafa prekinut će formatiranje, ostavljajući siročad oznake za formatiranje.

### Međunarodni pravopis

Regresivne i deplorabilne sile su se pobrinule da uklone sve britanske pravopise u korist objektivno slabijih američkih verzija. Budite na oprezu za britanske riječi s -OUR: _armour_, _favour_, itd.