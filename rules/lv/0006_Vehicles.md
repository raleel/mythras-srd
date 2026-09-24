# Transportlīdzekļi

Transportlīdzekļi *Mythras Imperative* sistēmā tiek apskatīti daļēji abstraktā veidā. Būtībā tie ir fona rīki, ko izmanto, lai nogādātu tēlus no punkta A uz punktu B, bez īpašas nepieciešamības pēc detalizēta apraksta vai statistikas. Tomēr reizēm spēles vadītājiem būs nepieciešama sīkāka informācija par transportlīdzekļiem, ja tie jāattēlo pakaļdzīšanās vai kaujas situācijās.

Šīs sadaļas noteikumi ļauj attēlot lielāko daļu transportlīdzekļu veidu abstraktā veidā, kas paredzēts elastībai un stāstījuma bagātināšanai. Zvaigžņu kuģi un kosmosa aparāti ir nedaudz atšķirīgi, lai gan tie balstās uz līdzīgiem principiem.

---
## Statistika

Visi transportlīdzekļi tiek aprakstīti, izmantojot to Uzbūvi, Korpusu, Ātrumu, Sistēmas, Īpašības un Vairogu (ja tāds ir pieejams iestatījumā).

- **[Izmērs](0006_Vehicles.md?id=vehicle-size-table):** Visiem transportlīdzekļiem ir viens no sešiem Izmēra rādītājiem, kas nosaka pārējo raksturlielumu vērtību vai diapazonu. To lielāka iekšējā izmēra un kosmosam raksturīgās naidīgās vides dēļ zvaigžņu kuģiem ir savs vērtību diapazons.
- **[Korpuss](0006_Vehicles.md?id=terrestrial-hulls):** Atspoguļo Bruņu punktus.
- **[Uzbūve](0006_Vehicles.md?id=terrestrial-hulls):** Atspoguļo transportlīdzekļa Trāpījumu punktus.
- **[Vairogi](0006_Vehicles.md?id=shields):** Iestatījumos ar progresīvām enerģijas manipulācijas tehnoloģijām var būt pieejami vairogi, kas aizsargā transportlīdzekli, bet var izdilts ilgstošas apšaudes laikā.
- **[Sistēmas](0006_Vehicles.md?id=systems):** Atspoguļo transportlīdzekļa svarīgos komponentus, tostarp energoiekārtu, apkalpes telpu utt.
- **[Ātrums](0006_Vehicles.md?id=speed):** Katram transportlīdzeklim ir pamata Ātruma rādītājs.
- **[Īpašības](0006_Vehicles.md?id=traits):** Transportlīdzeklim var būt arī viena vai vairākas Īpašības. Īpašības, līdzīgi kā *Mythras Imperative* noteikumos radībām piešķirtās Spējas vai kaujas stila Īpašības, piedāvā papildu spēles aprakstu un priekšrocības, atspoguļojot transportlīdzekļa dabu.
- **[Ieroči](0006_Vehicles.md?id=weapons):** Līdzīgi kā Īpašības, transportlīdzeklis var būt aprīkots ar ieročiem, ja to pieļauj iestatījums. Daži ieteiktie piemēri un vērtības ir detalizēti aprakstīti zemāk.


---
### Korpusa izmērs, tips un uzbūve

Transportlīdzekļa izmērs un mērķis ietekmē tā korpusa biezumu un iekšējās uzbūves noturību. Piemēram, motociklam ir minimāls korpuss, jo tas ir būvēts ātrumam un veiklībai. "Zemes bruņukuģis" (masīvs, kāpurķēžu vai riteņu bruņots milzis, ko darbina tvaika vai dīzeļdzinēji), būdams daudz lielāks transportlīdzeklis, kas paredzēts kaujas laukam, ir ar daudz lielāku korpusu. Salīdzinošie korpusu izmēri (un tas, cik ieroču trāpījumus tie parasti spēj izturēt) ir apkopoti zemāk esošajās tabulās par Transportlīdzekļa izmēru un Korpusa vērtībām.

Ikreiz, kad transportlīdzeklis cieš bojājumus, ienākošie bojājumi tiek samazināti par tā Korpusa vērtību. Jebkādi atlikušie bojājumi tiek atņemti no transportlīdzekļa Uzbūves punktiem, un pastāv procentuāla iespēja, kas vienāda ar iekļūstošajiem bojājumiem, ietekmēt Sistēmu. Ja transportlīdzekļa Uzbūve jebkad tiek samazināta līdz nullei, tas tiek vai nu pilnībā iznīcināts, vai tik smagi bojāts, ka tas jānodod metāllūžņos.

##### Sauszemes korpusi 

| Izmērs | Uzbūve | Civilā korpusa vērtība | Militārā korpusa vērtība | Piemērs |
| :-- | :-: | :-: | :-: | :-- |
| Mazs | 1-20 | 1-3 | 4-6 | Motocikls, motocikls ar blakusvāģi, kompakta vai maza automašīna, kanoe, kajaks, airu laiva |
| Vidējs | 21-40 | 1-6 | 7-9 | Sedans, furgons, pikaps, luksusa auto, sporta auto, muskuļauto, limuzīns, glābšanas laiva, ātrlaiva, deltaplāns, autožiro |
| Liels | 41-60 | 4-9 | 10-12 | Kravas automašīna, stiepts limuzīns, apvidus auto, autobuss, mikroautobuss, personiskais lidaparāts, planieris, atpūtas kuģītis, tanks, helikopters, zemūdene |
| Milzīgs | 61-80 | 7-12 | 13-15 | Puspiekabe, pasažieru lidmašīna, reaktīvā lidmašīna, krasta apsardzes kuģis, jahta |
| Ļoti liels | 81-100 | 10-15 | 16-18 | Vilciens, kruīza kuģis, kara kuģis |

##### Zvaigžņu kuģu korpusi 

| Izmērs | Uzbūve | Civilā korpusa vērtība | Militārā korpusa vērtība | Piemērs |
| :-- | :-: | :-: | :-: | :-- |
| Mazs | 10-50 | 4-9 | 10-12 | Vienvietīgs iznīcinātājs |
| Vidējs | 51-150 | 7-12 | 13-15 | Viegls kravas kuģis, transporta kuģis |
| Liels | 151-450 | 10-15 | 16-18 | Smags kravas kuģis, kreiseris |
| Milzīgs | 451-1350 | 13-18 | 19-21 | Eskorta fregate, viegls kaujas kreiseris |
| Ļoti liels | 1351-4050 | 16-21 | 21-24 | Paaudžu kuģis, smags kaujas kreiseris |
| Kolosāls | 4050-12110 | 19-24 | 24-30 | Orbitālā dzīvotne, planētu iznīcinoša kaujas stacija |


