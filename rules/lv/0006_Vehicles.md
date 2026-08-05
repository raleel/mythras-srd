# Transportlīdzekļi

Transportlīdzekļi _Mythras Imperative_ sistēmā tiek apskatīti semi-abstrakta veidā. Būtībā tie ir fona rīki, ko izmanto tēlu nogādāšanai no punkta A uz punktu B, bez nepieciešamības pēc detalizētiem aprakstiem vai statistikas. Tomēr reizēm spēles vadītājiem būs nepieciešami transportlīdzekļu dati, ja tos vajag attēlot pakaļdzīšanās vai kaujas situācijās.

Šīs sadaļas noteikumi ļauj attēlot lielāko daļu transportlīdzekļu veidu abstraktā veidā, kas paredzēts elastībai un stāstījuma uzlabošanai. Kosmosa kuģi un starpzvaigžņu aparāti nedaudz atšķiras, lai gan tie balstās uz līdzīgiem principiem.

---
## Statistika

Visi transportlīdzekļi tiek raksturoti pēc to Struktūras, Korpusa, Ātruma, Sistēmām, Īpašībām un Vairogiem (ja tādi ir attiecīgajā vidē).

- **[Izmērs](0006_Vehicles.md?id=vehicle-size-table):** Visiem transportlīdzekļiem ir viens no sešiem Izmēra rādītājiem, kas nosaka pārējo raksturlielumu vērtību vai diapazonu. Lielākā fiziskā izmēra un kosmosā valdošās naidīgās vides dēļ kosmosa kuģiem ir savs vērtību diapazons.
- **[Korpuss](0006_Vehicles.md?id=terrestrial-hulls):** Attēlo Bruņu Punktus (Armor Points).
- **[Struktūra](0006_Vehicles.md?id=terrestrial-hulls):** Attēlo transportlīdzekļa Trāpījumu Punktus (Hit Points).
- **[Vairogus](0006_Vehicles.md?id=shields):** Vidēs ar modernām enerģijas manipulācijas tehnoloģijām var būt vairogi, kas aizsargā transportlīdzekli, bet kas var nolietoties ilgstošas apšaudes laikā.
- **[Sistēmas](0006_Vehicles.md?id=systems):** Attēlo transportlīdzekļa svarīgākās sastāvdaļas, ieskaitot spēka iekārtu, apkalpes sekciju un tā tālāk.
- **[Ātrums](0006_Vehicles.md?id=speed):** Katram transportlīdzeklim ir pamata Ātruma rādītājs.
- **[Īpašības](0006_Vehicles.md?id=traits):** Transportlīdzeklim var būt viena vai vairākas Īpašības. Līdzīgi kā _Mythras Imperative_ noteikumos minētās Būtņu Spējas vai Kaujas Stila Īpašības, tās piedāvā papildu aprakstu un priekšrocības, atspoguļojot transportlīdzekļa dabu.
- **[Ieroči](0006_Vehicles.md?id=weapons):** Līdzīgi kā Īpašības, transportlīdzeklis var tikt aprīkots ar ieročiem atbilstoši videi. Daži ieteicamie piemēri un vērtības ir detalizēti zemāk.


---
### Korpusa Izmērs, Tips un Struktūra

Transportlīdzekļa izmērs un mērķis ietekmē tā korpusa biezumu un iekšējās struktūras noturību. Piemēram, motociklam ir minimāls korpuss, jo tas būvēts ātrumam un veiklībai. Sauszemes "Ironclad" (masīvs, kāpurķēžu vai riteņu bruņots monstrs, ko darbina tvaika vai dīzeļdzinēji), būdams daudz lielāks kaujas laukam paredzēts transportlīdzeklis, ir ar daudz masīvāku korpusu. Korpusa izmēru salīdzinājums (un tas, cik daudz trāpījumu no ieročiem tie parasti var izturēt) ir apkopots zemāk esošajās Transportlīdzekļa Izmēra un Korpusa tabulās.

Ikreiz, kad transportlīdzeklis cieš bojājumus, ienākošais kaitējums tiek samazināts par tā Korpusa vērtību. Visi atlikušie bojājumi tiek atņemti no transportlīdzekļa Struktūras punktiem, un pastāv procentuāla iespējamība, kas vienāda ar caursitošo bojājumu apjomu, ka tiks ietekmēta kāda Sistēma. Ja transportlīdzekļa Struktūra jebkurā brīdī nokrītas līdz nullei, tas tiek pilnībā iznīcināts vai tik smagi bojāts, ka ir norakstāms.

##### Sauszemes Korpusi 

