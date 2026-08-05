# Sõidukid

*Mythras Imperative*'i sõidukid on käsitletud poolabstraktse meetodiga. Sisuliselt on need taustatööriistad, mida kasutatakse tegelaste punktist A punkti B toimetamiseks, ilma et oleks vaja üksikasjalikke kirjeldusi või statistikat. Siiski vajavad mängujuhid aeg-ajalt sõidukite detaile, kui neid on tarvis kujutada tagaajamistel või lahingusituatsioonides.

Selle peatüki reeglid võimaldavad esindada enamikku sõidukitüüpidest abstraktsemal viisil, mis on mõeldud paindlikkuse suurendamiseks ja lugude jutustamise rikastamiseks. Tähelaevad ja kosmoselaevad on veidi erinevad, kuigi need põhinevad sarnastel põhimõtetel.

---
## Statistika

Kõiki sõidukeid kirjeldatakse nende struktuuri (Structure), kere (Hull), kiiruse (Speed), süsteemide (Systems), tunnuste (Traits) ja kilpide (Shields) (kui need settingus esinevad) kaudu.

- **[Suurus](0006_Vehicles.md?id=vehicle-size-table):** Kõigil sõidukitel on üks kuuest suurusekategooriast, mis määrab ülejäänud omaduste väärtuse või vahemiku. Oma suurema loomupärase suuruse ja kosmose vaenuliku keskkonna tõttu on tähelaevadel oma väärtuste vahemik.
- **[Kere (Hull)](0006_Vehicles.md?id=terrestrial-hulls):** Esindab soomuspunkte (Armor Points).
- **[Struktuur (Structure)](0006_Vehicles.md?id=terrestrial-hulls):** Esindab sõiduki tabamuspunkte (Hit Points).
- **[Kilbid (Shields)](0006_Vehicles.md?id=shields):** Settingutes, kus kasutatakse arenenud energiatehnoloogiat, võivad esineda kilbid, mis kaitsevad sõidukit, kuid võivad kestva tule all kuluda.
- **[Süsteemid (Systems)](0006_Vehicles.md?id=systems):** Esindavad sõiduki elutähtsaid komponente, sealhulgas jõuallikat, meeskonnaruumide osa jne.
- **[Kiirus (Speed)](0006_Vehicles.md?id=speed):** Igal sõidukil on baaskiiruse reiting.
- **[Tunnused (Traits)](0006_Vehicles.md?id=traits):** Sõidukil võib olla üks või mitu tunnust. Tunnused, sarnaselt *Mythras Imperative*'i olendite võimetele või võitlusstiili tunnustele, pakuvad täiendavat mängulist kirjeldust ja eelist, peegeldades sõiduki olemust.
- **[Relvad (Weapons)](0006_Vehicles.md?id=weapons):** Sarnaselt tunnustele võib sõiduk olla varustatud relvadega, kui setting seda võimaldab. Mõned soovituslikud näited ja väärtused on toodud allpool.


---
### Kere suurus, tüüp ja struktuur

Sõiduki suurus ja otstarve mõjutavad selle kere paksust ja sisestruktuuri vastupidavust. Näiteks mootorrattal on minimaalne kere, kuna see on ehitatud kiiruse ja väleduse jaoks. Maapealne raudlaev (*Land Ironclad* – massiivne roomikute või ratastega soomustatud elukas, mida toidab auru- või diiselmootor), olles palju suurem lahinguvälja jaoks disainitud sõiduk, on palju suurema kerega. Kerade võrdlevad suurused (ja see, kui palju relvade tabamusi need tavaliselt taluvad) on kokku võetud allpool toodud sõidukite suuruse ja kere tabelites.

Kui sõiduk saab kahjustusi, vähendatakse sissetulevat kahju selle kereväärtuse (Hull value) võrra. Kogu ülejäänud kahju lahutatakse sõiduki struktuuripunktidest (Structure points) ja sellel on protsentuaalne võimalus, mis võrdub läbistava kahjuga, mõjutada mõnda süsteemi. Kui sõiduki struktuur langeb nullini, on see kas täielikult hävitatud või nii purustatud, et see tuleb vanarauaks saata.

##### Maapealsed kerad

