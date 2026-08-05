# Ökutæki

Ökutæki í _Mythras Imperative_ eru meðhöndluð á hálf-abstraktan hátt. Í grunninn eru þau bakgrunnstæki sem notuð eru til að koma persónum frá A til B, án mikillar þarfar á nákvæmum lýsingum eða tölfræði. Stundum munu þó spilastjórnendur þurfa á nákvæmum upplýsingum að halda um ökutæki þegar nauðsynlegt er að sýna þau í eltingaleikjum eða bardaga.

Reglurnar í þessum hluta gera kleift að útfæra flestar tegundir ökutækja á abstraktan hátt sem ætlað er að leyfa sveigjanleika og auka sagnagerð. Geimskip og geimför eru dálítið öðruvísi, þó þau byggi á svipuðum meginreglum.

---
## Tölfræði

Öll ökutæki eru lýst út frá gerð (Structure), skrokki (Hull), hraða (Speed), kerfum (Systems), eiginleikum (Traits) og skjöldum (Shields, ef þeir eru til staðar í spilaheiminum).

- **[Stærð](0006_Vehicles.md?id=vehicle-size-table):** Öll ökutæki hafa einn af sex stærðarflokkum sem ákvarðar gildi eða svið hinna eiginleikanna. Vegna stærri eðlislægrar stærðar og fjandsamlegra umhverfa í geimnum hafa geimskip sitt eigið svið gilda.
- **[Skrokkur](0006_Vehicles.md?id=terrestrial-hulls):** Táknar brynvarða punkta (Armor Points).
- **[Gerð](0006_Vehicles.md?id=terrestrial-hulls):** Táknar heilsu (Hit Points) ökutækis.
- **[Skildir](0006_Vehicles.md?id=shields):** Í spilaheimum með háþróaða orkustjórnunartækni geta verið til staðar skildir sem vernda ökutækið, en sem geta eyðst við viðvarandi skothríð.
- **[Kerfi](0006_Vehicles.md?id=systems):** Táknar lífsnauðsynlega íhluti ökutækisins, þar á meðal aflgjafa, áhafnarrými o.s.frv.
- **[Hraði](0006_Vehicles.md?id=speed):** Hvert ökutæki hefur grunn hraðaeinkunn.
- **[Eiginleikar](0006_Vehicles.md?id=traits):** Ökutæki getur einnig haft einn eða fleiri eiginleika. Eiginleikar, eins og hæfileikar sem úthlutað er verum í _Mythras Imperative_ reglunum, eða bardagastílseiginleikar, bjóða upp á viðbótarlýsingar og kosti sem endurspegla eðli ökutækisins.
- **[Vopn](0006_Vehicles.md?id=weapons):** Rétt eins og eiginleikar getur ökutæki verið búið vopnum eftir því sem spilaheimurinn leyfir. Sum dæmi og gildi eru útfærð hér að neðan.

---
### Skrokkstærð, gerð og uppbygging

Stærð og tilgangur ökutækis hefur áhrif á þykkt skrokksins og viðnámsþol innri uppbyggingar. Mótorhjól hefur til dæmis mjög lítinn skrokk, þar sem það er hannað fyrir hraða og lipurð. Land-járnsmíði (massíft, beltadrifið eða hjólbarðabrynjað skrímsli, knúið áfram af gufu- eða dísilvélum), sem er mun stærra ökutæki hannað fyrir vígvöllinn, hefur mun stærri skrokk. Samanburðarstærðir skrokka (og hversu mörg högg frá vopnum þau geta venjulega þolað) er dregið saman í töflum um stærð og skrokk hér að neðan.

Hvenær sem ökutæki verður fyrir tjóni, minnkar skaðinn af skrokk-gildi þess. Sérhver eftirstandandi skaði er dreginn frá heilsu (Structure) ökutækisins og hefur prósentulíkur, jafnar depil-skaðanum (penetrating damage), á að hafa áhrif á kerfi. Ef heilsu ökutækis er eytt niður í núll er það ýmist algjörlega eyðilagt eða svo illa farið að það þarf að senda það í brotajárn.

##### Jarðbundnir skrokkar

| Stærð | Heilsu (Structure) | Skrokkgildi (Civilian) | Skrokkgildi (Military) | Dæmi |
| :-- | :-: | :-: | :-: | :-- |
| Lítil | 1-20 | 1-3 | 4-6 | Mótorhjól, mótorhjól með hliðarvagni, lítill bíll, kanó, kajak, árabátur |
| Miðlungs | 21-40 | 1-6 | 7-9 | Fólksbíll, sendibíll, pallbíll, lúxusbíll, sportbíll, limósína, björgunarbátur, hraðbátur, svifdreki, sjálfsflugvél |
| Stór | 41-60 | 4-9 | 10-12 | Vörubíll, teygjanleg limósína, jeppi, rúta, einkaflugvél, svifflugvél, skemmtibátur, skriðdreki, þyrla, kafbátur |
| Mjög stór | 61-80 | 7-12 | 13-15 | Flutningabíll, farþegaþota, þota, strandgæsluskip, snekkja |
| Gríðarstór | 81-100 | 10-15 | 16-18 | Lest, skemmtiferðaskip, herskip |

##### Geimskipsskrokkar

