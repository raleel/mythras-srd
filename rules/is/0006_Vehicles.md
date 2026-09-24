# Ökutæki

Ökutæki í _Mythras Imperative_ eru meðhöndluð á hálf-abstrakt hátt. Í grunninn eru þau bakgrunnstæki sem notuð eru til að koma persónum frá A til B, með lítilli þörf á nákvæmri lýsingu eða tölfræði. Stundum munu spilastjórar þó þurfa upplýsingar um ökutæki þegar nauðsynlegt er að sýna þau í eltingaleikjum eða bardaga.

Reglurnar í þessum hluta gera kleift að tákna flestar gerðir ökutækja en á abstrakt hátt sem er ætlað að leyfa sveigjanleika og auka frásagnargildi. Geimskip og geimför eru aðeins öðruvísi, þó þau byggist á svipuðum meginreglum.

---
## Tölfræði

Öll ökutæki eru lýst með tilliti til uppbyggingar (Structure), skrokks (Hull), hraða (Speed), kerfa (Systems), eiginleika (Traits) og skjaldar (Shields) (ef þeir eru til staðar í spilheiminum).

- **[Stærð](0006_Vehicles.md?id=vehicle-size-table):** Öll ökutæki hafa eina af sex stærðareinkunnum sem ákvarðar gildi eða svið hinna eiginleikanna. Vegna stærri eðlislægrar stærðar sinnar og fjandsamlegs umhverfis geimsins hafa geimskip sín eigin gildi.
- **[Skrokkur](0006_Vehicles.md?id=terrestrial-hulls):** Táknar brynningarstig (Armor Points).
- **[Uppbygging](0006_Vehicles.md?id=terrestrial-hulls):** Táknar höggpunkta ökutækis (Hit Points).
- **[Skildir](0006_Vehicles.md?id=shields):** Í spilheimum með háþróaða orkustjórnunartækni geta verið til staðar skildir sem vernda ökutækið, en sem geta eyðst við viðvarandi skothríð.
- **[Kerfi](0006_Vehicles.md?id=systems):** Táknar lífsnauðsynlega hluta ökutækisins, þar á meðal virkjun, áhafnarsvæði og þess háttar.
- **[Hraði](0006_Vehicles.md?id=speed):** Hvert ökutæki hefur grunn hraðaeinkunn.
- **[Eiginleikar](0006_Vehicles.md?id=traits):** Ökutæki getur einnig haft einn eða fleiri eiginleika. Eiginleikar, eins og hæfileikarnir sem úthlutað er til vera í _Mythras Imperative_ reglunum, eða bardagastílseiginleikar, bjóða upp á viðbótarlýsingu og forskot í leiknum sem endurspeglar eðli ökutækisins.
- **[Vopn](0006_Vehicles.md?id=weapons):** Líkt og með eiginleika getur ökutæki verið búið vopnum eftir því sem spilheimurinn leyfir. Nokkur tillögð dæmi og gildi eru útskýrð hér að neðan.


---
### Skrokkstærð, gerð og uppbygging

Stærð og tilgangur ökutækis hefur áhrif á þykkt skrokks þess og seiglu innri uppbyggingar. Mótorhjól hefur til dæmis lágmarks skrokk, smíðað eins og það er fyrir hraða og lipurð. Land-járnklæðning (stórfellt, beltadrifið eða hjóladrifið brynvörð skrímsli, knúið af gufu- eða díselvélum), sem er miklu stærra ökutæki hannað fyrir vígvöllinn, hefur mun stærri skrokk. Hlutfallslegar stærðir skrokka (og hversu mörg högg frá vopnum þau geta venjulega staðist) eru dregnar saman í töflunum fyrir stærð og skrokk ökutækja hér að neðan.

Hvenær sem ökutæki verður fyrir skaða, minnkar innkomandi tjón af skrokkvirði þess. Allur afgangsskaði er dreginn frá uppbyggingarpunktum ökutækisins og hefur prósentulíkur, jafnar gegnumgangandi skaða, á að hafa áhrif á kerfi. Ef ökutæki er einhvern tíma komið niður í núll í uppbyggingu er það annað hvort algjörlega eyðilagt eða svo illa farið að það verður að rífa það.

##### Skrokkar á landi

| Stærð | Uppbygging | Skrokkvirði (almennt) | Skrokkvirði (hernaðarlegt) | Dæmi |
| :-- | :-: | :-: | :-: | :-- |
| Lítið | 1-20 | 1-3 | 4-6 | Mótorhjól, mótorhjól með hliðarvagni, lítill bíll, kanó, kajak, árabátur |
| Miðlungs | 21-40 | 1-6 | 7-9 | Fólksbíll, sendibíll, pallbíll, lúxusbíll, lúxus sportbíll, vöðvabíll, limósína, björgunarbátur, hraðbátur, hengifluga, sjálfsflugvél |
| Stórt | 41-60 | 4-9 | 10-12 | Vörubíll, langlimósína, jepplingur, strætisvagn, rútujeppi, einkaflugvél, sviffluga, skemmtibátur, skriðdreki, þyrla, kafbátur |
| Risastórt | 61-80 | 7-12 | 13-15 | Flutningabíll (semi), farþegaþota, þota, strandgæsluskip, snekkja |
| Ógnarstórt | 81-100 | 10-15 | 16-18 | Lest, skemmtiferðaskip, herskip |

##### Geimskipsskrokkar 

| Stærð | Uppbygging | Skrokkvirði (almennt) | Skrokkvirði (hernaðarlegt) | Dæmi |
| :-- | :-: | :-: | :-: | :-- |
| Lítið | 10-50 | 4-9 | 10-12 | Eins sætis orrustuþota |
| Miðlungs | 51-150 | 7-12 | 13-15 | Létt flutningaskip, skutla |
| Stórt | 151-450 | 10-15 | 16-18 | Þungt flutningaskip, beitiskip |
| Risastórt | 451-1350 | 13-18 | 19-21 | Fylgdarskip, létt orrustubeitiskip |
| Ógnarstórt | 1351-4050 | 16-21 | 21-24 | Kynslóðaskip, þungt orrustubeitiskip |
| Gríðarstórt | 4050-12110 | 19-24 | 24-30 | Geimstöð, plánetubanastöð |


