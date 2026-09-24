# Transporto priemonės

Transporto priemonės „_Mythras Imperative_“ sistemoje vertinamos pusiau abstrakčiai. Iš esmės tai yra foniniai įrankiai, naudojami veikėjams perkelti iš taško A į tašką B, todėl nereikia išsamių aprašymų ar statistikos. Visgi kartais žaidimų meistrams prireiks informacijos apie transporto priemones, kai būtina jas atvaizduoti gaudynių ar kovų situacijose.

Šio skyriaus taisyklės leidžia atvaizduoti daugumą transporto priemonių tipų, tačiau abstrakčiu būdu, skirtu suteikti lankstumo ir praturtinti pasakojimą. Žvaigždėlaiviai ir kosminiai laivai yra šiek tiek kitokie, nors jie remiasi panašiais principais.

---
## Statistika

Visos transporto priemonės aprašomos pagal jų Struktūrą, Korpusą, Greitį, Sistemas, Bruožus ir Skydus (jei nustatymuose jie egzistuoja).

- **[Dydis](0006_Vehicles.md?id=vehicle-size-table):** Visos transporto priemonės turi vieną iš šešių Dydžio rodiklių, kurie nustato kitų charakteristikų vertes arba diapazoną. Dėl didesnio savo prigimtinio dydžio ir priešiškos kosmoso aplinkos, žvaigždėlaiviai turi savą verčių diapazoną.
- **[Korpusas](0006_Vehicles.md?id=terrestrial-hulls):** Atstovauja Šarvų taškams.
- **[Struktūra](0006_Vehicles.md?id=terrestrial-hulls):** Atstovauja transporto priemonės „Hit“ taškams (sveikatai).
- **[Skydai](0006_Vehicles.md?id=shields):** Nustatymuose, kuriuose naudojama pažangi energijos valdymo technologija, gali būti skydų, saugančių transporto priemonę, tačiau jie gali nykti ilgalaikio apšaudymo metu.
- **[Sistemos](0006_Vehicles.md?id=systems):** Atstovauja gyvybiškai svarbiems transporto priemonės komponentams, įskaitant jėgainę, įgulos skyrių ir t.t.
- **[Greitis](0006_Vehicles.md?id=speed):** Kiekviena transporto priemonė turi pagrindinį Greičio rodiklį.
- **[Bruožai](0006_Vehicles.md?id=traits):** Transporto priemonė taip pat gali turėti vieną ar daugiau Bruožų. Bruožai, panašiai kaip „_Mythras Imperative_“ taisyklėse būtybėms priskiriami Gebėjimai arba Kovos stiliaus bruožai, suteikia papildomą žaidimo aprašymą ir pranašumą, atspindintį transporto priemonės prigimtį.
- **[Ginkluotė](0006_Vehicles.md?id=weapons):** Panašiai kaip ir Bruožai, transporto priemonė gali būti aprūpinta ginklais, jei tai leidžia nustatymai. Kai kurie siūlomi pavyzdžiai ir vertės pateikti žemiau.


---
### Korpuso dydis, tipas ir struktūra

Transporto priemonės dydis ir paskirtis veikia jos korpuso storį ir vidinės struktūros atsparumą. Pavyzdžiui, motociklas turi minimalų korpusą, nes yra sukurtas greičiui ir manevringumui. „Land Ironclad“ (masyvus, vikšrinis arba ratinis šarvuotas milžinas, varomas garo arba dyzeliniais varikliais), būdamas daug didesnė transporto priemonė, skirta mūšio laukui, turi daug didesnį korpusą. Lyginamieji korpusų dydžiai (ir tai, kiek ginklų smūgių jie paprastai gali atlaikyti) apibendrinti žemiau esančiose Transporto priemonės dydžio ir Korpuso lentelėse.

Kiekvieną kartą, kai transporto priemonė patiria žalą, gaunama žala sumažinama pagal jos Korpuso vertę. Likusi žala atimama iš transporto priemonės Struktūros taškų ir turi procentinę tikimybę, lygią įsiskverbusiai žalai, paveikti Sistemą. Jei transporto priemonės Struktūra kada nors sumažėja iki nulio, ji yra visiškai sunaikinama arba taip smarkiai apgadinama, kad turi būti nurašyta.

##### Antžeminiai korpusai

| Dydis | Struktūra | Civilinio korpuso vertė | Karinio korpuso vertė | Pavyzdys |
| :-- | :-: | :-: | :-: | :-- |
| Mažas | 1-20 | 1-3 | 4-6 | Motociklas, motociklas su priekaba, kompaktiškas automobilis, kanoja, baidarė, irklinė valtis |
| Vidutinis | 21-40 | 1-6 | 7-9 | Sedanas, furgonas, pikapas, prabangus automobilis, sportinis automobilis, limuzinas, gelbėjimo valtis, greitaeigis kateris, sklandytuvas, avtogyras |
| Didelis | 41-60 | 4-9 | 10-12 | Sunkvežimis, ilgintas limuzinas, visureigis, autobusas, mikroautobusas, asmeninis orlaivis, sklandytuvas, pramoginis kateris, tankas, sraigtasparnis, povandeninis laivas |
| Milžiniškas | 61-80 | 7-12 | 13-15 | Vilkikas, keleivinis lėktuvas, reaktyvinis lėktuvas, pakrančių apsaugos laivas, jachta |
| Didžiulis | 81-100 | 10-15 | 16-18 | Traukinys, kruizinis laineris, karinis laivas |

##### Žvaigždėlaivių korpusai

| Dydis | Struktūra | Civilinio korpuso vertė | Karinio korpuso vertė | Pavyzdys |
| :-- | :-: | :-: | :-: | :-- |
| Mažas | 10-50 | 4-9 | 10-12 | Vienvietis naikintuvas |
| Vidutinis | 51-150 | 7-12 | 13-15 | Lengvas krovininis laivas, erdvėlaivis (šatlas) |
| Didelis | 151-450 | 10-15 | 16-18 | Sunkus krovininis laivas, kreiseris |
| Milžiniškas | 451-1350 | 13-18 | 19-21 | Palydos fregata, lengvas mūšio kreiseris |
| Didžiulis | 1351-4050 | 16-21 | 21-24 | Kartų laivas, sunkus mūšio kreiseris |
| Kolosalus | 4050-12110 | 19-24 | 24-30 | Orbitinė buveinė, planetas griaunanti kovinė stotis |


