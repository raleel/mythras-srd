# Ajoneuvot

*Mythras Imperativessa* ajoneuvoja käsitellään puoliksi abstraktilla tavalla. Ne ovat pohjimmiltaan taustatyökaluja, joita käytetään hahmojen kuljettamiseen paikasta A paikkaan B, ilman tarvetta yksityiskohtaisille kuvauksille tai tilastoille. Joskus pelinjohtajat kuitenkin tarvitsevat ajoneuvojen yksityiskohtia takaa-ajojen tai taistelutilanteiden vuoksi.

Tämän osion säännöt mahdollistavat useimpien ajoneuvotyyppien esittämisen abstraktilla tavalla, jonka on tarkoitus sallia joustavuus ja parantaa tarinankerrontaa. Tähtialukset ja avaruusalukset ovat hieman erilaisia, vaikka ne perustuvatkin samankaltaisiin periaatteisiin.

---
## Tilastot

Kaikki ajoneuvot kuvataan niiden rakenteen (Structure), rungon (Hull), nopeuden (Speed), järjestelmien (Systems), piirteiden (Traits) ja mahdollisten suojien (Shields) perusteella.

- **[Koko](0006_Vehicles.md?id=vehicle-size-table):** Kaikilla ajoneuvoilla on yksi kuudesta kokoluokasta, joka määrittää muiden ominaisuuksien arvon tai vaihteluvälin. Suuremman kokonsa ja avaruuden vihamielisten olosuhteiden vuoksi tähtialuksilla on omat arvonsa.
- **[Runko](0006_Vehicles.md?id=terrestrial-hulls):** Edustaa panssaripisteitä.
- **[Rakenne](0006_Vehicles.md?id=terrestrial-hulls):** Edustaa ajoneuvon kestävyyspisteitä (Hit Points).
- **[Suojat](0006_Vehicles.md?id=shields):** Asetuksissa, joissa on kehittynyttä energianhallintateknologiaa, voi olla ajoneuvoa suojaavia suojakenttiä, jotka voivat kulua jatkuvan tulituksen alla.
- **[Järjestelmät](0006_Vehicles.md?id=systems):** Edustavat ajoneuvon elintärkeitä komponentteja, kuten voimanlähdettä, miehistöä ja niin edelleen.
- **[Nopeus](0006_Vehicles.md?id=speed):** Jokaisella ajoneuvolla on perustason nopeusluokitus.
- **[Piirteet](0006_Vehicles.md?id=traits):** Ajoneuvolla voi olla yksi tai useampia piirteitä. Piirteet, kuten *Mythras Imperativen* olentojen kyvyt tai taistelutyylien piirteet, tarjoavat lisäkuvauksen ja etuja, jotka heijastavat ajoneuvon luonnetta.
- **[Aseet](0006_Vehicles.md?id=weapons):** Kuten piirteet, ajoneuvo voidaan varustaa aseilla pelimaailman mukaisesti. Joitakin ehdotettuja esimerkkejä ja arvoja on esitelty alla.


---
### Rungon koko, tyyppi ja rakenne

Ajoneuvon koko ja tarkoitus vaikuttavat sen rungon paksuuteen ja sisäisen rakenteen kestävyyteen. Esimerkiksi moottoripyörässä on minimaalinen runko, koska se on suunniteltu nopeutta ja ketteryyttä varten. Maataistelualus (massiivinen, telaketjuilla tai pyörillä kulkeva panssaroitu jättiläinen, joka toimii höyry- tai dieselmoottoreilla) on huomattavasti suurempi, taistelukentille suunniteltu ajoneuvo, jolla on paljon suurempi runko. Rungon vertailukoot (ja kuinka monta osumaa ne yleensä kestävät) on tiivistetty alla oleviin ajoneuvojen koko- ja runkotaulukoihin.

Aina kun ajoneuvo kärsii vahinkoa, sisääntuleva vahinko vähennetään sen runkoarvolla. Jäljjelle jäävä vahinko vähennetään ajoneuvon rakennepisteistä, ja sillä on prosentuaalinen mahdollisuus (läpäisevän vahingon suuruinen) vahingoittaa jotakin järjestelmää. Jos ajoneuvon rakenne laskee nollaan, se on joko täysin tuhoutunut tai niin pahoin vaurioitunut, että se on romutettava.

##### Maataistelualusten rungot 