---
### Skildir

Varnarskildir veita aukalag af vernd fyrir þau ökutæki sem geta borið þá. Skildir virka aðeins öðruvísi en skrokkurinn, vegna þess að þeir eyðast. Ef innkomandi skaði er jafn eða minni en virði skjaldanna, þá er hann allur blokkaður. Ef skaðinn fer yfir skjaldaverðmætið, þá minnkar umframmagnið styrk skjaldarins um þá upphæð.

_Til dæmis hefur truppaflutningabíll orkuskjaldstyrk upp á 12 punkta. Ef bíllinn varð fyrir leysigeisla sem olli 11 skaða, þá fer hann einfaldlega ekki í gegn og hefur engin frekari áhrif. Á hinn bóginn, ef bíllinn varð fyrir sprengingu sem olli 15 skaða, myndu umfram þrír punktarnir lækka skjaldstyrkinn niður í 9._

Þegar styrkur varnarskjaldar hefur fallið í núll, þá hrynur hann. Allur afgangsskaði fer yfir á skrokkinn.

---
### Kerfi

Í hvert skipti sem ökutæki verður fyrir skaða sem fer í gegnum skrokkinn, eru líkur, jafnar gegnumgangandi skaðanum, á því að lífsnauðsynlegt kerfi hafi orðið fyrir áhrifum. 

_Til dæmis er 10 skaði beittur á hraðbát - ökutæki með 3 í skrokk og 24 í uppbyggingu. Skrokkurinn telur sem brynning sem minnkar skaðann niður í 7. Þetta er dregið frá 24 uppbyggingarpunktunum og það eru 7% líkur á að skemma eitt af kerfum ökutækisins._

Skaðinn sem kerfi getur tekið við byggist eingöngu á stærð ökutækisins. Þetta er líkan með fjölda högga sem kerfi getur tekið, frekar en raunverulegu magni skaða. Eitt kerfishögg á lítið ökutæki mun samstundis eyðileggja það kerfi. Það þarf tvö högg til að eyðileggja kerfi í miðlungsstóru ökutæki, þrjú fyrir stórt ökutæki, og svo framvegis. Sjá [töflu yfir kerfisskaða](0006_Vehicles.md?id=system-damage-table) hér að neðan. 

Kerfi sem eru skemmd, en ekki enn eyðilögð, þjást af skerðingu á virkni í hlutfalli við fjölda högga sem þau hafa tekið - annað hvort prósentusamdráttur eða stigsrefsing (Grade penalty) á kerfisverkefnum. Sértæku áhrifin byggjast á því hvað undirkerfið stjórnar, eins og lýst er í [töflu yfir kerfishlutaskemmdir](0006_Vehicles.md?id=system-component-damage-table) hér að neðan. Það fer eftir því hvaða kerfi er slegið, áhrifin geta verið hörmuleg.

_Til dæmis, land-járnklæðning - ógnarstórt ökutæki með 5 kerfishögg - sem verður fyrir tveimur höggum í drifbúnaðinum myndi tapa 40% af afli sínu og myndi lækka hægan hraða sinn um tvö stig niður í Ponderous (þunglamalegan). Á sama hátt, stórt flutningaskip - með 3 kerfishögg - sem tekur tvö högg á vél/eldsneytiskerfið myndi fá tveggja stiga refsingu á hraða sem og á notkun rafeindakerfa. Þriðja höggið myndi eyðileggja vél/eldsneytiskerfið og skipið með því._


<details>

<summary>* Samfélags Errata</summary>

---

#### Skaði


_Upprunalegi textinn hér var upphaflega lengra í burtu. Settur beint eftir Kerfis-kaflann er hann óþarflega að endurtaka fyrri málsgreinina._

- _"Skaði sem fer yfir skrokkinn fer í gegnum ökutækið, skemmir uppbygginguna og hefur hugsanlega áhrif á eitt eða fleiri kerfi. Það fer eftir stærð ökutækisins hvort skaðinn getur verið minniháttar eða hörmulegur._
- _Til dæmis getur stórt ökutæki tekið allt að tvö högg á kerfi eins og drifbúnað þess. Þriðja höggið eyðileggur drifbúnaðinn í reynd. Í hvert skipti sem kerfið verður fyrir höggi, missir það annað hvort hlutfall af virkni sinni eins og lýst er í dálkinum Loss per Hit (tap á hvert högg) í Kerfisskaðatöflunni hér að neðan eða kjarnavirkni (eins og drif, flugstjórn, samskipti, og svo framvegis) verður eitt erfiðleikastig erfiðari fyrir hvert högg sem það tekur."_

_Ofangreindar málsgreinar eru fjarlægðar og styttri breyting tekur við sem nefnir önnur dæmi um áhrif kerfa._

---

</details>

##### Kerfisskaðatafla 

| Stærð | Kerfishögg | Tap á hvert högg |
| :-- | :-: | :-- |
| Lítið | 1 | 100% - Eyðilagt |
| Miðlungs | 2 | 1 stig eða 50% |
| Stórt | 3 | 1 stig eða 33% |
| Risastórt | 4 | 1 stig eða 25% |
| Ógnarstórt | 5 | 1 stig eða 20% |
| Gríðarstórt | 6 | 1 stig eða 16% |


<details>

<summary>* Samfélags Errata</summary>

---

##### Kerfisskaðatafla (Upprunaleg) 

