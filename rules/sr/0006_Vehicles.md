# Vozila

Vozila u _Mythras Imperative_ se tretiraju na polu-apstraktan način. U suštini, ona su pozadinski alati, koji se koriste da prevezu likove od tačke A do tačke B, uz malu potrebu za detaljnim opisom ili statistikama. Ipak, povremeno će sudijama (Games Masters) biti potrebni detalji za vozila kada je neophodno predstaviti ih u poterama ili borbenim situacijama.

Pravila u ovom odeljku omogućavaju predstavljanje većine vrsta vozila, ali na apstraktan način koji je osmišljen da dozvoli fleksibilnost i unapredi pripovedanje. Zvezdani brodovi i letelice su malo drugačiji, iako su zasnovani na sličnim principima.

---
## Statistike

Sva vozila su opisana kroz njihovu Strukturu, Trup (Hull), Brzinu, Sisteme, Osobine i Štitove (ako su prisutni u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jedan od šest nivoa Veličine koji određuje vrednost ili raspon ostalih karakteristika. Zbog svoje veće intrinzične veličine i neprijateljskih uslova u svemiru, zvezdani brodovi imaju svoj sopstveni raspon vrednosti.
- **[Trup](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Oklopne poene.
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Pogotke (Hit Points) vozila.
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima sa naprednom tehnologijom manipulacije energijom, mogu biti prisutni štitovi koji štite vozilo, ali koji se mogu istrošiti pod neprekidnom paljbom.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući energetsko postrojenje, sekciju za posadu i tako dalje.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocenu Brzine.
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo takođe može imati jednu ili više Osobina. Osobine, poput sposobnosti dodeljenih stvorenjima u pravilima _Mythras Imperative_, ili osobina borbenog stila, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružja](0006_Vehicles.md?id=weapons):** Slično osobinama, vozilo može biti opremljeno oružjem kako to okruženje dozvoljava. Neki predloženi primeri i vrednosti su detaljno navedeni ispod.


---
### Veličina trupa, tip i struktura

Veličina i namena vozila utiču na debljinu njegovog trupa i otpornost njegove unutrašnje strukture. Motocikl, na primer, ima minimalan trup, jer je napravljen za brzinu i agilnost. Kopneni oklopnjak (masivno, guseničarsko ili točkaško oklopno čudovište, pokretano parnim ili dizel motorima), budući da je mnogo veće vozilo dizajnirano za bojište, ima mnogo veći trup. Uporedne veličine trupova (i koliko udaraca oružjem tipično mogu izdržati), sumirane su u tabelama Veličina vozila i Trup ispod.

Kada vozilo pretrpi štetu, dolazna šteta se umanjuje njegovom vrednošću Trup. Svaka preostala šteta se oduzima od poena Strukture vozila i ima procentualnu šansu, jednaku prodornoj šteti, da utiče na Sisteme. Ako se vozilo ikada svede na nulu Strukture, ono je ili potpuno uništeno, ili toliko teško oštećeno da se mora rashodovati.

##### Zemaljski trupovi

| Veličina | Struktura | Vrednost civilnog trupa | Vrednost vojnog trupa | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 1-20 | 1-3 | 4-6 | Motocikl, motocikl sa prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednja | 21-40 | 1-6 | 7-9 | Sedan, kombi, pikap, luksuzni automobil, luksuzni sportski automobil, automobil velike snage, limuzina, čamac za spasavanje, brzi čamac, zmajar, autožiro |
| Velika | 41-60 | 4-9 | 10-12 | Kamion, produžena limuzina, SUV, autobus, putničko vozilo, privatna letelica, jedrilica, jahta za krstarenje, tenk, helikopter, podmornica |
| Ogromna | 61-80 | 7-12 | 13-15 | Šleper, putnički avion, mlaznjak, plovilo obalske straže, jahta |
| Kolosalna | 81-100 | 10-15 | 16-18 | Voz, kruzer, ratni brod |

##### Trupovi zvezdanih brodova

| Veličina | Struktura | Vrednost civilnog trupa | Vrednost vojnog trupa | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 10-50 | 4-9 | 10-12 | Jednosedi lovac |
| Srednja | 51-150 | 7-12 | 13-15 | Laki teretnjak, šatl |
| Velika | 151-450 | 10-15 | 16-18 | Teški teretnjak, krstarica |
| Ogromna | 451-1350 | 13-18 | 19-21 | Prateća fregata, laka bojna krstarica |
| Kolosalna | 1351-4050 | 16-21 | 21-24 | Generacijski brod, teška bojna krstarica |
| Masivna | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, bojna stanica za uništavanje planeta |


---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za ona vozila koja ih mogu postaviti. Štitovi funkcionišu nešto drugačije od Trup-a, zbog svoje ablacione (trošeće) prirode. Ako je dolazna šteta jednaka ili manja od vrednosti štitova, onda se u potpunosti blokira. Ako šteta premaši vrednost štita, svaki višak smanjuje snagu štita za taj iznos.

_Na primer, transporter trupa ima snagu energetskog štita od 12 poena. Ako je transporter pogođen laserom za 11 štete, on jednostavno ne probija i nema dodatni efekat. S druge strane, ako je transporter pogođen udarom koji nanosi 15 štete, višak od tri poena bi smanjio snagu štita na 9._

Jednom kada snaga deflektorskog štita padne na nulu, on se ruši. Svaka preostala šteta se prenosi na trup.

---
### Sistemi

Svaki put kada vozilo pretrpi štetu koja probije njegov trup, postoji šansa, jednaka prodornoj šteti, da je vitalni Sistem pogođen.

_Na primer, 10 štete se nanosi brzom čamcu - vozilu sa 3 Trup i 24 Struktura. Trup se računa kao oklop koji smanjuje štetu na 7. Ovo se oduzima od 24 poena Strukture i postoji 7% šanse da se ošteti jedan od Sistema vozila._

Šteta koju Sistem može da izdrži zasniva se isključivo na veličini vozila. Ovo je modelovano brojem pogodaka koje Sistem može da primi, umesto stvarnom količinom štete. Jedan pogodak Sistema na malom vozilu će trenutno uništiti taj Sistem. Potrebna su dva pogotka da se unište sistemi vozila srednje veličine, tri za veliko vozilo, i tako dalje. Pogledajte [Tabelu štete sistema](0006_Vehicles.md?id=system-damage-table) ispod.

Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije proporcionalan broju primljenih pogodaka - bilo procentualnim smanjenjem ili penalom nivoa (Grade) za zadatke Sistema. Specifičan efekat se zasniva na tome šta podsistem kontroliše, kao što je detaljno navedeno u [Tabeli štete komponenti sistema](0006_Vehicles.md?id=system-component-damage-table) ispod. U zavisnosti od toga koji je Sistem pogođen, efekti mogu biti katastrofalni.

_Na primer, kopneni oklopnjak - ogromno vozilo sa 5 pogodaka Sistema - pogođen dvaput u pogon (Drive) izgubio bi 40% svoje snage i smanjio bi svoju sporu brzinu za dva nivoa na "tešku" (Ponderous). Slično, veliki teretnjak - sa 3 pogotka Sistema - primivši dva pogotka na Sistem motora/goriva imao bi penal od dva nivoa na Brzinu kao i na korišćenje elektronskih sistema. Treći pogodak bi uništio Sistem motora/goriva i sam brod sa njim._


<details>

<summary>* Erata zajednice</summary>

---

#### Šteta

_Originalni tekst ovde je prvobitno bio udaljeniji. Postavljen direktno nakon odeljka Sistemi, nepotrebno ponavlja prethodni pasus._

- _"Šteta koja premašuje Trup probija vozilo, oštećujući Strukturu i potencijalno utičući na jedan ili više sistema. U zavisnosti od veličine vozila, šteta može biti manja ili katastrofalna._
- _Na primer, veliko vozilo može primiti do dva pogotka na Sistem kao što je njegov Pogon. Treći pogodak funkcionalno uništava Pogon. Svaki put kada sistem primi pogodak, on ili gubi procenat svoje funkcije kako je opisano u koloni Gubitak po pogotku u Tabeli štete sistema ispod ili osnovna funkcija (kao što su Pogon, Pilotiranje, Komunikacije, i tako dalje) postaje teža za jedan nivo težine (Difficulty Grade) po primljenom pogotku."_

_Gornji pasusi su uklonjeni i zamenjeni skraćenom izmenom koja navodi još jedan primer efekta Sistema._

---

</details>

##### Tabela štete sistema

| Veličina | Pogoci sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 100% - Uništeno |
| Srednja | 2 | 1 nivo ili 50% |
| Velika | 3 | 1 nivo ili 33% |
| Ogromna | 4 | 1 nivo ili 25% |
| Kolosalna | 5 | 1 nivo ili 20% |
| Masivna | 6 | 1 nivo ili 16% |


<details>

<summary>* Erata zajednice</summary>

---

##### Tabela štete sistema (Originalna)

| Veličina | Pogoci sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 1 nivo ili 50% |
| Srednja | 2 | 1 nivo ili 33% |
| Velika | 3 | 1 nivo ili 25% |
| Ogromna | 4 | 1 nivo ili 20% |
| Kolosalna | 5 | 1 nivo ili 16% |
| Masivna | 6 | 1 nivo ili 10% |

##### Tabela veličine vozila (iz [Veličina trupa, tip i struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogoci sistema |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Masivna | 6 |

_Originalna pravila i primeri su nedosledni:_
- _"Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak u funkcionalnosti. Ovo je jednako proporciji trenutnih pogodaka u odnosu na njegovu ukupnu sposobnost. Dakle, ogromno vozilo pogođeno dvaput u Pogon izgubilo bi 40% svoje snage (2 pogotka od maksimalno 5)."_
   - _Ovo sugeriše da bi ogromno vozilo prikazano sa 5 pogodaka sistema trebalo da izgubi 20% sa svakim pogotkom - ali tabela kaže 16%._
- _"Na primer, veliko vozilo može primiti do tri pogotka na sistem kao što je njegov Pogon. Četvrti pogodak funkcionalno uništava Pogon."_
  - _Ovo sugeriše - kao i tabela - 25% štete po pogotku sistema, ali velika vozila mogu primiti samo 3 pogotka sistema prema istoj tabeli._
- _Iako nije nedosledna, Tabela veličine vozila je bila redundantna; pojavljujući se ponovo u punijem obliku (dodajući kolonu Gubitak po pogotku) samo nekoliko redova kasnije._

_Ovo otežava postojanje doslednog pravila. Da bi se rešili ovi problemi, vrednosti i primeri su promenjeni da se poklapaju i Tabela veličine vozila je uklonjena._

---

</details>


##### Tabela štete komponenti sistema

| 1d10 | Sistem | Rezultat oštećenja | Rezultat uništenja |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina imovine ili opreme uskladištene u potpalublju, proporcionalna šteti, je uništena. | Sav teret je uništen. |
| 2 | Komunikacije | Komunikacioni testovi pate od jednog dodatnog nivoa težine svaki put kada su oštećeni. | Vozilo više ne može da komunicira ili ometa neprijateljske senzore. |
| 3 | Kontrole | Testovi upravljanja čamcem, vozilom ili pilotiranja pate od jednog dodatnog nivoa težine svaki put kada su oštećeni; potreban trenutni test kontrole. | Vozilom se više ne može upravljati niti menjati kurs. |
| 4 | Pogon | Brzina smanjena za iznos proporcionalan šteti. | Vozilo se potpuno zaustavlja; letelice padaju. |
| 5 | Posada | Broj putnika proporcionalan šteti postaje žrtve. Pogođeni trpe Ozbiljnu ranu i moraju uspeti u testu Izdržljivosti (KON) ili bivaju trenutno ubijeni. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena za iznos proporcionalan šteti. Elektronski sistemi su jedan nivo težine teži za korišćenje. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Testovi senzora, navigacije i napada oružjem pate od jednog dodatnog nivoa težine svaki put kada su oštećeni. | Vozilo postaje slepo. |
| 8 | Oružje | Broj oružanih sistema proporcionalan šteti postaje neoperativan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Ništa | Nijedan sistem nije pogođen; samo šteta na Strukturi. | N/A |

<details>

<summary>* Erata zajednice</summary>

---

##### Tabela štete komponenti sistema (Motor/Gorivo)

_Originalni rezultat je bio sledeći: "Maksimalna brzina je prepolovljena..." Ovo je u suprotnosti sa opštim pravilom o penalima štete srazmerno šteti Sistema: 25% štete = 25% penala. Štaviše, puna pravila u Mythras Companion-u ne pominju ovo prepolovljavanje brzine._

_Kao rezultat toga, tekst je zamenjen istim unosom kao za Pogonske sisteme: "Brzina smanjena za iznos proporcionalan šteti."_

---

</details>


---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora vazduha i inercije (da pomenemo samo neke) kompleksna pitanja, potrebno je određeno pojednostavljenje, pa se vozilima dodeljuje apstraktna ocena brzine. Karakteristika Brzina treba da se koristi samo za grubu procenu da li jedno vozilo može prestići ili sustići drugo.

Ocena brzine predstavlja nominalnu operativnu brzinu vozila. U hitnim situacijama ovaj učinak se može povećati za jedan stepen, uz rizik od habanja ili štete na motorima. Iako se ista tabela koristi za sve tipove vozila, treba primeniti zdrav razum tako da se upoređuju samo vozila iste klase. Na primer, ako svemirski brod i sportski automobil imaju istu stopu ubrzanja "Rapid", onda bi trebalo da bude očigledno da je svemirski brod komparativno brži.

Povećanje brzine vozila iznad njegove standardne vrednosti moguće je uz uspešan test upravljanja (Drive). Obično je ova dodatna brzina održiva samo na kratak period – ne više od 1d6 minuta pre nego što vozilo mora da se spusti na svoju standardnu brzinu ili rizikuje štetu na svom pogonskom postrojenju. Kritičan uspeh na testu upravljanja omogućava da se period veće brzine poveže na 1d12 minuta.

Vozač može pokušati da poveća brzinu vozila za 2 stepena, ali ovo zahteva "herkulovski" (Herculean) test upravljanja i maksimalno koliko vozilo može održati ovu brzinu je 1d3 minuta: Kritičan uspeh neće produžiti trajanje povećane brzine.

##### Tabela ocene brzine

| Ocena brzine | Maksimalna brzina za |
| :-- | :-: |
| Teška (Ponderous) | Kolosalna |
| Troma (Sluggish) | |
| Spora (Slow) | Ogromna |
| Mediokritetna | |
| Lagana (Gentle) | Velika |
| Umerena (Moderate) | |
| Brza (Rapid) | Srednja |
| Hitra (Fast) | |
| Flotna (Fleet) | Mala |


---
### Osobine

Maksimalan broj osobina koje vozilo može imati zavisi od veličine i tipa trupa.

Svako vozilo ima inherentnu osobinu: način putovanja za koji je prvenstveno dizajnirano. Prema tome, letelice inherentno poseduju osobinu Vazdušna, čamci Vodena, i tako dalje. Ova inherentna osobina se ne računa u dostupan broj osobina. Međutim, ako vozilo treba da uključi drugi način putovanja — na primer leteća podmornica, onda bi se osobina Vazdušna morala uzeti kao jedna od dostupnih osobina.

Neke osobine možda neće biti dostupne, u zavisnosti od nivoa tehnologije okruženja; sudije moraju doneti sopstvene procene o tome koje se osobine mogu primeniti.

##### Tabela dodele osobina vozila

| Veličina | Maks. osobina |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Masivna | 6 |

#### Vazdušna (Airborne)

Vozilo je sposobno za atmosferski let.

#### Terenska (All Terrain)

Ova Osobina se mora koristiti sa kopnenim vozilima. Vozilo može prelaziti negostoljubiv, težak i strm teren, koristeći ili gusenice, napredno vešanje i pogonske sisteme, ili snažne pogonske diferencijale.

#### Podzemna (Burrowing)

Vozilo je dizajnirano da se ukopava i tunelira kroz zemlju. Može postići maksimalnu dubinu jednaku svojoj oceni Trup-a x 5 metara.

#### Kamuflirana (Camouflaged)

Vozilo poseduje ili kamuflažnu boju ili mimetičke senzore koji mu omogućavaju da se stopi sa svojom okolinom. Pokušaji vizuelnog uočavanja vozila su za jedan nivo teži.

#### Teretna (Cargo)

Vozilo je dizajnirano specifično za prevoz tereta, a ne putnika. Putnički odeljci su svedeni na minimum, dok je ostatak upotrebljivog prostora vozila posvećen smeštaju tereta sa odgovarajućim sekcijama, alatima, pa čak i ekološkom klimatizacijom (kao što su sekcije zamrzivača za transport kvarljive robe). Kada je natovareno teretom, brzina vozila je za dva stepena niža nego što bi njegova veličina trupa inače dozvolila.

#### Nosač (Carrier)

Vozilo je dizajnirano specifično za nošenje manjih, lako upravljanih ili možda daljinski kontrolisanih vozila civilne ili vojne prirode. Svako vozilo koje poseduje ovu osobinu mora biti najmanje Kolosalno. Broj nošenih malih plovila može varirati prema tipu misije i nameni, ali može biti od najmanje 10 do onoliko koliko iznosi ocena Strukture vozila.

#### Konstrukciona (Construction)

Vozilo je opremljeno za teške građevinske radove. Sva vozila sa ovom osobinom imaju i osobinu Terenska, ali je brzina za dva stepena niža nego što bi njihova veličina trupa inače dozvolila. Vozilo je opremljeno alatima primerenim zadatku kao što su kranovi, kašike bagera, kiperi i tako dalje.

#### Otporna na EMP (EMP Resistant)

Vozilo je zaštićeno od napada elektromagnetnim impulsom.

#### Poboljšane performanse (Enhanced Performance)

Ocena brzine vozila je jedan stepen viša od maksimalne za njegovu veličinu.

#### Katapult sedište (Ejector Seat)

U slučaju nužde, katapult sedište izbacuje putnike nekoliko stotina metara u vazduh, a zatim aktivira padobran radi sigurnog sletanja. Padobran je opcioni. Ne preporučuje se za helikoptere (Kamov Ka-52 Alligator je značajan izuzetak).

#### FTL (Nadsvetlosni pogon)

Samo svemirska plovila. Plovilo je opremljeno nadsvetlosnim motorom (bilo da je to hiper-pogon, varp-pogon, generator crvotočina ili slično). FTL pogon ima posebnu ocenu brzine koja u suštini meri stopu kojom zvezdani brod može preći jedan parsek (3,26 svetlosnih godina, ili 31 bilion kilometara ili 19 biliona milja), kako sledi:

##### Tabela FTL brzine

| Ocena brzine | Faktor za prelazak 1 parseka |
| :-- | :-: |
| Teška | 10 |
| Troma | 8 |
| Spora | 7 |
| Mediokritetna | 6 |
| Lagana | 5 |
| Umerena | 4 |
| Brza | 3 |
| Hitra | 2 |
| Flotna | 1 |

Vreme faktora je na sudiji da odluči, u zavisnosti od toga koliko je napredan razvoj FTL-a u okruženju. Na primer, osnovni faktor bi mogao biti 1 dan, što znači da brodu sa teškim FTL pogonom treba 10 dana da završi putovanje, dok plovilo sa flotnim FTL pogonom završava put za 1 dan. Drugde, gde je FTL tehnologija znatno manje efikasna, vreme faktora bi se moglo meriti u mesecima, a ne u danima.

Podrazumeva se da brod ima rezerve goriva da obavi povratno putovanje ili način da dopuni gorivo na odredištu.

Podrazumeva se da bilo koja veličina zvezdanog broda može biti opremljena FTL pogonom, iako, ponovo, to zavisi od okruženja.

FTL pogoni se ne mogu aktivirati unutar 1,5 astronomske jedinice od zvezde (oko 225 miliona kilometara, ili 270 miliona milja). To znači da brodovi moraju koristiti potsvetlosni pogon da bi se pomerili na otprilike udaljenost Marsa pre aktiviranja FTL sistema.

#### Kopneno vozilo (Ground Vehicle)

Vozilo je sposobno za kopneni put.

#### Lebdenje (Hover)

Vozilo lebdi iznad zemlje koristeći vazdušni jastuk ili antigravitacioni repulsor.

#### Luksuzna (Luxurious)

Vozilo je dizajnirano specifično za prevoz putnika na određenom nivou luksuza. Višak teretnog prostora je pretvoren u luksuzne putničke smeštaje, bazene, đakuzije, dodatnu posadu koja ugađa hirovima putnika, i tako dalje.

#### Šinska (Rails)

Vozilo se oslanja na šinski sistem. Vozila sa ovom osobinom mogu prirodno postići ocenu brzine tri stepena višu nego što bi njihova veličina trupa inače dozvolila, ali su očigledno ograničena na kretanje samo po šinskom sistemu.

#### Otporna (Resilient)

Svi sistemi mogu izdržati jedan pogodak više nego što je normalno određeno Veličinom. Ova Osobina se može slagati — dakle Otporna 2 označava da sistemi mogu izdržati 2 pogotka više nego obično po ceni od dva poena osobine.

#### Vodena (Seaborne)

Vozilo je plovno po vodi.

#### Svemirska letelica (Spacecraft)

Vozilo je zaptiveno protiv vakuuma i zaštićeno od kosmičkog zračenja i može, u zavisnosti od dizajna, biti sposobno da napusti i ponovo uđe u atmosferu, kao i da održava let unutar atmosfere.

#### Prikrivena (Stealth)

Samo letelice. Vozilo je dizajnirano da izbegne detekciju radarom i drugim sistemima senzora dugog dometa. Pokušaji uočavanja vozila korišćenjem elektronskih senzora su za jedan nivo teži.

#### Podmornica (Submersible)

Vozilo je sposobno da zaroni ispod površine okeana do radne dubine od svoje ocene Trup-a x 10 metara. Dubina kolapsa — apsolutni maksimum koji podmornica može dostići a da ne bude zgnječena — je 1,5 puta njena radna dubina.

#### Superiorno upravljanje (Superior Handling)

Upravljanje vozilom se ocenjuje kao Lako.

#### Komplet za nadzor (Surveillance Suite)

Vozilo ima ugrađen računar, komunikacionu baznu stanicu, prijemnik za signale uređaja za prisluškivanje i aparat za presretanje obližnjih signala pametnih telefona unutar 100 metara.#### Izdržljiv (Tough)

Civilno vozilo sa ovom osobinom crpi svoju Oplatu iz vojne kolone i automatski ima maksimalnu Strukturu. Vojno vozilo sa ovom osobinom crpi svoju Oplatu i Strukturu iz sledećeg reda ispod.

#### Vučni zrak (Tractor Beam)

Samo za svemirske brodove. Brod je opremljen vučnim zrakom koji može da uhvati i privuče vozila sa ocenom oplate do dva stepena manjom od sopstvene. Dakle, ogroman (Huge) svemirski brod bi mogao da privuče i zadrži oplatu do veličine Srednjeg (Medium) vozila.

#### VTOL

Vertikalno poletanje/sletanje. Ova osobina je svojstvena helikopterima i sličnim vozilima koja koriste kombinaciju rotora za stvaranje uzgona. Kada se primeni na letelice sa fiksnim krilima, ukazuje na upotrebu fiksnih ili podesivih potisnika za kontrolu položaja u vazduhu, uspona i spuštanja.

#### Vodeno (Waterborne)

Vozilo se kreće koristeći zglobne noge. Hodajuća vozila su ograničena na brzinu Blage (Gentle), bez obzira na njihovu veličinu. Međutim, Hodalice se mogu graditi do visina koje bi jednostavno bile nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za kretanje pod vodom.

#### Naoružano (Weaponized)

Vozilo je prilagođeno za smeštaj naoružanja. Oružani sistemi su opisani ispod u odeljku [Oružje](0006_Vehicles.md?id=weapons).


---
## Oružje

Obično su samo vojne oplate dizajnirane da prime naoružanje (uporišne tačke, skladištenje municije, kontrolni sistemi). Osobina "Naoružano" se može uzeti za civilna vozila koja mogu imati potrebe za oružjem.

Maksimalan broj oružanih sistema koje vozilo može da podrži jednak je 1/10 njegovih poena Strukture (tako da vozilo sa 40 Strukture može podržati 4 oružana sistema, ako je u pitanju vojno vozilo ili civilno vozilo sa osobinom Naoružano).

Oružani sistemi zavise od veličine vozila. Maksimalni tip oružanog sistema za različite veličine prikazan je u tabelama ispod.


##### Tabela oružja prema veličini

| Veličina | Kopneno | Svemirska letelica |
| :-- | :-- | :-- |
| Malo (Small) | Lako oružje (npr. automatska puška) | Srednje oružje (npr. mitraljez, bacač raketa) |
| Srednje (Medium) | Srednje oružje (npr. mitraljez, bacač raketa) | Oružje na kupoli/teško oružje (npr. teški spregnuti mitraljezi, mini-topovi) |
| Veliko (Large) | Oružje na kupoli/teško oružje (npr. teški spregnuti mitraljezi, mini-topovi) | Oružana baterija (npr. bojna artiljerija) |
| Ogromno (Huge) | Oružana baterija (npr. bojna artiljerija) | Napredno oružje (npr. raketni sistemi) |
| Veoma veliko (Enormous) | Napredno oružje (npr. raketni sistemi) | Kičmeno montirano oružje (samo jedno) |
| Kolosalno (Colossal) | NA | Kičmeno montirano oružje (do 3) |

##### Primer statistike oružja
 
| Oružje | Šteta | Domet | Brzina paljbe | Municija/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| Top od 50 inča | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-top/Gatling top | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Srednja raketa/torpedo | 6d10 | Maks. domet 200km | 1 | 1/5 |
| Velika/krstareća raketa | 6d10+10 | Maks. domet 1000km | 1 | 1/10 |
| Laser/Plazma top | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laser/plazma top | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artiljerijska baterija | 5d6+6 | Maks. domet 50km | 1 | 1/5 |
| Baterija na kičmenom nosaču | 10d6+6 | Maks. domet 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Brzine paljbe su za pojedinačnu, poluautomatsku i potpuno automatsku vatru._

_Municija je kapacitet paljbe pre potrebe za ponovnim punjenjem. Punjenje je vreme ponovnog punjenja u borbenim rundama, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevri

Izbegavanje ili iznenadni manevri zahtevaju uspešno bacanje za Vožnju/Pilotiranje kako bi se osiguralo da vozač ili pilot zadrži kontrolu nad vozilom. Većina vozila je dizajnirana i napravljena da izdrži povremene napore i opterećenja, ali Voditelj igre može odlučiti da određeni manevar zahteva bacanje sa višim stepenom težine, u zavisnosti od toga koliko je ambiciozan. Neuspeh znači da se gubi kontrola nad vozilom: bacite kockicu na tabeli Gubitak kontrole.

Napomena: Tabela Gubitak kontrole se odnosi samo na kopnena vozila. Slični efekti se mogu primeniti na vazdušna i svemirska vozila, ali će Voditelji igre morati da prilagode obrazloženje za konkretan efekat. Na primer, letelica bi, umesto proklizavanja, mogla ući u kovitlac.

Takođe, inherentno upravljanje vozilom može imati dodatni uticaj na bacanje za Vožnju. Upravljanje može biti Lako (Easy), Standardno (Standard), Teško (Hard), Zastrašujuće (Formidable) ili Herkulsko (Herculean) i određuje početnu tačku za bacanje za Vožnju pri izvođenju manevra. Stepen težine manevra se zatim primenjuje na upravljanje kako bi se odredila konačna težina.

Na primer, motocikl visokih performansi ima ugrađene žiro-stabilizatore koji mu daju Lako upravljanje. Vozač želi da izvede okret od 180 stepeni proklizavanjem kako bi izbegao gonioca, manevar koji Voditelj igre ocenjuje kao jedan dodatni stepen težine. Vozač stoga mora da napravi svoje bacanje za Vožnju kao Standardno, a ne Lako. Da je pokušao isti manevar na nestabilizovanom motociklu, bacanje za Vožnju bi bilo Teško.

Superiorno upravljanje (Superior Handling) je osobina. Ako vozilo nema ovu osobinu kao deo svog opisa, podrazumevano upravljanje je Standardno za svako vozilo veličine Veliko (Large) i manje. Ogromna (Huge) i Veoma velika (Enormous) vozila inherentno imaju osobinu upravljanja Zastrašujuće i Herkulsko, a Voditelj igre ima slobodu da presudi da su određeni manevri jednostavno nemogući zbog veličine vozila.

##### Tabela gubitka kontrole

| 1d100 | Rezultat |
| :-: | :-- |
| 01-25 | Skretanje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 stepen tokom 5 sekundi. |
| 26-40 | Proklizavanje. Vozač mora da se bori da zadrži kontrolu nad vozilom. Vozilo smanjuje brzinu za 2 stepena tokom 10 sekundi. |
| 41-50 | Ozbiljno proklizavanje. Vozilo se na kraju nađe okrenuto u pogrešnom smeru i stoji 15 sekundi. |
| 51-60 | Prevrtanje. Vozilo proklizava i prevrće se, zadobivši 3d10 štete na svojoj Strukturi. Putnici moraju napraviti uspešno bacanje za Izdržljivost (Endurance) ili zadobiti 1d10 štete na 1d3 lokacija pogodaka. |
| 61-70 | Ozbiljno prevrtanje. Kao gore, ali vozilo zadobija 3d10+10 štete, a putnici dobijaju 1d10 štete čak i ako je bacanje za Izdržljivost uspešno, i 2d10 ako neuspe. |
| 71-80 | Otpis. Kao gore, ali se vozilo svodi na 0 Strukture. Putnici zadobijaju istu štetu kao za Ozbiljno prevrtanje. |
| 81-90 | Eksplozija. Kao gore, ali se sistem za gorivo vozila zapali i eksplodira u roku od 1d20+10 sekundi. Ako nisu u stanju da se udalje, putnici trpe dodatnih 1d6 štete od opekotina na 1d6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao gore, ali je eksplozija trenutna. |
| 99-00 | Katastrofalan sudar. Putnici moraju uspešno baciti za Izdržljivost ili poginuti na licu mesta. Šteta kao za Otpis se zadobija bez obzira na ishod. |


---
## Primeri vozila

---

### Kopnena vozila

#### Presretač (Interceptor)

Nabudžen luksuzni automobil, sportski auto ili slično, ovaj automobil je napravljen da ide brzo i da pruži otpor u borbi. Ovo je vrsta vozila na koju ljudi misle kada neko kaže "špijunski auto".

| Presretač | |
| :- | :- |
| **Veličina / Tip** | Srednje vojno |
| **Oplata** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Lako |
| **Osobine** | [Izbaciva sedišta](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač naftnih mrlja, Raspršivač dima, Spregnuti srednji mitraljezi (2d6+3) |

<br>

---

#### Poterni motocikl

Lagani, brzi motocikl za brze potere, Poterni motocikl nosi iznenađenje – ili par spregnutih mitraljeza ili dve rakete.

| Poterni motocikl | |
| :- | :- |
| **Veličina / Tip** | Malo civilno |
| **Oplata** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Brzina** | Brza |
| **Upravljanje** | Lako |
| **Osobine** | [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dve rakete (4d6) ili spregnuti laki mitraljezi (2d6) |

<br>

---

#### Sedan automobil

Standardni sedan sa 4 vrata koji nudi dovoljno prostora za udoban smeštaj vozača i tri putnika. Žrtvuje tovarni prostor da bi uključio nadzorni paket.

| Sedan automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Nagla |
| **Upravljanje** | Standardno |
| **Osobine** | [Diskretno](0006_Vehicles.md?id=unobtrusive), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite) |
| **Oružje** | Nema |

<br>

---

#### Podmornički automobil

Automobil za dve osobe koji se može prebaciti u režim za kretanje po vodi ili pod vodom. Dolazi sa torpedom montiranim napred i raketom zemlja-vazduh montiranom na krovu.

| Podmornički automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podmorničko](0006_Vehicles.md?id=submersible), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raketa (5d6), Torpedo (4d10) |

<br>

---

#### Nadzorni kombi

Običan, neobeležen kombi u kojem se nalazi tim agenata i komplet opreme za audio-vizuelno snimanje.

| Nadzorni kombi | |
| :- | :- |
| **Veličina / Tip** | Veliko civilno |
| **Oplata** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Brzina** | Blaga |
| **Upravljanje** | Standardno |
| **Osobine** | [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Izdržljiv](0006_Vehicles.md?id=tough) |
| **Oružje** | Nema |

<br>

---

#### Taktičko vozilo za podršku

Kamionet ili džip sa prostorom za posadu od dve osobe u kabini i strelcem koji stoji u zadnjem delu i upravlja srednjim mitraljezom montiranim na okretnici.

| Taktičko vozilo za podršku | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Brzina** | Nagla |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Montirani srednji mitraljez (2d6) |

<br>

---

### Plovila

#### Brzi čamac

Tipičan brzi čamac, naoružan raspršivačem mina montiranim pozadi.

| Brzi čamac | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač mina (5d6) |

<br>

---

#### Jahta

Vrsta luksuzne jahte koju bi oligarh mogao da poseduje. Verovatno opremljena nadzornim paketom za zaštitu od neprijatelja koji pokušavaju da urade nešto loše.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Ogromno civilno |
| **Oplata** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Brzina** | Spora |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Vodeno](0006_Vehicles.md?id=waterborne) |
| **Oružje** | Nema |