---
### Vairogi

Deflektora vairogi nodrošina papildu aizsardzības slāni tiem transportlīdzekļiem, kas tos var uzstādīt. Vairogi darbojas nedaudz atšķirīgi nekā Korpuss, pateicoties to dilstošajai dabai. Ja ienākošie bojājumi ir vienādi vai mazāki par vairogu vērtību, tad tie visi tiek bloķēti. Ja bojājumi pārsniedz vairoga vērtību, tad jebkura pārsnieguma daļa samazina vairoga stiprumu par šo summu.

_Piemēram, karavīru transportierim ir enerģijas vairoga stiprums 12 punkti. Ja transportieri trāpa lāzers ar 11 bojājumu punktiem, tas vienkārši neiziet cauri un nerada papildu efektu. Savukārt, ja transportieri trāpa sprādziens, kas rada 15 bojājuma punktus, pārpalikušie trīs punkti samazinātu vairoga stiprumu līdz 9._

Kad deflektora vairoga stiprums nokrītas līdz nullei, tas sabrūk. Jebkuri atlikušie bojājumi tiek novirzīti uz korpusu.

---
### Sistēmas

Ikreiz, kad transportlīdzeklis cieš bojājumus, kas iziet cauri tā korpusam, pastāv iespēja, kas vienāda ar iekļūstošajiem bojājumiem, ka ir ietekmēta kāda svarīga Sistēma.

_Piemēram, 10 bojājuma punkti tiek nodarīti ātrlaivai – transportlīdzeklim ar 3 Korpusa un 24 Uzbūves punktiem. Korpuss darbojas kā bruņas, samazinot bojājumus līdz 7. Tie tiek atskaitīti no 24 Uzbūves punktiem, un pastāv 7% iespēja sabojāt vienu no transportlīdzekļa Sistēmām._

Bojājumi, ko Sistēma var izturēt, balstās tikai uz transportlīdzekļa izmēru. To modelē pēc trāpījumu skaita, ko Sistēma var izturēt, nevis pēc faktiskā bojājumu daudzuma. Viens Sistēmas trāpījums Mazam transportlīdzeklim acumirklī iznīcinās šo Sistēmu. Nepieciešami divi trāpījumi, lai iznīcinātu Vidēja izmēra transportlīdzekļa Sistēmas, trīs – Lielam transportlīdzeklim utt. Skatīt [Sistēmu bojājumu tabulu](0006_Vehicles.md?id=system-damage-table) zemāk.

Sistēmas, kas ir bojātas, bet vēl nav iznīcinātas, cieš funkciju zudumu, kas ir proporcionāls saņemto Trāpījumu skaitam – vai nu procentuāls samazinājums, vai grūtības pakāpes (Grade) sods Sistēmas uzdevumiem. Konkrētais efekts ir atkarīgs no tā, ko apakšsistēma kontrolē, kā sīkāk izklāstīts zemāk esošajā [Sistēmas komponentu bojājumu tabulā](0006_Vehicles.md?id=system-component-damage-table). Atkarībā no tā, kura Sistēma tiek skarta, sekas var būt katastrofālas.

_Piemēram, Zemes bruņukuģis – Ļoti liels transportlīdzeklis ar 5 Sistēmu trāpījumu izturību – divreiz trāpīts pa dzinēju, zaudētu 40% no savas jaudas un samazinātu savu Lēno ātrumu par divām pakāpēm līdz "Ponderous" (Ļoti lēns). Līdzīgi, Liels kravas kuģis – ar 3 Sistēmu trāpījumu izturību – saņemot divus trāpījumus pa Dzinēja/Degvielas sistēmu, iegūtu divu pakāpju sodu Ātrumam, kā arī elektronisko sistēmu izmantošanai. Trešais trāpījums iznīcinātu Dzinēja/Degvielas sistēmu un līdz ar to arī kuģi._


<details>

<summary>* Kopienas labojumi</summary>

---

#### Bojājumi


_Sākotnējais teksts šeit atradās tālāk. Novietots tieši pēc Sistēmu sadaļas, tas nevajadzīgi atkārto iepriekšējo rindkopu._

- _"Bojājumi, kas pārsniedz Korpusa izturību, iekļūst transportlīdzeklī, bojājot Uzbūvi un iespējams ietekmējot vienu vai vairākas sistēmas. Atkarībā no transportlīdzekļa izmēra bojājumi var būt nelieli vai katastrofāli._
- _Piemēram, Liels transportlīdzeklis var saņemt līdz diviem trāpījumiem pa tādu sistēmu kā dzinējs. Trešais trāpījums funkcionāli iznīcina dzinēju. Katru reizi, kad sistēma saņem trāpījumu, tā zaudē vai nu procentuālo funkciju daļu, kā aprakstīts zemāk esošās Sistēmu bojājumu tabulas kolonnā "Zudums uz trāpījumu", vai arī pamatfunkcija (piemēram, dzinējs, pilots, sakari utt.) kļūst par vienu grūtības pakāpi grūtāka par katru saņemto trāpījumu."_

_Iepriekšējās rindkopas ir noņemtas, un to vietā ir saīsināts rediģējums, izceļot citu sistēmas efekta piemēru._

---

</details>

##### Sistēmu bojājumu tabula 

| Izmērs | Sistēmu trāpījumi | Zudums uz trāpījumu |
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

##### Sistēmu bojājumu tabula (Oriģinālā) 

| Izmērs | Sistēmu trāpījumi | Zudums uz trāpījumu |
| :-- | :-: | :-- |
| Mazs | 1 | 1 pakāpe vai 50% |
| Vidējs | 2 | 1 pakāpe vai 33% |
| Liels | 3 | 1 pakāpe vai 25% |
| Milzīgs | 4 | 1 pakāpe vai 20% |
| Ļoti liels | 5 | 1 pakāpe vai 16% |
| Kolosāls | 6 | 1 pakāpe vai 10% |

##### Transportlīdzekļa izmēru tabula (no [Korpusa izmērs, tips un uzbūve](0006_Vehicles.md?id=hull-size-type-and-structure))