| Stærð | Kerfishögg | Tap á hvert högg |
| :-- | :-: | :-- |
| Lítið | 1 | 1 stig eða 50% |
| Miðlungs | 2 | 1 stig eða 33% |
| Stórt | 3 | 1 stig eða 25% |
| Risastórt | 4 | 1 stig eða 20% |
| Ógnarstórt | 5 | 1 stig eða 16% |
| Gríðarstórt | 6 | 1 stig eða 10% |

##### Tafla yfir stærð ökutækja (úr [Skrokkstærð, gerð og uppbygging](0006_Vehicles.md?id=hull-size-type-and-structure))

| Stærð | Kerfishögg |
| :-- | :-: |
| Lítið | 1 |
| Miðlungs | 2 |
| Stórt | 3 |
| Risastórt | 4 |
| Ógnarstórt | 5 |
| Gríðarstórt | 6 |

_Upprunalegu reglurnar og dæmin eru ósamkvæm:_
- _"Kerfi sem eru skemmd, en ekki enn eyðilögð, þjást af skerðingu á virkni. Þetta er jafnt hlutfalli núverandi högga af heildargetu þess. Þannig myndi ógnarstórt ökutæki sem verður fyrir tveimur höggum í drifbúnaðinum missa 40% af afli sínu (2 högg af hámarki 5)"._ 
   - _Þetta bendir til þess að ógnarstóra ökutækið sem sýnt er með 5 kerfishögg ætti að missa 20% með hverju höggi - en taflan segir 16%._
- _"Til dæmis getur stórt ökutæki tekið allt að þrjú högg á kerfi eins og drifbúnað þess. Fjórða höggið eyðileggur drifbúnaðinn í reynd."_ 
  - _"Þetta bendir til - eins og taflan gerir - 25% skaða á hvert kerfishögg en stóru ökutækin geta aðeins tekið 3 kerfishögg samkvæmt sömu töflu._
- _Þótt það sé ekki ósamkvæmt, var taflan yfir stærð ökutækja óþörf; hún birtist aftur í fyllra formi (með því að bæta við Tap á hvert högg dálknum) rétt nokkrum línum síðar._

_Þetta gerir það erfitt að hafa samræmda reglu. Til að bregðast við þessum málum er gildunum og dæmunum breytt til að passa saman og taflan yfir stærð ökutækja var fjarlægð._

---

</details>


##### Tafla yfir kerfishlutaskemmdir 

| 1d10 | Kerfi | Skemmd afleiðing | Eyðilögð afleiðing |
| :-: | :-- | :-- | :-- |
| 1 | Farmur | Magn eigur eða búnaðar sem geymdur er í lestinni, í hlutfalli við skaðann, er eyðilagt. | Allur farmur er eyðilagður. |
| 2 | Samskipti | Samskiptakast verða fyrir einu aukalega erfiðleikastigi í hvert skipti sem þau skemmast. | Ökutæki getur ekki lengur átt samskipti eða blekkt óvinaskynjara. |
| 3 | Stjórntæki | Bátastjórn, akstur eða flugkasti verða fyrir einu aukalega erfiðleikastigi í hvert skipti sem þau skemmast; tafarlaus stjórnunarkast nauðsynlegt. | Ekki er hægt að stýra ökutækinu eða breyta um stefnu. |
| 4 | Drifbúnaður | Hraði minnkaður um magn í hlutfalli við skaða. | Ökutæki stoppar dauð; flugvélar hrapa. |
| 5 | Áhöfn | Fjöldi farþega í hlutfalli við skaðann verður mannfall. Þeir sem verða fyrir áhrifum hljóta alvarlegt sár og verða að standast þolpróf eða deyja samstundis. | Farþegar ökutækisins deyja. |
| 6 | Vél / Eldsneyti | Hraði minnkaður um magn í hlutfalli við skaða. Rafeindakerfi eitt erfiðleikastig erfiðari í notkun. | Ökutæki er eyðilagt í hörmulegri sprengingu. |
| 7 | Skynjarar | Skynjara-, leiðsögu- og vopnaárásarkast verða fyrir einu aukalega erfiðleikastigi í hvert skipti sem þau skemmast. | Ökutæki verður blint. |
| 8 | Vopn | Fjöldi vopnakerfa í hlutfalli við skaðann verður óvirkur. | Ökutæki getur ekki lengur skotið vopnum. |
| 9-0 | Ekkert | Engin kerfi slegin; aðeins skaði á uppbyggingu. | N/A |

<details>

<summary>* Samfélags Errata</summary>

---

##### Tafla yfir kerfishlutaskemmdir (Vél/Eldsneyti)

_Upprunalega niðurstaðan var eftirfarandi: "Hámarkshraði helmingast..." Þetta stangast á við almennu regluna um refsingar vegna skaða í hlutfalli við kerfisskaða: 25% skaði = 25% refsing. Þar að auki nefna fullu reglurnar í Mythras Companion ekki þessa helmingun á hraða._

_Sem afleiðing af því er textanum skipt út fyrir sömu færslu og fyrir drifbúnaðarkerfi: "Hraði minnkaður um magn í hlutfalli við skaða."_

---

</details>


---
### Hraði

Þar sem eðlisfræði hraða, hröðunar, viðnáms og tregðu (til að nefna nokkur atriði) eru flókin mál, þarf einhverja einföldun og því fá ökutæki abstrakt hraðaeinkunn. Hraðaeinkunn ætti aðeins að nota til að dæma gróflega hvort eitt ökutæki geti tekið fram úr eða náð öðru.

Hraðaeinkunnin táknar nafnvirkan notkunarhraða ökutækis. Í neyðartilvikum er hægt að auka þessa frammistöðu um eitt skref, með hættu á sliti eða skemmdum á vélunum. Þótt sama tafla sé notuð fyrir allar gerðir ökutækja, ætti að nota heilbrigða skynsemi svo að aðeins sé borið saman ökutæki í sama flokki. Til dæmis, ef geimskip og sportbíll hafa bæði sama hröðunarhraða, Rapid (hratt), þá ætti það að vera augljóst að geimskipið er tiltölulega hraðskreiðara.