| Stærð | Heilsu (Structure) | Skrokkgildi (Civilian) | Skrokkgildi (Military) | Dæmi |
| :-- | :-: | :-: | :-: | :-- |
| Lítil | 10-50 | 4-9 | 10-12 | Eins manns orrustuþota |
| Miðlungs | 51-150 | 7-12 | 13-15 | Létt flutningaskip, skutla |
| Stór | 151-450 | 10-15 | 16-18 | Þungt flutningaskip, beitiskip |
| Mjög stór | 451-1350 | 13-18 | 19-21 | Fylgdarfriggátur, létt orrustubeitiskip |
| Gríðarstór | 1351-4050 | 16-21 | 21-24 | Kynslóðaskip, þungt orrustubeitiskip |
| Risastór | 4050-12110 | 19-24 | 24-30 | Sporbrautarbústaður, reikistjörnu-eyðir |

---
### Skildir

Varnarskyldir veita viðbótarvörn fyrir þau ökutæki sem geta borið þá. Skildir virka örlítið öðruvísi en skrokkurinn vegna þess að þeir eyðast. Ef skaðinn er jafn eða minni en gildi skjalda, þá blokkast hann allur. Ef skaðinn fer yfir gildi skjaldarins, þá minnkar umframmagnið styrk skjaldarins um þá tölu.

_Til dæmis hefur herflutningabíll orkuskjöld með 12 punkta styrk. Ef bíllinn yrði fyrir leysigeisla sem gerir 11 í skaða, þá kemst hann ekki í gegn og hefur engin frekari áhrif. Hins vegar, ef bíllinn yrði fyrir sprengingu sem gerir 15 í skaða, myndu umframpunktarnir þrír lækka styrk skjaldarins niður í 9._

Þegar styrkur varnarskjaldar er kominn í núll, hrynur hann. Allur eftirstandandi skaði fer yfir á skrokkinn.

---
### Kerfi

Í hvert sinn sem ökutæki verður fyrir skaða sem kemst í gegnum skrokkinn, er möguleiki, jafn prósentunni á skaðanum sem kemst í gegn, að lífsnauðsynlegt kerfi hafi orðið fyrir skemmdum.

_Til dæmis eru 10 punktar af skaða beittir á hraðbát - ökutæki með 3 í skrokkgildi og 24 í heilsu. Skrokkurinn virkar sem brynja og minnkar skaðann í 7. Þetta er dregið frá 24 heilsu-punktunum og það eru 7% líkur á að skemma eitt af kerfum ökutækisins._

Skaðinn sem kerfi getur tekið byggist eingöngu á stærð ökutækisins. Þetta er mótað af fjölda högga sem kerfið getur tekið, frekar en raunverulegum skaðamagni. Eitt kerfishögg á lítið ökutæki eyðileggur kerfið samstundis. Það þarf tvö högg til að eyðileggja kerfi miðlungs ökutækis, þrjú fyrir stórt ökutæki, og svo framvegis. Sjá [töflu yfir kerfisskaða](0006_Vehicles.md?id=system-damage-table) hér að neðan.

Kerfi sem eru skemmd, en ekki enn eyðilögð, verða fyrir virknitapi í réttu hlutfalli við fjölda högga sem þau hafa fengið – annað hvort prósentusamdrátt eða erfiðleikastig (Grade penalty) á verkefni kerfisins. Sérstök áhrif byggjast á því hvað undirkerfið stjórnar, eins og nánar er lýst í [töflu yfir skemmdir á kerfishlutum](0006_Vehicles.md?id=system-component-damage-table) hér að neðan. Það fer eftir því hvaða kerfi er slegið, áhrifin geta verið hörmuleg.

_Til dæmis myndi land-járnsmíði (gríðarstórt ökutæki með 5 kerfishögg) sem verður fyrir tveimur höggum á drifkerfið tapa 40% af afli sínu og lækka hraða sinn um tvö stig niður í "Ponderous". Á sama hátt myndi stórt flutningaskip - með 3 kerfishögg - sem tekur tvö högg á vél/eldsneytiskerfið fá tveggja stiga refsingu á hraða sem og á notkun rafeindakerfa. Þriðja höggið myndi eyðileggja vél/eldsneytiskerfið og skipið með því._

<details>
<summary>* Errata frá samfélagi</summary>

---
#### Skaði

_Upprunalegi textinn hér var upphaflega lengra í burtu. Settur beint á eftir kaflanum um kerfi er hann óþarflega endurtekningasamt._

- _"Skaði sem fer yfir skrokkgildið kemst inn í ökutækið, skemmir heilsu þess og getur hugsanlega haft áhrif á eitt eða fleiri kerfi. Það fer eftir stærð ökutækisins hvort skaðinn sé minniháttar eða hörmulegur._
- _Til dæmis getur stórt ökutæki tekið allt að tvö högg á kerfi eins og drifið sitt. Þriðja höggið eyðileggur drifið í reynd. Í hvert sinn sem kerfið tekur högg, missir það annað hvort prósentu af virkni sinni eins og lýst er í dálkinum 'Loss per Hit' í töflunni hér að neðan, eða kjarnastarfsemi (eins og drif, stýring, samskipti, o.s.frv.) verður eitt erfiðleikastig erfiðari fyrir hvert högg."_

_Ofangreindar málsgreinar eru fjarlægðar og stutt útgáfa tekur við með öðru dæmi um áhrif á kerfi._

