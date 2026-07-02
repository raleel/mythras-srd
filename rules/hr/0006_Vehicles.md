# Vozila

Vozila u _Mythras Imperative_ tretiraju se na poluapstraktan način. U biti, oni su pozadinski alati, koji se koriste za prijevoz likova od A do B, s malo potrebe za detaljnim opisom ili statistikama. Međutim, povremeno će Voditeljima igre trebati detalji o vozilima kada je potrebno prikazati ih u potjerama ili borbenim situacijama.

Pravila u ovom odjeljku omogućuju prikazivanje većine vrsta vozila, ali na apstraktan način koji je namijenjen fleksibilnosti i poboljšanju pripovijedanja. Zvjezdani brodovi i svemirske letjelice su nešto drugačiji, iako se temelje na sličnim principima.

---
## Statistike

Sva vozila opisana su u smislu njihove Strukture, Oplate, Brzine, Sustava, Osobina i Štitova (ako su prisutni u okruženju).

- **[Veličina](0006_Vehicles.md?id=vehicle-size-table):** Sva vozila imaju jednu od šest ocjena Veličine koja određuje vrijednost ili raspon ostalih karakteristika. Zbog svoje veće intrinzične veličine i neprijateljskih okruženja u svemiru, zvjezdani brodovi imaju vlastiti raspon vrijednosti.
- **[Oplata](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja Oklopne točke
- **[Struktura](0006_Vehicles.md?id=terrestrial-hulls):** Predstavlja životne točke vozila
- **[Štitovi](0006_Vehicles.md?id=shields):** U okruženjima s naprednom tehnologijom manipulacije energijom, mogu biti prisutni štitovi koji štite vozilo, ali se mogu abrazirati pod kontinuiranom paljbom.
- **[Sustavi](0006_Vehicles.md?id=systems):** Predstavljaju vitalne komponente vozila, uključujući pogon, odjeljak posade i tako dalje.
- **[Brzina](0006_Vehicles.md?id=speed):** Svako vozilo ima osnovnu ocjenu Brzine
- **[Osobine](0006_Vehicles.md?id=traits):** Vozilo također može imati jednu ili više Osobina. Osobine, poput Sposobnosti dodijeljenih Stvorenjima u pravilima _Mythras Imperative_, ili Osobina borbenog stila, nude dodatni opis igre i prednost, odražavajući prirodu vozila.
- **[Oružja](0006_Vehicles.md?id=weapons):** Slično Osobine, vozilo može biti opremljeno oružjem kako to postavka dopušta. Neki predloženi primjeri i vrijednosti detaljno su opisani u nastavku.

---
### Veličina oplate, tip i struktura

Veličina i namjena vozila utječu na debljinu njegove oplate i otpornost njegove unutarnje strukture. Motocikl, na primjer, ima minimalnu oplatu, izgrađenu za brzinu i agilnost. Land Ironclad (masivni, gusjeničar ili vozilo na kotačima, pogonjen parnim ili dizelskim motorima), budući da je mnogo veće vozilo dizajnirano za bojno polje, ima mnogo veću oplatu. Usporedne veličine oplata (i koliko pogodaka od oružja tipično mogu izdržati) sažeto su prikazane u tablicama Veličine vozila i Oplate u nastavku.

Kad god vozilo pretrpi štetu, dolazna šteta smanjuje se za vrijednost njegove Oplate. Svaka preostala šteta oduzima se od točaka Strukture vozila i ima postotnu šansu, jednaku prodornoj šteti, da utječe na Sustav. Ako se vozilo ikada svede na nula Strukture, potpuno je uništeno ili toliko oštećeno da se mora otpisati.

##### Zemaljske oplate

| Veličina | Struktura | Vrijednost civilne oplate | Vrijednost vojne oplate | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mali | 1-20 | 1-3 | 4-6 | Motocikl, motocikl s prikolicom, kompaktni ili subkompaktni automobil, kanu, kajak, čamac na vesla |
| Srednji | 21-40 | 1-6 | 7-9 | Limuzina, kombi, pickup, luksuzni automobil, luksuzni sportski automobil, muscle car, limuzina, čamac za spašavanje, gliser, zmaj, autogir |
| Veliki | 41-60 | 4-9 | 10-12 | Kamion, produžena limuzina, SUV, autobus, monovolumen, osobni zrakoplov, jedrilica, jahta, tenk, helikopter, podmornica |
| Ogroman | 61-80 | 7-12 | 13-15 | Šleper, putnički zrakoplov, mlaznjak, plovilo obalne straže, jahta |
| Izniman | 81-100 | 10-15 | 16-18 | Vlak, kruzer, ratni brod |

##### Oplate svemirskih brodova

| Veličina | Struktura | Vrijednost civilne oplate | Vrijednost vojne oplate | Primjer |
| :-- | :-: | :-: | :-: | :-- |
| Mali | 10-50 | 4-9 | 10-12 | Jednosjedni lovac |
| Srednji | 51-150 | 7-12 | 13-15 | Laki teretni brod, shuttle |
| Veliki | 151-450 | 10-15 | 16-18 | Teški teretni brod, krstarica |
| Ogroman | 451-1350 | 13-18 | 19-21 | Escortna fregata, laka bojna krstarica |
| Izniman | 1351-4050 | 16-21 | 21-24 | Generacijski brod, teška bojna krstarica |
| Kolosalan | 4050-12110 | 19-24 | 24-30 | Orbitalno stanište, bojna postaja za uništavanje planeta |

---
### Štitovi

Deflektorski štitovi pružaju dodatni sloj zaštite za vozila koja ih mogu montirati. Štitovi rade nešto drugačije od Oplate, zbog svoje ablativne prirode. Ako je dolazna šteta jednaka ili manja od vrijednosti štitova, tada je sva blokirana. Ako šteta premašuje vrijednost štita, tada svaki višak smanjuje snagu štita za taj iznos.

_Na primjer, transportni transporter ima snagu energetskog štita od 12 točaka. Ako je transporter pogođen laserom za 11 štete, on jednostavno ne prodire i nema dodatnog učinka. S druge strane, ako je transporter pogođen eksplozijom koja je nanijela 15 štete, višak od tri točke smanjio bi snagu štita na 9._

Kada snaga deflektorskog štita padne na nulu, on se urušava. Svaka preostala šteta prenosi se na oplatu.

---
### Sustavi

Svaki put kad vozilo pretrpi štetu koja prodire kroz njegovu oplatu, postoji šansa, jednaka prodornoj šteti, da je pogođen vitalni Sustav.

_Na primjer, 10 štete primijenjeno je na gliser - vozilo s 3 Oplate i 24 Strukture. Oplata se računa kao oklop smanjujući štetu na 7. To se oduzima od 24 točke Strukture i postoji 7% šanse da se ošteti jedan od Sustava vozila._

Šteta koju Sustav može podnijeti temelji se isključivo na veličini vozila. To se modelira brojem pogodaka koje Sustav može primiti, a ne stvarnom količinom štete. Jedan pogodak Sustava na Malom vozilu trenutno će uništiti taj Sustav. Potrebna su dva pogotka za uništenje Sustava Srednjeg vozila, tri za Veliko vozilo i tako dalje. Pogledajte [Tablicu oštećenja sustava](0006_Vehicles.md?id=system-damage-table) u nastavku.

Sustavi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcije proporcionalno broju primljenih pogodaka - bilo postotno smanjenje ili penal po stupnju na zadatke Sustava. Specifični učinak temelji se na tome što podsustav kontrolira, kao što je detaljno opisano u [Tablici oštećenja komponenti sustava](0006_Vehicles.md?id=system-component-damage-table) u nastavku. Ovisno o tome koji je Sustav pogođen, učinci mogu biti katastrofalni.

_Na primjer, Land Ironclad - Iznimno vozilo s 5 pogodaka Sustava - pogođen dvaput u Pogon izgubio bi 40% svoje snage i smanjio bi svoju Sporu Brzinu za dva stupnja na Ponderoznu. Slično tome, Veliki teretni brod - s 3 pogotka Sustava - koji je primio dva pogotka na Sustav motor/gorivo imao bi penal od dva stupnja na Brzinu kao i na korištenje elektroničkih sustava. Treći pogodak uništio bi Sustav motor/gorivo i sam brod s njim._

<details>

<summary>* Errata zajednice</summary>

---

#### Šteta

_Izvorni tekst ovdje je prvotno bio dalje. Postavljen izravno nakon odjeljka Sustavi, nepotrebno ponavlja prethodni odlomak._

- _"Šteta koja premašuje oplatu prodire u vozilo, oštećujući strukturu i moguće utječući na jedan ili više sustava. Ovisno o veličini vozila, šteta može biti manja ili katastrofalna._
- _Na primjer, veliko vozilo može pretrpjeti do dva pogotka na sustavu poput njegovog pogona. Treći pogodak funkcionalno uništava pogon. Svaki put kada sustav pretrpi pogodak, ili gubi postotak svoje funkcije kao što je opisano u stupcu Gubitak po pogotku u tablici oštećenja sustava u nastavku ili osnovna funkcija (poput pogona, pilota, komunikacija i tako dalje) postaje teža za jedan stupanj težine po pretrpljenom pogotku."_

_Gornji odlomci su uklonjeni, a skraćena izmjena zauzima njihovo mjesto, navodeći drugi primjer učinka Sustava._

---

</details>

##### Tablica oštećenja sustava

| Veličina | Pogodaka sustava | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mali | 1 | 100% - Uništeno |
| Srednji | 2 | 1 Stupanj ili 50% |
| Veliki | 3 | 1 Stupanj ili 33% |
| Ogroman | 4 | 1 Stupanj ili 25% |
| Izniman | 5 | 1 Stupanj ili 20% |
| Kolosalan | 6 | 1 Stupanj ili 16% |

<details>

<summary>* Errata zajednice</summary>

---

##### Tablica oštećenja sustava (Izvorno)

| Veličina | Pogodaka sustava | Gubitak po pogotku |
| :-- | :-: | :-- |
| Mali | 1 | 1 Stupanj ili 50% |
| Srednji | 2 | 1 Stupanj ili 33% |
| Veliki | 3 | 1 Stupanj ili 25% |
| Ogroman | 4 | 1 Stupanj ili 20% |
| Izniman | 5 | 1 Stupanj ili 16% |
| Kolosalan | 6 | 1 Stupanj ili 10% |

##### Tablica veličina vozila (iz [Veličina oplate, tip i struktura](0006_Vehicles.md?id=hull-size-type-and-structure))

| Veličina | Pogodaka sustava |
| :-- | :-: |
| Mali | 1 |
| Srednji | 2 |
| Veliki | 3 |
| Ogroman | 4 |
| Izniman | 5 |
| Kolosalan | 6 |

_Izvorna pravila i primjeri su nedosljedni:_
- _"Sustavi koji su oštećeni, ali još nisu uništeni, trpe gubitak funkcionalnosti. To je jednako omjeru trenutnih pogodaka i njegove ukupne sposobnosti. Tako bi iznimno vozilo pogođeno dvaput u pogon izgubilo 40% svoje snage (2 pogotka od maksimalnih 5)"._
- _Ovo sugerira da bi iznimno vozilo prikazano s 5 pogodaka sustava trebalo izgubiti 20% sa svakim pogotkom - ali tablica kaže 16%._
- _"Na primjer, veliko vozilo može primiti do tri pogotka na sustavu poput njegovog pogona. Četvrti pogodak funkcionalno uništava pogon."_
- _Ovo sugerira - kao i tablica - 25% štete po pogotku sustava, ali Velika vozila mogu primiti samo 3 pogotka sustava prema istoj tablici._
- _Iako nije nedosljedna, tablica veličina vozila bila je suvišna; ponovno se pojavila u punijem obliku (dodajući stupac Gubitak po pogotku) samo nekoliko redaka kasnije._

_To otežava dosljedno pravilo. Kako bi se riješili ovi problemi, vrijednosti i primjeri su promijenjeni kako bi se podudarali, a tablica veličina vozila je uklonjena._

---

</details>

##### Tablica oštećenja komponenti sustava

| 1d10 | Sustav | Oštećen rezultat | Uništen rezultat |
| :-: | :-- | :-- | :-- |
| 1 | Teret | Količina imovine ili opreme pohranjene u skladištu, proporcionalno šteti, uništena je. | Sav teret je uništen. |
| 2 | Komunikacije | Provjere komunikacija trpe dodatni stupanj težine svaki put kad su oštećene. | Vozilo više ne može komunicirati niti zavaravati neprijateljske senzore. |
| 3 | Kontrole | Provjere plovidbe, pogona ili pilotiranja trpe dodatni stupanj težine svaki put kad su oštećene; potrebna je trenutačna provjera kontrole. | Vozilom se više ne može upravljati niti mijenjati smjer. |
| 4 | Pogon | Brzina smanjena proporcionalno šteti. | Vozilo se zaustavlja; zrakoplov se ruši. |
| 5 | Posada | Broj putnika proporcionalno šteti postaje žrtve. Pogođeni trpe Veliku ozljedu i moraju uspjeti u provjeri Izdržljivosti ili će odmah poginuti. | Putnici vozila umiru. |
| 6 | Motor / Gorivo | Brzina smanjena proporcionalno šteti. Elektronički sustavi su za jedan stupanj težine teži za korištenje. | Vozilo je uništeno u katastrofalnoj eksploziji. |
| 7 | Senzori | Provjere senzora, navigacije i napada oružjem trpe dodatni stupanj težine svaki put kad su oštećene. | Vozilo je oslijepljeno. |
| 8 | Oružja | Broj oružanih sustava proporcionalno šteti postaje neoperativan. | Vozilo više ne može ispaljivati oružje. |
| 9-0 | Ništa | Nema pogodaka sustava; samo oštećenje Strukture. | N/A |

<details>

<summary>* Errata zajednice</summary>

---

##### Tablica oštećenja komponenti sustava (Motor/gorivo)

_Izvorni rezultat bio je sljedeći: "Maksimalna brzina je prepolovljena..." To je u suprotnosti s općim pravilom o penalima za štetu proporcionalno oštećenju sustava: 25% štete = 25% penala. Štoviše, puna pravila u Mythras Companionu ne spominju ovo prepolovljavanje brzine._

_Kao rezultat toga, tekst je zamijenjen istim unosom iz sustava pogona: "Brzina smanjena za iznos proporcionalan oštećenju."_

---

</details>

---
### Brzina

Budući da su fizika brzine, ubrzanja, otpora i inercije (da spomenemo samo neke) složeni problemi, potrebna je neka pojednostavljenja, pa se vozilima dodjeljuje apstraktna ocjena brzine. Karakteristika brzine trebala bi se koristiti samo za grubo procjenjivanje može li jedno vozilo prestići ili sustići drugo.

Ocjena brzine predstavlja nominalnu radnu brzinu vozila. U hitnim situacijama ova se izvedba može povećati za jedan korak, uz rizik od trošenja ili oštećenja motora. Iako se ista tablica koristi za sve tipove vozila, treba primijeniti zdrav razum kako bi se uspoređivala samo vozila iste klase. Na primjer, ako zvjezdani brod i sportski automobil imaju istu stopu ubrzanja (Brzi), trebalo bi biti očito da je svemirski brod komparativno brži.

Povećanje brzine vozila iznad njegove standardne vrijednosti moguće je uspješnom provjerom Vožnje. Obično je ta dodatna brzina održiva samo kratko vrijeme – ne više od 1k6 minuta prije nego što se vozilo mora spustiti na svoju standardnu brzinu ili riskirati oštećenje svog pogona. Kritična provjera Vožnje omogućuje produljenje razdoblja veće brzine na 1k12 minuta.

Vozač može pokušati povećati brzinu vozila za 2 koraka, ali to zahtijeva Herakulska provjeru Vožnje, a maksimalno vrijeme koje vozilo može održati ovu brzinu je 1k3 minute: kritični uspjeh neće produljiti trajanje povećane brzine.

##### Tablica ocjena brzine

| Ocjena brzine | Maks. brzina za |
| :-- | :-: |
| Ponderozno | Izniman |
| Trom | |
| Sporo | Ogroman |
| Osrednje | |
| Nježno | Veliki |
| Umjereno | |
| Brzo | Srednji |
| Hitro | |
| Žustro | Mali |

---
### Osobine

Maksimalan broj osobina koje vozilo može imati ovisi o veličini i tipu oplate.

Svako vozilo ima inherentnu osobinu: način putovanja za koji je primarno dizajnirano. Stoga zrakoplovi inherentno imaju osobinu Zrakoplovan, čamci osobinu Pomorski i tako dalje. Ova inherentna osobina se ne ubraja u raspoloživi broj osobina. Međutim, ako vozilo treba uključivati drugi način putovanja – npr. leteću podmornicu, tada bi osobinu Zrakoplovan trebalo uzeti kao jednu od njegovih raspoloživih osobina.

Neke osobine možda neće biti dostupne, ovisno o tehnološkoj razini okruženja; Voditelji igre moraju sami procijeniti koje se osobine mogu primijeniti.

##### Tablica raspodjele osobina vozila

| Veličina | Maks. osobina |
| :-- | :-: |
| Mali | 1 |
| Srednji | 2 |
| Veliki | 3 |
| Ogroman | 4 |
| Izniman | 5 |
| Kolosalan | 6 |

#### Zrakoplovan

Vozilo je sposobno za atmosferski let.

#### Svi tereni

Ova osobina mora se koristiti s kopnenim vozilima. Vozilo može prelaziti negostoljubive, teške i strme terene, koristeći gusjenice, napredne sustave ovjesa i pogona ili snažne diferencijale.

#### Ukopavanje

Vozilo je dizajnirano za ukopavanje i tuneliranje kroz zemlju. Može postići maksimalnu dubinu jednaku ocjeni oplate x 5 metara.

#### Kamuflirano

Vozilo posjeduje ili kamuflažnu boju ili mimetičke senzore koji mu omogućuju stapanje s okolinom. Pokušaji vizualnog uočavanja vozila jedan su stupanj teži.

#### Teretno

Vozilo je posebno dizajnirano za prijevoz tereta, a ne putnika. Putnički odjeljci svedeni su na minimum, a ostatak korisnog prostora vozila posvećen je zadržavanju tereta s odgovarajućim odjeljcima, alatima, pa čak i klimatizacijom (poput zamrzivača za prijevoz pokvarljive robe). Kada je natovareno teretom, brzina vozila je dva stupnja niža nego što bi veličina njegove oplate obično dopuštala.

#### Nosač

Vozilo je posebno dizajnirano za prijevoz manjih, s malo posade, ili moguće daljinski upravljanih vozila, bilo civilne ili vojne prirode. Svako vozilo koje posjeduje ovu osobinu mora biti barem Izniman. Broj malih letjelica koje se prenose može varirati ovisno o vrsti misije i namjeni, ali može biti od samo 10 do čak ocjene Strukture vozila.

#### Konstrukcija

Vozilo je opremljeno za teške građevinske radove. Sva vozila s ovom osobinom imaju i osobinu Svi tereni, ali brzina je dva stupnja niža nego što bi veličina njihove oplate obično dopuštala. Vozilo je opremljeno alatima prikladnim za zadatke kao što su dizalice, bageri, kiperi i tako dalje.

#### Otporan na EMP

Vozilo je zaštićeno od napada elektromagnetskog pulsa.

#### Poboljšane performanse

Ocjena brzine vozila je jedan stupanj viša od maksimuma za njegovu veličinu.

#### Izbacivo sjedalo

U slučaju nužde, izbacivo sjedalo izbacuje putnike nekoliko stotina metara u zrak, a zatim otvara padobran kako bi omogućilo sigurno slijetanje. Padobran je opcionalan. Ne preporučuje se za helikoptere (Kamov Ka-52 Aligator je značajna iznimka).

#### FTL

Samo svemirski brodovi. Letjelica je opremljena pogonom bržim od svjetlosti (bilo da je to hiper-pogon, warp pogon, generator crvotočina ili slično). FTL pogon ima zasebnu ocjenu Brzine koja u biti mjeri brzinu kojom zvjezdani brod može preći jedan parsek (3,26 svjetlosnih godina, ili 31 bilijun kilometara, ili 19 bilijuna milja), kako slijedi:

##### Tablica FTL ocjena brzine

| Ocjena brzine | Faktor za prelazak 1 parseka |
| :-- | :-: |
| Ponderozno | 10 |
| Trom | 8 |
| Sporo | 7 |
| Osrednje | 6 |
| Nježno | 5 |
| Umjereno | 4 |
| Brzo | 3 |
| Hitro | 2 |
| Žustro | 1 |

Faktor vremena ovisi o Voditelju igre, ovisno o tome koliko je napredan razvoj FTL-a u postavci. Na primjer, osnovni faktor može biti 1 dan, što znači da brod s Ponderoznim FTL pogonom treba 10 dana za završetak putovanja, dok plovilo s Žustrim FTL pogonom putovanje završava za 1 dan. Drugdje, gdje je FTL tehnologija znatno manje učinkovita, faktor vremena može se mjeriti u mjesecima, a ne danima.

Pretpostavlja se da brod ima rezerve goriva za povratno putovanje ili sredstva za punjenje goriva na odredištu.

Pretpostavlja se da se bilo koja veličina zvjezdanog broda može opremiti FTL pogonom, iako to opet ovisi o postavci.

FTL pogoni ne mogu se aktivirati unutar 1,5 astronomskih jedinica od zvijezde (oko 225 milijuna kilometara, ili 270 milijuna milja). To znači da brodovi moraju koristiti podsvjetlosni pogon za kretanje do udaljenosti Marsa prije aktiviranja FTL sustava.

#### Kopneno vozilo

Vozilo je sposobno za kopneno putovanje.

#### Lebdenje

Vozilo lebdi iznad tla koristeći zračni jastuk ili anti-gravitacijski repulzor.

#### Luksuzno

Vozilo je specifično dizajnirano za prijevoz putnika na određenoj razini luksuza. Višak teretnog prostora pretvoren je u luksuzne putničke smještaje, bazene, hidromasažne kade, dodatnu posadu za ispunjavanje želja putnika i tako dalje.

#### Tračnice

Vozilo se oslanja na željeznički sustav. Vozila s ovom osobinom prirodno mogu postići ocjenu brzine tri stupnja višu od one koju bi veličina njihove oplate inače dopuštala, ali su očito ograničena na kretanje samo po željezničkom sustavu.

#### Otporno

Svi sustavi mogu izdržati jedan dodatni pogodak više nego što je uobičajeno određeno veličinom. Ova se osobina može slagati — tako Otporno 2 označava da sustavi mogu izdržati 2 pogotka više nego uobičajeno po cijeni od dvije točke osobine.

#### Pomorsko

Vozilo pluta na vodi.

#### Svemirska letjelica

Vozilo je zapečaćeno protiv vakuuma i zaštićeno od kozmičkog zračenja te, ovisno o dizajnu, može biti sposobno za izlazak i ponovni ulazak u atmosferu te održavanje leta unutar atmosfere.

#### Nevidljivost

Samo zrakoplovi. Vozilo je dizajnirano da izbjegne otkrivanje radarom i drugim sustavima daljinskih senzora. Pokušaji uočavanja vozila pomoću elektroničkih senzora su jedan stupanj teži.

#### Podmornica

Vozilo je sposobno zaroniti ispod površine oceana do operativne dubine od ocjene oplate x 10 metara. Dubina kolapsa – apsolutni maksimum do kojeg podmornica može doseći bez da bude zgnječena – je 1,5 puta veća od njezine operativne dubine.

#### Vrhunsko upravljanje

Upravljanje vozilom ocijenjeno je kao Lako.

#### Sustav za nadzor

Vozilo ima ugrađeno računalo, baznu komunikacijsku stanicu, prijemnik za signale uređaja za prisluškivanje i aparat za presretanje obližnjih signala pametnih telefona unutar 100 metara.

#### Čvrsto

Civilno vozilo s ovom osobinom svoju oplatu crpi iz stupca Vojno i automatski ima maksimalnu Strukturu. Vojno vozilo s ovom osobinom svoju oplatu i Strukturu crpi iz sljedećeg reda.

#### Vučna zraka

Samo svemirski brodovi. Brod je opremljen vučnom zrakom koja može zarobiti i privući vozila s ocjenom oplate do dva stupnja manjom od svoje. Tako bi Ogroman zvjezdani brod mogao privući i zadržati oplatu do Srednje veličine.

#### VTOL

Vertikalno uzlijetanje/slijetanje. Ova osobina je inherentna helikopterima i sličnim vozilima koja koriste kombinaciju rotora za stvaranje uzgona. Kada se primjenjuje na zrakoplove s fiksnim krilima, označava korištenje fiksnih ili podesivih potisnika za kontrolu stava u zraku, uspona i spuštanja.

#### Kopneno-vodno

Vozilo se pokreće pomoću zglobnih nogu. Vozila na nogama su ograničena na brzinu Nježno, bez obzira na njihovu veličinu. Međutim, vozila na nogama mogu se izgraditi na visine koje bi jednostavno bile nestabilne za vozila opremljena drugim sredstvima kretanja.

Ovo vozilo je sposobno za podvodno kretanje.

#### Naoružano

Vozilo je prilagođeno za smještaj oružja. Oružani sustavi su obrađeni u nastavku u odjeljku [Oružja](0006_Vehicles.md?id=weapons).

---
## Oružja

Obično su samo vojne oplate dizajnirane za smještaj oružja (priključne točke, skladištenje streljiva, kontrolni sustavi). Osobina 'Naoružano' može se uzeti za civilna vozila koja mogu imati zahtjeve za oružjem.

Maksimalan broj oružanih sustava koje vozilo može podržati jednak je 1/10 njegovih strukturnih točaka (tako da vozilo s 40 strukture može podržati 4 oružana sustava, ako je vojno vozilo ili naoružano civilno vozilo).

Oružani sustavi ovise o veličini vozila. Maksimalan tip oružanog sustava za različite veličine prikazan je u tablicama u nastavku.

##### Tablica oružja po veličini

| Veličina | Zemaljsko | Svemirski brod |
| :-- | :-- | :-- |
| Mali | Lako oružje (npr. jurišna puška) | Srednje oružje (npr. strojnica, raketni bacač) |
| Srednji | Srednje oružje (npr. strojnica, raketni bacač) | Kupolasto/Teško oružje (npr. teške povezane strojnice, mini-topovi) |
| Veliki | Kupolasto/Teško oružje (npr. teške povezane strojnice, mini-topovi) | Baterija oružja (npr. bojna artiljerija) |
| Ogroman | Baterija oružja (npr. bojna artiljerija) | Napredno oružje (npr. raketni sustavi) |
| Izniman | Napredno oružje (npr. raketni sustavi) | Oružje na kralježnici (samo jedno) |
| Kolosalan | N/A | Oružje na kralježnici (do 3) |

##### Primjer statistike oružja

| Oružje | Šteta | Domet | Brzina paljbe | Streljivo/Punjenje |
| :-- | :-: | :-: | :-: | :-: |
| Top 50 inča | 3k6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-top/Gatling top | 3k6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5k6 | 5000/20km/60km | 1 | 1/5 |
| Srednja raketa/torpedo | 6k10 | Maks. domet 200km | 1 | 1/5 |
| Velika/krstareća raketa | 6k10+10 | Maks. domet 1000km | 1 | 1/10 |
| Laser/Plazma top | 4k6 | 300/1000/2000 | -/5/25 | 500/5 |
| Teški laser/Plazma top | 5k6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artiljerijska baterija | 5k6+6 | Maks. domet 50km | 1 | 1/5 |
| Baterija s kralježničnim nosačem | 10k6+6 | Maks. domet 20000km | 1 | 1/10 |

_Dometi su dati u metrima i kilometrima._

_Brzine paljbe su za pojedinačni hitac, poluautomatsko i potpuno automatsko._

_Streljivo je sposobnost paljbe prije potrebe za ponovnim punjenjem. Punjenje je vrijeme ponovnog punjenja u Borbenim krugovima, pod pretpostavkom da je dostupna puna posada._

---
## Upravljanje i manevri

Izbjegavajući ili nagli manevri zahtijevaju uspješnu provjeru Vožnje/Pilotiranja kako bi se osiguralo da vozač ili pilot zadrži kontrolu nad vozilom. Većina vozila dizajnirana je i izgrađena da izdrži povremena opterećenja i naprezanja, ali Voditelj igre može odlučiti da određeni manevar zahtijeva provjeru na višem stupnju težine, ovisno o tome koliko je ambiciozan. Neuspjeh znači gubitak kontrole nad vozilom: bacite na tablici Gubitak kontrole.

Napominjemo da se tablica Gubitka kontrole odnosi samo na zemaljska vozila. Slični učinci mogu se primijeniti na zračne i svemirske letjelice, ali Voditelji igre će morati prilagoditi obrazloženje za specifičan učinak. Na primjer, zrakoplov, umjesto da proklizava, može ući u vrtlog.

Također, inherentno upravljanje vozilom može imati dodatni utjecaj na provjeru Vožnje. Upravljanje je Lako, Standardno, Teško, Strašno ili Herakulska i određuje početnu točku za provjeru Vožnje prilikom izvođenja manevra. Stupanj težine za manevar zatim se primjenjuje na upravljanje kako bi se odredila konačna težina.

Na primjer, motocikl visokih performansi ima ugrađene žirostabilizatore što mu daje Lako upravljanje. Vozač želi izvesti okret od 180 stupnjeva proklizavanjem kako bi izbjegao progonitelja, manevar koji Voditelj igre ocjenjuje kao dodatni stupanj težine. Vozač stoga mora napraviti provjeru Vožnje na Standardnom umjesto Lako. Da je pokušavao isti manevar na nestabiliziranom motociklu, provjera Vožnje bila bi na Teškom.

Vrhunsko upravljanje je Osobina. Ako vozilo nema tu osobinu kao dio svog opisa, tada je zadano Standardno upravljanje za bilo koje vozilo veličine Veliki i manje. Ogromna i Iznimna vozila inherentno imaju osobinu upravljanja Strašno i Herakulska, respektivno, a Voditelj igre je slobodan odlučiti da su određeni manevri jednostavno nemogući za postizanje zbog veličine vozila.

##### Tablica gubitka kontrole

| 1d100 | Rezultat |
| :-: | :-- |
| 01-25 | Skretanje. Gubitak kontrole je privremen. Vozilo smanjuje brzinu za 1 stupanj na 5 sekundi. |
| 26-40 | Proklizavanje. Vozač se mora boriti da zadrži kontrolu nad vozilom. Vozilo smanjuje brzinu za 2 stupnja na 10 sekundi. |
| 41-50 | Jako proklizavanje. Vozilo završi okrenuto u pogrešnom smjeru i zaustavljeno na 15 sekundi. |
| 51-60 | Prevrće se. Vozilo proklizava i prevrće se, trpeći 3k10 štete na svojoj Strukturi. Putnici moraju uspjeti u provjerama Izdržljivosti ili trpe 1k10 štete na 1k3 Lokacije pogodaka. |
| 61-70 | Ozbiljno prevrtanje. Kao gore, ali vozilo trpi 3k10+10 štete, a putnici primaju 1k10 štete čak i ako provjera Izdržljivosti uspije, i 2k10 ako ne uspije. |
| 71-80 | Totalni gubitak. Kao gore, ali vozilo je svedeno na 0 Strukture. Putnici trpe istu štetu kao za Ozbiljno prevrtanje. |
| 81-90 | Eksplozija. Kao gore, ali sustav goriva vozila se pali i eksplodira unutar 1k20+10 sekundi. Ako se ne uspiju izvući, putnici trpe dodatnu 1k6 štetu od opeklina na 1k6 lokacija. |
| 91-98 | Trenutna eksplozija. Kao gore, ali eksplozija je trenutna. |
| 99-00 | Katastrofalan sudar. Putnici moraju uspješno baciti Izdržljivost ili će odmah poginuti. Šteta kao za Totalni gubitak trpi se bez obzira na sve. |

---
## Primjer vozila

---

### Kopnena vozila

#### Interceptor

Poboljšani luksuzni automobil, sportski automobil ili slično, ovaj je automobil izgrađen da ide brzo i da bude jednako dobar u borbi kao i u bijegu. Ovo je vrsta vozila na koju ljudi pomisle kada netko kaže "špijunski automobil".

| Interceptor | |
| :- | :- |
| **Veličina / Tip** | Srednji vojni |
| **Oplata** | 6 |
| **Struktura** | 40 |
| **Sustavi** | 2 |
| **Brzina** | Hitro |
| **Upravljanje** | Lako |
| **Osobine** | [Izbacivo sjedalo](0006_Vehicles.md?id=ejector-seat), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Sustav za nadzor](0006_Vehicles.md?id=surveillance-suite), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružja** | Raspršivač uljne mrlje, Raspršivač dima, Dva povezana srednja strojnica (2k6+3) |

