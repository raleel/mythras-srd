# Sõidukid

Sõidukeid käsitletakse mängus _Mythras Imperative_ poolabstraktsel viisil. Sisuliselt on need taustavahendid, mida kasutatakse tegelaste ühest punktist teise toimetamiseks, ilma et oleks vaja üksikasjalikku kirjeldust või statistikat. Mõnikord vajavad mängujuhid siiski sõidukite üksikasju, kui on vaja neid kujutada tagaajamistel või lahingusituatsioonides.

Selle jaotise reeglid võimaldavad kujutada enamikku sõidukitüüpe abstraktisel viisil, mis on mõeldud paindlikkuse suurendamiseks ja jutuvestmise täiustamiseks. Tähelaevad ja kosmoselaevad on veidi erinevad, kuigi need põhinevad sarnastel põhimõtetel.

---
## Statistika

Kõiki sõidukeid kirjeldatakse nende struktuuri (Structure), kere (Hull), kiiruse (Speed), süsteemide (Systems), omaduste (Traits) ja kilpide (Shields) (kui need on seadistuses olemas) kaudu.

- **[Suurus](0006_Vehicles.md?id=vehicle-size-table):** Kõigil sõidukitel on üks kuuest suuruseastmest, mis määrab ülejäänud omaduste väärtuse või vahemiku. Oma suurema sisemise suuruse ja kosmose vaenuliku keskkonna tõttu on tähelaevadel oma väärtuste vahemik.
- **[Kere](0006_Vehicles.md?id=terrestrial-hulls):** Esindab soomuspunkte (Armor Points).
- **[Struktuur](0006_Vehicles.md?id=terrestrial-hulls):** Esindab sõiduki tabamuspunkte (Hit Points).
- **[Kilbid](0006_Vehicles.md?id=shields):** Seadistustes, kus on olemas täiustatud energia manipuleerimise tehnoloogia, võivad olla olemas kilbid, mis kaitsevad sõidukit, kuid mis võivad pideva tule all kuluda.
- **[Süsteemid](0006_Vehicles.md?id=systems):** Esindavad sõiduki elutähtsaid komponente, sealhulgas jõuallikat, meeskonnaruume ja nii edasi.
- **[Kiirus](0006_Vehicles.md?id=speed):** Igal sõidukil on baaskiiruse reiting.
- **[Omadused](0006_Vehicles.md?id=traits):** Sõidukil võib olla ka üks või mitu omadust. Omadused, sarnaselt olenditele määratud võimetele _Mythras Imperative_ reeglites või võitlusstiili omadustele, pakuvad täiendavat mängukirjeldust ja eelist, peegeldades sõiduki olemust.
- **[Relvad](0006_Vehicles.md?id=weapons):** Sarnaselt omadustele võib sõiduk olla varustatud relvadega, kui seadistus seda võimaldab. Mõned soovituslikud näited ja väärtused on toodud allpool.


---
### Kere suurus, tüüp ja struktuur

Sõiduki suurus ja otstarve mõjutavad selle kere paksust ja sisemise struktuuri vastupidavust. Näiteks mootorrattal on minimaalne kere, kuna see on ehitatud kiiruse ja väleduse jaoks. Maapealsel soomusmasinal (massiivne roomikutel või ratastel liikuv soomustatud hiiglane, mida käitavad auru- või diiselmootorid), mis on palju suurem lahinguväljale mõeldud sõiduk, on palju suurem kere. Kerede suhtelisi suurusi (ja seda, kui palju relvade tabamusi need tavaliselt taluvad) on kokku võetud allpool olevates sõiduki suuruse ja kere tabelites.

Alati, kui sõiduk saab kahjustusi, vähendatakse sissetulevat kahju selle kereväärtuse võrra. Ülejäänud kahju lahutatakse sõiduki struktuuripunktidest ja sellel on protsentuaalne võimalus, mis võrdub läbiva kahjuga, mõjutada mõnda süsteemi. Kui sõiduki struktuur langeb nullini, on see kas täielikult hävitatud või nii halvasti purustatud, et see tuleb vanarauaks saata.

##### Maapealsed kered

| Suurus | Struktuur | Tsiviilkere väärtus | Sõjaväekere väärtus | Näide |
| :-- | :-: | :-: | :-: | :-- |
| Väike | 1-20 | 1-3 | 4-6 | Mootorratas, külgkorviga mootorratas, kompaktne või väikeauto, kanuu, süst, paat |
| Keskmine | 21-40 | 1-6 | 7-9 | Sedaani tüüpi auto, väikebuss, pikap, luksusauto, sportauto, limusiin, päästepaat, kiirpaat, deltaplaan, autogiro |
| Suur | 41-60 | 4-9 | 10-12 | Veoauto, pikendatud limusiin, linnamaastur, buss, väikebuss, isiklik lennuk, purilennuk, lõbusõidulaev, tank, helikopter, allveelaev |
| Hiiglaslik | 61-80 | 7-12 | 13-15 | Poolhaagis, reisilennuk, reaktiivlennuk, rannikuvalve alus, jaht |
| Tohutu | 81-100 | 10-15 | 16-18 | Rong, kruiisilaev, mereväe alus |

##### Tähelaeva kered

| Suurus | Struktuur | Tsiviilkere väärtus | Sõjaväekere väärtus | Näide |
| :-- | :-: | :-: | :-: | :-- |
| Väike | 10-50 | 4-9 | 10-12 | Ühekohaline hävitaja |
| Keskmine | 51-150 | 7-12 | 13-15 | Kerge kaubalaev, transpordisüstik |
| Suur | 151-450 | 10-15 | 16-18 | Raske kaubalaev, ristleja |
| Hiiglaslik | 451-1350 | 13-18 | 19-21 | Eskortfregatt, kerge lahinguristleja |
| Tohutu | 1351-4050 | 16-21 | 21-24 | Põlvkondade laev, raske lahinguristleja |
| Kolossaalne | 4050-12110 | 19-24 | 24-30 | Orbitaalhabitat, planeete hävitav lahingujaam |


