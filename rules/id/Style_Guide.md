# Panduan Gaya Judul

Gunakan heading h1 (`# Heading Title`) untuk judul bab utama. Semua heading hx akan muncul di sidebar sebagai bookmark.

Jika judul bukan berupa heading h1, sidebar akan mengalami kesalahan duplikasi yang menampilkan halaman dan kemudian heading h2 'judul'.

---
## Heading bagian (h2)

Gunakan heading h2 (`## Section Heading`) yang didahului oleh pemisah (`---`) untuk setiap bagian utama yang baru.

### Heading sub-bagian meningkatkan level h sebesar 1

Gunakan heading h3 (`### Subsection Heading`) untuk setiap sub-bagian baru, dan heading h4 (`#### Sub-Subsection Heading`) untuk setiap sub-sub-bagian baru.


### Progresi h sub-bagian: 2 > 3 > 4

Sub-heading menjadi kacau di sidebar jika progresi h tidak ditangani dengan benar.

Penanda heading harus meningkat satu atau tetap.

h2 diikuti oleh h2 atau h3 adalah benar. h3 diikuti oleh h3 atau h4 adalah benar.

### Kesalahan Sub-bagian
h2 diikuti oleh h4 menyebabkan masalah. Sidebar menempatkan sub-heading di suatu tempat di atas heading dalam daftar isi.

### Mengurangi level h

Ini sepertinya tidak menjadi masalah. contoh h4 ke h3 atau h2 adalah benar.

---
## Konvensi pemformatan

Gaya berikut adalah norma untuk SRD _Imperatif_ ini dalam format Markdown.

### Tebal, Miring, dan Pemisah

- Gunakan tanda bintang ganda (`**Bold**`) untuk teks **Tebal**.
- Gunakan garis bawah (`_Italic_`) untuk teks _Miring_.
   - _nb: Hindari menggunakan tanda bintang tunggal untuk Huruf Miring!_
- Gunakan garis miring terbalik (`\_`) untuk 'meloloskan' karakter: \_Bukan Miring\_.
- Gunakan tanda kutip sudut (``` `code` ```) untuk membuat `code blocks`.
- Gunakan tiga tanda hubung (`---`) untuk menyisipkan garis pemisah horizontal.

### Konvensi untuk Tebal & Miring

Berusahalah untuk mengikuti pola berikut...

#### Judul tebal

Gunakan judul tebal untuk mendeskripsikan mantra, efek, dll.
- **Judul Sihir:** Deskripsi.

#### Judul miring

Gunakan judul miring untuk 'sub-daftar' mantra varian, dll.
- **Sihir:** Deskripsi.
  - **_Varian Sihir-A:_** Deskripsi.
  - **_Varian Sihir-B:_** Deskripsi.

#### Referensi Judul Miring

Gunakan judul miring saat merujuk pada buku seperti _Mythras Imperative_ atau aturan inti _Mythras_.

---
## Pemformatan daftar

### Daftar tidak terurut / Poin peluru

- Daftar tidak terurut dibuat dengan tanda hubung.
- Daftar tidak terurut dibuat dengan tanda hubung.
  - Tingkatkan level indentasi dengan 2 spasi atau tab.

### Daftar terurut / Poin bernomor

1. Daftar bernomor dibuat dengan digit dan titik.
2. Daftar bernomor dibuat dengan digit dan titik.
- Campur dengan poin peluru
	- Dan indentasi
3. Campur angka kembali
   - Dan peluru

### Daftar berkepala

Untuk daftar sub-heading terkait, tebalkan judul dan titik dua.
- **Contoh 1:** Bla, bla, bla...
- **Contoh 2:** Bla, bla, bla...

### Daftar berkepala miring

Untuk daftar sub-heading terkait, tebalkan & miringkan judul dan titik dua.
- **_Contoh 1:_** Bla, bla, bla...
- **_Contoh 2:_** Bla, bla, bla...

---
## Tabel

Berikan tabel sub-header agar muncul di bookmark sidebar, diindentasi satu level dari bagian induknya.

~Buat baris heading teks tebal.~
Membuat baris header tebal sebenarnya merendernya dalam teks normal. CSS default memiliki baris tersebut ditebalkan.