<br>

---

#### Motocikl za potjeru

Lagani, brzi motocikl za brze potjere, Motocikl za potjeru krije iznenađenje – ili par povezanih strojnica ili dvije rakete.

| Motocikl za potjeru | |
| :- | :- |
| **Veličina / Tip** | Mali civilni |
| **Oplata** | 2 |
| **Struktura** | 12 |
| **Sustavi** | 1 |
| **Brzina** | Hitro |
| **Upravljanje** | Lako |
| **Osobine** | [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružja** | Dvije rakete (4k6) ili Dvije povezane lake strojnice (2k6) |

<br>

---

#### Sedan automobil

Standardna limuzina s 4 vrata koja nudi dovoljno prostora za udobno sjedenje vozača i tri putnika. Žrtvuje teretni prostor kako bi uključila sustav za nadzor.

| Sedan automobil | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplata** | 4 |
| **Struktura** | 25 |
| **Sustavi** | 2 |
| **Brzina** | Brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Nenametljiv](0006_Vehicles.md?id=unobtrusive), [Sustav za nadzor](0006_Vehicles.md?id=surveillance-suite) |
| **Oružja** | Nema |

<br>

---

#### Podmornica automobil

Dvosjedni automobil koji se može prebaciti u vodeni ili podmorski način rada za putovanje na vodi ili pod vodom. Dolazi s torpedom postavljenim sprijeda i protuzračnom raketom postavljenom na krov.

