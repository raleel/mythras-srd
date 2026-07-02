# Titulli i Udhëzuesit të Stilit (h1)

Përdorni tituj h1 (`#`) për titullin kryesor të kapitullit. Të gjithë titujt hx do të shfaqen në shiritin anësor si faqeshënues.

Nëse titulli nuk është një titull h1, shiriti anësor do të ketë një gabim duplikimi që tregon faqen dhe më pas titullin h2 "titull".

---
## Titujt e seksioneve (h2)

Përdorni tituj h2 (`##`) të paraprirë nga një ndarës (`---`) për çdo seksion të ri kryesor.

### Titujt e nënseksioneve duke rritur nivelin h-me 1

Përdorni tituj h3 (`###`) për çdo nënseksion të ri, dhe tituj h4 (`####`) për çdo nën-nënseksion të ri.

### Progresioni h-i nënseksionit: 2 > 3 > 4

Nëntitujt ngatërrohen në shiritin anësor nëse progredimi h-nuk trajtohet saktë.

Shënuesi i titullit duhet të rritet me një ose asgjë.

h2 e ndjekur nga h2 ose h3 është në rregull. h3 e ndjekur nga h3 ose h4 është gjithashtu në rregull.

### Gabimet e Nënseksioneve
h2 e ndjekur nga h4 shkakton probleme. Shiriti anësor e vendos nëntitullin diku sipër titullit në tabelën e përmbajtjes.

### Reduktimi i niveleve h-

Kjo nuk duket të jetë një problem. p.sh. h4 në h3 ose h2 është në rregull.

---
## Konventat e formatimit

Stilet e mëposhtme janë norma për këto SRD _Imperative_ në format Markdown.

### Të theksuara, të pjerrëta dhe ndarës

- Përdorni dy yje (`**`) për tekstin **të theksuar**.
- Përdorni viza poshtë (`_`) për tekstin _të pjerrët_.
  - _nb: Shmangni përdorimin e një ylli të vetëm për tekstin e pjerrët!_
