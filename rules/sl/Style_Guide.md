# Naslov slogovnega priročnika (h1)

Uporabite naslove h1 (`# Heading Title`) za glavni naslov poglavja. Vsi naslovi hx se bodo prikazali v stranski vrstici kot zaznamki.

Če naslov ni naslov h1, bo stranska vrstica imela napako podvajanja, ki prikazuje stran in nato naslov h2 'naslov'.

---
## Naslovi razdelkov (h2)

Za vsak nov glavni razdelek uporabite naslove h2 (`## Section Heading`), pred katerimi je ločilo (`---`).

### Naslovi podrazdelkov z višjo h-ravenjo za 1

Uporabite naslove h3 (`### Subsection Heading`) za vsak nov podrazdelek in naslove h4 (`#### Sub-Subsection Heading`) za vsak nov pod-podrazdelek.

### Napredovanje h-ravni podrazdelkov: 2 > 3 > 4

Podnaslovi se v stranski vrstici pomešajo, če napredovanje h-ravni ni pravilno obravnavano.

Oznaka naslova se mora povečati za ena ali nič.

h2, ki mu sledi h2 ali h3, je v redu. h3, ki mu sledi h3 ali h4, je prav tako v redu.

### Napake v podrazdelkih
h2, ki mu sledi h4, povzroča težave. Stranska vrstica umesti podnaslov nekje nad naslovom v kazalu.

### Zmanjšanje h-ravni

To se ne zdi problem. Npr. h4 na h3 ali h2 je v redu.

---
## Konvencije oblikovanja

Naslednji slogi so norma za te SRD-je _Imperative_ v formatu Markdown.

### Krepko, ležeče in ločila

- Za **krepko** besedilo uporabite dvojne zvezdice (`**Bold**`).
- Za _ležeče_ besedilo uporabite podčrtaje (`_Italic_`).
   - _opomba: Izogibajte se uporabi posameznih zvezdic za ležeče besedilo!_
- Za 'pobeg' znaka uporabite poševnice nazaj (`\_`): \_Ni ležeče\_.
- Uporabite oglate narekovaje (``` `code` ```) za izdelavo `code blocks`.
- Za vstavitev vodoravne delilne črte uporabite tri vezaje (`---`).

### Konvencije za krepko in ležeče besedilo

Poskusite se držati naslednjih vzorcev...

#### Krepki naslovi

Uporabite krepke naslove pri opisovanju urokov, učinkov itd.
- **Naslov magije:** Opis.

#### Ležeči naslovi

Uporabite ležeče naslove za 'pod-sezname' variant urokov itd.
- **Magija:** Opis.
  - **_Varianta magije-A:_** Opis.
  - **_Varianta magije-B:_** Opis.

#### Ležeče reference naslovov

Uporabite ležeče naslove pri sklicevanju na knjigo, kot je _Mythras Imperative_ ali osnovna pravila _Mythras_.

---
## Oblikovanje seznamov

### Neurejeni seznami / Označevalne pike

- Neurejeni seznami so narejeni z vezaji.
- Neurejeni seznami so narejeni z vezaji.
  - Povečajte raven zamika z 2 presledkoma ali tabulatorjem.

### Urejeni seznami / Oštevilčene točke

1. Oštevilčeni seznami so narejeni s številko in piko.
2. Oštevilčeni seznami so narejeni s številko in piko.
- Pomešano z označevalnimi pikami
	- In zamikom
3. Ponovno vmešajte številke
   - In pike

### Seznami z naslovi

Za sezname povezanih podnaslovov poudarite naslov in dvopičje.
- **Primer 1:** Bla, bla, bla...
- **Primer 2:** Bla, bla, bla...

### Seznami z ležečimi naslovi

Za sezname povezanih podnaslovov poudarite in nagnite naslov in dvopičje.
- **_Primer 1:_** Bla, bla, bla...
- **_Primer 2:_** Bla, bla, bla...

---
## Tabele

Tabelam dajte podnaslov, da se prikažejo zaznamovane v stranski vrstici, z eno stopnjo zamika od nadrejenega razdelka.

