# Transporto priemonės

Transporto priemonės _Mythras Imperative_ sistemoje traktuojamos pusiau abstrakčiai. Iš esmės tai yra pagalbinės priemonės, naudojamos veikėjams nuskraidinti ar nuvežti iš taško A į tašką B, kurių detalių aprašymų ar statistikos dažniausiai nereikia. Visgi kartais žaidimų meistrams prireiks detalesnių transporto priemonių duomenų, kai jas būtina pavaizduoti gaudynėse ar kovinėse situacijose.

Šiame skyriuje pateiktos taisyklės leidžia pavaizduoti daugumą transporto priemonių tipų abstrakčiu būdu, siekiant suteikti lankstumo ir praturtinti pasakojimą. Žvaigždėlaiviai ir kosminiai aparatai šiek tiek skiriasi, nors jie remiasi panašiais principais.

---
## Statistika

Visos transporto priemonės aprašomos pagal jų Struktūrą (Structure), Korpusą (Hull), Greitį (Speed), Sistemas (Systems), Bruožus (Traits) ir Skydus (Shields) (jei jie yra nustatyme).

- **[Dydis](0006_Vehicles.md?id=vehicle-size-table):** Visos transporto priemonės turi vieną iš šešių Dydžio rodiklių, kurie lemia kitų charakteristikų vertes ar jų intervalus. Dėl savo didelio vidinio dydžio ir priešiškos kosmoso aplinkos, žvaigždėlaiviai turi savo verčių intervalus.
- **[Korpusas](0006_Vehicles.md?id=terrestrial-hulls):** Atspindi šarvų taškus (Armor Points).
- **[Struktūra](0006_Vehicles.md?id=terrestrial-hulls):** Atspindi transporto priemonės gyvybės taškus (Hit Points).
- **[Skydai](0006_Vehicles.md?id=shields):** Nustatymuose su pažangiomis energijos valdymo technologijomis gali būti skydai, kurie apsaugo transporto priemonę, tačiau gali išsekti dėl nuolatinio apšaudymo.
- **[Sistemos](0006_Vehicles.md?id=systems):** Atspindi gyvybiškai svarbius transporto priemonės komponentus, įskaitant jėgainę, įgulos skyrių ir t. t.
- **[Greitis](0006_Vehicles.md?id=speed):** Kiekviena transporto priemonė turi bazinį greičio rodiklį.
- **[Bruožai](0006_Vehicles.md?id=traits):** Transporto priemonė taip pat gali turėti vieną ar daugiau bruožų. Bruožai, panašiai kaip būtybėms _Mythras Imperative_ taisyklėse priskiriami gebėjimai arba kovos stiliaus bruožai, suteikia papildomą žaidimo aprašymą ir pranašumą, atspindintį transporto priemonės prigimtį.
- **[Ginklai](0006_Vehicles.md?id=weapons):** Panašiai kaip ir su bruožais, transporto priemonė gali būti aprūpinta ginklais, jei tai leidžia nustatymas. Kai kurie siūlomi pavyzdžiai ir vertės išsamiai pateikti žemiau.


---
### Korpuso dydis, tipas ir struktūra

Transporto priemonės dydis ir paskirtis veikia jos korpuso storį ir vidinės struktūros atsparumą. Pavyzdžiui, motociklas turi minimalų korpusą, sukurtą greičiui ir manevringumui. „Sausumos šarvuotis“ (Land Ironclad) (masyvus vikšrinis ar ratinis šarvuotas milžinas, varomas garo ar dyzeliniu varikliu), būdamas daug didesnė kovos laukui skirta transporto priemonė, turi daug didesnį korpusą. Lyginamieji korpusų dydžiai (ir kiek smūgių iš ginklų jie paprastai gali atlaikyti) apibendrinti toliau pateiktose Transporto priemonės dydžio ir Korpuso lentelėse.

Kai transporto priemonė patiria žalą, gaunama žala sumažinama pagal jos Korpuso vertę. Bet kokia likusi žala atimama iš transporto priemonės Struktūros taškų ir turi procentinę tikimybę, lygią prasiskverbusiai žalai, paveikti Sistemą. Jei transporto priemonės Struktūra nukrenta iki nulio, ji yra visiškai sunaikinama arba taip stipriai apgadinama, kad turi būti išardyta.

##### Sausumos korpusai