---
</details>

##### Tafla yfir kerfisskaða

| Stærð | Kerfishögg | Tap í höggi |
| :-- | :-: | :-- |
| Lítil | 1 | 100% - Eyðilagt |
| Miðlungs | 2 | 1 stig eða 50% |
| Stór | 3 | 1 stig eða 33% |
| Mjög stór | 4 | 1 stig eða 25% |
| Gríðarstór | 5 | 1 stig eða 20% |
| Risastór | 6 | 1 stig eða 16% |

<details>
<summary>* Errata frá samfélagi</summary>

---
##### Tafla yfir kerfisskaða (Upprunaleg)

| Stærð | Kerfishögg | Tap í höggi |
| :-- | :-: | :-- |
| Lítil | 1 | 1 stig eða 50% |
| Miðlungs | 2 | 1 stig eða 33% |
| Stór | 3 | 1 stig eða 25% |
| Mjög stór | 4 | 1 stig eða 20% |
| Gríðarstór | 5 | 1 stig eða 16% |
| Risastór | 6 | 1 stig eða 10% |

##### Tafla um stærð ökutækis (úr [Skrokkstærð, gerð og uppbygging](0006_Vehicles.md?id=hull-size-type-and-structure))

| Stærð | Kerfishögg |
| :-- | :-: |
| Lítil | 1 |
| Miðlungs | 2 |
| Stór | 3 |
| Mjög stór | 4 |
| Gríðarstór | 5 |
| Risastór | 6 |

_Upprunalegu reglurnar og dæmin eru ósamræmd:_
- _"Kerfi sem eru skemmd, en ekki enn eyðilögð, verða fyrir virknitapi sem jafngildir hlutfalli núverandi högga af heildargetu. Þannig myndi gríðarstórt ökutæki sem fær tvö högg á drifið tapa 40% af afli (2 högg af hámarki 5)"._
  - _Þetta gefur til kynna að gríðarstóra ökutækið með 5 kerfishögg ætti að tapa 20% með hverju höggi - en taflan segir 16%._
- _"Til dæmis getur stórt ökutæki tekið allt að þrjú högg á kerfi eins og drifið. Fjórða höggið eyðileggur drifið í reynd."_
  - _Þetta gefur til kynna - eins og taflan - 25% skaða á kerfishöggi en stór ökutæki geta aðeins tekið 3 kerfishögg samkvæmt sömu töflu._
- _Þótt það sé ekki ósamræmi, þá var taflan um stærð ökutækja óþörf; hún birtist aftur í fyllri mynd (með 'Loss per Hit' dálkinum) nokkrum línum síðar._

_Þetta gerir erfitt að hafa samræmda reglu. Til að bregðast við þessum málum er gildunum og dæmunum breytt til samræmis og taflan um stærð ökutækja fjarlægð._

---
</details>

##### Tafla yfir skemmdir á kerfishlutum

| 1d10 | Kerfi | Skemmd afleiðing | Eyðilögð afleiðing |
| :-: | :-- | :-- | :-- |
| 1 | Farmur | Magn eigna eða búnaðar í lestinni eyðileggst í réttu hlutfalli við skaðann. | Allur farmur eyðileggst. |
| 2 | Samskipti | Samskiptaköst verða eitt erfiðleikastig erfiðari í hvert sinn sem þeim er skemmt. | Ökutæki getur ekki lengur átt samskipti eða blekkt skynjara óvina. |
| 3 | Stýring | Stýriköst verða eitt erfiðleikastig erfiðari í hvert sinn sem þeim er skemmt; strax þörf á stýringarkasti. | Ökutæki getur ekki lengur beygt eða breytt stefnu. |
| 4 | Drif | Hraði minnkar í réttu hlutfalli við skaðann. | Ökutækið stoppar skyndilega; flugvélar hrapa. |
| 5 | Áhöfn | Fjöldi farþega í réttu hlutfalli við skaðann verður mannfall. Þeir sem verða fyrir þessu fá alvarlegt sár og verða að standast þrek-kast (Endurance) eða deyja samstundis. | Farþegar ökutækisins deyja. |
| 6 | Vél / Eldsneyti | Hraði minnkar í réttu hlutfalli við skaðann. Rafeindakerfi verða eitt erfiðleikastig erfiðari í notkun. | Ökutæki eyðileggst í hörmulegri sprengingu. |
| 7 | Skynjarar | Skynjara-, leiðsögu- og vopnaárásarköst verða eitt erfiðleikastig erfiðari í hvert sinn sem þeim er skemmt. | Ökutæki verður blint. |
| 8 | Vopn | Fjöldi vopnakerfa í réttu hlutfalli við skaðann verður óvirkur. | Ökutæki getur ekki lengur skotið vopnum. |
| 9-0 | Ekkert | Engin kerfi hæfð; aðeins skaði á heilsu. | N/A |

<details>
<summary>* Errata frá samfélagi</summary>

---
##### Tafla yfir skemmdir á kerfishlutum (Vél/Eldsneyti)

_Upprunalega niðurstaðan var eftirfarandi: "Hámarkshraði helmingast..." Þetta stangast á við almennu regluna um skaðarefsingar í réttu hlutfalli við kerfisskaða: 25% skaði = 25% refsingu. Auk þess minnast fullar reglur í Mythras Companion ekki á þessa helmingun hraðans._