---
### Skydai

Deflektorių skydai suteikia papildomą apsaugos sluoksnį toms transporto priemonėms, kurios gali juos montuoti. Skydai veikia šiek tiek kitaip nei Korpusas dėl savo nykstamos prigimties. Jei gaunama žala yra lygi arba mažesnė už skydų vertę, ji visa blokuojama. Jei žala viršija skydo vertę, perteklius atitinkamai sumažina skydo stiprumą.

_Pavyzdžiui, karių pervežimo mašina turi 12 punktų stiprumo energijos skydą. Jei į ją pataiko lazeris, padarantis 11 žalos, skydas ją tiesiog blokuoja ir papildomo poveikio nėra. Kita vertus, jei mašiną pataiko sprogimas, padarantis 15 žalos, pertekliniai trys punktai sumažins skydo stiprumą iki 9._

Kai deflektoriaus skydo stiprumas nukrenta iki nulio, jis žlunga. Bet kokia likusi žala pereina į korpusą.

---
### Sistemos

Kiekvieną kartą, kai transporto priemonė patiria žalą, kuri prasiskverbia pro jos korpusą, yra tikimybė, lygi įsiskverbusiai žalai, kad bus paveikta gyvybiškai svarbi Sistema.

_Pavyzdžiui, 10 žalos taikoma greitaeigiui kateriui – transporto priemonei su 3 Korpusu ir 24 Struktūra. Korpusas veikia kaip šarvas, sumažindamas žalą iki 7. Tai atimama iš 24 Struktūros taškų ir yra 7% tikimybė apgadinti vieną iš transporto priemonės Sistemų._

Žala, kurią Sistema gali atlaikyti, yra pagrįsta vien transporto priemonės dydžiu. Tai modeliuojama ne tikruoju žalos kiekiu, o „smūgių“ (hits) skaičiumi, kuriuos Sistema gali priimti. Vienas Sistemos smūgis Mažai transporto priemonei akimirksniu sunaikins tą Sistemą. Reikia dviejų smūgių Vidutinio dydžio transporto priemonės Sistemoms sugriauti, trijų – Didelės ir t.t. Žiūrėkite [Sistemos žalos lentelę](0006_Vehicles.md?id=system-damage-table) žemiau.

Apgadintos, bet dar nesunaikintos Sistemos patiria funkcijos praradimą, proporcingą gautų smūgių skaičiui – tai gali būti procentinis sumažinimas arba Lygio bauda Sistemos užduotims. Konkretus poveikis priklauso nuo to, ką posistemis valdo, kaip išsamiai aprašyta [Sistemos komponentų žalos lentelėje](0006_Vehicles.md?id=system-component-damage-table) žemiau. Priklausomai nuo to, kuri Sistema yra pataikyta, poveikis gali būti katastrofiškas.

_Pavyzdžiui, „Land Ironclad“ – Didžiulė transporto priemonė su 5 Sistemos smūgiais – du kartus pataikyta į Pavarą, prarastų 40% savo galios ir jos lėtas Greitis sumažėtų dviem Lygiais iki „Sunkios ir lėtos“ (Ponderous). Panašiai, Didelis krovininis laivas – su 3 Sistemos smūgiais – gavęs du smūgius į Variklio/Kuro sistemą, turėtų dviejų Lygių baudą Greičiui bei elektroninių sistemų naudojimui. Trečias smūgis sunaikintų Variklio/Kuro sistemą ir kartu su ja – laivą._


<details>

<summary>* Bendruomenės klaidų taisymai</summary>

---

#### Žala


_Čia buvęs pirminis tekstas kartojo ankstesnę pastraipą._

- _„Žala, viršijanti Korpusą, prasiskverbia į transporto priemonę, žalodama Struktūrą ir galimai paveikdama vieną ar daugiau sistemų. Priklausomai nuo transporto priemonės dydžio, žala gali būti nedidelė arba katastrofiška._
- _Pavyzdžiui, Didelė transporto priemonė gali atlaikyti iki dviejų smūgių į tokią Sistemą kaip jos Pavara. Trečias smūgis funkciškai sunaikina Pavarą. Kiekvieną kartą, kai sistema gauna smūgį, ji praranda procentą savo funkcijos, kaip aprašyta Sistemos žalos lentelės stulpelyje „Nuostolis per smūgį“, arba pagrindinė funkcija (tokia kaip Pavara, Pilotavimas, Ryšiai ir t.t.) tampa vienu Sunkumo lygiu sunkesnė už kiekvieną patirtą smūgį.“_

_Aukščiau pateiktos pastraipos pašalintos ir pakeistos sutrumpintu redagavimu, nurodančiu kitą Sistemos poveikio pavyzdį._

---

</details>

##### Sistemos žalos lentelė

| Dydis | Sistemos smūgiai | Nuostolis per smūgį |
| :-- | :-: | :-- |
| Mažas | 1 | 100% – Sunaikinta |
| Vidutinis | 2 | 1 Lygis arba 50% |
| Didelis | 3 | 1 Lygis arba 33% |
| Milžiniškas | 4 | 1 Lygis arba 25% |
| Didžiulis | 5 | 1 Lygis arba 20% |
| Kolosalus | 6 | 1 Lygis arba 16% |


<details>

<summary>* Bendruomenės klaidų taisymai</summary>

---

##### Sistemos žalos lentelė (Originalas)

| Dydis | Sistemos smūgiai | Nuostolis per smūgį |
| :-- | :-: | :-- |
| Mažas | 1 | 1 Lygis arba 50% |
| Vidutinis | 2 | 1 Lygis arba 33% |
| Didelis | 3 | 1 Lygis arba 25% |
| Milžiniškas | 4 | 1 Lygis arba 20% |
| Didžiulis | 5 | 1 Lygis arba 16% |
| Kolosalus | 6 | 1 Lygis arba 10% |