Hægt er að auka hraða ökutækis umfram staðalgildi þess með vel heppnuðu aksturskasti (Drive roll). Venjulega er þessi auka hraði aðeins sjálfbær í stuttan tíma - ekki meira en 1d6 mínútur áður en ökutækið verður að lækka niður í staðalhraða eða eiga á hættu skemmdir á virkjun sinni. Gagnrýnt (critical) aksturskast gerir kleift að auka tímabil hærri hraða í 1d12 mínútur.

Ökumaður getur reynt að ýta hraða ökutækis um 2 skref, en það krefst Herculean aksturskasts og hámarkið sem ökutækið getur haldið þessum hraða er 1d3 mínútur: Gagnrýnt vel heppnað kast mun ekki lengja tímalengd aukins hraða.

##### Tafla yfir hraðaeinkunnir 

| Hraðaeinkunn | Hámarkshraði fyrir |
| :-- | :-: |
| Ponderous (þunglamalegt) | Ógnarstórt |
| Sluggish (dauflegt) | |
| Slow (hægt) | Risastórt |
| Mediocre (miðlungs) | |
| Gentle (rólegt) | Stórt |
| Moderate (hóflegt) | |
| Rapid (hratt) | Miðlungs |
| Fast (skjótt) | |
| Fleet (snöggt) | Lítið |


---
### Eiginleikar

Hámarksfjöldi eiginleika sem ökutæki getur haft fer eftir stærð skrokks og gerð.

Sérhvert ökutæki hefur eðlislægan eiginleika: ferðamátann sem það var aðallega hannað fyrir. Þess vegna hafa flugvélar eðlislægt eiginleikann Airborne (loftborið), bátar Seaborne (sjóborið), og svo framvegis. Þessi eðlislægi eiginleiki telur ekki með í tiltækum fjölda eiginleika. Hins vegar, ef ökutæki ætti að innihalda annan ferðamáta - fljúgandi kafbát til dæmis, þá þyrfti að taka Airborne eiginleikann sem einn af tiltækum eiginleikum þess.

Sumir eiginleikar gætu ekki verið í boði, eftir tæknistigi spilheimsins; Spilastjórar verða að taka eigin ákvarðanir um hvaða eiginleika hægt er að beita.

##### Tafla yfir úthlutun eiginleika ökutækja 

| Stærð | Hámark eiginleika |
| :-- | :-: |
| Lítið | 1 |
| Miðlungs | 2 |
| Stórt | 3 |
| Risastórt | 4 |
| Ógnarstórt | 5 |
| Gríðarstórt | 6 |

#### Airborne (Loftborið)

Ökutækið er fært um flug í lofthjúpnum.

#### All Terrain (Allt landslag)

Þennan eiginleika verður að nota með ökutækjum á landi. Ökutækið getur farið um óbyggilegt, erfitt og bratt landslag, með því að nota annað hvort beltadrif, háþróaða fjöðrun og drifkerfi, eða öfluga drifmismunadrifi.

#### Burrowing (Grafandi)

Ökutækið er hannað til að grafa og jarðganga í gegnum jörðina. Það getur náð hámarksdýpt sem nemur skrokkvirði þess x 5 metrum.

#### Camouflaged (Felulitað)

Ökutækið býr yfir annað hvort felulitarmálningu eða hermiskynjurum sem gera því kleift að falla inn í umhverfi sitt. Tilraunir til að koma auga á ökutækið sjónrænt eru einu stigi erfiðari.

#### Cargo (Farmur)

Ökutækið er hannað sérstaklega til að flytja farm frekar en farþega. Farþegarými eru haldin í lágmarki með restina af nýtanlegu rými ökutækisins varið til farmgeymslu með viðeigandi hlutum, verkfærum og jafnvel umhverfisskilyrðum (svo sem frystihólfum fyrir flutning á viðkvæmum vörum). Þegar það er hlaðið farmi er hraði ökutækisins tveimur skrefum lægri en stærð skrokks þess myndi venjulega leyfa.

#### Carrier (Flutningsskip)

Ökutækið er hannað sérstaklega til að flytja smærri, léttbúin eða hugsanlega fjarstýrð ökutæki af annað hvort almennu eða hernaðarlegu tagi. Öll ökutæki sem búa yfir þessum eiginleika verða að vera að minnsta kosti ógnarstór. Fjöldi lítilla farkosta sem fluttir eru getur verið breytilegur eftir verkefnategund og tilgangi en getur verið allt frá 10 upp í eins marga og uppbyggingareinkunn ökutækisins segir til um.

#### Construction (Framkvæmdir)

Ökutækið er búið fyrir mikla framkvæmdavinnu. Öll ökutæki með þennan eiginleika hafa einnig All Terrain eiginleikann, en hraði er tveimur skrefum lægri en stærð skrokks þeirra myndi venjulega leyfa. Ökutækið er búið verkfærum sem henta verkefnum eins og kranaarmum, gröfuskóflum, vörubílum og svo framvegis.

#### EMP Resistant (EMP-þolið)

Ökutækið er varið gegn rafsegulpúlsholum (EMP).

#### Enhanced Performance (Aukin frammistaða)

Hraðaeinkunn ökutækisins er einu skrefi hærri en hámarkið fyrir stærð þess.

#### Ejector Seat (Sætisútskot)

Ef neyðarástand kemur upp skýtur útskotssæti farþegum nokkur hundruð metra upp í loftið og kastar síðan út fallhlíf til að leyfa örugga lendingu. Fallhlíf er valfrjáls. Ekki ráðlagt fyrir þyrlur (Kamov Ka-52 Alligator er merkileg undantekning).

#### FTL (Hraðara en ljós)