_Þess vegna er textanum skipt út fyrir sömu færslu og í drifkerfum: "Hraði minnkar í réttu hlutfalli við skaðann."_

---
</details>

---
### Hraði

Þar sem eðlisfræði hraða, hröðunar, viðnáms og tregðu eru flókin mál, er þörf á einföldun og því fá ökutæki abstrakt hraðaeinkunn. Hraðaeinkunn ætti aðeins að nota til að dæma gróflega hvort eitt ökutæki geti tekið fram úr eða náð öðru.

Hraðaeinkunnin táknar nafnvirkan rekstrarhraða ökutækisins. Í neyðartilvikum er hægt að auka þessa frammistöðu um eitt stig, með hættu á sliti eða skemmdum á vélum. Þótt sama tafla sé notuð fyrir allar tegundir ökutækja, ætti að beita skynsemi svo að aðeins ökutæki í sama flokki séu borin saman. Til dæmis, ef geimskip og sportbíll hafa sama hröðunarhraða, ætti að vera augljóst að geimskipið sé tiltölulega hraðara.

Hægt er að auka hraða ökutækis umfram staðalgildi þess með vel heppnuðu Drive-kasti. Venjulega er þessi auka hraði aðeins sjálfbær í stuttan tíma – ekki meira en 1d6 mínútur áður en ökutækið verður að lækka í staðalhraða eða hætta á skemmdum á aflgjafanum. Mikilvægt (critical) Drive-kast leyfir að lengja tímann á meiri hraða í 1d12 mínútur.

Ökumaður getur reynt að ýta hraða ökutækis um 2 stig, en það krefst Herculean Drive-kasts og hámarkstíminn sem ökutækið getur haldið þessum hraða er 1d3 mínútur: Mikilvægur árangur mun ekki lengja tímalengd aukins hraða.

##### Tafla yfir hraðaeinkunnir

| Hraðaeinkunn | Hámarkshraði fyrir |
| :-- | :-: |
| Ponderous (þunglamalegur) | Gríðarstór |
| Sluggish (daufur) | |
| Slow (hægur) | Mjög stór |
| Mediocre (miðlungs) | |
| Gentle (hóflegur) | Stór |
| Moderate (meðal) | |
| Rapid (hraður) | Miðlungs |
| Fast (fljótur) | |
| Fleet (skjótur) | Lítil |

---
### Eiginleikar

Hámarksfjöldi eiginleika sem ökutæki getur haft fer eftir skrokkstærð og gerð.

Sérhvert ökutæki hefur eðlislægan eiginleika: ferðamátann sem það var aðallega hannað fyrir. Þess vegna hafa flugvélar í eðli sínu "Airborne", bátar "Seaborne", og svo framvegis. Þessi eðlislægi eiginleiki telur ekki með í tiltækum fjölda eiginleika. Hins vegar, ef ökutæki ætti að innihalda annan ferðamáta – fljúgandi kafbát til dæmis, þá þyrfti að taka "Airborne" eiginleikann sem einn af tiltækum eiginleikum þess.

Sumir eiginleikar gætu ekki verið í boði, allt eftir tæknistigi spilaheimsins; spilastjórnendur verða að taka eigin ákvarðanir um hvaða eiginleikar geta átt við.

##### Tafla um úthlutun eiginleika ökutækis

| Stærð | Hámarkseiginleikar |
| :-- | :-: |
| Lítil | 1 |
| Miðlungs | 2 |
| Stór | 3 |
| Mjög stór | 4 |
| Gríðarstór | 5 |
| Risastór | 6 |

#### Airborne
Ökutækið er fært um flug í lofthjúpnum.

#### All Terrain
Þennan eiginleika verður að nota með jarðbundnum ökutækjum. Ökutækið getur farið yfir óbyggilegt, erfitt og bratt landslag, með því að nota annað hvort beltadrif, háþróaða fjöðrun og drifkerfi, eða öfluga drifmismuni.

#### Burrowing
Ökutækið er hannað til að grafa sig og jarðganga í gegnum jörðina. Það getur náð hámarksdýpt sem jafngildir skrokkgildi þess x 5 metrar.

#### Camouflaged
Ökutækið er með annaðhvort felumálningu eða hermiskynjara sem leyfa því að falla inn í umhverfið sitt. Tilraunir til að sjá ökutækið sjónrænt eru einu stigi erfiðari.

#### Cargo
Ökutækið er sérstaklega hannað til að flytja farm frekar en farþega. Farþegarými eru í lágmarki og afgangurinn af nothæfu rými ökutækisins er varið í farmgeymslu með viðeigandi hlutum, verkfærum og jafnvel umhverfisstýringu (eins og frystihólfum fyrir flutning á forgengilegum vörum). Þegar ökutækið er hlaðið farmi er hraði þess tveimur stigum lægri en skrokkstærð þess myndi venjulega leyfa.

#### Carrier
Ökutækið er sérstaklega hannað til að bera minni, léttmannuð eða hugsanlega fjarstýrð ökutæki af borgaralegum eða hernaðarlegum toga. Öll ökutæki sem búa yfir þessum eiginleika verða að vera að minnsta kosti gríðarstór. Fjöldi lítilla farartækja sem borin eru getur verið breytilegur eftir verkefnategund og tilgangi, en getur verið allt frá 10 upp í eins mörg og heilsustig ökutækisins.