##### Transporto priemonės dydžio lentelė (iš [Korpuso dydis, tipas ir struktūra](0006_Vehicles.md?id=hull-size-type-and-structure))

| Dydis | Sistemos smūgiai |
| :-- | :-: |
| Mažas | 1 |
| Vidutinis | 2 |
| Didelis | 3 |
| Milžiniškas | 4 |
| Didžiulis | 5 |
| Kolosalus | 6 |

_Pirminės taisyklės ir pavyzdžiai nenuoseklūs:_
- _„Sistemos, kurios yra apgadintos, bet dar nesunaikintos, praranda funkcionalumą. Tai lygu esamų smūgių santykiui su bendru pajėgumu. Taigi, Didžiulė transporto priemonė, du kartus pataikyta į Pavarą, prarastų 40% galios (2 smūgiai iš 5 galimų)“._
   - _Tai rodo, kad Didžiulė transporto priemonė su 5 Sistemos smūgiais turėtų prarasti po 20% už kiekvieną smūgį – bet lentelė rodo 16%._
- _„Pavyzdžiui, Didelė transporto priemonė gali priimti iki trijų smūgių į tokią sistemą kaip jos Pavara. Ketvirtas smūgis funkciškai sunaikina Pavarą.“_
  - _„Tai rodo – kaip ir lentelė – 25% žalą per Sistemos smūgį, tačiau Didelės transporto priemonės pagal tą pačią lentelę gali atlaikyti tik 3 Sistemos smūgius._
- _Nors ne nenuoseklu, Transporto priemonės dydžio lentelė buvo perteklinė; ji vėl pasirodė pilnesne forma (pridėjus stulpelį „Nuostolis per smūgį“) vos po kelių eilučių._

_Tai apsunkina nuoseklios taisyklės palaikymą. Siekiant išspręsti šias problemas, vertės ir pavyzdžiai pakeisti taip, kad atitiktų vienas kitą, o Transporto priemonės dydžio lentelė buvo pašalinta._

---

</details>


##### Sistemos komponentų žalos lentelė

| 1d10 | Sistema | Apgadintas rezultatas | Sunaikintas rezultatas |
| :-: | :-- | :-- | :-- |
| 1 | Krovinys | Kiekis vertybių ar įrangos, laikomų krovinių skyriuje, proporcingas žalai, yra sunaikinamas. | Visas krovinys sunaikintas. |
| 2 | Ryšiai | Ryšių metimai tampa vienu Sunkumo lygiu sunkesni kiekvieną kartą, kai ši sistema apgadinama. | Transporto priemonė nebegali komunikuoti ar apgaudinėti priešo jutiklių. |
| 3 | Valdymas | Laivybos, Vairavimo ar Pilotavimo metimai tampa vienu Sunkumo lygiu sunkesni kiekvieną kartą, kai apgadinama; reikalingas skubus Valdymo metimas. | Transporto priemonės neįmanoma vairuoti ar pakeisti kurso. |
| 4 | Pavara | Greitis sumažinamas suma, proporcinga žalai. | Transporto priemonė sustoja; orlaiviai sudužta. |
| 5 | Įgula | Skaičius keleivių, proporcingas žalai, tampa aukomis. Paveiktieji patiria Sunkų sužalojimą ir privalo sėkmingai atlikti Ištvermės metimą arba žūti vietoje. | Transporto priemonės keleiviai žūsta. |
| 6 | Variklis / Kuras | Greitis sumažinamas suma, proporcinga žalai. Elektronines sistemas naudoti vienu Sunkumo lygiu sunkiau. | Transporto priemonė sunaikinama katastrofiško sprogimo metu. |
| 7 | Jutikliai | Jutiklių, Navigacijos ir Ginklų atakos metimai tampa vienu Sunkumo lygiu sunkesni kiekvieną kartą, kai apgadinama. | Transporto priemonė apanka. |
| 8 | Ginkluotė | Skaičius ginklų sistemų, proporcingas žalai, tampa nebeveikiančiomis. | Transporto priemonė nebegali šaudyti. |
| 9-0 | Nėra | Sistemos nepataikytos; tik Struktūros žala. | N/A |

<details>

<summary>* Bendruomenės klaidų taisymai</summary>

---

##### Sistemos komponentų žalos lentelė (Variklis/Kuras)

_Originalus rezultatas buvo toks: „Maksimalus greitis sumažinamas perpus...“ Tai prieštarauja bendrai žalos nuobaudų taisyklei, proporcingai Sistemos žalai: 25% žala = 25% nuobauda. Be to, pilnos „Mythras Companion“ taisyklės nemini šio Greičio dalijimo perpus._

_Dėl to tekstas pakeistas tuo pačiu įrašu iš Pavaros sistemų: „Greitis sumažinamas suma, proporcinga žalai.“_

---

</details>


---
### Greitis

Kadangi greičio, pagreičio, oro pasipriešinimo ir inercijos fizika (paminint tik kelis veiksnius) yra sudėtingi klausimai, reikia šiek tiek supaprastinti, todėl transporto priemonėms suteikiamas abstraktus greičio rodiklis. Greičio charakteristika turėtų būti naudojama tik apytikriai įvertinti, ar viena transporto priemonė gali aplenkti ar pavyti kitą.

Greičio rodiklis atspindi transporto priemonės nominalų veikimo greitį. Avarinėse situacijose šį našumą galima padidinti vienu laipsniu, rizikuojant variklių nusidėvėjimu ar gedimu. Nors visiems transporto priemonių tipams naudojama ta pati lentelė, reikia vadovautis sveiku protu, kad būtų lyginamos tik tos pačios klasės transporto priemonės. Pavyzdžiui, jei žvaigždėlaivis ir sportinis automobilis abu turi tą patį pagreičio rodiklį „Spartus“, turėtų būti akivaizdu, kad kosminis laivas yra lyginamasis greitesnis.