Aðeins fyrir geimskip. Farkosturinn er búinn vél sem fer hraðar en ljósið (hvort sem þetta er ofurdrif, vindudrif, ormagangagjafi eða álíka). FTL-drifið hefur sérstaka hraðaeinkunn sem í grunninn mælir þann hraða sem geimskip getur farið yfir eina parsec (3,26 ljósár, eða 31 billjón kílómetra eða 19 billjónir mílna), sem hér segir:

##### Tafla yfir FTL hraðaeinkunnir 

| Hraðaeinkunn | Stuðull til að fara yfir 1 parsec |
| :-- | :-: |
| Ponderous | 10 |
| Sluggish | 8 |
| Slow | 7 |
| Mediocre | 6 |
| Gentle | 5 |
| Moderate | 4 |
| Rapid | 3 |
| Fast | 2 |
| Fleet | 1 |

Tímaþátturinn er spilastjóra að ákveða, eftir því hversu háþróuð FTL-þróun spilheimsins er. Til dæmis gæti grunntíminn verið 1 dagur, sem þýðir að skip með Ponderous FTL-drif tekur 10 daga að ljúka ferðinni, á meðan farkostur með Fleet FTL-drif lýkur ferðinni á 1 degi. Annars staðar, þar sem FTL-tækni er verulega minna skilvirk, gæti tímaþátturinn verið mældur í mánuðum, frekar en dögum.

Gert er ráð fyrir að skipið hafi eldsneytisforða til að annað hvort fara til baka eða leið til að taka eldsneyti á áfangastaðnum.

Gert er ráð fyrir að hægt sé að útbúa hvaða stærð geimskips sem er með FTL-drifi, þó þetta fari aftur á móti eftir spilheiminum.

FTL-drif er ekki hægt að virkja innan 1,5 stjarnfræðieininga (AU) frá stjörnu (um 225 milljónir kílómetra, eða 270 milljónir mílna). Þetta þýðir að skip verða að nota undirljósadrif til að færa sig út í um það bil fjarlægð Mars áður en FTL-kerfið er virkjað.

#### Ground Vehicle (Landökutæki)

Ökutækið er fært um ferðalög á landi.

#### Hover (Svif)

Ökutækið svífur yfir jörðinni með því að nota annað hvort loftpúða eða and-þyngdaraflsrepúlsor.

#### Luxurious (Lúxus)

Ökutækið er hannað sérstaklega til að flytja farþega á ákveðnu lúxusstigi. Umfram farmrými er varið til lúxus farþegarýma, sundlauga, heitra potta, aukaáhafnar til að sinna duttlungum farþeganna, og svo framvegis.

#### Rails (Teinar)

Ökutækið reiðir sig á teinakerfi. Ökutæki með þennan eiginleika geta náttúrulega náð hraðaeinkunn sem er þremur skrefum hærri en stærð skrokks þeirra myndi venjulega leyfa, en eru auðvitað takmörkuð við hreyfingu á teinakerfinu eingöngu.

#### Resilient (Seigt)

Öll kerfi geta staðist eitt viðbótarhögg umfram það sem venjulega er ákveðið af stærð. Hægt er að stafla þessum eiginleika - svo Resilient 2 gefur til kynna að kerfi geti staðist 2 höggum meira en venjulega fyrir kostnað af tveimur eiginleikapunktum.

#### Seaborne (Sjóborið)

Ökutækið er flotgengt á vatni.

#### Spacecraft (Geimfar)

Ökutækið er innsiglað gegn lofttæmi og varið gegn geimgeislun og getur, eftir hönnun, verið fært um að fara úr og inn í lofthjúp, og viðhalda flugi innan lofthjúps.

#### Stealth (Laumuspil)

Aðeins fyrir flugvélar. Ökutækið er hannað til að forðast uppgötvun með ratsjá og öðrum langdrægum skynjarakerfum. Tilraunir til að koma auga á ökutækið með rafeindaskynjurum eru einu stigi erfiðari.

#### Submersible (Kafbátur)

Ökutækið er fært um að sökkva undir yfirborð hafsins niður í rekstrardýpt sem nemur skrokkvirði þess x 10 metrum. Hrun-dýptin — algjört hámark sem kafbáturinn getur náð án þess að kremjast — er 1,5 sinnum rekstrardýpt hans.

#### Superior Handling (Yfirburða meðhöndlun)

Meðhöndlun ökutækisins er metin sem Easy (auðveld).

#### Surveillance Suite (Eftirlitsbúnaður)

Ökutækið er með innbyggða tölvu, samskiptastöð, móttakara til að hlusta á merki hlustunartækja, og búnað til að hlera nálæg snjallsímamerki innan 100 metra.#### Tough

Bifreið fyrir almenna notkun með þessum eiginleika dregur Skrokk sinn úr dálki fyrir hernaðarbúnað og hefur sjálfkrafa hámarksburðarvirki. Herfarartæki með þessum eiginleika dregur Skrokk sinn og Burðarvirki úr næstu röð fyrir neðan.

#### Geislabyssa (Tractor Beam)

Aðeins fyrir geimför. Skipinu er búið geislabyssu sem getur krækjað í og dregið að sér farartæki með skrokkeinkunn sem er allt að tveimur þrepum lægri en hennar eigin. Þannig gæti risastórt geimskip dregið að sér og haldið föstum skrokki sem er allt að meðalstærð.

#### VTOL

Lóðrétt flugtak/lending (Vertical takeoff/landing). Þessi eiginleiki er meðfæddur hjá þyrlum og sambærilegum farartækjum sem nota samsetningu snúða til að framleiða lyftikraft. Þegar hann er notaður á flugvélar með föstum vængjum gefur það til kynna notkun á föstum eða stillanlegum þrýstihreyflum til að stjórna flughæð, upptaki og lendingu.

#### Vatnsbúi (Waterborne)

