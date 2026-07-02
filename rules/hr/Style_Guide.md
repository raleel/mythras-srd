# Naslov Vodiča za Stil (h1)

Koristite h1 naslove (`# Heading Title`) za glavni naslov poglavlja. Svi hx naslovi pojavit će se u bočnoj traci kao oznake.

Ako naslov nije h1 naslov, bočna traka će imati pogrešku duplikacije koja prikazuje stranicu, a zatim h2 'naslov' naslov.

---
## Naslovi odjeljaka (h2)

Koristite h2 naslove (`## Section Heading`) kojima prethodi razdjelnik (`---`) za svaki novi glavni odjeljak.

### Naslovi pododjeljaka koji povećavaju h-razinu za 1

Koristite h3 naslove (`### Subsection Heading`) za svaki novi pododjeljak i h4 naslove (`#### Sub-Subsection Heading`) za svaki novi pod-pododjeljak.

### H-progresija pododjeljaka: 2 > 3 > 4

Podnaslovi se pomiješaju u bočnoj traci ako se h-progresija ne rješava ispravno.

Oznaka naslova trebala bi se povećati za jedan ili ništa.

h2 nakon kojeg slijedi h2 ili h3 je u redu. h3 nakon kojeg slijedi h3 ili h4 je također u redu.

### Pogreške pododjeljaka
h2 nakon kojeg slijedi h4 uzrokuje probleme. Bočna traka postavlja podnaslov negdje iznad naslova u sadržaju.

### Smanjenje h-razina

Ovo se ne čini problemom. npr. h4 na h3 ili h2 je u redu.

---
## Konvencije formatiranja

Sljedeći stilovi su norma za ove _Imperative_ SRD-ove u Markdown formatu.

### Podebljano, kurziv i razdjelnici

- Koristite dvostruke zvjezdice (`**Bold**`) za **podebljani** tekst.
- Koristite podcrte (`_Italic_`) za _kurzivni_ tekst.
  - _napomena: Izbjegavajte korištenje pojedinačnih zvjezdica za kurziv!_
- Koristite kose crte (`\_`) za 'bijeg' karaktera: \_Nije Kurziv\_.
- Koristite kutne navodnike (``` `code` ```) da biste napravili `code blocks`.
- Koristite tri crtice (`---`) za umetanje vodoravne linije razdvajanja.

### Konvencije za podebljano i kurziv

Nastojte se držati sljedećih obrazaca...

#### Podebljani naslovi

Koristite podebljane naslove kada opisujete čarolije, efekte itd.
- **Naslov magije:** Opis.

#### Kurzivni naslovi

Koristite kurzivne naslove za 'podpopise' varijanti čarolija itd.
- **Magija:** Opis.
  - **_Varijanta magije-A:_** Opis.
  - **_Varijanta magije-B:_** Opis.

#### Reference na kurzivne naslove

Koristite kurzivne naslove kada se pozivate na knjigu kao što je _Mythras Imperative_ ili osnovna pravila _Mythras_.

---
## Formatiranje lista

### Neuređene liste / Točkice

- Neuređene liste izrađuju se crticama.
- Neuređene liste izrađuju se crticama.
  - Povećajte razinu uvlake s 2 razmaka ili tabulatorom.

### Uređene liste / Numerirane točke

1. Numerirane liste izrađuju se znamenkama i točkom.
2. Numerirane liste izrađuju se znamenkama i točkom.
- Pomiješano s točkicama
	- I uvlačenje
3. Vratite brojeve
   - I točkice

### Liste s naslovima

Za liste povezanih podnaslova podebljajte naslov i dvotočku.
- **Primjer 1:** Bla, bla, bla...
- **Primjer 2:** Bla, bla, bla...

### Liste s kurzivnim naslovima

Za liste povezanih podnaslova podebljajte i iskosite naslov i dvotočku.
- **_Primjer 1:_** Bla, bla, bla...
- **_Primjer 2:_** Bla, bla, bla...

---
## Tablice

Tablicama dajte podnaslov kako bi se pojavile označene u bočnoj traci, uvučene za jednu razinu od svog nadređenog odjeljka.

