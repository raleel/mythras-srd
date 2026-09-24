# Vozila

Vozila v _Mythras Imperative_ so obravnavana na pol-abstrakten način. V bistvu so to orodja v ozadju, ki se uporabljajo za prevoz likov od točke A do točke B, z malo potrebe po podrobnem opisu ali statistikah. Občasno pa bodo mojstri iger (Games Masters) potrebovali podrobnosti o vozilih, kadar jih je treba predstaviti v zasledovanjih ali bojnih situacijah.

Pravila v tem razdelku omogočajo predstavitev večine vrst vozil, vendar na abstrakten način, ki naj bi omogočil prilagodljivost in izboljšal pripovedovanje zgodb. Vesoljske ladje in plovila so nekoliko drugačna, čeprav temeljijo na podobnih načelih.

---
## Statistika

Vsa vozila so opisana glede na svojo Strukturo, Trup, Hitrost, Sisteme, Lastnosti in Ščite (če so prisotni v okolju).

- **[Velikost](0006_Vehicles.md?id=vehicle-size-table):** Vsa vozila imajo eno od šestih ocen velikosti, ki določa vrednost ali razpon preostalih karakteristik. Zaradi njihove večje inherentne velikosti in sovražnih okolij vesolja imajo vesoljske ladje svoj razpon vrednosti.
- **[Trup](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Točke oklepa.
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Točke zadetkov vozila.
- **[Ščiti](0006_Vehicles.md?id=shields):** V okoljih z napredno tehnologijo manipulacije energije so lahko prisotni ščiti, ki ščitijo vozilo, vendar lahko pod dolgotrajnim ognjem oslabijo.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljajo vitalne komponente vozila, vključno z napajalno enoto, oddelkom za posadko in tako naprej.
- **[Hitrost](0006_Vehicles.md?id=speed):** Vsako vozilo ima osnovno oceno Hitrosti.
- **[Lastnosti](0006_Vehicles.md?id=traits):** Vozilo ima lahko tudi eno ali več Lastnosti. Lastnosti, podobno kot sposobnosti, dodeljene bitjem v pravilih _Mythras Imperative_, ali Lastnosti bojnega stila, ponujajo dodaten opis igre in prednost, ki odraža naravo vozila.
- **[Orožja](0006_Vehicles.md?id=weapons):** Podobno kot pri Lastnostih je vozilo lahko opremljeno z orožjem, če okolje to dopušča. Nekateri predlagani primeri in vrednosti so podrobno opisani spodaj.


---
### Velikost trupa, tip in struktura

Velikost in namen vozila vplivata na debelino njegovega trupa in odpornost njegove notranje strukture. Motocikel ima na primer minimalen trup, saj je zgrajen za hitrost in okretnost. "Land Ironclad" (masivna, gosenična ali kolesna oklepljena pošast, ki jo poganjajo parni ali dizelski motorji), ki je veliko večje vozilo, zasnovano za bojišče, ima precej večji trup. Primerjalne velikosti trupov (in koliko zadetkov orožja lahko običajno prenesejo) so povzete v spodnjih tabelah Velikost vozila in Trup.

Kadar vozilo utrpi škodo, se dohodna škoda zmanjša za vrednost njegovega Trup. Morebitna preostala škoda se odšteje od točk Strukture vozila in ima odstotno možnost, enako prodorni škodi, da vpliva na Sistem. Če se Struktura vozila kadarkoli zmanjša na nič, je vozilo popolnoma uničeno ali tako hudo poškodovano, da ga je treba razrezati za odpad.

##### Zemeljski trupi 

| Velikost | Struktura | Vrednost civilnega trupa | Vrednost vojaškega trupa | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Majhna | 1-20 | 1-3 | 4-6 | Motocikel, motocikel s prikolico, kompaktni ali podkompaktni avtomobil, kanu, kajak, čoln na vesla |
| Srednja | 21-40 | 1-6 | 7-9 | Limuzina, dostavno vozilo, poltovornjak, luksuzni avtomobil, luksuzni športni avtomobil, mišičast avtomobil, limuzina, rešilni čoln, gliser, zmajar, avtožiro |
| Velika | 41-60 | 4-9 | 10-12 | Tovornjak, podaljšana limuzina, SUV, avtobus, enoprostorec, osebno letalo, jadralno letalo, izletniška križarka, tank, helikopter, podmornica |
| Ogromna | 61-80 | 7-12 | 13-15 | Vlačilec, potniško letalo, reaktivno letalo, plovilo obalne straže, jahta |
| Izjemna | 81-100 | 10-15 | 16-18 | Vlak, potniška ladja, vojaška ladja |

##### Trupi vesoljskih ladij 

| Velikost | Struktura | Vrednost civilnega trupa | Vrednost vojaškega trupa | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Majhna | 10-50 | 4-9 | 10-12 | Enosedežni lovec |
| Srednja | 51-150 | 7-12 | 13-15 | Lahka tovorna ladja, čolniček |
| Velika | 151-450 | 10-15 | 16-18 | Težka tovorna ladja, križarka |
| Ogromna | 451-1350 | 13-18 | 19-21 | Spremljevalna fregata, lahka bojna križarka |
| Izjemna | 1351-4050 | 16-21 | 21-24 | Generacijska ladja, težka bojna križarka |
| Kolosalna | 4050-12110 | 19-24 | 24-30 | Orbitalni habitat, bojna postaja za uničevanje planetov |


---
### Ščiti

Deflektorski ščiti zagotavljajo dodatno plast zaščite za tista vozila, na katera jih je mogoče namestiti. Ščiti delujejo nekoliko drugače kot Trup zaradi svoje ablativne narave. Če je dohodna škoda enaka ali manjša od vrednosti ščitov, je v celoti blokirana. Če škoda preseže vrednost ščita, potem vsak presežek zmanjša moč ščita za to količino.

_Na primer, vojaški transporter ima moč energijskega ščita 12 točk. Če bi transporter zadel laser za 11 škode, ta preprosto ne prodre in nima dodatnega učinka. Če pa bi transporter zadel izstrelek, ki povzroči 15 škode, bi presežne tri točke zmanjšale moč ščita na 9._

Ko moč deflektorskega ščita pade na nič, ta kolapsira. Morebitna preostala škoda se prenese na trup.

---
### Sistemi

Vsakič, ko vozilo utrpi škodo, ki prodre skozi njegov trup, obstaja možnost, enaka prodorni škodi, da je bil prizadet vitalni Sistem.

_Na primer, 10 škode se nanese gliserju - vozilu s 3 Trupa in 24 Strukture. Trup šteje kot oklep, ki zmanjša škodo na 7. Ta se odšteje od 24 točk Strukture in obstaja 7% možnost, da se poškoduje eden od sistemov vozila._

Škoda, ki jo lahko prenese Sistem, temelji izključno na velikosti vozila. To je modelirano s številom zadetkov, ki jih lahko Sistem prenese, namesto z dejansko količino škode. En sam zadetek v sistem pri Majhnem vozilu bo ta sistem takoj uničil. Potrebna sta dva zadetka, da se uničijo sistemi Srednje velikega vozila, trije za Veliko vozilo in tako naprej. Glej [Tabelo škode sistemov](0006_Vehicles.md?id=system-damage-table) spodaj.

Sistemi, ki so poškodovani, vendar še niso uničeni, trpijo izgubo funkcije, sorazmerno s številom prejetih zadetkov - bodisi z odstotnim zmanjšanjem bodisi s kaznijo stopnje (Grade) pri nalogah Sistema. Specifičen učinek temelji na tem, kaj podsistem nadzoruje, kot je podrobno opisano v spodnji [Tabeli škode komponent sistema](0006_Vehicles.md?id=system-component-damage-table). Glede na to, kateri Sistem je zadet, so lahko učinki katastrofalni.

_Na primer, Land Ironclad - Izjemno vozilo s 5 zadetki sistemov - dvakrat zadet v pogon (Drive), bi izgubil 40% svoje moči in bi zmanjšal svojo počasno hitrost (Slow Speed) za dve stopnji na težko (Ponderous). Podobno bi imela Velika tovorna ladja - s 3 zadetki sistemov - ki prejme dva zadetka na sistem motorja/goriva, dve stopnji kazni pri hitrosti kot tudi pri uporabi elektronskih sistemov. Tretji zadetek bi uničil sistem motorja/goriva in z njim ladjo._


<details>

<summary>* Errata skupnosti</summary>

---

#### Škoda


_Prvotno besedilo je bilo prvotno dlje stran. Postavljeno neposredno za razdelkom Sistemi, po nepotrebnem ponavlja prejšnji odstavek._

- _"Škoda, ki preseže Trup, prodre v vozilo, poškoduje Strukturo in morda vpliva na enega ali več sistemov. Odvisno od velikosti vozila je lahko škoda manjša ali katastrofalna._
- _Na primer, Veliko vozilo lahko prejme do dva zadetka na sistem, kot je njegov pogon. Tretji zadetek funkcionalno uniči pogon. Vsakič, ko sistem prejme zadetek, bodisi izgubi odstotek svoje funkcije, kot je opisano v stolpcu Izguba na zadetek v spodnji Tabeli škode sistemov, ali pa postane osnovna funkcija (kot so pogon, pilot, komunikacije itd.) težja za eno stopnjo težavnosti (Difficulty Grade) na vsak utrpljen zadetek."_

_Zgornji odstavki so odstranjeni in namesto njih je vstavljeno skrajšano urejanje, ki izpostavlja še en primer učinka sistema._

---

</details>

##### Tabela škode sistemov 

| Velikost | Zadetki sistemov | Izguba na zadetek |
| :-- | :-: | :-- |
| Majhna | 1 | 100% - Uničeno |
| Srednja | 2 | 1 stopnja ali 50% |
| Velika | 3 | 1 stopnja ali 33% |
| Ogromna | 4 | 1 stopnja ali 25% |
| Izjemna | 5 | 1 stopnja ali 20% |
| Kolosalna | 6 | 1 stopnja ali 16% |


<details>

<summary>* Errata skupnosti</summary>

---

##### Tabela škode sistemov (Izvirnik) 

| Velikost | Zadetki sistemov | Izguba na zadetek |
| :-- | :-: | :-- |
| Majhna | 1 | 1 stopnja ali 50% |
| Srednja | 2 | 1 stopnja ali 33% |
| Velika | 3 | 1 stopnja ali 25% |
| Ogromna | 4 | 1 stopnja ali 20% |
| Izjemna | 5 | 1 stopnja ali 16% |
| Kolosalna | 6 | 1 stopnja ali 10% |

##### Tabela velikosti vozil (iz [Velikost trupa, tip in struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Velikost | Zadetki sistemov |
| :-- | :-: |
| Majhna | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Izjemna | 5 |
| Kolosalna | 6 |

_Prvotna pravila in primeri so nedosledni:_
- _"Sistemi, ki so poškodovani, vendar še niso uničeni, trpijo izgubo funkcionalnosti. Ta je enaka deležu trenutnih zadetkov glede na njegovo skupno zmogljivost. Tako bi Izjemno vozilo, dvakrat zadeto v pogon, izgubilo 40% svoje moči (2 zadetka od največ 5)"._ 
   - _To nakazuje, da bi Izjemno vozilo, prikazano s 5 zadetki sistemov, moralo izgubiti 20% z vsakim zadetkom - vendar tabela pravi 16%._
- _"Na primer, Veliko vozilo lahko prejme do tri zadetke na sistem, kot je njegov pogon. Četrti zadetek funkcionalno uniči pogon."_ 
  - _"To nakazuje - kot tudi tabela - 25% škode na zadetek sistema, vendar lahko Velika vozila prenesejo le 3 zadetke sistemov po isti tabeli._
- _Čeprav ni nedosledno, je bila Tabela velikosti vozil odveč; ponovno se pojavi v polnejši obliki (dodajanje stolpca Izguba na zadetek) le nekaj vrstic kasneje._

_Zaradi tega je težko imeti dosledno pravilo. Da bi odpravili te težave, so vrednosti in primeri spremenjeni tako, da se ujemajo, in Tabela velikosti vozil je bila odstranjena._

---

</details>


##### Tabela škode komponent sistema 

| 1d10 | Sistem | Rezultat poškodbe | Rezultat uničenja |
| :-: | :-- | :-- | :-- |
| 1 | Tovor | Količina lastnine ali opreme, shranjene v skladišču, sorazmerna s škodo, je uničena. | Ves tovor je uničen. |
| 2 | Komunikacije | Komunikacijski meti trpijo eno dodatno stopnjo težavnosti (Difficulty Grade) vsakič, ko so poškodovani. | Vozilo ne more več komunicirati ali zavajati sovražnikovih senzorjev. |
| 3 | Kontrole | Meti za čolnarjenje, pogon ali pilotiranje trpijo eno dodatno stopnjo težavnosti vsakič, ko so poškodovani; potreben je takojšen met za nadzor. | Vozila ni več mogoče krmiliti ali spremeniti smeri. |
| 4 | Pogon | Hitrost se zmanjša za količino, sorazmerno s škodo. | Vozilo se popolnoma ustavi; letala strmoglavijo. |
| 5 | Posadka | Število potnikov, sorazmerno s škodo, postanejo žrtve. Prizadeti utrpijo Hudo rano in morajo uspeti pri metu za VZD ali pa so takoj ubiti. | Potniki v vozilu umrejo. |
| 6 | Motor / Gorivo | Hitrost se zmanjša za količino, sorazmerno s škodo. Elektronski sistemi so za eno stopnjo težavnosti težji za uporabo. | Vozilo je uničeno v katastrofalni eksploziji. |
| 7 | Senzorji | Meti za senzorje, navigacijo in napad z orožjem trpijo eno dodatno stopnjo težavnosti vsakič, ko so poškodovani. | Vozilo postane slepo. |
| 8 | Orožje | Število orožnih sistemov, sorazmerno s škodo, postane nedelujoče. | Vozilo ne more več streljati z orožjem. |
| 9-0 | Noben | Noben sistem ni zadet; le škoda na Strukturi. | N/A |

<details>

<summary>* Errata skupnosti</summary>

---

##### Tabela škode komponent sistema (Motor / Gorivo)

_Prvotni rezultat je bil naslednji: "Največja hitrost se prepolovi..." To nasprotuje splošnemu pravilu kazni za škodo v sorazmerju s škodo na sistemu: 25% škoda = 25% kazen. Poleg tega polna pravila v Mythras Companion ne omenjajo tega prepolavljanja hitrosti._

_Zaradi tega je besedilo nadomeščeno z istim vnosom iz sistema Pogon: "Hitrost se zmanjša za količino, sorazmerno s škodo."_

---

</details>


---
### Hitrost

Ker so fizika hitrosti, pospeška, zračnega upora in vztrajnosti (če naštejemo le nekatere) kompleksna vprašanja, je potrebna določena poenostavitev, zato vozila dobijo abstraktno oceno hitrosti. Karakteristika Hitrosti se sme uporabljati le za grobo presojo, ali lahko eno vozilo prehiti ali dohiti drugega.

Ocena hitrosti predstavlja nominalno operativno stopnjo vozila. V izrednih razmerah se lahko ta zmogljivost poveča za eno stopnjo, tveganje pa je obraba ali poškodba motorjev. Čeprav se za vse tipe vozil uporablja ista tabela, je treba uporabiti zdravo pamet, tako da se primerjajo le vozila istega razreda. Na primer, če imata vesoljska ladja in športni avtomobil isto stopnjo pospeška Rapid (Hitro), potem bi moralo biti očitno, da je vesoljska ladja primerjalno hitrejša.

Povečanje hitrosti vozila nad njegovo standardno vrednost je mogoče z uspešnim metom za Pogon. Običajno je ta dodatna hitrost vzdržljiva le za kratek čas – ne več kot 1d6 minut, preden mora vozilo zmanjšati hitrost na svojo standardno ali tvegati poškodbo napajalne enote. Kritični met za Pogon omogoča, da se obdobje višje hitrosti podaljša na 1d12 minut.

Voznik lahko poskusi povečati hitrost vozila za 2 stopnji, vendar to zahteva herkulski met za Pogon in najdlje, kolikor lahko vozilo vzdržuje to hitrost, je 1d3 minute: Kritični uspeh ne bo podaljšal trajanja povečane hitrosti.

##### Tabela ocen hitrosti 

| Ocena hitrosti | Največja hitrost za |
| :-- | :-: |
| Ponderous (Težka) | Izjemna |
| Sluggish (Lenobna) | |
| Slow (Počasna) | Ogromna |
| Mediocre (Povprečna) | |
| Gentle (Zmerna) | Velika |
| Moderate (Srednja) | |
| Rapid (Hitra) | Srednja |
| Fast (Nagla) | |
| Fleet (Vokretna) | Majhna |


---
### Lastnosti

Največje število lastnosti, ki jih ima lahko vozilo, je odvisno od velikosti trupa in tipa.

Vsako vozilo ima inherentno lastnost: način potovanja, za katerega je bilo primarno zasnovano. Zato imajo letala inherentno lastnost Airborne (Zračna), čolni lastnost Seaborne (Morska) in tako naprej. Ta inherentna lastnost ne šteje v razpoložljivo število lastnosti. Če pa bi vozilo vključevalo drugi način potovanja — na primer leteča podmornica —, bi bilo treba lastnost Airborne vzeti kot eno od razpoložljivih lastnosti.

Nekatere lastnosti morda niso na voljo, odvisno od tehnološke stopnje okolja; mojstri iger morajo sami presoditi, katere lastnosti se lahko uporabijo.

##### Tabela dodeljevanja lastnosti vozil 

| Velikost | Največ lastnosti |
| :-- | :-: |
| Majhna | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Izjemna | 5 |
| Kolosalna | 6 |

#### Airborne (Zračno)

Vozilo je sposobno atmosferskega letenja.

#### All Terrain (Terensko)

To lastnost je treba uporabiti z zemeljskimi vozili. Vozilo lahko prečka negostoljuben, težaven in strm teren z uporabo gosenic, naprednega vzmetenja in pogonskih sistemov ali zmogljivih pogonskih diferencialov.

#### Burrowing (Kopanje)

Vozilo je zasnovano za kopanje in predore skozi zemljo. Doseže lahko največjo globino, enako njegovi oceni trupa (Hull Rating) x 5 metrov.

#### Camouflaged (Kamuflirano)

Vozilo ima bodisi kamuflažno barvo bodisi mimetične senzorje, ki mu omogočajo, da se zlije z okoljem. Poskusi vizualnega opazovanja vozila so za eno stopnjo težji.

#### Cargo (Tovor)

Vozilo je posebej zasnovano za prevoz tovora namesto potnikov. Potniški oddelki so omejeni na minimum, preostali uporabni prostor vozila pa je namenjen shranjevanju tovora s primernimi oddelki, orodji in celo okoljsko klimatizacijo (kot so zamrzovalni oddelki za prevoz pokvarljivega blaga). Ko je vozilo natovorjeno s tovorom, je njegova hitrost za dve stopnji nižja, kot bi običajno dovoljevala njegova velikost trupa.

#### Carrier (Nosač)

Vozilo je posebej zasnovano za prevoz manjših, manj zasedenih ali po možnosti na daljavo vodenih vozil civilne ali vojaške narave. Vsako vozilo, ki ima to lastnost, mora biti vsaj Izjemne velikosti. Število prenašanih majhnih plovil se lahko razlikuje glede na vrsto in namen misije, vendar je lahko od 10 do toliko, kolikor znaša ocena Strukture vozila.

#### Construction (Gradbeno)

Vozilo je opremljeno za težka gradbena dela. Vsa vozila s to lastnostjo imajo tudi lastnost All Terrain, vendar je hitrost za dve stopnji nižja, kot bi običajno dovoljevala njihova velikost trupa. Vozilo je opremljeno z orodji, primernimi za naloge, kot so žerjavi, bagrske žlice, prekucniki itd.

#### EMP Resistant (Odporno na EMP)

Vozilo je zaščiteno pred napadi elektromagnetnega pulza.

#### Enhanced Performance (Izboljšana zmogljivost)

Ocena hitrosti vozila je za eno stopnjo višja od največje za njegovo velikost.

#### Ejector Seat (Katapultni sedež)

V nujnih primerih katapultni sedež izstreli potnike več sto metrov v zrak, nato pa odpre padalo, da omogoči varen pristanek. Padalo je neobvezno. Ni priporočljivo za helikopterje (Kamov Ka-52 Alligator je omembe vredna izjema).

#### FTL (Nadsvetlobni pogon)

Samo vesoljska plovila. Plovilo je opremljeno z nadsvetlobnim motorjem (bodisi hiperpogon, warp pogon, generator črvine ipd.). FTL pogon ima ločeno oceno hitrosti, ki v bistvu meri stopnjo, s katero lahko vesoljska ladja prečka en parsek (3,26 svetlobnih let ali 31 bilijonov kilometrov ali 19 bilijonov milj), in sicer:

##### Tabela ocen hitrosti FTL 

| Ocena hitrosti | Faktor za prečkanje 1 parseka |
| :-- | :-: |
| Ponderous (Težka) | 10 |
| Sluggish (Lenobna) | 8 |
| Slow (Počasna) | 7 |
| Mediocre (Povprečna) | 6 |
| Gentle (Zmerna) | 5 |
| Moderate (Srednja) | 4 |
| Rapid (Hitra) | 3 |
| Fast (Nagla) | 2 |
| Fleet (Vokretna) | 1 |

O faktorju časa odloča mojster iger, odvisno od tega, kako napreden je razvoj FTL v okolju. Na primer, osnovni faktor bi lahko bil 1 dan, kar pomeni, da ladja s pogonom FTL stopnje Ponderous potrebuje 10 dni za dokončanje potovanja, medtem ko plovilo s pogonom FTL stopnje Fleet dokonča pot v 1 dnevu. Drugje, kjer je tehnologija FTL bistveno manj učinkovita, se faktor časa morda meri v mesecih, namesto v dnevih.

Predpostavlja se, da ima ladja zaloge goriva bodisi za povratno potovanje bodisi sredstva za dolivanje goriva na ciljni točki.

Predpostavlja se, da je mogoče poljubno velikost vesoljske ladje opremiti s pogonom FTL, čeprav je to spet odvisno od okolja.

Pogona FTL ni mogoče aktivirati znotraj 1,5 astronomske enote od zvezde (približno 225 milijonov kilometrov ali 270 milijonov milj). To pomeni, da morajo ladje uporabiti podsvetlobni pogon, da se premaknejo približno do razdalje Marsa, preden aktivirajo sistem FTL.

#### Ground Vehicle (Zemeljsko vozilo)

Vozilo je sposobno premikanja po tleh.

#### Hover (Lebdenje)

Vozilo lebdi nad tlemi z uporabo zračne blazine ali antigravitacijskega repulzorja.

#### Luxurious (Luksuzno)

Vozilo je posebej zasnovano za prevoz potnikov na določeni stopnji luksuza. Presežni tovorni prostor je namenjen luksuznim potniškim nastanitvam, bazenom, vročim kopelim, dodatni posadki za postrežbo potnikom in tako naprej.

#### Rails (Tiri)

Vozilo se zanaša na tirni sistem. Vozila s to lastnostjo lahko naravno dosežejo oceno hitrosti tri stopnje višjo, kot bi običajno dovoljevala njihova velikost trupa, vendar so očitno omejena le na premikanje po tirnem sistemu.

#### Resilient (Odporno)

Vsi sistemi lahko prenesejo en zadetek več, kot je običajno določeno glede na velikost. To lastnost je mogoče zložiti — torej Resilient 2 pomeni, da sistemi lahko prenesejo 2 zadetka več kot običajno za ceno dveh točk Lastnosti.

#### Seaborne (Morsko)

Vozilo je plovno na vodi.

#### Spacecraft (Vesoljsko plovilo)

Vozilo je zatesnjeno proti vakuumu in zaščiteno pred kozmičnim sevanjem ter je lahko, odvisno od zasnove, sposobno zapustiti in ponovno vstopiti v atmosfero ter vzdrževati let znotraj atmosfere.

#### Stealth (Prikrito)

Samo letala. Vozilo je zasnovano tako, da se izogne zaznavanju z radarjem in drugimi senzorji dolgega dosega. Poskusi opazovanja vozila z elektronskimi senzorji so za eno stopnjo težji.

#### Submersible (Podmorsko)

Vozilo je sposobno potapljanja pod površje oceana do delovne globine, enake njegovi oceni trupa (Hull Rating) x 10 metrov. Globina kolapsa — absolutni maksimum, ki ga lahko podmornica doseže, ne da bi bila zmečkana — je 1,5-kratnik njene delovne globine.

#### Superior Handling (Vrhunsko upravljanje)

Upravljanje vozila je ocenjeno kot Easy (Lahko).

#### Surveillance Suite (Nadzorni paket)

Vozilo ima vgrajen računalnik, komunikacijsko bazno postajo, sprejemnik za signale naprav za prisluškovanje in napravo za prestrezanje bližnjih signalov pametnih telefonov v območju 100 metrov.#### Trdno (Tough)

Civilno vozilo s to lastnostjo črpa svoj Trup iz vojaškega stolpca in ima samodejno najvišjo Strukturo. Vojaško vozilo s to lastnostjo črpa svoj Trup in Strukturo iz naslednje vrstice navzdol.

#### Vlečni žarek (Tractor Beam)

Samo za vesoljska plovila. Ladja je opremljena z vlečnim žarkom, ki lahko ujame in k sebi potegne vozila z oceno trupa do dve stopnji manj od lastne. Tako bi lahko ogromna (Huge) zvezdna ladja pritegnila in zadržala trup do srednje (Medium) velikosti.

#### VTOL

Navpični vzlet/pristanek. Ta lastnost je prirojena za helikopterje in podobna vozila, ki za ustvarjanje vzgona uporabljajo kombinacijo rotorjev. Pri letalih s fiksnimi krili označuje uporabo fiksnih ali usmerjenih potisnikov za nadzor letenja, vzpona in spusta.

#### Vodno plovilo (Waterborne)

Vozilo se premika s pomočjo členjenih nog. Hodulja vozila so omejena na hitrost nežnega (Gentle), ne glede na njihovo Velikost. Vendar pa je hodulje mogoče zgraditi do višin, ki bi bile preprosto nestabilne za vozila, opremljena z drugimi načini premikanja.

To vozilo je sposobno premikanja pod vodo.

#### Oboroženo (Weaponized)

Vozilo je bilo prilagojeno za namestitev orožja. Oborožitveni sistemi so obravnavani spodaj v razdelku [Orožje](0006_Vehicles.md?id=weapons).

---
## Orožje

Običajno so le vojaški trupi zasnovani za namestitev orožja (trdne točke, skladišče streliva, nadzorni sistemi). Lastnost 'Oboroženo' se lahko izbere za civilna vozila, ki imajo lahko zahteve po orožju.

Največje število oborožitvenih sistemov, ki jih vozilo lahko podpira, je enako 1/10 njegovih Točk strukture (tako lahko vozilo s 40 strukturami podpira 4 oborožitvene sisteme, če gre za vojaško vozilo ali oboroženo civilno vozilo).

Oborožitveni sistemi so odvisni od Velikosti vozila. Največja vrsta oborožitvenega sistema za različne Velikosti je prikazana v spodnjih tabelah.

##### Tabela orožja po velikosti

| Velikost | Kopensko | Vesoljsko plovilo |
| :-- | :-- | :-- |
| Majhno (Small) | Lahko orožje (npr. jurišna puška) | Srednje orožje (npr. mitraljez, raketomet) |
| Srednje (Medium) | Srednje orožje (npr. mitraljez, raketomet) | Kupolasto/Težko orožje (npr. težki povezani mitraljezi, miniguni) |
| Veliko (Large) | Kupolasto/Težko orožje (npr. težki povezani mitraljezi, miniguni) | Orožna baterija (npr. bojna artilerija) |
| Ogromno (Huge) | Orožna baterija (npr. bojna artilerija) | Napredno orožje (npr. raketni sistemi) |
| Zelo veliko (Enormous) | Napredno orožje (npr. raketni sistemi) | Osno vgrajeno orožje (samo eno) |
| Kolosalno (Colossal) | NA | Osno vgrajeno orožje (do 3) |

##### Tabela vzorčne statistike orožja

| Orožje | Škode | Domet | Hitrost streljanja | Strelivo/Obremenitev |
| :-- | :-: | :-: | :-: | :-: |
| 50-palčni top | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling puška | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Srednji izstrelek/torpedo | 6d10 | Max domet 200km | 1 | 1/5 |
| Velik/krilati izstrelek | 6d10+10 | Max domet 1000km | 1 | 1/10 |
| Laser/plazemski top | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Težki laserski/plazemski top | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilerijska baterija | 5d6+6 | Max domet 50km | 1 | 1/5 |
| Osno vgrajena baterija | 10d6+6 | Max domet 20000km | 1 | 1/10 |

_Razdalje so podane v metrih in kilometrih._

_Hitrosti streljanja so za posamezen strel, polavtomatsko in polno avtomatsko._

_Strelivo je zmožnost streljanja pred potrebo po ponovnem polnjenju. Obremenitev je čas ponovnega polnjenja v bojnih krogih (Combat Rounds), ob predpostavki, da je na voljo polna posadka._

---
## Upravljanje in manevri

Izmikanje ali nenadni manevri zahtevajo uspešen met za Vožnjo/Pilotiranje, da zagotovite, da voznik ali pilot ohrani nadzor nad vozilom. Večina vozil je zasnovana in zgrajena tako, da zdržijo občasne obremenitve in napore, vendar lahko mojster igre (Games Master) odloči, da določen manever zahteva met z višjo stopnjo težavnosti, odvisno od tega, kako ambiciozen je. Neuspeh pomeni, da je nadzor nad vozilom izgubljen: mečite po tabeli Izguba nadzora.

Upoštevajte, da tabela Izguba nadzora velja samo za kopenska vozila. Podobne učinke je mogoče uporabiti za zračna in vesoljska vozila, vendar bodo morali mojstri iger prilagoditi utemeljitev za določen učinek. Na primer, letalo bi lahko namesto zanašanja padlo v vrtenje (spin).

Prav tako lahko voznikova prirojena vodljivost dodatno vpliva na met za Vožnjo. Vodljivost je bodisi Lahka (Easy), Standardna, Težka (Hard), Zastrašujoča (Formidable) ali Herkulovska (Herculean) in določa izhodišče za met za Vožnjo pri izvajanju manevra. Stopnja težavnosti manevra se nato uporabi za vodljivost, da se določi končna težavnost.

Na primer, visoko zmogljivo motorno kolo ima vgrajene girostabilizatorje, ki mu dajejo Lahko (Easy) vodljivost. Voznik želi izvesti 180-stopinjski obrat z zanašanjem, da bi se izognil zasledovalcu, manever, ki ga mojster igre oceni kot eno stopnjo težavnosti višje. Voznik mora torej opraviti met za Vožnjo s Standardno namesto Lahko (Easy) težavnostjo. Če bi poskušal isti manever na nestabiliziranem motornem kolesu, bi bil met za Vožnjo Težak (Hard).

Vrhunska vodljivost (Superior Handling) je lastnost. Če vozilo nima te lastnosti kot del svojega opisa, je privzeta standardna vodljivost za vsako vozilo velikosti Veliko (Large) in manjše. Ogromna (Huge) in Zelo velika (Enormous) vozila imajo po svoji naravi Zastrašujočo (Formidable) oziroma Herkulovsko (Herculean) vodljivost, mojster igre pa lahko odloči, da so določeni manevri preprosto nemogoči zaradi velikosti vozila.

##### Tabela izgube nadzora

| 1d100 | Rezultat |
| :-: | :-- |
| 01-25 | Zanašanje (Swerve). Izguba nadzora je začasna. Vozilo zmanjša hitrost za 1 stopnjo za 5 sekund. |
| 26-40 | Zdrs (Skid). Voznik se mora boriti, da ohrani vozilo pod nadzorom. Vozilo zmanjša hitrost za 2 stopnji za 10 sekund. |
| 41-50 | Hud zdrs (Severe Skid). Vozilo se obrne v napačno smer in obstoji za 15 sekund. |
| 51-60 | Prevrnitev (Roll). Vozilo zdrsi in se prevrne, pri čemer utrpi 3d10 škode na svoji Strukturi. Potniki morajo opraviti uspešne mete za VZD (Endurance) ali utrpijo 1d10 škode na 1d3 lokacijah zadetkov. |
| 61-70 | Huda prevrnitev (Severe Roll). Kot zgoraj, vendar vozilo utrpi 3d10+10 škode, potniki pa prejmejo 1d10 škode, tudi če je met za VZD uspešen, in 2d10, če ne uspe. |
| 71-80 | Odtis (Write-Off). Kot zgoraj, vendar je vozilo zmanjšano na 0 Strukture. Potniki utrpijo enako škodo kot pri Hudi prevrnitvi. |
| 81-90 | Eksplozija (Explosion). Kot zgoraj, vendar se gorivni sistem vozila vname in eksplodira v 1d20+10 sekundah. Če se ne morejo rešiti, potniki utrpijo dodatnih 1d6 škode z opeklinami na 1d6 lokacijah. |
| 91-98 | Takojšnja eksplozija (Immediate Explosion). Kot zgoraj, vendar je eksplozija takojšnja. |
| 99-00 | Katastrofalno trčenje (Catastrophic Crash). Potniki morajo uspešno vreči VZD ali so takoj ubiti. Škoda kot pri Odtisu je utrpela ne glede na to. |

---
## Vzorčna vozila

---

### Kopenska vozila

#### Prestrelec (Interceptor)

Navit luksuzni avtomobil, športni avtomobil ali podobno; ta avtomobil je zgrajen za hitrost in da v boju vrne toliko, kolikor dobi. To je vrsta vozila, na katero ljudje pomislijo, ko nekdo reče "vohunski avto".

| Prestrelec | |
| :- | :- |
| **Velikost / Tip** | Srednje vojaško |
| **Trup** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Vodljivost** | Lahka |
| **Lastnosti** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Orožje** | Razpršilec oljnega madeža, Razpršilec dima, Dvojno povezana srednja mitraljeza (2d6+3) |

<br>

---

#### Zasledovalni motocikel (Pursuit Motorcycle)

Lahek, hiter motocikel za hitre zasledovanja, zasledovalni motocikel nosi presenečenje – bodisi par povezanih mitraljezov bodisi dve raketi.

| Zasledovalni motocikel | |
| :- | :- |
| **Velikost / Tip** | Majhno civilno |
| **Trup** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Hitrost** | Hitro |
| **Vodljivost** | Lahka |
| **Lastnosti** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Orožje** | Dve raketi (4d6) ali Dvojno povezana lahka mitraljeza (2d6) |

<br>

---

#### Limuzina (Sedan Car)

Standardna limuzina s 4 vrati, ki ponuja dovolj prostora za udobno namestitev voznika in treh potnikov. Žrtvuje tovorni prostor za vključitev nadzornega paketa.

| Limuzina | |
| :- | :- |
| **Velikost / Tip** | Srednje civilno |
| **Trup** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro (Rapid) |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Orožje** | Brez |

<br>

---

#### Potopni avtomobil (Submersible Car)

Avtomobil za dve osebi, ki lahko preklopi na vodni ali potopni način za potovanje po ali pod vodo. Opremljen s spredaj nameščenim torpedom in na vrhu nameščenim raketnim sistemom zemlja-zrak.

| Potopni avtomobil | |
| :- | :- |
| **Velikost / Tip** | Srednje civilno |
| **Trup** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Orožje** | Raketa (5d6), Torpedo (4d10) |

<br>

---

#### Nadzorni kombi (Surveillance Van)

Navaden, neoznačen kombi, v katerem je ekipa agentov in paket avdio-vizualne opreme za snemanje.

| Nadzorni kombi | |
| :- | :- |
| **Velikost / Tip** | Veliko civilno |
| **Trup** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Hitrost** | Nežno (Gentle) |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Orožje** | Brez |

<br>

---

#### Taktično podporno vozilo (Tactical Support Vehicle)

Poltovornjak ali jeep s prostorom za dvočlansko posadko v kabini in strelcem, ki stoji v kesonu in upravlja vrtljivo nameščen srednji mitraljez.

| Taktično podporno vozilo | |
| :- | :- |
| **Velikost / Tip** | Srednje civilno |
| **Trup** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro (Rapid) |
| **Vodljivost** | Standardna |
| **Lastnosti** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Orožje** | Nameščen srednji mitraljez (2d6) |

<br>

---

### Plovila

#### Čoln za hitro vožnjo (Speedboat)

Tipičen čoln za hitro vožnjo, oborožen z zadaj nameščenim razpršilnikom min.

| Čoln za hitro vožnjo | |
| :- | :- |
| **Velikost / Tip** | Srednje civilno |
| **Trup** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Orožje** | Razpršilec min (5d6) |

<br>

---

#### Jahta (Yacht)

Vrsta luksuzne jahte, kakršno bi lahko imel oligarh. Verjetno opremljena z nadzornim paketom za zaščito pred sovražniki, ki poskušajo početi kaj neprimernega.

| Jahta | |
| :- | :- |
| **Velikost / Tip** | Ogromno civilno |
| **Trup** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Hitrost** | Počasi |
| **Vodljivost** | Zastrašujoča |
| **Lastnosti** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Orožje** | Brez |

<br>

---

### Letala/Vesoljska plovila

#### Dirigibil (Civilna zračna ladja)

Podobno kot Hindenburg, ta razred transkontinentalnih dirigibilov (in drugi iz tega razreda) meri 245 metrov v dolžino in zahteva posadko od 40 do 61 članov. Običajno lahko prevaža od 50 do 72 potnikov v luksuznih nastanitvah.

| Dirigibil | |
| :- | :- |
| **Velikost / Tip** | Zelo veliko civilno |
| **Trup** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Hitrost** | Težko (Ponderous) |
| **Vodljivost** | Herkulovska |
| **Lastnosti** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | Brez |
| **Orožje** | Brez |

<br>

---

#### Jurišni helikopter (Assault Helicopter)

Tradicionalni jurišni helikopter uporablja svojo napredno nadzorno tehnologijo za prestrezanje telefonskih in brezžičnih internetnih signalov ter sledenje posameznikom in vozilom, tudi v temi, prek FLIR. Poskusi izogibanja sledilcu s prikritostjo (Stealth) so Zastrašujoči (Formidable).

| Jurišni helikopter | |
| :- | :- |
| **Velikost / Tip** | Veliko vojaško |
| **Trup** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Hitrost** | Zmerno |
| **Vodljivost** | Lahka |
| **Lastnosti** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | Brez |
| **Orožje** | 1 Gatling puška (3d6), 4 rakete (5d6) |

<br>

---

#### Večnamenski lovec (Multi-Role Fighter)

Ta dvosedežni kopenski lovec (podobnega tipa kot De Havilland Mosquito) je znan po svoji zmogljivosti in vsestranskosti. Njegov prostor za bombe lahko nosi bodisi dve 250 lb. bombi (obravnavajte kot srednje izstrelke z dosegom 0) ali en sam torpedo.

| Večnamenski lovec | |
| :- | :- |
| **Velikost / Tip** | Veliko vojaško |
| **Trup** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Hitrost** | Zmerno |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Ščiti** | Brez |
| **Orožje** | 4 spredaj nameščene Gatling puške (4d6+3), 1 prostor za bombe (6d10 - glej opis) |

<br>

---

#### Medzvezdna tovorna ladja (Interstellar Freighter)

Za ta lahki transport sta potrebna najmanj dva člana posadke, s prostorom za do štiri dodatne potnike. Tukaj je navedena standardna različica, vendar bodo mnogi lastniki uporabili svoje "posebne modifikacije", kot so skrit tovorni prostor, izboljšana zmogljivost, vrhunska vodljivost, odpornost na EMP, prikritost in tako naprej.

| Medzvezdna tovorna ladja | |
| :- | :- |
| **Velikost / Tip** | Srednje civilno vesoljsko plovilo |
| **Trup** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Hitrost** | Hitro (Parsec faktor 3) |
| **Vodljivost** | Standardna |
| **Lastnosti** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Ščiti** | 8 |
| **Orožje** | 2x štirikratno nameščeni laserski topovi (5d6) |

<br>

---

#### Enota za splošne stike (General Contact Unit)

Ta izjemno visokotehnološka zvezdna ladja je fizična predstavitev zelo naprednega umetnega Uma, ki ima obliko dva kilometra dolge serije terensko povezanih modulov. Moduli so individualno usmerjeni in vključujejo habitate, gradbene objekte, tovorne prostore, predelavo hrane, prostore za prosti čas, hangarje in celo nekatere skrivnostne enote, o katerih inteligenca ladje redko, če sploh kdaj, razpravlja. Ne potrebuje človeške posadke, vendar lahko z lahkoto podpira potniško populacijo do 100.000 ljudi. Mnogi potniki se rodijo in umrejo na krovu kontaktne enote: mnogi so tranzitni, prihajajo in odhajajo, kakor želijo.

| Enota za splošne stike | |
| :- | :- |
| **Velikost / Tip** | Kolosalno civilno vesoljsko plovilo |
| **Trup** | 20 |
| **Struktura** | 10.000 |
| **Sistemi** | 6 |
| **Hitrost** | Zmerno (Parsec faktor 4. Na tej ravni tehnologije je faktor enak 1 uri) |
| **Vodljivost** | Zastrašujoča |
| **Lastnosti** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Ščiti** | 30 |
| **Orožje** | Brez, o katerem bi želela razpravljati |

<br>