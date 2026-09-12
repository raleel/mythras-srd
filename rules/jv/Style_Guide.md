# Panduan Gaya Judul (h1)

Gunakna judul h1 (`# Heading Title`) kanggo judhul bab utama. Kabeh judhul hx bakal muncul ing bilah sisih (sidebar) minangka tetenger (bookmarks).

Yen judhule dudu judhul h1, bilah sisih bakal ngalami kesalahan duplikasi sing nuduhake kaca banjur judhul h2 'title'.

---
## Judhul bagean (h2)

Gunakna judhul h2 (`## Section Heading`) sing didhisiki dening pamisah (divider) (`---`) kanggo saben bagean utama anyar.

### Judhul sub-bagean nambah tingkat h siji

Gunakna judhul h3 (`### Subsection Heading`) kanggo saben sub-bagean anyar, lan judhul h4 (`#### Sub-Subsection Heading`) kanggo saben sub-sub-bagean anyar. 


### Progresi h sub-bagean: 2 > 3 > 4

Judhul-judhul sub bakal dadi kacau ing bilah sisih yen progresi h ora ditangani kanthi bener.

Panandha judhul kudu nambah siji utawa ora nambah babar pisan. 

h2 sing diterusake dening h2 utawa h3 iku ora masalah. h3 sing diterusake dening h3 utawa h4 uga ora masalah. 

### Kesalahan Sub-bagean
h2 sing diterusake dening h4 nyebabake masalah. Bilah sisih bakal nyelehake sub-judhul ing sadhuwure judhul ing daftar isi.

### Ngurangi tingkat h

Iki kayane dudu masalah. contone h4 menyang h3 utawa h2 iku ora masalah. 

---
## Konvensi format

Gaya ing ngisor iki minangka norma kanggo SRD _Imperative_ iki ing format Markdown.

### Kandel, Miring, lan Pamisah

- Gunakna lintang pindho (`**Bold**`) kanggo teks **Kandel** (Bold).
- Gunakna garis ngisor (`_Italic_`) kanggo teks _Miring_ (Italic). 
   - _cathetan: Aja nggunakake lintang siji kanggo teks miring!_
- Gunakna garis miring walik (`\_`) kanggo 'ngeskap' karakter: \_Dudu Miring\_.
- Gunakna tandha petik sudut (``` `code` ```) kanggo nggawe `code blocks`.
- Gunakna telung tandha hubung (`---`) kanggo masang garis pamisah horisontal.

### Konvensi kanggo Kandel & Miring

Tujuane kanggo ngetutake pola ing ngisor iki... 

#### Judhul Kandel

Gunakna judhul kandel nalika njlentrehake mantra, efek, lsp.
- **Judhul Sihir:** Katrangan.

#### Judhul Miring

Gunakna judhul miring kanggo 'sub-daftar' mantra varian lsp.
- **Sihir:** Katrangan.
  - **_Varian Sihir-A:_** Katrangan.
  - **_Varian Sihir-B:_** Katrangan.

#### Referensi Judhul Miring

Gunakna judhul miring nalika ngrujuk buku kaya _Mythras Imperative_ utawa aturan inti _Mythras_.

---
## Format daftar

### Daftar ora urut / Poin-poin

- Daftar ora urut digawe nganggo tandha hubung.
- Daftar ora urut digawe nganggo tandha hubung.
  - Tambah tingkat indentasi nganggo 2 spasi utawa tab.

### Daftar urut / Poin angka

1. Daftar urut digawe nganggo digit lan titik.
2. Daftar urut digawe nganggo digit lan titik.
- Campur karo poin-poin
	- Lan indentasi
3. Campur angka maneh
   - Lan poin-poin

### Daftar mawa judhul

Kanggo daftar sub-judhul sing gegandhengan, kandelna judhul lan titine.
- **Conto 1:** Bla, bla, bla...
- **Conto 2:** Bla, bla, bla...

### Daftar judhul miring

Kanggo daftar sub-judhul sing gegandhengan, kandelna & miringna judhul lan titine.
- **_Conto 1:_** Bla, bla, bla...
- **_Conto 2:_** Bla, bla, bla...

---
## Tabel

Wenehi tabel sub-judhul supaya katon ing bilah sisih, kanthi indentasi siji tingkat saka bagean induk. 