| Izmērs | Struktūra | Civilā Korpusa Vērtība | Militārā Korpusa Vērtība | Piemērs |
| :-- | :-: | :-: | :-: | :-- |
| Mazs | 1-20 | 1-3 | 4-6 | Motocikls, motocikls ar blakusvāģi, kompakts auto, kanoe, kajaks, airu laiva |
| Vidējs | 21-40 | 1-6 | 7-9 | Sedans, furgons, pikaps, luksusa auto, sporta auto, limuzīns, glābšanas laiva, ātrlaiva, deltaplāns |
| Liels | 41-60 | 4-9 | 10-12 | Kravas auto, apvidus auto, autobuss, personīgais lidaparāts, planieris, tank, helikopters, zemūdene |
| Milzīgs | 61-80 | 7-12 | 13-15 | Puspiekabe, pasažieru lidmašīna, reaktīvā lidmašīna, krasta apsardzes kuģis, jahta |
| Ļoti liels | 81-100 | 10-15 | 16-18 | Vilciens, kruīza kuģis, kara kuģis |

##### Kosmosa kuģu Korpusi 

| Izmērs | Struktūra | Civilā Korpusa Vērtība | Militārā Korpusa Vērtība | Piemērs |
| :-- | :-: | :-: | :-: | :-- |
| Mazs | 10-50 | 4-9 | 10-12 | Vienvietīgs iznīcinātājs |
| Vidējs | 51-150 | 7-12 | 13-15 | Vieglais kravas kuģis, šaudls |
| Liels | 151-450 | 10-15 | 16-18 | Smagais kravas kuģis, kreiseris |
| Milzīgs | 451-1350 | 13-18 | 19-21 | Eskortfregate, vieglais kaujas kreiseris |
| Ļoti liels | 1351-4050 | 16-21 | 21-24 | Paaudžu kuģis, smagais kaujas kreiseris |
| Kolosāls | 4050-12110 | 19-24 | 24-30 | Orbitālā stacija, planētu iznīcinoša kaujas stacija |


---
### Vairogi

Deflektoru vairogi nodrošina papildu aizsardzības slāni tiem transportlīdzekļiem, kas tos var uzstādīt. Vairogi darbojas nedaudz citādāk nekā Korpuss to ablācijas dabas dēļ. Ja ienākošie bojājumi ir vienādi ar vairogu vērtību vai mazāki, tie tiek pilnībā bloķēti. Ja bojājumi pārsniedz vairoga vērtību, pārpalikums samazina vairoga izturību par šo summu.

_Piemēram, desanta transportierim ir enerģijas vairoga izturība 12 punkti. Ja transportieri trāpa lāzers ar 11 bojājumu punktiem, tas neizlaužas cauri un tam nav papildu efekta. Savukārt, ja transportieri trāpa sprādziens, kas rada 15 bojājumus, liekie trīs punkti samazinātu vairoga izturību līdz 9._

Kad deflektora vairoga izturība nokrītas līdz nullei, tas sabrūk. Jebkādi atlikušie bojājumi tiek novirzīti uz korpusu.

---
### Sistēmas

Ikreiz, kad transportlīdzeklis cieš bojājumus, kas izlaužas cauri tā korpusam, pastāv iespēja, kas vienāda ar caursitošo bojājumu apjomu, ka ir ietekmēta kāda svarīga Sistēma. 

_Piemēram, ātrlaivai (3 Korpuss, 24 Struktūra) tiek nodarīti 10 bojājumi. Korpuss darbojas kā bruņas, samazinot bojājumus līdz 7. Šie 7 tiek atņemti no 24 Struktūras punktiem, un pastāv 7% iespēja sabojāt kādu no transportlīdzekļa Sistēmām._

Bojājumi, ko Sistēma var izturēt, ir balstīti tikai uz transportlīdzekļa izmēru. Tas tiek modelēts ar trāpījumu skaitu, ko Sistēma var saņemt, nevis faktisko bojājumu apjomu. Viens Sistēmas trāpījums Mazam transportlīdzeklim uzreiz iznīcinās šo Sistēmu. Vidēja izmēra transportlīdzekļa Sistēmu sagraušanai vajadzīgi divi trāpījumi, Lielam – trīs utt. Skatīt zemāk esošo [Sistēmu bojājumu tabulu](0006_Vehicles.md?id=system-damage-table).

