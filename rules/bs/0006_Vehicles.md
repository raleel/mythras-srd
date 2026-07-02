# Vozila

Vozila u _Mythras Imperative_ tretiraju se na semi-apstraktan način. U suštini, ona su pozadinski alati, korišteni za prevoz likova od A do B, sa malo potrebe za detaljnim opisom ili statistikama. Međutim, povremeno će Voditelji igre zahtijevati detalje za vozila kada je potrebno predstaviti ih u potjerama ili borbenim situacijama.

Pravila u ovom odjeljku omogućavaju predstavljanje većine vrsta vozila, ali na apstraktan način koji je namijenjen da omogući fleksibilnost i poboljša pripovijedanje. Zvjezdani brodovi i svemirske letjelice su malo drugačiji, iako su bazirani na sličnim principima.

---
## Statistike

Sva vozila se opisuju u smislu njihove Strukture, Oplata, Brzine, Sistema, Osobina i Štitova (ako su prisutni u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jednu od šest ocjena Veličine koja određuje vrijednost ili raspon ostalih karakteristika. Zbog njihove veće intrinzične veličine i neprijateljskih okruženja svemira, zvjezdani brodovi imaju svoj raspon vrijednosti.
- **[Oplat](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Oklopne Tačke
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Hit Tačke vozila
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima sa naprednom tehnologijom manipulacije energijom, štitovi mogu biti prisutni da zaštite vozilo, ali se mogu ablatirati pod kontinuiranom paljbom.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući pogonski sistem, odjeljak za posadu, i tako dalje.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocjenu Brzine
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo takođe može imati jednu ili više Osobina. Osobine, poput Sposobnosti dodijeljenih Stvorenjima u pravilima _Mythras Imperative_, ili Osobina Borbenog stila, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružja](0006_Vehicles.md?id=weapons):** Slično Osobina, vozilo može biti opremljeno oružjem kako okruženje dozvoljava. Neki predloženi primjeri i vrijednosti detaljno su navedeni u nastavku.


---
### Veličina oplate, tip i struktura

Veličina i svrha vozila utiču na debljinu njegovog oplata i otpornost njegove unutrašnje strukture. Motocikl, na primjer, ima minimalnu oplatu, građen je za brzinu i agilnost. Kopneni oklopnjak (masivni, gusjeničar ili oklopljena zvijer na točkovima, pokretana parnim ili dizel motorima), budući da je mnogo veće vozilo dizajnirano za bojno polje, ima mnogo veći oplat. Komparativne veličine oplata (i koliko pogodaka od oružja mogu tipično izdržati), sažeto su prikazane u tabelama Veličina i Oplat vozila u nastavku.

Kad god vozilo pretrpi štetu, dolazeća šteta se smanjuje za njegovu vrijednost Oplata. Svaka preostala šteta se oduzima od Strukturalnih tačaka vozila i ima postotnu šansu, jednaku penetrirajućoj šteti, da utječe na Sistem. Ako vozilo ikada bude svedeno na nula Strukturalnih tačaka, ono je ili potpuno uništeno, ili toliko loše oštećeno da se mora otpisati.

##### Kopneni oplat 

| Veličina | Struktura | Civilna vrijednost oplata | Vojna vrijednost oplata | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mali | 1-20 | 1-3 | 4-6 | Motocikl, motocikl sa bočnom prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednji | 21-40 | 1-6 | 7-9 | Limuzina, kombi, pikap, luksuzni automobil, luksuzni sportski automobil, muscle car, limuzina, čamac za spasavanje, gliser, zmaj, autogiro |
| Veliki | 41-60 | 4-9 | 10-12 | Kamion/šleper, produžena limuzina, SUV, autobus, kombi, lični avion, jedrilica, jahta za uživanje, tenk, helikopter, podmornica |
| Ogroman | 61-80 | 7-12 | 13-15 | Šleper, putnički avion, mlaznjak, brod obalske straže, jahta |
| Enormni | 81-100 | 10-15 | 16-18 | Voz, kruzer, mornaričko plovilo |

##### Oplat zvjezdanog broda 

| Veličina | Struktura | Civilna vrijednost oplata | Vojna vrijednost oplata | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mali | 10-50 | 4-9 | 10-12 | Jednosjedni borbeni avion |
| Srednji | 51-150 | 7-12 | 13-15 | Laki teretni brod, Šatl letjelica |
| Veliki | 151-450 | 10-15 | 16-18 | Teški teretni brod, Krstarica |
| Ogroman | 451-1350 | 13-18 | 19-21 | Eskortna fregata, Laki bojni krstaš |
| Enormni | 1351-4050 | 16-21 | 21-24 | Generacijski brod, Teški bojni krstaš |
| Kolosalni | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, Bojna stanica za uništavanje planeta |


---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za ona vozila koja ih mogu montirati. Štitovi funkcionišu nešto drugačije od Oplata, zbog svoje ablativne prirode. Ako je dolazna šteta jednaka ili manja od vrijednosti štitova, onda je sva blokirana. Ako šteta premašuje vrijednost štita, onda višak smanjuje snagu štita za taj iznos.

_Na primjer, transportno vozilo ima snagu energetskog štita od 12 tačaka. Ako je vozilo pogođeno laserom za 11 štete, ona jednostavno ne prodire i nema dodatni efekat. S druge strane, ako je vozilo pogođeno eksplozijom koja nanosi 15 štete, višak od tri tačke bi smanjio snagu štita na 9._

Kada snaga deflektorskog štita padne na nulu, on se urušava. Svaka preostala šteta se prenosi na oplat.

---
### Sistemi

Svaki put kada vozilo pretrpi štetu koja prodire kroz njegov oplat, postoji šansa, jednaka probojnoj šteti, da je pogođen vitalni Sistem.

_Na primjer, 10 štete je primijenjeno na gliser – vozilo sa 3 Oplata i 24 Strukture. Oplat se računa kao oklop smanjujući štetu na 7. Ovo se oduzima od 24 Strukturalne tačke i postoji 7% šanse da se ošteti jedan od Sistema vozila._

Šteta koju Sistem može podnijeti bazira se isključivo na veličini vozila. To je modelirano brojem pogodaka koje Sistem može primiti, a ne stvarnim iznosom štete. Jedan pogodak sistema na Malom vozilu će trenutno uništiti taj Sistem. Potrebna su dva pogotka da se unište Sistemi Srednje velikog vozila, tri za Veliko vozilo, i tako dalje. Pogledajte [Tabelu oštećenja sistema](0006_Vehicles.md?id=system-damage-table) u nastavku.

Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije proporcionalan broju primljenih pogodaka – bilo procentualno smanjenje ili kaznu nivoa težine za sistemske zadatke. Specifični efekat se zasniva na tome šta podsistem kontroliše, kao što je detaljno opisano u [Tabeli oštećenja komponenti sistema](0006_Vehicles.md?id=system-component-damage-table) u nastavku. Ovisno o tome koji je Sistem pogođen, efekti mogu biti katastrofalni.

_Na primjer, Kopneni oklopnjak – Enormno vozilo sa 5 pogodaka sistema – pogođeno dvaput u Pogon izgubilo bi 40% svoje snage i smanjilo bi svoju Sporu Brzinu za dva nivoa na Tromo. Slično, Veliki teretni brod – sa 3 pogotka sistema – primajući dva pogotka na Sistem motora/goriva imao bi kaznu od dva nivoa težine na Brzinu, kao i na upotrebu elektronskih sistema. Treći pogodak bi uništio Sistem motora/goriva i brod s njim._


<details>

<summary>* Errata zajednice</summary>

---

#### Šteta


_Originalni tekst je bio dalje. Smješten direktno nakon odjeljka Sistemi, nepotrebno ponavlja prethodni paragraf._

- _"Šteta koja prelazi Oplat prodire u vozilo, oštećujući Strukturu i moguće utječući na jedan ili više sistema. Ovisno o veličini vozila, šteta može biti manja ili katastrofalna._
- _Na primjer, Veliko vozilo može primiti do dva pogotka na Sistem kao što je njegov Pogon. Treći pogodak funkcionalno uništava Pogon. Svaki put kada sistem primi pogodak, ili gubi postotak svoje funkcije kao što je opisano u koloni Gubitak po pogotku u Tabeli oštećenja sistema u nastavku, ili osnovna funkcija (kao što su Pogon, Pilot, Komunikacije i tako dalje) postaje za jedan Nivo težine teža po primljenom pogotku."_

_Gore navedeni paragrafi su uklonjeni i na njihovo mjesto dolazi skraćena izmjena koja navodi još jedan primjer efekta sistema._

---

</details>

##### Tabela oštećenja sistema 

| Veličina | Pogoci sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mali | 1 | 100% - Uništeno |
| Srednji | 2 | 1 Nivo ili 50% |
| Veliki | 3 | 1 Nivo ili 33% |
| Ogroman | 4 | 1 Nivo ili 25% |
| Enormni | 5 | 1 Nivo ili 20% |
| Kolosalni | 6 | 1 Nivo ili 16% |


<details>

<summary>* Errata zajednice</summary>

---

##### Tabela oštećenja sistema (Original) 

| Veličina | Pogoci sistema | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mali | 1 | 1 Nivo ili 50% |
| Srednji | 2 | 1 Nivo ili 33% |
| Veliki | 3 | 1 Nivo ili 25% |
| Ogroman | 4 | 1 Nivo ili 20% |
| Enormni | 5 | 1 Nivo ili 16% |
| Kolosalni | 6 | 1 Nivo ili 10% |

##### Tabela veličina vozila (iz [Veličina oplate, tip i struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogoci sistema |
| :-- | :-: |
| Mali | 1 |
| Srednji | 2 |
| Veliki | 3 |
| Ogroman | 4 |
| Enormni | 5 |
| Kolosalni | 6 |

_Originalna pravila i primjeri su nedosljedni:_
- _"Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcionalnosti. To je jednako udjelu trenutnih pogodaka u njegovoj ukupnoj sposobnosti. Dakle, Enormno vozilo pogođeno dvaput u Pogon izgubilo bi 40% svoje snage (2 pogotka od maksimalnih 5)"._
   - _Ovo sugerira da Enormno vozilo prikazano s 5 pogodaka sistema treba izgubiti 20% sa svakim pogotkom – ali tabela kaže 16%._
- _"Na primjer, Veliko vozilo može primiti do tri pogotka na sistem kao što je njegov Pogon. Četvrti pogodak funkcionalno uništava Pogon."_
  - _"Ovo sugerira – kao i tabela – 25% štete po pogotku sistema, ali Velika vozila mogu primiti samo 3 pogotka sistema prema istoj tabeli._
- _Iako nije nedosljedna, Tabela veličina vozila bila je suvišna; ponovo se pojavljuje u potpunijem obliku (dodajući kolonu Gubitak po pogotku) samo nekoliko redova kasnije._

_To otežava dosljedno pravilo. Da bi se riješili ovi problemi, vrijednosti i primjeri su promijenjeni da se podudaraju, a Tabela veličina vozila je uklonjena._

---

</details>


##### Tabela oštećenja komponenti sistema 

| 1d10 | Sistem | Oštećeni rezultat | Uništeni rezultat |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina imovine ili opreme pohranjene u skladištu, proporcionalno šteti, uništena je. | Sav teret je uništen. |
| 2 | Komunikacije | Komunikacijski testovi trpe dodatni nivo težine svaki put kada su oštećeni. | Vozilo više ne može komunicirati niti zavaravati neprijateljske senzore. |
| 3 | Kontrole | Testovi Plovidbe, Vožnje ili Pilota trpe dodatni nivo težine svaki put kada su oštećeni; potreban je odmah test Kontrole. | Vozilo se više ne može upravljati niti mijenjati kurs. |
| 4 | Pogon | Brzina smanjena za iznos proporcionalan šteti. | Vozilo se zaustavlja; avioni se ruše. |
| 5 | Posada | Broj putnika proporcionalan šteti postaje žrtva. Pogođeni trpe Veliku ranu i moraju uspješno položiti test Izdržljivosti ili biti odmah ubijeni. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena za iznos proporcionalan šteti. Elektronski sistemi za jedan Nivo težine teži za korištenje. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Testovi Senzora, Navigacije i napada oružjem trpe dodatni nivo težine svaki put kada su oštećeni. | Vozilo je oslijepljeno. |
| 8 | Oružje | Broj oružanih sistema proporcionalan šteti postaje neoperativan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Ništa | Nema pogođenih sistema; samo šteta na Strukturi. | N/A |

<details>

<summary>* Errata zajednice</summary>

---

##### Tabela oštećenja komponenti sistema (Motor/Gorivo)

_Originalni rezultat je bio sljedeći: "Maksimalna brzina je prepolovljena..." Ovo je u suprotnosti s općim pravilom o kaznama za štetu proporcionalno oštećenju sistema: 25% štete = 25% kazne. Štoviše, potpuna pravila u Mythras Companionu ne spominju ovo prepolovljavanje brzine._

_Kao rezultat toga, tekst je zamijenjen istim unosom iz Drive Systems: "Brzina smanjena za iznos proporcionalan šteti."_

---

</details>


---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora i inercije (da spomenemo samo neke) složena pitanja, potrebno je određeno pojednostavljenje, pa vozilima se daje apstraktna ocjena brzine. Karakteristika Brzine treba se koristiti samo za grubo procjenjivanje da li jedno vozilo može preteći ili sustići drugo.

Ocjena brzine predstavlja nominalnu operativnu brzinu vozila. U hitnim situacijama ova se performansa može povećati za jedan korak, uz rizik od habanja ili oštećenja motora. Iako se ista tablica koristi za sve tipove vozila, treba primijeniti zdrav razum kako bi se uspoređivala samo vozila iste klase. Na primjer, ako zvjezdani brod i sportski automobil imaju istu stopu ubrzanja (Brzo), onda bi trebalo biti očito da je svemirski brod komparativno brži.

Povećanje brzine vozila iznad njegove standardne vrijednosti moguće je uspješnom provjerom Vožnje. Obično je ova dodatna brzina održiva samo kratko vrijeme – ne više od 1k6 minuta prije nego što se vozilo mora vratiti na svoju standardnu brzinu ili riskirati oštećenje pogonskog sistema. Kritični uspjeh provjere Vožnje omogućava produženje razdoblja veće brzine na 1k12 minuta.

Vozač može pokušati povećati brzinu vozila za 2 koraka, ali to zahtijeva Herculean provjeru Vožnje i vozilo maksimalno može održati ovu brzinu 1k3 minute: Kritični uspjeh neće produžiti trajanje povećane brzine.

##### Tabela ocjena brzine 

| Ocjena brzine | Maksimalna brzina za |
| :-- | :-: |
| Tromo | Enormni |
| Trom | |
| Sporo | Ogroman |
| Osrednje | |
| Blago | Veliki |
| Umjereno | |
| Brzo | Srednji |
| Vrlo brzo | |
| Brzo kao munja | Mali |


---
### Osobine

Maksimalan broj osobina koje vozilo može imati zavisi od veličine i tipa oplata.

Svako vozilo ima inherentnu osobinu: režim putovanja za koji je primarno dizajnirano. Stoga, avioni inherentno posjeduju osobinu Zrakoplovni, brodovi osobinu Pomorski, i tako dalje. Ova inherentna osobina se ne računa u raspoloživi broj osobina. Međutim, ako vozilo treba da uključuje drugi režim putovanja — na primjer, leteću podmornicu — onda bi osobinu Zrakoplovni trebalo uzeti kao jednu od raspoloživih osobina.

Neke osobine možda nisu dostupne, ovisno o tehnološkom nivou okruženja; Voditelji igre moraju sami procijeniti koje se osobine mogu primijeniti.

##### Tabela dodjele osobina vozila 

| Veličina | Maks. Osobina |
| :-- | :-: |
| Mali | 1 |
| Srednji | 2 |
| Veliki | 3 |
| Ogroman | 4 |
| Enormni | 5 |
| Kolosalni | 6 |

#### Zrakoplovni

Vozilo je sposobno za atmosferski let.

#### Svi tereni

Ova Osobina mora se koristiti sa kopnenim vozilima. Vozilo može prelaziti negostoljubiv, težak i strm teren, koristeći gusjenice, napredne sisteme ovjesa i pogona, ili snažne diferencijalne pogone.

#### Ukopavanje

Vozilo je dizajnirano da se ukopava i kopa tunele kroz zemlju. Može postići maksimalnu dubinu jednaku svojoj ocjeni Oplata x5 metara.

#### Kamuflirano

Vozilo posjeduje ili kamuflažnu boju ili mimetičke senzore koji mu omogućavaju da se stopi sa okolinom. Pokušaji vizualnog uočavanja vozila su za jedan nivo teži.

#### Teretno

Vozilo je dizajnirano specifično za prevoz tereta, a ne putnika. Putnički odjeljci su svedeni na minimum, dok je ostatak korisnog prostora vozila posvećen skladištenju tereta sa odgovarajućim sekcijama, alatima, pa čak i klimatizacijom (kao što su zamrzivači za transport kvarljive robe). Kada je natovareno teretom, brzina vozila je dva stepena niža nego što bi veličina njegovog oplata inače dozvoljavala.

#### Nosač

Vozilo je dizajnirano specifično za prevoz manjih, slabije opremljenih, ili možda daljinski upravljanih vozila, bilo civilne ili vojne prirode. Svako vozilo koje posjeduje ovu osobinu mora biti najmanje Enormno. Broj malih letjelica koje se prevoze može varirati ovisno o vrsti misije i svrsi, ali može biti od 10 do čak Strukturane ocjene vozila.

#### Konstrukcija

Vozilo je opremljeno za teške građevinske radove. Sva vozila sa ovom osobinom imaju i osobinu Svi tereni, ali brzina je dva koraka niža nego što bi njihova veličina oplata inače dozvoljavala. Vozilo je opremljeno alatima prikladnim za zadatak, kao što su dizalice, kašike bagera, kiperi i tako dalje.

#### Otporno na EMP

Vozilo je zaštićeno od napada elektromagnetskog pulsa.

#### Poboljšane performanse

Ocjena Brzine vozila je jedan korak viša od maksimalne za njegovu veličinu.

#### Izbacujuće sjedište

U slučaju nužde, izbacujuće sjedište izbacuje putnike nekoliko stotina metara u zrak, a zatim otvara padobran kako bi omogućilo sigurno slijetanje. Padobran je opcionalan. Nije preporučljivo za helikoptere (Kamov Ka-52 Aligator je značajan izuzetak).

#### FTL

Samo za svemirske letjelice. Letjelica je opremljena pogonom bržim od svjetlosti (bilo da je to hiper-pogon, warp pogon, generator crvotočina ili slično). FTL pogon ima zasebnu ocjenu Brzine koja u suštini mjeri brzinu kojom zvjezdani brod može preći jedan parsek (3.26 svjetlosnih godina, ili 31 bilion kilometara ili 19 biliona milja), kako slijedi:

##### Tabela ocjena FTL brzine 

| Ocjena brzine | Faktor za prelazak 1 parseka |
| :-- | :-: |
| Tromo | 10 |
| Trom | 8 |
| Sporo | 7 |
| Osrednje | 6 |
| Blago | 5 |
| Umjereno | 4 |
| Brzo | 3 |
| Vrlo brzo | 2 |
| Brzo kao munja | 1 |

Vrijeme faktora je na Voditelju igre da odluči, ovisno o tome koliko je napredan razvoj FTL tehnologije u okruženju. Na primjer, osnovni faktor može biti 1 dan, što znači da brod s Tromim FTL pogonom treba 10 dana da završi putovanje, dok plovilo s Brzim kao munja FTL pogonom završi putovanje za 1 dan. Drugdje, gdje je FTL tehnologija značajno manje efikasna, vrijeme faktora može se mjeriti u mjesecima, a ne danima.

Pretpostavlja se da brod ima rezerve goriva za povratno putovanje, ili sredstva za dopunjavanje goriva na odredištu.

Pretpostavite da bilo koja veličina zvjezdanog broda može biti opremljena FTL pogonom, iako, opet, to ovisi o okruženju.

FTL pogoni se ne mogu aktivirati unutar 1.5 Astronomskih jedinica od zvijezde (oko 225 miliona kilometara, ili 270 miliona milja). To znači da brodovi moraju koristiti podsvjetlosni pogon za kretanje do otprilike udaljenosti Marsa prije aktiviranja FTL sistema.

#### Kopneno vozilo

Vozilo je sposobno za kopneno putovanje.

#### Lebdenje

Vozilo lebdi iznad tla koristeći zračni jastuk ili anti-gravitacijski repulsor.

#### Luksuzno

Vozilo je dizajnirano specifično za prevoz putnika na određenom nivou luksuza. Višak teretnog prostora je pretvoren u luksuzni smještaj za putnike, bazene, hidromasažne kade, dodatnu posadu koja udovoljava željama putnika, i tako dalje.

#### Šine

Vozilo se oslanja na željeznički sistem. Vozila s ovom osobinom prirodno mogu postići ocjenu Brzine tri koraka višu nego što bi im veličina oplata inače dozvoljavala, ali su očito ograničena na kretanje samo po željezničkom sistemu.

#### Otporno

Svi sistemi mogu izdržati jedan dodatni pogodak više nego što je normalno određeno Veličinom. Ova Osobina se može slagati — tako Otporno 2 ukazuje da sistemi mogu izdržati 2 pogotka više nego obično po cijeni od dvije Tačke osobine.

#### Pomorski

Vozilo pluta na vodi.

#### Svemirska letjelica

Vozilo je zatvoreno protiv vakuuma i zaštićeno od kosmičkog zračenja i, ovisno o dizajnu, može biti sposobno za napuštanje i ponovni ulazak u atmosferu, te održavanje leta unutar atmosfere.

#### Nevidljivost

Samo za avione. Vozilo je dizajnirano da izbjegne detekciju radarima i drugim dalekometnim senzorskim sistemima. Pokušaji uočavanja vozila pomoću elektronskih senzora su za jedan nivo teži.

#### Podmornica

Vozilo je sposobno za zaranjanje ispod površine okeana do operativne dubine jednake svojoj ocjeni Oplata x10 metara. Dubina urušavanja – apsolutni maksimum koji podmornica može dosegnuti bez da bude zgnječena – iznosi 1.5 puta njene operativne dubine.

#### Superiorno rukovanje

Upravljanje vozilom ocjenjeno je kao Lako.

#### Nadzorni komplet

Vozilo ima ugrađen kompjuter, baznu stanicu za komunikaciju, prijemnik za signale uređaja za prisluškivanje i aparat za presretanje obližnjih signala pametnih telefona unutar 100 metara.

#### Čvrsto

Civilno vozilo s ovom osobinom crpi svoj Oplat iz Vojne kolone i automatski ima maksimalnu Strukturu. Vojno vozilo s ovom osobinom crpi svoj Oplat i Strukturu iz sljedećeg reda.

#### Traktorska zraka

Samo za svemirske letjelice. Brod je opremljen traktorskom zrakom koja može zarobiti i privući vozila s ocjenom oplata do dva nivoa manjom od njegove vlastite. Dakle, Ogroman zvjezdani brod mogao bi privući i zadržati oplat do Srednje veličine.

#### VTOL

Vertikalno polijetanje/slijetanje. Ova osobina je inherentna helikopterima i sličnim vozilima koja koriste kombinaciju rotora za stvaranje uzgona. Kada se primjenjuje na avione s fiksnim krilima, označava upotrebu fiksnih ili prilagodljivih potisnika za kontrolu zračnog položaja, uspona i spuštanja.

#### Vozilo na vodu

Vozilo se pokreće pomoću zglobnih nogu. Vozila šetači su ograničena na brzinu Blago, bez obzira na njihovu Veličinu. Međutim, šetači se mogu izgraditi do visina koje bi jednostavno bile nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za podvodno kretanje.

#### Naoružano

Vozilo je prilagođeno za smještaj oružja. Oružani sistemi su opisani u odjeljku [Oružje](0006_Vehicles.md?id=weapons) u nastavku.


---
## Oružje

Obično su samo vojni oklopi dizajnirani za smještaj oružja (montažne tačke, skladište municije, kontrolni sistemi). Osobina 'Naoružano' može se uzeti za civilna vozila koja mogu imati zahtjeve za oružjem.

Maksimalan broj oružanih sistema koje vozilo može podržati jednak je 1/10 njegovih Strukturnih bodova (tako da vozilo sa 40 Strukture može podržati 4 oružana sistema, ako je vojno vozilo, ili naoružano civilno vozilo).

Oružani sistemi zavise od Veličine vozila. Maksimalna vrsta oružanog sistema za različite Veličine prikazana je u tabelama u nastavku.


##### Tabela oružja po veličini 

| Veličina | Kopneno | Svemirska letjelica |
| :-- | :-- | :-- |
| Mali | Lako oružje (npr. Jurišna puška) | Srednje oružje (npr. Mitraljez, Raketni bacač) |
| Srednji | Srednje oružje (npr. Mitraljez, Raketni bacač) | Oružje na kupoli/Teško oružje (npr. Teški povezani mitraljezi, Minigun) |
| Veliki | Oružje na kupoli/Teško oružje (npr. Teški povezani mitraljezi, Minigun) | Baterija oružja (npr. Bojno topništvo) |
| Ogroman | Baterija oružja (npr. Bojno topništvo) | Napredno oružje (npr. Raketni sistemi) |
| Enormni | Napredno oružje (npr. Raketni sistemi) | Kičmeni montirani oružje (samo jedno) |
| Kolosalni | N/A | Kičmeni montirani oružje (do 3) |

##### Primjer statistike oružja 
 
| Oružje | Šteta | Domet | Stopa paljbe | Municija/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| Top 50 inča | 3k6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling puška | 3k6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5k6 | 5000/20km/60km | 1 | 1/5 |
| Srednji projektil/Torpedo | 6k10 | Maksimalni domet od 200km | 1 | 1/5 |
| Veliki/Krstareći projektil | 6k10+10 | Maksimalni domet od 1000km | 1 | 1/10 |
| Laser/Plazma top | 4k6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laser/Plazma top | 5k6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artiljerijska baterija | 5k6+6 | Maksimalni domet od 50km | 1 | 1/5 |
| Spinalna baterija | 10k6+6 | Maksimalni domet od 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Stope paljbe su za pojedinačni hitac, poluautomatsko i potpuno automatsko._

_Municija je kapacitet pucanja prije potrebe za ponovnim punjenjem. Punjenje je vrijeme ponovnog punjenja u Borbenim rundama, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevri

Izbjegavajući ili nagli manevri zahtijevaju uspješan test Vožnje/Pilota kako bi se osiguralo da vozač ili pilot zadrži kontrolu nad vozilom. Većina vozila je dizajnirana i izgrađena da izdrži povremene stresove i naprezanja, ali Voditelj igre može odlučiti da određeni manevar zahtijeva test na višoj razini težine, ovisno o tome koliko je ambiciozan. Neuspjeh znači da je kontrola nad vozilom izgubljena: bacite kocku na tabeli Gubitka kontrole.

Imajte na umu da se tabela Gubitka kontrole primjenjuje samo na kopnena vozila. Slični efekti mogu se primijeniti na zračna i svemirska vozila, ali Voditelji igre će morati prilagoditi razloge za specifičan efekat. Na primjer, zrakoplov, umjesto da proklizava, može ući u vrtoglavicu.

Također, inherentno rukovanje vozilom može imati dodatni utjecaj na test Vožnje. Rukovanje je ili Lako, Standardno, Teško, Strašno ili Herkulovski i određuje početnu tačku za test Vožnje prilikom izvođenja manevra. Nivo težine manevra se zatim primjenjuje na rukovanje kako bi se odredila konačna težina.

Na primjer, motocikl visokih performansi ima ugrađene žirostabilizatore koji mu daju Lako rukovanje. Vozač želi izvesti okretanje za 180 stepeni kako bi izbjegao progonitelja, manevar koji Voditelj igre ocjenjuje kao jedan dodatni nivo težine. Vozač stoga mora obaviti test Vožnje na Standardnom nivou umjesto na Lakom. Da je pokušavao isti manevar na nestabiliziranom motociklu, test Vožnje bi bio na Teškom nivou.

Superiorno rukovanje je Osobina. Ako vozilo nema tu osobinu kao dio svog opisa, onda je zadano Standardno rukovanje za svako vozilo veličine Veliko i manje. Ogromna i Enormna vozila inherentno imaju osobinu rukovanja Strašno i Herkulovski, respektivno, i Voditelj igre je slobodan da odluči da su određeni manevri jednostavno nemogući za postizanje zbog veličine vozila.

##### Tabela gubitka kontrole 

| 1k100 | Rezultat |
| :-: | :-- |
| 01-25 | Skretanje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 korak na 5 sekundi. |
| 26-40 | Proklizavanje. Vozač se mora boriti da zadrži vozilo pod kontrolom. Vozilo smanjuje brzinu za 2 koraka na 10 sekundi. |
| 41-50 | Ozbiljno proklizavanje. Vozilo završi okrenuto u pogrešnom smjeru i zaustavljeno na 15 sekundi. |
| 51-60 | Prevrtač. Vozilo proklizava i prevrće se, trpeći 3k10 štete na svojoj Strukturi. Putnici moraju uspješno položiti test Izdržljivosti ili pretrpjeti 1k10 štete na 1k3 lokacije pogodaka. |
| 61-70 | Ozbiljan prevrtač. Kao gore, ali vozilo trpi 3k10+10 štete, a putnici primaju 1k10 štete čak i ako test Izdržljivosti uspije, i 2k10 ako ne uspije. |
| 71-80 | Totalna šteta. Kao gore, ali vozilo je svedeno na 0 Strukture. Putnici trpe istu štetu kao za Ozbiljan prevrtač. |
| 81-90 | Eksplozija. Kao gore, ali sistem goriva vozila se zapali i eksplodira unutar 1k20+10 sekundi. Ako se ne mogu udaljiti, putnici trpe dodatnih 1k6 štete od opekotina na 1k6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao gore, ali eksplozija je trenutna. |
| 99-00 | Katastrofalni sudar. Putnici moraju uspješno položiti test Izdržljivosti ili biti odmah ubijeni. Šteta kao za Totalnu štetu trpi se bez obzira na to. |


---
## Primjer vozila

---

### Kopnena vozila

#### Presretač

Napredni luksuzni automobil, sportski automobil ili slično, ovaj automobil je izgrađen da bude brz i da se dobro nosi u borbi. Ovo je vrsta vozila o kojoj ljudi razmišljaju kada neko kaže "špijunski automobil".

| Presretač | |
| :- | :- |
| **Veličina / Tip** | Srednji vojni |
| **Oplat** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Brzina** | Vrlo brzo |
| **Upravljanje** | Lako |
| **Osobine** | [Izbacujuće sjedište](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Nadzorni komplet](0006_Vehicles.md?id=surveillance-suite), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač ulja, Raspršivač dima, Dvojni mitraljezi srednjeg kalibra (2k6+3) |

<br>

---

#### Motocikl za potjeru

Lagan, brz motocikl za brze potjere, Motocikl za potjeru nosi iznenađenje – ili par povezanih mitraljeza ili dvije rakete.

| Motocikl za potjeru | |
| :- | :- |
| **Veličina / Tip** | Mali civilni |
| **Oplat** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Brzina** | Vrlo brzo |
| **Upravljanje** | Lako |
| **Osobine** | [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dvije rakete (4k6) ili Dvojni laki mitraljezi (2k6) |

<br>

---

#### Limuzina automobil

Standardna limuzina sa 4 vrata, sa dovoljno prostora za udobno smještanje vozača i tri putnika. Žrtvuje prostor za teret kako bi uključila nadzorni komplet.

| Limuzina automobil | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplat** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Nenametljiv](0006_Vehicles.md?id=unobtrusive), [Nadzorni komplet](0006_Vehicles.md?id=surveillance-suite) |
| **Oružje** | Ništa |

<br>

---

#### Podmorski automobil

Dvosjedni automobil koji se može prebaciti u vodeni ili podvodni način rada za putovanje na vodi ili pod vodom. Dolazi s torpedom montiranim sprijeda i protuzračnim projektilom montiranim na krovu.

| Podmorski automobil | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplat** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Vrlo brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podmornica](0006_Vehicles.md?id=submersible), [Vozilo na vodu](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raketa (5k6), Torpedo (4k10) |

<br>

---

#### Nadzorni kombi

Običan, neobilježen kombi u kojem se nalazi tim agenata i komplet audio-vizualne opreme za snimanje.

| Nadzorni kombi | |
| :- | :- |
| **Veličina / Tip** | Veliki civilni |
| **Oplat** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Brzina** | Blago |
| **Upravljanje** | Standardno |
| **Osobine** | [Nadzorni komplet](0006_Vehicles.md?id=surveillance-suite), [Čvrsto](0006_Vehicles.md?id=tough) |
| **Oružje** | Ništa |

<br>

---

#### Taktičko potporno vozilo

Pikap ili džip s prostorom za dvoclanu posadu u kabini i strijelca koji stoji u sanduku i upravlja pokretnim mitraljezom srednjeg kalibra.

| Taktičko potporno vozilo | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplat** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Brzina** | Brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Montirani mitraljez srednjeg kalibra (2k6) |


<br>

---

### Plovila

#### Gliser

Tipični gliser, naoružan stražnjim bacačem mina.

| Gliser | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplat** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Brzina** | Vrlo brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vozilo na vodu](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač mina (5k6) |

<br>

---

#### Jahta

Vrsta luksuzne jahte koju bi oligarh mogao posjedovati. Vjerojatno opremljena nadzornim kompletom za zaštitu od neprijatelja koji pokušavaju činiti zlo.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Ogroman civilni |
| **Oplat** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Brzina** | Sporo |
| **Upravljanje** | Strašno |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Nadzorni komplet](0006_Vehicles.md?id=surveillance-suite), [Vozilo na vodu](0006_Vehicles.md?id=waterborne) |
| **Oružje** | Ništa |