Padidinti transporto priemonės Greitį virš standartinės vertės galima sėkmingai atlikus Vairavimo metimą. Paprastai šis papildomas greitis yra tvarus tik trumpą laiką – ne ilgiau kaip 1d6 minutes, prieš transporto priemonei sugrįžtant prie standartinio greičio arba rizikuojant sugadinti jėgainę. Kritinis Vairavimo metimas leidžia didesnio greičio laikotarpį pratęsti iki 1d12 minučių.

Vairuotojas gali mėginti padidinti transporto priemonės greitį 2 laipsniais, tačiau tam reikalingas „Herakliškas“ (Herculean) Vairavimo metimas, o maksimalus laikas, kurį transporto priemonė gali išlaikyti šį greitį, yra 1d3 minutės: kritinė sėkmė nepratęs padidinto greičio trukmės.

##### Greičio rodiklių lentelė

| Greičio rodiklis | Maksimalus greitis skirta |
| :-- | :-: |
| Sunkus ir lėtas | Didžiulis |
| Lėtas ir tingus | |
| Lėtas | Milžiniškas |
| Vidutiniškas | |
| Švelnus | Didelis |
| Vidutinis | |
| Spartus | Vidutinis |
| Greitas | |
| Sparnus (Fleet) | Mažas |


---
### Bruožai

Maksimalus transporto priemonės bruožų skaičius priklauso nuo korpuso dydžio ir tipo.

Kiekviena transporto priemonė turi įgimtą bruožą: judėjimo būdą, kuriam ji pirmiausia buvo sukurta. Todėl orlaiviai iš prigimties turi „Oreivystės“ bruožą, laivai – „Jūrininkystės“ bruožą ir t.t. Šis įgimtas bruožas nėra įskaičiuojamas į turimų bruožų skaičių. Tačiau jei transporto priemonė turėtų antrą judėjimo būdą – pavyzdžiui, skraidantis povandeninis laivas – „Oreivystės“ bruožas turėtų būti paimtas kaip vienas iš galimų bruožų.

Kai kurie bruožai gali būti neprieinami, priklausomai nuo nustatymų technologinio lygio; žaidimų meistrai turi patys nuspręsti, kokie bruožai gali būti pritaikyti.

##### Transporto priemonės bruožų paskirstymo lentelė

| Dydis | Maksimalus bruožų skaičius |
| :-- | :-: |
| Mažas | 1 |
| Vidutinis | 2 |
| Didelis | 3 |
| Milžiniškas | 4 |
| Didžiulis | 5 |
| Kolosalus | 6 |

#### Oreivystė (Airborne)

Transporto priemonė geba skristi atmosferoje.

#### Visureigis (All Terrain)

Šis Bruožas turi būti naudojamas su antžeminėmis transporto priemonėmis. Transporto priemonė gali įveikti nepalankų, sunkų ir statų reljefą, naudodama vikšrus, pažangią pakabą ir pavarų sistemas arba galingus pavarų diferencialus.

#### Kasimasis (Burrowing)

Transporto priemonė skirta kasti ir tuneliuoti žemėje. Ji gali pasiekti maksimalų gylį, lygų jos Korpuso įvertinimui x5 metrai.

#### Kamufliažas (Camouflaged)

Transporto priemonė turi kamufliažinius dažus arba mimikrijos jutiklius, leidžiančius jai susilieti su aplinka. Bandymai vizualiai pastebėti transporto priemonę yra vienu laipsniu sunkesni.

#### Krovininis (Cargo)

Transporto priemonė sukurta specialiai kroviniams, o ne keleiviams gabenti. Keleivių skyriai yra minimalūs, o likusi naudingo ploto dalis skirta krovinių saugojimui su atitinkamomis sekcijomis, įrankiais ir net aplinkos kondicionavimu (pavyzdžiui, šaldymo sekcijos greitai gendantiems produktams). Pakrauta kroviniu, transporto priemonė juda dviem laipsniais lėčiau nei įprastai leistų jos korpuso dydis.

#### Nešėjas (Carrier)

Transporto priemonė skirta specialiai gabenti mažesnes, lengvai valdomas ar nuotoliniu būdu valdomas civilinio arba karinio pobūdžio transporto priemones. Bet kuri transporto priemonė su šiuo bruožu privalo būti bent „Didžiulio“ dydžio. Gabenamų mažų laivelių skaičius gali skirtis priklausomai nuo misijos tipo ir tikslo, tačiau gali siekti nuo 10 iki tiek, kiek leidžia transporto priemonės Struktūros įvertinimas.

#### Statybinė (Construction)

Transporto priemonė aprūpinta sunkiems statybos darbams. Visos transporto priemonės su šiuo bruožu taip pat turi „Visureigio“ bruožą, tačiau jų greitis yra dviem laipsniais mažesnis, nei leistų jų korpuso dydis. Transporto priemonė aprūpinta užduotims skirtais įrankiais, tokiais kaip krano strėlės, kasimo kaušai, savivarčiai ir t.t.

#### EMP atspari (EMP Resistant)

Transporto priemonė yra apsaugota nuo elektromagnetinio pulso atakų.

#### Pagerintas našumas (Enhanced Performance)

Transporto priemonės Greičio rodiklis yra vienu laipsniu aukštesnis už maksimalų jos dydžiui.

#### Katapultuojama sėdynė (Ejector Seat)

Avariniu atveju katapultuojama sėdynė išmeta keleivius kelis šimtus metrų į orą, tada išskleidžia parašiutą saugiam nusileidimui. Parašiutas yra neprivalomas. Nerekomenduojama sraigtasparniams (išskyrus „Kamov Ka-52 Alligator“).

#### FTL (Virššviesinis greitis)

Tik erdvėlaiviams. Laivas aprūpintas virššviesiniu varikliu (tai gali būti hipervariklis, deformacijos variklis, kirmgraužos generatorius ar panašiai). FTL variklis turi atskirą Greičio rodiklį, kuris iš esmės matuoja greitį, kuriuo žvaigždėlaivis gali įveikti vieną parseką (3,26 šviesmečio arba 31 trilijoną kilometrų), taip:

##### FTL Greičio rodiklių lentelė

| Greičio rodiklis | Koeficientas 1 parsekui įveikti |
| :-- | :-: |
| Sunkus ir lėtas | 10 |
| Lėtas ir tingus | 8 |
| Lėtas | 7 |
| Vidutiniškas | 6 |
| Švelnus | 5 |
| Vidutinis | 4 |
| Spartus | 3 |
| Greitas | 2 |
| Sparnus (Fleet) | 1 |

Koeficiento laikas priklauso nuo žaidimų meistro, atsižvelgiant į tai, kokia pažangi yra nustatymų FTL plėtra. Pavyzdžiui, bazinis koeficientas gali būti 1 diena, o tai reiškia, kad laivui su „Sunkia ir lėta“ FTL pavara kelionei reikia 10 dienų, o laivas su „Sparnia“ FTL pavara kelionę baigia per 1 dieną. Kitur, kur FTL technologija yra žymiai mažiau efektyvi, koeficiento laikas gali būti matuojamas mėnesiais, o ne dienomis.

Daroma prielaida, kad laivas turi kuro atsargų grįžtamajai kelionei arba priemonių pasipildyti kuro paskirties vietoje.

Manoma, kad bet kokio dydžio žvaigždėlaivis gali būti aprūpintas FTL varikliu, nors vėlgi, tai priklauso nuo nustatymų.

FTL varikliai negali būti aktyvuoti arčiau nei 1,5 astronominio vieneto nuo žvaigždės (apie 225 milijonus kilometrų). Tai reiškia, kad laivai prieš aktyvuodami FTL sistemą privalo naudoti variklį skrydžiui mažesniu nei šviesos greičiu ir nukeliauti bent iki Marso atstumo.

#### Antžeminė transporto priemonė (Ground Vehicle)

Transporto priemonė geba judėti žeme.

#### Sklandymas (Hover)

Transporto priemonė sklando virš žemės naudodama oro pagalvę arba antigravitacinį repulsorių.

#### Prabangi (Luxurious)

Transporto priemonė sukurta specialiai gabenti keleivius tam tikro lygio prabanga. Krovinių erdvės perteklius skiriamas prabangioms keleivių kajutėms, baseinams, sūkurinėms vonioms, papildomai įgulai, tenkinančiai keleivių užgaidas ir t.t.

#### Bėgiai (Rails)

Transporto priemonė remiasi bėgių sistema. Transporto priemonės su šiuo bruožu natūraliai gali pasiekti trijų laipsnių aukštesnį Greičio rodiklį, nei leistų jų korpuso dydis, tačiau jos yra akivaizdžiai apribotos judėti tik bėgių sistema.

#### Atspari (Resilient)

Visos sistemos gali atlaikyti vienu smūgiu daugiau, nei nustatyta pagal Dydį. Šis Bruožas gali būti kaupiamas – taigi „Atspari 2“ reiškia, kad sistemos gali atlaikyti 2 smūgiais daugiau nei įprastai, kainuojant du Bruožo punktus.

#### Jūrininkystė (Seaborne)

Transporto priemonė plūduriuoja vandenyje.

#### Erdvėlaivis (Spacecraft)

Transporto priemonė yra hermetizuota nuo vakuumo ir apsaugota nuo kosminės spinduliuotės, o priklausomai nuo konstrukcijos, gali gebėti palikti atmosferą ir vėl į ją grįžti bei skristi atmosferoje.

#### Slaptumas (Stealth)

Tik orlaiviams. Transporto priemonė skirta išvengti aptikimo radarais ir kitomis tolimojo nuotolio jutiklių sistemomis. Bandymai pastebėti transporto priemonę naudojant elektroninius jutiklius yra vienu laipsniu sunkesni.

#### Povandeninė (Submersible)

Transporto priemonė geba panerti po vandenyno paviršiumi iki darbinio gylio, lygaus jos Korpuso įvertinimui x10 metrų. Subtili konstrukcijos gylis – absoliutus maksimumas, kurį povandeninis laivas gali pasiekti nebuvęs sutraiškytas – yra 1,5 karto didesnis už jo darbinį gylį.

#### Puikus valdymas (Superior Handling)

Transporto priemonės valdymas įvertintas kaip „Lengvas“.

#### Stebėjimo įranga (Surveillance Suite)

Transporto priemonė turi borto kompiuterį, ryšių bazinę stotį, imtuvą pasiklausymo įrenginių signalams bei aparatūrą perimti netoliese esančių išmaniųjų telefonų signalus 100 metrų spinduliu.#### Tough

Civilinė transporto priemonė su šiuo bruožu gauna savo korpusą iš karinės skilties ir automatiškai turi maksimalią struktūrą. Karinė transporto priemonė su šiuo bruožu savo korpusą ir struktūrą gauna iš eilutės, esančios žemiau.

#### Traukos spindulys

Tik erdvėlaiviams. Laive sumontuotas traukos spindulys, galintis sugauti ir pritraukti transporto priemones, kurių korpuso įvertinimas yra iki dviejų pakopų mažesnis nei jo paties. Taigi, milžiniškas žvaigždėlaivis galėtų pritraukti ir išlaikyti vidutinio dydžio korpusą.

#### VTOL

Vertikalus pakilimas/tūpimas. Šis bruožas būdingas sraigtasparniams ir panašioms transporto priemonėms, kurios naudoja rotorių derinį keliamajai galiai sukurti. Kai naudojamas fiksuoto sparno orlaiviams, tai nurodo fiksuotų arba pasukamų variklių naudojimą skrydžio padėčiai, kilimui ir tūpimui valdyti.

#### Waterborne (Vandens transporto priemonė)

Transporto priemonė juda naudodama artikuliuotas kojas. Vaikščiojančių transporto priemonių greitis ribojamas iki "Gentle" (švelnaus), nepriklausomai nuo jų dydžio. Tačiau vaikščiojančios transporto priemonės gali būti pastatytos tokio aukščio, kuris būtų tiesiog nestabilus transporto priemonėms su kitomis judėjimo priemonėmis.