~Naj bo naslovna vrstica krepko besedilo.~
Če je naslovna vrstica krepka, se dejansko prikaže v običajnem besedilu. Privzeti CSS ima to vrstico krepko.

### Poravnava besedila v tabeli

Uporabite vrstico 2 za poravnavo vsebine: `:--`, `:-:` ali `--:`.
To bo vplivalo na celoten stolpec.

#### Osnovna postavitev tabel

| **Stolpec 1** | **Stolpec 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konvencije za poravnavo besedila

- Za številke ali podobne sezname vrednosti uporabite sredinsko poravnavo.
- Za stavke besedila uporabite levo poravnavo.

#### Primer tabele za poravnavo

| **Številka** | **Opis** |
| :-: | :-- |
| 1 | Opisno besedilo |
| 2 | Opisno besedilo |
| 3 | Opisno besedilo |

#### Primer: Tabela intenzivnosti ognja

| **Intenzivnost** | **Primeri** | **Čas do vžiga** | **Škoda** |
| :-: | :-- | :-: | :-: |
| 1 | Sveča | 1d4 | 1d2 |
| 2 | Bakla | 1d3 | 1d4 |
| 3 | Kres | 1d2 | 1d6 |
| 4 | Požar, ki zajame sobo | 1d2 | 2d6 |
| 5 | Vulkanska lava | Takoj | 3d6 |

---
## Povezave

V SRD-ju je veliko uporab za povezave, tukaj je zajetih le nekaj glavnih primerov.

### Oblikovanje povezav

Povezava se oblikuje z besedilom v oklepaju. Za vidno besedilo povezave uporabite oglate oklepaje, za ciljni URL pa ukrivljene oklepaje: `[Link Text](URL)`.