| Koko | Rakenne | Siviilirungon arvo | Sotilasrungon arvo | Esimerkki |
| :-- | :-: | :-: | :-: | :-- |
| Pieni | 1-20 | 1-3 | 4-6 | Moottoripyörä, sivuvaunullinen moottoripyörä, kompakti auto, kanootti, kajakki, soutuvene |
| Keskikokoinen | 21-40 | 1-6 | 7-9 | Sedan, pakettiauto, lava-auto, luksusauto, urheiluauto, muskeliauto, limusiini, pelastusvene, pikavene, liitovarjo, autogyro |
| Suuri | 41-60 | 4-9 | 10-12 | Kuorma-auto, pidennetty limusiini, maastoauto, linja-auto, tila-auto, henkilökohtainen lentokone, purjekone, huviristeilijä, panssarivaunu, helikopteri, sukellusvene |
| Valtava | 61-80 | 7-12 | 13-15 | Rekka, matkustajakone, suihkukone, rannikkovartioalus, jahti |
| Jättimäinen | 81-100 | 10-15 | 16-18 | Juna, risteilyalus, sotalaiva |

##### Tähtialusten rungot 

| Koko | Rakenne | Siviilirungon arvo | Sotilasrungon arvo | Esimerkki |
| :-- | :-: | :-: | :-: | :-- |
| Pieni | 10-50 | 4-9 | 10-12 | Yhden hengen hävittäjä |
| Keskikokoinen | 51-150 | 7-12 | 13-15 | Kevyt rahtialus, sukkula |
| Suuri | 151-450 | 10-15 | 16-18 | Raskas rahtialus, risteilijä |
| Valtava | 451-1350 | 13-18 | 19-21 | Saattofregatti, kevyt taisteluristeilijä |
| Jättimäinen | 1351-4050 | 16-21 | 21-24 | Siirtokunta-alus, raskas taisteluristeilijä |
| Kolossaalinen | 4050-12110 | 19-24 | 24-30 | Avaruusasema, planeettoja tuhoava taisteluasema |


---
### Suojat

Suojakentät tarjoavat lisäsuojakerroksen ajoneuvoille, joihin niitä voidaan asentaa. Suojat toimivat hieman eri tavalla kuin runko, koska ne kuluvat (ablatiivisuus). Jos sisääntuleva vahinko on yhtä suuri tai pienempi kuin suojan arvo, se estyy kokonaan. Jos vahinko ylittää suojan arvon, ylimääräinen vahinko vähentää suojan voimakkuutta kyseisellä määrällä.

*Esimerkki: Joukkojenkuljetusaluksella on 12 pisteen energiasuoja. Jos alukseen osuu laser, joka tekee 11 pistettä vahinkoa, se ei läpäise suojaa eikä aiheuta lisävaikutuksia. Jos taas alukseen osuu räjähdys, joka tekee 15 pistettä vahinkoa, ylittävät kolme pistettä laskevat suojan voimakkuuden 9 pisteeseen.*

Kun suojakentän voimakkuus laskee nollaan, se romahtaa. Jäljelle jäävä vahinko kohdistuu runkoon.

---
### Järjestelmät

Aina kun ajoneuvo kärsii vahinkoa, joka läpäisee sen rungon, on olemassa läpäisevän vahingon suuruinen mahdollisuus, että jokin elintärkeä järjestelmä on vaurioitunut.

*Esimerkki: 10 pistettä vahinkoa kohdistuu pikaveneeseen, jolla on 3 runkoarvo ja 24 rakennetta. Runko vähentää vahinkoa 3 pisteellä, jolloin jäljelle jää 7. Tämä vähennetään 24 rakennepisteestä, ja on 7 % mahdollisuus vaurioittaa jotakin ajoneuvon järjestelmää.*

Järjestelmän kestävyys riippuu täysin ajoneuvon koosta. Tätä mallinnetaan osumien määrällä, joita järjestelmä kestää, pikemmin kuin varsinaisella vahinkomäärällä. Yksi järjestelmäosuma pieneen ajoneuvoon tuhoaa järjestelmän välittömästi. Keskikokoisen ajoneuvon järjestelmän tuhoaminen vaatii kaksi osumaa, suuren kolme ja niin edelleen. Katso [Järjestelmävahinkotaulukko](0006_Vehicles.md?id=system-damage-table) alta.

Vaurioituneet, mutta ei vielä tuhoutuneet järjestelmät kärsivät toimintakyvyn heikkenemisestä suhteessa saatuihin osumiin – joko prosentuaalisena vähennyksenä tai vaikeusasteen korotuksena järjestelmätehtävissä. Tarkka vaikutus riippuu siitä, mitä alijärjestelmää se ohjaa, kuten [Järjestelmän komponenttien vahinkotaulukossa](0006_Vehicles.md?id=system-component-damage-table) on yksityiskohtaisesti esitetty. Riippuen siitä, mikä järjestelmä vaurioituu, seuraukset voivat olla katastrofaalisia.