Ši transporto priemonė gali judėti po vandeniu.

#### Weaponized (Ginkluota)

Transporto priemonė buvo pritaikyta ginkluotei. Ginkluotės sistemos aptariamos toliau skyriuje [Ginklai](0006_Vehicles.md?id=weapons).


---
## Ginklai

Paprastai tik kariniai korpusai yra skirti ginkluotei (tvirtinimo taškai, šaudmenų saugyklos, valdymo sistemos). „Ginkluota“ bruožą galima pasirinkti civilinėms transporto priemonėms, kurioms gali būti reikalinga ginkluotė.

Maksimalus ginklų sistemų skaičius, kurį transporto priemonė gali palaikyti, yra lygus 1/10 jos struktūros taškų (taigi, transporto priemonė su 40 struktūros taškų galėtų palaikyti 4 ginklų sistemas, jei tai karinė transporto priemonė arba ginkluota civilinė transporto priemonė).

Ginklų sistemos priklauso nuo transporto priemonės dydžio. Maksimalus ginklų sistemos tipas skirtingiems dydžiams parodytas žemiau esančiose lentelėse.


##### Ginklų pagal dydį lentelė

| Dydis | Antžeminė | Erdvėlaivis |
| :-- | :-- | :-- |
| Mažas | Lengvas ginklas (pvz., automatinis šautuvas) | Vidutinis ginklas (pvz., kulkosvaidis, raketų paleidimo įrenginys) |
| Vidutinis | Vidutinis ginklas (pvz., kulkosvaidis, raketų paleidimo įrenginys) | Bokštinis/sunkusis ginklas (pvz., sunkūs sujungti kulkosvaidžiai, minigunai) |
| Didelis | Bokštinis/sunkusis ginklas (pvz., sunkūs sujungti kulkosvaidžiai, minigunai) | Ginklų baterija (pvz., lauko artilerija) |
| Milžiniškas | Ginklų baterija (pvz., lauko artilerija) | Pažangūs ginklai (pvz., raketų sistemos) |
| Didžiulis | Pažangūs ginklai (pvz., raketų sistemos) | Ant stuburo montuojami ginklai (tik vienas) |
| Kolosalus | N/A | Ant stuburo montuojami ginklai (iki 3) |

##### Pavyzdinė ginklų statistika
 
| Ginklas | Žala | Nuotolis | Šaudymo sparta | Šaudmenys/apkrova |
| :-- | :-: | :-: | :-: | :-: |
| 50 colių patranka | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Minigunas/Gatling kulkosvaidis | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raketa | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Vidutinė raketa/torpeda | 6d10 | Maks. nuotolis 200km | 1 | 1/5 |
| Didelė/sparnuotoji raketa | 6d10+10 | Maks. nuotolis 1000km | 1 | 1/10 |
| Lazerinė/plazminė patranka | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Sunki lazerinė/plazminė patranka | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilerijos baterija | 5d6+6 | Maks. nuotolis 50km | 1 | 1/5 |
| Stuburo montuojama baterija | 10d6+6 | Maks. nuotolis 20000km | 1 | 1/10 |

_Nuotoliai pateikti metrais ir kilometrais._

_Šaudymo sparta nurodyta pavieniams šūviams, pusiau automatiniam ir visiškai automatiniam šaudymui._

_Šaudmenys – tai šaudymo galimybė prieš prireikiant perkrauti. Apkrova – tai perkrovimo laikas kovos raundais, darant prielaidą, kad yra pilna įgula._

---
## Valdymas ir manevrai

Išvengiantys ar staigūs manevrai reikalauja sėkmingo vairavimo/pilotavimo metimo, kad užtikrintumėte, jog vairuotojas ar pilotas išlaiko transporto priemonės kontrolę. Dauguma transporto priemonių yra suprojektuotos ir pagamintos atlaikyti retkarčiais pasitaikančius įtempius, tačiau žaidimo meistras gali nuspręsti, kad tam tikram manevrui reikia aukštesnio sudėtingumo metimo, priklausomai nuo to, koks jis ambicingas. Nesėkmė reiškia, kad transporto priemonės kontrolė prarasta: meskite kauliuką pagal „Kontrolės praradimo“ lentelę.

Atkreipkite dėmesį, kad „Kontrolės praradimo“ lentelė taikoma tik antžeminėms transporto priemonėms. Panašius efektus galima taikyti oro ir kosminėms transporto priemonėms, tačiau žaidimo meistrai turės pakoreguoti pagrindimą konkrečiam efektui. Pavyzdžiui, orlaivis, užuot slydęs, gali patekti į suktuką.

Taip pat transporto priemonės būdingas valdymas gali turėti papildomą įtaką vairavimo metimui. Valdymas gali būti „Easy“ (lengvas), „Standard“ (standartinis), „Hard“ (sunkus), „Formidable“ (bauginantis) arba „Herculean“ (herkuliškas) ir nustato pradinį tašką vairavimo metimui atliekant manevrą. Manevro sudėtingumo laipsnis tada pridedamas prie valdymo, kad būtų nustatytas galutinis sudėtingumas.

Pavyzdžiui, galingas motociklas turi įmontuotus girostabilizatorius, suteikiančius jam „Easy“ valdymo lygį. Vairuotojas nori atlikti 180 laipsnių slydimo posūkį, kad išvengtų persekiotojo – manevras, kurį žaidimo meistras vertina kaip vienu laipsniu sunkesnį. Todėl motociklininkas turi atlikti vairavimo metimą pagal „Standard“, o ne „Easy“ lygį. Jei jis būtų bandęs tą patį manevrą su nestabilizuotu motociklu, vairavimo metimas būtų buvęs „Hard“.

„Superior Handling“ (aukštesnis valdymas) yra bruožas. Jei transporto priemonė neturi šio bruožo savo aprašyme, tada numatytasis nustatymas yra „Standard“ valdymas bet kuriai transporto priemonei iki „Large“ dydžio. „Huge“ ir „Enormous“ transporto priemonės iš prigimties turi atitinkamai „Formidable“ ir „Herculean“ valdymo bruožus, ir žaidimo meistras turi teisę nuspręsti, kad tam tikri manevrai yra tiesiog neįmanomi dėl transporto priemonės dydžio.

