# Stila rokasgrāmatas nosaukums (h1)

Izmantojiet h1 virsrakstus (`# Heading Title`) galvenajam nodaļas nosaukumam. Visi hx virsraksti sānu joslā tiks parādīti kā grāmatzīmes.

Ja nosaukums nav h1 virsraksts, sānu joslā parādīsies dublēšanās kļūda, parādot lapu un pēc tam h2 "virsrakstu".

---
## Sadaļu virsraksti (h2)

Izmantojiet h2 virsrakstus (`## Section Heading`), kuriem katrai jaunai galvenajai sadaļai priekšā ir dalītājs (`---`).

### Apakšsadaļu virsraksti, palielinot h-līmeni par 1

Izmantojiet h3 virsrakstus (`### Subsection Heading`) katrai jaunai apakšsadaļai un h4 virsrakstus (`#### Sub-Subsection Heading`) katrai jaunai apakš-apakšsadaļai. 


### Apakšsadaļu h-progresija: 2 > 3 > 4

Ja h-progresija netiek apstrādāta pareizi, apakšvirsraksti sānu joslā sajaucas.

Virsraksta marķierim jāpalielinās par vienu vai nepalielināties vispār. 

h2 sekojošs h2 vai h3 ir kārtībā. h3 sekojošs h3 vai h4 arī ir kārtībā. 

### Apakšsadaļu kļūdas
h2 sekojošs h4 rada problēmas. Sānu josla novieto apakšvirsrakstu kaut kur virs virsraksta satura rādītājā.

### h-līmeņu samazināšana

Šī šķiet nav problēma. piem. h4 uz h3 vai h2 ir kārtībā. 

---
## Formatēšanas konvencijas

Sekojošie stili ir norma šīm _Imperative_ SRD (sistēmas atsauces dokumentu) markdown formātā.

### Treknraksts, slīpraksts un dalītāji

- Izmantojiet dubultās zvaigznītes (`**Bold**`) **treknraksta** tekstam.
- Izmantojiet pasvītrojumus (`_Italic_`) _slīpraksta_ tekstam. 
   - _nb: Izvairieties no vienas zvaigznītes izmantošanas slīprakstam!_
- Izmantojiet atpakaļvērsto slīpsvītru (`\_`), lai "izbēgtu" no rakstzīmes: \_Nav slīpraksts\_.
- Izmantojiet leņķa pēdiņas (``` `code` ```), lai izveidotu `code blocks`.
- Izmantojiet trīs defises (`---`), lai ievietotu horizontālu dalījuma līniju.

### Konvencijas treknrakstam un slīprakstam

Centieties pieturēties pie sekojošiem modeļiem... 

#### Trekni virsraksti

Izmantojiet treknus virsrakstus, aprakstot burvestības, efektus utt.
- **Burvestības nosaukums:** Apraksts.

#### Slīpraksta virsraksti

Izmantojiet slīpraksta virsrakstus "apakšsarakstiem", kuros minēti burvestību varianti utt.
- **Burvestība:** Apraksts.
  - **_Burvestības variants-A:_** Apraksts.
  - **_Burvestības variants-B:_** Apraksts.

#### Slīpraksta virsrakstu atsauces

Izmantojiet slīpraksta virsrakstus, atsaucoties uz grāmatu, piemēram, _Mythras Imperative_ vai pamata _Mythras_ noteikumu kopumu.

---
## Sarakstu formatēšana

### Nenumurēti saraksti / Aizzīmju punkti

- Nenumurēti saraksti tiek veidoti ar defisēm.
- Nenumurēti saraksti tiek veidoti ar defisēm.
  - Palieliniet atkāpes līmeni ar 2 atstarpēm vai tabulāciju.

### Numurēti saraksti / Punktu saraksti

1. Numurēti saraksti tiek veidoti ar ciparu un pilnu punktu.
2. Numurēti saraksti tiek veidoti ar ciparu un pilnu punktu.
- Sajauciet ar aizzīmju punktiem
	- Un atkāpi
3. Ievietojiet atpakaļ skaitļus
   - Un aizzīmes

### Virsrakstu saraksti

Saistīto apakšvirsrakstu sarakstiem padariet virsrakstu un kolu treknu.
- **Piemērs 1:** Bla, bla, bla...
- **Piemērs 2:** Bla, bla, bla...

### Slīpraksta virsrakstu saraksti

Saistīto apakšvirsrakstu sarakstiem padariet virsrakstu un kolu treknu un slīprakstā.
- **_Piemērs 1:_** Bla, bla, bla...
- **_Piemērs 2:_** Bla, bla, bla...