### Perataan teks tabel

Gunakan baris 2 untuk perataan konten: `:--`, `:-:`, atau `--:`.
Ini akan memengaruhi seluruh kolom.

#### Tata Letak Dasar Tabel

| **Kolom 1** | **Kolom 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konvensi perataan teks

- Gunakan perataan tengah untuk angka atau daftar nilai serupa.
- Gunakan perataan kiri untuk kalimat teks.

#### Tabel Contoh Perataan

| **Angka** | **Deskripsi** |
| :-: | :-- |
| 1 | Teks deskriptif |
| 2 | Teks deskriptif |
| 3 | Teks deskriptif |

#### Contoh: Tabel Intensitas Api

| **Intensitas** | **Contoh** | **Waktu untuk Membakar** | **Daya Rusak** |
| :-: | :-- | :-: | :-: |
| 1 | Lilin | 1d4 | 1d2 |
| 2 | Obor | 1d3 | 1d4 |
| 3 | Api unggun | 1d2 | 1d6 |
| 4 | Kebakaran mengisi ruangan | 1d2 | 2d6 |
| 5 | Lava vulkanik | Instan | 3d6 |

---
## Tautan

Ada banyak kegunaan untuk tautan di SRD dan hanya beberapa kasus utama yang dibahas di sini.

### Memformat Tautan

Memformat tautan dilakukan dengan teks dalam kurung. Gunakan kurung siku untuk teks tautan yang terlihat, dan kurung kurawal untuk URL tujuan: `[Link Text](URL)`.