*Esimerkki: Maataistelualus – jättimäinen ajoneuvo, jolla on 5 järjestelmäosumaa – saa kaksi osumaa voimansiirtoon. Se menettää 40 % tehostaan ja sen hidas nopeus laskee kaksi astetta tasolle "kankea". Samoin suuri rahtialus (jolla on 3 järjestelmäosumaa) saa kaksi osumaa moottoriin/polttoainejärjestelmään, mikä aiheuttaa kahden asteen heikennyksen nopeuteen ja elektroniikan käyttöön. Kolmas osuma tuhoaisi moottorin/polttoainejärjestelmän ja samalla koko aluksen.*

<details>
<summary>* Yhteisön korjaukset</summary>

---
#### Vahinko
_Alkuperäinen teksti oli tässä kohdassa tarpeettoman toistuva. Se on korvattu lyhennetyllä versiolla._

- _"Runkoarvon ylittävä vahinko läpäisee ajoneuvon vahingoittaen rakennetta ja mahdollisesti yhtä tai useampaa järjestelmää. Ajoneuvon koosta riippuen vahinko voi olla vähäistä tai katastrofaalista._
- _Esimerkiksi suuri ajoneuvo voi kestää jopa kolme osumaa järjestelmään, kuten voimansiirtoon. Neljäs osuma tuhoaa järjestelmän. Jokainen järjestelmään kohdistuva osuma joko laskee sen toimintakykyä (kuten järjestelmävahinkotaulukon 'Loss per Hit' -sarakkeessa kuvataan) tai tekee ydintoimintojen (kuten ohjaus, viestintä jne.) suorittamisesta yhden vaikeusasteen vaikeampaa osumaa kohden."_

---
</details>

##### Järjestelmävahinkotaulukko

| Koko | Järjestelmäosumat | Hävikki per osuma |
| :-- | :-: | :-- |
| Pieni | 1 | 100 % - Tuhoutunut |
| Keskikokoinen | 2 | 1 aste tai 50 % |
| Suuri | 3 | 1 aste tai 33 % |
| Valtava | 4 | 1 aste tai 25 % |
| Jättimäinen | 5 | 1 aste tai 20 % |
| Kolossaalinen | 6 | 1 aste tai 16 % |

<details>
<summary>* Yhteisön korjaukset</summary>

---
_Alkuperäiset säännöt olivat epäjohdonmukaisia. Yllä oleva taulukko on päivitetty vastaamaan johdonmukaisempaa laskutapaa: (100 / järjestelmäosumat)._

---
</details>

##### Järjestelmän komponenttien vahinkotaulukko

| 1d10 | Järjestelmä | Vaurioitunut tulos | Tuhoutunut tulos |
| :-: | :-- | :-- | :-- |
| 1 | Lasti | Osa tavaroista tuhoutuu suhteessa vaurioon. | Koko lasti tuhoutuu. |
| 2 | Viestintä | Viestintäheitot vaikeutuvat yhdellä asteella per vaurio. | Ei voi viestiä tai huijata sensorien avulla. |
| 3 | Ohjaus | Ohjausheitot vaikeutuvat yhdellä asteella per vaurio; välitön hallintaheitto vaaditaan. | Ei voi ohjata tai muuttaa kurssia. |
| 4 | Voimansiirto | Nopeus laskee suhteessa vaurioon. | Ajoneuvo pysähtyy; lentokoneet syöksyvät maahan. |
| 5 | Miehistö | Osa matkustajista vaurioituu suhteessa vaurioon. Vaikutuksen alaiset saavat vakavan vamman ja heidän on onnistuttava kestävyysheitossa tai kuoltava välittömästi. | Miehistö kuolee. |
| 6 | Moottori / Polttoaine | Nopeus laskee suhteessa vaurioon. Elektroniikan käyttö vaikeutuu yhdellä asteella. | Ajoneuvo räjähtää. |
| 7 | Sensorit | Sensorien ja aseiden käyttö vaikeutuu yhdellä asteella per vaurio. | Ajoneuvo sokeutuu. |
| 8 | Aseet | Osa asejärjestelmistä lakkaa toimimasta suhteessa vaurioon. | Ajoneuvo ei voi enää ampua. |
| 9-0 | Ei mitään | Ei järjestelmävaurioita, vain rakenteellista vahinkoa. | Ei käytössä |

---
### Nopeus

Koska nopeuden, kiihtyvyyden, ilmanvastuksen ja inertian kaltaiset fysiikan ilmiöt ovat monimutkaisia, tarvitaan yksinkertaistuksia, joten ajoneuvoille annetaan abstrakti nopeusluokitus. Nopeusominaisuutta tulisi käyttää vain karkeasti arvioimaan, voiko yksi ajoneuvo saavuttaa toisen.

Nopeusluokitus edustaa ajoneuvon normaalia toimintanopeutta. Hätätilanteissa tätä suorituskykyä voidaan nostaa yhdellä askeleella moottorien kulumisen tai vaurioitumisen uhalla.