<br>

---

### Letelice/Svemirske letelice

#### Dirigibil (Civilni vazdušni brod)

Sličan Hindenburgu, ova klasa transkontinentalnog dirigibla (i drugi njegove klase) dugačak je 245 metara i zahteva posadu od 40 do 61 osobe. Obično može prevoziti 50 do 72 putnika u luksuznom smeštaju.

| Dirigibil | |
| :- | :- |
| **Veličina / Tip** | Veoma veliko civilno |
| **Oplata** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Brzina** | Ponderous |
| **Upravljanje** | Herkulsko |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | Nema |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter koristi svoju naprednu tehnologiju nadzora za presretanje telefonskih i bežičnih internet signala, i praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbegavanja pratioca kroz Stealth su Zastrašujući.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Oplata** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Brzina** | Umerena |
| **Upravljanje** | Lako |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | 1 Gatling top (3d6), 4 rakete (5d6) |

<br>

---

#### Višenamenski lovac

Ovaj dvosedi lovac baziran na kopnu (sličan tipu De Havilland Mosquito) dobro je poznat po svojim performansama i svestranosti. Njegov prostor za bombe može nositi ili dve bombe od 250 funti (tretirati kao srednje rakete sa dometom 0) ili jedno torpedo.

| Višenamenski lovac | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Oplata** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Brzina** | Umerena |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Nema |
| **Oružje** | 4 Gatling topa montirana na nosu (4d6+3), 1 prostor za bombe (6d10 - vidi opis) |