~Gawe baris judhul dadi teks kandel.~ 
Gawe baris judhul dadi kandel sejatine nampilake ing teks normal. CSS standar wis nggawe baris kasebut kandel.

### Keselarasan teks tabel

Gunakna baris 2 kanggo keselarasan isi: `:--`, `:-:`, utawa `--:`.
Iki bakal mengaruhi kabeh kolom.

#### Tata Letak Dasar Tabel

| **Kolom 1** | **Kolom 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Konvensi keselarasan teks

- Gunakna keselarasan tengah kanggo angka utawa daftar nilai sing padha.
- Gunakna keselarasan kiwa kanggo ukara teks.

#### Conto Tabel Keselarasan

| **Nomer** | **Katrangan** |
| :-: | :-- |
| 1 | Teks katrangan |
| 2 | Teks katrangan |
| 3 | Teks katrangan |

#### Conto: Tabel Intensitas Geni

| **Intensitas** | **Conto** | **Wektu kanggo Kobong** | **Karusakan** |
| :-: | :-- | :-: | :-: |
| 1 | Lilin | 1d4 | 1d2 |
| 2 | Obor | 1d3 | 1d4 |
| 3 | Geni unggun | 1d2 | 1d6 |
| 4 | Kobongan ngebaki ruangan | 1d2 | 2d6 |
| 5 | Lava vulkanik | Instan | 3d6 |

---
## Pranala (Links)

Ana akeh panggunaan kanggo pranala ing SRD lan mung sawetara kasus utama sing dibahas ing kene.

### Format Pranala

Format pranala ditindakake nganggo teks sing diwenehi kurung. Gunakna kurung kothak kanggo teks pranala sing katon, lan kurung kurawal kanggo URL tujuan: `[Link Text](URL)`.