#### Construction
Ökutækið er búið fyrir mikla byggingarvinnu. Öll ökutæki með þennan eiginleika hafa einnig "All Terrain" eiginleikann, en hraði er tveimur stigum lægri en skrokkstærð þeirra myndi venjulega leyfa. Ökutækið er útbúið verkfærum sem henta verkefninu eins og krönum, gröfum, vörubílum o.s.frv.

#### EMP Resistant
Ökutækið er varið gegn rafsegulpúlsum (EMP).

#### Enhanced Performance
Hraðaeinkunn ökutækisins er einu stigi hærri en hámarkið fyrir stærð þess.

#### Ejector Seat
Ef neyðarástand kemur upp skýtur útkastsstóll farþegum nokkur hundruð metra upp í loftið, og virkjar síðan fallhlíf til að leyfa örugga lendingu. Fallhlíf er valfrjáls. Ekki ráðlagt fyrir þyrlur (nema Kamov Ka-52 Alligator sé undantekning).

#### FTL (Faster Than Light)
Aðeins fyrir geimför. Farið er búið hraðar-en-ljós vél (hvort sem það er hyperdrive, warp-drif, ormagangagjafi eða álíka). FTL-drifið hefur sérstaka hraðaeinkunn sem mælir í raun hversu hratt geimskip getur farið yfir eitt parsec (3,26 ljósár), eins og hér segir:

##### Tafla yfir FTL hraðaeinkunnir

| Hraðaeinkunn | Þáttur til að fara yfir 1 Parsec |
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

Tímaþátturinn er ákvörðun spilastjórnanda, allt eftir því hversu langt FTL-þróun spilaheimsins er komin. Til dæmis gæti grunnþátturinn verið 1 dagur, sem þýðir að skip með Ponderous FTL-drif tekur 10 daga að ljúka ferðinni, en skip með Fleet FTL-drif lýkur ferðinni á 1 degi. Annars staðar, þar sem FTL-tækni er verulega minna skilvirk, gæti tímaþátturinn verið mældur í mánuðum frekar en dögum.

Gert er ráð fyrir að skipið hafi eldsneytisforða til að annaðhvort gera ferðina aftur, eða leið til að taka eldsneyti á áfangastað.

Gert er ráð fyrir að allar stærðir af geimskipum geti verið búnar FTL-drifi, þó þetta fari aftur eftir spilaheiminum.

FTL-drif er ekki hægt að virkja innan 1,5 stjarnfræðieininga (AU) frá stjörnu (um 225 milljón kílómetrar). Þetta þýðir að skip verða að nota undir-ljóshraðadrif til að komast út í um það bil fjarlægð Mars áður en FTL-kerfið er virkjað.

#### Ground Vehicle
Ökutækið er fært um ferðalag á jörðu niðri.

#### Hover
Ökutækið svífur fyrir ofan jörðina með því að nota loftpúða eða þyngdarafls-repulsor.

#### Luxurious
Ökutækið er sérstaklega hannað til að flytja farþega með ákveðnum lúxus. Aukafarmrými er breytt í lúxus farþegakompur, sundlaugar, heita potta, auka áhöfn til að þjóna duttlungum farþeganna o.s.frv.

#### Rails
Ökutækið treystir á teinakerfi. Ökutæki með þennan eiginleika geta náttúrulega náð hraðaeinkunn þremur stigum hærri en skrokkstærð þeirra myndi venjulega leyfa, en eru augljóslega bundin við hreyfingu á teinakerfinu eingöngu.

#### Resilient
Öll kerfi þola eitt högg í viðbót við það sem venjulega er ákvarðað af stærð. Þessum eiginleika er hægt að stafla – þannig að Resilient 2 gefur til kynna að kerfi þoli 2 högg meira en venjulega fyrir kostnað af tveimur eiginleikapunktum.

#### Seaborne
Ökutækið flýtur á vatni.

#### Spacecraft
Ökutækið er innsiglað gegn lofttæmi og varið gegn geimgeislun og gæti, allt eftir hönnun, verið fært um að yfirgefa og koma aftur inn í lofthjúp, og viðhalda flugi innan lofthjúps.

#### Stealth
Aðeins fyrir flugvélar. Ökutækið er hannað til að forðast uppgötvun með ratsjá og öðrum langdrægum skynjarakerfum. Tilraunir til að sjá ökutækið með rafeindaskynjurum eru einu stigi erfiðari.

#### Submersible
Ökutækið er fært um að kafa undir yfirborð hafsins niður á rekstrardýpt sem jafngildir skrokkgildi þess x 10 metrar. Hrun-dýptin – hámarkið sem kafbáturinn getur náð án þess að kremjast – er 1,5 sinnum rekstrardýpt hans.

#### Superior Handling
Meðhöndlun ökutækisins er metin sem "Easy".

#### Surveillance Suite
Ökutækið er með tölvu um borð, samskiptastöð, móttakara fyrir hljóðnemamerki og tækjabúnað til að grípa merki frá nærliggjandi snjallsímum innan 100 metra.

#### Tough
Borgaralegt ökutæki með þennan eiginleika dregur skrokk sinn úr hernaðardálki og hefur sjálfkrafa hámarksheilsu. Hernaðarlegt ökutæki með þennan eiginleika dregur skrokk og heilsu frá næstu röð fyrir neðan.