---
## Tabulas

Piešķiriet tabulām apakšvirsrakstu, lai tās parādītos kā grāmatzīmes sānu joslā, ar vienu atkāpi no to vecāksadaļas. 

~Padariet virsrakstu rindu treknu.~ 
Virsraksta rindas padarīšana par treknu faktiski to attēlo normālā tekstā. Noklusējuma CSS šī rinda ir padarīta trekna.

### Tabulas teksta līdzināšana

Izmantojiet 2. rindu satura līdzināšanai: `:--`, `:-:` vai `--:`.
Tas ietekmēs visu kolonnu.

#### Tabulu pamata izkārtojums

| **1. kolonna** | **2. kolonna** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Teksta līdzināšanas konvencijas

- Izmantojiet centrētu līdzināšanu skaitļiem vai līdzīgiem vērtību sarakstiem.
- Izmantojiet kreisās puses līdzināšanu teikumiem.

#### Līdzināšanas piemēra tabula

| **Skaitlis** | **Apraksts** |
| :-: | :-- |
| 1 | Aprakstošs teksts |
| 2 | Aprakstošs teksts |
| 3 | Aprakstošs teksts |

#### Piemērs: Uguns intensitātes tabula

| **Intensitāte** | **Piemēri** | **Laiks līdz aizdegšanās brīdim** | **Bojājums** |
| :-: | :-- | :-: | :-: |
| 1 | Svece | 1d4 | 1d2 |
| 2 | Lāpa | 1d3 | 1d4 |
| 3 | Ugunskurs | 1d2 | 1d6 |
| 4 | Telpu aizpildošs ugunsgrēks | 1d2 | 2d6 |
| 5 | Vulkāniska lava | Uzreiz | 3d6 |

---
## Saites

SRD ir daudz saišu izmantošanas veidu, un šeit ir apskatīti tikai daži galvenie gadījumi.

### Saišu formatēšana

Saites formatēšana tiek veikta ar iekavētā teksta palīdzību. Izmantojiet kvadrātiekavas redzamajam saites tekstam un apaļās iekavas galamērķa URL: `[Link Text](URL)`.