---
### Kilbid

Deflektor-kilbid pakuvad täiendavat kaitsekihti neile sõidukitele, millele neid saab paigaldada. Kilbid toimivad veidi teisiti kui kere, kuna need on kuluva iseloomuga. Kui sissetulev kahju on võrdne kilpide väärtusega või väiksem sellest, blokeeritakse see täielikult. Kui kahju ületab kilbi väärtuse, vähendab ülejääk kilbi tugevust selle summa võrra.

_Näiteks väetranspordil on energiakilbi tugevus 12 punkti. Kui transpordilaeva tabab laser, mis tekitab 11 kahju, siis see lihtsalt ei läbi kilpi ega avalda täiendavat mõju. Teisalt, kui transpordilaeva tabab plahvatus, mis tekitab 15 kahju, siis ülejäänud kolm punkti vähendaksid kilbi tugevust 9-ni._

Kui deflektor-kilbi tugevus langeb nullini, see variseb. Kogu ülejäänud kahju kandub edasi kerele.

---
### Süsteemid

Iga kord, kui sõiduk saab kahjustusi, mis läbivad selle kere, on olemas tõenäosus, mis võrdub läbiva kahjuga, et mõni elutähtis süsteem on kannatada saanud.

_Näiteks kiirpaadile - sõidukile, millel on 3 kereväärtust ja 24 struktuuripunkti - tehakse 10 kahju. Kere toimib soomusena, vähendades kahju 7-ni. See lahutatakse 24 struktuuripunktist ja sõiduki süsteemi kahjustamiseks on 7% tõenäosus._

Kahju, mida süsteem võib taluda, põhineb puhtalt sõiduki suurusel. Seda modelleeritakse süsteemi tabamuste arvuga, mitte tegeliku kahju hulgaga. Üksik süsteemitabamus väikesel sõidukil hävitab selle süsteemi viivitamatult. Keskmise suurusega sõiduki süsteemide hävitamiseks kulub kaks tabamust, suure sõiduki puhul kolm ja nii edasi. Vaata allpool olevat [Süsteemi kahjustuste tabelit](0006_Vehicles.md?id=system-damage-table).

Süsteemid, mis on kahjustatud, kuid mitte veel hävitatud, kannatavad funktsionaalsuse vähenemise all, mis on proportsionaalne saadud tabamuste arvuga - kas protsentuaalne vähenemine või raskusastme karistus süsteemitoimingutele. Konkreetne mõju sõltub sellest, mida alamsüsteem kontrollib, nagu on üksikasjalikult kirjeldatud allpool olevas [Süsteemikomponentide kahjustuste tabelis](0006_Vehicles.md?id=system-component-damage-table). Sõltuvalt sellest, millist süsteemi tabatakse, võivad mõjud olla katastroofilised.

_Näiteks maapealne soomusmasin - tohutu sõiduk 5 süsteemitabamusega -, mis saab kaks tabamust ajamisse, kaotaks 40% oma võimsusest ja vähendaks oma aeglast kiirust kahe astme võrra raskepäraseks. Samamoodi oleks suurel kaubalaeval - 3 süsteemitabamusega -, mis saab kaks tabamust mootori/kütusesüsteemi, kahe astme karistus kiirusele ning elektrooniliste süsteemide kasutamisele. Kolmas tabamus hävitaks mootori/kütusesüsteemi ja koos sellega ka laeva._


<details>

<summary>* Kogukonna parandused</summary>

---

#### Kahjustused

_Algne tekst siin oli algselt kaugemal. Otse süsteemide jaotise järele paigutatuna kordab see tarbetult eelnevat lõiku._

- _"Kahju, mis ületab kere, läbib sõiduki, kahjustades struktuuri ja mõjutades võib-olla ühte või mitut süsteemi. Sõltuvalt sõiduki suurusest võib kahju olla väike või katastroofiline._
- _Näiteks suur sõiduk võib saada kuni kaks tabamust süsteemi, nagu selle ajam. Kolmas tabamus hävitab ajami funktsionaalselt. Iga kord, kui süsteem saab tabamuse, kaotab see kas protsendi oma funktsioonist, nagu on kirjeldatud allpool oleva süsteemi kahjustuste tabeli veerus "Kahju tabamuse kohta", või muutub põhifunktsioon (nagu ajam, piloot, side jne) ühe raskusastme võrra raskemaks iga saadud tabamuse kohta."_

_Ülaltoodud lõigud on eemaldatud ja nende asemele on pandud lühendatud toimetus, mis toob välja teise näite süsteemi mõjust._

---

</details>

##### Süsteemi kahjustuste tabel

| Suurus | Süsteemi tabamused | Kahju tabamuse kohta |
| :-- | :-: | :-- |
| Väike | 1 | 100% - Hävitatud |
| Keskmine | 2 | 1 aste või 50% |
| Suur | 3 | 1 aste või 33% |
| Hiiglaslik | 4 | 1 aste või 25% |
| Tohutu | 5 | 1 aste või 20% |
| Kolossaalne | 6 | 1 aste või 16% |


<details>

<summary>* Kogukonna parandused</summary>

---

##### Süsteemi kahjustuste tabel (originaal)

| Suurus | Süsteemi tabamused | Kahju tabamuse kohta |
| :-- | :-: | :-- |
| Väike | 1 | 1 aste või 50% |
| Keskmine | 2 | 1 aste või 33% |
| Suur | 3 | 1 aste või 25% |
| Hiiglaslik | 4 | 1 aste või 20% |
| Tohutu | 5 | 1 aste või 16% |
| Kolossaalne | 6 | 1 aste või 10% |

