# Ajoneuvot

_Mythras Imperative_ -pelin ajoneuvoja käsitellään puoliksi abstraktilla tavalla. Ne ovat lähinnä taustatyökaluja, joita käytetään hahmojen kuljettamiseen paikasta A paikkaan B, eikä niistä tarvita yksityiskohtaisia kuvauksia tai tilastoja. Joskus pelinjohtajat kuitenkin tarvitsevat ajoneuvojen yksityiskohtia, kun niitä on tarpeen kuvata takaa-ajoissa tai taistelutilanteissa.

Tämän osion säännöt mahdollistavat useimpien ajoneuvotyyppien esittämisen abstraktilla tavalla, jonka tarkoituksena on sallia joustavuus ja parantaa tarinankerrontaa. Tähtialukset ja avaruusalukset ovat hieman erilaisia, vaikka ne perustuvatkin samankaltaisiin periaatteisiin.

---
## Tilastot

Kaikki ajoneuvot kuvataan niiden Rakenteen, Rungon, Nopeuden, Järjestelmien, Ominaispiirteiden ja Suojien (jos asetelmassa on sellaisia) perusteella.

- **[Koko](0006_Vehicles.md?id=vehicle-size-table):** Kaikilla ajoneuvoilla on yksi kuudesta Kokoluokituksesta, joka määrittää muiden ominaisuuksien arvon tai vaihteluvälin. Tähtialuksilla on niiden suuremman luonnollisen koon ja avaruuden vihamielisten ympäristöjen vuoksi oma arvovälistönsä.
- **[Runko](0006_Vehicles.md?id=terrestrial-hulls):** Edustaa Panssaripisteitä.
- **[Rakenne](0006_Vehicles.md?id=terrestrial-hulls):** Edustaa ajoneuvon Osumapisteitä.
- **[Suojat](0006_Vehicles.md?id=shields):** Asetelmissa, joissa käytetään kehittynyttä energianhallintateknologiaa, voi olla ajoneuvoa suojaavia suojia, jotka saattavat heiketä jatkuvan tulituksen alla.
- **[Järjestelmät](0006_Vehicles.md?id=systems):** Edustavat ajoneuvon elintärkeitä komponentteja, mukaan lukien voimanlähde, miehistötilat ja niin edelleen.
- **[Nopeus](0006_Vehicles.md?id=speed):** Jokaisella ajoneuvolla on perustason Nopeusluokitus.
- **[Ominaispiirteet](0006_Vehicles.md?id=traits):** Ajoneuvolla voi olla myös yksi tai useampia Ominaispiirteitä. Ominaispiirteet, kuten _Mythras Imperative_ -sääntöjen olennoille määritetyt Kyvyt tai taistelutyylien piirteet, tarjoavat lisäkuvauksen ja pelillisiä etuja, jotka heijastavat ajoneuvon luonnetta.
- **[Aseet](0006_Vehicles.md?id=weapons):** Paljon kuten Ominaispiirteet, ajoneuvo voi olla varustettu aseilla asetelman salliessa. Jotkut ehdotetut esimerkit ja arvot on yksilöity alla.


---
### Rungon koko, tyyppi ja Rakenne

Ajoneuvon koko ja tarkoitus vaikuttavat sen rungon paksuuteen ja sisäisen rakenteen kestävyyteen. Esimerkiksi moottoripyörässä on minimaalinen runko, koska se on rakennettu nopeutta ja ketteryyttä varten. Land Ironclad (massiivinen, telaketjuilla tai pyörillä varustettu panssaroitu jättiläinen, joka toimii höyry- tai dieselmoottorilla), ollessaan paljon suurempi taistelukentälle suunniteltu ajoneuvo, on varustettu paljon suuremmalla rungolla. Rungon vertailukoot (ja kuinka monta aseen osumaa ne yleensä kestävät) on tiivistetty alla oleviin Ajoneuvon Koko- ja Runkotaulukoihin.

Aina kun ajoneuvo kärsii vahinkoa, saapuva vahinko vähennetään sen Rungon arvolla. Kaikki jäljelle jäävä vahinko vähennetään ajoneuvon Rakenne-pisteistä, ja sillä on läpäisevän vahingon suuruinen prosentuaalinen mahdollisuus vaikuttaa johonkin Järjestelmään. Jos ajoneuvon Rakenne laskee nollaan, se on joko täysin tuhoutunut tai niin pahoin vaurioitunut, että se on romutettava.

##### Maanpäälliset rungot 

| Koko | Rakenne | Siviilirungon arvo | Sotilasrungon arvo | Esimerkki |
| :-- | :-: | :-: | :-: | :-- |
| Pieni | 1-20 | 1-3 | 4-6 | Moottoripyörä, moottoripyörä sivuvaunulla, kompakti tai alikompakti auto, kanootti, kajakki, soutuvene |
| Keskikokoinen | 21-40 | 1-6 | 7-9 | Sedan, pakettiauto, lava-auto, luksusauto, luksusurheiluauto, muskeliauto, limusiini, pelastusvene, pikavene, riippuliidin, autogiro |
| Suuri | 41-60 | 4-9 | 10-12 | Kuorma-auto, venytetty limusiini, katumaasturi, bussi, tila-auto, henkilökohtainen lentokone, purjekone, huviristeilijä, panssarivaunu, helikopteri, sukellusvene |
| Valtava | 61-80 | 7-12 | 13-15 | Rekka, matkustajakone, suihkukone, rannikkovartioston alus, jahti |
| Jättiläismäinen | 81-100 | 10-15 | 16-18 | Juna, risteilyalus, sotalaiva |

##### Tähtialusten rungot 

| Koko | Rakenne | Siviilirungon arvo | Sotilasrungon arvo | Esimerkki |
| :-- | :-: | :-: | :-: | :-- |
| Pieni | 10-50 | 4-9 | 10-12 | Yhden hengen hävittäjä |
| Keskikokoinen | 51-150 | 7-12 | 13-15 | Kevyt rahtialus, sukkula |
| Suuri | 151-450 | 10-15 | 16-18 | Raskas rahtialus, risteilijä |
| Valtava | 451-1350 | 13-18 | 19-21 | Saattajafregatti, kevyt taisteluristeilijä |
| Jättiläismäinen | 1351-4050 | 16-21 | 21-24 | Siirtokunta-alus, raskas taisteluristeilijä |
| Kolossaalinen | 4050-12110 | 19-24 | 24-30 | Kiertorata-asema, planeettoja tuhoava taisteluasema |