| Izmērs | Sistēmu trāpījumi |
| :-- | :-: |
| Mazs | 1 |
| Vidējs | 2 |
| Liels | 3 |
| Milzīgs | 4 |
| Ļoti liels | 5 |
| Kolosāls | 6 |

_Sākotnējie noteikumi un piemēri ir pretrunīgi:_
- _"Sistēmas, kas ir bojātas, bet vēl nav iznīcinātas, cieš funkciju zudumu. Tas ir vienāds ar pašreizējo trāpījumu proporciju pret kopējo spēju. Tātad, Ļoti liels transportlīdzeklis, kas divreiz trāpīts pa dzinēju, zaudētu 40% no savas jaudas (2 trāpījumi no maksimuma 5)"._ 
   - _Tas liek domāt, ka Ļoti lielam transportlīdzeklim, kuram ir 5 Sistēmu trāpījumi, vajadzētu zaudēt 20% ar katru trāpījumu – bet tabulā teikts 16%._
- _"Piemēram, Liels transportlīdzeklis var saņemt līdz trim trāpījumiem pa tādu sistēmu kā dzinējs. Ceturtais trāpījums funkcionāli iznīcina dzinēju."_ 
  - _"Tas liek domāt – tāpat kā tabula – par 25% bojājumu uz vienu Sistēmas trāpījumu, bet Lieli transportlīdzekļi saskaņā ar to pašu tabulu var izturēt tikai 3 Sistēmu trāpījumus._
- _Lai gan tas nav pretrunīgi, Transportlīdzekļa izmēru tabula bija lieka; tā parādījās vēlreiz pilnīgākā formā (pievienojot kolonnu "Zudums uz trāpījumu") tikai dažas rindiņas vēlāk._

_Tas apgrūtina konsekventu noteikumu ievērošanu. Lai risinātu šīs problēmas, vērtības un piemēri ir mainīti, lai tie sakristu, un Transportlīdzekļa izmēru tabula tika noņemta._

---

</details>


##### Sistēmas komponentu bojājumu tabula 

| 1d10 | Sistēma | Bojājuma rezultāts | Iznīcināšanas rezultāts |
| :-: | :-- | :-- | :-- |
| 1 | Krava | Daļa no glabātuvē esošajām mantām vai aprīkojuma, proporcionāli bojājumiem, tiek iznīcināta. | Visa krava ir iznīcināta. |
| 2 | Sakari | Sakaru metieni cieš vēl vienu Grūtības pakāpi katru reizi, kad tie tiek bojāti. | Transportlīdzeklis vairs nespēj sazināties vai atmaskot ienaidnieka sensorus. |
| 3 | Vadība | Laivošanas, Braukšanas vai Pilotēšanas metieni cieš vēl vienu Grūtības pakāpi katru reizi, kad tie tiek bojāti; nepieciešams tūlītējs Vadības metiens. | Transportlīdzekli vairs nav iespējams stūrēt vai mainīt kursu. |
| 4 | Dzinējs | Ātrums samazināts par summu, kas proporcionāla bojājumiem. | Transportlīdzeklis pilnībā apstājas; lidaparāti avarē. |
| 5 | Apkalpe | Skaits pasažieru, kas proporcionāls bojājumiem, gūst ievainojumus. Tie, kurus tas skar, gūst Smagu ievainojumu un tiem jāizdodas Izturības (IZT) metienam, vai arī tie iet bojā acumirklī. | Transportlīdzeklī esošie iet bojā. |
| 6 | Dzinējs / Degviela | Ātrums samazināts par summu, kas proporcionāla bojājumiem. Elektroniskās sistēmas ir par vienu Grūtības pakāpi grūtāk izmantojamas. | Transportlīdzeklis tiek iznīcināts katastrofālā sprādzienā. |
| 7 | Sensori | Sensoru, navigācijas un ieroču uzbrukuma metieni cieš vēl vienu Grūtības pakāpi katru reizi, kad tie tiek bojāti. | Transportlīdzeklis tiek padarīts akls. |
| 8 | Ieroči | Ieroču sistēmu skaits, kas proporcionāls bojājumiem, kļūst neoperatīvs. | Transportlīdzeklis vairs nespēj šaut ar ieročiem. |
| 9-0 | Nav | Sistēmas nav skartas; tikai Uzbūves bojājumi. | N/A |

<details>

<summary>* Kopienas labojumi</summary>

---

##### Sistēmas komponentu bojājumu tabula (Dzinējs/Degviela)

_Sākotnējais rezultāts bija šāds: "Maksimālais ātrums tiek samazināts uz pusi..." Tas ir pretrunā ar vispārējo noteikumu par bojājumu sodiem proporcionāli Sistēmas bojājumiem: 25% bojājumi = 25% sods. Turklāt pilnie noteikumi "Mythras Companion" nepiemin šo ātruma samazināšanu uz pusi._

_Rezultātā teksts ir aizstāts ar tādu pašu ierakstu kā Dzinēja sistēmām: "Ātrums samazināts par summu, kas proporcionāla bojājumiem."_

---

</details>


---
### Ātrums

Tā kā ātruma, paātrinājuma, pretestības un inerces fizika (nosaucot tikai dažus) ir sarežģīti jautājumi, ir nepieciešams zināms vienkāršojums, tāpēc transportlīdzekļiem tiek piešķirts abstrakts ātruma rādītājs. Ātruma raksturlielumu vajadzētu izmantot tikai aptuvenai spriešanai par to, vai viens transportlīdzeklis var apdzīt vai panākt citu.

Ātruma rādītājs atspoguļo transportlīdzekļa nominālo darbības ātrumu. Ārkārtas situācijās šo veiktspēju var palielināt par vienu pakāpi, riskējot ar dzinēju nolietojumu vai bojājumiem. Lai gan visiem transportlīdzekļu veidiem tiek izmantota viena un tā pati tabula, jāizmanto veselais saprāts, lai salīdzinātu tikai tās pašas klases transportlīdzekļus. Piemēram, ja zvaigžņu kuģim un sporta automašīnai ir vienāds paātrinājuma rādītājs "Straujš" (Rapid), tad vajadzētu būt skaidram, ka kosmosa kuģis ir salīdzinoši ātrāks.