##### Sõiduki suuruse tabel (allikast [Kere suurus, tüüp ja struktuur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Suurus | Süsteemi tabamused |
| :-- | :-: |
| Väike | 1 |
| Keskmine | 2 |
| Suur | 3 |
| Hiiglaslik | 4 |
| Tohutu | 5 |
| Kolossaalne | 6 |

_Algsed reeglid ja näited on vastuolulised:_
- _"Süsteemid, mis on kahjustatud, kuid mitte veel hävitatud, kannatavad funktsionaalsuse vähenemise all. See on võrdne praeguste tabamuste osakaaluga selle koguvõimekusest. Seega kaotaks tohutu sõiduk, mis saab ajamisse kaks tabamust, 40% oma võimsusest (2 tabamust 5-st)."_
   - _See viitab sellele, et tabelis näidatud tohutu sõiduk, millel on 5 süsteemitabamust, peaks kaotama iga tabamusega 20% - kuid tabel ütleb 16%._
- _"Näiteks suur sõiduk võib saada kuni kolm tabamust süsteemi, nagu selle ajam. Neljas tabamus hävitab ajami funktsionaalselt."_
  - _See viitab - nagu ka tabel - 25% kahjule süsteemitabamuse kohta, kuid suur sõiduk suudab sama tabeli kohaselt vastu võtta ainult 3 süsteemitabamust._
- _Kuigi see pole vastuoluline, oli sõiduki suuruse tabel koondav; ilmudes uuesti täielikumal kujul (lisades veeru "Kahju tabamuse kohta") vaid mõni rida hiljem._

_See muudab järjepideva reegli omamise raskeks. Nende probleemide lahendamiseks on väärtusi ja näiteid muudetud nii, et need vastaksid üksteisele, ja sõiduki suuruse tabel eemaldati._

---

</details>


##### Süsteemikomponentide kahjustuste tabel

| 1d10 | Süsteem | Kahjustuse tulemus | Hävitatud tulemus |
| :-: | :-- | :-- | :-- |
| 1 | Lastiruum | Teatud kogus lastiruumis hoitavat vara või varustust, proportsionaalselt kahjuga, hävib. | Kogu last hävib. |
| 2 | Side | Sideveerud kannatavad iga kord kahjustamisel ühe täiendava raskusastme võrra. | Sõiduk ei saa enam suhelda ega vaenlase andureid eksitada. |
| 3 | Juhtseadmed | Paadisõidu, juhtimise või pilootimise veerud kannatavad iga kord kahjustamisel ühe täiendava raskusastme võrra; nõutav viivitamatu kontrolli (Control) vise. | Sõidukit ei saa enam juhtida ega kurssi muuta. |
| 4 | Ajam | Kiirus väheneb kahjuga proportsionaalsel määral. | Sõiduk seiskub täielikult; õhusõidukid kukuvad alla. |
| 5 | Meeskond | Teatud arv reisijaid, proportsionaalselt kahjuga, saavad kannatada. Mõjutatud isikud kannatavad raske haava all ja peavad õnnestuma vastupidavuse (Endurance) viskel või saavad silmapilkselt surma. | Sõiduki reisijad surevad. |
| 6 | Mootor / Kütus | Kiirus väheneb kahjuga proportsionaalsel määral. Elektrooniliste süsteemide kasutamine on ühe raskusastme võrra raskem. | Sõiduk hävib katastroofilises plahvatuses. |
| 7 | Andurid | Anduri-, navigatsiooni- ja relvarünnakute veerud kannatavad iga kord kahjustamisel ühe täiendava raskusastme võrra. | Sõiduk jääb pimedaks. |
| 8 | Relvad | Teatud arv relvasüsteeme, proportsionaalselt kahjuga, muutub kasutuskõlbmatuks. | Sõiduk ei saa enam relvi kasutada. |
| 9-0 | Puudub | Ühtegi süsteemi ei tabatud; ainult struktuurikahjustus. | N/A |

<details>

<summary>* Kogukonna parandused</summary>

---

##### Süsteemikomponentide kahjustuste tabel (Mootor/Kütus)

_Algne tulemus oli järgmine: "Maksimaalne kiirus poolitub..." See on vastuolus kahjustuste karistuste üldreegliga proportsionaalselt süsteemikahjustustega: 25% kahjustus = 25% karistus. Lisaks ei mainita "Mythras Companionis" toodud täielikes reeglites seda kiiruse poolitamist._

_Selle tulemusena on tekst asendatud sama sissekandega, mis on ajamisüsteemide juures: "Kiirus väheneb kahjuga proportsionaalsel määral."_

---

</details>


---
### Kiirus

Kuna kiiruse, kiirenduse, takistuse ja inertsuse füüsika (nimetades vaid mõnda) on keerulised teemad, on vaja mõningat lihtsustamist ja seetõttu antakse sõidukitele abstraktne kiiruse reiting. Kiiruse omadust tuleks kasutada ainult selleks, et ligikaudselt hinnata, kas üks sõiduk suudab teisele järele jõuda või seda ületada.

Kiiruse reiting esindab sõiduki nominaalset töökiirust. Hädaolukordades saab seda jõudlust ühe astme võrra suurendada, kandes mootorite kulumise või kahjustumise ohtu. Kuigi kõigi sõidukitüüpide puhul kasutatakse sama tabelit, tuleks kasutada tervet mõistust, et võrreldaks ainult sama klassi sõidukeid. Näiteks kui tähelaeval ja sportautol on mõlemal sama kiirendusmäär (Rapid), siis peaks olema ilmne, et kosmoselaev on võrdlevalt kiirem.

Sõiduki kiiruse suurendamine üle selle standardväärtuse on võimalik eduka juhtimise (Drive) viskega. Tavaliselt on see lisa-kiirus jätkusuutlik vaid lühikest aega – mitte rohkem kui 1d6 minutit, enne kui sõiduk peab langema standardkiirusele või riskima jõuallika kahjustamisega. Kriitiline juhtimise vise võimaldab suurema kiiruse perioodi pikendada 1d12 minutini.

