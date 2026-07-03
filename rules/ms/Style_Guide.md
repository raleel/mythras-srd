# Tajuk Panduan Gaya (h1)

Gunakan tajuk h1 (`# Heading Title`) untuk tajuk bab utama. Semua tajuk hx akan muncul di bar sisi sebagai penanda buku.

Jika tajuk bukan tajuk h1, bar sisi akan mengalami ralat duplikasi yang menunjukkan halaman dan kemudian tajuk 'tajuk' h2.

---
## Tajuk bahagian (h2)

Gunakan tajuk h2 (`## Section Heading`) yang didahului oleh pembahagi (`---`) untuk setiap bahagian utama yang baru.

### Tajuk sub-bahagian meningkatkan tahap-h sebanyak 1

Gunakan tajuk h3 (`### Subsection Heading`) untuk setiap Sub-bahagian baru, dan tajuk h4 (`#### Sub-Subsection Heading`) untuk setiap sub-sub-bahagian baru.


### Progresi-h sub-bahagian: 2 > 3 > 4

Sub-tajuk akan bercampur di bar sisi jika progresi-h tidak diuruskan dengan betul.

Penanda tajuk harus meningkat sebanyak satu atau tiada.

h2 diikuti oleh h2 atau h3 adalah baik. h3 diikuti oleh h3 atau h4 juga baik.

### Ralat Sub-bahagian
h2 diikuti oleh h4 menyebabkan masalah. Bar sisi meletakkan sub-tajuk di suatu tempat di atas tajuk dalam jadual kandungan.

### Mengurangkan tahap-h

Ini nampaknya bukan masalah. cth. h4 kepada h3 atau h2 adalah baik.

---
## Konvensyen pemformatan

Gaya berikut adalah norma untuk SRD _Imperative_ ini dalam format Markdown.

### Tebal, Italik dan Pembahagi

- Gunakan dua asterisk (`**Bold**`) untuk teks **Tebal**.
- Gunakan garis bawah (`_Italic_`) untuk teks _Italik_.
   - _nb: Elakkan menggunakan satu asterisk untuk Italik!_
- Gunakan garis miring ke belakang (`\_`) untuk 'melarikan diri' dari aksara: \_Bukan Italik\_.
- Gunakan petikan bersudut (``` `code` ```) untuk membuat `code blocks`.
- Gunakan tiga sengkang (`---`) untuk memasukkan garis pemisah mendatar.

### Konvensyen untuk Tebal & Italik

Sasarkan untuk berpegang pada corak berikut...

#### Tajuk tebal

Gunakan tajuk tebal untuk menerangkan mantra, kesan dsb.
- **Tajuk Sihir:** Huraian.

#### Tajuk italik

Gunakan tajuk italik untuk 'sub-senarai' mantra varian dsb.
- **Sihir:** Huraian.
  - **_Varian Sihir-A:_** Huraian.
  - **_Varian Sihir-B:_** Huraian.

#### Rujukan Tajuk Italik

Gunakan tajuk italik apabila merujuk buku seperti _Mythras Imperative_ atau set peraturan teras _Mythras_.

---
## Pemformatan senarai

### Senarai tidak berurutan / Mata peluru

- Senarai tidak berurutan dibuat dengan sengkang.
- Senarai tidak berurutan dibuat dengan sengkang.
  - Tingkatkan tahap indentasi dengan 2 ruang atau satu tab.

### Senarai berurutan / Mata bernombor

1. Senarai bernombor dibuat dengan digit dan noktah/titik.
2. Senarai bernombor dibuat dengan digit dan noktah/titik.
- Campurkan dengan mata peluru
	- Dan indentasi
3. Campurkan nombor semula
   - Dan mata peluru

### Senarai bertajuk

Untuk senarai sub-tajuk yang berkaitan, tebalkan tajuk dan kolon.
- **Contoh 1:** Bla, bla, bla...
- **Contoh 2:** Bla, bla, bla...

### Senarai bertajuk italik

Untuk senarai sub-tajuk yang berkaitan, tebalkan & italikkan tajuk dan kolon.
- **_Contoh 1:_** Bla, bla, bla...
- **_Contoh 2:_** Bla, bla, bla...

---
## Jadual

Berikan jadual sub-tajuk supaya ia muncul sebagai penanda buku di bar sisi, diindentasi satu tahap dari bahagian induknya.