~Učinite redak zaglavlja podebljanim tekstom.~
Podebljavanje retka zaglavlja zapravo ga prikazuje u normalnom tekstu. Zadana CSS ima taj redak podebljan.

### Poravnanje teksta tablice

Koristite redak 2 za poravnanje sadržaja: `:--`, `:-:`, ili `--:`.
Ovo će utjecati na cijeli stupac.

#### Osnovni raspored tablica

| **Stupac 1** | **Stupac 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konvencije za poravnanje teksta

- Koristite centrirano poravnanje za brojeve ili slične liste vrijednosti.
- Koristite lijevo poravnanje za rečenice teksta.

#### Primjer tablice poravnanja

| **Broj** | **Opis** |
| :-: | :-- |
| 1 | Opisni tekst |
| 2 | Opisni tekst |
| 3 | Opisni tekst |

#### Primjer: Tablica intenziteta vatre

| **Intenzitet** | **Primjeri** | **Vrijeme paljenja** | **Šteta** |
| :-: | :-- | :-: | :-: |
| 1 | Svijeća | 1k4 | 1k2 |
| 2 | Baklja | 1k3 | 1k4 |
| 3 | Logorska vatra | 1k2 | 1k6 |
| 4 | Konflagracija koja ispunjava sobu | 1k2 | 2k6 |
| 5 | Vulkanska lava | Trenutno | 3k6 |

---
## Poveznice

Mnogo je upotreba poveznica u SRD-u, a ovdje je obuhvaćeno samo nekoliko glavnih slučajeva.

### Formatiranje poveznica

Formatiranje poveznice vrši se tekstom u zagradama. Koristite uglate zagrade za vidljivi tekst poveznice i zakrivljene zagrade za URL odredišta: `[Link Text](URL)`.