Juht võib proovida sõiduki kiirust tõsta 2 astme võrra, kuid see nõuab Heraklese tasemel juhtimise viset ja maksimaalne aeg, mida sõiduk suudab seda kiirust säilitada, on 1d3 minutit: kriitiline õnnestumine suurendatud kiiruse kestust ei pikenda.

##### Kiiruse reitingu tabel

| Kiiruse reiting | Maksimaalne kiirus |
| :-- | :-: |
| Raskepärane | Tohutu |
| Uimane | |
| Aeglane | Hiiglaslik |
| Keskpärane | |
| Rahulik | Suur |
| Mõõdukas | |
| Kiire | Keskmine |
| Väle | |
| Noolkiire | Väike |


---
### Omadused

Sõidukil võib olla maksimaalselt teatud arv omadusi, sõltuvalt kere suurusest ja tüübist.

Igal sõidukil on omane omadus: liikumisviis, milleks see oli peamiselt kavandatud. Seetõttu on õhusõidukitel olemuslikult omadus "Õhusõit" (Airborne), paatidel "Merel sõitmine" (Seaborne) ja nii edasi. See olemuslik omadus ei lähe arvesse saadaolevate omaduste hulka. Kui aga sõiduk peaks sisaldama teist liikumisviisi - näiteks lendav allveelaev -, siis peaks "Õhusõidu" omadus olema võetud ühe saadaoleva omadusena.

Mõned omadused ei pruugi olla kättesaadavad, sõltuvalt seadistuse tehnoloogia tasemest; mängujuhid peavad ise otsustama, milliseid omadusi saab rakendada.

##### Sõiduki omaduste jaotuse tabel

| Suurus | Maksimaalsed omadused |
| :-- | :-: |
| Väike | 1 |
| Keskmine | 2 |
| Suur | 3 |
| Hiiglaslik | 4 |
| Tohutu | 5 |
| Kolossaalne | 6 |

#### Õhusõit (Airborne)

Sõiduk on võimeline lendama atmosfääris.

#### Kõik maastikud (All Terrain)

Seda omadust tuleb kasutada maapealsete sõidukitega. Sõiduk suudab läbida ebasoodsat, rasket ja järsku maastikku, kasutades kas roomikuid, täiustatud vedrustust ja ajamisüsteeme või võimsaid diferentsiaale.

#### Puurimine (Burrowing)

Sõiduk on kavandatud maa sisse puurimiseks ja tunnelite rajamiseks. See võib saavutada maksimaalse sügavuse, mis võrdub selle kereväärtusega x 5 meetrit.

#### Kamuflaaž (Camouflaged)

Sõidukil on kas kamuflaaživärv või mimeetilised andurid, mis võimaldavad sellel keskkonnaga sulanduda. Katsed sõidukit visuaalselt märgata on ühe raskusastme võrra raskemad.

#### Last (Cargo)

Sõiduk on kavandatud spetsiaalselt lasti, mitte reisijate veoks. Reisijateruumid on hoitud minimaalsena ja ülejäänud sõiduki kasutatav ruum on pühendatud lasti paigutamisele koos sobivate sektsioonide, tööriistade ja isegi keskkonnakontrolliga (näiteks sügavkülmikud rikneva kauba transportimiseks). Lastiga koormatuna on sõiduki kiirus kaks astet madalam, kui selle kere suurus tavaliselt lubaks.

#### Kandur (Carrier)

Sõiduk on kavandatud spetsiaalselt väiksemate, kerge meeskonnaga või võib-olla kaugjuhitavate tsiviil- või sõjaväesõidukite vedamiseks. Iga sõiduk, millel on see omadus, peab olema vähemalt tohutu. Veetavate väikelaevade arv võib erineda vastavalt missiooni tüübile ja eesmärgile, kuid see võib ulatuda 10-st kuni sõiduki struktuuriväärtuseni.

#### Ehitus (Construction)

Sõiduk on varustatud rasketeks ehitustöödeks. Kõigil selle omadusega sõidukitel on ka omadus "Kõik maastikud", kuid kiirus on kaks astet madalam, kui nende kere suurus tavaliselt lubaks. Sõiduk on varustatud ülesannetele vastavate tööriistadega, nagu kraananooled, ekskavaatorikopad, kallurvagunid jne.

#### EMP-kindel (EMP Resistant)

Sõiduk on kaitstud elektromagnetiliste impulsside rünnakute eest.

#### Täiustatud jõudlus (Enhanced Performance)

Sõiduki kiiruse reiting on ühe astme võrra kõrgem kui selle suuruse puhul maksimaalne.

#### Väljavisketool (Ejector Seat)

Hädaolukorras paiskab väljavisketool reisijad mitusada meetrit õhku, seejärel avaneb langevari, mis võimaldab ohutu maandumise. Langevari on valikuline. Ei soovitata helikopteritele (märkimisväärne erand on Kamov Ka-52 Alligator).

#### Ülevalguskiirus (FTL)

Ainult kosmoselaevad. Laev on varustatud ülevalguskiirusel liikuva mootoriga (olgu see hüperajam, lõimeajam, ussiaugu generaator vms). FTL-ajamisel on eraldi kiiruse reiting, mis mõõdab sisuliselt kiirust, millega tähelaev suudab ületada ühe parseki (3,26 valgusaastat ehk 31 triljonit kilomeetrit ehk 19 triljonit miili), järgmiselt:

##### FTL-kiiruse reitingu tabel

| Kiiruse reiting | Tegur 1 parseki läbimiseks |
| :-- | :-: |
| Raskepärane | 10 |
| Uimane | 8 |
| Aeglane | 7 |
| Keskpärane | 6 |
| Rahulik | 5 |
| Mõõdukas | 4 |
| Kiire | 3 |
| Väle | 2 |
| Noolkiire | 1 |