Nopeuden nostaminen vakioarvon yli on mahdollista onnistuneella *Ajoneuvon ohjaus* (Drive/Pilot) -heitolla. Yleensä tämä lisänopeus on kestävää vain lyhyen ajan – enintään 1d6 minuuttia, jonka jälkeen ajoneuvon on palattava normaaliin nopeuteen. Kriittinen onnistuminen pidentää kestoa 1d12 minuuttiin.

Kuljettaja voi yrittää nostaa nopeutta 2 astetta, mutta se vaatii "herculean" vaikeusasteen heiton, ja kesto on enintään 1d3 minuuttia.

##### Nopeusluokitustaulukko

| Nopeusluokitus | Max nopeus (koko) |
| :-- | :-: |
| Kankea | Jättimäinen |
| Hidas | |
| Hitaahko | Valtava |
| Keskiverto | |
| Kohtalainen | Suuri |
| Reipas | |
| Nopea | Keskikokoinen |
| Todella nopea | |
| Huippunopea | Pieni |

---
## Piirteet

Ajoneuvon piirteiden enimmäismäärä riippuu rungon koosta ja tyypistä.

Jokaisella ajoneuvolla on luontainen piirre: kulkutapa, jota varten se on suunniteltu (esim. lentokoneilla *Ilmateitse*, veneillä *Vesiteitse*). Tämä ei lasketa piirteiden kokonaismäärään. Jos ajoneuvo lisää toisen kulkutavan, se on laskettava mukaan.

##### Ajoneuvojen piirteiden jakotaulukko

| Koko | Max piirteitä |
| :-- | :-: |
| Pieni | 1 |
| Keskikokoinen | 2 |
| Suuri | 3 |
| Valtava | 4 |
| Jättimäinen | 5 |
| Kolossaalinen | 6 |

*(Huom: Piirteiden kuvaukset seuraavat alkuperäistä rakennetta. Esimerkiksi **Airborne** = Ilmateitse, **All Terrain** = Maastokelpoinen, jne.)*

---
## Aseet

Yleensä vain sotilaskäyttöön suunnitellut rungot on varustettu aseistuksella. "Aseistettu" (Weaponized) -piirre voidaan valita siviiliajoneuvoille, joilla on aseistustarpeita.

Asejärjestelmien maksimimäärä on 1/10 ajoneuvon rakennepisteistä.

##### Aseet koon mukaan

| Koko | Maataistelualus | Tähtialus |
| :-- | :-- | :-- |
| Pieni | Kevyt ase (esim. rynnäkkökivääri) | Keskikokoinen ase (esim. konekivääri) |
| Keskikokoinen | Keskikokoinen ase | Tykki/Raskas ase |
| Suuri | Tykki/Raskas ase | Asepatteristo |
| Valtava | Asepatteristo | Kehittyneet aseet (esim. ohjukset) |
| Jättimäinen | Kehittyneet aseet | Runkokiinnitteiset aseet (1 kpl) |
| Kolossaalinen | Ei käytössä | Runkokiinnitteiset aseet (jopa 3 kpl) |

---
## Hallinta ja ohjausliikkeet

Väistöliikkeet vaativat onnistuneen *Ajoneuvon ohjaus* -heiton. Epäonnistuminen tarkoittaa hallinnan menetystä: tarkista *Hallinnan menetys* -taulukko.

##### Hallinnan menetys -taulukko

| 1d100 | Tulos |
| :-: | :-- |
| 01-25 | Heilahdus. Väliaikainen hallinnan menetys. Nopeus laskee 1 askeleen 5 sekunniksi. |
| 26-40 | Luisto. Nopeus laskee 2 askelta 10 sekunniksi. |
| 41-50 | Paha luisto. Ajoneuvo pyörähtää ympäri ja pysähtyy 15 sekunniksi. |
| 51-60 | Pyörähdys. Ajoneuvo kierii, kärsii 3d10 rakenteellista vahinkoa. Matkustajat tarvitsevat kestävyysheiton. |
| 61-70 | Vakava pyörähdys. Ajoneuvo kärsii 3d10+10 vahinkoa, matkustajat ottavat 1d10 (tai 2d10 epäonnistuessa) vahinkoa. |
| 71-80 | Romutus. Kuten yllä, mutta rakenne laskee 0:aan. |
| 81-90 | Räjähdys. Polttoainejärjestelmä syttyy, räjähtää 1d20+10 sekunnissa. |
| 91-98 | Välitön räjähdys. |
| 99-00 | Katastrofaalinen romahdus. Matkustajien on selviydyttävä kestävyysheitosta tai he kuolevat välittömästi. |