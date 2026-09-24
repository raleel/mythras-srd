# Vozila

Vozila u _Mythras Imperativu_ tretiraju se na polu-apstraktan način. U suštini, ona su pozadinski alati, koji se koriste da prevezu likove od tačke A do tačke B, uz malu potrebu za detaljnim opisom ili statistikom. Ipak, povremeno će Voditeljima igre (VI) trebati detalji za vozila kada ih je neophodno predstaviti u potjerama ili borbenim situacijama.

Pravila u ovom odjeljku omogućavaju predstavljanje većine vrsta vozila, ali na apstraktan način koji je zamišljen da dozvoli fleksibilnost i unaprijedi pripovijedanje. Svemirski brodovi i letjelice su malo drugačiji, iako se zasnivaju na sličnim principima.

---
## Statistika

Sva vozila su opisana kroz njihovu Strukturu, Trup, Brzinu, Sisteme, Osobine i Štitove (ako postoje u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jednu od šest ocjena Veličine koja određuje vrijednost ili raspon ostalih karakteristika. Zbog svoje veće suštinske veličine i neprijateljskih uslova u svemiru, svemirski brodovi imaju svoj vlastiti raspon vrijednosti.
- **[Trup](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Oklopne poene (OP).
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Pogodbene poene (PP) vozila.
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima sa naprednom tehnologijom manipulacije energijom, mogu postojati štitovi koji štite vozilo, ali koji se mogu istrošiti pod kontinuiranom paljbom.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući pogon, odjeljak za posadu i tako dalje.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocjenu Brzine.
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo može imati i jednu ili više Osobina. Osobine, poput Sposobnosti dodijeljenih Stvorenjima u pravilima _Mythras Imperativa_, ili Osobina Stilova borbe, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružje](0006_Vehicles.md?id=weapons):** Slično Osobini, vozilo može biti opremljeno oružjem u skladu sa mogućnostima okruženja. Neki predloženi primjeri i vrijednosti detaljno su navedeni u nastavku.


---
### Veličina trupa, tip i struktura

Veličina i svrha vozila utiču na debljinu trupa i otpornost njegove unutrašnje strukture. Motocikl, na primjer, ima minimalan trup, budući da je napravljen za brzinu i agilnost. Kopneni oklopnjak (masivni, gusjenični ili točkaški oklopni behemot, pokretan parnim ili dizel motorima), budući da je mnogo veće vozilo dizajnirano za bojno polje, ima mnogo veći trup. Uporedne veličine trupova (i koliko udaraca oružja tipično mogu podnijeti), sažete su u tabelama Veličina vozila i Trup ispod.

Kada god vozilo pretrpi štetu, dolazna šteta se smanjuje za vrijednost njegovog Trup-a. Svaka preostala šteta se oduzima od poena Strukture vozila i ima procentualnu šansu, jednaku penetrirajućoj šteti, da utiče na Sisteme. Ako se Struktura vozila ikada smanji na nulu, ono je ili potpuno uništeno ili toliko teško oštećeno da se mora rashodovati.

##### Kopneni trupovi 

| Veličina | Struktura | Vrijednost civilnog trupa | Vrijednost vojnog trupa | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 1-20 | 1-3 | 4-6 | Motocikl, motocikl sa prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednja | 21-40 | 1-6 | 7-9 | Sedan, furgon, pikap, luksuzni automobil, luksuzni sportski automobil, "muscle" automobil, limuzina, čamac za spasavanje, brzi čamac, zmaj, autogiro |
| Velika | 41-60 | 4-9 | 10-12 | Kamion, produžena limuzina, SUV, autobus, putničko vozilo, lična letjelica, jedrilica, kruzer za razonodu, tenk, helikopter, podmornica |
| Ogromna | 61-80 | 7-12 | 13-15 | Šleper, putnički avion, mlaznjak, plovilo obalske straže, jahta |
| Kolosalna | 81-100 | 10-15 | 16-18 | Voz, kruzer, ratni brod |

##### Trupovi svemirskih brodova 

| Veličina | Struktura | Vrijednost civilnog trupa | Vrijednost vojnog trupa | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 10-50 | 4-9 | 10-12 | Jednosjedni lovac |
| Srednja | 51-150 | 7-12 | 13-15 | Laki teretnjak, šatl |
| Velika | 151-450 | 10-15 | 16-18 | Teški teretnjak, krstarica |
| Ogromna | 451-1350 | 13-18 | 19-21 | Prateća fregata, laka bojna krstarica |
| Kolosalna | 1351-4050 | 16-21 | 21-24 | Generacijski brod, teška bojna krstarica |
| Gigantska | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, bojna stanica za uništavanje planeta |


---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za ona vozila koja ih mogu montirati. Štitovi rade malo drugačije od Trup-a, zbog svoje ablativne prirode. Ako je dolazna šteta jednaka ili manja od vrijednosti štitova, onda se u potpunosti blokira. Ako šteta premaši vrijednost štita, sav višak smanjuje jačinu štita za taj iznos.

_Na primjer, vojni transporter ima jačinu energetskog štita od 12 poena. Ako bi transporter bio pogođen laserom za 11 štete, ona jednostavno ne prodire i nema dodatni efekat. S druge strane, ako bi transporter bio pogođen eksplozijom koja nanosi 15 štete, višak od tri poena bi smanjio jačinu štita na 9._

Jednom kada jačina deflektorskog štita padne na nulu, on se urušava. Svaka preostala šteta prelazi na trup.

---
### Sistemi

Svaki put kada vozilo pretrpi štetu koja probije njegov trup, postoji šansa, jednaka penetrirajućoj šteti, da je pogođen vitalni Sistem.

_Na primjer, 10 štete se nanosi brzom čamcu - vozilu sa 3 Trup-a i 24 Strukture. Trup se računa kao oklop koji smanjuje štetu na 7. Ovo se uklanja od 24 poena Strukture i postoji 7% šanse da se ošteti jedan od sistema vozila._

Šteta koju Sistem može podnijeti zasniva se isključivo na veličini vozila. Ovo se modelira brojem pogodaka koje Sistem može primiti, umjesto stvarnom količinom štete. Jedan pogodak u Sistem na Malom vozilu će trenutno uništiti taj Sistem. Potrebna su dva pogotka da se unište sistemi Srednjeg vozila, tri za Veliko vozilo, i tako dalje. Pogledajte [Tabelu oštećenja sistema](0006_Vehicles.md?id=system-damage-table) ispod.

Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije srazmjeran broju primljenih pogodaka - bilo procentualnim smanjenjem ili penalom u Stepenu na zadatke Sistema. Specifičan efekat zavisi od toga šta podsistem kontroliše, kao što je detaljno opisano u [Tabeli oštećenja komponenti sistema](0006_Vehicles.md?id=system-component-damage-table) ispod. U zavisnosti od toga koji je Sistem pogođen, efekti mogu biti katastrofalni.

_Na primjer, Kopneni oklopnjak - Kolosalno vozilo sa 5 pogodaka sistema - pogođen dvaput u Pogon izgubio bi 40% svoje snage i smanjio bi svoju Sporu brzinu za dva Stepena na Tromu. Slično tome, Veliki teretnjak - sa 3 pogotka sistema - primivši dva pogotka u Motor/Sistem goriva imao bi penal od dva Stepena na Brzinu kao i na upotrebu Elektronskih sistema. Treći pogodak bi uništio Motor/Sistem goriva, a sa njim i brod._


<details>

<summary>* Erata zajednice</summary>

---

#### Šteta


_Originalni tekst ovdje je bio dalje. Postavljen direktno nakon odjeljka Sistemi, nepotrebno ponavlja prethodni pasus._

- _"Šteta koja premašuje Trup prodire u vozilo, oštećujući Strukturu i potencijalno utičući na jedan ili više sistema. U zavisnosti od veličine vozila, šteta može biti manja ili katastrofalna._
- _Na primjer, Veliko vozilo može primiti do dva pogotka u Sistem kao što je njegov Pogon. Treći pogodak funkcionalno uništava Pogon. Svaki put kada sistem primi pogodak, ili gubi procenat svoje funkcije kao što je opisano u koloni Gubitak po pogotku u Tabeli oštećenja sistema ispod, ili osnovna funkcija (kao što su Pogon, Pilotiranje, Komunikacije, i tako dalje) postaje teža za jedan Stepen težine po primljenom pogotku."_

_Gornji pasusi su uklonjeni i na njihovo mjesto dolazi skraćeno uređivanje koje poziva na drugi primjer efekta Sistema._

---

</details>

##### Tabela oštećenja sistema 

| Veličina | Pogodaka sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 100% - Uništeno |
| Srednja | 2 | 1 Stepen ili 50% |
| Velika | 3 | 1 Stepen ili 33% |
| Ogromna | 4 | 1 Stepen ili 25% |
| Kolosalna | 5 | 1 Stepen ili 20% |
| Gigantska | 6 | 1 Stepen ili 16% |


<details>

<summary>* Erata zajednice</summary>

---

##### Tabela oštećenja sistema (Original) 

| Veličina | Pogodaka sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 1 Stepen ili 50% |
| Srednja | 2 | 1 Stepen ili 33% |
| Velika | 3 | 1 Stepen ili 25% |
| Ogromna | 4 | 1 Stepen ili 20% |
| Kolosalna | 5 | 1 Stepen ili 16% |
| Gigantska | 6 | 1 Stepen ili 10% |

##### Tabela veličina vozila (iz [Veličina trupa, tip i struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogodaka sistema |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Gigantska | 6 |

_Originalna pravila i primjeri su nedosljedni:_
- _"Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak u funkcionalnosti. Ovo je jednako proporciji trenutnih pogodaka u odnosu na njegovu ukupnu sposobnost. Tako bi Kolosalno vozilo pogođeno dvaput u Pogon izgubilo 40% svoje snage (2 pogotka od maksimalnih 5)."_
   - _Ovo sugeriše da bi Kolosalno vozilo prikazano sa 5 pogodaka sistema trebalo izgubiti 20% sa svakim pogotkom - ali tabela kaže 16%._
- _"Na primjer, Veliko vozilo može primiti do tri pogotka u sistem kao što je njegov Pogon. Četvrti pogodak funkcionalno uništava Pogon."_
  - _"Ovo sugeriše - kao i tabela - 25% štete po pogotku sistema, ali Velika vozila mogu primiti samo 3 pogotka sistema prema istoj tabeli._
- _Iako nije nedosljedna, Tabela veličina vozila bila je suvišna; pojavljujući se ponovo u punijem obliku (dodajući kolonu Gubitak po pogotku) samo nekoliko redova kasnije._

_Ovo otežava postojanje dosljednog pravila. Da bi se riješili ovi problemi, vrijednosti i primjeri su promijenjeni da se poklapaju, a Tabela veličina vozila je uklonjena._

---

</details>


##### Tabela oštećenja komponenti sistema 

| 1d10 | Sistem | Rezultat oštećenja | Rezultat uništenja |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina posjeda ili opreme uskladištene u potpalublju, srazmjerna šteti, je uništena. | Sav teret je uništen. |
| 2 | Komunikacije | Bacanja na komunikacije trpe jedan dodatni Stepen težine svaki put kada su oštećeni. | Vozilo više ne može komunicirati ili ometati neprijateljske senzore. |
| 3 | Kontrole | Bacanja na upravljanje čamcem, vožnju ili pilotiranje trpe jedan dodatni Stepen težine svaki put kada su oštećeni; potrebno je trenutno bacanje na Kontrolu. | Vozilom se više ne može upravljati niti mijenjati kurs. |
| 4 | Pogon | Brzina smanjena za iznos srazmjeran šteti. | Vozilo se trenutno zaustavlja; letjelice se ruše. |
| 5 | Posada | Broj putnika srazmjeran šteti postaje žrtva. Pogođeni trpe Tešku ranu i moraju uspjeti u bacanju na Izdržljivost ili biti trenutno ubijeni. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena za iznos srazmjeran šteti. Elektronski sistemi su za jedan Stepen težine teži za upotrebu. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Bacanja na senzore, navigaciju i napade oružjem trpe jedan dodatni Stepen težine svaki put kada su oštećeni. | Vozilo postaje slijepo. |
| 8 | Oružje | Broj oružanih sistema srazmjeran šteti postaje neoperativan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Nijedan | Nijedan sistem nije pogođen; samo šteta na Strukturi. | N/P |

<details>

<summary>* Erata zajednice</summary>

---

##### Tabela oštećenja komponenti sistema (Motor/Gorivo)

_Originalni rezultat je bio sljedeći: "Maksimalna brzina je prepolovljena..." Ovo je u suprotnosti sa opštim pravilom o penalima štete srazmjerno šteti Sistema: 25% štete = 25% penala. Štaviše, puna pravila u Mythras Companion-u ne pominju ovo prepolovljavanje Brzine._

_Kao rezultat, tekst je zamijenjen istim unosom iz Sistema pogona: "Brzina smanjena za iznos srazmjeran šteti."_

---

</details>


---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora i inercije (da navedemo samo neke) složena pitanja, potrebno je neko pojednostavljenje, pa se vozilima daje apstraktna ocjena brzine. Karakteristika Brzina treba se koristiti samo za grublju procjenu da li jedno vozilo može preteći ili sustići drugo.

Ocjena brzine predstavlja nominalnu operativnu stopu vozila. U hitnim situacijama ovaj učinak se može povećati za jedan stepen, uz rizik od habanja ili oštećenja motora. Iako se ista tabela koristi za sve tipove vozila, treba primijeniti zdrav razum tako da se upoređuju samo vozila iste klase. Na primjer, ako svemirski brod i sportski automobil imaju istu stopu ubrzanja Brzo, tada bi trebalo biti očigledno da je svemirski brod komparativno brži.

Povećanje Brzine vozila iznad njegove standardne vrijednosti moguće je uz uspješno bacanje na Vožnju. Obično je ova dodatna brzina održiva samo na kratak period – ne više od 1d6 minuta prije nego što vozilo mora pasti na svoju standardnu brzinu ili rizikovati oštećenje pogona. Kritičan uspjeh na bacanju na Vožnju omogućava da se period veće brzine poveća na 1d12 minuta.

Vozač može pokušati da poveća brzinu vozila za 2 stepena, ali to zahtijeva Herculean bacanje na Vožnju i maksimalno koliko vozilo može održati ovu brzinu je 1d3 minuta: Kritičan uspjeh neće produžiti trajanje povećane brzine.

##### Tabela ocjene brzine 

| Ocjena brzine | Maksimalna brzina za |
| :-- | :-: |
| Trom | Kolosalna |
| Spora | |
| Sporo | Ogromna |
| Osrednja | |
| Blaga | Velika |
| Umjerena | |
| Brza | Srednja |
| Brzo | |
| Hitra | Mala |


---
### Osobine

Maksimalan broj osobina koje vozilo može imati zavisi od veličine i tipa trupa.

Svako vozilo ima inherentnu osobinu: način putovanja za koji je prvenstveno dizajnirano. Prema tome, letjelice inherentno posjeduju osobinu Letjelica, čamci osobinu Pomorsko, i tako dalje. Ova inherentna osobina se ne računa u dostupan broj osobina. Međutim, ako vozilo treba da uključi drugi način putovanja — leteća podmornica na primjer, tada bi osobina Letjelica morala biti odabrana kao jedna od njegovih dostupnih osobina.

Neke osobine možda neće biti dostupne, u zavisnosti od tehnološkog nivoa okruženja; Voditelji igre moraju donijeti sopstvene odluke o tome koje se osobine mogu primijeniti.

##### Tabela dodjele osobina vozila 

| Veličina | Maksimalno osobina |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Gigantska | 6 |

#### Letjelica

Vozilo je sposobno za atmosferski let.

#### Terensko

Ova osobina se mora koristiti sa kopnenim vozilima. Vozilo može prelaziti negostoljubiv, težak i strm teren, koristeći bilo gusjenice, napredni ovjes i sisteme pogona, ili snažne pogonske diferencijale.

#### Ukopavanje

Vozilo je dizajnirano da se ukopava i tunelira kroz zemlju. Može dostići maksimalnu dubinu jednaku svojoj Ocjeni trupa x5 metara.

#### Kamuflirano

Vozilo posjeduje ili kamuflažnu boju ili mimetičke senzore koji mu omogućavaju da se stopi sa okruženjem. Pokušaji vizuelnog uočavanja vozila su za jedan stepen teži.

#### Teretno

Vozilo je dizajnirano posebno za prevoz tereta, a ne putnika. Putnički odjeljci su svedeni na minimum, a ostatak korisnog prostora vozila posvećen je smještaju tereta sa odgovarajućim sekcijama, alatima, pa čak i ekološkim uslovima (kao što su zamrzivači za transport kvarljive robe). Kada je natovareno teretom, brzina vozila je dva stepena niža nego što bi njegova veličina trupa inače dozvolila.

#### Nosač

Vozilo je dizajnirano posebno za nošenje manjih, lakše posadom upravljanih, ili eventualno daljinski upravljanih vozila civilne ili vojne prirode. Svako vozilo koje posjeduje ovu osobinu mora biti barem Kolosalno. Broj nošenih malih letjelica može varirati prema vrsti misije i svrsi, ali može biti od najmanje 10 do onoliko koliko iznosi ocjena Strukture vozila.

#### Građevinsko

Vozilo je opremljeno za teške građevinske radove. Sva vozila sa ovom osobinom imaju i osobinu Terensko, ali je brzina dva stepena niža nego što bi njihova veličina trupa inače dozvolila. Vozilo je opremljeno alatima prikladnim za zadatak kao što su kranovi, kašike bagera, kiperi i tako dalje.

#### Otporno na EMP

Vozilo je zaštićeno od napada elektromagnetnim impulsom.

#### Poboljšane performanse

Ocjena brzine vozila je jedan stepen viša od maksimuma za njegovu veličinu.

#### Sjedište za izbacivanje

U slučaju nužde, sjedište za izbacivanje katapultira putnike nekoliko stotina metara u zrak, a zatim otvara padobran kako bi omogućilo sigurno slijetanje. Padobran je opcioni. Nije preporučljivo za helikoptere (Kamov Ka-52 Alligator je značajan izuzetak).

#### FTL

Samo za svemirske brodove. Letjelica je opremljena motorom za brzinu veću od svjetlosti (bilo da je to hiper-pogon, warp-pogon, generator crvotočina ili slično). FTL pogon ima zasebnu ocjenu Brzine koja u suštini mjeri stopu kojom svemirski brod može preći jedan parsek (3,26 svjetlosnih godina, ili 31 trilion kilometara ili 19 triliona milja), kako slijedi:

##### Tabela FTL brzine 

| Ocjena brzine | Faktor za prelazak 1 parseka |
| :-- | :-: |
| Trom | 10 |
| Spora | 8 |
| Sporo | 7 |
| Osrednja | 6 |
| Blaga | 5 |
| Umjerena | 4 |
| Brza | 3 |
| Brzo | 2 |
| Hitra | 1 |

Vrijeme faktora je na Voditelju igre da odluči, u zavisnosti od toga koliko je napredan FTL razvoj u okruženju. Na primjer, osnovni faktor bi mogao biti 1 dan, što znači da brodu sa Tromim FTL pogonom treba 10 dana da završi putovanje, dok plovilo sa Hitrim FTL pogonom završava put za 1 dan. Drugdje, gdje je FTL tehnologija značajno manje efikasna, vrijeme faktora bi se moglo mjeriti u mjesecima, a ne danima.

Podrazumijeva se da brod ima rezerve goriva da obavi povratno putovanje ili sredstva za dopunu goriva na odredištu.

Podrazumijeva se da bilo koja veličina svemirskog broda može biti opremljena FTL pogonom, iako, opet, to zavisi od okruženja.

FTL pogoni se ne mogu aktivirati unutar 1,5 astronomske jedinice od zvijezde (oko 225 miliona kilometara, ili 270 miliona milja). To znači da brodovi moraju koristiti podsvjetlosni pogon da se pomjere na udaljenost od otprilike Marsa prije aktiviranja FTL sistema.

#### Kopneno vozilo

Vozilo je sposobno za kretanje po tlu.

#### Lebdenje

Vozilo lebdi iznad tla koristeći ili vazdušni jastuk ili antigravitacijski repulzor.

#### Luksuzno

Vozilo je dizajnirano posebno za prevoz putnika na određenom nivou luksuza. Višak teretnog prostora je prepušten luksuznom putničkom smještaju, bazenima, đakuzijima, dodatnoj posadi koja ispunjava hirove putnika, i tako dalje.

#### Šine

Vozilo se oslanja na šinski sistem. Vozila sa ovom osobinom prirodno mogu postići ocjenu Brzine tri stepena višu nego što bi njihova veličina trupa inače dozvolila, ali su očigledno ograničena na kretanje samo po šinskom sistemu.

#### Otporno

Svi sistemi mogu podnijeti jedan dodatni pogodak više nego što je normalno određeno Veličinom. Ova Osobina se može slagati — tako Otporno 2 ukazuje da sistemi mogu podnijeti 2 pogotka više nego uobičajeno po cijeni od dva poena Osobina.

#### Pomorsko

Vozilo je plovno na vodi.

#### Svemirska letjelica

Vozilo je zapečaćeno protiv vakuuma i zaštićeno od kosmičkog zračenja i može, u zavisnosti od dizajna, biti sposobno za napuštanje i ponovni ulazak u atmosferu, te održavanje leta unutar atmosfere.

#### Prikriveno

Samo za letjelice. Vozilo je dizajnirano da izbjegne otkrivanje radarom i drugim senzorskim sistemima dugog dometa. Pokušaji uočavanja vozila pomoću elektronskih senzora su za jedan stepen teži.

#### Podmorsko

Vozilo je sposobno za potapanje ispod površine okeana do operativne dubine od svoje Ocjene trupa x10 metara. Dubina urušavanja — apsolutni maksimum koji podmornica može doseći a da ne bude zgnječena — iznosi 1,5 puta njena operativna dubina.

#### Superiorno upravljanje

Upravljanje vozilom je ocijenjeno kao Lako.

#### Nadzorni paket

Vozilo ima ugrađen računar, baznu stanicu za komunikaciju, prijemnik za signale prislušnih uređaja i aparat za presretanje obližnjih signala pametnih telefona u krugu od 100 metara.#### Tough

Civilno vozilo sa ovom osobinom crpi svoj Trup (Hull) iz kolone Vojna vozila i automatski ima maksimalnu Strukturu. Vojno vozilo sa ovom osobinom crpi svoj Trup i Strukturu iz sljedećeg reda ispod.

#### Vučna zraka (Tractor Beam)

Samo za svemirske letjelice. Brod je opremljen vučnom zrakom koja može uhvatiti i privući vozila sa ocjenom trupa do dva stepena manjom od sopstvene. Prema tome, ogromna (Huge) zvjezdana letjelica može privući i držati trup veličine do Srednje (Medium).

#### VTOL

Vertikalno polijetanje/slijetanje. Ova osobina je inherentna za helikoptere i slična vozila koja koriste kombinaciju rotora za stvaranje uzgona. Kada se primijeni na letjelice sa fiksnim krilima, označava upotrebu fiksnih ili podesivih potisnika za kontrolu položaja u vazduhu, uspona i spuštanja.

#### Vodeno (Waterborne)

Vozilo se pokreće pomoću zglobnih nogu. Vozila hodači (Walker) su ograničena na brzinu od "Lagane" (Gentle), bez obzira na njihovu Veličinu. Međutim, hodači se mogu graditi do visina koje bi bile jednostavno nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za kretanje ispod vode.

#### Naoružano (Weaponized)

Vozilo je prilagođeno za smještaj naoružanja. Sistemi naoružanja su opisani u nastavku u sekciji [Naoružanje](0006_Vehicles.md?id=weapons).


---
## Naoružanje

Obično su samo vojni trupovi dizajnirani da prime naoružanje (čvrste tačke, skladištenje municije, kontrolni sistemi). Osobina 'Naoružano' se može uzeti za civilna vozila koja možda imaju potrebe za naoružanjem.

Maksimalan broj sistema naoružanja koje vozilo može podržati jednak je 1/10 njegovih Strukturnih bodova (tako da vozilo sa 40 Strukture može podržati 4 sistema naoružanja, ako je u pitanju vojno vozilo ili naoružano civilno vozilo).

Sistemi naoružanja zavise od Veličine vozila. Maksimalni tip sistema naoružanja za različite Veličine prikazan je u tabelama ispod.


##### Tabela naoružanja prema Veličini

| Veličina | Terestričko (Kopneno) | Svemirska letjelica |
| :-- | :-- | :-- |
| Malo | Lako oružje (npr. automatska puška) | Srednje oružje (npr. mitraljez, raketni bacač) |
| Srednje | Srednje oružje (npr. mitraljez, raketni bacač) | Oružje na kupoli/teško oružje (npr. teški povezani mitraljezi, mini-topovi) |
| Veliko | Oružje na kupoli/teško oružje (npr. teški povezani mitraljezi, mini-topovi) | Baterija oružja (npr. bojna artiljerija) |
| Ogromno | Baterija oružja (npr. bojna artiljerija) | Napredno oružje (npr. raketni sistemi) |
| Enormno | Napredno oružje (npr. raketni sistemi) | Oružje montirano na kičmu (samo jedno) |
| Kolosalno | NA | Oružje montirano na kičmu (do 3) |

##### Primjer statistike naoružanja
 
| Oružje | Šteta | Domet | Brzina paljbe | Municija/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| 50-inčni top | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-top/Gatling top | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Srednja raketa/torpedo | 6d10 | Maks. domet 200km | 1 | 1/5 |
| Velika/krstareća raketa | 6d10+10 | Maks. domet 1000km | 1 | 1/10 |
| Laser/Plazma top | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laser/plazma top | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artiljerijska baterija | 5d6+6 | Maks. domet 50km | 1 | 1/5 |
| Baterija na kičmi | 10d6+6 | Maks. domet 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Brzine paljbe su za pojedinačnu paljbu, poluautomatsku i potpuno automatsku._

_Municija predstavlja kapacitet paljbe prije potrebe za ponovnim punjenjem. Punjenje je vrijeme ponovnog punjenja u Borbenim rundama, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevrisanje

Evasivni ili nagli manevri zahtijevaju uspješno bacanje na Upravljanje/Pilotiranje kako bi se osiguralo da vozač ili pilot zadrži kontrolu nad vozilom. Većina vozila je dizajnirana i napravljena da izdrži povremena naprezanja i pritiske, ali Gospodar igre može odlučiti da određeni manevar zahtijeva bacanje sa višim stepenom težine, u zavisnosti od toga koliko je ambiciozan. Neuspjeh znači gubitak kontrole nad vozilom: bacite na tabeli Gubitak kontrole.

Imajte na umu da se Tabela gubitka kontrole odnosi samo na kopnena vozila. Slični efekti se mogu primijeniti na vazdušna i svemirska vozila, ali će Gospodari igre morati prilagoditi obrazloženje za specifičan efekat. Na primjer, letjelica bi umjesto proklizavanja mogla ući u kovitlac.

Takođe, inherentno upravljanje vozilom može imati dodatni uticaj na bacanje za Upravljanje. Upravljanje može biti Lako, Standardno, Teško, Zastrašujuće ili Herkulsko i određuje početnu tačku za bacanje Upravljanja prilikom izvođenja manevra. Stepen težine manevra se zatim primjenjuje na upravljanje kako bi se odredila konačna težina.

Na primjer, motocikl visokih performansi ima ugrađene žiro-stabilizatore koji mu daju Lako upravljanje. Vozač želi izvesti okret od 180 stepeni proklizavanjem kako bi izbjegao gonioca, manevar koji Gospodar igre ocjenjuje kao jedan stepen težine viši. Vozač stoga mora izvesti svoje bacanje za Upravljanje po Standardnoj, a ne Lakoj težini. Da je pokušao isti manevar na motociklu bez stabilizacije, bacanje za Upravljanje bi bilo Teško.

Superiorno upravljanje je Osobina. Ako vozilo nema ovu osobinu kao dio svog opisa, onda je zadana vrijednost Standardno upravljanje za bilo koje vozilo veličine Veliko i manje. Ogromna i Enormna vozila inherentno imaju osobinu upravljanja Zastrašujuće i Herkulsko, respektivno, a Gospodar igre ima slobodu da presudi da su određeni manevri jednostavno nemogući za postizanje zbog veličine vozila.

##### Tabela gubitka kontrole

| 1d100 | Rezultat |
| :-: | :-- |
| 01-25 | Skretanje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 stepen na 5 sekundi. |
| 26-40 | Proklizavanje. Vozač se mora boriti da zadrži kontrolu nad vozilom. Vozilo smanjuje brzinu za 2 stepena na 10 sekundi. |
| 41-50 | Ozbiljno proklizavanje. Vozilo završava okrenuto u pogrešnom smjeru i zaustavljeno na 15 sekundi. |
| 51-60 | Prevrtanje. Vozilo proklizava i prevrće se, trpeći 3d10 štete na svojoj Strukturi. Putnici moraju uspješno baciti na Izdržljivost ili pretrpjeti 1d10 štete na 1d3 lokacije tijela. |
| 61-70 | Ozbiljno prevrtanje. Kao iznad, ali vozilo trpi 3d10+10 štete, a putnici primaju 1d10 štete čak i ako je bacanje na Izdržljivost uspješno, i 2d10 ako ne uspije. |
| 71-80 | Totalka (Write-Off). Kao iznad, ali vozilo je svedeno na 0 Strukture. Putnici trpe istu štetu kao kod Ozbiljnog prevrtanja. |
| 81-90 | Eksplozija. Kao iznad, ali sistem goriva vozila se zapali i eksplodira u roku od 1d20+10 sekundi. Ako ne uspiju izaći na vrijeme, putnici trpe dodatnih 1d6 štete od opekotina na 1d6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao iznad, ali eksplozija je trenutna. |
| 99-00 | Katastrofalan udes. Putnici moraju uspješno baciti na Izdržljivost ili biti trenutno ubijeni. Šteta kao za Totalku se trpi bez obzira na ishod. |


---
## Primjeri vozila

---

### Kopnena vozila

#### Presretač (Interceptor)

Pojačani luksuzni automobil, sportski automobil ili slično, ovaj automobil je napravljen da ide brzo i da pruži isto koliko primi u borbi. Ovo je vrsta vozila na koju ljudi pomisle kada neko kaže "špijunski automobil".

| Presretač | |
| :- | :- |
| **Veličina / Tip** | Srednje Vojno |
| **Trup** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Lako |
| **Osobine** | [Sjedište sa katapultom](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Naoružanje** | Dozator naftne mrlje, Dozator dima, Dvostruko povezani srednji mitraljezi (2d6+3) |

<br>

---

#### Potjerački motocikl

Lagan, brz motocikl za brze potjere, Potjerački motocikl nosi iznenađenje – ili par povezanih mitraljeza ili dvije rakete.

| Potjerački motocikl | |
| :- | :- |
| **Veličina / Tip** | Malo Civilno |
| **Trup** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Brzina** | Brza |
| **Upravljanje** | Lako |
| **Osobine** | [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Naoružanje** | Dvije rakete (4d6) ili dvostruko povezani laki mitraljezi (2d6) |

<br>

---

#### Limuzina (Sedan Car)

Standardna limuzina sa 4 vrata sa dovoljno prostora za udoban smještaj vozača i tri putnika. Žrtvuje prtljažni prostor kako bi se ugradio nadzorni paket.

| Limuzina | |
| :- | :- |
| **Veličina / Tip** | Srednje Civilno |
| **Trup** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Rapidna |
| **Upravljanje** | Standardno |
| **Osobine** | [Nenametljivo](0006_Vehicles.md?id=unobtrusive), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite) |
| **Naoružanje** | Nema |

<br>

---

#### Podvodni automobil

Automobil za dvije osobe koji se može prebaciti u vodeni ili podvodni režim za kretanje po površini ili ispod vode. Dolazi sa prednjim torpedom i raketom zemlja-vazduh montiranom na krovu.

| Podvodni automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje Civilno |
| **Trup** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podvodno](0006_Vehicles.md?id=submersible), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Naoružanje** | Raketa (5d6), Torpedo (4d10) |

<br>

---

#### Nadzorni kombi

Običan, neoznačen kombi u kojem se nalazi tim agenata i paket opreme za audio-vizuelno snimanje.

| Nadzorni kombi | |
| :- | :- |
| **Veličina / Tip** | Veliko Civilno |
| **Trup** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Brzina** | Lagana |
| **Upravljanje** | Standardno |
| **Osobine** | [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Čvrsto](0006_Vehicles.md?id=tough) |
| **Naoružanje** | Nema |

<br>

---

#### Taktičko vozilo za podršku

Kamionet ili džip sa prostorom za dvočlanu posadu u kabini i strijelcem koji stoji u zadnjem dijelu i rukuje srednjim mitraljezom montiranim na okretnici.

| Taktičko vozilo za podršku | |
| :- | :- |
| **Veličina / Tip** | Srednje Civilno |
| **Trup** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Brzina** | Rapidna |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Naoružanje** | Montirani srednji mitraljez (2d6) |


<br>

---

### Vodena plovila

#### Gliser (Speedboat)

Tipičan gliser, naoružan dozatorom mina montiranim pozadi.

| Gliser | |
| :- | :- |
| **Veličina / Tip** | Srednje Civilno |
| **Trup** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Naoružanje** | Dozator mina (5d6) |

<br>

---

#### Jahta

Ovakvu vrstu luksuzne jahte bi mogao posjedovati oligarh. Vjerovatno opremljena nadzornim paketom za zaštitu od neprijatelja koji pokušavaju uraditi nešto nedozvoljeno.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Ogromno Civilno |
| **Trup** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Brzina** | Spora |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Vodeno](0006_Vehicles.md?id=waterborne) |
| **Naoružanje** | Nema |