| Dydis | Struktūra | Civilinio korpuso vertė | Karinio korpuso vertė | Pavyzdys |
| :-- | :-: | :-: | :-: | :-- |
| Mažas | 1-20 | 1-3 | 4-6 | Motociklas, motociklas su priekaba, kompaktinis automobilis, kanoja, baidarė, valtis |
| Vidutinis | 21-40 | 1-6 | 7-9 | Sedanas, furgonas, pikapas, prabangus automobilis, sportinis automobilis, limuzinas, gelbėjimosi valtis, greitaeigis kateris, sklandytuvas |
| Didelis | 41-60 | 4-9 | 10-12 | Sunkvežimis, pailgintas limuzinas, visureigis, autobusas, keleivinis lėktuvas, privatus orlaivis, sklandytuvas, jachta, tankas, sraigtasparnis, povandeninis laivas |
| Milžiniškas | 61-80 | 7-12 | 13-15 | Puspriekabė, laineris, reaktyvinis lėktuvas, pakrančių apsaugos laivas, jachta |
| Didžiulis | 81-100 | 10-15 | 16-18 | Traukinys, kruizinis laineris, karinis laivas |

##### Žvaigždėlaivių korpusai

| Dydis | Struktūra | Civilinio korpuso vertė | Karinio korpuso vertė | Pavyzdys |
| :-- | :-: | :-: | :-: | :-- |
| Mažas | 10-50 | 4-9 | 10-12 | Vienvietis naikintuvas |
| Vidutinis | 51-150 | 7-12 | 13-15 | Lengvasis krovininis laivas, šaudyklė |
| Didelis | 151-450 | 10-15 | 16-18 | Sunkusis krovininis laivas, kreiseris |
| Milžiniškas | 451-1350 | 13-18 | 19-21 | Eskorto fregata, lengvasis kovinis kreiseris |
| Didžiulis | 1351-4050 | 16-21 | 21-24 | Kartų laivas, sunkusis kovinis kreiseris |
| Kolosalus | 4050-12110 | 19-24 | 24-30 | Orbitinė gyvenvietė, planetas naikinanti stotis |


---
### Skydai

Deflektorių skydai suteikia papildomą apsaugos sluoksnį toms transporto priemonėms, kuriose jie gali būti montuojami. Skydai veikia kiek kitaip nei Korpusas dėl savo išsenkančios prigimties. Jei gaunama žala yra lygi arba mažesnė už skydų vertę, ji visa blokuojama. Jei žala viršija skydo vertę, perteklius atitinkamai sumažina skydo stiprumą.

_Pavyzdžiui, karių pervežimo transportas turi 12 taškų energijos skydą. Jei į jį pataiko lazeris, padarydamas 11 žalos, ji tiesiog neprasiskverbia ir papildomo poveikio neturi. Kita vertus, jei į transportą pataiko sprogimas, padarantis 15 žalos, viršijantys trys taškai sumažins skydo stiprumą iki 9._

Kai deflektoriaus skydo stiprumas nukrenta iki nulio, jis sugriūva. Visa likusi žala pereina į korpusą.

---
### Sistemos

Kiekvieną kartą, kai transporto priemonė patiria žalą, prasiskverbiančią pro korpusą, yra tikimybė, lygi prasiskverbusiai žalai, kad bus pažeista gyvybiškai svarbi Sistema.

_Pavyzdžiui, greitaeigis kateris – transporto priemonė su 3 Korpuso ir 24 Struktūros taškais – gauna 10 žalos. Korpusas veikia kaip šarvai, sumažindamas žalą iki 7. Ši žala atimama iš 24 Struktūros taškų ir yra 7% tikimybė pažeisti vieną iš transporto priemonės Sistemų._

Žala, kurią gali atlaikyti Sistema, priklauso tik nuo transporto priemonės dydžio. Tai modeliuojama pagal tai, kiek smūgių Sistema gali atlaikyti, o ne pagal faktinį žalos kiekį. Vienas Sistemos smūgis Mažai transporto priemonei akimirksniu sunaikina tą Sistemą. Reikia dviejų smūgių Vidutinio dydžio transporto priemonės Sistemoms sunaikinti, trijų – Didelės ir t. t. Žr. [Sistemos žalos lentelę](0006_Vehicles.md?id=system-damage-table) žemiau.

Pažeistos, bet dar nesunaikintos sistemos patiria funkcijos praradimą, proporcingą gautų smūgių skaičiui – tai gali būti procentinis sumažinimas arba sudėtingumo lygio bauda Sistemos užduotims. Specifinis poveikis priklauso nuo to, ką posistemis valdo, kaip išsamiai aprašyta [Sistemos komponentų žalos lentelėje](0006_Vehicles.md?id=system-component-damage-table) žemiau. Priklausomai nuo to, kuri Sistema yra pažeista, pasekmės gali būti katastrofiškos.