V teh dokumentih bo najpogosteje uporabljena zunanja povezava [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Zunanje vs. notranje povezave

Zunanje povezave vodijo na druge strani prek interneta in bodo potrebovale URL `http://example.com` ter se bodo privzeto _vedno_ odprle v novem zavihku brskalnika.

Da bi se izognili številnim zavihkom, ki zapirajo dokument med branjem, so notranje povezave in zaznamki oblikovani z relativnimi URL-ji, ki se sklicujejo na datoteke markdown, vidne v repozitoriju GitHub. Namesto novega zavihka se bodo te notranje povezave hitro pomaknile na povezani razdelek.

#### Primeri notranjih povezav

- **Povezave poglavij:** Te kažejo na začetek glavnega (h1) razdelka. Npr. poglavje [Boj](0005_Combat.md).

  - Oblika povezave: `[Combat](0005_Combat.md)`

- **Povezave podrazdelkov:** Te kažejo na naslov znotraj poglavja, ki se sklicuje na dokument, kot zgoraj, vendar dodaja `?id=`, čemur takoj sledi ciljni naslov. Npr. [Napadi s skokom](0005_Combat.md?id=leaping-attacks)

  - Oblika povezave: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Zunanje povezave do podrazdelkov

Lahko se zgodi, da je treba sklicevati na znani razdelek zunanjega dokumenta, na primer specifično tabelo v drugem SRD-ju. Oblikovanje je enako kot pri povezavah podrazdelkov zgoraj, le da se uporablja zunanji HTTP URL.

Kot primer, tukaj je [tabela pretvorb imperialnih v metrične mere](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) iz [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Seznami magije in moči

Za sezname razpoložljivih urokov, moči itd. začnite 'čist' razdelek z naslovom h2; nato h3 za vsak element seznama.

Uroki in moči so običajno predstavljeni v enem ravnem seznamu po vrsti magije (Ljudska magija, Teizem itd.), če pa seznam zahteva lastne podrazdelke, kot so šolske ali kultne specializacije, ustrezno povečajte raven naslova. Na primer, h2 za seznam teističnih čudežev, h3 za kult: Mithras in h4 za vsak čudež Mithrasovega kulta.

Predvsem pri urokih, pa tudi pri vsakem opisu, ki uporablja atribute ključnih besed, jih navedite v ležečem besedilu.

Opisno besedilo in posebna pravila uporabljajo običajno besedilo.

### Oblikovanje seznama urokov

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Primer: oblikovan seznam urokov (blokovno citiran) </summary>

---
> ## Opisi urokov
>
> ### Odvrni
> _Trenutno, Dometa_
>
> Odvrni se uporablja za razveljavitev drugega uroka v dometu. Odvrni je mogoče izreči reaktivno za nevtralizacijo ofenzivnih urokov z uporabo Reaktivne akcije Proti magiji.

</details>

---
## Statistični bloki vozil
Za sezname začnite 'čist' razdelek z naslovom h2, nato pa h-raven povečajte kot običajno za kategorije in elemente seznama.

Vsak naveden primer ima statistiko in opise predstavljene kot seznam označevalnih pik z **odebeljenimi naslovi** točk.

### Oblikovanje statističnega bloka vozila

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Primer: oblikovan statistični blok vozila (blokovno citiran) </summary>

---
> ## Primeri vozil
>
> ### Kopenska vozila
>
> #### Prestreznik
>
> - **Okrov:** 6 (srednje vojaški), 40 strukture
>
> - **Hitrost:** Hitra
>
> - **Sistemi:** 3
>
> - **Lastnosti:** Izmetni sedež, izboljšana zmogljivost, vrhunska vodljivost, nadzorni sistem, robusten, oborožen
>
> - **Orožja:** Razpršilec oljne brozge, razpršilec dima, dvojna strojnica
>
> - **Opis:** Prestižen avto, športni avto ali podobno, ta avto je zgrajen za hitrost in je enako dober v boju. To je vrsta vozila, na katero ljudje pomislijo, ko nekdo reče "vohunsko vozilo".

</details>

---
## Statistični bloki bitij
Za sezname začnite 'čist' razdelek z naslovom h2. Statistični bloki bitij uporabljajo tabele in so bolj kompleksni glede oblikovanja in zahtev po prostoru. Zaradi jasnosti se izogibajte podrazdelkom in med elementi seznama dodajte ločila.

Vsak naveden primer mora vsebovati naslednje...

- **Naslov bitja:** Ločilo, ki mu sledi naslov h3 za ime bitja.

- **MEG vnos:** Zunanja povezava do določenega bitja na [Mythras Encounter Generatorju](https://mythras.skoll.xyz/).

- **Osnovne podrobnosti:** Ime/vrsta bitja, atributi, veščine in morebitni posebni opisi ali opombe o značaju, kot je potrebno.

- **Podrobnosti o orožju:** Skrajšani opisi s stolpci za ime orožja in naslednje atribute: Velikost (tukaj vključite Sila), Doseg (tukaj vključite Razpon), Škoda, AP/HP in morebitna posebna pravila.

- **Lokacije zadetkov in oklep:** Tabele lokacij se bodo razlikovale glede na različno anatomijo bitij, vendar jih je treba vključiti tudi za tradicionalne humanoidne bitja kot sredstvo za sledenje oklepu in škodi.

### Oblikovanje statističnega bloka bitja

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

<summary>Primer: oblikovane tabele statističnega bloka bitja (blokovno citirano) </summary>

> ---
> ### Goblin/Ork
> [MEG vnos](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Ime bitja | Goblin/Ork |
> | :-- | :-- |
> | Ključni atributi | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Akcijske točke | 2 |
> | Spremenljive škode | - |
> | Iniciativa | +11 |
> | Premik | 6m |
> | Sposobnosti | Nočni vid |
> | Veščine | Atletika 52%, Moč 42%, Prevara 57%, Vzdržljivost 48%, Izmikanje 62%, Zaznavanje 61%, Neoborožen boj 52%, Moč volje 42% |
> | Bojni slog | Bojevnik (kratek meč, ščit, sulica, prača) 62% |
>
> #### Podrobnosti o orožju
>
> | Orožje | Velikost | Doseg | Škoda | AP/HP | Posebno |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kratek meč | S | S | 1d6 | 6/8 | |
> | Sulica | S | D | 1d8+1 | 4/5 | |
> | Prača | V | 10/150/300 | 1d8 | 1/2 | |
> | Ščit | V | K | 1d4 | 4/9 | Ščiti 3 lokacije za pasivno blokiranje/odvrnitev |
>
> #### Lokacije zadetkov in oklep
>
> | **1d20** | **Lokacija** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Desna noga | 1/5 |
> | 4-6 | Leva noga | 1/5 |
> | 7-9 | Trebuh | 1/6 |
> | 10-12 | Prsni koš | 1/7 |
> | 13-15 | Desna roka | 1/4 |
> | 16-18 | Leva roka | 1/4 |
> | 19-20 | Glava | 1/5 |

</details>

---
## Errata skupnosti

### Tipkarske napake in zmeda

Popravki, ki "počistijo" avtorjevo besedilo, naj bodo minimalni, vendar je treba tipkarske in druge napake preprosto spremeniti v vrstici brez kakršnega koli označevanja.

### Informacijske plošče Errate

Kjer je določeno pravilo preveč dvoumno, nepopolno ali preprosto napačno, dodajte zložljiv opombo Errata skupnosti.

Razložite težavo v ležečem besedilu, pri čemer uporabite samo **krepko ležečo** pisavo za naslov težave - _brez h(x) naslovov!_ - da ne bi ustvarili zmedenih vnosov v stranski vrstici.

Če je dodano nadomestno besedilo, ga postavite v dvojne narekovaje v **krepki ležeči** pisavi, pred katerim je "_Errata skupnosti:_" v običajni ležeči pisavi.

Dodatna pravila, če so potrebna, naj bodo predstavljena v običajni pisavi.

#### Predloga za oblikovanje errate

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Primeri errate

<details>

<summary>* Errata skupnosti</summary>

_**Plezanje**_

_Errata skupnosti:_
_**"Nošeni oklep ovira plezalce za znesek, ki je enak povprečju nošenih točk oklepa. To ugotovite tako, da seštejete točke oklepa, nošene na vsaki lokaciji, in to številko delite s številom lokacij."**_

_Pravilo, kot je zapisano, hitro povzroči težave. Nošenje enega kosa 6 AP oklepa bi zmanjšalo gibanje človeka na 0, kar pomeni, da bi bil človek, ki nosi jekleno čelado in nič drugega, preveč obremenjen, da bi sploh plezal. To se zdi nerazumno omejujoče, zato je predlagana zgoraj navedena spremenjena različica. To bo posodobljeno, če bodo prvotni avtorji popravili pravilo, kot je zapisano._

</details>

<details>

<summary>* Errata skupnosti</summary>

_**Hodi: Hoja, Tek, Sprint**_

_Objavljena različica _Mythras Imperative_ nima eksplicitnih pravil za gibanje z različnimi hodi, čeprav so zajeti v osnovni knjigi pravil Mythras. Zgoraj navedeni množitelji hodov so bili dodani kot del Errate skupnosti._

_Kjer je potrebno, bi moralo zadostovati, da se hodi obravnavajo na naslednji način:_

- _Hodi, hitrejši od hoje, uporabijo množitelj na oceno gibanja: 3x za tek, 5x za sprint._

- _Med tekom ali sprintom se liki ne morejo poskušati večine proaktivnih dejanj, kot so napadanje ali izrekanje urokov. Nekatere izjeme vključujejo..._
  - _Napade pri uporabi pravil za juriš._
  - _Streli z orožjem na daljavo z lastnostjo Skirmishing._
- _Na splošno velja, da je treba vsa dovoljena dejanja obravnavati kot eno stopnjo težja za izvedbo pri teku in dve stopnji težja pri sprintu._

</details>

---
## Različna opozorila

### Prazne vrstice / Prelomi vrstic

Pustite prazno vrstico med različnimi vrstami vnosov. Glave, ločila, tabele itd. Te ne bodo vidne v načinu branja, vendar lahko njihova odsotnost povzroči težave pri oblikovanju.

### Krepko ali ležeče večparagrafno besedilo

Vsak odstavek mora biti označen kot krepko ali ležeče besedilo. Nova vrstica med odstavki bo prekinila oblikovanje in pustila osirotele oznake oblikovanja.

### Mednarodno črkovanje

Regresivne in obžalovanja vredne sile so se odločile odstraniti vsa britanska črkovanja v korist objektivno šibkejših ameriških različic. Bodite pozorni na britanske besede na -OUR: _armour_, _favour_ itd.