<br>

---

### Avioni/Svemirske letjelice

#### Cepelin (Civilni putnički zračni brod)

Sličan Hindenburgu, ova klasa transkontinentalnih cepelina (i drugih iz svoje klase) dugačka je 245 metara i zahtijeva posadu od 40 do 61 osobe. Obično može prevesti 50 do 72 putnika u luksuznom smještaju.

| Cepelin | |
| :- | :- |
| **Veličina / Tip** | Enormni civilni |
| **Oplat** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Brzina** | Tromo |
| **Upravljanje** | Herkulovski |
| **Osobine** | [Zrakoplovni](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Ništa |
| **Oružje** | Ništa |

<br>

---

#### Jurišni helikopter

Tradicionalni Jurišni helikopter koristi svoju naprednu tehnologiju nadzora za presretanje telefonskih i bežičnih internetskih signala, te za praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbjegavanja praćenja putem Nevidljivosti su Strašni.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliki vojni |
| **Oplat** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Brzina** | Umjereno |
| **Upravljanje** | Lako |
| **Osobine** | [Zrakoplovni](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Nevidljivost](0006_Vehicles.md?id=stealth), [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Nadzorni komplet](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Ništa |
| **Oružje** | 1 Gatling puška (3k6), 4 Rakete (5k6) |

<br>

---

#### Višenamjenski borbeni avion

Ovaj dvosjedni kopneni borbeni avion (sličan tipu De Havilland Mosquito) poznat je po svojim performansama i svestranosti. Njegov prostor za bombe može nositi ili dvije bombe od 250 lb (tretirati kao srednje projektile dometa 0) ili jedan torpedo.

| Višenamjenski borbeni avion | |
| :- | :- |
| **Veličina / Tip** | Veliki vojni |
| **Oplat** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Brzina** | Umjereno |
| **Upravljanje** | Standardno |
| **Osobine** | [Zrakoplovni](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Ništa |
| **Oružje** | 4 nosna Gatling puška (4k6+3), 1 prostor za bombe (6k10 - vidi opis) |

<br>

---

#### Interstelarne teretne letjelice (Laki visokotehnološki transport)

Ovaj laki transport zahtijeva minimalnu posadu od samo dvoje, s prostorom za do četiri dodatna putnika. Ovdje je navedena standardna fabrička verzija, međutim mnogi vlasnici će primijeniti vlastite "posebne modifikacije" kao što su skriveni teretni prostor, poboljšane performanse, superiorno rukovanje, EMP otpornost, stealth i tako dalje.

| Interstelarne teretne letjelice | |
| :- | :- |
| **Veličina / Tip** | Srednja civilna svemirska letjelica |
| **Oplat** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Brzina** | Brzo (Parsek faktor od 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Zrakoplovni](0006_Vehicles.md?id=airborne), [Teretno](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirska letjelica](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Oružje** | 2x četverostruka kupola laserskog topa (5k6) |


<br>

---

#### Jedinica za opći kontakt (Ultra visokotehnološka svemirska letjelica)

Ovaj izuzetno visokotehnološki zvjezdani brod fizička je reprezentacija visoko naprednog umjetnog Uma, koji uzima oblik dvokilometarske serije poljem povezanih modula. Moduli su individualno namijenjeni i uključuju staništa, građevinske objekte, teretne prostore, objekte za preradu hrane, komplekse za zabavu, hangare, pa čak i neke tajne jedinice o kojima brodska inteligencija rijetko, ako ikada, raspravlja. Ne treba mu ljudska posada, ali može s lakoćom podržati populaciju putnika do 100.000. Mnogi putnici se rađaju i umiru na brodu Kontakt Jedinice: mnogi su tranzitni, dolaze i odlaze po želji.

| Jedinica za opći kontakt | |
| :- | :- |
| **Veličina / Tip** | Kolosalna civilna svemirska letjelica |
| **Oplat** | 20 |
| **Struktura** | 10.000 |
| **Sistemi** | 6 |
| **Brzina** | Umjereno (Parsek faktor od 4. Na ovom tehnološkom nivou, faktor je jednak 1 satu) |
| **Upravljanje** | Strašno |
| **Osobine** | [Zrakoplovni](0006_Vehicles.md?id=airborne), [Teretno](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Konstrukcija](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirska letjelica](0006_Vehicles.md?id=space-craft),[Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Traktorska zraka](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Oružje** | Ništa o čemu želi razgovarati |

<br>