| Podmornica automobil | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplata** | 6 |
| **Struktura** | 25 |
| **Sustavi** | 2 |
| **Brzina** | Hitro |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Podmornica](0006_Vehicles.md?id=submersible), [Kopneno-vodno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružja** | Raketa (5k6), Torpedo (4k10) |

<br>

---

#### Kombi za nadzor

Običan, neobilježen kombi u kojem se nalazi tim agenata i komplet audio-vizualne opreme za snimanje.

| Kombi za nadzor | |
| :- | :- |
| **Veličina / Tip** | Veliki civilni |
| **Oplata** | 9 |
| **Struktura** | 60 |
| **Sustavi** | 3 |
| **Brzina** | Nježno |
| **Upravljanje** | Standardno |
| **Osobine** | [Sustav za nadzor](0006_Vehicles.md?id=surveillance-suite), [Čvrsto](0006_Vehicles.md?id=tough) |
| **Oružja** | Nema |

<br>

---

#### Taktičko potporno vozilo

Pickup ili džip s prostorom za dvočlanu posadu u kabini i strijelca koji stoji u stražnjem dijelu vozila upravljajući okretnim srednjim strojnicama.

| Taktičko potporno vozilo | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplata** | 6 |
| **Struktura** | 30 |
| **Sustavi** | 2 |
| **Brzina** | Brzo |
| **Upravljanje** | Standardno |
| **Osobine** | [Svi tereni](0006_Vehicles.md?id=all-terrain), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružja** | Postavljena srednja strojnica (2k6) |

<br>

---

### Vodena plovila

#### Gliser

Tipični gliser, naoružan stražnjim raspršivačem mina.

| Gliser | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni |
| **Oplata** | 3 |
| **Struktura** | 24 |
| **Sustavi** | 2 |
| **Brzina** | Hitro |
| **Upravljanje** | Standardno |
| **Osobine** | [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Kopneno-vodno](0006_Vehicles.md?id=waterborne), [Naoružano](0006_Vehicles.md?id=weaponized) |
| **Oružja** | Raspršivač mina (5k6) |

<br>

---

#### Jahta

Vrsta luksuzne jahte koju bi oligarh mogao posjedovati. Vjerojatno opremljena sustavom za nadzor za zaštitu od neprijatelja koji pokušavaju činiti zlo.

| Jahta | |
| :- | :- |
| **Veličina / Tip** | Ogroman civilni |
| **Oplata** | 10 |
| **Struktura** | 75 |
| **Sustavi** | 4 |
| **Brzina** | Sporo |
| **Upravljanje** | Strašno |
| **Osobine** | [Luksuzno](0006_Vehicles.md?id=luxurious), [Sustav za nadzor](0006_Vehicles.md?id=surveillance-suite), [Kopneno-vodno](0006_Vehicles.md?id=waterborne) |
| **Oružja** | Nema |

<br>

---

### Zrakoplovi/Svemirske letjelice

#### Cepelin (Civilni zračni brod)

Sličan Hindenburgu, ova klasa transkontinentalnog cepelina (i drugi iz njegove klase) duga je 245 metara i zahtijeva posadu od 40 do 61 osobe. Obično može prevesti 50 do 72 putnika u luksuznom smještaju.

| Cepelin | |
| :- | :- |
| **Veličina / Tip** | Izniman civilni |
| **Oplata** | 10 |
| **Struktura** | 85 |
| **Sustavi** | 5 |
| **Brzina** | Ponderozno |
| **Upravljanje** | Herakulska |
| **Osobine** | [Zrakoplovan](0006_Vehicles.md?id=airborne), [Luksuzno](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružja** | Nema |

<br>

---

#### Jurišni helikopter

Tradicionalni jurišni helikopter koristi svoju naprednu tehnologiju nadzora za presretanje telefonskih i bežičnih internetskih signala, te za praćenje pojedinaca i vozila čak i u mraku, putem FLIR-a. Pokušaji izbjegavanja praćenja putem nevidljivosti su Strašni.

| Jurišni helikopter | |
| :- | :- |
| **Veličina / Tip** | Veliki vojni |
| **Oplata** | 11 |
| **Struktura** | 50 |
| **Sustavi** | 3 |
| **Brzina** | Umjereno |
| **Upravljanje** | Lako |
| **Osobine** | [Zrakoplovan](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance), [Nevidljivost](0006_Vehicles.md?id=stealth), [Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Sustav za nadzor](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | Nema |
| **Oružja** | 1 Gatling top (3k6), 4 rakete (5k6) |

<br>

---

#### Višenamjenski lovac

Ovaj kopneni lovac s dva sjedala (sličan tipu De Havilland Mosquito) poznat je po svojim performansama i svestranosti. Njegov bombni odjeljak može nositi dvije bombe od 250 funti (tretirati kao srednje projektile s dometom 0) ili jedan torpedo.

| Višenamjenski lovac | |
| :- | :- |
| **Veličina / Tip** | Veliki vojni |
| **Oplata** | 10 |
| **Struktura** | 45 |
| **Sustavi** | 3 |
| **Brzina** | Umjereno |
| **Upravljanje** | Standardno |
| **Osobine** | [Zrakoplovan](0006_Vehicles.md?id=airborne), [Poboljšane performanse](0006_Vehicles.md?id=enhanced-performance) |
| **Štitovi** | Nema |
| **Oružja** | 4 Gatling topa postavljena na nosu (4k6+3), 1 bombni odjeljak (6k10 - vidi opis) |

<br>

---

#### Interzvjezdani teretni brod (Lagani visokotehnološki transport)

Ovaj lagani transport zahtijeva minimalnu posadu od samo dvoje, s prostorom za do četiri dodatna putnika. Standardna verzija je ovdje navedena, no mnogi vlasnici primjenjuju vlastite "posebne modifikacije" kao što su skriveni teretni prostor, poboljšane performanse, vrhunsko upravljanje, otpornost na EMP, nevidljivost i tako dalje.

| Interzvjezdani teretni brod | |
| :- | :- |
| **Veličina / Tip** | Srednji civilni svemirski brod |
| **Oplata** | 10 |
| **Struktura** | 80 |
| **Sustavi** | 2 |
| **Brzina** | Brzo (Parsek faktor 3) |
| **Upravljanje** | Standardno |
| **Osobine** | [Zrakoplovan](0006_Vehicles.md?id=airborne), [Teretno](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Svemirska letjelica](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Štitovi** | 8 |
| **Oružja** | 2x Četverostruki laserski topovi (5k6) |

<br>

---

#### Jedinica za opći kontakt (Ultra-visokotehnološka svemirska letjelica)

Ovaj iznimno visokotehnološki zvjezdani brod fizička je reprezentacija visoko naprednog umjetnog Uma, koji poprima oblik niza poljem povezanih modula dugih dva kilometra. Moduli su individualno namijenjeni i uključuju staništa, građevinske objekte, teretne prostore, objekte za preradu hrane, rekreacijske komplekse, hangare, pa čak i neke tajne jedinice o kojima brodska inteligencija rijetko, ako ikada, raspravlja. Ne treba ljudsku posadu, ali može s lakoćom podržati populaciju putnika do 100 000. Mnogi putnici se rađaju i umiru na jedinici za kontakt: mnogi su tranzitni, dolaze i odlaze po želji.

| Jedinica za opći kontakt | |
| :- | :- |
| **Veličina / Tip** | Kolosalni civilni svemirski brod |
| **Oplata** | 20 |
| **Struktura** | 10.000 |
| **Sustavi** | 6 |
| **Brzina** | Umjereno (Parsek faktor 4. Na ovoj razini tehnologije, faktor je jednak 1 satu) |
| **Upravljanje** | Strašno |
| **Osobine** | [Zrakoplovan](0006_Vehicles.md?id=airborne), [Teretno](0006_Vehicles.md?id=cargo), [Nosač](0006_Vehicles.md?id=carrier), [Konstrukcija](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luksuzno](0006_Vehicles.md?id=luxurious), [Svemirska letjelica](0006_Vehicles.md?id=space-craft),[Vrhunsko upravljanje](0006_Vehicles.md?id=superior-handling), [Vučna zraka](0006_Vehicles.md?id=tractor-beam) |
| **Štitovi** | 30 |
| **Oružja** | Nema o kojima želi razgovarati |

<br>