Farartækið knýr sig áfram með liðskiptum fótum. Göngufarartæki eru takmörkuð við hraðann „Hægur“ (Gentle), óháð stærð þeirra. Hins vegar er hægt að byggja göngufarartæki í hæðir sem væru einfaldlega óstöðugar fyrir farartæki sem eru búin annars konar hreyfibúnaði.

Þetta farartæki er fær um hreyfingu neðansjávar.

#### Vopnvætt (Weaponized)

Farartækinu hefur verið breytt til að rúma vopnabúnað. Vopnakerfi eru rædd hér að neðan í kaflanum [Vopn](0006_Vehicles.md?id=weapons).


---
## Vopn

Venjulega eru aðeins herskrokkar hannaðir til að rúma vopnabúnað (vopnafestingar, skotfærageymslur, stýrikerfi). Hægt er að velja eiginleikann „Vopnvætt“ fyrir almenn farartæki sem gætu þurft á vopnum að halda.

Hámarksfjöldi vopnakerfa sem farartæki getur stutt er jafn og 1/10 af Burðarvirkispunktum þess (þannig að farartæki með 40 Burðarvirki gæti stutt 4 vopnakerfi, ef um herfarartæki er að ræða, eða vopnvætt almennt farartæki).

Vopnakerfi eru háð stærð farartækisins. Hámarksgerð vopnakerfa fyrir mismunandi stærðir er sýnd í töflunum hér að neðan.


##### Vopn eftir stærð 

| Stærð | Jarðbundið | Geimfar |
| :-- | :-- | :-- |
| Lítil | Létt vopn (t.d. árásarriffill) | Meðalvopn (t.d. vélbyssa, eldflaugaskotkerfi) |
| Meðal | Meðalvopn (t.d. vélbyssa, eldflaugaskotkerfi) | Turn-/þungavopn (t.d. tengdar þungar vélbyssur, Gatling-byssur) |
| Stór | Turn-/þungavopn (t.d. tengdar þungar vélbyssur, Gatling-byssur) | Vopnabatterí (t.d. stórskotaliðsvopn) |
| Risastór | Vopnabatterí (t.d. stórskotaliðsvopn) | Háþróuð vopn (t.d. eldflaugakerfi) |
| Gríðarstór | Háþróuð vopn (t.d. eldflaugakerfi) | Kjölfest vopn (aðeins eitt) |
| Tröllvaxin | NA | Kjölfest vopn (allt að 3) |

##### Dæmi um vopnatölfræði 
 
| Vopn | Tjón | Drægni | Skothraði | Skotfæri/hleðsla |
| :-- | :-: | :-: | :-: | :-: |
| 50 tommu fallbyssa | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling-byssa | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Eldflaug | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Meðal eldflaug/torpedó | 6d10 | Hámarksdrægni 200km | 1 | 1/5 |
| Stór/stýrð eldflaug | 6d10+10 | Hámarksdrægni 1000km | 1 | 1/10 |
| Leysir/plasmafallbyssa | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Þung leysir/plasmafallbyssa | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Stórskotaliðsbatterí | 5d6+6 | Hámarksdrægni 50km | 1 | 1/5 |
| Kjölfest batterí | 10d6+6 | Hámarksdrægni 20000km | 1 | 1/10 |

_Drægni er gefin upp í metrum og kílómetrum._

_Skothraði er fyrir stakskot, hálfsjálfvirkt og fullsjálfvirkt._

_Skotfæri eru skotgeta áður en þörf er á endurhleðslu. Hleðsla er endurhleðslutími í bardagalotum, að því gefnu að full áhöfn sé tiltæk._

---
## Meðhöndlun og hreyfingar

Undanbragð eða skyndilegar hreyfingar krefjast árangursríks Aksturs/Flugkasts til að tryggja að ökumaður eða flugmaður haldi stjórn á farartækinu. Flest farartæki eru hönnuð og smíðuð til að standast stöku álag og hnjask, en Spilastjórnandi getur ákveðið að tiltekin hreyfing krefjist kasts með hærra erfiðleikastigi, allt eftir því hversu metnaðarfull hún er. Misbrestur þýðir að stjórn á farartækinu tapast: kastaðu á töflunni fyrir Stjórnleysi.

Athugið að taflan fyrir Stjórnleysi á aðeins við um jarðfarartæki. Svipuð áhrif geta átt við um flugvélar og geimför, en Spilastjórnendur munu þurfa að aðlaga röksemdafærsluna fyrir tiltekin áhrif. Til dæmis gæti flugvél farið í spuna frekar en að renna til.

Einnig getur meðfædd meðhöndlun farartækis haft viðbótaráhrif á Aksturskastið. Meðhöndlun er annaðhvort Auðveld, Hefðbundin, Erfið, Ógnvekjandi eða Hekúlesarík og ákvarðar upphafspunkt fyrir Aksturskastið þegar hreyfing er framkvæmd. Erfiðleikastig hreyfingarinnar er síðan beitt á meðhöndlunina til að ákvarða endanlega erfiðleika.

Til dæmis er afkastamikið mótorhjól með innbyggðum gyrostillingum sem gefur því meðhöndlunina Auðveld. Ökumaðurinn vill framkvæma 180 gráðu sladdbeygju til að forðast eltingarmann, hreyfing sem Spilastjórnandi metur sem eitt stig í viðbót í erfiðleika. Ökumaðurinn verður því að gera Aksturskastið sitt á Hefðbundnu stigi frekar en Auðveldu. Hefði hann reynt sömu hreyfingu á mótorhjóli án stillinga, hefði Aksturskastið verið á Erfiðu stigi.