---
### Suojat

Deflektorsuojat tarjoavat lisäsuojakerroksen niille ajoneuvoille, joihin sellaiset voidaan asentaa. Suojat toimivat hieman eri tavalla kuin Runko niiden ablatiivisen luonteen vuoksi. Jos saapuva vahinko on yhtä suuri tai pienempi kuin suojien arvo, se torjutaan kokonaan. Jos vahinko ylittää suojan arvon, ylimenevä osa vähentää suojan vahvuutta vastaavalla määrällä.

_Esimerkiksi joukkojenkuljetusajoneuvolla on 12 pisteen energiasuoja. Jos kuljetusajoneuvoon osuu laser, joka tekee 11 pistettä vahinkoa, se ei läpäise suojaa eikä aiheuta lisävaikutuksia. Jos taas kuljetusajoneuvoon osuu räjähdys, joka aiheuttaa 15 pistettä vahinkoa, ylijäävät kolme pistettä laskevat suojan vahvuuden 9:ään._

Kun deflektorsuojan vahvuus laskee nollaan, se romahtaa. Kaikki jäljelle jäävä vahinko siirtyy runkoon.

---
### Järjestelmät

Joka kerta, kun ajoneuvo kärsii vahinkoa, joka läpäisee sen rungon, on olemassa mahdollisuus, joka on yhtä suuri kuin läpäisevä vahinko, että jokin elintärkeä Järjestelmä on vaurioitunut.

_Esimerkiksi pikaveneeseen, jonka Runko on 3 ja Rakenne 24, kohdistuu 10 pisteen vahinko. Runko toimii panssarina, joka vähentää vahingon 7:ään. Tämä vähennetään 24 Rakenne-pisteestä, ja on 7 % mahdollisuus, että jokin ajoneuvon Järjestelmistä vaurioituu._

Vahinko, jonka Järjestelmä voi kestää, perustuu täysin ajoneuvon kokoon. Tätä mallinnetaan Järjestelmän kestämällä osumamäärällä, eikä varsinaisella vahinkopistemäärällä. Yksittäinen Järjestelmäosuma Pienessä ajoneuvossa tuhoaa kyseisen Järjestelmän välittömästi. Keskikokoisen ajoneuvon Järjestelmien tuhoaminen vaatii kaksi osumaa, Suuren ajoneuvon kolme, ja niin edelleen. Katso alla olevaa [Järjestelmävahinkotaulukkoa](0006_Vehicles.md?id=system-damage-table).

Järjestelmät, jotka ovat vaurioituneita, mutta eivät vielä tuhoutuneita, kärsivät toimintakyvyn heikkenemisestä suhteessa saatuihin osumiin – joko prosentuaalisena vähennyksenä tai vaikeusastelisänä Järjestelmän tehtäviin. Erityinen vaikutus perustuu siihen, mitä alijärjestelmä ohjaa, kuten on yksityiskohtaisesti esitetty alla olevassa [Järjestelmäkomponenttien vahinkotaulukossa](0006_Vehicles.md?id=system-component-damage-table). Riippuen siitä, mikä Järjestelmä osuu, vaikutukset voivat olla katastrofaalisia.

_Esimerkiksi Land Ironclad – Jättiläismäinen ajoneuvo, jolla on 5 Järjestelmäosumaa – joka saa kaksi osumaa vetolaitteistoon, menettäisi 40 % voimastaan ja pudottaisi alhaisen Nopeusluokkansa kahdella tasolla kömpelöksi. Vastaavasti Suuri rahtialus – 3 Järjestelmäosumaa – joka ottaa kaksi osumaa Moottori/Polttoaine-järjestelmään, saisi kahden tason rangaistuksen Nopeuteen sekä elektronisten järjestelmien käyttöön. Kolmas osuma tuhoaisi Moottori/Polttoaine-järjestelmän ja sen mukana aluksen._


<details>

<summary>* Yhteisön errata</summary>

---

#### Vahinko


_Alkuperäinen teksti tässä kohtaa oli alun perin kauempana. Järjestelmät-osion jälkeen se toisti edeltävää kappaletta tarpeettomasti._

- _"Runkoon kohdistuva vahinko, joka ylittää sen arvon, läpäisee ajoneuvon, vaurioittaen Rakennetta ja mahdollisesti vaikuttaen yhteen tai useampaan järjestelmään. Ajoneuvon koosta riippuen vahinko voi olla vähäistä tai katastrofaalista._
- _Esimerkiksi Suuri ajoneuvo voi ottaa jopa kaksi osumaa Järjestelmään, kuten vetolaitteistoon. Kolmas osuma tuhoaa vetolaitteiston toimintakyvyn. Joka kerta, kun järjestelmä ottaa osuman, se joko menettää prosenttiosuuden toiminnastaan alla olevan Järjestelmävahinkotaulukon "Loss per Hit" -sarakkeen mukaisesti tai ydintoiminto (kuten ajo, ohjaus, viestintä jne.) vaikeutuu yhdellä Vaikeusasteella jokaista saatua osumaa kohden."_

_Yllä olevat kappaleet on poistettu ja tilalle on lisätty lyhennetty muokkaus, joka mainitsee toisen esimerkin järjestelmävaikutuksesta._

---

</details>

##### Järjestelmävahinkotaulukko 

| Koko | Järjestelmäosumat | Häviö per osuma |
| :-- | :-: | :-- |
| Pieni | 1 | 100 % - Tuhoutunut |
| Keskikokoinen | 2 | 1 taso tai 50 % |
| Suuri | 3 | 1 taso tai 33 % |
| Valtava | 4 | 1 taso tai 25 % |
| Jättiläismäinen | 5 | 1 taso tai 20 % |
| Kolossaalinen | 6 | 1 taso tai 16 % |


<details>

<summary>* Yhteisön errata</summary>

---

##### Järjestelmävahinkotaulukko (Alkuperäinen) 