~Jadikan baris tajuk teks tebal.~
Menjadikan baris tajuk tebal sebenarnya menjadikannya dalam teks biasa. CSS lalai telah menebalkan baris tersebut.

### Penjajaran teks jadual

Gunakan baris 2 untuk penjajaran kandungan: `:--`, `:-:`, atau `--:`.
Ini akan mempengaruhi keseluruhan lajur.

#### Susun Atur Asas Jadual

| **Lajur 1** | **Lajur 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Konvensyen penjajaran teks

- Gunakan penjajaran tengah untuk nombor atau senarai nilai yang serupa.
- Gunakan penjajaran kiri untuk ayat teks.

#### Jadual Contoh Penjajaran

| **Nombor** | **Huraian** |
| :-: | :-- |
| 1 | Teks deskriptif |
| 2 | Teks deskriptif |
| 3 | Teks deskriptif |

#### Contoh: Jadual Intensiti Api

| **Intensiti** | **Contoh** | **Masa untuk Menyala** | **Kerosakan** |
| :-: | :-- | :-: | :-: |
| 1 | Lilin | 1d4 | 1d2 |
| 2 | Obor | 1d3 | 1d4 |
| 3 | Unggun api | 1d2 | 1d6 |
| 4 | Kebakaran yang memenuhi bilik | 1d2 | 2d6 |
| 5 | Lava gunung berapi | Serta-merta | 3d6 |

---
## Pautan

Terdapat banyak kegunaan untuk pautan dalam SRD dan hanya beberapa kes utama yang dilindungi di sini.

### Memformat Pautan

Memformat pautan dilakukan dengan teks berkurungan. Gunakan kurungan siku untuk teks pautan yang kelihatan, dan kurungan melengkung untuk URL destinasi: `[Link Text](URL)`.