Teguri aja üle otsustab mängujuht, sõltuvalt sellest, kui arenenud on seadistuse FTL-areng. Näiteks võib baastegur olla 1 päev, mis tähendab, et raskepärase FTL-ajamiga laev kulutab teekonna läbimiseks 10 päeva, samas kui noolkiire FTL-ajamiga laev lõpetab reisi 1 päevaga. Mujal, kus FTL-tehnoloogia on oluliselt vähem tõhus, võib teguri aega mõõta kuudes, mitte päevades.

Eeldatakse, et laeval on kütusevarud kas tagasireisi tegemiseks või vahendid sihtpunktis tankimiseks.

Eeldatakse, et igas suuruses tähelaevale saab paigaldada FTL-ajami, ehkki ka see sõltub seadistusest.

FTL-ajameid ei saa aktiveerida tähest 1,5 astronoomilise ühiku raadiuses (umbes 225 miljonit kilomeetrit ehk 270 miljonit miili). See tähendab, et laevad peavad kasutama alavalguskiiruse ajamit, et liikuda umbes Marsi kaugusele, enne kui nad aktiveerivad FTL-süsteemi.

#### Maapealne sõiduk (Ground Vehicle)

Sõiduk on võimeline liikuma maal.

#### Hõljumine (Hover)

Sõiduk hõljub maapinnast kõrgemal, kasutades kas õhkpatja või antigravitatsioonilist repulsorit.

#### Luksuslik (Luxurious)

Sõiduk on kavandatud spetsiaalselt reisijate vedamiseks teatud luksustasemel. Üleliigne kaubaruum on antud luksuslikele reisijate majutusruumidele, basseinidele, mullivannidele, täiendavale meeskonnale reisijate kapriiside rahuldamiseks jne.

#### Rööpad (Rails)

Sõiduk toetub rööbasteesüsteemile. Rööbasteeomadusega sõidukid võivad loomulikult saavutada kiiruse reitingu, mis on kolm astet kõrgem kui nende kere suurus tavaliselt lubaks, kuid on ilmselgelt piiratud liikumisega ainult rööbasteesüsteemil.

#### Vastupidav (Resilient)

Kõik süsteemid taluvad ühe tabamuse rohkem, kui suurus tavaliselt määrab. Seda omadust saab virnastada - seega tähistab "Vastupidav 2", et süsteemid taluvad 2 tabamust rohkem kui tavaliselt, makstes kaks omaduse punkti.

#### Meresõit (Seaborne)

Sõiduk on vees ujuv.

#### Kosmoselaev (Spacecraft)

Sõiduk on suletud vaakumi eest, kaitstud kosmilise kiirguse eest ning võib, sõltuvalt disainist, olla võimeline atmosfäärist lahkuma ja sinna naasma ning säilitama lendu atmosfääris.

#### Varglikkus (Stealth)

Ainult õhusõidukid. Sõiduk on kavandatud vältima avastamist radari ja teiste kaugandurisüsteemide poolt. Katsed sõidukit elektrooniliste anduritega märgata on ühe raskusastme võrra raskemad.

#### Allveelaev (Submersible)

Sõiduk on võimeline sukelduma ookeani pinna alla töösügavuseni, mis võrdub selle kereväärtusega x 10 meetrit. Kokkuvarisemise sügavus - absoluutne maksimum, mida allveelaev võib saavutada ilma purunemata - on 1,5 korda suurem kui selle töösügavus.

#### Suurepärane juhitavus (Superior Handling)

Sõiduki juhitavus on hinnatud kui lihtne.

#### Järelevalvesüsteem (Surveillance Suite)

Sõidukil on pardaarvuti, sidebaasijaam, vastuvõtja kuulamisseadmete signaalide jaoks ja aparatuur läheduses asuvate nutitelefonide signaalide pealtkuulamiseks 100 meetri raadiuses.#### Tough

Tsiviilsõiduk, millel on see omadus, võtab oma kere (Hull) sõjaliste sõidukite veerust ja sellel on automaatselt maksimaalne struktuuritugevus (Structure). Sõjaväesõiduk, millel on see omadus, võtab oma kere ja struktuuritugevuse ühe astme võrra madalamast reast.

#### Tractor Beam (Traktorikiir)

Ainult kosmoselaevad. Laev on varustatud traktorikiirega, mis suudab haarata ja enda poole tõmmata sõidukeid, mille kereklass on kuni kaks astet madalam kui laeval endal. Seega võib hiiglaslik (Huge) tähelaev ligi tõmmata ja kinni hoida kuni keskmise (Medium) suurusega keret.

#### VTOL

Vertikaalne õhkutõusmine/maandumine. See omadus on omane helikopteritele ja sarnastele sõidukitele, mis kasutavad tõstejõu tekitamiseks rootorite kombinatsiooni. Fikseeritud tiivaga õhusõidukite puhul tähistab see fikseeritud või suunatavate tõukurite kasutamist õhus asendi, tõusu ja laskumise kontrollimiseks.

#### Waterborne (Veeliiklus)

Sõiduk liigub liigendatud jalgade abil. Kõndivate sõidukite (Walker) kiirus on piiratud astmega "Gentle" (Rahulik), olenemata nende suurusest (Size). Siiski saab kõndivaid sõidukeid ehitada kõrgusteni, mis oleksid muul viisil liikumisvahendeid kasutavate sõidukite jaoks lihtsalt ebastabiilsed.

See sõiduk on võimeline liikuma vee all.

#### Weaponized (Relvastatud)

Sõiduk on kohandatud relvastuse mahutamiseks. Relvasüsteeme käsitletakse allpool jaotises [Relvad](0006_Vehicles.md?id=weapons).

---
## Relvad

Tavaliselt on relvastuse (kinnituspunktid, laskemoonahoidlad, juhtimissüsteemid) mahutamiseks mõeldud ainult sõjaväe kerestruktuurid. Omadust „Weaponized“ (Relvastatud) saab võtta tsiviilsõidukitele, millel võib olla vajadus relvastuse järele.