| Suurus | Struktuur | Tsiviil-kere väärtus | Sõjaväe-kere väärtus | Näide |
| :-- | :-: | :-: | :-: | :-- |
| Väike | 1-20 | 1-3 | 4-6 | Mootorratas, külgkorviga mootorratas, kompaktne või väike auto, kanuu, süst, paat |
| Keskmine | 21-40 | 1-6 | 7-9 | Sedaan, kaubik, pikap, luksusauto, sportauto, limusiin, päästepaat, kiirpaat, deltaplaan, autogüro |
| Suur | 41-60 | 4-9 | 10-12 | Veoauto, pikendatud limusiin, linnamaastur, buss, väikebuss, isiklik lennuk, purilennuk, lõbusõidulaev, tank, helikopter, allveelaev |
| Hiiglaslik | 61-80 | 7-12 | 13-15 | Rekka, reisilennuk, reaktiivlennuk, rannikuvalve laev, jaht |
| Enormne | 81-100 | 10-15 | 16-18 | Rong, kruiisilaev, sõjalaev |

##### Tähelaevade kerad

| Suurus | Struktuur | Tsiviil-kere väärtus | Sõjaväe-kere väärtus | Näide |
| :-- | :-: | :-: | :-: | :-- |
| Väike | 10-50 | 4-9 | 10-12 | Ühekohaline hävitaja |
| Keskmine | 51-150 | 7-12 | 13-15 | Kerge kaubalaev, transpordilaev |
| Suur | 151-450 | 10-15 | 16-18 | Raske kaubalaev, ristleja |
| Hiiglaslik | 451-1350 | 13-18 | 19-21 | Eskortfregatt, kerge lahinguristleja |
| Enormne | 1351-4050 | 16-21 | 21-24 | Põlvkondade laev, raske lahinguristleja |
| Kolossaalne | 4050-12110 | 19-24 | 24-30 | Orbitaalhabitat, planeete hävitav lahingujaam |


---
### Kilbid

Deflektorkilbid pakuvad täiendavat kaitsekihti sõidukitele, mida saab nendega varustada. Kilbid toimivad tänu oma kuluvale olemusele kergelt erinevalt kerest. Kui sissetulev kahju on võrdne kilpide väärtusega või väiksem, blokeeritakse see täielikult. Kui kahju ületab kilbi väärtust, vähendab ülejääk kilbi tugevust selle võrra.

_Näiteks: väevedajal on energiakilbi tugevus 12 punkti. Kui vedajat tabab laser 11-punktise kahjuga, ei tungi see läbi ja sellel pole täiendavat mõju. Kui aga vedajat tabab plahvatus, mis tekitab 15 kahju, langeks kilbi tugevus ülejäänud kolme punkti võrra 9-ni._

Kui deflektorkilbi tugevus langeb nullini, see puruneb. Ülejäänud kahju kandub edasi kerele.

---
### Süsteemid

Iga kord, kui sõiduk saab kahju, mis läbib selle kere, on olemas tõenäosus (mis võrdub läbistava kahjuga), et elutähtis süsteem on kannatada saanud.

_Näiteks: kiirpaadile – sõidukile, millel on 3 kereväärtust ja 24 struktuuripunkti – tehakse 10 kahju. Kere loetakse soomuseks, mis vähendab kahju 7-ni. See lahutatakse 24-st struktuuripunktist ja on 7% tõenäosus, et mõni sõiduki süsteemidest saab kahjustada._

Süsteemi vastupidavus sõltub puhtalt sõiduki suurusest. Seda modelleeritakse süsteemi tabamuste arvuga, mitte tegeliku kahjusummaga. Üks süsteemitabamus väikesele sõidukile hävitab selle süsteemi silmapilkselt. Keskmise suurusega sõiduki süsteemide purustamiseks on vaja kahte tabamust, suurele kolm ja nii edasi. Vaadake allpool olevat [Süsteemi kahjustuste tabelit](0006_Vehicles.md?id=system-damage-table).

Süsteemid, mis on kahjustatud, kuid mitte veel hävitatud, kannatavad funktsionaalsuse kaotuse all, mis on proportsionaalne tabamuste arvuga – kas protsentuaalne vähenemine või raskusastme (Grade) trahv süsteemiülesannetele. Konkreetne mõju sõltub sellest, mida alamsüsteem kontrollib, nagu on üksikasjalikult kirjeldatud allpool [Süsteemi komponentide kahjustuste tabelis](0006_Vehicles.md?id=system-component-damage-table). Sõltuvalt sellest, millist süsteemi tabatakse, võivad tagajärjed olla katastroofilised.

_Näiteks: Maapealne raudlaev – enormne sõiduk, millel on 5 süsteemitabamust – tabatakse kaks korda mootorisse (Drive), kaotaks 40% oma võimsusest ja selle aeglane kiirus (Slow) langeks kaks astet "Vaevaliseks" (Ponderous). Samamoodi, suurel kaubalaeval – millel on 3 süsteemitabamust –, kui see saab kaks tabamust mootorisse/kütusesüsteemi, oleks kaheastmeline kiiruse trahv ning raskem oleks kasutada ka elektroonilisi süsteeme. Kolmas tabamus hävitaks mootori/kütusesüsteemi ja koos sellega ka laeva._