Framúrskarandi meðhöndlun (Superior Handling) er eiginleiki. Ef farartæki hefur ekki eiginleikann sem hluta af lýsingu sinni, þá er sjálfgefin meðhöndlun Hefðbundin fyrir öll farartæki af stærð Stór og minni. Risastór og Gríðarstór farartæki hafa innbyggðan eiginleikann um meðhöndlun sem Ógnvekjandi og Hekúlesaríkan, í sömu röð, og Spilastjórnandi hefur frelsi til að úrskurða að sumar hreyfingar séu einfaldlega ómögulegar vegna stærðar farartækisins.

##### Tafla fyrir stjórnleysi 

| 1d100 | Niðurstaða |
| :-: | :-- |
| 01-25 | Beygja. Stjórnleysið er tímabundið. Farartækið lækkar hraða sinn um 1 þrep í 5 sekúndur. |
| 26-40 | Sladd. Ökumaður verður að berjast fyrir því að halda stjórn á farartækinu. Farartækið lækkar hraða sinn um 2 þrep í 10 sekúndur. |
| 41-50 | Alvarlegur sladd. Farartækið endar á að snúa í ranga átt og stöðvast í 15 sekúndur. |
| 51-60 | Velta. Farartækið sladdar og veltur, og hlýtur 3d10 tjón á Burðarvirki sínu. Farþegar verða að gera árangursrík Þolköst eða hljóta 1d10 tjón á 1d3 líkamshluta. |
| 61-70 | Alvarleg velta. Eins og að ofan, en farartækið hlýtur 3d10+10 tjón og farþegar hljóta 1d10 tjón jafnvel þótt Þolköst heppnist, og 2d10 ef þau mistakast. |
| 71-80 | Ónýtt. Eins og að ofan en farartækið er komið í 0 Burðarvirki. Farþegar hljóta sama tjón og fyrir Alvarlega veltu. |
| 81-90 | Sprenging. Eins og að ofan en eldsneytiskerfi farartækisins kviknar í og springur innan 1d20+10 sekúndna. Ef farþegar geta ekki komist í burtu, hljóta þeir til viðbótar 1d6 brunasár á 1d6 líkamshluta. |
| 91-98 | Skyndileg sprenging. Eins og að ofan en sprengingin er samstundis. |
| 99-00 | Hörmulegt slys. Farþegar verða að gera árangursríkt Þolkast eða deyja samstundis. Tjón eins og fyrir „Ónýtt“ er hlotið óháð úrslitum. |


---
## Dæmi um farartæki

---

### Jarðfarartæki

#### Interceptor (Glerungsbíll)

Uppfærður lúxusbíll, sportbíll eða álíka, þessi bíll er byggður til að fara hratt og gefa eins gott og hann fær í bardaga. Þetta er sú tegund farartækis sem fólk hugsar um þegar einhver segir „njósnabíll“.

| Interceptor | |
| :- | :- |
| **Stærð / Tegund** | Meðal herfarartæki |
| **Skrokkur** | 6 |
| **Burðarvirki** | 40 |
| **Kerfi** | 2 |
| **Hraði** | Hraður |
| **Meðhöndlun** | Auðveld |
| **Eiginleikar** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Olíublettadreifari, Reykdreifari, Twin-Linked meðalvélbyssur (2d6+3) |

<br>

---

#### Eltingarmótorhjól

Létt, hratt mótorhjól fyrir hraðar eltingar, eltingarmótorhjólið ber með sér óvart – annaðhvort par af tengdum vélbyssum eða tvær eldflaugar.

| Eltingarmótorhjól | |
| :- | :- |
| **Stærð / Tegund** | Lítil almenningsfarartæki |
| **Skrokkur** | 2 |
| **Burðarvirki** | 12 |
| **Kerfi** | 1 |
| **Hraði** | Hraður |
| **Meðhöndlun** | Auðveld |
| **Eiginleikar** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Tvær eldflaugar (4d6) eða tví-tengdar léttar vélbyssur (2d6) |

<br>

---

#### Fólksbíll (Sedan)

Hefðbundinn 4-dyra fólksbíll með nægu rými til að rúma ökumann og þrjá farþega þægilega. Fórnar farmrými til að innbyggja eftirlitsbúnað.

| Fólksbíll | |
| :- | :- |
| **Stærð / Tegund** | Meðal almenningsfarartæki |
| **Skrokkur** | 4 |
| **Burðarvirki** | 25 |
| **Kerfi** | 2 |
| **Hraði** | Hraðskreiður |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Vopn** | Engin |

<br>

---

#### Kafbátabíll

Tveggja manna bíll sem getur skipt yfir í vatnsbúastillingu eða kafbátastillingu til að ferðast á eða undir vatni. Kemur með torpedói að framan og loftvarnarflaug á toppnum.

| Kafbátabíll | |
| :- | :- |
| **Stærð / Tegund** | Meðal almenningsfarartæki |
| **Skrokkur** | 6 |
| **Burðarvirki** | 25 |
| **Kerfi** | 2 |
| **Hraði** | Hraður |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Eldflaug (5d6), Torpedó (4d10) |

<br>

---

#### Eftirlitsbíll (Sendibíll)

Venjulegur, ómerktur sendibíll sem hýsir hóp umboðsmanna og búnað til hljóð- og myndupptöku.

| Eftirlitsbíll | |
| :- | :- |
| **Stærð / Tegund** | Stór almenningsfarartæki |
| **Skrokkur** | 9 |
| **Burðarvirki** | 60 |
| **Kerfi** | 3 |
| **Hraði** | Hægur |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Vopn** | Engin |

<br>

---

#### Stuðningsbíll (Tactical Support)

Pallbíll eða jeppi með plássi fyrir tveggja manna áhöfn í farþegarýminu og skotmann sem stendur á pallinum og stýrir snúningsfestri meðalvélbyssu.

| Stuðningsbíll | |
| :- | :- |
| **Stærð / Tegund** | Meðal almenningsfarartæki |
| **Skrokkur** | 6 |
| **Burðarvirki** | 30 |
| **Kerfi** | 2 |
| **Hraði** | Hraðskreiður |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Fest meðalvélbyssa (2d6) |