Maksimaalne relvasüsteemide arv, mida sõiduk toetab, on võrdne 1/10-ga selle struktuuripunktidest (seega sõiduk, millel on 40 struktuuripunkti, võiks toetada 4 relvasüsteemi, kui tegemist on sõjaväesõiduki või relvastatud tsiviilsõidukiga).

Relvasüsteemid sõltuvad sõiduki suurusest (Size). Erinevate suuruste maksimaalsed relvasüsteemide tüübid on toodud allolevates tabelites.

##### Relvade suurustabel

| Suurus (Size) | Maismaasõidukid | Kosmoselaevad |
| :-- | :-- | :-- |
| Väike (Small) | Kerge relv (nt automaatpüss) | Keskmine relv (nt kuulipilduja, raketiheitja) |
| Keskmine (Medium) | Keskmine relv (nt kuulipilduja, raketiheitja) | Tornirelv/raskerelv (nt rasked lingitud kuulipildujad, minikuulipildujad) |
| Suur (Large) | Tornirelv/raskerelv (nt rasked lingitud kuulipildujad, minikuulipildujad) | Relvapatarei (nt väliartilleria) |
| Hiiglaslik (Huge) | Relvapatarei (nt väliartilleria) | Täiustatud relvad (nt raketisüsteemid) |
| Enormous | Täiustatud relvad (nt raketisüsteemid) | Kerele paigaldatud relvad (ainult üks) |
| Kolossaalne (Colossal) | NA | Kerele paigaldatud relvad (kuni 3) |

##### Relvade statistika näited

| Relv | Kahjustus | Kaugus | Tulekiirus | Laskemoon/Laadimine |
| :-- | :-: | :-: | :-: | :-: |
| 50-tolline kahur | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatlingi relv | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rakett | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Keskmine rakett/torpeedo | 6d10 | Max ulatus 200km | 1 | 1/5 |
| Suur/tiibrakett | 6d10+10 | Max ulatus 1000km | 1 | 1/10 |
| Laser/plasmakahur | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Raske laser/plasmakahur | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Suurtükipatarei | 5d6+6 | Max ulatus 50km | 1 | 1/5 |
| Kerele paigaldatud patarei | 10d6+6 | Max ulatus 20000km | 1 | 1/10 |

_Kaugused on antud meetrites ja kilomeetrites._

_Tulekiirused on mõeldud üksiklasu, poolautomaatse ja täisautomaatse režiimi jaoks._

_Laskemoon on tulistamisvõime enne laadimise vajadust. Laadimine on laadimisaeg lahinguringides, eeldades, et meeskond on täiskoosseisus._

---
## Juhitavus ja manöövrid

Evasive (põiklevad) või äkilised manöövrid nõuavad edukat Drive/Pilot (sõiduki juhtimise) täringuviset, et tagada juhi või piloodi kontroll sõiduki üle. Enamik sõidukeid on konstrueeritud ja ehitatud taluma aeg-ajalt tekkivaid pingeid ja koormusi, kuid mängujuht (GM) võib otsustada, et konkreetne manööver nõuab kõrgema raskusastmega täringuviset, sõltuvalt sellest, kui ambitsioonikas see on. Ebaõnnestumine tähendab kontrolli kaotamist sõiduki üle: veeretage täringut "Loss of Control" (kontrolli kaotamise) tabeli alusel.

Pange tähele, et "Loss of Control" tabel kehtib ainult maismaasõidukite kohta. Sarnaseid efekte saab rakendada õhu- ja kosmosesõidukitele, kuid mängujuht peab kohandama põhjendusi konkreetse efekti jaoks. Näiteks võib õhusõiduk libisemise asemel minna pöörisesse.

Samuti võib sõiduki loomulik juhitavus mõjutada Drive-täringuviset. Juhitavus (Handling) on kas Easy (lihtne), Standard (tavaline), Hard (raske), Formidable (kohutav) või Herculean (kangelaslik) ja määrab Drive-täringuviske lähtepunkti manöövri sooritamisel. Seejärel rakendatakse manöövri raskusaste juhitavusele, et määrata lõplik raskusaste.

Näiteks on suure jõudlusega mootorrattal sisseehitatud gürostabilisaatorid, mis annavad sellele juhitavuseks "Easy". Juht soovib teha 180-kraadise libisemispöörde, et pääseda tagaajajast – manööver, mille mängujuht hindab ühe astme võrra raskemaks. Seetõttu peab sõitja oma Drive-täringuviske sooritama "Standard" tasemel, mitte "Easy". Kui ta oleks sama manöövrit proovinud stabiliseerimata mootorrattal, oleks Drive-täringuviske raskusaste olnud "Hard".

Superior Handling (suurepärane juhitavus) on omadus. Kui sõiduki kirjelduses seda omadust pole, on vaikimisi "Standard" juhitavus kõigile suurusega "Large" ja väiksematele sõidukitele. "Huge" ja "Enormous" sõidukitel on loomupäraselt juhitavus vastavalt "Formidable" ja "Herculean" ning mängujuhil on õigus otsustada, et teatud manöövrid on sõiduki suuruse tõttu lihtsalt võimatud.

##### Kontrolli kaotamise tabel (Loss of Control Table)