#### Tractor Beam
Aðeins fyrir geimför. Skipið er búið geisla sem getur gripið og dregið að sér ökutæki með skrokkgildi allt að tveimur stigum minna en sitt eigið. Þannig gæti gríðarstórt geimskip dregið að sér og haldið farartæki allt að miðlungs stærð.

#### VTOL (Vertical Takeoff/Landing)
Lóðrétt flugtak/lending. Þessi eiginleiki er eðlislægur fyrir þyrlur og álíka ökutæki sem nota samsetningu snúða til að framleiða lyftikraft. Þegar hann er notaður á fastvængjaflugvélar gefur hann til kynna notkun á föstum eða stillanlegum þrýstivélum til að stjórna flugi, hækkun og lækkun.

#### Walker
Ökutækið knýr sig áfram með liðskiptum fótum. Gengill-ökutæki eru takmörkuð við hraðann "Gentle", óháð stærð þeirra. Hins vegar er hægt að byggja gengla í hæðir sem væru einfaldlega óstöðugar fyrir ökutæki búin öðrum ferðamátum.

#### Weaponized
Ökutækið hefur verið lagað að því að hýsa vopn. Vopnakerfi eru rædd hér að neðan í kaflanum um [vopn](0006_Vehicles.md?id=weapons).

---
## Vopn

Venjulega eru aðeins hernaðarlegir skrokkar hannaðir til að hýsa vopn (festipunkta, skotfærageymslur, stjórnkerfi). Hægt er að taka "Weaponized" eiginleikann fyrir borgaraleg ökutæki sem gætu þurft vopnabúnað.

Hámarksfjöldi vopnakerfa sem ökutæki getur stutt er jafn 1/10 af heilsu-punktum þess (þannig að ökutæki með 40 heilsu gæti stutt 4 vopnakerfi, ef það er hernaðarlegt, eða borgaralegt ökutæki með "Weaponized" eiginleikann).

Vopnakerfi ráðast af stærð ökutækisins. Hámarksgerð vopnakerfa fyrir mismunandi stærðir eru sýndar í töflunum hér að neðan.

##### Tafla yfir vopn eftir stærð

| Stærð | Jarðbundið | Geimskip |
| :-- | :-- | :-- |
| Lítil | Létt vopn (t.d. árásarriffill) | Miðlungs vopn (t.d. vélbyssa, eldflaugaskotpallur) |
| Miðlungs | Miðlungs vopn (t.d. vélbyssa, eldflaugaskotpallur) | Turn- eða þungt vopn (t.d. tengdar þungar vélbyssur) |
| Stór | Turn- eða þungt vopn (t.d. tengdar þungar vélbyssur) | Vopnabatterí (t.d. stórskotalið) |
| Mjög stór | Vopnabatterí (t.d. stórskotalið) | Háþróuð vopn (t.d. eldflaugakerfi) |
| Gríðarstór | Háþróuð vopn (t.d. eldflaugakerfi) | Bakfest vopn (aðeins eitt) |
| Risastór | NA | Bakfest vopn (allt að 3) |

##### Dæmi um tölfræði vopna

| Vopn | Skaði | Drægni | Skothraði | Skotfæri/hleðsla |
| :-- | :-: | :-: | :-: | :-: |
| 50 tommu fallbyssa | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Eldflaug | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Miðlungs flaug/torpedo | 6d10 | Max drægni 200km | 1 | 1/5 |
| Stór/Cruise flaug | 6d10+10 | Max drægni 1000km | 1 | 1/10 |
| Leysir/Plasma fallbyssa | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Þung leysir/Plasma fallbyssa | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Stórskotaliðsbatterí | 5d6+6 | Max drægni 50km | 1 | 1/5 |
| Bakfest batterí | 10d6+6 | Max drægni 20000km | 1 | 1/10 |

_Drægni er gefin upp í metrum og kílómetrum._
_Skothraði er fyrir stakt skot, hálfsjálfvirkt og fullsjálfvirkt._
_Skotfæri eru skotgeta fyrir endurhleðslu. Hleðsla er hleðslutími í bardagalotum._

---
## Meðhöndlun og hreyfingar

Evasive- eða skyndihreyfingar krefjast vel heppnaðs Drive/Pilot-kasts til að tryggja að ökumaðurinn eða flugmaðurinn haldi stjórn á ökutækinu. Flest ökutæki eru hönnuð og byggð til að standast einstaka álag, en spilastjórnandinn getur úrskurðað að ákveðin hreyfing krefjist kasts á hærra erfiðleikastigi, eftir því hversu metnaðarfull hún er. Bilun þýðir að stjórn á ökutækinu glatist: kastið á töflu um stjórnmissi.

Athugið að taflan um stjórnmissi á aðeins við um jarðbundin ökutæki. Svipuð áhrif má beita á flug- og geimför, en spilastjórnendur þurfa að aðlaga rökin fyrir sérstökum áhrifum. Til dæmis gæti flugvél, frekar en að skrensa, farið í spuna.

Einnig getur eðlislæg meðhöndlun ökutækis haft viðbótaráhrif á Drive-kastið. Meðhöndlun er annaðhvort Easy, Standard, Hard, Formidable eða Herculean og ákvarðar upphafspunkt fyrir Drive-kastið þegar hreyfing er framkvæmd. Erfiðleikastigið fyrir hreyfinguna er síðan beitt á meðhöndlunina til að ákvarða endanlega erfiðleika.