_Pavyzdžiui, „Sausumos šarvuotis“ – Didžiulė transporto priemonė su 5 Sistemos smūgių limitu – gavusi du smūgius į variklį, prarastų 40% savo galios ir sumažintų savo Lėtą greitį dviem pakopomis iki „Sunkiai judančio“. Panašiai, Didelis krovininis laivas – su 3 Sistemos smūgių limitu – gavęs du smūgius į Variklio/Kuro sistemą, gautų dviejų pakopų greičio baudą bei baudą elektroninių sistemų naudojimui. Trečias smūgis sunaikintų Variklio/Kuro sistemą, o kartu ir patį laivą._

<details>
<summary>* Bendruomenės pataisymai</summary>
---
#### Žala
_Aukščiau pateiktos pastraipos yra pašalintos ir pakeistos sutrumpintu redagavimu, nurodančiu kitą pavyzdinę Sistemos efektą._

- _"Žala, viršijanti Korpusą, prasiskverbia į transporto priemonę, pažeisdama Struktūrą ir galbūt paveikdama vieną ar daugiau sistemų. Priklausomai nuo transporto priemonės dydžio, žala gali būti menka arba katastrofiška._
- _Pavyzdžiui, Didelė transporto priemonė gali atlaikyti iki dviejų smūgių į tokią sistemą kaip Variklis. Trečias smūgis funkcionaliai sunaikina Variklį. Kiekvieną kartą, kai sistema patiria smūgį, ji arba praranda procentą savo funkcijos, kaip aprašyta Sistemos žalos lentelės stulpelyje „Nuostolis per smūgį“, arba pagrindinė funkcija (tokia kaip Vairavimas, Ryšiai ir t. t.) tampa vienu Sudėtingumo lygiu sunkesnė už kiekvieną patirtą smūgį."_
---
</details>

##### Sistemos žalos lentelė

| Dydis | Sistemos smūgiai | Nuostolis per smūgį |
| :-- | :-: | :-- |
| Mažas | 1 | 100% - Sunaikinta |
| Vidutinis | 2 | 1 Lygis arba 50% |
| Didelis | 3 | 1 Lygis arba 33% |
| Milžiniškas | 4 | 1 Lygis arba 25% |
| Didžiulis | 5 | 1 Lygis arba 20% |
| Kolosalus | 6 | 1 Lygis arba 16% |

<details>
<summary>* Bendruomenės pataisymai</summary>
---
_Originalios taisyklės ir pavyzdžiai buvo nenuoseklūs: tai apsunkina nuoseklios taisyklės turėjimą. Siekiant išspręsti šias problemas, vertės ir pavyzdžiai buvo suderinti._
---
</details>

##### Sistemos komponentų žalos lentelė

| 1d10 | Sistema | Pažeidimo rezultatas | Sunaikinimo rezultatas |
| :-: | :-- | :-- | :-- |
| 1 | Krovinys | Pažeidimui proporcingas kiekis turtų ar įrangos saugykloje sunaikinamas. | Visas krovinys sunaikinamas. |
| 2 | Ryšiai | Ryšių metimai tampa vienu Sudėtingumo lygiu sunkesni kiekvieną kartą gavus žalą. | Transporto priemonė nebegali bendrauti ar klaidinti priešo jutiklių. |
| 3 | Valdymas | Laivybos, Vairavimo ar Pilotavimo metimai tampa vienu Sudėtingumo lygiu sunkesni; būtinas neatidėliotinas Valdymo metimas. | Transporto priemonė nebegali būti vairuojama ar pakeisti kurso. |
| 4 | Pavara | Greitis sumažinamas proporcingai žalai. | Transporto priemonė sustoja; orlaiviai sudūžta. |
| 5 | Įgula | Žalai proporcingas keleivių skaičius tampa aukomis. Paveiktieji patiria Sunkų sužalojimą ir turi sėkmingai atlikti Ištvermės metimą arba žūti vietoje. | Transporto priemonės keleiviai žūsta. |
| 6 | Variklis / Kuras | Greitis sumažinamas proporcingai žalai. Elektroninės sistemos tampa vienu Sudėtingumo lygiu sunkesnės. | Transporto priemonė sunaikinama katastrofiškame sprogime. |
| 7 | Jutikliai | Jutiklių, Navigacijos ir Ginklų atakų metimai tampa vienu Sudėtingumo lygiu sunkesni. | Transporto priemonė tampa „akla“. |
| 8 | Ginklai | Žalai proporcingas skaičius ginklų sistemų tampa neveiksmingas. | Transporto priemonė nebegali šaudyti. |
| 9-0 | Nėra | Sistemos nepataikytos; tik Struktūros žala. | N/A |

<details>
<summary>* Bendruomenės pataisymai</summary>
---
##### Sistemos komponentų žalos lentelė (Variklis/Kuras)
_Originalus rezultatas buvo: „Maksimalus greitis perpus sumažinamas...“ Tai prieštarauja bendrai taisyklei. Tekstas pakeistas į: „Greitis sumažinamas proporcingai žalai“._
---
</details>