| 1d100 | Tulemus |
| :-: | :-- |
| 01-25 | Kõrvalepõige (Swerve). Kontrolli kaotus on ajutine. Sõiduk vähendab kiirust 1 astme võrra 5 sekundiks. |
| 26-40 | Libisemine (Skid). Juht peab võitlema sõiduki kontrolli all hoidmise eest. Sõiduk vähendab kiirust 2 astme võrra 10 sekundiks. |
| 41-50 | Tugev libisemine (Severe Skid). Sõiduk jääb seisma vales suunas 15 sekundiks. |
| 51-60 | Rullumine (Roll). Sõiduk libiseb ja rullub, kandes 3d10 kahju oma struktuurile. Sõitjad peavad tegema eduka Endurance (vastupidavuse) täringuviske või saavad 1d10 kahju 1d3 tabamuspiirkonda. |
| 61-70 | Tugev rullumine (Severe Roll). Nagu ülal, kuid sõiduk saab 3d10+10 kahju ja sõitjad saavad 1d10 kahju isegi siis, kui Endurance-täringuvise õnnestub, ja 2d10, kui see ebaõnnestub. |
| 71-80 | Mahakandmine (Write-Off). Nagu ülal, kuid sõiduki struktuuritugevus langeb 0-ni. Sõitjad saavad sama kahju nagu tugeva rullumise puhul. |
| 81-90 | Plahvatus (Explosion). Nagu ülal, kuid sõiduki kütusesüsteem süttib ja plahvatab 1d20+10 sekundi jooksul. Kui nad ei suuda vabaneda, saavad sõitjad lisaks 1d6 põletuskahju 1d6 piirkonda. |
| 91-98 | Kohene plahvatus (Immediate Explosion). Nagu ülal, kuid plahvatus on kohene. |
| 99-00 | Katastroofiline kokkupõrge (Catastrophic Crash). Sõitjad peavad edukalt sooritama Endurance-täringuviske või nad hukkuvad silmapilkselt. Mahakandmisele vastav kahju kantakse igal juhul. |

---
## Sõidukite näited

---

### Maismaasõidukid

#### Interceptor (Pealtkuulaja)

Tugevdatud luksusauto, sportauto või muu sarnane, mis on ehitatud kiireks liikumiseks ja lahingus vastu pidama. See on selline sõiduk, mida inimesed kujutavad ette, kui keegi ütleb "spioonide auto".

| Interceptor | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine sõjaväe |
| **Kere (Hull)** | 6 |
| **Struktuur (Structure)** | 40 |
| **Süsteemid** | 2 |
| **Kiirus** | Fast (Kiire) |
| **Juhitavus** | Easy (Lihtne) |
| **Omadused** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Relvad** | Õlilaigu hajutaja, suitsuhajutaja, topelt-lingitud keskmised kuulipildujad (2d6+3) |

<br>

---

#### Pursuit Motorcycle (Tagaajamis-mootorratas)

Kerge ja kiire mootorratas tagaajamisteks, millel on üllatus – kas paar lingitud kuulipildujat või kaks raketti.

| Pursuit Motorcycle | |
| :- | :- |
| **Suurus / Tüüp** | Väike tsiviil |
| **Kere (Hull)** | 2 |
| **Struktuur (Structure)** | 12 |
| **Süsteemid** | 1 |
| **Kiirus** | Fast (Kiire) |
| **Juhitavus** | Easy (Lihtne) |
| **Omadused** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Relvad** | Kaks raketti (4d6) või topelt-lingitud kerged kuulipildujad (2d6) |

<br>

---

#### Sedan Car (Sõiduauto)

Tavaline 4-ukseline sedaan, kus on piisavalt ruumi juhi ja kolme reisija mugavaks mahutamiseks. Ohverdab pagasiruumi, et mahutada seirekomplekti (Surveillance Suite).

| Sedan Car | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine tsiviil |
| **Kere (Hull)** | 4 |
| **Struktuur (Structure)** | 25 |
| **Süsteemid** | 2 |
| **Kiirus** | Rapid (Väga kiire) |
| **Juhitavus** | Standard |
| **Omadused** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Relvad** | Puuduvad |

<br>

---

#### Submersible Car (Allveelaeva-auto)

Kahekohaline auto, mis suudab vee peal või vee all liikumiseks lülituda veeliikluse või allveelaeva režiimile. Varustatud esiküljele paigaldatud torpeedoga ja katusele paigaldatud õhutõrjeraketiga.

| Submersible Car | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine tsiviil |
| **Kere (Hull)** | 6 |
| **Struktuur (Structure)** | 25 |
| **Süsteemid** | 2 |
| **Kiirus** | Fast (Kiire) |
| **Juhitavus** | Standard |
| **Omadused** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Relvad** | Rakett (5d6), torpeedo (4d10) |

<br>

---

#### Surveillance Van (Seirekaubik)

Tavaline, markeeringuta kaubik, kus asub agentide meeskond ja audio-visuaalne salvestusseade.

| Surveillance Van | |
| :- | :- |
| **Suurus / Tüüp** | Suur tsiviil |
| **Kere (Hull)** | 9 |
| **Struktuur (Structure)** | 60 |
| **Süsteemid** | 3 |
| **Kiirus** | Gentle (Rahulik) |
| **Juhitavus** | Standard |
| **Omadused** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Relvad** | Puuduvad |

<br>

---

#### Tactical Support Vehicle (Taktikaline tugisõiduk)

Pikap või maastur, mille kabiinis on ruumi kaheliikmelisele meeskonnale ja veokasti osas seisab laskur, kes opereerib pöördalusele paigaldatud keskmist kuulipildujat.

| Tactical Support Vehicle | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine tsiviil |
| **Kere (Hull)** | 6 |
| **Struktuur (Structure)** | 30 |
| **Süsteemid** | 2 |
| **Kiirus** | Rapid (Väga kiire) |
| **Juhitavus** | Standard |
| **Omadused** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Relvad** | Paigaldatud keskmine kuulipilduja (2d6) |

<br>

---

### Veesõidukid

#### Speedboat (Kiirpaat)

Tüüpiline kiirpaat, relvastatud taha paigaldatud miinide heitjaga.

| Speedboat | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine tsiviil |
| **Kere (Hull)** | 3 |
| **Struktuur (Structure)** | 24 |
| **Süsteemid** | 2 |
| **Kiirus** | Fast (Kiire) |
| **Juhitavus** | Standard |
| **Omadused** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Relvad** | Miiniheitja (5d6) |

<br>

---

#### Yacht (Jaht)