| Koko | Järjestelmäosumat | Häviö per osuma |
| :-- | :-: | :-- |
| Pieni | 1 | 1 taso tai 50 % |
| Keskikokoinen | 2 | 1 taso tai 33 % |
| Suuri | 3 | 1 taso tai 25 % |
| Valtava | 4 | 1 taso tai 20 % |
| Jättiläismäinen | 5 | 1 taso tai 16 % |
| Kolossaalinen | 6 | 1 taso tai 10 % |

##### Ajoneuvon Kokotaulukko (osiosta [Rungon koko, tyyppi ja Rakenne](0006_Vehicles.md?id=hull-size-type-and-structure))

| Koko | Järjestelmäosumat |
| :-- | :-: |
| Pieni | 1 |
| Keskikokoinen | 2 |
| Suuri | 3 |
| Valtava | 4 |
| Jättiläismäinen | 5 |
| Kolossaalinen | 6 |

_Alkuperäiset säännöt ja esimerkit ovat ristiriidassa:_
- _"Järjestelmät, jotka ovat vaurioituneita, mutta eivät tuhoutuneita, kärsivät toimintakyvyn häviöstä. Tämä on yhtä suuri kuin nykyisten osumien suhde järjestelmän kokonaiskapasiteettiin. Siten Jättiläismäinen ajoneuvo, joka saa kaksi osumaa vetolaitteistoon, menettäisi 40 % voimastaan (2 osumaa 5:n maksimista)"._ 
   - _Tämä viittaa siihen, että 5 Järjestelmäosumaa omaavan Jättiläismäisen ajoneuvon tulisi menettää 20 % jokaisella osumalla – mutta taulukko sanoo 16 %._
- _"Esimerkiksi Suuri ajoneuvo voi ottaa jopa kolme osumaa järjestelmään, kuten vetolaitteistoon. Neljäs osuma tuhoaa järjestelmän toimintakyvyn."_ 
  - _"Tämä viittaa – kuten taulukkokin – 25 % vahinkoon per Järjestelmäosuma, mutta Suuret ajoneuvot voivat ottaa vain 3 Järjestelmäosumaa saman taulukon mukaan._
- _Vaikka Ajoneuvon Kokotaulukko ei ole ristiriitainen, se oli tarpeeton; se ilmestyi uudelleen täydellisemmässä muodossa (lisäten Häviö per osuma -sarakkeen) vain muutamaa riviä myöhemmin._

_Tämä tekee johdonmukaisen säännön noudattamisesta vaikeaa. Näiden ongelmien ratkaisemiseksi arvoja ja esimerkkejä on muutettu vastaamaan toisiaan ja Ajoneuvon Kokotaulukko on poistettu._

---

</details>


##### Järjestelmäkomponenttien vahinkotaulukko 

| 1d10 | Järjestelmä | Vaurioitunut tulos | Tuhoutunut tulos |
| :-: | :-- | :-- | :-- |
| 1 | Rahti | Ruumaan varastoitua omaisuutta tai laitteistoa tuhoutuu vahinkoa vastaava määrä. | Kaikki rahti tuhoutuu. |
| 2 | Viestintä | Viestintäheitot vaikeutuvat yhdellä ylimääräisellä Vaikeusasteella jokaisella vaurioitumiskerralla. | Ajoneuvo ei voi enää viestiä tai häiritä vihollisen sensoreita. |
| 3 | Ohjaus | Veneily-, Ajo- tai Pilottiheitot vaikeutuvat yhdellä ylimääräisellä Vaikeusasteella jokaisella vaurioitumiskerralla; välitön Hallintaheitto vaaditaan. | Ajoneuvoa ei voi enää ohjata tai kääntää. |
| 4 | Vetolaite | Nopeus laskee vahinkoa vastaavalla määrällä. | Ajoneuvo pysähtyy täysin; lentokoneet syöksyvät maahan. |
| 5 | Miehistö | Vahinkoa vastaava määrä matkustajia haavoittuu. Vaikutuksen alaiset kärsivät Vakavan Vamman ja heidän on onnistuttava Kestävyysheitossa tai he kuolevat välittömästi. | Ajoneuvon matkustajat kuolevat. |
| 6 | Moottori / Polttoaine | Nopeus laskee vahinkoa vastaavalla määrällä. Elektronisten järjestelmien käyttö vaikeutuu yhdellä Vaikeusasteella. | Ajoneuvo tuhoutuu katastrofaalisessa räjähdyksessä. |
| 7 | Sensorit | Sensori-, Navigointi- ja Asehyökkäysheitot vaikeutuvat yhdellä ylimääräisellä Vaikeusasteella jokaisella vaurioitumiskerralla. | Ajoneuvo sokaistuu. |
| 8 | Aseet | Vahinkoa vastaava määrä asejärjestelmiä lakkaa toimimasta. | Ajoneuvo ei voi enää käyttää aseitaan. |
| 9-0 | Ei mitään | Ei järjestelmäosumia; vain Rakennevauriota. | Ei sovellettavissa |

<details>

<summary>* Yhteisön errata</summary>

---

##### Järjestelmäkomponenttien vahinkotaulukko (Moottori/Polttoaine)

_Alkuperäinen tulos oli seuraava: "Maksiminopeus puolittuu..." Tämä on ristiriidassa järjestelmävahinkojen suhteellisten rangaistusten yleissäännön kanssa: 25 % vahinko = 25 % rangaistus. Lisäksi Mythras Companionin täydelliset säännöt eivät mainitse tätä nopeuden puolittumista._

_Tämän seurauksena teksti on korvattu samalla merkinnällä kuin Vetolaite-järjestelmissä: "Nopeus laskee vahinkoa vastaavalla määrällä."_

---

</details>


---
### Nopeus

Koska nopeuden, kiihtyvyyden, ilmanvastuksen ja inertian fysiikka (muutamia mainitakseni) ovat monimutkaisia asioita, tarvitaan yksinkertaistamista, joten ajoneuvoille annetaan abstrakti nopeusluokitus. Nopeusominaisuutta tulisi käyttää vain karkeasti arvioimaan, voiko yksi ajoneuvo ohittaa toisen tai saada sen kiinni.