Palielināt transportlīdzekļa ātrumu virs tā standarta vērtības ir iespējams ar veiksmīgu Braukšanas metienu. Parasti šis papildu ātrums ir ilgtspējīgs tikai īsu laiku – ne vairāk kā 1d6 minūtes, pirms transportlīdzeklim jāatgriežas standarta ātrumā, citādi pastāv risks sabojāt energoiekārtu. Kritisks Braukšanas metiens ļauj palielinātā ātruma periodu pagarināt līdz 1d12 minūtēm.

Vadītājs var mēģināt palielināt transportlīdzekļa ātrumu par 2 pakāpēm, taču tam ir nepieciešams Herculisks Braukšanas metiens, un maksimālais laiks, ko transportlīdzeklis var uzturēt šo ātrumu, ir 1d3 minūtes: kritisks panākums nepagarinās paaugstinātā ātruma ilgumu.

##### Ātruma rādītāju tabula 

| Ātruma rādītājs | Maksimālais ātrums priekš |
| :-- | :-: |
| Ponderous (Ļoti lēns) | Ļoti liels |
| Sluggish (Gauss) | |
| Slow (Lēns) | Milzīgs |
| Mediocre (Viduvējs) | |
| Gentle (Mērens) | Liels |
| Moderate (Vidējs) | |
| Rapid (Straujš) | Vidējs |
| Fast (Ātrs) | |
| Fleet (Vēja spārniem) | Mazs |


---
### Īpašības

Maksimālais īpašību skaits, kāds var būt transportlīdzeklim, ir atkarīgs no korpusa izmēra un veida.

Katram transportlīdzeklim ir raksturīga īpašība: pārvietošanās veids, kuram tas galvenokārt tika paredzēts. Tāpēc lidaparātiem pēc būtības ir "Gaisakuģa" īpašība, laivām "Jūras kuģa" īpašība utt. Šī raksturīgā īpašība netiek skaitīta pieejamo īpašību skaitā. Tomēr, ja transportlīdzeklī ir jāiekļauj otrs pārvietošanās veids – piemēram, lidojoša zemūdene –, tad "Gaisakuģa" īpašība būtu jāizvēlas kā viena no pieejamajām īpašībām.

Dažas īpašības var nebūt pieejamas atkarībā no iestatījuma tehnoloģiju līmeņa; spēles vadītājiem jāpieņem savi lēmumi par to, kādas īpašības var tikt piemērotas.

##### Transportlīdzekļu īpašību piešķiršanas tabula 

| Izmērs | Maksimālās īpašības |
| :-- | :-: |
| Mazs | 1 |
| Vidējs | 2 |
| Liels | 3 |
| Milzīgs | 4 |
| Ļoti liels | 5 |
| Kolosāls | 6 |

#### Gaisakuģis (Airborne)

Transportlīdzeklis ir spējīgs lidot atmosfērā.

#### Visurgājējs (All Terrain)

Šī īpašība jāizmanto ar Sauszemes transportlīdzekļiem. Transportlīdzeklis var šķērsot neuzmīlīgu, sarežģītu un stāvu apvidu, izmantojot vai nu kāpurķēdes, uzlabotu piekari un piedziņas sistēmas, vai jaudīgus diferenciāļus.

#### Rakšanās (Burrowing)

Transportlīdzeklis ir paredzēts rakšanai un tuneļu veidošanai zemē. Tas var sasniegt maksimālo dziļumu, kas vienāds ar tā Korpusa rādītāju x5 metriem.

#### Kamuflāža (Camouflaged)

Transportlīdzeklim ir vai nu maskējoša krāsa, vai mimetiski sensori, kas ļauj tam saplūst ar apkārtējo vidi. Mēģinājumi pamanīt transportlīdzekli vizuāli ir par vienu grūtības pakāpi grūtāki.

#### Krava (Cargo)

Transportlīdzeklis ir paredzēts īpaši kravas, nevis pasažieru pārvadāšanai. Pasažieru nodalījumi ir samazināti līdz minimumam, pārējo transportlīdzekļa izmantojamo telpu veltot kravas izvietošanai ar atbilstošām sekcijām, rīkiem un pat klimatisko kontroli (piemēram, saldētavas sekcijas ātri bojājošos preču pārvadāšanai). Kad transportlīdzeklis ir piekrauts, tā ātrums ir par divām pakāpēm zemāks nekā parasti pieļautu tā korpusa izmērs.

#### Pārvadātājs (Carrier)

Transportlīdzeklis ir paredzēts īpaši mazāku, viegli apkalpotu vai iespējams attālināti vadāmu civilā vai militārā tipa transportlīdzekļu pārvadāšanai. Jebkuram transportlīdzeklim ar šo īpašību ir jābūt vismaz Ļoti lielam. Pārvadājamo mazo kuģu skaits var mainīties atkarībā no misijas veida un mērķa, taču tas var būt no 10 līdz tik, cik ir transportlīdzekļa Uzbūves rādītājs.

#### Būvniecība (Construction)

Transportlīdzeklis ir aprīkots smagiem celtniecības darbiem. Visiem transportlīdzekļiem ar šo īpašību ir arī "Visurgājēja" īpašība, taču ātrums ir par divām pakāpēm zemāks nekā parasti pieļautu to korpusa izmērs. Transportlīdzeklis ir aprīkots ar uzdevumam atbilstošiem rīkiem, piemēram, celtņa strēlēm, ekskavatora kausiem, pašizgāzēju kravas kastēm utt.

#### EMP Noturība (EMP Resistant)

Transportlīdzeklis ir pasargāts pret elektromagnētiskā impulsa uzbrukumiem.

#### Uzlabota veiktspēja (Enhanced Performance)

Transportlīdzekļa Ātruma rādītājs ir par vienu pakāpi augstāks nekā maksimālais tā izmēram.

#### Katapultēšanās krēsls (Ejector Seat)

Ārkārtas gadījumā katapultēšanās krēsls izmet pasažierus vairākus simtus metru gaisā, tad izlaiž izpletni drošai nolaišanās veikšanai. Izpletnis ir neobligāts. Nav ieteicams helikopteriem (izņemot *Kamov Ka-52 Alligator*).

#### FTL (Ātrāks par gaismu)

Tikai kosmosa kuģiem. Kuģis ir aprīkots ar ātrāku par gaismu dzinēju (vai tas būtu hiperdzinējs, deformācijas dzinējs, tārpejas ģenerators vai tamlīdzīgs). FTL dzinējam ir atsevišķs Ātruma rādītājs, kas būtībā mēra ātrumu, ar kādu zvaigžņu kuģis var šķērsot vienu parseku (3,26 gaismas gadus, jeb 31 triljonu kilometru), kā norādīts zemāk:

##### FTL ātruma rādītāju tabula 

| Ātruma rādītājs | Faktors viena parseka šķērsošanai |
| :-- | :-: |
| Ponderous (Ļoti lēns) | 10 |
| Sluggish (Gauss) | 8 |
| Slow (Lēns) | 7 |
| Mediocre (Viduvējs) | 6 |
| Gentle (Mērens) | 5 |
| Moderate (Vidējs) | 4 |
| Rapid (Straujš) | 3 |
| Fast (Ātrs) | 2 |
| Fleet (Vēja spārniem) | 1 |

Faktora laiku izlemj spēles vadītājs, atkarībā no tā, cik attīstīta ir iestatījuma FTL tehnoloģija. Piemēram, bāzes faktors var būt 1 diena, kas nozīmē, ka kuģim ar Ļoti lēnu FTL dzinēju ceļojuma pabeigšanai nepieciešamas 10 dienas, savukārt kuģis ar Vēja spārniem FTL dzinēju ceļojumu pabeidz 1 dienā. Citviet, kur FTL tehnoloģija ir ievērojami mazāk efektīva, faktora laiku var mērīt mēnešos, nevis dienās.

Tiek pieņemts, ka kuģim ir degvielas rezerves, lai veiktu atpakaļceļu vai uzpildītos galamērķī.

Tiek pieņemts, ka jebkura izmēra zvaigžņu kuģi var aprīkot ar FTL dzinēju, lai gan arī tas ir atkarīgs no iestatījuma.

FTL dzinējus nevar aktivizēt 1,5 astronomisko vienību attālumā no zvaigznes (aptuveni 225 miljoni kilometru). Tas nozīmē, ka kuģiem jāizmanto zemgaismas dzinējs, lai pārvietotos līdz aptuveni Marsa orbītas attālumam, pirms aktivizēt FTL sistēmu.

#### Sauszemes transportlīdzeklis (Ground Vehicle)

Transportlīdzeklis ir spējīgs pārvietoties pa sauszemi.

#### Lidotspēja (Hover)

Transportlīdzeklis planē virs zemes, izmantojot gaisa spilvenu vai pretgravitācijas repulsoru.

#### Luksusa (Luxurious)

Transportlīdzeklis ir paredzēts īpaši pasažieru pārvadāšanai noteiktā luksusa līmenī. Liekā kravas telpa ir atvēlēta greznām pasažieru mītnēm, peldbaseiniem, karstajām vannām, papildu apkalpei pasažieru kaprīžu izpildei utt.

#### Sliedes (Rails)

Transportlīdzeklis paļaujas uz sliežu sistēmu. Transportlīdzekļi ar šo īpašību dabiski var sasniegt Ātruma rādītāju par trīs pakāpēm augstāku nekā parasti pieļautu to korpusa izmērs, taču tie, protams, ir ierobežoti tikai ar kustību pa sliežu sistēmu.

#### Noturīgs (Resilient)

Visas sistēmas var izturēt par vienu trāpījumu vairāk, nekā parasti nosaka Izmērs. Šo īpašību var krāt – tātad "Noturīgs 2" norāda, ka sistēmas var izturēt par 2 trāpījumiem vairāk nekā parasti, par divu Īpašības punktu izmaksām.

#### Jūras kuģis (Seaborne)

Transportlīdzeklis ir peldošs uz ūdens.

#### Kosmosa kuģis (Spacecraft)

Transportlīdzeklis ir hermētiski noslēgts pret vakuumu un aizsargāts pret kosmisko starojumu, un atkarībā no dizaina var būt spējīgs atstāt atmosfēru un atgriezties tajā, kā arī uzturēt lidojumu atmosfērā.

#### Stealth (Maskēšanās)

Tikai lidaparātiem. Transportlīdzeklis ir izstrādāts, lai izvairītos no radaru un citu tāldarbības sensoru sistēmu noteikšanas. Mēģinājumi pamanīt transportlīdzekli, izmantojot elektroniskos sensorus, ir par vienu grūtības pakāpi grūtāki.

#### Zemūdens (Submersible)

Transportlīdzeklis ir spējīgs iegremdēties zem okeāna virsmas līdz darbības dziļumam, kas vienāds ar tā Korpusa rādītāju x10 metriem. Sabrukšanas dziļums – absolūtais maksimums, ko zemūdene var sasniegt, netiekot saspiestai, – ir 1,5 reizes lielāks par tās darbības dziļumu.

#### Superior Handling (Izcila vadāmība)

Transportlīdzekļa vadāmība ir novērtēta kā Viegla.

#### Novērošanas komplekts (Surveillance Suite)

Transportlīdzeklim ir borta dators, sakaru bāzes stacija, uztvērējs noklausīšanās ierīču signāliem un aparatūra viedtālruņu signālu pārtveršanai 100 metru rādiusā.#### Izturīgs (Tough)

Civilais transportlīdzeklis ar šo pazīmi iegūst savu korpusa vērtību (Hull) no Militārās kolonnas un automātiski iegūst maksimālo Struktūru. Militārs transportlīdzeklis ar šo pazīmi iegūst savu korpusu un Struktūru no nākamās rindas zemāk.

#### Vilcējstūris (Tractor Beam)

Tikai kosmosa kuģiem. Kuģis ir aprīkots ar vilcējstūri, kas var satvert un pievilkt transportlīdzekļus, kuru korpusa vērtība ir līdz pat divām pakāpēm zemāka nekā pašam kuģim. Tādējādi milzīgs (Huge) zvaigžņu kuģis varētu pievilkt un noturēt vidēja (Medium) izmēra korpusu.

#### VTOL

Vertikālā pacelšanās/nosēšanās. Šī pazīme ir raksturīga helikopteriem un līdzīgiem transportlīdzekļiem, kas izmanto rotoru kombināciju celtspējas radīšanai. Attiecinot uz lidaparātiem ar fiksētiem spārniem, tas norāda uz fiksētu vai regulējamu dzinēju izmantošanu, lai kontrolētu stāvokli gaisā, pacelšanos un nolaišanos.

#### Ūdensceļotājs (Waterborne)