---
### Greitis

Kadangi fizikiniai greičio, pagreičio, pasipriešinimo ir inercijos dėsniai yra sudėtingi, reikia supaprastinimo, todėl transporto priemonėms suteikiamas abstraktus Greičio rodiklis. Greičio charakteristika turėtų būti naudojama tik apytikriai įvertinti, ar viena transporto priemonė gali aplenkti arba pavyti kitą.

Greičio rodiklis atspindi transporto priemonės nominalų veikimo greitį. Avarinėse situacijose šis našumas gali būti padidintas vienu žingsniu, rizikuojant variklio nusidėvėjimu ar gedimu. Nors ta pati lentelė naudojama visoms transporto priemonių klasėms, reikėtų pasitelkti sveiką protą, kad būtų lyginamos tik tos pačios klasės transporto priemonės.

Greičio padidinimas virš standartinės vertės galimas sėkmingai atlikus Vairavimo metimą. Paprastai šis papildomas greitis yra tvarus tik trumpą laiką – ne ilgiau kaip 1d6 minutes, prieš transporto priemonei privalant grįžti prie standartinio greičio. Kritinis Vairavimo metimas leidžia pailginti greičio laiką iki 1d12 minučių.

Vairuotojas gali bandyti padidinti greitį 2 žingsniais, bet tai reikalauja Herculiško Vairavimo metimo, o maksimalus laikas, kurį transporto priemonė gali išlaikyti tokį greitį, yra 1d3 minutės.

##### Greičio rodiklių lentelė

| Greičio rodiklis | Maks. greičio dydis |
| :-- | :-: |
| Lėtas (Ponderous) | Didžiulis |
| Lėtėjantis (Sluggish) | |
| Lėtas (Slow) | Milžiniškas |
| Vidutiniškas (Mediocre) | |
| Lengvas (Gentle) | Didelis |
| Vidutinis (Moderate) | |
| Spartus (Rapid) | Vidutinis |
| Greitas (Fast) | |
| Skriejantis (Fleet) | Mažas |

---
### Bruožai

Maksimalus transporto priemonės bruožų skaičius priklauso nuo korpuso dydžio ir tipo.

Kiekviena transporto priemonė turi įgimtą bruožą: keliavimo būdą, kuriam ji buvo sukurta. Todėl orlaiviai turi „Oreivystės“ (Airborne) bruožą, laivai – „Vandens“ (Seaborne) ir t. t. Šis bruožas neįskaičiuojamas į leistiną skaičių.

##### Transporto priemonės bruožų paskirstymo lentelė

| Dydis | Maks. bruožų |
| :-- | :-: |
| Mažas | 1 |
| Vidutinis | 2 |
| Didelis | 3 |
| Milžiniškas | 4 |
| Didžiulis | 5 |
| Kolosalus | 6 |

*(Toliau pateikiami įvairūs bruožų aprašymai, pvz., Airborne (Oreivystė), All Terrain (Visureigis), Burrowing (Kasimasis), Camouflaged (Kamufliažas) ir t. t.)*

---
## Ginklai

Paprastai tik kariniai korpusai yra skirti ginkluotei montuoti. „Ginkluotas“ (Weaponized) bruožas gali būti paimtas civilinėms transporto priemonėms, kurios gali turėti ginkluotės poreikių.

Maksimalus ginklų sistemų skaičius, kurį transporto priemonė gali palaikyti, yra lygus 1/10 jos Struktūros taškų.

##### Ginklai pagal dydį

| Dydis | Sausumos | Kosminiai |
| :-- | :-- | :-- |
| Mažas | Lengvas ginklas | Vidutinis ginklas |
| Vidutinis | Vidutinis ginklas | Bokštinis/Sunkusis ginklas |
| Didelis | Bokštinis/Sunkusis ginklas | Ginklų baterija |
| Milžiniškas | Ginklų baterija | Pažangūs ginklai |
| Didžiulis | Pažangūs ginklai | Kėbulo ginklai |
| Kolosalus | N/A | Kėbulo ginklai (iki 3) |

---
## Valdymas ir manevrai

Evaziniai ar staigūs manevrai reikalauja sėkmingo Vairavimo/Pilotavimo metimo. Dauguma transporto priemonių sukurtos atlaikyti stresą, tačiau Žaidimų meistras gali nustatyti sunkesnį sudėtingumo lygį. Nesėkmė reiškia, kad prarandama kontrolė: ridenkite „Kontrolės praradimo“ lentelėje.

*(Toliau pateikiama Kontrolės praradimo lentelė su rezultatais nuo 01 iki 00, apimanti viską nuo „Svirimo“ iki „Katastrofiškos avarijos“.)*