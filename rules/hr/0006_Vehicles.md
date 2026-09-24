# Vozila

Vozila u _Mythras Imperative_ tretiraju se na polu-apstraktan način. U biti, ona su pozadinski alati koji se koriste za prijevoz likova od točke A do točke B, uz malu potrebu za detaljnim opisom ili statistikama. Ipak, povremeno će Voditeljima igre trebati detalji za vozila kada ih je potrebno prikazati u potjerama ili borbenim situacijama.

Pravila u ovom odjeljku omogućuju prikaz većine vrsta vozila, ali na apstraktan način koji je namijenjen pružanju fleksibilnosti i poboljšanju pripovijedanja. Zvjezdani brodovi i svemirske letjelice malo su drugačiji, iako se temelje na sličnim principima.

---
## Statistike

Sva vozila opisana su u terminima Strukture, Oplate, Brzine, Sustava, Osobina i Štitova (ako su prisutni u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jednu od šest ocjena Veličine koja određuje vrijednost ili raspon ostalih karakteristika. Zbog svoje veće intrinzične veličine i neprijateljskih uvjeta u svemiru, zvjezdani brodovi imaju svoj raspon vrijednosti.
- **[Oplata](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja bodove oklopa.
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja bodove izdržljivosti vozila.
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima s naprednom tehnologijom manipulacije energijom mogu postojati štitovi koji štite vozilo, ali se mogu istrošiti pod kontinuiranom paljbom.
- **[Sustavi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući pogonski agregat, odjeljak za posadu i tako dalje.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocjenu Brzine.
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo također može imati jednu ili više Osobina. Osobine, poput Sposobnosti dodijeljenih stvorenjima u pravilima _Mythras Imperative_ ili Osobina borbenog stila, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružje](0006_Vehicles.md?id=weapons):** Slično Osobini, vozilo može biti opremljeno oružjem ako okruženje to dopušta. Neki predloženi primjeri i vrijednosti detaljno su opisani u nastavku.


---
### Veličina oplate, vrsta i struktura

Veličina i svrha vozila utječu na debljinu njegove oplate i otpornost njegove unutarnje strukture. Motocikl, na primjer, ima minimalnu oplatu jer je izgrađen za brzinu i okretnost. Zemaljski željezni oklopnjak (masivni, gusjenični ili kotačni oklopni div, pokretan parnim ili dizelskim motorima), budući da je puno veće vozilo dizajnirano za bojište, ima puno veću oplatu. Usporedne veličine oplata (i koliko udaraca oružjem obično mogu izdržati) sažete su u tablicama Veličine vozila i Oplate u nastavku.

Kad god vozilo pretrpi štetu, dolazna šteta se smanjuje za vrijednost njegove Oplate. Svaka preostala šteta oduzima se od bodova Strukture vozila i ima postotnu šansu, jednaku prodornoj šteti, da utječe na Sustav. Ako se struktura vozila ikada smanji na nulu, ono je ili potpuno uništeno ili toliko teško oštećeno da se mora otpisati.

##### Zemaljske oplate 

| Veličina | Struktura | Vrijednost civilne oplate | Vrijednost vojne oplate | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 1-20 | 1-3 | 4-6 | Motocikl, motocikl s prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednja | 21-40 | 1-6 | 7-9 | Sedan, kombi, pickup, luksuzni automobil, luksuzni sportski automobil, muscle car, limuzina, čamac za spašavanje, gliser, zmaj, autogiro |
| Velika | 41-60 | 4-9 | 10-12 | Kamion, rastegnuta limuzina, SUV, autobus, putničko vozilo, osobni zrakoplov, jedrilica, jahta za razonodu, tenk, helikopter, podmornica |
| Ogromna | 61-80 | 7-12 | 13-15 | Šleper, putnički zrakoplov, mlaznjak, plovilo obalne straže, jahta |
| Kolosalna | 81-100 | 10-15 | 16-18 | Vlak, kruzer, mornaričko plovilo |

##### Oplate zvjezdanih brodova 

| Veličina | Struktura | Vrijednost civilne oplate | Vrijednost vojne oplate | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mala | 10-50 | 4-9 | 10-12 | Jednosjed lovac |
| Srednja | 51-150 | 7-12 | 13-15 | Laki teretnjak, šatl |
| Velika | 151-450 | 10-15 | 16-18 | Teški teretnjak, krstarica |
| Ogromna | 451-1350 | 13-18 | 19-21 | Eskortna fregata, laka bojna krstarica |
| Kolosalna | 1351-4050 | 16-21 | 21-24 | Generacijski brod, teška bojna krstarica |
| Gigantska | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, bojna stanica za uništavanje planeta |


---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za ona vozila koja ih mogu postaviti. Štitovi rade malo drugačije od Oplate, zbog svoje ablativne prirode. Ako je dolazna šteta jednaka ili manja od vrijednosti štitova, onda je sva blokirana. Ako šteta premašuje vrijednost štita, tada svaki višak smanjuje snagu štita za taj iznos.

_Na primjer, transporter trupa ima snagu energetskog štita od 12 bodova. Ako je transporter pogođen laserom za 11 štete, on jednostavno ne prodire i nema dodatni učinak. S druge strane, ako je transporter pogođen eksplozijom koja nanosi 15 štete, višak od tri boda spustio bi snagu štita na 9._

Kada snaga deflektorskog štita padne na nulu, on se urušava. Svaka preostala šteta prenosi se na oplatu.

---
### Sustavi

Svaki put kada vozilo pretrpi štetu koja prodre kroz njegovu oplatu, postoji šansa, jednaka prodornoj šteti, da je pogođen vitalni Sustav.

_Na primjer, 10 štete se nanosi Gliseru - vozilu s 3 Oplate i 24 Strukture. Oplata se računa kao oklop koji smanjuje štetu na 7. To se oduzima od 24 boda Strukture i postoji 7% šanse da se ošteti jedan od Sustava vozila._

Šteta koju Sustav može izdržati temelji se isključivo na veličini vozila. To se modelira brojem udaraca koje Sustav može podnijeti, a ne stvarnim iznosom štete. Jedan pogodak u Sustav na Malom vozilu trenutno će uništiti taj Sustav. Potrebna su dva pogotka da se unište sustavi vozila Srednje veličine, tri za Veliko vozilo i tako dalje. Pogledajte [Tablicu oštećenja sustava](0006_Vehicles.md?id=system-damage-table) u nastavku.

Sustavi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije razmjeran broju primljenih pogodaka - bilo postotno smanjenje ili penal stupnja na zadacima Sustava. Specifični učinak temelji se na tome što podsustav kontrolira, kao što je detaljno opisano u [Tablici oštećenja komponenti sustava](0006_Vehicles.md?id=system-component-damage-table) u nastavku. Ovisno o tome koji je Sustav pogođen, učinci mogu biti katastrofalni.

_Na primjer, Zemaljski željezni oklopnjak - Kolosalno vozilo s 5 pogodaka u sustav - pogođen dvaput u Pogon izgubio bi 40% svoje snage i smanjio bi svoju Sporu Brzinu za dva stupnja na Tromu. Slično tome, veliki teretnjak - s 3 pogotka u sustav - koji primi dva pogotka na sustav Motora/Goriva imao bi penal od dva stupnja na Brzinu, kao i na korištenje elektroničkih sustava. Treći pogodak uništio bi sustav Motora/Goriva, a s njim i brod._


<details>

<summary>* Errata zajednice</summary>

---

#### Šteta


_Izvorni tekst ovdje je prvotno bio dalje. Postavljen izravno nakon odjeljka Sustavi, nepotrebno ponavlja prethodni odlomak._

- _"Šteta koja premašuje Oplatu prodire u vozilo, oštećujući Strukturu i moguće utječući na jedan ili više sustava. Ovisno o veličini vozila, šteta može biti manja ili katastrofalna._
- _Na primjer, Veliko vozilo može primiti do dva pogotka na sustav kao što je Pogon. Treći pogodak funkcionalno uništava Pogon. Svaki put kada sustav primi pogodak, on ili gubi postotak svoje funkcije kako je opisano u stupcu Gubitak po pogotku u Tablici oštećenja sustava u nastavku, ili osnovna funkcija (kao što su Pogon, Pilotiranje, Komunikacije, itd.) postaje jedan Stupanj težine teža po primljenom pogotku."_

_Gornji odlomci su uklonjeni i na njihovo mjesto dolazi skraćeno uređivanje koje poziva na drugi primjer učinka Sustava._

---

</details>

##### Tablica oštećenja sustava 

| Veličina | Pogodci u sustav | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 100% - Uništeno |
| Srednja | 2 | 1 stupanj ili 50% |
| Velika | 3 | 1 stupanj ili 33% |
| Ogromna | 4 | 1 stupanj ili 25% |
| Kolosalna | 5 | 1 stupanj ili 20% |
| Gigantska | 6 | 1 stupanj ili 16% |


<details>

<summary>* Errata zajednice</summary>

---

##### Tablica oštećenja sustava (Izvorna) 

| Veličina | Pogodci u sustav | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mala | 1 | 1 stupanj ili 50% |
| Srednja | 2 | 1 stupanj ili 33% |
| Velika | 3 | 1 stupanj ili 25% |
| Ogromna | 4 | 1 stupanj ili 20% |
| Kolosalna | 5 | 1 stupanj ili 16% |
| Gigantska | 6 | 1 stupanj ili 10% |

##### Tablica veličine vozila (iz [Veličina oplate, vrsta i struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogodci u sustav |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Gigantska | 6 |

_Izvorna pravila i primjeri su nedosljedni:_
- _"Sustavi koji su oštećeni, ali još nisu uništeni, trpe gubitak u funkcionalnosti. To je jednako udjelu trenutnih pogodaka u odnosu na njegovu ukupnu sposobnost. Dakle, Kolosalno vozilo pogođeno dvaput u Pogon izgubilo bi 40% svoje snage (2 pogotka od maksimalno 5)."_ 
   - _Ovo sugerira da bi Kolosalno vozilo prikazano s 5 pogodaka u sustav trebalo izgubiti 20% sa svakim pogotkom - ali tablica kaže 16%._
- _"Na primjer, Veliko vozilo može primiti do tri pogotka na sustav kao što je Pogon. Četvrti pogodak funkcionalno uništava Pogon."_ 
  - _"Ovo sugerira - kao i tablica - 25% štete po pogotku u sustav, ali Velika vozila mogu primiti samo 3 pogotka u sustav prema istoj tablici._
- _Iako nije nedosljedno, Tablica veličine vozila bila je suvišna; ponovno se pojavljuje u potpunijem obliku (dodajući stupac Gubitak po pogotku) samo nekoliko redaka kasnije._

_Ovo otežava postojanje dosljednog pravila. Kako bi se riješili ovi problemi, vrijednosti i primjeri su promijenjeni kako bi se podudarali, a Tablica veličine vozila je uklonjena._

---

</details>


##### Tablica oštećenja komponenti sustava 

| 1d10 | Sustav | Rezultat oštećenja | Rezultat uništenja |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina imovine ili opreme pohranjene u skladištu, razmjerna šteti, je uništena. | Sav teret je uništen. |
| 2 | Komunikacije | Komunikacijski valjci trpe jedan dodatni Stupanj težine svaki put kada su oštećeni. | Vozilo više ne može komunicirati ili ometati neprijateljske senzore. |
| 3 | Kontrole | Valjci za čamce, Pogon ili Pilotiranje trpe jedan dodatni Stupanj težine svaki put kada su oštećeni; potrebno je odmah baciti za Kontrolu. | Vozilom se više ne može upravljati niti mijenjati kurs. |
| 4 | Pogon | Brzina smanjena za iznos razmjeran šteti. | Vozilo se trenutno zaustavlja; zrakoplovi se ruše. |
| 5 | Posada | Broj putnika razmjeran šteti postaje žrtvama. Pogođeni trpe Veliku ranu i moraju uspjeti u bacanju za Izdržljivost ili biti trenutno ubijeni. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena za iznos razmjeran šteti. Elektronički sustavi jedan Stupanj težine teži za korištenje. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Valjci za Senzore, Navigaciju i Napad oružjem trpe jedan dodatni Stupanj težine svaki put kada su oštećeni. | Vozilo postaje slijepo. |
| 8 | Oružje | Broj sustava oružja razmjeran šteti postaje nefunkcionalan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Ništa | Sustavi nisu pogođeni; samo šteta na Strukturi. | N/A |

<details>

<summary>* Errata zajednice</summary>

---

##### Tablica oštećenja komponenti sustava (Motor/Gorivo)

_Izvorni rezultat bio je sljedeći: "Maksimalna brzina je prepolovljena..." Ovo je u suprotnosti s općim pravilom penala štete razmjerno šteti Sustava: 25% štete = 25% penala. Štoviše, cjelovita pravila u Mythras Companionu ne spominju ovo prepolovljenje Brzine._

_Kao rezultat toga, tekst je zamijenjen istim unosom iz sustava Pogona: "Brzina smanjena za iznos razmjeran šteti."_

---

</details>


---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora i inercije (da spomenemo samo neke) složena pitanja, potrebno je određeno pojednostavljenje, pa vozila dobivaju apstraktnu ocjenu brzine. Karakteristika Brzina trebala bi se koristiti samo za približnu procjenu može li jedno vozilo prestići ili sustići drugo.

Ocjena brzine predstavlja nominalnu operativnu brzinu vozila. U hitnim situacijama ova se izvedba može povećati za jedan stupanj, uz rizik od trošenja ili oštećenja motora. Iako se ista tablica koristi za sve tipove vozila, zdrav razum treba primijeniti tako da se uspoređuju samo vozila iste klase. Na primjer, ako zvjezdani brod i sportski automobil imaju istu brzinu ubrzanja od Brz, onda bi trebalo biti očito da je svemirski brod komparativno brži.

Povećanje Brzine vozila iznad njegove standardne vrijednosti moguće je uz uspješno bacanje za Vožnju. Obično je ova dodatna brzina održiva samo kratko vrijeme – ne više od 1d6 minuta prije nego što vozilo mora pasti na svoju standardnu brzinu ili riskirati oštećenje svog pogonskog sustava. Kritično bacanje za Vožnju omogućuje produljenje razdoblja veće brzine na 1d12 minuta.

Vozač može pokušati pogurati brzinu vozila za 2 stupnja, ali to zahtijeva Herkulovsko bacanje za Vožnju, a maksimalno vrijeme koje vozilo može održavati ovu brzinu je 1d3 minute: Kritični uspjeh neće produljiti trajanje povećane brzine.

##### Tablica ocjene brzine 

| Ocjena brzine | Maks. brzina za |
| :-- | :-: |
| Trom | Kolosalna |
| Sporo | |
| Polako | Ogromna |
| Osrednje | |
| Blago | Velika |
| Umjereno | |
| Brzo | Srednja |
| Hitro | |
| Munjevito | Mala |


---
### Osobine

Maksimalan broj osobina koje vozilo može imati ovisi o veličini i vrsti oplate.

Svako vozilo ima inherentnu osobinu: način putovanja za koji je prvenstveno dizajnirano. Stoga zrakoplovi inherentno imaju osobinu Zračni, čamci osobinu Pomorski, i tako dalje. Ova inherentna osobina ne računa se u dostupan broj osobina. Međutim, ako bi vozilo trebalo uključivati drugi način putovanja — leteću podmornicu na primjer, tada bi se osobina Zračni trebala uzeti kao jedna od dostupnih osobina.

Neke osobine možda neće biti dostupne, ovisno o razini tehnologije okruženja; Voditelji igre moraju donijeti vlastite procjene o tome koje se osobine mogu primijeniti.

##### Tablica dodjele osobina vozila 

| Veličina | Maks. osobina |
| :-- | :-: |
| Mala | 1 |
| Srednja | 2 |
| Velika | 3 |
| Ogromna | 4 |
| Kolosalna | 5 |
| Gigantska | 6 |

#### Zračni

Vozilo je sposobno za atmosferski let.

#### Terenski

Ova se Osobina mora koristiti s kopnenim vozilima. Vozilo može prolaziti kroz negostoljubiv, težak i strm teren, koristeći gusjenice, napredni ovjes i pogonske sustave ili snažne pogonske diferencijale.

#### Podzemni

Vozilo je dizajnirano za ukopavanje i tuneliranje kroz tlo. Može postići maksimalnu dubinu jednaku njegovoj ocjeni oplate x5 metara.

#### Kamuflirani

Vozilo posjeduje kamuflažnu boju ili mimetičke senzore koji mu omogućuju uklapanje u okoliš. Pokušaji vizualnog uočavanja vozila su jedan stupanj teži.

#### Teretni

Vozilo je dizajnirano posebno za prijevoz tereta, a ne putnika. Putnički odjeljci svedeni su na minimum, a ostatak korisnog prostora vozila posvećen je smještaju tereta s odgovarajućim dijelovima, alatima, pa čak i klimatizacijom (kao što su odjeljci za zamrzavanje za prijevoz kvarljive robe). Kada je natovareno teretom, brzina vozila je dva stupnja niža nego što bi njegova veličina oplate inače dopuštala.

#### Nosač

Vozilo je dizajnirano posebno za prijevoz manjih, lagano posadnih ili možda daljinski upravljanih vozila civilne ili vojne prirode. Svako vozilo koje posjeduje ovu osobinu mora biti barem Kolosalno. Broj malih plovila koja se prevoze može varirati ovisno o vrsti misije i svrsi, ali može biti od 10 do onoliko koliko iznosi ocjena Strukture vozila.

#### Građevinski

Vozilo je opremljeno za teške građevinske radove. Sva vozila s ovom osobinom imaju i osobinu Terenski, ali je brzina dva stupnja niža nego što bi njihova veličina oplate inače dopuštala. Vozilo je opremljeno alatima prikladnim za zadatke kao što su kranovi, lopate bagera, kiperi i tako dalje.

#### EMP otporan

Vozilo je zaštićeno od napada elektromagnetskim impulsom.

#### Poboljšane performanse

Ocjena Brzine vozila je jedan stupanj viša od maksimuma za njegovu veličinu.

#### Katapultno sjedalo

U slučaju nužde, katapultno sjedalo izbacuje putnike nekoliko stotina metara u zrak, a zatim otvara padobran kako bi se omogućilo sigurno slijetanje. Padobran je opcionalan. Ne preporučuje se za helikoptere (Kamov Ka-52 Alligator je iznimka).

#### FTL

Samo svemirske letjelice. Letjelica je opremljena motorom za brže putovanje od svjetlosti (bilo da je to hiper-pogon, warp-pogon, generator crvotočine ili slično). FTL pogon ima zasebnu ocjenu Brzine koja u biti mjeri brzinu kojom zvjezdani brod može prijeći jedan parsek (3,26 svjetlosnih godina, ili 31 bilijun kilometara, ili 19 bilijuna milja), kako slijedi:

##### Tablica FTL brzine 

| Ocjena brzine | Faktor za prolazak 1 parseka |
| :-- | :-: |
| Trom | 10 |
| Sporo | 8 |
| Polako | 7 |
| Osrednje | 6 |
| Blago | 5 |
| Umjereno | 4 |
| Brzo | 3 |
| Hitro | 2 |
| Munjevito | 1 |

Vrijeme faktora je na Voditelju igre da odluči, ovisno o tome koliko je napredan razvoj FTL-a u okruženju. Na primjer, osnovni faktor može biti 1 dan, što znači da brodu s tromim FTL pogonom treba 10 dana da završi putovanje, dok brod s munjevitim FTL pogonom završava putovanje za 1 dan. Drugdje, gdje je FTL tehnologija znatno manje učinkovita, vrijeme faktora može se mjeriti u mjesecima, a ne danima.

Pretpostavlja se da brod ima zalihe goriva za povratno putovanje ili sredstva za punjenje goriva na odredištu.

Pretpostavlja se da se bilo koja veličina zvjezdanog broda može opremiti FTL pogonom, iako, opet, to ovisi o okruženju.

FTL pogoni se ne mogu aktivirati unutar 1,5 astronomske jedinice od zvijezde (oko 225 milijuna kilometara ili 270 milijuna milja). To znači da brodovi moraju koristiti podsvjetlosni pogon za kretanje do udaljenosti Marsa prije aktiviranja FTL sustava.

#### Kopneno vozilo

Vozilo je sposobno za kopneno putovanje.

#### Lebdeće

Vozilo lebdi iznad tla koristeći zračni jastuk ili antigravitacijski repulsor.

#### Luksuzno

Vozilo je dizajnirano posebno za prijevoz putnika na određenoj razini luksuza. Višak teretnog prostora posvećen je luksuznom smještaju putnika, bazenima, hidromasažnim kadama, dodatnoj posadi koja ispunjava hirove putnika i tako dalje.

#### Tračnice

Vozilo se oslanja na tračnički sustav. Vozila s ovom osobinom mogu prirodno postići ocjenu Brzine tri stupnja višu nego što bi njihova veličina oplate inače dopuštala, ali su očito ograničena samo na kretanje po tračničkom sustavu.

#### Otporan

Svi sustavi mogu izdržati jedan dodatni pogodak više nego što je normalno određeno Veličinom. Ova se Osobina može slagati — dakle, Otporan 2 označava da sustavi mogu izdržati 2 pogotka više nego inače po cijeni od dva boda Osobine.

#### Pomorski

Vozilo je plovno na vodi.

#### Svemirska letjelica

Vozilo je hermetički zatvoreno protiv vakuuma i zaštićeno od kozmičkog zračenja te može, ovisno o dizajnu, biti sposobno napustiti i ponovno ući u atmosferu te održavati let unutar atmosfere.

#### Prikriveni

Samo zrakoplovi. Vozilo je dizajnirano kako bi izbjeglo detekciju radarom i drugim senzorima dugog dometa. Pokušaji uočavanja vozila elektroničkim senzorima jedan su stupanj teži.

#### Podmornica

Vozilo je sposobno zaroniti ispod površine oceana do radne dubine od svoje ocjene oplate x10 metara. Dubina kolapsa — apsolutni maksimum koji podmornica može dosegnuti bez da bude smrskana — iznosi 1,5 puta njezine radne dubine.

#### Superiorno upravljanje

Upravljanje vozilom ocijenjeno je kao Lako.

#### Nadzorni paket

Vozilo ima ugrađeno računalo, komunikacijsku baznu stanicu, prijamnik za signale uređaja za prisluškivanje i aparat za presretanje signala obližnjih pametnih telefona unutar 100 metara.#### Tough

Civilno vozilo s ovom osobinom izvlači svoj Trup iz vojne kolone i automatski ima maksimalnu Strukturu. Vojno vozilo s ovom osobinom izvlači svoj Trup i Strukturu iz sljedećeg retka ispod.

#### Traktorska zraka

Samo za svemirske brodove. Brod je opremljen traktorskom zrakom koja može zarobiti i privući vozila s ocjenom trupa do dva stupnja manjom od vlastite. Dakle, golemi svemirski brod mogao bi privući i zadržati trup do srednje veličine.

#### VTOL

Okomito uzlijetanje/slijetanje. Ova je osobina svojstvena helikopterima i sličnim vozilima koja koriste kombinaciju rotora za stvaranje uzgona. Kada se primijeni na zrakoplove s fiksnim krilima, označava upotrebu fiksnih ili prilagodljivih potisnika za kontrolu položaja u zraku, uspona i spuštanja.

#### Vodeno

Vozilo se pokreće pomoću zglobnih nogu. Vozila hodači ograničena su na brzinu laganog hoda, bez obzira na njihovu veličinu. Međutim, hodači se mogu izgraditi do visina koje bi jednostavno bile nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za kretanje pod vodom.

#### Naoružano

Vozilo je prilagođeno za smještaj oružja. Sustavi naoružanja opisani su u nastavku u odjeljku [Oružje](0006_Vehicles.md?id=weapons).

---
## Oružje

Obično su samo vojni trupovi dizajnirani za smještaj oružja (čvrste točke, skladištenje streljiva, kontrolni sustavi). Osobina "Naoružano" može se uzeti za civilna vozila koja mogu imati potrebe za oružjem.

Maksimalan broj sustava naoružanja koje vozilo može podržati jednak je 1/10 njegovih strukturnih bodova (tako da vozilo s 40 strukture može podržati 4 sustava naoružanja, ako se radi o vojnom vozilu ili naoružanom civilnom vozilu).

Sustavi naoružanja ovise o veličini vozila. Maksimalni tip sustava naoružanja za različite veličine prikazan je u donjim tablicama.

##### Tablica oružja prema veličini

| Veličina | Kopneno | Svemirska letjelica |
| :-- | :-- | :-- |
| Mala | Lako oružje (npr. jurišna puška) | Srednje oružje (npr. mitraljez, bacač raketa) |
| Srednja | Srednje oružje (npr. mitraljez, bacač raketa) | Oružje na kupoli/teško oružje (npr. teški povezani mitraljezi, mini-topovi) |
| Velika | Oružje na kupoli/teško oružje (npr. teški povezani mitraljezi, mini-topovi) | Oružana baterija (npr. bojišničko topništvo) |
| Golema | Oružana baterija (npr. bojišničko topništvo) | Napredno oružje (npr. raketni sustavi) |
| Enormna | Napredno oružje (npr. raketni sustavi) | Spinalno montirano oružje (samo jedno) |
| Kolosalna | NA | Spinalno montirano oružje (do 3) |

##### Tablica uzoraka statistike oružja

| Oružje | Šteta | Domet | Brzina paljbe | Streljivo/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| 50-inčni top | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-top/Gatlingov top | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Srednji projektil/torpedo | 6d10 | Maks. domet 200km | 1 | 1/5 |
| Veliki/krstareći projektil | 6d10+10 | Maks. domet 1000km | 1 | 1/10 |
| Laserski/plazma top | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laserski/plazma top | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Topnička baterija | 5d6+6 | Maks. domet 50km | 1 | 1/5 |
| Spinalna baterija | 10d6+6 | Maks. domet 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Brzine paljbe su za pojedinačnu paljbu, poluautomatsku i potpuno automatsku._

_Streljivo je sposobnost paljbe prije potrebe za ponovnim punjenjem. Punjenje je vrijeme ponovnog punjenja u borbenim krugovima, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevri

Evasive ili nagli manevri zahtijevaju uspješno bacanje za vožnju/pilotiranje kako bi se osiguralo da vozač ili pilot zadrži kontrolu nad vozilom. Većina vozila je dizajnirana i izgrađena da izdrži povremene napore i naprezanja, ali voditelj igre može presuditi da određeni manevar zahtijeva bacanje na višoj razini težine, ovisno o tome koliko je ambiciozan. Neuspjeh znači da je izgubljena kontrola nad vozilom: bacite kocku na tablici Gubitak kontrole.

Napomena: Tablica Gubitak kontrole odnosi se samo na kopnena vozila. Slični učinci mogu se primijeniti na zračna i svemirska vozila, ali voditelji igara morat će prilagoditi obrazloženje za određeni učinak. Na primjer, zrakoplov bi umjesto proklizavanja mogao ući u kovitlac.

Također, inherentno upravljanje vozilom može imati dodatni utjecaj na bacanje za vožnju. Upravljanje može biti Jednostavno, Standardno, Teško, Zastrašujuće ili Herkulsko i određuje početnu točku za bacanje vožnje pri izvođenju manevra. Stupanj težine za manevar se zatim primjenjuje na upravljanje kako bi se odredila konačna težina.

Na primjer, motocikl visokih performansi ima ugrađene žiro-stabilizatore koji mu daju lako upravljanje. Vozač želi izvesti proklizavanje od 180 stupnjeva kako bi izbjegao progonitelja, manevar koji voditelj igre ocjenjuje kao jedan stupanj težine više. Vozač stoga mora izvesti svoje bacanje za vožnju kao Standardno umjesto Jednostavnog. Da je pokušao isti manevar na motociklu bez stabilizatora, bacanje za vožnju bilo bi Teško.

Superiorno upravljanje je osobina. Ako vozilo nema tu osobinu kao dio svog opisa, onda je zadana postavka standardno upravljanje za svako vozilo veličine Veliko i manje. Golema i Enormna vozila inherentno imaju osobinu upravljanja Zastrašujuće i Herkulsko, a voditelj igre ima slobodu presuditi da su određeni manevri jednostavno nemogući zbog veličine vozila.

##### Tablica gubitka kontrole

| 1d100 | Rezultat |
| :-: | :-- |
| 01-25 | Zakretanje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 stupanj na 5 sekundi. |
| 26-40 | Proklizavanje. Vozač se mora boriti da zadrži kontrolu nad vozilom. Vozilo smanjuje brzinu za 2 stupnja na 10 sekundi. |
| 41-50 | Teško proklizavanje. Vozilo završava okrenuto u pogrešnom smjeru i zaustavljeno na 15 sekundi. |
| 51-60 | Prevrtanje. Vozilo proklizava i prevrće se, nanoseći 3d10 štete svojoj Strukturi. Putnici moraju uspješno baciti za Izdržljivost ili primiti 1d10 štete na 1d3 lokacije pogotka. |
| 61-70 | Teško prevrtanje. Kao gore, ali vozilo trpi 3d10+10 štete, a putnici primaju 1d10 štete čak i ako je bacanje za Izdržljivost uspješno, a 2d10 ako ne uspije. |
| 71-80 | Totalka. Kao gore, ali vozilo je smanjeno na 0 Strukture. Putnici trpe istu štetu kao kod Teškog prevrtanja. |
| 81-90 | Eksplozija. Kao gore, ali sustav goriva vozila se zapali i eksplodira unutar 1d20+10 sekundi. Ako se ne uspiju udaljiti, putnici trpe dodatnih 1d6 štete od opeklina na 1d6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao gore, ali eksplozija je trenutna. |
| 99-00 | Katastrofalni sudar. Putnici moraju uspješno baciti za Izdržljivost ili trenutno ginu. Šteta kao kod Totalke se trpi bez obzira na sve. |

---
## Primjeri vozila

---

### Kopnena vozila

#### Prestretač

Dotjerani luksuzni automobil, sportski automobil ili slično, ovaj je automobil napravljen za brzu vožnju i za uzvraćanje udarca u borbi. Ovo je vrsta vozila na koju ljudi pomisle kada netko kaže "špijunski automobil".

| Prestretač | |
| :- | :- |
| **Veličina / Tip** | Srednje vojno |
| **Trup** | 6 |
| **Struktura** | 40 |
| **Sustavi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Jednostavno |
| **Osobine** | [Katapultirajuće sjedalo](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač naftnih mrlja, Raspršivač dima, Dvostruko povezani srednji mitraljezi (2d6+3) |

<br>

---

#### Motocikl za potjeru

Lagan, brz motocikl za brze potjere, motocikl za potjeru nosi iznenađenje – ili par povezanih mitraljeza ili dvije rakete.

| Motocikl za potjeru | |
| :- | :- |
| **Veličina / Tip** | Malo civilno |
| **Trup** | 2 |
| **Struktura** | 12 |
| **Sustavi** | 1 |
| **Brzina** | Brza |
| **Upravljanje** | Jednostavno |
| **Osobine** | [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Dvije rakete (4d6) ili dvostruko povezani laki mitraljezi (2d6) |

<br>

---

#### Obiteljski automobil

Standardni automobil s 4 vrata koji nudi dovoljno prostora za udobno sjedenje vozača i tri putnika. Žrtvuje prtljažni prostor kako bi uključio nadzorni paket.

| Obiteljski automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Trup** | 4 |
| **Struktura** | 25 |
| **Sustavi** | 2 |
| **Brzina** | Živahna |
| **Upravljanje** | Standardno |
| **Osobine** | [Diskretno](0006_Vehicles.md?id=unobtrusive), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite) |
| **Oružje** | Nema |

<br>

---

#### Podmornički automobil

Automobil za dvije osobe koji se može prebaciti u vodeni ili podmornički način rada za kretanje po površini ili pod vodom. Dolazi s torpedom montiranim sprijeda i raketom zemlja-zrak montiranom na krovu.

| Podmornički automobil | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Trup** | 6 |
| **Struktura** | 25 |
| **Sustavi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podmorničko](0006_Vehicles.md?id=submersible), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raketa (5d6), Torpedo (4d10) |

<br>

---

#### Nadzorni kombi

Običan, neoznačeni kombi u kojem se nalazi tim agenata i paket audiovizualne opreme za snimanje.

| Nadzorni kombi | |
| :- | :- |
| **Veličina / Tip** | Veliko civilno |
| **Trup** | 9 |
| **Struktura** | 60 |
| **Sustavi** | 3 |
| **Brzina** | Lagana |
| **Upravljanje** | Standardno |
| **Osobine** | [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Izdržljivo](0006_Vehicles.md?id=tough) |
| **Oružje** | Nema |

<br>

---

#### Vozilo taktičke podrške

Kamionet ili džip s prostorom za dvočlanu posadu u kabini i strijelcem koji stoji u stražnjem dijelu i upravlja srednjim mitraljezom montiranim na okretni nosač.

| Vozilo taktičke podrške | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Trup** | 6 |
| **Struktura** | 30 |
| **Sustavi** | 2 |
| **Brzina** | Živahna |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Montirani srednji mitraljez (2d6) |

<br>

---

### Plovila

#### Gliser

Tipičan gliser, naoružan stražnjim raspršivačem mina.

| Gliser | |
| :- | :- |
| **Veličina / Tip** | Srednje civilno |
| **Trup** | 3 |
| **Struktura** | 24 |
| **Sustavi** | 2 |
| **Brzina** | Brza |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vodeno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružje** | Raspršivač mina (5d6) |

<br>

---

#### Jahta

Vrsta luksuzne jahte koju bi oligarh mogao posjedovati. Vjerojatno opremljena nadzornim paketom za zaštitu od neprijatelja koji pokušavaju smisliti nešto loše.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Golemo civilno |
| **Trup** | 10 |
| **Struktura** | 75 |
| **Sustavi** | 4 |
| **Brzina** | Spora |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [Vodeno](0006_Vehicles.md?id=waterborne) |
| **Oružje** | Nema |

<br>

---

### Zrakoplovi/Svemirske letjelice

#### Dirigibil (Civilni zračni brod)

Sličan Hindenburgu, ova klasa transkontinentalnog dirigibla (i drugi u njegovoj klasi) dugačak je 245 metara i zahtijeva posadu od 40 do 61 osobe. Obično može prevesti 50 do 72 putnika u luksuznom smještaju.

| Dirigibil | |
| :- | :- |
| **Veličina / Tip** | Enormno civilno |
| **Trup** | 10 |
| **Struktura** | 85 |
| **Sustavi** | 5 |
| **Brzina** | Troma |
| **Upravljanje** | Herkulsko |
| **Osobine** | [Zračno](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | Nema |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter koristi svoju naprednu tehnologiju nadzora za presretanje telefonskih i bežičnih internetskih signala te za praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbjegavanja tragača kroz skrivanje su Zastrašujući.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Trup** | 11 |
| **Struktura** | 50 |
| **Sustavi** | 3 |
| **Brzina** | Umjerena |
| **Upravljanje** | Jednostavno |
| **Osobine** | [Zračno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Skrivanje](0006_Vehicles.md?id=stealth), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Nadzorni paket](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružje** | 1 Gatlingov top (3d6), 4 rakete (5d6) |

<br>

---

#### Višenamjenski lovac

Ovaj dvosjedni lovac na kopno (sličan tipu De Havilland Mosquito) dobro je poznat po svojim performansama i svestranosti. Njegov prostor za bombe može nositi ili dvije bombe od 250 funti (tretirati kao srednje projektile s dometom 0) ili jedan torpedo.

| Višenamjenski lovac | |
| :- | :- |
| **Veličina / Tip** | Veliko vojno |
| **Trup** | 10 |
| **Struktura** | 45 |
| **Sustavi** | 3 |
| **Brzina** | Umjerena |
| **Upravljanje** | Standardno |
| **Osobine** | [Zračno](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Nema |
| **Oružje** | 4 Gatlingova topa montirana na nosu (4d6+3), 1 prostor za bombe (6d10 - vidi opis) |

<br>

---

#### Međuzvjezdani teretnjak (Laki visokotehnološki transport)

Ovaj laki transport zahtijeva minimalnu posadu od samo dvije osobe, s prostorom za do četiri dodatna putnika. Ovdje je navedena standardna verzija, međutim mnogi će vlasnici primijeniti vlastite "posebne modifikacije" kao što su skriveni teretni prostor, poboljšane performanse, superiorno upravljanje, otpornost na EMP, skrivanje itd.

| Međuzvjezdani teretnjak | |
| :- | :- |
| **Veličina / Tip** | Srednja civilna svemirska letjelica |
| **Trup** | 10 |
| **Struktura** | 80 |
| **Sustavi** | 2 |
| **Brzina** | Živahna (Faktor parseka od 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Zračno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirska letjelica](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Oružje** | 2x četverostruko montirane kupole s laserskim topovima (5d6) |

<br>

---

#### Jedinica za opći kontakt (Ultra visokotehnološka svemirska letjelica)

Ovaj iznimno visokotehnološki svemirski brod fizička je reprezentacija visoko naprednog umjetnog Uma, koji poprima oblik niza modula dugih dva kilometra povezanih poljem. Moduli su pojedinačno namjenski i uključuju staništa, objekte za izgradnju, teretna područja, preradu hrane, komplekse za slobodno vrijeme, hangar i čak neke tajne jedinice o kojima inteligencija broda rijetko, ako ikad, govori. Ne treba ljudsku posadu, ali može lako podržati populaciju putnika do 100.000. Mnogi se putnici rađaju i umiru na jedinici za kontakt: mnogi su prolazni, dolaze i odlaze kako žele.

| Jedinica za opći kontakt | |
| :- | :- |
| **Veličina / Tip** | Kolosalna civilna svemirska letjelica |
| **Trup** | 20 |
| **Struktura** | 10.000 |
| **Sustavi** | 6 |
| **Brzina** | Umjerena (Faktor parseka od 4. Na ovoj razini tehnologije, faktor je jednak 1 satu) |
| **Upravljanje** | Zastrašujuće |
| **Osobine** | [Zračno](0006_Vehicles.md?id=airborne), [Teret](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Izgradnja](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirska letjelica](0006_Vehicles.md?id=spacecraft), [Superiorno upravljanje](0006_Vehicles.md?id=superior-handling), [Traktorska zraka](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Oružje** | Nema o čemu želi raspravljati |

<br>