Transportlīdzeklis pārvietojas, izmantojot artikulētas kājas. Gājēju (Walker) tipa transportlīdzekļu ātrums ir ierobežots līdz "Mērenam" (Gentle) neatkarīgi no to izmēra (IZM). Tomēr gājējus var uzbūvēt tādā augstumā, kas būtu vienkārši nestabils transportlīdzekļiem, kuri aprīkoti ar citiem pārvietošanās līdzekļiem.

Šis transportlīdzeklis spēj pārvietoties zem ūdens.

#### Bruņots (Weaponized)

Transportlīdzeklis ir pielāgots ieroču izvietošanai. Ieroču sistēmas ir aplūkotas tālāk sadaļā [Ieroči](0006_Vehicles.md?id=weapons).


---
## Ieroči

Parasti tikai militārie korpusi ir konstruēti ieroču izvietošanai (stiprinājuma punkti, munīcijas uzglabāšana, vadības sistēmas). Pazīmi "Bruņots" var izvēlēties civiliem transportlīdzekļiem, kuriem var būt nepieciešamība pēc ieročiem.

Maksimālais ieroču sistēmu skaits, ko transportlīdzeklis var atbalstīt, ir vienāds ar 1/10 daļu no tā Struktūras punktiem (tātad transportlīdzeklis ar 40 Struktūru var atbalstīt 4 ieroču sistēmas, ja tas ir militārs transportlīdzeklis vai "Bruņots" civils transportlīdzeklis).

Ieroču sistēmas ir atkarīgas no transportlīdzekļa izmēra (IZM). Maksimālais ieroču sistēmas tips dažādiem izmēriem ir parādīts tālāk esošajās tabulās.


##### Ieroči pēc izmēra tabulas

| Izmērs | Sauszemes | Kosmosa kuģis |
| :-- | :-- | :-- |
| Mazs (Small) | Viegls ierocis (piem., triecienšautene) | Vidējs ierocis (piem., ložmetējs, raķešu palaišanas iekārta) |
| Vidējs (Medium) | Vidējs ierocis (piem., ložmetējs, raķešu palaišanas iekārta) | Tornīša/Smagais ierocis (piem., smagie savienotie ložmetēji, miniguni) |
| Liels (Large) | Tornīša/Smagais ierocis (piem., smagie savienotie ložmetēji, miniguni) | Ieroču baterija (piem., kaujas artilērija) |
| Milzīgs (Huge) | Ieroču baterija (piem., kaujas artilērija) | Uzlaboti ieroči (piem., raķešu sistēmas) |
| Ļoti liels (Enormous) | Uzlaboti ieroči (piem., raķešu sistēmas) | Korpusā montēti ieroči (tikai viens) |
| Kolosāls (Colossal) | NA | Korpusā montēti ieroči (līdz 3) |

##### Ieroču statistikas piemērs
 
| Ierocis | Bojājumi | Diapazons | Uguns ātrums | Munīcija/Ielāde |
| :-- | :-: | :-: | :-: | :-: |
| 50 collu lielgabals | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Miniguns/Getlinga lielgabals | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Raķete | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Vidēja raķete/torpēda | 6d10 | Maks. 200km | 1 | 1/5 |
| Liela/spārnotā raķete | 6d10+10 | Maks. 1000km | 1 | 1/10 |
| Lāzera/Plazmas lielgabals | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Smagais lāzera/Plazmas lielgabals | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artilērijas baterija | 5d6+6 | Maks. 50km | 1 | 1/5 |
| Korpusā montētā baterija | 10d6+6 | Maks. 20000km | 1 | 1/10 |

_Diapazoni ir norādīti metros un kilometros._

_Uguns ātrums ir paredzēts vienam šāvienam, pusautomātiskajam un pilnībā automātiskajam režīmam._

_Munīcija ir šaušanas spēja pirms nepieciešamības pārlādēt. Ielāde ir pārlādēšanas laiks kaujas raundos, pieņemot, ka ir pieejama pilna apkalpe._

---
## Vadāmība un manevri

Izvairīšanās vai pēkšņi manevri prasa veiksmīgu Vadīšanas/Pilotēšanas metienu, lai nodrošinātu, ka vadītājs vai pilots saglabā kontroli pār transportlīdzekli. Lielākā daļa transportlīdzekļu ir projektēti un būvēti tā, lai izturētu periodiskas slodzes un spriedzi, taču Spēles vadītājs var noteikt, ka konkrēts manevrs prasa metienu ar augstāku grūtības pakāpi atkarībā no tā, cik tas ir ambiciozs. Neveiksme nozīmē kontroles zaudēšanu pār transportlīdzekli: metiet uz "Kontroles zaudēšanas" tabulas.

Ievērojiet, ka "Kontroles zaudēšanas" tabula attiecas tikai uz sauszemes transportlīdzekļiem. Līdzīgus efektus var piemērot gaisa un kosmosa transportlīdzekļiem, taču Spēles vadītājiem būs jāpielāgo pamatojums konkrētajam efektam. Piemēram, lidmašīna slīdēšanas vietā var iekļūt spirālē.

Tāpat transportlīdzekļa iedzimtā vadāmība var papildus ietekmēt Vadīšanas metienu. Vadāmība ir vai nu Vienkārša (Easy), Standarta (Standard), Grūta (Hard), Formidabla (Formidable) vai Herkuliesa (Herculean), un tā nosaka sākumpunktu Vadīšanas metienam manevra izpildes laikā. Grūtības pakāpe manevram pēc tam tiek piemērota vadāmībai, lai noteiktu galīgo grūtību.

Piemēram, augstas veiktspējas motociklam ir iebūvēti žirostabilizatori, kas piešķir tam Vienkāršu (Easy) vadāmību. Vadītājs vēlas veikt 180 grādu pagrieziena slīdēšanu, lai izvairītos no vajātāja – manevru, kuru Spēles vadītājs novērtē kā vienu papildu grūtības pakāpi. Tādēļ braucējam jāveic savs Vadīšanas metiens ar Standarta (Standard), nevis Vienkāršu (Easy) grūtību. Ja viņš būtu mēģinājis to pašu manevru ar nestabilizētu motociklu, Vadīšanas metiens būtu Grūts (Hard).

"Superior Handling" (Izcila vadāmība) ir pazīme. Ja transportlīdzeklim nav šīs pazīmes tā aprakstā, tad noklusējuma vadāmība ir Standarta (Standard) jebkuram transportlīdzeklim, kura izmērs ir Liels (Large) vai mazāks. Milzīgiem (Huge) un Ļoti lieliem (Enormous) transportlīdzekļiem pēc noklusējuma ir attiecīgi Formidabla (Formidable) un Herkuliesa (Herculean) vadāmības pazīme, un Spēles vadītājs ir brīvs lemt, ka noteikti manevri transportlīdzekļa izmēra dēļ ir vienkārši neiespējami.