<br>

---

### Vatnafar

#### Hraðbátur

Dæmigerður hraðbátur, vopnaður minesleppara að aftan.

| Hraðbátur | |
| :- | :- |
| **Stærð / Tegund** | Meðal almenningsfarartæki |
| **Skrokkur** | 3 |
| **Burðarvirki** | 24 |
| **Kerfi** | 2 |
| **Hraði** | Hraður |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Minesleppari (5d6) |

<br>

---

#### Snekkja

Sú tegund lúxussnekkju sem auðkýfingur gæti átt. Líklegast búin eftirlitsbúnaði til að verjast óvinum sem reyna að gera eitthvað misjafnt.

| Snekkja | |
| :- | :- |
| **Stærð / Tegund** | Risastór almenningsfarartæki |
| **Skrokkur** | 10 |
| **Burðarvirki** | 75 |
| **Kerfi** | 4 |
| **Hraði** | Hægur |
| **Meðhöndlun** | Ógnvekjandi |
| **Eiginleikar** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Vopn** | Engin |


<br>

---

### Flugför/Geimför

#### Loftskip (Almenningsloftskip)

Svipað og Hindenburg, þessi flokkur loftskipa (og önnur í sama flokki) er 245 metrar að lengd og krefst 40 til 61 manns áhafnar. Það getur venjulega flutt 50 til 72 farþega í lúxusíbúðum.

| Loftskip | |
| :- | :- |
| **Stærð / Tegund** | Gríðarstór almenningsfarartæki |
| **Skrokkur** | 10 |
| **Burðarvirki** | 85 |
| **Kerfi** | 5 |
| **Hraði** | Þunglamalegur |
| **Meðhöndlun** | Hekúlesarík |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | Engir |
| **Vopn** | Engin |

<br>

---

#### Árásarþyrla

Hin hefðbundna árásarþyrla notar háþróaða eftirlitstækni sína til að grípa síma- og þráðlaus internetmerki, og fylgjast með einstaklingum og farartækjum jafnvel í myrkri, í gegnum FLIR. Tilraunir til að forðast rekjaspor í gegnum feluleik eru Ógnvekjandi.

| Árásarþyrla | |
| :- | :- |
| **Stærð / Tegund** | Stór herfarartæki |
| **Skrokkur** | 11 |
| **Burðarvirki** | 50 |
| **Kerfi** | 3 |
| **Hraði** | Meðalhraði |
| **Meðhöndlun** | Auðveld |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | Engir |
| **Vopn** | 1 Gatling-byssa (3d6), 4 eldflaugar (5d6) |

<br>

---

#### Fjölnota orrustuflugvél

Þessi tveggja manna landbundna orrustuflugvél (svipuð að gerð og De Havilland Mosquito) er vel þekkt fyrir afköst og fjölhæfni. Sprengjurými hennar getur borið annaðhvort tvær 250 lb. sprengjur (meðhöndlist sem meðalstórar eldflaugar með drægni 0) eða eitt torpedó.

| Fjölnota orrustuflugvél | |
| :- | :- |
| **Stærð / Tegund** | Stór herfarartæki |
| **Skrokkur** | 10 |
| **Burðarvirki** | 45 |
| **Kerfi** | 3 |
| **Hraði** | Meðalhraði |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Skildir** | Engir |
| **Vopn** | 4 nefbúnar Gatling-byssur (4d6+3), 1 sprengjurými (6d10 - sjá lýsingu) |

<br>

---

#### Stjörnufraktskip (Létt hátækniflutningaskip)

Þetta létta flutningaskip krefst aðeins tveggja manna lágmarksáhafnar, með plássi fyrir allt að fjóra farþega til viðbótar. Hefðbundna gerðin er tekin fram hér, hins vegar munu margir eigendur beita sínum eigin „sérbreytingum“ svo sem földu farmrými, aukinni afköstum, betri meðhöndlun, EMP-vörn, feluleik, og svo framvegis.

| Stjörnufraktskip | |
| :- | :- |
| **Stærð / Tegund** | Meðal almenningsgeimfar |
| **Skrokkur** | 10 |
| **Burðarvirki** | 80 |
| **Kerfi** | 2 |
| **Hraði** | Hraðskreiður (Parsec-stuðull 3) |
| **Meðhöndlun** | Hefðbundin |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | 8 |
| **Vopn** | 2x fjórfaldar leysifallbyssur í turni (5d6) |


<br>

---

#### General Contact Unit (Öfga-hátækni geimfar)

Þetta gríðarlega hátækni stjörnuskip er líkamleg framsetning á mjög háþróaðri gervihuga, sem tekur á sig mynd tveggja kílómetra langrar raðar af sviðstengdum einingum. Einingarnar eru hver fyrir sig sérhæfðar og innihalda búseturými, smíðaaðstöðu, farmrými, matvælavinnslu, tómstundamiðstöðvar, flugskýli, og jafnvel nokkrar leyndardómsfullar einingar sem gervigreind skipsins ræðir sjaldan, ef nokkurn tíma. Það þarfnast engrar mannlegrar áhafnar, en getur stutt farþegafjölda upp á allt að 100.000 manns með auðveldum hætti. Margir farþegar fæðast og deyja um borð í Contact Unit: margir eru aðeins viðkomandi, koma og fara eins og þeim hentar.

| General Contact Unit | |
| :- | :- |
| **Stærð / Tegund** | Tröllvaxið almenningsgeimfar |
| **Skrokkur** | 20 |
| **Burðarvirki** | 10.000 |
| **Kerfi** | 6 |
| **Hraði** | Meðalhraði (Parsec-stuðull 4. Á þessu tæknistigi jafngildir stuðullinn 1 klukkustund) |
| **Meðhöndlun** | Ógnvekjandi |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Skildir** | 30 |
| **Vopn** | Engin sem það vill ræða um |

<br>