Sistēmas, kas ir bojātas, bet vēl nav iznīcinātas, zaudē funkcionalitāti proporcionāli saņemto trāpījumu skaitam – vai nu procentuāls samazinājums, vai grūtības pakāpes sods Sistēmas uzdevumiem. Konkrētais efekts ir atkarīgs no tā, ko apakšsistēma kontrolē, kā sīkāk aprakstīts [Sistēmu komponentu bojājumu tabulā](0006_Vehicles.md?id=system-component-damage-table). Atkarībā no tā, kura Sistēma tiek trāpīta, sekas var būt katastrofālas.

_Piemēram, "Ironclad" (Ļoti liels transportlīdzeklis ar 5 Sistēmu trāpījumiem), saņemot divus trāpījumus pa Dzinēju, zaudētu 40% jaudas un tā "Lēnais" ātrums samazinātos par divām pakāpēm līdz "Mācīgam". Līdzīgi, Liels kravas kuģis (3 Sistēmu trāpījumi), saņemot divus trāpījumus pa Dzinēju/Degvielas sistēmu, saņemtu divu pakāpju sodu ātrumam un elektronisko sistēmu lietošanai. Trešais trāpījums iznīcinātu Dzinēju/Degvielas sistēmu, un līdz ar to arī kuģi._

<details>

<summary>* Kopienas labojumi</summary>

---

#### Bojājumi

_Sākotnējais teksts šeit bija lieks, atkārtojot iepriekšējo rindkopu._

- _"Bojājumi, kas pārsniedz Korpusa izturību, iekļūst transportlīdzeklī, bojājot Struktūru un iespējams ietekmējot vienu vai vairākas sistēmas. Atkarībā no transportlīdzekļa izmēra bojājumi var būt niecīgi vai katastrofāli._
- _Piemēram, Liels transportlīdzeklis var izturēt līdz diviem trāpījumiem Sistēmai, piemēram, Dzinējam. Trešais trāpījums funkcionāli iznīcina Dzinēju. Katru reizi, kad sistēma saņem trāpījumu, tā vai nu zaudē procentuālu funkcionalitātes daļu, kā aprakstīts Sistēmu bojājumu tabulas kolonnā "Zaudējums uz trāpījumu", vai arī pamatfunkcija (piemēram, Dzinējs, Pilotēšana, Sakari utt.) kļūst par vienu Grūtības pakāpi sarežģītāka par katru saņemto trāpījumu."_

---

</details>

##### Sistēmu bojājumu tabula 

| Izmērs | Sistēmu trāpījumi | Zaudējums uz trāpījumu |
| :-- | :-: | :-- |
| Mazs | 1 | 100% - Iznīcināts |
| Vidējs | 2 | 1 pakāpe vai 50% |
| Liels | 3 | 1 pakāpe vai 33% |
| Milzīgs | 4 | 1 pakāpe vai 25% |
| Ļoti liels | 5 | 1 pakāpe vai 20% |
| Kolosāls | 6 | 1 pakāpe vai 16% |

<details>

<summary>* Kopienas labojumi</summary>

---

##### Sistēmu bojājumu tabula (Sākotnējā) 

_Sākotnējie noteikumi un piemēri bija pretrunīgi, tāpēc vērtības un piemēri ir koriģēti konsekvences nodrošināšanai._

---

</details>


##### Sistēmu komponentu bojājumu tabula 

| 1d10 | Sistēma | Bojājuma rezultāts | Iznīcināšanas rezultāts |
| :-: | :-- | :-- | :-- |
| 1 | Krava | Daļa mantu vai aprīkojuma tiek iznīcināta proporcionāli bojājumiem. | Visa krava iznīcināta. |
| 2 | Sakari | Sakaru rullējumi kļūst par vienu pakāpi grūtāki ar katru trāpījumu. | Transportlīdzeklis vairs nevar sazināties. |
| 3 | Vadība | Pilotēšanas rullējumi kļūst par vienu pakāpi grūtāki; nepieciešams tūlītējs kontroles rullējums. | Transportlīdzekli vairs nevar stūrēt. |
| 4 | Dzinējs | Ātrums samazināts proporcionāli bojājumiem. | Transportlīdzeklis apstājas; lidaparāti nogāžas. |
| 5 | Apkalpe | Daļa pasažieru kļūst par upuriem. Cietušie gūst Smagu Ievainojumu. | Transportlīdzekļa pasažieri iet bojā. |
| 6 | Dzinējs / Degviela | Ātrums samazināts proporcionāli bojājumiem. Elektroniskās sistēmas par pakāpi grūtākas. | Transportlīdzeklis eksplodē. |
| 7 | Sensori | Sensoru, Navigācijas un Ieroču uzbrukumi par pakāpi grūtāki. | Transportlīdzeklis kļūst "akls". |
| 8 | Ieroči | Daļa ieroču kļūst nelietojami. | Transportlīdzeklis vairs nevar šaut. |
| 9-0 | Nav | Tikai Struktūras bojājumi. | N/A |