Til dæmis hefur hágæða mótorhjól innbyggða gyrostýringu sem gefur því meðhöndlun af gerðinni Easy. Ökumaðurinn vill framkvæma 180 gráðu skrens til að forðast eltingamann, hreyfing sem spilastjórnandinn metur sem eitt aukastig af erfiðleika. Ökumaðurinn verður því að gera Drive-kast sitt á Standard frekar en Easy. Ef hann hefði verið að reyna sömu hreyfingu á mótorhjóli án stöðugleika, hefði Drive-kastið verið á Hard.

Superior Handling er eiginleiki. Ef ökutæki hefur ekki eiginleikann sem hluta af lýsingu sinni, þá er sjálfgefið Standard meðhöndlun fyrir öll ökutæki af stærð Stór og minni. Mjög stór og gríðarstór ökutæki hafa eðlislægt meðhöndlunina Formidable og Herculean, í sömu röð, og spilastjórnandanum er frjálst að úrskurða að ákveðnar hreyfingar séu einfaldlega ómögulegar vegna stærðar ökutækisins.

##### Tafla yfir stjórnmissi

| 1d100 | Niðurstaða |
| :-: | :-- |
| 01-25 | Sveigja. Stjórnmissirinn er tímabundinn. Ökutækið lækkar hraða sinn um 1 stig í 5 sekúndur. |
| 26-40 | Skrens. Ökumaður verður að berjast fyrir að halda ökutækinu undir stjórn. Ökutækið lækkar hraða um 2 stig í 10 sekúndur. |
| 41-50 | Alvarlegt skrens. Ökutæki endar með því að snúa í ranga átt og er kyrrstætt í 15 sekúndur. |
| 51-60 | Velta. Ökutæki skrensar og veltur, og hlýtur 3d10 skaða á heilsu. Farþegar verða að gera vel heppnuð þrek-köst eða hlotið 1d10 skaða á 1d3 líkamshluta. |
| 61-70 | Alvarleg velta. Eins og að ofan, en ökutæki hlýtur 3d10+10 skaða og farþegar fá 1d10 skaða jafnvel þótt þrek-kastið heppnist, og 2d10 ef það mistekst. |
| 71-80 | Afskrift. Eins og að ofan en ökutækið er komið niður í 0 heilsu. Farþegar hljóta sama skaða og við alvarlega veltu. |
| 81-90 | Sprenging. Eins og að ofan en eldsneytiskerfi ökutækisins kviknar og springur innan 1d20+10 sekúndna. Ef farþegar komast ekki í burtu, fá þeir 1d6 brunasár á 1d6 líkamshluta. |
| 91-98 | Skyndileg sprenging. Eins og að ofan en sprengingin er strax. |
| 99-00 | Hörmulegt hrun. Farþegar verða að standast þrek-kast eða deyja samstundis. Skaði eins og við Afskrift er hlotið óháð öllu. |

---
## Dæmi um ökutæki

---
### Jarðbundin ökutæki

#### Interceptor
Tuning-útgáfa af lúxusbíl, sportbíl eða álíka, þessi bíll er byggður til að fara hratt og gefa eins gott og hann fær í bardaga. Þetta er sú tegund ökutækis sem fólk hugsar um þegar einhver segir "njósnabíll."

| Interceptor | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs hernaðarlegur |
| **Skrokkur** | 6 |
| **Heilsa** | 40 |
| **Kerfi** | 2 |
| **Hraði** | Fast (fljótur) |
| **Meðhöndlun** | Easy |
| **Eiginleikar** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Olíubráð, reykvél, tvöfaldar miðlungs vélbyssur (2d6+3) |

---
#### Pursuit Motorcycle
Létt, hratt mótorhjól fyrir hraðar eltingar, Pursuit Motorcycle ber með sér óvart – annað hvort tvær tengdar vélbyssur eða tvær eldflaugar.

| Pursuit Motorcycle | |
| :- | :- |
| **Stærð / Gerð** | Lítill borgaralegur |
| **Skrokkur** | 2 |
| **Heilsa** | 12 |
| **Kerfi** | 1 |
| **Hraði** | Fast (fljótur) |
| **Meðhöndlun** | Easy |
| **Eiginleikar** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Tvær eldflaugar (4d6) eða tvöfaldar léttar vélbyssur (2d6) |

---
#### Sedan Car
Staðall 4-dyra bíll með nægu plássi fyrir ökumann og þrjá farþega. Fórnar farmrými til að fella inn njósnabúnað.

| Sedan Car | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs borgaralegur |
| **Skrokkur** | 4 |
| **Heilsa** | 25 |
| **Kerfi** | 2 |
| **Hraði** | Rapid (hraður) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Vopn** | Engin |

---
#### Submersible Car
Tveggja manna bíll sem getur skipt yfir í vatns- eða kafbátastillingu til að ferðast á eða undir vatni. Kemur með torpedo að framan og loftvarnarflaug að ofan.

| Submersible Car | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs borgaralegur |
| **Skrokkur** | 6 |
| **Heilsa** | 25 |
| **Kerfi** | 2 |
| **Hraði** | Fast (fljótur) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Eldflaug (5d6), Torpedo (4d10) |