Nopeusluokitus edustaa ajoneuvon nimellistä toimintanopeutta. Hätätilanteissa tätä suorituskykyä voidaan nostaa yhdellä askeleella, mutta se lisää moottoreiden kulumisen tai vaurioitumisen riskiä. Vaikka kaikille ajoneuvotyypeille käytetään samaa taulukkoa, tervettä järkeä tulee käyttää siten, että verrataan vain saman luokan ajoneuvoja. Esimerkiksi, jos Tähtialuksella ja urheiluautolla on sama kiihtyvyysarvo (Nopea), on selvää, että avaruusalus on suhteellisesti nopeampi.

Ajoneuvon Nopeuden nostaminen standardiarvon yli on mahdollista onnistuneella Ajo-heitolla. Yleensä tämä lisänopeus on kestävää vain lyhyen aikaa – enintään 1d6 minuuttia, jonka jälkeen ajoneuvon on palattava vakionopeuteen tai riskoitava voimanlähteen vaurioituminen. Kriittinen Ajo-heitto sallii korkeamman nopeuden keston pidentämisen 1d12 minuuttiin.

Kuljettaja voi yrittää nostaa ajoneuvon nopeutta 2 askeletta, mutta tämä vaatii Huraakelimaisen Ajo-heiton ja ajoneuvo voi ylläpitää tätä nopeutta enintään 1d3 minuuttia: Kriittinen onnistuminen ei pidennä lisänopeuden kestoa.

##### Nopeusluokitustaulukko 

| Nopeusluokitus | Maksiminopeus |
| :-- | :-: |
| Kömpelö | Jättiläismäinen |
| Hidas | |
| Verkkainen | Valtava |
| Keskinkertainen | |
| Rauhallinen | Suuri |
| Kohtuullinen | |
| Nopea | Keskikokoinen |
| Kiihtyvä | |
| Huippunopea | Pieni |


---
### Ominaispiirteet

Ajoneuvon sisältämien ominaispiirteiden maksimimäärä riippuu rungon koosta ja tyypistä.

Jokaisella ajoneuvolla on luontainen ominaispiirre: kulkutapa, jota varten se on ensisijaisesti suunniteltu. Siksi lentokoneilla on luontaisesti Ilmassa-ominaisuus, veneillä Merikelpoinen-ominaisuus ja niin edelleen. Tämä luontainen ominaispiirre ei lasketa mukaan käytettävissä olevaan ominaispiirteiden määrään. Jos kuitenkin ajoneuvo sisältää toisen kulkutavan – esimerkiksi lentävä sukellusvene – Ilmassa-ominaisuus on valittava yhdeksi sen käytettävissä olevista ominaispiirteistä.

Jotkut ominaispiirteet eivät ehkä ole käytettävissä asetelman teknologiatasosta riippuen; Pelinjohtajien on tehtävä omat harkintansa siitä, mitä ominaispiirteitä voidaan soveltaa.

##### Ajoneuvon ominaispiirteiden jakotaulukko 

| Koko | Maksimiominaisuudet |
| :-- | :-: |
| Pieni | 1 |
| Keskikokoinen | 2 |
| Suuri | 3 |
| Valtava | 4 |
| Jättiläismäinen | 5 |
| Kolossaalinen | 6 |

#### Ilmassa

Ajoneuvo kykenee lentämiseen ilmakehässä.

#### Maastokelpoinen

Tätä ominaispiirrettä on käytettävä Maanpäällisissä ajoneuvoissa. Ajoneuvo voi ylittää epäsuotuisaa, vaikeaa ja jyrkkää maastoa käyttäen telaketjuja, kehittynyttä jousitusta ja vetojärjestelmiä tai tehokkaita tasauspyörästöjä.

#### Kaivautuva

Ajoneuvo on suunniteltu kaivautumaan ja tunneloimaan maan alla. Se voi saavuttaa maksimisyvyyden, joka on Rungon arvo x 5 metriä.

#### Naamioitu

Ajoneuvossa on joko naamiointimaali tai miimiset sensorit, joiden avulla se sulautuu ympäristöönsä. Ajoneuvon havaitseminen visuaalisesti on yhden vaikeustason vaikeampaa.

#### Rahtialus

Ajoneuvo on suunniteltu erityisesti rahdin eikä matkustajien kuljettamiseen. Matkustajatilat on pidetty minimissä, ja loput ajoneuvon hyötytilasta on omistettu rahdin kuljettamiseen asianmukaisilla osastoilla, työkaluilla ja jopa ilmastointijärjestelyillä (kuten pakastinosastoilla pilaantuvien tuotteiden kuljettamiseksi). Rahtia kuljetettaessa ajoneuvon nopeus on kaksi askelta alempi kuin sen runkokoko normaalisti sallisi.

#### Kantoalus

Ajoneuvo on suunniteltu erityisesti kuljettamaan pienempiä, kevyesti miehitettyjä tai mahdollisesti kauko-ohjattuja siviili- tai sotilasajoneuvoja. Jokaisen tätä ominaispiirrettä kantavan ajoneuvon on oltava vähintään Jättiläismäinen. Pienten alusten määrä voi vaihdella tehtävän tyypin ja tarkoituksen mukaan, mutta se voi olla pienimmillään 10 ja suurimmillaan ajoneuvon Rakenne-arvon verran.

#### Rakennusajoneuvo

Ajoneuvo on varustettu raskaisiin rakennustöihin. Kaikilla tämän ominaispiirteen omaavilla ajoneuvoilla on myös Maastokelpoinen-ominaisuus, mutta nopeus on kaksi askelta alempi kuin niiden runkokoko normaalisti sallisi. Ajoneuvo on varustettu tehtävään sopivilla työkaluilla, kuten nosturin puomeilla, kaivinkoneen kauhoilla, kippilavoilla ja niin edelleen.

#### EMP-kestävä

Ajoneuvo on suojattu sähkömagneettisia pulsseja vastaan.

#### Parannettu suorituskyky

Ajoneuvon Nopeusluokitus on yhden askeleen korkeampi kuin sen kokoluokan maksimi.

#### Heittoistuin

Hätätilanteessa heittoistuin sinkoaa matkustajat useita satoja metrejä ilmaan, minkä jälkeen avautuu laskuvarjo turvallista laskeutumista varten. Laskuvarjo on valinnainen. Ei suositella helikoptereille (Kamov Ka-52 Alligator on tästä merkittävä poikkeus).

#### FTL