Luksusjaht, mida võiks omada oligarh. Tõenäoliselt varustatud seirekomplektiga, et kaitsta end vaenlaste eest, kes kavatsevad pahandusi teha.

| Yacht | |
| :- | :- |
| **Suurus / Tüüp** | Hiiglaslik tsiviil |
| **Kere (Hull)** | 10 |
| **Struktuur (Structure)** | 75 |
| **Süsteemid** | 4 |
| **Kiirus** | Slow (Aeglane) |
| **Juhitavus** | Formidable (Kohutav) |
| **Omadused** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Relvad** | Puuduvad |

<br>

---

### Õhusõidukid/Kosmoselaevad

#### Dirigible (Dirigeeritav õhulaev)

Sarnaselt Hindenburgiga on seda tüüpi mandritevaheline dirigibel (ja teised selle klassi esindajad) 245 meetrit pikk ja vajab 40–61-liikmelist meeskonda. See suudab tavaliselt vedada 50–72 reisijat luksuslikes tingimustes.

| Dirigible | |
| :- | :- |
| **Suurus / Tüüp** | Enormous tsiviil |
| **Kere (Hull)** | 10 |
| **Struktuur (Structure)** | 85 |
| **Süsteemid** | 5 |
| **Kiirus** | Ponderous (Kohmakas) |
| **Juhitavus** | Herculean (Kangelaslik) |
| **Omadused** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kilbid** | Puuduvad |
| **Relvad** | Puuduvad |

<br>

---

#### Assault Helicopter (Ründehelikopter)

Traditsiooniline ründehelikopter kasutab oma täiustatud seiretehnoloogiat telefoni- ja juhtmevaba interneti signaalide pealtkuulamiseks ning üksikisikute ja sõidukite jälgimiseks isegi pimedas, läbi FLIR-süsteemi. Katsed põigelda jälitaja eest läbi Stealth-omaduse on "Formidable" raskusastmega.

| Assault Helicopter | |
| :- | :- |
| **Suurus / Tüüp** | Suur sõjaväe |
| **Kere (Hull)** | 11 |
| **Struktuur (Structure)** | 50 |
| **Süsteemid** | 3 |
| **Kiirus** | Moderate (Mõõdukas) |
| **Juhitavus** | Easy (Lihtne) |
| **Omadused** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kilbid** | Puuduvad |
| **Relvad** | 1 Gatlingi relv (3d6), 4 raketti (5d6) |

<br>

---

#### Multi-Role Fighter (Mitmeotstarbeline hävitaja)

See kaheistmeline maapealse baasiga hävitaja (tüübilt sarnane De Havilland Mosquito-ga) on tuntud oma jõudluse ja mitmekülgsuse poolest. Selle pommiruum on võimeline kandma kas kahte 250-naelast pommi (kohelda nagu keskmisi rakette, mille kaugus on 0) või ühte torpeedot.

| Multi-Role Fighter | |
| :- | :- |
| **Suurus / Tüüp** | Suur sõjaväe |
| **Kere (Hull)** | 10 |
| **Struktuur (Structure)** | 45 |
| **Süsteemid** | 3 |
| **Kiirus** | Moderate (Mõõdukas) |
| **Juhitavus** | Standard |
| **Omadused** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Kilbid** | Puuduvad |
| **Relvad** | 4 ninale paigaldatud Gatlingi relva (4d6+3), 1 pommiruum (6d10 – vaata kirjeldust) |

<br>

---

#### Interstellar Freighter (Tähtedevaheline kaubalaev)

See kerge transpordilaev nõuab minimaalselt vaid kaheliikmelist meeskonda, ruumi on veel kuni neljale reisijale. Siin on toodud standardne mudel, kuid paljud omanikud rakendavad oma "erimodifikatsioone", nagu peidetud kaubaruum, täiustatud jõudlus, suurepärane juhitavus, EMP-kindlus, Stealth ja nii edasi.

| Interstellar Freighter | |
| :- | :- |
| **Suurus / Tüüp** | Keskmine tsiviil kosmoselaev |
| **Kere (Hull)** | 10 |
| **Struktuur (Structure)** | 80 |
| **Süsteemid** | 2 |
| **Kiirus** | Rapid (Väga kiire, Parsec Factor 3) |
| **Juhitavus** | Standard |
| **Omadused** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kilbid** | 8 |
| **Relvad** | 2x nelikpaigaldatud laser-kahuri torni (5d6) |

<br>

---

#### General Contact Unit (Üldine kontaktüksus - Ülikõrge tehnoloogiaga kosmoselaev)

See äärmiselt kõrgtehnoloogiline tähelaev on kõrgelt arenenud tehisliku "Mõistuse" füüsiline esitus, mis võtab kuju kahe kilomeetri pikkusest väljaga ühendatud moodulite jadast. Moodulid on individuaalselt sihtotstarbelised ja sisaldavad elupaiku, ehitusrajatisi, kaubapindasid, toiduainete töötlemist, vabaajakomplekse, angaare ja isegi mõningaid salastatud üksusi, millest laeva intelligents harva, kui üldse, räägib. See ei vaja inimmeeskonda, kuid suudab kergesti toetada kuni 100 000 reisijat. Paljud reisijad sünnivad ja surevad kontaktüksuse pardal: paljud on läbisõitjad, tulles ja minnes nii, nagu soovivad.

| General Contact Unit | |
| :- | :- |
| **Suurus / Tüüp** | Kolossaalne tsiviil kosmoselaev |
| **Kere (Hull)** | 20 |
| **Struktuur (Structure)** | 10 000 |
| **Süsteemid** | 6 |
| **Kiirus** | Moderate (Mõõdukas, Parsec Factor 4. Sellel tehnoloogilisel tasemel võrdub tegur 1 tund) |
| **Juhitavus** | Formidable (Kohutav) |
| **Omadused** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Kilbid** | 30 |
| **Relvad** | Pole selliseid, millest ta sooviks rääkida |

<br>