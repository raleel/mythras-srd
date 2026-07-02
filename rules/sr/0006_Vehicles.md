# Vozila

Vozila u _Mythras Imperative_ tretirana su na polu-apstraktan način. U suštini, ona su pozadinska oruđa, korišćena da prevezu likove od A do B, sa malo potrebe za detaljnim opisima ili statistikama. Međutim, ponekad će Majstori igre zahtevati detalje za vozila kada je potrebno predstaviti ih u poterama ili borbenim situacijama.

Pravila u ovom odeljku omogućavaju predstavljanje većine vrsta vozila, ali na apstrahovan način koji je namenjen da omogući fleksibilnost i poboljša pripovedanje. Zvezdani brodovi i svemirske letelice su malo drugačiji, iako su bazirani na sličnim principima.

---
## Statistike

Sva vozila su opisana u smislu njihove Strukture, Oplata, Brzine, Sistema, Osobina i Štitova (ako su prisutni u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jednu od šest ocena Veličine koja određuje vrednost ili opseg ostalih karakteristika. Zbog svoje veće inherentne veličine i neprijateljskih okruženja svemira, zvezdani brodovi imaju sopstveni opseg vrednosti.
- **[Oplata](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Oklopne Poene
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Poene Izdržljivosti vozila
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima sa naprednom tehnologijom manipulacije energijom, štitovi mogu biti prisutni da štite vozilo, ali se mogu istrošiti pod dugotrajnom vatrom.
- **[Sistemi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući pogonski sistem, odeljak za posadu, itd.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocenu Brzine
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo takođe može imati jednu ili više Osobina. Osobine, poput Sposobnosti dodeljenih Stvorenjima u pravilima _Mythras Imperative_, ili Osobina Borbenog Stila, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružje](0006_Vehicles.md?id=weapons):** Slično Osobina, vozilo može biti opremljeno oružjem kako okruženje dozvoljava. Neki predloženi primeri i vrednosti su detaljno opisani u nastavku.

---
### Veličina, Tip i Struktura Oplata

Veličina i svrha vozila utiču na debljinu njegove oplate i otpornost njegove unutrašnje strukture. Motocikl, na primer, ima minimalnu oplatu, izgrađen je za brzinu i agilnost. Kopneni oklopnjak (masivna, gusenična ili točkaška oklopna zver, pogonjena parnim ili dizel motorima), budući da je mnogo veće vozilo dizajnirano za bojno polje, ima mnogo veću oplatu. Uporedne veličine oplata (i koliko udaraca oružja obično mogu da izdrže), sumirane su u tabelama Veličina vozila i Oplate ispod.

Kad god vozilo pretrpi štetu, dolazna šteta se smanjuje za vrednost njegove Oplate. Svaka preostala šteta se oduzima od Struktrurnih poena vozila i ima procentualnu šansu, jednaku probojnoj šteti, da utiče na Sistem. Ako vozilo ikada bude svedeno na nula Strukture, ono je ili potpuno uništeno, ili toliko loše uništeno da mora biti otpisano.

##### Kopnene Oplate

| Veličina | Struktura | Vrednost Civilne Oplate | Vrednost Vojne Oplate | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Malo | 1-20 | 1-3 | 4-6 | Motocikl, motocikl sa prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednje | 21-40 | 1-6 | 7-9 | Sedan, kombi, pikap, luksuzni automobil, luksuzni sportski automobil, muscle car, limuzina, čamac za spasavanje, gliser, zmaj, autožir |
| Veliko | 41-60 | 4-9 | 10-12 | Kamion, produžena limuzina, SUV, autobus, MPV, lični avion, jedrilica, jahta, tenk, helikopter, podmornica |
| Ogromno | 61-80 | 7-12 | 13-15 | Šleper, putnički avion, mlaznjak, plovilo obalske straže, jahta |
| Enormno | 81-100 | 10-15 | 16-18 | Voz, kruzer, ratni brod |

##### Oplate Zvezdanih brodova

| Veličina | Struktura | Vrednost Civilne Oplate | Vrednost Vojne Oplate | Primer |
| :-- | :-: | :-: | :-: | :-- |
| Malo | 10-50 | 4-9 | 10-12 | Jednosed borac |
| Srednje | 51-150 | 7-12 | 13-15 | Laki teretni brod, Šatl letelica |
| Veliko | 151-450 | 10-15 | 16-18 | Teški teretni brod, Krstarica |
| Ogromno | 451-1350 | 13-18 | 19-21 | Eskortna fregata, Laka bojna krstarica |
| Enormno | 1351-4050 | 16-21 | 21-24 | Generacijski brod, Teška bojna krstarica |
| Kolosalno | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, Bojna stanica za uništenje planete |

---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za ona vozila koja ih mogu montirati. Štitovi funkcionišu nešto drugačije od Oplate, zbog svoje ablativne prirode. Ako je dolazna šteta jednaka ili manja od vrednosti štitova, onda je sva blokirana. Ako šteta premašuje vrednost štita, onda višak smanjuje snagu štita za tu količinu.

_Na primer, transporter trupa ima energetski štit snage 12 poena. Ako bi transporter bio pogođen laserom za 11 štete, ona jednostavno ne prodire i nema dodatni efekat. S druge strane, ako bi transporter bio pogođen eksplozijom koja nanosi 15 štete, višak od tri poena bi smanjio snagu štita na 9._

Kada snaga deflektorskog štita padne na nulu, on se raspada. Svaka preostala šteta se prenosi na oplatu.

---
### Sistemi

Svaki put kada vozilo pretrpi štetu koja prodre kroz njegovu oplatu, postoji šansa, jednaka probojnoj šteti, da je pogođen vitalni Sistem.

_Na primer, 10 štete je naneto gliseru – vozilu sa 3 Oplate i 24 Strukture. Oplata se računa kao oklop, smanjujući štetu na 7. Ovo se oduzima od 24 Strukture i postoji 7% šanse da se ošteti jedan od sistema vozila._

Šteta koju Sistem može da pretrpi zasnovana je isključivo na veličini vozila. Ovo je modelovano brojem udaraca koje Sistem može da podnese, a ne stvarnom količinom štete. Jedan pogodak u Sistem na Malom vozilu će trenutno uništiti taj Sistem. Potrebna su dva pogotka da se unište Sistemi Srednje velikog vozila, tri za Veliko vozilo, i tako dalje. Pogledajte [Tabelu oštećenja sistema](0006_Vehicles.md?id=system-damage-table) u nastavku.

Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije proporcionalno broju primljenih udaraca – bilo procentualno smanjenje ili kaznu u Ocenama za sistemske zadatke. Specifičan efekat se zasniva na tome šta podsistem kontroliše, kao što je detaljno opisano u [Tabeli oštećenja komponenti sistema](0006_Vehicles.md?id=system-component-damage-table) u nastavku. U zavisnosti od toga koji je Sistem pogođen, efekti mogu biti katastrofalni.

_Na primer, kopneni oklopnjak – Enormno vozilo sa 5 pogodaka u sistem – pogođen dva puta u pogon izgubio bi 40% svoje snage i smanjio bi svoju Sporu Brzinu za dve Ocene na Trom. Slično, Veliki teretni brod – sa 3 pogotka u sistem – koji bi primio dva pogotka na Sistem Motor/Gorivo imao bi kaznu od dve Ocene na Brzinu, kao i na upotrebu Elektronskih sistema. Treći pogodak bi uništio Sistem Motor/Gorivo i brod zajedno sa njim._

<details>

<summary>* Erata Zajednice</summary>

---

#### Šteta

_Originalni tekst je ovde prvobitno bio dalje. Postavljen direktno iza odeljka Sistemi nepotrebno ponavlja prethodni paragraf._

- _"Šteta koja premašuje Oplatu prodire u vozilo, oštećujući Strukturu i moguće utičući na jedan ili više sistema. U zavisnosti od veličine vozila, šteta može biti manja ili katastrofalna._
- _Na primer, Veliko vozilo može primiti do dva pogotka na Sistem kao što je njegov Pogon. Treći pogodak funkcionalno uništava Pogon. Svaki put kada sistem primi pogodak, on ili gubi procenat svoje funkcije kao što je opisano u koloni Gubitak po Pogotku u Tabeli Oštećenja Sistema ispod ili osnovna funkcija (kao što su Pogon, Pilotiranje, Komunikacije, itd.) postaje teža za jednu Ocenu Težine po primljenom pogotku."_

_Gore navedeni paragrafi su uklonjeni i zamenjeni skraćenim izdanjen koje pominje drugi primer efekta Sistema._

---

</details>

##### Tabela oštećenja sistema

| Veličina | Pogoci u Sistem | Gubitak po Pogotku |
| :-- | :-: | :-- |
| Malo | 1 | 100% - Uništeno |
| Srednje | 2 | 1 Ocena ili 50% |
| Veliko | 3 | 1 Ocena ili 33% |
| Ogromno | 4 | 1 Ocena ili 25% |
| Enormno | 5 | 1 Ocena ili 20% |
| Kolosalno | 6 | 1 Ocena ili 16% |

<details>

<summary>* Erata Zajednice</summary>

---

##### Tabela oštećenja sistema (Originalna)

| Veličina | Pogoci u Sistem | Gubitak po Pogotku |
| :-- | :-: | :-- |
| Malo | 1 | 1 Ocena ili 50% |
| Srednje | 2 | 1 Ocena ili 33% |
| Veliko | 3 | 1 Ocena ili 25% |
| Ogromno | 4 | 1 Ocena ili 20% |
| Enormno | 5 | 1 Ocena ili 16% |
| Kolosalno | 6 | 1 Ocena ili 10% |

##### Tabela veličina vozila (iz [Veličina, Tip i Struktura oplate](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogoci u Sistem |
| :-- | :-: |
| Malo | 1 |
| Srednje | 2 |
| Veliko | 3 |
| Ogromno | 4 |
| Enormno | 5 |
| Kolosalno | 6 |

_Originalna pravila i primeri su nedosledni:_
- _"Sistemi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcionalnosti. To je jednako proporciji trenutnih pogodaka u odnosu na njihovu ukupnu sposobnost. Dakle, Enormno vozilo pogođeno dva puta u Pogon izgubilo bi 40% svoje snage (2 pogotka od maksimalno 5)"._
  - _Ovo sugeriše da bi Enormno vozilo prikazano sa 5 pogodaka u sistem trebalo da izgubi 20% sa svakim pogotkom - ali tabela kaže 16%._
- _"Na primer, Veliko vozilo može primiti do tri pogotka na sistem kao što je njegov Pogon. Četvrti pogodak funkcionalno uništava Pogon."_
  - _"Ovo sugeriše - kao i tabela - 25% štete po pogotku u sistem, ali Velika vozila mogu podneti samo 3 pogotka u sistem prema istoj tabeli._
- _Iako nije nedosledna, Tabela veličina vozila je bila redundantna; pojavljivala se ponovo u potpunijem obliku (dodajući kolonu Gubitak po Pogotku) samo nekoliko redova kasnije._

_Ovo otežava dosledno pravilo. Da bi se rešili ovi problemi, vrednosti i primeri su promenjeni kako bi se podudarali, a Tabela veličina vozila je uklonjena._

---

</details>

##### Tabela oštećenja komponenti sistema

| 1d10 | Sistem | Oštećeni rezultat | Uništeni rezultat |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina stvari ili opreme uskladištene u tovarnom prostoru, proporcionalno oštećenju, je uništena. | Sav teret je uništen. |
| 2 | Komunikacije | Provere komunikacija trpe dodatnu ocenu težine svaki put kada su oštećene. | Vozilo više ne može komunicirati niti zavaravati neprijateljske senzore. |
| 3 | Kontrole | Provere plovidbe, vožnje ili pilotiranja trpe dodatnu ocenu težine svaki put kada su oštećene; potrebna je trenutna provera kontrole. | Vozilo se više ne može upravljati niti menjati kurs. |
| 4 | Pogon | Brzina smanjena za količinu proporcionalnu oštećenju. | Vozilo se zaustavlja; letelica pada. |
| 5 | Posada | Broj putnika proporcionalno oštećenju postaje žrtva. Pogođeni trpe Veliku ranu i moraju uspeti u proveri Izdržljivosti ili će odmah poginuti. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena za količinu proporcionalnu oštećenju. Elektronski sistemi su jednu ocenu težine teži za upotrebu. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Provere senzora, navigacije i napada oružjem trpe dodatnu ocenu težine svaki put kada su oštećene. | Vozilo je oslepljeno. |
| 8 | Oružje | Broj oružanih sistema proporcionalno oštećenju postaje neoperativan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Ništa | Nema pogodaka u sisteme; samo šteta na Strukturi. | N/P |

<details>

<summary>* Erata Zajednice</summary>

---

##### Tabela oštećenja komponenti sistema (Motor/Gorivo)

_Originalni rezultat je bio sledeći: "Maksimalna brzina je prepolovljena..." Ovo je u suprotnosti sa opštim pravilom o kaznama za štetu proporcionalno oštećenju sistema: 25% štete = 25% kazne. Štaviše, puna pravila u Mythras Companionu ne pominju ovo prepolovljavanje brzine._

_Kao rezultat, tekst je zamenjen istim unosom iz Drive Systems: "Brzina smanjena za količinu proporcionalnu oštećenju."_

---

</details>

---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora i inercije (da pomenemo samo neke) složeni problemi, potrebno je pojednostavljenje, pa vozilima se daje apstraktna ocena brzine. Karakteristika Brzina treba da se koristi samo za grubu procenu da li jedno vozilo može prestići ili stići drugo.

Ocena brzine predstavlja nominalnu operativnu brzinu vozila. U hitnim situacijama ova performansa se može povećati za jedan korak, uz rizik od habanja ili oštećenja motora. Iako se ista tabela koristi za sve tipove vozila, treba primeniti zdrav razum tako da se porede samo vozila iste klase. Na primer, ako zvezdani brod i sportski automobil imaju istu stopu ubrzanja od Brzo, onda bi trebalo biti očigledno da je svemirski brod komparativno brži.

Povećanje Brzine vozila iznad njegove standardne vrednosti moguće je uz uspešnu proveru Vožnje. Obično, ova dodatna brzina je održiva samo kratko vreme – ne više od 1k6 minuta pre nego što vozilo mora da se spusti na svoju standardnu brzinu ili rizikuje oštećenje pogonskog sistema. Kritična provera Vožnje omogućava da se period veće brzine poveća na 1k12 minuta.

Vozač može pokušati da poveća brzinu vozila za 2 koraka, ali to zahteva Herkulovsku proveru Vožnje i maksimalno vreme koje vozilo može održati ovu brzinu je 1k3 minuta: Kritičan uspeh neće produžiti trajanje povećane brzine.

##### Tabela ocena brzine

| Ocena brzine | Maksimalna brzina za |
| :-- | :-: |
| Trom | Enormno |
| Spor | |
| Polagan | Ogromno |
| Prosečan | |
| Blag | Veliko |
| Umeren | |
| Brz | Srednje |
| Jaka | |
| Munjevit | Malo |

---
### Osobine

Maksimalan broj osobina koje vozilo može imati zavisi od veličine oplate i tipa.

Svako vozilo ima inherentnu osobinu: režim putovanja za koji je primarno dizajnirano. Stoga, letelice inherentno poseduju osobinu Vazdušni, čamci osobinu Plovni, i tako dalje. Ova inherentna osobina se ne računa u raspoloživi broj osobina. Međutim, ako vozilo treba da uključuje drugi režim putovanja — na primer, leteću podmornicu, onda bi osobinu Vazdušni trebalo uzeti kao jednu od njegovih raspoloživih osobina.

Neke osobine možda neće biti dostupne, u zavisnosti od nivoa tehnologije okruženja; Majstori igre moraju sami doneti odluke o tome koje osobine se mogu primeniti.

##### Tabela raspodele osobina vozila

| Veličina | Maks. Osobina |
| :-- | :-: |
| Malo | 1 |
| Srednje | 2 |
| Veliko | 3 |
| Ogromno | 4 |
| Enormno | 5 |
| Kolosalno | 6 |

#### Vazdušni

Vozilo je sposobno za atmosferski let.

#### Svi tereni

Ova Osobina se mora koristiti sa kopnenim vozilima. Vozilo može prelaziti negostoljubiv, težak i strm teren, koristeći gusenice, napredne sisteme vešanja i pogona, ili snažne diferencijale pogona.

#### Ukopavanje

Vozilo je dizajnirano za kopanje i tuneliranje kroz zemlju. Može postići maksimalnu dubinu jednaku njegovoj Vrednosti oplate x5 metara.

#### Maskirano

Vozilo poseduje ili kamuflažnu boju ili mimetičke senzore koji mu omogućavaju da se stopi sa okolinom. Pokušaji vizuelnog uočavanja vozila su za jednu ocenu teži.

#### Teretni

Vozilo je dizajnirano specifično za prevoz tereta, a ne putnika. Putnički odeljci su svedeni na minimum, dok je ostatak upotrebljivog prostora vozila posvećen skladištenju tereta sa odgovarajućim sekcijama, alatima, pa čak i klimatizacijom (kao što su zamrzivači za transport kvarljive robe). Kada je natovareno teretom, brzina vozila je za dva koraka niža nego što bi veličina njegove oplate obično dozvoljavala.

#### Nosač

Vozilo je specifično dizajnirano za prevoz manjih, slabije opremljenih posadom, ili eventualno daljinski upravljanih vozila civilne ili vojne prirode. Svako vozilo koje poseduje ovu osobinu mora biti najmanje Enormno. Broj malih letelica koje se prevoze može varirati u zavisnosti od tipa misije i svrhe, ali može biti od 10 do onoliko koliko je ocena Strukture vozila.

#### Konstrukcijsko

Vozilo je opremljeno za teške građevinske radove. Sva vozila sa ovom osobinom takođe imaju osobinu Svi Tereni, ali brzina je za dva koraka niža nego što bi veličina njihove oplate obično dozvoljavala. Vozilo je opremljeno alatima prikladnim za zadatak kao što su dizalice, bageri, kiper kamioni i slično.

#### Otporno na EMP

Vozilo je zaštićeno od napada elektromagnetnim pulsom.

#### Poboljšane performanse

Ocena Brzine vozila je za jedan korak viša od maksimuma za njegovu veličinu.

#### Katapult sedište

U slučaju nužde, katapult sedište izbacuje putnike nekoliko stotina metara u vazduh, a zatim otvara padobran kako bi omogućilo sigurno sletanje. Padobran je opcioni. Ne preporučuje se za helikoptere (Kamov Ka-52 Aligator je značajan izuzetak).

#### FTL

Samo za svemirske letelice. Letelica je opremljena motorom bržim od svetlosti (bilo da je to hiper-pogon, warp-pogon, generator crvotočina ili slično). FTL pogon ima zasebnu ocenu Brzine koja u suštini meri brzinu kojom zvezdani brod može preći jedan parsek (3,26 svetlosnih godina, ili 31 trilion kilometara, ili 19 trilion milja), i to na sledeći način:

##### Tabela FTL ocena brzine

| Ocena brzine | Faktor za prelazak 1 parseka |
| :-- | :-: |
| Trom | 10 |
| Spor | 8 |
| Polagan | 7 |
| Prosečan | 6 |
| Blag | 5 |
| Umeren | 4 |
| Brz | 3 |
| Jaka | 2 |
| Munjevit | 1 |

Faktor vremena je na Majstoru igre da odluči, u zavisnosti od toga koliko je napredan FTL razvoj u okruženju. Na primer, osnovni faktor bi mogao biti 1 dan, što znači da brodu sa Trom FTL pogonom treba 10 dana da završi putovanje, dok plovilo sa Munjevit FTL pogonom završava putovanje za 1 dan. Drugde, gde je FTL tehnologija znatno manje efikasna, faktor vremena bi se mogao meriti u mesecima, a ne danima.

Pretpostavlja se da brod ima rezerve goriva za povratno putovanje, ili sredstva za dopunjavanje goriva na odredištu.

Pretpostavlja se da bilo koja veličina zvezdanog broda može biti opremljena FTL pogonom, iako, opet, to zavisi od okruženja.

FTL pogoni se ne mogu aktivirati unutar 1,5 astronomskih jedinica od zvezde (oko 225 miliona kilometara, ili 270 miliona milja). To znači da brodovi moraju koristiti subsvetlosni pogon da bi se udaljili otprilike do udaljenosti Marsa pre aktiviranja FTL sistema.

#### Kopneno vozilo

Vozilo je sposobno za putovanje po zemlji.

#### Lebdenje

Vozilo lebdi iznad zemlje, koristeći ili vazdušni jastuk ili repulsor protiv gravitacije.

#### Luksuzno

Vozilo je dizajnirano specifično za prevoz putnika na određenom nivou luksuza. Višak prostora za teret je predat luksuznim putničkim smeštajima, bazenima, đakuzijima, dodatnoj posadi koja caters do hirova putnika, i tako dalje.

#### Šine

Vozilo se oslanja na šinski sistem. Vozila sa ovom osobinom prirodno mogu postići ocenu Brzine za tri koraka višu nego što bi veličina njihove oplate obično dozvoljavala, ali su očigledno ograničena na kretanje samo po šinskom sistemu.

#### Otporno

Svi sistemi mogu izdržati jedan dodatni pogodak više nego što je normalno određeno Veličinom. Ova Osobina se može slagati — tako da Otporno 2 ukazuje da sistemi mogu izdržati 2 pogotka više nego obično po ceni od dva poena Osobine.

#### Plovno

Vozilo je plovno na vodi.

#### Svemirski brod

Vozilo je zapečaćeno protiv vakuuma i zaštićeno od kosmičkog zračenja i može, u zavisnosti od dizajna, biti sposobno da napusti i ponovo uđe u atmosferu, i da održi let unutar atmosfere.

#### Nevidljivo

Samo za letelice. Vozilo je dizajnirano da izbegne detekciju radarima i drugim dalekometnim senzorskim sistemima. Pokušaji uočavanja vozila pomoću elektronskih senzora su za jednu ocenu teži.

#### Podvodno

Vozilo je sposobno za ronjenje ispod površine okeana do operativne dubine jednake njegovoj Oplati x10 metara. Dubina kolapsa — apsolutni maksimum koji podmornica može dostići bez drobljenja — je 1,5 puta veća od njene operativne dubine.

#### Superiorno rukovanje

Upravljanje vozilom je ocenjeno kao Lako.

#### Sistem za nadzor

Vozilo poseduje ugrađeni računar, komunikacionu baznu stanicu, prijemnik za signale prislušnih uređaja i aparaturu za presretanje obližnjih signala pametnih telefona u krugu od 100 metara.

#### Čvrst

Civilno vozilo sa ovom osobinom crpi svoju Oplatu iz Vojne kolone i automatski ima maksimalnu Strukturu. Vojno vozilo sa ovom Osobinom crpi svoju Oplatu i Strukturu iz sledećeg reda.

#### Zraka za vuču

Samo za svemirske letelice. Brod je opremljen zrakom za vuču koja može uhvatiti i privući vozila sa ocenom oplate do dva koraka manjom od sopstvene. Tako bi Ogroman zvezdani brod mogao privući i zadržati oplatu veličine do Srednje.

#### VTOL

Vertikalno poletanje/sletanje. Ova osobina je inherentna za helikoptere i slična vozila koja koriste kombinaciju rotora za proizvodnju uzgona. Kada se primeni na letelice sa fiksnim krilima, ukazuje na upotrebu fiksnih ili podesivih potisnika za kontrolu položaja u vazduhu, uspona i spuštanja.

#### Vozilo za kretanje po vodi

Vozilo se pokreće pomoću zglobnih nogu. Vozila sa hodalicom su ograničena na Brzinu Blaga, bez obzira na njihovu Veličinu. Međutim, Hodalice se mogu graditi do visina koje bi jednostavno bile nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za podvodno kretanje.

#### Naoružan

Vozilo je prilagođeno za smeštaj oružja. Oružani sistemi su diskutovani u odeljku [Oružje](0006_Vehicles.md?id=weapons).

---
## Oružje

Obično su samo vojne oplate dizajnirane za smeštaj oružja (nosači, skladišta municije, kontrolni sistemi). Osobina 'Naoružan' može se uzeti za civilna vozila koja mogu imati zahteve za oružjem.

Maksimalan broj oružanih sistema koje vozilo može podržati jednak je 1/10 njegovih strukturnih poena (tako da vozilo sa 40 Strukture može podržati 4 oružana sistema, ako je vojno vozilo, ili naoružano civilno vozilo).

Oružani sistemi zavise od Veličine vozila. Maksimalni tip oružanog sistema za različite Veličine prikazan je u tabelama ispod.

##### Tabela oružja po veličini

| Veličina | Kopneno | Svemirsko |
| :-- | :-- | :-- |
| Malo | Lako oružje (npr. automatska puška) | Srednje oružje (npr. mitraljez, raketni bacač) |
| Srednje | Srednje oružje (npr. mitraljez, raketni bacač) | Turret/Teško oružje (npr. teški spojeni mitraljezi, mini-gunovi) |
| Veliko | Turret/Teško oružje (npr. teški spojeni mitraljezi, mini-gunovi) | Baterija oružja (npr. bojna artiljerija) |
| Ogromno | Baterija oružja (npr. bojna artiljerija) | Napredno oružje (npr. raketni sistemi) |
| Enormno | Napredno oružje (npr. raketni sistemi) | Kičmeni montirano oružje (samo jedno) |
| Kolosalno | N/A | Kičmeni montirano oružje (do 3) |

##### Primer statistike oružja

| Oružje | Šteta | Domet | Brzina paljbe | Municija/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| Top od 50 inča | 3k6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-gun/Gatling gun | 3k6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5k6 | 5000/20km/60km | 1 | 1/5 |
| Srednji projektil/torpedo | 6k10 | Maks. domet 200km | 1 | 1/5 |
| Veliki/krstareći projektil | 6k10+10 | Maks. domet 1000km | 1 | 1/10 |
| Laser/Plazma top | 4k6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laser/Plazma top | 5k6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artiljerijska baterija | 5k6+6 | Maks. domet 50km | 1 | 1/5 |
| Kičmena montažna baterija | 10k6+6 | Maks. domet 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Brzine paljbe su za pojedinačni hitac, polu-automatsko i potpuno automatsko._

_Municija je sposobnost pucanja pre potrebe za ponovnim punjenjem. Punjenje je vreme ponovnog punjenja u Borbenim Rundama, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevri

Izbegavajući ili iznenadni manevri zahtevaju uspešnu proveru Vožnje/Pilotiranja kako bi se osiguralo da vozač ili pilot zadrže kontrolu nad vozilom. Većina vozila je dizajnirana i izgrađena da izdrži povremene stresove i naprezanja, ali Majstor igre može odlučiti da određeni manevar zahteva proveru sa višim stepenom težine, u zavisnosti od toga koliko je ambiciozan. Neuspeh znači gubitak kontrole nad vozilom: bacite na tabelu Gubitak kontrole.

Napomena: Tabela Gubitak kontrole primenjuje se samo na kopnena vozila. Slični efekti mogu se primeniti na vazdušna i svemirska vozila, ali Majstori igre će morati da prilagode obrazloženje za specifičan efekat. Na primer, letelica, umesto da proklizava, može ući u kovitlac.

Takođe, inherentno upravljanje vozilom može imati dodatni uticaj na proveru Vožnje. Upravljanje je ili Lako, Standardno, Teško, Ogromno ili Herkulovsko i određuje početnu tačku za proveru Vožnje prilikom izvođenja manevra. Ocena težine za manevar se zatim primenjuje na upravljanje da bi se odredila konačna težina.

Na primer, motocikl visokih performansi ima ugrađene žirostabilizatore koji mu daju Lako upravljanje. Vozač želi da izvede okret od 180 stepeni proklizavanjem da bi izbegao progonitelja, manevar koji Majstor igre ocenjuje kao dodatnu ocenu težine. Vozač stoga mora da izvrši svoju proveru Vožnje na Standardnoj, a ne na Lakoj težini. Da je pokušavao isti manevar na nestabilizovanom motociklu, provera Vožnje bi bila na Teškoj težini.

Superiorno upravljanje je Osobina. Ako vozilo nema tu osobinu kao deo svog opisa, onda je podrazumevano Standardno upravljanje za bilo koje vozilo veličine Veliko i manje. Ogromna i Enormna vozila inherentno imaju osobinu upravljanja Ogromno i Herkulovsko, respektivno, i Majstor igre je slobodan da odluči da su određeni manevri jednostavno nemogući za izvođenje zbog veličine vozila.

##### Tabela gubitka kontrole

| 1k100 | Rezultat |
| :-: | :-- |
| 01-25 | Zanošenje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 korak na 5 sekundi. |
| 26-40 | Proklizavanje. Vozač se mora boriti da zadrži vozilo pod kontrolom. Vozilo smanjuje brzinu za 2 koraka na 10 sekundi. |
| 41-50 | Ozbiljno proklizavanje. Vozilo se zaustavlja okrenuto u pogrešnom smeru na 15 sekundi. |
| 51-60 | Prevrnuti. Vozilo proklizava i prevrće se, trpeći 3k10 štete na Strukturi. Putnici moraju uspeti u proverama Izdržljivosti ili trpe 1k10 štete na 1k3 Lokacije pogodaka. |
| 61-70 | Ozbiljno prevrtanje. Kao gore, ali vozilo trpi 3k10+10 štete, a putnici primaju 1k10 štete čak i ako provera Izdržljivosti uspe, i 2k10 ako ne uspe. |
| 71-80 | Potpuni otpis. Kao gore, ali vozilo je svedeno na 0 Strukture. Putnici trpe istu štetu kao za Ozbiljno prevrtanje. |
| 81-90 | Eksplozija. Kao gore, ali se gorivni sistem vozila zapali i eksplodira u roku od 1k20+10 sekundi. Ako ne mogu da se izvuku, putnici trpe dodatnih 1k6 štete od opekotina na 1k6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao gore, ali eksplozija je trenutna. |
| 99-00 | Katastrofalni udes. Putnici moraju uspešno baciti Izdržljivost ili će odmah poginuti. Šteta kao za Potpuni otpis nastaje bez obzira na to. |

---
## Primeri vozila

---

### Kopnena vozila

#### Interceptor

Luksuzni automobil, sportski automobil ili slično, nadograđen i stvoren da ide brzo i da se dobro nosi u borbi. Ovo je vrsta vozila na koju ljudi pomisle kada neko kaže "špijunski automobil".

| Interceptor | |
| :- | :- |
| **Veličina / Tip** | Srednje vojno |
| **Oplata** | 6 |
| **Struktura** | 40 |
| **Sistemi** | 2 |
| **Brzina** | Jaka |
| **Upravljanje** | Lako |
| **Osobine** | [Katapult sedište](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Sistem za nadzor](0006_Vehicles.md?id=surveillance-suite), [Naoružan](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dispenzer za uljnu mrlju, Dispenzer dima, Dvostruki srednji mitraljezi (2k6+3) |

<br>

---

#### Motocikl za poteru

Lagani, brzi motocikl za brze potere, Motocikl za poteru nosi iznenađenje – bilo par spojenih mitraljeza ili dve rakete.

| Motocikl za poteru | |
| :- | :- |
| **Veličina / Tip** | Malo civilno |
| **Oplata** | 2 |
| **Struktura** | 12 |
| **Sistemi** | 1 |
| **Brzina** | Jaka |
| **Upravljanje** | Lako |
| **Osobine** | [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Naoružan](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dve rakete (4k6) ili dvostruki laki mitraljezi (2k6) |

<br>

---

#### Sedan automobil

Standardni sedan sa 4 vrata sa dovoljno prostora da udobno smesti vozača i tri putnika. Žrtvuje tovarni prostor da bi uključio sistem za nadzor.

| Sedan automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 4 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Brz |
| **Upravljanje** | Standardno |
| **Osobine** | [Neprimetan](0006_Vehicles.md?id=unobtrusive), [Sistem za nadzor](0006_Vehicles.md?id=surveillance-suite) |
| **Oružje** | Nema |

<br>

---

#### Potopni automobil

Automobil za dve osobe koji se može prebaciti u vodeni ili podvodni režim za putovanje po vodi ili pod vodom. Dolazi sa prednjim torpedom i gornjim projektilom zemlja-vazduh.

| Potopni automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 6 |
| **Struktura** | 25 |
| **Sistemi** | 2 |
| **Brzina** | Jaka |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podvodno](0006_Vehicles.md?id=submersible), [Vozilo za kretanje po vodi](0006_Vehicles.md?id=waterborne), [Naoružan](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raketa (5k6), Torpedo (4k10) |

<br>

---

#### Kombi za nadzor

Običan, neoznačeni kombi u kojem se nalazi tim agenata i komplet audio-vizuelne opreme za snimanje.

| Kombi za nadzor | |
| :- | :- |
| **Veličina / Tip** | Veliko civilno |
| **Oplata** | 9 |
| **Struktura** | 60 |
| **Sistemi** | 3 |
| **Brzina** | Blag |
| **Upravljanje** | Standardno |
| **Osobine** | [Sistem za nadzor](0006_Vehicles.md?id=surveillance-suite), [Čvrst](0006_Vehicles.md?id=tough) |
| **Oružje** | Nema |

<br>

---

#### Vozilo za taktičku podršku

Pikap ili džip sa prostorom za dvočlanu posadu u kabini i topdžiju koji stoji u tovarnom delu i upravlja okretnim srednjim mitraljezom.

| Vozilo za taktičku podršku | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 6 |
| **Struktura** | 30 |
| **Sistemi** | 2 |
| **Brzina** | Brz |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružan](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Montirani srednji mitraljez (2k6) |

<br>

---

### Plovila

#### Gliser

Tipičan gliser, naoružan zadnjim dispenzerom mina.

| Gliser | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Oplata** | 3 |
| **Struktura** | 24 |
| **Sistemi** | 2 |
| **Brzina** | Jaka |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vozilo za kretanje po vodi](0006_Vehicles.md?id=waterborne), [Naoružan](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dispenzer mina (5k6) |

<br>

---

#### Jahta

Vrsta luksuzne jahte koju bi oligarh posedovao. Verovatno opremljena sistemom za nadzor radi zaštite od neprijatelja koji pokušavaju da naude.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Ogromno civilno |
| **Oplata** | 10 |
| **Struktura** | 75 |
| **Sistemi** | 4 |
| **Brzina** | Polagan |
| **Upravljanje** | Ogromno |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Sistem za nadzor](0006_Vehicles.md?id=surveillance-suite), [Vozilo za kretanje po vodi](0006_Vehicles.md?id=waterborne) |
| **Oružje** | Nema |

<br>

---

### Letelice/Svemirske letelice

#### Cepelin (Civilni vazdušni brod)

Sličan Hindenburgu, ova klasa transkontinentalnog cepelina (i drugih iz svoje klase) dugačka je 245 metara i zahteva posadu od 40 do 61 osobe. Obično može prevoziti 50 do 72 putnika u luksuznom smeštaju.

| Cepelin | |
| :- | :- |
| **Veličina / Tip** | Enormno civilno |
| **Oplata** | 10 |
| **Struktura** | 85 |
| **Sistemi** | 5 |
| **Brzina** | Trom |
| **Upravljanje** | Herkulovsko |
| **Osobine** | [Vazdušni](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | Nema |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter koristi svoju naprednu tehnologiju nadzora za presretanje telefonskih i bežičnih internet signala, te za praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbegavanja praćenja putem Prikrivanja su Ogromni.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Oplata** | 11 |
| **Struktura** | 50 |
| **Sistemi** | 3 |
| **Brzina** | Umeren |
| **Upravljanje** | Lako |
| **Osobine** | [Vazdušni](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Nevidljivo](0006_Vehicles.md?id=stealth), [Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Sistem za nadzor](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | 1 Gatling top (3k6), 4 Rakete (5k6) |

<br>

---

#### Višenamenski borbeni avion

Ovaj dvosed kopneni lovac (sličan tipu De Havilland Mosquito) poznat je po svojim performansama i svestranosti. Njegov bombni odeljak može nositi ili dve bombe od 250 lb (tretirati kao srednje projektile sa dometom 0) ili jedan torpedo.

| Višenamenski borbeni avion | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Oplata** | 10 |
| **Struktura** | 45 |
| **Sistemi** | 3 |
| **Brzina** | Umeren |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušni](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Nema |
| **Oružje** | 4 Gatling topa montirana na nosu (4k6+3), 1 bombni odeljak (6k10 - vidi opis) |

<br>

---

#### Međuzvezdani teretni brod (Laki visokotehnološki transport)

Ovaj laki transport zahteva minimalnu posadu od samo dva člana, sa prostorom za do četiri dodatna putnika. Standardna verzija je ovde navedena, međutim, mnogi vlasnici će primeniti sopstvene "specijalne modifikacije" kao što su skriveni tovarni prostor, poboljšane performanse, superiorno upravljanje, otpornost na EMP, nevidljivost i tako dalje.

| Međuzvezdani teretni brod | |
| :- | :- |
| **Veličina / Tip** | Srednje civilni svemirski brod |
| **Oplata** | 10 |
| **Struktura** | 80 |
| **Sistemi** | 2 |
| **Brzina** | Brz (Faktor Parseka od 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Vazdušni](0006_Vehicles.md?id=airborne), [Teretni](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirski brod](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Oružje** | 2x četvorostruka laserska topovska kupola (5k6) |

<br>

---

#### Jedinica za opšti kontakt (Ultra visokotehnološka svemirska letelica)

Ovaj izuzetno visokotehnološki zvezdani brod je fizička reprezentacija visoko naprednog veštačkog Uma, koji poprima oblik serije modula povezanih poljem, dugačkih dva kilometra. Moduli su individualno namenjeni i uključuju staništa, građevinske objekte, teretne prostore, objekte za preradu hrane, komplekse za slobodno vreme, hangar zalive, pa čak i neke tajne jedinice o kojima brodska inteligencija retko, ako ikada, razgovara. Ne treba mu ljudska posada, ali može sa lakoćom da podrži populaciju putnika do 100.000. Mnogi putnici se rađaju i umiru na jedinici za kontakt: mnogi su tranzitni, dolaze i odlaze po želji.

| Jedinica za opšti kontakt | |
| :- | :- |
| **Veličina / Tip** | Kolosalni civilni svemirski brod |
| **Oplata** | 20 |
| **Struktura** | 10,000 |
| **Sistemi** | 6 |
| **Brzina** | Umeren (Faktor Parseka od 4. Na ovom tehnološkom nivou, Faktor je jednak 1 satu) |
| **Upravljanje** | Ogromno |
| **Osobine** | [Vazdušni](0006_Vehicles.md?id=airborne), [Teretni](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Konstrukcijsko](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirski brod](0006_Vehicles.md?id=space-craft),[Superiorno rukovanje](0006_Vehicles.md?id=superior-handling), [Zraka za vuču](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Oružje** | Nema o čemu bi raspravljala |

<br>