Dalam dokumen ini, tautan eksternal yang paling umum digunakan adalah [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Tautan Eksternal vs Internal

Tautan eksternal menuju ke halaman lain melalui internet dan akan memerlukan URL `http://example.com` dan, secara default, mereka _akan selalu_ terbuka di tab browser baru.

Agar tidak ada banyak tab yang mengacaukan dokumen yang sedang dibaca, tautan internal dan bookmark dibentuk dengan URL relatif yang merujuk pada file markdown yang terlihat di repositori GitHub. Alih-alih tab baru, tautan internal ini akan dengan cepat menggulir ke bagian yang ditautkan.

#### Contoh tautan internal

- **Tautan bab:** Ini menunjuk ke awal bagian (h1) utama. contoh bab [Pertarungan](0005_Combat.md).

  - Format tautan: `[Combat](0005_Combat.md)`

- **Tautan sub-bagian:** Ini menunjuk ke heading dalam bab yang merujuk dokumen seperti di atas tetapi menambahkan `?id=` segera diikuti oleh heading tujuan. contoh [Serangan Melompat](0005_Combat.md?id=leaping-attacks)

  - Format tautan: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Tautan eksternal ke sub-bagian

Mungkin ada kesempatan untuk merujuk bagian yang diketahui dari dokumen eksternal, misalnya, tabel tertentu di SRD lain. Formatnya sama dengan tautan sub-bagian di atas, hanya menggunakan URL HTTP eksternal.

Sebagai contoh, berikut adalah [tabel konversi Imperial ke Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) dari [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Daftar Sihir dan Kekuatan

Mulai bagian 'bersih' dengan heading h2 untuk daftar mantra, kekuatan, dll. yang tersedia; kemudian h3 untuk setiap item daftar.

Mantra dan kekuatan biasanya disajikan dalam daftar datar tunggal berdasarkan tipe sihir (Sihir Rakyat, Teisme, dll.) namun jika daftar memerlukan sub-bagiannya sendiri, seperti spesialisasi sekolah atau kultus, tingkatkan level heading dengan tepat. Misalnya, h2 untuk Daftar Keajaiban Teisme, h3 untuk Kultus: Mithras, dan h4 untuk setiap keajaiban kultus Mithras.

Khususnya dalam kasus mantra, tetapi dalam deskripsi apa pun yang menggunakan atribut kata kunci, cantumkan dalam teks miring.

Teks deskriptif dan aturan khusus menggunakan teks normal.

### Pemformatan Daftar Mantra

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Contoh: daftar mantra terformat (dalam kutipan blok) </summary>

---
> ## Deskripsi mantra
>
> ### Cegah
> _Instan, Berjarak_
>
> Cegah digunakan untuk membubarkan mantra lain dalam Jarak. Cegah dapat dilemparkan secara reaktif untuk menetralkan mantra ofensif, dengan menggunakan Aksi Reaktif Melawan Sihir.

</details>

---
## Blok statistik kendaraan
Mulai bagian 'bersih' dengan heading h2 untuk daftar, kemudian tingkatkan level h seperti biasa untuk kategori dan item daftar.

Setiap contoh yang terdaftar memiliki statistik dan deskripsi yang disajikan sebagai daftar poin dengan judul poin yang ditebalkan.

### Pemformatan Blok Statistik Kendaraan

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Contoh: blok statistik kendaraan terformat (dalam kutipan blok) </summary>

---
> ## Contoh Kendaraan
> 
> ### Kendaraan Darat
> 
> #### Interseptor
> 
> - **Lambung:** 6 (Militer Menengah), 40 Struktur
> 
> - **Kecepatan:** Cepat
> 
> - **Sistem:** 3
> 
> - **Sifat:** Kursi Lontar, Performa Ditingkatkan, Penanganan Unggul, Rangkaian Pengawasan, Tangguh, Bersenjata
> 
> - **Senjata:** Dispenser tumpahan minyak, dispenser asap, senapan mesin menengah terkait ganda
> 
> - **Deskripsi:** Mobil mewah yang dimodifikasi, mobil sport atau sejenisnya, mobil ini dibangun untuk melaju cepat dan memberikan serangan sebaik yang diterima dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang berkata, "mobil mata-mata."

</details>

---
## Blok statistik makhluk
Mulai bagian 'bersih' dengan heading h2 untuk daftar. Blok statistik makhluk menggunakan tabel dan lebih kompleks dalam hal pemformatan dan kebutuhan ruang. Untuk kejelasan, hindari sub-bagian dan tambahkan pemisah antar item daftar.


Setiap contoh yang terdaftar harus memiliki hal-hal berikut...

- **Judul makhluk:** Pemisah diikuti oleh header h3 untuk nama makhluk.

- **Entri MEG:** Tautan eksternal ke makhluk yang ditentukan di [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detail Inti:** Nama/tipe makhluk, atribut, Skill, dan deskripsi khusus atau catatan karakter lainnya sesuai kebutuhan.

- **Detail Senjata:** Deskripsi singkat dengan kolom untuk nama senjata dan atribut berikut: Ukuran (sertakan Ukuran (Force) di sini), Jangkau (sertakan Jarak di sini), Daya Rusak, Armor/HP, dan aturan khusus apa pun.

- **Lokasi Bentur & Armor:** Tabel lokasi akan bervariasi berdasarkan anatomi makhluk yang berbeda tetapi harus disertakan bahkan untuk humanoid tradisional sebagai cara untuk melacak Armor dan Daya Rusak.

### Pemformatan Blok Statistik Makhluk

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Atribut | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other Catatan | Values and details | 
```


<details>

<summary>Contoh: tabel blok statistik makhluk terformat (dalam kutipan blok) </summary>

> ---
> ### Goblin/Orc
> [Entri MEG](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Nama Makhluk | Goblin/Orc |
> | :-- | :-- |
> | Atribut Kunci | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Poin Aksi | 2 | 
> | Daya Rusak Mod | - |
> | Inisiatif | +11 |
> | Gerak | 6m |
> | Kemampuan | Penglihatan Malam |
> | Skill | Atletik 52%, Berotot 42%, Menipu 57%, Ketahanan 48%, Menghindar 62%, Persepsi 61%, Bela Diri 52%, Tekad 42% |
> | Gaya Tarung | Prajurit (Pedang Pendek, Perisai, Tombak, Katapel) 62% |
> 
> #### Detail Senjata
> 
> | Senjata | Ukuran | Jangkau | Daya Rusak | Armor/HP | Spesial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Pedang Pendek | M | M | 1d6 | 6/8 | |
> | Tombak | M | L | 1d8+1 | 4/5 | |
> | Katapel | L | 10/150/300 | 1d8 | 1/2 | |
> | Perisai | L | S | 1d4 | 4/9 | Melindungi 3 lokasi untuk Menangkis/Menahan Pasif |
> 
> #### Lokasi Bentur & Armor
> 
> | **1d20** | **Lokasi** | **Armor/HP** |
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
## Erata Komunitas

### Typo dan kebingungan

Pengeditan untuk 'membersihkan' teks penulis harus tetap minimal, tetapi typo dan kesalahan lainnya harus diubah langsung tanpa penanda apa pun.


### Panel Info Erata

Jika suatu aturan tertentu terlalu ambigu, tidak lengkap, atau salah, tambahkan catatan Erata Komunitas yang dapat diciutkan.

Jelaskan masalah tersebut dalam huruf miring hanya menggunakan huruf miring tebal untuk judul masalah - _bukan heading h(x)!_ - agar tidak membuat entri sidebar yang membingungkan.

Jika teks pengganti ditambahkan, tempatkan dalam tanda kutip tebal miring, didahului oleh "_Community Errata:_" dalam huruf miring dengan berat normal.

Aturan tambahan, jika diperlukan, harus disajikan dalam teks berat normal.

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

<summary>* Erata Komunitas</summary>

_**Memanjat**_

_Community Errata:_
_**"Armor yang dikenakan menghambat pemanjat sebesar jumlah rata-rata Poin Armor yang dikenakan. Temukan ini dengan menjumlahkan poin Armor yang dikenakan di setiap lokasi dan bagi angka tersebut dengan jumlah lokasi."**_

_Aturan seperti yang tertulis dengan cepat menyebabkan masalah. Mengenakan satu potong Armor 6AP akan mengurangi manusia menjadi Gerak 0, yang berarti manusia yang mengenakan helm baja dan tidak ada yang lain akan terlalu terbebani untuk memanjat sama sekali. Ini tampak sangat membatasi sehingga versi yang diedit disarankan di atas. Ini akan diperbarui jika penulis asli merevisi aturan seperti yang tertulis._

</details>

<details>

<summary>* Erata Komunitas</summary>

_**Gait: Jalan, Lari, Sprint**_

_Versi _Mythras Imperative_ yang diterbitkan tidak memiliki aturan eksplisit untuk bergerak dengan Gait yang berbeda meskipun tercakup dalam buku aturan inti Mythras. Pengali Gait di atas telah ditambahkan sebagai bagian dari Erata Komunitas._

_Jika diperlukan, cukup untuk memperlakukan Gait sebagai berikut:_

- _Gait yang lebih cepat dari Jalan menerapkan pengali pada peringkat Gerak: 3x untuk Lari, 5x untuk Sprint._

- _Saat dalam Gait Lari atau Sprint, karakter tidak dapat mencoba sebagian besar tindakan proaktif seperti menyerang atau merapal mantra. Beberapa pengecualian termasuk..._
  - _Serangan saat menggunakan aturan Mengisi (Charging)._
  - _Menembakkan senjata jarak jauh dengan sifat Berkelahi (Skirmishing)._
- _Sebagai aturan umum, tindakan apa pun yang diizinkan harus diperlakukan satu Tanjakan lebih sulit untuk dilakukan saat Lari, dan dua Tanjakan lebih sulit saat Sprint._


</details>

---
## Peringatan Lain-lain

### Baris kosong / Carriage Return

Sisakan baris kosong di antara berbagai jenis entri. Header, pemisah, tabel, dll. Ini tidak akan terlihat di tampilan membaca tetapi ketidakhadirannya dapat menyebabkan masalah pemformatan.

### Teks tebal atau miring multi-paragraf

Setiap paragraf harus ditandai sebagai teks tebal atau miring. Baris baru di antara paragraf akan merusak pemformatan dan meninggalkan tanda pemformatan yang menggantung.

### Ejaan internasional

Kekuatan yang regresif dan menyedihkan telah memutuskan untuk menghapus semua ejaan Inggris demi versi AS yang secara objektif lebih lemah. Waspadai kata-kata -OUR Inggris: _armour_, _favour_, dll.