Vain avaruusalukset. Alus on varustettu valoa nopeammalla moottorilla (olipa kyseessä hyperajo, poimuajo, madonreikägeneraattori tai vastaava). FTL-ajolla on erillinen Nopeusluokitus, joka mittaa periaatteessa nopeutta, jolla tähtialus ylittää yhden parsekin (3,26 valovuotta, eli 31 biljoonaa kilometriä tai 19 biljoonaa mailia), seuraavasti:

##### FTL-nopeusluokitustaulukko 

| Nopeusluokitus | Kerroin 1 parsekin ylittämiseen |
| :-- | :-: |
| Kömpelö | 10 |
| Hidas | 8 |
| Verkkainen | 7 |
| Keskinkertainen | 6 |
| Rauhallinen | 5 |
| Kohtuullinen | 4 |
| Nopea | 3 |
| Kiihtyvä | 2 |
| Huippunopea | 1 |

Ajan kerroin on Pelinjohtajan päätettävissä riippuen siitä, kuinka kehittynyttä asetelman FTL-kehitys on. Esimerkiksi peruskerroin voi olla 1 päivä, mikä tarkoittaa, että alus, jolla on Kömpelö FTL-ajo, käyttää matkaan 10 päivää, kun taas alus, jolla on Huippunopea FTL-ajo, suorittaa matkan yhdessä päivässä. Muualla, missä FTL-teknologia on huomattavasti vähemmän tehokasta, kerroinaika voidaan mitata kuukausissa päivien sijaan.

Oletetaan, että aluksella on polttoainevarannot paluumatkaa varten tai keino tankata määränpäässä.

Oletetaan, että kaikenkokoiset tähtialukset voidaan varustaa FTL-ajolla, vaikka tämäkin riippuu asetelmasta.

FTL-ajoa ei voi aktivoida 1,5 tähtitieteellisen yksikön (AU) sisäpuolella tähdestä (noin 225 miljoonaa kilometriä). Tämä tarkoittaa, että alusten on käytettävä alivalonnopeusajoa siirtyäkseen noin Marsin etäisyydelle ennen FTL-järjestelmän aktivoimista.

#### Maanpäällinen ajoneuvo

Ajoneuvo kykenee matkustamiseen maata pitkin.

#### Leijunta

Ajoneuvo leijuu maanpinnan yläpuolella joko ilmatyynyn tai antigravitaatiorepulsorin avulla.

#### Ylellinen

Ajoneuvo on suunniteltu erityisesti matkustajien kuljettamiseen tietyllä luksustasolla. Ylimääräinen rahtitila on muutettu ylellisiksi matkustajatiloiksi, uima-altaiksi, porealtaiksi, ylimääräiseksi miehistöksi matkustajien oikkujen palvelemiseksi ja niin edelleen.

#### Kiskot

Ajoneuvo luottaa kiskojärjestelmään. Tämän ominaispiirteen omaavat ajoneuvot voivat luonnostaan saavuttaa kolme askelta korkeamman Nopeusluokituksen kuin niiden runkokoko normaalisti sallisi, mutta ne on ilmeisistä syistä rajoitettu liikkumaan vain kiskojärjestelmässä.

#### Kestävä

Kaikki järjestelmät kestävät yhden lisäosuman enemmän kuin koon perusteella on määritetty. Tätä ominaispiirrettä voidaan pinota – joten Kestävä 2 tarkoittaa, että järjestelmät kestävät 2 osumaa tavallista enemmän kahden Ominaispiirrepisteen hinnalla.

#### Merikelpoinen

Ajoneuvo pysyy pinnalla vedessä.

#### Avaruusalus

Ajoneuvo on tiivistetty tyhjiötä vastaan ja suojattu kosmiselta säteilyltä, ja se voi suunnittelusta riippuen kyetä poistumaan ilmakehästä ja palaamaan sinne sekä ylläpitämään lentoa ilmakehän sisällä.

#### Stealth

Vain lentokoneet. Ajoneuvo on suunniteltu välttämään tutkien ja muiden pitkän kantaman sensorijärjestelmien havaintoja. Ajoneuvon havaitseminen elektronisilla sensoreilla on yhden vaikeustason vaikeampaa.

#### Sukelluskykyinen

Ajoneuvo kykenee sukeltamaan meren pinnan alle toimintasyvyyteen, joka on Rungon arvo x 10 metriä. Romahdussyvyys – absoluuttinen maksimi, jonka sukellusalus voi saavuttaa murskautumatta – on 1,5 kertaa sen toimintasyvyys.

#### Ylivertainen ohjattavuus

Ajoneuvon ohjattavuusluokitus on Helppo.

#### Valvontapaketti

Ajoneuvossa on sisäänrakennettu tietokone, viestintätukiasema, vastaanotin kuuntelulaitteiden signaaleille ja laitteisto lähellä olevien älypuhelinsignaalien kaappaamiseen 100 metrin säteellä.#### Kestävä (Tough)

Tämän piirteen omaava siviiliajoneuvo ammentaa Runkonsa (Hull) sotilasajoneuvojen sarakkeesta ja sillä on automaattisesti maksimirakenne (Structure). Sotilasajoneuvo, jolla on tämä piirre, ammentaa Runkonsa ja Rakenteensa seuraavalta alemmalta riviltä.

#### Vetosäde (Tractor Beam)

Vain avaruusalukset. Alus on varustettu vetosäteellä, joka voi vangita ja vetää luokseen ajoneuvoja, joiden runkoluokitus on enintään kaksi askelta omaa alusta pienempi. Siten jättimäinen (Huge) tähtialus voisi vetää ja pidellä enintään keskikokoista (Medium) runkoa.

#### VTOL

Pystysuora nousu/lasku (Vertical takeoff/landing). Tämä piirre on luontainen helikoptereille ja vastaaville ajoneuvoille, jotka käyttävät roottorien yhdistelmää nosteen tuottamiseen. Kiinteäsiipisiin ilma-aluksiin sovellettuna se tarkoittaa kiinteiden tai suunnattavien suihkumoottorien käyttöä ilmassa tapahtuvan asennon, nousun ja laskun hallintaan.

#### Kävelevä (Walker)