Ing dokumen iki, pranala njaba sing paling umum digunakake yaiku [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Pranala Njaba vs Internal

Pranala njaba pindhah menyang kaca liya liwat internet lan bakal mbutuhake URL `http://example.com` lan, minangka standar, bakal _mesthi_ mbukak ing tab browser anyar. 

Supaya ora ana akeh tab sing ngebaki dokumen sing diwaca, pranala internal lan tetenger dibentuk nganggo URL relatif sing ngrujuk menyang file markdown sing katon ing repositori GitHub. Tinimbang tab anyar, pranala internal iki bakal cepet nggulung menyang bagean sing dipranalani.

#### Conto pranala internal

- **Pranala Bab:** Iki ngarah menyang wiwitan bagean utama (h1). contone bab [Combat](0005_Combat.md).

  - Format pranala: `[Combat](0005_Combat.md)`

- **Pranala Sub-bagean:** Iki ngarah menyang judhul ing njero bab kanthi ngrujuk dokumen kaya ing ndhuwur nanging nambahake `?id=` sing langsung diterusake dening judhul tujuan. contone [Leaping Attacks](0005_Combat.md?id=leaping-attacks) 

  - Format pranala: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Pranala njaba menyang sub-bagean

Bisa uga ana wektu kanggo ngrujuk bagean sing wis dingerteni saka dokumen njaba, contone, tabel tartamtu ing SRD liyane. Formate padha karo pranala sub-bagean, ing ndhuwur, mung nggunakake URL HTTP njaba.

Minangka conto, iki [tabel konversi Imperial menyang Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) saka [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Daftar Sihir lan Kekuwatan

Miwiti bagean 'resik' nganggo judhul h2 kanggo daftar mantra, kekuwatan lsp sing kasedhiya; banjur h3 kanggo saben item daftar. 

Mantra lan kekuwatan biasane disajikake ing daftar rata miturut jinis sihir (Sihir Rakyat, Teisme, lsp) nanging yen daftar mbutuhake sub-bagean dhewe, kaya spesialisasi sekolah utawa kultus, tambahake tingkat judhul kanthi cocog. Contone, h2 kanggo Daftar Keajaiban Teisme, h3 kanggo Kultus: Mithras, lan h4 kanggo saben keajaiban kultus Mithras. 
 
Utamane kanggo mantra, nanging ing katrangan apa wae sing nggunakake atribut tembung kunci, tulisake ing teks miring.

Teks katrangan lan aturan khusus nggunakake teks normal.

### Format Daftar Mantra

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Conto: format daftar mantra (block quoted) </summary>

---
> ## Katrangan mantra
>
> ### Avert
> _Instan, Ranged_
>
> Avert digunakake kanggo ngilangi mantra liyane ing jangkauan. Avert bisa diwutahake kanthi reaktif kanggo netralake mantra ofensif, kanthi nggunakake Tindakan Reaktif Counter Magic.

</details>

---
## Blok statistik Kendaraan
Miwiti bagean 'resik' nganggo judhul h2 kanggo daftar, banjur tambahake tingkat h kaya biasane kanggo kategori lan item daftar. 

Saben conto sing didaftar duwe statistik lan katrangan sing disajikake minangka daftar poin kanthi judhul poin sing dikandelake.

### Format Blok Statistik Kendaraan

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Conto: format blok statistik kendaraan (block quoted) </summary>

---
> ## Conto Kendaraan
> 
> ### Kendaraan dharat
> 
> #### Interceptor
> 
> - **Hull:**  6 (Militer Sedheng), 40 Struktur
> 
> - **Kacepetan:**  Cepet
> 
> - **Sistem:**  3
> 
> - **Traits:**  Kursi Ejector, Performa Ditingkatake, Penanganan Superior, Suite Pengawasan, Tangguh, Mawa Senjata
> 
> - **Senjata:**  Dispenser lenga, dispenser keluk, bedhil mesin medium kembar
> 
> - **Katrangan:**  Mobil mewah sing dimodifikasi, mobil sport utawa sing padha, mobil iki dibangun kanggo cepet lan mbales ing perang. Iki jinis kendaraan sing dipikirake wong nalika ana sing ngomong, "mobil mata-mata."

</details>

---
## Blok statistik Makhluk
Miwiti bagean 'resik' nganggo judhul h2 kanggo daftar. Blok statistik makhluk nggunakake tabel lan luwih rumit babagan format lan syarat ruang. Supaya jelas, aja nggunakake sub-bagean lan tambahake pamisah ing antarane item daftar.


Saben conto sing didaftar kudu duwe...

- **Judhul makhluk:** Pamisah sing diterusake dening judhul h3 kanggo jeneng makhluk.

- **Entri MEG:** Pranala njaba menyang makhluk kasebut ing [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detail Inti:** Jeneng/jinis makhluk, atribut, katrampilan lan katrangan khusus utawa cathetan karakter yen dibutuhake.

- **Detail Senjata:** Katrangan ringkes kanthi kolom kanggo jeneng senjata lan atribut ing ngisor iki: Ukuran (lebokake Force ing kene), Jangkauan (lebokake Range ing kene), Karusakan, AP/HP, lan aturan khusus apa wae.

- **Lokasi Hit & Baju Waja:** Tabel lokasi bakal beda-beda adhedhasar anatomi makhluk sing beda-beda nanging kudu dilebokake sanajan kanggo humanoid tradisional minangka cara kanggo nglacak baju waja lan karusakan. 

### Format Blok Statistik Makhluk

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```


<details>

<summary>Conto: format tabel blok statistik makhluk (block quoted) </summary>

> ---
> ### Goblin/Orc
> [Entri MEG](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Jeneng Makhluk | Goblin/Orc  |
> | :-- | :-- |
> | Atribut Kunci | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Poin Tindakan | 2 | 
> | Modifikator Karusakan | - |
> | Inisiatif | +11 |
> | Pindhah | 6m |
> | Kemampuan | Night Sight |
> | Katrampilan | Atletik 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Persepsi 61%, Tanpa Senjata 52%, Willpower 42% |
> | Gaya Tempur | Prajurit (Shortsword, Shield, Spear, Sling) 62% |
> 
> #### Detail Senjata
> 
> | Senjata | Ukuran | Jangkauan | Karusakan | AP/HP | Khusus |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shortsword | M | M | 1d6 | 6/8 | |
> | Spear | M | L | 1d8+1 | 4/5 | |
> | Sling | L | 10/150/300 | 1d8 | 1/2 |  |
> | Shield | L | S | 1d4 | 4/9 | Nglindhungi 3 lokasi kanggo Passive Blocking/Warding |
> 
> #### Lokasi Hit & Baju Waja
> 
> | **1d20** | **Lokasi** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Sikil Tengen | 1/5 |
> | 4-6 | Sikil Kiwa | 1/5 |
> | 7-9 | Perut | 1/6 |
> | 10-12 | Dhadha | 1/7 |
> | 13-15 | Tangan Tengen | 1/4 |
> | 16-18 | Tangan Kiwa | 1/4 |
> | 19-20 | Sirah | 1/5 |


</details>


---
## Errata Komunitas

### Typo lan kabingungan

Suntingan kanggo 'ngresiki' teks panulis kudu minimal nanging typo lan kesalahan liyane kudu langsung diowahi kanthi inline tanpa tandha apa wae.


### Panel Info Errata

Yen aturan tartamtu kakehan ambigu, ora lengkap, utawa salah, tambahake cathetan Errata Komunitas sing bisa dicilikake.

Jelasake masalah kasebut kanthi miring nggunakake mung kandel miring kanggo judhul masalah kasebut - _ora ana judhul h(x)!_ - supaya ora nggawe entri bilah sisih sing mbingungake.

Yen teks panggantos ditambahake, pasang ing tandha petik pindho kanthi kandel miring, sing didhisiki dening "_Community Errata:_" ing miring bobot normal.

Aturan tambahan, yen dibutuhake, kudu disajikake ing teks bobot normal.

#### Templat Format Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Conto Errata

<details>

<summary>* Errata Komunitas</summary>

_**Climb**_

_Errata Komunitas:_
_**"Baju waja sing dianggo ngalangi pemanjat kanthi jumlah sing padha karo rata-rata Poin Baju Waja sing dianggo. Goleki iki kanthi njumlahake kabeh poin baju waja lokasi lan bagi angka kasebut karo jumlah lokasi."**_

_Aturan kaya sing ditulis cepet nyebabake masalah. Nganggo siji klambi 6AP bakal nyuda manungsa menyang Pindhah 0 tegese manungsa sing nganggo helm baja lan ora ana liyane bakal kakehan beban kanggo menek babar pisan. Iki katon banget mbatesi mula versi suntingan disaranake ing ndhuwur. Iki bakal dianyari yen panulis asli ngrevisi aturan kaya sing ditulis._

</details>

<details>

<summary>* Errata Komunitas</summary>

_**Gait: Jalan, Lari, Sprint**_

_Versi _Mythras Imperative_ sing diterbitake ora duwe aturan eksplisit kanggo pindhah ing Gait sing beda sanajan kalebu ing buku aturan inti Mythras. Pengganda Gait ing ndhuwur wis ditambahake minangka bagean saka Errata Komunitas._ 

_Yen dibutuhake, cukup kanggo nganggep Gait kaya ing ngisor iki:_

- _Gait sing luwih cepet saka Jalan ngetrapake pengganda menyang rating Pindhah: 3x kanggo Lari, 5x kanggo Sprint._

- _Nalika ing Gait Lari utawa Sprint, karakter ora bisa nyoba tindakan proaktif kaya nyerang utawa ngucapake mantra. Sawetara pangecualian kalebu..._
  - _Serangan nalika nggunakake aturan Charging._
  - _Nembak senjata jarak jauh kanthi trait Skirmishing._ 
- _Minangka aturan umum, tumindak apa wae sing diidini kudu dianggep luwih angel siji Tingkat nalika Lari, lan rong Tingkat luwih angel nalika Sprint._


</details>

---
## Pèngetan Miscellaneous

### Baris kosong / Carriage Returns

Ninggalake baris kosong ing antarane macem-macem jinis entri. Judhul, pamisah, tabel lsp. Iki ora bakal katon ing tampilan maca nanging anane bisa nyebabake masalah format.

### Teks multi-paragraf kandel utawa miring

Saben paragraf kudu ditandhani minangka teks kandel utawa miring. Baris anyar ing antarane paragraf bakal ngrusak format sing ninggalake tandha format yatim piatu.

### Ejaan Internasional

Kekuwatan regresif lan nyedhiyakake wis ngilangi kabeh ejaan Inggris kanggo versi AS sing luwih lemah kanthi objektif. Waspada karo tembung -OUR Inggris: _armour_, _favour_, lsp.