Dalam dokumen ini, pautan luaran yang paling kerap digunakan ialah [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Pautan Luaran vs Dalaman

Pautan luaran pergi ke halaman lain melalui internet dan akan memerlukan URL `http://example.com` dan, secara lalai, ia _sentiasa_ akan dibuka dalam tab pelayar baru.

Untuk mengelakkan banyak tab mengganggu dokumen yang sedang dibaca, pautan dalaman dan penanda buku dibentuk dengan URL relatif yang merujuk fail markdown yang kelihatan dalam repositori GitHub. Daripada tab baru, pautan dalaman ini akan menatal dengan pantas ke bahagian yang dipautkan.

#### Contoh pautan dalaman

- **Pautan bab:** Ini menunjuk ke permulaan bahagian utama (h1). cth. bab [Combat](0005_Combat.md).

  - Format pautan: `[Combat](0005_Combat.md)`

- **Pautan sub-bahagian:** Ini menunjuk ke tajuk dalam bab yang merujuk dokumen seperti di atas tetapi menambah `?id=` diikuti serta-merta oleh tajuk destinasi. cth. [Leaping Attacks](0005_Combat.md?id=leaping-attacks)

  - Format pautan: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Pautan luaran ke sub-bahagian

Mungkin terdapat kesempatan untuk merujuk bahagian yang diketahui dalam dokumen luaran, contohnya, jadual khusus dalam SRD lain. Pemformatannya sama seperti pautan sub-bahagian, di atas, hanya menggunakan URL HTTP luaran.

Sebagai contoh, berikut ialah [jadual penukaran Imperial ke Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) daripada [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Senarai Sihir dan Kuasa

Mulakan bahagian 'bersih' dengan tajuk h2 untuk senarai mantra, kuasa dsb. yang tersedia; kemudian h3 untuk setiap item senarai.

Mantra dan kuasa biasanya dipersembahkan dalam satu senarai rata mengikut jenis sihir (Sihir Rakyat, Teisme, dsb.) tetapi jika senarai memerlukan sub-bahagiannya sendiri, seperti pengkhususan sekolah atau kultus, tingkatkan tahap tajuk dengan sewajarnya. Sebagai contoh, h2 untuk Senarai Keajaiban Teisme, h3 untuk Kultus: Mithras, dan h4 untuk setiap keajaiban kultus Mithras.

Terutamanya dalam kes mantra, tetapi dalam mana-mana huraian yang menggunakan atribut kata kunci, senaraikannya dalam teks italik.

Teks deskriptif dan peraturan khas menggunakan teks biasa.

### Pemformatan Senarai Mantra

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Contoh: senarai mantra yang diformat (dipetik blok) </summary>

---
> ## Huraian mantra
>
> ### Halang
> _Serta-merta, Berjarak_
>
> Halang digunakan untuk menolak mantra lain dalam jarak. Halang boleh dilemparkan secara reaktif untuk meneutralkan mantra ofensif, dengan menggunakan Tindakan Reaktif Sihir Balasan.

</details>

---
## Blok statistik Kenderaan
Mulakan bahagian 'bersih' dengan tajuk h2 untuk senarai, kemudian tingkatkan tahap-h seperti biasa untuk kategori dan item senarai.

Setiap contoh yang disenaraikan mempunyai statistik dan huraian yang dipersembahkan sebagai senarai mata peluru dengan tajuk mata yang ditebalkan.

### Pemformatan Blok Statistik Kenderaan

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Contoh: blok statistik kenderaan yang diformat (dipetik blok) </summary>

---
> ## Contoh Kenderaan
>
> ### Kenderaan Darat
>
> #### Pemintas
>
> - **Badan:** 6 (Ketenteraan Sederhana), 40 Struktur
>
> - **Kelajuan:** Pantas
>
> - **Sistem:** 3
>
> - **Ciri-ciri:** Kerusi Pelenting, Prestasi Dipertingkat, Pengendalian Unggul, Suit Pengawasan, Tahan Lasak, Berperisai
>
> - **Senjata:** Dispenser licin minyak, dispenser asap, senapang mesin sederhana berganda berkembar
>
> - **Huraian:** Kereta mewah yang diubah suai, kereta sukan atau seumpamanya, kereta ini dibina untuk bergerak pantas dan memberikan sebaik mungkin dalam pertempuran. Ini adalah jenis kenderaan yang orang fikirkan apabila seseorang berkata, "kereta pengintip."

</details>

---
## Blok statistik Makhluk
Mulakan bahagian 'bersih' dengan tajuk h2 untuk senarai. Blok statistik makhluk menggunakan jadual dan lebih kompleks dari segi pemformatan dan keperluan ruang. Untuk kejelasan, elakkan sub-bahagian dan tambahkan pembahagi antara item senarai.


Setiap contoh yang disenaraikan harus mempunyai yang berikut...

- **Tajuk makhluk:** Pembahagi diikuti oleh tajuk h3 untuk nama makhluk.

- **Entri MEG:** Pautan luaran ke makhluk yang ditentukan di [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Butiran Teras:** Nama/jenis makhluk, atribut, kemahiran dan sebarang huraian khas atau nota watak mengikut keperluan.

- **Butiran Senjata:** Huraian ringkas dengan lajur untuk nama senjata dan atribut berikut: Saiz (sertakan Daya di sini), Jangkauan (sertakan Jarak di sini), Kerosakan, AP/HP, dan sebarang peraturan khas.

- **Lokasi Pukulan & Perisai:** Jadual lokasi akan berbeza berdasarkan anatomi makhluk yang berbeza tetapi harus disertakan walaupun untuk humanoid tradisional sebagai cara untuk menjejaki perisai dan kerosakan.

### Pemformatan Blok Statistik Makhluk

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

<summary>Contoh: jadual blok statistik makhluk yang diformat (dipetik blok) </summary>

> ---
> ### Goblin/Orc
> [MEG entry](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nama Makhluk | Goblin/Orc |
> | :-- | :-- |
> | Atribut Utama | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Mata Tindakan | 2 |
> | Pengubahsuai Kerosakan | - |
> | Inisiatif | +11 |
> | Gerak | 6m |
> | Keupayaan | Penglihatan Malam |
> | Kemahiran | Atletik 52%, Kekuatan 42%, Penipuan 57%, Ketahanan 48%, Elak 62%, Persepsi 61%, Tanpa Senjata 52%, Daya Tahan 42% |
> | Gaya Tempur | Pahlawan (Pedang Pendek, Perisai, Lembing, Tali Anduh) 62% |
>
> #### Butiran Senjata
>
> | Senjata | Saiz | Jangkauan | Kerosakan | AP/HP | Khas |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shortsword | M | M | 1d6 | 6/8 | |
> | Spear | M | L | 1d8+1 | 4/5 | |
> | Sling | L | 10/150/300 | 1d8 | 1/2 | |
> | Perisai | L | S | 1d4 | 4/9 | Melindungi 3 lokasi untuk Menyekat/Menghalang Pasif |
>
> #### Lokasi Pukulan & Perisai
>
> | **1d20** | **Lokasi** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Kaki Kanan | 1/5 |
> | 4-6 | Kaki Kiri | 1/5 |
> | 7-9 | Perut | 1/6 |
> | 10-12 | Dada | 1/7 |
> | 13-15 | Lengan Kanan | 1/4 |
> | 16-18 | Lengan Kiri | 1/4 |
> | 19-20 | Kepala | 1/5 |


</details>


---
## Errata Komuniti

### Kesalahan menaip dan kekeliruan

Suntingan untuk 'membersihkan' teks penulis harus dikekalkan minimum tetapi kesalahan menaip dan kesilapan lain harus diubah sebaris tanpa sebarang penandaan.


### Panel Maklumat Errata

Di mana peraturan yang diberikan terlalu samar, tidak lengkap, atau semata-mata salah, tambahkan nota Errata Komuniti yang boleh dilipat.

Terangkan isu dalam italik menggunakan hanya italik tebal untuk tajuk isu - _tiada tajuk h(x)!_ - supaya tidak menimbulkan entri bar sisi yang mengelirukan.

Jika teks pengganti ditambah, letakkannya dalam petikan berganda dalam italik tebal, didahului oleh "_Errata Komuniti:_" dalam italik berat normal.

Peraturan tambahan, jika diperlukan, harus dipersembahkan dalam teks berat normal.

#### Templat Pemformatan Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Contoh Errata

<details>

<summary>* Errata Komuniti</summary>

_**Mendaki**_

_Errata Komuniti:_
_**"Perisai yang dipakai menghalang pendaki dengan jumlah yang sama dengan purata Mata Perisai yang dipakai. Cari ini dengan menjumlahkan mata perisai yang dipakai setiap lokasi dan bahagikan angka itu dengan bilangan lokasi."**_

_Peraturan seperti yang ditulis dengan cepat menimbulkan masalah. Memakai satu keping perisai 6AP akan mengurangkan pergerakan manusia kepada 0, yang bermaksud manusia yang memakai topi keledar keluli dan tiada yang lain akan terlalu terbeban untuk mendaki sama sekali. Ini nampaknya terlalu ketat, oleh itu versi yang disunting dicadangkan di atas. Ini akan dikemas kini sekiranya penulis asal menyemak semula peraturan seperti yang ditulis._

</details>

<details>

<summary>* Errata Komuniti</summary>

_**Gaya Berjalan: Berjalan, Berlari, Pecut**_

_Versi terbitan _Mythras Imperative_ tidak mempunyai peraturan eksplisit untuk bergerak pada Gaya Berjalan yang berbeza walaupun ia diliputi dalam buku peraturan teras Mythras. Pengganda Gaya Berjalan di atas telah ditambahkan sebagai sebahagian daripada Errata Komuniti._

_Apabila diperlukan, ia harus cukup untuk melayan Gaya Berjalan seperti berikut:_

- _Gaya Berjalan yang lebih pantas daripada Berjalan menggunakan pengganda pada penilaian Pergerakan: 3x untuk Berlari, 5x untuk Pecut._

- _Semasa Gaya Berjalan Berlari atau Pecut, watak tidak boleh cuba kebanyakan tindakan proaktif seperti menyerang atau melontar mantra. Beberapa pengecualian termasuk..._
  - _Serangan apabila menggunakan peraturan Mengecas._
  - _Menembak senjata jarak jauh dengan ciri Pertempuran Ringan._
- _Sebagai peraturan umum, sebarang tindakan yang dibenarkan harus dianggap satu Gred lebih sukar untuk dilakukan semasa Berlari, dan dua Gred lebih sukar semasa Pecut._


</details>

---
## Amaran Pelbagai

### Baris kosong / Pulangan Pembawa

Tinggalkan baris kosong antara jenis entri yang berbeza. Tajuk, pembahagi, jadual dsb. Ini tidak akan kelihatan dalam paparan bacaan tetapi ketiadaannya boleh menyebabkan masalah pemformatan.

### Teks berbilang perenggan tebal atau italik

Setiap perenggan perlu ditandakan sebagai teks tebal atau italik. Baris baru antara perenggan akan memecahkan pemformatan meninggalkan tanda pemformatan yang terpisah.

### Ejaan Antarabangsa

Kuasa-kuasa regresif dan tercela telah mengambil keputusan untuk membuang semua ejaan British memihak kepada versi AS yang secara objektif lebih lemah. Berhati-hati untuk perkataan British -OUR: _armour_, _favour_, dll.