Ajoneuvo liikkuu nivellettyjen jalkojen avulla. Kävelevien ajoneuvojen nopeus on rajoitettu "Gentle"-tasolle, koosta (Size) riippumatta. Käveleviä ajoneuvoja voidaan kuitenkin rakentaa korkeuksille, jotka olisivat epävakaita muilla liikkumistavoilla varustetuille ajoneuvoille.

#### Vedessä kulkeva (Waterborne)

Tämä ajoneuvo kykenee liikkumaan veden alla.

#### Aseistettu (Weaponized)

Ajoneuvo on mukautettu aseistuksen majoittamiseen. Asejärjestelmiä käsitellään alla [Aseet](0006_Vehicles.md?id=weapons) -osiossa.

---
## Aseet

Yleensä vain sotilaskäyttöön tarkoitetut rungot on suunniteltu aseistuksen (kiinnityspisteet, ammusvarastot, ohjausjärjestelmät) majoittamiseen. "Aseistettu" (Weaponized) -piirre voidaan valita siviiliajoneuvoille, joilla saattaa olla tarvetta aseistukselle.

Ajoneuvon tukemien asejärjestelmien maksimimäärä on 1/10 sen Rakenne-pisteistä (eli ajoneuvo, jolla on 40 Rakenne-pistettä, voisi tukea 4 asejärjestelmää, mikäli kyseessä on sotilasajoneuvo tai aseistettu siviiliajoneuvo).

Asejärjestelmät riippuvat ajoneuvon Koosta (Size). Eri kokoluokkien suurimmat asejärjestelmätyypit on esitetty alla olevissa taulukoissa.

##### Aseet koon mukaan -taulukko

| Koko (Size) | Maastoajoneuvot | Avaruusalukset |
| :-- | :-- | :-- |
| Pieni (Small) | Kevyt ase (esim. rynnäkkökivääri) | Keskikokoinen ase (esim. konekivääri, raketinheitin) |
| Keskikokoinen (Medium) | Keskikokoinen ase (esim. konekivääri, raketinheitin) | Tykkitorni/Raskas ase (esim. raskaat linkitetyt konekiväärit, minigunit) |
| Suuri (Large) | Tykkitorni/Raskas ase (esim. raskaat linkitetyt konekiväärit, minigunit) | Asepatteristo (esim. taistelukenttätykistö) |
| Jättimäinen (Huge) | Asepatteristo (esim. taistelukenttätykistö) | Kehittyneet aseet (esim. ohjusjärjestelmät) |
| Valtava (Enormous) | Kehittyneet aseet (esim. ohjusjärjestelmät) | Rungon sisäiset aseet (vain yksi) |
| Kolossaalinen (Colossal) | NA | Rungon sisäiset aseet (enintään 3) |

##### Esimerkkejä aseiden tilastoista

| Ase | Vahinko | Kantama | Tulinopeus | Ammukset/Lataus |
| :-- | :-: | :-: | :-: | :-: |
| 50 tuuman tykki | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigun/Gatling-tykki | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketti | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Keskikokoinen ohjus/torpedo | 6d10 | Max kantama 200km | 1 | 1/5 |
| Suuri ohjus/risteilyohjus | 6d10+10 | Max kantama 1000km | 1 | 1/10 |
| Laser/Plasmakanuuna | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Raskas Laser/Plasmakanuuna | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Tykistöpatteristo | 5d6+6 | Max kantama 50km | 1 | 1/5 |
| Rungon sisäinen patteristo | 10d6+6 | Max kantama 20000km | 1 | 1/10 |

_Kantamat on annettu metreinä ja kilometreinä._

_Tulinopeudet on annettu kertatulelle, puoliautomaatille ja sarjatulelle._

_Ammukset tarkoittavat tulituskykyä ennen tarvetta uudelleenlataukseen. Lataus on uudelleenlatausaika taistelukierroksina, olettaen että täysi miehistö on käytettävissä._

---
## Hallinta ja ohjailu

Väistöliikkeet tai äkilliset manööverit vaativat onnistuneen Ajo/Ohjaus (Drive/Pilot) -heiton, jotta kuljettaja tai lentäjä säilyttää ajoneuvon hallinnan. Useimmat ajoneuvot on suunniteltu ja rakennettu kestämään satunnaisia rasituksia, mutta pelinjohtaja voi päättää, että tietty manööveri vaatii vaikeusasteeltaan korkeamman heiton, riippuen siitä kuinka haastava se on. Epäonnistuminen tarkoittaa ajoneuvon hallinnan menetystä: heitä Hallinnan menetys -taulukkoa.

Huomioi, että Hallinnan menetys -taulukko koskee vain maastoajoneuvoja. Samankaltaisia vaikutuksia voidaan soveltaa ilma- ja avaruusaluksiin, mutta pelinjohtajien on säädettävä perusteluja kyseiselle vaikutukselle. Esimerkiksi lentokone saattaa luisun sijasta joutua kierteeseen.

Lisäksi ajoneuvon luontainen käsiteltävyys voi vaikuttaa Ajo-heittoon. Käsiteltävyys on joko Helppo (Easy), Normaali (Standard), Vaikea (Hard), Muodollinen (Formidable) tai Herkuleeninen (Herculean), ja se määrittää Ajo-heiton aloituspisteen manööveriä suoritettaessa. Manööverin vaikeusaste lisätään sitten käsiteltävyyteen lopullisen vaikeuden määrittämiseksi.

Esimerkiksi suorituskykyisessä moottoripyörässä on sisäänrakennetut gyrostabilisaattorit, joiden ansiosta sen käsiteltävyys on Helppo. Kuljettaja haluaa tehdä 180 asteen luisukäännöksen paetakseen takaa-ajajaa; manööveri, jonka pelinjohtaja arvioi yhden vaikeusasteen verran haastavaksi. Kuljettajan on siis tehtävä Ajo-heittonsa Normaalilla vaikeustasolla Helpon sijaan. Jos hän olisi yrittänyt samaa manööveriä stabiloimattomalla moottoripyörällä, Ajo-heitto olisi ollut Vaikea.