<details>

<summary>* Ühenduse errata</summary>

---

#### Kahjustused

_Algne tekst oli siinkohal liiga kordav._

- _"Kahju, mis ületab kere, läbistab sõiduki, kahjustades struktuuri ja mõjutades võib-olla ühte või mitut süsteemi. Sõltuvalt sõiduki suurusest võib kahju olla väike või katastroofiline._
- _Näiteks: suur sõiduk võib saada kuni kaks tabamust süsteemi, nagu mootor. Kolmas tabamus hävitab mootori funktsionaalsuse. Iga kord, kui süsteem saab tabamuse, kaotab see kas protsendi oma funktsionaalsusest, nagu on kirjeldatud süsteemi kahjustuste tabeli veerus 'Loss per Hit', või muutub põhifunktsioon (nagu mootor, juhtimine, side jne) ühe raskusastme võrra raskemaks iga saadud tabamuse kohta."_

_Ülaltoodud lõigud on eemaldatud ja asendatud lühema redaktsiooniga, mis toob välja teise näite süsteemi mõjust._

---

</details>

##### Süsteemi kahjustuste tabel

| Suurus | Süsteemitabamused | Kaotus tabamuse kohta |
| :-- | :-: | :-- |
| Väike | 1 | 100% - Hävitatud |
| Keskmine | 2 | 1 aste või 50% |
| Suur | 3 | 1 aste või 33% |
| Hiiglaslik | 4 | 1 aste või 25% |
| Enormne | 5 | 1 aste või 20% |
| Kolossaalne | 6 | 1 aste või 16% |

---

##### Süsteemi komponentide kahjustuste tabel

| 1d10 | Süsteem | Kahjustatud tulemus | Hävitatud tulemus |
| :-: | :-- | :-- | :-- |
| 1 | Lastiruum | Kahjuga proportsionaalne kogus vara või varustust on hävitatud. | Kogu last on hävitatud. |
| 2 | Side (Comms) | Sidevisked muutuvad ühe raskusastme võrra raskemaks iga kord, kui see kahjustub. | Sõiduk ei saa enam suhelda ega vaenlase sensoreid petta. |
| 3 | Juhtimine (Controls) | Juhtimisvisked (Boating, Drive, Pilot) muutuvad ühe raskusastme võrra raskemaks iga kord, kui see kahjustub; vajalik kohene kontrollvise. | Sõidukit ei saa enam tüürida ega kurssi muuta. |
| 4 | Mootor (Drive) | Kiirus väheneb kahjuga proportsionaalselt. | Sõiduk peatub täielikult; õhusõidukid kukuvad alla. |
| 5 | Meeskond (Crew) | Kahjuga proportsionaalne arv reisijaid saab viga. Mõjutatud saavad raske vigastuse ja peavad sooritama vastupidavusviske (Endurance), muidu surevad silmapilkselt. | Sõidukis olijad surevad. |
| 6 | Mootor / Kütus | Kiirus väheneb kahjuga proportsionaalselt. Elektrooniliste süsteemide kasutamine muutub ühe raskusastme võrra raskemaks. | Sõiduk hävib katastroofilises plahvatuses. |
| 7 | Sensorid | Sensorite, navigatsiooni ja relvarünnakute visked muutuvad ühe raskusastme võrra raskemaks iga kord, kui see kahjustub. | Sõiduk muutub pimedaks. |
| 8 | Relvad | Kahjuga proportsionaalne arv relvasüsteeme muutub töövõimetuks. | Sõiduk ei saa enam tulistada. |
| 9-0 | Puudub | Ühtegi süsteemi ei tabatud; ainult struktuurikahju. | N/A |

---
### Kiirus

Kuna kiiruse, kiirenduse, õhutakistuse ja inertsuse füüsika on keeruline, on vaja lihtsustamist, seega antakse sõidukitele abstraktne kiirusreiting. Kiirusomadust tuleks kasutada vaid ligikaudseks hindamiseks, kas üks sõiduk suudab teisest mööduda või sellele järele jõuda.

Kiirusreiting esindab sõiduki nominaalset töökiirust. Hädaolukordades saab seda jõudlust ühe astme võrra suurendada, riskides mootorite kulumise või kahjustustega. Kuigi kõigi sõidukitüüpide puhul kasutatakse sama tabelit, tuleks rakendada tervet mõistust, et võrreldaks ainult sama klassi sõidukeid. Näiteks kui tähelaeval ja sportautol on sama kiirendus (Rapid), peaks olema ilmne, et tähelaev on võrdlemisi kiirem.