U ovim dokumentima najčešće korištena vanjska poveznica bit će [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Vanjske naspram unutarnjih poveznica

Vanjske poveznice vode na druge stranice putem interneta i trebat će im `http://example.com` URL, a prema zadanim postavkama, _uvijek_ će se otvoriti u novoj kartici preglednika.

Kako bi se izbjeglo zatrpavanje dokumenta koji se čita s više kartica, interne poveznice i oznake formiraju se relativnim URL-ovima koji se pozivaju na markdown datoteke vidljive u GitHub repozitoriju. Umjesto nove kartice, ove interne poveznice brzo će se pomaknuti do povezanog odjeljka.

#### Primjeri internih poveznica

- **Poveznice poglavlja:** Ove ukazuju na početak glavnog (h1) odjeljka. npr. poglavlje [Borba](0005_Combat.md).

  - Format poveznice: `[Combat](0005_Combat.md)`

- **Poveznice pododjeljaka:** Ove ukazuju na naslov unutar poglavlja, pozivajući se na dokument kao gore, ali dodajući `?id=` odmah nakon odredišnog naslova. npr. [Napad skokom](0005_Combat.md?id=leaping-attacks)

  - Format poveznice: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Vanjske poveznice na pododjeljke

Može se pojaviti potreba za referenciranjem poznatog odjeljka vanjskog dokumenta, na primjer, određene tablice u drugom SRD-u. Formatiranje je isto kao kod poveznica pododjeljaka, gore, samo se koristi vanjski HTTP URL.

Kao primjer, evo [tablice pretvorbi imperijalnih u metričke jedinice](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) iz [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Liste magije i moći

Započnite 'čisti' odjeljak s h2 naslovom za liste dostupnih čarolija, moći itd.; zatim h3 za svaku stavku liste.

Čarolije i moći obično su predstavljene u jedinstvenom ravnom popisu prema tipu magije (narodna magija, teizam, itd.), ali ako popis zahtijeva vlastite pododjeljke, poput školskih ili kultnih specijalizacija, povećajte razinu naslova prema potrebi. Na primjer, h2 za Teizam: Popis čuda, h3 za Kult: Mitra, i h4 za svako čudo Mitra kulta.

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

<summary>Primjer: formatirana lista čarolija (citirano u bloku) </summary>

---
> ## Opisi čarolija
>
> ### Odvratiti
> _Trenutno, Dometno_
>
> Odvratiti se koristi za otpuštanje druge čarolije unutar dometa. Odvratiti se može baciti reaktivno kako bi se neutralizirale ofenzivne čarolije, koristeći Reaktivnu akciju protumagije.

</details>

---
## Statistički blokovi vozila
Započnite 'čisti' odjeljak s h2 naslovom za popise, a zatim povećajte h-razinu kao i obično za kategorije i stavke popisa.

Svaki navedeni primjer ima statistike i opise predstavljene kao popis s točkama s podebljanim naslovima točaka.

### Formatiranje statističkog bloka vozila

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Primjer: formatirani statistički blok vozila (citirano u bloku) </summary>

---
> ## Primjeri vozila
>
> ### Kopnena vozila
>
> #### Interceptor
>
> - **Oklop:** 6 (Srednje vojno), 40 Struktura
>
> - **Brzina:** Brzo
>
> - **Sustavi:** 3
>
> - **Osobine:** Sjedalo za izbacivanje, Poboljšane performanse, Vrhunsko rukovanje, Sustav nadzora, Otporno, Naoružano
>
> - **Oružja:** Raspršivač ulja, raspršivač dima, dvostruko povezani srednji mitraljezi
>
> - **Opis:** Snažan luksuzni automobil, sportski automobil ili slično, ovaj automobil je napravljen da ide brzo i da se dobro nosi u bitci. Ovo je vrsta vozila o kojoj ljudi razmišljaju kada netko kaže "špijunski automobil".

</details>

---
## Statistički blokovi stvorenja
Započnite 'čisti' odjeljak s h2 naslovom za popise. Statistički blokovi stvorenja koriste tablice i složeniji su u smislu formatiranja i prostornih zahtjeva. Radi jasnoće, izbjegavajte pododjeljke i dodajte razdjelnike između stavki popisa.

Svaki navedeni primjer trebao bi imati sljedeće...

- **Naslov stvorenja:** Razdjelnik nakon kojeg slijedi h3 zaglavlje za ime stvorenja.

- **MEG unos:** Vanjska poveznica na navedeno stvorenje na [Mythras Encounter Generatoru](https://mythras.skoll.xyz/).

- **Osnovni detalji:** Ime/vrsta stvorenja, atributi, vještine i svi posebni opisi ili bilješke o karakteru prema potrebi.

- **Detalji oružja:** Skraćeni opisi sa stupcima za naziv oružja i sljedeće atribute: Veličina (uključujući Silu ovdje), Domet (uključujući Raspon ovdje), Štetu, AP/HP i sva posebna pravila.

- **Lokacije pogodaka i oklop:** Tablice lokacija razlikovat će se ovisno o različitoj anatomiji stvorenja, ali trebale bi biti uključene čak i za tradicionalne humanoide kao sredstvo za praćenje oklopa i štete.

### Formatiranje statističkog bloka stvorenja

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

<summary>Primjer: formatirane tablice statističkog bloka stvorenja (citirano u bloku) </summary>

> ---
> ### Goblin/Ork
> [MEG unos](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Naziv stvorenja | Goblin/Ork |
> | :-- | :-- |
> | Ključni atributi | SNAGA 11, KONDICIJA 14, VELIČINA 11, OKRETNOST 11, INTELIGENCIJA 11, MOĆ 11, KARIZMA 7 |
> | Akcijske točke | 2 |
> | Modifikator štete | - |
> | Inicijativa | +11 |
> | Kretanje | 6m |
> | Sposobnosti | Noćni vid |
> | Vještine | Atletika 52%, Snaga 42%, Prevara 57%, Izdržljivost 48%, Izbjegavanje 62%, Percepcija 61%, Nenaoružana borba 52%, Snaga volje 42% |
> | Borbeni stil | Ratnik (Kratki mač, Štit, Koplje, Praćka) 62% |
>
> #### Detalji oružja
>
> | Oružje | Veličina | Domet | Šteta | AP/HP | Posebno |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kratki mač | S | S | 1k6 | 6/8 | |
> | Koplje | S | D | 1k8+1 | 4/5 | |
> | Praćka | V | 10/150/300 | 1k8 | 1/2 | |
> | Štit | V | K | 1k4 | 4/9 | Štiti 3 lokacije za Pasivno blokiranje/odvraćanje |
>
> #### Lokacije pogodaka i oklop
>
> | **1k20** | **Lokacija** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Desna noga | 1/5 |
> | 4-6 | Lijeva noga | 1/5 |
> | 7-9 | Trbuh | 1/6 |
> | 10-12 | Prsa | 1/7 |
> | 13-15 | Desna ruka | 1/4 |
> | 16-18 | Lijeva ruka | 1/4 |
> | 19-20 | Glava | 1/5 |

</details>

---
## Greške zajednice

### Tipfelere i zbunjenost

Uređivanje teksta autora radi 'čišćenja' trebalo bi svesti na minimum, ali tipfelere i druge pogreške treba mijenjati direktno bez ikakvog označavanja.

### Info paneli grešaka

Gdje je neko pravilo previše dvosmisleno, nepotpuno ili jednostavno pogrešno, dodajte sklopivu bilješku o grešci zajednice.

Objasnite problem kurzivom koristeći samo podebljani kurziv za naslov problema - _bez h(x) zaglavlja!_ - kako ne biste stvarali zbunjujuće unose u bočnoj traci.

Ako se dodaje zamjenski tekst, stavite ga u dvostruke navodnike u podebljanom kurzivu, ispred kojeg stoji "_Greška zajednice:_" u normalnom kurzivu.

Dodatna pravila, ako su potrebna, trebaju biti predstavljena normalnim tekstom.

#### Predložak formatiranja grešaka

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Primjeri grešaka

<details>

<summary>* Greške zajednice</summary>

_**Penjanje**_

_Greška zajednice:_
_**"Nošeni oklop ometa penjače za iznos jednak prosjeku nošenih bodova oklopa. To se utvrđuje zbrajanjem bodova oklopa za svaku lokaciju i dijeljenjem tog broja s brojem lokacija."**_

_Pravilo kako je napisano brzo uzrokuje probleme. Nošenje jednog komada oklopa od 6AP smanjilo bi čovjeka na kretanje 0, što znači da bi čovjek koji nosi čeličnu kacigu i ništa drugo bio previše opterećen da bi se uopće penjao. To se čini nerazumno restriktivnim, stoga je predložena izmijenjena verzija. Ovo će biti ažurirano ako originalni autori revidiraju pravilo kako je napisano._

</details>

<details>

<summary>* Greške zajednice</summary>

_**Načini kretanja: Hod, Trk, Sprint**_

_Objavljena verzija _Mythras Imperative_ nema eksplicitna pravila za kretanje različitim načinima kretanja, iako su pokrivena u osnovnoj knjizi pravila Mythrasa. Množitelji načina kretanja gore su dodani kao dio Grešaka zajednice._

_Gdje je potrebno, trebalo bi biti dovoljno tretirati načine kretanja na sljedeći način:_

- _Načini kretanja brži od Hodanja primjenjuju množitelj na ocjenu kretanja: 3x za Trk, 5x za Sprint._

- _Dok su u načinu kretanja Trk ili Sprint, likovi ne mogu pokušati većinu proaktivnih akcija poput napada ili bacanja čarolija. Neki izuzeci uključuju..._
  - _Napadi kada se koriste pravila Juriša._
  - _Pucanje iz dalekometnog oružja s osobinom Skirmishing._
- _Kao opće pravilo, sve dopuštene akcije trebale bi se tretirati kao jedan stupanj teže za izvođenje u Trku, i dva stupnja teže u Sprintu._

</details>

---
## Razna upozorenja

### Prazni redovi / Prijelazi redaka

Ostavite prazan red između različitih vrsta unosa. Zaglavlja, razdjelnici, tablice itd. Oni neće biti vidljivi u prikazu za čitanje, ali njihova odsutnost može uzrokovati probleme s formatiranjem.

### Podebljani ili kurzivni višeparagrafski tekst

Svaki odlomak mora biti označen kao podebljani ili kurzivni tekst. Novi red između odlomaka prekinut će formatiranje, ostavljajući siročad oznake formatiranja.

### Međunarodni pravopis

Regresivne i žalosne sile smatrale su prikladnim ukloniti sve britanske pravopise u korist objektivno slabijih američkih verzija. Budite na oprezu zbog britanskih -OUR riječi: _armour_, _favour_, itd.