Ylivertainen käsiteltävyys (Superior Handling) on piirre. Jos ajoneuvolla ei ole kyseistä piirrettä kuvauksessaan, oletuksena on Normaali käsiteltävyys kaikille Suuri-kokoisille (Large) ja sitä pienemmille ajoneuvoille. Jättimäisillä (Huge) ja Valtavilla (Enormous) ajoneuvoilla on luonnostaan Muodollinen ja Herkuleeninen käsiteltävyys, ja pelinjohtajalla on vapaus päättää, että tietyt manööverit ovat yksinkertaisesti mahdottomia suorittaa ajoneuvon koon vuoksi.

##### Hallinnan menetys -taulukko

| 1d100 | Tulos |
| :-: | :-- |
| 01-25 | Heilahdus. Hallinnan menetys on väliaikaista. Ajoneuvon nopeus laskee 1 askeleen 5 sekunnin ajaksi. |
| 26-40 | Luisu. Kuljettajan on taisteltava ajoneuvon hallinnan säilyttämiseksi. Ajoneuvon nopeus laskee 2 askeleen 10 sekunnin ajaksi. |
| 41-50 | Vakava luisu. Ajoneuvo päätyy väärään suuntaan ja pysähtyy 15 sekunniksi. |
| 51-60 | Pyörähdys. Ajoneuvo luisuu ja pyörähtää ympäri, kärsien 3d10 vahinkoa Rakenteeseensa. Matkustajien on heitettävä onnistunut Kestävyys (Endurance) -heitto tai he kärsivät 1d10 vahinkoa 1d3 osumakohtaan. |
| 61-70 | Vakava pyörähdys. Kuten yllä, mutta ajoneuvo kärsii 3d10+10 vahinkoa ja matkustajat vastaanottavat 1d10 vahinkoa, vaikka Kestävyys-heitto onnistuisi, ja 2d10 jos se epäonnistuu. |
| 71-80 | Romutus. Kuten yllä, mutta ajoneuvon Rakenne laskee 0:aan. Matkustajat kärsivät saman vahingon kuin Vakavassa pyörähdyksessä. |
| 81-90 | Räjähdys. Kuten yllä, mutta ajoneuvon polttoainejärjestelmä syttyy ja räjähtää 1d20+10 sekunnin kuluessa. Jos matkustajat eivät ehdi poistua, he kärsivät lisäksi 1d6 palovahinkoa 1d6 kohtaan. |
| 91-98 | Välitön räjähdys. Kuten yllä, mutta räjähdys tapahtuu välittömästi. |
| 99-00 | Katastrofaalinen onnettomuus. Matkustajien on heitettävä onnistunut Kestävyys-heitto tai he kuolevat välittömästi. Romutuksen mukainen vahinko kärsitään joka tapauksessa. |

---
## Esimerkkiajoneuvoja

---

### Maastoajoneuvot

#### Interceptor

Viritetty luksusauto, urheiluauto tai vastaava; tämä auto on rakennettu nopeaan kulkuun ja taistelutilanteissa pärjäämiseen. Tämä on sellainen ajoneuvo, jonka ihmiset mieltävät "vakooja-autoksi".

| Interceptor | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen sotilasajoneuvo |
| **Runko** | 6 |
| **Rakenne** | 40 |
| **Järjestelmät** | 2 |
| **Nopeus** | Nopea (Fast) |
| **Käsiteltävyys** | Helppo |
| **Piirteet** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Aseistus** | Öljyläiskän levitin, savuverhon levitin, kaksi linkitettyä keskikokoista konekivääriä (2d6+3) |

<br>

---

#### Takaa-ajomoottoripyörä (Pursuit Motorcycle)

Kevyt, nopea moottoripyörä nopeisiin takaa-ajoihin; takaa-ajomoottoripyörässä on yllätys – joko pari linkitettyjä konekiväärejä tai kaksi rakettia.

| Takaa-ajomoottoripyörä | |
| :- | :- |
| **Koko / Tyyppi** | Pieni siviiliajoneuvo |
| **Runko** | 2 |
| **Rakenne** | 12 |
| **Järjestelmät** | 1 |
| **Nopeus** | Nopea (Fast) |
| **Käsiteltävyys** | Helppo |
| **Piirteet** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Aseistus** | Kaksi rakettia (4d6) tai kaksi linkitettyä kevyttä konekivääriä (2d6) |

<br>

---

#### Sedan-auto

Standardi 4-ovinen sedan, jossa on tilaa mukavasti kuljettajalle ja kolmelle matkustajalle. Uhraa tavaratilaa valvontajärjestelmän mahduttamiseksi.

| Sedan-auto | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen siviiliajoneuvo |
| **Runko** | 4 |
| **Rakenne** | 25 |
| **Järjestelmät** | 2 |
| **Nopeus** | Rapid |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Aseistus** | Ei mitään |

<br>

---

#### Sukellusauto (Submersible Car)

Kaksipaikkainen auto, joka voi vaihtaa vesillä kulkevaan tai sukellustilaan matkustaakseen veden päällä tai alla. Mukana eteen asennettu torpedo ja katolle asennettu ilmatorjuntaohjus.

| Sukellusauto | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen siviiliajoneuvo |
| **Runko** | 6 |
| **Rakenne** | 25 |
| **Järjestelmät** | 2 |
| **Nopeus** | Nopea (Fast) |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Aseistus** | Raketti (5d6), Torpedo (4d10) |

<br>

---

#### Valvontapakettiauto (Surveillance Van)

Tavallinen, merkitsemätön pakettiauto, joka majoittaa agenttiryhmän ja audiovisuaalisen tallennuslaitteiston.

| Valvontapakettiauto | |
| :- | :- |
| **Koko / Tyyppi** | Suuri siviiliajoneuvo |
| **Runko** | 9 |
| **Rakenne** | 60 |
| **Järjestelmät** | 3 |
| **Nopeus** | Gentle |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Aseistus** | Ei mitään |

<br>

---

#### Taktinen tuki-ajoneuvo

Avolava-auto tai jeep, jossa on tilaa kahden hengen miehistölle ohjaamossa ja lavalla seisovalle ampujalle, joka käyttää kääntyvää, keskiraskasta konekivääriä.

| Taktinen tuki-ajoneuvo | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen siviiliajoneuvo |
| **Runko** | 6 |
| **Rakenne** | 30 |
| **Järjestelmät** | 2 |
| **Nopeus** | Rapid |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Aseistus** | Asennettu keskikokoinen konekivääri (2d6) |

<br>

---

### Vesikulkuneuvot

#### Pikavene

