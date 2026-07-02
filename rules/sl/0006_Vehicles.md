# Vozila

Vozila v _Mythras Imperative_ so obravnavana na pol abstrakten način. V bistvu so orodja v ozadju, ki se uporabljajo za prevoz likov od A do B, z malo potrebe po podrobnem opisu ali statistiki. Občasno pa bodo Mojstri igre potrebovali podrobnosti o vozilih, ko je to potrebno za njihovo predstavitev v zasledovanjih ali bojnih situacijah.

Pravila v tem razdelku omogočajo predstavitev večine vrst vozil, vendar na abstrakten način, ki je namenjen omogočanju fleksibilnosti in izboljšanju pripovedovanja zgodb. Zvezdne ladje in vesoljska plovila so nekoliko drugačna, čeprav temeljijo na podobnih načelih.

---
## Statistika

Vsa vozila so opisana z njihovo Strukturo, Ohišjem, Hitrostjo, Sistemi, Lastnostmi in Ščiti (če so prisotni v okolju).

- **[Velikost](0006_Vehicles.md?id=vehicle-size-table):** Vsa vozila imajo eno od šestih ocen Velikosti, ki določa vrednost ali razpon preostalih značilnosti. Zaradi svoje večje intrinzične velikosti in sovražnih okolij v vesolju imajo zvezdne ladje svoj razpon vrednosti.
- **[Ohišje](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Točke oklepa
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Življenjske točke vozila
- **[Ščiti](0006_Vehicles.md?id=shields):** V okoljih z napredno tehnologijo manipulacije z energijo so lahko prisotni ščiti, ki ščitijo vozilo, vendar se lahko ob vztrajnem obstreljevanju izrabijo.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljajo vitalne komponente vozila, vključno z elektrarno, delom za posadko itd.
- **[Hitrost](0006_Vehicles.md?id=speed):** Vsako vozilo ima osnovno oceno Hitrosti.
- **[Lastnosti](0006_Vehicles.md?id=traits):** Vozilo ima lahko tudi eno ali več Lastnosti. Lastnosti, kot so Sposobnosti, dodeljene Bitjem v pravilih _Mythras Imperative_, ali Lastnosti Bojnega stila, ponujajo dodaten opis igre in prednost, ki odraža naravo vozila.
- **[Orožja](0006_Vehicles.md?id=weapons):** Podobno kot Lastnosti, je vozilo lahko opremljeno z orožjem, kot to dovoljuje okolje. Nekaj predlaganih primerov in vrednosti je podrobneje opisanih spodaj.

---
### Velikost, vrsta in struktura ohišja

Velikost in namen vozila vplivata na debelino njegovega ohišja in odpornost njegove notranje strukture. Motocikel, na primer, ima minimalno ohišje, zgrajeno za hitrost in okretnost. Kopenski železoborec (masivna, gosenična ali kolesna oklepna pošast, gnana s parnimi ali dizelskimi motorji), ki je veliko večje vozilo, zasnovano za bojišče, ima veliko večje ohišje. Primerljive velikosti ohišij (in koliko zadetkov z orožjem lahko običajno prenesejo) so povzete v tabelah Velikosti vozil in Ohišja spodaj.

Vsakič, ko vozilo utrpi škodo, se dohodna škoda zmanjša za vrednost njegovega Ohišja. Preostala škoda se odšteje od točk Strukture vozila in ima odstotno verjetnost, enako prodirajoči škodi, da bo prizadela Sistem. Če se Struktura vozila kdaj zmanjša na nič, je vozilo bodisi popolnoma uničeno bodisi tako močno poškodovano, da ga je treba razrezati.

##### Kopenska ohišja

| Velikost | Struktura | Vrednost civilnega ohišja | Vrednost vojaškega ohišja | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Majhno | 1-20 | 1-3 | 4-6 | Motocikel, motocikel s prikolico, kompaktni ali subkompaktni avto, kanu, kajak, čoln na vesla |
| Srednje | 21-40 | 1-6 | 7-9 | Limuzina, dostavnik, pickup, luksuzni avto, luksuzni športni avto, mišičnjak, limuzina, reševalni čoln, gliser, zmaj, avtožiro |
| Veliko | 41-60 | 4-9 | 10-12 | Tovornjak, podaljšana limuzina, SUV, avtobus, enoprostorec, osebno letalo, jadralno letalo, križarka za užitek, tank, helikopter, podmornica |
| Ogromno | 61-80 | 7-12 | 13-15 | Vlačilec, letalo, reaktivno letalo, obalna straža, jahta |
| Izjemno | 81-100 | 10-15 | 16-18 | Vlak, potniška ladja, mornariška ladja |

##### Ohišja zvezdnih ladij

| Velikost | Struktura | Vrednost civilnega ohišja | Vrednost vojaškega ohišja | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Majhno | 10-50 | 4-9 | 10-12 | Enosedežno lovsko letalo |
| Srednje | 51-150 | 7-12 | 13-15 | Lahki tovornjak, plovilo tipa shuttle |
| Veliko | 151-450 | 10-15 | 16-18 | Težki tovornjak, križarka |
| Ogromno | 451-1350 | 13-18 | 19-21 | Spremljevalna fregata, lahka bojna križarka |
| Izjemno | 1351-4050 | 16-21 | 21-24 | Generacijska ladja, težka bojna križarka |
| Kolosalno | 4050-12110 | 19-24 | 24-30 | Orbitalni habitat, bojna postaja, ki uničuje planete |

---
### Ščiti

Deflektorski ščiti zagotavljajo dodatno plast zaščite za tista vozila, ki jih lahko namestijo. Ščiti delujejo nekoliko drugače kot Ohišje, zaradi svoje abrazivne narave. Če je dohodna škoda enaka ali manjša od vrednosti ščitov, je vsa blokirana. Če škoda presega vrednost ščita, potem vsak presežek zmanjša moč ščita za to količino.

_Na primer, transporter posadke ima energetski ščit z močjo 12 točk. Če bi transporter zadet z laserjem za 11 škode, preprosto ne bi prodrlo in ne bi imelo nobenega dodatnega učinka. Po drugi strani, če bi bil transporter zadet z eksplozijo, ki bi povzročila 15 škode, bi presežne tri točke zmanjšale moč ščita na 9._

Ko moč deflektorskega ščita pade na nič, se ta zruši. Vsaka preostala škoda se prenese na ohišje.

---
### Sistemi

Vsakič, ko vozilo utrpi škodo, ki prodre skozi njegovo ohišje, obstaja verjetnost, enaka prodirajoči škodi, da je bil prizadet vitalen Sistem.

_Na primer, 10 škode je naneseno na gliser – vozilo s 3 Ohišjem in 24 Strukture. Ohišje šteje kot oklep in zmanjša škodo na 7. To se odšteje od 24 točk Strukture in obstaja 7 % verjetnost, da se poškoduje eden od Sistemov vozila._

Škoda, ki jo lahko Sistem prenese, temelji izključno na velikosti vozila. To se modelira s številom zadetkov, ki jih Sistem lahko prenese, namesto z dejansko količino škode. En Zadeti Sistem na Majhnem vozilu bo takoj uničil ta Sistem. Za uničenje Sistemov Srednje velikega vozila sta potrebna dva zadetka, za Veliko vozilo tri in tako naprej. Glejte [Tabelo poškodb sistema](0006_Vehicles.md?id=system-damage-table) spodaj.

Sistemi, ki so poškodovani, a še niso uničeni, utrpijo izgubo funkcije sorazmerno s številom prejetih zadetkov – bodisi odstotno zmanjšanje bodisi kazen v stopnjah pri nalogah Sistema. Specifični učinek temelji na tem, kaj podsistem nadzoruje, kot je podrobno opisano v [Tabeli poškodb komponent sistema](0006_Vehicles.md?id=system-component-damage-table) spodaj. Odvisno od tega, kateri Sistem je zadet, so lahko učinki katastrofalni.

_Na primer, Kopenski železoborec – Izjemno vozilo s 5 zadetki v Sistem – dvakrat zadet v Pogonski sistem bi izgubil 40 % svoje moči in bi zmanjšal svojo Počasno Hitrost za dve stopnji na Omajano. Podobno bi Velik tovornjak – s 3 zadetki v Sistem – ki bi prejel dva zadetka v Sistem Motorja/Goriva, imel kazen dveh stopenj pri Hitrosti ter pri uporabi elektronskih sistemov. Tretji zadetek bi uničil Sistem Motorja/Goriva in ladjo z njim._

<details>

<summary>* Popravki skupnosti</summary>

---

#### Škoda

_Prvotno besedilo je bilo prvotno bolj oddaljeno. Postavljeno neposredno za razdelkom Sistemi nepotrebno ponavlja prejšnji odstavek._

- _"Škoda, ki presega Ohišje, prodira v vozilo, poškoduje Strukturo in morebiti vpliva na enega ali več sistemov._
- _Odvisno od velikosti vozila, je škoda lahko majhna ali katastrofalna._
- _Na primer, Veliko vozilo lahko prejme do dva zadetka v Sistem, kot je njegov Pogonski sistem. Tretji zadetek dejansko uniči Pogonski sistem. Vsakič, ko sistem prejme zadetek, bodisi izgubi odstotek svoje funkcije, kot je opisano v stolpcu Izguba na zadetek v spodnji tabeli Škoda sistema, ali pa osnovna funkcija (kot so Pogonski sistem, Pilot, Komunikacije itd.) postane za eno stopnjo težja na prejeti zadetek."_

_Zgornji odstavki so odstranjeni, na njihovo mesto pa je postavljena skrajšana ureditev, ki navaja še en primer učinka sistema._

---

</details>

##### Tabela poškodb sistema

| Velikost | Zadetki sistema | Izguba na zadeto |
| :-- | :-: | :-- |
| Majhno | 1 | 100% - Uničeno |
| Srednje | 2 | 1 Stopnja ali 50% |
| Veliko | 3 | 1 Stopnja ali 33% |
| Ogromno | 4 | 1 Stopnja ali 25% |
| Izjemno | 5 | 1 Stopnja ali 20% |
| Kolosalno | 6 | 1 Stopnja ali 16% |

<details>

<summary>* Popravki skupnosti</summary>

---

##### Tabela poškodb sistema (original)

| Velikost | Zadetki sistema | Izguba na zadeto |
| :-- | :-: | :-- |
| Majhno | 1 | 1 Stopnja ali 50% |
| Srednje | 2 | 1 Stopnja ali 33% |
| Veliko | 3 | 1 Stopnja ali 25% |
| Ogromno | 4 | 1 Stopnja ali 20% |
| Izjemno | 5 | 1 Stopnja ali 16% |
| Kolosalno | 6 | 1 Stopnja ali 10% |

##### Tabela velikosti vozil (iz [Velikost, vrsta in struktura ohišja](0006_Vehicles.md?id=hull-size-type-and-structure))

| Velikost | Zadetki sistema |
| :-- | :-: |
| Majhno | 1 |
| Srednje | 2 |
| Veliko | 3 |
| Ogromno | 4 |
| Izjemno | 5 |
| Kolosalno | 6 |

_Prvotna pravila in primeri so nedosledni:_
- _"Sistemi, ki so poškodovani, a še niso uničeni, utrpijo izgubo funkcionalnosti. Ta je enaka razmerju med trenutnimi zadetki in skupno zmogljivostjo. Tako bi Izjemno vozilo, dvakrat zadeto v Pogonski sistem, izgubilo 40 % svoje moči (2 zadetka od največ 5)."_
   - _To nakazuje, da bi Izjemno vozilo s 5 zadetki v Sistem moralo izgubiti 20 % z vsakim zadetkom - toda tabela pravi 16 %._
- _"Na primer, Veliko vozilo lahko prejme do tri zadetke v sistem, kot je njegov Pogonski sistem. Četrti zadetek dejansko uniči Pogonski sistem."_
  - _To nakazuje – kot tudi tabela – 25 % škode na zadetek v Sistem, toda Velika Vozila lahko prejmejo le 3 zadetke v Sistem po isti tabeli._
- _Čeprav ni nedosledna, je bila Tabela velikosti vozil odveč; ponovno se je pojavila v popolnejši obliki (dodajajoč stolpec Izguba na zadetek) le nekaj vrstic kasneje._

_To otežuje dosledno pravilo. Da bi rešili te težave, so bile vrednosti in primeri spremenjeni tako, da se ujemajo, in Tabela velikosti vozil je bila odstranjena._

---

</details>

##### Tabela poškodb komponent sistema

| 1k10 | Sistem | Rezultat poškodbe | Rezultat uničenja |
| :-: | :-- | :-- | :-- |
| 1 | Tovor | Količina imetja ali opreme, shranjene v skladišču, sorazmerno s škodo, je uničena. | Ves tovor je uničen. |
| 2 | Komunikacije | Meti za komunikacije so za eno dodatno stopnjo težavnosti težji vsakič, ko so poškodovani. | Vozilo ne more več komunicirati ali prevarati sovražnikovih senzorjev. |
| 3 | Krmilje | Meti za Plovbo, Vožnjo ali Pilotiranje so za eno dodatno stopnjo težavnosti težji vsakič, ko so poškodovani; potreben je takojšen met za Nadzor. | Vozila ni mogoče več krmiliti ali spremeniti smeri. |
| 4 | Pogonski sistem | Hitrost zmanjšana za količino, sorazmerno s škodo. | Vozilo se ustavi; letala strmoglavijo. |
| 5 | Posadka | Število potnikov, sorazmerno s škodo, postane žrtev. Prizadeti utrpijo Hudo rano in morajo uspeti pri metu Vzdržljivosti ali biti takoj ubiti. | Potniki vozila umrejo. |
| 6 | Motor / Gorivo | Hitrost zmanjšana za količino, sorazmerno s škodo. Elektronski sistemi so za eno stopnjo težavnosti težji za uporabo. | Vozilo je uničeno v katastrofalni eksploziji. |
| 7 | Senzorji | Meti za senzorje, navigacijo in napade z orožjem so za eno dodatno stopnjo težavnosti težji vsakič, ko so poškodovani. | Vozilo je oslepljeno. |
| 8 | Orožja | Število orožnih sistemov, sorazmerno s škodo, postane neoperativno. | Vozilo ne more več streljati z orožjem. |
| 9-0 | Nič | Noben sistem ni zadet; samo škoda na Strukturi. | Ni na voljo |

<details>

<summary>* Popravki skupnosti</summary>

---

##### Tabela poškodb komponent sistema (Motor/Gorivo)

_Prvotni rezultat je bil naslednji: "Največja hitrost je prepolovljena..." To je v nasprotju s splošnim pravilom o kaznih za škodo v sorazmerju s poškodbo Sistema: 25 % škode = 25 % kazni. Poleg tega celotna pravila v Mythras Companion ne omenjajo tega prepolovljenja hitrosti._

_Zaradi tega je besedilo zamenjano z istim vnosom iz Pogonskih Sistemov: "Hitrost zmanjšana za količino, sorazmerno s škodo."_

---

</details>

---
### Hitrost

Ker so fizika hitrosti, pospeševanja, upora in vztrajnosti (če naštejemo le nekaj) kompleksna vprašanja, je potrebna poenostavitev, zato so vozilom dodeljene abstraktne ocene hitrosti. Lastnost Hitrosti bi se morala uporabljati le za grobo presojo, ali lahko eno vozilo prehiti ali dohiti drugo.

Ocena hitrosti predstavlja nominalno operativno hitrost vozila. V nujnih situacijah se lahko ta zmogljivost poveča za eno stopnjo, ob tveganju obrabe ali poškodbe motorjev. Čeprav se za vse tipe vozil uporablja ista tabela, je treba uporabiti zdravo pamet, tako da se primerjajo le vozila istega razreda. Na primer, če imata zvezdna ladja in športni avto enako stopnjo pospeševanja Rapid (Hitro), bi moralo biti očitno, da je zvezdna ladja primerjalno hitrejša.

Povečanje hitrosti vozila nad njegovo standardno vrednost je mogoče z uspešnim metom Vožnje. Običajno je ta dodatna hitrost vzdržna le kratek čas – ne več kot 1k6 minut, preden mora vozilo zmanjšati na standardno hitrost ali tvegati poškodbe svoje elektrarne. Kritičen met Vožnje omogoča podaljšanje obdobja višje hitrosti na 1k12 minut.

Voznik lahko poskusi povečati hitrost vozila za 2 stopnji, vendar to zahteva herkulejski met Vožnje in največ, kar lahko vozilo vzdrži to hitrost, je 1k3 minute: Kritičen uspeh ne bo podaljšal trajanja povečane hitrosti.

##### Tabela ocen hitrosti

| Ocena hitrosti | Največja hitrost za |
| :-- | :-: |
| Omajano | Izjemno |
| Počasi | |
| Počasi | Ogromno |
| Povprečno | |
| Nežno | Veliko |
| Zmerno | |
| Hitro | Srednje |
| Hitro | |
| Bliskovito | Majhno |

---
### Lastnosti

Največje število lastnosti, ki jih ima lahko vozilo, je odvisno od velikosti in vrste ohišja.

Vsako vozilo ima inherentno lastnost: način potovanja, za katerega je bilo primarno zasnovano. Zato imajo letala inherentno lastnost V zraku, čolni lastnost Na morju in tako naprej. Ta inherentna lastnost se ne šteje k razpoložljivemu številu lastnosti. Če pa vozilo vključuje drugi način potovanja – na primer leteča podmornica, bi morala biti lastnost V zraku vzeta kot ena od razpoložljivih lastnosti.

Nekatere lastnosti morda niso na voljo, odvisno od tehnološke ravni okolja; Mojstri igre morajo sami presoditi, katere lastnosti se lahko uporabijo.

##### Tabela dodeljevanja lastnosti vozil

| Velikost | Največ lastnosti |
| :-- | :-: |
| Majhno | 1 |
| Srednje | 2 |
| Veliko | 3 |
| Ogromno | 4 |
| Izjemno | 5 |
| Kolosalno | 6 |

#### V zraku

Vozilo je sposobno atmosferskega leta.

#### Vse terensko

Ta lastnost se mora uporabljati s kopenskimi vozili. Vozilo lahko prečkati negostoljuben, težaven in strm teren, z uporabo gosenic, naprednih sistemov vzmetenja in pogona ali močnih pogonskih diferencialov.

#### Riganje/Zarivanje

Vozilo je zasnovano za riganje in tuneliranje skozi zemljo. Lahko doseže največjo globino, enako njegovi oceni Ohišja x5 metrov.

#### Kamuflirano

Vozilo ima bodisi kamuflažno barvo bodisi mimetične senzorje, ki mu omogočajo, da se zlije z okoljem. Poskusi vizualnega opazovanja vozila so za eno stopnjo težavnosti težji.

#### Tovor

Vozilo je zasnovano posebej za vlečenje tovora namesto potnikov. Potniški prostori so minimalni, preostali uporabni prostor vozila pa je namenjen shranjevanju tovora z ustreznimi deli, orodjem in celo okoljskim kondicioniranjem (kot so zamrzovalni deli za prevoz pokvarljivih izdelkov). Ko je vozilo naloženo s tovorom, je njegova hitrost za dve stopnji nižja, kot bi sicer dovoljevala njegova velikost ohišja.

#### Nosilec

Vozilo je zasnovano posebej za prevoz manjših, z manj posadke ali morda daljinsko vodenih vozil, bodisi civilne bodisi vojaške narave. Vsako vozilo s to lastnostjo mora biti vsaj Izjemno. Število prevoženih manjših plovil se lahko razlikuje glede na vrsto misije in namen, vendar je lahko od 10 do toliko, kolikor je ocena Strukture vozila.

#### Konstrukcija

Vozilo je opremljeno za težka gradbena dela. Vsa vozila s to lastnostjo imajo tudi lastnost Vse terensko, vendar je hitrost za dve stopnji nižja, kot bi običajno dovoljevala njihova velikost ohišja. Vozilo je opremljeno z orodjem, primernim za naloge, kot so dvižni kraki, kopače, prekucniki itd.

#### Odporen na EMP

Vozilo je zaščiteno pred napadi elektromagnetnega pulza.

#### Izboljšana zmogljivost

Ocena hitrosti vozila je za eno stopnjo višja od največje za njegovo velikost.

#### Izvržni sedež

V primeru nevarnosti izvržni sedež izstreli potnike več sto metrov v zrak, nato pa razpre padalo za varen pristanek. Padalo je neobvezno. Ni priporočljivo za helikopterje (Kamov Ka-52 Alligator je pomembna izjema).

#### HLT

Samo vesoljska plovila. Plovilo je opremljeno z motorjem, hitrejšim od svetlobe (bodisi hipergonom, pogonom na warp, generatorjem črvine ali podobnim). Pogonski sistem HLT ima ločeno oceno Hitrosti, ki v bistvu meri hitrost, s katero lahko zvezdna ladja prečka en parsek (3,26 svetlobnih let, ali 31 bilijonov kilometrov ali 19 bilijonov milj), in sicer:

##### Tabela ocen hitrosti HLT

| Ocena hitrosti | Faktor za prehod 1 parseka |
| :-- | :-: |
| Omajano | 10 |
| Počasi | 8 |
| Počasi | 7 |
| Povprečno | 6 |
| Nežno | 5 |
| Zmerno | 4 |
| Hitro | 3 |
| Hitro | 2 |
| Bliskovito | 1 |

Časovni faktor določi Mojster igre, odvisno od tega, kako napreden je razvoj HLT v okolju. Na primer, osnovni faktor je lahko 1 dan, kar pomeni, da ladja z omajanim HLT pogonom potrebuje 10 dni za dokončanje poti, medtem ko plovilo z bliskovito HLT pogonom opravi pot v 1 dnevu. Drugje, kjer je tehnologija HLT bistveno manj učinkovita, se lahko časovni faktor meri v mesecih, namesto v dneh.

Predpostavlja se, da ima ladja zaloge goriva za povratno potovanje ali sredstvo za točenje goriva na ciljni točki.

Predpostavlja se, da se lahko katerikoli velikosti zvezdne ladje namesti HLT pogon, čeprav je to spet odvisno od okolja.

HLT pogoni se ne morejo aktivirati znotraj 1,5 astronomskih enot od zvezde (približno 225 milijonov kilometrov, ali 270 milijonov milj). To pomeni, da morajo ladje uporabiti podsvetlobni pogon za premikanje do približne razdalje Marsa, preden aktivirajo sistem HLT.

#### Kopensko vozilo

Vozilo je sposobno potovanja po tleh.

#### Lebdenje

Vozilo lebdi nad tlemi z uporabo zračne blazine ali repulzorja proti gravitaciji.

#### Razkošno

Vozilo je zasnovano posebej za prevoz potnikov na določeni ravni razkošja. Odvečni tovorni prostor je namenjen razkošnim potniškim namestitvam, bazenom, jacuzzijem, dodatni posadki, ki ustreže željam potnikov, in tako naprej.

#### Tirnice

Vozilo se zanaša na tirni sistem. Vozila s to lastnostjo lahko naravno dosežejo oceno Hitrosti tri stopnje višje, kot bi običajno dovoljevala njihova velikost ohišja, vendar so očitno omejena na gibanje samo po tirnem sistemu.

#### Odporno

Vsi sistemi lahko prenesejo en dodatni zadetek več, kot je običajno določeno z Velikostjo. To lastnost je mogoče zlagati — tako Odporno 2 pomeni, da lahko sistemi prenesejo 2 zadetka več kot običajno za ceno dveh točk lastnosti.

#### Na morju

Vozilo plava na vodi.

#### Vesoljsko plovilo

Vozilo je zatesnjeno proti vakuumu in zaščiteno pred kozmičnim sevanjem ter lahko, odvisno od zasnove, zapušča in ponovno vstopa v atmosfero ter vzdržuje letenje znotraj atmosfere.

#### Prikritost

Samo letala. Vozilo je zasnovano tako, da se izogne odkrivanju z radarjem in drugimi sistemi senzorjev dolgega dosega. Poskusi opazovanja vozila z elektronskimi senzorji so za eno stopnjo težavnosti težji.

#### Podvodno

Vozilo je sposobno potopiti se pod površino oceana do operativne globine, enake njegovi oceni Ohišja x10 metrov. Globina zrušitve — absolutni maksimum, ki ga podmornica lahko doseže, ne da bi bila zmečkana — je 1,5-kratnik njene operativne globine.

#### Vrhunsko upravljanje

Upravljanje vozila je ocenjeno kot Enostavno.

#### Nadzorna oprema

Vozilo ima vgrajen računalnik, bazno postajo za komunikacije, sprejemnik za signale prisluškovalnih naprav in napravo za prestrezanje signalov bližnjih pametnih telefonov v radiju 100 metrov.

#### Vzdržljivo

Civilno vozilo s to lastnostjo črpa svoje Ohišje iz vojaškega stolpca in samodejno ima maksimalno Strukturo. Vojaško vozilo s to lastnostjo črpa svoje Ohišje in Strukturo iz naslednje vrstice navzdol.

#### Vlečni žarek

Samo vesoljska plovila. Ladja je opremljena z vlečnim žarkom, ki lahko ujame in privleče k sebi vozila z oceno ohišja do dveh stopenj nižjo od svoje. Tako bi Ogromna zvezdna ladja lahko privabila in zadržala ohišje do Srednje velikosti.

#### VTOL

Vertikalni vzlet/pristanek. Ta lastnost je inherentna za helikopterje in podobna vozila, ki uporabljajo kombinacijo rotorjev za ustvarjanje vzgona. Pri letalih s fiksnimi krili označuje uporabo fiksnih ali poravnavnih potisnikov za nadzor zračnega položaja, vzpona in spusta.

#### Vodno

Vozilo se poganja z zgibnimi nogami. Vozila tipa "Walker" so omejena na hitrost Nežno, ne glede na njihovo velikost. Vendar pa so "Walkerji" lahko zgrajeni do višin, ki bi bile preprosto nestabilne za vozila, opremljena z drugimi načini gibanja.

To vozilo je sposobno podvodnega gibanja.

#### Oboroženo

Vozilo je bilo prilagojeno za namestitev orožja. Orožni sistemi so obravnavani spodaj v razdelku [Orožja](0006_Vehicles.md?id=weapons).

---
## Orožja

Običajno so le vojaška ohišja zasnovana za namestitev orožja (pritrdilne točke, skladiščenje streliva, krmilni sistemi). Lastnost 'Oboroženo' se lahko uporabi za civilna vozila, ki morda potrebujejo orožje.

Največje število orožnih sistemov, ki jih vozilo lahko podpira, je enako 1/10 njegovih točk Strukture (tako lahko vozilo s 40 Strukture podpira 4 orožne sisteme, če gre za vojaško vozilo ali oboroženo civilno vozilo).

Orožni sistemi so odvisni od Velikosti vozila. Največja vrsta orožnega sistema za različne Velikosti je prikazana v spodnjih tabelah.

##### Tabela orožja po velikosti

| Velikost | Kopenska | Vesoljska plovila |
| :-- | :-- | :-- |
| Majhno | Lahko orožje (npr. jurišna puška) | Srednje orožje (npr. strojnica, izstreljevalnik raket) |
| Srednje | Srednje orožje (npr. strojnica, izstreljevalnik raket) | Kupolasto/Težko orožje (npr. težke povezane strojnice, miniguni) |
| Veliko | Kupolasto/Težko orožje (npr. težke povezane strojnice, miniguni) | Baterija orožja (npr. bojiščno topništvo) |
| Ogromno | Baterija orožja (npr. bojiščno topništvo) | Napredno orožje (npr. raketni sistemi) |
| Izjemno | Napredno orožje (npr. raketni sistemi) | Orožje na hrbtišču (samo eno) |
| Kolosalno | Ni na voljo | Orožje na hrbtišču (do 3) |

##### Vzorčna statistika orožja

| Orožje | Škoda | Doseg | Hitrost streljanja | Strelivo/Naložitev |
| :-- | :-: | :-: | :-: | :-: |
| 50-palčni top | 3k6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling puška | 3k6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5k6 | 5000/20km/60km | 1 | 1/5 |
| Srednja raketa/torpedo | 6k10 | Maksimalni doseg 200km | 1 | 1/5 |
| Velika/križarska raketa | 6k10+10 | Maksimalni doseg 1000km | 1 | 1/10 |
| Laserski/plazemski top | 4k6 | 300/1000/2000 | -/5/25 | 500/5 |
| Težki laserski/plazemski top | 5k6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Topniška baterija | 5k6+6 | Maksimalni doseg 50km | 1 | 1/5 |
| Baterija na hrbtišču | 10k6+6 | Maksimalni doseg 20000km | 1 | 1/10 |

_Dosegi so podani v metrih in kilometrih._

_Hitrosti streljanja so za enojni strel, polavtomatsko in popolnoma avtomatsko._

_Strelivo je sposobnost streljanja pred ponovnim polnjenjem. Naložitev je čas ponovnega polnjenja v bojnih krogih, ob predpostavki, da je na voljo polna posadka._

---
## Upravljanje in manövri

Izogibajoči se ali nenadni manövri zahtevajo uspešen met Vožnje/Pilotiranja, da se zagotovi, da voznik ali pilot ohrani nadzor nad vozilom. Večina vozil je zasnovana in zgrajena tako, da prenese občasne obremenitve in napore, vendar lahko Mojster igre odloči, da določen manever zahteva met z višjo stopnjo težavnosti, odvisno od njegove ambicioznosti. Neuspeh pomeni izgubo nadzora nad vozilom: vrzi na tabelo Izgube nadzora.

Upoštevajte, da Tabela Izgube nadzora velja samo za kopenska vozila. Podobni učinki se lahko uporabijo za zračna in vesoljska vozila, vendar bodo Mojstri igre morali prilagoditi razloge za specifičen učinek. Na primer, letalo, namesto da bi zdrselo, bi lahko šlo v vrtenje.

Prav tako lahko inherentno upravljanje vozila dodatno vpliva na met Vožnje. Upravljanje je bodisi Enostavno, Standardno, Težko, Zastrašujoče ali Herkulejsko in določa izhodišče za met Vožnje pri izvajanju manevra. Stopnja težavnosti za manever se nato uporabi na upravljanje, da se določi končna težavnost.

Na primer, visoko zmogljivo motorno kolo ima vgrajene žirostabilizatorje, ki mu dajejo Upravljanje Enostavno. Voznik želi izvesti 180-stopinjski zavoj z drsenjem, da bi se izognil zasledovalcu, manever, ki ga Mojster igre oceni kot eno dodatno stopnjo težavnosti. Voznik mora zato svoj met Vožnje izvesti na Standardno namesto Enostavno. Če bi poskušal isti manever na nestabiliziranem motociklu, bi bil met Vožnje Težak.

Vrhunsko Upravljanje je Lastnost. Če vozilo nima te lastnosti kot del svojega opisa, je privzeta vrednost Standardno upravljanje za vsa vozila velikosti Veliko in manj. Ogromna in Izjemna vozila inherentno imajo lastnost Upravljanja Zastrašujoče in Herkulejsko, in Mojster igre lahko prosto odloči, da so določeni manövri preprosto nemogoči za doseči zaradi velikosti vozila.

##### Tabela izgube nadzora

| 1k100 | Rezultat |
| :-: | :-- |
| 01-25 | Zasuk. Izguba nadzora je začasna. Vozilo zmanjša hitrost za 1 stopnjo za 5 sekund. |
| 26-40 | Zdrsljaj. Voznik se mora boriti, da obdrži vozilo pod nadzorom. Vozilo zmanjša hitrost za 2 stopnji za 10 sekund. |
| 41-50 | Hud zdrsljaj. Vozilo konča obrnjen v napačno smer in v mirovanju za 15 sekund. |
| 51-60 | Preval. Vozilo zdrsi in se prevrne, utrpi 3k10 škode na svoji Strukturi. Potniki morajo uspešno opraviti mete Vzdržljivosti ali utrpeti 1k10 škode na 1k3 Lokacijah zadetka. |
| 61-70 | Hud preval. Kot zgoraj, vendar vozilo utrpi 3k10+10 škode in Potniki prejmejo 1k10 škode tudi če met Vzdržljivosti uspe, in 2k10, če ne uspe. |
| 71-80 | Odpis. Kot zgoraj, vendar je vozilo zmanjšano na 0 Strukture. Potniki utrpijo enako škodo kot pri Hudem prevalu. |
| 81-90 | Eksplozija. Kot zgoraj, vendar se gorivni sistem vozila vžge in eksplodira v 1k20+10 sekundah. Če se ne morejo umakniti, potniki utrpijo dodatnih 1k6 škode od opeklin na 1k6 lokacijah. |
| 91-98 | Takojšnja eksplozija. Kot zgoraj, vendar je eksplozija takojšnja. |
| 99-00 | Katastrofalen trk. Potniki morajo uspešno vreči Vzdržljivost ali biti takoj ubiti. Škoda kot pri Odpisu je utrpljena ne glede na to. |

---
## Vzorčna vozila

---

### Kopenska vozila

#### Prestreznik

Predelan luksuzni avto, športni avto ali podobno, ta avto je zgrajen za hitro vožnjo in boj. To je tisto vozilo, na katerega ljudje pomislijo, ko nekdo reče "vohunski avto".

| Prestreznik | |
| :- | :- |
| **Velikost / Vrsta** | Srednje vojaško |
| **Ohišje** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Upravljanje** | Enostavno |
| **Lastnosti** | [Izvržni sedež](0006_Vehicles.md?id=ejector-seat), [Izboljšana zmogljivost](0006_Vehicles.md?id=enhanced-performance), [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorna oprema](0006_Vehicles.md?id=surveillance-suite), [Oboroženo](0006_Vehicles.md?id=weaponized) |
| **Orožja** | Razpršilec oljnega madeža, Razpršilec dima, Dvojno povezane srednje strojnice (2k6+3) |

<br>

---

#### Zasledovalno motorno kolo

Lahko, hitro motorno kolo za hitra zasledovanja, Zasledovalno motorno kolo nosi presenečenje – bodisi par povezanih strojnic ali dve raketi.

| Zasledovalno motorno kolo | |
| :- | :- |
| **Velikost / Vrsta** | Majhno civilno |
| **Ohišje** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Hitrost** | Hitro |
| **Upravljanje** | Enostavno |
| **Lastnosti** | [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Oboroženo](0006_Vehicles.md?id=weaponized) |
| **Orožja** | Dve raketi (4k6) ali dvojno povezane lahke strojnice (2k6) |

<br>

---

#### Limuzina

Standardna 4-vratna limuzina, ki ponuja dovolj prostora za udobno sedenje voznika in treh potnikov. Žrtvuje tovorni prostor za vključitev nadzorne opreme.

| Limuzina | |
| :- | :- |
| **Velikost / Vrsta** | Srednje civilno |
| **Ohišje** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Upravljanje** | Standardno |
| **Lastnosti** | Nevpadljivo, [Nadzorna oprema](0006_Vehicles.md?id=surveillance-suite) |
| **Orožja** | Nič |

<br>

---

#### Podvodni avto

Dvoosebni avto, ki lahko preklopi na vodni ali podvodni način za potovanje po ali pod vodo. Opremljen je s spredaj nameščeno torpedo in na vrhu nameščeno raketo zemlja-zrak.

| Podvodni avto | |
| :- | :- |
| **Velikost / Vrsta** | Srednje civilno |
| **Ohišje** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Upravljanje** | Standardno |
| **Lastnosti** | [Izboljšana zmogljivost](0006_Vehicles.md?id=enhanced-performance), [Podvodno](0006_Vehicles.md?id=submersible), [Vodno](0006_Vehicles.md?id=waterborne), [Oboroženo](0006_Vehicles.md?id=weaponized) |
| **Orožja** | Raketa (5k6), Torpedo (4k10) |

<br>

---

#### Nadzorni kombi

Navaden, neoznačen kombi, v katerem je ekipa agentov in komplet avdio-vizualne snemalne opreme.

| Nadzorni kombi | |
| :- | :- |
| **Velikost / Vrsta** | Veliko civilno |
| **Ohišje** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Hitrost** | Nežno |
| **Upravljanje** | Standardno |
| **Lastnosti** | [Nadzorna oprema](0006_Vehicles.md?id=surveillance-suite), [Vzdržljivo](0006_Vehicles.md?id=tough) |
| **Orožja** | Nič |

<br>

---

#### Taktično vozilo za podporo

Pickup ali džip s prostorom za dvočlansko posadko v kabini in strelca, ki stoji v tovornem delu in upravlja vrtljivo nameščeno srednjo strojnico.

| Taktično vozilo za podporo | |
| :- | :- |
| **Velikost / Vrsta** | Srednje civilno |
| **Ohišje** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Upravljanje** | Standardno |
| **Lastnosti** | [Vse terensko](0006_Vehicles.md?id=all-terrain), [Oboroženo](0006_Vehicles.md?id=weaponized) |
| **Orožja** | Nameščena srednja strojnica (2k6) |

<br>

---

### Vodna plovila

#### Gliser

Tipičen gliser, oborožen z zadaj nameščenim razpršilnikom min.

| Gliser | |
| :- | :- |
| **Velikost / Vrsta** | Srednje civilno |
| **Ohišje** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Upravljanje** | Standardno |
| **Lastnosti** | [Izboljšana zmogljivost](0006_Vehicles.md?id=enhanced-performance), [Vodno](0006_Vehicles.md?id=waterborne), [Oboroženo](0006_Vehicles.md?id=weaponized) |
| **Orožja** | Razpršilec min (5k6) |

<br>

---

#### Jahta

Luksuzna jahta, ki bi jo lahko imel oligarh. Verjetno opremljena z nadzorno opremo za zaščito pred sovražniki, ki poskušajo delati slabe stvari.

| Jahta | |
| :- | :- |
| **Velikost / Vrsta** | Ogromno civilno |
| **Ohišje** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Hitrost** | Počasi |
| **Upravljanje** | Zastrašujoče |
| **Lastnosti** | [Razkošno](0006_Vehicles.md?id=luxurious), [Nadzorna oprema](0006_Vehicles.md?id=surveillance-suite), [Vodno](0006_Vehicles.md?id=waterborne) |
| **Orožja** | Nič |

<br>

---

### Letala/Vesoljska plovila

#### Zračno plovilo (Civilna zračna ladja)

Podobno Hindenburgu, ta razred transkontinentalnega zračnega plovila (in drugi njegovega razreda) je dolg 245 metrov in potrebuje posadko 40 do 61 oseb. Običajno lahko prevaža 50 do 72 potnikov v luksuznih namestitvah.

| Zračno plovilo | |
| :- | :- |
| **Velikost / Vrsta** | Izjemno civilno |
| **Ohišje** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Hitrost** | Omajano |
| **Upravljanje** | Herkulejsko |
| **Lastnosti** | [V zraku](0006_Vehicles.md?id=airborne), [Razkošno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | Nič |
| **Orožja** | Nič |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter uporablja svojo napredno nadzorno tehnologijo za prestrezanje telefonskih in brezžičnih internetnih signalov ter sledenje posameznikom in vozilom tudi v temi, preko FLIR. Poskusi izogibanja sledilcu preko Prikritosti so Zastrašujoči.

| Jurišni helikopter | |
| :- | :- |
| **Velikost / Vrsta** | Veliko vojaško |
| **Ohišje** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Hitrost** | Zmerno |
| **Upravljanje** | Enostavno |
| **Lastnosti** | [V zraku](0006_Vehicles.md?id=airborne), [Izboljšana zmogljivost](0006_Vehicles.md?id=enhanced-performance), [Prikritost](0006_Vehicles.md?id=stealth), [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorna oprema](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | Nič |
| **Orožja** | 1 Gatling puška (3k6), 4 rakete (5k6) |

<br>

---

#### Večnamensko lovsko letalo

To dvosedežno kopensko lovsko letalo (podobno tipu De Havilland Mosquito) je dobro znano po svoji zmogljivosti in vsestranskosti. Njegov bombni prostor lahko nosi bodisi dve 250-funtski bombi (obravnavaj kot srednje rakete z dosegom 0) ali eno torpedo.

| Večnamensko lovsko letalo | |
| :- | :- |
| **Velikost / Vrsta** | Veliko vojaško |
| **Ohišje** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Hitrost** | Zmerno |
| **Upravljanje** | Standardno |
| **Lastnosti** | [V zraku](0006_Vehicles.md?id=airborne), [Izboljšana zmogljivost](0006_Vehicles.md?id=enhanced-performance) |
| **Ščiti** | Nič |
| **Orožja** | 4 nosno nameščene Gatling puške (4k6+3), 1 bombni prostor (6k10 - glej opis) |

<br>

---

#### Medzvezdni tovornjak (Lahki visokotehnološki transport)

Ta lahki transportni sistem zahteva minimalno posadko samo dveh, s prostorom za do štiri dodatne potnike. Tukaj je navedena standardna tovarniška različica, vendar bodo mnogi lastniki uporabili svoje "posebne modifikacije", kot so skriti tovorni prostor, Izboljšana zmogljivost, Vrhunsko upravljanje, Odpornost na EMP, Prikritost in tako naprej.

| Medzvezdni tovornjak | |
| :- | :- |
| **Velikost / Vrsta** | Srednje civilno vesoljsko plovilo |
| **Ohišje** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro (Faktor parseka 3) |
| **Upravljanje** | Standardno |
| **Lastnosti** | [V zraku](0006_Vehicles.md?id=airborne), [Tovor](0006_Vehicles.md?id=cargo), [HLT](0006_Vehicles.md?id=ftl), [Vesoljsko plovilo](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | 8 |
| **Orožja** | 2x štirikratno nameščene kupole z laserskimi topovi (5k6) |

<br>

---

#### Splošna kontaktna enota (Ultra visokotehnološko vesoljsko plovilo)

Ta izjemno visokotehnološka zvezdna ladja je fizična predstavitev zelo naprednega umetnega uma, ki ima obliko dva kilometra dolge serije poljsko povezanih modulov. Moduli so individualno namenski in vključujejo habitate, gradbene objekte, tovorne prostore, predelavo hrane, rekreacijske komplekse, hangarje in celo nekatere skrivnostne enote, o katerih ladijska inteligenca redko, če sploh kdaj, razpravlja. Ne potrebuje človeške posadke, vendar lahko z lahkoto podpira populacijo potnikov do 100.000. Mnogi potniki se rodijo in umrejo na krovu Kontaktne Enote: mnogi so prehodni, prihajajo in odhajajo po želji.

| Splošna kontaktna enota | |
| :- | :- |
| **Velikost / Vrsta** | Kolosalno civilno vesoljsko plovilo |
| **Ohišje** | 20 |
| **Struktura** | 10.000 |
| **Sistemi** | 6 |
| **Hitrost** | Zmerno (Faktor parseka 4. Na tej tehnološki ravni, Faktor pomeni 1 uro) |
| **Upravljanje** | Zastrašujoče |
| **Lastnosti** | [V zraku](0006_Vehicles.md?id=airborne), [Tovor](0006_Vehicles.md?id=cargo), [Nosilec](0006_Vehicles.md?id=carrier), [Konstrukcija](0006_Vehicles.md?id=construction), [HLT](0006_Vehicles.md?id=ftl), [Razkošno](0006_Vehicles.md?id=luxurious), [Vesoljsko plovilo](0006_Vehicles.md?id=space-craft),[Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Vlečni žarek](0006_Vehicles.md?id=tractor-beam) |
| **Ščiti** | 30 |
| **Orožja** | Nobenega, o katerem bi se hotela pogovarjati |

<br>