<br>

---

### Letjelice/Svemirske letjelice

#### Dirigible (Civilni vazdušni brod)

Slično Hindenburgu, ova klasa transkontinentalnog dirigiblea (i ostali njegove klase) dugačka je 245 metara i zahtijeva posadu od 40 do 61 osobe. Obično može prevoziti 50 do 72 putnika u luksuznom smještaju.

| Dirigible | |
| :- | :- |
| **Veličina / Tip** | Enormno Civilno |
| **Trup** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Brzina** | Teška (Ponderous) |
| **Upravljanje** | Herkulsko |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Naoružanje** | Nema |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter koristi svoju naprednu nadzornu tehnologiju za presretanje telefonskih i bežičnih internet signala, te praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbjegavanja praćenja putem prikrivenosti (Stealth) su Zastrašujući.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliko Vojno |
| **Trup** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Brzina** | Umjerena |
| **Upravljanje** | Lako |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Prikrivenost](0006_Vehicles.md?id=stealth), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Naoružanje** | 1 Gatling top (3d6), 4 rakete (5d6) |

<br>

---

#### Višenamjenski lovac

Ovaj dvosjedni lovac baziran na kopnu (sličan po tipu De Havilland Mosquito) dobro je poznat po svojim performansama i svestranosti. Njegov prostor za bombe može nositi ili dvije bombe od 250 lb. (tretirati kao srednje rakete sa dometom 0) ili jedan torpedo.