Sõiduki kiiruse suurendamine üle standardväärtuse on võimalik eduka juhtimisviskega (Drive). Tavaliselt on see lisakiirus jätkusuutlik vaid lühikest aega – mitte rohkem kui 1d6 minutit, enne kui sõiduk peab langema standardkiirusele või riskima jõuallika kahjustustega. Kriitiline juhtimisvise lubab suurema kiiruse perioodi pikendada 1d12 minutini.

Juht võib proovida suurendada sõiduki kiirust 2 astme võrra, kuid see nõuab Heraklese tasemel juhtimisviset ja maksimum, mida sõiduk suudab seda kiirust hoida, on 1d3 minutit: kriitiline õnnestumine ei pikenda suurendatud kiiruse kestust.

##### Kiirusreitingu tabel

| Kiirusreiting | Max kiirus suuruse järgi |
| :-- | :-: |
| Vaevaline (Ponderous) | Enormne |
| Loid (Sluggish) | |
| Aeglane (Slow) | Hiiglaslik |
| Keskpärane (Mediocre) | |
| Rahulik (Gentle) | Suur |
| Mõõdukas (Moderate) | |
| Kiire (Rapid) | Keskmine |
| Kärme (Fast) | |
| Väle (Fleet) | Väike |

---
### Tunnused

Sõiduki tunnuste maksimaalne arv sõltub kere suurusest ja tüübist.

Igal sõidukil on loomupärane tunnus: liikumisviis, mille jaoks see on peamiselt disainitud. Seega on lennukitel loomupäraselt tunnus "Õhusõiduk" (Airborne), paatidel "Merel sõitev" (Seaborne) jne. See loomupärane tunnus ei arvestata saadaolevate tunnuste hulka. Kui aga sõiduk sisaldab teist liikumisviisi – näiteks lendav allveelaev –, siis peaks "Õhusõiduki" tunnuse võtma ühe saadaoleva tunnusena.

Mõned tunnused ei pruugi olla kättesaadavad, sõltuvalt settingu tehnoloogilisest tasemest; mängujuhid peavad ise otsustama, milliseid tunnuseid saab rakendada.

##### Sõidukite tunnuste jaotuse tabel

| Suurus | Max tunnused |
| :-- | :-: |
| Väike | 1 |
| Keskmine | 2 |
| Suur | 3 |
| Hiiglaslik | 4 |
| Enormne | 5 |
| Kolossaalne | 6 |

*(Järgnevad tunnused kirjeldavad sõidukite erivõimeid, nagu Airborne, All Terrain, Burrowing, Camouflaged, Cargo, Carrier, Construction, EMP Resistant, Enhanced Performance, Ejector Seat, FTL, jne...)*

---
## Relvad

Tavaliselt on vaid sõjaväekered disainitud relvastuse kandmiseks. Tunnust "Relvastatud" (*Weaponized*) saab võtta tsiviilsõidukitele, millel võib olla relvanõudlus.

Maksimaalne relvasüsteemide arv, mida sõiduk toetab, on võrdne 1/10-ga selle struktuuripunktidest (seega sõiduk, millel on 40 struktuuripunkti, toetaks 4 relvasüsteemi, kui tegemist on sõjaväesõiduki või relvastatud tsiviilsõidukiga).

##### Relvad suuruse järgi

| Suurus | Maapealsed | Kosmoselaevad |
| :-- | :-- | :-- |
| Väike | Kerge relv (nt ründerelv) | Keskmine relv (nt kuulipilduja, raketilaskja) |
| Keskmine | Keskmine relv (nt kuulipilduja, raketilaskja) | Tornirelv/Raskerelv (nt raskekuulipildujad) |
| Suur | Tornirelv/Raskerelv (nt raskekuulipildujad) | Relvapatarei (nt suurtükivägi) |
| Hiiglaslik | Relvapatarei (nt suurtükivägi) | Täiustatud relvad (nt raketisüsteemid) |
| Enormne | Täiustatud relvad (nt raketisüsteemid) | Selgroole paigaldatud relvad (1 tk) |
| Kolossaalne | NA | Selgroole paigaldatud relvad (kuni 3 tk) |

---
## Juhtimine ja manöövrid

Evasive või ootamatud manöövrid nõuavad edukat juhtimisviset, et tagada sõiduki üle kontrolli säilitamine. Enamik sõidukeid on ehitatud taluma juhuslikke pingeid, kuid mängujuht võib otsustada, et konkreetne manööver nõuab kõrgema raskusastmega viset. Ebaõnnestumine tähendab, et kontroll sõiduki üle on kadunud: visake kontrolli kaotamise tabelit (*Loss of Control table*).

*(Järgneb kontrolli kaotamise tabel ja näidissõidukite kirjeldused, mis säilitavad tabelite struktuuri nagu originaalis.)*