##### Kontroles zaudēšanas tabula 

| 1d100 | Rezultāts |
| :-: | :-- |
| 01-25 | Zvērdiens. Kontroles zaudēšana ir īslaicīga. Transportlīdzeklis uz 5 sekundēm samazina ātrumu par 1 pakāpi. |
| 26-40 | Sānslīde. Vadītājam jācīnās, lai saglabātu kontroli pār transportlīdzekli. Transportlīdzeklis uz 10 sekundēm samazina ātrumu par 2 pakāpēm. |
| 41-50 | Smaga sānslīde. Transportlīdzeklis nonāk pretējā virzienā un apstājas uz 15 sekundēm. |
| 51-60 | Apmešanās. Transportlīdzeklis slīd un kūleņo, nodarot 3d10 bojājumus savai Struktūrai. Pasažieriem jāveic veiksmīgs Izturības (IZT) metiens, vai arī tie saņem 1d10 bojājumus 1d3 skartajās ķermeņa daļās. |
| 61-70 | Smaga apmešanās. Kā iepriekš, bet transportlīdzeklis saņem 3d10+10 bojājumus un pasažieri saņem 1d10 bojājumus pat tad, ja Izturības (IZT) metiens ir veiksmīgs, un 2d10, ja tas neizdodas. |
| 71-80 | Norakstīšana. Kā iepriekš, bet transportlīdzekļa Struktūra tiek samazināta līdz 0. Pasažieri saņem tādus pašus bojājumus kā pie Smagas apmešanās. |
| 81-90 | Sprādziens. Kā iepriekš, bet transportlīdzekļa degvielas sistēma aizdegas un uzsprāgst 1d20+10 sekunžu laikā. Ja nav iespējams tikt ārā, pasažieri gūst papildu 1d6 apdeguma bojājumus 1d6 ķermeņa daļās. |
| 91-98 | Tūlītējs sprādziens. Kā iepriekš, bet sprādziens ir tūlītējs. |
| 99-00 | Katastrofāla avārija. Pasažieriem jāveic veiksmīgs Izturības (IZT) metiens, citādi tie iet bojā uz vietas. Bojājumi tiek nodarīti tāpat kā pie Norakstīšanas. |


---
## Transportlīdzekļu piemēri

---

### Sauszemes transportlīdzekļi

#### Pārtvērējs (Interceptor)

Uzlabota luksusa automašīna, sporta auto vai tamlīdzīgs spēkrats; šis auto ir būvēts ātrumam un spēj atbildēt ar to pašu kaujas laukā. Šis ir tas transportlīdzeklis, par kuru cilvēki domā, kad kāds saka: "spiegu auto".

| Pārtvērējs | |
| :- | :- |
| **Izmērs / Tips** | Vidējs militārais |
| **Korpuss** | 6 |
| **Struktūra** | 40 |
| **Sistēmas** | 2 |
| **Ātrums** | Ātrs |
| **Vadāmība** | Vienkārša |
| **Pazīmes** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ieroči** | Eļļas traipu izsmidzinātājs, dūmu aizsegs, divi savienoti vidējie ložmetēji (2d6+3) |

<br>

---

#### Vajāšanas motocikls

Viegls, ātrs motocikls ātrai vajāšanai. Vajāšanas motocikls nes pārsteigumu – vai nu pāri savienotu ložmetēju, vai divas raķetes.

| Vajāšanas motocikls | |
| :- | :- |
| **Izmērs / Tips** | Mazs civilais |
| **Korpuss** | 2 |
| **Struktūra** | 12 |
| **Sistēmas** | 1 |
| **Ātrums** | Ātrs |
| **Vadāmība** | Vienkārša |
| **Pazīmes** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ieroči** | Divas raķetes (4d6) vai divi savienoti vieglie ložmetēji (2d6) |

<br>

---

#### Sedans

Standarta 4 durvju sedans, kurā ir pietiekami daudz vietas, lai ērti sēdinātu vadītāju un trīs pasažierus. Upurē bagāžnieka vietu, lai iekļautu novērošanas komplektu.

| Sedans | |
| :- | :- |
| **Izmērs / Tips** | Vidējs civilais |
| **Korpuss** | 4 |
| **Struktūra** | 25 |
| **Sistēmas** | 2 |
| **Ātrums** | Straujš |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Ieroči** | Nav |

<br>

---

#### Zemūdens auto

Divvietīga automašīna, kas var pārslēgties uz ūdensceļotāja vai zemūdens režīmu, lai pārvietotos pa vai zem ūdens. Aprīkota ar priekšā uzstādītu torpēdu un augšā uzstādītu "zeme-gaiss" raķeti.

| Zemūdens auto | |
| :- | :- |
| **Izmērs / Tips** | Vidējs civilais |
| **Korpuss** | 6 |
| **Struktūra** | 25 |
| **Sistēmas** | 2 |
| **Ātrums** | Ātrs |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ieroči** | Raķete (5d6), torpēda (4d10) |

<br>

---

#### Novērošanas furgons

Vienkāršs, neuzkrītošs furgons, kurā atrodas aģentu komanda un audio-vizuālās ierakstīšanas aprīkojuma komplekts.

| Novērošanas furgons | |
| :- | :- |
| **Izmērs / Tips** | Liels civilais |
| **Korpuss** | 9 |
| **Struktūra** | 60 |
| **Sistēmas** | 3 |
| **Ātrums** | Mērens |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Ieroči** | Nav |

<br>

---

#### Taktiskā atbalsta transportlīdzeklis

Pikaps vai džips ar vietu divu cilvēku apkalpei kabīnē un ložmetējnieku, kas stāv kravas nodalījumā un vada uz grozāma stiprinājuma uzstādītu vidējo ložmetēju.

| Taktiskā atbalsta transportlīdzeklis | |
| :- | :- |
| **Izmērs / Tips** | Vidējs civilais |
| **Korpuss** | 6 |
| **Struktūra** | 30 |
| **Sistēmas** | 2 |
| **Ātrums** | Straujš |
| **Vadāmība** | Standarta |
| **Pazīmes** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ieroči** | Uzstādīts vidējais ložmetējs (2d6) |