| Višenamjenski lovac | |
| :- | :- |
| **Veličina / Tip** | Veliko Vojno |
| **Trup** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Brzina** | Umjerena |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Nema |
| **Naoružanje** | 4 Gatling topa montirana na nos (4d6+3), 1 prostor za bombe (6d10 - vidi opis) |

<br>

---

#### Međuzvjezdani teretnjak (Laki transport visoke tehnologije)

Ovaj laki transport zahtijeva minimalnu posadu od samo dvoje, uz prostor za do četiri dodatna putnika. Ovdje je navedena standardna fabrička verzija, međutim mnogi vlasnici će primijeniti sopstvene "posebne modifikacije" kao što su skriveni teretni prostor, poboljšane performanse, superiorno upravljanje, otpornost na EMP, prikrivenost, itd.

| Međuzvjezdani teretnjak | |
| :- | :- |
| **Veličina / Tip** | Srednja civilna svemirska letjelica |
| **Trup** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Brzina** | Rapidna (Parsek faktor 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirska letjelica](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Naoružanje** | 2x četvorostruke laserske kupole (5d6) |


<br>

---

#### Generalna kontakt jedinica (Ultra visokotehnološka svemirska letjelica)

Ovaj izuzetno visokotehnološki zvjezdani brod je fizička reprezentacija visoko naprednog vještačkog Uma, koji poprima oblik niza terenski povezanih modula dugih dva kilometra. Moduli su individualno namjenski i uključuju staništa, objekte za izgradnju, teretna područja, preradu hrane, komplekse za slobodno vrijeme, hangare, pa čak i neke tajne jedinice o kojima inteligencija broda rijetko, ako ikada, raspravlja. Ne treba mu ljudska posada, ali može lako podržati populaciju putnika do 100.000. Mnogi putnici se rađaju i umiru na Kontakt jedinici: mnogi su prolazni, dolaze i odlaze kako žele.

| Generalna kontakt jedinica | |
| :- | :- |
| **Veličina / Tip** | Kolosalna civilna svemirska letjelica |
| **Trup** | 20 |
| **Struktura** | 10.000 |
| **Sistemi** | 6 |
| **Brzina** | Umjerena (Parsek faktor 4. Na ovom tehnološkom nivou, Faktor iznosi 1 sat) |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Izgradnja](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirska letjelica](0006_Vehicles.md?id=spacecraft), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Vučna zraka](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Naoružanje** | Nema o čemu bi želio raspravljati |

<br>