---
#### Surveillance Van
Ómerktur sendibíll sem hýsir njósnateymi og hljóð- og myndbúnað.

| Surveillance Van | |
| :- | :- |
| **Stærð / Gerð** | Stór borgaralegur |
| **Skrokkur** | 9 |
| **Heilsa** | 60 |
| **Kerfi** | 3 |
| **Hraði** | Gentle (hóflegur) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Vopn** | Engin |

---
#### Tactical Support Vehicle
Pallbíll eða jeppi með plássi fyrir tveggja manna áhöfn í farþegarými og skotmann á pallinum sem stjórnar miðlungs vélbyssu.

| Tactical Support Vehicle | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs borgaralegur |
| **Skrokkur** | 6 |
| **Heilsa** | 30 |
| **Kerfi** | 2 |
| **Hraði** | Rapid (hraður) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Fest miðlungs vélbyssa (2d6) |

---
### Vatnsfarartæki

#### Speedboat
Dæmigerður hraðbátur, vopnaður sjálfvirkri mínuútkasti að aftan.

| Speedboat | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs borgaralegur |
| **Skrokkur** | 3 |
| **Heilsa** | 24 |
| **Kerfi** | 2 |
| **Hraði** | Fast (fljótur) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Vopn** | Mínuútkast (5d6) |

---
#### Yacht
Sú tegund lúxussnekkju sem auðkýfingur gæti átt. Líklega útbúin njósnabúnaði til að verjast óvinum.

| Yacht | |
| :- | :- |
| **Stærð / Gerð** | Mjög stór borgaralegur |
| **Skrokkur** | 10 |
| **Heilsa** | 75 |
| **Kerfi** | 4 |
| **Hraði** | Slow (hægur) |
| **Meðhöndlun** | Formidable |
| **Eiginleikar** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Vopn** | Engin |

---
### Flugför/Geimför

#### Dirigible (Loftskip)
Svipað og Hindenburg, þetta loftskip er 245 metrar á lengd og krefst 40 til 61 manns áhafnar. Það getur borið 50 til 72 farþega í lúxus.

| Dirigible | |
| :- | :- |
| **Stærð / Gerð** | Gríðarstór borgaralegur |
| **Skrokkur** | 10 |
| **Heilsa** | 85 |
| **Kerfi** | 5 |
| **Hraði** | Ponderous (þunglamalegur) |
| **Meðhöndlun** | Herculean |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | Engir |
| **Vopn** | Engin |

---
#### Assault Helicopter
Hefðbundin árásarþyrla notar háþróaða njósnatækni til að grípa merki og fylgjast með einstaklingum jafnvel í myrkri, með FLIR. Tilraunir til að forðast hana með "Stealth" eru Formidable.

| Assault Helicopter | |
| :- | :- |
| **Stærð / Gerð** | Stór hernaðarlegur |
| **Skrokkur** | 11 |
| **Heilsa** | 50 |
| **Kerfi** | 3 |
| **Hraði** | Moderate (meðal) |
| **Meðhöndlun** | Easy |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | Engir |
| **Vopn** | 1 Gatling-byssa (3d6), 4 eldflaugar (5d6) |

---
#### Multi-Role Fighter
Þessi tveggja manna orrustuþota er þekkt fyrir frammistöðu og fjölhæfni. Sprengju-rými hennar getur borið tvær 250 punda sprengjur eða eitt torpedo.

| Multi-Role Fighter | |
| :- | :- |
| **Stærð / Gerð** | Stór hernaðarlegur |
| **Skrokkur** | 10 |
| **Heilsa** | 45 |
| **Kerfi** | 3 |
| **Hraði** | Moderate (meðal) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Skildir** | Engir |
| **Vopn** | 4 Gatling-byssur (4d6+3), sprengjurými (6d10) |

---
#### Interstellar Freighter (Létt há-tækni flutningaskip)
Þetta flutningaskip krefst aðeins tveggja manna áhafnar og hefur pláss fyrir fjóra farþega til viðbótar. Hér er staðlaða útgáfan, en margir eigendur gera sínar eigin breytingar.

| Interstellar Freighter | |
| :- | :- |
| **Stærð / Gerð** | Miðlungs borgaralegt geimskip |
| **Skrokkur** | 10 |
| **Heilsa** | 80 |
| **Kerfi** | 2 |
| **Hraði** | Rapid (hraður, Parsec-þáttur 3) |
| **Meðhöndlun** | Standard |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skildir** | 8 |
| **Vopn** | 2x Quad-leysirturnar (5d6) |

---
#### General Contact Unit (Ofur-há-tækni geimskip)
Þetta geimskip er tveggja kílómetra löng röð eininga. Það þarf enga áhöfn, en getur stutt farþegafjölda allt að 100.000 manns.

| General Contact Unit | |
| :- | :- |
| **Stærð / Gerð** | Risastórt borgaralegt geimskip |
| **Skrokkur** | 20 |
| **Heilsa** | 10.000 |
| **Kerfi** | 6 |
| **Hraði** | Moderate (meðal, Parsec-þáttur 4 - 1 klukkustund) |
| **Meðhöndlun** | Formidable |
| **Eiginleikar** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft),[Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Skildir** | 30 |
| **Vopn** | Engin sem það vill ræða um |