<br>

---

### Ūdenstransports

#### Ātrlaiva

Tipiska ātrlaiva, bruņota ar aizmugurē uzstādītu mīnu izkliedētāju.

| Ātrlaiva | |
| :- | :- |
| **Izmērs / Tips** | Vidējs civilais |
| **Korpuss** | 3 |
| **Struktūra** | 24 |
| **Sistēmas** | 2 |
| **Ātrums** | Ātrs |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Ieroči** | Mīnu izkliedētājs (5d6) |

<br>

---

#### Jahta

Luksusa jahta, kādu varētu piederēt kādam oligarham. Visticamāk, aprīkota ar novērošanas sistēmu, lai aizsargātos pret ienaidniekiem, kuri cenšas sarīkot ko nelāgu.

| Jahta | |
| :- | :- |
| **Izmērs / Tips** | Milzīgs civilais |
| **Korpuss** | 10 |
| **Struktūra** | 75 |
| **Sistēmas** | 4 |
| **Ātrums** | Lēns |
| **Vadāmība** | Formidabla |
| **Pazīmes** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Ieroči** | Nav |


<br>

---

### Lidaparāti/Kosmosa kuģi

#### Dirižablis (Civilais pasažieru gaisa kuģis)

Līdzīgs Hindenburgam, šis transkontinentālo dirižabļu klases kuģis (un citi tā klases pārstāvji) ir 245 metrus garš un prasa 40 līdz 61 cilvēka lielu apkalpi. Tas parasti var pārvadāt 50 līdz 72 pasažierus luksusa izmitināšanas apstākļos.

| Dirižablis | |
| :- | :- |
| **Izmērs / Tips** | Ļoti liels civilais |
| **Korpuss** | 10 |
| **Struktūra** | 85 |
| **Sistēmas** | 5 |
| **Ātrums** | Smagnējs |
| **Vadāmība** | Herkuliesa |
| **Pazīmes** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Vairogi** | Nav |
| **Ieroči** | Nav |

<br>

---

#### Uzbrukuma helikopters

Tradicionālais uzbrukuma helikopters izmanto progresīvas novērošanas tehnoloģijas, lai pārtvertu tālruņu un bezvadu interneta signālus, kā arī izsekotu personas un transportlīdzekļus pat tumsā, izmantojot FLIR. Mēģinājumi izvairīties no izsekošanas, izmantojot maskēšanos (Stealth), ir Formidabli.

| Uzbrukuma helikopters | |
| :- | :- |
| **Izmērs / Tips** | Liels militārais |
| **Korpuss** | 11 |
| **Struktūra** | 50 |
| **Sistēmas** | 3 |
| **Ātrums** | Mērens |
| **Vadāmība** | Vienkārša |
| **Pazīmes** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Vairogi** | Nav |
| **Ieroči** | 1 Getlinga lielgabals (3d6), 4 raķetes (5d6) |

<br>

---

#### Daudzfunkcionālais iznīcinātājs

Šis divvietīgais sauszemes iznīcinātājs (līdzīgs De Havilland Mosquito tipam) ir labi pazīstams ar savu sniegumu un daudzpusību. Tā bumbu nodalījumā var pārvadāt vai nu divas 250 mārciņu bumbas (skatīt kā vidējās raķetes ar diapazonu 0), vai vienu torpēdu.

| Daudzfunkcionālais iznīcinātājs | |
| :- | :- |
| **Izmērs / Tips** | Liels militārais |
| **Korpuss** | 10 |
| **Struktūra** | 45 |
| **Sistēmas** | 3 |
| **Ātrums** | Mērens |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Vairogi** | Nav |
| **Ieroči** | 4 korpusā montēti Getlinga lielgabali (4d6+3), 1 bumbu nodalījums (6d10 - skatīt aprakstu) |

<br>

---

#### Starpzvaigžņu kravas kuģis (Viegls augsto tehnoloģiju transporta kuģis)

Šim vieglajam transporta kuģim nepieciešama vismaz divu cilvēku apkalpe, ar vietu līdz četriem papildu pasažieriem. Šeit norādīta standarta rūpnīcas versija, tomēr daudzi īpašnieki veic savas "īpašās modifikācijas", piemēram, apslēptu kravas telpu, uzlabotu veiktspēju, izcilu vadāmību, EMP pretestību, maskēšanos utt.

| Starpzvaigžņu kravas kuģis | |
| :- | :- |
| **Izmērs / Tips** | Vidējs civilais kosmosa kuģis |
| **Korpuss** | 10 |
| **Struktūra** | 80 |
| **Sistēmas** | 2 |
| **Ātrums** | Straujš (Parseka faktors 3) |
| **Vadāmība** | Standarta |
| **Pazīmes** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Vairogi** | 8 |
| **Ieroči** | 2x četros savienoti lāzerlielgabalu torņi (5d6) |


<br>

---

#### Vispārējais sakaru bloks (Īpaši augsto tehnoloģiju kosmosa kuģis)

Šis ārkārtīgi augsto tehnoloģiju zvaigžņu kuģis ir fiziskais iemiesojums ļoti attīstītam mākslīgajam "Prātam" (Mind), kas izpaužas kā divus kilometrus gara, lauka savienotu moduļu virkne. Moduļi ir paredzēti dažādiem mērķiem, tostarp dzīvojamām zonām, ražošanas iekārtām, kravas telpām, pārtikas pārstrādei, atpūtas kompleksiem, angāriem un pat dažām slepenām vienībām, par kurām kuģa intelekts reti, ja vispār kādreiz, runā. Tam nav nepieciešama cilvēku apkalpe, bet tas var viegli atbalstīt pasažieru populāciju līdz 100 000. Daudzi pasažieri piedzimst un mirst uz "sakaru bloka": daudzi ir pārejoši, nākot un ejot, kā vien vēlas.

| Vispārējais sakaru bloks | |
| :- | :- |
| **Izmērs / Tips** | Kolosāls civilais kosmosa kuģis |
| **Korpuss** | 20 |
| **Struktūra** | 10 000 |
| **Sistēmas** | 6 |
| **Ātrums** | Mērens (Parseka faktors 4. Šajā tehnoloģiju līmenī faktors ir vienāds ar 1 stundu) |
| **Vadāmība** | Formidabla |
| **Pazīmes** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Vairogi** | 30 |
| **Ieroči** | Nav tādu, par kuriem tas vēlētos runāt |

<br>