##### Kontrolės praradimo lentelė

| 1d100 | Rezultatas |
| :-: | :-- |
| 01-25 | Posūkis. Kontrolės praradimas yra laikinas. Transporto priemonė 5 sekundėms sumažina greitį 1 pakopa. |
| 26-40 | Slydimas. Vairuotojas turi stengtis išlaikyti transporto priemonę valdomą. Transporto priemonė 10 sekundžių sumažina greitį 2 pakopomis. |
| 41-50 | Sunkus slydimas. Transporto priemonė atsiduria neteisinga kryptimi ir stovi vietoje 15 sekundžių. |
| 51-60 | Vertimasis. Transporto priemonė slysta ir verčiasi, patirdama 3d10 žalos savo struktūrai. Keleiviai privalo atlikti sėkmingus ištvermės metimus arba patirti 1d10 žalos į 1d3 kūno vietas. |
| 61-70 | Sunkus vertimasis. Kaip ir aukščiau, bet transporto priemonė patiria 3d10+10 žalos, o keleiviai gauna 1d10 žalos net jei ištvermės metimas sėkmingas, ir 2d10, jei nesėkmingas. |
| 71-80 | Nurašymas. Kaip ir aukščiau, bet transporto priemonės struktūra sumažinama iki 0. Keleiviai patiria tą pačią žalą kaip ir sunkiojo vertimosi atveju. |
| 81-90 | Sprogimas. Kaip ir aukščiau, bet transporto priemonės kuro sistema užsidega ir sprogsta per 1d20+10 sekundžių. Jei nepavyksta pasitraukti, keleiviai patiria papildomą 1d6 nudegimo žalą į 1d6 vietas. |
| 91-98 | Tiesioginis sprogimas. Kaip ir aukščiau, bet sprogimas yra tiesioginis. |
| 99-00 | Katastrofiška avarija. Keleiviai privalo sėkmingai atlikti ištvermės metimą arba žūsta akimirksniu. Žala, kaip ir nurašymo atveju, patiriama bet kokiu atveju. |


---
## Pavyzdinės transporto priemonės

---

### Antžeminės transporto priemonės

#### Perėmėjas (Interceptor)

Tai patobulintas prabangus automobilis, sportinis automobilis ar panašus – šis automobilis sukurtas greičiui ir kovai. Būtent tokia transporto priemonė kyla žmonėms į galvą, kai kas nors ištaria „šnipų automobilis“.

| Perėmėjas | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis karinis |
| **Korpusas** | 6 |
| **Struktūra** | 40 |
| **Sistemos** | 2 |
| **Greitis** | Fast (Greitas) |
| **Valdymas** | Easy (Lengvas) |
| **Bruožai** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ginklai** | Tepalo dėmių dozatorius, dūmų dozatorius, sujungti vidutiniai kulkosvaidžiai (2d6+3) |

<br>

---

#### Persekiojimo motociklas

Lengvas, greitas motociklas greitiems persekiojimams, persekiojimo motociklas neša staigmeną – arba porą sujungtų kulkosvaidžių, arba dvi raketas.

| Persekiojimo motociklas | |
| :- | :- |
| **Dydis / Tipas** | Mažas civilinis |
| **Korpusas** | 2 |
| **Struktūra** | 12 |
| **Sistemos** | 1 |
| **Greitis** | Fast (Greitas) |
| **Valdymas** | Easy (Lengvas) |
| **Bruožai** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ginklai** | Dvi raketos (4d6) arba sujungti lengvieji kulkosvaidžiai (2d6) |

<br>

---

#### Sedanas

Standartinis 4 durų sedanas, turintis pakankamai vietos patogiai susodinti vairuotoją ir tris keleivius. Aukojama krovinių vieta, kad būtų įtrauktas stebėjimo komplektas.

| Sedanas | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis civilinis |
| **Korpusas** | 4 |
| **Struktūra** | 25 |
| **Sistemos** | 2 |
| **Greitis** | Rapid (Spartus) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Ginklai** | Nėra |

<br>

---

#### Povandeninis automobilis

Dvivietis automobilis, galintis persijungti į vandens ar povandeninį režimą, kad galėtų keliauti vandens paviršiumi arba po vandeniu. Turi priekyje montuojamą torpedą ir ant stogo montuojamą „žemė-oras“ raketą.

| Povandeninis automobilis | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis civilinis |
| **Korpusas** | 6 |
| **Struktūra** | 25 |
| **Sistemos** | 2 |
| **Greitis** | Fast (Greitas) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ginklai** | Raketa (5d6), torpeda (4d10) |

<br>

---

#### Stebėjimo furgonas

Paprastas, nepažymėtas furgonas, kuriame įsikūrusi agentų komanda ir garso bei vaizdo įrašymo įrangos komplektas.

| Stebėjimo furgonas | |
| :- | :- |
| **Dydis / Tipas** | Didelis civilinis |
| **Korpusas** | 9 |
| **Struktūra** | 60 |
| **Sistemos** | 3 |
| **Greitis** | Gentle (Švelnus) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Ginklai** | Nėra |

<br>

---

#### Taktinė paramos transporto priemonė

Pikapą ar džipą primenanti transporto priemonė su kabina dviejų žmonių įgulai ir gunneriu, stovinčiu krovinių skyriuje ir valdančiu ant šarnyro montuojamą vidutinį kulkosvaidį.

| Taktinė paramos transporto priemonė | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis civilinis |
| **Korpusas** | 6 |
| **Struktūra** | 30 |
| **Sistemos** | 2 |
| **Greitis** | Rapid (Spartus) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ginklai** | Montuojamas vidutinis kulkosvaidis (2d6) |


<br>

---

### Vandens transporto priemonės

#### Greitaeigis kateris

Tipiškas greitaeigis kateris, ginkluotas gale montuojamu minų dozatoriumi.