<br>

---

#### Međuzvezdani teretnjak (Laki visokotehnološki transport)

Ovaj laki transport zahteva minimalnu posadu od samo dvoje, uz prostor za do četiri dodatna putnika. Ovde je zabeležena standardna verzija, međutim mnogi vlasnici će primeniti svoje "posebne modifikacije" kao što su skriveni tovarni prostor, poboljšane performanse, superiorno upravljanje, otpornost na EMP, Stealth, itd.

| Međuzvezdani teretnjak | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno svemirsko vozilo |
| **Oplata** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Brzina** | Nagla (Parsek faktor 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirsko vozilo](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Oružje** | 2x četvorostruke laserske topovske kupole (5d6) |


<br>

---

#### Jedinica za opšti kontakt (Ultra visokotehnološko svemirsko vozilo)

Ovaj izuzetno visokotehnološki zvezdani brod je fizička reprezentacija visoko naprednog veštačkog Uma, koji poprima oblik niza modula povezanih poljem dužine dva kilometra. Moduli su pojedinačno namenski i uključuju staništa, objekte za izgradnju, tovarne prostore, preradu hrane, komplekse za razonodu, hangare, pa čak i neke tajne jedinice o kojima inteligencija broda retko, ili nikada, ne govori. Ne treba mu ljudska posada, ali sa lakoćom može podržati populaciju putnika do 100.000. Mnogi putnici se rađaju i umiru na brodu Jedinice za kontakt: mnogi su privremeni, dolaze i odlaze kako žele.

| Jedinica za opšti kontakt | |
| :- | :- |
| **Veličina / Tip** | Kolosalno civilno svemirsko vozilo |
| **Oplata** | 20 |
| **Struktura** | 10.000 |
| **Sistemi** | 6 |
| **Brzina** | Umerena (Parsek faktor 4. Na ovom tehnološkom nivou, faktor je jednak 1 satu) |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Vazdušno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Konstrukcija](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirsko vozilo](0006_Vehicles.md?id=spacecraft), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Vučni zrak](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Oružje** | Nema o čemu želi da razgovara |

<br>