Tyypillinen pikavene, aseistettuna takaosan miinanlevittimellä.

| Pikavene | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen siviiliajoneuvo |
| **Runko** | 3 |
| **Rakenne** | 24 |
| **Järjestelmät** | 2 |
| **Nopeus** | Nopea (Fast) |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Aseistus** | Miinanlevitin (5d6) |

<br>

---

#### Jahti

Sellainen luksusjahti, jonka oligarkki saattaisi omistaa. Todennäköisesti varustettu valvontajärjestelmällä suojautumaan vihollisilta, jotka yrittävät juonia pahaa.

| Jahti | |
| :- | :- |
| **Koko / Tyyppi** | Jättimäinen siviiliajoneuvo |
| **Runko** | 10 |
| **Rakenne** | 75 |
| **Järjestelmät** | 4 |
| **Nopeus** | Hidas (Slow) |
| **Käsiteltävyys** | Muodollinen |
| **Piirteet** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Aseistus** | Ei mitään |

<br>

---

### Ilma-alukset/Avaruusalukset

#### Ilmalaiva (Dirigible)

Hindenburgin kaltainen, tämä mannertenvälisten ilmalaivojen luokka (ja muut vastaavat) on 245 metriä pitkä ja vaatii 40–61 hengen miehistön. Se kykenee yleensä kuljettamaan 50–72 matkustajaa luksustiloissa.

| Ilmalaiva | |
| :- | :- |
| **Koko / Tyyppi** | Valtava siviiliajoneuvo |
| **Runko** | 10 |
| **Rakenne** | 85 |
| **Järjestelmät** | 5 |
| **Nopeus** | Ponderous |
| **Käsiteltävyys** | Herkuleeninen |
| **Piirteet** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Suojakentät** | Ei mitään |
| **Aseistus** | Ei mitään |

<br>

---

#### Rynnäkköhelikopteri

Perinteinen rynnäkköhelikopteri käyttää edistynyttä valvontateknologiaa puhelin- ja langattomien internetsignaalien sieppaamiseen sekä yksilöiden ja ajoneuvojen seurantaan jopa pimeässä, FLIR-lämpökameran avulla. Yritykset välttää seurantaa hiipimällä (Stealth) ovat Muodollisen vaikeustason takana.

| Rynnäkköhelikopteri | |
| :- | :- |
| **Koko / Tyyppi** | Suuri sotilasajoneuvo |
| **Runko** | 11 |
| **Rakenne** | 50 |
| **Järjestelmät** | 3 |
| **Nopeus** | Kohtalainen |
| **Käsiteltävyys** | Helppo |
| **Piirteet** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Suojakentät** | Ei mitään |
| **Aseistus** | 1 Gatling-tykki (3d6), 4 rakettia (5d6) |

<br>

---

#### Monitoimihävittäjä

Tämä kaksipaikkainen maasta toimiva hävittäjä (tyypiltään De Havilland Mosquiton kaltainen) tunnetaan suorituskyvystään ja monipuolisuudestaan. Sen pommiluukku kykenee kantamaan joko kaksi 250 paunan pommia (käsitellään keskikokoisina ohjuksina, joiden kantama on 0) tai yhden torpedon.

| Monitoimihävittäjä | |
| :- | :- |
| **Koko / Tyyppi** | Suuri sotilasajoneuvo |
| **Runko** | 10 |
| **Rakenne** | 45 |
| **Järjestelmät** | 3 |
| **Nopeus** | Kohtalainen |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Suojakentät** | Ei mitään |
| **Aseistus** | 4 keulaan asennettua Gatling-tykkiä (4d6+3), 1 pommiluukku (6d10 - katso kuvaus) |

<br>

---

#### Tähtienvälinen rahtialus (Kevyt korkean teknologian kuljetusalus)

Tämä kevyt kuljetusalus vaatii vähintään kahden hengen miehistön, ja siinä on tilaa neljälle ylimääräiselle matkustajalle. Tässä esitetään vakioversio, mutta monet omistajat tekevät omia "erikoismuutoksiaan", kuten piilotettuja tavaratiloja, parempaa suorituskykyä, ylivertaista käsiteltävyyttä, EMP-suojausta, häiveteknologiaa ja niin edelleen.

| Tähtienvälinen rahtialus | |
| :- | :- |
| **Koko / Tyyppi** | Keskikokoinen siviiliavaruusalus |
| **Runko** | 10 |
| **Rakenne** | 80 |
| **Järjestelmät** | 2 |
| **Nopeus** | Rapid (Parsec-kerroin 3) |
| **Käsiteltävyys** | Normaali |
| **Piirteet** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Suojakentät** | 8 |
| **Aseistus** | 2x neliöneli-laserkanuunatornia (5d6) |

<br>

---

#### Yleinen yhteysalus (Erittäin korkean teknologian avaruusalus)

Tämä äärimmäisen korkean teknologian tähtialus on erittäin kehittyneen keinotekoisen Mielen fyysinen ilmentymä, joka on muodoltaan kahden kilometrin pituinen sarja kenttäyhteydessä olevia moduuleja. Moduulit on tarkoitettu eri tehtäviin, kuten asumiseen, rakentamiseen, rahtiin, ruoan jalostukseen, vapaa-ajan tiloihin, hangaareihin ja jopa joihinkin salaisiin yksiköihin, joista aluksen äly harvoin, jos koskaan, keskustelee. Se ei tarvitse ihmismiehistöä, mutta kykenee majoittamaan jopa 100 000 matkustajaa helposti. Monet matkustajat syntyvät ja kuolevat yhteysaluksessa: monet ovat ohikulkijoita, jotka tulevat ja menevät halunsa mukaan.

| Yleinen yhteysalus | |
| :- | :- |
| **Koko / Tyyppi** | Kolossaalinen siviiliavaruusalus |
| **Runko** | 20 |
| **Rakenne** | 10 000 |
| **Järjestelmät** | 6 |
| **Nopeus** | Kohtalainen (Parsec-kerroin 4. Tällä teknologiatasolla kerroin vastaa 1 tuntia) |
| **Käsiteltävyys** | Muodollinen |
| **Piirteet** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Suojakentät** | 30 |
| **Aseistus** | Ei mitään, mistä se haluaisi keskustella |

<br>