---
### Ātrums

Fizikas likumi (ātrums, paātrinājums, inerce) ir kompleksi, tāpēc tiek izmantots abstrakts ātruma reitings. Ātruma raksturlielumu izmanto tikai aptuvenai spēju novērtēšanai panākt otru transportlīdzekli.

Ātruma reitings atspoguļo transportlīdzekļa nominālo ekspluatācijas ātrumu. Ārkārtas situācijās sniegumu var palielināt par vienu pakāpi, riskējot ar dzinēju bojājumiem.

Transportlīdzekļa ātruma pārsniegšana ir iespējama ar veiksmīgu Pilotēšanas rullējumu. Parasti šāds ātrums ir noturams 1d6 minūtes, pēc tam jāatgriežas standarta ātrumā. Kritiskais rullējums ļauj palielināt laiku līdz 1d12 minūtēm.

##### Ātruma reitingu tabula 

| Ātruma reitings | Maks. ātrums (Izmērs) |
| :-- | :-: |
| Mācīgs (Ponderous) | Ļoti liels |
| Lēns (Sluggish) | |
| Slow (Lēns) | Milzīgs |
| Mediocre (Viduvējs) | |
| Gentle (Mērens) | Liels |
| Moderate (Vidējs) | |
| Rapid (Ātrs) | Vidējs |
| Fast (Ļoti ātrs) | |
| Fleet (Zibenīgs) | Mazs |


---
### Īpašības

Maksimālais īpašību skaits atkarīgs no korpusa izmēra un tipa.

| Izmērs | Maks. Īpašības |
| :-- | :-: |
| Mazs | 1 |
| Vidējs | 2 |
| Liels | 3 |
| Milzīgs | 4 |
| Ļoti liels | 5 |
| Kolosāls | 6 |

*(Piezīme: Īpašību sarakstā ietilpst Airborne (Lidspēja), All Terrain (Visurgājējs), Burrowing (Rakšanās), Camouflaged (Kamuflāža), Cargo (Kravas), Carrier (Nesējs), Construction (Būvniecība), EMP Resistant (EMP izturība), Enhanced Performance (Paaugstināts sniegums), Ejector Seat (Katapultēšanās sēdeklis), FTL (Gaisma ātrāki dzinēji), Ground Vehicle (Sauszemes), Hover (Planēšana), Luxurious (Luksusa), Rails (Sliežu), Resilient (Noturīgs), Seaborne (Peldspēja), Spacecraft (Kosmosa kuģis), Stealth (Maskēšanās), Submersible (Zemūdens), Superior Handling (Viegla vadāmība), Surveillance Suite (Novērošana), Tough (Izturīgs), Tractor Beam (Traktorgestars), VTOL (Vertikālā pacelšanās), Weaponized (Bruņots).)*

---
## Ieroči

Parasti tikai militārie korpusi ir paredzēti ieroču izvietošanai. "Bruņota" (Weaponized) īpašība var tikt piešķirta civilajiem transportlīdzekļiem.
Maksimālais ieroču sistēmu skaits ir 1/10 no Struktūras punktiem.

##### Ieroči pēc Izmēra

| Izmērs | Sauszemes | Kosmosa kuģi |
| :-- | :-- | :-- |
| Mazs | Viegls ierocis | Vidējs ierocis |
| Vidējs | Vidējs ierocis | Tornī izvietots/Smagais ierocis |
| Liels | Tornī izvietots/Smagais ierocis | Ieroču baterija |
| Milzīgs | Ieroču baterija | Uzlabotie ieroči |
| Ļoti liels | Uzlabotie ieroči | Ass montējuma ieroči |

---
## Vadāmība un Manevri

Pēkšņiem manevriem nepieciešams veiksmīgs Pilotēšanas rullējums. Vadāmības grūtības pakāpes ir "Viegla", "Standarta", "Grūta", "Formidabla" un "Herculean".

*(Tabulās iekļauta arī "Kontroles zaudēšanas" tabula, sākot no "Svēršanās" (Swerve) līdz "Katastrofālai avārijai".)*

---
## Transportlīdzekļu piemēri

(Sadaļā iekļauti detalizēti dati par tādām vienībām kā **Interceptor** (Vidējs militārais), **Pursuit Motorcycle** (Mazs civilais), **Surveillance Van** (Liels civilais), **Interstellar Freighter** (Vidējs civilais kosmosa kuģis) un **General Contact Unit** (Kolosāls civilais kosmosa kuģis).)