- Përdorni shkronja të kthyer prapa (`\`) për të "shpëtuar" një karakter: \_Jo i Pjerrët\_.
- Përdorni thonjëza këndore (`<q>`) për të bërë `<q>`.
- Përdorni tre viza (`---`) për të futur një vijë ndarëse horizontale.

### Konventat për të theksuar dhe të pjerrët

Synoni t'u përmbaheni modeleve të mëposhtme...

#### Titujt e theksuar

Përdorni tituj të theksuar kur përshkruani magji, efekte etj.
- **Titulli i Magjisë:** Përshkrim.

#### Titujt e pjerrët

Përdorni tituj të pjerrët për 'nën-lista' të magjive variante etj.
- **Magjia:** Përshkrim.
  - **_Varianti i Magjisë-A:_** Përshkrim.
  - **_Varianti i Magjisë-B:_** Përshkrim.

#### Referencat e Titujve të Pjerrët

Përdorni tituj të pjerrët kur referoni një libër si _Mythras Imperative_ ose rregulloren themelore _Mythras_.

---
## Formatimi i listave

### Lista të pa renditura / Pikë-pelë

- Listat e pa renditura bëhen me viza.
- Listat e pa renditura bëhen me viza.
  - Rrisni nivelin e indentimit me 2 hapësira ose një tab.

### Lista të renditura / Pikë-numra

1. Listat e numëruara bëhen me shifër dhe pikë.
2. Listat e numëruara bëhen me shifër dhe pikë.
- Përzieni me pikë-pelë
	- Dhe indentim
3. Kthehuni tek numrat
   - Dhe pikë-pelë

### Lista me tituj

Për listat e nëntitujve të lidhur, theksoni titullin dhe dy pikat.
- **Shembull 1:** Bla, bla, bla...
- **Shembull 2:** Bla, bla, bla...

### Lista me tituj të pjerrët

Për listat e nëntitujve të lidhur, theksoni & pjerrësoni titullin dhe dy pikat.
- **_Shembull 1:_** Bla, bla, bla...
- **_Shembull 2:_** Bla, bla, bla...

---
## Tabelat

Jepuni tabelave një nëntitull në mënyrë që të shfaqen të shënuara në shiritin anësor, të indentuara një nivel nga seksioni prind.

~Bëjeni rreshtin e titullit tekst të theksuar.~
Në fakt, bërja e rreshtit të kokës të theksuar e shfaq atë në tekst normal. CSS i parazgjedhur e ka atë rresht të theksuar.

### Rreshtimi i tekstit të tabelës

Përdorni rreshtin 2 për rreshtimin e përmbajtjes: `:-:`, `:--`, ose `--:`. Kjo do të ndikojë në të gjithë kolonën.

#### Paraqitja Bazë e Tabelave

| **Kolona 1** | **Kolona 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konventat e rreshtimit të tekstit

- Përdorni rreshtim në qendër për numra ose lista vlerash të ngjashme.
- Përdorni rreshtim majtas për fjali me tekst.

#### Shembull i Tabelës së Rreshtimit

| **Numri** | **Përshkrim** |
| :-: | :-- |
| 1 | Tekst përshkrues |
| 2 | Tekst përshkrues |
| 3 | Tekst përshkrues |

#### Shembull: Tabela e Intensitetit të Zjarrit

| **Intensiteti** | **Shembuj** | **Koha për t'u Ndizur** | **Dëmtimi** |
| :-: | :-- | :-: | :-: |
| 1 | Qiri | 1d4 | 1d2 |
| 2 | Pishtar | 1d3 | 1d4 |
| 3 | Zjarr kampi | 1d2 | 1d6 |
| 4 | Zjarri që mbush dhomën | 1d2 | 2d6 |
| 5 | Lava vullkanike | I menjëhershëm | 3d6 |

---
## Lidhjet

Ka shumë përdorime për lidhjet në SRD dhe vetëm disa raste kryesore trajtohen këtu.

### Formatimi i Lidhjeve

Formatimi i një lidhjeje bëhet me tekstin midis kllapash. Përdorni kllapa katrore për tekstin e dukshëm të lidhjes dhe kllapa të lakuara për URL-në e destinacionit: `[tekst](url)`.

Në këto dokumente, lidhja e jashtme më e përdorur do të jetë [Mythras Encounter Generator](https://mythras.skoll.xyz).
```markdown
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Lidhje të Jashtme vs. Të Brendshme

Lidhjet e jashtme shkojnë në faqe të tjera përmes internetit dhe do të kërkojnë një URL `HTTP` dhe, si parazgjedhje, ato _gjithmonë_ do të hapen në një skedë të re shfletuesi.

Për të shmangur ngarkesën e skedave të shumta në dokumentin që po lexohet, lidhjet e brendshme dhe faqeshënuesit formohen me URL relative që referojnë skedarët markdown të dukshëm në depon GitHub. Në vend të një skede të re, këto lidhje të brendshme do të lëvizin shpejt në seksionin e lidhur.

#### Shembuj të lidhjeve të brendshme

- **Lidhje kapitujsh:** Këto tregojnë fillimin e një seksioni kryesor (h1). p.sh. kapitulli [Luftimi](0005_Combat.md).

  - Formati i lidhjes: `[tekst](file.md)`

- **Lidhje nënseksionesh:** Këto tregojnë një titull brenda një kapitulli duke referuar dokumentin si më lart, por duke shtuar `#` menjëherë pas titullit të destinacionit. p.sh. [Sulmet me Kërcim](0005_Combat.md?id=leaping-attacks)

  - Formati i lidhjes: `[tekst](file.md?id=heading-id)`

#### Lidhje të jashtme për nënseksione

Mund të ketë raste për të referuar një seksion të njohur të një dokumenti të jashtëm, për shembull, një tabelë specifike në një SRD tjetër. Formatimi është i njëjtë si me lidhjet e nënseksioneve, më lart, duke përdorur vetëm URL-në e jashtme HTTP.

Si shembull, këtu është [tabela e konvertimeve Imperiale në Metrike](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) nga [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```markdown
[tabela e konvertimeve Imperiale në Metrike](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) nga [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/)
```

---
## Lista e Magjive dhe Fuqive

Filloni një seksion 'të pastër' me një titull h2 për listat e magjive, fuqive etj. të disponueshme; më pas h3 për çdo artikull të listës.

Magjitë dhe fuqitë zakonisht paraqiten në një listë të vetme të sheshtë sipas llojit të magjisë (Magji Popullore, Theism, etj.), por nëse lista kërkon nënseksione të veta, si specializime shkollash ose kultesh, rrisni nivelin e titullit në mënyrë të përshtatshme. Për shembull, h2 për Listën e Mrekullive të Theizmit, h3 për Kultin: Mithras, dhe h4 për çdo mrekulli të kultit Mithras.

Veçanërisht në rastin e magjive, por në çdo përshkrim që përdor atribute të fjalëve kyçe, renditni ato me tekst të pjerrët.

Teksti përshkrues dhe rregullat speciale përdorin tekst normal.

### Formatimi i Listës së Magjive

```markdown
> ## Titull
>
> ### Nëntitull
> _Fjalë kyçe, Fjalë kyçe_
>
> Përshkrim.
>
```

<details>

<summary>Shembull: lista e magjive të formatuara (e cituar në bllok) </summary>

---
> ## Përshkrimet e Magjive
>
> ### Largohu
> _I menjëhershëm, Me Rreze_
>
> Largohu përdoret për të shuar një magji tjetër brenda rrezes. Largohu mund të hidhet në mënyrë reaktive për të neutralizuar magjitë fyese, duke përdorur Veprimin Reaktiv të Kundërmagjisë.

</details>

---
## Blloqet e statistikave të automjeteve
Filloni një seksion 'të pastër' me një titull h2 për listat, më pas rrisni nivelin h- si zakonisht për kategoritë dhe artikujt e listës.

Çdo shembull i listuar ka statistikat dhe përshkrimet e paraqitura si një listë me pika me tituj pikash të theksuar.

### Formatimi i Bllokut të Statistikave të Automjeteve

```markdown
> ## Titull
>
> ### Nëntitull
>
> #### Nën-nëntitull
>
> - **Titull:** Përshkrim
> - **Titull:** Përshkrim
>
```

<details>

<summary>Shembull: bllok statistikash automjeti i formatuar (i cituar në bllok) </summary>

---
> ## Shembuj Automjetesh
>
> ### Automjete Tokësore
>
> #### Interceptor
>
> - **Koraca:** 6 (Ushtarake e Mesme), 40 Strukturë
>
> - **Shpejtësia:** E shpejtë
>
> - **Sisteme:** 3
>
> - **Tipare:** Vend nxjerrës, Performancë e Përmirësuar, Manovrim Superior, Suitë Mbikëqyrjeje, i Fortë, i Armatosur
>
> - **Armët:** Shpërndarës vaji, shpërndarës tymi, dy mitralozë të lidhur të mesëm
>
> - **Përshkrim:** Një makinë luksoze e rregulluar, makinë sportive ose e ngjashme, kjo makinë është ndërtuar për të shkuar shpejt dhe për të dhënë po aq sa merr në një betejë. Ky është lloji i automjetit që njerëzit mendojnë kur dikush thotë "makinë spiuni".

</details>

---
## Blloqet e statistikave të krijesave
Filloni një seksion 'të pastër' me një titull h2 për listat. Blloqet e statistikave të krijesave përdorin tabela dhe janë më komplekse për sa i përket formatimit dhe kërkesave për hapësirë. Për qartësi, shmangni nënseksionet dhe shtoni ndarës midis artikujve të listës.

Çdo shembull i listuar duhet të ketë sa vijon...

- **Titulli i krijesës:** Një ndarës i ndjekur nga një titull h3 për emrin e krijesës.

- **Hyrja MEG:** Një lidhje e jashtme me krijesën e specifikuar në [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detaje Themelore:** Emri/lloji i krijesës, atributet, aftësitë dhe çdo përshkrim i veçantë ose shënime të karakterit sipas nevojës.

- **Detaje Armësh:** Përshkrime të shkurtuara me kolona për emrin e armës dhe atributet e mëposhtme: Madhësia (përfshi Forcën këtu), Zgjidhja (përfshi Rrezen këtu), Dëmtimi, AP/HP, dhe çdo rregull special.

- **Vendndodhjet e Goditjeve & Forca:** Tabelat e vendndodhjeve do të ndryshojnë bazuar në anatominë e ndryshme të krijesave, por duhet të përfshihen edhe për humanoidët tradicionalë si një mjet për të gjurmuar forcën dhe dëmtimin.

### Formatimi i Bllokut të Statistikave të Krijesave

```markdown
> ---
> ### Goblin/Orc
> [Hyrja MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Emri i Krijesës | Goblin/Orc |
> | :-- | :-- |
> | Atributet Kryesore | FOR 11, KONS 14, PËRM 11, DEX 11, INT 11, FUQ 11, SHARM 7 |
> | Pikët e Veprimit | 2 |
> | Modifikuesi i Dëmtimit | - |
> | Iniciativa | +11 |
> | Lëvizja | 6m |
> | Aftësitë | Shikim Nata |
> | Aftësitë | Atletikë 52%, Fuqi 42%, Mashtrim 57%, Qëndrueshmëri 48%, Shmangie 62%, Perceptim 61%, Pa Armë 52%, Vullnet 42% |
> | Stili i Luftimit | Luftëtar (Shpatë e Shkurtër, Mburojë, Shtizë, Hobe) 62% |
>
> #### Detaje Armësh
>
> | Arma | Madhësia | Gjatësia | Dëmtimi | AP/HP | E Veçantë |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shpatë e shkurtër | M | M | 1d6 | 6/8 | |
> | Shtizë | M | L | 1d8+1 | 4/5 | |
> | Hobe | L | 10/150/300 | 1d8 | 1/2 | |
> | Mburojë | L | S | 1d4 | 4/9 | Mbron 3 vendndodhje për Bllokim/Mbrojtje Pasive |
>
> #### Vendndodhjet e Goditjeve & Forca
>
> | **1d20** | **Vendndodhja** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Këmba e Djathtë | 1/5 |
> | 4-6 | Këmba e Majtë | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Kraharori | 1/7 |
> | 13-15 | Krahu i Djathtë | 1/4 |
> | 16-18 | Krahu i Majtë | 1/4 |
> | 19-20 | Koka | 1/5 |
```

<details>

<summary>Shembull: tabela të formatuara të bllokut të statistikave të krijesave (të cituara në bllok) </summary>

> ---
> ### Goblin/Orc
> [Hyrja MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Emri i Krijesës | Goblin/Orc |
> | :-- | :-- |
> | Atributet Kryesore | FOR 11, KONS 14, PËRM 11, DEX 11, INT 11, FUQ 11, SHARM 7 |
> | Pikët e Veprimit | 2 |
> | Modifikuesi i Dëmtimit | - |
> | Iniciativa | +11 |
> | Lëvizja | 6m |
> | Aftësitë | Shikim Nata |
> | Aftësitë | Atletikë 52%, Fuqi 42%, Mashtrim 57%, Qëndrueshmëri 48%, Shmangie 62%, Perceptim 61%, Pa Armë 52%, Vullnet 42% |
> | Stili i Luftimit | Luftëtar (Shpatë e Shkurtër, Mburojë, Shtizë, Hobe) 62% |
>
> #### Detaje Armësh
>
> | Arma | Madhësia | Gjatësia | Dëmtimi | AP/HP | E Veçantë |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shpatë e shkurtër | M | M | 1d6 | 6/8 | |
> | Shtizë | M | L | 1d8+1 | 4/5 | |
> | Hobe | L | 10/150/300 | 1d8 | 1/2 | |
> | Mburojë | L | S | 1d4 | 4/9 | Mbron 3 vendndodhje për Bllokim/Mbrojtje Pasive |
>
> #### Vendndodhjet e Goditjeve & Forca
>
> | **1d20** | **Vendndodhja** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Këmba e Djathtë | 1/5 |
> | 4-6 | Këmba e Majtë | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Kraharori | 1/7 |
> | 13-15 | Krahu i Djathtë | 1/4 |
> | 16-18 | Krahu i Majtë | 1/4 |
> | 19-20 | Koka | 1/5 |

</details>

---
## Korrigjime të Komunitetit

### Gabime shtypi dhe konfuzion

Ndryshimet për të "pastruar" tekstin e autorëve duhet të mbahen minimale, por gabimet e shtypit dhe gabimet e tjera thjesht duhet të ndryshohen në linjë pa asnjë sinjalistikë.

### Panelet e Informacionit të Korrigjimeve

Kur një rregull i caktuar është shumë i paqartë, i paplotë, ose thjesht i gabuar, shtoni një shënim të Korrigjimeve të Komunitetit të palosshëm.

Shpjegoni çështjen në tekst të pjerrët duke përdorur vetëm tekst të theksuar të pjerrët për titullin e çështjes - _pa tituj h(x)!_ - në mënyrë që të mos krijoni hyrje konfuzuese në shiritin anësor.

Nëse shtohet tekst zëvendësues, vendoseni atë midis thonjëzave të dyfishta, në tekst të theksuar të pjerrët, të paraprirë nga "_Korrigjime Komuniteti:_" në tekst të pjerrët me peshë normale.

Rregullat shtesë, nëse kërkohen, duhet të paraqiten në tekst me peshë normale.

#### Shablloni i Formatimit të Korrigjimeve

```markdown
<details>

<summary>* Korrigjime Komuniteti</summary>

_**Titulli i Çështjes**_

_Korrigjime Komuniteti:_
_**"Tekst Zëvendësues"**_

Tekst shpjegues shtesë.

</details>

```

#### Shembuj të Korrigjimeve

<details>

<summary>* Korrigjime Komuniteti</summary>

_**Ngjitja**_

_Korrigjime Komuniteti:_
_**"Forca e veshur pengon alpinistët me një sasi të barabartë me mesataren e Pikëve të Forcës së veshur. Kjo gjendet duke totalizuar pikët e forcës së veshur të çdo vendndodhjeje dhe duke e ndarë atë shifër me numrin e vendndodhjeve."**_

_Rregulli siç është shkruar shpejt shkakton probleme. Veshja e një pjese të vetme forca 6AP do ta reduktonte një njeri në Lëvizje 0, që do të thotë se një njeri që mban një helmetë çeliku dhe asgjë tjetër do të ishte shumë i mbingarkuar për t'u ngjitur fare. Kjo duket e paarsyeshmërisht kufizuese, prandaj versioni i redaktuar i sugjeruar më lart. Kjo do të përditësohet nëse autorët origjinalë rishikojnë rregullin siç është shkruar._

</details>

<details>

<summary>* Korrigjime Komuniteti</summary>

_**Shpejtësitë: Ecja, Vrapimi, Sprinti**_

_Versioni i publikuar i _Mythras Imperative_ nuk ka rregulla eksplicite për lëvizjen me shpejtësi të ndryshme, megjithëse ato mbulohen në librin kryesor të rregullave të Mythras. Shumëfishuesit e shpejtësive të lartpërmendura janë shtuar si pjesë e Korrigjimeve të Komunitetit._

_Atje ku kërkohet, duhet të jetë e mjaftueshme për t'i trajtuar shpejtësitë si më poshtë:_

- _Shpejtësitë më të shpejta se Ecja aplikojnë një shumëfishues në vlerësimin e Lëvizjes: 3x për Vrapim, 5x për Sprint._

- _Ndërsa në shpejtësi Vrapimi ose Sprinti, personazhet nuk mund të tentojnë shumicën e veprimeve proaktive si sulmimi ose hedhja e magjive. Disa përjashtime përfshijnë..._
  - _Sulmet kur përdorin rregullat e Ngarkimit._
  - _Qëllimi i armëve me rreze me tiparin Skirmishing._
- _Si rregull i përgjithshëm, çdo veprim i lejuar duhet të trajtohet si një Shkallë më e vështirë për t'u kryer në Vrapim, dhe dy Shkallë më e vështirë në Sprint._

</details>

---
## Paralajmërime të Ndryshme

### Rreshta bosh / Kthime të karrocës

Lini një rresht bosh midis llojeve të ndryshme të hyrjeve. Titujt, ndarësit, tabelat etj. Këto nuk do të shfaqen të dukshme në pamjen e leximit, por mungesa e tyre mund të shkaktojë probleme formatimi.

### Tekst me shumë paragrafë të theksuar ose të pjerrët

Çdo paragraf duhet të shënohet si tekst i theksuar ose i pjerrët. Rreshti i ri midis paragrafëve do të prishë formatimin duke lënë shenja formatimi të humbura.

### Drejtshkrimet ndërkombëtare

Fuqitë regresive dhe të deplorueshme e kanë parë të arsyeshme të heqin të gjitha drejtshkrimet britanike në favor të versioneve objektivisht më të dobëta të SHBA-së. Kini kujdes për fjalët britanike me -OUR: _armour_, _favour_, etj.