| Greitaeigis kateris | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis civilinis |
| **Korpusas** | 3 |
| **Struktūra** | 24 |
| **Sistemos** | 2 |
| **Greitis** | Fast (Greitas) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ginklai** | Minų dozatorius (5d6) |

<br>

#### Jachta

Tokio tipo prabangi jachta, kokią gali turėti oligarchas. Tikėtina, kad aprūpinta stebėjimo komplektu, apsaugančiu nuo priešų, bandančių atlikti neteisėtus veiksmus.

| Jachta | |
| :- | :- |
| **Dydis / Tipas** | Milžiniška civilinė |
| **Korpusas** | 10 |
| **Struktūra** | 75 |
| **Sistemos** | 4 |
| **Greitis** | Slow (Lėtas) |
| **Valdymas** | Formidable (Bauginantis) |
| **Bruožai** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Ginklai** | Nėra |


<br>

---

### Orlaiviai/Erdvėlaiviai

#### Diržablis (Civilinis oro linijų laivas)

Panašus į „Hindenburg“, šis tarpžemyninių diržablių klasės atstovas yra 245 metrų ilgio ir reikalauja 40–61 žmogaus įgulos. Paprastai jis gali pervežti nuo 50 iki 72 keleivių prabangiomis sąlygomis.

| Diržablis | |
| :- | :- |
| **Dydis / Tipas** | Didžiulis civilinis |
| **Korpusas** | 10 |
| **Struktūra** | 85 |
| **Sistemos** | 5 |
| **Greitis** | Ponderous (Lėtas ir sunkus) |
| **Valdymas** | Herculean (Herkuliškas) |
| **Bruožai** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skydai** | Nėra |
| **Ginklai** | Nėra |

<br>

---

#### Atakos sraigtasparnis

Tradicinis atakos sraigtasparnis naudoja pažangias stebėjimo technologijas telefono ir belaidžio interneto signalams perimti bei asmenims ir transporto priemonėms sekti net tamsoje per FLIR. Bandymai išvengti sekimo pasitelkiant slaptumą yra „Formidable“ (bauginantys).

| Atakos sraigtasparnis | |
| :- | :- |
| **Dydis / Tipas** | Didelis karinis |
| **Korpusas** | 11 |
| **Struktūra** | 50 |
| **Sistemos** | 3 |
| **Greitis** | Moderate (Vidutinis) |
| **Valdymas** | Easy (Lengvas) |
| **Bruožai** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skydai** | Nėra |
| **Ginklai** | 1 „Gatling“ kulkosvaidis (3d6), 4 raketos (5d6) |

<br>

---

#### Universalus naikintuvas

Šis dvivietis antžeminis naikintuvas (panašaus tipo kaip „De Havilland Mosquito“) yra gerai žinomas dėl savo našumo ir universalumo. Jo bombų skyrius gali nešti arba dvi 250 svarų bombas (laikyti kaip vidutines raketas su 0 nuotoliu), arba vieną torpedą.

| Universalus naikintuvas | |
| :- | :- |
| **Dydis / Tipas** | Didelis karinis |
| **Korpusas** | 10 |
| **Struktūra** | 45 |
| **Sistemos** | 3 |
| **Greitis** | Moderate (Vidutinis) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Skydai** | Nėra |
| **Ginklai** | 4 ant nosies montuojami „Gatling“ kulkosvaidžiai (4d6+3), 1 bombų skyrius (6d10 – žr. aprašymą) |

<br>

---

#### Tarpžvaigždinis krovininis laivas (Lengvas aukštųjų technologijų transportas)

Šiam lengvam transporto laivui reikalinga mažiausiai dviejų žmonių įgula, yra vietos dar keturiems keleiviams. Čia nurodyta standartinė gamyklinė versija, tačiau daugelis savininkų pritaiko savo „specialias modifikacijas“, tokias kaip paslėpta krovinių erdvė, „Enhanced Performance“, „Superior Handling“, atsparumas EMP, „Stealth“ ir t.t.

| Tarpžvaigždinis krovininis laivas | |
| :- | :- |
| **Dydis / Tipas** | Vidutinis civilinis erdvėlaivis |
| **Korpusas** | 10 |
| **Struktūra** | 80 |
| **Sistemos** | 2 |
| **Greitis** | Rapid (Spartus) (Parseko koeficientas 3) |
| **Valdymas** | Standard (Standartinis) |
| **Bruožai** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Skydai** | 8 |
| **Ginklai** | 2x keturių ginklų lazerinių patrankų bokšteliai (5d6) |


<br>

---

#### Bendrojo kontakto vienetas (Ypač aukštųjų technologijų erdvėlaivis)

Šis ypač aukštųjų technologijų žvaigždėlaivis yra itin pažangaus dirbtinio proto fizinė reprezentacija, kuri pasireiškia dviejų kilometrų ilgio lauku sujungtų modulių serija. Moduliai turi atskiras paskirtis, įskaitant gyvenamąsias patalpas, statybų įrenginius, krovinių zonas, maisto perdirbimą, poilsio kompleksus, angarus ir net keletą slaptų vienetų, apie kuriuos laivo intelektas retai, jei kada nors, kalba. Jam nereikia žmonių įgulos, tačiau jis gali lengvai išlaikyti iki 100 000 keleivių populiaciją. Daugelis keleivių gimsta ir miršta laive: daugelis yra laikini, atvyksta ir išvyksta savo nuožiūra.

| Bendrojo kontakto vienetas | |
| :- | :- |
| **Dydis / Tipas** | Kolosalus civilinis erdvėlaivis |
| **Korpusas** | 20 |
| **Struktūra** | 10 000 |
| **Sistemos** | 6 |
| **Greitis** | Moderate (Vidutinis) (Parseko koeficientas 4. Šiame technologiniame lygyje koeficientas lygus 1 valandai) |
| **Valdymas** | Formidable (Bauginantis) |
| **Bruožai** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Skydai** | 30 |
| **Ginklai** | Nėra tokių, apie kuriuos norėtų diskutuoti |

<br>