Šajos dokumentos visbiežāk izmantotā ārējā saite būs [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Ārējās vs Iekšējās saites

Ārējās saites ved uz citām lapām internetā, un tām būs nepieciešams `http://example.com` URL, un pēc noklusējuma tās _vienmēr_ tiks atvērtas jaunā pārlūkprogrammas cilnē. 

Lai izvairītos no vairākām cilnēm, kas aizsprosto lasāmo dokumentu, iekšējās saites un grāmatzīmes tiek veidotas ar relatīvajiem URL, kas atsaucas uz markdown failiem, kuri ir redzami GitHub repozitorijā. Tā vietā, lai atvērtu jaunu cilni, šīs iekšējās saites strauji ritinās uz piesaistīto sadaļu.

#### Iekšējo saišu piemēri

- **Nodaļu saites:** Tās norāda uz galvenās (h1) sadaļas sākumu. piem. [Kaujas](0005_Combat.md) nodaļa.

  - Saites formāts: `[Combat](0005_Combat.md)`

- **Apakšsadaļu saites:** Tās norāda uz virsrakstu nodaļā, atsaucoties uz dokumentu kā iepriekš, bet pievienojot `?id=`, kam uzreiz seko mērķa virsraksts. piem. [Lēciena uzbrukumi](0005_Combat.md?id=leaping-attacks) 

  - Saites formāts: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Ārējās saites uz apakšsadaļām

Var rasties gadījumi, kad jāatsaucas uz zināmu ārējā dokumenta sadaļu, piemēram, uz konkrētu tabulu citā SRD. Formatējums ir tāds pats kā apakšsadaļu saitēm, tikai izmantojot ārējo HTTP URL.

Kā piemēru skatiet [Imperatora uz metrisko mērvienību konvertēšanas tabulu](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) no [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Burvestību un spēju saraksti

Sāciet "tīru" sadaļu ar h2 virsrakstu pieejamo burvestību, spēju utt. sarakstiem; tad h3 katram saraksta vienumam. 

Burvestības un spējas parasti tiek uzrādītas vienā, līdzenā sarakstā pēc maģijas veida (Folk Magic, Theism utt.), bet, ja sarakstam ir nepieciešamas savas apakšsadaļas, piemēram, skolas vai kultu specializācijas, palieliniet virsraksta līmeni atbilstoši. Piemēram, h2 Theism brīnumu sarakstam, h3 kultam: Mithras, un h4 katram Mithras kulta brīnumam. 
 
Īpaši burvestību gadījumā, bet jebkurā aprakstā, kas izmanto atslēgvārdu atribūtus, uzskaitiet tos slīprakstā.

Aprakstošais teksts un īpašie noteikumi izmanto normālu tekstu.

### Burvestību saraksta formatēšana

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Piemērs: formatēts burvestību saraksts (bloka citāts) </summary>

---
> ## Burvestību apraksti
>
> ### Avert
> _Instant, Ranged_
>
> Avert tiek izmantots, lai noraidītu citu burvestību diapazona ietvaros. Avert var tikt uzburts reaktīvi, lai neitralizētu uzbrūkošas burvestības, izmantojot Counter Magic Reactive Action.

</details>

---
## Transportlīdzekļu statistikas bloki
Sāciet "tīru" sadaļu ar h2 virsrakstu sarakstiem, tad palieliniet h-līmeni kā parasti kategorijām un saraksta vienumiem. 

Katram uzskaitītajam piemēram statistika un apraksti ir uzrādīti kā aizzīmju saraksts ar trekniem punktu nosaukumiem.

### Transportlīdzekļu statistikas bloka formatēšana

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Piemērs: formatēts transportlīdzekļa statistikas bloks (bloka citāts) </summary>

---
> ## Transportlīdzekļu paraugi
> 
> ### Sauszemes transportlīdzekļi
> 
> #### Interceptor
> 
> - **Korpuss:** 6 (Medium Military), 40 Struktūra
> 
> - **Ātrums:** Ātrs
> 
> - **Sistēmas:** 3
> 
> - **Īpašības:** Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Tough, Weaponized
> 
> - **Ieroči:** Oil slick dispenser, smoke dispenser, twin linked medium machine guns
> 
> - **Apraksts:** Uzlabots luksusa auto, sporta auto vai līdzīgs, šis auto ir būvēts, lai brauktu ātri un cīņā atdotu tikpat daudz, cik saņem. Šis ir transportlīdzeklis, par kuru cilvēki domā, kad kāds saka "spiegu auto."

</details>

---
## Radību statistikas bloki
Sāciet "tīru" sadaļu ar h2 virsrakstu sarakstiem. Radību statistikas bloki izmanto tabulas un ir sarežģītāki formatēšanas un vietas prasību ziņā. Skaidrības labad izvairieties no apakšsadaļām un pievienojiet dalītājus starp saraksta vienumiem.


Katram uzskaitītajam piemēram jābūt sekojošam...

- **Radības nosaukums:** Dalītājs, kam seko h3 virsraksts radības nosaukumam.

- **MEG ieraksts:** Ārējā saite uz norādīto radību [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Galvenā informācija:** Radības nosaukums/veids, atribūti, prasmes un jebkādi īpaši apraksti vai piezīmes par tēlu, kā nepieciešams.

- **Ieroču informācija:** Saīsināti apraksti ar kolonnām ieroča nosaukumam un sekojošiem atribūtiem: Izmērs (iekļaujiet šeit Force), Sasniedzamība (iekļaujiet šeit Range), Bojājums, AP/HP un jebkādi īpašie noteikumi.

- **Trāpījumu vietas un bruņas:** Atrašanās vietu tabulas mainīsies atkarībā no atšķirīgas radību anatomijas, taču tās jāiekļauj pat tradicionālajiem humanoīdiem kā līdzeklis bruņu un bojājumu izsekošanai. 

### Radību statistikas bloka formatēšana

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

<summary>Piemērs: formatētas radību statistikas bloka tabulas (bloka citāts) </summary>

> ---
> ### Goblins/Orks
> [MEG ieraksts](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Radības nosaukums | Goblins/Orks |
> | :-- | :-- |
> | Galvenie atribūti | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Rīcības punkti | 2 | 
> | Bojājuma modifikators | - |
> | Iniciatīva | +11 |
> | Kustība | 6m |
> | Spējas | Night Sight |
> | Prasmes | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Cīņas stils | Warrior (Shortsword, Shield, Spear, Sling) 62% |
> 
> #### Ieroču informācija
> 
> | Ierocis | Izmērs | Sasniedzamība | Bojājums | AP/HP | Īpašais |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Īss zobens | M | M | 1d6 | 6/8 | |
> | Šķēps | M | L | 1d8+1 | 4/5 | |
> | Linga | L | 10/150/300 | 1d8 | 1/2 | |
> | Vairogs | L | S | 1d4 | 4/9 | Protects 3 locations for Passive Blocking/Warding |
> 
> #### Trāpījumu vietas un bruņas
> 
> | **1d20** | **Vieta** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Labā kāja | 1/5 |
> | 4-6 | Kreisā kāja | 1/5 |
> | 7-9 | Vēders | 1/6 |
> | 10-12 | Krūtis | 1/7 |
> | 13-15 | Labā roka | 1/4 |
> | 16-18 | Kreisā roka | 1/4 |
> | 19-20 | Galva | 1/5 |


</details>


---
## Kopienas labojumi (Errata)

### Drukas kļūdas un neskaidrības

Autoru teksta "sakopošanas" labojumiem jābūt minimāliem, bet drukas kļūdas un citas kļūdas vienkārši jāmaina iekšēji bez jebkādas norādes.


### Labojumu informācijas paneļi

Ja kāds noteikums ir pārāk neskaidrs, nepilnīgs vai vienkārši nepareizs, pievienojiet nolaižamu Kopienas labojuma piezīmi.

Izskaidrojiet problēmu slīprakstā, izmantojot tikai treknu slīprakstu problēmas nosaukumam - _nav h(x) virsrakstu!_ - lai neradītu mulsinošus sānu joslas ierakstus.

Ja tiek pievienots aizstājējs teksts, ievietojiet to pēdiņās treknrakstā un slīprakstā, kuram priekšā ir "_Community Errata:_" parastā slīprakstā.

Papildu noteikumi, ja nepieciešams, jāuzrāda parastā tekstā.

#### Labojumu formatēšanas veidne

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Labojumu piemēri

<details>

<summary>* Kopienas labojums</summary>

_**Kāpšana (Climb)**_

_Community Errata:_
_**"Nēsātās bruņas traucē kāpējiem par summu, kas vienāda ar nēsāto Bruņu punktu vidējo vērtību. To iegūst, saskaitot visu atrašanās vietu bruņu punktus un dalot šo skaitli ar atrašanās vietu skaitu."**_

_Noteikums, kā rakstīts, ātri rada problēmas. Vienas 6AP bruņas samazinātu cilvēku līdz kustībai 0, kas nozīmē, ka cilvēks, kurš valkā tērauda ķiveri un neko citu, būtu pārāk pārslogots, lai vispār kāptu. Tas šķiet nepamatoti ierobežojoši, tāpēc augstāk ierosināta rediģētā versija. Tas tiks atjaunināts, ja sākotnējie autori pārskatīs rakstīto noteikumu._

</details>

<details>

<summary>* Kopienas labojums</summary>

_**Gaitas: Soļošana, Skriešana, Sprintošana**_

_Publicētajā _Mythras Imperative_ versijā nav skaidru noteikumu par kustību dažādās gaitās, lai gan tie ir iekļauti Mythras pamata rokasgrāmatā. Augstāk minētie gaitu reizinātāji ir pievienoti kā daļa no Kopienas labojumiem._ 

_Ja nepieciešams, vajadzētu pietikt ar sekojošu gaitu traktējumu:_

- _Gaitas, kas ātrākas par Soļošanu, piemēro reizinātāju Kustības reitingam: 3x Skriešanai, 5x Sprintam._

- _Skriešanas vai Sprinta gaitā varoņi nevar mēģināt lielāko daļu proaktīvo darbību, piemēram, uzbrukšanu vai burvestību buršanu. Daži izņēmumi ietver..._
  - _Uzbrukumi, izmantojot Charging noteikumus._
  - _Šaušana ar tālšaušanas ieročiem ar Skirmishing īpašību._ 
- _Kā vispārējs noteikums, jebkuras atļautās darbības jāuzskata par vienu pakāpi grūtāk veicamām Skriešanā un divas pakāpes grūtāk Sprintā._


</details>

---
## Dažādi brīdinājumi

### Tukšas rindas / Rindu pārnesumi

Atstājiet tukšu rindu starp dažāda veida ierakstiem. Virsraksti, dalītāji, tabulas utt. Lasīšanas skatā tie nebūs redzami, taču to trūkums var radīt formatēšanas problēmas.

### Trekns vai slīprakstā rakstīts vairāku rindkopu teksts

Katra rindkopa ir jāatzīmē kā trekns vai slīpraksta teksts. Jauna rinda starp rindkopām pārtrauks formatējumu, atstājot "bāreņu" formatējuma zīmes.

### Starptautiskā pareizrakstība

Regresīvās un nožēlojamās varas ir nolēmušas noņemt visu britu pareizrakstību par labu objektīvi vājākajām ASV versijām. Uzmanieties no britu -OUR vārdiem: _armour_, _favour_ utt. 